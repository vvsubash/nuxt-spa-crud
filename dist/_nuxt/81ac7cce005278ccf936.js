(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(t,e){function n(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=118},131:function(t,e,n){"use strict";var r=n(35);n.n(r).a},132:function(t,e,n){"use strict";var r=n(36);n.n(r).a},133:function(t,e,n){},134:function(t,e,n){"use strict";var r=n(37);n.n(r).a},144:function(t,e,n){"use strict";n.r(e);n(53),n(60),n(63);var r=n(20),o=n.n(r),a=(n(38),n(48),n(94),n(3)),i=n.n(a),s=(n(95),n(96),n(34),n(69),n(99),n(70),n(68),n(104),n(116),n(0)),u=(n(79),n(118)),c=u.keys();function p(t){var e=u(t);return e.default||e}var f={},h=!0,l=!1,d=void 0;try{for(var m,v=c[Symbol.iterator]();!(h=(m=v.next()).done);h=!0){var x=m.value;f[x.replace(/^\.\//,"").replace(/\.(js|mjs)$/,"")]=p(x)}}catch(t){l=!0,d=t}finally{try{h||null==v.return||v.return()}finally{if(l)throw d}}var y=f,g=(n(119),n(120),n(121),n(123),n(125),n(126),n(129),n(21)),w=n.n(g),b=function(){return{}};function _(t){return t.then(function(t){return t.default||t})}function C(t,e){var n=t.options.data||b;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),w()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function $(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function k(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function E(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function R(t){return Promise.all(E(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=$(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function T(t){return S.apply(this,arguments)}function S(){return(S=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R(e);case 2:return t.abrupt("return",w()({},e,{meta:k(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function A(t,e){return j.apply(this,arguments)}function j(){return(j=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=J(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,T(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,T(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function N(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),decodeURI(n||"/")+window.location.search+window.location.hash)}function q(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?L:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var p=a[c.name||"pathMatch"],f=void 0;if(null==p){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(p)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=s(p[h]),!e[u].test(f))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(f)+"`");o+=(0===h?c.prefix:c.delimiter)+f}}else{if(f=c.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(p),!e[u].test(f))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+f+'"');o+=c.prefix+f}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=M.exec(t));){var u=n[0],c=n[1],p=n.index;if(i+=t.slice(a,p),a=p+u.length,c)i+=c[1];else{var f=t[a],h=n[2],l=n[3],d=n[4],m=n[5],v=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=h&&null!=f&&f!==h,g="+"===v||"*"===v,w="?"===v||"*"===v,b=n[2]||s,_=d||m;r.push({name:l||o++,prefix:h||"",delimiter:b,optional:w,repeat:g,partial:y,asterisk:!!x,pattern:_?U(_):x?".*":"[^"+I(b)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function D(t,e){var n={},r=w()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function P(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500}}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var M=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function I(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function U(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function J(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var B=n(81),H=n.n(B),K=n(52),z=function(){return _(n.e(4).then(n.bind(null,158)))},Q=function(){return _(n.e(3).then(n.bind(null,157)))},F=function(){return _(n.e(2).then(n.bind(null,156)))},V=function(){return _(n.e(5).then(n.bind(null,155)))};s.a.use(K.a),window.history.scrollRestoration="manual";var W=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var X=n(82),Z=n.n(X).a,G={name:"nuxt-child",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean},render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,p={};Y.forEach(function(t){void 0!==c[t]&&(p[t]=c[t])});var f={};tt.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(a))});var h=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),h)return h.call(a,t)};var l=[t("router-view",r)];return o.keepAlive&&(l=[t("keep-alive",{props:o.keepAliveProps},l)]),t("transition",{props:p,on:f},l)}},Y=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],tt=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],et={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},nt={name:"nuxt-error",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},rt=(n(131),n(14)),ot=Object(rt.a)(nt,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("nuxt-link",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null);ot.options.__file="nuxt-error.vue";var at=ot.exports,it={name:"nuxt",props:{nuxtChildKey:String,keepAlive:Boolean},render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||q(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:G,NuxtError:at}},st={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ut=(n(132),Object(rt.a)(st,void 0,void 0,!1,null,null,null));ut.options.__file="nuxt-loading.vue";var ct=ut.exports,pt=(n(133),n(134),Object(rt.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("nuxt")],1)},[],!1,null,null,null));pt.options.__file="default.vue";var ft={_default:pt.exports},ht={head:{title:"nuxt-spa-crud",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My posh Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.a.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ft["_"+t]||(t="default"),this.layoutName=t,this.layout=ft["_"+t],this.layout},loadLayout:function(t){return t&&ft["_"+t]||(t="default"),Promise.resolve(ft["_"+t])}},components:{NuxtLoading:ct}},lt=n(39);s.a.component(Z.name,Z),s.a.component(G.name,G),s.a.component(et.name,et),s.a.component(it.name,it),s.a.use(H.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var dt={name:"page",mode:"out-in",appear:!0,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function mt(){return(mt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new K.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:W,routes:[{path:"/cows",component:z,name:"cows"},{path:"/cows/addcow",component:Q,name:"cows-addcow"},{path:"/cows/:name",component:F,name:"cows-name"},{path:"/",component:V,name:"index"}],fallback:!1});case 2:return n=t.sent,r=w()({router:n,nuxt:{defaultTransition:dt,transitions:[dt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},dt,{name:t}):Object.assign({},dt,t):dt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,t=t?P(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ht),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=N(n.options.base),a=n.resolve(i).route),t.next=8,A(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.a[n]||(s.a[n]=!0,s.a.use(function(){s.a.prototype.hasOwnProperty(t)||Object.defineProperty(s.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof lt.a){t.next=12;break}return t.next=12,Object(lt.a)(r.context,u);case 12:t.next=15;break;case 15:return t.abrupt("return",{app:r,router:n});case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var vt,xt,yt=[],gt=window.__NUXT__||{};if(Object.assign(s.a.config,{silent:!0,performance:!1}),!s.a.config.$nuxt){var wt=s.a.config.errorHandler;s.a.config.errorHandler=function(t,e,n){var r=null;if("function"==typeof wt){for(var o=arguments.length,a=new Array(o>3?o-3:0),i=3;i<o;i++)a[i-3]=arguments[i];r=wt.apply(void 0,[t,e,n].concat(a))}if(!0===r)return r;if(e&&e.$root){var u=Object.keys(s.a.config.$nuxt).find(function(t){return e.$root[t]});u&&e.$root[u].error&&"render function"!==n&&e.$root[u].error(t)}if("function"==typeof wt)return r;console.error(t.message||t)},s.a.config.$nuxt={}}function bt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function _t(t,e,n){return Ct.apply(this,arguments)}function Ct(){return(Ct=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!vt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?D(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,R(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return a._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=17;break;case 12:t.prev=12,t.t0=t.catch(4),this.error(t.t0),this.$nuxt.$emit("routeChanged",e,n,error),r(!1);case 17:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function $t(t,e){return gt.serverRendered&&e&&C(t,e),t._Ctor=t,t}function kt(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():O(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Et(t,e,n){return Rt.apply(this,arguments)}function Rt(){return(Rt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,p,f,h,l,d,m,v,x,y,g,w,b=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return yt=e===n?[]:k(n,o=[]).map(function(t,e){return q(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&b.$loading.finish&&b.$loading.finish(),n.path!==t.path&&b.$loading.pause&&b.$loading.pause(),a||(a=!0,r(t))},t.next=7,A(vt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=vt.nuxt.dateErr,this._hadError=!!vt.nuxt.err,(c=k(e,u=[])).length){t.next=25;break}return t.next=14,kt.call(this,c,vt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof at.layout?at.layout(vt.context):at.layout);case 18:return p=t.sent,t.next=21,kt.call(this,c,vt.context,p);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return vt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(bt(c,e,n)),t.prev=27,t.next=30,kt.call(this,c,vt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!vt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(vt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,kt.call(this,c,vt.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!vt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:h=!0,t.prev=46,l=!0,d=!1,m=void 0,t.prev=50,v=c[Symbol.iterator]();case 52:if(l=(x=v.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(vt.context);case 58:if(h=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:l=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,m=t.t0;case 70:t.prev=70,t.prev=71,l||null==v.return||v.return();case 73:if(t.prev=73,!d){t.next=76;break}throw m;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(h){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=q(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,b._pathChanged&&b._queryChanged||t._path!==yt[n])t._dataRefresh=!0;else if(!b._pathChanged&&b._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return b._diffQuery[t]}))}if(!b._hadError&&b._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=O(t.options.asyncData,vt.context).then(function(e){C(t,e),b.$loading.increase&&b.$loading.increase(s)});o.push(c)}if(b.$loading.manual=!1===t.options.loading,i){var p=t.options.fetch(vt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){b.$loading.increase&&b.$loading.increase(s)}),o.push(p)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(g=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,g));case 97:return yt=[],_=g,s.a.config.errorHandler&&s.a.config.errorHandler(_),"function"==typeof(w=at.layout)&&(w=w(vt.context)),t.next=103,this.loadLayout(w);case 103:this.error(g),this.$nuxt.$emit("routeChanged",e,n,g),r(!1);case 106:case"end":return t.stop()}var _},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Tt(t,e){E(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.a.extend(t))._Ctor=t,n.components[r]=t),t})}function St(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?at.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(vt.context)),this.setLayout(e)}function At(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=k(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.a.set(t.$data,r,n[r])}}),St.call(n,t)})}function jt(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),xt.afterEach(function(e,n){s.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Ot(){return(Ot=i()(regeneratorRuntime.mark(function t(e){var n,r,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return vt=e.app,xt=e.router,t.next=4,Promise.all((u=void 0,u=N((a=xt).options.base,a.options.mode),E(a.match(u),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=$t($(e),gt.data?gt.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:if(n=t.sent,r=new s.a(vt),o=function(){r.$mount("#__nuxt"),s.a.nextTick(function(){jt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(bt(n,xt.currentRoute)),yt=xt.currentRoute.matched.map(function(t){return q(t.path)(xt.currentRoute.params)})),r.$loading={},gt.error&&r.error(gt.error),xt.beforeEach(_t.bind(r)),xt.beforeEach(Et.bind(r)),xt.afterEach(Tt),xt.afterEach(At.bind(r)),!gt.serverRendered){t.next=18;break}return o(),t.abrupt("return");case 18:Et.call(r,xt.currentRoute,xt.currentRoute,function(t){if(!t)return Tt(xt.currentRoute,xt.currentRoute),St.call(r,xt.currentRoute),void o();xt.push(t,function(){return o()},function(t){if(!t)return o();console.error(t)})});case 19:case"end":return t.stop()}var a,u},t,this)}))).apply(this,arguments)}s.a.config.$nuxt.$nuxt=!0,function(t){return mt.apply(this,arguments)}().then(function(t){return Ot.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},39:function(t,e,n){"use strict";var r=n(0),o=n(83),a=n.n(o),i=(n(139),n(84));r.a.use(i.a);var s=a.a.initializeApp({apiKey:"AIzaSyASmCb-ocsqqiuEWu99DbJChEVhHgSkZhk",databaseURL:"https://samp-96c4e.firebaseio.com",projectId:"samp-96c4e"}).firestore();s.settings({timestampsInSnapshots:!0}),e.a=s},85:function(t,e,n){t.exports=n(144)}},[[85,6,1,7]]]);