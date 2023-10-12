/*! For license information please see 47842741.3b652af7.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[862914],{806795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var r=t(824246),a=t(511151);const s={id:"search-engines",title:"Search Engines",description:"Choosing and configuring your search engine for Backstage"},i=void 0,o={id:"features/search/search-engines",title:"Search Engines",description:"Choosing and configuring your search engine for Backstage",source:"@site/../docs/features/search/search-engines.md",sourceDirName:"features/search",slug:"/features/search/search-engines",permalink:"/docs/features/search/search-engines",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/search/search-engines.md",tags:[],version:"current",frontMatter:{id:"search-engines",title:"Search Engines",description:"Choosing and configuring your search engine for Backstage"},sidebar:"docs",previous:{title:"Search Architecture",permalink:"/docs/features/search/architecture"},next:{title:"How-To guides",permalink:"/docs/features/search/how-to-guides"}},c={},l=[{value:"Lunr",id:"lunr",level:2},{value:"Postgres",id:"postgres",level:2},{value:"Optional Configuration",id:"optional-configuration",level:2},{value:"Elasticsearch",id:"elasticsearch",level:2},{value:"Set custom index template",id:"set-custom-index-template",level:4},{value:"Example configurations",id:"example-configurations",level:2},{value:"AWS",id:"aws",level:3},{value:"Elastic.co",id:"elasticco",level:3},{value:"OpenSearch",id:"opensearch",level:3},{value:"Others",id:"others",level:3},{value:"Configuration examples",id:"configuration-examples",level:4},{value:"With username and password",id:"with-username-and-password",level:5},{value:"With API key",id:"with-api-key",level:5},{value:"Elasticsearch batch size",id:"elasticsearch-batch-size",level:3},{value:"Configuration example",id:"configuration-example",level:4}];function h(e){const n=Object.assign({p:"p",a:"a",pre:"pre",code:"code",h2:"h2",blockquote:"blockquote",strong:"strong",ol:"ol",li:"li",h4:"h4",h3:"h3",h5:"h5"},(0,a.ah)(),e.components);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Backstage supports 3 search engines by default, an in-memory engine called Lunr,\nElasticsearch and Postgres. You can configure your own search engines by\nimplementing the provided interface as mentioned in the\n",(0,r.jsx)(n.a,{href:"/docs/features/search/getting-started#Backend",children:"search backend documentation."})]}),"\n",(0,r.jsx)(n.p,{children:"Provided search engine implementations have their own way of constructing\nqueries, which may be something you want to modify. Alterations to the querying\nlogic of a search engine can be made by providing your own implementation of a\nQueryTranslator interface. This modification can be done without touching\nprovided search engines by using the exposed setter to set the modified query\ntranslator into the instance."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"const searchEngine = new LunrSearchEngine({ logger: env.logger });\nsearchEngine.setTranslator(new MyNewAndBetterQueryTranslator());\n"})}),"\n",(0,r.jsx)(n.h2,{id:"lunr",children:"Lunr"}),"\n",(0,r.jsx)(n.p,{children:"Lunr search engine is enabled by default for your backstage instance if you have\nnot done additional changes to the scaffolded app."}),"\n",(0,r.jsx)(n.p,{children:"Lunr can be instantiated like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// app/backend/src/plugins/search.ts\nconst searchEngine = new LunrSearchEngine({ logger: env.logger });\nconst indexBuilder = new IndexBuilder({ logger: env.logger, searchEngine });\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Note: Lunr is appropriate as a zero-config search engine when developing\nother parts of Backstage locally, however its use is highly discouraged when\nrunning Backstage in production. When deploying Backstage, use one of the\nother search engines instead."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"postgres",children:"Postgres"}),"\n",(0,r.jsx)(n.p,{children:"The Postgres based search engine only requires that postgres being configured as\nthe database engine for Backstage. Therefore it targets setups that want to\navoid maintaining another external service like Elasticsearch. The search\nprovides decent results and performs well with ten thousands of indexed\ndocuments. The connection to postgres is established via the database manager\nalso used by other plugins."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Important"}),": The search plugin requires at least Postgres 12!"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.code,{children:"PgSearchEngine"}),", make sure that you have a Postgres database\nconfigured and make the following changes to your backend:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Add a dependency on ",(0,r.jsx)(n.code,{children:"@backstage/plugin-search-backend-module-pg"})," to your\nbackend's ",(0,r.jsx)(n.code,{children:"package.json"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Initialize the search engine. It is recommended to initialize it with a\nfallback to the lunr search engine if you are running Backstage for\ndevelopment locally with SQLite:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// In packages/backend/src/plugins/search.ts\n\n// Initialize a connection to a search engine.\nconst searchEngine = (await PgSearchEngine.supported(env.database))\n  ? await PgSearchEngine.fromConfig(env.config, { database: env.database })\n  : new LunrSearchEngine({ logger: env.logger });\n"})}),"\n",(0,r.jsx)(n.h2,{id:"optional-configuration",children:"Optional Configuration"}),"\n",(0,r.jsx)(n.p,{children:"The following is an example of the optional configuration that can be applied when using Postgres as the search backend. Currently this is mostly for just the highlight feature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  pg:\n    highlightOptions:\n      useHighlight: true # Used to enable to disable the highlight feature. The default value is true\n      maxWord: 35 # Used to set the longest headlines to output. The default value is 35.\n      minWord: 15 # Used to set the shortest headlines to output. The default value is 15.\n      shortWord: 3 # Words of this length or less will be dropped at the start and end of a headline, unless they are query terms. The default value of three (3) eliminates common English articles.\n      highlightAll: false # If true the whole document will be used as the headline, ignoring the preceding three parameters. The default is false.\n      maxFragments: 0 # Maximum number of text fragments to display. The default value of zero selects a non-fragment-based headline generation method. A value greater than zero selects fragment-based headline generation (see the linked documentation above for more details).\n      fragmentDelimiter: ' ... ' # Delimiter string used to concatenate fragments. Defaults to \" ... \".\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," the highlight search term feature uses ",(0,r.jsx)(n.code,{children:"ts_headline"})," which has been known to potentially impact performance. You only need this minimal config to disable it should you have issues:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  pg:\n    highlightOptions:\n      useHighlight: false\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The Postgres documentation on ",(0,r.jsx)(n.a,{href:"https://www.postgresql.org/docs/current/textsearch-controls.html#TEXTSEARCH-HEADLINE",children:"Highlighting Results"})," has more details."]}),"\n",(0,r.jsx)(n.h2,{id:"elasticsearch",children:"Elasticsearch"}),"\n",(0,r.jsx)(n.p,{children:"Backstage supports Elasticsearch (and OpenSearch) search engine connections,\nindexing and querying out of the box. Available configuration options enable\nusage of either AWS or Elastic.co hosted solutions, or a custom self-hosted solution."}),"\n",(0,r.jsx)(n.p,{children:"Similarly to Lunr above, Elasticsearch can be set up like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// app/backend/src/plugins/search.ts\nconst searchEngine = await ElasticSearchSearchEngine.fromConfig({\n  logger: env.logger,\n  config: env.config,\n});\nconst indexBuilder = new IndexBuilder({ logger: env.logger, searchEngine });\n"})}),"\n",(0,r.jsxs)(n.p,{children:["For the engine to be available, your backend package needs a dependency on\npackage ",(0,r.jsx)(n.code,{children:"@backstage/plugin-search-backend-module-elasticsearch"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Elasticsearch needs some additional configuration before it is ready to use\nwithin your instance. The configuration options are documented in the\n",(0,r.jsx)(n.a,{href:"https://github.com/backstage/backstage/blob/master/plugins/search-backend-module-elasticsearch/config.d.ts",children:"configuration schema definition file."})]}),"\n",(0,r.jsxs)(n.p,{children:["The underlying functionality uses either the official Elasticsearch client\nversion 7.x (meaning that Elasticsearch version 7 is the only one confirmed to\nbe supported), or the OpenSearch client, when the ",(0,r.jsx)(n.code,{children:"aws"})," or ",(0,r.jsx)(n.code,{children:"opensearch "}),"provider\nis configured."]}),"\n",(0,r.jsx)(n.p,{children:"Should you need to create your own bespoke search experiences that require more\nthan just a query translator (such as faceted search or Relay pagination), you\ncan access the configuration of the search engine in order to create new\nElasticsearch clients. The version of the client need not be the same as one\nused internally by the Elasticsearch engine plugin. For example:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"import { isOpenSearchCompatible } from '@backstage/plugin-search-backend-module-elasticsearch';\nimport { Client as ElasticClient } from '@elastic/elasticsearch';\nimport { Client as OpenSearchClient } from '@opensearch-project/opensearch';\n\n// Return an Elasticsearch client\nconst esClient = searchEngine.newClient<ElasticClient>(options => {\n  if (!isOpenSearchCompatible(options)) {\n    return new ElasticClient(options);\n  }\n\n  throw new Error('Incompatible options');\n});\n\n// Return an OpenSearch client\nconst osClient = searchEngine.newClient<OpenSearchClient>(options => {\n  if (isOpenSearchCompatible(options)) {\n    return new OpenSearchClient(options);\n  }\n\n  throw new Error('Incompatible options');\n});\n"})}),"\n",(0,r.jsx)(n.h4,{id:"set-custom-index-template",children:"Set custom index template"}),"\n",(0,r.jsx)(n.p,{children:"The Elasticsearch engine gives you the ability to set a custom index template if needed."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Index templates define settings, mappings, and aliases that can be applied automatically to new indices."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"// app/backend/src/plugins/search.ts\nconst searchEngine = await ElasticSearchSearchEngine.initialize({\n  logger: env.logger,\n  config: env.config,\n});\n\nsearchEngine.setIndexTemplate({\n  name: '<name-of-your-custom-template>',\n  body: {\n    index_patterns: ['<your-index-pattern>'],\n    template: {\n      mappings: {},\n      settings: {},\n    },\n  },\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-configurations",children:"Example configurations"}),"\n",(0,r.jsx)(n.h3,{id:"aws",children:"AWS"}),"\n",(0,r.jsxs)(n.p,{children:["Using AWS hosted Elasticsearch the only configuration option needed is the URL\nto the Elasticsearch service. The implementation assumes that environment\nvariables for AWS access key id and secret access key are defined in accordance\nto the\n",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html",children:"default AWS credential chain."}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    provider: aws\n    node: https://my-backstage-search-asdfqwerty.eu-west-1.es.amazonaws.com\n"})}),"\n",(0,r.jsx)(n.h3,{id:"elasticco",children:"Elastic.co"}),"\n",(0,r.jsxs)(n.p,{children:["Elastic Cloud hosted Elasticsearch uses a Cloud ID to determine the instance of\nhosted Elasticsearch to connect to. Additionally, username and password needs to\nbe provided either directly or using environment variables like defined in\n",(0,r.jsx)(n.a,{href:"https://backstage.io/docs/conf/writing#includes-and-dynamic-data",children:"Backstage documentation."})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    provider: elastic\n    cloudId: backstage-elastic:asdfqwertyasdfqwertyasdfqwertyasdfqwerty==\n    auth:\n      username: elastic\n      password: changeme\n"})}),"\n",(0,r.jsx)(n.h3,{id:"opensearch",children:"OpenSearch"}),"\n",(0,r.jsxs)(n.p,{children:["OpenSearch can be self hosted for example with the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/opensearchproject/opensearch",children:"official docker image"}),". The configuration requires only the node and authentication."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    provider: opensearch\n    node: http://0.0.0.0:9200\n    auth:\n      username: opensearch\n      password: changeme\n"})}),"\n",(0,r.jsx)(n.h3,{id:"others",children:"Others"}),"\n",(0,r.jsxs)(n.p,{children:["Other Elasticsearch instances can be connected to by using standard\nElasticsearch authentication methods and exposed URL, provided that the cluster\nsupports that. The configuration options needed are the URL to the node and\nauthentication information. Authentication can be handled by either providing\nusername/password or an API key. For more information how to create an API key,\nsee\n",(0,r.jsx)(n.a,{href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/security-api-create-api-key.html",children:"Elastic documentation on API keys"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-examples",children:"Configuration examples"}),"\n",(0,r.jsx)(n.h5,{id:"with-username-and-password",children:"With username and password"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    node: http://localhost:9200\n    auth:\n      username: elastic\n      password: changeme\n"})}),"\n",(0,r.jsx)(n.h5,{id:"with-api-key",children:"With API key"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    node: http://localhost:9200\n    auth:\n      apiKey: base64EncodedKey\n"})}),"\n",(0,r.jsx)(n.h3,{id:"elasticsearch-batch-size",children:"Elasticsearch batch size"}),"\n",(0,r.jsxs)(n.p,{children:["Default batch size of the Elasticsearch engine is set to 1000. If you are using a lower spec computing resources (like AWS small instance),\nyou may get an error caused by limited ",(0,r.jsx)(n.code,{children:"thread_pool"})," configuration. ( ",(0,r.jsx)(n.code,{children:"429 Too Many Requests /_bulk"})," )"]}),"\n",(0,r.jsxs)(n.p,{children:["In this case you need to decrease the batch size to index the resources to prevent this kind of error. You can easily decrease\nor increase the batch size in your ",(0,r.jsx)(n.code,{children:"app-config.yaml"})," using the ",(0,r.jsx)(n.code,{children:"batchSize"})," option provided for Elasticsearch configuration."]}),"\n",(0,r.jsx)(n.h4,{id:"configuration-example",children:"Configuration example"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Set batch size to 100"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"search:\n  elasticsearch:\n    batchSize: 100\n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"You can also increase the batch size if you are using a large ES instance."}),"\n"]})]})}const u=function(e={}){const{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,r.jsx)(n,Object.assign({},e,{children:(0,r.jsx)(h,e)})):h(e)}},862525:e=>{var n=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(n).map((function(e){return n[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,a){for(var s,i,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),c=1;c<arguments.length;c++){for(var l in s=Object(arguments[c]))t.call(s,l)&&(o[l]=s[l]);if(n){i=n(s);for(var h=0;h<i.length;h++)r.call(s,i[h])&&(o[i[h]]=s[i[h]])}}return o}},371426:(e,n,t)=>{t(862525);var r=t(827378),a=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),n.Fragment=s("react.fragment")}var i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,h=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(h=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:a,type:e,key:l,ref:h,props:s,_owner:i.current}}n.jsx=l,n.jsxs=l},541535:(e,n,t)=>{var r=t(862525),a=60103,s=60106;n.Fragment=60107,n.StrictMode=60108,n.Profiler=60114;var i=60109,o=60110,c=60112;n.Suspense=60113;var l=60115,h=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),s=u("react.portal"),n.Fragment=u("react.fragment"),n.StrictMode=u("react.strict_mode"),n.Profiler=u("react.profiler"),i=u("react.provider"),o=u("react.context"),c=u("react.forward_ref"),n.Suspense=u("react.suspense"),l=u("react.memo"),h=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function m(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}function y(){}function b(e,n,t){this.props=e,this.context=n,this.refs=g,this.updater=t||f}m.prototype.isReactComponent={},m.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,n,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=m.prototype;var x=b.prototype=new y;x.constructor=b,r(x,m.prototype),x.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,t){var r,s={},i=null,o=null;if(null!=n)for(r in void 0!==n.ref&&(o=n.ref),void 0!==n.key&&(i=""+n.key),n)j.call(n,r)&&!w.hasOwnProperty(r)&&(s[r]=n[r]);var c=arguments.length-2;if(1===c)s.children=t;else if(1<c){for(var l=Array(c),h=0;h<c;h++)l[h]=arguments[h+2];s.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===s[r]&&(s[r]=c[r]);return{$$typeof:a,type:e,key:i,ref:o,props:s,_owner:v.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var S=/\/+/g;function _(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function C(e,n,t,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case a:case s:c=!0}}if(c)return i=i(c=e),e=""===r?"."+_(c,0):r,Array.isArray(i)?(t="",null!=e&&(t=e.replace(S,"$&/")+"/"),C(i,n,t,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,n){return{$$typeof:a,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(i,t+(!i.key||c&&c.key===i.key?"":(""+i.key).replace(S,"$&/")+"/")+e)),n.push(i)),1;if(c=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var h=r+_(o=e[l],l);c+=C(o,n,t,h,i)}else if(h=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof h)for(e=h.call(e),l=0;!(o=e.next()).done;)c+=C(o=o.value,n,t,h=r+_(o,l++),i);else if("object"===o)throw n=""+e,Error(p(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n));return c}function O(e,n,t){if(null==e)return e;var r=[],a=0;return C(e,r,"","",(function(e){return n.call(t,e,a++)})),r}function P(e){if(-1===e._status){var n=e._result;n=n(),e._status=0,e._result=n,n.then((function(n){0===e._status&&(n=n.default,e._status=1,e._result=n)}),(function(n){0===e._status&&(e._status=2,e._result=n)}))}if(1===e._status)return e._result;throw e._result}var T={current:null};function A(){var e=T.current;if(null===e)throw Error(p(321));return e}var I={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};n.Children={map:O,forEach:function(e,n,t){O(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return O(e,(function(){n++})),n},toArray:function(e){return O(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error(p(143));return e}},n.Component=m,n.PureComponent=b,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,n.cloneElement=function(e,n,t){if(null==e)throw Error(p(267,e));var s=r({},e.props),i=e.key,o=e.ref,c=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,c=v.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(h in n)j.call(n,h)&&!w.hasOwnProperty(h)&&(s[h]=void 0===n[h]&&void 0!==l?l[h]:n[h])}var h=arguments.length-2;if(1===h)s.children=t;else if(1<h){l=Array(h);for(var u=0;u<h;u++)l[u]=arguments[u+2];s.children=l}return{$$typeof:a,type:e.type,key:i,ref:o,props:s,_owner:c}},n.createContext=function(e,n){return void 0===n&&(n=null),(e={$$typeof:o,_calculateChangedBits:n,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:c,render:e}},n.isValidElement=E,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:P}},n.memo=function(e,n){return{$$typeof:l,type:e,compare:void 0===n?null:n}},n.useCallback=function(e,n){return A().useCallback(e,n)},n.useContext=function(e,n){return A().useContext(e,n)},n.useDebugValue=function(){},n.useEffect=function(e,n){return A().useEffect(e,n)},n.useImperativeHandle=function(e,n,t){return A().useImperativeHandle(e,n,t)},n.useLayoutEffect=function(e,n){return A().useLayoutEffect(e,n)},n.useMemo=function(e,n){return A().useMemo(e,n)},n.useReducer=function(e,n,t){return A().useReducer(e,n,t)},n.useRef=function(e){return A().useRef(e)},n.useState=function(e){return A().useState(e)},n.version="17.0.2"},827378:(e,n,t)=>{e.exports=t(541535)},824246:(e,n,t)=>{e.exports=t(371426)},511151:(e,n,t)=>{t.d(n,{Zo:()=>o,ah:()=>s});var r=t(667294);const a=r.createContext({});function s(e){const n=r.useContext(a);return r.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const i={};function o({components:e,children:n,disableParentContext:t}){let o;return o=t?"function"==typeof e?e({}):e||i:s(e),r.createElement(a.Provider,{value:o},n)}}}]);