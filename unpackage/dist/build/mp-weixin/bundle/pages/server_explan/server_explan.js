require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/server_explan/server_explan"],{"69f7":function(e,t,n){"use strict";n.r(t);var a=n("d933"),i=n("ddae");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var u=n("828b"),o=Object(u["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=o.exports},ae16:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n("11ba"),i={data:function(){return{content:""}},methods:{getPolicyAgreement:function(){var t=this;(0,a.apiPolicyAgreement)({type:this.type}).then((function(n){t.content=n.content,e.setNavigationBarTitle({title:String(n.name)})}))}},onLoad:function(){this.type=this.$Route.query.type,this.getPolicyAgreement(),3==this.type&&e.setNavigationBarTitle({title:"分销协议"})}};t.default=i}).call(this,n("df3c")["default"])},d933:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={uParse:function(){return Promise.all([n.e("common/vendor"),n.e("components/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"46cf"))}},i=function(){var e=this.$createElement;this._self._c},r=[]},ddae:function(e,t,n){"use strict";n.r(t);var a=n("ae16"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},e761:function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("1ae9");a(n("3240"));var i=a(n("69f7"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(i.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])}},[["e761","common/runtime","common/vendor"]]]);