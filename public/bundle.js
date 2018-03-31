/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ThumbPraise_js__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__ThumbPraise_js__["a" /* default */]);
/*for webpack
var ele=document.getElementsByClassName("circleBG")[0];
new ThumbPraise($(ele));*/


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PraiseButton_js__ = __webpack_require__(2);


class ThumbPraise extends __WEBPACK_IMPORTED_MODULE_0__PraiseButton_js__["a" /* PraiseButton */]{
	constructor(container,tpl=''){
	//constructor(container='circleBG',tpl=''){
		super(container,tpl);
		this.tpl=`<div class="palm"></div>
			<div class="thumb">
				<div class="rightFour">
					<span class="finger f1"></span>
					<span class="finger f2"></span>
					<span class="finger f3"></span>
					<span class="finger f4"></span>
					<span class="f1Right"></span>
				</div>
			</div>`;

		this.addTpl(this.tpl);
	}

	//添加模板
	addTpl(){
		//const container=document.getElementsByClassName(this.container)[0];
		this.container.innerHTML=this.tpl;
		this.container.onclick=()=>{
			let number=this.addNum();
			console.log(number,'*********')
			this.updateNum(number);
		}
	}
	//更改页面上显示的个数
	updateNum(number){console.log(this,this.number,'-----------')
		const numNode=document.getElementById("count").getElementsByTagName("span")[0];
		numNode.innerText=number;
	}
}
/* harmony default export */ __webpack_exports__["a"] = (ThumbPraise);

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PraiseButton{
	constructor(container,tpl=''){
	//constructor(container='circleBG',tpl=''){
		this.number=0;
		this.step=1;
		this.tpl=tpl;
		this.container=container[0];//jquery对象转为DOM对象
		//this.addTpl(this.tpl);
	}
	addNum(e){
		this.number=this.number+this.step;
		console.log(this.number,'>>>?????????????????????')
		return this.number;
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PraiseButton;


/***/ })
/******/ ]);