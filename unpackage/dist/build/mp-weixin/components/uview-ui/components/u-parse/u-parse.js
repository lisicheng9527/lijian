(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uview-ui/components/u-parse/u-parse"],{"6b34":function(t,e,n){"use strict";n.r(e);var i=n("d4f8"),o=n("f108");for(var s in o)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(s);n("735c");var a=n("828b"),r=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=r.exports},"735c":function(t,e,n){"use strict";var i=n("eb9c"),o=n.n(i);o.a},"9a3f":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={},s=t.getFileSystemManager?t.getFileSystemManager():null,a=n("e9cb");var r={name:"parser",data:function(){return{showAm:"",nodes:[]}},components:{trees:function(){n.e("components/uview-ui/components/u-parse/libs/trees").then(function(){return resolve(n("68d8"))}.bind(null,n)).catch(n.oe)}},props:{html:String,autopause:{type:Boolean,default:!0},autoscroll:Boolean,autosetTitle:{type:Boolean,default:!0},compress:Number,loadingImg:String,useCache:Boolean,domain:String,lazyLoad:Boolean,selectable:Boolean,tagStyle:Object,showWithAnimation:Boolean,useAnchor:Boolean},watch:{html:function(t){this.setContent(t)}},created:function(){this.imgList=[],this.imgList.each=function(t){for(var e=0,n=this.length;e<n;e++)this.setItem(e,t(this[e],e,this))},this.imgList.setItem=function(t,e){var n=this;if(void 0!=t&&e){if(0==e.indexOf("http")&&this.includes(e)){for(var o,a=e.split("://")[0],r=a.length;o=e[r];r++){if("/"==o&&"/"!=e[r-1]&&"/"!=e[r+1])break;a+=Math.random()>.5?o.toUpperCase():o}return a+=e.substr(r),this[t]=a}if(this[t]=e,e.includes("data:image")){var c,l=e.match(/data:image\/(\S+?);(\S+?),(.+)/);if(!l)return;c="".concat(i.env.USER_DATA_PATH,"/").concat(Date.now(),".").concat(l[1]),s&&s.writeFile({filePath:c,data:l[3],encoding:l[2],success:function(){return n[t]=c}})}}}},mounted:function(){this.html&&this.setContent(this.html)},beforeDestroy:function(){this.imgList.each((function(e){e&&e.includes(t.env.USER_DATA_PATH)&&s&&s.unlink({filePath:e})})),clearInterval(this._timer)},methods:{setContent:function(e,n){var i,s=this;if(!e)return this.nodes=[];var r,c=new a(e,this);if(this.useCache){var l=function(t){for(var e=t.length,n=5381;e--;)n+=(n<<5)+t.charCodeAt(e);return n}(e);o[l]?i=o[l]:(i=c.parse(),o[l]=i)}else i=c.parse();this.$emit("parse",i),this.nodes=n?this.nodes.concat(i):i,i.length&&i.title&&this.autosetTitle&&t.setNavigationBarTitle({title:i.title}),this.imgList&&(this.imgList.length=0),this.videoContexts=[],this.$nextTick((function(){(function t(e){for(var n=e.length;n--;)e[n].top&&(e[n].controls=[],e[n].init(),t(e[n].$children))})(s.$children),s.$emit("load")})),clearInterval(this._timer),this._timer=setInterval((function(){t.createSelectorQuery().in(s).select("#_top").boundingClientRect().exec((function(t){t&&(s.rect=t[0],s.rect.height==r&&(s.$emit("ready",s.rect),clearInterval(s._timer)),r=s.rect.height)}))}),350),this.showWithAnimation&&!n&&(this.showAm="animation:_show .5s")},getText:function(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.nodes,n="",i=0;t=e[i++];)if("text"==t.type)n+=t.text.replace(/&nbsp;/g," ").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&");else if("br"==t.type)n+="\n";else{var o="p"==t.name||"div"==t.name||"tr"==t.name||"li"==t.name||"h"==t.name[0]&&t.name[1]>"0"&&t.name[1]<"7";o&&n&&"\n"!=n[n.length-1]&&(n+="\n"),t.children&&(n+=this.getText(t.children)),o&&"\n"!=n[n.length-1]?n+="\n":"td"!=t.name&&"th"!=t.name||(n+="\t")}return n},in:function(t){t.page&&t.selector&&t.scrollTop&&(this._in=t)},navigateTo:function(e){var n=this;if(!this.useAnchor)return e.fail&&e.fail("Anchor is disabled");var i=t.createSelectorQuery().in(this._in?this._in.page:this).select((this._in?this._in.selector:"#_top")+(e.id?"".concat(">>>","#").concat(e.id,",").concat(this._in?this._in.selector:"#_top").concat(">>>",".").concat(e.id):"")).boundingClientRect();this._in?i.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect():i.selectViewport().scrollOffset(),i.exec((function(i){if(!i[0])return e.fail&&e.fail("Label not found");var o=i[1].scrollTop+i[0].top-(i[2]?i[2].top:0)+(e.offset||0);n._in?n._in.page[n._in.scrollTop]=o:t.pageScrollTo({scrollTop:o,duration:300}),e.success&&e.success()}))},getVideoContext:function(t){if(!t)return this.videoContexts;for(var e=this.videoContexts.length;e--;)if(this.videoContexts[e].id==t)return this.videoContexts[e]}}};e.default=r}).call(this,n("df3c")["default"],n("3223")["default"])},d4f8:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement,e=(this._self._c,this.nodes.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},o=[]},eb9c:function(t,e,n){},f108:function(t,e,n){"use strict";n.r(e);var i=n("9a3f"),o=n.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(s);e["default"]=o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uview-ui/components/u-parse/u-parse-create-component',
    {
        'components/uview-ui/components/u-parse/u-parse-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("6b34"))
        })
    },
    [['components/uview-ui/components/u-parse/u-parse-create-component']]
]);
