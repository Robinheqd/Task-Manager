(this["webpackJsonptask-manager"]=this["webpackJsonptask-manager"]||[]).push([[0],{29:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(21),s=n.n(c),o=(n(29),n(14)),u=n(24),i=n(2),l=n.n(i),j=n(5),d=n(7),b=n(3),p=n(6),h=n(0),f=function(e){var t=e.colour,n=e.text,r=e.onClick;return Object(h.jsx)("button",{onClick:r,style:{backgroundColor:t},className:"btn",children:n})};f.defaultProps={colour:"red",text:"Add"};var x=f,O=function(e){var t=e.title,n=e.onAdd,a=e.showAdd,c=e.name,s=e.onSignout,o=e.signin,u=Object(b.f)();return Object(r.useEffect)(Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.localStorage.getItem("username")||"/Task-Manager/"!=window.location.pathname){e.next=7;break}return e.next=3,o(window.localStorage.getItem("username"),window.localStorage.getItem("password"));case 3:if(!e.sent){e.next=7;break}window.history.pushState({},"","/tasks"),t=new PopStateEvent("popstate"),window.dispatchEvent(t);case 7:case"end":return e.stop()}}),e)}))),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("header",{className:"header",children:[Object(h.jsx)("h1",{children:t}),"/tasks"===u.pathname&&Object(h.jsxs)(h.Fragment,{children:[" ",Object(h.jsx)(x,{colour:a?"red":"green",text:a?"Hide":"Show",onClick:n})," ",Object(h.jsx)(x,{colour:"black",text:"Sign Out",onClick:function(){s(),window.history.pushState({},"","/Task-Manager/");var e=new PopStateEvent("popstate");window.dispatchEvent(e)}})," "]})]}),Object(h.jsx)("p",{style:{textAlign:"center"},children:Object(h.jsx)("b",{children:"/tasks"===u.pathname&&c})})]})};O.defaultProps={title:"Task Tracker"};var m=O,g=n(23),k=function(e){var t=e.task,n=e.onDelete,r=e.onToggle;return Object(h.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return r(t.id)},children:[Object(h.jsxs)("h3",{children:[t.text," ",Object(h.jsx)(g.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(h.jsx)("p",{children:t.date})]})},v=function(e){var t=e.tasks,n=e.onDelete,r=e.onToggle;e.username,e.signin,Object(b.e)();return Object(h.jsx)(h.Fragment,{children:t.map((function(e,t){return Object(h.jsx)(k,{task:e,onDelete:n,onToggle:r},t)}))})},w=function(e){var t=e.onAdd,n=Object(r.useState)(""),a=Object(d.a)(n,2),c=a[0],s=a[1],o=Object(r.useState)(""),u=Object(d.a)(o,2),i=u[0],l=u[1],j=Object(r.useState)(!1),b=Object(d.a)(j,2),p=b[0],f=b[1];return Object(h.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),c?(t({text:c,date:i,reminder:p}),s(""),l(""),f(!1)):alert("Please add a task")},children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Task"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Task",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Date & Time"}),Object(h.jsx)("input",{type:"text",placeholder:"Add Date & Time",value:i,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsxs)("div",{className:"form-control form-control-check",children:[Object(h.jsx)("label",{children:"Set Reminder"}),Object(h.jsx)("input",{type:"checkbox",checked:p,value:p,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(h.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},S=function(){return Object(h.jsxs)("footer",{children:[Object(h.jsx)("p",{children:"Copyright \xa9 2022"}),Object(h.jsx)(p.b,{to:"/about",children:"About"})]})},y=function(){var e=Object(b.e)();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h4",{children:"Version 1.0.0"}),Object(h.jsx)(p.b,{onClick:function(){e.goBack()},to:"/",children:"Home"})]})},T=function(e){var t=e.onSignup,n=Object(b.e)(),a=Object(r.useState)(""),c=Object(d.a)(a,2),s=c[0],o=c[1],u=Object(r.useState)(""),i=Object(d.a)(u,2),f=i[0],x=i[1],O=function(){var e=Object(j.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s){e.next=6;break}return alert("Please enter a username"),e.abrupt("return");case 6:if(f){e.next=9;break}return alert("Please enter a password"),e.abrupt("return");case 9:return e.next=11,t(s,f);case 11:if(e.t0=e.sent,!0!==e.t0){e.next=16;break}return e.abrupt("return",n.push("/tasks"));case 16:return alert("Username taken or invalid"),e.abrupt("return");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:"add-form",onSubmit:O,children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter username",value:s,onChange:function(e){return o(e.target.value)},required:!0})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return x(e.target.value)},required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"Sign Up",className:"btn btn-block"})]}),Object(h.jsx)(p.b,{to:"/",children:"Back"})]})},C=function(e){var t=e.onSignin,n=(e.usernam,Object(b.e)()),a=Object(r.useState)(""),c=Object(d.a)(a,2),s=c[0],o=c[1],u=Object(r.useState)(""),i=Object(d.a)(u,2),f=i[0],x=i[1],O=function(){var e=Object(j.a)(l.a.mark((function e(r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),s){e.next=6;break}return alert("Please enter a username"),e.abrupt("return");case 6:if(f){e.next=9;break}return alert("Please enter a password"),e.abrupt("return");case 9:return e.next=11,t(s,f);case 11:if(e.t0=e.sent,1!=e.t0){e.next=16;break}return e.abrupt("return",n.push("/tasks"));case 16:return alert("Username or password invalid"),e.abrupt("return");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("form",{className:"add-form",onSubmit:O,children:[Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Username"}),Object(h.jsx)("input",{type:"text",placeholder:"Enter username",value:s,onChange:function(e){return o(e.target.value)},autoComplete:"on",required:!0})]}),Object(h.jsxs)("div",{className:"form-control",children:[Object(h.jsx)("label",{children:"Password"}),Object(h.jsx)("input",{type:"password",placeholder:"Enter password",value:f,onChange:function(e){return x(e.target.value)},autoComplete:"on",required:!0})]}),Object(h.jsx)("input",{type:"submit",value:"Sign In",className:"btn btn-block"})]}),Object(h.jsx)(p.b,{to:"/",children:"Back"})]})},N=function(e){e.username,e.signin;var t=Object(b.e)(),n=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.push("/signin"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{className:"btn",onClick:function(){return console.log("hi"),t.push("/signup")},children:"Sign Up"}),Object(h.jsx)("button",{className:"btn",onClick:n,children:"Sign In"})]})},P=function(e){var t=e.onDelete,n=e.onSignout,r=Object(b.e)();return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("button",{className:"btn",onClick:function(){return!0===window.confirm("Are you sure you want to delete your account?")?(t(),n(),r.push("/")):void 0},children:"Delete"})})},F="",D="";var B=function(){var e=Object(r.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(d.a)(c,2),i=s[0],f=s[1],x=(Object(b.e)(),function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/signup",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({usernam:t,passwor:n})});case 2:return r=e.sent,e.next=5,r.json();case 5:if("Y"!==e.sent){e.next=22;break}return F=t,D=n,"",console.log(!0),console.log(F,D),e.t0=f,e.next=15,k();case 15:return e.t1=e.sent,(0,e.t0)(e.t1),window.localStorage.setItem("username",F),window.localStorage.setItem("password",D),e.abrupt("return",!0);case 22:return console.log(!1),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),O=function(){var e=Object(j.a)(l.a.mark((function e(t,n){var r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/signin",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({usernam:t,passwor:n})});case 2:return r=e.sent,e.next=5,r.json();case 5:if(a=e.sent,console.log(a[1]),"Y"!==a[0]){e.next=22;break}return F=t,D=n,console.log(F),e.t0=f,e.next=14,k();case 14:return e.t1=e.sent,(0,e.t0)(e.t1),console.log(i),window.localStorage.setItem("username",F),window.localStorage.setItem("password",D),e.abrupt("return",!0);case 22:return console.log(!1),e.abrupt("return",!1);case 24:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){F="",D="",console.log(F,D)},k=function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/allTasks/".concat(F));case 2:return t=e.sent,e.prev=3,console.log("h"),e.next=7,t.json();case 7:return n=e.sent,e.abrupt("return",n);case 11:e.prev=11,e.t0=e.catch(3),console.log("n");case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}(),B=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/delete/".concat(F));case 2:return t=e.sent,document.cookie="username='';path='/';",document.cookie="password='';path='/';",e.next=7,t.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/tasks/".concat(F,"/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({task:t,username:F})});case 2:return n=e.sent,e.next=5,n.json();case 5:r=e.sent,f([].concat(Object(u.a)(i),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://Task-Manager-Backend.robinheqd.repl.co/tasks/".concat(F,"/").concat(t),{method:"DELETE"});case 2:e.sent,f(i.filter((function(e){return e.id!==t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(j.a)(l.a.mark((function e(t){var n,r,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:return n=e.sent,r=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("https://Task-Manager-Backend.robinheqd.repl.co/tasks/".concat(F,"/").concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(r)});case 6:return a=e.sent,e.next=9,a.json();case 9:c=e.sent,f(i.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:c.reminder}):e})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return""===F&&window.location.pathname,Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(p.a,{children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(m,{onAdd:function(){return a(!n)},showAdd:n,name:F,onSignout:g,signin:O}),Object(h.jsx)(b.a,{path:"/Task-Manager/",exact:!0,render:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(N,{username:F,signin:O})})}}),Object(h.jsx)(b.a,{path:"/signin",exact:!0,render:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(C,{onSignin:O})})}}),Object(h.jsx)(b.a,{path:"/signup",exact:!0,render:function(e){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(T,{onSignup:x,usernam:F})})}}),Object(h.jsx)(b.a,{path:"/tasks",exact:!0,render:function(e){return Object(h.jsxs)(h.Fragment,{children:[n&&Object(h.jsx)(w,{onAdd:q}),Object(h.jsx)("p",{children:i.length>0?Object(h.jsx)(v,{tasks:i,onDelete:A,onToggle:M,username:F,signin:O}):"No Tasks To Show"}),Object(h.jsx)(P,{onSignout:g,onDelete:B})]})}}),Object(h.jsx)(b.a,{path:"/about",component:y}),Object(h.jsx)(S,{})]})})})},E=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};s.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(B,{})}),document.getElementById("root")),E()}},[[37,1,2]]]);
//# sourceMappingURL=main.da5f9310.chunk.js.map