(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/mnplive/mnplive"],{3455:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{content:{type:[Object,Array]},styles:{type:[Object,Array]}},data:function(){return{}},methods:{navigateTo:function(e){var n=[e.room_id];t.navigateTo({url:"plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(n)})}},computed:{headerStyle:function(){var t=this.content,e=t.header_bg_type,n=t.header_bg_image,r=this.styles.header_bg_color;return 1==e?{"background-color":r}:{"background-image":"url(".concat(this.$getImageUri(n),")")}}}};e.default=n}).call(this,n("3223")["default"])},"3d48":function(t,e,n){},"6b56":function(t,e,n){"use strict";n.r(e);var r=n("3455"),o=n.n(r);for(var u in r)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},"9f92":function(t,e,n){"use strict";var r=n("3d48"),o=n.n(r);o.a},a5d8:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var r={widgetRoot:function(){return n.e("components/widget-root/widget-root").then(n.bind(null,"205d"))},uIcon:function(){return n.e("components/uview-ui/components/u-icon/u-icon").then(n.bind(null,"4032"))},uImage:function(){return n.e("components/uview-ui/components/u-image/u-image").then(n.bind(null,"0cd9"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.content.data.length),r=n?t.$px2rpx(t.styles.border_radius_top):null,o=n?t.$px2rpx(t.styles.border_radius_top):null,u=n?t.$px2rpx(t.styles.border_radius_bottom):null,i=n?t.$px2rpx(t.styles.border_radius_bottom):null,a=n?t.__get_style([t.headerStyle]):null,l=n&&t.content.header_icon_image?t.$getImageUri(t.content.header_icon_image):null,c=n?t.$px2rpx(t.styles.header_title_size):null,d=n?t.$px2rpx(t.styles.margin/2):null,s=n?t.__map(t.content.data,(function(e,n){var r=t.__get_orig(e),o=t.$px2rpx(t.styles.margin/2),u=t.$px2rpx(t.styles.goods_border_radius);return{$orig:r,m7:o,m8:u}})):null;t.$mp.data=Object.assign({},{$root:{g0:n,m0:r,m1:o,m2:u,m3:i,s0:a,m4:l,m5:c,m6:d,l0:s}})},u=[]},c6c9:function(t,e,n){"use strict";n.r(e);var r=n("a5d8"),o=n("6b56");for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("9f92");var i=n("828b"),a=Object(i["a"])(o["default"],r["b"],r["c"],!1,null,"288c845b",null,!1,r["a"],void 0);e["default"]=a.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/mnplive/mnplive-create-component',
    {
        'components/widgets/mnplive/mnplive-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("c6c9"))
        })
    },
    [['components/widgets/mnplive/mnplive-create-component']]
]);