(this["webpackJsonphtm-human-talktalk"]=this["webpackJsonphtm-human-talktalk"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/misae-error.5184ac9c.png"},,,,,,,,,function(e,n,t){e.exports=t.p+"static/media/hum.91a2acec.png"},,,,,function(e,n,t){e.exports=t(53)},,,,,function(e,n,t){},,,,,function(e,n,t){var r={"./Claire.png":40,"./Crystal.png":41,"./David.png":42,"./George.png":43,"./Grace.png":44,"./HJ.png":45,"./Haritson.png":46,"./Henry.png":47,"./Hugh.png":48,"./yoon.png":49};function a(e){var n=c(e);return t(n)}function c(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=c,e.exports=a,a.id=39},function(e,n,t){e.exports=t.p+"static/media/Claire.1a2ab600.png"},function(e,n,t){e.exports=t.p+"static/media/Crystal.0951ee0f.png"},function(e,n,t){e.exports=t.p+"static/media/David.c674109c.png"},function(e,n,t){e.exports=t.p+"static/media/George.0622eda8.png"},function(e,n,t){e.exports=t.p+"static/media/Grace.4d08164f.png"},function(e,n,t){e.exports=t.p+"static/media/HJ.bcf7ae79.png"},function(e,n,t){e.exports=t.p+"static/media/Haritson.e114a73c.png"},function(e,n,t){e.exports=t.p+"static/media/Henry.07b27013.png"},function(e,n,t){e.exports=t.p+"static/media/Hugh.55fa830a.png"},function(e,n,t){e.exports=t.p+"static/media/yoon.34b2975e.png"},function(e,n,t){},,,function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(13),o=t.n(c),i=(t(34),t(9)),f=t(3),u=t(1),l=t(2),m=t(11),b=t(14);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var s=Object(r.createContext)(void 0),p=Object(r.createContext)(void 0),v=function(){return{isOpen:!1}};function E(e,n){switch(n.type){case"SET_MODAL_STATE":return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(t,!0).forEach((function(n){Object(b.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{isOpen:n.isOpen});case"RESET":return v();default:throw new Error("Unhandled Action type.")}}var g=function(e){var n=e.children,t=Object(r.useReducer)(E,v()),c=Object(m.a)(t,2),o=c[0],i=c[1];return a.a.createElement(p.Provider,{value:i},a.a.createElement(s.Provider,{value:o},n))},h=function(e){var n=Object(r.useContext)(s);if(!n)throw new Error("ModalStateContext cannot be provided.");if(!e)throw new Error("Cannot resolve selector.");return e(n)},O=function(){var e=Object(r.useContext)(p);if(!e)throw new Error("ModalDispatchContext cannot be provided.");return e};function j(){var e=Object(u.a)(["\n  width: ",";\n  height: ",";\n"]);return j=function(){return e},e}var y=l.b.img(j(),(function(e){return e.width||"64px"}),(function(e){return e.height||"64px"}));function x(){var e=Object(u.a)(["\n  padding-left: 1rem;\n  padding-right: 1rem;\n  width: 1024px;\n  margin: 0 auto;\n\n  @media (max-width: 1024px) {\n    width: 768px;\n  }\n\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n"]);return x=function(){return e},e}var w=l.b.div(x());function C(){var e=Object(u.a)(["\n  ","\n  ","\n  ","\n  ","\n"]);return C=function(){return e},e}var A=l.b.div(C(),(function(e){return e.top&&"margin-top: ".concat(e.top,";")}),(function(e){return e.left&&"margin-left: ".concat(e.left,";")}),(function(e){return e.right&&"margin-right: ".concat(e.right,";")}),(function(e){return e.bottom&&"margin-bottom: ".concat(e.bottom,";")})),k=function(e){return parseInt(e,16)},R={WHITE:"#ffffff",BLACK:"#000000",GRAY:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],RED:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],PINK:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],GRAPE:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],VIOLET:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],INDIGO:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],BLUE:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],CYAN:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],TEAL:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],GREEN:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],LIME:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],YELLOW:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],ORANGE:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]},G=t(24),P=t.n(G);function S(){var e=Object(u.a)(["\n  flex: 1;\n  font-size: 1.5rem;\n  margin-left: 1rem;\n  font-weight: bold;\n"]);return S=function(){return e},e}function T(){var e=Object(u.a)(["\n  display: flex;\n  vertical-align: middle;\n  align-items: center;\n"]);return T=function(){return e},e}function Y(){var e=Object(u.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  border-bottom: 1px solid ",";\n  box-shadow: 0 3px 10px ",";\n"]);return Y=function(){return e},e}var M=l.b.div(Y(),R.GRAY[3],R.GRAY[3]),H=l.b.div(T()),_=l.b.div(S()),D=function(){O(),h((function(e){return e.isOpen}));return a.a.createElement(M,null,a.a.createElement(A,{top:"0.6rem"}),a.a.createElement(w,null,a.a.createElement(H,null,a.a.createElement(y,{width:"58px",height:"64px",src:P.a}),a.a.createElement(_,null,"Human Pong Pong"))),a.a.createElement(A,{bottom:"0.6rem"}))},I=function(e){return e.keys().map(e)},L=function(){var e=I(t(39)),n=["\uc218\uc815","\uc724\uc11c","\uc131\uc900","\uc6d0\uc9c4","\ud6a8\uc815","\uc6d0\uc900","\ud0d0","\uc9c4\uc601","\ud64d\ub355","\ub098\uc724"];return e.map((function(e,t){return{name:n[t],image:e,absent:!1}}))},z=(L(),function(e){for(var n=e.length,t=-1,r=null;0!==n;)t=Math.floor(Math.random()*n),r=e[n-=1],e[n]=e[t],e[t]=r;return e}),B=function(e,n,t){if(e.length<n)throw new Error("Cannot set team size more than array size.");var r=[],a=-1;if("floor"===t&&(a=Math.floor(e.length/n)),"ceil"===t&&(a=Math.ceil(e.length/n)),"round"===t&&(a=Math.round(e.length/n)),-1===a)throw new Error("Unhandled groupize style.");for(var c=0;c<a;c++)r.push([]);var o=0;return e.forEach((function(e){r[o].push(e),o===a-1?o=0:o+=1})),r};function N(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?N(t,!0).forEach((function(n){Object(b.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):N(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var W=Object(r.createContext)(void 0),F=Object(r.createContext)(void 0),J=function(){return{members:L(),matchedMembers:[],directAccess:!0,size:4,style:"ceil"}};function K(e,n){switch(n.type){case"TOGGLE_ABSENT":return U({},e,{members:e.members.map((function(e){return e.name===n.name?U({},e,{absent:!e.absent}):e}))});case"MATCH_MEMBERS":if(e.directAccess)return e;var t=z(e.members.filter((function(e){return!1===e.absent})));return U({},e,{matchedMembers:B(t,e.size,e.style)});case"VERIFY_PROPER_ACCESS":return U({},e,{directAccess:!1});case"CHANGE_SIZE":return U({},e,{size:n.size});case"CHANGE_STYLE":return U({},e,{style:n.style});case"RESET":return J();default:throw new Error("Unhandled Action type.")}}var V=function(e){var n=e.children,t=Object(r.useReducer)(K,J()),c=Object(m.a)(t,2),o=c[0],i=c[1];return a.a.createElement(F.Provider,{value:i},a.a.createElement(W.Provider,{value:o},n))},Z=function(e){var n=Object(r.useContext)(W);if(!n)throw new Error("MemberStateContext cannot be provided.");if(!e)throw new Error("Cannot resolve selector.");return e(n)},$=function(){var e=Object(r.useContext)(F);if(!e)throw new Error("MemberDispatchContext cannot be provided.");return e};function q(){var e=Object(u.a)(["\n      border: 1px solid ",";\n      color: ",";\n      :hover {\n        background-color: ",";\n        color: ",";\n      }\n    "]);return q=function(){return e},e}function Q(){var e=Object(u.a)(["\n      color: ",";\n      background-color: ",";\n      :hover {\n        background-color: ",";\n        border: 1px solid ",";\n        color: ",";\n      }\n    "]);return Q=function(){return e},e}function X(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  padding-left: 0.8rem;\n  padding-right: 0.8rem;\n  padding-top: 0.4rem;\n  padding-bottom: 0.4rem;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.4s;\n  ","\n"]);return X=function(){return e},e}var ee=l.b.button(X(),(function(e){return e.inverted&&!0===e.inverted?Object(l.a)(Q(),R.WHITE,e.color?e.color:R.GRAY[6],R.WHITE,e.color?e.color:R.GRAY[6],e.color?e.color:R.GRAY[6]):Object(l.a)(q(),e.color?e.color:R.GRAY[6],e.color?e.color:R.GRAY[6],e.color?e.color:R.GRAY[6],R.WHITE)}));function ne(){var e=Object(u.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  display: flex;\n  background-color: ",";\n  width: 100vw;\n  height: 100vh;\n  z-index: 1000;\n"]);return ne=function(){return e},e}var te=l.b.div(ne(),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ff",t=e.split("#")[1].split(""),r=[],a="";return t.forEach((function(e,n){a+=e,n%2===1&&(r.push(k(a)),a="")})),"rgba(".concat(r.join(", "),", ").concat(n,")")}(R.GRAY[8],".6")),re=(t(50),function(e){var n=Object(r.useRef)();return Object(r.useEffect)((function(){n.current=e}),[e]),n.current}),ae=function(e,n){var t=re(e),a=Object(r.useState)(!1),c=Object(m.a)(a,2),o=c[0],i=c[1];return Object(r.useEffect)((function(){!t&&e?i(!0):t&&!e&&setTimeout((function(){i(!1)}),n)}),[e]),o};function ce(){var e=Object(u.a)(["\n      animation: "," 0.6s linear 0s 1 forwards;\n    "]);return ce=function(){return e},e}function oe(){var e=Object(u.a)(["\n      animation: "," 0.6s linear 0s 1 forwards;\n    "]);return oe=function(){return e},e}function ie(){var e=Object(u.a)(["\n  align-self: center;\n  margin: 0 auto;\n  background-color: ",";\n  padding: 2rem;\n  color: ",";\n  transform: translateY(-0.75rem);\n  ","\n"]);return ie=function(){return e},e}function fe(){var e=Object(u.a)(["\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(-0.75rem);\n    opacity: 0.01;\n  }\n"]);return fe=function(){return e},e}function ue(){var e=Object(u.a)(["\n  from {\n    transform: translateY(-0.75rem);\n    opacity: 0.01;\n  }\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"]);return ue=function(){return e},e}var le=document.getElementById("modal-root"),me=Object(l.c)(ue()),be=Object(l.c)(fe()),de=l.b.div(ie(),R.WHITE,R.BLACK,(function(e){return e.isOpen?Object(l.a)(oe(),me):Object(l.a)(ce(),be)})),se=document.createElement("div"),pe=function(e){var n=e.children,t=e.onShadowClick;Object(r.useEffect)((function(){return le&&le.appendChild(se),function(){le&&le.removeChild(se)}}),[]);var o=O(),i=h((function(e){return e.isOpen})),f=ae(i,600),u=a.a.createElement(te,{onClick:function(){t&&t(),o({type:"SET_MODAL_STATE",isOpen:!1})},style:{display:f?"flex":"none"}},a.a.createElement(de,{isOpen:i},a.a.createElement("div",null,n)));return Object(c.createPortal)(u,se)};function ve(){var e=Object(u.a)(["\n  margin-top: 2rem;\n  margin-left: 1rem;\n  padding-left: 0.1rem;\n  padding-right: 3rem;\n  padding-bottom: 0.5rem;\n  display: inline-block;\n  border-bottom: 1px solid ",";\n  font-size: 1.5rem;\n  font-weight: bold;\n"]);return ve=function(){return e},e}var Ee=l.b.div(ve(),R.GRAY[5]),ge=function(e){var n=e.title,t=void 0===n?"\uc81c\ubaa9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.":n;return a.a.createElement(Ee,null,t)},he=t(25);function Oe(){var e=Object(u.a)(["\n  font-size: 1rem;\n"]);return Oe=function(){return e},e}function je(){var e=Object(u.a)(["\n    cursor: pointer;\n    :hover {\n      box-shadow: 0 0 4px ",";\n    }\n    :active {\n      background-color: ",";\n    }\n  "]);return je=function(){return e},e}function ye(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 1.25rem;\n\n  transition: box-shadow 0.4s;\n\n  ","\n"]);return ye=function(){return e},e}var xe=l.b.div(ye(),(function(e){return e.onClick&&Object(l.a)(je(),R.GRAY[6],R.GRAY[3])})),we=l.b.div(Oe()),Ce=function(e){var n=e.member,t=e.onClick,r=Object(he.a)(e,["member","onClick"]);return a.a.createElement(xe,Object.assign({onClick:t},r),a.a.createElement(y,{src:n.image}),a.a.createElement(A,{top:"0.5rem"}),a.a.createElement(we,null,n.name))};function Ae(){var e=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n"]);return Ae=function(){return e},e}var ke=l.b.div(Ae()),Re=function(e){var n=e.members,t=e.title,r=e.clickable,c=$();return a.a.createElement(a.a.Fragment,null,a.a.createElement(ge,{title:t}),a.a.createElement(ke,null,n.map((function(e){return a.a.createElement(Ce,{onClick:function(n){r&&c({type:"TOGGLE_ABSENT",name:e.name})},member:e,key:e.name})}))))};function Ge(){var e=Object(u.a)(["\n  margin-top: 7rem;\n  margin-bottom: 4rem;\n"]);return Ge=function(){return e},e}var Pe=l.b.div(Ge()),Se=function(e){var n=e.children;return a.a.createElement(w,null,a.a.createElement(Pe,null,n))};function Te(){var e=Object(u.a)(["\n  margin-right: 1rem;\n"]);return Te=function(){return e},e}function Ye(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n  margin-right: 0.5rem;\n"]);return Ye=function(){return e},e}function Me(){var e=Object(u.a)(["\n  float: right;\n  display: flex;\n  border: none;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.25rem;\n  margin-bottom: 4rem;\n"]);return Me=function(){return e},e}var He=l.b.div(Me()),_e=l.b.select(Ye()),De=l.b.div(Te()),Ie=function(){var e=$();Object(r.useEffect)((function(){e({type:"VERIFY_PROPER_ACCESS"})}),[]);var n=Z((function(e){return e.members.filter((function(e){return!1===e.absent}))})),t=Z((function(e){return e.members.filter((function(e){return!0===e.absent}))})),c=Z((function(e){return e.size})),o=Z((function(e){return e.style})),f=Object(r.useMemo)((function(){for(var e=[],n=2;n<=8;n++)e.push(n);return e}),[]);return a.a.createElement(Se,null,a.a.createElement(Re,{title:"\ucc38\uc11d\uc4f0 >\u3147<",members:n,clickable:!0}),a.a.createElement(Re,{title:"\ub2a6\ucc38\uc4f0 ~\u3147~",members:t,clickable:!0}),a.a.createElement(A,{top:"3rem"}),a.a.createElement(He,null,a.a.createElement(_e,{onChange:function(n){e({type:"CHANGE_SIZE",size:parseInt(n.target.value)})},value:c},f.map((function(e){return a.a.createElement("option",{key:"option_".concat(e),value:e},e)}))),a.a.createElement(De,null,"\uba85\uc529"),a.a.createElement(_e,{onChange:function(n){e({type:"CHANGE_STYLE",style:n.target.value})},value:o},a.a.createElement("option",{value:"ceil"},"\uc62c\ub9bc\ud574\uc11c"),a.a.createElement("option",{value:"floor"},"\ub0b4\ub9bc\ud574\uc11c"),a.a.createElement("option",{value:"round"},"\ubc18\uc62c\ub9bc\ud574\uc11c")),a.a.createElement(i.b,{to:"/match"},a.a.createElement(ee,{color:R.BLUE[6]},"\ub3cc\ub824~"))),a.a.createElement(pe,null,"asd"))};function Le(){var e=Object(u.a)(["\n  font-weight: bold;\n"]);return Le=function(){return e},e}function ze(){var e=Object(u.a)(["\n  font-size: 1.25rem;\n"]);return ze=function(){return e},e}function Be(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 5rem;\n"]);return Be=function(){return e},e}var Ne=l.b.div(Be()),Ue=l.b.div(ze()),We=Object(l.b)(Ue)(Le()),Fe=function(e){var n=e.image,t=e.title,r=e.text,c=e.buttonText,o=void 0===c?"\ud655\uc778":c;return a.a.createElement(Ne,null,a.a.createElement(y,{src:n,width:"256px",height:"242px"}),a.a.createElement(A,{top:"3rem"}),a.a.createElement(We,null,t),a.a.createElement(A,{top:"2rem"}),a.a.createElement(Ue,null,r),a.a.createElement(A,{top:"2rem"}),a.a.createElement(i.b,{to:"/"},a.a.createElement(ee,{color:R.BLUE[6]},o)))},Je=t(15),Ke=t.n(Je);function Ve(){var e=Object(u.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n"]);return Ve=function(){return e},e}var Ze=l.b.div(Ve()),$e=function(){var e=$();Object(r.useEffect)((function(){e({type:"MATCH_MEMBERS"})}),[]);var n=Z((function(e){return e.directAccess})),t=Z((function(e){return e.matchedMembers}));return a.a.createElement(Se,null,n?a.a.createElement(Fe,{image:Ke.a,title:"\uc5d0\ub7ec",text:"\uc9c1\uc811 \uc811\uadfc\uc740 \ubd88\uac00\ub2a5\ud574\uc694. \uba54\uc778 \ud654\uba74\uc73c\ub85c \ub3cc\uc544\uac00\uc11c \uc62c\ubc14\ub978 \ub3d9\uc791\uc744 \uc2e4\ud589\ud574\uc8fc\uc138\uc694."}):a.a.createElement(a.a.Fragment,null,t.map((function(e,n){return a.a.createElement(Re,{key:"team_".concat(n+1),members:e,title:"\uadf8\ub8f9 ".concat(n+1),clickable:!1})})),a.a.createElement(A,{top:"3rem"}),a.a.createElement(Ze,null,a.a.createElement(i.b,{to:"/"},a.a.createElement(ee,{color:R.BLUE[6]},"\uba54\uc778\uc73c\ub85c \uac00\uae30")))))},qe=function(){return a.a.createElement(Se,null,a.a.createElement(Fe,{image:Ke.a,title:"404",text:"\uc798\ubabb\ub41c \uacbd\ub85c\uc5d0\uc694."}))},Qe=function(){return a.a.createElement(i.a,null,a.a.createElement(g,null,a.a.createElement(V,null,a.a.createElement(D,null),a.a.createElement(f.c,null,a.a.createElement(f.a,{path:"/",exact:!0},a.a.createElement(Ie,null)),a.a.createElement(f.a,{path:"/match"},a.a.createElement($e,null)),a.a.createElement(f.a,null,a.a.createElement(qe,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(Qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[29,1,2]]]);
//# sourceMappingURL=main.b0a9a0c1.chunk.js.map