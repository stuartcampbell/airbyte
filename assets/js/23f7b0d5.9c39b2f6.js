"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[14639],{29706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},o="Bing Ads",p={unversionedId:"integrations/sources/bing-ads",id:"integrations/sources/bing-ads",title:"Bing Ads",description:"This page contains the setup guide and reference information for the Bing Ads source connector.",source:"@site/../docs/integrations/sources/bing-ads.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/bing-ads",permalink:"/integrations/sources/bing-ads",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/bing-ads.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"BigQuery",permalink:"/integrations/sources/bigquery"},next:{title:"Braintree",permalink:"/integrations/sources/braintree"}},l={},s=[{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Bing Ads",id:"step-1-set-up-bing-ads",level:3},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Basic streams",id:"basic-streams",level:3},{value:"Report Streams",id:"report-streams",level:3},{value:"Report aggregation",id:"report-aggregation",level:3},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bing-ads"},"Bing Ads"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Bing Ads source connector."),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-bing-ads"},"Step 1: Set up Bing Ads"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-register?view=bingads-13"},"Register your application")," in the Azure portal."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-consent?view=bingads-13l"},"Request user consent")," to get the authorization code."),(0,n.kt)("li",{parentName:"ol"},"Use the authorization code to ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/authentication-oauth-get-tokens?view=bingads-13"},"get a refresh token"),".")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The refresh token expires in 90 days. Repeat the authorization process to get a new refresh token. The full authentication process described ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#access-token"},"here"),".\nPlease be sure to authenticate with the email (personal or work) that you used to sign in to the Bing ads/Microsoft ads platform.")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Get your ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/guides/get-started?view=bingads-13#get-developer-token"},"Microsoft developer token"),"."),(0,n.kt)("li",{parentName:"ol"},"If your OAuth app has a custom tenant and you cannot use Microsoft\u2019s recommended common tenant, use the custom tenant in the ",(0,n.kt)("strong",{parentName:"li"},"Tenant ID")," field when you set up the connector.")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The tenant is used in the authentication URL, for example: ",(0,n.kt)("inlineCode",{parentName:"p"},"https://login.microsoftonline.com/<tenant>/oauth2/v2.0/authorize"))),(0,n.kt)("h3",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.com/workspaces"},"Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Bing Ads")," from the ",(0,n.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Tenant ID"),", enter the custom tenant or use the common tenant."),(0,n.kt)("li",{parentName:"ol"},"Add the developer token from ",(0,n.kt)("a",{parentName:"li",href:"#step-1-set-up-bing-ads"},"Step 1"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Replication Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Lookback window")," (also known as attribution or conversion window) enter the number of ",(0,n.kt)("strong",{parentName:"li"},"days")," to look into the past. If your conversion window has an hours/minutes granularity, round it up to the number of days exceeding. If you're not using performance report streams in incremental mode, let it with 0 default value."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your Bing Ads account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and authorize the Bing Ads account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log in to your Airbyte Open Source account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Bing Ads")," from the ",(0,n.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter a name for your source."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Tenant ID"),", enter the custom tenant or use the common tenant."),(0,n.kt)("li",{parentName:"ol"},"Enter the ",(0,n.kt)("strong",{parentName:"li"},"Client ID"),", ",(0,n.kt)("strong",{parentName:"li"},"Client Secret"),", ",(0,n.kt)("strong",{parentName:"li"},"Refresh Token"),", and ",(0,n.kt)("strong",{parentName:"li"},"Developer Token")," from ",(0,n.kt)("a",{parentName:"li",href:"#step-1-set-up-bing-ads"},"Step 1"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Replication Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. If this field is blank, Airbyte will replicate all data."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Lookback window")," (also known as attribution or conversion window) enter the number of ",(0,n.kt)("strong",{parentName:"li"},"days")," to look into the past. If your conversion window has an hours/minutes granularity, round it up to the number of days exceeding. If you're not using performance report streams in incremental mode, let it with 0 default value."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Bing Ads source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-overwrite/"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append-deduped"},"Incremental - Append + Deduped"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"The Bing Ads source connector supports the following streams. For more information, see the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/advertising/guides/?view=bingads-13"},"Bing Ads API"),"."),(0,n.kt)("h3",{id:"basic-streams"},"Basic streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/customer-management-service/searchaccounts?view=bingads-13"},"accounts")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/campaign-management-service/getadgroupsbycampaignid?view=bingads-13"},"ad_groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/campaign-management-service/getadsbyadgroupid?view=bingads-13"},"ads")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/campaign-management-service/getcampaignsbyaccountid?view=bingads-13"},"campaigns"))),(0,n.kt)("h3",{id:"report-streams"},"Report Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13"},"account_performance_report_hourly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13"},"account_performance_report_daily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13"},"account_performance_report_weekly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/accountperformancereportrequest?view=bingads-13"},"account_performance_report_monthly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13"},"ad_group_performance_report_hourly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13"},"ad_group_performance_report_daily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13"},"ad_group_performance_report_weekly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adgroupperformancereportrequest?view=bingads-13"},"ad_group_performance_report_monthly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13"},"ad_performance_report_hourly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13"},"ad_performance_report_daily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13"},"ad_performance_report_weekly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/adperformancereportrequest?view=bingads-13"},"ad_performance_report_monthly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/advertising/reporting-service/geographicperformancereportrequest?view=bingads-13"},"geographic_performance_report_hourly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/advertising/reporting-service/geographicperformancereportrequest?view=bingads-13"},"geographic_performance_report_daily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/advertising/reporting-service/geographicperformancereportrequest?view=bingads-13"},"geographic_performance_report_weekly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/advertising/reporting-service/geographicperformancereportrequest?view=bingads-13"},"geographic_performance_report_monthly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/budgetsummaryreportrequest?view=bingads-13"},"budget_summary_report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13"},"campaign_performance_report_hourly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13"},"campaign_performance_report_daily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13"},"campaign_performance_report_weekly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/campaignperformancereportrequest?view=bingads-13"},"campaign_performance_report_monthly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13"},"keyword_performance_report_hourly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13"},"keyword_performance_report_daily")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13"},"keyword_performance_report_weekly")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/keywordperformancereportrequest?view=bingads-13"},"keyword_performance_report_monthly"))),(0,n.kt)("h3",{id:"report-aggregation"},"Report aggregation"),(0,n.kt)("p",null,"All reports synced by this connector can be ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/advertising/reporting-service/reportaggregation?view=bingads-13"},"aggregated")," using hourly, daily, weekly, or monthly time windows."),(0,n.kt)("p",null,"For example, if you select a report with daily aggregation, the report will contain a row for each day for the duration of the report. Each row will indicate the number of impressions recorded on that day."),(0,n.kt)("p",null,"A report's aggregation window is indicated in its name. For example, ",(0,n.kt)("inlineCode",{parentName:"p"},"account_performance_report_hourly")," is the Account Performance Reported aggregated using an hourly window."),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The Bing Ads API limits the number of requests for all Microsoft Advertising clients. You can find detailed info ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/advertising/guides/services-protocol?view=bingads-13#throttling"},"here"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-08-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27619"},"27619")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Geographic Performance Report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-06-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/27619"},"27619")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Retry request after facing temporary name resolution error.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25996"},"25996")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement a retry logic if SSL certificate validation fails.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-05-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/24223"},"24223")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add CampaignLabels report column in campaign performance report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-04-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25668"},"25668")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add undeclared fields to accounts, campaigns, campaign_performance_report, keyword_performance_report and account_performance_report streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23663"},"23663")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add lookback window for performance reports in incremental mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23868"},"23868")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add dimensional-type columns for reports.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22073"},"22073")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix null values in the ",(0,n.kt)("inlineCode",{parentName:"td"},"Keyword")," column of ",(0,n.kt)("inlineCode",{parentName:"td"},"keyword_performance_report")," streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20005"},"20005")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"Keyword")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"keyword_performance_report")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17873"},"17873")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix: added missing campaign types in (Audience, Shopping and DynamicSearchAds) in campaigns stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-03"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17505"},"17505")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix: limit cache size for ServiceClient instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17403"},"17403")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix: limit cache size for ReportingServiceManager instances")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17386"},"17386")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16335"},"16335")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added backoff for socket.timeout")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15684"},"15684")," (published in ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15987"},"15987"),")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed log messages being unreadable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15602"},"15602")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug caused Hourly Reports to crash due to invalid fields set")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14862"},"14862")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added missing columns")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13801"},"13801")),(0,n.kt)("td",{parentName:"tr",align:"left"},"All reports ",(0,n.kt)("inlineCode",{parentName:"td"},"hourly/daily/weekly/monthly")," will be generated by default, these options are removed from input configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12937"},"12937")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added OAuth2.0 authentication method, removed ",(0,n.kt)("inlineCode",{parentName:"td"},"redirect_uri")," from input configuration")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12500"},"12500")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve input configuration copy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11652"},"11652")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Rebump attempt after DockerHub failure at registring the 0.1.4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11311"},"11311")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added optional Redirect URI & Tenant ID to spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9510"},"9510")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed broken dependency that blocked connector's operations")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5750"},"5750")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added reporting streams",")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4911"},"4911")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release supported core streams ","(","Accounts, Campaigns, Ads, AdGroups",")")))))}c.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return r?a.createElement(g,o(o({ref:t},m),{},{components:r})):a.createElement(g,o({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);