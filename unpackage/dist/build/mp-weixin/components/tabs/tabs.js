(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tabs/tabs"],{"19cb":function(t,e,n){},"7f0b":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uSticky:function(){return n.e("components/uview-ui/components/u-sticky/u-sticky").then(n.bind(null,"62d9"))},uBadge:function(){return n.e("components/uview-ui/components/u-badge/u-badge").then(n.bind(null,"9eed"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.__map(t.list,(function(e,n){var i=t.__get_orig(e),r=t.__get_style([t.tabItemStyle(n)]);return{$orig:i,s0:r}}))),i=t.showBar?t.__get_style([t.tabBarStyle]):null;t.$mp.data=Object.assign({},{$root:{l0:n,s1:i}})},a=[]},a867:function(t,e,n){"use strict";var i=n("19cb"),r=n.n(i);r.a},b036:function(t,e,n){"use strict";n.r(e);var i=n("7f0b"),r=n("bf49");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("a867");var o=n("828b"),u=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"f4a2e548",null,!1,i["a"],void 0);e["default"]=u.exports},bf49:function(t,e,n){"use strict";n.r(e);var i=n("c032"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},c032:function(t,e,n){"use strict";(function(t){var i=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("7eb4")),a=i(n("ee10")),o=n("4a52"),u={name:"tabs",props:{isScroll:{type:Boolean,default:!0},current:{type:[Number,String],default:0},height:{type:[String,Number],default:80},fontSize:{type:[String,Number],default:28},duration:{type:[String,Number],default:.3},activeColor:{type:String,default:"#FF2C3C"},inactiveColor:{type:String,default:"#333"},barWidth:{type:[String,Number],default:40},barHeight:{type:[String,Number],default:4},gutter:{type:[String,Number],default:30},bgColor:{type:String,default:"#ffffff"},name:{type:String,default:"name"},count:{type:String,default:"count"},offset:{type:Array,default:function(){return[5,20]}},bold:{type:Boolean,default:!0},activeItemStyle:{type:Object,default:function(){return{}}},showBar:{type:Boolean,default:!0},barStyle:{type:Object,default:function(){return{}}},itemWidth:{type:[Number,String],default:"auto"},isFixed:{type:Boolean,default:!1},top:{type:[Number,String],default:0},stickyBgColor:{type:String,default:"#ffffff"}},provide:function(){return{tabs:this}},data:function(){return{list:[],scrollLeft:0,tabQueryInfo:[],componentWidth:0,scrollBarLeft:0,parentLeft:0,id:"cu-tab",currentIndex:this.current,barFirstTimeMove:!0}},watch:{list:function(t,e){var n=this;this.barFirstTimeMove||t.length===e.length||(this.currentIndex=0),this.$nextTick((function(){n.init()}))},current:{immediate:!0,handler:function(t,e){var n=this;this.$nextTick((function(){n.currentIndex=t,n.scrollByIndex()}))}}},computed:{tabBarStyle:function(){var t={width:this.barWidth+"rpx",transform:"translate(".concat(this.scrollBarLeft,"px, -100%)"),"transition-duration":"".concat(this.barFirstTimeMove?0:this.duration,"s"),"background-color":this.activeColor,height:this.barHeight+"rpx",opacity:this.barFirstTimeMove?0:1,"border-radius":"".concat(this.barHeight/2,"px")};return Object.assign(t,this.barStyle),t},tabItemStyle:function(){var t=this;return function(e){var n={height:t.height+"rpx","line-height":t.height+"rpx","font-size":t.fontSize+"rpx",padding:t.isScroll?"0 ".concat(t.gutter,"rpx"):"",flex:t.isScroll?"auto":"1",width:"".concat(t.itemWidth,"rpx")};return e==t.currentIndex&&t.bold&&(n.fontWeight="bold"),e==t.currentIndex?(n.color=t.activeColor,n=Object.assign(n,t.activeItemStyle)):n.color=t.inactiveColor,n}}},methods:{updateTabs:function(){console.log(this.list),this.list=this.childrens.map((function(t){var e=t.name,n=t.dot,i=t.active,r=t.inited,a=t.updateRender;return{name:e,dot:n,active:i,inited:r,updateRender:a}})),this.$nextTick((function(){this.init()}))},init:function(){var t=this;return(0,a.default)(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,(0,o.getRect)("#"+t.id,!1,t);case 2:n=e.sent,t.parentLeft=n.left,t.componentWidth=n.width,t.getTabRect();case 6:case"end":return e.stop()}}),e)})))()},clickTab:function(t){var e=this;t!=this.currentIndex&&(this.$nextTick((function(){e.currentIndex=t,e.scrollByIndex()})),this.$emit("change",t))},getTabRect:function(){for(var e=t.createSelectorQuery().in(this),n=0;n<this.list.length;n++)e.select("#tab-item-".concat(n)).fields({size:!0,rect:!0});e.exec(function(t){this.tabQueryInfo=t,this.scrollByIndex()}.bind(this))},scrollByIndex:function(){var e=this;console.log(this.currentIndex);var n=this.tabQueryInfo[this.currentIndex];if(n){var i=n.width,r=n.left-this.parentLeft,a=r-(this.componentWidth-i)/2;this.scrollLeft=a<0?0:a;var o=n.left+n.width/2-this.parentLeft;this.scrollBarLeft=o-t.upx2px(this.barWidth)/2,1==this.barFirstTimeMove&&setTimeout((function(){e.barFirstTimeMove=!1}),100),this.childrens.forEach((function(t,n){var i=n===e.currentIndex;i===t.active&&t.inited||t.updateRender(i,e)}))}}},created:function(){this.childrens=[]},mounted:function(){this.updateTabs()}};e.default=u}).call(this,n("df3c")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tabs/tabs-create-component',
    {
        'components/tabs/tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("b036"))
        })
    },
    [['components/tabs/tabs-create-component']]
]);
