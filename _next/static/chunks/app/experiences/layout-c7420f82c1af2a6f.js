(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{3696:function(e,t,n){Promise.resolve().then(n.bind(n,6348)),Promise.resolve().then(n.bind(n,3393))},6348:function(e,t,n){"use strict";n.r(t),n.d(t,{SelectedExperienceContext:function(){return c},SelectedExperienceDispatchContext:function(){return u},useSelectedExperienceContext:function(){return i},useSelectedExperienceDispatchContext:function(){return o}});var r=n(2265);let c=(0,r.createContext)(null),u=(0,r.createContext)({selectExperience(){},unselectExperience(){}}),i=()=>(0,r.useContext)(c),o=()=>(0,r.useContext)(u)},3393:function(e,t,n){"use strict";n.r(t),n.d(t,{SelectedExperienceContextProvider:function(){return o}});var r=n(7437),c=n(2265),u=n(5338);let i=(e,t)=>{switch(t.type){case"SELECT":return t.experience;case"UNSELECT":return null;default:return e}},o=e=>{let{children:t}=e,[n,o]=(0,c.useReducer)(i,null);return(0,r.jsx)(u.Ii.Provider,{value:n,children:(0,r.jsx)(u.Sl.Provider,{value:{selectExperience:e=>o({type:"SELECT",experience:e}),unselectExperience:()=>o({type:"UNSELECT"})},children:t})})}},5338:function(e,t,n){"use strict";n.d(t,{Eq:function(){return r.useSelectedExperienceContext},Fl:function(){return r.useSelectedExperienceDispatchContext},Ii:function(){return r.SelectedExperienceContext},Sl:function(){return r.SelectedExperienceDispatchContext}});var r=n(6348);n(3393)},622:function(e,t,n){"use strict";var r=n(2265),c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,u={},l=null,f=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(f=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(u[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===u[r]&&(u[r]=t[r]);return{$$typeof:c,type:e,key:l,ref:f,props:u,_owner:o.current}}t.Fragment=u,t.jsx=l,t.jsxs=l},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=3696)}),_N_E=e.O()}]);