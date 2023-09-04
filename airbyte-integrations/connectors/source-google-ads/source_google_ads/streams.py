#
# Copyright (c) 2023 Airbyte, Inc., all rights reserved.
#

import logging
from abc import ABC, abstractmethod
from typing import Any, Iterable, List, Mapping, MutableMapping, Optional

import pendulum
from airbyte_cdk.models import SyncMode
from airbyte_cdk.sources.streams import IncrementalMixin, Stream
from airbyte_cdk.sources.utils.transform import TransformConfig, TypeTransformer
from google.ads.googleads.errors import GoogleAdsException
from google.ads.googleads.v11.errors.types.authorization_error import AuthorizationErrorEnum
from google.ads.googleads.v11.errors.types.request_error import RequestErrorEnum
from google.ads.googleads.v11.services.services.google_ads_service.pagers import SearchPager

from .google_ads import GoogleAds
from .models import Customer


class cyclic_sieve:
    def __init__(self, logger: logging.Logger, fraction: int = 10):
        self._logger = logger
        self._cycle_counter = 0
        self._fraction = fraction

    def __getattr__(self, item):
        if self._cycle_counter % self._fraction == 0:
            return getattr(self._logger, item)
        return self.stub

    def stub(self, *args, **kwargs):
        pass

    def bump(self):
        self._cycle_counter += 1


def parse_dates(stream_slice):
    start_date = pendulum.parse(stream_slice["start_date"])
    end_date = pendulum.parse(stream_slice["end_date"])
    return start_date, end_date


def chunk_date_range(
    start_date: str,
    conversion_window: int,
    end_date: str = None,
    days_of_data_storage: int = None,
    range_days: int = None,
    time_zone=None,
) -> Iterable[Optional[MutableMapping[str, any]]]:
    """
    Returns `start_date` and `end_date` for the given stream_slice.
    If (end_date - start_date) is a big date range (>= 1 month), it can take more than 2 hours to process all the records from the given slice.
    After 2 hours next page tokens will be expired, finally resulting in page token expired error
    Currently this method returns `start_date` and `end_date` with `range_days` difference which is 15 days in most cases.
    """
    start_date = pendulum.parse(start_date, tz=time_zone)
    end_date = pendulum.parse(end_date, tz=time_zone)

    # For some metrics we can only get data not older than N days, it is Google Ads policy
    if days_of_data_storage:
        start_date = max(start_date, pendulum.now(tz=time_zone).subtract(days=days_of_data_storage - conversion_window))

    # As in to return some state when state in abnormal
    if start_date > end_date:
        return [None]

    # applying conversion window
    start_date = start_date.subtract(days=conversion_window)
    slice_start = start_date

    while slice_start.date() <= end_date.date():
        slice_end = min(end_date, slice_start.add(days=range_days - 1))
        yield {
            "start_date": slice_start.to_date_string(),
            "end_date": slice_end.to_date_string(),
        }
        slice_start = slice_end.add(days=1)


class GoogleAdsStream(Stream, ABC):
    CATCH_API_ERRORS = True

    def __init__(self, api: GoogleAds, customers: List[Customer]):
        self.google_ads_client = api
        self.customers = customers
        self.base_sieve_logger = cyclic_sieve(self.logger, 10)

    def get_query(self, stream_slice: Mapping[str, Any]) -> str:
        query = GoogleAds.convert_schema_into_query(schema=self.get_json_schema(), report_name=self.name)
        return query

    def parse_response(self, response: SearchPager) -> Iterable[Mapping]:
        for result in response:
            yield self.google_ads_client.parse_single_result(self.get_json_schema(), result)

    def stream_slices(self, stream_state: Mapping[str, Any] = None, **kwargs) -> Iterable[Optional[Mapping[str, any]]]:
        for customer in self.customers:
            yield {"customer_id": customer.id}

    def read_records(self, sync_mode, stream_slice: Optional[Mapping[str, Any]] = None, **kwargs) -> Iterable[Mapping[str, Any]]:
        self.base_sieve_logger.bump()
        self.base_sieve_logger.info(f"Read records using g-ads client. Stream slice is {stream_slice}")
        if stream_slice is None:
            return []

        customer_id = stream_slice["customer_id"]
        try:
            response_records = self.google_ads_client.send_request(self.get_query(stream_slice), customer_id=customer_id)
            for response in response_records:
                yield from self.parse_response(response)
        except GoogleAdsException as exc:
            exc.customer_id = customer_id
            if not self.CATCH_API_ERRORS:
                raise
            for error in exc.failure.errors:
                if error.error_code.authorization_error == AuthorizationErrorEnum.AuthorizationError.CUSTOMER_NOT_ENABLED:
                    self.base_sieve_logger.error(error.message)
                    continue
                # log and ignore only CUSTOMER_NOT_ENABLED error, otherwise - raise further
                raise


