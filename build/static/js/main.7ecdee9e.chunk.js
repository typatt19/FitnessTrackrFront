(this.webpackJsonpfitnesstrackrfront=this.webpackJsonpfitnesstrackrfront||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(14),i=n.n(r),s=n(3),o=n(4),a=n(2),u=n.n(a),j=n(5),b=n(6),l="https://fitnesstrac-kr.herokuapp.com/api/",d=function(){var e=Object(j.a)(u.a.mark((function e(t){var n,c,r,i,s,o,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,c=t.method,r=t.token,i=t.body,console.log("callApi: ",{url:n,method:c,token:r,body:i}),e.prev=2,s={method:c?c.toUpperCase():"GET",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)},r&&(s.headers.Authorization="Bearer ".concat(r)),console.log("request URL: ",l+n),e.next=8,fetch(l+n,s);case 8:return o=e.sent,console.log(o),e.next=12,o.json();case 12:if(a=e.sent,console.log("data: ",a),!a.error){e.next=16;break}throw a.error;case 16:return e.abrupt("return",a);case 19:e.prev=19,e.t0=e.catch(2),console.error("ERROR: ",e.t0);case 22:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(t){return e.apply(this,arguments)}}(),x=n(0),h=function(e){var t=e.token,n=Object(b.e)(),r=Object(c.useState)(""),i=Object(o.a)(r,2),a=i[0],l=i[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),p=O[0],v=O[1],f=function(){var e=Object(j.a)(u.a.mark((function e(c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,d({url:"/activities",method:"POST",body:{name:a,description:p},token:t});case 3:r=e.sent,n.push("/activities"),window.location.reload(),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Create New Activity!"}),Object(x.jsxs)("form",{onSubmit:f,children:[Object(x.jsxs)("div",{id:"TextField",children:[Object(x.jsx)("input",{type:"text",placeholder:"Name of Activity",value:a,onChange:function(e){return l(e.target.value)}}),Object(x.jsx)("input",{type:"text",placeholder:"Description",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(x.jsx)("button",{type:"submit",children:"Post Activity"})]}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/",children:"Home"})})]})},O=function(e){e.routine;var t=e.token,n=Object(b.e)(),r=Object(b.f)().routineId,i=Object(c.useState)(Number),a=Object(o.a)(i,2),l=a[0],h=(a[1],Object(c.useState)(Number)),O=Object(o.a)(h,2),p=O[0],v=O[1],f=Object(c.useState)(Number),m=Object(o.a)(f,2),g=m[0],y=m[1],k=function(){var e=Object(j.a)(u.a.mark((function e(c){var i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,d({url:"routines/".concat(r,"/activities"),method:"POST",body:{activityId:l,count:p,duration:g},token:t});case 3:i=e.sent,n.push("/routines"),window.location.reload(),console.log(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Add Activity to Routine"}),Object(x.jsxs)("form",{onSubmit:k,children:[Object(x.jsxs)("div",{id:"TextField",children:[Object(x.jsx)("input",{type:"number",placeholder:"Duration",value:g,onChange:function(e){return y(e.target.value)}}),Object(x.jsx)("input",{type:"number",placeholder:"Count",value:p,onChange:function(e){return v(e.target.value)}})]}),Object(x.jsx)("button",{type:"submit",children:"Post Activity"})]}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/",children:"Home"})})]})},p=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({url:"/users/me",token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({url:"/activities",token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({url:"/routines",method:"GET",token:t});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)({}),a=Object(o.a)(i,2),l=a[0],d=a[1],m=Object(c.useState)([]),R=Object(o.a)(m,2),z=R[0],F=R[1],D=Object(c.useState)([]),N=Object(o.a)(D,2),P=N[0],T=N[1],I=void 0!==l.username;return Object(c.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==z.length){e.next=6;break}return e.next=3,v(n);case 3:t=e.sent,console.log("Fetched Activities",t),F(t);case 6:case"end":return e.stop()}}),e)})))),Object(c.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==P.length){e.next=6;break}return e.next=3,f(n);case 3:t=e.sent,console.log("Fetched Routines",t),T(t);case 6:case"end":return e.stop()}}),e)})))),Object(c.useEffect)(Object(j.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=3;break}return r(localStorage.getItem("st-token")),e.abrupt("return");case 3:return e.next=5,p(n);case 5:t=e.sent,d(t);case 7:case"end":return e.stop()}}),e)}))),[n]),console.log("userData",l),console.log("isLoggedIn",I),Object(x.jsxs)(x.Fragment,{children:[I?"":Object(x.jsx)("h1",{children:"Welcome to Fitness Trackr, the largest Fitness Community! "}),Object(x.jsx)(b.a,{exact:!0,path:"/",children:I?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{id:"Greeting",children:["Hey, ",l.username,"! Let's put in work!"]}),Object(x.jsx)("button",{class:"button",children:Object(x.jsx)(s.b,{to:"/CreateRoutine",children:"Create A New Routine"})}),Object(x.jsx)("button",{class:"button",children:Object(x.jsx)(s.b,{to:"/CreateActivity",children:"Create A New Activity"})}),Object(x.jsx)("button",{class:"button",children:Object(x.jsx)(s.b,{to:"/Routines",children:"View Public Routines"})}),Object(x.jsx)("button",{class:"button",children:Object(x.jsx)(s.b,{to:"/Activities",children:"View Public Activities"})}),Object(x.jsx)("div",{}),Object(x.jsx)("button",{class:"button",onClick:function(){localStorage.removeItem("st-token"),r(""),d({})},children:"Log Out"})]}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{class:"button",children:Object(x.jsx)(s.b,{to:"/register",children:"Register"})}),Object(x.jsx)("button",{class:"button",children:Object(x.jsx)(s.b,{to:"/login",children:"Login"})}),Object(x.jsx)("div",{}),Object(x.jsx)("br",{}),Object(x.jsx)("button",{class:"LargeButton",children:Object(x.jsx)(s.b,{to:"/Routines",children:"View Public Routines"})}),Object(x.jsx)("button",{class:"LargeButton",children:Object(x.jsx)(s.b,{to:"/Activities",children:"View Public Activities"})})]})}),Object(x.jsx)(b.a,{path:"/CreateRoutine",children:Object(x.jsx)(S,{action:"Create Routine",token:n})}),Object(x.jsx)(b.a,{path:"/CreateActivity",children:Object(x.jsx)(h,{action:"Create Activity",token:n})}),Object(x.jsx)(b.a,{path:"/Routines",children:Object(x.jsx)(y,{routines:P,token:n,userData:l})}),Object(x.jsx)(b.a,{path:"/Routine",children:Object(x.jsx)(k,{routines:P,token:n,userData:l})}),Object(x.jsx)(b.a,{path:"/EditRoutine/:routineId",children:Object(x.jsx)(A,{routines:P,token:n})}),Object(x.jsx)(b.a,{path:"/EditActivity/:activityId",children:Object(x.jsx)(w,{activities:z,token:n})}),Object(x.jsx)(b.a,{path:"/ActToRoutine",children:Object(x.jsx)(O,{action:"ActivityToRoutine",token:n,userData:l,routines:P})}),Object(x.jsx)(b.a,{path:"/Activities",children:Object(x.jsx)(C,{activities:z,userData:l,token:n})}),Object(x.jsx)(b.a,{path:"/register",children:Object(x.jsx)(g,{action:"register",setToken:r})}),Object(x.jsx)(b.a,{path:"/login",children:Object(x.jsx)(g,{action:"login",setToken:r})}),Object(x.jsx)(b.a,{path:"/routines/:routineId",children:Object(x.jsx)(y,{routines:P})})]})},g=function(e){var t=e.setToken,n=e.action,r=Object(c.useState)(""),i=Object(o.a)(r,2),a=i[0],l=i[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),p=O[0],v=O[1],f="login"===n,m=f?"Login":"Register",g=f?"register":"login",y=f?"Register":"Login",k=Object(b.e)(),S=function(){var e=Object(j.a)(u.a.mark((function e(c){var r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,d({url:"users/".concat(n),body:{username:a,password:p},method:"POST"});case 3:if(r=e.sent,e.prev=4,i=r.token,r.user,!i){e.next=11;break}return localStorage.setItem("st-token",i),t(i),k.push("/"),e.abrupt("return",i);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),window.alert("Wrong Username or Password!");case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:m}),Object(x.jsxs)("form",{onSubmit:S,children:[Object(x.jsx)("input",{type:"text",placeholder:"username",required:!0,value:a,onChange:function(e){return l(e.target.value)}}),Object(x.jsxs)("div",{id:"TextField",children:[Object(x.jsx)("input",{type:"password",placeholder:"password",value:p,onChange:function(e){return v(e.target.value)}}),Object(x.jsx)("button",{type:"submit",children:m})]})]}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/".concat(g),children:y})}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/",children:"Home"})})]})},y=function(e){var t=e.routines;return console.log("Routines:",t),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{class:"LargeButton",children:Object(x.jsx)(s.b,{to:"/",children:Object(x.jsx)("b",{style:{fontSize:"18px"},children:"Home"})})}),Object(x.jsx)("div",{}),Object(x.jsx)("b",{style:{fontSize:"28px"},children:Object(x.jsx)("h2",{children:"Public Routines"})}),Object(x.jsxs)("div",{id:"RoutineContainer",children:[" ",null===t||void 0===t?void 0:t.map((function(e){return Object(x.jsxs)("div",{style:{border:"3px solid white",borderRadius:"15px",margin:"10px 350px",padding:"10px"},children:[Object(x.jsx)(k,{routines:t,routine:e}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/EditRoutine/".concat(e.id),children:"Edit Routine"})})]},e.id)}))]})]})},k=function(e){var t,n,c=e.routine,r=e.routines,i=(e.token,e.userData,Object(b.f)().routineId);Object(b.e)();if(0===r.length)return null;n=c||r.find((function(e){return i===e._id}));return Object(x.jsxs)(x.Fragment,{children:[n.username?Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Submitted by:"})," ",n.username]}):null,Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Name:"})," ",n.name]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Goal:"})," ",n.goal]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"CreatorName:"})," ",n.creatorName]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Public Routine:"})," ",n.isPublic?"Yes":"No"]}),c?null:Object(x.jsx)(s.b,{to:"/Routines",children:"Back to all routines"}),null===(t=c.activities)||void 0===t?void 0:t.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Name:"})," ",e.name]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"ID:"})," ",e.id]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Description:"})," ",e.description]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Duration:"})," ",e.duration]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Count:"})," ",e.count]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Routine Activity:"})," ",e.routineActivityId]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"RoutineId:"})," ",e.routineId]})]})}))]})},S=function(e){var t=e.token,n=Object(b.e)(),r=Object(c.useState)(""),i=Object(o.a)(r,2),a=i[0],l=i[1],h=Object(c.useState)(""),O=Object(o.a)(h,2),p=O[0],v=O[1],f=Object(c.useState)(!1),m=Object(o.a)(f,2),g=m[0],y=m[1],k=function(){var e=Object(j.a)(u.a.mark((function e(c){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,d({url:"/routines",method:"POST",body:{name:a,goal:p,isPublic:!0},token:t});case 3:r=e.sent,n.push("/routines"),window.location.reload(),console.log(r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Create New Routine!"}),Object(x.jsxs)("form",{onSubmit:k,children:[Object(x.jsxs)("div",{id:"TextField",children:[Object(x.jsx)("input",{type:"text",placeholder:"Name of Routine",value:a,onChange:function(e){return l(e.target.value)}}),Object(x.jsx)("input",{type:"text",placeholder:"Goal",value:p,onChange:function(e){return v(e.target.value)}}),Object(x.jsx)("div",{children:"Make Routine Public?"}),Object(x.jsx)("input",{type:"checkbox",value:g,class:"largerCheckbox",name:"checkBox2",onChange:function(e){return y(e.target.value)}})]}),Object(x.jsx)("button",{type:"submit",children:"Post Routine"})]}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/",children:"Home"})})]})},w=function(e){var t=e.token,n=e.activities,r=Object(b.e)(),i=Object(b.f)().activityId;if(0===n.length)return null;var a=n.find((function(e){return Number(i)===Number(e.id)})),l=Object(c.useState)(a.name),h=Object(o.a)(l,2),O=h[0],p=h[1],v=Object(c.useState)(a.description),f=Object(o.a)(v,2),m=f[0],g=f[1],y=function(){var e=Object(j.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d({url:"/activities/".concat(i),method:"PATCH",body:{name:O,description:m},token:t});case 3:c=e.sent,r.push("/activities"),window.location.reload(),console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Edit Activity"}),Object(x.jsxs)("form",{onSubmit:y,children:[Object(x.jsxs)("div",{id:"TextField",children:[Object(x.jsx)("input",{type:"text",placeholder:"Name",value:O,onChange:function(e){return p(e.target.value)}}),Object(x.jsx)("input",{type:"text",placeholder:"Description",value:m,onChange:function(e){return g(e.target.value)}})]}),Object(x.jsx)("button",{type:"submit",children:"Sumbit Activity Edit"})]}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/",children:"Home"})})]})},R=function(e){var t,n,c=e.activity,r=e.activities,i=(e.token,e.userData,Object(b.f)().activityId);Object(b.e)();if(0===r.length)return null;n=c||r.find((function(e){return i===e.id}));return Object(x.jsxs)(x.Fragment,{children:[n.username?Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Submitted by:"})," ",n.username]}):null,Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Name:"})," ",n.name]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Id:"})," ",n.id]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Description:"})," ",n.description]}),c?null:Object(x.jsx)(s.b,{to:"/Activities",children:"Back to all Activities"}),null===(t=c.activities)||void 0===t?void 0:t.map((function(e){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Name:"})," ",e.name]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Description:"})," ",e.description]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Goal:"})," ",e.goal]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("b",{style:{fontSize:"23px"},children:"Count:"})," ",e.count]})]})}))]})},C=function(e){var t=e.activities,n=e.userData;return console.log("Activities:",t),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("button",{class:"LargeButton",children:Object(x.jsx)(s.b,{to:"/",children:Object(x.jsx)("b",{style:{fontSize:"18px"},children:"Home"})})}),Object(x.jsx)("div",{}),Object(x.jsx)("b",{style:{fontSize:"28px"},children:Object(x.jsx)("h2",{children:"Public Activities"})}),Object(x.jsxs)("div",{id:"ActivityContainer",children:[" ",null===t||void 0===t?void 0:t.map((function(e){return Object(x.jsxs)("div",{style:{border:"3px solid white",borderRadius:"15px",margin:"10px 350px",padding:"10px"},children:[Object(x.jsx)(R,{activities:t,activity:e,userData:n}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/EditActivity/".concat(e.id),children:"Edit Activity"})})]},e.id)}))]})]})},A=function(e){var t=e.token,n=e.routines,r=Object(b.e)(),i=Object(b.f)().routineId;if(0===n.length)return null;var a=n.find((function(e){return console.log("RoutineId:",i,"Routine.Id:",e.id),Number(i)===Number(e.id)})),l=Object(c.useState)(a.name),h=Object(o.a)(l,2),O=h[0],p=h[1],v=Object(c.useState)(a.goal),f=Object(o.a)(v,2),m=f[0],g=f[1],y=Object(c.useState)(a.isPublic),k=Object(o.a)(y,2),S=k[0],w=k[1],R=function(){var e=Object(j.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,d({url:"/routines/".concat(i),method:"PATCH",body:{name:O,goal:m,isPublic:S},token:t});case 3:c=e.sent,r.push("/routines"),window.location.reload(),console.log(c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h2",{children:"Edit Routine"}),Object(x.jsxs)("form",{onSubmit:R,children:[Object(x.jsxs)("div",{id:"TextField",children:[Object(x.jsx)("input",{type:"text",placeholder:"Name",value:O,onChange:function(e){return p(e.target.value)}}),Object(x.jsx)("input",{type:"text",placeholder:"Goal",value:m,onChange:function(e){return g(e.target.value)}}),Object(x.jsx)("div",{children:"Make Routine Public?"}),Object(x.jsx)("input",{type:"checkbox",value:S,class:"largerCheckbox",name:"checkBox2",onChange:function(e){return w(e.target.value)}})]}),Object(x.jsx)("button",{type:"submit",children:"Sumbit Edit"})]}),Object(x.jsx)("button",{children:Object(x.jsx)(s.b,{to:"/",children:"Home"})})]})};i.a.render(Object(x.jsx)(s.a,{children:Object(x.jsx)(m,{})}),document.querySelector("#app"))}},[[31,1,2]]]);
//# sourceMappingURL=main.7ecdee9e.chunk.js.map