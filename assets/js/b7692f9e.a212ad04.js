/*! For license information please see b7692f9e.a212ad04.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[308434],{988658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=n(824246),a=n(511151);const s={id:"index",title:"Installing a standalone server",sidebar_label:"Introduction",description:"How to install Backstage for your own use."},o=void 0,i={id:"getting-started/index",title:"Installing a standalone server",description:"How to install Backstage for your own use.",source:"@site/../docs/getting-started/index.md",sourceDirName:"getting-started",slug:"/getting-started/",permalink:"/docs/getting-started/",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/getting-started/index.md",tags:[],version:"current",frontMatter:{id:"index",title:"Installing a standalone server",sidebar_label:"Introduction",description:"How to install Backstage for your own use."},sidebar:"docs",previous:{title:"Logo assets",permalink:"/docs/overview/logos"},next:{title:"Database",permalink:"/docs/getting-started/config/database"}},l={},c=[{value:"Summary",id:"summary",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Create your Backstage App",id:"1-create-your-backstage-app",level:2},{value:"General folder structure",id:"general-folder-structure",level:3},{value:"2. Run the Backstage app",id:"2-run-the-backstage-app",level:2},{value:"Recap",id:"recap",level:2},{value:"Next steps",id:"next-steps",level:2},{value:"Admin",id:"admin",level:3},{value:"Developer",id:"developer",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Audience: Developers and Admins"}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsx)(t.p,{children:"This guide walks through how to get started creating your very own Backstage customizable app. This is the first step in evaluating, developing on, or demoing Backstage."}),"\n",(0,r.jsxs)(t.p,{children:["By the end of this guide, you will have a standalone Backstage installation running locally with a ",(0,r.jsx)(t.code,{children:"SQLite"})," database and demo content. To be clear, this is not a production-ready installation, and it does not contain information specific to your organization."]}),"\n",(0,r.jsx)(t.admonition,{title:"Contributors",type:"note",children:(0,r.jsxs)(t.p,{children:["If you are planning to contribute a new feature or bug fix to the Backstage project, we advise you to follow the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md#get-started",children:"Contributors"})," guide instead to do a repository-based installation."]})}),"\n",(0,r.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["This guide assumes a basic understanding of working on a Linux based operating system and have some experience with the terminal, specifically, these commands: ",(0,r.jsx)(t.code,{children:"npm"}),", ",(0,r.jsx)(t.code,{children:"yarn"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Access to a Unix-based operating system, such as Linux, MacOS or\n",(0,r.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/windows/wsl/",children:"Windows Subsystem for Linux"})]}),"\n",(0,r.jsxs)(t.li,{children:["A GNU-like build environment available at the command line.\nFor example, on Debian/Ubuntu you will want to have the ",(0,r.jsx)(t.code,{children:"make"})," and ",(0,r.jsx)(t.code,{children:"build-essential"})," packages installed.\nOn MacOS, you will want to have run ",(0,r.jsx)(t.code,{children:"xcode-select --install"})," to get the XCode command line build tooling in place."]}),"\n",(0,r.jsx)(t.li,{children:"An account with elevated rights to install the dependencies"}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"curl"})," or ",(0,r.jsx)(t.code,{children:"wget"})," installed"]}),"\n",(0,r.jsxs)(t.li,{children:["Node.js ",(0,r.jsx)(t.a,{href:"https://nodejs.org/en/about/previous-releases",children:"Active LTS Release"})," installed using one of these\nmethods:\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Using ",(0,r.jsx)(t.code,{children:"nvm"})," (recommended)\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/nvm-sh/nvm#install--update-script",children:"Installing nvm"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/package-manager/#nvm",children:"Install and change Node version with nvm"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/",children:"Binary Download"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://nodejs.org/en/download/package-manager/",children:"Package manager"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://github.com/nodesource/distributions/blob/master/README.md",children:"Using NodeSource packages"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"yarn"})," ",(0,r.jsx)(t.a,{href:"https://classic.yarnpkg.com/en/docs/install",children:"Installation"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["You will need to use Yarn classic to create a new project, but it can then be ",(0,r.jsx)(t.a,{href:"/docs/tutorials/yarn-migration",children:"migrated to Yarn 3"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"docker"})," ",(0,r.jsx)(t.a,{href:"https://docs.docker.com/engine/install/",children:"installation"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"git"})," ",(0,r.jsx)(t.a,{href:"https://github.com/git-guides/install-git",children:"installation"})]}),"\n",(0,r.jsx)(t.li,{children:"If the system is not directly accessible over your network the following ports\nneed to be opened: 3000, 7007. This is quite uncommon, unless you're installing in a container, VM or remote system."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"1-create-your-backstage-app",children:"1. Create your Backstage App"}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"The Backstage app we'll be creating will only have demo data until we set up integrations with your specific data sources!"})}),"\n",(0,r.jsxs)(t.p,{children:["To install the Backstage Standalone app, we will make use of ",(0,r.jsx)(t.code,{children:"npx"}),". ",(0,r.jsx)(t.code,{children:"npx"})," is a tool that comes preinstalled with Node.js and lets you run commands straight from ",(0,r.jsx)(t.code,{children:"npm"})," or other registries. Before we jump in to running the command, let's chat about what it does."]}),"\n",(0,r.jsx)(t.p,{children:"This command will create a new directory with a Backstage app inside. The wizard will ask you for the name of the app. This name will be created as sub directory in your current working directory."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"create app",src:n(441742).Z+"",width:"1064",height:"1434"})}),"\n",(0,r.jsx)(t.p,{children:"Inside that directory, it will generate all the files and folder structure\nneeded for you to run your app."}),"\n",(0,r.jsx)(t.h3,{id:"general-folder-structure",children:"General folder structure"}),"\n",(0,r.jsx)(t.p,{children:"Below is a simplified layout of the files and folders generated when creating an app."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"app\n\u251c\u2500\u2500 app-config.yaml\n\u251c\u2500\u2500 catalog-info.yaml\n\u251c\u2500\u2500 package.json\n\u2514\u2500\u2500 packages\n \xa0  \u251c\u2500\u2500 app\n\xa0\xa0  \u2514\u2500\u2500 backend\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"app-config.yaml"}),": Main configuration file for the app. See\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/conf/",children:"Configuration"})," for more information."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"catalog-info.yaml"}),": Catalog Entities descriptors. See\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/descriptor-format",children:"Descriptor Format of Catalog Entities"}),"\nto get started."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"package.json"}),": Root package.json for the project. ",(0,r.jsx)(t.em,{children:"Note: Be sure that you\ndon't add any npm dependencies here as they probably should be installed in\nthe intended workspace rather than in the root."})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"packages/"}),': Lerna leaf packages or "workspaces". Everything here is going\nto be a separate package, managed by lerna.']}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"packages/app/"}),": An fully functioning Backstage frontend app, that acts as a\ngood starting point for you to get to know Backstage."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"packages/backend/"}),": We include a backend that helps power features such as\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/auth/",children:"Authentication"}),",\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/",children:"Software Catalog"}),",\n",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/software-templates/",children:"Software Templates"}),"\nand ",(0,r.jsx)(t.a,{href:"https://backstage.io/docs/features/techdocs/",children:"TechDocs"}),"\namongst other things."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Now, that we know what it does, let's run it!"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"npx @backstage/create-app@latest\n"})}),"\n",(0,r.jsx)(t.p,{children:"This may take a few minutes to fully install everything. Don't stress if the loading seems to be spinning nonstop, there's a lot going on in the background."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["If this fails on the ",(0,r.jsx)(t.code,{children:"yarn install"})," step, it's likely that you will need to install some additional dependencies which are used to configure ",(0,r.jsx)(t.code,{children:"isolated-vm"}),". You can find out more in their ",(0,r.jsx)(t.a,{href:"https://github.com/laverdet/isolated-vm#requirements",children:"requirements section"}),", and then run ",(0,r.jsx)(t.code,{children:"yarn install"})," manually again after you've completed those steps."]})}),"\n",(0,r.jsx)(t.h2,{id:"2-run-the-backstage-app",children:"2. Run the Backstage app"}),"\n",(0,r.jsxs)(t.p,{children:["You Backstage app is fully installed and ready to be run! Now that the installation is complete, you can go to the application directory and start the app using the ",(0,r.jsx)(t.code,{children:"yarn dev"})," command. The ",(0,r.jsx)(t.code,{children:"yarn dev"})," command will run both the frontend and backend as separate processes (named ",(0,r.jsx)(t.code,{children:"[0]"})," and ",(0,r.jsx)(t.code,{children:"[1]"}),") in the same window."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"cd my-backstage-app # your app name\nyarn dev\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Screenshot of the command output, with the message web pack compiled successfully",src:n(115575).Z+"",width:"1029",height:"197"})}),"\n",(0,r.jsx)(t.p,{children:"Here again, there's a small wait for the frontend to start up. Once the frontend is built, your browser window should automatically open."}),"\n",(0,r.jsx)(t.admonition,{title:"Browser window didn't open",type:"tip",children:(0,r.jsxs)(t.p,{children:["When you see the message ",(0,r.jsx)(t.code,{children:"[0] webpack compiled successfully"}),", you can navigate directly to ",(0,r.jsx)(t.code,{children:"http://localhost:3000"})," to see your Backstage app."]})}),"\n",(0,r.jsx)(t.p,{children:"You can start exploring the demo immediately."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Screenshot of the Backstage portal.",src:n(391744).Z+"",width:"1910",height:"1058"})}),"\n",(0,r.jsx)(t.h2,{id:"recap",children:"Recap"}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial walked through how to deploy Backstage using the ",(0,r.jsx)(t.code,{children:"npx @backstage/create-app@latest"})," command. That command created a new directory that holds your new Backstage app. That app is currently only configured for development purposes, as it is using an in-memory database and contains demo data."]}),"\n",(0,r.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,r.jsxs)(t.p,{children:["Choose the correct next steps for your user role, if you're likely to be deploying and managing a Backstage instance for your organization, look through the ",(0,r.jsx)(t.a,{href:"#admin",children:"Admin"})," section. If you're likely to be developing on/for Backstage, take a look through the ",(0,r.jsx)(t.a,{href:"#developer",children:"Developer"})," section."]}),"\n",(0,r.jsx)(t.h3,{id:"admin",children:"Admin"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Deploying a production server\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/deployment/docker",children:"Deploying with Docker"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/deployment/k8s",children:"Deploying with Kubernetes"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/deployment/backstage-deploy/aws-lightsail",children:"Deploying with AWS Lightsail"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["Configuring Backstage\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/config/database",children:"Database"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/config/authentication",children:"Authentication"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/configure-app-with-plugins",children:"Plugins"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/app-custom-theme",children:"Theme"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/homepage",children:"Homepage"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"developer",children:"Developer"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Using your Backstage instance\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/logging-in",children:"Logging into Backstage"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/register-a-component",children:"Register a component"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"/docs/getting-started/create-a-component",children:"Create a new component"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["Share your experiences, comments, or suggestions with us:\n",(0,r.jsx)(t.a,{href:"https://discord.gg/backstage-687207715902193673",children:"on discord"}),", file issues for any\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=help+wanted&template=feature_template.md",children:"feature"}),"\nor\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=plugin&template=plugin_template.md&title=%5BPlugin%5D+THE+PLUGIN+NAME",children:"plugin suggestions"}),",\nor\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/issues/new?labels=bug&template=bug_template.md",children:"bugs"}),"\nyou have, and feel free to\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/backstage/blob/master/CONTRIBUTING.md",children:"contribute"}),"!"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},441742:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-app-output-a47b1569049245f0993e1b6fa07589dd.png"},391744:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/portal-b6d936acea71e18b0f5a39d78b9c0195.png"},115575:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/startup-a67006576cf7f5099d36c8660cf6017a.png"},371426:(e,t,n)=>{var r=n(827378),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:d,props:s,_owner:i.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),p=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}function x(){}function j(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=j.prototype=new x;b.constructor=j,g(b,y.prototype),b.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,v={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,s={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!_.hasOwnProperty(a)&&(s[a]=t[a]);var l=arguments.length-2;if(1===l)s.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===s[a]&&(s[a]=l[a]);return{$$typeof:n,type:e,key:o,ref:i,props:s,_owner:v.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var B=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,a,s,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return o=o(l=e),e=""===s?"."+E(l,0):s,k(o)?(a="",null!=e&&(a=e.replace(B,"$&/")+"/"),R(o,t,a,"",(function(e){return e}))):null!=o&&(C(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(B,"$&/")+"/")+e)),t.push(o)),1;if(l=0,s=""===s?".":s+":",k(e))for(var c=0;c<e.length;c++){var d=s+E(i=e[c],c);l+=R(i,t,a,d,o)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),c=0;!(i=e.next()).done;)l+=R(i=i.value,t,a,d=s+E(i,c++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function T(e,t,n){if(null==e)return e;var r=[],a=0;return R(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},O={transition:null},N={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:O,ReactCurrentOwner:v};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=o,t.PureComponent=j,t.StrictMode=s,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),s=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=v.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)w.call(t,c)&&!_.hasOwnProperty(c)&&(a[c]=void 0===t[c]&&void 0!==l?l[c]:t[c])}var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}return{$$typeof:n,type:e.type,key:s,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=O.transition;O.transition={};try{e()}finally{O.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return D.current.useCallback(e,t)},t.useContext=function(e){return D.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return D.current.useDeferredValue(e)},t.useEffect=function(e,t){return D.current.useEffect(e,t)},t.useId=function(){return D.current.useId()},t.useImperativeHandle=function(e,t,n){return D.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return D.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return D.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return D.current.useMemo(e,t)},t.useReducer=function(e,t,n){return D.current.useReducer(e,t,n)},t.useRef=function(e){return D.current.useRef(e)},t.useState=function(e){return D.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return D.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return D.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(667294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);