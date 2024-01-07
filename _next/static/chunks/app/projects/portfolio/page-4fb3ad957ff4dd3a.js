(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[756],{2296:function(e,t,r){Promise.resolve().then(r.bind(r,9917))},995:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),s=r(1396),l=r.n(s);r(2265);let i=e=>{let{project:t}=e;return(0,n.jsx)(l(),{href:t.link,children:(0,n.jsx)("div",{className:"hover:font-semibold",children:t.name})})}},7763:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetail:function(){return d}});var n=r(7437),s=r(6691),l=r.n(s),i=r(1396),c=r.n(i),a=r(4033);r(2265);var o=r(2410);let d=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex w-[40rem] animate-show-up flex-col items-start gap-4 overflow-scroll opacity-0 scrollbar-hide lg:mt-32 lg:h-[calc(100%-8rem)]",children:t})},u=e=>{let{imageUrl:t,style:r}=e;return(0,n.jsx)("div",{className:"absolute h-60 hover:z-50",style:r,children:(0,n.jsx)(l(),{src:t,alt:t.slice(t.lastIndexOf(".")),fill:!0,priority:!0,className:"shadow-x"})},t)},h=()=>(0,n.jsx)("div",{className:"flex h-60 w-full items-center justify-center border border-primary text-2xl text-muted-foreground",children:"No Images"});d.Header=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:t})},d.Title=e=>{let{title:t}=e,r=(0,a.useRouter)();return(0,n.jsxs)("h1",{className:"flex -translate-x-2 items-center text-2xl",children:[(0,n.jsx)("button",{onClick:()=>r.back(),children:(0,n.jsx)(o.u1R,{})}),t]})},d.Description=e=>{let{description:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})},d.Images=e=>{let{images:t,imageWidth:r}=e;return(0,n.jsx)("div",{className:"flex w-full justify-center",children:t.length>0?(0,n.jsx)("div",{className:"relative h-60 w-full",children:t.reverse().map((e,s)=>{let l={left:"calc((40rem - ".concat(r,") / ").concat(t.length-1," * ").concat(t.length-1-s,")"),width:r};return(0,n.jsx)(u,{style:l,imageUrl:e},e)})}):(0,n.jsx)(h,{})})},d.Content=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col gap-2",children:t})},d.GithubUrls=e=>{let{githubUrls:t}=e;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(o.JOq,{className:"text-lg"}),t.map(e=>(0,n.jsx)(c(),{href:e,children:e.split("/").at(-1)},e))]})})},d.TechStack=e=>{let{techStack:t}=e;return(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("span",{children:"/"}),e]},e))})},d.Date=e=>{let{date:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})}},730:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectList:function(){return a}});var n=r(7437),s=r(5668);r(2265);var l=r(995),i=r(8388),c=r(4351);let a=()=>{let[e,t]=(0,c.W)();return(0,n.jsx)("div",{ref:e,className:"flex flex-col items-end",children:Object.values(s.nD).map(e=>(0,n.jsx)(t,{children:(0,n.jsx)(i.J,{isSelected:!1,children:(0,n.jsx)(l.I,{project:e})})},e.name))})}},2679:function(e,t,r){"use strict";r.d(t,{re:function(){return n.ProjectDetail}}),r(730);var n=r(7763);r(995)},9917:function(e,t,r){"use strict";r.r(t);var n=r(7437),s=r(5668);r(2265);var l=r(2679),i=r(8968),c=r(6691),a=r.n(c);t.default=()=>{let e=s.nD.portfolio;return(0,n.jsxs)(l.re,{children:[(0,n.jsxs)(l.re.Header,{children:[(0,n.jsx)(l.re.Title,{title:e.name}),(0,n.jsx)(l.re.Description,{description:e.description})]}),(0,n.jsx)(l.re.Images,{images:e.images,imageWidth:"20rem"}),(0,n.jsxs)(l.re.Content,{children:[(0,n.jsx)("div",{children:"직접 개발한 포트폴리오 사이트 입니다. 현재는 사용하지 않지만 제작 과정에서 많은 것을 배울 수 있었던 의미 있는 프로젝트 입니다."}),(0,n.jsxs)("div",{children:[(0,n.jsx)(i.a,{children:"Nextjs14 app router"}),"과 shadcn을 이용하여 개발하였습니다. 이 프로젝트는 페이지 성능 최적화에 중점을 둔 프로젝트입니다. 페이지에 크기가 큰 이미지가 많고 라이트모드 이미지와 다크모드 이미지를 각각 제공하면서 페이지 성능이 떨어지는 문제가 발생했습니다. 깃 허브 페이지로 제공하기 위해 static export를 했기 때문에 Nextjs의 이미지 최적화 기능을 사용할 수 없었습니다. 직접 최적화하기 위해 먼저 페이지에 존재하는"," ",(0,n.jsx)(i.a,{children:"png나 jpg 이미지를 avif"}),"로 바꾸었습니다. avif 포맷은 이미지 압축률이 뛰어나기에 페이지 성능이 크게 향상되었습니다. 또한 Nextjs에서 Image 컴포넌트는 lazy loading으로 우선순위가 미뤄지는데 페이지 로드와 함께 바로 보여야할 이미지는"," ",(0,n.jsx)(i.a,{children:"priority를 지정하여 빠르게 로드"}),"하도록 했습니다. 그 밖에도 CSS 등 여러 최적화를 진행하여 light house 기준 모바일 성능 94점, 데스크탑 성능 100점을 달성하였습니다."]}),(0,n.jsxs)("div",{className:"flex justify-center gap-4",children:[(0,n.jsx)("div",{className:"relative h-44 w-32 border border-primary",children:(0,n.jsx)(a(),{src:"/images/projects/portfolio/mobile_lighthouse.avif",fill:!0,alt:"lighthouse mobile"})}),(0,n.jsx)("div",{className:"relative h-44 w-32 border border-primary",children:(0,n.jsx)(a(),{src:"/images/projects/portfolio/desktop_lighthouse.avif",fill:!0,alt:"lighthouse desktop"})})]}),(0,n.jsxs)("div",{children:["페이지 접근성을 위해"," ",(0,n.jsx)(i.a,{children:"Opengraph를 사용하여 미디어 노출시 미리보기"}),"와 제목, 설명들이 나오도록 하였고 완전한 반응형 사이트로 제작하였습니다."]}),(0,n.jsxs)("div",{children:["또한, 다크모드를 지원하면서 깃허브 히트맵을 표시할 때, 현재 테마가 시스템일 경우 라이트모드로 고정되는 버그가 있었고"," ",(0,n.jsx)(i.a,{children:"system에서 사용하는 테마를 가져오는 커스텀 훅"}),"을 만들어 문제를 해결했습니다."]}),(0,n.jsx)("div",{children:"포트폴리오라는 간단한 사이트지만 페이지 최적화, opengraph 등 여러가지로 도움이되는 프로젝트였습니다."})]}),(0,n.jsx)(l.re.GithubUrls,{githubUrls:e.github}),(0,n.jsx)(l.re.TechStack,{techStack:e.techStack}),(0,n.jsx)(l.re.Date,{date:e.date})]})}},8388:function(e,t,r){"use strict";r.d(t,{J:function(){return l}});var n=r(7437),s=r(2169);r(2265);let l=e=>{let{isSelected:t,children:r}=e;return(0,n.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,n.jsx)("div",{children:"*"}),(0,n.jsx)("div",{className:(0,s.cn)(t&&"font-semibold"),children:r})]})}},8968:function(e,t,r){"use strict";r.d(t,{a:function(){return s}});var n=r(7437);r(2265);let s=e=>{let{children:t}=e;return(0,n.jsx)("span",{className:"bg-primary px-1 text-secondary",children:t})}},4351:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(7437),s=r(9044),l=r(7492),i=r(2265);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[r,c]=(0,s.H)(),a="show-in-box";return(0,i.useEffect)(()=>{c(".".concat(a),{opacity:[0,1]},{duration:e,delay:(0,l.E)(t,{startDelay:.15})})},[c,t,e]),[r,e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"".concat(a," origin-right"),children:t})}]}},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(7042),s=r(4769);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}},4033:function(e,t,r){e.exports=r(5313)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(2265),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=n.createContext&&n.createContext(s),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var s in t=arguments[r])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)0>t.indexOf(n[s])&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]]);return r};function a(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,s=e.attr,l=e.size,a=e.title,o=c(e,["attr","size","title"]),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==l?n.createElement(l.Consumer,null,function(e){return t(e)}):t(s)}}},function(e){e.O(0,[400,329,890,691,396,299,971,938,744],function(){return e(e.s=2296)}),_N_E=e.O()}]);