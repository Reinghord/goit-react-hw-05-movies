"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{128:function(e,t,n){n.d(t,{Hx:function(){return w},Y5:function(){return l},uV:function(){return v},vw:function(){return p},zf:function(){return u}});var r=n(861),c=n(757),a=n.n(c),o="https://api.themoviedb.org/3",s=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4"});function u(){return i.apply(this,arguments)}function i(){return(i=(0,r.Z)(a().mark((function e(){var t,n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/trending/movie/day?").concat(s));case 3:return t=e.sent,e.next=6,t.json();case 6:return n=e.sent,r=n.results,e.abrupt("return",r);case 11:throw e.prev=11,e.t0=e.catch(0),new Error(console.log(e.t0));case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(a().mark((function e(t){var n,r,c,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4",query:t}),e.prev=1,e.next=4,fetch("".concat(o,"/search/movie?").concat(n));case 4:return r=e.sent,e.next=7,r.json();case 7:return c=e.sent,s=c.results,e.abrupt("return",s);case 12:throw e.prev=12,e.t0=e.catch(1),new Error(console.log(e.t0));case 15:case"end":return e.stop()}}),e,null,[[1,12]])}))),f.apply(this,arguments)}function l(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(t,"?").concat(s));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(console.log(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function v(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(t,"/credits?").concat(s));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(console.log(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function w(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(o,"/movie/").concat(t,"/reviews?").concat(s));case 3:return n=e.sent,e.next=6,n.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),new Error(console.log(e.t0));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}},936:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(861),c=n(885),a=n(757),o=n.n(a),s=n(791),u=n(501),i=n(871),p=n(128),f="Home_list__aopnc",l="Home_link__2zIq5",h="Home_item__hquEN",v=n(184);var d=function(){var e=(0,s.useState)([]),t=(0,c.Z)(e,2),n=t[0],a=t[1],d=(0,i.TH)();return(0,s.useEffect)((function(){try{var e=function(){var e=(0,r.Z)(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.zf)();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}catch(t){console.log(t)}}),[]),(0,v.jsxs)(s.Suspense,{fallback:(0,v.jsx)("div",{children:"Loading..."}),children:[" ",(0,v.jsx)("ul",{className:f,children:n.map((function(e){return(0,v.jsx)("li",{className:h,children:(0,v.jsx)(u.rU,{to:"movies/".concat(e.id),className:l,state:{from:d},children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=936.2eff5cc8.chunk.js.map