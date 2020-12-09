(this["webpackJsonpmessage-frame"]=this["webpackJsonpmessage-frame"]||[]).push([[0],{100:function(A,e,t){},103:function(A,e,t){},104:function(A,e,t){},105:function(A,e,t){},106:function(A,e,t){},107:function(A,e,t){},116:function(A,e,t){"use strict";t.r(e);var n=t(2),i=t(0),c=t.n(i),a=t(6),o=t.n(a),s=(t(73),t(15)),r=(t(74),t(39)),g=t.n(r),l={host:"https://message-frame-api-obstt7aq3q-uc.a.run.app"},j=t(44),d=t.n(j),u=(t(99),t(100),435);function C(A){var e=Math.round(.9*A);return e<u?e:u}var p=function(A){return Object(n.jsx)("div",{className:"KeyPair-container",children:Object(n.jsxs)("div",{className:"KeyPair-object-container ",children:[Object(n.jsxs)("div",{className:"public"===A.keyType?"KeyPair-key-highlighted":"KeyPair-key",children:[Object(n.jsx)("p",{className:"KeyPair-small-info",children:"Public Key"}),Object(n.jsx)(d.a,{mode:"java",theme:"monokai",name:"UNIQUE_ID_OF_DIV",showGutter:!1,height:"215px",onChange:function(e){var t=A.keyPair;t.public=e,A.setKeyPair(t)},readOnly:"public"!==A.keyType,style:"public"===A.keyType?null:{color:"#595959"},width:A.screenWidth<1e3?C(A.screenWidth):u,value:String(A.keyPair.public),editorProps:{$blockScrolling:!0}})]}),Object(n.jsxs)("div",{className:"private"===A.keyType?"KeyPair-key-highlighted":"KeyPair-key",children:[Object(n.jsx)("p",{className:"KeyPair-small-info",children:"Private Key"}),Object(n.jsx)(d.a,{mode:"java",theme:"monokai",name:"UNIQUE_ID_OF_DIV",height:"215px",onChange:function(e){var t=A.keyPair;t.private=e,A.setKeyPair(t)},readOnly:"private"!==A.keyType,style:"private"===A.keyType?null:{color:"#595959"},width:A.screenWidth<1e3?C(A.screenWidth):u,showGutter:!1,value:String(A.keyPair.private),editorProps:{$blockScrolling:!0}})]})]})})},b=t(140);function f(){return Object(n.jsx)(b.a,{size:100,style:{color:"#ffff80"}})}t(103);function B(A){return Object(n.jsx)("div",{className:"ActionButtons-container",children:Object(n.jsx)("button",{onClick:A.action,className:"ActionButtons-button",children:Object(n.jsx)("span",{children:"Go!"})})})}t(104);function h(A){return Object(n.jsx)("div",{className:"FileUpload-container",children:Object(n.jsxs)("div",{className:"FileUpload-object-container",children:[Object(n.jsx)("input",{className:"FileUpload-link",type:"file",id:"input",multiple:!0,onChange:function(e){A.setImage(e.target.files[0])}}),Object(n.jsx)("img",{className:"FileUpload-preview",src:A.image?URL.createObjectURL(A.image):null,alt:A.image?A.image.name:null})]})})}t(105);function w(A){return Object(n.jsx)("div",{className:"MessageBox-container",children:Object(n.jsx)("input",{className:"MessageBox-input",onChange:function(e){console.log(e.target.value),A.setMessage(e.target.value)},placeholder:"enter a secret message",type:"text"})})}var m=t(25);t(106);function y(A){var e=function(e){var t=Object(m.b)({backgroundColor:A.keyType===e.id?"#ffff80":"#272822",color:A.keyType===e.id?"black":"#fff"});return Object(n.jsx)(m.a.button,{id:e.id,className:e.className,onClick:e.onClick,style:t,children:e.children})},t=function(e){A.setKeyType(e.target.id)};return Object(n.jsx)("div",{className:"RadioButton-container",children:Object(n.jsxs)("div",{className:"RadioButton-object-container",children:[Object(n.jsx)(e,{id:"public",onClick:t,className:"RadioButton-button",children:"Encrypt"}),Object(n.jsx)(e,{id:"private",onClick:t,className:"RadioButton-button",children:"Decrypt"})]})})}var O=t(63),K=t.n(O),x=t(146),Q=t(40);t(107);function I(A){var e=Object(m.b)({opacity:A.notificationText?1:0});return Object(n.jsx)("div",{className:"NotificationBox-container",children:Object(n.jsxs)(m.a.div,{style:e,className:"NotificationBox-object-container",children:[Object(n.jsx)("div",{className:"NotificationBox-object-container-left"}),Object(n.jsxs)("div",{className:"NotificationBox-object-container-center",children:[A.notificationText,A.notificationText&&A.notificationLink?Object(n.jsx)("a",{href:A.notificationLink,children:" here"}):null]}),Object(n.jsx)("div",{className:"NotificationBox-object-container-right",children:Object(n.jsx)(x.a,{"aria-label":"delete",size:"small",children:Object(n.jsx)(K.a,{onClick:function(){A.setNotificationText(null)},color:"primary",fontSize:"inherit",style:{color:Q.a[100]}})})})]})})}var v=t(45),P=t(64),D=t(143),N=t(144),k=t(145),F=t(46),E=Object(D.a)((function(A){return{modal:{display:"flex",alignItems:"center",justifyContent:"center",color:"white"},paper:{border:"1px solid #ffff80",height:"50vh",widith:"50vw"}}})),Y=c.a.forwardRef((function(A,e){var t=A.in,i=A.children,c=A.onEnter,a=A.onExited,o=Object(P.a)(A,["in","children","onEnter","onExited"]),s=Object(F.useSpring)({from:{opacity:0},to:{opacity:t?1:0},onStart:function(){t&&c&&c()},onRest:function(){!t&&a&&a()}});return Object(n.jsx)(F.animated.div,Object(v.a)(Object(v.a)({ref:e,style:s},o),{},{children:i}))}));function U(A){var e=E(),t=A.open,i=A.setOpen;return Object(n.jsx)("div",{children:Object(n.jsx)(N.a,{"aria-labelledby":"spring-modal-title","aria-describedby":"spring-modal-description",className:e.modal,open:t,onClose:function(){i(null)},closeAfterTransition:!0,BackdropComponent:k.a,BackdropProps:{timeout:500},children:Object(n.jsx)(Y,{in:t,children:Object(n.jsx)("div",{className:e.paper,children:A.children})})})})}var L=function(){var A=Object(i.useState)("public"),e=Object(s.a)(A,2),t=e[0],c=e[1],a=Object(i.useState)(null),o=Object(s.a)(a,2),r=o[0],j=o[1],d=Object(i.useState)(null),u=Object(s.a)(d,2),C=u[0],b=u[1],m=Object(i.useState)(null),O=Object(s.a)(m,2),K=O[0],x=O[1],Q=Object(i.useState)(null),v=Object(s.a)(Q,2),P=v[0],D=v[1],N=Object(i.useState)(null),k=Object(s.a)(N,2),F=(k[0],k[1]),E=Object(i.useState)(window.innerWidth),Y=Object(s.a)(E,2),L=Y[0],T=Y[1],G=Object(i.useState)(null),S=Object(s.a)(G,2),H=S[0],q=S[1],R=Object(i.useState)(null),X=Object(s.a)(R,2),M=X[0],z=X[1],J=function(A,e){q(A),z(e),setTimeout((function(){z(null),q(null)}),8e3)},V=function(A){z(null),q(A),setTimeout((function(){q(null)}),8e3)};return window.addEventListener("resize",(function(){T(window.innerWidth)})),Object(i.useEffect)((function(){J("To generate custom keys follow the instructions ","https://github.com/potofpie/message-frame/blob/main/doc/generating_keys.md"),g.a.get(l.host+"/api/imageEncryption/createKeyPair").then((function(A){var e=A.data;null===r?j(e.body):console.log("something")}))}),[]),Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(I,{notificationLink:M,setNotificationText:q,notificationText:H,children:" you might be gay"}),Object(n.jsxs)("div",{className:"App-header",children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",className:"App-logo",alt:"logo"}),Object(n.jsx)("div",{children:"message-frame"}),Object(n.jsx)("p",{children:"A quick and simple way to hide encrypted messages in a image."})]}),Object(n.jsx)("div",{className:"App-body",children:null===r?Object(n.jsx)(f,{}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(y,{keyType:t,setKeyType:c}),Object(n.jsx)(w,{setMessage:b}),Object(n.jsx)(p,{createNotificationText:V,createNotificationWithLink:J,screenWidth:L,keyType:t,keyPair:r,setKeyPair:j}),Object(n.jsx)(h,{setImage:x,image:K}),Object(n.jsx)(B,{text:"public"===t?"Encrypt":"Decrypt",action:"public"===t?function(){if(console.log({key:r[t],keyType:t,image:K,message:C}),K&&t&&C&&r){var A=new FormData;A.append("string",C),A.append("key",r[t]),A.append("keyType",t),A.append("image",K),g.a.post(l.host+"/api/imageEncryption/encrypt",A,{headers:{"Content-Type":"multipart/form-data"}}).then((function(A){var e=A.data;console.log(A),console.log(e),D(e)}))}else{var e={image:K,keyType:t,keyPair:r,message:C},n=Object.keys(e).filter((function(A){return!e[A]}));V("Please select a ".concat(n,"!"))}}:function(){if(console.log({key:r[t],keyType:t,image:K}),K&&t&&r){var A=new FormData;A.append("key",r[t]),A.append("keyType",t),A.append("image",K),g.a.post(l.host+"/api/imageEncryption/decrypt",A,{headers:{"Content-Type":"multipart/form-data"}}).then((function(A){var e=A.data.body;F(e),console.log(e),V("Your message was ".concat(e))}))}else{var e={image:K,keyType:t,keyPair:r},n=Object.keys(e).filter((function(A){return!e[A]}));V("Please select a ".concat(n,"!"))}}})]})}),Object(n.jsx)(U,{setOpen:D,open:P,children:Object(n.jsx)("img",{alt:"the_string",className:"poopdick",src:P})}),Object(n.jsx)("div",{className:"App-footer",children:Object(n.jsxs)("p",{children:[Object(n.jsx)("a",{href:"https://potofpie.github.io/BobbyChristopher/",children:"Portfolio"})," | ",Object(n.jsx)("a",{href:"https://www.linkedin.com/in/bobbychristopher/",children:"LinkedIn"})," | ",Object(n.jsx)("a",{href:"https://github.com/potofpie",children:"GitHub"})]})})]})},T=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,148)).then((function(e){var t=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,a=e.getTTFB;t(A),n(A),i(A),c(A),a(A)}))};o.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),T()},73:function(A,e,t){},74:function(A,e,t){}},[[116,1,2]]]);
//# sourceMappingURL=main.bb6a7509.chunk.js.map