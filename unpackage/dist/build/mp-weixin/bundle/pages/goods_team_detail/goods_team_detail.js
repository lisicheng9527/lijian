require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/goods_team_detail/goods_team_detail"],{"12fe":function(e,t,o){"use strict";o.d(t,"b",(function(){return i})),o.d(t,"c",(function(){return s})),o.d(t,"a",(function(){return n}));var n={navbar:function(){return Promise.all([o.e("common/vendor"),o.e("components/navbar/navbar")]).then(o.bind(null,"d060"))},goodsSwiper:function(){return o.e("components/goods-swiper/goods-swiper").then(o.bind(null,"89f9"))},bubble:function(){return o.e("components/bubble/bubble").then(o.bind(null,"258f"))},price:function(){return o.e("components/price/price").then(o.bind(null,"ac59"))},countDown:function(){return o.e("components/count-down/count-down").then(o.bind(null,"c25a"))},uIcon:function(){return o.e("components/uview-ui/components/u-icon/u-icon").then(o.bind(null,"4032"))},uPopup:function(){return o.e("components/uview-ui/components/u-popup/u-popup").then(o.bind(null,"47bf"))},goodsSpec:function(){return Promise.all([o.e("common/vendor"),o.e("components/goods-spec/goods-spec")]).then(o.bind(null,"8132"))},uImage:function(){return o.e("components/uview-ui/components/u-image/u-image").then(o.bind(null,"0cd9"))},wReviews:function(){return o.e("components/widgets/reviews/reviews").then(o.bind(null,"ff9b"))},wGoodsrecom:function(){return o.e("components/widgets/goodsrecom/goodsrecom").then(o.bind(null,"d01a"))},uParse:function(){return Promise.all([o.e("common/vendor"),o.e("components/uview-ui/components/u-parse/u-parse")]).then(o.bind(null,"6b34"))},sharePopup:function(){return o.e("components/share-popup/share-popup").then(o.bind(null,"0584"))},pageStatus:function(){return o.e("components/page-status/page-status").then(o.bind(null,"0a8b"))},uEmpty:function(){return o.e("components/uview-ui/components/u-empty/u-empty").then(o.bind(null,"ec9f"))},uBackTop:function(){return o.e("components/uview-ui/components/u-back-top/u-back-top").then(o.bind(null,"2fdf"))}},i=function(){var e=this,t=e.$createElement,o=(e._self._c,{background:"rgba(256,256,256,"+e.percent+")"}),n=Number(e.goodsInfo.min_price),i=e.goodsInfo.service_guarantee.length,s=i?e.__map(e.goodsInfo.service_guarantee,(function(t,o){var n=e.__get_orig(t),i=e.goodsInfo.service_guarantee.length;return{$orig:n,g1:i}})):null,r={image:e.goodsInfo.image,price:e.activityInfo.min_team_price,stock:e.goodsInfo.total_stock,unit:e.goodsInfo.unit_name,limit_type:0==e.activityInfo.max_buy?1:3,limit_value:e.activityInfo.max_buy},a=e.activityTeamList.length,u={image:e.goodsInfo.image,name:e.goodsInfo.name};e._isMounted||(e.e0=function(t){e.showShare=!0},e.e1=function(t){e.showSafeguard=!0},e.e2=function(t){e.showSafeguard=!1},e.e3=function(t){e.showSafeguard=!1},e.e4=function(t){e.showGoodsSpec=!1}),e.$mp.data=Object.assign({},{$root:{a0:o,m0:n,g0:i,l0:s,a1:r,g2:a,a2:u}})},s=[]},"17df":function(e,t,o){"use strict";o.r(t);var n=o("c43c"),i=o.n(n);for(var s in n)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(s);t["default"]=i.a},2414:function(e,t,o){"use strict";var n=o("fb06"),i=o.n(n);i.a},34517:function(e,t,o){"use strict";o.r(t);var n=o("12fe"),i=o("17df");for(var s in i)["default"].indexOf(s)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(s);o("2414");var r=o("828b"),a=Object(r["a"])(i["default"],n["b"],n["c"],!1,null,"40345218",null,!1,n["a"],void 0);t["default"]=a.exports},"96e9":function(e,t,o){"use strict";(function(e,t){var n=o("47a9");o("5c7a");n(o("3240"));var i=n(o("34517"));e.__webpack_require_UNI_MP_PLUGIN__=o,t(i.default)}).call(this,o("3223")["default"],o("df3c")["createPage"])},c43c:function(e,t,o){"use strict";(function(e){var n=o("47a9");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(o("7eb4")),s=n(o("ee10")),r=n(o("7ca3")),a=o("234d"),u=o("2ae4"),c=(o("1169"),o("3cc3")),d=o("8f59"),p=o("4a52"),l=n(o("ace4"));function f(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function g(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?f(Object(o),!0).forEach((function(t){(0,r.default)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):f(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var h={name:"GoodsDetail",mixins:[l.default],data:function(){return{addressId:"",isDischarge:!1,pageStatus:c.PageStatusEnum["LOADING"],pagesData:[],pageErrorMsg:"",scrollTop:0,percent:0,showShare:!1,goodsInfo:{free_shipping_tips:"",service_guarantee:[]},goodsComment:{},team_id:"",goods_id:"",showSafeguard:!1,isGoodsCollect:!1,showGoodsSpec:!1,goodsTeamFoundID:"",goodsSpecOptions:{},specButtonsList:[],specButtonsGroups:{team:{event:"team",text:"立即开团"},join:{event:"join",text:"确认"}}}},computed:g(g({},(0,d.mapGetters)(["isLogin","ServiceConfig","userInfo","appConfig","shareConfig"])),{},{activityInfo:function(){var e;return null!==(e=this.goodsInfo.activity)&&void 0!==e?e:{}},goodsSpecInfo:function(){var e;return null!==(e=this.goodsSpecOptions.spec)&&void 0!==e?e:{}},activityTeamList:function(){var e;return null!==(e=this.goodsInfo.found)&&void 0!==e?e:[]},specValueStr:function(){var e,t,o;return null!==(e=null===(t=this.goodsSpecOptions)||void 0===t||null===(o=t.spec)||void 0===o?void 0:o.spec_value_str)&&void 0!==e?e:""}}),methods:{gotoService:function(){this.$Router.push({path:"/bundle/pages/artificial_service/artificial_service"})},handleSend:function(){var t=this;e.$once("changeAddress",function(){var e=(0,s.default)(i.default.mark((function e(o){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.addressId=o,e.next=3,t.initGoodsDetail();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.$Router.push({path:"/pages/address/address",query:{type:1}})},getPage:function(){var t=this;(0,u.apiGetPage)({type:5,goods_id:this.goodsInfo.id}).then((function(o){var n=o.common,i=o.content;t.pagesData=i,e.setNavigationBarTitle({title:n.title})}))},changeGoodsSpec:function(e){this.goodsSpecOptions=e,console.log(e)},onTeam:function(){this.showGoodsSpec=!0,this.specButtonsList=[this.specButtonsGroups.team]},changeCollect:function(e){var t=this;if(e=e?0:1,!this.isLogin)return this.$Router.push("/pages/login/login");(0,a.apiGoodsCollect)({goods_id:this.goods_id,is_collect:e}).then((function(o){t.isGoodsCollect=e})).catch((function(e){console.log(e)}))},goHome:function(){this.$Router.replaceAll({path:"/pages/index/index"})},goCart:function(){this.$Router.replaceAll({path:"/pages/shop_cart/shop_cart"})},onGoodsOptions:function(){this.showGoodsSpec=!0,this.specButtonsList=[this.specButtonsGroups.team]},handleTeam:function(e){var t=e.spec,o=e.number;if(!this.isLogin)return this.$Router.push("/pages/login/login");this.$Router.push({path:"/pages/goods_order/goods_order",query:{from:c.OrderTypeEnum["TEAM"],address_id:this.addressId,payload:{team_id:this.goodsInfo.activity.id,goods:[{goods_num:o,item_id:t.id}]}}})},handleJoin:function(e){var t=e.spec,o=e.number;if(!this.isLogin)return this.$Router.push("/pages/login/login");this.$Router.push({path:"/pages/goods_order/goods_order",query:{address_id:this.addressId,from:c.OrderTypeEnum["TEAM"],payload:{found_id:this.goodsTeamFoundID,team_id:this.goodsInfo.activity.id,goods:[{goods_num:o,item_id:t.id}]}}})},joinTeamOrder:function(e){this.showGoodsSpec=!0,this.goodsTeamFoundID=e,this.specButtonsList=[this.specButtonsGroups.join]},handleBuy:function(){this.$Router.replace({path:"/pages/goods_detail/goods_detail",query:{id:this.goods_id}})},initGoodsDetail:function(){var e=this;return new Promise((function(t,o){(0,a.apiGoodsTeamDetail)({id:e.team_id,visit:1,address_id:e.addressId}).then((function(t){e.goodsInfo=t,e.goods_id=t.id;var o="[]"!==JSON.stringify(t.goods_comment);return e.goodsComment=o?t.goods_comment:{},e.isGoodsCollect=!!t.is_collect,t})).then((function(e){t(e)})).catch((function(e){o(e)}))}))}},onPageScroll:function(t){var o=e.upx2px(100),n=t.scrollTop;this.percent=n/o>1?1:n/o,this.scrollTop=n},onLoad:function(){var e=this;return(0,s.default)(i.default.mark((function t(){var o;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o=e.$Route.query,o["scene"]?e.team_id=(0,p.strToParams)(o["scene"])["id"]:e.team_id=o.id,t.prev=2,e.team_id){t.next=5;break}throw new Error("该商品不存在");case 5:return t.next=7,e.initGoodsDetail();case 7:return t.next=9,e.getPage();case 9:e.pageStatus=c.PageStatusEnum["NORMAL"],t.next=17;break;case 12:t.prev=12,t.t0=t["catch"](2),console.log(t.t0),e.pageErrorMsg=t.t0,e.pageStatus=c.PageStatusEnum["ERROR"];case 17:case"end":return t.stop()}}),t,null,[[2,12]])})))()},onShareAppMessage:function(){var e=this.goodsInfo,t=e.name,o=e.image;return{title:t,path:"bundle/pages/goods_team_detail/goods_team_detail?id=".concat(this.team_id,"&invite_code=").concat(this.userInfo.code),imageUrl:o}},onHide:function(){this.isDischarge=!0},onShow:function(){this.isDischarge=!1}};t.default=h}).call(this,o("df3c")["default"])},fb06:function(e,t,o){}},[["96e9","common/runtime","common/vendor"]]]);