(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[432],{2898:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(2265),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let s=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:i=24,strokeWidth:c=2,absoluteStrokeWidth:a,className:o="",children:u,...d},f)=>(0,n.createElement)("svg",{ref:f,...l,width:i,height:i,stroke:r,strokeWidth:a?24*Number(c)/Number(i):c,className:["lucide",`lucide-${s(e)}`,o].join(" "),...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(u)?u:[u]]));return r.displayName=`${e}`,r}},5505:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let n=(0,r(2898).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return o}});let n=r(1024),l=r(8630),s=r(6184),i=r(1749),c=n._(r(536)),a=e=>{(0,s.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,l.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},o=i.Image},995:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),l=r(1396),s=r.n(l);r(2265);let i=e=>{let{project:t}=e;return(0,n.jsx)(s(),{href:t.link,children:(0,n.jsx)("div",{className:"hover:font-semibold",children:t.name})})}},730:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectList:function(){return a}});var n=r(7437),l=r(5668);r(2265);var s=r(995),i=r(8388),c=r(4351);let a=()=>{let[e,t]=(0,c.W)();return(0,n.jsx)("div",{ref:e,className:"flex flex-col items-end",children:Object.values(l.nD).map(e=>(0,n.jsx)(t,{children:(0,n.jsx)(i.J,{isSelected:!1,children:(0,n.jsx)(s.I,{project:e})})},e.name))})}},7595:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetail:function(){return h}});var n=r(7437),l=r(1396),s=r.n(l),i=r(4033),c=r(2265),a=r(2410),o=r(2169),u=r(6691),d=r.n(u);let f=e=>{let{src:t,style:r}=e;return(0,n.jsx)("div",{className:(0,o.cn)("absolute h-60 hover:scale-110"),style:r,children:(0,n.jsx)(d(),{src:t,alt:t.slice(t.lastIndexOf(".")),fill:!0,priority:!0,className:"shadow-x"})},t)},m=()=>(0,n.jsx)("div",{className:"flex h-40 w-full items-center justify-center text-xl text-muted-foreground sm:text-xl",children:"No Image available.."});var x=r(5505);let h=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex h-full w-full max-w-[50rem] animate-show-up flex-col items-start gap-8 overflow-scroll opacity-0 scrollbar-hide sm:pl-8",children:t})};h.Header=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:t})},h.Title=e=>{let{title:t}=e,r=(0,i.useRouter)();return(0,n.jsxs)("h1",{className:"flex items-center gap-2 text-lg sm:text-2xl",children:[(0,n.jsx)("button",{className:"border border-primary",onClick:()=>r.back(),children:(0,n.jsx)(a.u1R,{})}),t]})},h.Description=e=>{let{description:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})},h.Carousel=e=>{let{images:t,imageWidth:r}=e,[l,s]=(0,c.useState)(0);return(0,n.jsx)("div",{className:"flex w-full flex-col items-center gap-2",children:t.length>0?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"relative h-60 w-full",children:t.map((e,i)=>{let c=i===l,a={left:"calc((100% - ".concat(r,") / ").concat(t.length-1," * ").concat(i,")"),width:r,zIndex:c?"50":"".concat(10-i),transform:c?"scale(1.1)":""};return(0,n.jsx)("div",{onClick:()=>s(i),children:(0,n.jsx)(f,{style:a,src:e})},e)})}),(0,n.jsx)("div",{className:"flex items-center pt-2",children:Array.from({length:t.length}).map((e,t)=>(0,n.jsx)("div",{className:(0,o.cn)("text-muted-foreground",l===t&&"text-primary"),onClick:()=>s(t),children:(0,n.jsx)(x.Z,{})},t))})]}):(0,n.jsx)(m,{})})},h.Content=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col gap-4 text-sm sm:text-base",children:t})},h.GithubUrls=e=>{let{githubUrls:t}=e;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsxs)("div",{className:"flex flex-wrap items-center gap-2 text-nowrap",children:[(0,n.jsx)(a.JOq,{className:"text-lg"}),t.map(e=>(0,n.jsx)(s(),{href:e,children:e.split("/").at(-1)},e))]})})},h.TechStack=e=>{let{techStack:t}=e;return(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("span",{children:"/"}),e]},e))})},h.Date=e=>{let{date:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})}},8388:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});var n=r(7437),l=r(2169);r(2265);let s=e=>{let{isSelected:t,children:r}=e;return(0,n.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,n.jsx)("div",{children:"*"}),(0,n.jsx)("div",{className:(0,l.cn)(t&&"font-semibold"),children:r})]})}},4351:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(7437),l=r(9044),s=r(7492),i=r(2265);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[r,c]=(0,l.H)(),a="show-in-box";return(0,i.useEffect)(()=>{c(".".concat(a),{opacity:[0,1]},{duration:e,delay:(0,s.E)(t,{startDelay:.15})})},[c,t,e]),[r,e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"".concat(a," origin-right"),children:t})}]}},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(7042),l=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}},6691:function(e,t,r){e.exports=r(7447)},1396:function(e,t,r){e.exports=r(5250)},4033:function(e,t,r){e.exports=r(5313)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function a(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,l=e.attr,s=e.size,a=e.title,o=c(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(l)}}}]);