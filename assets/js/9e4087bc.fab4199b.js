"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[853608],{432524:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var r=a(667294),l=a(931984),n=a(592210),c=a(789712),s=a(533737),i=a(524999);function m({year:e,posts:t}){return r.createElement(r.Fragment,null,r.createElement(i.Z,{as:"h3",id:e},e),r.createElement("ul",null,t.map((e=>r.createElement("li",{key:e.metadata.date},r.createElement(l.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function o({years:e}){return r.createElement("section",{className:"margin-vert--lg"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},e.map(((e,t)=>r.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},r.createElement(m,e)))))))}function h({archive:e}){const t=(0,n.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),a=(0,n.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),l=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0];var r;const l=null!==(r=e.get(a))&&void 0!==r?r:[];return e.set(a,[t,...l])}),new Map);return Array.from(t,(([e,t])=>({year:e,posts:t})))}(e.blogPosts);return r.createElement(r.Fragment,null,r.createElement(c.d,{title:t,description:a}),r.createElement(s.Z,null,r.createElement("header",{className:"hero hero--primary"},r.createElement("div",{className:"container"},r.createElement(i.Z,{as:"h1",className:"hero__title"},t),r.createElement("p",{className:"hero__subtitle"},a))),r.createElement("main",null,l.length>0&&r.createElement(o,{years:l}))))}}}]);