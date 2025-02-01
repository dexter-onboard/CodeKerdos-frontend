(()=>{var e={};e.id=617,e.ids=[617],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},7089:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>c,pages:()=>u,routeModule:()=>p,tree:()=>l});var s=r(260),n=r(8203),o=r(5155),i=r.n(o),a=r(7292),d={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>a[e]);r.d(t,d);let l=["",{children:["signIn",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4745)),"C:\\Users\\cyber\\OneDrive\\Documents\\GitHub\\CodeKerdos-frontend\\codekerdos-frontend\\app\\signIn\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,9611)),"C:\\Users\\cyber\\OneDrive\\Documents\\GitHub\\CodeKerdos-frontend\\codekerdos-frontend\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,6055))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["C:\\Users\\cyber\\OneDrive\\Documents\\GitHub\\CodeKerdos-frontend\\codekerdos-frontend\\app\\signIn\\page.tsx"],c={require:r,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.RouteKind.APP_PAGE,page:"/signIn/page",pathname:"/signIn",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:l}})},6885:(e,t,r)=>{Promise.resolve().then(r.bind(r,4745))},8741:(e,t,r)=>{Promise.resolve().then(r.bind(r,1765))},1765:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>h});var s=r(5512),n=r(1323),o=r(8953),i=r(4361),a=r(510),d=r(4711),l=r(7916),u=r(8009);r(2867);var c=r(1800),p=r(222),x=r(5668),f=r(9334),m=r(9738);let h=()=>{let[e,t]=(0,u.useState)(""),[r,h]=(0,u.useState)(""),[g,v]=(0,u.useState)(!1),[b,y]=(0,u.useState)(""),[j,C]=(0,u.useState)(""),A=(0,f.useRouter)(),k=async t=>{t.preventDefault(),v(!0);try{let t=p.$6,s=await x.A.post(t,{username:e,password:r});C("Login successful!"),localStorage.setItem("token",s.data.token),localStorage.setItem("studentId",s.data.user._id),setTimeout(()=>A.push("/"),3e3)}catch{y("Failed to sign in. Please check your credentials.")}finally{v(!1)}};return(0,s.jsx)(n.A,{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",sx:{backgroundImage:'url("/images/auth-bg.svg")',backgroundSize:"cover"},children:(0,s.jsxs)(n.A,{width:500,p:4,borderRadius:2,bgcolor:"white",boxShadow:3,textAlign:"center",children:[(0,s.jsx)(n.A,{display:"flex",justifyContent:"start",children:(0,s.jsx)(o.A,{color:"primary",onClick:()=>A.push("/"),children:(0,s.jsx)(m.A,{fontSize:"large"})})}),(0,s.jsx)(i.A,{className:"font-class",fontSize:"32px",fontWeight:"700",children:"Welcome Back!"}),(0,s.jsxs)(n.A,{mt:1,display:"flex",alignItems:"center",justifyContent:"center",children:[(0,s.jsx)(i.A,{fontSize:"14px",color:"#A6A6A6",className:"font-class",children:"Don't have an account yet?"}),(0,s.jsx)(a.A,{sx:{fontSize:"14px",color:"#1B99D4",fontWeight:"600",textTransform:"none"},className:"font-class",onClick:()=>A.push("/register"),children:"Sign Up Now"})]}),j&&(0,s.jsx)(d.A,{severity:"success",sx:{mt:2},children:j}),b&&(0,s.jsx)(d.A,{severity:"error",sx:{mt:2},children:b}),(0,s.jsx)("form",{onSubmit:k,children:(0,s.jsxs)(n.A,{mt:2,children:[(0,s.jsx)(l.A,{sx:c.E5,fullWidth:!0,label:"Enter email",margin:"normal",variant:"outlined",onChange:e=>t(e.target.value),autoComplete:"off"}),(0,s.jsx)(l.A,{sx:c.E5,fullWidth:!0,label:"Enter password",margin:"normal",variant:"outlined",type:"password",onChange:e=>h(e.target.value),autoComplete:"off"}),(0,s.jsx)(n.A,{display:"flex",justifyContent:"space-between",alignItems:"center",mt:2}),(0,s.jsx)(a.A,{fullWidth:!0,variant:"contained",size:"large",sx:{fontSize:"16px",backgroundColor:"#1B99D4",color:"#fff",fontWeight:"600",textTransform:"none",mt:1},className:"font-class",type:"submit",disabled:g,children:g?"Logging In...":"Log In"})]})})]})})}},4745:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\cyber\\\\OneDrive\\\\Documents\\\\GitHub\\\\CodeKerdos-frontend\\\\codekerdos-frontend\\\\app\\\\signIn\\\\page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\cyber\\OneDrive\\Documents\\GitHub\\CodeKerdos-frontend\\codekerdos-frontend\\app\\signIn\\page.tsx","default")},2867:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[638,965,399,644],()=>r(7089));module.exports=s})();