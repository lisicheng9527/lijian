(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uview-ui/components/u-count-down/u-count-down"],{"6c67":function(t,e,o){"use strict";o.r(e);var r=o("98c3"),i=o.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return r[t]}))}(n);e["default"]=i.a},"98c3":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r={name:"u-count-down",props:{timestamp:{type:[Number,String],default:0},autoplay:{type:Boolean,default:!0},separator:{type:String,default:"colon"},separatorSize:{type:[Number,String],default:30},separatorColor:{type:String,default:"#303133"},color:{type:String,default:"#303133"},fontSize:{type:[Number,String],default:30},bgColor:{type:String,default:"#fff"},height:{type:[Number,String],default:"auto"},showBorder:{type:Boolean,default:!1},borderColor:{type:String,default:"#303133"},showSeconds:{type:Boolean,default:!0},showMinutes:{type:Boolean,default:!0},showHours:{type:Boolean,default:!0},showDays:{type:Boolean,default:!0},hideZeroDay:{type:Boolean,default:!1}},watch:{timestamp:function(t,e){this.clearTimer(),this.start()}},data:function(){return{d:"00",h:"00",i:"00",s:"00",timer:null,seconds:0}},computed:{itemStyle:function(){var t={};return this.height&&(t.height=this.height+"rpx",t.width=this.height+"rpx"),this.showBorder&&(t.borderStyle="solid",t.borderColor=this.borderColor,t.borderWidth="1px"),this.bgColor&&(t.backgroundColor=this.bgColor),t},letterStyle:function(){var t={};return this.fontSize&&(t.fontSize=this.fontSize+"rpx"),this.color&&(t.color=this.color),t}},mounted:function(){this.autoplay&&this.timestamp&&this.start()},methods:{start:function(){var t=this;this.clearTimer(),this.timestamp<=0||(this.seconds=Number(this.timestamp),this.formatTime(this.seconds),this.timer=setInterval((function(){if(t.seconds--,t.$emit("change",t.seconds),t.seconds<0)return t.end();t.formatTime(t.seconds)}),1e3))},formatTime:function(t){t<=0&&this.end();var e,o=0,r=0,i=0;o=Math.floor(t/86400),e=Math.floor(t/3600)-24*o;var n=null;n=this.showDays?e:Math.floor(t/3600),r=Math.floor(t/60)-60*e-24*o*60,i=Math.floor(t)-24*o*60*60-60*e*60-60*r,n=n<10?"0"+n:n,r=r<10?"0"+r:r,i=i<10?"0"+i:i,o=o<10?"0"+o:o,this.d=o,this.h=n,this.i=r,this.s=i},end:function(){this.clearTimer(),this.$emit("end",{})},clearTimer:function(){this.timer&&(clearInterval(this.timer),this.timer=null)}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null}};e.default=r},a048:function(t,e,o){"use strict";o.d(e,"b",(function(){return r})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,o=(t._self._c,t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?t.__get_style([t.itemStyle]):null),r=t.showDays&&(t.hideZeroDay||!t.hideZeroDay&&"00"!=t.d)?t.__get_style([t.letterStyle]):null,i=t.showHours?t.__get_style([t.itemStyle]):null,n=t.showMinutes?t.__get_style([t.itemStyle]):null,s=t.showSeconds?t.__get_style([t.itemStyle]):null;t.$mp.data=Object.assign({},{$root:{s0:o,s1:r,s2:i,s3:n,s4:s}})},i=[]},bf5d:function(t,e,o){"use strict";var r=o("d048"),i=o.n(r);i.a},d048:function(t,e,o){},e50f:function(t,e,o){"use strict";o.r(e);var r=o("a048"),i=o("6c67");for(var n in i)["default"].indexOf(n)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(n);o("bf5d");var s=o("828b"),a=Object(s["a"])(i["default"],r["b"],r["c"],!1,null,"1b03f5e7",null,!1,r["a"],void 0);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uview-ui/components/u-count-down/u-count-down-create-component',
    {
        'components/uview-ui/components/u-count-down/u-count-down-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("e50f"))
        })
    },
    [['components/uview-ui/components/u-count-down/u-count-down-create-component']]
]);
