if(!self.define){let e,t={};const i=(i,s)=>(i=new URL(i+".js",s).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let o={};const c=e=>i(e,n),l={module:{uri:n},exports:o,require:c};t[n]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-915e8d08"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"f3b10228a6eb80336a5583c824c21f08"},{url:"main.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"static/petuh.jpg",revision:"4582bdc15a3bce1b2868bb4b48e8f84b"}],{})}));
//# sourceMappingURL=service-worker.js.map