class IncrementalGoogleAdsStream(GoogleAdsStream, IncrementalMixin, ABC):
    days_of_data_storage = None
    cursor_field = "segments.date"
    primary_key = None
    # Date range is set to 15 days, because for conversion_window_days default value is 14.
    # Range less than 15 days will break the integration tests.
    range_days = 15

    def __init__(self, start_date: str, conversion_window_days: int, end_date: str = None, **kwargs):
        self.conversion_window_days = conversion_window_days
        self._start_date = start_date
        self._end_date = end_date
        self._state = {}
        super().__init__(**kwargs)
        self.incremental_sieve_logger = cyclic_sieve(self.logger, 10)

    @property
    def state(self) -> MutableMapping[str, Any]:
        return self._state

    @state.setter
    def state(self, value: MutableMapping[str, Any]):
        self._state.update(value)

    def current_state(self, customer_id, default=None):
        default = default or self.state.get(self.cursor_field)
        return self.state.get(customer_id, {}).get(self.cursor_field) or default

    def stream_slices(self, stream_state: Mapping[str, Any] = None, **kwargs) -> Iterable[Optional[MutableMapping[str, any]]]:
        for customer in self.customers:
            logger = cyclic_sieve(self.logger, 10)
            stream_state = stream_state or {}
            if stream_state.get(customer.id):
                start_date = stream_state[customer.id].get(self.cursor_field) or self._start_date

            # We should keep backward compatibility with the previous version
            elif stream_state.get(self.cursor_field) and len(self.customers) == 1:
                start_date = stream_state.get(self.cursor_field) or self._start_date
            else:
                start_date = self._start_date

            end_date = self._end_date
            logger.info(f"Generating slices for customer {customer.id}. Start date is {start_date}, end date is {end_date}")

            for chunk in chunk_date_range(
                start_date=start_date,
                end_date=end_date,
                conversion_window=self.conversion_window_days,
                days_of_data_storage=self.days_of_data_storage,
                range_days=self.range_days,
                time_zone=customer.time_zone,
            ):
                if chunk:
                    chunk["customer_id"] = customer.id
                logger.info(f"Next slice is {chunk}")
                logger.bump()
                yield chunk

    def read_records(
        self, sync_mode: SyncMode, cursor_field: List[str] = None, stream_slice: MutableMapping[str, Any] = None, **kwargs
    ) -> Iterable[Mapping[str, Any]]:
        """
        This method is overridden to handle GoogleAdsException with EXPIRED_PAGE_TOKEN error code,
        and update `start_date` key in the `stream_slice` with the latest read record's cursor value, then retry the sync.
        """
        self.incremental_sieve_logger.bump()
        while True:
            self.incremental_sieve_logger.info("Starting a while loop iteration")
            customer_id = stream_slice and stream_slice["customer_id"]
            try:
                records = super().read_records(sync_mode, stream_slice=stream_slice)
                for record in records:
                    current_state = self.current_state(customer_id)
                    if current_state:
                        date_in_current_stream = pendulum.parse(current_state)
                        date_in_latest_record = pendulum.parse(record[self.cursor_field])
                        cursor_value = (max(date_in_current_stream, date_in_latest_record)).to_date_string()
                        self.state = {customer_id: {self.cursor_field: cursor_value}}
                        # When large amount of data this log produces so much records so the enire log is not usable
                        # See: https://github.com/airbytehq/oncall/issues/2460
                        # self.incremental_sieve_logger.info(f"Updated state for customer {customer_id}. Full state is {self.state}.")
                        yield record
                        continue
                    self.state = {customer_id: {self.cursor_field: record[self.cursor_field]}}
                    self.incremental_sieve_logger.info(f"Initialized state for customer {customer_id}. Full state is {self.state}.")
                    yield record
                    continue
            except GoogleAdsException as exception:
                self.incremental_sieve_logger.info(f"Caught a GoogleAdsException: {str(exception)}")
                error = next(iter(exception.failure.errors))
                if error.error_code.request_error == RequestErrorEnum.RequestError.EXPIRED_PAGE_TOKEN:
                    start_date, end_date = parse_dates(stream_slice)
                    current_state = self.current_state(customer_id)
                    self.incremental_sieve_logger.info(
                        f"Start date is {start_date}. End date is {end_date}. Current state is {current_state}"
                    )
                    if (end_date - start_date).days == 1:
                        # If range days is 1, no need in retry, because it's the minimum date range
                        self.incremental_sieve_logger.error("Page token has expired.")
                        raise exception
                    elif current_state == stream_slice["start_date"]:
                        # It couldn't read all the records within one day, it will enter an infinite loop,
                        # so raise the error
                        self.incremental_sieve_logger.error("Page token has expired.")
                        raise exception
                    # Retry reading records from where it crushed
                    stream_slice["start_date"] = self.current_state(customer_id, default=stream_slice["start_date"])
                    self.incremental_sieve_logger.info(f"Retry reading records from where it crushed with a modified slice: {stream_slice}")
                else:
                    # raise caught error for other error statuses
                    raise exception
            else:
                # return the control if no exception is raised
                self.incremental_sieve_logger.info("Current slice has been read. Exiting read_records()")
                return

    def get_query(self, stream_slice: Mapping[str, Any] = None) -> str:
        query = GoogleAds.convert_schema_into_query(
            schema=self.get_json_schema(),
            report_name=self.name,
            from_date=stream_slice.get("start_date"),
            to_date=stream_slice.get("end_date"),
            cursor_field=self.cursor_field,
        )
        return query


