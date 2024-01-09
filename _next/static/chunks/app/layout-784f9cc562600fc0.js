(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2898:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2265),s={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),a=(e,t)=>{let n=(0,r.forwardRef)(({color:n="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:i,className:c="",children:d,...u},m)=>(0,r.createElement)("svg",{ref:m,...s,width:a,height:a,stroke:n,strokeWidth:i?24*Number(l)/Number(a):l,className:["lucide",`lucide-${o(e)}`,c].join(" "),...u},[...t.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(d)?d:[d]]));return n.displayName=`${e}`,n}},5505:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(2898).Z)("Dot",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]])},6435:function(e,t,n){"use strict";n.d(t,{F:function(){return c},f:function(){return d}});var r=n(2265);let s=["light","dark"],o="(prefers-color-scheme: dark)",a="undefined"==typeof window,l=(0,r.createContext)(void 0),i={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,r.useContext)(l))&&void 0!==e?e:i},d=e=>(0,r.useContext)(l)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),u=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:i="theme",themes:c=u,defaultTheme:d=n?"system":"light",attribute:m="data-theme",value:p,children:g,nonce:b})=>{let[k,_]=(0,r.useState)(()=>f(i,d)),[x,w]=(0,r.useState)(()=>f(i)),$=p?Object.values(p):c,S=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=y());let o=p?p[r]:r,l=t?v():null,i=document.documentElement;if("class"===m?(i.classList.remove(...$),o&&i.classList.add(o)):o?i.setAttribute(m,o):i.removeAttribute(m),a){let e=s.includes(d)?d:null,t=s.includes(r)?r:e;i.style.colorScheme=t}null==l||l()},[]),N=(0,r.useCallback)(e=>{_(e);try{localStorage.setItem(i,e)}catch(e){}},[e]),E=(0,r.useCallback)(t=>{w(y(t)),"system"===k&&n&&!e&&S("system")},[k,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(o);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===i&&N(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[N]),(0,r.useEffect)(()=>{S(null!=e?e:k)},[e,k]);let j=(0,r.useMemo)(()=>({theme:k,setTheme:N,forcedTheme:e,resolvedTheme:"system"===k?x:k,themes:n?[...c,"system"]:c,systemTheme:n?x:void 0}),[k,N,e,x,n,c]);return r.createElement(l.Provider,{value:j},r.createElement(h,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:i,themes:c,defaultTheme:d,attribute:m,value:p,children:g,attrs:$,nonce:b}),g)},h=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:l,defaultTheme:i,value:c,attrs:d,nonce:u})=>{let m="system"===i,h="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=l?s.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",v=(e,t=!1,r=!0)=>{let o=c?c[e]:e,a=t?e+"|| ''":`'${o}'`,i="";return l&&r&&!t&&s.includes(e)&&(i+=`d.style.colorScheme = '${e}';`),"class"===n?i+=t||o?`c.add(${a})`:"null":o&&(i+=`d[s](n,${a})`),i},y=e?`!function(){${h}${v(e)}}()`:a?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${o}',m=window.matchMedia(t);if(m.media!==t||m.matches){${v("dark")}}else{${v("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}${m?"":"else{"+v(i,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${v(c?"x[e]":"e",!0)}}else{${v(i,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:y}})},()=>!0),f=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},v=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},y=e=>(e||(e=window.matchMedia(o)),e.matches?"dark":"light")},5439:function(e,t,n){Promise.resolve().then(n.t.bind(n,5250,23)),Promise.resolve().then(n.t.bind(n,1837,23)),Promise.resolve().then(n.t.bind(n,4494,23)),Promise.resolve().then(n.bind(n,93)),Promise.resolve().then(n.bind(n,6865)),Promise.resolve().then(n.bind(n,4086)),Promise.resolve().then(n.t.bind(n,3385,23))},93:function(e,t,n){"use strict";n.r(t),n.d(t,{Navigator:function(){return u}});var r=n(7437),s=n(5668),o=n(8388),a=n(4033),l=n(2265);let i=(0,l.memo)(function(e){let{name:t,path:n}=e,s=(0,a.usePathname)(),l=(0,a.useRouter)(),i=s.split("/").at(1)===n.slice(1);return(0,r.jsx)("div",{className:"w-fit",onMouseDown:()=>l.push(n),children:(0,r.jsx)(o.J,{isSelected:i,children:(0,r.jsx)("span",{className:"text-sm hover:font-semibold",children:t})})})});var c=n(5505),d=n(2169);let u=()=>{let[e,t]=(0,l.useState)(!1);return(0,r.jsxs)("div",{className:(0,d.cn)("absolute right-0 z-50 flex flex-col items-end lg:static lg:right-8 lg:items-start",e&&"w-[calc(100%+1rem)] pb-8 backdrop-blur-sm"),children:[(0,r.jsx)("button",{className:"lg:hidden",onBlur:()=>{t(!1)},tabIndex:0,onClick:()=>{t(e=>!e)},children:(0,r.jsx)(c.Z,{})}),(0,r.jsx)("nav",{className:(0,d.cn)("hidden w-fit flex-col items-end gap-2 text-right lg:flex lg:items-start lg:text-left",e?"flex":"hidden"),children:Object.values(s.tg).map(e=>(0,r.jsx)(i,{...e},e.name))})]})}},6865:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeModeChanger:function(){return i}});var r=n(7437),s=n(643),o=n(2898);/**
 * @license lucide-react v0.303.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,o.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),l=(0,o.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);n(2265);let i=()=>{let[e,t]=(0,s.s)();return(0,r.jsxs)("button",{onClick:()=>{"light"===e?t("dark"):t("light")},className:"relative",children:[(0,r.jsx)(a,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90"}),(0,r.jsx)(l,{className:"left-0 top-0 hidden h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:block dark:rotate-0"})]})}},4086:function(e,t,n){"use strict";n.r(t),n.d(t,{ThemeProvider:function(){return o}});var r=n(7437);n(2265);var s=n(6435);function o(e){let{children:t,...n}=e;return(0,r.jsx)(s.f,{...n,children:t})}},8388:function(e,t,n){"use strict";n.d(t,{J:function(){return o}});var r=n(7437),s=n(2169);n(2265);let o=e=>{let{isSelected:t,children:n}=e;return(0,r.jsxs)("div",{className:"flex cursor-pointer",children:[t&&(0,r.jsx)("div",{children:"*"}),(0,r.jsx)("div",{className:(0,s.cn)(t&&"font-semibold"),children:n})]})}},643:function(e,t,n){"use strict";n.d(t,{s:function(){return o}});var r=n(6435),s=n(2265);let o=()=>{let{theme:e,setTheme:t}=(0,r.F)(),[n,o]=(0,s.useState)(void 0);return(0,s.useEffect)(()=>{let t=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";"system"===e?o(e=>t()):o(t=>e)},[e]),[n,t]}},2169:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var r=n(7042),s=n(4769);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.m6)((0,r.W)(t))}},3385:function(){},4494:function(e){e.exports={style:{fontFamily:"'__Roboto_Mono_fdc593', '__Roboto_Mono_Fallback_fdc593'",fontWeight:400,fontStyle:"normal"},className:"__className_fdc593"}},1837:function(e){e.exports={style:{fontFamily:"'__Ubuntu_5449ac', '__Ubuntu_Fallback_5449ac'",fontWeight:400,fontStyle:"normal"},className:"__className_5449ac"}},622:function(e,t,n){"use strict";var r=n(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,d=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},7437:function(e,t,n){"use strict";e.exports=n(622)},4033:function(e,t,n){e.exports=n(5313)}},function(e){e.O(0,[890,250,299,971,938,744],function(){return e(e.s=5439)}),_N_E=e.O()}]);