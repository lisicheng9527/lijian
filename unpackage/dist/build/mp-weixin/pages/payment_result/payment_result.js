(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/payment_result/payment_result"],{"0b31":function(e,t,n){"use strict";var a=n("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("7eb4")),u=a(n("ee10")),i=n("11ba"),o=n("93d1"),c={name:"PaymentResult",data:function(){return{pageStatus:o.PageStatusEnum["LOADING"],order_id:"",orderInfo:{},mapStatus:{succeed:{text:"订单支付成功",image:"/static/images/payment/icon_succeed.png"},waiting:{text:"订单等待支付",image:"/static/images/payment/icon_waiting.png"}}}},computed:{paymentStatus:function(){var e=!!this.orderInfo.pay_status;return this.mapStatus[e?"succeed":"waiting"]}},methods:{initPageData:function(){var e=this;return new Promise((function(t,n){(0,i.apiPayResult)({order_id:e.order_id,from:e.from}).then((function(n){e.orderInfo=n,t(n)})).catch((function(e){n(e)}))}))},goHome:function(){this.$Router.replaceAll({path:"/pages/index/index"})},goOrder:function(){switch(this.from){case"order":this.$Router.replace({path:"/bundle/pages/user_order/user_order"});break;case"integral":this.$Router.replace({path:"/bundle/pages/exchange_order/exchange_order"});break}}},onLoad:function(){var e=this;return(0,u.default)(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.$Route.query,t.prev=1,n.order_id){t.next=4;break}throw new Error("订单不存在");case 4:return e.order_id=n.order_id,e.from=n.from,t.next=8,e.initPageData();case 8:e.pageStatus=o.PageStatusEnum["NORMAL"],t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](1),console.log(t.t0),e.pageStatus=o.PageStatusEnum["ERROR"];case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}};t.default=c},"29b9":function(e,t,n){"use strict";(function(e,t){var a=n("47a9");n("1ae9");a(n("3240"));var r=a(n("6c4d"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(r.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},"3cc4":function(e,t,n){},"6c4d":function(e,t,n){"use strict";n.r(t);var a=n("6f5b"),r=n("7852");for(var u in r)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("eb9a");var i=n("828b"),o=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"5a6488c6",null,!1,a["a"],void 0);t["default"]=o.exports},"6f5b":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var a={uImage:function(){return n.e("components/uview-ui/components/u-image/u-image").then(n.bind(null,"7469"))},pageStatus:function(){return n.e("components/page-status/page-status").then(n.bind(null,"f823"))},uEmpty:function(){return n.e("components/uview-ui/components/u-empty/u-empty").then(n.bind(null,"0719"))}},r=function(){var e=this.$createElement;this._self._c},u=[]},7852:function(e,t,n){"use strict";n.r(t);var a=n("0b31"),r=n.n(a);for(var u in a)["default"].indexOf(u)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=r.a},eb9a:function(e,t,n){"use strict";var a=n("3cc4"),r=n.n(a);r.a}},[["29b9","common/runtime","common/vendor"]]]);