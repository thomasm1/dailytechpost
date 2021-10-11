(function() {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(module) {

let isProduction;

if (process.env.NODE_ENV_OVERRIDE === undefined) {
  isProduction = false;
} else {
  isProduction = process.env.NODE_ENV_OVERRIDE === 'production';
}

module.exports = {
  apiPath: '/api',
  databaseUrl: process.env.DATABASE_URL || '',
  googleAnalyticsId: 'UA-47867706-3',
  isDemo: process.env.CIROSANTILLI_DEMO === 'true',
  isProduction: isProduction,
  isProductionNext: process.env.NODE_ENV_NEXT === undefined ? isProduction : process.env.NODE_ENV_NEXT === 'production',
  port: process.env.PORT || 3000,
  // Makes deployment impossibly slow if there are lots of pages
  // like in a real-world production public website.
  prerenderAll: false,
  revalidate: 10,
  secret: isProduction ? process.env.SECRET : 'secret',
  verbose: process.env.VERBOSE,
  blacklistTags: new Set(['cypress'])
};

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\pages\\_document.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);
    const {
      html,
      head
    } = ctx.renderPage();
    return _objectSpread(_objectSpread({}, initialProps), {}, {
      html,
      head
    });
  }

  render() {
    const {
      ids
    } = this.props;
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
      lang: "en",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {
        children: [config__WEBPACK_IMPORTED_MODULE_3__.isProduction && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
            async: true,
            src: `https://www.googletagmanager.com/gtag/js?id=${config__WEBPACK_IMPORTED_MODULE_3__.googleAnalyticsId}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("script", {
            dangerouslySetInnerHTML: {
              __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${config__WEBPACK_IMPORTED_MODULE_3__.googleAnalyticsId}', { page_path: window.location.pathname });
`
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, this)]
        }, void 0, true), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "//demo.productionready.io/main.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
          rel: "stylesheet",
          href: "//fonts.googleapis.com/css?family=Titillium+Web:700|Source+Serif+Pro:400,700|Merriweather+Sans:400,700|Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,700italic&display=swap"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyDocument);

/***/ }),

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/constants.js");;

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/document-context.js");;

/***/ }),

