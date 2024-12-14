(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle/common/vendor"],{

/***/ 1495:
/*!**********************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/bundle/static/images/invitation_poster.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle/static/images/invitation_poster.png";

/***/ }),

/***/ 1529:
/*!*********************************************************************!*\
  !*** /Users/lisicheng/project/mobile/plugin/emoji-awesome/emoji.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = ['em-smile', 'em-laughing', 'em-blush', 'em-smiley', 'em-relaxed', 'em-smirk', 'em-heart_eyes', 'em-kissing_heart', 'em-kissing_closed_eyes', 'em-flushed', 'em-relieved', 'em-satisfied', 'em-grin', 'em-wink', 'em-stuck_out_tongue_winking_eye', 'em-stuck_out_tongue_closed_eyes', 'em-grinning', 'em-kissing', 'em-kissing_smiling_eyes', 'em-stuck_out_tongue', 'em-sleeping', 'em-worried', 'em-frowning', 'em-anguished', 'em-open_mouth', 'em-grimacing', 'em-confused', 'em-hushed', 'em-expressionless', 'em-unamused', 'em-sweat_smile', 'em-sweat', 'em-disappointed_relieved', 'em-weary', 'em-pensive', 'em-disappointed', 'em-confounded', 'em-fearful', 'em-cold_sweat', 'em-persevere', 'em-cry', 'em-sob', 'em-joy', 'em-astonished', 'em-scream', 'em-tired_face', 'em-angry', 'em-rage', 'em-triumph', 'em-sleepy', 'em-yum', 'em-mask', 'em-dizzy_face', 'em-sunglasses', 'em-imp', 'em-smiling_imp', 'em-neutral_face', 'em-no_mouth', 'em-innocent', 'em-alien', 'em-heart', 'em-broken_heart', 'em-hankey', 'em-thumbsup', 'em-thumbsdown', 'em-ok_hand', 'em-facepunch', 'em-fist', 'em-v', 'em-point_up', 'em-point_down', 'em-point_left', 'em-point_right', 'em-pray'];
exports.default = _default;

/***/ }),

/***/ 332:
/*!********************************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/components/mescroll-uni/mixins/mescroll-more-item.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
/**
 * mescroll-more-item的mixins, 仅在多个 mescroll-body 写在子组件时使用 (参考 mescroll-more 案例)
 */
var MescrollMoreItemMixin = {
  // 支付宝小程序不支持props的mixin,需写在具体的页面中

  props: {
    i: Number,
    // 每个tab页的专属下标
    index: {
      // 当前tab的下标
      type: Number,
      default: function _default() {
        return 0;
      }
    }
  },
  data: function data() {
    return {
      downOption: {
        auto: false // 不自动加载
      },

      upOption: {
        auto: false // 不自动加载
      },

      isInit: false // 当前tab是否已初始化
    };
  },

  watch: {
    // 监听下标的变化
    index: function index(val) {
      if (this.i === val && !this.isInit) {
        this.isInit = true; // 标记为true
        this.mescroll && this.mescroll.triggerDownScroll();
      }
    }
  },
  methods: {
    // 以ref的方式初始化mescroll对象 (兼容字节跳动小程序)
    mescrollInitByRef: function mescrollInitByRef() {
      if (!this.mescroll || !this.mescroll.resetUpScroll) {
        // 字节跳动小程序编辑器不支持一个页面存在相同的ref, 多mescroll的ref需动态生成, 格式为'mescrollRef下标'
        var mescrollRef = this.$refs.mescrollRef || this.$refs['mescrollRef' + this.i];
        if (mescrollRef) this.mescroll = mescrollRef.mescroll;
      }
    },
    // mescroll组件初始化的回调,可获取到mescroll对象 (覆盖mescroll-mixins.js的mescrollInit, 为了标记isInit)
    mescrollInit: function mescrollInit(mescroll) {
      this.mescroll = mescroll;
      this.mescrollInitByRef && this.mescrollInitByRef(); // 兼容字节跳动小程序
      // 自动加载当前tab的数据
      if (this.i === this.index) {
        this.isInit = true; // 标记为true
        this.mescroll.triggerDownScroll();
      }
    }
  }
};
var _default2 = MescrollMoreItemMixin;
exports.default = _default2;

