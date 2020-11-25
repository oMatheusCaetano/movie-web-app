(function(e){function t(t){for(var r,n,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&d.push(s[n][0]),s[n]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);m&&m(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,n=1;n<a.length;n++){var o=a[n];0!==s[o]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var r={},n={app:0},s={app:0},i=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"435c28ab"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"f07582ad"}[e]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===s)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var r=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete n[e],m.parentNode.removeChild(m),a(i)},m.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){n[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,a){r=s[e]=[t,a]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(m);var a=s[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",d.name="ChunkLoadError",d.type=r,d.request=n,a[1](d)}s[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(a,r,function(t){return e[t]}.bind(null,r));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var m=u;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("85ec"),n=a.n(r);n.a},"17d9":function(e,t,a){"use strict";var r=a("2035"),n=a.n(r);n.a},"1c68":function(e,t,a){},2035:function(e,t,a){},2483:function(e,t,a){},"2cfe":function(e,t,a){"use strict";var r=a("ac0e"),n=a.n(r);n.a},"30ed":function(e,t,a){"use strict";var r=a("920f"),n=a.n(r);n.a},3436:function(e,t,a){"use strict";var r=a("aca0"),n=a.n(r);n.a},4517:function(e,t,a){"use strict";var r=a("79c4"),n=a.n(r);n.a},4628:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.uncredited()?a("div",[a("router-link",{staticClass:" text-decoration-none font-weight-bold text-dark",attrs:{to:{name:"AboutPerson",params:{person_id:this.person.id}}}},[a("img",{staticClass:"personImage mb-2 rounded shadow",attrs:{alt:"picture",src:this.person.profile_path?"https://image.tmdb.org/t/p/w200/"+this.person.profile_path:"https://via.placeholder.com/200x300"}}),a("div",[a("span",{staticClass:"personName text-default-dark"},[e._v(e._s(this.person.name))])])]),a("p",{staticClass:"personJob"},[e._v(e._s(e.characterOrJob()))])],1):e._e()},n=[],s=(a("c975"),{props:{person:{type:Object,required:!0},noUncredited:{type:Boolean,required:!1}},methods:{uncredited:function(){return!this.person.character||!this.noUncredited||-1===this.person.character.indexOf("(uncredited)")},characterOrJob:function(){return this.person.character?this.person.character:this.person.job}}}),i=s,o=(a("e31c"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,"d3e10236",null);t["a"]=c.exports},4678:function(e,t,a){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}n.keys=function(){return Object.keys(r)},n.resolve=s,e.exports=n,n.id="4678"},"4eba":function(e,t,a){"use strict";var r=a("e8b5"),n=a.n(r);n.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("ma-pre-loader"),a("ma-navbar"),a("transition",{attrs:{name:"fader"}},[a("router-view",{key:e.$route.path})],1),a("vue-progress-bar"),a("ma-footer",{staticClass:"mt-5"}),a("ma-trailer-frame"),a("ma-image-modal")],1)},s=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade"}},[e.show?a("div",{staticClass:"preloader position-absolute d-flex flex-column justify-content-center\n    align-items-center h-100 w-100 bg-gradient"},[a("div",{staticClass:"preloader_loader d-flex justify-content-center align-items-center"},[a("div",{staticClass:"preloader_loader_inner"})]),a("h3",{staticClass:"font-weight-bold p-2 pl-4"},[e._v("Loading...")])]):e._e()])},o=[],c={data:function(){return{show:!0}},created:function(){var e=this;this.disableScroll(),setTimeout((function(){e.show=!1,e.enableScroll()}),1e3)},methods:{disableScroll:function(){window.$("html, body").css({height:"".concat(window.$(window).height(),"px"),width:"".concat(window.$(window).width(),"px"),overflow:"hidden"})},enableScroll:function(){window.$("html, body").css({overflow:"auto"})}}},l=c,u=(a("4eba"),a("2877")),d=Object(u["a"])(l,i,o,!1,null,"15a57364",null),m=d.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark-blue",attrs:{id:"pageNavbar"}},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[e._v(" MovieWebApp ")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse justify-content-between",attrs:{id:"navbarNav"}},[a("ul",{staticClass:"navbar-nav"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[e._v(" Home ")])],1),a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"People"}}},[e._v(" People ")])],1)]),a("ma-instant-search")],1)],1)},f=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"position-relative col-lg-5 col-xl-4"},[a("form",{staticClass:"form-inline my-2 my-lg-0 col-12"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"form-control mr-sm-2 col-12",attrs:{type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:e.searchValue},on:{focusout:function(t){return e.loseFocus()},keypress:[function(t){return e.search()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.search()}],input:function(t){t.target.composing||(e.searchValue=t.target.value)}}})]),a("ma-instant-search-list")],1)},v=[],g=a("5530"),b=a("2f62"),j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return this.searchValue.length>2?a("div",{staticClass:"searchResults position-absolute bg-light w-100 bg-gradient rounded savengerhadow"},[this.instantSearchResult.length>0?a("div",[e._l(this.instantSearchResult,(function(t,r){return a("div",{key:r},[r<=6?a("ma-instant-search-item",{attrs:{item:t}}):e._e()],1)})),a("div",{staticClass:"searchResults_item px-2 py-2 text-center shadow",on:{click:function(t){return e.makeRequest()}}},[a("router-link",{staticClass:"text-truncate text-dark text-decoration-none",attrs:{to:"#"}},[e._v(" See all results for '"+e._s(this.searchValue)+"' ")])],1)],2):a("div",{staticClass:"text-truncate px-2 py-3"},[e._v(" No results for '"+e._s(this.searchValue)+"' ")])]):e._e()},w=[],_=(a("b0c0"),a("ac1f"),a("5319"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",["person"!==e.itemType()?a("div",[a("router-link",{staticClass:"item d-flex align-items-center pl-1 pr-2 py-2 text-decoration-none\n        text-dark border-bottom w-100 h-100",attrs:{to:{name:"AboutMedia",params:{media_type:e.itemType(),media_id:this.item.id}}}},[a("div",{staticClass:"item_imageBox mr-3"},[a("ma-image",{attrs:{image:{file_path:e.profileOrPoster()},size:92}})],1),e._v(" "+e._s(e.titleOrName())+" ")])],1):a("div",[a("router-link",{staticClass:"item d-flex align-items-center pl-1 pr-2 py-2 text-decoration-none\n        text-dark border-bottom w-100 h-100",attrs:{to:{name:"AboutPerson",params:{person_id:this.item.id}}}},[a("div",{staticClass:"item_imageBox mr-3"},[a("ma-image",{attrs:{image:{file_path:e.profileOrPoster()},size:92}})],1),e._v(" "+e._s(e.titleOrName())+" ")])],1)])}),x=[],C=a("a751"),y={components:{MaImage:C["a"]},props:{item:{type:Object,required:!0}},methods:{itemType:function(){return this.item.title?"movies":this.item.poster_path?"tv":"person"},titleOrName:function(){return this.item.title?this.item.title:this.item.name},profileOrPoster:function(){return this.item.poster_path?this.item.poster_path:this.item.profile_path}}},k=y,S=(a("3436"),Object(u["a"])(k,_,x,!1,null,"7c1f64ae",null)),O=S.exports,M={components:{MaInstantSearchItem:O},computed:Object(g["a"])({},Object(b["c"])({searchValue:"instantSearchValue",instantSearchResult:"instantSearchResult"})),methods:{makeRequest:function(){"SearchResult"!==this.$route.name?(this.$store.commit("setSearchValue",this.searchValue),this.$router.replace("SearchResult")):(this.$store.dispatch("media/searchMovies",this.searchValue),this.$store.dispatch("media/searchTv",this.searchValue),this.$store.dispatch("people/search",this.searchValue))}}},T=M,R=(a("30ed"),Object(u["a"])(T,j,w,!1,null,"25d22fac",null)),$=R.exports,V={components:{MaInstantSearchList:$},computed:{searchValue:{get:function(){return this.$store.state.instantSearchValue},set:function(e){this.$store.commit("setInstantSearchValue",e)}}},methods:Object(g["a"])(Object(g["a"])({},Object(b["b"])(["search"])),{},{loseFocus:function(){var e=this;setTimeout((function(){e.$store.commit("resetInstantSearchValue")}),100)}})},P=V,z=Object(u["a"])(P,h,v,!1,null,null,null),E=z.exports,N={components:{MaInstantSearch:E}},I=N,q=(a("c786"),Object(u["a"])(I,p,f,!1,null,"6f228b9c",null)),A=q.exports,B=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},D=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer bg-dark-blue text-white d-flex flex-column justify-content-center\n  align-items-center"},[r("h5",{staticClass:"font-weight-bold py-5 d-flex flex-column"},[r("a",{staticClass:"text-decoration-none text-light py-2",attrs:{href:"https://github.com/CaetanoMatheus/movie-web-app",target:"_blank"}},[e._v(" View Front-End Source Code ")]),r("a",{staticClass:"text-decoration-none text-light",attrs:{href:"https://github.com/CaetanoMatheus/movie-api",target:"_blank"}},[e._v(" View Back-End Source Code ")])]),r("div",{},[r("span",[e._v("This Applications was made unsing")]),r("img",{attrs:{src:a("e0e6"),alt:"tmdb-image"}})]),r("span",{staticClass:"mx-auto pt-2"},[e._v("API")])])}],L={},F=L,W=(a("a6e6"),Object(u["a"])(F,B,D,!1,null,"4b2ca12a",null)),Y=W.exports,U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog",id:"trailerModal","aria-hidden":"true"},on:{click:function(t){return e.close()}}},[a("div",{staticClass:"modal-dialog modal-xl"},[a("div",{staticClass:"modal-content"},[e.video?a("iframe",{staticClass:"h-100",attrs:{id:"teste",allowfullscreen:"",frameborder:"0",src:"https://www.youtube.com/embed/"+e.video.key}}):e._e(),a("button",{staticClass:"btn bg-gradient text-white text-uppercase font-weight-bold",on:{click:function(t){return e.close()}}},[e._v(" Close ")])])])])},H=[],J={methods:{close:function(){window.$("#trailerModal").modal("hide");var e=window.$("iframe").attr("src");window.$("iframe").attr("src",e)}},computed:Object(g["a"])({},Object(b["c"])({video:"video"}))},Q=J,G=(a("f191"),Object(u["a"])(Q,U,H,!1,null,"30a67b66",null)),K=G.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return this.image.file_path?a("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{tabindex:"-1",role:"dialog",id:"imageModal","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-xl"},[a("div",{staticClass:"modal-content"},[a("img",{staticClass:"img-fluid",attrs:{src:"https://image.tmdb.org/t/p/original/"+this.image.file_path,alt:"Content-image"}})])])]):e._e()},Z=[],ee={computed:Object(g["a"])({},Object(b["c"])({image:"image"}))},te=ee,ae=Object(u["a"])(te,X,Z,!1,null,null,null),re=ae.exports,ne={components:{MaPreLoader:m,MaNavbar:A,MaFooter:Y,MaTrailerFrame:K,MaImageModal:re}},se=ne,ie=(a("034f"),Object(u["a"])(se,n,s,!1,null,null,null)),oe=ie.exports,ce=a("8c4f"),le=(a("d3b7"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ma-carousel"),a("div",{staticClass:"px-3 pt-4 bg-light"},[a("div",{staticClass:"d-flex flex-wrap py-3 bg-light"},[a("ma-title",{staticClass:"mx-auto ml-md-2 mr-md-0 text-lg-left",attrs:{title:"What's Popular",icon:"heart",iconColor:"danger"}}),a("ma-category-switcher",{staticClass:"mx-auto ml-md-4 text-lg-left",attrs:{width:"20",preSelected:"Movies",data:[{name:"Movies"},{name:"On TV"}]}})],1),a("ma-scroller",{attrs:{media:e.popularMedia}})],1),a("ma-video-scroller",{staticClass:"py-5 rounded mx-1",attrs:{media:e.upcomingMedia}}),a("div",{staticClass:"px-3 pt-4 bg-light"},[a("div",{staticClass:"d-flex flex-wrap py-3 bg-light"},[a("ma-title",{staticClass:"mx-auto ml-md-2 mr-md-0 text-lg-left",attrs:{title:"Trending Movies",icon:"star",iconColor:"warning"}}),a("ma-category-switcher",{staticClass:"mx-auto ml-md-4 text-lg-left",attrs:{width:"20",preSelected:"Movies Today",data:[{name:"Movies Today"},{name:"Movies This Week"}]}})],1),a("ma-scroller",{attrs:{media:e.trendingMovies}})],1),a("div",{staticClass:"px-3 pt-4 bg-light"},[a("div",{staticClass:"d-flex flex-wrap py-3 bg-light"},[a("ma-title",{staticClass:"mx-auto ml-md-2 mr-md-0 text-lg-left",attrs:{title:"Trending On TV",icon:"star",iconColor:"warning"}}),a("ma-category-switcher",{staticClass:"mx-auto ml-md-4 text-lg-left",attrs:{width:"20",preSelected:"TV Today",data:[{name:"TV Today"},{name:"TV This Week"}]}})],1),a("ma-scroller",{attrs:{media:e.trendingTvShows}})],1)],1)}),ue=[],de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carousel slide position-relative",attrs:{"data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"searchBar position-absolute w-75"},[a("h2",{staticClass:"text-shadow text-white font-weight-bold h1"},[e._v("Welcome.")]),a("h3",{staticClass:"text-shadow text-white"},[e._v(" Millions of movies, TV shows and people to discover. Explore now. ")]),a("ma-search-bar",{staticClass:"shadow"})],1),e._l(e.images,(function(t,r){return a("div",{key:r,staticClass:"carousel-item",class:{active:0===r}},[t.backdrop_path?a("div",{staticClass:"d-flex flex-wrap align-items-center bg-dark"},[a("img",{staticClass:"img d-block mx-auto",attrs:{src:"https://image.tmdb.org/t/p/original/"+t.backdrop_path,alt:"media-image"}})]):e._e()])}))],2)])},me=[],pe=a("9e6a"),fe={components:{MaSearchBar:pe["a"]},computed:Object(g["a"])({},Object(b["c"])({images:"media/popular"}))},he=fe,ve=(a("c7d5"),Object(u["a"])(he,de,me,!1,null,"570badac",null)),ge=ve.exports,be=a("ddc7"),je=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("toggle-switch",{attrs:{options:e.options},on:{change:e.loadMedia}})},we=[],_e={props:["data","width","preSelected"],data:function(){return{options:{layout:{color:"#2c3e50",backgroundColor:"#ebe8e8",selectedColor:"white",selectedBackgroundColor:"#003750",fontWeightSelected:"bold",noBorder:!0},size:{fontSize:1,height:2,width:30,padding:0},items:{delay:.5,preSelected:"Movies",disabled:!1,labels:[]}}}},methods:{loadMedia:function(e){var t=e.value;switch(t){case"On TV":this.$store.dispatch("media/popular","tv");break;case"Movies Today":this.$store.dispatch("media/trendingMovies","day");break;case"Movies This Week":this.$store.dispatch("media/trendingMovies","week");break;case"TV Today":this.$store.dispatch("media/trendingTv","day");break;case"TV This Week":this.$store.dispatch("media/trendingTv","week");break;default:this.$store.dispatch("media/popular","movies")}}},created:function(){this.options.items.preSelected=this.preSelected,this.options.items.labels=this.data,this.options.size.width=this.width}},xe=_e,Ce=Object(u["a"])(xe,je,we,!1,null,null,null),ye=Ce.exports,ke=a("75c4"),Se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pt-3 bg-gradient"},[a("h2",{staticClass:"h3 text-white ml-5"},[e._v("Today")]),a("div",{staticClass:"scroller_items overflow-auto d-flex align-items-center"},e._l(e.media,(function(e){return a("ma-trailer-card",{key:e.id,attrs:{media:e}})})),1)])},Oe=[],Me=a("925a"),Te={components:{MaTrailerCard:Me["a"]},props:{media:{type:Array,required:!0}}},Re=Te,$e=(a("cbbe"),Object(u["a"])(Re,Se,Oe,!1,null,"113d297e",null)),Ve=$e.exports,Pe={components:{MaCarousel:ge,MaTitle:be["a"],MaCategorySwitcher:ye,MaScroller:ke["a"],MaVideoScroller:Ve},computed:Object(g["a"])({},Object(b["c"])({popularMedia:"media/popular",upcomingMedia:"media/upcoming",trendingMovies:"media/trendingMovies",trendingTvShows:"media/trendingTvShows"})),created:function(){this.$store.dispatch("media/popular","movies"),this.$store.dispatch("media/upcoming"),this.$store.dispatch("media/trendingMovies","day"),this.$store.dispatch("media/trendingTv","day")}},ze=Pe,Ee=Object(u["a"])(ze,le,ue,!1,null,null,null),Ne=Ee.exports,Ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("ma-title",{staticClass:"pl-3 pt-4 pb-3 text-center text-md-left",attrs:{title:"Who's Popular",icon:"heart",iconColor:"danger"}}),a("div",{staticClass:"d-flex flex-wrap"},e._l(e.popularPeople.results,(function(e,t){return a("ma-person-card",{key:t,staticClass:"col-6 col-md-3 col-lg-2 text-center",attrs:{person:e}})})),1),a("ma-pagination")],1)},qe=[],Ae=a("4628"),Be=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"pagination justify-content-around"},[a("li",{staticClass:"page-item",class:{disabled:e.nextPageIndex<=2}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return e.previousPage()}}},[e._v("Previous")])]),a("li",{staticClass:"page-item",class:{disabled:e.nextPageIndex>500}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(t){return e.nextPage()}}},[e._v("Next")])])])},De=[],Le={data:function(){return{nextPageIndex:2}},methods:{previousPage:function(){this.$store.dispatch("people/popular",--this.nextPageIndex-1)},nextPage:function(){this.$store.dispatch("people/popular",this.nextPageIndex++)}}},Fe=Le,We=Object(u["a"])(Fe,Be,De,!1,null,null,null),Ye=We.exports,Ue={components:{MaTitle:be["a"],MaPersonCard:Ae["a"],MaPagination:Ye},computed:Object(g["a"])({},Object(b["c"])({popularPeople:"people/popular"})),created:function(){this.$store.dispatch("people/popular")}},He=Ue,Je=Object(u["a"])(He,Ie,qe,!1,null,null,null),Qe=Je.exports,Ge=[{path:"/",name:"Home",component:Ne},{path:"/people",name:"People",component:Qe},{path:"/people/:person_id",name:"AboutPerson",component:function(){return a.e("about").then(a.bind(null,"acfa"))}},{path:"/about-media/:media_type/:media_id",name:"AboutMedia",component:function(){return a.e("about").then(a.bind(null,"045d"))}},{path:"/about-media/people",name:"PeopleFromMedia",component:function(){return a.e("about").then(a.bind(null,"c3f6"))}},{path:"/searchResult",name:"SearchResult",component:function(){return a.e("about").then(a.bind(null,"9820"))}}];r["default"].use(ce["a"]);var Ke=new ce["a"]({routes:Ge,mode:"history"}),Xe={setVideo:function(e,t){e.video=t},setImage:function(e,t){e.image=t},setSearchValue:function(e,t){e.searchValue=t},resetSearchValue:function(e){e.searchValue=""},setInstantSearchValue:function(e,t){e.instantSearchValue=t},resetInstantSearchValue:function(e){e.instantSearchValue=""},setInstantSearchResult:function(e,t){e.instantSearchResult=t}},Ze=(a("96cf"),a("1da1")),et=a("bc3a"),tt=a.n(et),at=tt.a.create({baseURL:"https://caetano-movie-api.herokuapp.com/"}),rt={search:function(e){return Object(Ze["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e.commit,r=e.getters,!(r.instantSearchValue.length>=2)){t.next=7;break}return t.next=4,at.get("search/multi/".concat(r.instantSearchValue));case 4:n=t.sent,s=n.data,a("setInstantSearchResult",s);case 7:case"end":return t.stop()}}),t)})))()},video:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.commit,a.next=3,at.get("movies/".concat(t,"/videos"));case 3:n=a.sent,s=n.data,r("setVideo",s[0]);case 6:case"end":return a.stop()}}),a)})))()}},nt={video:function(e){var t=e.video;return t},image:function(e){var t=e.image;return t},searchValue:function(e){var t=e.searchValue;return t},instantSearchValue:function(e){var t=e.instantSearchValue;return t},instantSearchResult:function(e){var t=e.instantSearchResult;return t}},st={setCurrent:function(e,t){e.current=t},clearCurrent:function(e){e.current=[]},setPopular:function(e,t){e.popular=t},setSearchMoviesResult:function(e,t){e.searchMoviesResult=t},setSearchTvResult:function(e,t){e.searchTvResult=t},setUpcoming:function(e,t){e.upcoming=t},setTrendingMovies:function(e,t){e.trendingMovies=t},setTrendingTvShows:function(e,t){e.trendingTvShows=t}},it=(a("99af"),{searchMovies:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.rootState,n=e.commit,a.next=3,at.get("search/movies/".concat(t||r.searchValue));case 3:s=a.sent,i=s.data,n("setSearchMoviesResult",i);case 6:case"end":return a.stop()}}),a)})))()},searchTv:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.rootState,n=e.commit,a.next=3,at.get("search/tv/".concat(t||r.searchValue));case 3:s=a.sent,i=s.data,n("setSearchTvResult",i);case 6:case"end":return a.stop()}}),a)})))()},show:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,at.get("".concat(t.media_type,"/about/").concat(t.media_id));case 2:r=a.sent,n=r.data,e.commit("setCurrent",n);case 5:case"end":return a.stop()}}),a)})))()},popular:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,at.get("".concat(t,"/popular"));case 2:r=a.sent,n=r.data,e.commit("setPopular",n);case 5:case"end":return a.stop()}}),a)})))()},upcoming:function(e){return Object(Ze["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,at.get("movies/upcoming");case 2:a=t.sent,r=a.data,e.commit("setUpcoming",r);case 5:case"end":return t.stop()}}),t)})))()},trendingMovies:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,at.get("movies/trending/".concat(t));case 2:r=a.sent,n=r.data,e.commit("setTrendingMovies",n);case 5:case"end":return a.stop()}}),a)})))()},trendingTv:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,at.get("tv/trending/".concat(t));case 2:r=a.sent,n=r.data,e.commit("setTrendingTvShows",n);case 5:case"end":return a.stop()}}),a)})))()}}),ot={searchMoviesResult:function(e){var t=e.searchMoviesResult;return t},searchTvResult:function(e){var t=e.searchTvResult;return t},current:function(e){var t=e.current;return t},popular:function(e){var t=e.popular;return t},upcoming:function(e){var t=e.upcoming;return t},trendingMovies:function(e){var t=e.trendingMovies;return t},trendingTvShows:function(e){var t=e.trendingTvShows;return t},titleOrName:function(e){var t=e.current;return t.title?t.title:t.name},date:function(e){var t=e.current;return t.release_date?t.release_date:t.first_air_date}},ct={namespaced:!0,state:{current:{},popular:[],upcoming:[],searchMoviesResult:[],searchTvResult:[],trendingMovies:[],trendingTvShows:[]},mutations:st,actions:it,getters:ot},lt=(a("4de4"),a("a9e3"),{setPopular:function(e,t){e.popular=t},setCurrent:function(e,t){e.current=t},setSearchResult:function(e,t){e.searchResult=t},sortCast:function(e){var t=e.current,a=t.credits.cast,r=a.filter((function(e){return""===e.release_date})),n=a.filter((function(e){return""!==e.release_date}));n.sort((function(e,t){return Number(new Date(e.release_date))-Number(new Date(t.release_date))})),t.credits.cast=r.concat(n)},sortCrew:function(e){var t=e.current,a=t.credits.crew,r=a.filter((function(e){return""===e.release_date})),n=a.filter((function(e){return""!==e.release_date}));n.sort((function(e,t){return Number(new Date(e.release_date))-Number(new Date(t.release_date))})),t.credits.crew=r.concat(n)}}),ut={search:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=e.rootState,n=e.commit,a.next=3,at.get("search/person/".concat(t||r.searchValue));case 3:s=a.sent,i=s.data,n("setSearchResult",i);case 6:case"end":return a.stop()}}),a)})))()},popular:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t>0?t:1,a.next=3,at.get("person/popular?page=".concat(r));case 3:n=a.sent,s=n.data,e.commit("setPopular",s);case 6:case"end":return a.stop()}}),a)})))()},show:function(e,t){return Object(Ze["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,at.get("person/".concat(t));case 2:r=a.sent,n=r.data,e.commit("setCurrent",n),e.commit("sortCast"),e.commit("sortCrew");case 7:case"end":return a.stop()}}),a)})))()}},dt={current:function(e){var t=e.current;return t},popular:function(e){var t=e.popular;return t},searchResult:function(e){var t=e.searchResult;return t}},mt={namespaced:!0,state:{current:{},popular:[],searchResult:[]},mutations:lt,actions:ut,getters:dt};r["default"].use(b["a"]);var pt=new b["a"].Store({modules:{media:ct,people:mt},state:{video:{},image:{},searchValue:"",instantSearchValue:"",instantSearchResult:[]},mutations:Xe,actions:rt,getters:nt}),ft=(a("4989"),a("6418"),a("77ed"),a("5bee"),a("25f0"),a("c1df")),ht=a.n(ft);r["default"].filter("formatGender",(function(e){return 1===e?"Female":"Male"})),r["default"].filter("formatDate",(function(e){return ht()(e).format("MMM Do YYYY")})),r["default"].filter("formatYear",(function(e){return ht()(e).format("YYYY")})),r["default"].filter("formatRate",(function(e){return e?(e=e.toString(),1===e.length?"".concat(e,".0"):e):"NA"}));var vt=a("26b9"),gt=a.n(vt);r["default"].use(gt.a,{color:"#00b4db",failedColor:"red",thickness:"3px",transition:{speed:"0.3s",opacity:"0.6s",termination:300},autoRevert:!0,location:"top",inverse:!1});var bt=a("ecee"),jt=a("c074"),wt=a("ad3d");r["default"].component("font-awesome-icon",wt["a"]),bt["c"].add(jt["g"],jt["e"],jt["c"],jt["h"],jt["a"],jt["b"],jt["f"],jt["d"]);var _t=a("5a58"),xt=a.n(_t);r["default"].use(xt.a),window.jQuery=a("1157"),window.$=window.jQuery,window.EventBus=new r["default"],r["default"].config.productionTip=!1,new r["default"]({router:Ke,store:pt,render:function(e){return e(oe)}}).$mount("#app")},"5a01":function(e,t,a){},6418:function(e,t,a){},"75c4":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex overflow-auto"},e._l(e.media,(function(e){return a("ma-media-card",{key:e.id,staticClass:"mx-1",attrs:{media:e}})})),1)},n=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return this.media.poster_path?a("div",{staticClass:"position-relative"},[a("div",{staticClass:"mediaRating position-absolute p-1 rounded-circle shadow-sm bg-gradient"},[a("div",{staticClass:"p-1 rounded-circle bg-light"},[e._v(" "+e._s(e._f("formatRate")(this.media.vote_average))+" ")])]),a("router-link",{staticClass:" text-decoration-none font-weight-bold text-dark",attrs:{to:{name:"AboutMedia",params:{media_type:e.movieOrTvShow(),media_id:this.media.id}}}},[a("img",{staticClass:"mediaImage mb-3 rounded shadow",attrs:{alt:"picture",src:"https://image.tmdb.org/t/p/w200/"+this.media.poster_path}}),a("div",[a("span",{staticClass:"text-default-dark"},[e._v(e._s(e.titleOrName()))])])]),a("p",{staticClass:"text-secondary"},[e._v(e._s(e._f("formatDate")(e.date())))])],1):e._e()},i=[],o=(a("b0c0"),{props:{media:{type:Object,required:!0}},methods:{movieOrTvShow:function(){return this.media.title?"movies":"tv"},titleOrName:function(){return this.media.title?this.media.title:this.media.name},date:function(){return this.media.release_date?this.media.release_date:this.media.first_air_date}}}),c=o,l=(a("17d9"),a("2877")),u=Object(l["a"])(c,s,i,!1,null,"73e3ae1c",null),d=u.exports,m={components:{MaMediaCard:d},props:{media:{type:Array,required:!0}}},p=m,f=Object(l["a"])(p,r,n,!1,null,null,null);t["a"]=f.exports},"79c4":function(e,t,a){},"85ec":function(e,t,a){},"8f02":function(e,t,a){},"920f":function(e,t,a){},"925a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"imageBackground position-relative",attrs:{"data-toggle":"modal","data-target":"#trailerModal"},on:{mouseenter:function(t){e.zoom=!0},mouseleave:function(t){e.zoom=!1},click:function(t){return e.getVideo()}}},[a("span",{staticClass:"imageBackground_icon position-absolute text-white",class:{zoom:e.zoom}},[a("font-awesome-icon",{attrs:{icon:"play"}})],1),e.fromVideo?a("img",{staticClass:"imageBackground_image rounded mx-2 shadow",class:{zoom:e.zoom},attrs:{alt:"movie-image",src:"https://img.youtube.com/vi/"+this.media.key+"/sddefault.jpg"}}):a("img",{staticClass:"rounded mx-2 shadow",class:{zoom:e.zoom},attrs:{alt:"movie-image",src:"https://image.tmdb.org/t/p/w400/"+this.media.backdrop_path}})]),a("div",{staticClass:"text-center text-white font-weight-bold mt-3"},[a("span",[e._v(e._s(e.media.title?e.media.title:e.media.name))])])])},n=[],s={props:{media:{type:Object,required:!0},fromVideo:{type:Boolean,required:!1}},data:function(){return{zoom:!1}},methods:{getVideo:function(){return this.fromVideo?this.$store.commit("setVideo",this.media):this.$store.dispatch("video",this.media.id)}}},i=s,o=(a("4517"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,"1c9d8787",null);t["a"]=c.exports},"9e6a":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{staticClass:"input-group mb-3",on:{submit:function(t){return t.preventDefault(),e.makeRequest()}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchValue,expression:"searchValue"}],staticClass:"form-control",attrs:{type:"search",placeholder:"Search here..."},domProps:{value:e.searchValue},on:{input:function(t){t.target.composing||(e.searchValue=t.target.value)}}}),e._m(0)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-info bg-gradient",attrs:{type:"submit"}},[e._v(" Search ")])])}],s=(a("b0c0"),a("ac1f"),a("5319"),{computed:{searchValue:{get:function(){return this.$store.state.searchValue},set:function(e){this.$store.commit("setSearchValue",e)}}},methods:{makeRequest:function(){"SearchResult"!==this.$route.name?this.$router.replace("SearchResult"):(this.$store.dispatch("media/searchMovies"),this.$store.dispatch("media/searchTv"),this.$store.dispatch("people/search"))}}}),i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=c.exports},a6e6:function(e,t,a){"use strict";var r=a("2483"),n=a.n(r);n.a},a751:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"image mb-3 rounded shadow mx-1",class:{"img-fluid":this.size<200},attrs:{alt:"content-image","data-toggle":"modal","data-target":"#imageModal",src:this.image.file_path||this.image.profile_path?"https://image.tmdb.org/t/p/w"+this.size+"/"+(this.image.file_path||this.image.profile_path):"https://via.placeholder.com/300x400"},on:{click:function(t){return e.showImage()}}})])},n=[],s=(a("a9e3"),{props:{image:{type:Object,required:!0},size:{type:Number,required:!0}},methods:{showImage:function(){this.$store.commit("setImage",this.image)}}}),i=s,o=(a("2cfe"),a("2877")),c=Object(o["a"])(i,r,n,!1,null,"bfb386a8",null);t["a"]=c.exports},ac0e:function(e,t,a){},aca0:function(e,t,a){},b273:function(e,t,a){},c786:function(e,t,a){"use strict";var r=a("c930"),n=a.n(r);n.a},c7d5:function(e,t,a){"use strict";var r=a("8f02"),n=a.n(r);n.a},c930:function(e,t,a){},cbbe:function(e,t,a){"use strict";var r=a("b273"),n=a.n(r);n.a},ddc7:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h2",{staticClass:"h3 text-default-dark"},[this.icon?a("font-awesome-icon",{class:"text-"+this.iconColor,attrs:{icon:this.icon}}):e._e(),e._v(" "+e._s(this.title)+" ")],1)},n=[],s={props:["title","icon","iconColor"]},i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=c.exports},e0e6:function(e,t,a){e.exports=a.p+"img/tmdb.86ff7c17.svg"},e31c:function(e,t,a){"use strict";var r=a("5a01"),n=a.n(r);n.a},e8b5:function(e,t,a){},f191:function(e,t,a){"use strict";var r=a("1c68"),n=a.n(r);n.a}});
//# sourceMappingURL=app.e7d31462.js.map