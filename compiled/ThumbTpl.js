(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports", "babel-polyfill"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require("babel-polyfill"));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.babelPolyfill);
		global.ThumbTpl = mod.exports;
	}
})(this, function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var _createClass = function () {
		function defineProperties(target, props) {
			for (var i = 0; i < props.length; i++) {
				var descriptor = props[i];
				descriptor.enumerable = descriptor.enumerable || false;
				descriptor.configurable = true;
				if ("value" in descriptor) descriptor.writable = true;
				Object.defineProperty(target, descriptor.key, descriptor);
			}
		}

		return function (Constructor, protoProps, staticProps) {
			if (protoProps) defineProperties(Constructor.prototype, protoProps);
			if (staticProps) defineProperties(Constructor, staticProps);
			return Constructor;
		};
	}();

	var CreateTpl = function () {
		function CreateTpl(tpl) {
			//this.tpl=tpl

			_classCallCheck(this, CreateTpl);
		}

		_createClass(CreateTpl, [{
			key: "tpl",
			get: function get() {
				return this.tpl;
			},
			set: function set(tpl) {
				this.tpl = tpl;
			}
		}]);

		return CreateTpl;
	}();

	exports.default = CreateTpl;
});