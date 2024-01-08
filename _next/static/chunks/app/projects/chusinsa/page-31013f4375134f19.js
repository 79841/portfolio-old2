(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[231],{5853:function(e,t,r){Promise.resolve().then(r.bind(r,7616))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return a},default:function(){return o}});let n=r(1024),s=r(8630),l=r(6184),i=r(1749),c=n._(r(536)),a=e=>{(0,l.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:c.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},o=i.Image},995:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),s=r(1396),l=r.n(s);r(2265);let i=e=>{let{project:t}=e;return(0,n.jsx)(l(),{href:t.link,children:(0,n.jsx)("div",{className:"hover:font-semibold",children:t.name})})}},7763:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetail:function(){return u}});var n=r(7437),s=r(6691),l=r.n(s),i=r(1396),c=r.n(i),a=r(4033);r(2265);var o=r(2410);let u=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex w-[40rem] animate-show-up flex-col items-start gap-4 overflow-scroll opacity-0 scrollbar-hide lg:mt-32 lg:h-[calc(100%-8rem)]",children:t})},d=e=>{let{imageUrl:t,style:r}=e;return(0,n.jsx)("div",{className:"absolute h-60 hover:z-50",style:r,children:(0,n.jsx)(l(),{src:t,alt:t.slice(t.lastIndexOf(".")),fill:!0,priority:!0,className:"shadow-x"})},t)},f=()=>(0,n.jsx)("div",{className:"flex h-60 w-full items-center justify-center border border-primary text-xl text-muted-foreground sm:text-2xl",children:"No Images"});u.Header=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:t})},u.Title=e=>{let{title:t}=e,r=(0,a.useRouter)();return(0,n.jsxs)("h1",{className:"flex -translate-x-2 items-center text-xl sm:text-2xl",children:[(0,n.jsx)("button",{onClick:()=>r.back(),children:(0,n.jsx)(o.u1R,{})}),t]})},u.Description=e=>{let{description:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})},u.Images=e=>{let{images:t,imageWidth:r}=e;return(0,n.jsx)("div",{className:"flex w-full justify-center",children:t.length>0?(0,n.jsx)("div",{className:"relative h-60 w-full",children:t.reverse().map((e,s)=>{let l={left:"calc((40rem - ".concat(r,") / ").concat(t.length-1," * ").concat(t.length-1-s,")"),width:r};return(0,n.jsx)(d,{style:l,imageUrl:e},e)})}):(0,n.jsx)(f,{})})},u.Content=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col gap-2 text-sm sm:text-base",children:t})},u.GithubUrls=e=>{let{githubUrls:t}=e;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(o.JOq,{className:"text-lg"}),t.map(e=>(0,n.jsx)(c(),{href:e,children:e.split("/").at(-1)},e))]})})},u.TechStack=e=>{let{techStack:t}=e;return(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("span",{children:"/"}),e]},e))})},u.Date=e=>{let{date:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})}},730:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectList:function(){return a}});var n=r(7437),s=r(5668);r(2265);var l=r(995),i=r(8388),c=r(4351);let a=()=>{let[e,t]=(0,c.W)();return(0,n.jsx)("div",{ref:e,className:"flex flex-col items-end",children:Object.values(s.nD).map(e=>(0,n.jsx)(t,{children:(0,n.jsx)(i.J,{isSelected:!1,children:(0,n.jsx)(l.I,{project:e})})},e.name))})}},2679:function(e,t,r){"use strict";r.d(t,{re:function(){return n.ProjectDetail}}),r(730);var n=r(7763);r(995)},7616:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(5668);r(2265);var l=r(2679),i=r(8968),c=r(6691),a=r.n(c);t.default=()=>{let e=s.nD.chusinsa;return(0,n.jsxs)(l.re,{children:[(0,n.jsxs)(l.re.Header,{children:[(0,n.jsx)(l.re.Title,{title:e.name}),(0,n.jsx)(l.re.Description,{description:e.description})]}),(0,n.jsx)(l.re.Images,{images:e.images,imageWidth:"24rem"}),(0,n.jsxs)(l.re.Content,{children:[(0,n.jsx)("div",{children:"현재 존재하는 온라인 의류 쇼핑몰의 구매 이력, 상품 클릭 여부, 나이 등을 종합하여 개인에게 의류를 추천해 주는 쇼핑몰 입니다. 5명이서 진행한 프로젝트로 쇼핑몰의 프론트엔드와 백엔드의 전반적인 개발을 맡았습니다."}),(0,n.jsx)("div",{children:"아래 그림과 같이 대규모 온라인 쇼핑몰에서 상품과 리뷰 등 학습을 위한 데이터를 크롤링하고 가공된 데이터를 제공하는 API 서버와 쇼핑몰을 제작했습니다."}),(0,n.jsx)("div",{className:"relative h-48",children:(0,n.jsx)(a(),{src:"/images/projects/chusinsa/chusinsa_architecture.avif",alt:"chusinsa architecture",fill:!0,className:"object-contain"})}),(0,n.jsxs)("div",{children:["백엔드는 ML 엔지니어와 협업을 위해 파이썬 웹 프레임워크인 FastAPI를 사용했고 프론트엔드는 Nextjs를 사용했습니다. Nextjs를 처음 사용한 프로젝트로"," ",(0,n.jsx)(i.a,{children:"hydration 과정에서 발생하는 에러를 처리"}),"하면서 Nextjs의 동작 원리를 깊게 다지고 가는 계기가 되었습니다. 백엔드에서는 OAuth2 인증방식을 직접 구현하였고 쿠키를 통한 인증을 자동화하기 위해"," ",(0,n.jsx)(i.a,{children:"FastAPI OAuth2 상속받아 의존성 주입"}),"을 하였습니다. 데이터베이스 측면에서는 처리하는 데이터양이 방대하여 데이터베이스를 설계할때 팀원들과 함께 정규화에 집중했습니다."]}),(0,n.jsx)("div",{children:"열정적인 팀원들과 함께 개발하며 협업의 재미를 느낄 수 있었던 프로젝트입니다."})]}),(0,n.jsx)(l.re.GithubUrls,{githubUrls:e.github}),(0,n.jsx)(l.re.TechStack,{techStack:e.techStack}),(0,n.jsx)(l.re.Date,{date:e.date})]})}},8388:function(e,t,r){"use strict";r.d(t,{J:function(){return l}});var n=r(7437),s=r(2169);r(2265);let l=e=>{let{isSelected:t,children:r}=e;return(0,n.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,n.jsx)("div",{children:"*"}),(0,n.jsx)("div",{className:(0,s.cn)(t&&"font-semibold"),children:r})]})}},8968:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(7437);r(2265);let s=e=>{let{children:t}=e;return(0,n.jsx)("span",{className:"bg-primary px-1 text-secondary",children:t})}},4351:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(7437),s=r(9044),l=r(7492),i=r(2265);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[r,c]=(0,s.H)(),a="show-in-box";return(0,i.useEffect)(()=>{c(".".concat(a),{opacity:[0,1]},{duration:e,delay:(0,l.E)(t,{startDelay:.15})})},[c,t,e]),[r,e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"".concat(a," origin-right"),children:t})}]}},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(7042),s=r(4769);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},6691:function(e,t,r){e.exports=r(7447)},4033:function(e,t,r){e.exports=r(5313)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function a(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,s=e.attr,l=e.size,a=e.title,o=c(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[400,329,890,749,396,299,971,938,744],function(){return e(e.s=5853)}),_N_E=e.O()}]);