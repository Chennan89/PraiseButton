(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './ThumbPraise.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./ThumbPraise.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ThumbPraise);
    global.main = mod.exports;
  }
})(this, function (exports, _ThumbPraise) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ThumbPraise2 = _interopRequireDefault(_ThumbPraise);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _ThumbPraise2.default;
});