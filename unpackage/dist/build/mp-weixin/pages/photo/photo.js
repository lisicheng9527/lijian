(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/photo/photo"],{"26e1":function(e,t,i){"use strict";i.r(t);var n=i("c6c2"),o=i("a42c");for(var a in o)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(a);i("2f5b");var c=i("828b"),r=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"9d1e96f0",null,!1,n["a"],void 0);t["default"]=r.exports},"2f5b":function(e,t,i){"use strict";var n=i("78e6"),o=i.n(n);o.a},"78e6":function(e,t,i){},a42c:function(e,t,i){"use strict";i.r(t);var n=i("e1b1"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=o.a},bc61:function(e,t,i){"use strict";(function(e,t){var n=i("47a9");i("1ae9");n(i("3240"));var o=n(i("26e1"));e.__webpack_require_UNI_MP_PLUGIN__=i,t(o.default)}).call(this,i("3223")["default"],i("df3c")["createPage"])},c6c2:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){}));var n=function(){var e=this.$createElement,t=(this._self._c,this.imgList.length),i=t?this.imgList.length:null;this.$mp.data=Object.assign({},{$root:{g0:t,g1:i}})},o=[]},e1b1:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i("2dd9"),o={data:function(){return{formName:"",temporaryUrl:"",imgList:[],fileName:""}},methods:{reset:function(){var e=this;this.$nextTick((function(){e.temporaryUrl="",e.$forceUpdate()}))},chooseVideo:function(){var t=this;e.chooseImage({success:function(e){var i=e.tempFiles[0];if(i){var o=e.tempFilePaths[0];console.log(o),t.temporaryUrl=o;var a=o.split(".")[1],c=a[0].split("/");t.fileName=c[c.length-1],(0,n.getPresignedUpload)({type:"image",filename:t.fileName,filetype:a}).then((function(e){t.uploadFile(e)}))}}})},uploadFile:function(t){var i=this,o={key:t.cosKey,policy:t.policy,name:"x-cos-return-body",success_action_status:200,"q-sign-algorithm":t.qSignAlgorithm,"q-ak":t.qAk,"q-key-time":t.qKeyTime,"q-signature":t.qSignature};t.securityToken&&(o["x-cos-security-token"]=t.securityToken),e.uploadFile({url:"https://"+t.cosHost,filePath:this.temporaryUrl,name:"file",formData:o,success:function(e){if(![200,204].includes(e.statusCode))return callback&&callback(e);(0,n.presignedUpload)({name:i.fileName,type:"image",fileuri:t.cosKey}).then((function(e){e.url&&i.imgList.push({uri:e.uri,url:e.url,pos:i.imgList.length+1})}))},error:function(e){console.log(e)}})},nextStep:function(){var t=this,i=e.getStorageSync("formName"),o=e.getStorageSync("fileUrl");console.log(i),console.log(o),e.showLoading({title:"文件上传中...",mask:!0}),(0,n.createModelFile)({model_name:i,video_url:o,image_urls:this.imgList}).then((function(i){e.hideLoading(),i.model_id&&(e.showToast({title:"模型创建成功",icon:"none"}),setTimeout((function(){t.$Router.replace({path:"/bundle/pages/model_list/model_list"})}),1e3))}))}}};t.default=o}).call(this,i("df3c")["default"])}},[["bc61","common/runtime","common/vendor"]]]);