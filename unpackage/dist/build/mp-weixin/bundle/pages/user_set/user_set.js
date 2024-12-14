require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/user_set/user_set"],{"05c6":function(e,n,t){"use strict";(function(e){var u=t("47a9");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("7eb4")),i=u(t("ee10")),o=t("d29e"),a=t("4a52"),c={NONE:"",SEX:"sex",NICKNAME:"nickname",AVATAR:"avatar",MOBILE:"mobile"},s={data:function(){return{userInfos:{},showNickName:!1,fieldType:c.NONE,newNickname:"",showPicker:!1,sexList:["男","女"]}},methods:{getPhoneNumber:function(e){var n=this;return(0,i.default)(r.default.mark((function t(){var u,i,a;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(u=e.detail,i=u.code,a=u.errMsg,"getPhoneNumber:ok"===a){t.next=3;break}return t.abrupt("return",n.$toast({title:"绑定失败"}));case 3:(0,o.apiMnpBindMobile)({code:i}).then((function(e){n.getUserInfoFun()}));case 4:case"end":return t.stop()}}),t)})))()},getUserInfoFun:function(){var e=this;(0,o.apiGetUserInfo)().then((function(n){e.userInfos=n}))},goPage:function(e,n){this.$Router.push({path:e,query:{type:n}})},changeNameConfirm:function(e){var n=this;return(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.fieldType=c.NICKNAME,n.newNickname=e.detail.value.nickname,n.newNickname){t.next=4;break}return t.abrupt("return",n.$toast({title:"请输入新的昵称"}));case 4:return t.next=6,n.setUserInfoFun(n.newNickname);case 6:n.showNickName=!1;case 7:case"end":return t.stop()}}),t)})))()},changeSex:function(){this.showPicker=!0,this.fieldType=c.SEX},changeSexConfirm:function(e){this.setUserInfoFun(e[0]+1),this.showPicker=!1},setUserInfoFun:function(e){var n=this;return(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,(0,o.apiSetUserInfo)({field:n.fieldType,value:e});case 2:n.getUserInfoFun();case 3:case"end":return t.stop()}}),t)})))()},onChooseAvatar:function(e){this.fieldType=c.AVATAR,e.detail.avatarUrl&&this.uploadImage(e.detail.avatarUrl)},uploadImage:function(n){var t=this;e.showLoading({title:"正在上传中...",mask:!0}),(0,a.uploadFile)(n).then((function(n){e.hideLoading(),t.setUserInfoFun(n.uri)})).catch((function(){e.hideLoading(),t.$toast({title:"上传失败"})}))}},onShow:function(){this.getUserInfoFun()},onLoad:function(){var n=this;return(0,i.default)(r.default.mark((function t(){return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$on("uAvatarCropper",(function(e){n.uploadImage(e)}));case 1:case"end":return t.stop()}}),t)})))()}};n.default=s}).call(this,t("df3c")["default"])},"22af":function(e,n,t){"use strict";(function(e,n){var u=t("47a9");t("5c7a");u(t("3240"));var r=u(t("5084"));e.__webpack_require_UNI_MP_PLUGIN__=t,n(r.default)}).call(this,t("3223")["default"],t("df3c")["createPage"])},5084:function(e,n,t){"use strict";t.r(n);var u=t("de38"),r=t("b6f4");for(var i in r)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("b9b6");var o=t("828b"),a=Object(o["a"])(r["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],void 0);n["default"]=a.exports},5188:function(e,n,t){e.exports={red_theme:"#FF2C3C",orange_theme:"#f7971e",pink_theme:"#fa444d",gold_theme:"#e0a356",blue_theme:"#2f80ed",green_theme:"#2ec840"}},b6f4:function(e,n,t){"use strict";t.r(n);var u=t("05c6"),r=t.n(u);for(var i in u)["default"].indexOf(i)<0&&function(e){t.d(n,e,(function(){return u[e]}))}(i);n["default"]=r.a},b9b6:function(e,n,t){"use strict";var u=t("5188"),r=t.n(u);r.a},de38:function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return u}));var u={uIcon:function(){return t.e("components/uview-ui/components/u-icon/u-icon").then(t.bind(null,"4032"))},uPopup:function(){return t.e("components/uview-ui/components/u-popup/u-popup").then(t.bind(null,"47bf"))},uFormItem:function(){return Promise.all([t.e("common/vendor"),t.e("components/uview-ui/components/u-form-item/u-form-item")]).then(t.bind(null,"c395"))},uPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/uview-ui/components/u-picker/u-picker")]).then(t.bind(null,"616c"))}},r=function(){var e=this,n=e.$createElement;e._self._c;e._isMounted||(e.e0=function(n){e.showNickName=!0,e.newNickname=e.userInfos.nickname})},i=[]}},[["22af","common/runtime","common/vendor"]]]);