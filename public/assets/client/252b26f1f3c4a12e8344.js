(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{342:function(t,e,n){},355:function(t,e,n){"use strict";var r=n(342);n.n(r).a},377:function(t,e,n){"use strict";n.r(e);n(89);var r=n(32),o=n(23),c=n(29),d={components:{AppHeader:n(131).a},data:function(){return{title:"deleteAccount",isCredential:!1}},head:function(){return{title:this.title,meta:[{hid:"description",name:"description",content:"My custom description"},{hid:"og:title",name:"og:title",content:this.title+" | サイトネーム"},{hid:"og:description",name:"og:description",content:"My custom description"},{hid:"og:type",name:"og:type",content:"article"}]}},computed:Object(o.a)({},Object(c.b)(["isLoaded"])),methods:Object(o.a)({},Object(c.a)(["loadComplete","reSignIn"]),{deleteUser:function(){this.$store.dispatch("DELETE_USER",this.credential)}}),mounted:function(){var t=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$firebaseCredential();case 2:return this.credential=t.sent,console.log(this.credential),this.credential?(this.isCredential=!0,this.loadComplete()):this.loadComplete(),t.next=7,this.$firebaseAuthCheck();case 7:t.sent||this.$router.push("/signin");case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},l=(n(355),n(10)),component=Object(l.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"str-container delete"},[n("div",{staticClass:"str-header"},[n("app-header",{attrs:{isUser:!1,isActive:!1}})],1),t._v(" "),n("div",{staticClass:"str-content"},[n("main",{staticClass:"str-content-inr"},[n("div",{staticClass:"str-content-inr-center"},[t.isLoaded?t._e():n("v-progress-circular",{staticClass:"progress",attrs:{color:"primary",indeterminate:""}}),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCredential&&t.isLoaded,expression:"!isCredential && isLoaded"}]},[n("p",[t._v("アカウントを削除するには再度ログインが必要です")]),t._v(" "),n("div",{staticClass:"btn-signin"},[n("button",{staticClass:"btn-signin-google",attrs:{type:"button"},on:{click:t.reSignIn}},[t._v("Google SignIn\n        ")])]),t._v(" "),n("v-btn",{attrs:{flat:"",color:"accent"},on:{click:function(e){return t.$router.push("/")}}},[t._v("CANCEL")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isCredential&&t.isLoaded,expression:"isCredential && isLoaded"}]},[n("p",[t._v("アカウントを削除してよろしいですか？")]),t._v(" "),n("v-btn",{attrs:{round:"",outline:"",color:"accent"},on:{click:function(e){return t.$router.push("/")}}},[t._v("CANCEL")]),t._v(" "),n("v-btn",{attrs:{round:"",color:"secondary"},on:{click:t.deleteUser}},[t._v("OK")])],1)],1)])])])},[],!1,null,null,null);e.default=component.exports}}]);