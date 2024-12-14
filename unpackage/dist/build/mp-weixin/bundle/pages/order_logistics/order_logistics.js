require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/order_logistics/order_logistics"],{"0d24":function(e,n,t){"use strict";t.d(n,"b",(function(){return o})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return i}));var i={uImage:function(){return t.e("components/uview-ui/components/u-image/u-image").then(t.bind(null,"0cd9"))},uTimeLine:function(){return t.e("components/uview-ui/components/u-time-line/u-time-line").then(t.bind(null,"be7c"))},uTimeLineItem:function(){return t.e("components/uview-ui/components/u-time-line-item/u-time-line-item").then(t.bind(null,"15d5"))},uIcon:function(){return t.e("components/uview-ui/components/u-icon/u-icon").then(t.bind(null,"4032"))},uDivider:function(){return t.e("components/uview-ui/components/u-divider/u-divider").then(t.bind(null,"7dc4"))},uSkeleton:function(){return t.e("components/uview-ui/components/u-skeleton/u-skeleton").then(t.bind(null,"e8b2"))}},o=function(){var e=this,n=e.$createElement,t=(e._self._c,e.parcel.length),i=e.parcel.length,o=i>1?e.__map(e.parcel,(function(n,t){var i=e.__get_orig(n),o=1==n.send_type?e.deliverNum(n.order_goods_info):null,r=2==n.send_type?e.deliverNum(n.order_goods_info):null;return{$orig:i,m0:o,m1:r}})):null,r=i>1&&2==e.pagerData.express_status?e.waitNum():null,a="wait_goods"!=e.activeParcel&&1==e.parcel_info.send_type&&e.parcel_info?e.$getImageUri(e.parcel_info.express_icon):null,u="wait_goods"!=e.activeParcel&&1==e.parcel_info.send_type&&e.parcel_info?!e.down&&e.parcel_info.logistics_info.traces.length>1:null,c="wait_goods"!=e.activeParcel&&1==e.parcel_info.send_type&&e.parcel_info?e.down&&e.parcel_info.logistics_info.traces.length>1:null;e._isMounted||(e.e0=function(n){e.activeParcel="wait_goods"},e.e1=function(n){e.down=!0},e.e2=function(n){e.down=!1}),e.$mp.data=Object.assign({},{$root:{g0:t,g1:i,l0:o,m2:r,m3:a,g2:u,g3:c}})},r=[]},"2de4":function(e,n,t){"use strict";t.r(n);var i=t("0d24"),o=t("d5be");for(var r in o)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return o[e]}))}(r);t("5ed2");var a=t("828b"),u=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,"149c61f2",null,!1,i["a"],void 0);n["default"]=u.exports},"5ed2":function(e,n,t){"use strict";var i=t("7d5b"),o=t.n(i);o.a},"7d5b":function(e,n,t){},"91aa":function(e,n,t){"use strict";(function(e,n){var i=t("47a9");t("5c7a");i(t("3240"));var o=i(t("2de4"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(o.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},d5be:function(e,n,t){"use strict";t.r(n);var i=t("ea81"),o=t.n(i);for(var r in i)["default"].indexOf(r)<0&&function(e){t.d(n,e,(function(){return i[e]}))}(r);n["default"]=o.a},ea81:function(e,n,t){"use strict";var i=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=i(t("7eb4")),r=i(t("ee10")),a=t("7a41"),u=t("0fa5"),c=t("4a52"),d={name:"OrderLogistics",data:function(){return{loadingSkeleton:!0,pagerData:{},parcel:[{send_type:""}],parcel_info:{express_icon:"",order_goods_info:[]},receipt_address_info:{contact:"",mobile:""},down:!1,activeParcel:0,wait_delivery_goods:[]}},watch:{parcel:{handler:function(e){this.parcel_info=e[0]},deep:!0,immediate:!0}},methods:{onCopy:function(e){(0,c.copy)(e)},initLogisticsData:function(){var e=this,n="integral"==this.type?(0,u.apiIntegralOrderTraces)({id:this.order_id}):(0,a.apiOrderLogistics)({id:this.order_id});n.then((function(n){return e.pagerData=n,e.parcel=n.parcel_info,e.receipt_address_info=n.receipt_address_info,e.wait_delivery_goods=n.wait_delivery_goods,n})).then((function(n){e.loadingSkeleton=!1}))},handleParcel:function(e){this.activeParcel=e,this.parcel_info=this.parcel[e]},deliverNum:function(e){var n=0;return e.map((function(e){n+=Number(e.delivery_num)})),n},waitNum:function(){var e=0;return this.wait_delivery_goods.map((function(n){e+=Number(n.goods_num-n.delivery_num)})),e}},onLoad:function(){var e=this;return(0,r.default)(o.default.mark((function n(){var t;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t=e.$Route.query,n.prev=1,t.order_id){n.next=4;break}throw new Error("物流异常");case 4:return e.order_id=t.order_id,e.type=t.type,n.next=8,e.initLogisticsData();case 8:n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](1),console.log(n.t0),setTimeout((function(){e.$Router.back()}),500);case 14:case"end":return n.stop()}}),n,null,[[1,10]])})))()}};n.default=d}},[["91aa","common/runtime","common/vendor","bundle/common/vendor"]]]);