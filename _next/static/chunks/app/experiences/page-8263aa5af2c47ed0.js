(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[220],{8226:function(e,t,n){Promise.resolve().then(n.bind(n,5026)),Promise.resolve().then(n.bind(n,1797)),Promise.resolve().then(n.bind(n,6348)),Promise.resolve().then(n.bind(n,3393))},7447:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return u},default:function(){return o}});let r=n(1024),i=n(8630),c=n(6184),l=n(1749),s=r._(n(536)),u=e=>{(0,c.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,i.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},o=l.Image},5026:function(e,t,n){"use strict";n.r(t),n.d(t,{ExperienceDetail:function(){return s}});var r=n(7437),i=n(2853);n(2265);var c=n(5338),l=n(956);let s=()=>{let e=(0,c.Eq)();return null===e?null:(0,r.jsxs)(i.t,{children:[(0,r.jsx)(l.F,{src:e.image,alt:e.title}),(0,r.jsxs)("div",{className:"mt-2",children:[(0,r.jsx)("div",{className:"flex justify-center",children:e.title}),(0,r.jsx)("div",{className:"flex justify-center text-sm text-muted-foreground",children:e.content}),(0,r.jsx)("div",{className:"flex justify-center text-sm text-muted-foreground",children:e.period})]})]})}},1797:function(e,t,n){"use strict";n.r(t),n.d(t,{ExperienceList:function(){return o}});var r=n(7437),i=n(5668),c=n(4351);n(2265);var l=n(8388),s=n(5338);let u=e=>{let{experience:t}=e,n=(0,s.Eq)(),{selectExperience:i,unselectExperience:c}=(0,s.Fl)(),u=(null==n?void 0:n.title)===t.title;return(0,r.jsx)(l.J,{isSelected:u,children:(0,r.jsx)("span",{onClick:()=>{u?c():i(t)},className:"hover:font-semibold",children:t.title})})},o=()=>{let[e,t]=(0,c.W)();return(0,r.jsx)("div",{ref:e,className:"flex flex-col items-end",children:i.$c.map(e=>(0,r.jsx)(t,{children:(0,r.jsx)(u,{experience:e})},e.title))})}},6348:function(e,t,n){"use strict";n.r(t),n.d(t,{SelectedExperienceContext:function(){return i},SelectedExperienceDispatchContext:function(){return c},useSelectedExperienceContext:function(){return l},useSelectedExperienceDispatchContext:function(){return s}});var r=n(2265);let i=(0,r.createContext)(null),c=(0,r.createContext)({selectExperience(){},unselectExperience(){}}),l=()=>(0,r.useContext)(i),s=()=>(0,r.useContext)(c)},3393:function(e,t,n){"use strict";n.r(t),n.d(t,{SelectedExperienceContextProvider:function(){return s}});var r=n(7437),i=n(2265),c=n(5338);let l=(e,t)=>{switch(t.type){case"SELECT":return t.experience;case"UNSELECT":return null;default:return e}},s=e=>{let{children:t}=e,[n,s]=(0,i.useReducer)(l,null);return(0,r.jsx)(c.Ii.Provider,{value:n,children:(0,r.jsx)(c.Sl.Provider,{value:{selectExperience:e=>s({type:"SELECT",experience:e}),unselectExperience:()=>s({type:"UNSELECT"})},children:t})})}},5338:function(e,t,n){"use strict";n.d(t,{Eq:function(){return r.useSelectedExperienceContext},Fl:function(){return r.useSelectedExperienceDispatchContext},Ii:function(){return r.SelectedExperienceContext},Sl:function(){return r.SelectedExperienceDispatchContext}});var r=n(6348);n(3393)},2853:function(e,t,n){"use strict";n.d(t,{t:function(){return i}});var r=n(7437);n(2265);let i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"static left-[50%] top-[50%] lg:absolute lg:w-96 lg:-translate-x-[50%] lg:-translate-y-[50%] lg:pt-0",children:(0,r.jsx)("div",{className:"flex flex-col  items-center justify-center gap-2 lg:h-60",children:t})})}},956:function(e,t,n){"use strict";n.d(t,{F:function(){return l}});var r=n(7437),i=n(6691),c=n.n(i);n(2265);let l=e=>{let{src:t,alt:n}=e;return(0,r.jsx)("div",{className:"flex h-16 w-16 items-center justify-center overflow-hidden",children:(0,r.jsx)(c(),{src:t,alt:n,width:60,height:60,className:"object-cover"})})}},8388:function(e,t,n){"use strict";n.d(t,{J:function(){return c}});var r=n(7437),i=n(2169);n(2265);let c=e=>{let{isSelected:t,children:n}=e;return(0,r.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,r.jsx)("div",{children:"*"}),(0,r.jsx)("div",{className:(0,i.cn)(t&&"font-semibold"),children:n})]})}},4351:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var r=n(7437),i=n(9044),c=n(7492),l=n(2265);let s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[n,s]=(0,i.H)(),u="show-in-box";return(0,l.useEffect)(()=>{s(".".concat(u),{opacity:[0,1]},{duration:e,delay:(0,c.E)(t,{startDelay:.15})})},[s,t,e]),[n,e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"".concat(u," origin-right"),children:t})}]}},2169:function(e,t,n){"use strict";n.d(t,{cn:function(){return c}});var r=n(7042),i=n(4769);function c(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,i.m6)((0,r.W)(t))}},6691:function(e,t,n){e.exports=n(7447)}},function(e){e.O(0,[329,890,749,299,971,938,744],function(){return e(e.s=8226)}),_N_E=e.O()}]);