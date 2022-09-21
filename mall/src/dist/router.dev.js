"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _home = _interopRequireDefault(require("./pages/home"));

var _index = _interopRequireDefault(require("./pages/index"));

var _product = _interopRequireDefault(require("./pages/product"));

var _detail = _interopRequireDefault(require("./pages/detail"));

var _cart = _interopRequireDefault(require("./pages/cart"));

var _order = _interopRequireDefault(require("./pages/order"));

var _orderConfirm = _interopRequireDefault(require("./pages/orderConfirm"));

var _orderList = _interopRequireDefault(require("./pages/orderList"));

var _orderPay = _interopRequireDefault(require("./pages/orderPay"));

var _alipay = _interopRequireDefault(require("./pages/alipay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var _default = new _vueRouter["default"]({
  routes: [{
    path: '/',
    name: 'home',
    //home是我们的根路由 下面是我们的子路由
    component: _home["default"],
    // 这里component没有加s
    redirect: '/index',
    //重定向
    children: [{
      path: '/index',
      name: 'index',
      component: _index["default"]
    }, {
      path: '/product/:id',
      // 动态定义路由的方式
      name: 'product',
      component: _product["default"]
    }, {
      path: '/detail/:id',
      // 动态定义路由的方式
      name: 'detail',
      component: _detail["default"]
    }]
  }, {
    path: '/cart',
    name: 'cart',
    component: _cart["default"]
  }, {
    path: '/order',
    name: 'order',
    component: _order["default"],
    children: [{
      path: 'list',
      //不用加/ 也就是/list 不然显示不出来list子页 下面的children同理
      name: 'order-list',
      component: _orderList["default"]
    }, {
      path: 'confirm',
      name: 'order-confirm',
      component: _orderConfirm["default"]
    }, {
      path: 'pay',
      name: 'order-pay',
      component: _orderPay["default"]
    }, {
      path: 'alipay',
      name: 'alipay',
      component: _alipay["default"]
    }]
  }]
});

exports["default"] = _default;