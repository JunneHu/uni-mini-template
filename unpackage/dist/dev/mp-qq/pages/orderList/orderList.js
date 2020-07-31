(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/orderList/orderList"],{

/***/ 29:
/*!***********************************************************************************************!*\
  !*** D:/myspace/myAppDemo/uni-mini-template/main.js?{"page":"pages%2ForderList%2ForderList"} ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _orderList = _interopRequireDefault(__webpack_require__(/*! ./pages/orderList/orderList.vue */ 30));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_orderList.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 30:
/*!****************************************************************************!*\
  !*** D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./orderList.vue?vue&type=template&id=3c225ab8& */ 31);
/* harmony import */ var _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderList.vue?vue&type=script&lang=js& */ 33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderList.vue?vue&type=style&index=0&lang=less& */ 37);
/* harmony import */ var _tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 31:
/*!***********************************************************************************************************!*\
  !*** D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue?vue&type=template&id=3c225ab8& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderList.vue?vue&type=template&id=3c225ab8& */ 32);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_template_id_3c225ab8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 32:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue?vue&type=template&id=3c225ab8& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 33:
/*!*****************************************************************************************************!*\
  !*** D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderList.vue?vue&type=script&lang=js& */ 34);
/* harmony import */ var _tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 34:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

























































var _index = _interopRequireDefault(__webpack_require__(/*! ../../config/index.js */ 17));
var _index2 = __webpack_require__(/*! ../../utils/index.js */ 18);


