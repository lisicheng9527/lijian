(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/j-video/j-video"],{"0bef":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{poster:{type:[String,Boolean],default:""},url:{type:String,default:""},direction:{type:Number,default:0},width:{type:String,default:"750rpx"},height:{type:String,default:"450rpx"}},data:function(){return{VideoContext:{},state:!1,currentTime:0,duration:0,videoId:""}},computed:{posterUrl:function(){return this.poster?this.poster:this.url+"?x-oss-process=video/snapshot,t_"+parseInt(1e3*this.currentTime)+",f_jpg,w_800,m_fast"}},methods:{fullscreenchange:function(t){this.state=t.detail.fullScreen},timeupdate:function(t){this.duration=t.detail.duration,this.currentTime=t.detail.currentTime}},created:function(){this.videoId=Date.now()+Math.ceil(1e7*Math.random())+""},mounted:function(){this.VideoContext=t.createVideoContext(this.videoId)},watch:{state:function(t,e){var n=this;t?(this.VideoContext.play(),setTimeout((function(){n.VideoContext.requestFullScreen({direction:n.direction})}),10)):this.VideoContext.pause()}}};e.default=n}).call(this,n("df3c")["default"])},"4d09":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.state=!t.state},t.e1=function(e){t.state=0})},o=[]},"55aa":function(t,e,n){"use strict";var i=n("d454"),o=n.n(i);o.a},"7cf8":function(t,e,n){"use strict";n.r(e);var i=n("4d09"),o=n("de26");for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("55aa");var r=n("828b"),a=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"7efe9d94",null,!1,i["a"],void 0);e["default"]=a.exports},d454:function(t,e,n){},de26:function(t,e,n){"use strict";n.r(e);var i=n("0bef"),o=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/j-video/j-video-create-component',
    {
        'components/j-video/j-video-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("7cf8"))
        })
    },
    [['components/j-video/j-video-create-component']]
]);
