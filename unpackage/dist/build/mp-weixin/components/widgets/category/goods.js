(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/category/goods"],{"41fd":function(t,n,e){"use strict";e.r(n);var o=e("a6a8"),i=e.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);n["default"]=i.a},"56e3":function(t,n,e){},a6a8:function(t,n,e){"use strict";var o=e("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=o(e("07ac")),a=e("234d"),r=o(e("9a24")),c={mixins:[r.default,i.default],props:{goodsStyle:{type:String,default:"rectangle"},scrollHeight:{type:[Number,String],default:0}},data:function(){return{downOption:{auto:!1},upOption:{auto:!1,noMoreSize:1,empty:{icon:"/static/images/empty/shop.png",tip:"暂无商品~",fixed:!0},toTop:{bottom:300}},category:{},goodsList:[]}},methods:{upCallback:function(t){var n=this,e=t.num,o=t.size;(0,a.apiGoodsLists)({page_no:e,page_size:o,category_id:this.category.id}).then((function(e){var o=e.lists,i=(e.page_size,e.count);1==t.num&&(n.goodsList=[]),n.goodsList=n.goodsList.concat(o),n.mescroll.endBySize(o.length,i)})).catch((function(){n.mescroll.endErr()}))},goGoodsDetail:function(t){this.$Router.push({path:"/pages/goods_detail/goods_detail",query:{id:t}})}},computed:{},watch:{selectIndex:{handler:function(t){this.category=this.parent.lists[t]||{},this.goodsList=[],this.mescroll.resetUpScroll()}}},created:function(){}};n.default=c},b7c4:function(t,n,e){"use strict";e.r(n);var o=e("e072"),i=e("41fd");for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("c5ad");var r=e("828b"),c=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"c6054aec",null,!1,o["a"],void 0);n["default"]=c.exports},c5ad:function(t,n,e){"use strict";var o=e("56e3"),i=e.n(o);i.a},e072:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return o}));var o={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"346f"))},wBanner:function(){return e.e("components/widgets/banner/banner").then(e.bind(null,"0c44"))},goodsCard:function(){return e.e("components/goods-card/goods-card").then(e.bind(null,"7b87"))}},i=function(){var t=this.$createElement;this._self._c},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/category/goods-create-component',
    {
        'components/widgets/category/goods-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("b7c4"))
        })
    },
    [['components/widgets/category/goods-create-component']]
]);