class Accounts(IncrementalGoogleAdsStream):
    """
    Accounts stream: https://developers.google.com/google-ads/api/fields/v11/customer
    """

    primary_key = ["customer.id", "segments.date"]


class AccountLabels(GoogleAdsStream):
    """
    Account Labels stream: https://developers.google.com/google-ads/api/fields/v14/customer_label
    """

    primary_key = ["customer_label.resource_name"]


class ServiceAccounts(GoogleAdsStream):
    """
    This stream is intended to be used as a service class, not exposed to a user
    """

    CATCH_API_ERRORS = False
    primary_key = ["customer.id"]


class Campaigns(IncrementalGoogleAdsStream):
    """
    Campaigns stream: https://developers.google.com/google-ads/api/fields/v11/campaign
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["campaign.id", "segments.date", "segments.hour"]


class CampaignBudget(IncrementalGoogleAdsStream):
    """
    Campaigns stream: https://developers.google.com/google-ads/api/fields/v13/campaign_budget
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["campaign_budget.id", "segments.date"]


class CampaignBiddingStrategies(IncrementalGoogleAdsStream):
    """
    Campaign Bidding Strategies stream: https://developers.google.com/google-ads/api/fields/v14/campaign
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["campaign.id", "bidding_strategy.id", "segments.date"]


class CampaignLabels(GoogleAdsStream):
    """
    Campaign labels stream: https://developers.google.com/google-ads/api/fields/v11/campaign_label
    """

    # Note that this is a string type. Google doesn't return a more convenient identifier.
    primary_key = ["campaign_label.resource_name"]


class AdGroups(IncrementalGoogleAdsStream):
    """
    AdGroups stream: https://developers.google.com/google-ads/api/fields/v11/ad_group
    """

    primary_key = ["ad_group.id", "segments.date"]


class AdGroupLabels(GoogleAdsStream):
    """
    Ad Group Labels stream: https://developers.google.com/google-ads/api/fields/v11/ad_group_label
    """

    # Note that this is a string type. Google doesn't return a more convenient identifier.
    primary_key = ["ad_group_label.resource_name"]


class AdGroupBiddingStrategies(IncrementalGoogleAdsStream):
    """
    Ad Group Bidding Strategies stream: https://developers.google.com/google-ads/api/fields/v14/ad_group
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["ad_group.id", "bidding_strategy.id", "segments.date"]


