(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{133:function(e,t,n){},185:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=185},188:function(e,t,n){"use strict";n.r(t);var c=n(0),l=n(19),a=n.n(l),s=n(23),o=(n(133),n(8)),r=n(9),i=n(17),u=n(209),d=n(56),b=n.n(d),j=n(74),m=n(47),x=n(104),f=n.n(x).a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST_URL,headers:{"Content-Type":"application/json; charset=UTF-8"}});f.interceptors.response.use((function(e){return e}),(function(e){return e.response.status,Promise.reject(e)}));var h=f,O=function(e){e?(h.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete h.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},g=Object(m.b)("auth/fetchUser",Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/auth");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),p=Object(m.b)("auth/userLogin",function(){var e=Object(j.a)(b.a.mark((function e(t){var n,c,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.email,c=t.password,e.next=3,h.post("/login",{email:n,password:c});case 3:return l=e.sent,e.abrupt("return",l.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),v=Object(m.c)({name:"auth",initialState:{isAuthenticated:!1,user:null,loading:!1},reducers:{authLogout:function(e,t){e.loading=!1,e.isAuthenticated=!1,e.user=null,O("")}},extraReducers:function(e){e.addCase(g.pending,(function(e,t){e.loading=!0,e.isAuthenticated=!1})).addCase(g.fulfilled,(function(e,t){e.loading=!1,t.payload.message||(e.isAuthenticated=!0,e.user=t.payload.user)})).addCase(g.rejected,(function(e,t){e.loading=!1})).addCase(p.pending,(function(e,t){e.loading=!0})).addCase(p.fulfilled,(function(e,t){e.loading=!1,t.payload.message||(O(t.payload.token),e.user=t.payload.user,e.isAuthenticated=!0)})).addCase(p.rejected,(function(e,t){e.loading=!1}))}}),y=v.actions.authLogout,w=v.reducer,N=n(2);var k=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1],a=Object(i.c)((function(e){return e.auth.user})),d=Object(i.b)();return Object(c.useEffect)((function(){l(Object(u.a)())}),[]),a?Object(N.jsx)("div",{className:"flex h-full bg-img-background bg-cover bg-no-repeat w-full justify-center items-center",children:Object(N.jsx)("div",{className:"flex w-1/2 h-full items-center justify-center",children:Object(N.jsxs)("div",{className:"w-3/4",children:[Object(N.jsxs)("div",{className:"flex justify-center",children:[Object(N.jsx)(s.b,{to:"/join",className:"flex justify-end min-w-3/4 mr-6",children:Object(N.jsxs)("button",{className:"justify-center flex min-w-1/2 items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none",children:[Object(N.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",children:Object(N.jsx)("path",{d:"M3.7 7.7a.996.996 0 0 1 1.41 0L12 14.59l4.29-4.3L14.7 8.7c-.62-.62-.18-1.7.71-1.7H20c.55 0 1 .45 1 1v4.59c0 .89-1.08 1.34-1.71.71l-1.59-1.59l-5 5a.996.996 0 0 1-1.41 0L3.7 9.11c-.38-.38-.38-1.02 0-1.41z",fill:"currentColor"})}),Object(N.jsx)("div",{children:"Join meeting"})]})}),Object(N.jsx)(s.b,{to:"/rooms/".concat(n),className:"flex justify-start min-w-3/4 ml-6",children:Object(N.jsxs)("button",{className:"justify-center focus:outline-none min-w-1/2 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",children:[Object(N.jsx)("svg",{width:"2em",height:"2em",viewBox:"0 0 24 24",children:Object(N.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",fill:"currentColor"})}),Object(N.jsx)("div",{children:Object(N.jsx)("div",{children:"Create a meeting"})})]})})]}),Object(N.jsx)("div",{className:"flex justify-center mt-6",children:Object(N.jsx)("div",{className:"text-white text-xl text hover:underline cursor-pointer",children:Object(N.jsx)("button",{className:"focus:outline-none",onClick:function(){return d(y())},children:"Logout"})})})]})})}):Object(N.jsx)(r.a,{to:"/login"})};var S=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],l=t[1],a=Object(c.useState)(""),u=Object(o.a)(a,2),d=u[0],b=u[1],j=Object(i.c)((function(e){return e.auth.isAuthenticated})),m=Object(i.b)();function x(e){"email"===e.target.id?l(e.target.value):b(e.target.value)}return j?Object(N.jsx)(r.a,{to:"/"}):Object(N.jsx)("div",{className:"w-full h-full bg-img-background bg-cover bg-no-repeat",children:Object(N.jsx)("div",{className:"w-full h-full flex justify-center items-center md:block",children:Object(N.jsx)("div",{className:"h-full  min-w-min px-3 bg-white bg-opacity-50 shadow-2xl flex items-center justify-center",children:Object(N.jsx)("form",{className:"flex flex-col items-center justify-center sm:justify-start rounded",onSubmit:function(e){e.preventDefault(),m(p({email:n,password:d}))},children:Object(N.jsxs)("div",{className:"flex flex-col justify-center text-xl",children:[Object(N.jsx)("div",{className:"text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center",children:"Sign in"}),Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"email",children:"Email"}),Object(N.jsx)("input",{className:"shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"email",type:"text",placeholder:"Email",onChange:x,value:n})]}),Object(N.jsxs)("div",{className:"",children:[Object(N.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"password",children:"Password"}),Object(N.jsx)("input",{className:"shadow text-lg appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",id:"password",type:"password",placeholder:"******************",onChange:x,value:d})]}),Object(N.jsxs)("div",{className:"flex text-xs xl:text-sm 2xl:text-base",children:[Object(N.jsx)("div",{className:"text-black text-opacity-60 mr-2",children:"If you don't have account ?"}),Object(N.jsx)("div",{children:Object(N.jsx)(s.b,{to:"/register",className:"text-blue-500",children:"Sign up"})})]}),Object(N.jsx)("div",{className:"flex items-center justify-center mt-2",children:Object(N.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign In"})})]})})})})})},E=n(63),C=n(67);var T=function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),n=t[0],l=t[1],a=Object(c.useState)(!1),i=Object(o.a)(a,2),u=i[0],d=i[1];function b(e){l(Object(C.a)(Object(C.a)({},n),{},Object(E.a)({},e.target.id,e.target.value)))}return u?Object(N.jsx)(r.a,{to:"/login"}):Object(N.jsx)("div",{className:"h-full bg-img-background bg-cover bg-no-repeat flex justify-center md:block",children:Object(N.jsx)("div",{className:"h-full  items-center flex justify-center bg-white bg-opacity-50 shadow-2xl rounded px-4",children:Object(N.jsxs)("form",{className:"max-w-lg text-xl",autoComplete:"off",onSubmit:function(e){e.preventDefault(),h.post("/register",Object(C.a)({},n)).then((function(e){e.msg||d(!0)}))},children:[Object(N.jsx)("div",{className:"text-6xl md:text-4xl xl:text-5xl 2xl:text-7xl mb-12 flex justify-center",children:"Sign up"}),Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"name",children:"Full name"}),Object(N.jsx)("input",{className:"text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white",id:"name",type:"text",placeholder:"Name",onChange:b})]}),Object(N.jsxs)("div",{className:"mb-4",children:[Object(N.jsx)("label",{className:"block text-gray-700 font-bold mb-2",htmlFor:"email",children:"Email"}),Object(N.jsx)("input",{className:"text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white",id:"email",type:"text",placeholder:"Email",onChange:b})]}),Object(N.jsx)("div",{className:"flex flex-wrap -mx-3",children:Object(N.jsxs)("div",{className:"w-full px-3",children:[Object(N.jsx)("label",{className:"block tracking-wide text-gray-700 font-bold mb-2",htmlFor:"password",children:"Password"}),Object(N.jsx)("input",{className:"text-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",id:"password",type:"password",placeholder:"******************",onChange:b})]})}),Object(N.jsxs)("div",{className:"flex text-xs xl:text-sm 2xl:text-base mb-1",children:[Object(N.jsx)("div",{className:"text-black text-opacity-60 mr-2",children:"If you have account ?"}),Object(N.jsx)("div",{children:Object(N.jsx)(s.b,{to:"/login",className:"text-blue-500",children:"Login"})})]}),Object(N.jsx)("div",{className:"flex items-center justify-center",children:Object(N.jsx)("button",{className:"bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Sign up"})})]})})})},F=n(105),_=n.n(F),A=n(106),L=n.n(A),D=n(126);var R=function(e){var t=e.room,n=e.socket,l=Object(c.useState)([]),a=Object(o.a)(l,2),s=a[0],r=a[1],u=Object(c.useState)(""),d=Object(o.a)(u,2),b=d[0],j=d[1],m=Object(i.c)((function(e){return e.auth.user}));return Object(c.useEffect)((function(){n&&n.on("message",(function(e){r([].concat(Object(D.a)(s),[e]));var t=document.getElementById("messages");s.length>0&&(t.scrollTop=t.scrollHeight)}))})),Object(N.jsxs)("div",{className:"h-full w-full",children:[Object(N.jsx)("div",{className:"h-full mx-2",children:Object(N.jsx)("div",{id:"messages",className:"h-full pb-16 text-sm pt-2 overflow-y-auto no-scrollbar",children:Object(N.jsx)("div",{className:"",children:null===s||void 0===s?void 0:s.map((function(e,t){return function(e,t){return"Admin"!==e.name?Object(N.jsx)("div",{className:e.name===m.name?"flex justify-end":"flex justify-start",children:Object(N.jsxs)("div",{className:e.name===m.name?"w-auto max-w-full inline-block p-2 rounded-xl bg-blue-500 my-1 text-white":"w-auto max-w-full inline-block p-2 rounded-xl bg-gray-400 my-1",children:[Object(N.jsx)("p",{className:"text-xs font-bold w-auto max-w-full",children:e.name}),Object(N.jsx)("p",{className:"w-auto max-w-full",children:e.msg})]},t)},t):Object(N.jsx)("div",{className:"flex justify-center text-gray-400",children:e.msg},t)}(e,t)}))})})}),Object(N.jsx)("div",{className:"fixed bottom-0 w-1/4 bg-white",children:Object(N.jsxs)("form",{className:"h-16 w-full flex border-t py-2 items-center justify-between",onSubmit:function(e){e.preventDefault(),b&&n&&(n.emit("sendMessage",{name:m.name,msg:b,room:t}),j(""))},children:[Object(N.jsx)("div",{className:"h-full w-10/12 p-2 flex items-center",children:Object(N.jsx)("input",{type:"text",name:"message",autoComplete:"off",placeholder:"Enter message ...",value:b,onChange:function(e){e.preventDefault(),j(e.target.value)},className:"h-full w-full text-xs no-scrollbar resize-none outline-none border-gray-400 border rounded-lg p-2"})}),Object(N.jsx)("div",{className:"h-full flex items-center w-2/12 mr-2 py-2",children:Object(N.jsx)("button",{type:"submit",className:"focus:outline-none px-2 py-1 bg-blue-700 text-white rounded-lg",children:"Send"})})]})})]})},I=n(207),H=(n(186),document.documentElement);document.fullscreenEnabled=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled,document.exitFullscreen=document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen||document.msExitFullscreen,H.requestFullscreen=H.requestFullscreen||H.webkitRequestFullscreen||H.mozRequestFullScreen||H.msRequestFullScreen;var P=function(){document.fullscreenEnabled&&(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?document.exitFullscreen():H.requestFullscreen())},U=n(208),V=n(114),B=n.n(V),M=n(115),z=n.n(M),q=n(117),K=n.n(q),W=n(118),J=n.n(W),G=n(119),Q=n.n(G),X=n(120),Y=n.n(X),Z=n(123),$=n.n(Z),ee=n(116),te=n.n(ee),ne=n(121),ce=n.n(ne),le=n(122),ae=n.n(le),se=n(124),oe=n.n(se),re=(n(187),Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_HOST_URL);var ie=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],l=t[1],a=Object(c.useState)(!1),s=Object(o.a)(a,2),u=s[0],d=s[1],b=Object(c.useState)(!0),j=Object(o.a)(b,2),m=j[0],x=j[1],f=Object(c.useState)(!0),h=Object(o.a)(f,2),O=h[0],g=h[1],p=Object(c.useState)(!1),v=Object(o.a)(p,2),y=v[0],w=v[1],k=Object(c.useState)(),S=Object(o.a)(k,2),E=S[0],C=S[1],T=Object(c.useState)(),F=Object(o.a)(T,2),A=F[0],D=F[1],H=Object(i.c)((function(e){return e.auth.loading})),V=Object(i.c)((function(e){return e.auth.isAuthenticated})),M=Object(c.useState)(Object(r.h)().id),q=Object(o.a)(M,1)[0],W=Object(i.c)((function(e){return e.auth.user})),G=Object(r.g)(),X=Object(c.useState)((function(){return _()(re,{transports:["websocket"],upgrade:!1})})),Z=Object(o.a)(X,1)[0],ee=Object(c.useState)(),ne=Object(o.a)(ee,2),le=ne[0],se=ne[1],ie=Object(c.useState)([]),ue=Object(o.a)(ie,2),de=ue[0],be=ue[1],je=Object(c.useState)((function(){return new L.a({config:{iceServers:[{urls:"stun:stun2.1.google.com:19302"}]},trickle:!1})})),me=Object(o.a)(je,1)[0];if(Object(c.useEffect)((function(){null===me||void 0===me||me.on("open",(function(e){se(e),Z.emit("joinRoom",{name:null===W||void 0===W?void 0:W.name,room:q,peerID:e}),Z.on("allMembers",(function(t){var n=document.getElementById("videoContainer");n&&(n.innerHTML=""),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){x(!0),g(!0),D(n),fe(e,n,!0),t.forEach((function(t){if(t!==e){var c=me.call(t,n);null===c||void 0===c||c.on("stream",(function(e){fe(t,e)}))}})),xe(t)})),me.on("call",(function(c){n&&(n.innerHTML=""),navigator.mediaDevices.getUserMedia({video:!0,audio:!0}).then((function(n){c.answer(n),fe(e,n,!0),t.forEach((function(t){t!==e&&(null===c||void 0===c||c.on("stream",(function(e){fe(t,e)})))})),xe(t)}))})),be(t)}))}))}),[Z,q,W,me,de]),Object(c.useEffect)((function(){return function(){null===Z||void 0===Z||Z.emit("peerClose",{peerId:le})}}),[Z,le]),Object(c.useEffect)((function(){xe(de)}),[de]),!V&&!H)return Object(N.jsx)(r.a,{to:"/login"});function xe(e){for(var t=document.getElementById("videoContainer"),n=[],c=0;c<t.childNodes.length;c++)e.includes(t.childNodes[c].id)||n.push(t.childNodes[c]),console.log(n);n.forEach((function(e){t.removeChild(e)}))}function fe(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!document.getElementById(e)){var c=document.createElement("video"),l=document.createElement("div"),a=document.getElementById("videoContainer");l.className="max-w-full min-w-min flex justify-center items-center",c.srcObject=t,n&&(c.muted="muted"),l.id=e;var s=c.play();void 0!==s&&s.then((function(e){})).catch((function(e){console.log(e)})),l.appendChild(c),a&&a.appendChild(l)}}var he=function(){!0===y?(E.getVideoTracks().forEach((function(e){e.stop()})),me.replaceTrack(E.getVideoTracks()[0],A.getVideoTracks()[0],A),w(!1)):navigator.mediaDevices.getDisplayMedia({cursor:!0}).then((function(e){me.replaceTrack(A.getVideoTracks()[0],e.getVideoTracks()[0],A),C(e),e.getTracks()[0].onended=function(){me.replaceTrack(e.getVideoTracks()[0],A.getVideoTracks()[0],A)},w(!0)}))},Oe=function(){u?(document.webkitExitFullscreen(),d(!1)):(P(),d(!0))};return Object(N.jsxs)("div",{className:"w-full h-full flex",children:[Object(N.jsx)("div",{className:"w-full  h-full no-scrollbar grid grid-cols-2 gap-2 overflow-y-scroll bg-black bg-opacity-90 p-2",id:"videoContainer"}),!0===n?Object(N.jsx)("div",{className:"w-1/4 hidden sm:block h-full border-l border-gray-300",children:Object(N.jsx)(R,{room:q,socket:Z})}):Object(N.jsx)(N.Fragment,{}),Object(N.jsxs)("div",{className:"btn-down",style:{backgroundColor:"whitesmoke",color:"whitesmoke",textAlign:"center"},children:[Object(N.jsx)(U.a,{style:{color:"#424242"},onClick:function(){A.getVideoTracks()[0].enabled?(A.getVideoTracks()[0].enabled=!1,D(A),g(!1)):(A.getVideoTracks()[0].enabled=!0,D(A),g(!0))},children:!0===O?Object(N.jsx)(B.a,{}):Object(N.jsx)(z.a,{})}),Object(N.jsx)(U.a,{style:{color:"#f44336"},onClick:function(){return me.destroy(),G.push("/login"),void window.location.reload()},children:Object(N.jsx)(te.a,{})}),Object(N.jsx)(U.a,{style:{color:"#424242"},onClick:function(){A.getAudioTracks()[0].enabled?(A.getAudioTracks()[0].enabled=!1,D(A),x(!1)):(A.getAudioTracks()[0].enabled=!0,D(A),x(!0))},children:!1===m?Object(N.jsx)(K.a,{}):Object(N.jsx)(J.a,{})}),Object(N.jsx)(U.a,{style:{color:"#424242"},onClick:function(){return he()},children:!0===y?Object(N.jsx)(Q.a,{}):Object(N.jsx)(Y.a,{})}),Object(N.jsx)(U.a,{style:{color:"#424242"},onClick:function(){return Oe()},children:!0!==u?Object(N.jsx)(ce.a,{}):Object(N.jsx)(ae.a,{})}),Object(N.jsx)(U.a,{style:{color:"#424242"},onClick:function(){l(!n)},children:Object(N.jsx)($.a,{})}),Object(N.jsx)(U.a,{style:{color:"#424242",marginLeft:"0.8rem"},onClick:function(){return function(){var e=window.location.href;if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){I.b.success("Link copied to clipboard!")}),(function(){I.b.error("Failed to copy")}));else{var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{document.execCommand("copy"),I.b.success("Link copied to clipboard!")}catch(n){I.b.error("Failed to copy")}document.body.removeChild(t)}}()},children:Object(N.jsx)(oe.a,{})})]})]})};var ue=function(){var e=Object(c.useState)(),t=Object(o.a)(e,2),n=t[0],l=t[1];return Object(N.jsx)("div",{className:"w-full h-full flex justify-center items-center bg-img-background bg-cover bg-no-repeat",children:Object(N.jsx)("div",{children:Object(N.jsx)("div",{children:Object(N.jsxs)("form",{children:[Object(N.jsx)("input",{name:"id",type:"text",value:n,onChange:function(e){e.preventDefault(),l(e.target.value)},placeholder:"Enter room's id ...",className:"rounded-lg p-2 focus:outline-none"}),Object(N.jsx)(s.b,{to:"/rooms/".concat(n),children:Object(N.jsx)("button",{type:"submit",className:"bg-blue-500 text-white ml-4 text-lg py-2 px-3 rounded-xl",children:"JOIN"})})]})})})})};var de=function(){return Object(N.jsx)("div",{className:"w-full h-full flex justify-center items-center text-white bg-img-background bg-cover bg-no-repeat",children:Object(N.jsx)("div",{children:"loading....."})})};var be=function(){var e=Object(i.c)((function(e){return e.auth.loading})),t=Object(i.b)(),n=Object(c.useState)(!0),l=Object(o.a)(n,2),a=l[0],s=l[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("token");O(e),t(g()),s(!1)}),[t]),e||a?Object(N.jsx)(de,{}):Object(N.jsx)("div",{className:"App h-full font-custom",children:Object(N.jsxs)(r.d,{children:[Object(N.jsx)(r.b,{path:"/login",exact:!0,component:S}),Object(N.jsx)(r.b,{path:"/register",exact:!0,component:T}),Object(N.jsx)(r.b,{path:"/rooms/:id",component:ie}),Object(N.jsx)(r.b,{path:"/join",exact:!0,component:ue}),Object(N.jsx)(r.b,{path:"/",exact:!0,component:k})]})})},je=Object(m.a)({reducer:{auth:w}});a.a.render(Object(N.jsx)(s.a,{children:Object(N.jsx)(i.a,{store:je,children:Object(N.jsx)(be,{})})}),document.getElementById("root"))}},[[188,1,2]]]);
//# sourceMappingURL=main.30f97bc5.chunk.js.map