(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["uni_modules/lime-painter/components/l-painter/l-painter"],{

/***/ 1704:
/*!***************************************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./l-painter.vue?vue&type=template&id=cae877da& */ 1705);
/* harmony import */ var _l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./l-painter.vue?vue&type=script&lang=js& */ 1707);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./l-painter.vue?vue&type=style&index=0&lang=css& */ 1713);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 61);

var renderjs





/* normalize component */

var component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "uni_modules/lime-painter/components/l-painter/l-painter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 1705:
/*!**********************************************************************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue?vue&type=template&id=cae877da& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-painter.vue?vue&type=template&id=cae877da& */ 1706);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_template_id_cae877da___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 1706:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue?vue&type=template&id=cae877da& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 1707:
/*!****************************************************************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-painter.vue?vue&type=script&lang=js& */ 1708);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1708:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var _relation = __webpack_require__(/*! ../common/relation */ 1709);
var _props = _interopRequireDefault(__webpack_require__(/*! ./props */ 1710));
var _utils = __webpack_require__(/*! ./utils */ 1711);
var _painter = _interopRequireDefault(__webpack_require__(/*! ./painter */ 1712));
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

// import Painter from '@lime/'
var nvue = {};
var _default = {
  name: 'lime-painter',
  mixins: [_props.default, (0, _relation.parent)('painter'), nvue],
  data: function data() {
    return {
      use2dCanvas: true,
      canvasHeight: 150,
      canvasWidth: null,
      parentWidth: 0,
      inited: false,
      progress: 0,
      firstRender: 0,
      done: false
    };
  },
  computed: {
    styles: function styles() {
      return "".concat(this.size).concat(this.customStyle || '', ";");
    },
    canvasId: function canvasId() {
      return "l-painter".concat(this._uid || this._.uid);
    },
    size: function size() {
      if (this.boardWidth && this.boardHeight) {
        return "width:".concat(this.boardWidth, "px; height: ").concat(this.boardHeight, "px;");
      }
    },
    dpr: function dpr() {
      return this.pixelRatio || uni.getSystemInfoSync().pixelRatio;
    },
    boardWidth: function boardWidth() {
      var _ref = this.elements && this.elements.css || this.elements || this,
        _ref$width = _ref.width,
        width = _ref$width === void 0 ? 0 : _ref$width;
      var w = (0, _utils.toPx)(width || this.width);
      return w || Math.max(w, (0, _utils.toPx)(this.canvasWidth));
    },
    boardHeight: function boardHeight() {
      var _ref2 = this.elements && this.elements.css || this.elements || this,
        _ref2$height = _ref2.height,
        height = _ref2$height === void 0 ? 0 : _ref2$height;
      var h = (0, _utils.toPx)(height || this.height);
      return h || Math.max(h, (0, _utils.toPx)(this.canvasHeight));
    },
    hasBoard: function hasBoard() {
      return this.board && Object.keys(this.board).length;
    },
    elements: function elements() {
      return this.hasBoard ? this.board : JSON.parse(JSON.stringify(this.el));
    }
  },
  watch: {
    size: function size(v) {
      if (this.use2dCanvas) {
        this.inited = false;
      }
    }
  },
  created: function created() {
    var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),
      SDKVersion = _uni$getSystemInfoSyn.SDKVersion,
      version = _uni$getSystemInfoSyn.version,
      platform = _uni$getSystemInfoSyn.platform;
    this.use2dCanvas = this.type === '2d' && (0, _utils.compareVersion)(SDKVersion, '2.9.2') >= 0 && !this.isPC;
  },
  mounted: function mounted() {
    var _this = this;
    return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _utils.sleep)(30);
            case 2:
              _context.next = 4;
              return _this.getParentWeith();
            case 4:
              _this.$nextTick(function () {
                setTimeout(function () {
                  _this.$watch('elements', _this.watchRender, {
                    deep: true,
                    immediate: true
                  });
                }, 30);
              });
            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    watchRender: function watchRender(val, old) {
      var _this2 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!val || !val.views || (!_this2.firstRender ? !val.views.length : !_this2.firstRender) || !Object.keys(val).length || JSON.stringify(val) == JSON.stringify(old))) {
                  _context2.next = 2;
                  break;
                }
                return _context2.abrupt("return");
              case 2:
                _this2.firstRender = 1;
                clearTimeout(_this2.rendertimer);
                _this2.rendertimer = setTimeout(function () {
                  _this2.render(val);
                }, _this2.beforeDelay);
              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setFilePath: function setFilePath(path, param) {
      var _this3 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        var filePath, _ref3, _ref3$pathType, pathType;
        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                filePath = path;
                _ref3 = param || _this3, _ref3$pathType = _ref3.pathType, pathType = _ref3$pathType === void 0 ? _this3.pathType : _ref3$pathType;
                if (!(pathType == 'base64' && !(0, _utils.isBase64)(path))) {
                  _context3.next = 8;
                  break;
                }
                _context3.next = 5;
                return (0, _utils.pathToBase64)(path);
              case 5:
                filePath = _context3.sent;
                _context3.next = 12;
                break;
              case 8:
                if (!(pathType == 'url' && (0, _utils.isBase64)(path))) {
                  _context3.next = 12;
                  break;
                }
                _context3.next = 11;
                return (0, _utils.base64ToPath)(path);
              case 11:
                filePath = _context3.sent;
              case 12:
                if (param && param.isEmit) {
                  _this3.$emit('success', filePath);
                }
                return _context3.abrupt("return", filePath);
              case 14:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    getSize: function getSize(args) {
      var _this4 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4() {
        var _ref4, width, _ref5, height;
        return _regenerator.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _ref4 = args.css || args, width = _ref4.width;
                _ref5 = args.css || args, height = _ref5.height;
                if (_this4.size) {
                  _context4.next = 12;
                  break;
                }
                if (!(width || height)) {
                  _context4.next = 10;
                  break;
                }
                _this4.canvasWidth = width || _this4.canvasWidth;
                _this4.canvasHeight = height || _this4.canvasHeight;
                _context4.next = 8;
                return (0, _utils.sleep)(30);
              case 8:
                _context4.next = 12;
                break;
              case 10:
                _context4.next = 12;
                return _this4.getParentWeith();
              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    canvasToTempFilePathSync: function canvasToTempFilePathSync(args) {
      var _this5 = this;
      this.stopWatch = this.$watch('done', function (v) {
        if (v) {
          _this5.canvasToTempFilePath(args);
          _this5.stopWatch && _this5.stopWatch();
        }
      }, {
        immediate: true
      });
    },
    getParentWeith: function getParentWeith() {
      var _this6 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().in(_this6).select(".lime-painter").boundingClientRect().exec(function (res) {
          var _ref6 = res[0] || {},
            width = _ref6.width,
            height = _ref6.height;
          _this6.parentWidth = Math.ceil(width || 0);
          _this6.canvasWidth = _this6.parentWidth || 300;
          _this6.canvasHeight = height || _this6.canvasHeight || 150;
          resolve(res[0]);
        });
      });
    },
    render: function render() {
      var _arguments = arguments,
        _this7 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5() {
        var args, ctx, use2dCanvas, boardWidth, boardHeight, canvas, afterDelay, _ref7, _width, _ref8, _height, param, _yield$_this7$painter, width, height;
        return _regenerator.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                args = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : {};
                if (Object.keys(args).length) {
                  _context5.next = 3;
                  break;
                }
                return _context5.abrupt("return", console.error('空对象'));
              case 3:
                _this7.progress = 0;
                _this7.done = false;
                _context5.next = 7;
                return _this7.getSize(args);
              case 7:
                _context5.next = 9;
                return _this7.getContext();
              case 9:
                ctx = _context5.sent;
                use2dCanvas = _this7.use2dCanvas, boardWidth = _this7.boardWidth, boardHeight = _this7.boardHeight, canvas = _this7.canvas, afterDelay = _this7.afterDelay;
                if (!(use2dCanvas && !canvas)) {
                  _context5.next = 13;
                  break;
                }
                return _context5.abrupt("return", Promise.reject(new Error('render: fail canvas has not been created')));
              case 13:
                _this7.boundary = {
                  top: 0,
                  left: 0,
                  width: boardWidth,
                  height: boardHeight
                };
                _this7.painter = null;
                if (!_this7.painter) {
                  _ref7 = args.css || args, _width = _ref7.width;
                  _ref8 = args.css || args, _height = _ref8.height;
                  if (!_width && _this7.parentWidth) {
                    Object.assign(args, {
                      width: _this7.parentWidth
                    });
                  }
                  param = {
                    context: ctx,
                    canvas: canvas,
                    width: boardWidth,
                    height: boardHeight,
                    pixelRatio: _this7.dpr,
                    useCORS: _this7.useCORS,
                    createImage: _utils.getImageInfo.bind(_this7),
                    listen: {
                      onProgress: function onProgress(v) {
                        _this7.progress = v;
                        _this7.$emit('progress', v);
                      },
                      onEffectFail: function onEffectFail(err) {
                        _this7.$emit('faill', err);
                      }
                    }
                  };
                  _this7.painter = new _painter.default(param);
                }

                // vue3 赋值给data会引起图片无法绘制 
                _context5.next = 18;
                return _this7.painter.source(JSON.parse(JSON.stringify(args)));
              case 18:
                _yield$_this7$painter = _context5.sent;
                width = _yield$_this7$painter.width;
                height = _yield$_this7$painter.height;
                _this7.boundary.height = _this7.canvasHeight = height;
                _this7.boundary.width = _this7.canvasWidth = width;
                _context5.next = 25;
                return (0, _utils.sleep)(_this7.sleep);
              case 25:
                // 可能会因为尺寸改变影响绘制上下文
                _this7.painter.setContext(_this7.ctx);
                _context5.next = 28;
                return _this7.painter.render();
              case 28:
                _context5.next = 30;
                return new Promise(function (resolve) {
                  return _this7.$nextTick(resolve);
                });
              case 30:
                if (use2dCanvas) {
                  _context5.next = 33;
                  break;
                }
                _context5.next = 33;
                return _this7.canvasDraw();
              case 33:
                if (!(afterDelay && use2dCanvas)) {
                  _context5.next = 36;
                  break;
                }
                _context5.next = 36;
                return (0, _utils.sleep)(afterDelay);
              case 36:
                _this7.$emit('done');
                _this7.done = true;
                if (_this7.isCanvasToTempFilePath) {
                  _this7.canvasToTempFilePath().then(function (res) {
                    _this7.$emit('success', res.tempFilePath);
                  }).catch(function (err) {
                    _this7.$emit('fail', new Error(JSON.stringify(err)));
                  });
                }
                return _context5.abrupt("return", Promise.resolve({
                  ctx: ctx,
                  draw: _this7.painter,
                  node: _this7.node
                }));
              case 40:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    canvasDraw: function canvasDraw() {
      var _this8 = this;
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return new Promise(function (resolve, reject) {
        return _this8.ctx.draw(flag, function () {
          return setTimeout(function () {
            return resolve();
          }, _this8.afterDelay);
        });
      });
    },
    getContext: function getContext() {
      var _this9 = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6() {
        var type, use2dCanvas, dpr, boardWidth, boardHeight, _getContext;
        return _regenerator.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (_this9.canvasWidth) {
                  _context6.next = 4;
                  break;
                }
                _this9.$emit('fail', 'painter no size');
                console.error('painter no size: 请给画板或父级设置尺寸');
                return _context6.abrupt("return", Promise.reject());
              case 4:
                if (!(_this9.ctx && _this9.inited)) {
                  _context6.next = 6;
                  break;
                }
                return _context6.abrupt("return", Promise.resolve(_this9.ctx));
              case 6:
                type = _this9.type, use2dCanvas = _this9.use2dCanvas, dpr = _this9.dpr, boardWidth = _this9.boardWidth, boardHeight = _this9.boardHeight;
                _getContext = function _getContext() {
                  return new Promise(function (resolve) {
                    uni.createSelectorQuery().in(_this9).select("#".concat(_this9.canvasId)).boundingClientRect().exec(function (res) {
                      if (res) {
                        var ctx = uni.createCanvasContext(_this9.canvasId, _this9);
                        if (!_this9.inited) {
                          _this9.inited = true;
                          _this9.use2dCanvas = false;
                          _this9.canvas = res;
                        }
                        _this9.ctx = ctx;
                        resolve(_this9.ctx);
                      }
                    });
                  });
                };
                if (use2dCanvas) {
                  _context6.next = 10;
                  break;
                }
                return _context6.abrupt("return", _getContext());
              case 10:
                return _context6.abrupt("return", new Promise(function (resolve) {
                  uni.createSelectorQuery().in(_this9).select("#".concat(_this9.canvasId)).node().exec(function (res) {
                    var canvas = res[0].node;
                    if (!canvas) {
                      _this9.use2dCanvas = false;
                      resolve(_this9.getContext());
                    }
                    var ctx = canvas.getContext(type);
                    if (!_this9.inited) {
                      _this9.inited = true;
                      _this9.use2dCanvas = true;
                      _this9.canvas = canvas;
                    }
                    _this9.ctx = ctx;
                    resolve(_this9.ctx);
                  });
                }));
              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }))();
    },
    canvasToTempFilePath: function canvasToTempFilePath() {
      var _this10 = this;
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return new Promise( /*#__PURE__*/function () {
        var _ref9 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(resolve, reject) {
          var use2dCanvas, canvasId, dpr, fileType, quality, success, _ref11, _ref11$top, y, _ref11$left, x, width, height, destWidth, destHeight, copyArgs, tempFilePath;
          return _regenerator.default.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  use2dCanvas = _this10.use2dCanvas, canvasId = _this10.canvasId, dpr = _this10.dpr, fileType = _this10.fileType, quality = _this10.quality;
                  success = /*#__PURE__*/function () {
                    var _ref10 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(res) {
                      var tempFilePath;
                      return _regenerator.default.wrap(function _callee7$(_context7) {
                        while (1) {
                          switch (_context7.prev = _context7.next) {
                            case 0:
                              _context7.prev = 0;
                              _context7.next = 3;
                              return _this10.setFilePath(res.tempFilePath || res);
                            case 3:
                              tempFilePath = _context7.sent;
                              resolve(Object.assign(res, {
                                tempFilePath: tempFilePath
                              }));
                              _context7.next = 10;
                              break;
                            case 7:
                              _context7.prev = 7;
                              _context7.t0 = _context7["catch"](0);
                              _this10.$emit('fail', _context7.t0);
                            case 10:
                            case "end":
                              return _context7.stop();
                          }
                        }
                      }, _callee7, null, [[0, 7]]);
                    }));
                    return function success(_x3) {
                      return _ref10.apply(this, arguments);
                    };
                  }();
                  _ref11 = _this10.boundary || _this10, _ref11$top = _ref11.top, y = _ref11$top === void 0 ? 0 : _ref11$top, _ref11$left = _ref11.left, x = _ref11$left === void 0 ? 0 : _ref11$left, width = _ref11.width, height = _ref11.height;
                  destWidth = width * dpr;
                  destHeight = height * dpr;
                  copyArgs = Object.assign({
                    x: x,
                    y: y,
                    width: width,
                    height: height,
                    destWidth: destWidth,
                    destHeight: destHeight,
                    canvasId: canvasId,
                    fileType: fileType,
                    quality: quality,
                    success: success,
                    fail: reject
                  }, args);
                  if (!use2dCanvas) {
                    _context8.next = 22;
                    break;
                  }
                  _context8.prev = 7;
                  if (!args.pathType && !_this10.pathType) {
                    args.pathType = 'url';
                  }
                  _context8.next = 11;
                  return _this10.setFilePath(_this10.canvas.toDataURL("image/".concat(args.fileType || fileType).replace(/pg/, 'peg'), args.quality || quality), args);
                case 11:
                  tempFilePath = _context8.sent;
                  args.success && args.success({
                    tempFilePath: tempFilePath
                  });
                  resolve({
                    tempFilePath: tempFilePath
                  });
                  _context8.next = 20;
                  break;
                case 16:
                  _context8.prev = 16;
                  _context8.t0 = _context8["catch"](7);
                  args.fail && args.fail(_context8.t0);
                  reject(_context8.t0);
                case 20:
                  _context8.next = 23;
                  break;
                case 22:
                  uni.canvasToTempFilePath(copyArgs, _this10);
                case 23:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, null, [[7, 16]]);
        }));
        return function (_x, _x2) {
          return _ref9.apply(this, arguments);
        };
      }());
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 1713:
/*!************************************************************************************************************************************!*\
  !*** /Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./l-painter.vue?vue&type=style&index=0&lang=css& */ 1714);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_l_painter_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 1714:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!/Users/lisicheng/project/lijian/uni_modules/lime-painter/components/l-painter/l-painter.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/lime-painter/components/l-painter/l-painter.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/lime-painter/components/l-painter/l-painter-create-component',
    {
        'uni_modules/lime-painter/components/l-painter/l-painter-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(1704))
        })
    },
    [['uni_modules/lime-painter/components/l-painter/l-painter-create-component']]
]);