/***/ }),

/***/ 491:
/*!************************************************************!*\
  !*** /Users/lisicheng/project/mobile/api/integral_mall.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCancelIntegralOrder = apiCancelIntegralOrder;
exports.apiConfirmIntegralOrder = apiConfirmIntegralOrder;
exports.apiDelIntegralOrder = apiDelIntegralOrder;
exports.apiIntegralGoods = apiIntegralGoods;
exports.apiIntegralGoodsDetail = apiIntegralGoodsDetail;
exports.apiIntegralOrder = apiIntegralOrder;
exports.apiIntegralOrderDetail = apiIntegralOrderDetail;
exports.apiIntegralOrderTraces = apiIntegralOrderTraces;
exports.apiIntegralSettlement = apiIntegralSettlement;
exports.apiIntegralSubmitOrder = apiIntegralSubmitOrder;
exports.getwechatSyncCheck = getwechatSyncCheck;
exports.getwxReceiveDetail = getwxReceiveDetail;
var _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ 35));
// 积分商城
function apiIntegralGoods(params) {
  return _request.default.get("integral_goods/lists", {
    params: params
  });
}

// 积分商品详情
function apiIntegralGoodsDetail(params) {
  return _request.default.get("integral_goods/detail", {
    params: params
  });
}

// 积分兑换订单结算
function apiIntegralSettlement(params) {
  return _request.default.get("integral_order/settlement", {
    params: params
  });
}

// 积分兑换提交订单
function apiIntegralSubmitOrder(params) {
  return _request.default.post("integral_order/submitOrder", params);
}

// 积分兑换订单列表
function apiIntegralOrder(params) {
  return _request.default.get("integral_order/lists", {
    params: params
  });
}

//删除积分兑换订单
function apiDelIntegralOrder(params) {
  return _request.default.post("integral_order/del", params);
}

//积分兑换订单订单详情
function apiIntegralOrderDetail(params) {
  return _request.default.get("integral_order/detail", {
    params: params
  });
}

//取消积分兑换订单
function apiCancelIntegralOrder(params) {
  return _request.default.post("integral_order/cancel", params);
}

//确认收货积分兑换订单
function apiConfirmIntegralOrder(params) {
  return _request.default.post("integral_order/confirm", params);
}
// 查看物流
function apiIntegralOrderTraces(params) {
  return _request.default.get("integral_order/orderTraces", {
    params: params
  });
}
//确认收货组件
function getwxReceiveDetail(params) {
  return _request.default.get("integralOrder/wxReceiveDetail", {
    params: params
  });
}
//查询确认收货
function getwechatSyncCheck(params) {
  return _request.default.get("integralOrder/wechatSyncCheck", {
    params: params
  });
}

/***/ }),

/***/ 600:
/*!*******************************************************!*\
  !*** /Users/lisicheng/project/mobile/utils/socket.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _tools = __webpack_require__(/*! ./tools */ 50);
