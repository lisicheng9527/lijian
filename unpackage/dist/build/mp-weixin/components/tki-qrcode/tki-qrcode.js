(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/tki-qrcode/tki-qrcode"],{"01c2":function(t,e,n){"use strict";n.r(e);var i=n("2f12"),o=n.n(i);for(var u in i)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(u);e["default"]=o.a},"2f12":function(t,e,n){"use strict";(function(t){var i=n("47a9");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o,u=i(n("3b2d")),a=i(n("8bc8")),s={name:"tki-qrcode",props:{cid:{type:String,default:"tki-qrcode-canvas"},size:{type:Number,default:200},unit:{type:String,default:"upx"},show:{type:Boolean,default:!0},val:{type:String,default:""},background:{type:String,default:"#ffffff"},foreground:{type:String,default:"#000000"},pdground:{type:String,default:"#000000"},icon:{type:String,default:""},iconSize:{type:Number,default:40},lv:{type:Number,default:3},onval:{type:Boolean,default:!1},loadMake:{type:Boolean,default:!1},usingComponents:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},loadingText:{type:String,default:"二维码生成中"}},data:function(){return{result:""}},methods:{_makeCode:function(){console.log("_makeCode");var e=this;this._empty(this.val)?t.showToast({title:"二维码内容不能为空",icon:"none",duration:2e3}):o=new a.default({context:e,canvasId:e.cid,usingComponents:e.usingComponents,showLoading:e.showLoading,loadingText:e.loadingText,text:e.val,size:e.cpSize,background:e.background,foreground:e.foreground,pdground:e.pdground,correctLevel:e.lv,image:e.icon,imageSize:e.iconSize,cbResult:function(t){e._result(t)}})},_clearCode:function(){this._result(""),o.clear()},_saveCode:function(){""!=this.result&&t.saveImageToPhotosAlbum({filePath:this.result,success:function(){t.showToast({title:"二维码保存成功",icon:"success",duration:2e3})}})},_result:function(t){console.log(t,123456),this.result=t,this.$emit("result",t)},_empty:function(t){var e=(0,u.default)(t),n=!1;return"number"==e&&""==String(t)||"undefined"==e?n=!0:"object"==e?"{}"!=JSON.stringify(t)&&"[]"!=JSON.stringify(t)&&null!=t||(n=!0):"string"==e?""!=t&&"undefined"!=t&&"null"!=t&&"{}"!=t&&"[]"!=t||(n=!0):"function"==e&&(n=!1),n}},watch:{size:function(t,e){var n=this;t==e||this._empty(t)||(this.cSize=t,this._empty(this.val)||setTimeout((function(){n._makeCode()}),100))},val:function(t,e){var n=this;this.onval&&(t==e||this._empty(t)||setTimeout((function(){n._makeCode()}),0))}},computed:{cpSize:function(){return"upx"==this.unit?t.upx2px(this.size):this.size}},mounted:function(){var t=this;this.loadMake&&(this._empty(this.val)||setTimeout((function(){t._makeCode()}),0))}};e.default=s}).call(this,n("df3c")["default"])},"96fa":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){}));var i=function(){var t=this.$createElement;this._self._c},o=[]},b5d4:function(t,e,n){},ea7b:function(t,e,n){"use strict";n.r(e);var i=n("96fa"),o=n("01c2");for(var u in o)["default"].indexOf(u)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("f467");var a=n("828b"),s=Object(a["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=s.exports},f467:function(t,e,n){"use strict";var i=n("b5d4"),o=n.n(i);o.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/tki-qrcode/tki-qrcode-create-component',
    {
        'components/tki-qrcode/tki-qrcode-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('df3c')['createComponent'](__webpack_require__("ea7b"))
        })
    },
    [['components/tki-qrcode/tki-qrcode-create-component']]
]);
