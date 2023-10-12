/*! For license information please see 26f72947.48c933c2.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[133710],{186424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var r=n(824246),o=n(511151);const i={id:"provider",title:"Bitbucket Authentication Provider",sidebar_label:"Bitbucket",description:"Adding Bitbucket OAuth as an authentication provider in Backstage"},c=void 0,a={id:"auth/bitbucket/provider",title:"Bitbucket Authentication Provider",description:"Adding Bitbucket OAuth as an authentication provider in Backstage",source:"@site/../docs/auth/bitbucket/provider.md",sourceDirName:"auth/bitbucket",slug:"/auth/bitbucket/provider",permalink:"/docs/auth/bitbucket/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/bitbucket/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Bitbucket Authentication Provider",sidebar_label:"Bitbucket",description:"Adding Bitbucket OAuth as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Azure Easy Auth",permalink:"/docs/auth/microsoft/easy-auth"},next:{title:"Bitbucket Server",permalink:"/docs/auth/bitbucketServer/provider"}},u={},s=[{value:"Create an OAuth Consumer in Bitbucket",id:"create-an-oauth-consumer-in-bitbucket",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2},{value:"Using Bitbucket for sign-in",id:"using-bitbucket-for-sign-in",level:2}];function l(e){const t=Object.assign({p:"p",code:"code",strong:"strong",h2:"h2",ul:"ul",li:"li",pre:"pre",a:"a"},(0,o.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["The Backstage ",(0,r.jsx)(t.code,{children:"core-plugin-api"})," package comes with a Bitbucket authentication\nprovider that can authenticate users using Bitbucket Cloud. This does ",(0,r.jsx)(t.strong,{children:"NOT"}),"\nwork with Bitbucket Server."]}),"\n",(0,r.jsx)(t.h2,{id:"create-an-oauth-consumer-in-bitbucket",children:"Create an OAuth Consumer in Bitbucket"}),"\n",(0,r.jsx)(t.p,{children:"To add Bitbucket Cloud authentication, you must create an OAuth Consumer."}),"\n",(0,r.jsxs)(t.p,{children:["Go to ",(0,r.jsx)(t.code,{children:"https://bitbucket.org/<your-project-name>/workspace/settings/api"})," ."]}),"\n",(0,r.jsx)(t.p,{children:"Click Add Consumer."}),"\n",(0,r.jsx)(t.p,{children:"Settings for local development:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Application name: Backstage (or your custom app name)"}),"\n",(0,r.jsxs)(t.li,{children:["Callback URL: ",(0,r.jsx)(t.code,{children:"http://localhost:7007/api/auth/bitbucket"})]}),"\n",(0,r.jsx)(t.li,{children:"Other are optional"}),"\n",(0,r.jsxs)(t.li,{children:["(IMPORTANT) ",(0,r.jsx)(t.strong,{children:"Permissions: Account - Read, Workspace membership - Read"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,r.jsxs)(t.p,{children:["The provider configuration can then be added to your ",(0,r.jsx)(t.code,{children:"app-config.yaml"})," under the\nroot ",(0,r.jsx)(t.code,{children:"auth"})," configuration:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-yaml",children:"auth:\n  environment: development\n  providers:\n    bitbucket:\n      development:\n        clientId: ${AUTH_BITBUCKET_CLIENT_ID}\n        clientSecret: ${AUTH_BITBUCKET_CLIENT_SECRET}\n"})}),"\n",(0,r.jsx)(t.p,{children:"The Bitbucket provider is a structure with two configuration keys:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientId"}),": The Key that you generated in Bitbucket, e.g.\n",(0,r.jsx)(t.code,{children:"b59241722e3c3b4816e2"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"clientSecret"}),": The Secret tied to the generated Key."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,r.jsxs)(t.p,{children:["To add the provider to the frontend, add the ",(0,r.jsx)(t.code,{children:"bitbucketAuthApi"})," reference and\n",(0,r.jsx)(t.code,{children:"SignInPage"})," component as shown in\n",(0,r.jsx)(t.a,{href:"/docs/auth/#adding-the-provider-to-the-sign-in-page",children:"Adding the provider to the sign-in page"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"using-bitbucket-for-sign-in",children:"Using Bitbucket for sign-in"}),"\n",(0,r.jsxs)(t.p,{children:["In order to use the Bitbucket provider for sign-in, you must configure it with a\n",(0,r.jsx)(t.code,{children:"signIn.resolver"}),". See the\n",(0,r.jsx)(t.a,{href:"/docs/auth/identity-resolver",children:"Sign-In Resolver documentation"})," for more details on\nhow this is done. Note that for the Bitbucket provider, you'll want to use\n",(0,r.jsx)(t.code,{children:"bitbucket"})," as the provider ID, and ",(0,r.jsx)(t.code,{children:"providers.bitbucket.create"})," for the provider\nfactory."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"@backstage/plugin-auth-backend"})," plugin also comes with two built-in\nresolvers that can be used if desired. The first one is the\n",(0,r.jsx)(t.code,{children:"bitbucketUsernameSignInResolver"}),", which identifies users by matching their\nBitbucket username to ",(0,r.jsx)(t.code,{children:"bitbucket.org/username"})," annotations of ",(0,r.jsx)(t.code,{children:"User"})," entities in\nthe catalog. Note that you must populate your catalog with matching entities or\nusers will not be able to sign in."]}),"\n",(0,r.jsxs)(t.p,{children:["The second resolver is the ",(0,r.jsx)(t.code,{children:"bitbucketUserIdSignInResolver"}),", which works the\nsame way, but uses the Bitbucket user ID instead, and matches on the\n",(0,r.jsx)(t.code,{children:"bitbucket.org/user-id"})," annotation."]}),"\n",(0,r.jsx)(t.p,{children:"The following is an example of how to use one of the built-in resolvers:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import { providers } from '@backstage/plugin-auth-backend';\n\n// ...\n  providerFactories: {\n    bitbucket: providers.bitbucket.create({\n      signIn: {\n        resolver:\n          providers.bitbucket.resolvers.usernameMatchingUserEntityAnnotation(),\n      },\n    }),\n  },\n"})})]})}const d=function(e={}){const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}},862525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,a=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),u=1;u<arguments.length;u++){for(var s in i=Object(arguments[u]))n.call(i,s)&&(a[s]=i[s]);if(t){c=t(i);for(var l=0;l<c.length;l++)r.call(i,c[l])&&(a[c[l]]=i[c[l]])}}return a}},371426:(e,t,n)=>{n(862525);var r=n(827378),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,u={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,i={},s=null,l=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!u.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:l,props:i,_owner:c.current}}t.jsx=s,t.jsxs=s},541535:(e,t,n)=>{var r=n(862525),o=60103,i=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,a=60110,u=60112;t.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;o=d("react.element"),i=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),c=d("react.provider"),a=d("react.context"),u=d("react.forward_ref"),t.Suspense=d("react.suspense"),s=d("react.memo"),l=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function v(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||p}function g(){}function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var m=y.prototype=new g;m.constructor=y,r(m,v.prototype),m.isPureReactComponent=!0;var k={current:null},j=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,n){var r,i={},c=null,a=null;if(null!=t)for(r in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,r)&&!x.hasOwnProperty(r)&&(i[r]=t[r]);var u=arguments.length-2;if(1===u)i.children=n;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===i[r]&&(i[r]=u[r]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var O=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function S(e,t,n,r,c){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var u=!1;if(null===e)u=!0;else switch(a){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case o:case i:u=!0}}if(u)return c=c(u=e),e=""===r?"."+C(u,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(O,"$&/")+"/"),S(c,t,n,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+e)),t.push(c)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+C(a=e[s],s);u+=S(a,t,n,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(a=e.next()).done;)u+=S(a=a.value,t,n,l=r+C(a,s++),c);else if("object"===a)throw t=""+e,Error(h(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function B(e,t,n){if(null==e)return e;var r=[],o=0;return S(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var A={current:null};function R(){var e=A.current;if(null===e)throw Error(h(321));return e}var T={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:B,forEach:function(e,t,n){B(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return B(e,(function(){t++})),t},toArray:function(e){return B(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(h(143));return e}},t.Component=v,t.PureComponent=y,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var i=r({},e.props),c=e.key,a=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,u=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j.call(t,l)&&!x.hasOwnProperty(l)&&(i[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){s=Array(l);for(var d=0;d<l;d++)s[d]=arguments[d+2];i.children=s}return{$$typeof:o,type:e.type,key:c,ref:a,props:i,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.2"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Zo:()=>a,ah:()=>i});var r=n(667294);const o=r.createContext({});function i(e){const t=r.useContext(o);return r.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function a({components:e,children:t,disableParentContext:n}){let a;return a=n?"function"==typeof e?e({}):e||c:i(e),r.createElement(o.Provider,{value:a},t)}}}]);