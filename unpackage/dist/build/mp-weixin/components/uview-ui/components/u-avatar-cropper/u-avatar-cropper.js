(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uview-ui/components/u-avatar-cropper/u-avatar-cropper"],{"0e95":function(t,e,i){"use strict";(function(t,e){var r=i("47a9");i("5c7a");r(i("3240"));var o=r(i("b8fe"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(o.default)}).call(this,i("3223")["default"],i("df3c")["createPage"])},"155b":function(t,e,i){"use strict";i.r(e);var r=i("daea"),o=i.n(r);for(var n in r)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(n);e["default"]=o.a},2007:function(t,e,i){"use strict";var r=i("5336"),o=i.n(r);o.a},5336:function(t,e,i){},6068:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){}));var r=function(){var t=this.$createElement;this._self._c},o=[]},b8fe:function(t,e,i){"use strict";i.r(e);var r=i("6068"),o=i("155b");for(var n in o)["default"].indexOf(n)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(n);i("2007");var c=i("828b"),h=Object(c["a"])(o["default"],r["b"],r["c"],!1,null,"b19787d0",null,!1,r["a"],void 0);e["default"]=h.exports},daea:function(t,e,i){"use strict";(function(t){var r=i("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=r(i("a467")),n={props:{boundStyle:{type:Object,default:function(){return{lineWidth:4,borderColor:"rgb(245, 245, 245)",mask:"rgba(0, 0, 0, 0.35)"}}}},data:function(){return{bottomNavHeight:50,originWidth:200,width:0,height:0,cropperOpt:{id:"cropper",targetId:"targetCropper",pixelRatio:1,width:0,height:0,scale:2.5,zoom:8,cut:{x:(this.width-this.originWidth)/2,y:(this.height-this.originWidth)/2,width:this.originWidth,height:this.originWidth},boundStyle:{lineWidth:t.upx2px(this.boundStyle.lineWidth),mask:this.boundStyle.mask,color:this.boundStyle.borderColor}},destWidth:200,rectWidth:200,fileType:"jpg",src:""}},onLoad:function(e){var i=this,r=t.getSystemInfoSync();if(this.width=r.windowWidth,this.height=r.windowHeight-this.bottomNavHeight,this.cropperOpt.width=this.width,this.cropperOpt.height=this.height,this.cropperOpt.pixelRatio=r.pixelRatio,e.destWidth&&(this.destWidth=e.destWidth),e.rectWidth){var n=Number(e.rectWidth);this.cropperOpt.cut={x:(this.width-n)/2,y:(this.height-n)/2,width:n,height:n}}this.rectWidth=e.rectWidth,e.fileType&&(this.fileType=e.fileType),this.cropper=new o.default(this.cropperOpt).on("ready",(function(t){})).on("beforeImageLoad",(function(t){})).on("imageLoad",(function(t){})).on("beforeDraw",(function(t,e){})),t.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#000000"}),t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(t){i.src=t.tempFilePaths[0],i.cropper.pushOrign(i.src)}})},methods:{touchStart:function(t){this.cropper.touchStart(t)},touchMove:function(t){this.cropper.touchMove(t)},touchEnd:function(t){this.cropper.touchEnd(t)},getCropperImage:function(){var e=this,i=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!this.src)return this.$u.toast("请先选择图片再裁剪");var r={destHeight:Number(this.destWidth),destWidth:Number(this.destWidth),fileType:this.fileType};this.cropper.getCropperImage(r,(function(r,o){o?t.showModal({title:"温馨提示",content:o.message}):i?t.previewImage({current:"",urls:[r]}):(t.$emit("uAvatarCropper",r),e.$u.route({type:"back"}))}))},uploadTap:function(){var e=this,i=this;t.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){i.src=t.tempFilePaths[0],i.cropper.pushOrign(e.src)}})}}};e.default=n}).call(this,i("df3c")["default"])}},[["0e95","common/runtime","common/vendor"]]]);