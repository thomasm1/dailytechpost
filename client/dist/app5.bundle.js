/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/src/index5_d3.js":
/*!*********************************!*\
  !*** ./client/src/index5_d3.js ***!
  \*********************************/
/***/ (() => {

eval("// modal\nvar modal = document.getElementById('msimpleModal');\nvar modalBtn = document.getElementById('mmodalBtn');\nvar closeBtn = document.getElementsByClassName('mcloseBtn')[0];\nmodalBtn.addEventListener('click', openModal);\ncloseBtn.addEventListener('click', closeModal);\nwindow.addEventListener('click', outsideClick);\n\nfunction openModal() {\n  modal.style.display = 'block';\n  modalBtn.style.display = 'none';\n}\n\nfunction closeModal() {\n  modal.style.display = 'none';\n  modalBtn.style.display = 'block';\n}\n\nfunction outsideClick(e) {\n  if (e.target == modal) {\n    modal.style.display = 'none';\n    modalBtn.style.display = 'block';\n  }\n}\n\n;\n\n//# sourceURL=webpack://ourdailytechblog/./client/src/index5_d3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/src/index5_d3.js"]();
/******/ 	
/******/ })()
;