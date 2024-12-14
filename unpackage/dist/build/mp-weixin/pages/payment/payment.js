(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/payment/payment"],{1498:function(n,t,e){"use strict";(function(n){var a=e("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(e("7eb4")),r=a(e("ee10")),o=(e("8f59"),e("d6c2")),i=e("093d"),c=e("3cc3"),s=a(e("4dd0")),f={name:"Payment",data:function(){return{from:"",order_id:"",amount:0,timeout:0,payway:"",paywayList:[],Alipayshow:!1,pageStatus:c.PageStatusEnum["NORMAL"],pageErrorMsg:"",loadingSkeleton:!0,loadingPay:!1,key:""}},methods:{changePayway:function(n){this.$set(this,"payway",n)},initPageData:function(){var n=this;return new Promise((function(t,e){(0,o.apiPayway)({from:n.from,order_id:n.order_id}).then((function(e){var a;n.amount=e.order_amount,n.paywayList=e.lists,n.payway=null===(a=n.paywayList[0])||void 0===a?void 0:a.pay_way;var u=(new Date).getTime()/1e3,r=1*e.cancel_time;n.timeout=r-u,t(e)})).catch((function(n){return e(n)}))}))},handleclose:function(){var n=this;this.queryPayResult().then((function(t){t?n.handlePayResult(c.PaymentStatusEnum["SUCCESS"]):n.handlePayResult(c.PaymentStatusEnum["FAIL"])})).catch((function(t){return n.handlePayResult(c.PaymentStatusEnum["FAIL"])})),this.loadingPay=!1},handlePrepay:function(){var t=this;0!==this.userInfo.is_auth||this.payway!=c.PayWayEnum["WECHAT"]?(this.key="".concat(s.default.getters.appConfig.domain,"/mobile/bundle/pages/toAlipay/toAlipay?id=").concat(this.order_id,"&from=").concat(this.from,"&pay_way=").concat(this.payway,"&key=").concat(s.default.getters.token),this.loadingPay||(this.loadingPay=!0,(0,o.apiPrepay)({from:this.from,order_id:this.order_id,pay_way:this.payway}).then(function(){var e=(0,r.default)(u.default.mark((function e(a){var r,o;return u.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=a.config,o=a.pay_way,e.t0=+o,e.next=e.t0===c.PayWayEnum["WALLET"]?4:5===e.t0?7:e.t0===c.PayWayEnum["WECHAT"]?10:e.t0===c.PayWayEnum["ALIPAY"]?13:e.t0===c.PayWayEnum["TOUTIAO"]?17:20;break;case 4:return e.next=6,t.handleWalletPay();case 6:return e.abrupt("break",21);case 7:return e.next=9,t.handleDownLinePay();case 9:return e.abrupt("break",21);case 10:return e.next=12,t.handleWechatPay(r);case 12:return e.abrupt("break",21);case 13:return n.$on("Alipay",(function(){t.Alipayshow=!0})),e.next=16,t.handleAlipayPay(r,{from:t.from,order_id:t.order_id,pay_way:o},s.default.getters.token);case 16:return e.abrupt("break",21);case 17:return e.next=19,t.handleTtPay(r);case 19:return e.abrupt("break",21);case 20:throw"支付异常";case 21:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()).then((function(){t.handlePayResult(c.PaymentStatusEnum["SUCCESS"])})).catch((function(n){t.handlePayResult(c.PaymentStatusEnum["FAIL"]),console.log("PAYMENT_ERROR_MSG:",n)})).finally((function(){t.loadingPay=!1})))):n.showModal({content:"当前账号未微信授权，请前往个人设置授权",confirmColor:this.themeColor,confirmText:"前往授权",success:function(n){var e=n.confirm;e&&t.$Router.push({path:"/bundle/pages/user_profile/user_profile",query:{form:"payment"}})}})},handleWechatPay:function(n){return new Promise((function(t,e){(0,i.wxpay)(n).then(function(){var n=(0,r.default)(u.default.mark((function n(e){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t(e);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){return e(n)}))}))},handleAlipayPay:function(n,t,e){return new Promise((function(a,o){(0,i.alipay)(n,t,e).then(function(){var n=(0,r.default)(u.default.mark((function n(t){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:a(t);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){return o(n)}))}))},handleWalletPay:function(){return new Promise((function(n,t){n("支付成功")}))},handleDownLinePay:function(){return new Promise((function(n,t){n("支付成功")}))},handleTtPay:function(n){return new Promise((function(t,e){(0,i.ttpay)(n).then(function(){var n=(0,r.default)(u.default.mark((function n(e){return u.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t(e);case 1:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()).catch((function(n){return e(n)}))}))},handlePayResult:function(t){n.$emit("duringPayment",{result:t,payway:this.payway,order_id:this.order_id})},queryPayResult:function(){var n=this;return new Promise((function(t,e){(0,o.apiPayStatus)({from:n.from,order_id:n.order_id}).then((function(n){var e=n.pay_status;t(!!e)})).catch((function(n){return e(n)}))}))}},onLoad:function(){var n=this;return(0,r.default)(u.default.mark((function t(){var e;return u.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e=n.$Route.query,n.from=e.from,n.order_id=e.order_id,t.prev=3,n.from||n.order_id){t.next=6;break}throw"页面参数有误";case 6:return t.next=8,n.queryPayResult().then((function(n){if(n)throw"订单已支付"}));case 8:return t.next=10,n.initPageData();case 10:n.loadingSkeleton=!1,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](3),n.pageErrorMsg=t.t0,n.pageStatus=c.PageStatusEnum["ERROR"];case 17:case"end":return t.stop()}}),t,null,[[3,13]])})))()},onShow:function(){},onUnload:function(){this.handlePayResult(c.PaymentStatusEnum["CLOSE"])}};t.default=f}).call(this,e("df3c")["default"])},"25c4":function(n,t,e){"use strict";var a=e("bfab"),u=e.n(a);u.a},7252:function(n,t,e){"use strict";(function(n,t){var a=e("47a9");e("5c7a");a(e("3240"));var u=a(e("d163"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(u.default)}).call(this,e("3223")["default"],e("df3c")["createPage"])},bbd7:function(n,t,e){"use strict";e.r(t);var a=e("1498"),u=e.n(a);for(var r in a)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=u.a},bfab:function(n,t,e){},d163:function(n,t,e){"use strict";e.r(t);var a=e("f4f2"),u=e("bbd7");for(var r in u)["default"].indexOf(r)<0&&function(n){e.d(t,n,(function(){return u[n]}))}(r);e("25c4");var o=e("828b"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"364733f8",null,!1,a["a"],void 0);t["default"]=i.exports},f4f2:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={price:function(){return e.e("components/price/price").then(e.bind(null,"ac59"))},uCountDown:function(){return e.e("components/uview-ui/components/u-count-down/u-count-down").then(e.bind(null,"e50f"))},uRadioGroup:function(){return Promise.all([e.e("common/vendor"),e.e("components/uview-ui/components/u-radio-group/u-radio-group")]).then(e.bind(null,"0506"))},uImage:function(){return e.e("components/uview-ui/components/u-image/u-image").then(e.bind(null,"0cd9"))},uRadio:function(){return e.e("components/uview-ui/components/u-radio/u-radio").then(e.bind(null,"d32e"))},uLoading:function(){return e.e("components/uview-ui/components/u-loading/u-loading").then(e.bind(null,"d988"))},pageStatus:function(){return e.e("components/page-status/page-status").then(e.bind(null,"0a8b"))},uEmpty:function(){return e.e("components/uview-ui/components/u-empty/u-empty").then(e.bind(null,"ec9f"))},uPopup:function(){return e.e("components/uview-ui/components/u-popup/u-popup").then(e.bind(null,"47bf"))},uSkeleton:function(){return e.e("components/uview-ui/components/u-skeleton/u-skeleton").then(e.bind(null,"e8b2"))}},u=function(){var n=this.$createElement,t=(this._self._c,this.paywayList.length),e=this.paywayList.length;this.$mp.data=Object.assign({},{$root:{g0:t,g1:e}})},r=[]}},[["7252","common/runtime","common/vendor"]]]);