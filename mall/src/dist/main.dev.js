"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _router = _interopRequireDefault(require("./router"));

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _App = _interopRequireDefault(require("./App.vue"));

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 根据前端的跨域方式做调整 /a/b :  /api/a/b => /a/b
// 非接口代理 后端域名和前端域名不完整 url要写完整
// CORS、JSONP 和 接口代理 的两种baseURL写法是不同的
// axios.defaults.baseURL = 'http://test-www.imooc.com/api'; // CORS、JSONP跨域
_axios["default"].defaults.baseURL = '/api'; // 接口代理 转发的时候会把/api切掉

_axios["default"].defaults.timeout = 8000; // 根据环境变量获取不同的请求地址

_axios["default"].defaults.baseURL = _env["default"].baseURL; //接口错误拦截

_axios["default"].interceptors.response.use(function (response) {
  var res = response.data;

  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
});

_vue["default"].use(_vueAxios["default"], _axios["default"]); //挂载上去后我们待会发请求就可以通过js发请求了


_vue["default"].config.productionTip = false; //生产方式的提示

new _vue["default"]({
  router: _router["default"],
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');