"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[9112],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55530:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=["components"],l={},s="Updating Documentation",u={unversionedId:"contributing-to-airbyte/updating-documentation",id:"contributing-to-airbyte/updating-documentation",title:"Updating Documentation",description:"Documentation is written as Markdown files and stored in our Github repository.",source:"@site/../docs/contributing-to-airbyte/updating-documentation.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/updating-documentation",permalink:"/contributing-to-airbyte/updating-documentation",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/updating-documentation.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Introduction",permalink:"/contributing-to-airbyte/gradle-dependency-update"},next:{title:"Templates",permalink:"/contributing-to-airbyte/templates/"}},p={},c=[{value:"Workflow for updating docs",id:"workflow-for-updating-docs",level:2},{value:"Modify in the Github UI",id:"modify-in-the-github-ui",level:3},{value:"Modify using Git",id:"modify-using-git",level:3},{value:"Sidebar updates",id:"sidebar-updates",level:3},{value:"Testing Changes",id:"testing-changes",level:3},{value:"Deploying the docs website",id:"deploying-the-docs-website",level:3},{value:"Documentation Best Practices",id:"documentation-best-practices",level:2},{value:"READMEs",id:"readmes",level:3},{value:"Changelogs",id:"changelogs",level:3},{value:"Connectors",id:"connectors",level:4},{value:"Source code comments",id:"source-code-comments",level:3},{value:"Issues &amp; Pull Requests",id:"issues--pull-requests",level:3},{value:"Titles",id:"titles",level:4},{value:"Descriptions",id:"descriptions",level:4}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"updating-documentation"},"Updating Documentation"),(0,o.kt)("p",null,"Documentation is written as ",(0,o.kt)("a",{parentName:"p",href:"https://guides.github.com/features/mastering-markdown/"},"Markdown")," files and stored in our Github repository."),(0,o.kt)("h2",{id:"workflow-for-updating-docs"},"Workflow for updating docs"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Modify docs using Git or the Github UI ","(","All docs live in the ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/")," folder in the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"Airbyte repository"),")"),(0,o.kt)("li",{parentName:"ol"},"If you're adding new files, update ",(0,o.kt)("inlineCode",{parentName:"li"},"docs/SUMMARY.md"),"."),(0,o.kt)("li",{parentName:"ol"},"Create a Pull Request")),(0,o.kt)("h3",{id:"modify-in-the-github-ui"},"Modify in the Github UI"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Directly edit the docs you want to edit ",(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/managing-files-in-a-repository/managing-files-on-github/editing-files-in-your-repository"},"in the Github UI")),(0,o.kt)("li",{parentName:"ol"},"Create a Pull Request")),(0,o.kt)("h3",{id:"modify-using-git"},"Modify using Git"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/getting-started-with-github/fork-a-repo"},"Fork")," the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the fork on your workstation:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:{YOUR_USERNAME}/airbyte.git\ncd airbyte\n")),(0,o.kt)("p",{parentName:"li"},"Or"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/{YOUR_USERNAME}/airbyte.git\ncd airbyte\n")),(0,o.kt)("p",{parentName:"li"},"While cloning on Windows, you might encounter errors about long filenames. Refer to the instructions ",(0,o.kt)("a",{parentName:"p",href:"/deploying-airbyte/local-deployment#handling-long-filename-error"},"here")," to correct it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Modify the documentation.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a pull request"))),(0,o.kt)("h3",{id:"sidebar-updates"},"Sidebar updates"),(0,o.kt)("p",null,"To edit the sidebar you must ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/docusaurus/sidebars.js"},"edit this JSON in this Javascript file"),"."),(0,o.kt)("h3",{id:"testing-changes"},"Testing Changes"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can run a copy of the website locally to test how your changes will look in production"),(0,o.kt)("li",{parentName:"ul"},"This is not necessary for smaller changes, but is suggested for large changes and ",(0,o.kt)("strong",{parentName:"li"},"any")," change to the sidebar, as the JSON will blow up if we misplace a comma."),(0,o.kt)("li",{parentName:"ul"},"You will need ",(0,o.kt)("a",{parentName:"li",href:"https://yarnpkg.com"},"yarn")," installed locally to build docusaurus"),(0,o.kt)("li",{parentName:"ul"},"Run the following commands")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd docusaurus\nyarn install\nyarn build\nyarn serve\n")),(0,o.kt)("p",null,"You can now navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," to see your changes.  You can stop the running server in OSX/Linux by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"control-c")," in the terminal running the server"),(0,o.kt)("h3",{id:"deploying-the-docs-website"},"Deploying the docs website"),(0,o.kt)("p",null,"We use Github Pages for hosting this docs website, and Docusaurus as the docs framework.  An ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/runbooks/blob/master/deploying_and_reverting_docs.md"},"internal guide for deployment lives here"),"."),(0,o.kt)("p",null,"The source code for the docs lives in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/tree/master/docs"},"airbyte monorepo's ",(0,o.kt)("inlineCode",{parentName:"a"},"docs/")," directory"),". To publish the updated docs on this website after you've committed a change to the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/")," markdown files, it is required to locally run a manual publish flow. Locally run ",(0,o.kt)("inlineCode",{parentName:"p"},"./tools/bin/deploy_docusaurus")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte")," monorepo project root to deploy this docs website."),(0,o.kt)("p",null,"Automating this process via CI is currently not easy because we push to a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbytehq.github.io"},"dedicated repo hosting the Github pages")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte")," monorepo, which is hard to do in CI. This is not intended to be the end state (we will need to publish these docs via CI eventually), but as of May 2022 have decided the juice isn't worth the squeeze just yet."),(0,o.kt)("h2",{id:"documentation-best-practices"},"Documentation Best Practices"),(0,o.kt)("p",null,"Connectors typically have the following documentation elements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"READMEs"),(0,o.kt)("li",{parentName:"ul"},"Changelogs"),(0,o.kt)("li",{parentName:"ul"},"Github Issues & Pull Requests"),(0,o.kt)("li",{parentName:"ul"},"Source code comments"),(0,o.kt)("li",{parentName:"ul"},"How-to guides")),(0,o.kt)("p",null,"Below are some best practices related to each of these."),(0,o.kt)("h3",{id:"readmes"},"READMEs"),(0,o.kt)("p",null,"Every module should have a README containing:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A brief description of the module"),(0,o.kt)("li",{parentName:"ul"},"development pre-requisites ","(","like which language or binaries are required for development",")"),(0,o.kt)("li",{parentName:"ul"},"how to install dependencies"),(0,o.kt)("li",{parentName:"ul"},"how to build and run the code locally & via Docker"),(0,o.kt)("li",{parentName:"ul"},"any other information needed for local iteration")),(0,o.kt)("h3",{id:"changelogs"},"Changelogs"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Core")),(0,o.kt)("p",null,"Core changelogs should be updated in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/project-overview/platform.md")," file."),(0,o.kt)("h4",{id:"connectors"},"Connectors"),(0,o.kt)("p",null,"Each connector should have a CHANGELOG.md section in its public facing docs in the ",(0,o.kt)("inlineCode",{parentName:"p"},"docs/integrations/<sources OR destinations>/<name>")," at the bottom of the page. Inside, each new connector version should have a section whose title is the connector's version number. The body of this section should describe the changes added in the new version. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"| Version | Date       | Pull Request | Subject |\n| :------ | :--------  | :-----       | :------ |\n| 0.2.0   | 20XX-05-XX | [PR2#](https://github.com/airbytehq/airbyte/pull/PR2#) | Fixed bug with schema generation <br/><br/> Added a better description for the `password` input parameter |\n| 0.1.0   | 20XX-04-XX | [PR#](https://github.com/airbytehq/airbyte/pull/PR#) | Added incremental sync |\n")),(0,o.kt)("h3",{id:"source-code-comments"},"Source code comments"),(0,o.kt)("p",null,"It's hard to pin down exactly what to do around source code comments, but there are two ","(","very subjective",")"," and rough guidelines:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If something is not obvious, write it down"),". Examples include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"non-trivial class definitions should have docstrings"),(0,o.kt)("li",{parentName:"ul"},"magic variables should have comments explaining why those values are used ","(","e.g: if using a page size of 10 in a connector, describe why if possible. If there is no reason, that's also fine, just mention in a comment",")",". "),(0,o.kt)("li",{parentName:"ul"},"Complicated subroutines/logic which cannot be refactored should have comments explaining what they are doing and why")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"If something is obvious, don't write it down")," since it's probably more likely to go out of date. For example, a comment like ",(0,o.kt)("inlineCode",{parentName:"p"},"x = 42; // sets x to 42")," is not adding any new information and is therefore better omitted."),(0,o.kt)("h3",{id:"issues--pull-requests"},"Issues & Pull Requests"),(0,o.kt)("h4",{id:"titles"},"Titles"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Describe outputs, not implementation"),": An issue or PR title should describe the desired end result, not the implementation. The exception is child issues/subissues of an epic. ",(0,o.kt)("strong",{parentName:"p"},"Be specific about the domain"),". Airbyte operates a monorepo, so being specific about what is being changed in the PR or issue title is important."),(0,o.kt)("p",null,"Some examples: ",(0,o.kt)("em",{parentName:"p"},"subpar issue title"),": ",(0,o.kt)("inlineCode",{parentName:"p"},'Remove airbyteCdk.dependsOn("unrelatedPackage")'),". This describes a solution not a problem."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"good issue title"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Building the Airbyte Python CDK should not build unrelated packages"),". Describes desired end state and the intent is understandable without reading the full issue."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"subpar PR title"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Update tests"),". Which tests? What was the update?"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"good PR title"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Source MySQL: update acceptance tests to connect to SSL-enabled database"),". Specific about the domain and change that was made."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PR title conventions")," When creating a PR, follow the naming conventions depending on the change being made:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Notable updates to Airbyte Core: "\ud83c\udf89"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"e.g: ",(0,o.kt)("inlineCode",{parentName:"li"},"\ud83c\udf89 enable configuring un-nesting in normalization")))),(0,o.kt)("li",{parentName:"ul"},"New connectors: \u201c\ud83c\udf89 New source or destination: \u201d e.g: ",(0,o.kt)("inlineCode",{parentName:"li"},"\ud83c\udf89 New Source: Okta")),(0,o.kt)("li",{parentName:"ul"},"New connector features: \u201c\ud83c\udf89 :  E.g:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\ud83c\udf89 Destination Redshift: write JSONs as SUPER type instead of VARCHAR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\ud83c\udf89 Source MySQL: enable logical replication")))),(0,o.kt)("li",{parentName:"ul"},"Bugfixes should start with the  \ud83d\udc1b emoji",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"\ud83d\udc1b Source Facebook Marketing: fix incorrect parsing of lookback window")))),(0,o.kt)("li",{parentName:"ul"},"Documentation improvements should start with any of the book/paper emojis: \ud83d\udcda \ud83d\udcdd etc\u2026"),(0,o.kt)("li",{parentName:"ul"},"Any refactors, cleanups, etc.. that are not visible improvements to the user should not have emojis")),(0,o.kt)("p",null,"The emojis help us identify which commits should be included in the product release notes."),(0,o.kt)("h4",{id:"descriptions"},"Descriptions"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Context"),": Provide enough information ","(","or a link to enough information",")"," in the description so team members with no context can understand what the issue or PR is trying to accomplish. This usually means you should include two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Some background information motivating the problem")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"A description of the problem itself")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Good places to start reading and file changes that can be skipped"),(0,o.kt)("p",{parentName:"li"},"Some examples: "))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"insufficient context"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"Create an OpenAPI to JSON schema generator"),". Unclear what the value or problem being solved here is."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"good context"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"When creating or updating connectors, we spend a lot of time manually transcribing JSON Schema files based on OpenAPI docs. This is ncessary because OpenAPI and JSON schema are very similar but not perfectly compatible. This process is automatable. Therefore we should create a program which converts from OpenAPI to JSONSchema format.\n")))}m.isMDXComponent=!0}}]);