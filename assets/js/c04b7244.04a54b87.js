"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[31195],{21440:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="vertica",s={unversionedId:"integrations/destinations/vertica",id:"integrations/destinations/vertica",title:"vertica",description:"This page guides you through the process of setting up the vertica destination connector.",source:"@site/../docs/integrations/destinations/vertica.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/vertica",permalink:"/integrations/destinations/vertica",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/vertica.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Typesense",permalink:"/integrations/destinations/typesense"},next:{title:"Weaviate",permalink:"/integrations/destinations/weaviate"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configure Network Access",id:"configure-network-access",level:4},{value:"Step 1: Set up Vertica",id:"step-1-set-up-vertica",level:2},{value:"<strong>Permissions</strong>",id:"permissions",level:4},{value:"Step 2: Set up the Vertica connector in Airbyte",id:"step-2-set-up-the-vertica-connector-in-airbyte",level:2},{value:"Target Database",id:"target-database",level:4},{value:"Naming Conventions",id:"naming-conventions",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Schema map",id:"schema-map",level:2},{value:"Output Schema",id:"output-schema",level:4},{value:"Changelog",id:"changelog",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vertica"},"vertica"),(0,r.kt)("p",null,"This page guides you through the process of setting up the vertica destination connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use the Vertica destination, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A V\nertica server version 11.0 or above")),(0,r.kt)("p",null,"Airbyte Cloud only supports connecting to your Vertica instances with SSL or TLS encryption. TLS is\nused by default. Other than that, you can proceed with the open-source instructions below."),(0,r.kt)("p",null,"You'll need the following information to configure the Vertica destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")," - The host name of the server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Port")," - The port number the server is listening on. Defaults to the VSQL\u2122 standard port number (5433)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Schema Name")," - Specify the schema (or several schemas separated by commas) to be set in the search-path. These schemas will be used to resolve unqualified object names used in statements executed over this connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Database")," - The database name. The default is to connect to a database with the same name as the user name."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JDBC URL Params")," (optional)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.vertica.com/docs/12.0.4/HTML/Content/Authoring/ConnectingToVertica/ClientJDBC/JDBCConnectionProperties.htm"},"Refer to this guide for more details")),(0,r.kt)("h4",{id:"configure-network-access"},"Configure Network Access"),(0,r.kt)("p",null,"Make sure your Vertica database can be accessed by Airbyte. If your database is within a VPC, you\nmay need to allow access from the IP you're using to expose Airbyte."),(0,r.kt)("h2",{id:"step-1-set-up-vertica"},"Step 1: Set up Vertica"),(0,r.kt)("h4",{id:"permissions"},(0,r.kt)("strong",{parentName:"h4"},"Permissions")),(0,r.kt)("p",null,"You need a Vertica user with the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can create tables and write rows."),(0,r.kt)("li",{parentName:"ul"},"can create schemas e.g:")),(0,r.kt)("p",null,"You can create such a user by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE USER airbyte_user WITH PASSWORD '<password>';\nGRANT CREATE, TEMPORARY ON DATABASE <database> TO airbyte_user;\n")),(0,r.kt)("p",null,"You can also use a pre-existing user but we highly recommend creating a dedicated user for Airbyte."),(0,r.kt)("h2",{id:"step-2-set-up-the-vertica-connector-in-airbyte"},"Step 2: Set up the Vertica connector in Airbyte"),(0,r.kt)("h4",{id:"target-database"},"Target Database"),(0,r.kt)("p",null,"You will need to choose an existing database or create a new database that will be used to store\nsynced data from Airbyte."),(0,r.kt)("h2",{id:"naming-conventions"},"Naming Conventions"),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://www.vertica.com/docs/12.0.x/HTML/Content/Authoring/ConnectingToVertica/ClientJDBC/ExecutingQueriesThroughJDBC.htm?tocpath=Connecting%20to%20Vertica%7CClient%20Libraries%7CProgramming%20JDBC%20Client%20Applications%7C_____4"},"Vertica SQL Identifiers syntax"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SQL identifiers and key words must begin with a letter ","(","a-z, but also letters with diacritical\nmarks and non-Latin letters",")"," or an underscore ","(","_",")",".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Subsequent characters in an identifier or key word can be letters, underscores, digits ","(","0-9",")",", or\ndollar signs ","(","$",")","."),(0,r.kt)("p",{parentName:"li"},"Note that dollar signs are not allowed in identifiers according to the SQL standard,\nso their use might render applications less portable. The SQL standard will not define a key word\nthat contains digits or starts or ends with an underscore, so identifiers of this form are safe\nagainst possible conflict with future extensions of the standard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The system uses no more than NAMEDATALEN-1 bytes of an identifier; longer names can be written in\ncommands, but they will be truncated. By default, NAMEDATALEN is 64 so the maximum identifier\nlength is 63 bytes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quoted identifiers can contain any character, except the character with code zero. ","(","To include a\ndouble quote, write two double quotes.",")"," This allows constructing table or column names that would\notherwise not be possible, such as ones containing spaces or ampersands. The length limitation\nstill applies.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Quoting an identifier also makes it case-sensitive, whereas unquoted names are always folded to\nlower case.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In order to make your applications portable and less error-prone, use consistent quoting with each name (either always quote it or never quote it)."))),(0,r.kt)("p",null,"Note, that Airbyte Vertica destination will create tables and schemas using the Unquoted\nidentifiers when possible or fallback to Quoted Identifiers if the names are containing special\ncharacters."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cloud.airbyte.com/workspaces"},"Log into your Airbyte Cloud")," account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the left navigation bar, click ",(0,r.kt)("strong",{parentName:"p"},"Destinations"),". In the top-right corner, click ",(0,r.kt)("strong",{parentName:"p"},"new destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the destination page, enter the name for the Vertica connector\nand select ",(0,r.kt)("strong",{parentName:"p"},"Vertica")," from the Destination type dropdown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter a name for your source.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For the ",(0,r.kt)("strong",{parentName:"p"},"Host"),", ",(0,r.kt)("strong",{parentName:"p"},"Port"),", and ",(0,r.kt)("strong",{parentName:"p"},"DB Name"),", enter the hostname, port number, and name for your Vertica database.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"List the ",(0,r.kt)("strong",{parentName:"p"},"Default Schemas"),"."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The schema names are case sensitive. The 'public' schema is set by default. Multiple schemas may be used at one time. No schemas set explicitly - will sync all of existing."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password"),", enter the username and password you created in ",(0,r.kt)("a",{parentName:"p",href:"#step-1-optional-create-a-dedicated-read-only-user"},"Step 1"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For Airbyte Open Source, toggle the switch to connect using SSL. For Airbyte Cloud uses SSL by default.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For SSL Modes, select:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"disable")," to disable encrypted communication between Airbyte and the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"allow")," to enable encrypted communication only when required by the source"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"prefer")," to allow unencrypted communication only when the source doesn't support encryption"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"require")," to always require encryption. Note: The connection will fail if the source doesn't support encryption."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"verify-ca")," to always require encryption and verify that the source has a valid SSL certificate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"verify-full")," to always require encryption and verify the identity of the source"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To customize the JDBC connection beyond common options, specify additional supported ",(0,r.kt)("a",{parentName:"p",href:"https://www.vertica.com/docs/12.0.x/HTML/Content/Authoring/ConnectingToVertica/ClientJDBC/JDBCConnectionProperties.htm"},"JDBC URL parameters")," as key-value pairs separated by the symbol & in the ",(0,r.kt)("strong",{parentName:"p"},"JDBC URL Parameters (Advanced)")," field."),(0,r.kt)("p",{parentName:"li"},"Example: key1=value1&key2=value2&key3=value3"),(0,r.kt)("p",{parentName:"li"},"These parameters will be added at the end of the JDBC URL that the AirByte will use to connect to your Vertica database."),(0,r.kt)("p",{parentName:"li"},"The connector now supports ",(0,r.kt)("inlineCode",{parentName:"p"},"connectTimeout")," and defaults to 60 seconds. Setting connectTimeout to 0 seconds will set the timeout to the longest time available."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Do not use the following keys in JDBC URL Params field as they will be overwritten by Airbyte:\n",(0,r.kt)("inlineCode",{parentName:"p"},"currentSchema"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"user"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"password"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"ssl"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"sslmode"),"."),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"This is an advanced configuration option. Users are advised to use it with caution."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For SSH Tunnel Method, select:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"No Tunnel")," for a direct connection to the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"SSH Key Authentication")," to use an RSA Private as your secret for establishing the SSH tunnel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password Authentication")," to use a password as your secret for establishing the SSH tunnel")),(0,r.kt)("admonition",{parentName:"li",type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Since Airbyte Cloud requires encrypted communication, select ",(0,r.kt)("strong",{parentName:"p"},"SSH Key Authentication")," or ",(0,r.kt)("strong",{parentName:"p"},"Password Authentication")," if you selected ",(0,r.kt)("strong",{parentName:"p"},"disable"),", ",(0,r.kt)("strong",{parentName:"p"},"allow"),", or ",(0,r.kt)("strong",{parentName:"p"},"prefer")," as the ",(0,r.kt)("strong",{parentName:"p"},"SSL Mode"),"; otherwise, the connection will fail."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Set up destination"),"."))),(0,r.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,r.kt)("p",null,"The Vertica destination connector supports the\nfollowing",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"schema-map"},"Schema map"),(0,r.kt)("h4",{id:"output-schema"},"Output Schema"),(0,r.kt)("p",null,"Each stream will be mapped to a separate table in Vertica. Each table will contain 3 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in\nVertica is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source.\nThe column type in Vertica is ",(0,r.kt)("inlineCode",{parentName:"li"},"TIMESTAMP WITH TIME ZONE"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in Vertica\nis ",(0,r.kt)("inlineCode",{parentName:"li"},"JSONB"),".")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2023-05-29"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/25682"},"#","25682")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Add Vertica Destination")))))}m.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);