"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Storage封装
 */
var STORAGE_KEY = 'mall';
var _default = {
  // 存储值
  setItem: function setItem(key, value, module_name) {
    if (module_name) {
      var val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    } else {
      var _val = this.getStorage();

      _val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(_val));
    }
  },
  // 获取某一个模块下面的属性 例如user下面的userName
  getItem: function getItem(key, module_name) {
    if (module_name) {
      var val = this.getItem(module_name);

      if (val) {
        return val[key];
      }
    }

    return this.getStorage()[key];
  },
  // 获取浏览器里的信息
  getStorage: function getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
  },
  clear: function clear(key, module_name) {
    // 先获取整个值
    var val = this.getStorage();

    if (module_name) {
      delete val[module_name][key];
    } else {
      delete val[key];
    }

    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
};
exports["default"] = _default;