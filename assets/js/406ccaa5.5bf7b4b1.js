/*! For license information please see 406ccaa5.5bf7b4b1.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[694272],{80103:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>a});var n=t(824246),o=t(511151);const i={id:"plugin-permission-node.createpermissionrule",title:"createPermissionRule",description:"API reference for createPermissionRule"},s=void 0,u={id:"reference/plugin-permission-node.createpermissionrule",title:"createPermissionRule",description:"API reference for createPermissionRule",source:"@site/../docs/reference/plugin-permission-node.createpermissionrule.md",sourceDirName:"reference",slug:"/reference/plugin-permission-node.createpermissionrule",permalink:"/docs/reference/plugin-permission-node.createpermissionrule",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-permission-node.createpermissionrule.md",tags:[],version:"current",frontMatter:{id:"plugin-permission-node.createpermissionrule",title:"createPermissionRule",description:"API reference for createPermissionRule"}},c={},a=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-permission-node"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.createpermissionrule",children:(0,n.jsx)(r.code,{children:"createPermissionRule"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Helper function to ensure that ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-permission-node.permissionrule",children:"PermissionRule"})," definitions are typed correctly."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"createPermissionRule: <TResource, TQuery, TResourceType extends string, TParams extends PermissionRuleParams = undefined>(rule: PermissionRule<TResource, TQuery, TResourceType, TParams>) => PermissionRule<TResource, TQuery, TResourceType, TParams>\n"})})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,s,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var a in i=Object(arguments[c]))t.call(i,a)&&(u[a]=i[a]);if(r){s=r(i);for(var l=0;l<s.length;l++)n.call(i,s[l])&&(u[s[l]]=i[s[l]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,i={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!c.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:s.current}}r.jsx=a,r.jsxs=a},541535:(e,r,t)=>{var n=t(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var s=60109,u=60110,c=60112;r.Suspense=60113;var a=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),i=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),s=f("react.provider"),u=f("react.context"),c=f("react.forward_ref"),r.Suspense=f("react.suspense"),a=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function h(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=m,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=g.prototype=new v;_.constructor=g,n(_,h.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function R(e,r,t){var n,i={},s=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(s=""+r.key),r)j.call(r,n)&&!P.hasOwnProperty(n)&&(i[n]=r[n]);var c=arguments.length-2;if(1===c)i.children=t;else if(1<c){for(var a=Array(c),l=0;l<c;l++)a[l]=arguments[l+2];i.children=a}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===i[n]&&(i[n]=c[n]);return{$$typeof:o,type:e,key:s,ref:u,props:i,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function w(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function x(e,r,t,n,s){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case o:case i:c=!0}}if(c)return s=s(c=e),e=""===n?"."+w(c,0):n,Array.isArray(s)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),x(s,r,t,"",(function(e){return e}))):null!=s&&(O(s)&&(s=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(s,t+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(k,"$&/")+"/")+e)),r.push(s)),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var a=0;a<e.length;a++){var l=n+w(u=e[a],a);c+=x(u,r,t,l,s)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),a=0;!(u=e.next()).done;)c+=x(u=u.value,r,t,l=n+w(u,a++),s);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return c}function S(e,r,t){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(d(321));return e}var T={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:S,forEach:function(e,r,t){S(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return S(e,(function(){r++})),r},toArray:function(e){return S(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,r.cloneElement=function(e,r,t){if(null==e)throw Error(d(267,e));var i=n({},e.props),s=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=b.current),void 0!==r.key&&(s=""+r.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in r)j.call(r,l)&&!P.hasOwnProperty(l)&&(i[l]=void 0===r[l]&&void 0!==a?a[l]:r[l])}var l=arguments.length-2;if(1===l)i.children=t;else if(1<l){a=Array(l);for(var f=0;f<l;f++)a[f]=arguments[f+2];i.children=a}return{$$typeof:o,type:e.type,key:s,ref:u,props:i,_owner:c}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=R,r.createFactory=function(e){var r=R.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:c,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:a,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>i});var n=t(667294);const o=n.createContext({});function i(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const s={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||s:i(e),n.createElement(o.Provider,{value:u},r)}}}]);