(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4659],{21208:function(e,n,t){"use strict";t.d(n,{Z:function(){return a}});var r=t(82394),o=t(82684),i=t(28598);function l(e){var n=e.children,t=e.onMount;return(0,o.useEffect)((function(){t&&(null==t||t())}),[]),(0,i.jsx)(i.Fragment,{children:n})}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a=function(e){var n=e.children,t=e.fallback,u=e.idleTimeout,a=void 0===u?0:u,d=e.numberOfChildren,s=(0,o.useState)(!1),v=s[0],f=s[1],p=(0,o.useState)({}),m=p[0],y=p[1],h=(0,o.useState)(!1),g=h[0],b=h[1],O=(0,o.useTransition)(),x=O[0],P=O[1],A=(0,o.useDeferredValue)(g),E=(0,o.useMemo)((function(){return d||o.Children.count(n)}),[n,d]);(0,o.useEffect)((function(){g&&b(!1);var e=requestIdleCallback((function(){P((function(){b(!0)}))}),{timeout:a});return function(){return cancelIdleCallback(e)}}),[]);var C=(0,o.useMemo)((function(){return!A||x}),[A,x]),T=(0,o.useMemo)((function(){var e;return(!v||(null===(e=Object.values(m||{}))||void 0===e?void 0:e.length)<E)&&t}),[t,v,m,E]),j=function(e){var n=e.children,t=e.onMount;return(0,o.useEffect)((function(){t&&(null==t||t())}),[]),(0,i.jsx)(i.Fragment,{children:n})}({children:(0,i.jsx)(i.Fragment,{children:o.Children.map(n,(function(e,n){var t="".concat((o.isValidElement(e)?null==e?void 0:e.key:"key")||"child","-").concat(n);return(0,i.jsx)(l,{onMount:function(){y((function(e){return c(c({},e),{},(0,r.Z)({},t,!0))}))},children:e},t)}))}),onMount:function(){P((function(){f(!0)}))}});return(0,i.jsxs)(i.Fragment,{children:[C&&(T||(0,i.jsx)("div",{})),!C&&(0,i.jsxs)(i.Fragment,{children:[T,j]})]})}},58944:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(82394),o=t(26304),i=t(11611),l=t(28160),u=t(9518),c=(0,u.css)(["position:relative;top:1;"]),a=u.default.kbd.withConfig({displayName:"indexstyle__KbdStyled",componentId:"sc-1e1l7ab-0"})(["",""],c),d=u.default.div.withConfig({displayName:"indexstyle__DivStyled",componentId:"sc-1e1l7ab-1"})(["",""],c),s=t(39643),v=t(28598),f=["inline","text"];function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e){var n=e.inline,t=e.text,r=(0,o.Z)(e,f),i=n?d:a;return(0,v.jsx)(l.Z,m(m({},r),{},{inline:!0,children:(0,v.jsx)(i,{children:s.tE[t]||t})}))},h=t(82684),g=["textGroup"];function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x=function(e){var n=e.textGroup,t=(0,o.Z)(e,g),r=[],u=[];return null==n||n.forEach((function(e,n){var o=[];e.forEach((function(e,r){u.push(e),r>=1&&o.push((0,h.createElement)(l.Z,O(O({},t),{},{key:"key-text-plus-".concat(null==u?void 0:u.length,"-").concat(e,"-").concat(n,"-").concat(r),muted:!0}),"+")),o.push((0,h.createElement)(y,O(O({},t),{},{inline:!0,key:"key-text-".concat(null==u?void 0:u.length,"-").concat(e,"-").concat(n,"-").concat(r),text:e})))})),n>=1&&r.push((0,v.jsx)(l.Z,{muted:!0,small:t.small,xsmall:t.xsmall,children:"then"},"then-".concat(n))),r.push.apply(r,o)})),(0,v.jsx)(i.Z,{alignItems:"center",autoFlow:"column",columnGap:4,children:r})}},28160:function(e,n,t){"use strict";var r=t(82394),o=t(21831),i=t(75582),l=t(26304),u=(t(82684),t(77772)),c=t.n(u),a=t(54587),d=t(81728),s=t(28598),v=["children","className","inline","small","xsmall"];function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.Z=function(e){var n=e.children,t=e.className,r=e.inline,u=e.small,f=e.xsmall,m=(0,l.Z)(e,v),y=[u?c().small:f?c().xsmall:c().text,t||""];Object.entries(m||{}).forEach((function(e){var n=(0,i.Z)(e,2),t=n[0],r=n[1];if(void 0!==r&&!1!==r){var l,u,a,s=null===(l=[(0,d.JA)(t)].concat((0,o.Z)(null===(u=String("boolean"==typeof r?"":r))||void 0===u||null===(a=u.replace("%",""))||void 0===a?void 0:a.split(" "))).filter((function(e){return(null==e?void 0:e.length)>=1})))||void 0===l?void 0:l.join("-"),v=c()[s];y.push(v)}}));var h=y.filter((function(e){var n;return null!=e&&(null===(n=String(e))||void 0===n?void 0:n.length)>=1})).join(" ");return r?(0,s.jsx)("span",p(p({},(0,a.y)(m)),{},{className:h,children:n})):(0,s.jsx)("p",p(p({},(0,a.y)(m)),{},{className:h,children:n}))}},98343:function(e,n,t){"use strict";t.d(n,{Z:function(){return U}});var r=t(82684),o=t(9518),i=t(78050),l=t(21208),u=t(75582),c=t(93860),a=t(91343),d=t(11611),s=t(58944),v=t(28160),f=t(28862),p=t(1856),m=t(31353),y=t(36264),h=t(59886),g=40*y.i,b=(0,o.css)(["border-left:1px solid var(--colors-graymd);border-right:1px solid var(--colors-graymd);"]),O=(0,o.css)(["",""],(function(e){return!e.noHover&&"\n    background-color: var(--colors-graymd);\n    border-left-color: var(--colors-gray);\n    border-right-color: var(--colors-gray);\n  "})),x=(0,o.css)(["",""],(function(e){return!e.noHover&&"\n    border-bottom-color: var(--colors-gray);\n    border-top-color: var(--colors-gray);\n  "})),P=o.default.div.withConfig({displayName:"indexstyle__MenuStyled",componentId:"sc-hs3dy7-0"})([""," min-width:","px;position:",";width:max-content;"],(function(e){var n=e.left,t=e.top,r=e.zIndex;return(void 0!==n||void 0!==t)&&"\n    left: ".concat(n,"px;\n    top: ").concat(t,"px;\n    z-index: ").concat(r||1,";\n  ")}),g,(function(e){return e.contained?"absolute":"fixed"})),A=(0,o.default)(c.E.nav).withConfig({displayName:"indexstyle__MenuContent",componentId:"sc-hs3dy7-1"})(["overflow:hidden;"," ",""],(function(e){var n=e.theme;return"\n    backdrop-filter: ".concat(n.menus.blur.base,";\n    border-radius: ").concat(n.menus.border.radius.base,";\n  ")}),(0,h.PH)("0deg","#0000004D","#0000004D",0,100,"graylo")),E=o.default.div.withConfig({displayName:"indexstyle__MenuItemContainerStyled",componentId:"sc-hs3dy7-2"})([""," overflow:hidden;"," "," &:hover{","}"],b,(function(e){var n=e.first,t=e.theme;return n&&"\n    border-top: 1px solid var(--colors-graymd);\n    border-top-left-radius: ".concat(t.menus.border.radius.base,";\n    border-top-right-radius: ").concat(t.menus.border.radius.base,";\n  ")}),(function(e){var n=e.last,t=e.theme;return n&&"\n    border-bottom: 1px solid var(--colors-graymd);\n    border-bottom-left-radius: ".concat(t.menus.border.radius.base,";\n    border-bottom-right-radius: ").concat(t.menus.border.radius.base,";\n  ")}),O),C=o.default.div.withConfig({displayName:"indexstyle__ItemContent",componentId:"sc-hs3dy7-3"})(["border-top:1px solid transparent;border-bottom:1px solid transparent;&:hover{","}"," ",""],x,(function(e){return e.first&&"\n    &:hover {\n      border-top-color: transparent;\n    }\n  "}),(function(e){return e.last&&"\n    &:hover {\n      border-bottom-color: transparent;\n    }\n  "})),T=o.default.div.withConfig({displayName:"indexstyle__MenuItemStyled",componentId:"sc-hs3dy7-4"})(["",""],(function(e){var n=e.theme;return"\n    padding: ".concat(n.menus.padding.item.base,";\n  ")})),j=o.default.div.withConfig({displayName:"indexstyle__DividerContainer",componentId:"sc-hs3dy7-5"})([""," ",""],b,(function(e){var n=e.theme;return"\n    padding-left: ".concat(n.menus.padding.item.base,";\n    padding-right: ").concat(n.menus.padding.item.base,";\n  ")})),D=o.default.div.withConfig({displayName:"indexstyle__DividerStyled",componentId:"sc-hs3dy7-6"})(["background-color:var(--colors-graymd);height:1px;margin-bottom:2px;margin-top:2px;margin-left:16px;margin-right:16px;"]),_=t(28598),I={open:{opacity:1,y:0,transition:{type:"spring",stiffness:300,damping:24}},closed:{opacity:0,y:20,transition:{duration:.2}}};function N(e){var n=e.contained,t=e.first,o=e.item,i=e.last,l=e.small,u=o.Icon,c=o.description,p=o.divider,m=o.items,y=o.keyboardShortcuts,h=o.label,g=o.onClick,b=o.uuid,O=(0,r.useMemo)((function(){return(null==m?void 0:m.length)||0}),[m]);if(p)return(0,_.jsx)(j,{children:(0,_.jsx)(D,{})});var x=u?(0,_.jsx)(u,{size:l?12:void 0}):void 0,P=(0,_.jsx)(T,{children:(0,_.jsxs)(d.Z,{rowGap:4,children:[(0,_.jsxs)(d.Z,{alignItems:"center",columnGap:16,justifyContent:"space-between",templateColumns:["1fr","auto"].filter(Boolean).join(" "),templateRows:"1fr",children:[(0,_.jsxs)(d.Z,{alignItems:"center",columnGap:4,templateColumns:[x&&"auto","1fr"].filter(Boolean).join(" "),children:[x,(0,_.jsx)(v.Z,{bold:!g,muted:!g,small:l,children:(null==h?void 0:h())||b})]}),(0,_.jsxs)(d.Z,{columnGap:4,templateColumns:[y&&"auto",O>=1&&"auto"].filter(Boolean).join(" "),children:[y&&(0,_.jsx)(s.Z,{monospace:!0,small:!l,textGroup:y,xsmall:l}),O>=1&&(0,_.jsx)(f.TZ,{size:12})]})]}),c&&(0,_.jsx)(v.Z,{muted:!0,small:!l,xsmall:l,children:null==c?void 0:c()})]})});return(0,_.jsx)(E,{contained:n,first:t,last:i,noHover:g?void 0:"true",children:(0,_.jsxs)(C,{first:t,last:i,noHover:g?void 0:"true",children:[!g&&P,g&&(0,_.jsx)(a.Z,{asLink:!0,motion:!0,onClick:function(e){e.preventDefault(),null==g||g(e)},plain:!0,width:"100%",children:P})]})})}var L,w,R=function e(n){var t=n.boundingContainer,a=n.contained,d=n.coordinates,s=n.event,v=n.items,f=n.small,h=n.uuid,b=(0,r.useContext)(o.ThemeContext),O=(0,r.useRef)(null),x=(0,r.useRef)(null),E=(0,p.Z)(),C=(0,u.Z)(E,2),T=C[0],j=C[1],D=(0,r.useMemo)((function(){var e,n=void 0!==d?null==d?void 0:d.x:null==s?void 0:s.pageX,r=void 0!==d?null==d?void 0:d.y:null==s?void 0:s.pageY,o=t||{width:0,x:0,y:0},i=o.width,l=o.x,u=n+y.i;n+g>=l+i&&(u=l+i-(g+y.i)),u<0&&(u=0);var c=((null==O||null===(e=O.current)||void 0===e?void 0:e.getBoundingClientRect())||{height:0}).height,a=null==s?void 0:s.target,f=(null==a||a.getBoundingClientRect(),r+y.i/2),p=null!=c?c:35*v.length;return r+p>=window.innerHeight&&(f=window.innerHeight-(p+2*y.i)),{x:u,y:f}}),[t,d,s,v]),L=D.x,w=D.y,R=(0,r.useRef)(null),k=(0,r.useMemo)((function(){return"menu-item-items-".concat(h)}),[h]),F=(0,r.useCallback)((function(n,u){var c,a,d;if(null!=n&&null!==(c=n.items)&&void 0!==c&&c.length&&(null==x||null===(a=x.current)||void 0===a?void 0:a.uuid)!==(null==n?void 0:n.uuid)){if(u.stopPropagation(),u.preventDefault(),null==R||!R.current){var s=document.getElementById(k);R.current=(0,i.createRoot)(s)}var v=null==u?void 0:u.target,f=(null==v?void 0:v.getBoundingClientRect())||{},p=(null==O||null===(d=O.current)||void 0===d?void 0:d.getBoundingClientRect())||{},m=(null==f?void 0:f.left)-(null==p?void 0:p.left),y=(null==p?void 0:p.left)+(null==p?void 0:p.width)-((null==f?void 0:f.left)+m+4),g=(null==f?void 0:f.top)-(null==p?void 0:p.top)-2*((null==f?void 0:f.height)-(null==v?void 0:v.clientHeight));R.current.render((0,_.jsx)(r.StrictMode,{children:(0,_.jsx)(l.Z,{idleTimeout:1,children:(0,_.jsx)(o.ThemeProvider,{theme:b,children:(0,_.jsx)(e,{boundingContainer:t,contained:!0,coordinates:{x:y,y:g},event:u,items:null==n?void 0:n.items,small:!0,uuid:"".concat(h,"-").concat(n.uuid)})})})})),x.current=n}}),[t,k,b,h]),K=(0,r.useMemo)((function(){return(null==v?void 0:v.length)||0}),[v]);return(0,_.jsxs)(P,{contained:a?"true":void 0,left:L,ref:O,top:w,zIndex:m.bf+100,children:[(0,_.jsx)(A,{animate:{opacity:1,scale:1},initial:{opacity:.75,scale:.95},transition:{duration:.01,ease:[0,0,.58,1]},children:K>=1&&(0,_.jsx)(c.E.div,{style:{pointerEvents:"auto"},variants:{open:{clipPath:"inset(0% 0% 0% 0% round 10px)",transition:{type:"spring",bounce:0,duration:.7,delayChildren:.3,staggerChildren:.05}},closed:{clipPath:"inset(10% 50% 90% 50% round 10px)",transition:{type:"spring",bounce:0,duration:.3}}},children:null==v?void 0:v.map((function(e,n){return(0,_.jsx)(c.E.div,{onMouseEnter:function(n){j(),T((function(){return F(e,n)}),100)},onMouseLeave:function(){j()},style:{display:"grid",width:"100%"},variants:I,children:(0,_.jsx)(N,{contained:a,first:0===n,item:e,last:n===K-1,small:f})},"menu-item-".concat(e.uuid,"-").concat(n))}))})}),(0,_.jsx)("div",{id:k})]})},k=t(82394);!function(e){e.KEYDOWN="keydown",e.KEYUP="keyup"}(L||(L={})),function(e){e.ALT="Alt",e.ARROWDOWN="ArrowDown",e.ARROWLEFT="ArrowLeft",e.ARROWRIGHT="ArrowRight",e.ARROWUP="ArrowUp",e.BACKSPACE="Backspace",e.CAPSLOCK="CapsLock",e.CONTEXTMENU="ContextMenu",e.CTRL="Control",e.DELETE="Delete",e.END="End",e.ENTER="Enter",e.ESCAPE="Escape",e.F1="F1",e.F10="F10",e.F11="F11",e.F12="F12",e.F2="F2",e.F3="F3",e.F4="F4",e.F5="F5",e.F6="F6",e.F7="F7",e.F8="F8",e.F9="F9",e.HOME="Home",e.INSERT="Insert",e.META="Meta",e.NUMLOCK="NumLock",e.PAGEDOWN="PageDown",e.PAGEUP="PageUp",e.PAUSE="Pause",e.PRINTSCREEN="PrintScreen",e.SCROLLLOCK="ScrollLock",e.SHIFT="Shift",e.SPACE=" ",e.TAB="Tab",e.DIGIT0="0",e.DIGIT1="1",e.DIGIT2="2",e.DIGIT3="3",e.DIGIT4="4",e.DIGIT5="5",e.DIGIT6="6",e.DIGIT7="7",e.DIGIT8="8",e.DIGIT9="9",e.A="a",e.B="b",e.C="c",e.D="d",e.E="e",e.F="f",e.G="g",e.H="h",e.I="i",e.J="j",e.K="k",e.L="l",e.M="m",e.N="n",e.O="o",e.P="p",e.Q="q",e.R="r",e.S="s",e.T="t",e.U="u",e.V="v",e.W="w",e.X="x",e.Y="y",e.Z="z",e.A_CAPITAL="A",e.B_CAPITAL="B",e.C_CAPITAL="C",e.D_CAPITAL="D",e.E_CAPITAL="E",e.F_CAPITAL="F",e.G_CAPITAL="G",e.H_CAPITAL="H",e.I_CAPITAL="I",e.J_CAPITAL="J",e.K_CAPITAL="K",e.L_CAPITAL="L",e.M_CAPITAL="M",e.N_CAPITAL="N",e.O_CAPITAL="O",e.P_CAPITAL="P",e.Q_CAPITAL="Q",e.R_CAPITAL="R",e.S_CAPITAL="S",e.T_CAPITAL="T",e.U_CAPITAL="U",e.V_CAPITAL="V",e.W_CAPITAL="W",e.X_CAPITAL="X",e.Y_CAPITAL="Y",e.Z_CAPITAL="Z",e.BACKQUOTE="`",e.BACKSLASH="\\",e.BRACKETLEFT="[",e.BRACKETRIGHT="]",e.COMMA=",",e.DASH="-",e.EQUAL="=",e.PERIOD=".",e.QUOTE="'",e.SEMICOLON=";",e.SLASH="/",e.NUMPAD0="Numpad0",e.NUMPAD1="Numpad1",e.NUMPAD2="Numpad2",e.NUMPAD3="Numpad3",e.NUMPAD4="Numpad4",e.NUMPAD5="Numpad5",e.NUMPAD6="Numpad6",e.NUMPAD7="Numpad7",e.NUMPAD8="Numpad8",e.NUMPAD9="Numpad9",e.NUMPADADD="NumpadAdd",e.NUMPADDECIMAL="NumpadDecimal",e.NUMPADDIVIDE="NumpadDivide",e.NUMPADENTER="NumpadEnter",e.NUMPADMULTIPLY="NumpadMultiply",e.NUMPADSUBTRACT="NumpadSubtract",e.F13="F13",e.F14="F14",e.F15="F15",e.F16="F16",e.F17="F17",e.F18="F18",e.F19="F19",e.F20="F20",e.F21="F21",e.F22="F22",e.F23="F23",e.F24="F24"}(w||(w={}));var F=t(86735),K=t(42122);function M(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){var n,t,o=e.target,i=e.timeout,l=void 0===i?1e3:i,c=(0,p.Z)(),a=(0,u.Z)(c,2),d=a[0],s=a[1],v=(0,r.useRef)({}),f=(0,r.useRef)(!1),m=(0,r.useRef)(null),y=(0,r.useRef)((n={},(0,k.Z)(n,L.KEYDOWN,{}),(0,k.Z)(n,L.KEYUP,{}),n)),h=(0,r.useRef)((t={},(0,k.Z)(t,L.KEYDOWN,{}),(0,k.Z)(t,L.KEYUP,{}),t)),g=(0,r.useRef)([]);function b(){var e,n;y.current=(e={},(0,k.Z)(e,L.KEYDOWN,{}),(0,k.Z)(e,L.KEYUP,{}),e),h.current=(n={},(0,k.Z)(n,L.KEYDOWN,{}),(0,k.Z)(n,L.KEYUP,{}),n),g.current=[]}function O(e,n){var t,r,o,i=e.key,l=e.predicates,u=e.present,c=e.type,a=void 0===c?L.KEYDOWN:c;if(null!=l&&l.length)return null==l?void 0:l.every((function(e,t){return O(e,[n[t]])}));if(u)return i in(null!==(r=null==y||null===(o=y.current)||void 0===o?void 0:o[a])&&void 0!==r?r:{});var d=["altKey","ctrlKey","key","metaKey","shiftKey","type"],s=null!==(t=null==n?void 0:n[0])&&void 0!==t&&t;return s&&(0,K.Xy)((0,K.GL)(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?M(Object(t),!0).forEach((function(n){(0,k.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):M(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({altKey:!1,ctrlKey:!1,metaKey:!1,shiftKey:!1,type:a},e),d),(0,K.GL)(s,d))}function x(){var e,n=[];return Object.values(null!==(e=null==h?void 0:h.current)&&void 0!==e?e:{}).forEach((function(e){Object.values(e).forEach((function(e){n.push((0,F.YC)(e,(function(e){return e.timestamp}))[0])}))})),n}function P(e){if(null!=o&&o.current){var n=function(e,n){return{altKey:e.altKey,ctrlKey:e.ctrlKey,key:e.key,metaKey:e.metaKey,shiftKey:e.shiftKey,timestamp:Number(new Date),type:n}}(e,L.KEYDOWN===e.type?L.KEYDOWN:L.KEYUP===e.type?L.KEYUP:void 0);f.current&&(b(),f.current=!1,L.KEYUP===n.type)||(!function(e){var n,t,r,o=e.key,i=e.type;(n=y.current[i])[o]||(n[o]=[]),y.current[i][o].push(e),(t=h.current[i])[o]||(t[o]=[]),h.current[i][o].push(e),L.KEYDOWN,e.type,L.KEYUP===e.type&&(g.current.push(x()),h.current=(r={},(0,k.Z)(r,L.KEYDOWN,{}),(0,k.Z)(r,L.KEYUP,{}),r))}(n),d((function(){return function(e){var n,t,r,o={};null===(n=Object.entries(null!==(t=null==v?void 0:v.current)&&void 0!==t?t:{}))||void 0===n||n.forEach((function(n){var t,r,i,l=(0,u.Z)(n,2),c=l[0],a=l[1];if(null!=a&&a.predicate&&null!=a&&a.handler){var d=!1,s=null!==(t=null==g?void 0:g.current)&&void 0!==t?t:[];L.KEYDOWN===e.type&&s.push(x());var v=null!==(r=null==a||null===(i=a.predicate)||void 0===i?void 0:i.predicates)&&void 0!==r?r:[];d=v.length>=2?v.every((function(e,n){return n>=(null==s?void 0:s.length)&&O(e,s[n])})):s.some((function(e){return 1===v.length?O(a.predicate,e):null==e?void 0:e.some((function(e){return O(a.predicate,[e])}))})),d&&(o[c]=a)}}));var i,l=null===(r=(0,F.YC)(Object.values(null!=o?o:{}),(function(e){return e.priority})))||void 0===r?void 0:r[0];l&&(null==l||null===(i=l.handler)||void 0===i||i.call(l,e),s(),b(),f.current=!0,m.current&&clearTimeout(m.current))}(n)}),1),L.KEYDOWN!==n.type&&(m.current&&clearTimeout(m.current),m.current=setTimeout(b,l)))}}return(0,r.useEffect)((function(){var e=function(e){return P(e)},n=function(e){return P(e)};return document.addEventListener(L.KEYDOWN,e),document.addEventListener(L.KEYUP,n),function(){document.removeEventListener(L.KEYDOWN,e),document.removeEventListener(L.KEYUP,n)}}),[]),{deregisterCommands:function(){v.current={}},registerCommands:function(e){v.current=e}}}function U(e){var n=e.container,t=e.uuid,u=(0,r.useRef)(null),c=(0,r.useRef)(null),a=(0,r.useRef)(null),d=(0,r.useRef)(null),s=(0,r.useContext)(o.ThemeContext),v=(0,r.useMemo)((function(){return"context-menu-root-".concat(t)}),[t]),f=S({target:c}),p=f.deregisterCommands,m=f.registerCommands;function y(e){var t;return null==n||null===(t=n.current)||void 0===t?void 0:t.contains(e.target)}function h(e,n){null!=n&&n.conditionally&&function(e){var n;return null==u||null===(n=u.current)||void 0===n?void 0:n.contains(e.target)}(e)||(null!=c&&c.current&&(c.current.unmount(),c.current=null),a.current=null,d.current=[null],p())}function g(e){return null==e?void 0:e.filter((function(e){var n=e.divider,t=e.onClick;return!n&&t}))}function b(){var e;if(null!=a&&a.current){var n=null,t=g(null!=a&&a.current?null==a?void 0:a.current:[]);return null==d||null===(e=d.current)||void 0===e||e.forEach((function(e,r){var o,i,l;if(null!==e){if(r>=1&&(null===(o=n)||void 0===o||null===(i=o.items)||void 0===i?void 0:i.length)>=1){var u,c,a=g(null!==(u=null===(c=n)||void 0===c?void 0:c.items)&&void 0!==u?u:[]);(null==a?void 0:a.length)>=1&&(t=a)}n=null===(l=t)||void 0===l?void 0:l[e]}else n=null})),{item:n,items:t}}}function O(e){var n,t,r=e.x,o=e.y,i=b(),l=i.item,u=i.items;if(null!=r&&r)if(r<0&&d.current.length>=2)d.current.pop();else if(r>0){var c,a=d.current[d.current.length-1],s=null==u?void 0:u[a];(null==s||null===(c=s.items)||void 0===c?void 0:c.length)>=1&&d.current.push(null)}if(null!=o&&o){var v,f,p,m,y=null!==(v=d.current[d.current.length-1])&&void 0!==v?v:o>0?-1:null!==(f=null==l||null===(p=l.items)||void 0===p?void 0:p.length)&&void 0!==f?f:0;y+=o;var h=null!==(m=null==u?void 0:u.length)&&void 0!==m?m:0;y<0?y=0:h>=1&&y>=h&&(y=h-1),d.current[d.current.length-1]=y}console.log(null===(n=b())||void 0===n||null===(t=n.item)||void 0===t?void 0:t.uuid)}return(0,r.useEffect)((function(){var e,n=function(e){var n=document.getElementById(v);!n||null!=n&&n.contains(e.target)||h(e)};null===(e=document)||void 0===e||e.addEventListener("click",n);var t=null==c?void 0:c.current;return function(){var e;null===(e=document)||void 0===e||e.removeEventListener("click",n),t&&t.unmount(),c.current=null,p()}}),[]),{contextMenu:(0,_.jsx)("div",{ref:u}),removeContextMenu:h,renderContextMenu:function(e,r,v){var f,p;if(null!=n&&n.current&&y(e)){if(e.preventDefault(),(null==c||!c.current)&&u.current){var h=u.current;h&&(c.current=(0,i.createRoot)(h))}null!=c&&c.current&&(c.current.render((0,_.jsx)(l.Z,{idleTimeout:1,children:(0,_.jsx)(o.ThemeProvider,{theme:s,children:(0,_.jsx)(R,{boundingContainer:null!==(f=null==v?void 0:v.boundingContainer)&&void 0!==f?f:(0,K.GL)((null==n||null===(p=n.current)||void 0===p?void 0:p.getBoundingClientRect())||{},["width","x","y"]),event:e,items:r,small:!0,uuid:t})})})),a.current=r,d.current=[null],m({down:{handler:function(){return O({y:1})},predicate:{key:w.ARROWDOWN}},enter:{handler:function(){var e,n,t=null===(e=b())||void 0===e||null===(n=e.item)||void 0===n?void 0:n.onClick;t&&(null==t||t())},predicate:{key:w.ENTER}},left:{handler:function(){return O({x:-1})},predicate:{key:w.ARROWLEFT}},right:{handler:function(){return O({x:1})},predicate:{key:w.ARROWRIGHT}},up:{handler:function(){return O({y:-1})},predicate:{key:w.ARROWUP}}}))}},shouldPassControl:function(e){return 2===e.button&&y(e)}}}},94231:function(e,n,t){"use strict";t.d(n,{g:function(){return i}});var r=t(44425),o=t(93731);function i(e,n){var t,i,l,u,c=n||{},a=c.blockColor,d=c.getColorName,s=c.isSelected,v=c.theme,f=d?o.q:null==v?void 0:v.colors,p=null==f||null===(t=f.typography)||void 0===t||null===(i=t.text)||void 0===i?void 0:i.base,m="",y=null==f||null===(l=f.typography)||void 0===l||null===(u=l.text)||void 0===u?void 0:u.muted,h="";if(s);else if(r.tf.TRANSFORMER===e||a===r.Lq.PURPLE)h="purple",p=null==f?void 0:f.purple,y=null==f?void 0:f.purpleHi;else if(r.tf.DATA_EXPORTER===e||a===r.Lq.YELLOW)h="yellow",p=null==f?void 0:f.yellow,y=null==f?void 0:f.yellowHi;else if(r.tf.DATA_LOADER===e||a===r.Lq.BLUE)h="blue",p=null==f?void 0:f.blueText,y=null==f?void 0:f.blueHi;else if(r.tf.MARKDOWN===e)h="sky",p=null==f?void 0:f.sky,y=null==f?void 0:f.skyHi;else if(r.tf.SENSOR===e||a===r.Lq.PINK)h="pink",p=null==f?void 0:f.pink,y=null==f?void 0:f.pinkHi;else if(r.tf.DBT===e)h="orange",p=null==f?void 0:f.dbt,y=null==f?void 0:f.dbtHi,m=null==f?void 0:f.dbtLo;else if(r.tf.EXTENSION===e||a===r.Lq.TEAL)h="teal",p=null==f?void 0:f.teal,y=null==f?void 0:f.tealHi;else if(r.tf.CALLBACK===e)h="rose",p=null==f?void 0:f.rose,y=null==f?void 0:f.roseHi;else if(r.tf.CONDITIONAL===e){var g,b,O,x;h="red",p=null==f||null===(g=f.typography)||void 0===g||null===(b=g.text)||void 0===b?void 0:b.base,y=null==f||null===(O=f.typography)||void 0===O||null===(x=O.text)||void 0===x?void 0:x.muted}else if(r.tf.SCRATCHPAD===e||a===r.Lq.GREY||r.tf.CUSTOM===e&&!a)h="teal",p=null==f?void 0:f.teal,y=null==f?void 0:f.tealHi;else if([r.tf.CHART,r.tf.GLOBAL_DATA_PRODUCT].includes(e)&&!a){var P,A,E,C;h="green",p=null==f||null===(P=f.typography)||void 0===P||null===(A=P.text)||void 0===A?void 0:A.base,y=null==f||null===(E=f.typography)||void 0===E||null===(C=E.text)||void 0===C?void 0:C.muted}else r.tf.GROUP===e?h="gray":r.tf.PIPELINE===e&&(h="pink");return{accent:p,accentDark:m,accentLight:y,names:{base:h,hi:"".concat(h,"hi"),lo:"".concat(h,"lo"),md:"".concat(h,"md")}}}},1856:function(e,n,t){"use strict";var r=t(82684);n.Z=function(){var e=(0,r.useRef)(null),n=(0,r.useCallback)((function(n,t){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];e.current&&clearTimeout(e.current),e.current=setTimeout((function(){n.apply(void 0,o)}),t)}),[]);return[n,(0,r.useCallback)((function(){e.current&&(clearTimeout(e.current),e.current=null)}),[])]}},77772:function(e){e.exports={text:"Text_text__uz5r4",inverted:"Text_inverted__32PC6",blue:"Text_blue___EUOq",secondary:"Text_secondary__zRZrd",muted:"Text_muted__JRwai",warning:"Text_warning___E0Ea",italic:"Text_italic__SOXdC",light:"Text_light__Dcwkw",medium:"Text_medium__hSWiP",semibold:"Text_semibold__sinbr",bold:"Text_bold__0SalO",black:"Text_black___x9WX",small:"Text_small__zGqaM",xsmall:"Text_xsmall__tdzOm",monospace:"Text_monospace__xbT6D"}}}]);