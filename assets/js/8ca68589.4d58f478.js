/*! For license information please see 8ca68589.4d58f478.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[288944],{928476:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var n=t(824246),o=t(511151);const s={id:"plugin-search-react.searchresultlistprops",title:"SearchResultListProps",description:"API reference for SearchResultListProps"},c=void 0,u={id:"reference/plugin-search-react.searchresultlistprops",title:"SearchResultListProps",description:"API reference for SearchResultListProps",source:"@site/../docs/reference/plugin-search-react.searchresultlistprops.md",sourceDirName:"reference",slug:"/reference/plugin-search-react.searchresultlistprops",permalink:"/docs/reference/plugin-search-react.searchresultlistprops",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-react.searchresultlistprops.md",tags:[],version:"current",frontMatter:{id:"plugin-search-react.searchresultlistprops",title:"SearchResultListProps",description:"API reference for SearchResultListProps"}},a={},i=[];function l(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-search-react"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistprops",children:(0,n.jsx)(r.code,{children:"SearchResultListProps"})})]}),"\n",(0,n.jsxs)(r.p,{children:["Props for ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlist",children:"SearchResultList"}),"."]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export type SearchResultListProps = Pick<SearchResultStateProps, 'query'> & Omit<SearchResultListLayoutProps, 'loading' | 'error' | 'resultItems'>;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"References:"})," ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultstateprops",children:"SearchResultStateProps"}),", ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-search-react.searchresultlistlayoutprops",children:"SearchResultListLayoutProps"})]})]})}const f=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,n.jsx)(r,Object.assign({},e,{children:(0,n.jsx)(l,e)})):l(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var s,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var i in s=Object(arguments[a]))t.call(s,i)&&(u[i]=s[i]);if(r){c=r(s);for(var l=0;l<c.length;l++)n.call(s,c[l])&&(u[c[l]]=s[c[l]])}}return u}},371426:(e,r,t)=>{t(862525);var n=t(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),r.Fragment=s("react.fragment")}var c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,s={},i=null,l=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!a.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:l,props:s,_owner:c.current}}r.jsx=i,r.jsxs=i},541535:(e,r,t)=>{var n=t(862525),o=60103,s=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,u=60110,a=60112;r.Suspense=60113;var i=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var f=Symbol.for;o=f("react.element"),s=f("react.portal"),r.Fragment=f("react.fragment"),r.StrictMode=f("react.strict_mode"),r.Profiler=f("react.profiler"),c=f("react.provider"),u=f("react.context"),a=f("react.forward_ref"),r.Suspense=f("react.suspense"),i=f("react.memo"),l=f("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||d}function v(){}function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var _=g.prototype=new v;_.constructor=g,n(_,m.prototype),_.isPureReactComponent=!0;var b={current:null},j=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,s={},c=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)j.call(r,n)&&!S.hasOwnProperty(n)&&(s[n]=r[n]);var a=arguments.length-2;if(1===a)s.children=t;else if(1<a){for(var i=Array(a),l=0;l<a;l++)i[l]=arguments[l+2];s.children=i}if(e&&e.defaultProps)for(n in a=e.defaultProps)void 0===s[n]&&(s[n]=a[n]);return{$$typeof:o,type:e,key:c,ref:u,props:s,_owner:b.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g;function R(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function w(e,r,t,n,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case s:a=!0}}if(a)return c=c(a=e),e=""===n?"."+R(a,0):n,Array.isArray(c)?(t="",null!=e&&(t=e.replace(k,"$&/")+"/"),w(c,r,t,"",(function(e){return e}))):null!=c&&(O(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,t+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(k,"$&/")+"/")+e)),r.push(c)),1;if(a=0,n=""===n?".":n+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=n+R(u=e[i],i);a+=w(u,r,t,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),i=0;!(u=e.next()).done;)a+=w(u=u.value,r,t,l=n+R(u,i++),c);else if("object"===u)throw r=""+e,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function x(e,r,t){if(null==e)return e;var n=[],o=0;return w(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function C(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function $(){var e=E.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:b,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:x,forEach:function(e,r,t){x(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return x(e,(function(){r++})),r},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error(h(143));return e}},r.Component=m,r.PureComponent=g,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var s=n({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=b.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(l in r)j.call(r,l)&&!S.hasOwnProperty(l)&&(s[l]=void 0===r[l]&&void 0!==i?i[l]:r[l])}var l=arguments.length-2;if(1===l)s.children=t;else if(1<l){i=Array(l);for(var f=0;f<l;f++)i[f]=arguments[f+2];s.children=i}return{$$typeof:o,type:e.type,key:c,ref:u,props:s,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=O,r.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},r.memo=function(e,r){return{$$typeof:i,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return $().useCallback(e,r)},r.useContext=function(e,r){return $().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return $().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return $().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return $().useLayoutEffect(e,r)},r.useMemo=function(e,r){return $().useMemo(e,r)},r.useReducer=function(e,r,t){return $().useReducer(e,r,t)},r.useRef=function(e){return $().useRef(e)},r.useState=function(e){return $().useState(e)},r.version="17.0.2"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Zo:()=>u,ah:()=>s});var n=t(667294);const o=n.createContext({});function s(e){const r=n.useContext(o);return n.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:t}){let u;return u=t?"function"==typeof e?e({}):e||c:s(e),n.createElement(o.Provider,{value:u},r)}}}]);