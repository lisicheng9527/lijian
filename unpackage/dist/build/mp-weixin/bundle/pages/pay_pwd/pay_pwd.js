require('../../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["bundle/pages/pay_pwd/pay_pwd"],{"2d92":function(t,e,i){"use strict";var n=i("9a56"),o=i.n(n);o.a},3199:function(t,e,i){"use strict";(function(t,e){var n=i("47a9");i("5c7a");n(i("3240"));var o=n(i("b384"));t.__webpack_require_UNI_MP_PLUGIN__=i,e(o.default)}).call(this,i("3223")["default"],i("df3c")["createPage"])},9875:function(t,e,i){"use strict";i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uField:function(){return i.e("components/uview-ui/components/u-field/u-field").then(i.bind(null,"908f"))},uButton:function(){return i.e("components/uview-ui/components/u-button/u-button").then(i.bind(null,"684e"))}},o=function(){var t=this,e=t.$createElement,i=(t._self._c,3==t.type?{color:t.themeColor}:null),n=4==t.type?{color:t.themeColor}:null,o=5==t.type?{color:t.themeColor}:null,a=8==t.type?{color:t.themeColor}:null;t._isMounted||(t.e0=function(e){t.type=3}),t.$mp.data=Object.assign({},{$root:{a0:i,a1:n,a2:o,a3:a}})},a=[]},"9a56":function(t,e,i){t.exports={red_theme:"#FF2C3C",orange_theme:"#f7971e",pink_theme:"#fa444d",gold_theme:"#e0a356",blue_theme:"#2f80ed",green_theme:"#2ec840"}},b384:function(t,e,i){"use strict";i.r(e);var n=i("9875"),o=i("f49c");for(var a in o)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("2d92");var s=i("828b"),r=Object(s["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=r.exports},f49c:function(t,e,i){"use strict";i.r(e);var n=i("f4a1"),o=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},f4a1:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i("d29e"),o={data:function(){return{type:3,flag:!1,codeText:"获取验证码",code:"",original:"",password:"",confirm_password:"",newMobile:""}},computed:{mobile:function(){if(this.userInfo.mobile)return"+86 "+this.userInfo.mobile.replace(/(\d{3})\d{4}(\d{4})/,"$1****$2")}},methods:{getCode:function(){var t=this;if(!1!==this.flag)return!1;var e=60;this.flag=!0;var i=this.userInfo.mobile;if(3==this.type)(0,n.apiresetPayPasswordCaptcha)({mobile:i}).then((function(i){var n=setInterval((function(){e>=1?t.codeText=(e-=1)+"":(t.flag=!1,t.codeText="获取验证码",clearTimeout(n))}),1e3)})).catch((function(e){t.flag=!1}));else if(4==this.type||5==this.type){var o=this.newMobile;(0,n.apiBindMobileCaptcha)({mobile:o}).then((function(i){var n=setInterval((function(){e>=1?t.codeText=(e-=1)+"":(t.flag=!1,t.codeText="获取验证码",clearTimeout(n))}),1e3)})).catch((function(e){t.flag=!1}))}else 8==this.type&&(0,n.apiResetPasswordCaptcha)({mobile:i}).then((function(i){var n=setInterval((function(){e>=1?t.codeText=(e-=1)+"":(t.flag=!1,t.codeText="获取验证码",clearTimeout(n))}),1e3)})).catch((function(e){t.flag=!1}))},confirm:function(){if(1==this.type||2==this.type||3==this.type||6==this.type||7==this.type){if(""==this.password)return this.$toast({title:"请输入密码"});if(this.password!==this.confirm_password)return this.$toast({title:"两次输入的密码不一致"})}if((3==this.type||8==this.type||4==this.type||5==this.type)&&""==this.code)return this.$toast({title:"请输入验证码"});if((2==this.type||7==this.type)&&""==this.original)return this.$toast({title:"请输入原密码"});if(1==this.type)(0,n.setPassword)({pay_password:this.password}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)}));else if(2==this.type)(0,n.setPassword)({origin_pay_password:this.original,pay_password:this.password}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)}));else if(3==this.type)(0,n.apiresetPayPassword)({code:this.code,mobile:this.userInfo.mobile,pay_password:this.password}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)}));else if(4==this.type||5==this.type){var e=this.newMobile;(0,n.apiBindMobile)({code:this.code,mobile:e}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)}))}else 6==this.type?(0,n.apiSetPassword)({password:this.password}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)})):7==this.type?(0,n.apiChangePassword)({old_password:this.original,password:this.password}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)})):8==this.type&&(0,n.apiResetPassword)({code:this.code,mobile:this.userInfo.mobile,password:this.password}).then((function(e){setTimeout((function(){t.navigateBack(1)}),1e3)}))}},onLoad:function(){var e=this.$Route.query;this.type=e.type,1==this.type?t.setNavigationBarTitle({title:"设置支付密码"}):2==this.type?t.setNavigationBarTitle({title:"修改支付密码"}):3==this.type?t.setNavigationBarTitle({title:"忘记支付密码"}):4==this.type?t.setNavigationBarTitle({title:"绑定手机号"}):5==this.type?t.setNavigationBarTitle({title:"更换手机号"}):6==this.type?t.setNavigationBarTitle({title:"设置登录密码"}):7==this.type?t.setNavigationBarTitle({title:"修改登录密码"}):8==this.type&&t.setNavigationBarTitle({title:"重置登录密码"})}};e.default=o}).call(this,i("df3c")["default"])}},[["3199","common/runtime","common/vendor"]]]);