(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/model_preview/model_preview"],{3232:function(e,n,t){"use strict";t.r(n);var o=t("d999"),c=t.n(o);for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=c.a},4967:function(e,n,t){"use strict";(function(e,n){var o=t("47a9");t("1ae9");o(t("3240"));var c=o(t("ff27"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(c.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},"4d42":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var o={navbar:function(){return Promise.all([t.e("common/vendor"),t.e("components/navbar/navbar")]).then(t.bind(null,"5b0f6"))},c3dModel:function(){return Promise.all([t.e("common/vendor"),t.e("uni_modules/c-3d-model/components/c-3d-model/c-3d-model")]).then(t.bind(null,"5422"))}},c=function(){var e=this.$createElement;this._self._c},r=[]},c891:function(e,n,t){"use strict";var o=t("facc"),c=t.n(o);c.a},d999:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t={data:function(){return{height:"",autoRotate:!1,modelScale:[.6,.6,.6],src:""}},methods:{onLoaded:function(){console.log("模型加载完成")}},onLoad:function(){var n=e.getSystemInfoSync();this.height=n.windowHeight-n.statusBarHeight-48+"px",console.log(n);var t=this.$Route.query;this.src=t.fileUrl},onUnload:function(){this.$refs.modelRef.call("dispose")}};n.default=t}).call(this,t("df3c")["default"])},facc:function(e,n,t){e.exports={red_theme:"#FF2C3C",orange_theme:"#f7971e",pink_theme:"#fa444d",gold_theme:"#e0a356",blue_theme:"#2f80ed",green_theme:"#2ec840"}},ff27:function(e,n,t){"use strict";t.r(n);var o=t("4d42"),c=t("3232");for(var r in c)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return c[e]}))}(r);t("c891");var a=t("828b"),u=Object(a["a"])(c["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=u.exports}},[["4967","common/runtime","common/vendor"]]]);