// 
var Socket = /*#__PURE__*/function () {
  function Socket(wssUrl, data) {
    (0, _classCallCheck2.default)(this, Socket);
    (0, _defineProperty2.default)(this, "events", {
      connect: null,
      close: null,
      message: null,
      error: null,
      open: null
    });
    this.connected = false;
    this.error = false;
    this.url = "".concat(wssUrl).concat((0, _tools.paramsToStr)(data));
    this.socketTask = {};
    this.reconnectLock = true;
    this.reconnectTimeout = null;
    this.reconnectNums = 0;
    // 心跳
    this.timeout = 10000;
    this.clientTimeout = null;
    this.serverTimeout = null;
  }
  // 允许的订阅
  (0, _createClass2.default)(Socket, [{
    key: "addEvent",
    value:
    // 添加订阅
    function addEvent(type, callback) {
      this.events[type] = callback;
    }

    // 触发订阅
  }, {
    key: "dispatch",
    value: function dispatch(type, data) {
      var fun = this.events[type];
      fun && fun(data);
    }
  }, {
    key: "connect",
    value: function connect() {
      // 已经连接则无需重复连接
      if (this.connected) return;
      this.dispatch('connect');
      this.socketTask = uni.connectSocket({
        url: this.url,
        complete: function complete() {}
      });
      this.socketTask.onOpen(this.onOpen.bind(this));
      this.socketTask.onError(this.onError.bind(this));
      this.socketTask.onMessage(this.onMessage.bind(this));
      this.socketTask.onClose(this.onClose.bind(this));
    }
  }, {
    key: "close",
    value: function close() {
      this.reconnectLock = false;
      clearTimeout(this.clientTimeout);
      clearTimeout(this.serverTimeout);
      this.socketTask.close && this.socketTask.close();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
      var _this = this;
      if (!this.reconnectLock) {
        return;
      }
      // 重连次数过多，断开不重连
      if (this.reconnectNums >= 5) {
        return;
      }
      this.reconnectNums++;
      this.reconnectLock = false;
      // 延迟重连请求过多
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = setTimeout(function () {
        _this.connect();
        _this.reconnectLock = true;
      }, 4000);
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;
      clearTimeout(this.clientTimeout);
      clearTimeout(this.serverTimeout);
      this.clientTimeout = setTimeout(function () {
        _this2.send({
          event: 'ping'
        });
        _this2.serverTimeout = setTimeout(function () {
          _this2.socketTask.close();
        }, _this2.timeout);
      }, this.timeout);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.reconnectNums = 0;
      this.start();
    }
  }, {
    key: "send",
    value: function send(data) {
      // 如果socket已连接则发送消息
      if (!this.connected) {
        return;
      }
      var datas = JSON.stringify(data);
      // console.log('发送信息:' + datas)
      this.socketTask.send({
        data: datas
      });
    }
  }, {
    key: "onOpen",
    value: function onOpen() {
      this.connected = true;

      // 开启心跳
      this.start();

      // console.log('连接成功')

      this.dispatch('open');
    }
  }, {
    key: "onError",
    value: function onError(res) {
      this.error = true;
      this.connected = false;
      this.dispatch('error');
      // console.log('连接错误', res)
    }
  }, {
    key: "onMessage",
    value: function onMessage(_ref) {
      var data = _ref.data;
      this.dispatch('message', JSON.parse(data));
      // console.log('收到信息:', data)
      // 重置心跳
      this.reset();
    }
  }, {
    key: "onClose",
    value: function onClose(res) {
      this.dispatch('close');
      // console.log('连接已关闭', res)
      this.connected = false;
      this.reconnect();
    }
  }]);
  return Socket;
}();
var _default = Socket;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 601:
/*!*****************************************************!*\
  !*** /Users/lisicheng/project/mobile/utils/date.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeFormatChat = exports.timeFormat = void 0;
var weekArr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

/**
 * @description 时间格式化
 * @param dateTime { number } 时间错
 * @param fmt { string } 时间格式
 * @return { string }
 */
// yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合
var timeFormat = function timeFormat(dateTime) {
  var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  // 如果为null,则格式化当前时间
  if (!dateTime) dateTime = Number(new Date());
  // 如果dateTime长度为10或者13，则为秒和毫秒的时间戳，如果超过13位，则为其他的时间格式
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var ret;
  var opt = {
    'y+': date.getFullYear().toString(),
    // 年
    'm+': (date.getMonth() + 1).toString(),
    // 月
    'd+': date.getDate().toString(),
    // 日
    'h+': date.getHours().toString(),
    // 时
    'M+': date.getMinutes().toString(),
    // 分
    's+': date.getSeconds().toString() // 秒
  };

  for (var k in opt) {
    ret = new RegExp('(' + k + ')').exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'));
    }
  }
  return fmt;
};

