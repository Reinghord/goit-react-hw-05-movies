"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[153],{128:function(e,t,r){r.d(t,{Hx:function(){return f},Y5:function(){return p},uV:function(){return l},vw:function(){return u},zf:function(){return o}});var n=r(861),a=r(757),c=r.n(a);function o(){return s.apply(this,arguments)}function s(){return(s=(0,n.Z)(c().mark((function e(){var t,r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3",t=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4"}),e.prev=2,e.next=5,fetch("".concat("https://api.themoviedb.org/3","/trending/movie/day?").concat(t));case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,a=n.results,e.abrupt("return",a);case 13:throw e.prev=13,e.t0=e.catch(2),new Error(console.log(e.t0));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function u(e){return i.apply(this,arguments)}function i(){return(i=(0,n.Z)(c().mark((function e(t){var r,n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3",r=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4",query:t}),e.prev=2,e.next=5,fetch("".concat("https://api.themoviedb.org/3","/search/movie?").concat(r));case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,o=a.results,e.abrupt("return",o);case 13:throw e.prev=13,e.t0=e.catch(2),new Error(console.log(e.t0));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})))).apply(this,arguments)}function p(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3",r=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4"}),e.prev=2,e.next=5,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"?").concat(r));case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:throw e.prev=12,e.t0=e.catch(2),new Error(console.log(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function l(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3",r=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4"}),e.prev=2,e.next=5,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/credits?").concat(r));case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:throw e.prev=12,e.t0=e.catch(2),new Error(console.log(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3",r=new URLSearchParams({api_key:"44d6575d8f8dedfd36c7023de34a30c4"}),e.prev=2,e.next=5,fetch("".concat("https://api.themoviedb.org/3","/movie/").concat(t,"/reviews?").concat(r));case 5:return n=e.sent,e.next=8,n.json();case 8:return a=e.sent,e.abrupt("return",a);case 12:throw e.prev=12,e.t0=e.catch(2),new Error(console.log(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}},153:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var n=r(861),a=r(885),c=r(757),o=r.n(c),s=r(791),u=r(501),i=r(871),p=r(128),h="MoviesView_list__5cxuR",l="MoviesView_link__+Ru2-",d="MoviesView_item__ZPxu4",f="MoviesView_form__3+H9W",v="MoviesView_button__LnHdC",m="MoviesView_input__8-l0H",w=r(184);var x=function(){var e,t=(0,s.useState)([]),r=(0,a.Z)(t,2),c=r[0],x=r[1],_=(0,u.lr)(),b=(0,a.Z)(_,2),g=b[0],y=b[1],k=null!==(e=g.get("name"))&&void 0!==e?e:"",j=(0,i.TH)(),S=function(){var e=(0,n.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,k){e.next=4;break}throw new Error("Empty string is not allowed!");case 4:return e.next=6,(0,p.vw)(k);case 6:r=e.sent,x(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("form",{onSubmit:S,className:f,children:[(0,w.jsx)("button",{type:"submit",className:v,children:(0,w.jsx)("span",{children:"Search"})}),(0,w.jsx)("input",{type:"text",name:"search",value:k,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",className:m,onChange:function(e){return t=e.target.value,void y(""!==t?{name:t}:{});var t}})]}),(0,w.jsx)("ul",{className:h,children:c.map((function(e){return(0,w.jsx)("li",{className:d,children:(0,w.jsx)(u.rU,{to:"".concat(e.id),state:{from:j},className:l,children:e.title})},e.id)}))})]})}}}]);
//# sourceMappingURL=153.4622bed8.chunk.js.map