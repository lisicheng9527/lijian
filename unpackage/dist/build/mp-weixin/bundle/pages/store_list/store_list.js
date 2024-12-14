require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/store_list/store_list"],{"38d9":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return r}));var r={mescrollUni:function(){return Promise.all([n.e("common/vendor"),n.e("components/mescroll-uni/mescroll-uni")]).then(n.bind(null,"346f"))},uIcon:function(){return n.e("components/uview-ui/components/u-icon/u-icon").then(n.bind(null,"4032"))}},a=function(){var e=this.$createElement;this._self._c;this.$mp.data=Object.assign({},{$root:{a0:{noMoreSize:5,auto:!1,empty:{icon:"/static/images/empty/shop.png",tip:"暂无门店~",fixed:!0}}}})},o=[]},"92a9":function(e,t,n){"use strict";(function(e,t){var r=n("47a9");n("5c7a");r(n("3240"));var a=r(n("9b36"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"9b36":function(e,t,n){"use strict";n.r(t);var r=n("38d9"),a=n("9c41");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f26e");var c=n("828b"),i=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=i.exports},"9c41":function(e,t,n){"use strict";n.r(t);var r=n("9c78"),a=n.n(r);for(var o in r)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=a.a},"9c78":function(e,t,n){"use strict";(function(e){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("7eb4")),o=r(n("34cf")),c=r(n("ee10")),i=r(n("af34")),u=r(n("7ca3")),s=n("2ae4"),l=r(n("07ac"));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={name:"StoreList",mixins:[l.default],data:function(){return{lists:[],location:{},markers:[]}},methods:{upCallback:function(e){var t=this;(0,s.apiSelffetchStore)(d(d({},this.location),{},{page_no:e.num,page_size:e.size})).then((function(n){var r=n.lists,a=(n.page_size,n.count);1===e.num&&(t.lists=[]),t.lists=[].concat((0,i.default)(t.lists),(0,i.default)(r)),t.markers=r.map((function(e){return{id:e.id,latitude:e.latitude,longitude:e.longitude,iconPath:"../../static/images/icon_marker.png",width:34,height:34,callout:{content:e.name,padding:5,borderRadius:4,fontSize:13,display:"ALWAYS"}}})),t.mescroll.endSuccess(r.length,a)})).catch((function(e){t.mescroll.endBySize()}))},onCall:function(t){e.makePhoneCall({phoneNumber:t})},getLocation:function(){var t=this;return(0,c.default)(a.default.mark((function n(){var r,c,i;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.getLocation({type:"gcj02"});case 2:if(r=n.sent,c=(0,o.default)(r,2),c[0],i=c[1],i){n.next=8;break}return n.abrupt("return",t.getAuthorize());case 8:return n.abrupt("return",{latitude:i.latitude,longitude:i.longitude});case 9:case"end":return n.stop()}}),n)})))()},getAuthorize:function(){var t=this;return(0,c.default)(a.default.mark((function n(){var r,c,i,u,s,l;return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.showModal({title:"您已拒绝地理位置权限",content:"是否进入权限管理，调整授权？"});case 2:if(r=n.sent,c=(0,o.default)(r,2),c[0],i=c[1],!i.confirm){n.next=16;break}return n.next=9,e.openSetting();case 9:u=n.sent,s=(0,o.default)(u,2),s[0],l=s[1],l&&t.getLocation(),n.next=17;break;case 16:i.cancel&&t.$Router.back();case 17:case"end":return n.stop()}}),n)})))()},onSelect:function(t){e.$emit("changeStore",t),this.$Router.back()}},onLoad:function(){var e=this;return(0,c.default)(a.default.mark((function t(){var n;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.getLocation();case 3:if(n=t.sent,n){t.next=6;break}throw new Error("位置获取失败");case 6:e.location=n,setTimeout((function(){e.mescroll.resetUpScroll()}),200),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),console.log(t.t0),e.$toast({title:t.t0.message});case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()}};t.default=p}).call(this,n("df3c")["default"])},b4eb:function(e,t,n){e.exports={red_theme:"#FF2C3C",orange_theme:"#f7971e",pink_theme:"#fa444d",gold_theme:"#e0a356",blue_theme:"#2f80ed",green_theme:"#2ec840"}},f26e:function(e,t,n){"use strict";var r=n("b4eb"),a=n.n(r);a.a}},[["92a9","common/runtime","common/vendor"]]]);