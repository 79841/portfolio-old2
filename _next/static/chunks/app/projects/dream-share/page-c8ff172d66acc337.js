(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[754],{8039:function(e,t,r){Promise.resolve().then(r.bind(r,3113))},995:function(e,t,r){"use strict";r.d(t,{I:function(){return i}});var n=r(7437),l=r(1396),s=r.n(l);r(2265);let i=e=>{let{project:t}=e;return(0,n.jsx)(s(),{href:t.link,children:(0,n.jsx)("div",{className:"hover:font-semibold",children:t.name})})}},7763:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectDetail:function(){return u}});var n=r(7437),l=r(6691),s=r.n(l),i=r(1396),c=r.n(i),a=r(4033);r(2265);var o=r(2410);let u=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex w-[40rem] animate-show-up flex-col items-start gap-4 overflow-scroll opacity-0 scrollbar-hide lg:mt-32 lg:h-[calc(100%-8rem)]",children:t})},d=e=>{let{imageUrl:t,style:r}=e;return(0,n.jsx)("div",{className:"absolute h-60 hover:z-50",style:r,children:(0,n.jsx)(s(),{src:t,alt:t.slice(t.lastIndexOf(".")),fill:!0,priority:!0,className:"shadow-x"})},t)},h=()=>(0,n.jsx)("div",{className:"flex h-60 w-full items-center justify-center border border-primary text-2xl text-muted-foreground",children:"No Images"});u.Header=e=>{let{children:t}=e;return(0,n.jsx)("div",{children:t})},u.Title=e=>{let{title:t}=e,r=(0,a.useRouter)();return(0,n.jsxs)("h1",{className:"flex -translate-x-2 items-center text-2xl",children:[(0,n.jsx)("button",{onClick:()=>r.back(),children:(0,n.jsx)(o.u1R,{})}),t]})},u.Description=e=>{let{description:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})},u.Images=e=>{let{images:t,imageWidth:r}=e;return(0,n.jsx)("div",{className:"flex w-full justify-center",children:t.length>0?(0,n.jsx)("div",{className:"relative h-60 w-full",children:t.reverse().map((e,l)=>{let s={left:"calc((40rem - ".concat(r,") / ").concat(t.length-1," * ").concat(t.length-1-l,")"),width:r};return(0,n.jsx)(d,{style:s,imageUrl:e},e)})}):(0,n.jsx)(h,{})})},u.Content=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"flex flex-col gap-2",children:t})},u.GithubUrls=e=>{let{githubUrls:t}=e;return(0,n.jsx)(n.Fragment,{children:t&&(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(o.JOq,{className:"text-lg"}),t.map(e=>(0,n.jsx)(c(),{href:e,children:e.split("/").at(-1)},e))]})})},u.TechStack=e=>{let{techStack:t}=e;return(0,n.jsx)("div",{className:"flex flex-wrap gap-2",children:t.map(e=>(0,n.jsxs)("div",{className:"flex gap-2",children:[(0,n.jsx)("span",{children:"/"}),e]},e))})},u.Date=e=>{let{date:t}=e;return(0,n.jsx)("div",{className:"text-muted-foreground",children:t})}},730:function(e,t,r){"use strict";r.r(t),r.d(t,{ProjectList:function(){return a}});var n=r(7437),l=r(5668);r(2265);var s=r(995),i=r(8388),c=r(4351);let a=()=>{let[e,t]=(0,c.W)();return(0,n.jsx)("div",{ref:e,className:"flex flex-col items-end",children:Object.values(l.nD).map(e=>(0,n.jsx)(t,{children:(0,n.jsx)(i.J,{isSelected:!1,children:(0,n.jsx)(s.I,{project:e})})},e.name))})}},2679:function(e,t,r){"use strict";r.d(t,{re:function(){return n.ProjectDetail}}),r(730);var n=r(7763);r(995)},3113:function(e,t,r){"use strict";r.r(t);var n=r(7437),l=r(5668);r(2265);var s=r(2679),i=r(8968);t.default=()=>{let e=l.nD.dreamShare;return(0,n.jsxs)(s.re,{children:[(0,n.jsxs)(s.re.Header,{children:[(0,n.jsx)(s.re.Title,{title:e.name}),(0,n.jsx)(s.re.Description,{description:e.description})]}),(0,n.jsx)(s.re.Images,{images:e.images,imageWidth:"9rem"}),(0,n.jsxs)(s.re.Content,{children:[(0,n.jsx)("div",{children:"꿈 일기를 작성하여 의미를 분석하고 공유하는 앱입니다. 3인 프로젝트로 현재 개발 진행중에 있고 프론트엔드와 앱 개발을 맡았습니다."}),(0,n.jsxs)("div",{children:["프론트엔드는 Nextjs, react-query, Recoil 등을 사용하였습니다. 일기를 작성하고 불러오는 과정에서"," ",(0,n.jsx)(i.a,{children:"react-query의 Lazy 쿼리"})," 를 사용했습니다. 이 때"," ",(0,n.jsx)(i.a,{children:"invalidateQureis가 무시되는 문제가 발생하였고 캐시타임을 조정"}),"하여 해결하였습니다. 이 과정에서 react-query의 staletime과 cachetime을 이해할 수 있었습니다. 또한 named export한 컴포넌트를 dynamic import 시 발생하는 TS 오류를 해결하였습니다."]}),(0,n.jsxs)("div",{children:["앱은 Flutter를 사용하여 개발하고 있습니다. Firebase를 사용하지 않고",(0,n.jsx)(i.a,{children:"카카오와 구글 등의 소셜로그인"}),"을 구현하면서 OAuth와 OIDC에 대한 개념을 다질 수 있었습니다."]}),(0,n.jsxs)("div",{children:["이 프로젝트는 ",(0,n.jsx)(i.a,{children:"Agile 방법론"}),"으로 협업하고 있습니다. 개발 단계에 앞서 페르소나를 통해 기능을 도출하고 단계적으로 구분하여 구체적인 개발 계획을 세웠습니다. 협업 툴로 Jira와 Confluence, Slack 등 을 사용하며 적극적으로 의견을 나누고 주기적인 회의와"," ",(0,n.jsx)(i.a,{children:"코드리뷰를 통해 개발 생산성을 향상"}),"시키고 있습니다."]}),(0,n.jsx)("div",{children:"현업 개발자들과 협업하면서 프로젝트 초기에 번거롭고 어색했던 git flow, Jira, 코드리뷰 그 밖에 여러 컨벤션 들의 중요성을 깨닳을 수 있고 주기적인 코드리뷰는 코딩스타일을 잡아가는 계기가 되었습니다."})]}),(0,n.jsx)(s.re.GithubUrls,{githubUrls:e.github}),(0,n.jsx)(s.re.TechStack,{techStack:e.techStack}),(0,n.jsx)(s.re.Date,{date:e.date})]})}},8388:function(e,t,r){"use strict";r.d(t,{J:function(){return s}});var n=r(7437),l=r(2169);r(2265);let s=e=>{let{isSelected:t,children:r}=e;return(0,n.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,n.jsx)("div",{children:"*"}),(0,n.jsx)("div",{className:(0,l.cn)(t&&"font-semibold"),children:r})]})}},8968:function(e,t,r){"use strict";r.d(t,{a:function(){return l}});var n=r(7437);r(2265);let l=e=>{let{children:t}=e;return(0,n.jsx)("span",{className:"bg-primary px-1 text-secondary",children:t})}},4351:function(e,t,r){"use strict";r.d(t,{W:function(){return c}});var n=r(7437),l=r(9044),s=r(7492),i=r(2265);let c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.1,[r,c]=(0,l.H)(),a="show-in-box";return(0,i.useEffect)(()=>{c(".".concat(a),{opacity:[0,1]},{duration:e,delay:(0,s.E)(t,{startDelay:.15})})},[c,t,e]),[r,e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"".concat(a," origin-right"),children:t})}]}},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return s}});var n=r(7042),l=r(4769);function s(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,l.m6)((0,n.W)(t))}},4033:function(e,t,r){e.exports=r(5313)},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return a}});var n=r(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(l),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var l in t=arguments[r])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,n=Object.getOwnPropertySymbols(e);l<n.length;l++)0>t.indexOf(n[l])&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(r[n[l]]=e[n[l]]);return r};function a(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,l=e.attr,s=e.size,a=e.title,o=c(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(l)}}},function(e){e.O(0,[400,329,890,691,396,299,971,938,744],function(){return e(e.s=8039)}),_N_E=e.O()}]);