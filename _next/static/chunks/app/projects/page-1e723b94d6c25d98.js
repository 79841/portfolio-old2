(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[895],{1472:function(e,t,r){Promise.resolve().then(r.t.bind(r,5250,23)),Promise.resolve().then(r.bind(r,7763)),Promise.resolve().then(r.bind(r,730))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return o}});let n=r(1024),l=r(8630),s=r(6184),i=r(1749),c=n._(r(536)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},o=i.Image},995:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),l=r(1396),s=r.n(l);r(2265);let i=e=>{let{project:t}=e;return(0,n.jsx)(s(),{href:t.link,children:(0,n.jsx)("div",{className:"hover:font-semibold",children:t.name})})}},7763:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetail:function(){return u}});var n=r(7437),l=r(6691),s=r.n(l),i=r(1396),c=r.n(i),a=r(4033);r(2265);var o=r(2410);let u=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex w-[40rem] animate-show-up flex-col items-start gap-4 overflow-scroll opacity-0 scrollbar-hide lg:mt-32 lg:h-[calc(100%-8rem)]",children:t})},d=e=>{let{imageUrl:t,style:r}=e;return(0,n.jsx)("div",{className:"absolute h-60 hover:z-50",style:r,children:(0,n.jsx)(s(),{src:t,alt:t.slice(t.lastIndexOf(".")),fill:!0,priority:!0,className:"shadow-x"})},t)},f=()=>(0,n.jsx)("div",{className:"flex h-60 w-full items-center justify-center border border-primary text-xl text-muted-foreground sm:text-2xl",children:"No Images"});u.Header=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:t})},u.Title=e=>{let{title:t}=e,r=(0,a.useRouter)();return(0,n.jsxs)("h1",{className:"flex items-center text-lg sm:text-2xl",children:[(0,n.jsx)("button",{onClick:()=>r.back(),children:(0,n.jsx)(o.u1R,{})}),t]})},u.Description=e=>{let{description:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})},u.Images=e=>{let{images:t,imageWidth:r}=e;return(0,n.jsx)("div",{className:"flex w-full justify-center",children:t.length>0?(0,n.jsx)("div",{className:"relative h-60 w-full",children:t.reverse().map((e,l)=>{let s={left:"calc((40rem - ".concat(r,") / ").concat(t.length-1," * ").concat(t.length-1-l,")"),width:r};return(0,n.jsx)(d,{style:s,imageUrl:e},e)})}):(0,n.jsx)(f,{})})},u.Content=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col gap-2 text-sm sm:text-base",children:t})},u.GithubUrls=e=>{let{githubUrls:t}=e;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(o.JOq,{className:"text-lg"}),t.map(e=>(0,n.jsx)(c(),{href:e,children:e.split("/").at(-1)},e))]})})},u.TechStack=e=>{let{techStack:t}=e;return(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("span",{children:"/"}),e]},e))})},u.Date=e=>{let{date:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})}},730:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectList:function(){return a}});var n=r(7437),l=r(5668);r(2265);var s=r(995),i=r(8388),c=r(4351);let a=()=>{let[e,t]=(0,c.W)();return(0,n.jsx)("div",{ref:e,className:"flex flex-col items-end",children:Object.values(l.nD).map(e=>(0,n.jsx)(t,{children:(0,n.jsx)(i.J,{isSelected:!1,children:(0,n.jsx)(s.I,{project:e})})},e.name))})}},8388:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});var n=r(7437),l=r(2169);r(2265);let s=e=>{let{isSelected:t,children:r}=e;return(0,n.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,n.jsx)("div",{children:"*"}),(0,n.jsx)("div",{className:(0,l.cn)(t&&"font-semibold"),children:r})]})}},4351:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(7437),l=r(9044),s=r(7492),i=r(2265);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[r,c]=(0,l.H)(),a="show-in-box";return(0,i.useEffect)(()=>{c(".".concat(a),{opacity:[0,1]},{duration:e,delay:(0,s.E)(t,{startDelay:.15})})},[c,t,e]),[r,e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"".concat(a," origin-right"),children:t})}]}},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(7042),l=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}},6691:function(e,t,r){e.exports=r(7447)},4033:function(e,t,r){e.exports=r(5313)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function a(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,l=e.attr,s=e.size,a=e.title,o=c(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[400,329,890,749,396,299,971,938,744],function(){return e(e.s=1472)}),_N_E=e.O()}]);