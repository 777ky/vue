module.exports=function(e){var t={},n={0:0};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.e=function(t){if(0!==n[t]){var o=require("./"+{1:"e43eeca6a4f238459097",2:"5d94e30d2d6784d3201a"}[t]+".js"),r=o.modules,c=o.ids;for(var l in r)e[l]=r[l];for(var i=0;i<c.length;i++)n[c[i]]=0}return Promise.all([])},o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(object,e){return Object.prototype.hasOwnProperty.call(object,e)},o.p="/assets/",o.oe=function(e){process.nextTick(function(){throw e})},o(o.s=13)}([function(e,t){e.exports=require("vue")},function(e,t,n){"use strict";function o(e,t,n,o,r,c,l,d){var h,f="function"==typeof e?e.options:e;if(t&&(f.render=t,f.staticRenderFns=n,f._compiled=!0),o&&(f.functional=!0),c&&(f._scopeId="data-v-"+c),l?(h=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(l)},f._ssrRegister=h):r&&(h=d?function(){r.call(this,this.$root.$options.shadowRoot)}:r),h)if(f.functional){f._injectStyles=h;var m=f.render;f.render=function(e,t){return h.call(t),m(e,t)}}else{var x=f.beforeCreate;f.beforeCreate=x?[].concat(x,h):[h]}return{exports:e,options:f}}n.d(t,"a",function(){return o})},function(e,t){e.exports=require("vuex")},function(e,t){e.exports=require("firebase/app")},function(e,t){},function(e,t){},function(e,t){e.exports=require("vue-router")},function(e,t,n){var map={"./pakapaka.json":20,"./plank.json":21};function o(e){var t=r(e);return n(t)}function r(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}o.keys=function(){return Object.keys(map)},o.resolve=r,e.exports=o,o.id=7},function(e,t){e.exports=require("querystring")},function(e,t){e.exports=require("node-fetch")},function(e,t){e.exports=require("vue-meta")},function(e,t){e.exports=require("vue-no-ssr")},function(e,t){e.exports=require("vuetify")},function(e,t,n){e.exports=n(26)},function(e,t,n){"use strict";n.r(t),t.default=(({store:e,route:t,redirect:n})=>{e.commit("updatePage",t)})},function(e,t,n){"use strict";n.r(t);var o=n(4),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},function(e,t){},function(e,t){},function(e,t,n){"use strict";n.r(t);var o=n(5),r=n.n(o);for(var c in o)"default"!==c&&function(e){n.d(t,e,function(){return o[e]})}(c);t.default=r.a},function(e,t,n){"use strict";n.r(t),n.d(t,"strict",function(){return o}),n.d(t,"state",function(){return r}),n.d(t,"getters",function(){return c}),n.d(t,"mutations",function(){return l}),n.d(t,"actions",function(){return d});const o=!1,r=()=>({routeName:"index",routeQuery:{},isPseudo:!1,isLoaded:!1,user:null,termDate:0,pickDate:null,challenge:null,startDate:null,isSetting:!1,cjs:{},window:null,localStorage:null}),c={routeName:e=>e.routeName,routeQuery:e=>e.routeQuery,isPseudo:e=>e.routeQuery.pse,isLoaded:e=>e.isLoaded,user:e=>e.user,challengeState:e=>e.challengeState,termDate:e=>e.termDate,startDate:e=>e.startDate,pickDate:e=>e.pickDate,isSetting:e=>e.isSetting,challenge:e=>e.challenge,isAuthenticated:e=>!!e.user,window:e=>e.window,cjs:e=>e.cjs},l={updatePage(e,t){e.routeName=t.name,e.routeQuery=t.query},setIsLoaded(e,t){e.isLoaded=!!t},setUser(e,t){e.user=t},clearCredential(e,t){e.user=t},setTermDate(e,t){e.termDate=t},setPickDate(e,t){e.pickDate=t},setIsSetting(e,t){e.isSetting=t},setChallenge(e,t){e.challenge=t},setChallengeState(e,t){e.startDate=t.date.toDate(),e.isSetting=t.isSetting},initLocalStorage(e,t){e.localStorage=t},initWindow(e,t){e.window=t},setCreateJs(e,t){e.cjs=t}},d={setTermDate({commit:e},t){const n=new Date(t),o=new Date;console.log(n);const r=Math.floor((o-n)/864e5)+1;console.log(r),e("setTermDate",r)},loadComplete({commit:e}){e("setIsLoaded",!0)},signIn(){this.$firebaseAuth().signInWithRedirect(this.$provider)},signOut({commit:e}){return new Promise(t=>{this.$firebaseAuth().signOut().then(()=>{e("clearCredential",null),t()})})},PICK_SELECT_DATE({commit:e},t){e("setPickDate",t)},SET_30_DATE({commit:e},{user:t,name:o,date:r}){console.log("SET_30_DATE");const data=n(7)("./"+o+".json");data&&Object.keys(data).forEach(e=>{const n=data[e];"object"==typeof n&&Object.keys(n).forEach((n,o)=>{const c=r.getFullYear(),l=r.getMonth(),d=r.getDate()+o;this.$usersRef.doc(t.uid).collection("challenge").doc(e).collection("list").doc(n).update({date:new Date(c,l,d),check:!1}).then(e=>{console.log("SET_30_DATE_SUCCEED")}).catch(e=>{console.error("SET_30_DATE_ERROR:",e)})})})},SET_CHALLENGE({commit:e,state:t,dispatch:o},{user:r,name:c}){const data=n(7)("./"+c+".json"),l=new Date;data&&Object.keys(data).forEach(e=>{const t=data[e];"object"==typeof t&&Object.keys(t).forEach((n,d)=>{this.$usersRef.doc(r.uid).collection("challenge").doc(e).collection("list").doc(n).set({...t[n]}).then(e=>{o("SET_30_DATE",{user:r,name:c,date:l}),console.log("SET_CHALLENGE_SUCCEED")}).catch(e=>{console.error("SET_CHALLENGE_SUCCEED_ERROR: ",e)})})})},SET_CHALLENGE_STATUS({commit:e,state:t,dispatch:n},{user:o,name:r,date:c,flag:l}){this.$usersRef.doc(o.uid).collection("challenge").doc(r).set({date:c,isSetting:l}).then(()=>{e("setIsSetting",l),console.log("SET_CHALLENGE_STATUS_SUCCEED")}).catch(e=>{console.error("SET_CHALLENGE_STATUS_ERROR: ",e)})},RESET_CHALLENGE_START_DATE({commit:e,state:t},{user:n,name:o,flag:r}){this.$usersRef.doc(n.uid).collection("challenge").doc(o).update({isSetting:r}).then(()=>{e("setTermDate",0),e("setPickDate",null),console.log("RESET_CHALLENGE_START_DATE_SUCCEED")}).catch(e=>{console.error("RESET_CHALLENGE_START_DATE_ERROR: ",e)})},SET_USER({commit:e},t){const n={uid:t.uid,name:t.displayName,email:t.email,icon:t.photoURL};this.$usersRef.doc(t.uid).set(n),e("setUser",n)},SET_CREDENTIAL({commit:e,dispatch:t},n){const o=["plank","pakapaka"];t("SET_USER",n);for(let i in o)t("SET_CHALLENGE_STATUS",{user:n,name:o[i],date:new Date,flag:!1}),t("SET_CHALLENGE",{user:n,name:o[i]})},async GET_CREDENTIAL({commit:e,state:t,dispatch:n},{user:o,name:r}){if(!o)return;const c=await this.$usersRef.doc(o.uid).get();c.exists?e("setUser",c.data()):n("SET_CREDENTIAL",o)},async GET_CHALLENGE_STATUS({commit:e,state:t},{user:n,name:o}){if(console.log("GET_CHALLENGE_STATUS"),!n)return;const r=await this.$usersRef.doc(n.uid).collection("challenge").doc(o).get();r.exists?e("setChallengeState",r.data()):console.log("チャレンジステイタス取得失敗")},LOAD_CHALLENGE_STATUS({commit:e,state:t},{user:n,name:o}){if(console.log("LOAD_CHALLENGE_STATUS"),!n)return;this.$usersRef.doc(n.uid).collection("challenge").doc(o).onSnapshot(t=>{console.log(t.data()),e("setChallengeState",t.data())},e=>{console.log(e)})},LOAD_CHALLENGE({commit:e,state:t},{user:n,name:o}){if(console.log("LOAD_CHALLENGE"),!n)return;this.$usersRef.doc(n.uid).collection("challenge").doc(o).collection("list").orderBy("day","asc").onSnapshot(t=>{const data=[];t.forEach(t=>{data.push({...t.data(),date:t.data().date.toDate()}),e("setChallenge",data)})},e=>{console.log(e)})},CHECK_CHALLENGE({commit:e,state:t},{user:n,key:o,check:r,name:c}){n&&this.$usersRef.doc(n.uid).collection("challenge").doc(c).collection("list").doc(o.toString()).update({check:r}).then(()=>{console.log("CHECK_CHALLENGE_SUCCEED")}).catch(e=>{console.error("CHECK_CHALLENGE_ERROR: ",e)})},setQuery({commit:e,state:t,dispatch:n}){console.log("setQuery")},nuxtClientInit({commit:e,state:t,dispatch:n},{req:o}){e("initWindow",window),e("initLocalStorage",localStorage)}}},function(e){e.exports={pakapaka:{1:{day:1,text:"20",check:!1},2:{day:2,text:"20",check:!1},3:{day:3,text:"30",check:!1},4:{day:4,text:"30",check:!1},5:{day:5,text:"40",check:!1},6:{day:6,text:"REST",check:!1},7:{day:7,text:"45",check:!1},8:{day:8,text:"45",check:!1},9:{day:9,text:"60",check:!1},10:{day:10,text:"60",check:!1},11:{day:11,text:"60",check:!1},12:{day:12,text:"REST",check:!1},13:{day:13,text:"90",check:!1},14:{day:14,text:"90",check:!1},15:{day:15,text:"90",check:!1},16:{day:16,text:"120",check:!1},17:{day:17,text:"120",check:!1},18:{day:18,text:"REST",check:!1},19:{day:19,text:"150",check:!1},20:{day:20,text:"150",check:!1},21:{day:21,text:"150",check:!1},22:{day:22,text:"180",check:!1},23:{day:23,text:"180",check:!1},24:{day:24,text:"REST",check:!1},25:{day:25,text:"210",check:!1},26:{day:26,text:"210",check:!1},27:{day:27,text:"240",check:!1},28:{day:28,text:"240",check:!1},29:{day:29,text:"270",check:!1},30:{day:30,text:"300",check:!1}}}},function(e){e.exports={plank:{1:{day:1,text:"20",check:!1},2:{day:2,text:"20",check:!1},3:{day:3,text:"30",check:!1},4:{day:4,text:"30",check:!1},5:{day:5,text:"40",check:!1},6:{day:6,text:"REST",check:!1},7:{day:7,text:"45",check:!1},8:{day:8,text:"45",check:!1},9:{day:9,text:"60",check:!1},10:{day:10,text:"60",check:!1},11:{day:11,text:"60",check:!1},12:{day:12,text:"REST",check:!1},13:{day:13,text:"90",check:!1},14:{day:14,text:"90",check:!1},15:{day:15,text:"90",check:!1},16:{day:16,text:"120",check:!1},17:{day:17,text:"120",check:!1},18:{day:18,text:"REST",check:!1},19:{day:19,text:"150",check:!1},20:{day:20,text:"150",check:!1},21:{day:21,text:"150",check:!1},22:{day:22,text:"180",check:!1},23:{day:23,text:"180",check:!1},24:{day:24,text:"REST",check:!1},25:{day:25,text:"210",check:!1},26:{day:26,text:"210",check:!1},27:{day:27,text:"240",check:!1},28:{day:28,text:"240",check:!1},29:{day:29,text:"270",check:!1},30:{day:30,text:"300",check:!1}}}},function(e,t){e.exports=require("firebase/auth")},function(e,t){e.exports=require("firebase/firestore")},function(e,t){},function(e,t){e.exports=require("debug")},function(e,t,n){"use strict";n.r(t);var o=n(8),r=n(0),c=n.n(r),l=n(9),d=n.n(l);const h={};h.authenticated=n(14),h.authenticated=h.authenticated.default||h.authenticated;var f=h;function m(e){return e.then(e=>e.default||e)}function x(e){return e.options&&e._Ctor===e?e:(e.options?(e._Ctor=e,e.extendOptions=e.options):(e=c.a.extend(e))._Ctor=e,!e.options.name&&e.options.__file&&(e.options.name=e.options.__file),e)}function y(e,t=!1){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).map(o=>(t&&t.push(n),e.components[o]))))}function v(e){return Promise.all(function(e,t){return Array.prototype.concat.apply([],e.matched.map((e,n)=>Object.keys(e.components).reduce((o,r)=>(e.components[r]?o.push(t(e.components[r],e.instances[r],e,r,n)):delete e.components[r],o),[])))}(e,async(e,t,n,o)=>("function"!=typeof e||e.options||(e=await e()),n.components[o]=x(e),n.components[o])))}async function _(e){if(e)return await v(e),{...e,meta:y(e).map((t,n)=>({...t.options.meta,...(e.matched[n]||{}).meta}))}}async function E(e,t){e.context||(e.context={isStatic:!1,isDev:!1,isHMR:!1,app:e,store:e.store,payload:t.payload,error:t.error,base:"/",env:{siteName:"サイトネーム",APIKEY:"AIzaSyCZcleLFLX7m1bZw2UmQ0kjJpkUI3j8dQo",AUTHDOMAIN:"vue-labs.firebaseapp.com",DATABASEURL:"https://vue-labs.firebaseio.com",PROJECTID:"vue-labs",STORAGEBUCKET:"vue-labs.appspot.com",MESSAGINGSENDERID:"535096312104"}},t.req&&(e.context.req=t.req),t.res&&(e.context.res=t.res),t.ssrContext&&(e.context.ssrContext=t.ssrContext),e.context.redirect=((t,path,n)=>{if(!t)return;e.context._redirected=!0;let o=typeof path;"number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},o=typeof(path=t),t=302),"object"===o&&(path=e.router.resolve(path).route.fullPath),/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)?e.context.next({path:path,query:n,status:t}):(path=function(e,t){let n;const o=e.indexOf("://");-1!==o?(n=e.substring(0,o),e=e.substring(o+3)):e.startsWith("//")&&(e=e.substring(2));let r,c=e.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");2===(c=path.split("#")).length&&(path=c[0],r=c[1]);l+=path?"/"+path:"",t&&"{}"!==JSON.stringify(t)&&(l+=(2===e.split("?").length?"&":"?")+function(e){return Object.keys(e).sort().map(t=>{const n=e[t];return null==n?"":Array.isArray(n)?n.slice().map(e=>[t,"=",e].join("")).join("&"):t+"="+n}).filter(Boolean).join("&")}(t));return l+=r?"#"+r:""}(path,n),e.context.next({path:path,status:t}))}),e.context.beforeNuxtRender=(e=>t.beforeRenderFns.push(e)));const[n,o]=await Promise.all([_(t.route),_(t.from)]);t.route&&(e.context.route=n),t.from&&(e.context.from=o),e.context.next=t.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!t.isHMR,e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{}}function C(e,t){return!e.length||t._redirected||t._errored?Promise.resolve():k(e[0],t).then(()=>C(e.slice(1),t))}function k(e,t){let n;return(n=2===e.length?new Promise(n=>{e(t,function(e,data){e&&t.error(e),n(data=data||{})})}):e(t))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function S(e,t){return function(e){const t=new Array(e.length);for(let i=0;i<e.length;i++)"object"==typeof e[i]&&(t[i]=new RegExp("^(?:"+e[i].pattern+")$"));return function(n,o){let path="";const data=n||{},r=o||{},c=r.pretty?T:encodeURIComponent;for(let i=0;i<e.length;i++){const n=e[i];if("string"==typeof n){path+=n;continue}const o=data[n.name||"pathMatch"];let r;if(null==o){if(n.optional){n.partial&&(path+=n.prefix);continue}throw new TypeError('Expected "'+n.name+'" to be defined')}if(Array.isArray(o)){if(!n.repeat)throw new TypeError('Expected "'+n.name+'" to not repeat, but received `'+JSON.stringify(o)+"`");if(0===o.length){if(n.optional)continue;throw new TypeError('Expected "'+n.name+'" to not be empty')}for(let e=0;e<o.length;e++){if(r=c(o[e]),!t[i].test(r))throw new TypeError('Expected all "'+n.name+'" to match "'+n.pattern+'", but received `'+JSON.stringify(r)+"`");path+=(0===e?n.prefix:n.delimiter)+r}}else{if(r=n.asterisk?encodeURI(o).replace(/[?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase()):c(o),!t[i].test(r))throw new TypeError('Expected "'+n.name+'" to match "'+n.pattern+'", but received "'+r+'"');path+=n.prefix+r}}return path}}(function(e,t){const n=[];let o=0,r=0,path="";const c=t&&t.delimiter||"/";let l;for(;null!=(l=w.exec(e));){const t=l[0],d=l[1],h=l.index;if(path+=e.slice(r,h),r=h+t.length,d){path+=d[1];continue}const f=e[r],m=l[2],x=l[3],y=l[4],v=l[5],_=l[6],E=l[7];path&&(n.push(path),path="");const C=null!=m&&null!=f&&f!==m,k="+"===_||"*"===_,S="?"===_||"*"===_,w=l[2]||c,pattern=y||v;n.push({name:x||o++,prefix:m||"",delimiter:w,optional:S,repeat:k,partial:C,asterisk:!!E,pattern:pattern?R(pattern):E?".*":"[^"+A(w)+"]+?"})}r<e.length&&(path+=e.substr(r));path&&n.push(path);return n}(e,t))}const w=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function T(e){return encodeURI(e).replace(/[\/?#]/g,e=>"%"+e.charCodeAt(0).toString(16).toUpperCase())}function A(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function R(e){return e.replace(/([=!:$\/()])/g,"\\$1")}var L=n(10),j=n.n(L),$=n(6),D=n.n($);const N=()=>m(n.e(2).then(n.bind(null,49))),O=()=>m(n.e(1).then(n.bind(null,48)));c.a.use(D.a);const P=function(e,t,n){let o=!1;return e.matched.length<2&&e.matched.every(e=>!1!==e.components.default.options.scrollToTop)?o={x:0,y:0}:e.matched.some(e=>e.components.default.options.scrollToTop)&&(o={x:0,y:0}),n&&(o=n),new Promise(t=>{window.$nuxt.$once("triggerScroll",()=>{if(e.hash){let t=e.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(t="#"+window.CSS.escape(t.substr(1)));try{document.querySelector(t)&&(o={selector:t})}catch(e){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}t(o)})})};var U=n(11),I={...n.n(U).a,name:"NoSsr"},H={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render(e,{parent:t,data:data,props:n}){data.nuxtChild=!0;const o=t,r=t.$nuxt.nuxt.transitions,c=t.$nuxt.nuxt.defaultTransition;let l=0;for(;t;)t.$vnode&&t.$vnode.data.nuxtChild&&l++,t=t.$parent;data.nuxtChildDepth=l;const d=r[l]||c,h={};G.forEach(e=>{void 0!==d[e]&&(h[e]=d[e])});const f={};M.forEach(e=>{"function"==typeof d[e]&&(f[e]=d[e].bind(o))});const m=f.beforeEnter;f.beforeEnter=(e=>{if(window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")}),m)return m.call(o,e)});let x=[e("router-view",data)];return n.keepAlive&&(x=[e("keep-alive",{props:n.keepAliveProps},x)]),e("transition",{props:h,on:f},x)}};const G=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],M=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"];var F={props:["error"],layout:"blog"},K=n(1),B=Object(K.a)(F,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[this._ssrNode((404===this.error.statusCode?"<p>ページが見つかりません</p>":"<p>エラーが発生しました</p>")+" "),t("nuxt-link",{attrs:{to:"/"}},[this._v("ホーム")])],2)},[],!1,null,null,"3025a10e").exports,Q={name:"Nuxt",components:{NuxtChild:H,NuxtError:B},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||S(this.$route.matched[0].path)(this.$route.params);const e=this.$route.matched[0]&&this.$route.matched[0].components.default;return e&&e.options&&e.options.key?"function"==typeof e.options.key?e.options.key(this.$route):e.options.key:this.$route.path}},beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render(e){return this.nuxt.err?e("NuxtError",{props:{error:this.nuxt.err}}):e("NuxtChild",{key:this.routerViewKey,props:this.$props})}},J={name:"NuxtLoading",data:()=>({percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}),computed:{left(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy(){this.clear()},methods:{clear(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start(){return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(()=>this.startTimer(),this.throttle):this.startTimer(),this},set(e){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(e))),this},get(){return this.percent},increase(e){return this.percent=Math.min(100,Math.floor(this.percent+e)),this},decrease(e){return this.percent=Math.max(0,Math.floor(this.percent-e)),this},pause(){return clearInterval(this._timer),this},resume(){return this.startTimer(),this},finish(){return this.percent=this.reversed?0:100,this.hide(),this},hide(){return this.clear(),setTimeout(()=>{this.show=!1,this.$nextTick(()=>{this.percent=0,this.reversed=!1})},500),this},fail(){return this.canSucceed=!1,this},startTimer(){this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(()=>{this.skipTimerCount>0?this.skipTimerCount--:(this.reversed?this.decrease(this._cut):this.increase(this._cut),this.continuous&&(this.percent>=100?(this.skipTimerCount=1,this.reversed=!this.reversed):this.percent<=0&&(this.skipTimerCount=1,this.reversed=!this.reversed)))},100)}},render(e){let t=e(!1);return this.show&&(t=e("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),t}};var V=Object(K.a)(J,void 0,void 0,!1,function(e){var t=n(15);t.__inject__&&t.__inject__(e)},null,"f7454a18").exports,W=(n(16),n(17),n(2)),X=n.n(W),Z={name:"AppFooter",computed:{...Object(W.mapGetters)(["user"])}},z=Object(K.a)(Z,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-nav",{attrs:{value:!0,fixed:"",color:"#fff"}},[n("v-btn",{attrs:{color:"teal",flat:"",value:"recent"}},[n("span",[e._v("Recent")]),e._v(" "),n("v-icon",[e._v("history")])],1),e._v(" "),n("v-btn",{attrs:{color:"teal",flat:"",value:"favorites"}},[n("span",[e._v("Favorites")]),e._v(" "),n("v-icon",[e._v("favorite")])],1),e._v(" "),n("v-btn",{attrs:{color:"teal",flat:"",value:"nearby"}},[n("span",[e._v("Nearby")]),e._v(" "),n("v-icon",[e._v("place")])],1)],1)},[],!1,null,null,"1faeadc5").exports,Y={name:"AppHeader"},ee={components:{AppHeader:Object(K.a)(Y,function(){var e=this.$createElement,t=this._self._c||e;return t("v-toolbar",{attrs:{color:"primary"}},[t("v-toolbar-title",[this._v("xxx")])],1)},[],!1,null,null,"40e111b7").exports,AppFooter:z},data:()=>({}),mounted(){},computed:{...Object(W.mapState)(["page"]),...Object(W.mapGetters)(["isLoaded"])}};const te={_default:Object(K.a)(ee,function(){var e=this.$createElement,t=this._self._c||e;return t("v-app",[t("v-content",[t("nuxt")],1)],1)},[],!1,function(e){var t=n(18);t.__inject__&&t.__inject__(e)},"b0f301a2","0b7d1cf2").exports};var ne={head:{script:[{src:"https://code.createjs.com/1.0.0/createjs.min.js"},{src:"https://code.createjs.com/1.0.0/preloadjs.min.js"}],htmlAttrs:{prefix:"og: http://ogp.me/ns#"},titleTemplate:"%s | サイトネーム",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",type:"text/css",href:"//fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"}],style:[]},render(e,t){const n=e("NuxtLoading",{ref:"loading"}),o=e(this.layout||"nuxt"),r=e("div",{domProps:{id:"__layout"},key:this.layoutName},[o]),c=e("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter(e){window.$nuxt.$nextTick(()=>{window.$nuxt.$emit("triggerScroll")})}}},[r]);return e("div",{domProps:{id:"__nuxt"}},[n,c])},data:()=>({isOnline:!0,layout:null,layoutName:""}),beforeCreate(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created(){c.a.prototype.$nuxt=this,this.error=this.nuxt.error},mounted(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline(){return!this.isOnline}},methods:{refreshOnlineStatus(){0},errorChanged(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout(e){return e&&te["_"+e]||(e="default"),this.layoutName=e,this.layout=te["_"+e],this.layout},loadLayout:e=>(e&&te["_"+e]||(e="default"),Promise.resolve(te["_"+e]))},components:{NuxtLoading:V}};c.a.use(X.a);const oe=console;let re={};(re=function(e,t){if((e=e.default||e).commit)throw new Error(`[nuxt] ${t} should export a method that returns a Vuex instance.`);return"function"!=typeof e&&(e=Object.assign({},e)),se(e,t)}(n(19),"store/index.js")).modules=re.modules||{};const ae=re instanceof Function?re:()=>new X.a.Store(Object.assign({strict:!1},re));function se(e,t){if(e.state&&"function"!=typeof e.state){oe.warn(`'state' should be a method that returns an object in ${t}`);const n=Object.assign({},e.state);e=Object.assign({},e,{state:()=>n})}return e}var ie=n(12),ce=n.n(ie);c.a.use(ce.a,{options:{customProperties:!0},theme:{backgroud:"#fafafa",primary:"#03dcf3",secondary:"#ff4c6c",accent:"#479ac8",info:"#4B9CC9",txtPrimary:"#3A6A75",txtSecondary:"#95989A"}});var ue=n(3),le=n.n(ue);n(22),n(23);le.a.apps.length||le.a.initializeApp({apiKey:"AIzaSyCZcleLFLX7m1bZw2UmQ0kjJpkUI3j8dQo",authDomain:"vue-labs.firebaseapp.com",databaseURL:"https://vue-labs.firebaseio.com",projectId:"vue-labs",storageBucket:"vue-labs.appspot.com",messagingSenderId:"535096312104"});const de=le.a;var pe=({app:e},t)=>{t("usersRef",de.firestore().collection("users")),t("provider",new le.a.auth.GoogleAuthProvider),t("firebaseApp",le.a),t("firebaseStore",()=>de.firestore()),t("firebaseAuth",()=>de.auth()),t("firebaseAuthCheck",()=>new Promise((e,t)=>{de.auth().onAuthStateChanged(t=>{e(t||!1)})}))};n(24);c.a.component(I.name,I),c.a.component(H.name,H),c.a.component("NChild",H),c.a.component(Q.name,Q),c.a.use(j.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});const he={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};async function fe(e){const t=await new D.a({mode:"history",base:decodeURI("/"),linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:P,routes:[{path:"/signin",component:N,name:"signin"},{path:"/",component:O,name:"index"}],fallback:!1}),n=ae(e);n.$router=t;const o=n.registerModule;n.registerModule=((path,e,t)=>o.call(n,path,e,Object.assign({preserveState:!1},t)));const r={router:t,store:n,nuxt:{defaultTransition:he,transitions:[he],setTransitions(e){return Array.isArray(e)||(e=[e]),e=e.map(e=>e=e?"string"==typeof e?Object.assign({},he,{name:e}):Object.assign({},he,e):he),this.$options.nuxt.transitions=e,e},err:null,dateErr:null,error(t){t=t||null,r.context._errored=!!t,t=t?function(e){let t;if(e.message||"string"==typeof e)t=e.message||e;else try{t=JSON.stringify(e,null,2)}catch(n){t=`[${e.constructor.name}]`}return{...e,message:t,statusCode:e.statusCode||e.status||e.response&&e.response.status||500}}(t):null;const n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}},...ne};n.app=r;const l=e?e.next:e=>r.router.push(e);let d;if(e)d=t.resolve(e.url).route;else{const path=function(base,e){let path=decodeURI(window.location.pathname);return"hash"===e?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),(path||"/")+window.location.search+window.location.hash)}(t.options.base);d=t.resolve(path).route}await E(r,{route:d,next:l,error:r.nuxt.error.bind(r),store:n,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0,ssrContext:e});const h=function(e,t){if(!e)throw new Error("inject(key, value) has no key provided");if(void 0===t)throw new Error("inject(key, value) has no value provided");r[e="$"+e]=t,n[e]=r[e];const o="__nuxt_"+e+"_installed__";c.a[o]||(c.a[o]=!0,c.a.use(()=>{c.a.prototype.hasOwnProperty(e)||Object.defineProperty(c.a.prototype,e,{get(){return this.$root.$options[e]}})}))};return"function"==typeof pe&&await pe(r.context,h),e&&e.url&&await new Promise((n,o)=>{t.push(e.url,n,()=>{const o=t.afterEach(async(t,c,l)=>{e.url=t.fullPath,r.context.route=await _(t),r.context.params=t.params||{},r.context.query=t.query||{},o(),n()})})}),{app:r,store:n,router:t}}var me={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}}};c.a.component(me.name,me),c.a.component("NLink",me),global.fetch||(global.fetch=d.a);const xe=n(25)("nuxt:render");xe.color=4;const ye=()=>new c.a({render:e=>e("div")}),ve=e=>t=>{if(e.redirected=t,!e.res)return void(e.nuxt.serverRendered=!1);t.query=Object(o.stringify)(t.query),t.path=t.path+(t.query?"?"+t.query:"");t.path.startsWith("http"),t.path!==e.url?(e.res.writeHead(t.status,{Location:t.path}),e.res.end()):e.redirected=!1};t.default=(async e=>{e.redirected=!1,e.next=ve(e),e.beforeRenderFns=[],e.nuxt={layout:"default",data:[],error:null,state:null,serverRendered:!0};const{app:t,router:n,store:o}=await fe(e),r=new c.a(t);e.meta=r.$meta(),e.asyncData={};const l=async()=>{await Promise.all(e.beforeRenderFns.map(t=>k(t,{Components:m,nuxtState:e.nuxt}))),e.nuxt.state=o.state},d=async()=>{const n="function"==typeof B.layout?B.layout(t.context):B.layout;return e.nuxt.layout=n||"default",await r.loadLayout(n),r.setLayout(n),await l(),r},h=()=>(t.context.error({statusCode:404,path:e.url,message:"This page could not be found"}),d()),m=y(n.match(e.url));if(o._actions&&o._actions.nuxtServerInit)try{await o.dispatch("nuxtServerInit",t.context)}catch(e){throw xe("error occurred when calling nuxtServerInit: ",e.message),e}if(e.redirected)return ye();if(e.nuxt.error)return d();let v=["authenticated"];if(v=v.map(e=>"function"==typeof e?e:("function"!=typeof f[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),f[e])),await C(v,t.context),e.redirected)return ye();if(e.nuxt.error)return d();let _=m.length?m[0].options.layout:B.layout;if("function"==typeof _&&(_=_(t.context)),await r.loadLayout(_),e.nuxt.error)return d();if(_=r.setLayout(_),e.nuxt.layout=r.layoutName,v=[],(_=x(_)).options.middleware&&(v=v.concat(_.options.middleware)),m.forEach(e=>{e.options.middleware&&(v=v.concat(e.options.middleware))}),v=v.map(e=>"function"==typeof e?e:("function"!=typeof f[e]&&t.context.error({statusCode:500,message:"Unknown middleware "+e}),f[e])),await C(v,t.context),e.redirected)return ye();if(e.nuxt.error)return d();let E=!0;try{for(const e of m)if("function"==typeof e.options.validate&&!(E=await e.options.validate(t.context)))break}catch(e){return t.context.error({statusCode:e.statusCode||"500",message:e.message}),d()}if(!E)return e._generate&&(e.nuxt.serverRendered=!1),h();if(!m.length)return h();const S=await Promise.all(m.map(n=>{const o=[];if(n.options.asyncData&&"function"==typeof n.options.asyncData){const r=k(n.options.asyncData,t.context);r.then(t=>(e.asyncData[n.cid]=t,function(e,t){if(!t&&e.options.__hasNuxtData)return;const n=e.options._originDataFn||e.options.data||function(){return{}};e.options._originDataFn=n,e.options.data=function(){const data=n.call(this);return this.$ssrContext&&(t=this.$ssrContext.asyncData[e.cid]),{...data,...t}},e.options.__hasNuxtData=!0,e._Ctor&&e._Ctor.options&&(e._Ctor.options.data=e.options.data)}(n),t)),o.push(r)}else o.push(null);return n.options.fetch?o.push(n.options.fetch(t.context)):o.push(null),Promise.all(o)}));return e.nuxt.data=S.map(e=>e[0]||{}),e.redirected?ye():e.nuxt.error?d():(await l(),r)})},function(e,t){e.exports=require("stats-js/build/stats.js")}]);
//# sourceMappingURL=server.js.map