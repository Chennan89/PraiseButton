(function (global, factory) {
	if (typeof define === "function" && define.amd) {
		define(['exports', './PraiseButton.js'], factory);
	} else if (typeof exports !== "undefined") {
		factory(exports, require('./PraiseButton.js'));
	} else {
		var mod = {
			exports: {}
		};
		factory(mod.exports, global.PraiseButton);
		global.ThumbPraise = mod.exports;
	}
})(this, function (exports, _PraiseButton2) {
	'use strict';

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

	function _possibleConstructorReturn(self, call) {
		if (!self) {
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		}

		return call && (typeof call === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
		if (typeof superClass !== "function" && superClass !== null) {
			throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
		}

		subClass.prototype = Object.create(superClass && superClass.prototype, {
			constructor: {
				value: subClass,
				enumerable: false,
				writable: true,
				configurable: true
			}
		});
		if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var ThumbPraise = function (_PraiseButton) {
		_inherits(ThumbPraise, _PraiseButton);

		function ThumbPraise(container) {
			var tpl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			_classCallCheck(this, ThumbPraise);

			var _this = _possibleConstructorReturn(this, (ThumbPraise.__proto__ || Object.getPrototypeOf(ThumbPraise)).call(this, container, tpl));

			_this.tpl = '<div class="palm"></div>\n\t\t\t<div class="thumb">\n\t\t\t\t<div class="rightFour">\n\t\t\t\t\t<span class="finger f1"></span>\n\t\t\t\t\t<span class="finger f2"></span>\n\t\t\t\t\t<span class="finger f3"></span>\n\t\t\t\t\t<span class="finger f4"></span>\n\t\t\t\t\t<span class="f1Right"></span>\n\t\t\t\t</div>\n\t\t\t</div>';
			_this.addTpl(_this.tpl);
			return _this;
		}

		//添加模板


		_createClass(ThumbPraise, [{
			key: 'addTpl',
			value: function addTpl() {
				var _this2 = this;

				//const container=document.getElementsByClassName(this.container)[0];
				this.container.innerHTML = this.tpl;
				this.container.onclick = function (e) {

					e.target.classList.add("ani");
					var number = _this2.addNum(); //用箭头函数 this指向ThumbPraise对象
					_this2.updateNum(number);

					/*// Chrome, Safari 和 Opera 代码
     this.container.addEventListener("webkitAnimationEnd", this.delClass("ani"));
     	// 标准语法
     this.container.addEventListener("animationend", this.delClass("ani"));*/
				};

				$(this.container).on("webkitAnimationEnd", function () {
					console.log(this);
					$(this).removeClass("ani");
				});

				/*this.container.onmouseup = function(e){//up向上  
    console.log(this)
          e.target.classList.remove("ani");
          console.log(e.target.classList.value,'mouseup')
    } */
			}
		}, {
			key: 'delClass',
			value: function delClass(cName) {
				console.log(cName, '9999999999999');
				this.container.classList.remove("ani");
			}
		}, {
			key: 'updateNum',
			value: function updateNum(number) {
				var numNode = document.getElementById("count").getElementsByTagName("span")[0];
				numNode.innerText = number;
			}
		}]);

		return ThumbPraise;
	}(_PraiseButton2.PraiseButton);

	exports.default = ThumbPraise;
});