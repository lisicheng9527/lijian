(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/userinfo/userinfo"],{"049a":function(t,n,e){"use strict";var o=e("3dc3"),u=e.n(o);u.a},"1ff6":function(t,n,e){"use strict";e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return o}));var o={widgetRoot:function(){return e.e("components/widget-root/widget-root").then(e.bind(null,"205d"))},uSticky:function(){return e.e("components/uview-ui/components/u-sticky/u-sticky").then(e.bind(null,"62d9"))},uNavbar:function(){return e.e("components/uview-ui/components/u-navbar/u-navbar").then(e.bind(null,"6ff9"))},uIcon:function(){return e.e("components/uview-ui/components/u-icon/u-icon").then(e.bind(null,"4032"))}},u=function(){var t=this,n=t.$createElement,o=(t._self._c,t.__get_style([t.infoStyle])),u={background:"rgba(256,256, 256,"+t.percent+")"},r=!t.isLogin&&2==t.content.avatar_type&&t.content.avatar?t.$getImageUri(t.content.avatar):null,c=t.isLogin||2==t.content.avatar_type&&t.content.avatar?null:e("44ff"),a=t.showAssets(1),i=t.showAssets(2),s=t.showAssets(3),f=t.showAssets(4);t.$mp.data=Object.assign({},{$root:{s0:o,a0:u,m0:r,m1:c,m2:a,m3:i,m4:s,m5:f}})},r=[]},2217:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o={props:{content:{type:[Object,Array]},styles:{type:[Object,Array]},percent:{type:Number,default:0},title:{type:String,default:"个人中心"}},data:function(){return{}},methods:{},computed:{showAssets:function(){var t=this;return function(n){return t.content.assets.includes(n)}},infoStyle:function(){var t=this.content,n=t.background_image,e=t.background_type;return n&&1!=e?{"background-image":"url(".concat(this.$getImageUri(this.content.background_image),")")}:{}}}};n.default=o},"3dc3":function(t,n,e){},"6c96":function(t,n,e){"use strict";e.r(n);var o=e("1ff6"),u=e("7c5e");for(var r in u)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(r);e("049a");var c=e("828b"),a=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,"696a20d2",null,!1,o["a"],void 0);n["default"]=a.exports},"7c5e":function(t,n,e){"use strict";e.r(n);var o=e("2217"),u=e.n(o);for(var r in o)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return o[t]}))}(r);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/userinfo/userinfo-create-component',
    {
        'components/widgets/userinfo/userinfo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("6c96"))
        })
    },
    [['components/widgets/userinfo/userinfo-create-component']]
]);