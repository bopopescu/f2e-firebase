(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);d&&d(t);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"31e4430d"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"0e132858"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/f2e-cloud-storage/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"nav"},[n("router-link",{attrs:{to:"/"}},[e._v("User")]),n("router-link",{attrs:{to:"/storage"}},[e._v("Storage")]),e.currentUser?n("div",{staticClass:"userStatus"},[e._v(e._s(e.currentUser.email))]):e._e()],1),n("router-view")],1)},a=[],c=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),i=n("2f62");function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var l={computed:u({},Object(i["b"])(["currentUser"]))},f=l,d=(n("5c0b"),n("2877")),p=Object(d["a"])(f,o,a,!1,null,null,null),g=p.exports,m=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("form",[n("label",[e._v("email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),n("label",[e._v("password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("div",{staticClass:"btns"},[n("button",{on:{click:e.createAccount}},[e._v("Sign up")]),n("button",{on:{click:e.logIn}},[e._v("Log in")]),n("button",{on:{click:e.signOut}},[e._v("Sign out")])]),e.loginMsg?n("div",{staticClass:"loginMsg",class:e.loginMsg.type},[e._v(e._s(e.loginMsg.msg))]):e._e()])])},b=[];function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(n,!0).forEach(function(t){Object(c["a"])(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var y={computed:O({},Object(i["b"])(["currentUser","loginMsg"])),data:function(){return{email:null,password:null}},methods:{createAccount:function(){this.$store.dispatch("createAccount",{email:this.email,password:this.password})},logIn:function(){this.$store.dispatch("logIn",{email:this.email,password:this.password})},signOut:function(){this.$store.dispatch("signOut")}}},_=y,E=(n("d068"),Object(d["a"])(_,h,b,!1,null,"189ee067",null)),w=E.exports,S=n("59ca"),F=(n("ea7b"),n("588e"),{apiKey:"AIzaSyDI1CyrQ0D7T_aXa6_6XIFb3ZdRTayFkQo",authDomain:"f2e-cloudstorage.firebaseapp.com",databaseURL:"https://f2e-cloudstorage.firebaseio.com",projectId:"f2e-cloudstorage",storageBucket:"f2e-cloudstorage.appspot.com",messagingSenderId:"258241236649",appId:"1:258241236649:web:de658e2fa16b16e79ea3b8"});S["initializeApp"](F);var N=S;r["a"].use(m["a"]);var T=new m["a"]({routes:[{path:"/",name:"Login",component:w},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/storage",name:"storage",meta:{requiresAuth:!0},component:function(){return n.e("about").then(n.bind(null,"1038"))}}]});T.beforeEach(function(e,t,n){var r=e.matched.some(function(e){return e.meta.requiresAuth}),o=N.auth().currentUser;r&&!o?n("/"):n()});var P=T;n("7f7f");r["a"].use(i["a"]),N.auth().onAuthStateChanged(function(e){j.commit("SET_CURRENT_USER",e)});var j=new i["a"].Store({state:{currentUser:null,loginMsg:null,currentFolder:[],contentWithinFolder:null,selectedNode:null},getters:{currentFolderRef:function(e){if(!e.currentUser)return null;var t="users/".concat(e.currentUser.uid),n=N.storage().ref(t);if(!e.currentFolder.length)return n;var r=e.currentFolder.join("/"),o=n.child(r);return o}},mutations:{SET_CURRENT_USER:function(e,t){e.currentUser=t},SET_CONTENT_WITHIN_FOLDER:function(e,t){e.contentWithinFolder=t},CLEAR_CONTENT_WITHIN_FOLDER:function(e,t){e.contentWithinFolder=null},PUSH_FOLDER:function(e,t){e.currentFolder.push(t)},POP_FOLDER:function(e,t){e.currentFolder.splice(t+1)},SET_LOGIN_MSG:function(e,t){var n=t.msg,r=t.type;e.loginMsg={msg:n,type:r}},SET_NODE_INFO:function(e,t){e.selectedNode=t},CLEAR_NODE_INFO:function(e){e.selectedNode=null}},actions:{popFolder:function(e,t){e.commit("POP_FOLDER",t)},pushFolder:function(e,t){e.commit("PUSH_FOLDER",t.name)},getContentWithinFolder:function(e){e.getters.currentFolderRef.listAll().then(function(t){e.commit("SET_CONTENT_WITHIN_FOLDER",t),t.items.forEach(function(e){N.storage().ref(e.fullPath).getDownloadURL().then(function(t){var n=new XMLHttpRequest;n.responseType="blob",n.onload=function(t){var o=n.response,a=window.URL.createObjectURL(o);r["a"].set(e,"downloadLink",a)},n.open("GET",t),n.send()})})}).catch(function(e){console.log(e)}).then(function(){e.commit("CLEAR_NODE_INFO")})},createAccount:function(e,t){var n=t.email,r=t.password;N.auth().createUserWithEmailAndPassword(n,r).then(function(t){e.commit("SET_LOGIN_MSG",{msg:"Account  has been successfully created!",type:"success"})}).catch(function(t){e.commit("SET_LOGIN_MSG",{msg:t.message,type:"error"})})},logIn:function(e,t){var n=t.email,r=t.password;N.auth().signInWithEmailAndPassword(n,r).then(function(t){e.commit("SET_LOGIN_MSG",{msg:"Successfully sign in!",type:"success"})}).catch(function(t){e.commit("SET_LOGIN_MSG",{msg:t.message,type:"error"})})},signOut:function(e){N.auth().signOut().then(function(t){e.commit("SET_LOGIN_MSG",{msg:"Successfully sign out.",type:"success"})}).catch(function(t){e.commit("SET_LOGIN_MSG",{msg:t.message,type:"error"})})},uploadFile:function(e,t){var n=e.getters.currentFolderRef,r=n.child("/".concat(t.name)),o=r.put(t);o.on("state_changed",function(e){var t=e.bytesTransferred/e.totalBytes*100;switch(console.log(t),e.state){case"paused":console.log("uploiad paused");break;case"running":console.log("upload is running");break}},function(e){switch(e.code){case"storage/unauthorized":console.log(e.code);break;case"storage/canceled":console.log(e.code);break;case"storage/unknown":console.log(e.code);break}},function(){j.dispatch("getContentWithinFolder")})},deleteItem:function(e,t){var n=N.storage().ref(t.location.path_);n.delete().then(function(){console.log("file deleted"),j.dispatch("getContentWithinFolder")}).catch(function(e){console.log(e)})},createFolder:function(e,t){var n=e.getters.currentFolderRef.child("".concat(t,"/folderInitDoc.txt"));n.putString("init new folder").then(function(e){console.log(e),j.dispatch("getContentWithinFolder")}).catch(function(e){console.log(e)})},deleteFolder:function(e,t){t.listAll().then(function(t){t.items.forEach(function(t){e.dispatch("deleteItem",t)}),t.prefixes.forEach(function(t){e.dispatch("deleteFolder",t)})}).catch(function(e){console.log(e)})},selectNode:function(e,t){var n=t.node,r=t.type;if("file"===r){var o=N.storage().ref(n.fullPath);o.getMetadata().then(function(t){var o={node:n,type:r,metadata:t};e.commit("SET_NODE_INFO",o)})}else if("folder"===r){var a=N.storage().ref(n.fullPath);a.listAll().then(function(t){var o={node:n,type:r,subFolders:t.prefixes,subFiles:t.items};e.commit("SET_NODE_INFO",o)})}}}});j.watch(function(e){return e.currentFolder},function(){j.commit("CLEAR_CONTENT_WITHIN_FOLDER"),j.dispatch("getContentWithinFolder")});var I,L=j;r["a"].config.productionTip=!1,N.auth().onAuthStateChanged(function(e){I||(I=new r["a"]({el:"#app",router:P,store:L,render:function(e){return e(g)}}))})},"5c0b":function(e,t,n){"use strict";var r=n("e332"),o=n.n(r);o.a},d068:function(e,t,n){"use strict";var r=n("f98e"),o=n.n(r);o.a},e332:function(e,t,n){},f98e:function(e,t,n){}});
//# sourceMappingURL=app.1f52c0b8.js.map