(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uview-ui/components/u-row-notice/u-row-notice"],{1546:function(t,n,e){},4533:function(t,n,e){"use strict";e.r(n);var i=e("a4b2"),o=e.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},8031:function(t,n,e){"use strict";e.r(n);var i=e("faea"),o=e("4533");for(var a in o)["default"].indexOf(a)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("a514");var u=e("828b"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"b52062a4",null,!1,i["a"],void 0);n["default"]=r.exports},a4b2:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={props:{list:{type:Array,default:function(){return[]}},type:{type:String,default:"warning"},volumeIcon:{type:Boolean,default:!0},moreIcon:{type:Boolean,default:!1},closeIcon:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},color:{type:String,default:""},bgColor:{type:String,default:""},show:{type:Boolean,default:!0},fontSize:{type:[Number,String],default:26},volumeSize:{type:[Number,String],default:34},speed:{type:[Number,String],default:160},playState:{type:String,default:"play"},padding:{type:[Number,String],default:"18rpx 24rpx"}},data:function(){return{textWidth:0,boxWidth:0,animationDuration:"10s",animationPlayState:"paused",showText:""}},watch:{list:{immediate:!0,handler:function(t){var n=this;this.showText=t.join("，"),this.$nextTick((function(){n.initSize()}))}},playState:function(t){this.animationPlayState="play"==t?"running":"paused"},speed:function(t){this.initSize()}},computed:{computeColor:function(){return this.color?this.color:"none"==this.type?"#606266":this.type},textStyle:function(){var t={};return this.color?t.color=this.color:"none"==this.type&&(t.color="#606266"),t.fontSize=this.fontSize+"rpx",t},computeBgColor:function(){return this.bgColor?this.bgColor:"none"==this.type?"transparent":void 0}},mounted:function(){var t=this;this.$nextTick((function(){t.initSize()}))},methods:{initSize:function(){var n=this,e=[],i=new Promise((function(e,i){t.createSelectorQuery().in(n).select("#u-notice-content").boundingClientRect().exec((function(t){n.textWidth=t[0].width,e()}))}));e.push(i),Promise.all(e).then((function(){n.animationDuration="".concat(n.textWidth/t.upx2px(n.speed),"s"),n.animationPlayState="paused",setTimeout((function(){"play"==n.playState&&n.autoplay&&(n.animationPlayState="running")}),10)}))},click:function(t){this.$emit("click")},close:function(){this.$emit("close")},getMore:function(){this.$emit("getMore")}}};n.default=e}).call(this,e("df3c")["default"])},a514:function(t,n,e){"use strict";var i=e("1546"),o=e.n(i);o.a},faea:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var i={uIcon:function(){return e.e("components/uview-ui/components/u-icon/u-icon").then(e.bind(null,"4032"))}},o=function(){var t=this.$createElement,n=(this._self._c,this.show?this.__get_style([this.textStyle]):null);this.$mp.data=Object.assign({},{$root:{s0:n}})},a=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uview-ui/components/u-row-notice/u-row-notice-create-component',
    {
        'components/uview-ui/components/u-row-notice/u-row-notice-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("8031"))
        })
    },
    [['components/uview-ui/components/u-row-notice/u-row-notice-create-component']]
]);