class AdGroupCriterionLabels(GoogleAdsStream):
    """
    Ad Group Criterion Labels stream: https://developers.google.com/google-ads/api/fields/v14/ad_group_criterion_label
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["ad_group_criterion_label.resource_name"]


class AdListingGroupCriterions(GoogleAdsStream):
    """
    Ad Group Criterions stream: https://developers.google.com/google-ads/api/fields/v14/ad_group_criterion
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["ad_group.id", "ad_group_criterion.criterion_id"]


class AdGroupAds(IncrementalGoogleAdsStream):
    """
    AdGroups stream: https://developers.google.com/google-ads/api/fields/v11/ad_group_ad
    """

    primary_key = ["ad_group_ad.ad.id", "segments.date"]


class AdGroupAdLabels(GoogleAdsStream):
    """
    Ad Group Ad Labels stream: https://developers.google.com/google-ads/api/fields/v11/ad_group_ad_label
    """

    # Note that this is a string type. Google doesn't return a more convenient identifier.
    primary_key = ["ad_group_ad_label.resource_name"]


class AccountPerformanceReport(IncrementalGoogleAdsStream):
    """
    AccountPerformanceReport stream: https://developers.google.com/google-ads/api/fields/v11/customer
    Google Ads API field mapping: https://developers.google.com/google-ads/api/docs/migration/mapping#account_performance
    """


class AdGroupAdReport(IncrementalGoogleAdsStream):
    """
    AdGroupAdReport stream: https://developers.google.com/google-ads/api/fields/v11/ad_group_ad
    Google Ads API field mapping: https://developers.google.com/google-ads/api/docs/migration/mapping#ad_performance
    """


class DisplayKeywordPerformanceReport(IncrementalGoogleAdsStream):
    """
    DisplayKeywordPerformanceReport stream: https://developers.google.com/google-ads/api/fields/v11/display_keyword_view
    Google Ads API field mapping: https://developers.google.com/google-ads/api/docs/migration/mapping#display_keyword_performance
    """


class DisplayTopicsPerformanceReport(IncrementalGoogleAdsStream):
    """
    DisplayTopicsPerformanceReport stream: https://developers.google.com/google-ads/api/fields/v11/topic_view
    Google Ads API field mapping: https://developers.google.com/google-ads/api/docs/migration/mapping#display_topics_performance
    """


class ShoppingPerformanceReport(IncrementalGoogleAdsStream):
    """
    ShoppingPerformanceReport stream: https://developers.google.com/google-ads/api/fields/v11/shopping_performance_view
    Google Ads API field mapping: https://developers.google.com/google-ads/api/docs/migration/mapping#shopping_performance
    """


class UserLocationReport(IncrementalGoogleAdsStream):
    """
    UserLocationReport stream: https://developers.google.com/google-ads/api/fields/v11/user_location_view
    Google Ads API field mapping: https://developers.google.com/google-ads/api/docs/migration/mapping#geo_performance
    """


class GeographicReport(IncrementalGoogleAdsStream):
    """
    UserLocationReport stream: https://developers.google.com/google-ads/api/fields/v11/geographic_view
    """


class KeywordReport(IncrementalGoogleAdsStream):
    """
    UserLocationReport stream: https://developers.google.com/google-ads/api/fields/v11/keyword_view
    """


