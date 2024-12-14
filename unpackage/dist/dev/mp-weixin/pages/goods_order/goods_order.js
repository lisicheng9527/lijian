(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/goods_order/goods_order"],{

/***/ 178:
/*!********************************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/main.js?{"page":"pages%2Fgoods_order%2Fgoods_order"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _goods_order = _interopRequireDefault(__webpack_require__(/*! ./pages/goods_order/goods_order.vue */ 179));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_goods_order.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 179:
/*!*************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./goods_order.vue?vue&type=template&id=db6a795c&scoped=true& */ 180);
/* harmony import */ var _goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./goods_order.vue?vue&type=script&lang=js& */ 182);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./goods_order.vue?vue&type=style&index=0&id=db6a795c&lang=scss&scoped=true& */ 187);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 61);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "db6a795c",
  null,
  false,
  _goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/goods_order/goods_order.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 180:
/*!********************************************************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue?vue&type=template&id=db6a795c&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_order.vue?vue&type=template&id=db6a795c&scoped=true& */ 181);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_template_id_db6a795c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 181:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue?vue&type=template&id=db6a795c&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uTabs: function () {
      return __webpack_require__.e(/*! import() | components/uview-ui/components/u-tabs/u-tabs */ "components/uview-ui/components/u-tabs/u-tabs").then(__webpack_require__.bind(null, /*! @/components/uview-ui/components/u-tabs/u-tabs.vue */ 1317))
    },
    addressCard: function () {
      return __webpack_require__.e(/*! import() | components/address-card/address-card */ "components/address-card/address-card").then(__webpack_require__.bind(null, /*! @/components/address-card/address-card.vue */ 1324))
    },
    uInput: function () {
      return Promise.all(/*! import() | components/uview-ui/components/u-input/u-input */[__webpack_require__.e("common/vendor"), __webpack_require__.e("components/uview-ui/components/u-input/u-input")]).then(__webpack_require__.bind(null, /*! @/components/uview-ui/components/u-input/u-input.vue */ 1196))
    },
    goodsCard: function () {
      return __webpack_require__.e(/*! import() | components/goods-card/goods-card */ "components/goods-card/goods-card").then(__webpack_require__.bind(null, /*! @/components/goods-card/goods-card.vue */ 1182))
    },
    price: function () {
      return __webpack_require__.e(/*! import() | components/price/price */ "components/price/price").then(__webpack_require__.bind(null, /*! @/components/price/price.vue */ 1083))
    },
    uIcon: function () {
      return __webpack_require__.e(/*! import() | components/uview-ui/components/u-icon/u-icon */ "components/uview-ui/components/u-icon/u-icon").then(__webpack_require__.bind(null, /*! @/components/uview-ui/components/u-icon/u-icon.vue */ 855))
    },
    uPopup: function () {
      return __webpack_require__.e(/*! import() | components/uview-ui/components/u-popup/u-popup */ "components/uview-ui/components/u-popup/u-popup").then(__webpack_require__.bind(null, /*! @/components/uview-ui/components/u-popup/u-popup.vue */ 1189))
    },
    couponCard: function () {
      return __webpack_require__.e(/*! import() | components/coupon-card/coupon-card */ "components/coupon-card/coupon-card").then(__webpack_require__.bind(null, /*! @/components/coupon-card/coupon-card.vue */ 1258))
    },
    uEmpty: function () {
      return __webpack_require__.e(/*! import() | components/uview-ui/components/u-empty/u-empty */ "components/uview-ui/components/u-empty/u-empty").then(__webpack_require__.bind(null, /*! @/components/uview-ui/components/u-empty/u-empty.vue */ 1265))
    },
    pageStatus: function () {
      return __webpack_require__.e(/*! import() | components/page-status/page-status */ "components/page-status/page-status").then(__webpack_require__.bind(null, /*! @/components/page-status/page-status.vue */ 1310))
    },
    uModal: function () {
      return __webpack_require__.e(/*! import() | components/uview-ui/components/u-modal/u-modal */ "components/uview-ui/components/u-modal/u-modal").then(__webpack_require__.bind(null, /*! @/components/uview-ui/components/u-modal/u-modal.vue */ 1104))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var g0 = _vm.orderInfo.is_address ? _vm.deliveryTypeTabsList.length : null
  var g1 = _vm.orderInfo.is_address ? JSON.stringify(_vm.addressInfo) : null
  var l0 = _vm.__map(_vm.orderGoodsList, function (item, __i0__) {
    var $orig = _vm.__get_orig(item)
    var a0 = {
      "border-raius": 0,
      height: "220rpx",
    }
    return {
      $orig: $orig,
      a0: a0,
    }
  })
  var g2 = _vm.disableGoods.length
  var g3 = g2 ? _vm.disableGoods.length : null
  var g4 = _vm.couponsInfo.can_use.length
  var l1 = _vm.__map(_vm.couponsInfo.not_can_use, function (item, __i2__) {
    var $orig = _vm.__get_orig(item)
    var a1 = {
      title: item.fail_use_tips,
      content: item.fail_use_detail,
    }
    return {
      $orig: $orig,
      a1: a1,
    }
  })
  var g5 = _vm.couponsInfo.not_can_use.length
  var l2 = _vm.__map(_vm.disableGoods, function (item, __i3__) {
    var $orig = _vm.__get_orig(item)
    var a2 = {
      "border-raius": 0,
      height: "220rpx",
    }
    return {
      $orig: $orig,
      a2: a2,
    }
  })
  if (!_vm._isMounted) {
    _vm.e0 = function ($event) {
      _vm.showCoupons = true
    }
    _vm.e1 = function ($event) {
      _vm.showDisabled = true
    }
    _vm.e2 = function ($event) {
      _vm.showCoupons = false
    }
    _vm.e3 = function (index) {
      return (_vm.couponTabsIndex = index)
    }
    _vm.e4 = function ($event) {
      _vm.showDisabled = false
    }
    _vm.e5 = function ($event) {
      _vm.showDisabled = false
    }
    _vm.e6 = function ($event) {
      _vm.showDisabled = false
    }
  }
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        g0: g0,
        g1: g1,
        l0: l0,
        g2: g2,
        g3: g3,
        g4: g4,
        l1: l1,
        g5: g5,
        l2: l2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 182:
/*!**************************************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_order.vue?vue&type=script&lang=js& */ 183);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 183:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _order = __webpack_require__(/*! @/api/order */ 184);
var _activity = __webpack_require__(/*! @/api/activity */ 185);
var _goods = __webpack_require__(/*! @/api/goods */ 112);
var _bargain = __webpack_require__(/*! @/api/bargain */ 186);
var _store = __webpack_require__(/*! @/api/store */ 56);
var _app = __webpack_require__(/*! @/api/app */ 43);
var _tools = __webpack_require__(/*! @/utils/tools */ 50);
var _enum = __webpack_require__(/*! @/utils/enum */ 52);
var _process = __webpack_require__(/*! process */ 37);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var _default = {
  name: 'GoodsOrder',
  data: function data() {
    return {
      from: '',
      // 来源页面: 0-商品；1-拼团；2-秒杀；3-砍价。
      // 页面状态
      pageStatus: _enum.PageStatusEnum['LOADING'],
      pageErrorMsg: '',
      // 页面异常信息

      // 配送方式Tabs列表
      deliveryTypeTabsList: [{
        id: 1,
        name: '快递发货',
        sign: 'express'
      }, {
        id: 2,
        name: '上门自提',
        sign: 'store'
      }],
      deliveryTypeTabsIndex: 0,
      // 配送方式Tabs索引

      pageQueryPayload: {},
      // 承载页面参数
      // 订单表单
      orderFrom: {
        delivery_type: '',
        // 配送方式: 1-快递发货; 2-门店自提;
        user_remark: '',
        // 用户备注
        coupon_list_id: '',
        // 优惠券ID
        address_id: '',
        // 地址ID 【快递发货】
        selffetch_shop_id: '',
        // 自提门店ID 【门店自提】
        contact: '',
        // 提货人 【门店自提】
        mobile: '' // 联系电话 【门店自提】
      },

      /** S 优惠券 **/
      showCoupons: false,
      // 优惠券: 显示|隐藏【弹窗】
      // 优惠券Tabs列表
      couponTabsList: [{
        sign: 'usable',
        name: '可使用优惠券'
      }, {
        sign: 'disabled',
        name: '不可使用优惠券'
      }],
      couponTabsIndex: 0,
      // 优惠券Tabs索引
      // 优惠券信息
      couponsInfo: {
        can_use: [],
        not_can_use: []
      },
      couponsActive: {},
      // 当前使用优惠券
      /** E 优惠券 **/

      addressInfo: {},
      // 地址信息
      selffetchStoreInfo: {},
      // 自提门店信息
      orderInfo: {},
      // 订单信息
      orderGoodsList: [],
      // 订单商品
      disableGoods: [],
      //不可下单商品
      showDisabled: false,
      //不可下单商品
      goodsLength: 0,
      showModal: false //不可下单弹框
    };
  },

  computed: {
    // 过滤订单表单冗余参数
    orderFormParams: function orderFormParams() {
      var from = _objectSpread({}, this.orderFrom);
      // 根据物流方式过滤
      switch (from.delivery_type) {
        case 1:
          delete from.selffetch_shop_id;
          delete from.contact;
          delete from.mobile;
          break;
        case 2:
          delete from.address_id;
          break;
      }
      return from;
    },
    // 根据订单类型扩展订单参数
    orderExtendParams: function orderExtendParams() {
      var params = new Object();
      switch (this.from) {
        // 普通商品
        case _enum.OrderTypeEnum['GOODS']:
          break;
        // 拼团商品
        case _enum.OrderTypeEnum['TEAM']:
          params.source = _enum.OrderSourceEnum['BUY_NOW'];
          break;
        // 秒杀商品
        case _enum.OrderTypeEnum['SECKILL']:
          params.source = _enum.OrderSourceEnum['BUY_NOW'];
          break;
        // 砍价商品
        case _enum.OrderTypeEnum['BARGAIN']:
          params.source = _enum.OrderSourceEnum['BUY_NOW'];
          break;
        // 预售商品
        case _enum.OrderTypeEnum['PRESELL']:
          params.source = _enum.OrderSourceEnum['BUY_NOW'];
          break;
      }
      return _objectSpread(_objectSpread({}, params), {}, {
        order_type: this.from
      });
    },
    // 是否营销商品
    isMarketing: function isMarketing() {
      switch (this.from) {
        // 普通商品
        case _enum.OrderTypeEnum['VIRTUAL']:
        case _enum.OrderTypeEnum['GOODS']:
          return false;
        default:
          return true;
      }
    },
    // 当前配送方式Tab
    deliveryActive: function deliveryActive() {
      return this.deliveryTypeTabsList[this.deliveryTypeTabsIndex];
    },
    // 当前优惠券Tab
    couponsTabActive: function couponsTabActive() {
      return this.couponTabsList[this.couponTabsIndex];
    }
  },
  watch: {
    //合并不可购买商品和可购商品
    disableGoods: function disableGoods(val) {
      var _this = this;
      val.forEach(function (i) {
        _this.orderGoodsList.push(_objectSpread(_objectSpread({}, i.goods), {}, {
          msg: i.msg
        }));
      });
    },
    immediate: true
  },
  methods: {
    // 初始化配送方式
    initDeliveryType: function initDeliveryType() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        (0, _order.apiDeliveryType)().then(function (data) {
          var express = data.express,
            selffetch = data.selffetch;
          // 订单配送方式ID组
          var deliveries = [];
          // 计入配送方式列表ID组
          express.is_express && deliveries.push(1);
          selffetch.is_selffetch && deliveries.push(2);
          // 过滤配送方式
          _this2.deliveryTypeTabsList = _this2.deliveryTypeTabsList.filter(function (item) {
            return deliveries.includes(item['id']);
          });
          _this2.deliveryTypeTabsList.forEach(function (item) {
            switch (item.id) {
              case 1:
                item.name = express.express_name;
                break;
              case 2:
                item.name = selffetch.selffetch_name;
                break;
            }
          });
          // 初始化订单表单的配送方式
          _this2.orderFrom.delivery_type = _this2.deliveryActive['id'];
          resolve(data);
        }).catch(function (errMsg) {
          return reject(errMsg !== null && errMsg !== void 0 ? errMsg : '获取不到配送方式');
        });
      });
    },
    // 根据商品类型初始化订单数据
    initOrderData: function initOrderData() {
      var _this3 = this;
      return new Promise(function (resolve, reject) {
        (0, _order.apiOrderPlace)(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _this3.orderFormParams), _this3.pageQueryPayload), _this3.orderExtendParams), {}, {
          action: 'settle'
        })).then(function (data) {
          var _data$address;
          _this3.addressInfo = data.address;
          _this3.orderFrom.address_id = (_data$address = data.address) === null || _data$address === void 0 ? void 0 : _data$address.id;
          _this3.goodsLength = data.goods.length;
          _this3.orderGoodsList = data.goods;
          _this3.disableGoods = data.goods_disabled;
          _this3.orderInfo = data;
          _this3.orderFrom.contact = data.selffetch_info.contact;
          _this3.orderFrom.mobile = data.selffetch_info.mobile;
          resolve(data);
        }).catch(function (errMsg) {
          return reject(errMsg);
        });
      });
    },
    /** S 优惠券 **/
    // 初始化优惠券列表
    initCouponGoods: function initCouponGoods() {
      var _this4 = this;
      return new Promise(function (resolve, reject) {
        var params = null;
        var _this4$pageQueryPaylo = _this4.pageQueryPayload,
          goods = _this4$pageQueryPaylo.goods,
          cart_id = _this4$pageQueryPaylo.cart_id,
          source = _this4$pageQueryPaylo.source;

        // buy_now | cart 处理：请求优惠券列表的参数处理
        switch (source) {
          case _enum.OrderSourceEnum['BUY_NOW']:
            var goodsItems = goods.map(function (item) {
              return {
                num: item.goods_num,
                item_id: item.item_id
              };
            });
            params = {
              goods: goodsItems,
              source: 1
            };
            break;
          case _enum.OrderSourceEnum['CART']:
            params = {
              cart_ids: (0, _toConsumableArray2.default)(cart_id),
              source: 2
            };
            break;
        }
        (0, _store.apiCouponGoods)(_objectSpread({}, params)).then(function (data) {
          data.can_use.forEach(function (item) {
            return item.checked = false;
          });
          // 有可用优惠券默认选择第一个
          if (data.can_use[0]) {
            data.can_use[0].checked = true;
            _this4.couponsActive = data.can_use[0];
          }
          return data;
        }).then(function (data) {
          _this4.couponsInfo = data;
          // Tab名称处理（优惠券数量）
          _this4.couponTabsList.forEach(function (item) {
            switch (item.sign) {
              case 'usable':
                item.name = item.name + "(".concat(data.can_use_count, ")");
                break;
              case 'disabled':
                item.name = item.name + "(".concat(data.not_can_use_count, ")");
                break;
            }
          });
          resolve(data);
        }).catch(function (errMsg) {
          return reject(errMsg);
        });
      });
    },
    // 更改优惠券
    changeCouponUse: function changeCouponUse(coupon, value) {
      this.couponsInfo.can_use.forEach(function (item) {
        return item.checked = false;
      });
      coupon && (coupon.checked = true);
    },
    // 使用优惠券
    useCoupon: function useCoupon() {
      this.showCoupons = false;
      var coupon = this.couponsInfo.can_use.find(function (item) {
        return item.checked;
      });
      this.couponsActive = coupon || {};
      this.$set(this.orderFrom, 'coupon_list_id', coupon === null || coupon === void 0 ? void 0 : coupon.id);
      this.initOrderData();
    },
    // 打开优惠券弹窗
    openCouponsPopup: function openCouponsPopup() {
      var _this5 = this;
      if (Object.keys(this.couponsActive).length) {
        var coupon = this.couponsInfo.can_use.find(function (item) {
          return item.id === _this5.couponsActive.id;
        });
        coupon.checked = true;
      }
    },
    // 关闭优惠券弹窗
    closeCouponsPopup: function closeCouponsPopup() {
      if (!Object.keys(this.couponsActive).length) {
        this.couponsInfo.can_use.forEach(function (item) {
          return item.checked = false;
        });
      }
    },
    /** E 优惠券 **/
    // 更改配送方式
    changeDeliveryType: function changeDeliveryType(index) {
      var _this6 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _yield$_this6$initOrd, selffetch_info;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this6.deliveryTypeTabsIndex = index;
                _this6.orderFrom.delivery_type = _this6.deliveryActive['id'];
                _context.prev = 2;
                _context.next = 5;
                return _this6.initOrderData();
              case 5:
                _yield$_this6$initOrd = _context.sent;
                selffetch_info = _yield$_this6$initOrd.selffetch_info;
                if (selffetch_info.selffetch_shop_id) {
                  _this6.orderFrom.selffetch_shop_id = selffetch_info.selffetch_shop_id;
                  _this6.selffetchStoreInfo = selffetch_info.selffetch_shop;
                }
                _context.next = 13;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);
              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }))();
    },
    // 点击地址选择
    onAddressSelect: function onAddressSelect() {
      var _this7 = this;
      // 监听全局selectaddress事件
      uni.$once('changeAddress', function () {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this7.orderFrom.address_id;
        id && (_this7.orderFrom.address_id = id);
        _this7.initOrderData();
      });
      this.$Router.push({
        path: '/pages/address/address',
        query: {
          type: true
        }
      });
    },
    // 点击店铺选择
    onStoreSelect: function onStoreSelect() {
      var _this8 = this;
      // 监听全局selectaddress事件
      uni.$once('changeStore', function (store) {
        _this8.selffetchStoreInfo = store;
        _this8.orderFrom.selffetch_shop_id = store.id;
        _this8.initOrderData();
      });
      this.$Router.push({
        path: '/bundle/pages/store_list/store_list'
      });
    },
    // 校验表单数据
    checkOrder: function checkOrder() {
      var from = _objectSpread({}, this.orderFrom);

      // 根据物流方式过滤
      switch (from.delivery_type) {
        case 1:
          if (!from.address_id) {
            throw new Error('请选择送货地址');
          }
          break;
        case 2:
          if (!(from.selffetch_shop_id && from.contact && from.mobile.length == 11)) {
            throw new Error('请完善自提点信息');
          }
          break;
      }
    },
    // 点击提交订单
    onSubmitOrder: function onSubmitOrder() {
      var _this9 = this;
      // 可购买商品为0时直接返回
      if (this.goodsLength == 0) {
        return;
      }
      if (this.orderFrom.delivery_type == 4 && !this.orderFrom.address_id && this.deliveryActive['sign'] == 'express' && this.orderInfo.is_address != 0) {
        return this.$toast({
          title: '请选择收货地址'
        });
      }
      try {
        this.checkOrder();
      } catch (error) {
        return this.$toast({
          title: error.message
        });
      }
      uni.showModal({
        title: '温馨提示',
        content: '是否确认下单?',
        confirmColor: this.themeColor,
        success: function () {
          var _success = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(_ref) {
            var confirm, res;
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    confirm = _ref.confirm;
                    _context2.prev = 1;
                    if (confirm) {
                      _context2.next = 4;
                      break;
                    }
                    throw '订单取消';
                  case 4:
                    _context2.prev = 4;
                    _context2.next = 7;
                    return _this9.handleSubscribeMP_WEIXIN();
                  case 7:
                    _context2.next = 12;
                    break;
                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](4);
                    console.log('SUBSCRIBE_ERROR_MSG:', _context2.t0);
                  case 12:
                    _context2.next = 14;
                    return _this9.handlePlaceOrder();
                  case 14:
                    res = _context2.sent;
                    console.log(res);
                    _context2.next = 22;
                    break;
                  case 18:
                    _context2.prev = 18;
                    _context2.t1 = _context2["catch"](1);
                    console.log('ORDER_ERROR_MSG:', _context2.t1);
                    if (_context2.t1 == '提交的商品已不能购买，请重新选择商品') {
                      _this9.showModal = true;
                    } else if (_context2.t1 == '自提门店不能为空') {
                      _this9.$toast({
                        title: '请选择自提门店'
                      });
                    }
                  case 22:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, null, [[1, 18], [4, 9]]);
          }));
          function success(_x) {
            return _success.apply(this, arguments);
          }
          return success;
        }()
      });
    },
    // 处理：微信订阅消息
    handleSubscribeMP_WEIXIN: function handleSubscribeMP_WEIXIN() {
      return new Promise(function (resolve, reject) {
        (0, _app.apiSubscribe)().then(function (data) {
          if (!data.length) reject('暂无可订阅信息');
          uni.requestSubscribeMessage({
            tmplIds: data,
            success: function success(res) {
              resolve(res);
            },
            fail: function fail(err) {
              reject('订阅失败');
            }
          });
        }).catch(function () {
          return reject('订阅获取失败');
        });
      });
    },
    // 下单处理
    handlePlaceOrder: function handlePlaceOrder() {
      var _this10 = this;
      return new Promise(function (resolve, reject) {
        (0, _order.apiOrderPlace)(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _this10.orderFormParams), _this10.pageQueryPayload), _this10.orderExtendParams), {}, {
          action: 'buy'
        })).then(function (data) {
          // 监听全局duringPayment事件
          uni.$once('duringPayment', function (data) {
            _this10.handlePayResult(data);
          });
          return data;
        }).then(function (_ref2) {
          var type = _ref2.type,
            order_id = _ref2.order_id;
          // 去支付
          _this10.$Router.replace({
            path: "/pages/payment/payment",
            query: {
              from: type,
              order_id: order_id
            }
          });
          resolve(order_id);
        }).catch(function (errMsg) {
          return reject(errMsg);
        });
      });
    },
    // 支付结果处理
    handlePayResult: function handlePayResult(_ref3) {
      var result = _ref3.result,
        order_id = _ref3.order_id;
      switch (result) {
        case _enum.PaymentStatusEnum['SUCCESS']:
        case _enum.PaymentStatusEnum['FAIL']:
          this.$Router.replace({
            path: '/pages/payment_result/payment_result',
            query: {
              order_id: order_id,
              from: 'order'
            }
          });
          break;
        case _enum.PaymentStatusEnum['CLOSE']:
          this.$Router.push({
            path: '/pages/payment_result/payment_result',
            query: {
              order_id: order_id,
              from: 'order'
            }
          });
          break;
      }
    },
    //不可购买弹框
    handledisBuy: function handledisBuy() {
      this.$Router.replaceAll({
        path: '/pages/shop_cart/shop_cart'
      });
    }
  },
  onLoad: function onLoad() {
    var _this11 = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
      var options, _this11$couponsInfo, _this11$couponsInfo$c;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              options = _this11.$Route.query;
              console.log(options);
              // 初始化页面
              _context3.prev = 2;
              // 初始化页面参数
              _this11.from = options.from;
              _this11.pageQueryPayload = options.payload;
              _this11.orderFrom.address_id = options.address_id;
              // 初始化配送方式
              if (!(options.from == 4)) {
                _context3.next = 10;
                break;
              }
              _this11.orderFrom.delivery_type = 4;
              _context3.next = 12;
              break;
            case 10:
              _context3.next = 12;
              return _this11.initDeliveryType();
            case 12:
              _context3.t0 = !_this11.isMarketing;
              if (!_context3.t0) {
                _context3.next = 16;
                break;
              }
              _context3.next = 16;
              return _this11.initCouponGoods();
            case 16:
              // 默认选择可用优惠券
              _this11.$set(_this11.orderFrom, 'coupon_list_id', (_this11$couponsInfo = _this11.couponsInfo) === null || _this11$couponsInfo === void 0 ? void 0 : (_this11$couponsInfo$c = _this11$couponsInfo.can_use[0]) === null || _this11$couponsInfo$c === void 0 ? void 0 : _this11$couponsInfo$c.id);
              // 初始化页面数据
              _context3.next = 19;
              return _this11.initOrderData();
            case 19:
              _this11.pageStatus = _enum.PageStatusEnum['NORMAL'];
              _context3.next = 27;
              break;
            case 22:
              _context3.prev = 22;
              _context3.t1 = _context3["catch"](2);
              _this11.pageErrorMsg = _context3.t1;
              _this11.pageStatus = _enum.PageStatusEnum['ERROR'];
              console.log('页面数据初始化失败', _context3.t1);
            case 27:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[2, 22]]);
    }))();
  },
  onUnload: function onUnload() {
    uni.$off(['changeStore', 'changeAddress']);
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 187:
/*!***********************************************************************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue?vue&type=style&index=0&id=db6a795c&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-1-3!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./goods_order.vue?vue&type=style&index=0&id=db6a795c&lang=scss&scoped=true& */ 188);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_goods_order_vue_vue_type_style_index_0_id_db6a795c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 188:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/mobile/pages/goods_order/goods_order.vue?vue&type=style&index=0&id=db6a795c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[178,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goods_order/goods_order.js.map