/**
 * @description 聊天记录专用时间格式化
 * @param dateTime { number } 时间错
 * @return { string }
 */
exports.timeFormat = timeFormat;
var timeFormatChat = function timeFormatChat(dateTime) {
  if (dateTime.toString().length == 10) dateTime *= 1000;
  var date = new Date(dateTime);
  var fmt = timeFormat(dateTime, 'yyyy年mm月dd日 hh:MM');
  if (isToday(date)) {
    fmt = timeFormat(dateTime, 'hh:MM');
  } else if (isThisWeak(date)) {
    fmt = weekArr[date.getDay()] + timeFormat(dateTime, ' hh:MM');
  } else if (isThisYear(date)) {
    fmt = timeFormat(dateTime, 'mm月dd日 hh:MM');
  }
  return fmt;
};

// 是否是今年
exports.timeFormatChat = timeFormatChat;
var isThisYear = function isThisYear(date) {
  var now = new Date();
  return date.getYear() == now.getYear();
};

// 是否是今月
var isThisMonth = function isThisMonth(date) {
  var now = new Date();
  return isThisYear(date) && date.getMonth() == now.getMonth();
};

// 是否是今天
var isToday = function isToday(date) {
  var now = new Date();
  return isThisMonth(date) && date.getDate() == now.getDate();
};
// 是否本周
var isThisWeak = function isThisWeak(date) {
  var now = new Date();
  if (isThisMonth(date)) {
    if (now.getDay() - date.getDay() > 0 && now.getDate() - date.getDate() < 7) {
      return true;
    }
  } else {
    return false;
  }
};

/***/ }),

/***/ 616:
/*!********************************************************************************!*\
  !*** /Users/lisicheng/project/mobile/bundle/static/images/user_sign_close.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 715:
/*!*************************************************************!*\
  !*** /Users/lisicheng/project/mobile/api/live_broadcast.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiLiveRoomLists = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ 35));
// 直播间列表
var apiLiveRoomLists = function apiLiveRoomLists(params) {
  return _request.default.get('LiveRoom/lists', {
    params: params
  });
};
exports.apiLiveRoomLists = apiLiveRoomLists;

/***/ }),

/***/ 724:
/*!********************************************************!*\
  !*** /Users/lisicheng/project/mobile/api/luck_draw.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiLuckyDrawWinningList = exports.apiLuckyDrawStart = exports.apiLuckyDrawRecord = exports.apiLuckyDrawActivity = void 0;
var _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ 35));
// 抽奖记录
var apiLuckyDrawRecord = function apiLuckyDrawRecord(params) {
  return _request.default.get('lucky_draw/record', {
    params: params
  });
};

// 中奖记录
exports.apiLuckyDrawRecord = apiLuckyDrawRecord;
var apiLuckyDrawWinningList = function apiLuckyDrawWinningList(params) {
  return _request.default.get('lucky_draw/winningList', {
    params: params
  });
};

// 抽奖活动信息
exports.apiLuckyDrawWinningList = apiLuckyDrawWinningList;
var apiLuckyDrawActivity = function apiLuckyDrawActivity(params) {
  return _request.default.get('lucky_draw/activity', {
    params: params
  });
};

// 开始抽奖
exports.apiLuckyDrawActivity = apiLuckyDrawActivity;
var apiLuckyDrawStart = function apiLuckyDrawStart(params) {
  return _request.default.post('lucky_draw/lottery', params);
};
exports.apiLuckyDrawStart = apiLuckyDrawStart;

/***/ }),

/***/ 797:
/*!****************************************************************!*\
  !*** /Users/lisicheng/project/mobile/mixins/integral_order.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ 30));
var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ 32));
var _integral_mall = __webpack_require__(/*! @/api/integral_mall */ 491);
var _tools = __webpack_require__(/*! @/utils/tools */ 50);
var _store = _interopRequireDefault(__webpack_require__(/*! @/store */ 40));
// 订单Mixins

