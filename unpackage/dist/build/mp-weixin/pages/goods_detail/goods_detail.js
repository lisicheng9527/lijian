(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods_detail/goods_detail"],{"077f":function(e,o,n){"use strict";n.r(o);var t=n("465e"),i=n("b59a");for(var s in i)["default"].indexOf(s)<0&&function(e){n.d(o,e,(function(){return i[e]}))}(s);n("f6fc");var r=n("828b"),u=Object(r["a"])(i["default"],t["b"],t["c"],!1,null,"1360ea87",null,!1,t["a"],void 0);o["default"]=u.exports},"465e":function(e,o,n){"use strict";n.d(o,"b",(function(){return i})),n.d(o,"c",(function(){return s})),n.d(o,"a",(function(){return t}));var t={navbar:function(){return Promise.all([n.e("common/vendor"),n.e("components/navbar/navbar")]).then(n.bind(null,"d060"))},bubble:function(){return n.e("components/bubble/bubble").then(n.bind(null,"258f"))},goodsSwiper:function(){return n.e("components/goods-swiper/goods-swiper").then(n.bind(null,"89f9"))},price:function(){return n.e("components/price/price").then(n.bind(null,"ac59"))},uIcon:function(){return n.e("components/uview-ui/components/u-icon/u-icon").then(n.bind(null,"4032"))},uPopup:function(){return n.e("components/uview-ui/components/u-popup/u-popup").then(n.bind(null,"47bf"))},couponCard:function(){return n.e("components/coupon-card/coupon-card").then(n.bind(null,"fb9b"))},uEmpty:function(){return n.e("components/uview-ui/components/u-empty/u-empty").then(n.bind(null,"ec9f"))},goodsSpec:function(){return Promise.all([n.e("common/vendor"),n.e("components/goods-spec/goods-spec")]).then(n.bind(null,"8132"))},wReviews:function(){return n.e("components/widgets/reviews/reviews").then(n.bind(null,"ff9b"))},wGoodsrecom:function(){return n.e("components/widgets/goodsrecom/goodsrecom").then(n.bind(null,"d01a"))},uParse:function(){return Promise.all([n.e("common/vendor"),n.e("components/uview-ui/components/u-parse/u-parse")]).then(n.bind(null,"6b34"))},uBadge:function(){return n.e("components/uview-ui/components/u-badge/u-badge").then(n.bind(null,"9eed"))},sharePopup:function(){return n.e("components/share-popup/share-popup").then(n.bind(null,"0584"))},pageStatus:function(){return n.e("components/page-status/page-status").then(n.bind(null,"0a8b"))},uBackTop:function(){return n.e("components/uview-ui/components/u-back-top/u-back-top").then(n.bind(null,"2fdf"))}},i=function(){var e=this,o=e.$createElement,n=(e._self._c,{background:"rgba(256,256,256,"+e.percent+")"}),t=""!==e.goodsInfo.member_price&&e.userInfo.id&&e.goodsInfo.member_level.name?e.$getImageUri("resource/image/shopapi/default/good_vip.png"):null,i=""!==e.goodsInfo.member_price&&e.userInfo.id&&e.goodsInfo.member_level.name?Number(e.goodsSpecOptions.spec.sell_price||e.goodsInfo.sell_price):null,s=""!==e.goodsInfo.member_price&&e.userInfo.id&&e.goodsInfo.member_level.name?null:Number(e.goodsInfo.lineation_price),r=e.goodsCouponSpecs.length,u=r?e.__map(e.goodsCouponSpecs,(function(o,n){var t=e.__get_orig(o),i=1==o.condition_type?e.handleSpot(o.money):null,s=2==o.condition_type?e.handleSpot(o.condition_money):null,r=2==o.condition_type?e.handleSpot(o.money):null,u=3==o.condition_type?e.handleSpot(o.condition_money):null,a=3==o.condition_type?e.handleSpot(o.discount_ratio):null;return{$orig:t,m3:i,m4:s,m5:r,m6:u,m7:a}})):null,a=e.__map(e.goodsCouponList,(function(o,n){var t=e.__get_orig(o),i={name:"领取",theme:"primary",disable:!!o.is_available};return{$orig:t,a1:i}})),c=e.goodsCouponList.length,d=e.distribution.is_show&&e.distribution.earnings>0?Number(e.distribution.ratio).toFixed(2):null,p=e.goodsInfo.service_guarantee.length,l=p?e.__map(e.goodsInfo.service_guarantee,(function(o,n){var t=e.__get_orig(o),i=e.goodsInfo.service_guarantee.length;return{$orig:t,g4:i}})):null,f={image:e.goodsInfo.image,price:e.goodsInfo.sell_price,stock:e.goodsInfo.total_stock,unit:e.goodsInfo.unit_name,limit_type:e.goodsInfo.limit_type,limit_value:e.goodsInfo.limit_value,buy_num:e.goodsInfo.buy_num,cart_goods_num:e.goodsInfo.cart_goods_num},g={name:e.goodsInfo.name,image:e.goodsInfo.image};e._isMounted||(e.e0=function(o){e.showCoupons=!0},e.e1=function(o){e.showShare=!0},e.e2=function(o){e.showCoupons=!1},e.e3=function(o){e.showShare=!0},e.e4=function(o){e.showSafeguard=!0},e.e5=function(o){e.showSafeguard=!1},e.e6=function(o){e.showSafeguard=!1},e.e7=function(o){e.showGoodsSpec=!1}),e.$mp.data=Object.assign({},{$root:{a0:n,m0:t,m1:i,m2:s,g0:r,l0:u,l1:a,g1:c,g2:d,g3:p,l2:l,a2:f,a3:g}})},s=[]},7725:function(e,o,n){"use strict";(function(e){var t=n("47a9");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=t(n("7eb4")),s=t(n("ee10")),r=t(n("7ca3")),u=n("234d"),a=n("2ae4"),c=(n("1169"),n("3cc3")),d=n("8f59"),p=n("4a52"),l=n("d29e"),f=n("d6c2"),g=t(n("ace4"));function h(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?h(Object(n),!0).forEach((function(o){(0,r.default)(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}var _={name:"GoodsDetail",mixins:[g.default],data:function(){return{serciveConfig:{},addressId:"",addressList:[],isDischarge:!1,pageStatus:c.PageStatusEnum["LOADING"],pagesData:[],pageErrorMsg:"",scrollTop:0,percent:0,showShare:!1,goodsInfo:{free_shipping_tips:"",service_guarantee:[],member_level:{},address:{},stock_show:!0},goodsComment:{},goods_id:"",showSafeguard:!1,isGoodsCollect:!1,showGoodsSpec:!1,showCoupons:!1,goodsSpecOptions:{spec:{}},specButtonsList:[],goodsCouponList:[],goodsCouponActive:"",specButtonsGroups:{buy:{event:"buy",text:"立即购买"},cart:{event:"cart",text:"加入购物车"}},distribution:{},reCheck:0,cartId:0}},computed:m(m(m({},(0,d.mapGetters)(["isLogin","ServiceConfig","userInfo","appConfig","shareConfig"])),(0,d.mapState)({cartNum:function(e){return e.cart.cartNum}})),{},{goodsCouponSpecs:function(){for(var e=this.goodsCouponList,o=e.length,n=[],t=0;t<2&&t<=o-1;++t){var i=e[t];n.push(i)}return n},specValueStr:function(){var e,o,n;return null!==(e=null===(o=this.goodsSpecOptions)||void 0===o||null===(n=o.spec)||void 0===n?void 0:n.spec_value_str)&&void 0!==e?e:""},handleSpot:function(){return function(e){var o=e,n=e.split(".");return"00"==n[1]?o=n[0]:"00"!=n[1]&&n[1]%10==0&&(o=n[0]+n[1].substr(0,n[1].length-1)),o}}}),methods:{gotoService:function(){this.$Router.push({path:"/bundle/pages/artificial_service/artificial_service"})},onPresell:function(){this.$Router.push({path:"/bundle/pages/presell_detail/presell_detail",query:{id:this.goods_id}})},apiAddressListsFun:function(){var e=this;(0,l.apiAddressLists)().then((function(o){e.addressList=o,console.log(o)}))},getPage:function(){var o=this;(0,a.apiGetPage)({type:5,goods_id:this.goods_id}).then((function(n){var t=n.common,i=n.content;o.pagesData=i,e.setNavigationBarTitle({title:t.title})}))},changeGoodsSpec:function(e){this.goodsSpecOptions=e,console.log(e)},onCart:function(){0!=this.goodsInfo.status&&(this.showGoodsSpec=!0,this.specButtonsList=[this.specButtonsGroups.cart])},changeCollect:function(e){var o=this;if(e=e?0:1,!this.isLogin)return this.$Router.push("/pages/login/login");(0,u.apiGoodsCollect)({goods_id:this.goods_id,is_collect:e}).then((function(n){o.isGoodsCollect=e})).catch((function(e){console.log(e)}))},goHome:function(){this.$Router.replaceAll({path:"/pages/index/index"})},goCart:function(){this.$Router.replaceAll({path:"/pages/shop_cart/shop_cart"})},onBuy:function(){0!=this.goodsInfo.status&&(this.showGoodsSpec=!0,this.specButtonsList=[this.specButtonsGroups.buy])},getCoupon:function(e){var o=this;if(!this.isLogin)return this.$Router.push("/pages/login/login");(0,a.apiCouponGet)({id:e}).then((function(){o.$toast({title:"领取成功"}),o.initMarketing()})).catch((function(e){console.log(e)}))},onGoodsOptions:function(){this.showGoodsSpec=!0,this.specButtonsList=[this.specButtonsGroups.buy],1==this.goodsInfo.type&&(this.specButtonsList=[m(m({},this.specButtonsGroups.cart),{},{style:{border:"solid 1px ".concat(this.themeColor),color:this.themeColor,backgroundColor:"#FFFFFF"}}),this.specButtonsGroups.buy])},handleCartAdd:function(e){var o=this,n=e.spec,t=e.number;if(!this.isLogin)return this.$Router.push("/pages/login/login");(0,a.apiCartAdd)({item_id:n.id,goods_num:t}).then((function(){o.$toast({title:"已加入购物车"}),o.$store.dispatch("getCartNum"),o.initGoodsDetail()})).catch((function(e){throw new Error(e)}))},handleBuy:function(e){var o=e.spec,n=e.number,t=1==this.goodsInfo.type?"GOODS":"VIRTUAL";this.$Router.push({path:"/pages/goods_order/goods_order",query:{from:c.OrderTypeEnum[t],address_id:this.addressId,payload:{source:"buy_now",goods:[{goods_num:n,item_id:o.id}]}}})},initGoodsDetail:function(){var e=this;return new Promise((function(o,n){(0,u.apiGoodsDetail)({id:e.goods_id,visit:1,address_id:e.addressId}).then((function(o){e.goodsInfo=o;var n="[]"!==JSON.stringify(o.goods_comment);return e.goodsComment=n?o.goods_comment:{},e.isGoodsCollect=!!o.is_collect,e.distribution=e.goodsInfo.distribution,o})).then((function(e){o(e)})).catch((function(e){n(e)}))}))},getServiceConfig:function(){var e=this;return(0,s.default)(i.default.mark((function o(){var n;return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:return o.next=2,(0,f.apiserviceConfig)();case 2:n=o.sent,e.serciveConfig=n;case 4:case"end":return o.stop()}}),o)})))()},initMarketing:function(){var e=this;return new Promise((function(o,n){(0,u.apiGoodsMarketing)({id:e.goods_id}).then((function(n){e.goodsCouponList=n.coupon,o(n)})).catch((function(e){n(e)}))}))},handleSend:function(){var o=this;e.$once("changeAddress",function(){var e=(0,s.default)(i.default.mark((function e(n){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o.addressId=n,e.next=3,o.initGoodsDetail();case 3:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}()),this.$Router.push({path:"/pages/address/address",query:{type:1}})}},onPageScroll:function(o){var n=e.upx2px(100),t=o.scrollTop;this.percent=t/n>1?1:t/n,this.scrollTop=t},onLoad:function(){var e=this;return(0,s.default)(i.default.mark((function o(){var n;return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:if(n=e.$Route.query,1==n["reCheck"]&&(e.reCheck=n["reCheck"],e.cartId=n["cart_id"],setTimeout((function(){e.showGoodsSpec=!0}),200)),n["scene"]?e.goods_id=(0,p.strToParams)(n["scene"])["id"]:e.goods_id=n.id,o.prev=3,e.goods_id){o.next=6;break}throw new Error("该商品不存在");case 6:return o.next=8,e.getPage();case 8:return o.next=10,e.initGoodsDetail();case 10:return o.next=12,e.apiAddressListsFun();case 12:return o.next=14,e.initMarketing();case 14:e.getServiceConfig(),e.pageStatus=c.PageStatusEnum["NORMAL"],o.next=23;break;case 18:o.prev=18,o.t0=o["catch"](3),console.log(o.t0),e.pageErrorMsg=o.t0.message,e.pageStatus=c.PageStatusEnum["ERROR"];case 23:case"end":return o.stop()}}),o,null,[[3,18]])})))()},onShareAppMessage:function(){var e=this.goodsInfo,o=e.name,n=e.image;return{title:o,path:"/pages/goods_detail/goods_detail?id=".concat(this.goods_id,"&invite_code=").concat(this.userInfo.code),imageUrl:n}},onHide:function(){this.isDischarge=!0},onShow:function(){var e=this;return(0,s.default)(i.default.mark((function o(){return i.default.wrap((function(o){while(1)switch(o.prev=o.next){case 0:e.isDischarge=!1;case 1:case"end":return o.stop()}}),o)})))()}};o.default=_}).call(this,n("df3c")["default"])},9736:function(e,o,n){},"9e05":function(e,o,n){"use strict";(function(e,o){var t=n("47a9");n("5c7a");t(n("3240"));var i=t(n("077f"));e.__webpack_require_UNI_MP_PLUGIN__=n,o(i.default)}).call(this,n("3223")["default"],n("df3c")["createPage"])},b59a:function(e,o,n){"use strict";n.r(o);var t=n("7725"),i=n.n(t);for(var s in t)["default"].indexOf(s)<0&&function(e){n.d(o,e,(function(){return t[e]}))}(s);o["default"]=i.a},f6fc:function(e,o,n){"use strict";var t=n("9736"),i=n.n(t);i.a}},[["9e05","common/runtime","common/vendor"]]]);