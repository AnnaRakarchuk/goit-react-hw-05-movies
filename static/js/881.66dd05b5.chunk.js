"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[881],{5219:function(e,t,n){n.d(t,{O:function(){return o}});var r=n(6731),a=n(7689),u="MovieList_List_trending__qaNUw",c="MovieList_Item_trending__t4L7l",i="MovieList_Link_trending__KHJ19",s=n(184),o=function(e){var t=e.movies,n=(0,a.TH)();return(0,s.jsx)("ul",{className:u,children:t.map((function(e){return(0,s.jsx)("li",{className:c,children:(0,s.jsx)(r.rU,{className:i,to:"/movies/".concat(e.id),state:{from:n},children:e.title||e.name})},e.id)}))})}},5881:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(885),a=n(2791),u=n(6731),c=n(4390),i=n(5219),s="Movies_Btn_form__1a0ZS",o=n(184),f=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],f=t[1],p=(0,a.useState)([]),v=(0,r.Z)(p,2),l=v[0],d=v[1],h=(0,u.lr)(),m=(0,r.Z)(h,2),_=m[0],g=m[1];return(0,a.useEffect)((function(){var e=_.get("query");e&&(0,c.Wf)(e).then(d)}),[_]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g({query:n})},children:[(0,o.jsx)("input",{type:"text",name:"movie",placeholder:"Enter the movie...",autoComplete:"off",onChange:function(e){f(e.target.value)},value:n}),(0,o.jsx)("button",{className:s,type:"submit",children:"Search"})]}),(0,o.jsx)(i.O,{movies:l})]})}},4390:function(e,t,n){n.d(t,{Df:function(){return s},Jh:function(){return p},Pg:function(){return o},Wf:function(){return v},bp:function(){return f}});var r=n(5861),a=n(4687),u=n.n(a),c=n(1044);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var i="7579e2ae6d1f4a062097f01f8183de29",s=function(){var e=(0,r.Z)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/trending/all/day?api_key=".concat(i));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"?api_key=").concat(i)).catch((function(e){throw new Error("Oops... seems like an error occured.")}));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){var n,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.ZP.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=881.66dd05b5.chunk.js.map