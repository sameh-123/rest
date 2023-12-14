/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/class.js":
/*!**********************!*\
  !*** ./src/class.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ creatdiv)\n/* harmony export */ });\nfunction creatdiv(a){\n    const div=document.createElement('div');\n    for(let i=0;i<a.length;i++){\n        div.classList.add(a[i]);\n    }\n    return div;\n}\n\n//# sourceURL=webpack://rest/./src/class.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ expo)\n/* harmony export */ });\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ \"./src/class.js\");\n\nfunction expo(){\n    const cont =(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['cont']);\n    const conta =(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['conta']);\n    const d1=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['co1']);\n    const img1=new Image();\n    img1.src='./images/facebook.png';\n    img1.classList.add('img4');\n    img1.alt='facebook';\n    const ln1=document.createElement('a');\n    ln1.classList.add('ln');\n    ln1.textContent='Facebook';\n    ln1.href='#';\n    d1.append(img1,ln1);\n    const d2=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['co1']);\n    const img2=new Image();\n    img2.src='./images/whats.png';\n    img2.classList.add('img4');\n    img2.alt='whatsapp';\n    const ln2=document.createElement('a');\n    ln2.classList.add('ln');\n    ln2.textContent='Whatsapp';\n    ln2.href='#';\n    d2.append(img2,ln2);\n    const d3=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['co1']);\n    const img3=new Image();\n    img3.src='./images/phone.png';\n    img3.classList.add('img4');\n    img3.alt='phone';\n    const ln3=document.createElement('a');\n    ln3.classList.add('ln');\n    ln3.textContent='01564852903';\n    ln3.href='#';\n    d3.append(img3,ln3);\n    conta.append(d1,d2,d3);\n    cont.appendChild(conta);\n    return cont;\n}\n\n//# sourceURL=webpack://rest/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ component)\n/* harmony export */ });\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ \"./src/class.js\");\n\nfunction component(){\n    //const cont =div(['cont']);\n    const cont=document.createElement('div');\n    cont.classList.add('cont');\n    const img1=new Image();\n    img1.src='./images/pngegg.png';\n    img1.classList.add('img3')\n    img1.alt='waiter';\n    cont.appendChild(img1);\n    const txt=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['homecont']);\n    txt.textContent=\"SAM07A Resturant makes the best Egyptian food and the most famous dishes in the world .\"\n    cont.appendChild(txt);\n    return cont;\n}\n\n//# sourceURL=webpack://rest/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ \"./src/class.js\");\n/* harmony import */ var _top_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top.js */ \"./src/top.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\nconst cont =document.getElementById('content');\nconst tp=(0,_top_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\ncont.appendChild(tp.top);\n\ncont.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n// const h=tp.h;\n// const m=tp.m;\n// const c=tp.c;\nfunction clr(){\n    tp.h.classList.remove('actv');\n    tp.m.classList.remove('actv');\n    tp.c.classList.remove('actv');\n    //console.log(cont.querySelector('cont'));\n    const ele=cont.lastChild;\n    if(!ele.classList.contains('top'))\n        cont.removeChild(cont.lastElementChild);\n}\n\ntp.h.addEventListener('click',(e)=>{\n    clr();\n    console.log(e.target);\n    e.target.classList.add('actv');\n    console.log(e.target);\n\n    cont.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\ntp.m.addEventListener('click',(e)=>{\n    clr();\n    console.log(e.target.classList);\n\n    e.target.classList.add('actv');\n    console.log(e.target);\n\n    cont.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n});\ntp.c.addEventListener('click',(e)=>{\n    clr();\n    console.log(e.target);\n\n    e.target.classList.add('actv');\n    console.log(e.target);\n\n    cont.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n});\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ compo)\n/* harmony export */ });\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ \"./src/class.js\");\n\nlet a=['Ma7shi','Pizza','Shawarma','Koshari','Falafel','7awawshi'];\nlet p=[5,7,1.5,0.5,0.1,0.3];\nfunction compo(){\n    const img1=new Image();\n    img1.src='./images/pizza.png';\n    img1.alt='pizza';\n    img1.classList.add('img3');\n    const img2=new Image();\n    img2.src='./images/pizza1.png';\n    img2.alt='pizza';\n    img2.classList.add('img3');\n    const cont=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['cont']);\n    const menu=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['menuecont']);\n    for(let i=1;i<=6;i++){\n        const item=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['item']);\n        const it=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([`item${i}`]);\n        const txt=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['txt']);\n        txt.textContent=a[i-1];\n        const sub=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['subtxt']);\n        sub.textContent=`${p[i-1]}$`;\n        item.append(it,txt,sub);\n        menu.appendChild(item);\n    }\n    cont.append(img1,menu,img2);\n    return cont;\n}\n\n//# sourceURL=webpack://rest/./src/menu.js?");

/***/ }),

/***/ "./src/top.js":
/*!********************!*\
  !*** ./src/top.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ top_element)\n/* harmony export */ });\n/* harmony import */ var _class_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class.js */ \"./src/class.js\");\n\nfunction top_element(){\n    const top=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['top']);\n    const right=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['right']);\n    const sname=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['sname']);\n    const sam=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\n    sam.textContent=\"SAM07A\";\n    const sub=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['sub']);\n    sub.textContent=\"Resturant\";\n    sname.appendChild(sam);\n    sname.appendChild(sub);\n    right.appendChild(sname);\n    const img1=new Image();\n    img1.classList.add('img1');\n    img1.src='./images/logo2.png';\n    img1.alt='logo';\n    right.appendChild(img1);\n    top.appendChild(right);\n    const btns=(0,_class_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(['btns']);\n    const btn1=document.createElement('button');\n    btn1.classList.add('btn','actv','home');\n    btn1.textContent=\"Home\";\n    const btn2=document.createElement('button');\n    btn2.classList.add('btn','menu');\n    btn2.textContent=\"Menu\";\n    const btn3=document.createElement('button');\n    btn3.classList.add('btn','contact');\n    btn3.textContent=\"Contact\";\n    btns.append(btn1,btn2,btn3);\n    top.appendChild(btns);\n    return {'top':top , 'h':btn1 ,'m':btn2 ,'c':btn3};\n}\n\n\n//# sourceURL=webpack://rest/./src/top.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;