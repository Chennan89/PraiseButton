(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(["exports"], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports);
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports);
		global.PraiseButton = mod.exports;
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

	var PraiseButton = exports.PraiseButton = function () {
		function PraiseButton(container) {
			var tpl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			_classCallCheck(this, PraiseButton);

			//constructor(container='circleBG',tpl=''){
			this.number = 0;
			this.step = 1;
			this.tpl = tpl;
			this.container = container[0]; //jquery对象转为DOM对象
			//this.addTpl(this.tpl);
		}

		_createClass(PraiseButton, [{
			key: "addNum",
			value: function addNum(e) {
				this.number = this.number + this.step;
				var numNode = document.getElementById("count").getElementsByTagName("span")[0];
				numNode.innerText = this.number;
			}
		}]);

		return PraiseButton;
	}();
});