/***/ "../next-server/lib/head-manager-context":
/*!********************************************************************!*\
  !*** external "next/dist/next-server/lib/head-manager-context.js" ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head-manager-context.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/get-page-files.js");;

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/utils.js");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/server");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_document_js"], function() { return __webpack_exec__("./pages/_document.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL3BhZ2VzL19kb2N1bWVudC50c3giLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2NvbnN0YW50cy5qc1wiIiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9kb2N1bWVudC1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2dldC1wYWdlLWZpbGVzLmpzXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3NlcnZlclwiIl0sIm5hbWVzIjpbImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOVl9PVkVSUklERSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcGlQYXRoIiwiZGF0YWJhc2VVcmwiLCJEQVRBQkFTRV9VUkwiLCJnb29nbGVBbmFseXRpY3NJZCIsImlzRGVtbyIsIkNJUk9TQU5USUxMSV9ERU1PIiwiaXNQcm9kdWN0aW9uTmV4dCIsIk5PREVfRU5WX05FWFQiLCJwb3J0IiwiUE9SVCIsInByZXJlbmRlckFsbCIsInJldmFsaWRhdGUiLCJzZWNyZXQiLCJTRUNSRVQiLCJ2ZXJib3NlIiwiVkVSQk9TRSIsImJsYWNrbGlzdFRhZ3MiLCJTZXQiLCJNeURvY3VtZW50IiwiRG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJpbml0aWFsUHJvcHMiLCJodG1sIiwiaGVhZCIsInJlbmRlclBhZ2UiLCJyZW5kZXIiLCJpZHMiLCJwcm9wcyIsIl9faHRtbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBSjs7QUFDQSxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQVosS0FBa0NDLFNBQXRDLEVBQWlEO0FBQy9DSixjQUFZLFFBQVo7QUFDRCxDQUZELE1BRU87QUFDTEEsY0FBWSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsaUJBQVosS0FBa0MsWUFBakQ7QUFDRDs7QUFDREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLFNBQU8sRUFBRSxNQURNO0FBRWZDLGFBQVcsRUFBRVAsT0FBTyxDQUFDQyxHQUFSLENBQVlPLFlBQVosSUFBNEIsRUFGMUI7QUFHZkMsbUJBQWlCLEVBQUUsZUFISjtBQUlmQyxRQUFNLEVBQUVWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVSxpQkFBWixLQUFrQyxNQUozQjtBQUtmWixjQUFZLEVBQUVBLFlBTEM7QUFNZmEsa0JBQWdCLEVBQUVaLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxhQUFaLEtBQThCVixTQUE5QixHQUNmSixZQURlLEdBRWZDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZWSxhQUFaLEtBQThCLFlBUmxCO0FBU2ZDLE1BQUksRUFBRWQsT0FBTyxDQUFDQyxHQUFSLENBQVljLElBQVosSUFBb0IsSUFUWDtBQVVmO0FBQ0E7QUFDQUMsY0FBWSxFQUFFLEtBWkM7QUFhZkMsWUFBVSxFQUFFLEVBYkc7QUFjZkMsUUFBTSxFQUFFbkIsWUFBWSxHQUFHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWtCLE1BQWYsR0FBd0IsUUFkN0I7QUFlZkMsU0FBTyxFQUFFcEIsT0FBTyxDQUFDQyxHQUFSLENBQVlvQixPQWZOO0FBZ0JmQyxlQUFhLEVBQUUsSUFBSUMsR0FBSixDQUFRLENBQ3JCLFNBRHFCLENBQVI7QUFoQkEsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQU1BLE1BQU1DLFVBQU4sU0FBeUJDLHNEQUF6QixDQUEwQztBQUN4QyxlQUFhQyxlQUFiLENBQTZCQyxHQUE3QixFQUFrQztBQUNoQyxVQUFNQyxZQUFZLEdBQUcsTUFBTUgsb0VBQUEsQ0FBeUJFLEdBQXpCLENBQTNCO0FBQ0EsVUFBTTtBQUFFRSxVQUFGO0FBQVFDO0FBQVIsUUFBaUJILEdBQUcsQ0FBQ0ksVUFBSixFQUF2QjtBQUNBLDJDQUFZSCxZQUFaO0FBQTBCQyxVQUExQjtBQUFnQ0M7QUFBaEM7QUFDRDs7QUFFREUsUUFBTSxHQUFHO0FBQ1AsVUFBTTtBQUFFQztBQUFGLFFBQWUsS0FBS0MsS0FBMUI7QUFDQSx3QkFDRSw4REFBQywrQ0FBRDtBQUFNLFVBQUksRUFBQyxJQUFYO0FBQUEsOEJBQ0UsOERBQUMsK0NBQUQ7QUFBQSxtQkFDR25DLGdEQUFZLGlCQUNYO0FBQUEsa0NBQ0U7QUFBUSxpQkFBSyxNQUFiO0FBQWMsZUFBRyxFQUFHLCtDQUE4Q1UscURBQWtCO0FBQXBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFFRTtBQUNFLG1DQUF1QixFQUFFO0FBQ3ZCMEIsb0JBQU0sRUFBRztBQUMzQjtBQUNBO0FBQ0Esa0JBQWtCMUIscURBQWtCO0FBQ3BDO0FBTHlDO0FBRDNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRkY7QUFBQSx3QkFGSixlQWVFO0FBQU0sYUFBRyxFQUFDLFlBQVY7QUFBdUIsY0FBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZkYsZUFnQkU7QUFDRSxhQUFHLEVBQUMsWUFETjtBQUVFLGNBQUksRUFBQztBQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBc0JFO0FBQUEsZ0NBQ0UsOERBQUMsK0NBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHFEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBdEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBNkJEOztBQXRDdUM7O0FBeUMxQywrREFBZWUsVUFBZixFOzs7Ozs7Ozs7OztBQ2pEQSxvRTs7Ozs7Ozs7Ozs7QUNBQSwyRTs7Ozs7Ozs7Ozs7QUNBQSwrRTs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw0RTs7Ozs7Ozs7Ozs7QUNBQSxtRTs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9fZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaXNQcm9kdWN0aW9uO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlZfT1ZFUlJJREUgPT09IHVuZGVmaW5lZCkge1xyXG4gIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxufSBlbHNlIHtcclxuICBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOVl9PVkVSUklERSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYXBpUGF0aDogJy9hcGknLFxyXG4gIGRhdGFiYXNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHwgJycsXHJcbiAgZ29vZ2xlQW5hbHl0aWNzSWQ6ICdVQS00Nzg2NzcwNi0zJyxcclxuICBpc0RlbW86IHByb2Nlc3MuZW52LkNJUk9TQU5USUxMSV9ERU1PID09PSAndHJ1ZScsXHJcbiAgaXNQcm9kdWN0aW9uOiBpc1Byb2R1Y3Rpb24sXHJcbiAgaXNQcm9kdWN0aW9uTmV4dDogcHJvY2Vzcy5lbnYuTk9ERV9FTlZfTkVYVCA9PT0gdW5kZWZpbmVkID9cclxuICAgIChpc1Byb2R1Y3Rpb24pIDpcclxuICAgIChwcm9jZXNzLmVudi5OT0RFX0VOVl9ORVhUID09PSAncHJvZHVjdGlvbicpLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcclxuICAvLyBNYWtlcyBkZXBsb3ltZW50IGltcG9zc2libHkgc2xvdyBpZiB0aGVyZSBhcmUgbG90cyBvZiBwYWdlc1xyXG4gIC8vIGxpa2UgaW4gYSByZWFsLXdvcmxkIHByb2R1Y3Rpb24gcHVibGljIHdlYnNpdGUuXHJcbiAgcHJlcmVuZGVyQWxsOiBmYWxzZSxcclxuICByZXZhbGlkYXRlOiAxMCxcclxuICBzZWNyZXQ6IGlzUHJvZHVjdGlvbiA/IHByb2Nlc3MuZW52LlNFQ1JFVCA6ICdzZWNyZXQnLFxyXG4gIHZlcmJvc2U6IHByb2Nlc3MuZW52LlZFUkJPU0UsXHJcbiAgYmxhY2tsaXN0VGFnczogbmV3IFNldChbXHJcbiAgICAnY3lwcmVzcycsXHJcbiAgXSlcclxufVxyXG4iLCJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gXCJuZXh0L2RvY3VtZW50XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ29vZ2xlQW5hbHl0aWNzSWQsIGlzUHJvZHVjdGlvbiB9IGZyb20gXCJjb25maWdcIjtcclxuXHJcbmludGVyZmFjZSBJUHJvcHMge1xyXG4gIGNzczogYW55O1xyXG59XHJcblxyXG5jbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQ8SVByb3BzPiB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBjdHgucmVuZGVyUGFnZSgpO1xyXG4gICAgcmV0dXJuIHsgLi4uaW5pdGlhbFByb3BzLCBodG1sLCBoZWFkIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlkcyB9OiBhbnkgPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEh0bWwgbGFuZz1cImVuXCI+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICB7aXNQcm9kdWN0aW9uICYmXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9e2BodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPSR7Z29vZ2xlQW5hbHl0aWNzSWR9YH0+PC9zY3JpcHQ+XHJcbiAgICAgICAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcclxuICAgICAgICAgICAgICAgICAgX19odG1sOiBgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XHJcbmZ1bmN0aW9uIGd0YWcoKXtkYXRhTGF5ZXIucHVzaChhcmd1bWVudHMpO31cclxuZ3RhZygnanMnLCBuZXcgRGF0ZSgpKTtcclxuZ3RhZygnY29uZmlnJywgJyR7Z29vZ2xlQW5hbHl0aWNzSWR9JywgeyBwYWdlX3BhdGg6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KTtcclxuYCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vZGVtby5wcm9kdWN0aW9ucmVhZHkuaW8vbWFpbi5jc3NcIiAvPlxyXG4gICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgIGhyZWY9XCIvL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VGl0aWxsaXVtK1dlYjo3MDB8U291cmNlK1NlcmlmK1Bybzo0MDAsNzAwfE1lcnJpd2VhdGhlcitTYW5zOjQwMCw3MDB8U291cmNlK1NhbnMrUHJvOjQwMCwzMDAsNjAwLDcwMCwzMDBpdGFsaWMsNDAwaXRhbGljLDYwMGl0YWxpYyw3MDBpdGFsaWMmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxib2R5PlxyXG4gICAgICAgICAgPE1haW4gLz5cclxuICAgICAgICAgIDxOZXh0U2NyaXB0IC8+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICA8L0h0bWw+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlEb2N1bWVudDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLW1hbmFnZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zZXJ2ZXJcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=