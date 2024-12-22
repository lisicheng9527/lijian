(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/share-popup/poster"],{

/***/ 1749:
/*!*************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/components/share-popup/poster.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./poster.vue?vue&type=template&id=ebf1be8e& */ 1750);
/* harmony import */ var _poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./poster.vue?vue&type=script&lang=js& */ 1752);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 61);

var renderjs




/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "components/share-popup/poster.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1750:
/*!********************************************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/components/share-popup/poster.vue?vue&type=template&id=ebf1be8e& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./poster.vue?vue&type=template&id=ebf1be8e& */ 1751);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_template_id_ebf1be8e___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1751:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/lijian/components/share-popup/poster.vue?vue&type=template&id=ebf1be8e& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    lPainter: function () {
      return Promise.all(/*! import() | uni_modules/lime-painter/components/l-painter/l-painter */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/lime-painter/components/l-painter/l-painter")]).then(__webpack_require__.bind(null, /*! @/uni_modules/lime-painter/components/l-painter/l-painter.vue */ 1775))
    },
    lPainterImage: function () {
      return Promise.all(/*! import() | uni_modules/lime-painter/components/l-painter-image/l-painter-image */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/lime-painter/components/l-painter-image/l-painter-image")]).then(__webpack_require__.bind(null, /*! @/uni_modules/lime-painter/components/l-painter-image/l-painter-image.vue */ 1786))
    },
    lPainterView: function () {
      return Promise.all(/*! import() | uni_modules/lime-painter/components/l-painter-view/l-painter-view */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/lime-painter/components/l-painter-view/l-painter-view")]).then(__webpack_require__.bind(null, /*! @/uni_modules/lime-painter/components/l-painter-view/l-painter-view.vue */ 1791))
    },
    lPainterText: function () {
      return Promise.all(/*! import() | uni_modules/lime-painter/components/l-painter-text/l-painter-text */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/lime-painter/components/l-painter-text/l-painter-text")]).then(__webpack_require__.bind(null, /*! @/uni_modules/lime-painter/components/l-painter-text/l-painter-text.vue */ 1796))
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
  var a0 = {
    width: "640rpx",
    height: "960rpx",
    "border-radius": "10rpx",
    background: "#fff",
    overflow: "hidden",
  }
  var a1 =
    _vm.getConfig.background_type &&
    (_vm.getConfig.show.goods_img || _vm.getConfig.id == 3)
      ? {
          position: "absolute",
          top: _vm.getConfig.id == 1 ? "120rpx" : 0,
          left: _vm.getConfig.id == 1 ? "40rpx" : 0,
          "object-fit": "cover",
          "object-position": "center",
          width: _vm.getConfig.id == 1 ? "560rpx" : "640rpx",
          height:
            _vm.getConfig.id == 1
              ? "560rpx"
              : _vm.getConfig.id == 2
              ? "640rpx"
              : "960rpx",
        }
      : null
  var a2 = _vm.getConfig.background_type
    ? {
        position: "absolute",
        left: "40rpx",
        top: "20rpx",
        display: "flex",
        "align-items": "center",
      }
    : null
  var a3 =
    _vm.getConfig.background_type && _vm.getConfig.show.user_avtar
      ? {
          width: "72rpx",
          height: "72rpx",
          "border-radius": "50%",
        }
      : null
  var a4 =
    _vm.getConfig.background_type && _vm.getConfig.show.user_name
      ? {
          color: _vm.getConfig.style.user_name,
          "line-clamp": 1,
          "margin-left": "18rpx",
          width: "400rpx",
        }
      : null
  var a5 = _vm.getConfig.background_type
    ? {
        position: "absolute",
        top: _vm.getConfig.id == 1 ? "700rpx" : "770rpx",
        left: _vm.getConfig.qrcode_align == 2 ? "40rpx" : "230rpx",
        "vertical-align": "bottom",
        lineHeight: "1.4em",
      }
    : null
  var a6 =
    _vm.getConfig.background_type &&
    _vm.getConfig.show.goods_sale_price &&
    _vm.getConfig.id != 3
      ? {
          color: _vm.getConfig.style.goods_sale_price,
          display: "inline-block",
        }
      : null
  var a7 =
    _vm.getConfig.background_type &&
    _vm.getConfig.show.goods_origin_price &&
    _vm.getConfig.id != 3
      ? {
          fontSize: "28rpx",
          "vertical-align": "bottom",
          "padding-left": "10rpx",
          "text-decoration": "line-through",
          color: _vm.getConfig.style.goods_origin_price,
        }
      : null
  var a8 =
    _vm.getConfig.background_type &&
    _vm.getConfig.show.goods_name &&
    _vm.getConfig.id != 3
      ? {
          position: "absolute",
          top: _vm.getConfig.id == 1 ? "780rpx" : "660rpx",
          left:
            _vm.getConfig.qrcode_align == 2 || _vm.getConfig.id == 2
              ? "40rpx"
              : "230rpx",
          "line-clamp": 2,
          lineHeight: "1.5em",
          fontSize: "30rpx",
          width: _vm.getConfig.id == 1 ? "380rpx" : "560rpx",
          color: _vm.getConfig.style.goods_name,
        }
      : null
  var a9 =
    _vm.getConfig.background_type && _vm.getConfig.show.qrcode
      ? {
          position: "absolute",
          top:
            _vm.getConfig.id == 1 || _vm.getConfig.id == 3
              ? "730rpx"
              : "770rpx",
          left: _vm.getConfig.qrcode_align == 2 ? "440rpx" : "40rpx",
        }
      : null
  var a10 =
    _vm.getConfig.background_type && _vm.getConfig.show.qrcode_title
      ? {
          position: "absolute",
          top:
            _vm.getConfig.id == 1 || _vm.getConfig.id == 3
              ? "900rpx"
              : "870rpx",
          left:
            _vm.getConfig.id == 1 || _vm.getConfig.id == 3
              ? _vm.getConfig.qrcode_align == 1
                ? "40rpx"
                : "440rpx"
              : _vm.getConfig.qrcode_align == 1
              ? "230rpx"
              : "40rpx",
          fontSize: "24rpx",
          color: _vm.getConfig.style.qrcode_title,
        }
      : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        a0: a0,
        a1: a1,
        a2: a2,
        a3: a3,
        a4: a4,
        a5: a5,
        a6: a6,
        a7: a7,
        a8: a8,
        a9: a9,
        a10: a10,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1752:
/*!**************************************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/components/share-popup/poster.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./poster.vue?vue&type=script&lang=js& */ 1753);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_poster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1753:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/lijian/components/share-popup/poster.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default2 = {
  name: 'share-poster',
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    qrcode: {
      type: [String],
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'goods'
    },
    poster_img: {
      type: String,
      default: ''
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    price: function price() {
      var min_price = this.getGoods.min_price;
      if (min_price == undefined) return {};
      var price = String(parseFloat(min_price)).split('.');
      return {
        prev: price[0],
        next: price[1] ? ".".concat(price[1]) : ''
      };
    },
    marketPrice: function marketPrice() {
      return "\uFFE5".concat(parseFloat(this.getGoods.min_lineation_price));
    },
    getConfig: function getConfig() {
      return this.options.config || {
        show: {},
        style: {}
      };
    },
    getGoods: function getGoods() {
      return this.options.goods || {};
    }
  },
  methods: {
    handleFail: function handleFail() {
      this.$emit('fail');
    },
    drawCanvas: function drawCanvas() {
      var _this = this;
      // 生成图片
      this.$refs.painter.canvasToTempFilePathSync({
        fileType: 'png',
        // 如果返回的是base64是无法使用 saveImageToPhotosAlbum，需要设置 pathType为url
        pathType: 'url',
        quality: 1,
        success: function success(res) {
          _this.$emit('success', res.tempFilePath);
        }
      });
    }
  }
};
exports.default = _default2;

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/share-popup/poster.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/share-popup/poster-create-component',
    {
        'components/share-popup/poster-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1749))
        })
    },
    [['components/share-popup/poster-create-component']]
]);
