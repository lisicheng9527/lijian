require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/integral_settlement/integral_settlement"],{"0c18":function(e,t,n){"use strict";var r=n("b70e"),a=n.n(r);a.a},"3cb8":function(e,t,n){"use strict";n.r(t);var r=n("7827"),a=n("95e9");for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n("0c18");var o=n("828b"),s=Object(o["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],void 0);t["default"]=s.exports},7827:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return r}));var r={addressCard:function(){return n.e("components/address-card/address-card").then(n.bind(null,"83fc"))},uImage:function(){return n.e("components/uview-ui/components/u-image/u-image").then(n.bind(null,"0cd9"))},price:function(){return n.e("components/price/price").then(n.bind(null,"ac59"))},uField:function(){return n.e("components/uview-ui/components/u-field/u-field").then(n.bind(null,"908f"))},pageStatus:function(){return n.e("components/page-status/page-status").then(n.bind(null,"0a8b"))},uEmpty:function(){return n.e("components/uview-ui/components/u-empty/u-empty").then(n.bind(null,"ec9f"))}},a=function(){var e=this.$createElement,t=(this._self._c,JSON.stringify(this.address));this.$mp.data=Object.assign({},{$root:{a0:{path:"/pages/address/address",query:{type:!0}},g0:t}})},u=[]},"87ee":function(e,t,n){"use strict";(function(e,t){var r=n("47a9");n("5c7a");r(n("3240"));var a=r(n("3cb8"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(a.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"95e9":function(e,t,n){"use strict";n.r(t);var r=n("9811"),a=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},9811:function(e,t,n){"use strict";(function(e){var r=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("7eb4")),u=r(n("ee10")),o=n("0fa5"),s=n("3cc3"),c={data:function(){return{pageStatus:s.PageStatusEnum["LOADING"],pageErrorMsg:"",address:{},orderFrom:{},goods:{},orderInfo:{}}},methods:{getOrderInfo:function(){var e=this;return new Promise((function(t,n){(0,o.apiIntegralSettlement)(e.orderFrom).then((function(n){var r=n.address,a=n.goods;e.address=r,e.orderInfo=n,e.goods=a,t(n)})).catch((function(e){return n(e)}))}))},onSubmitOrder:function(){var t=this;e.showModal({title:"温馨提示",content:"是否确认下单?",confirmColor:this.themeColor,success:function(){var e=(0,u.default)(a.default.mark((function e(n){var r;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=n.confirm,r){e.next=3;break}return e.abrupt("return");case 3:try{t.orderBuy()}catch(a){"自提门店不能为空"==a&&t.$toast({title:"请选择自提门店"}),console.log("ORDER_ERROR_MSG:",a)}case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})},orderBuy:function(){var t=this;return new Promise((function(n,r){t.orderFrom.address_id=t.address.id,(0,o.apiIntegralSubmitOrder)(t.orderFrom).then((function(n){return e.$once("duringPayment",(function(e){console.log(e),t.handlePayResult(e)})),n})).then((function(e){var r=e.type,a=e.order_id;t.orderInfo.need_pay?t.$Router.replace({path:"/pages/payment/payment",query:{from:r,order_id:a}}):t.handlePayResult({result:1,order_id:a}),n(a)})).catch((function(e){return r(e)}))}))},handlePayResult:function(e){var t=e.result,n=e.order_id;switch(t){case s.PaymentStatusEnum["SUCCESS"]:case s.PaymentStatusEnum["FAIL"]:this.$Router.replace({path:"/pages/payment_result/payment_result",query:{order_id:n,from:"integral"}});break;case s.PaymentStatusEnum["CLOSE"]:this.$Router.push({path:"/pages/payment_result/payment_result",query:{order_id:n,from:"integral"}});break}}},onLoad:function(t){var n=this;this.orderFrom=this.$Route.query,e.$on("changeAddress",(function(e){console.log(e),e&&(n.orderFrom.address_id=e)}))},onUnload:function(){e.$off("changeAddress")},onShow:function(){var e=this;return(0,u.default)(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.orderFrom),t.prev=1,t.next=4,e.getOrderInfo();case 4:e.pageStatus=s.PageStatusEnum["NORMAL"],t.next=11;break;case 7:t.prev=7,t.t0=t["catch"](1),e.pageErrorMsg=t.t0,e.pageStatus=s.PageStatusEnum["ERROR"];case 11:case"end":return t.stop()}}),t,null,[[1,7]])})))()}};t.default=c}).call(this,n("df3c")["default"])},b70e:function(e,t,n){e.exports={red_theme:"#FF2C3C",orange_theme:"#f7971e",pink_theme:"#fa444d",gold_theme:"#e0a356",blue_theme:"#2f80ed",green_theme:"#2ec840"}}},[["87ee","common/runtime","common/vendor","bundle/common/vendor"]]]);