var OrderMixin = {
  data: function data() {
    return {
      // 订单按钮组
      ButtonsMap: {
        payment: {
          event: 'payment',
          name: '立即付款',
          style: 'primary'
        },
        succeed: {
          event: 'succeed',
          name: '确认收货',
          style: 'normal'
        },
        express: {
          event: 'express',
          name: '查看物流',
          style: 'muted'
        },
        close: {
          event: 'close',
          name: '取消订单',
          style: 'muted'
        },
        delete: {
          event: 'delete',
          name: '删除订单',
          style: 'muted'
        }
      }
    };
  },
  methods: {
    // 获取订单状态按钮组
    getOrderStatusButtons: function getOrderStatusButtons(buttonStatus) {
      var buttons = [];

      // 删除
      buttonStatus.del_btn && buttons.push(this.ButtonsMap['delete']);
      // 取消
      buttonStatus.cancel_btn && buttons.push(this.ButtonsMap['close']);
      // 物流
      buttonStatus.delivery_btn && buttons.push(this.ButtonsMap['express']);
      // 收货
      buttonStatus.confirm_btn && buttons.push(this.ButtonsMap['succeed']);
      // 支付
      buttonStatus.pay_btn && buttons.push(this.ButtonsMap['payment']);
      return buttons;
    },
    // 点击订单按钮映射处理方法
    onOrderButtons: function onOrderButtons(event, orderID, pay_way) {
      switch (event) {
        case 'payment':
          return this.handlePayment(orderID);
        case 'succeed':
          return this.handleSucceed(orderID, pay_way);
        case 'express':
          return this.handleExpress(orderID);
        case 'close':
          return this.handleClose(orderID);
        case 'delete':
          return this.handleDelete(orderID);
      }
    },
    // 刷新订单数据
    refreshOrderData: function refreshOrderData() {
      throw new Error('未初始化刷新方法');
    },
    // 处理：支付
    handlePayment: function handlePayment(orderID) {
      this.$Router.push({
        path: "/pages/payment/payment",
        query: {
          from: 'integral',
          order_id: orderID
        }
      });
    },
    // 小程序确认收货
    comfirmReceive: function comfirmReceive(transaction_id) {
      return new Promise(function (resolve, reject) {
        wx.openBusinessView({
          businessType: 'weappOrderConfirm',
          extraData: {
            transaction_id: transaction_id
          },
          success: function success(_ref) {
            var extraData = _ref.extraData;
            if (extraData.status == 'success') {
              resolve('确认收货');
            } else {
              resolve('取消收货');
            }
          },
          fail: function fail(err) {
            reject(err);
          }
        });
      });
    },
    //查询是否收货成功
    querycomfirmReceive: function querycomfirmReceive(id) {
      return new Promise(function (resolve, reject) {
        (0, _integral_mall.getwechatSyncCheck)({
          id: id
        }).then(function (data) {
          if (data.order.order_state === 4) {
            resolve('已确认收货');
          } else {
            reject('未确认收货');
          }
        }).catch(function (err) {
          reject(err);
        });
      });
    },
    // 处理：确认收货
    handleSucceed: function handleSucceed(orderID, pay_way) {
      var _this = this;
      return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var res, _yield$getwxReceiveDe, transaction_id;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log(pay_way);
                if (!_store.default.state.app.config.mini_express_send_sync) {
                  _context.next = 30;
                  break;
                }
                res = {};
                if (!(pay_way === 2)) {
                  _context.next = 7;
                  break;
                }
                _context.next = 6;
                return (0, _integral_mall.getwechatSyncCheck)({
                  id: orderID
                });
              case 6:
                res = _context.sent;
              case 7:
                if (!((0, _tools.compareWeChatVersion)('2.6.0') === 1 && wx.openBusinessView && pay_way === 2 && res.order.order_state !== 1)) {
                  _context.next = 27;
                  break;
                }
                _context.prev = 8;
                _context.next = 11;
                return (0, _integral_mall.getwxReceiveDetail)({
                  order_id: orderID
                });
              case 11:
                _yield$getwxReceiveDe = _context.sent;
                transaction_id = _yield$getwxReceiveDe.transaction_id;
                _context.next = 15;
                return _this.comfirmReceive(transaction_id);
              case 15:
                _context.next = 17;
                return _this.querycomfirmReceive(orderID);
              case 17:
                _context.next = 19;
                return (0, _integral_mall.apiConfirmIntegralOrder)({
                  id: orderID
                });
              case 19:
                _context.next = 24;
                break;
              case 21:
                _context.prev = 21;
                _context.t0 = _context["catch"](8);
                console.log(_context.t0);
              case 24:
                _this.refreshOrderData();
                _context.next = 28;
                break;
              case 27:
                uni.showModal({
                  title: '温馨提示',
                  content: '是否确认收货?',
                  confirmColor: _this.themeColor,
                  success: function success(_ref2) {
                    var confirm = _ref2.confirm;
                    if (!confirm) return;
                    // uni.showLoading()
                    // 取消订单
                    (0, _integral_mall.apiConfirmIntegralOrder)({
                      id: orderID
                    }).then(function (data) {
                      _this.$toast({
                        title: '收货成功'
                      });
                      _this.refreshOrderData();
                    }).catch(function (err) {
                      console.log(err);
                    }).finally(function () {
                      // uni.hideLoading()
                    });
                  }
                });
              case 28:
                _context.next = 31;
                break;
              case 30:
                uni.showModal({
                  title: '温馨提示',
                  content: '是否确认收货?',
                  confirmColor: _this.themeColor,
                  success: function success(_ref3) {
                    var confirm = _ref3.confirm;
                    if (!confirm) return;
                    // uni.showLoading()
                    // 取消订单
                    (0, _integral_mall.apiConfirmIntegralOrder)({
                      id: orderID
                    }).then(function (data) {
                      _this.$toast({
                        title: '收货成功'
                      });
                      _this.refreshOrderData();
                    }).catch(function (err) {
                      console.log(err);
                    }).finally(function () {
                      // uni.hideLoading()
                    });
                  }
                });
              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 21]]);
      }))();
    },
    // 处理：查看物流
    handleExpress: function handleExpress(orderID) {
      this.$Router.push({
        path: '/bundle/pages/order_logistics/order_logistics',
        query: {
          order_id: orderID,
          type: 'integral'
        }
      });
    },
    // 处理：关闭订单
    handleClose: function handleClose(orderID) {
      var _this2 = this;
      uni.showModal({
        title: '温馨提示',
        content: '是否取消订单?',
        confirmColor: this.themeColor,
        success: function success(_ref4) {
          var confirm = _ref4.confirm;
          if (!confirm) return;
          // uni.showLoading()
          // 取消订单
          (0, _integral_mall.apiCancelIntegralOrder)({
            id: orderID
          }).then(function (data) {
            _this2.$toast({
              title: '取消成功'
            });
            _this2.refreshOrderData();
          }).catch(function (err) {
            console.log(err);
          }).finally(function () {
            // uni.hideLoading()
          });
        }
      });
    },
    // 处理：删除订单
    handleDelete: function handleDelete(orderID) {
      var _this3 = this;
      uni.showModal({
        title: '温馨提示',
        content: '是否删除订单?',
        confirmColor: this.themeColor,
        success: function success(_ref5) {
          var confirm = _ref5.confirm;
          if (!confirm) return;
          // uni.showLoading()
          // 取消订单
          (0, _integral_mall.apiDelIntegralOrder)({
            id: orderID
          }).then(function (data) {
            _this3.$toast({
              title: '删除成功'
            });
            _this3.refreshOrderData();
          }).catch(function (err) {
            console.log(err);
          }).finally(function () {
            // uni.hideLoading()
          });
        }
      });
    }
  }
};
var _default = OrderMixin;
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/bundle/common/vendor.js.map