class ClickView(IncrementalGoogleAdsStream):
    """
    ClickView stream: https://developers.google.com/google-ads/api/reference/rpc/v11/ClickView
    """

    primary_key = ["click_view.gclid", "segments.date", "segments.ad_network_type"]
    days_of_data_storage = 90
    range_days = 1


class UserInterest(GoogleAdsStream):
    """
    Ad Group Ad Labels stream: https://developers.google.com/google-ads/api/fields/v11/ad_group_ad_label
    """

    primary_key = ["user_interest.user_interest_id"]


class Audience(GoogleAdsStream):
    """
    Ad Group Ad Labels stream: https://developers.google.com/google-ads/api/fields/v11/ad_group_ad_label
    """

    primary_key = ["audience.id"]


class Labels(GoogleAdsStream):
    """
    Labels stream: https://developers.google.com/google-ads/api/fields/v14/label
    """

    primary_key = ["label.id"]


class ChangeStatus(IncrementalGoogleAdsStream):
    cursor_field = "change_status.last_change_date_time"
    range_days = 15
    days_of_data_storage = 90

    def __init__(self, **kwargs):
        # date range is not used for these streams, only state is used to sync recent records, otherwise full refresh
        super().__init__(start_date=None, conversion_window_days=1, end_date=None, **kwargs)

    def get_query(self, stream_slice: Mapping[str, Any]) -> str:
        query = GoogleAds.convert_schema_into_query(
            schema=self.get_json_schema(),
            report_name=self.name,
            from_date=stream_slice.get("start_date"),
            to_date=stream_slice.get("end_date"),
            cursor_field=self.cursor_field,
            resource_type=stream_slice.get("resource_type"),
            limit=10000,
        )
        return query


