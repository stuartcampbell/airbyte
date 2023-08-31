"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[70247],{31318:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={},i="Review the connection state",c={unversionedId:"cloud/managing-airbyte-cloud/review-connection-state",id:"cloud/managing-airbyte-cloud/review-connection-state",title:"Review the connection state",description:"The connection state provides additional information about incremental syncs. It includes the most recent values for the global or stream-level cursors, which can aid in debugging or determining which data will be included in the next sync.",source:"@site/../docs/cloud/managing-airbyte-cloud/review-connection-state.md",sourceDirName:"cloud/managing-airbyte-cloud",slug:"/cloud/managing-airbyte-cloud/review-connection-state",permalink:"/cloud/managing-airbyte-cloud/review-connection-state",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/cloud/managing-airbyte-cloud/review-connection-state.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Understand Airbyte Cloud limits",permalink:"/cloud/managing-airbyte-cloud/understand-airbyte-cloud-limits"},next:{title:"Getting Started",permalink:"/category/getting-started"}},l={},s=[],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"review-the-connection-state"},"Review the connection state"),(0,a.kt)("p",null,"The connection state provides additional information about incremental syncs. It includes the most recent values for the global or stream-level cursors, which can aid in debugging or determining which data will be included in the next sync. "),(0,a.kt)("p",null,"To review the connection state:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("a",{parentName:"p",href:"http://cloud.airbyte.com"},"Airbyte Cloud")," dashboard, click ",(0,a.kt)("strong",{parentName:"p"},"Connections")," and then click the connection you want to display.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," tab on the Connection page.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Advanced")," dropdown arrow. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Connection State")," displays."))),(0,a.kt)("p",null,"To edit the connection state:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},":::note \n\nUpdates to connection state should be handled with extreme care. Updates may break your syncs, requiring a reset to fix. Make changes only as directed by the Airbyte team.\n\n:::\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click anywhere in the Connection state to start editing.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Confirm changes by clicking "Update state". Discard any changes by clikcing "Revert changes".')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm the changes to the connection state update."))))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,i(i({ref:t},p),{},{components:n})):r.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);