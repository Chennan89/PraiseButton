'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/******/(function (modules) {
	// webpackBootstrap
	/******/ // The module cache
	/******/var installedModules = {};
	/******/
	/******/ // The require function
	/******/function __webpack_require__(moduleId) {
		/******/
		/******/ // Check if module is in cache
		/******/if (installedModules[moduleId]) {
			/******/return installedModules[moduleId].exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/var module = installedModules[moduleId] = {
			/******/i: moduleId,
			/******/l: false,
			/******/exports: {}
			/******/ };
		/******/
		/******/ // Execute the module function
		/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Flag the module as loaded
		/******/module.l = true;
		/******/
		/******/ // Return the exports of the module
		/******/return module.exports;
		/******/
	}
	/******/
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/__webpack_require__.m = modules;
	/******/
	/******/ // expose the module cache
	/******/__webpack_require__.c = installedModules;
	/******/
	/******/ // define getter function for harmony exports
	/******/__webpack_require__.d = function (exports, name, getter) {
		/******/if (!__webpack_require__.o(exports, name)) {
			/******/Object.defineProperty(exports, name, {
				/******/configurable: false,
				/******/enumerable: true,
				/******/get: getter
				/******/ });
			/******/
		}
		/******/
	};
	/******/
	/******/ // getDefaultExport function for compatibility with non-harmony modules
	/******/__webpack_require__.n = function (module) {
		/******/var getter = module && module.__esModule ?
		/******/function getDefault() {
			return module['default'];
		} :
		/******/function getModuleExports() {
			return module;
		};
		/******/__webpack_require__.d(getter, 'a', getter);
		/******/return getter;
		/******/
	};
	/******/
	/******/ // Object.prototype.hasOwnProperty.call
	/******/__webpack_require__.o = function (object, property) {
		return Object.prototype.hasOwnProperty.call(object, property);
	};
	/******/
	/******/ // __webpack_public_path__
	/******/__webpack_require__.p = "";
	/******/
	/******/ // Load entry module and return exports
	/******/return __webpack_require__(__webpack_require__.s = 0);
	/******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";

	Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
	/* harmony import */var __WEBPACK_IMPORTED_MODULE_0__ThumbPraise_js__ = __webpack_require__(1);

	/* harmony default export */__webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_0__ThumbPraise_js__["a" /* default */];
	//new ThumbPraise('circleBG');

	/***/
},
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";
	/* harmony import */
	var __WEBPACK_IMPORTED_MODULE_0__PraiseButton_js__ = __webpack_require__(2);

	var ThumbPraise = function (_WEBPACK_IMPORTED_MO) {
		_inherits(ThumbPraise, _WEBPACK_IMPORTED_MO);

		function ThumbPraise() {
			var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'circleBG';
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
				var container = document.getElementsByClassName(this.container)[0];
				container.innerHTML = this.tpl;
				container.onclick = this.addNum.bind(this);
			}
		}]);

		return ThumbPraise;
	}(__WEBPACK_IMPORTED_MODULE_0__PraiseButton_js__["a" /* PraiseButton */]);
	/* harmony default export */

	__webpack_exports__["a"] = ThumbPraise;
	//var praise=new ThumbPraise(tpl);
	//console.log(praise.addNum());
	//praise.addTpl();
	//export default ThumbPraise;

	/***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

	"use strict";

	var PraiseButton = function () {
		function PraiseButton() {
			var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'circleBG';
			var tpl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

			_classCallCheck(this, PraiseButton);

			this.number = 0;
			this.step = 1;
			this.tpl = tpl;
			this.container = container;
			//this.addTpl(this.tpl);
		}

		_createClass(PraiseButton, [{
			key: 'addNum',
			value: function addNum(e) {
				this.number = this.number + this.step;
				var numNode = document.getElementById("count").getElementsByTagName("span")[0];
				numNode.innerText = this.number;
			}
		}]);

		return PraiseButton;
	}();
	/* harmony export (immutable) */

	__webpack_exports__["a"] = PraiseButton;

	/***/
}]
/******/);