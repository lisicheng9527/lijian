require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/integral_mall/integral_mall"],{"237f":function(e,n,t){e.exports={red_theme:"#FF2C3C",orange_theme:"#f7971e",pink_theme:"#fa444d",gold_theme:"#e0a356",blue_theme:"#2f80ed",green_theme:"#2ec840"}},3940:function(e,n,t){"use strict";(function(e,n){var o=t("47a9");t("1ae9");o(t("3240"));var a=o(t("d48c"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(a.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},"76b3":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return o}));var o={uIcon:function(){return t.e("components/uview-ui/components/u-icon/u-icon").then(t.bind(null,"3ee8"))},uImage:function(){return t.e("components/uview-ui/components/u-image/u-image").then(t.bind(null,"7469"))},price:function(){return t.e("components/price/price").then(t.bind(null,"3feb"))}},a=function(){var e=this.$createElement;this._self._c},u=[]},d306:function(e,n,t){"use strict";var o=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=o(t("7ca3")),u=t("967b"),i=o(t("26f4")),s=t("6c77"),c={mixins:[i.default],data:function(){return{sortConfig:[{name:"最新",type:"sort_new",value:"desc",setValue:"desc"},{name:"积分",type:"sort_integral",value:""},{name:"兑换量",type:"sort_sales",value:"",setValue:"desc"}],goodsType:"double",upOption:{noMoreSize:2,auto:!1,empty:{icon:"/static/images/empty/goods.png",tip:"暂无商品"}},goodsLists:[],integral:""}},methods:{changeGoodsType:function(){this.goodsType="one"===this.goodsType?"double":"one"},handleSort:function(e){console.log(e),this.sortConfig.forEach((function(n){e.type==n.type?n.setValue?n.value=n.setValue:"asc"==n.value?n.value="desc":n.value="asc":n.value=""}))},upCallback:function(e){var n,t=this,o=e.num,i=e.size,s=this.sortConfig.find((function(e){return e.value}))||{};(0,u.apiIntegralGoods)((n={},(0,a.default)(n,s.type,s.value),(0,a.default)(n,"page_no",o),(0,a.default)(n,"page_size",i),n)).then((function(e){var n=e.goods,a=e.integral;t.integral=a;var u=n.lists,i=u.length;1==o&&(t.goodsLists=[]),t.goodsLists=t.goodsLists.concat(u),t.mescroll.endBySize(i,n.count)})).catch((function(){t.mescroll.endErr()}))}},watch:{sortConfig:{handler:function(e){this.goodsLists=[],this.mescroll.resetUpScroll()},deep:!0}},onLoad:function(){this.handleSort=(0,s.trottle)(this.handleSort,500,this)}};n.default=c},d48c:function(e,n,t){"use strict";t.r(n);var o=t("76b3"),a=t("ddfc");for(var u in a)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(u);t("d965");var i=t("828b"),s=Object(i["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);n["default"]=s.exports},d965:function(e,n,t){"use strict";var o=t("237f"),a=t.n(o);a.a},ddfc:function(e,n,t){"use strict";t.r(n);var o=t("d306"),a=t.n(o);for(var u in o)["default"].indexOf(u)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(u);n["default"]=a.a}},[["3940","common/runtime","common/vendor","bundle/common/vendor"]]]);