class IncrementalEventsStream(GoogleAdsStream, IncrementalMixin, ABC):
    def __init__(self, parent_stream=None, **kwargs):
        self.parent_stream = parent_stream
        self.parent_stream_name: str = self.parent_stream.name
        self.parent_cursor_field: str = self.parent_stream.cursor_field
        self.parent_sync_mode: SyncMode = SyncMode.incremental

        super().__init__(**kwargs)
        self.incremental_sieve_logger = cyclic_sieve(self.logger, 10)

        self._state = {self.parent_stream_name: {customer.id: None for customer in self.customers}}

    @property
    @abstractmethod
    def id_field(self) -> str:
        "Name of field used for getting records by id"
        pass

    @property
    @abstractmethod
    def parent_id_field(self) -> str:
        "Field name of id from parent record"
        pass

    @property
    @abstractmethod
    def resource_type(self) -> str:
        "Resource type used for filtering parent records"
        pass

    @property
    def state(self) -> MutableMapping[str, Any]:
        return self._state

    @state.setter
    def state(self, value: MutableMapping[str, Any]):
        self._state.update(value)
        self.parent_stream.state = self._state.get(self.parent_stream_name, {})

    def current_state(self, customer_id, default=None):
        return self.parent_stream.current_state(customer_id, default)

    def stream_slices(self, stream_state: Mapping[str, Any] = None, **kwargs) -> Iterable[Optional[MutableMapping[str, any]]]:
        slices_generator = self.read_parent_stream(self.parent_sync_mode, self.parent_cursor_field, stream_state)
        yield from slices_generator

    def read_parent_stream(
        self, sync_mode: SyncMode, cursor_field: Optional[str], stream_state: Mapping[str, Any]
    ) -> Iterable[Mapping[str, Any]]:
        for parent_slice in self.parent_stream.stream_slices(
            sync_mode=sync_mode, cursor_field=cursor_field, stream_state=stream_state.get(self.parent_stream_name)
        ):
            customer_id = parent_slice.get("customer_id")
            child_slice = {"customer_id": customer_id, "updated_ids": set(), "deleted_ids": set(), "id_to_time": dict()}
            if not self.current_state(customer_id):
                yield child_slice
                continue

            parent_slice["resource_type"] = self.resource_type
            stream_is_updated = False
            for parent_record in self.parent_stream.read_records(sync_mode=sync_mode, cursor_field=cursor_field, stream_slice=parent_slice):
                substream_id = parent_record.get(self.parent_id_field)
                if not substream_id:
                    continue
                stream_is_updated = True
                child_slice["id_to_time"][substream_id] = parent_record[self.parent_cursor_field]
                # Add ids to set of changed or deleted items
                if parent_record.get("change_status.resource_status") == "REMOVED":
                    child_slice["deleted_ids"].add(substream_id)
                else:
                    child_slice["updated_ids"].add(substream_id)

            # update parent state in child stream
            if stream_is_updated:
                self._state = {self.parent_stream_name: self.parent_stream.state}
            else:
                # full refresh sync without parent stream
                self._state = {
                    self.parent_stream_name: {
                        customer_id: {
                            self.parent_cursor_field: pendulum.today().start_of("day").format("YYYY-MM-DD HH:mm:ss.SSSSSS")
                        }
                    }
                }

            if stream_is_updated:
                yield child_slice
            else:
                yield from []

    def read_records(
        self, sync_mode: SyncMode, cursor_field: List[str] = None, stream_slice: MutableMapping[str, Any] = None, **kwargs
    ) -> Iterable[Mapping[str, Any]]:
        """
        This method is overridden to read records using parent stream
        """
        self.incremental_sieve_logger.bump()

        self.incremental_sieve_logger.info(f"Started reading records for slice: {stream_slice}")

        records = super().read_records(sync_mode, stream_slice=stream_slice)
        for record in records:
            if record.get(self.primary_key[0]) in stream_slice.get("id_to_time"):
                record[self.cursor_field] = stream_slice["id_to_time"][record[self.primary_key[0]]]
            else:
                record[self.cursor_field] = None
            yield record

        # update parent state in child stream
        if self.parent_stream.state:
            self._state = {self.parent_stream_name: self.parent_stream.state}
        else:
            # full refresh sync without parent stream
            self._state = {self.parent_stream_name: {self.parent_cursor_field: pendulum.today().start_of("day").format("YYYY-MM-DD")}}

        # yield deleted items
        record_fields = GoogleAds.get_fields_from_schema(self.get_json_schema())
        deleted_record = {field_: None for field_ in record_fields}
        for id_ in stream_slice.get("deleted_ids", []):
            deleted_record[self.id_field] = id_
            if deleted_record.get(self.primary_key[0]) in stream_slice.get("id_to_time"):
                deleted_record[self.cursor_field] = stream_slice["id_to_time"][deleted_record[self.primary_key[0]]]
            else:
                deleted_record[self.cursor_field] = None
            yield deleted_record

    def get_query(self, stream_slice: Mapping[str, Any] = None) -> str:
        query = GoogleAds.convert_schema_into_query(
            schema=self.get_json_schema(), report_name=self.name, id_field=self.id_field, id_list=stream_slice.get("updated_ids")
        )
        return query


class AdGroupCriterions(IncrementalEventsStream):
    """
    Ad Group Criterions stream: https://developers.google.com/google-ads/api/fields/v14/ad_group_criterion
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["ad_group_criterion.resource_name"]
    parent_id_field = "change_status.ad_group_criterion"
    id_field = "ad_group_criterion.resource_name"
    resource_type = "AD_GROUP_CRITERION"
    cursor_field = "change_status.last_change_date_time"


class CampaignCriterion(IncrementalEventsStream):
    """
    Campaign Criterion stream: https://developers.google.com/google-ads/api/fields/v14/campaign_criterion
    """

    transformer = TypeTransformer(TransformConfig.DefaultSchemaNormalization)
    primary_key = ["campaign_criterion.resource_name"]
    parent_id_field = "change_status.campaign_criterion"
    id_field = "campaign_criterion.resource_name"
    resource_type = "CAMPAIGN_CRITERION"
    cursor_field = "change_status.last_change_date_time"
