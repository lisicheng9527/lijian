(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/widgets/video/video"],{2268:function(t,e,n){},"4c84":function(t,e,n){"use strict";var o=n("2268"),r=n.n(o);r.a},"7f16":function(t,e,n){"use strict";n.r(e);var o=n("ac82"),r=n.n(o);for(var i in o)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(i);e["default"]=r.a},"9b8d":function(t,e,n){"use strict";n.r(e);var o=n("afbe"),r=n("7f16");for(var i in r)["default"].indexOf(i)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(i);n("4c84");var u=n("828b"),a=Object(u["a"])(r["default"],o["b"],o["c"],!1,null,"4999b4b6",null,!1,o["a"],void 0);e["default"]=a.exports},ac82:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=n("4a52"),r={props:{content:{type:[Object,Array]},styles:{type:[Object,Array]}},data:function(){return{videoId:"",showPoster:!0}},methods:{paly:function(){this.videoContext.play()},handlePause:function(){this.showPoster=!0},handlePaly:function(){this.showPoster=!1}},computed:{videoStyle:function(){var t=this.content;return t.poster?{"background-image":"url(".concat(this.$getImageUri(t.poster),")")}:{}},getVideoUrl:function(){var t=this.content,e=t.url,n=t.video_type;return 1==n?this.$getImageUri(e):e}},created:function(){this.videoId=(0,o.getNonDuplicateID)()},mounted:function(){this.videoContext=t.createVideoContext(this.videoId,this)}};e.default=r}).call(this,n("df3c")["default"])},afbe:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return o}));var o={widgetRoot:function(){return n.e("components/widget-root/widget-root").then(n.bind(null,"205d"))}},r=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$px2rpx(t.styles.border_radius_top)),o=t.$px2rpx(t.styles.border_radius_top),r=t.$px2rpx(t.styles.border_radius_bottom),i=t.$px2rpx(t.styles.border_radius_bottom),u=t.showPoster?t.$getImageUri(t.content.poster):null;t.$mp.data=Object.assign({},{$root:{m0:n,m1:o,m2:r,m3:i,m4:u}})},i=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/widgets/video/video-create-component',
    {
        'components/widgets/video/video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("9b8d"))
        })
    },
    [['components/widgets/video/video-create-component']]
]);