var _moment = _interopRequireDefault(__webpack_require__(/*! ../../common/js/moment.js */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(n);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}var _default =
{
  data: function data() {
    return {
      postData: {
        pageIndex: 1,
        pageSize: 10,
        orderStatus: 0 },

      noMoreData: false,
      listData: [],
      total: -1 };

  },
  onLoad: function onLoad() {
    this.init();
  },
  methods: {
    init: function init() {var

      postData =
      this.postData;
      postData.pageIndex = 1;
      this.postData = postData;
      this.getList();
    },
    getList: function getList() {var _this = this;
      this.noMoreData = false;var

      postData =
      this.postData;
      // 获取商品列表
      (0, _index2.httpsRequest)(_index.default.api.getOrderList, 'GET', postData, function (data) {
        if (data.code === '1000') {
          if (data.data.current === data.data.pageTotal) {
            _this.noMoreData = true;
          } else {
            _this.noMoreData = false;
          }
          var list = [].concat(_toConsumableArray(_this.listData), _toConsumableArray(data.data.list));
          _this.listData = list;
          _this.total = data.data.total;
          _this.pageTotal = data.data.pageTotal;
        } else if (data.code == '1013' || data.code == '1014' || data.code == '1015') {
          uni.reLaunch({
            url: '/pages/my/my' });

        }
      }, true, function () {
        _this.isErrorRequest = true;
      });
    },
    lower: function lower() {var

      postData =

      this.postData,pageTotal = this.pageTotal;
      if (pageTotal > postData.pageIndex) {
        postData.pageIndex += 1;
        this.postData = postData;
        this.getList();
      }
    },
    checkCurrent: function checkCurrent(val) {var

      postData =
      this.postData;
      var tab = postData.orderStatus;
      if (val === tab) {
        return false;
      }
      postData.pageIndex = 1;
      postData.orderStatus = val;
      this.postData = postData;
      this.listData = [];
      this.getList();
    },
    onPullDownRefresh: function onPullDownRefresh() {var

      postData =
      this.postData;
      postData.pageIndex = 1;
      this.postData = postData;
      this.listData = [];
      this.isErrorRequest = false;
      this.total = -1;
      this.init();
    },
    toIndex: function toIndex() {
      uni.reLaunch({
        url: '/pages/index/index' });

    },
    toOrderStatus: function toOrderStatus(item) {
      uni.navigateTo({
        url: "/pages/orderStatus/orderStatus?oid=".concat(item.orderNo) });

    },
    toCard: function toCard(val) {
      uni.navigateTo({
        url: "/pages/getCard/getCard?oid=".concat(val.orderNo) });

    },
    toPay: function toPay(val) {
      var now = (0, _moment.default)((0, _moment.default)().format()).valueOf(); // 当前时间
      var oTime = (0, _moment.default)(val.orderTime).valueOf(); // 订单时间
      var time = ((now - oTime) / 1000).toFixed(0);
      if (time > 1200) {
        uni.showToast({
          icon: 'none',
          content: '订单已关闭！' });

        this.onPullDownRefresh();
        return;
      } else {
        uni.navigateTo({
          url: "/pages/sureOrder/sureOrder?oid=".concat(val.orderNo) });

      }
    },
    toDetail: function toDetail(val) {
      uni.navigateTo({
        url: "/pages/detail/detail?id=".concat(val.childCategoryId, "&pid=").concat(val.productId) });

    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-qq/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 37:
/*!**************************************************************************************************************!*\
  !*** D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue?vue&type=style&index=0&lang=less& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--10-oneOf-1-3!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../tools/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./orderList.vue?vue&type=style&index=0&lang=less& */ 38);
/* harmony import */ var _tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_tools_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_tools_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_2_tools_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_3_tools_HBuilderX_plugins_uniapp_cli_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_4_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_oneOf_1_5_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_tools_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_orderList_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 38:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-2!./node_modules/postcss-loader/src??ref--10-oneOf-1-3!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/myspace/myAppDemo/uni-mini-template/pages/orderList/orderList.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[29,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyIsIndlYnBhY2s6Ly8vRDovbXlzcGFjZS9teUFwcERlbW8vdW5pLW1pbmktdGVtcGxhdGUvcGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC52dWU/NTZmYiIsIndlYnBhY2s6Ly8vRDovbXlzcGFjZS9teUFwcERlbW8vdW5pLW1pbmktdGVtcGxhdGUvcGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC52dWU/NGY2OSIsIndlYnBhY2s6Ly8vRDovbXlzcGFjZS9teUFwcERlbW8vdW5pLW1pbmktdGVtcGxhdGUvcGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC52dWU/YTYwYyIsIndlYnBhY2s6Ly8vRDovbXlzcGFjZS9teUFwcERlbW8vdW5pLW1pbmktdGVtcGxhdGUvcGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC52dWU/NmM4ZiIsInVuaS1hcHA6Ly8vcGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0Q6L215c3BhY2UvbXlBcHBEZW1vL3VuaS1taW5pLXRlbXBsYXRlL3BhZ2VzL29yZGVyTGlzdC9vcmRlckxpc3QudnVlPzdhMjkiLCJ3ZWJwYWNrOi8vL0Q6L215c3BhY2UvbXlBcHBEZW1vL3VuaS1taW5pLXRlbXBsYXRlL3BhZ2VzL29yZGVyTGlzdC9vcmRlckxpc3QudnVlP2M5NGIiXSwibmFtZXMiOlsiY3JlYXRlUGFnZSIsIlBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7a0RBQUE7QUFDQTtBQUNBLHdHO0FBQ0FBLFVBQVUsQ0FBQ0Msa0JBQUQsQ0FBVixDOzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXNIO0FBQ3RIO0FBQzZEO0FBQ0w7QUFDYzs7O0FBR3RFO0FBQzRLO0FBQzVLLGdCQUFnQixtTEFBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsd0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZCZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBbXBCLENBQWdCLGlwQkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMwRHZxQjtBQUNBOzs7QUFHQSwrRjtBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLG9CQUZBO0FBR0Esc0JBSEEsRUFEQTs7QUFNQSx1QkFOQTtBQU9BLGtCQVBBO0FBUUEsZUFSQTs7QUFVQSxHQVpBO0FBYUEsUUFiQSxvQkFhQTtBQUNBO0FBQ0EsR0FmQTtBQWdCQTtBQUNBLFFBREEsa0JBQ0E7O0FBRUEsY0FGQTtBQUdBLFVBSEEsQ0FFQSxRQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLFdBVEEscUJBU0E7QUFDQSw4QkFEQTs7QUFHQSxjQUhBO0FBSUEsVUFKQSxDQUdBLFFBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FWQSxNQVVBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQTtBQUNBLE9BaEJBLEVBZ0JBLElBaEJBLEVBZ0JBO0FBQ0E7QUFDQSxPQWxCQTtBQW1CQSxLQWxDQTtBQW1DQSxTQW5DQSxtQkFtQ0E7O0FBRUEsY0FGQTs7QUFJQSxVQUpBLENBRUEsUUFGQSxDQUdBLFNBSEEsR0FJQSxJQUpBLENBR0EsU0FIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTdDQTtBQThDQSxnQkE5Q0Esd0JBOENBLEdBOUNBLEVBOENBOztBQUVBLGNBRkE7QUFHQSxVQUhBLENBRUEsUUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBM0RBO0FBNERBLHFCQTVEQSwrQkE0REE7O0FBRUEsY0FGQTtBQUdBLFVBSEEsQ0FFQSxRQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0RUE7QUF1RUEsV0F2RUEscUJBdUVBO0FBQ0E7QUFDQSxpQ0FEQTs7QUFHQSxLQTNFQTtBQTRFQSxpQkE1RUEseUJBNEVBLElBNUVBLEVBNEVBO0FBQ0E7QUFDQSx1RUFEQTs7QUFHQSxLQWhGQTtBQWlGQSxVQWpGQSxrQkFpRkEsR0FqRkEsRUFpRkE7QUFDQTtBQUNBLDhEQURBOztBQUdBLEtBckZBO0FBc0ZBLFNBdEZBLGlCQXNGQSxHQXRGQSxFQXNGQTtBQUNBLGdGQURBLENBQ0E7QUFDQSxnRUFGQSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSwyQkFGQTs7QUFJQTtBQUNBO0FBQ0EsT0FQQSxNQU9BO0FBQ0E7QUFDQSxvRUFEQTs7QUFHQTtBQUNBLEtBdEdBO0FBdUdBLFlBdkdBLG9CQXVHQSxHQXZHQSxFQXVHQTtBQUNBO0FBQ0Esa0dBREE7O0FBR0EsS0EzR0EsRUFoQkEsRTs7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFrc0MsQ0FBZ0IseW5DQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7QUNBdHRDO0FBQ0EsT0FBTyxLQUFVLEVBQUUsa0JBS2QiLCJmaWxlIjoicGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi9wYWdlcy9vcmRlckxpc3Qvb3JkZXJMaXN0LnZ1ZSdcbmNyZWF0ZVBhZ2UoUGFnZSkiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL29yZGVyTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MyMjVhYjgmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9vcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9vcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL29yZGVyTGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWxlc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwibXlzcGFjZS9teUFwcERlbW8vdW5pLW1pbmktdGVtcGxhdGUvcGFnZXMvb3JkZXJMaXN0L29yZGVyTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tMTYtMCEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL29yZGVyTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MyMjVhYjgmXCIiLCJ2YXIgY29tcG9uZW50c1xudmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMi0xIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby93ZWJwYWNrLXVuaS1tcC1sb2FkZXIvbGliL3NjcmlwdC5qcyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9vcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEyLTEhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc2NyaXB0LmpzIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vd2VicGFjay11bmktbXAtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL29yZGVyTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJsaXN0cy1wYWdlXCI+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRvcFRhYlN3aXBlclwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiIEBjbGljaz1cImNoZWNrQ3VycmVudCgwKVwiPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz0ncG9zdERhdGEub3JkZXJTdGF0dXMgPT0gMCA/IFwidGFiQm9yZXJcIiA6IFwiXCInPuWFqOmDqDwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiIEBjbGljaz1cImNoZWNrQ3VycmVudCgxKVwiPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz0ncG9zdERhdGEub3JkZXJTdGF0dXMgPT0gMSA/IFwidGFiQm9yZXJcIiA6IFwiXCInPuW+heS7mOasvjwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiIEBjbGljaz1cImNoZWNrQ3VycmVudCgyKVwiPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz0ncG9zdERhdGEub3JkZXJTdGF0dXMgPT0gMiA/IFwidGFiQm9yZXJcIiA6IFwiXCInPuWFheWAvOaIkOWKnzwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInRhYlwiIEBjbGljaz1cImNoZWNrQ3VycmVudCgzKVwiPlxyXG5cdFx0XHRcdDx0ZXh0IDpjbGFzcz0ncG9zdERhdGEub3JkZXJTdGF0dXMgPT0gMyA/IFwidGFiQm9yZXJcIiA6IFwiXCInPuWFheWAvOWksei0pTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHNjcm9sbC12aWV3IHYtaWY9XCJ0b3RhbD4wXCIgc2Nyb2xsLXk9XCJ0cnVlXCIgQHNjcm9sbHRvbG93ZXI9XCJsb3dlclwiIGNsYXNzPVwibGlzdC1zY3JvbGxcIj5cclxuXHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1saXN0XCI+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJvcmRlci1kZXRhaWwtYm94XCIgdi1mb3I9XCJpdGVtIGluIGxpc3REYXRhXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBAY2xpY2s9XCJ0b09yZGVyU3RhdHVzKGl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm94LXRvcFwiPlxyXG5cdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2FyZC10aW1lIGJveC1sZWZ0XCI+e3tpdGVtLm9yZGVyVGltZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNhcmQtc3RhdHVzIGJveC1yaWdodCBncmVlbi1mb250XCIgdi1pZj1cIml0ZW0ub3JkZXJTdGF0dXMgPT0gNTEgfHwgaXRlbS5vcmRlclN0YXR1cyA9PSA3MVwiPnt7aXRlbS5vcmRlclN0YXR1c1RleHR9fTwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNhcmQtc3RhdHVzIGJveC1yaWdodCByZWQtZm9udFwiIHYtZWxzZS1pZj1cIml0ZW0ub3JkZXJTdGF0dXMgPT0gNjFcIj57e2l0ZW0ub3JkZXJTdGF0dXNUZXh0fX08L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJjYXJkLXN0YXR1cyBib3gtcmlnaHRcIiB2LWVsc2UtaWY9XCJpdGVtLm9yZGVyU3RhdHVzID09IDE1XCI+e3tpdGVtLm9yZGVyU3RhdHVzVGV4dH19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNhcmQtc3RhdHVzIGJveC1yaWdodCBvcmFuZ2UtZm9udFwiIHYtZWxzZT57e2l0ZW0ub3JkZXJTdGF0dXNUZXh0fX0gPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0XHRcdDx2aWV3IGNsYXNzPVwiYm94LWJvdHRvbVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxpbWFnZSA6c3JjPVwiaXRlbS5wcm9kdWN0SW1nXCIgY2xhc3M9XCJsb2dvXCIgLz5cclxuXHRcdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cIm9yZGVyLWluZm9cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwibmFtZVwiPnt7aXRlbS5wcm9kdWN0TmFtZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwicHJpY2VcIj7CpXt7aXRlbS5wYXlQcmljZX19IDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0XHQ8L3RleHQ+XHJcblx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJvcmRlci1yaWdodFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJyLWppZmVuXCIgdi1pZj1cIml0ZW0uaW50ZWdyYWxcIj4gPHRleHQgY2xhc3M9XCJ0dWlrdWFuXCIgdi1pZj1cIml0ZW0ucG9pbnRTdGF0ZSA9PSAxXCI+6YCAPC90ZXh0Pnt7aXRlbS5pbnRlZ3JhbH1956ev5YiGPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGV4dD5cclxuXHRcdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHRcdFx0PHZpZXcgY2xhc3M9XCJidG4tYmdcIj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cInItYnRuXCIgdi1pZj1cIml0ZW0ub3JkZXJTdGF0dXMgPT0gMTFcIiBAY2xpY2s9XCJ0b1BheShpdGVtKVwiPuWOu+aUr+S7mDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwici1idG5cIiB2LWlmPVwiaXRlbS5vcmRlclN0YXR1cyA9PSAxNVwiIEBjbGljaz1cInRvRGV0YWlsKGl0ZW0pXCI+57un57ut5LiL5Y2VPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJyLWJ0blwiIHYtaWY9XCJpdGVtLnByb2R1Y3RUeXBlID09IDMgJiYgaXRlbS5vcmRlclN0YXR1cyA9PSA1MVwiIEBjbGljaz1cInRvQ2FyZChpdGVtKVwiPuS9v+eUqOWNoeWIuDwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwici1idG5cIiB2LWlmPVwiaXRlbS5vcmRlclN0YXR1cyA9PSA3MVwiIEBjbGljaz1cInRvRGV0YWlsKGl0ZW0pXCI+6YeN5paw5LiL5Y2VPC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJyLWJ0blwiIHYtaWY9XCJpdGVtLm9yZGVyU3RhdHVzID09IDUxXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj7lho3mnaXkuIDljZU8L2J1dHRvbj5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PHZpZXcgY2xhc3M9XCJuby1tb3JlXCIgdi1pZj1cIm5vTW9yZURhdGFcIj7lt7Lnu4/liLDlupXllabvvZ48L3ZpZXc+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvc2Nyb2xsLXZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cIm5vdGhpbmctYmdcIiB2LWlmPVwidG90YWw9PTBcIj5cclxuXHRcdFx0PGltYWdlIHNyYz1cImh0dHBzOi8vZnVsdS1tYWxsLm9zcy1jbi1oYW5nemhvdS5hbGl5dW5jcy5jb20vMDUzZDVlOTBhMGQxNDFjNGE0YmNkODFjOWNkNDNmZDIucG5nXCIgY2xhc3M9XCJub3RoaW5nLW1haW5cIiAvPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cIm5vdGhpbmctdGV4dFwiPuaaguaXoOaVsOaNrjwvdmlldz5cclxuXHRcdFx0PGJ1dHRvbiBzaXplPVwiZGVmYXVsdFwiIHR5cGU9XCJwcmltYXJ5XCIgY2xhc3M9XCJ0b0luZGV4XCIgQGNsaWNrPVwidG9JbmRleFwiPuWOu+mmlumhtemAm+mAmzwvYnV0dG9uPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGNvbmZpZyBmcm9tICcuLi8uLi9jb25maWcvaW5kZXguanMnXHJcblx0aW1wb3J0IHtcclxuXHRcdGh0dHBzUmVxdWVzdFxyXG5cdH0gZnJvbSAnLi4vLi4vdXRpbHMvaW5kZXguanMnO1xyXG5cdGltcG9ydCBtb21lbnQgZnJvbSAnLi4vLi4vY29tbW9uL2pzL21vbWVudC5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHBvc3REYXRhOiB7XHJcblx0XHRcdFx0XHRwYWdlSW5kZXg6IDEsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogMTAsXHJcblx0XHRcdFx0XHRvcmRlclN0YXR1czogMFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0bm9Nb3JlRGF0YTogZmFsc2UsXHJcblx0XHRcdFx0bGlzdERhdGE6IFtdLFxyXG5cdFx0XHRcdHRvdGFsOiAtMSxcclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuaW5pdCgpO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0aW5pdCgpIHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRwb3N0RGF0YVxyXG5cdFx0XHRcdH0gPSB0aGlzO1xyXG5cdFx0XHRcdHBvc3REYXRhLnBhZ2VJbmRleCA9IDE7XHJcblx0XHRcdFx0dGhpcy5wb3N0RGF0YSA9IHBvc3REYXRhXHJcblx0XHRcdFx0dGhpcy5nZXRMaXN0KClcclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0TGlzdCgpIHtcclxuXHRcdFx0XHR0aGlzLm5vTW9yZURhdGEgPSBmYWxzZVxyXG5cdFx0XHRcdGNvbnN0IHtcclxuXHRcdFx0XHRcdHBvc3REYXRhXHJcblx0XHRcdFx0fSA9IHRoaXM7XHJcblx0XHRcdFx0Ly8g6I635Y+W5ZWG5ZOB5YiX6KGoXHJcblx0XHRcdFx0aHR0cHNSZXF1ZXN0KGNvbmZpZy5hcGkuZ2V0T3JkZXJMaXN0LCAnR0VUJywgcG9zdERhdGEsIChkYXRhKSA9PiB7XHJcblx0XHRcdFx0XHRpZihkYXRhLmNvZGUgPT09ICcxMDAwJyl7XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhLmRhdGEuY3VycmVudCA9PT0gZGF0YS5kYXRhLnBhZ2VUb3RhbCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMubm9Nb3JlRGF0YSA9IHRydWVcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLm5vTW9yZURhdGEgPSBmYWxzZVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxldCBsaXN0ID0gWy4uLnRoaXMubGlzdERhdGEsIC4uLmRhdGEuZGF0YS5saXN0XVxyXG5cdFx0XHRcdFx0XHR0aGlzLmxpc3REYXRhID0gbGlzdDtcclxuXHRcdFx0XHRcdFx0dGhpcy50b3RhbCA9IGRhdGEuZGF0YS50b3RhbFxyXG5cdFx0XHRcdFx0XHR0aGlzLnBhZ2VUb3RhbCA9IGRhdGEuZGF0YS5wYWdlVG90YWxcclxuXHRcdFx0XHRcdH1lbHNlIGlmKGRhdGEuY29kZSA9PSAnMTAxMycgfHwgZGF0YS5jb2RlID09ICcxMDE0JyB8fCBkYXRhLmNvZGUgPT0gJzEwMTUnKSB7XHJcblx0XHRcdFx0XHRcdHVuaS5yZUxhdW5jaCh7XHJcblx0XHRcdFx0XHRcdFx0dXJsOicvcGFnZXMvbXkvbXknXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSwgdHJ1ZSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5pc0Vycm9yUmVxdWVzdCA9IHRydWVcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0bG93ZXIoKSB7XHJcblx0XHRcdFx0Y29uc3Qge1xyXG5cdFx0XHRcdFx0cG9zdERhdGEsXHJcblx0XHRcdFx0XHRwYWdlVG90YWxcclxuXHRcdFx0XHR9ID0gdGhpcztcclxuXHRcdFx0XHRpZiAocGFnZVRvdGFsID4gcG9zdERhdGEucGFnZUluZGV4KSB7XHJcblx0XHRcdFx0XHRwb3N0RGF0YS5wYWdlSW5kZXggKz0gMTtcclxuXHRcdFx0XHRcdHRoaXMucG9zdERhdGEgPSBwb3N0RGF0YTtcclxuXHRcdFx0XHRcdHRoaXMuZ2V0TGlzdCgpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjaGVja0N1cnJlbnQodmFsKSB7XHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdHBvc3REYXRhXHJcblx0XHRcdFx0fSA9IHRoaXM7XHJcblx0XHRcdFx0bGV0IHRhYiA9IHBvc3REYXRhLm9yZGVyU3RhdHVzXHJcblx0XHRcdFx0aWYgKHZhbCA9PT0gdGFiKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2VcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cG9zdERhdGEucGFnZUluZGV4ID0gMTtcclxuXHRcdFx0XHRwb3N0RGF0YS5vcmRlclN0YXR1cyA9IHZhbDtcclxuXHRcdFx0XHR0aGlzLnBvc3REYXRhID0gcG9zdERhdGFcclxuXHRcdFx0XHR0aGlzLmxpc3REYXRhID0gW11cclxuXHRcdFx0XHR0aGlzLmdldExpc3QoKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuXHRcdFx0XHRjb25zdCB7XHJcblx0XHRcdFx0XHRwb3N0RGF0YVxyXG5cdFx0XHRcdH0gPSB0aGlzO1xyXG5cdFx0XHRcdHBvc3REYXRhLnBhZ2VJbmRleCA9IDE7XHJcblx0XHRcdFx0dGhpcy5wb3N0RGF0YSA9IHBvc3REYXRhO1xyXG5cdFx0XHRcdHRoaXMubGlzdERhdGEgPSBbXTtcclxuXHRcdFx0XHR0aGlzLmlzRXJyb3JSZXF1ZXN0ID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy50b3RhbCA9IC0xXHJcblx0XHRcdFx0dGhpcy5pbml0KClcclxuXHRcdFx0fSxcclxuXHRcdFx0dG9JbmRleCgpIHtcclxuXHRcdFx0XHR1bmkucmVMYXVuY2goe1xyXG5cdFx0XHRcdFx0dXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvT3JkZXJTdGF0dXMoaXRlbSkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9vcmRlclN0YXR1cy9vcmRlclN0YXR1cz9vaWQ9JHtpdGVtLm9yZGVyTm99YFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvQ2FyZCh2YWwpIHtcclxuXHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHR1cmw6IGAvcGFnZXMvZ2V0Q2FyZC9nZXRDYXJkP29pZD0ke3ZhbC5vcmRlck5vfWAsXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvUGF5KHZhbCkge1xyXG5cdFx0XHRcdGNvbnN0IG5vdyA9IG1vbWVudChtb21lbnQoKS5mb3JtYXQoKSkudmFsdWVPZigpOyAvLyDlvZPliY3ml7bpl7RcclxuXHRcdFx0XHRjb25zdCBvVGltZSA9IG1vbWVudCh2YWwub3JkZXJUaW1lKS52YWx1ZU9mKCk7IC8vIOiuouWNleaXtumXtFxyXG5cdFx0XHRcdGNvbnN0IHRpbWUgPSAoKG5vdyAtIG9UaW1lKSAvIDEwMDApLnRvRml4ZWQoMCk7XHJcblx0XHRcdFx0aWYgKHRpbWUgPiAxMjAwKSB7XHJcblx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiAn6K6i5Y2V5bey5YWz6Zet77yBJyxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0dGhpcy5vblB1bGxEb3duUmVmcmVzaCgpO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1bmkubmF2aWdhdGVUbyh7XHJcblx0XHRcdFx0XHRcdHVybDogYC9wYWdlcy9zdXJlT3JkZXIvc3VyZU9yZGVyP29pZD0ke3ZhbC5vcmRlck5vfWAsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHRvRGV0YWlsKHZhbCkge1xyXG5cdFx0XHRcdHVuaS5uYXZpZ2F0ZVRvKHtcclxuXHRcdFx0XHRcdHVybDogYC9wYWdlcy9kZXRhaWwvZGV0YWlsP2lkPSR7dmFsLmNoaWxkQ2F0ZWdvcnlJZH0mcGlkPSR7dmFsLnByb2R1Y3RJZH1gLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cclxuXHQubGlzdHMtcGFnZSB7XHJcblx0XHR3aWR0aDogNzUwcnB4O1xyXG5cdFx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG5cclxuXHRcdC50b3BUYWJTd2lwZXIge1xyXG5cdFx0XHR6b29tOiAxO1xyXG5cdFx0XHRoZWlnaHQ6IDExMHJweDtcclxuXHJcblx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRcdFx0Y2xlYXI6IGJvdGg7XHJcblx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdC50YWIge1xyXG5cdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdFx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdFx0XHRjb2xvcjogIzY2NjtcclxuXHJcblx0XHRcdFx0LnRhYkJvcmVyIHtcclxuXHRcdFx0XHRcdGJvcmRlci1ib3R0b206IDRycHggc29saWQgIzEzMzUyMztcclxuXHRcdFx0XHRcdGNvbG9yOiAjMTMzNTIzO1xyXG5cdFx0XHRcdFx0cGFkZGluZy1ib3R0b206IDIwcnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5saXN0LXNjcm9sbCB7XHJcblx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdGhlaWdodDogY2FsYygxMDB2aCAtIDExMHJweCk7XHJcblxyXG5cdFx0XHQub3JkZXItbGlzdCB7XHJcblx0XHRcdFx0d2lkdGg6IDc1MHJweDtcclxuXHRcdFx0XHRwYWRkaW5nOiAwIDI0cnB4IDMycnB4O1xyXG5cdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogI0Y1RjVGNTtcclxuXHRcdFx0XHRtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcnB4KTtcclxuXHJcblx0XHRcdFx0Lm9yZGVyLWRldGFpbC1ib3gge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDcwMnJweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDIwcnB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDMzcnB4IDI1cnB4O1xyXG5cdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cclxuXHRcdFx0XHRcdC5ib3gtdG9wIHtcclxuXHRcdFx0XHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogMjhycHg7XHJcblxyXG5cdFx0XHRcdFx0XHQuYm94LWxlZnQge1xyXG5cdFx0XHRcdFx0XHRcdGZsb2F0OiBsZWZ0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQuYm94LXJpZ2h0IHtcclxuXHRcdFx0XHRcdFx0XHRmbG9hdDogcmlnaHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5jYXJkLXRpbWUge1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogMjRycHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LmNhcmQtc3RhdHVzIHtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQuZ3JlZW4tZm9udCB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICM3MkM0NzI7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5vcmFuZ2UtZm9udCB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNGRjgwMUE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRcdC5yZWQtZm9udCB7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNGRTAxMDE7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHQuYm94LWJvdHRvbSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblxyXG5cdFx0XHRcdFx0XHQubG9nbyB7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAyNnJweDtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogODBycHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA4cnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQub3JkZXItaW5mbyB7XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDMzMHJweDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0XHRcdFx0XHRcdFx0Y29sb3I6IHJnYmEoNTEsIDUxLCA1MSwgMSk7XHJcblx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI2cnB4O1xyXG5cclxuXHRcdFx0XHRcdFx0XHQubmFtZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDI1cnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyNnJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGhlaWdodDogNTZycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMjhycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAyOHJweDtcclxuXHRcdFx0XHRcdFx0XHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHRcdC5wcmljZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0Lm9yZGVyLXJpZ2h0IHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdC8vIGJhY2tncm91bmQ6IHVybCgvaW1hZ2VzL3JpZ2h0LnBuZykgdG9wIHJpZ2h0IG5vLXJlcGVhdDtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kLXNpemU6IDEyJTtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nLXJpZ2h0OiAzMHJweDtcclxuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDI2cnB4O1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdC5idG4tYmcge1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiByaWdodDtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRib3R0b206IDMwcnB4O1xyXG5cdFx0XHRcdFx0XHRyaWdodDogMjVycHg7XHJcblxyXG5cdFx0XHRcdFx0XHQuci1idG4ge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDEwcnB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogMzZycHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTdycHg7XHJcblx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAyMHJweDtcclxuXHRcdFx0XHRcdFx0XHRjb2xvcjogIzI4NkFGRjtcclxuXHRcdFx0XHRcdFx0XHRsaW5lLWhlaWdodDogMzJycHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyOiAycnB4IHNvbGlkICMyODZBRkY7XHJcblx0XHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDE2cnB4O1xyXG5cclxuXHRcdFx0XHRcdFx0XHQmLmJ0bi1ncmF5IHtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjNjY2O1xyXG5cdFx0XHRcdFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjRURFREVEO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0LnItamlmZW4ge1xyXG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHR0b3A6IC0zcnB4O1xyXG5cclxuXHRcdFx0XHRcdFx0XHQudHVpa3VhbiB7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0XHR3aWR0aDogMjZycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDI2cnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDI2cnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxOHJweDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogIzRGNEY0RjtcclxuXHRcdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhycHg7XHJcblx0XHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEzcnB4O1xyXG5cdFx0XHRcdFx0XHRcdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0XHRcdHRvcDogLTJycHg7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0Lm5vLW1vcmUge1xyXG5cdFx0XHRcdHdpZHRoOiA3NTBycHg7XHJcblx0XHRcdFx0aGVpZ2h0OiA4MHJweDtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogODBycHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdFx0XHRjb2xvcjogIzY2NjtcclxuXHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9vcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzPz9yZWYtLTEwLW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwLW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL3Rvb2xzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS0xMC1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMC1vbmVPZi0xLTQhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTEwLW9uZU9mLTEtNSEuLi8uLi8uLi8uLi8uLi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vdG9vbHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3dlYnBhY2stdW5pLW1wLWxvYWRlci9saWIvc3R5bGUuanMhLi9vcmRlckxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1sZXNzJlwiIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTU5MzY4MjI1MTA2NlxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCJEOi90b29scy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImhtclwiOnRydWUsXCJwdWJsaWNQYXRoXCI6XCIuLi8uLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0=