(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[585],{94629:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(82394),o=r(21831),i=r(82684),u=r(50724),c=r(1402),a=r(97618),s=r(70613),l=r(31557),f=r(68899),d=r(28598);function p(e,t){var r=e.children,n=e.noPadding;return(0,d.jsx)(f.HS,{noPadding:n,ref:t,children:r})}var h=i.forwardRef(p),v=r(62547),b=r(82571),g=r(77417),O=r(46684),m=r(75375);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t){e.addProjectBreadcrumbToCustomBreadcrumbs;var r=e.after,n=e.afterHeader,i=e.afterHidden,p=e.afterWidth,j=e.afterWidthOverride,P=e.appendBreadcrumbs,w=e.before,Z=e.beforeHeader,x=e.beforeWidth,k=e.breadcrumbs,A=e.children,E=e.contained,C=e.errors,_=e.headerMenuItems,D=e.headerOffset,I=e.hideAfterCompletely,M=e.mainContainerHeader,T=e.navigationItems,R=e.setAfterHidden,S=e.setAfterWidth,N=e.setBeforeWidth,B=e.setErrors,H=e.subheaderChildren,U=e.subheaderNoPadding,W=e.title,L=e.uuid,V=(0,m.Z)(L,{setWidthAfter:S,setWidthBefore:N,widthAfter:p,widthBefore:x,widthOverrideAfter:j}),X=V.mainContainerRef,Y=V.mousedownActiveAfter,F=V.mousedownActiveBefore,z=V.setMousedownActiveAfter,Q=V.setMousedownActiveBefore,J=V.setWidthAfter,G=V.setWidthBefore,q=V.widthAfter,$=V.widthBefore,K=(0,g.Z)().project,ee=[];return k&&ee.push.apply(ee,(0,o.Z)(k)),null!==k&&void 0!==k&&k.length&&!P||!K||null!==k&&void 0!==k&&k.length||ee.unshift({bold:!P,label:function(){return W}}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.Z,{title:W}),(0,d.jsx)(l.Z,{breadcrumbs:ee,menuItems:_}),(0,d.jsxs)(f.Nk,{ref:t,children:[0!==(null===T||void 0===T?void 0:T.length)&&(0,d.jsx)(f.lm,{showMore:!0,children:(0,d.jsx)(b.Z,{navigationItems:T,showMore:!0})}),(0,d.jsx)(a.Z,{flex:1,flexDirection:"column",children:(0,d.jsxs)(v.Z,{after:r,afterHeader:n,afterHeightOffset:O.Mz,afterHidden:i,afterMousedownActive:Y,afterWidth:q,before:w,beforeHeader:Z,beforeHeightOffset:O.Mz,beforeMousedownActive:F,beforeWidth:w?$:f.k1,contained:E,headerOffset:D,hideAfterCompletely:!r||I,leftOffset:w?f.k1:null,mainContainerHeader:M,mainContainerRef:X,setAfterHidden:R,setAfterMousedownActive:z,setAfterWidth:J,setBeforeMousedownActive:Q,setBeforeWidth:G,children:[H&&(0,d.jsx)(h,{noPadding:U,children:H}),A]})})]}),C&&(0,d.jsx)(u.Z,{disableClickOutside:!0,isOpen:!0,onClickOutside:function(){return null===B||void 0===B?void 0:B(null)},children:(0,d.jsx)(c.Z,y(y({},C),{},{onClose:function(){return null===B||void 0===B?void 0:B(null)}}))})]})}var w=i.forwardRef(P)},16488:function(e,t,r){"use strict";r.d(t,{IJ:function(){return v},M8:function(){return x},Uc:function(){return j},XM:function(){return Z},_U:function(){return h},eI:function(){return m},gU:function(){return P},lO:function(){return _},ri:function(){return g},tL:function(){return y},vJ:function(){return w},xH:function(){return O}});var n,o=r(82394),i=r(92083),u=r.n(i),c=r(3917),a=r(4383),s=r(30229),l=r(42122),f=r(86735);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){return!!e&&!Object.values(s.U5).includes(e)};function v(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){var r=t.block_uuid,n=t.completed_at,i=t.started_at,c=t.status,a=null;i&&n&&(a=u()(n).valueOf()-u()(i).valueOf());return p(p({},e),{},(0,o.Z)({},r,{runtime:a,status:c}))}),{})}var b,g=function(e){var t=[{description:function(){return"This pipeline will run continuously on an interval or just once."},label:function(){return"Schedule"},uuid:s.Xm.TIME},{description:function(){return"This pipeline will run when a specific event occurs."},label:function(){return"Event"},uuid:s.Xm.EVENT},{description:function(){return"Run this pipeline when you make an API call."},label:function(){return"API"},uuid:s.Xm.API}];return e?t.slice(0,1):t};function O(e){var t=(0,l.gR)(e,[s.gm.INTERVAL,s.gm.TYPE]),r=e[s.gm.INTERVAL];r&&(t["schedule_interval[]"]=encodeURIComponent(r));var n=e[s.gm.TYPE];return n&&(t["schedule_type[]"]=n),t}function m(e){return e?new Date(u()(e).valueOf()):null}function j(e,t){return t?(0,c.XG)(e,t):function(e){if("string"!==typeof e)return e;var t=e.split("+")[0];return u()(m(t)).format(c.Nx)}(e)}!function(e){e.DAY="day",e.HOUR="hour",e.MINUTE="minute",e.SECOND="second"}(b||(b={}));var y=(n={},(0,o.Z)(n,b.DAY,86400),(0,o.Z)(n,b.HOUR,3600),(0,o.Z)(n,b.MINUTE,60),(0,o.Z)(n,b.SECOND,1),n);function P(e){var t=b.SECOND,r=e;return e%86400===0?(r/=86400,t=b.DAY):e%3600===0?(r/=3600,t=b.HOUR):e%60===0&&(r/=60,t=b.MINUTE),{time:r,unit:t}}function w(e,t){return e*y[t]}function Z(e,t,r){var n,o=u()(e);return o.set("hour",+(null===t||void 0===t?void 0:t.hour)||0),o.set("minute",+(null===t||void 0===t?void 0:t.minute)||0),o.set("second",0),n=o.format(c.TD),null!==r&&void 0!==r&&r.includeSeconds&&(n=n.concat(":00")),null!==r&&void 0!==r&&r.localTimezone&&(n=o.format(c.lE),null!==r&&void 0!==r&&r.convertToUtc&&(n=(0,c.d$)(n,{includeSeconds:null===r||void 0===r?void 0:r.includeSeconds,utcFormat:!0}))),n}function x(e){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="",o=!0;return o&&(r?n="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/api_trigger"):(n="".concat(window.origin,"/api/pipeline_schedules/").concat(null===e||void 0===e?void 0:e.id,"/pipeline_runs"),null!==e&&void 0!==e&&e.token&&(n="".concat(n,"/").concat(e.token)))),o&&(t=window.location.port)&&(n=n.replace(t,a.QT)),n}function k(e,t,r){return e.match(/[*,-/]/)?{additionalOffset:0,cronValue:e}:function(e,t,r){var n=r.indexOf(e),o=0;if(t<0)for(var i=0;i>t;i--)0===n?(n=r.length-1,o-=1):n-=1;else if(t>0)for(var u=0;u<t;u++)n===r.length-1?(n=0,o+=1):n+=1;var c="number"===typeof r[n]?r[n]:e;return{additionalOffset:o,cronValue:String(c)}}(+e,t,r)}var A=(0,f.m5)(60),E=(0,f.m5)(24),C=(0,c.Cs)();function _(e,t){if(!e)return e;var r=u()().local().format("Z"),n=r.split(":"),o="-"===r[0],i=3===n[0].length?Number(n[0].slice(1)):Number(n[0]),c=Number(n[1]);(o&&!t||!o&&t)&&(i=-i,c=-c);var a=e.split(" "),s=a[0],l=a[1],f=a[2],d=k(s,c,A),p=k(l,i+d.additionalOffset,E);if(a[0]=d.cronValue,a[1]=p.cronValue,0!==(null===p||void 0===p?void 0:p.additionalOffset)){var h=k(f,p.additionalOffset,C);a[2]=h.cronValue}return a.join(" ")}},55072:function(e,t,r){"use strict";r.d(t,{Et:function(){return d},Q:function(){return f}});r(82684);var n=r(71180),o=r(55485),i=r(38276),u=r(31748),c=r(72473),a=r(79633),s=r(70515),l=r(28598),f=30,d=9;t.ZP=function(e){var t=e.page,r=e.maxPages,f=e.onUpdate,d=e.totalPages,p=[],h=r;if(h>d)p=Array.from({length:d},(function(e,t){return t}));else{var v=Math.floor(h/2),b=t-v;t+v>=d?(b=d-h+2,h-=2):t-v<=0?(b=0,h-=2):(h-=4,b=t-Math.floor(h/2)),p=Array.from({length:h},(function(e,t){return t+b}))}return(0,l.jsx)(l.Fragment,{children:d>0&&(0,l.jsxs)(o.ZP,{alignItems:"center",children:[(0,l.jsx)(n.ZP,{disabled:0===t,onClick:function(){return f(t-1)},children:(0,l.jsx)(c.PaginateArrowLeft,{size:1.5*s.iI,stroke:u.Av})}),!p.includes(0)&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{ml:1,children:(0,l.jsx)(n.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return f(0)},children:1})},0),!p.includes(1)&&(0,l.jsx)(i.Z,{ml:1,children:(0,l.jsx)(n.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0)]}),p.map((function(e){return(0,l.jsx)(i.Z,{ml:1,children:(0,l.jsx)(n.ZP,{backgroundColor:e===t&&a.a$,borderLess:!0,noBackground:!0,notClickable:e===t,onClick:function(){e!==t&&f(e)},children:e+1})},e)})),!p.includes(d-1)&&(0,l.jsxs)(l.Fragment,{children:[!p.includes(d-2)&&(0,l.jsx)(i.Z,{ml:1,children:(0,l.jsx)(n.ZP,{noBackground:!0,noPadding:!0,notClickable:!0,children:"..."})},0),(0,l.jsx)(i.Z,{ml:1,children:(0,l.jsx)(n.ZP,{borderLess:!0,noBackground:!0,onClick:function(){return f(d-1)},children:d})},d-1)]}),(0,l.jsx)(i.Z,{ml:1}),(0,l.jsx)(n.ZP,{disabled:t===d-1,onClick:function(){return f(t+1)},children:(0,l.jsx)(c.PaginateArrowRight,{size:1.5*s.iI,stroke:u.Av})})]})})}},93808:function(e,t,r){"use strict";r.d(t,{Z:function(){return A}});var n=r(77837),o=r(26304),i=r(62243),u=r(29385),c=r(80022),a=r(13692),s=r(93189),l=r(15544),f=r(82394),d=r(38860),p=r.n(d),h=r(82684),v=r(56663),b=r.n(v),g=r(40761),O=r(34661),m=r(36105),j=r(50178),y=r(69419),P=r(28598),w=["auth"];function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,l.Z)(e);if(t){var o=(0,l.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,s.Z)(this,r)}}function A(e){return function(t){(0,a.Z)(s,t);var r=k(s);function s(){var e;(0,i.Z)(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return e=r.call.apply(r,[this].concat(n)),(0,f.Z)((0,c.Z)(e),"state",{auth:new g.Z(e.props.token)}),e}return(0,u.Z)(s,[{key:"componentDidMount",value:function(){this.setState({auth:new g.Z(this.props.token)})}},{key:"render",value:function(){var t=this.props,r=(t.auth,(0,o.Z)(t,w));return(0,P.jsx)(e,x({auth:this.state.auth},r))}}],[{key:"getInitialProps",value:function(){var t=(0,n.Z)(p().mark((function t(r){var n,o,i,u,c,a,s,l,f;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=b()(r),o=(0,j.ex)(r),i=o.id,u=n[O.Mv],c=n[m.qt],a=new g.Z(u),s=x(x({},r),{},{auth:a,currentGroupId:i,theme:c}),(0,j.YB)(r)&&a.isExpired&&(console.log("OAuth token has expired."),l=x(x({},r.query),{},{redirect_url:r.asPath}),(0,y.nL)("/sign-in?".concat((0,y.uM)(l)),r.res)),!e.getInitialProps){t.next=12;break}return t.next=10,e.getInitialProps(s);case 10:return f=t.sent,t.abrupt("return",x(x({},f),{},{auth:a,currentGroupId:i,theme:c}));case 12:return t.abrupt("return",s);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}]),s}(h.Component)}},77174:function(e,t,r){"use strict";r.r(t);var n=r(77837),o=r(82394),i=r(75582),u=r(38860),c=r.n(u),a=r(82684),s=r(34376),l=r(94629),f=r(55485),d=r(55072),p=r(93808),h=r(82359),v=r(44085),b=r(38276),g=r(30160),O=r(29624),m=r(35686),j=r(30229),y=r(70515),P=r(15610),w=r(69419),Z=r(70320),x=r(28598);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(){var e=(0,s.useRouter)(),t=(0,a.useState)(null),r=t[0],n=t[1],o=(0,w.iV)(),u=null!==o&&void 0!==o&&o.page?o.page:0,c=(null===o||void 0===o?void 0:o.order_by)||j.kJ.CREATED_AT,p=m.ZP.projects.list().data,k=(0,a.useMemo)((function(){var e;return null===p||void 0===p||null===(e=p.projects)||void 0===e?void 0:e[0]}),[p]),E=((0,a.useMemo)((function(){var e;return(0,Z.hY)(null===k||void 0===k||null===(e=k.features)||void 0===e?void 0:e[h.d.LOCAL_TIMEZONE])}),[null===k||void 0===k?void 0:k.features]),{_limit:d.Q,_offset:u*d.Q,order_by:c}),C=m.ZP.pipeline_schedules.list(E,{refreshInterval:7500,revalidateOnFocus:!0}),_=C.data,D=C.mutate,I=(0,a.useMemo)((function(){return(null===_||void 0===_?void 0:_.pipeline_schedules)||[]}),[_]),M=(0,a.useMemo)((function(){var e;return(null===_||void 0===_||null===(e=_.metadata)||void 0===e?void 0:e.count)||[]}),[_]);return(0,x.jsxs)(l.Z,{errors:r,setErrors:n,title:"Triggers",uuid:"triggers/index",children:[(0,x.jsx)(b.Z,{mx:2,my:1,children:(0,x.jsxs)(f.ZP,{alignItems:"center",children:[(0,x.jsx)(g.ZP,{bold:!0,default:!0,large:!0,children:"Sort runs by:"}),(0,x.jsx)(b.Z,{mr:1}),(0,x.jsx)(v.Z,{compact:!0,defaultColor:!0,fitContent:!0,onChange:function(e){e.preventDefault(),(0,P.u)({order_by:e.target.value,page:0})},paddingRight:4*y.iI,placeholder:"Select column",value:c||j.kJ.CREATED_AT,children:Object.entries(j.TR).map((function(e){var t=(0,i.Z)(e,2),r=t[0],n=t[1];return(0,x.jsx)("option",{value:r,children:n},r)}))})]})}),(0,x.jsx)(O.Z,{fetchPipelineSchedules:D,highlightRowOnHover:!0,includeCreatedAtColumn:!0,includePipelineColumn:!0,pipelineSchedules:I,setErrors:n,stickyHeader:!0}),(0,x.jsx)(b.Z,{p:2,children:(0,x.jsx)(d.ZP,{maxPages:9,onUpdate:function(t){var r=Number(t),n=A(A({},o),{},{page:r>=0?r:0});e.push("/triggers","/triggers?".concat((0,w.uM)(n)))},page:Number(u),totalPages:Math.ceil(M/d.Q)})})]})}E.getInitialProps=(0,n.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{});case 1:case"end":return e.stop()}}),e)}))),t.default=(0,p.Z)(E)},59733:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/triggers",function(){return r(77174)}])},80022:function(e,t,r){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}r.d(t,{Z:function(){return n}})},15544:function(e,t,r){"use strict";function n(e){return n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}r.d(t,{Z:function(){return n}})},13692:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(61049);function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,n.Z)(e,t)}},93189:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(12539),o=r(80022);function i(e,t){if(t&&("object"===n(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(e)}}},function(e){e.O(0,[6085,1557,9624,9774,2888,179],(function(){return t=59733,e(e.s=t);var t}));var t=e.O();_N_E=t}]);