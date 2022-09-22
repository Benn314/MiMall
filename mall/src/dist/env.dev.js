"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var baseURL;

switch (process.env.NODE_ENV) {
  // process.env.NODE_ENV可以获取--mode（package.json）传递过来的参数（环境变量） 可以去node.js官方文档查阅相关知识点
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;

  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break;

  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;

  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;

  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

var _default = {
  baseURL: baseURL
};
exports["default"] = _default;