(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./components/common/CustomImage.tsx":
/*!*******************************************!*\
  !*** ./components/common/CustomImage.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_w_www_armchair_bitcoinBuyer11_ourDailyTech_net_server_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_utils_handleBrokenImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/handleBrokenImage */ "./lib/utils/handleBrokenImage.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\CustomImage.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_w_www_armchair_bitcoinBuyer11_ourDailyTech_net_server_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



const CustomImage = ({
  src,
  alt,
  className
}) => {
  const props = {};

  if (className) {
    props.className = className;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", _objectSpread({
    src: src,
    alt: alt,
    onError: lib_utils_handleBrokenImage__WEBPACK_IMPORTED_MODULE_2__.default
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

_c = CustomImage;
/* harmony default export */ __webpack_exports__["default"] = (CustomImage);

var _c;

$RefreshReg$(_c, "CustomImage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/common/CustomLink.tsx":
/*!******************************************!*\
  !*** ./components/common/CustomLink.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\CustomLink.tsx";

/* Helper for a link that accepts parameters such as className */



const CustomLink = ({
  className,
  href,
  onClick,
  children,
  shallow
}) => {
  if (shallow === undefined) {
    shallow = false;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    shallow: shallow,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: onClick,
      className: className || "",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 11
  }, undefined);
};

_c = CustomLink;
/* harmony default export */ __webpack_exports__["default"] = (CustomLink);

var _c;

$RefreshReg$(_c, "CustomLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/common/Footer.tsx":
/*!**************************************!*\
  !*** ./components/common/Footer.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\Footer.tsx";



const Footer = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("footer", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      className: "logo-font",
      children: lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__.APP_NAME.toLowerCase()
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "attribution",
      children: [" ", "\xA9 2021. An interactive learning project from", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        href: "https://thinkster.io",
        children: "Thinkster"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), ". Code licensed under MIT."]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 5,
  columnNumber: 3
}, undefined);

_c = Footer;
/* harmony default export */ __webpack_exports__["default"] = (Footer);

var _c;

$RefreshReg$(_c, "Footer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/common/Maybe.tsx":
/*!*************************************!*\
  !*** ./components/common/Maybe.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);




const Maybe = ({
  test,
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: test && children
}, void 0, false);

_c = Maybe;
/* harmony default export */ __webpack_exports__["default"] = (Maybe);

var _c;

$RefreshReg$(_c, "Maybe");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/common/NavLink.tsx":
/*!***************************************!*\
  !*** ./components/common/NavLink.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\NavLink.tsx",
    _s = $RefreshSig$();




const NavLink = ({
  href,
  onClick,
  children
}) => {
  _s();

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    asPath
  } = router;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: onClick,
      className: "".concat(encodeURIComponent(asPath) === encodeURIComponent(href) && 'active ' || '', "nav-link"),
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

_s(NavLink, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter];
});

_c = NavLink;
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

var _c;

$RefreshReg$(_c, "NavLink");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./components/common/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/common/Navbar.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_CustomImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/CustomImage */ "./components/common/CustomImage.tsx");
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/NavLink */ "./components/common/NavLink.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/utils/getLoggedInUser */ "./lib/utils/getLoggedInUser.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\Navbar.tsx",
    _s = $RefreshSig$();










const NavbarItem = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
  className: "nav-item",
  children: children
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 13,
  columnNumber: 3
}, undefined);

_c = NavbarItem;

const Navbar = () => {
  _s();

  const setPage = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_7__.usePageDispatch)();
  const loggedInUser = (0,lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__.default)();
  const handleClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => setPage(0), []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    className: "navbar navbar-light",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: "/",
        onClick: handleClick,
        className: "navbar-brand",
        children: lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__.APP_NAME.toLowerCase()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "nav navbar-nav pull-xs-right",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
            href: "/",
            onClick: handleClick,
            children: "Home"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__.default, {
          test: loggedInUser,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/editor",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "ion-compose"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 17
              }, undefined), "\xA0New Article"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/settings",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "ion-gear-a"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 17
              }, undefined), "\xA0Settings"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/profile/".concat(loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username),
              onClick: handleClick,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomImage__WEBPACK_IMPORTED_MODULE_2__.default, {
                className: "user-pic",
                src: loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.effectiveImage,
                alt: "your profile image"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, undefined), loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__.default, {
          test: !loggedInUser,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/user/login",
              children: "Sign in"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(NavbarItem, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__.default, {
              href: "/user/register",
              children: "Sign up"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, undefined);
};

_s(Navbar, "zFy9Tqwd8Wq9u7EnM+9I516mqnA=", false, function () {
  return [lib_context_PageContext__WEBPACK_IMPORTED_MODULE_7__.usePageDispatch];
});

_c2 = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c, _c2;

$RefreshReg$(_c, "NavbarItem");
$RefreshReg$(_c2, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
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

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/context/PageContext.tsx":
/*!*************************************!*\
  !*** ./lib/context/PageContext.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageState": function() { return /* binding */ usePageState; },
/* harmony export */   "usePageDispatch": function() { return /* binding */ usePageDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/hooks/useSessionStorage */ "./lib/hooks/useSessionStorage.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\PageContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();



const PageStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const PageDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);

const PageContextProvider = ({
  children
}) => {
  _s();

  const [page, setPage] = (0,lib_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_2__.default)("offset", 0);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageDispatchContext.Provider, {
    value: setPage,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageStateContext.Provider, {
      value: page,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

_s(PageContextProvider, "soQnRecNbLJcxHtMGxumI29Mts0=", false, function () {
  return [lib_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = PageContextProvider;
const usePageState = () => {
  _s2();

  const state = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageStateContext);
  return state;
};

_s2(usePageState, "kdLImxeHm3898p7tqgy8Fclg5s8=");

const usePageDispatch = () => {
  _s3();

  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageDispatchContext);
  return dispatch;
};

_s3(usePageDispatch, "kCU+r/6VuXUfg74P0SIOBSNFld8=");

/* harmony default export */ __webpack_exports__["default"] = (PageContextProvider);

var _c;

$RefreshReg$(_c, "PageContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/context/PageCountContext.tsx":
/*!******************************************!*\
  !*** ./lib/context/PageCountContext.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageCountState": function() { return /* binding */ usePageCountState; },
/* harmony export */   "usePageCountDispatch": function() { return /* binding */ usePageCountDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\PageCountContext.tsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();


const PageCountStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const PageCountDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);

const PageCountContextProvider = ({
  children
}) => {
  _s();

  const [pageCount, setPageCount] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(1);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageCountDispatchContext.Provider, {
    value: setPageCount,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PageCountStateContext.Provider, {
      value: pageCount,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, undefined);
};

_s(PageCountContextProvider, "u12rCNXS7lnSfmQoC0+WMGBRw4I=");

_c = PageCountContextProvider;
const usePageCountState = () => {
  _s2();

  const state = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageCountStateContext);
  return state;
};

_s2(usePageCountState, "kdLImxeHm3898p7tqgy8Fclg5s8=");

const usePageCountDispatch = () => {
  _s3();

  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageCountDispatchContext);
  return dispatch;
};

_s3(usePageCountDispatch, "kCU+r/6VuXUfg74P0SIOBSNFld8=");

/* harmony default export */ __webpack_exports__["default"] = (PageCountContextProvider);

var _c;

$RefreshReg$(_c, "PageCountContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/context/index.tsx":
/*!*******************************!*\
  !*** ./lib/context/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var _PageCountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageCountContext */ "./lib/context/PageCountContext.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\index.tsx";




const ContextProvider = ({
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageContext__WEBPACK_IMPORTED_MODULE_2__.default, {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PageCountContext__WEBPACK_IMPORTED_MODULE_3__.default, {
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

_c = ContextProvider;
/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);

var _c;

$RefreshReg$(_c, "ContextProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/hooks/useSessionStorage.ts":
/*!****************************************!*\
  !*** ./lib/hooks/useSessionStorage.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



const useSessionStorage = (key, initialValue) => {
  _s();

  const [storedValue, setStoredValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => {
    if (true) {
      const item = window.sessionStorage.getItem(key);
      return !!item ? JSON.parse(item) : initialValue;
    } else {}
  });

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);

    if (true) {
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore));
    }
  };

  return [storedValue, setValue];
};

_s(useSessionStorage, "RS/jVgFijYe2W5YYAZEasrrP4AA=");

/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/utils/checkLogin.ts":
/*!*********************************!*\
  !*** ./lib/utils/checkLogin.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
const checkLogin = loggedInUser => !!loggedInUser && (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.constructor) === Object && Object.keys(loggedInUser).length !== 0;

/* harmony default export */ __webpack_exports__["default"] = (checkLogin);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/utils/constant.ts":
/*!*******************************!*\
  !*** ./lib/utils/constant.ts ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER_BASE_URL": function() { return /* binding */ SERVER_BASE_URL; },
/* harmony export */   "APP_NAME": function() { return /* binding */ APP_NAME; },
/* harmony export */   "ARTICLE_QUERY_MAP": function() { return /* binding */ ARTICLE_QUERY_MAP; },
/* harmony export */   "DEFAULT_PROFILE_IMAGE": function() { return /* binding */ DEFAULT_PROFILE_IMAGE; },
/* harmony export */   "DEFAULT_LIMIT": function() { return /* binding */ DEFAULT_LIMIT; },
/* harmony export */   "DEFAULT_IMAGE_SOURCE": function() { return /* binding */ DEFAULT_IMAGE_SOURCE; }
/* harmony export */ });
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);

const SERVER_BASE_URL = config__WEBPACK_IMPORTED_MODULE_0__.apiPath;
const APP_NAME = "Conduit";
const ARTICLE_QUERY_MAP = {
  "tab=feed": "".concat(SERVER_BASE_URL, "/articles/feed"),
  "tab=tag": "".concat(SERVER_BASE_URL, "/articles/tag")
};
const DEFAULT_PROFILE_IMAGE = "https://static.productionready.io/images/smiley-cyrus.jpg";
const DEFAULT_LIMIT = 10;
const DEFAULT_IMAGE_SOURCE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAPnUlEQVR4Xu2dy5LjuA5EW///o/1+7/uGNWFfSabIIxGCABCzmUWF0chMJFK0zarpz58//6Zp+vDv378Ppf9/AP9d+fpnX6CNYv9bXBp1anwknvKcWePlOSfT379//x0Zomjiv4i4cElYFb+2LKLpfBbP1EoQKXE1NjcZdik8pM5ZUbZcWaljpQ9NnYsJMqL4hPRoJo+G54q5nROEDAf5x0mdFOWas56UPqTOSElSTZAky/8w59Iqr2Rq8lWCEDKJaUidTBL/5qND1tLacp2XQXqb7H09MZWUOaXqtIR//NwTL9HwEJ2b+izPIHe8e5KiZJJYXo5vj1hNR01TdaZ7X2+ZrKs+TCWbTpOXXFqLpVVLkBSlPiq9y6D39Zr6EBNHwzM/Iu8ZpBds7+utiU/6ibZ5o+E5ZfLfv3/P38Ui/2kMvZU+CJnENKSOBq+kj8TzPn27CZJknX+8imbyaHjIsngtrWeCkBdJmYbUGVqUIF+cjJCMzQQhw0zMFYGskmlH+qr/kEtrmyBk2KVMQ+oMKUolQazpQ/rxvBznBCEgyTCTOp7Jqpk1k2TNThSdp70EIcMuZRpSJ5MkP3EncyI9t6sEkS5+duNq9qFJejSTR8NTmrtmglgb1hFE2WKM8riiuYyk5raYIFLFSZ1o4pMhiGbyaHiWczsnCBGVDLtmncii7GGLtkw84KkmiKYpPJC1/TZvr0l7X6+pD1l+0fDM/C4ThJCQotz/e52iLRPLeF4GsdKklT40l0W0zRsKTylBNIdDKpFCibL4JH2kt8otLse3RywrTVrpQ3NZRDN5CDy1BNEcjkyS82ebaMvEEp7iIf1hDCtNWulDc1mE2LzwMVGT11NL+NevX6ZuFJ4CUfj2a7QhI7xEWyYW8OwmiDVnWyBraTqNfqKZ3CWeZ4KQDWXNNKQfl6J03gfRMK/mvNyJp5kgZAhHIatkNg3xopncE55pmyCaw65pPk+iSPGiYV7NebkDz5wgmiBT/LpV82bimp87TLE6a+4liEfTEPNlkuTNRDInz/lfJYhHU9y9YbaG0+gnmskt45nPIMRRlkHs9TbS4wpZbhrmJX2QeSN1NPAUE4Q0JwVSqo4GWdZ4yaV1/ePiKkHIsKYo14vS4rh3GfS+nsyJ5jK5Ek81QTRBSpF+JVnSNwql+G0Z6vFzT7yYwrM8gxw5cJoCIfDb6aPhIebzZJq78LwesZKsskU88RLN5Cbw1BKEPPaYACH41epoeO7avNvHUdIHmTdSR3KpvR3SJYvvkURAWiTLAh7CSzST34rn58+fIvdBbgVxwX2QaHjIUsrl+K568W1eb+96jCh+JonSmfGZIGTIUhQlUW7+C1OZJP/XeTdBiBmkTKVZJ5r4RKdoj4uqeLYJIjWsqiA6b+CNOGRE52jL5AyeZoKQ4SFkW6tzhqyS6T3VyaV1/GtC016CSA19inJclFwm9anpXUpHXj8niJQZPNY5QlZNNk91cmnxpdVMEKmhT1G4KFuurJjPSh9SCUvwrBJEygwe6xCy0uS2TX6FPnOCSDmS1LkCxF5NjaGPhocsNw1eSR9k3kidGp5igpCiUs1ZqxNNfMJvNJNL4lklCCFTyjySIFq1NIa+1cPj5xp9SOlD6oyA52WQGtgU3/azNxlmsvyi6SyCZ3kGuePdExEQAjcKc8jy75OUlsjbI1Ymydqy0R4jMknKK3lX51qCEDJz847x+EV0jrZMHniKh3SJA2VEsrzcKCTDTJZfPv7++zD9+PFD5EZhipJJQkwnNSdadXYThICNtmEI6dGScUSdD83tM0HIcBAypeocAnHzDTzCSzQ8ROcIy6SZIET8UchaDnkE8UumHeldTLS0tglChl3KNKQOAqFwo1CKl2h4CC+el8mcIATkiMNMePEsfs2smST/sfN6F2vvLUwrG89KH8Q0uUwOfhgn+JsxpfR51lkliHTxsxtKsw8yzKSfTBL/piieyfbOINtEsbLBrfRBTEPMFw0P4cXTMikmCAFJxCd1PJE1Ih6iczSTr96tfCQIIYEMh2adyKLsYctlov8YV00QTVOk+PriSz9GR1xa87tYW2CehjWiKC1MnvQhS9YynpdBrDRppQ+px8VoeAgvLYPPny94+XC3lCCEBLIZNOuEEsXQDUlNnS2a5u0Ry0qTVvqQMnk0PISXEEurliCEBM0NQ/oJIYrhT5Y1+LW0TIqHdEvPiJbIkuAlGp7wS+v79++mbhRKJZLGpiPDkXh8/7aU3QTRFJ8MUbTNGw0PmReXS+uZIGRICQnW6rgUxcENSU2d71wmzQSxZoo7ySqZrbef3tdb04f042lpTdsE0dwMhEypfjyJQniJhofofMcymROENEdE06xzB1m1oeztp/f11vQh/Xgw+W6CaA47IVOqHw+ibHsc6for0VlzmawShDSnOcykH02yNMwVDQ+ZFw1eSR+leWsmCBnSs//4HjEaQ2JZlDO8RMND5k5jTooJQpqzZgoNsjR5iYaHzItFk88JQprXHA7NfiyK0uopzyRrhq5cJtUE8WiKK8mSvoFH+I2Ghyy/1oJ4/FyNl2WCkOaJqB7rmBJF4D5INDxk7q4wzesR64ri241LQEqZK/GULeKJFxMmLyWI1JB6rGNCFMH7INHwkCUruQRWh3TVZzuBxwhtsvYSkfQhtSwkxbeAh/Byq8m/ffvWvA+SouTjiuYSIKYh/UjM7VuCSDVnrY4EWZYSNhoeMi+3JMkzQbQcaWnIzIpy4X2QW4bsQjxXz+1ugpDhIc1ZqxNt80bDQ+ZF1eTbBCFDn6LkmYTMCRl2zTpn5raZINZASvVzhqySLazUsdKHlD6kjkaSTHsJQpydomSSkDkhw65Z58jczgmi2Zxnsmob6wjpV9ax0oemzlcmSTNBiHlSlEwSMieapiH9kLldJQgpag2kVD+ErCs31bZ2bz+9r5fiVbPOFfrMCSIFIkXJJPG4ZGtzW0wQjyDT5P7NKTV3kkmySpAcsjq1tU0jKUqrlkZSt3p4/FyjDynTkDolPC+DjCT+WbK23371NETRhpkscxF9lmeQPChOhNPq5iQFPA1rNDxHl+PbI1YmyXokPA3zUfHvvPFJEoDgIXW6TF5LEPKPExDRhozw0iWK4I1Cos+IeAgvj7ktHtJbB7Bo4lOyvNzAGxHPZSb/+vVr80Yh+cdTlPJfUoq2TKLhac3tboIQU4xGVitZW2Qv+bLy2GmlDzJvUvwemttngkj946ROilKWyBMvh4bs5huFPeZrJggpPgpZFhOA6JNLq+Pxd5sghMwUpb4SRnqrPPpynBNEyhTRySrh8/RYRHSOhocs89rcTnsJQsgk/zipk6LkmYTMidS8HamzShCpJjNJOp55KwdaKX1InVxa/01xM0EImUccWY0zI8MhhYfUibZMouEpJoiUKaKRRXiJtnmj4Tm6tOYEIS8iwyFVZ3RR9haLJ16iLMdqgkiZIgpZR+6DeBpmonM0PGSZv84g2wG2QoaVPgiZZMhInWjLxDue1yOWxjB6J+vM/QkNXqXMSepEw9NcWsszSCZJ/41CMmRNUZT+uBDpY3Q8q0P6/Myl8FZrJkl+TqJpzi6T1xLEGggN83aRWVguvcug9/WJp7yMKC9vCaJpimjiE9KjmTwanrf5//Lli9qNQinzhRflgiQi5pXSh9Txshx3E4SAlCLdC1nLPntN2vt6TX2IztHwvPh9JgghIUWpW1ljSKItE+t4mgmiaQrrZJX66zVF7+s19SFLNByebYIQElKUTJIjX7sh82J1Oc4JYs0UVsmq9dW7OXtfT4ZQU+coeKa9BNEkU0rcKKJsjZh33NeMaOq8ShBrpsgkyU/cpZbn2TrNBLFmGtKP5oaxYmIrfRB9yLBawVNMECmQUnWskCWFh9SJZnKveOYEIY4molqr41WU1kLIM4nemaSaINZM0Rqcx8+jmSLxlFVX42WZINYSQKofNTIN3eOItkzuwvN6xPI0RHeRdeZGYZr85gToXVqlBJES1VodT0tA6vE22jLRxrM6pHt7htcmay9BpIaZ1IlmcvN4agliLQGk+jEvygX3QaItEy08bwkiNYSadbTIspSw0UxuFs/nz5/d3SiUMp9ZUS78i0zRlsnVeHYTRGoINetcTdayvhVzWelDSmdzeJ4JQg6IUiRYq2NOlPzVS8Vdd8c3CJoJYm2YST+ZJPktYDInJBSmbYKQF0n949bqZJI4/1Cv90PBRXK/ZvPxNm9UU2SSZJL0LuHdBIlqGoIrkyST5Dkn8xlE+gI+GcJeZ28lvOMAVxojK+ay0oeUznfhmROEgMjHFf+PKyPq3Du3xQSxlgBS/fSSJdWHZp27Nu8e17399L6eLImlPqsEIS/OIcskIXOiuQRIP2fntpog1kBK9XOWLM9nNe3N2+K4t5/e1xNTzXovzyB58K3/hSk1US54P782sCO9wdEy7uPnSz5eBknx/b+1SRI2ms6X46klCImho46889oqwTPikBFeoulM8bw9Yl3uyMLH+WfjnwzziOITXqLpfBmeT58+idwHoY60cG2VmGbEISO8RNO5hWf3kH6ZIy+4TkqGeUTxCS/RdBbH80wQQmYO2RgH+RF13v1gs3VIF3fkhddJ0+Tn/+RxNJ3F8GwTJIcsh2zkz8PesD8ShJhCzJEK10kJnhEfIwgv0XTuxTPtJQghkwwZqdMLQqoPqTrR8BBeWu8GbT+htv552AvzMkFGHOYRxR9R57NLq5kghMwcsnx3S2pOrNWZPwc5E3dnHXnkAGiNrGiPEYTfaDofxTMnCEkAQqZUnaMgdt/DNvKGQDQ8ROcoy6SaIMQUKf4Yj1fRdKZ4VglCNgMxjVQdCqK1razUsdKHlD6kTksb6+9uvQzSK17v6wnZmuYk/XgXP8+e4G9aLs8gVg/Q0cwXDU/kZfL2iNUrXu/rCdmZJOe/DiPFbzSdd/HUEkSKTKk6w4hi8FKZ1FLy9lhaPKRLHJyiDTMxuTfxU+d3xd7m9uPHjyI3CqU2DKkTzXzR8ERaJrsJQkCOOMyEl0wS/79c77W0nglChp0Mh2adaJs3Gh4yL9aXSTNBCEhiihQ/P3EncyI1b1J1pm2CuARh5DtXYqIEw0N4sZokc4JomiKTJJNEc96IOWv97CaIJxC9JOQ3COq/k1iTX2tJskoQTVNkkmSSaM7bWZM3E8QDCKsJcFaU6HgIL1aSpJggmqbIJMkk0Zw3Ys5lP3OCHH1Ry91Wht5KH1L8RsNDeGnN2uPnV/JSTRBNZ18Jcnvv4W7SNXklQ6jZjzudlwlijUypftyJ0vgLU9HwEJ3vWmqvRywrpFvpg4gmtXnvEv/MjUIpXrzo/D/AyGZWsiENSwAAAABJRU5ErkJggg==";

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/utils/getLoggedInUser.ts":
/*!**************************************!*\
  !*** ./lib/utils/getLoggedInUser.ts ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getLoggedInUser; }
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/utils/checkLogin */ "./lib/utils/checkLogin.ts");
/* harmony import */ var lib_utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/storage */ "./lib/utils/storage.ts");
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();




function getLoggedInUser() {
  _s();

  const {
    data: loggedInUser
  } = (0,swr__WEBPACK_IMPORTED_MODULE_0__.default)("user", lib_utils_storage__WEBPACK_IMPORTED_MODULE_2__.default);
  const isLoggedIn = (0,lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_1__.default)(loggedInUser);

  if (isLoggedIn) {
    return loggedInUser;
  } else {
    return undefined;
  }
}

_s(getLoggedInUser, "3LhDVfcnmu6Y54p7z5m+FQNKQaI=", false, function () {
  return [swr__WEBPACK_IMPORTED_MODULE_0__.default];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/utils/handleBrokenImage.ts":
/*!****************************************!*\
  !*** ./lib/utils/handleBrokenImage.ts ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./lib/utils/constant.ts");
/* module decorator */ module = __webpack_require__.hmd(module);


const handleBrokenImage = e => {
  e.target.src = _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PROFILE_IMAGE;
  e.target.onerror = null;
};

/* harmony default export */ __webpack_exports__["default"] = (handleBrokenImage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./lib/utils/storage.ts":
/*!******************************!*\
  !*** ./lib/utils/storage.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* module decorator */ module = __webpack_require__.hmd(module);
const storage = async key => {
  const value = localStorage.getItem(key);
  return !!value ? JSON.parse(value) : undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (storage);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if ( false || !router) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  _s();

  if (true) {
    function createPropError(args) {
      return new Error("Failed prop type: The prop `".concat(args.key, "` expects a ").concat(args.expected, " in `<Link>`, but got `").concat(args.actual, "` instead.") + ( true ? "\nOpen your browser's console to view the Component stack trace." : 0));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

_s(Link, "7cX92ILFgstKFyzTMH+g73G4t5k=");

_c = Link;
var _default = Link;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Link");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const AmpStateContext = /*#__PURE__*/_react.default.createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function isInAmpMode({
  ampFirst = false,
  hybrid = false,
  hasQuery = false
} = {}) {
  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react.default.useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead(inAmpMode = false) {
  const head = [/*#__PURE__*/_react.default.createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react.default.Fragment) {
    return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  const keys = new Set();
  const tags = new Set();
  const metaTypes = new Set();
  const metaCategories = {};
  return h => {
    let isUnique = true;
    let hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      const key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (let i = 0, len = METATYPES.length; i < len; i++) {
          const metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            const category = h.props[metatype];
            const categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce((list, headElement) => {
    const headElementChildren = _react.default.Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map((c, i) => {
    const key = c.key || i;

    if (false) {}

    return /*#__PURE__*/_react.default.cloneElement(c, {
      key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head({
  children
}) {
  const ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  const headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react.default.createElement(_sideEffect.default, {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
} // TODO: Remove in the next major release


_c = Head;

Head.rewind = () => {};

var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

const isServer = false;

class _default extends _react.Component {
  constructor(props) {
    super(props);
    this._hasHeadManager = void 0;

    this.emitChange = () => {
      if (this._hasHeadManager) {
        this.props.headManager.updateHead(this.props.reduceComponentsToState([...this.props.headManager.mountedInstances], this.props));
      }
    };

    this._hasHeadManager = this.props.headManager && this.props.headManager.mountedInstances;

    if (isServer && this._hasHeadManager) {
      this.props.headManager.mountedInstances.add(this);
      this.emitChange();
    }
  }

  componentDidMount() {
    if (this._hasHeadManager) {
      this.props.headManager.mountedInstances.add(this);
    }

    this.emitChange();
  }

  componentDidUpdate() {
    this.emitChange();
  }

  componentWillUnmount() {
    if (this._hasHeadManager) {
      this.props.headManager.mountedInstances.delete(this);
    }

    this.emitChange();
  }

  render() {
    return null;
  }

}

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_w_www_armchair_bitcoinBuyer11_ourDailyTech_net_server_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_common_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Footer */ "./components/common/Footer.tsx");
/* harmony import */ var components_common_Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/Navbar */ "./components/common/Navbar.tsx");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lib_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/context */ "./lib/context/index.tsx");
/* harmony import */ var ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionicons/css/ionicons.min.css */ "./node_modules/ionicons/css/ionicons.min.css");
/* harmony import */ var ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var style_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! style.scss */ "./style.scss");
/* harmony import */ var style_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(style_scss__WEBPACK_IMPORTED_MODULE_10__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\pages\\_app.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_w_www_armchair_bitcoinBuyer11_ourDailyTech_net_server_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











const MyApp = ({
  Component,
  pageProps
}) => {
  _s();

  if (config__WEBPACK_IMPORTED_MODULE_7__.isProduction) {
    // Google Analytics page switches:
    // https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app/62552263#62552263
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

    const handleRouteChange = url => {
      window.gtag('config', config__WEBPACK_IMPORTED_MODULE_7__.googleAnalyticsId, {
        page_path: url
      });
    };

    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [router.events]);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lib_context__WEBPACK_IMPORTED_MODULE_8__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Navbar__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Footer__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

_s(MyApp, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = MyApp;
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/fast-deep-equal/index.js":
/*!***********************************************!*\
  !*** ./node_modules/fast-deep-equal/index.js ***!
  \***********************************************/
/***/ (function(module) {

"use strict";


var isArray = Array.isArray;
var keyList = Object.keys;
var hasProp = Object.prototype.hasOwnProperty;

module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    var arrA = isArray(a)
      , arrB = isArray(b)
      , i
      , length
      , key;

    if (arrA && arrB) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    if (arrA != arrB) return false;

    var dateA = a instanceof Date
      , dateB = b instanceof Date;
    if (dateA != dateB) return false;
    if (dateA && dateB) return a.getTime() == b.getTime();

    var regexpA = a instanceof RegExp
      , regexpB = b instanceof RegExp;
    if (regexpA != regexpB) return false;
    if (regexpA && regexpB) return a.toString() == b.toString();

    var keys = keyList(a);
    length = keys.length;

    if (length !== keyList(b).length)
      return false;

    for (i = length; i-- !== 0;)
      if (!hasProp.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  return a!==a && b!==b;
};


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! ***!
  \***********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/ionicons/css/ionicons.min.css":
/*!****************************************************!*\
  !*** ./node_modules/ionicons/css/ionicons.min.css ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./ionicons.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/ionicons/css/ionicons.min.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./ionicons.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/ionicons/css/ionicons.min.css",
      function () {
        content = __webpack_require__(/*! !!../../next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!../../next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./ionicons.min.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/ionicons/css/ionicons.min.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss",
      function () {
        content = __webpack_require__(/*! !!./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/ionicons/css/ionicons.min.css":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[5].use[2]!./node_modules/ionicons/css/ionicons.min.css ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../next/dist/compiled/css-loader/getUrl.js */ "./node_modules/next/dist/compiled/css-loader/getUrl.js");
/* harmony import */ var _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_ionicons_eot_v_2_0_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/ionicons.eot?v=2.0.1 */ "./node_modules/ionicons/fonts/ionicons.eot?v=2.0.1");
/* harmony import */ var _fonts_ionicons_ttf_v_2_0_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/ionicons.ttf?v=2.0.1 */ "./node_modules/ionicons/fonts/ionicons.ttf?v=2.0.1");
/* harmony import */ var _fonts_ionicons_woff_v_2_0_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/ionicons.woff?v=2.0.1 */ "./node_modules/ionicons/fonts/ionicons.woff?v=2.0.1");
/* harmony import */ var _fonts_ionicons_svg_v_2_0_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/ionicons.svg?v=2.0.1 */ "./node_modules/ionicons/fonts/ionicons.svg?v=2.0.1");
// Imports






var ___CSS_LOADER_EXPORT___ = _next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_ionicons_eot_v_2_0_1__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_ionicons_eot_v_2_0_1__WEBPACK_IMPORTED_MODULE_2__.default, { hash: "#iefix" });
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_ionicons_ttf_v_2_0_1__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_ionicons_woff_v_2_0_1__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _next_dist_compiled_css_loader_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_ionicons_svg_v_2_0_1__WEBPACK_IMPORTED_MODULE_5__.default, { hash: "#Ionicons" });
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";/*!\n  Ionicons, v2.0.1\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/@font-face{font-family:\"Ionicons\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");src:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"svg\");font-weight:normal;font-style:normal}.ion,.ionicons,.ion-alert:before,.ion-alert-circled:before,.ion-android-add:before,.ion-android-add-circle:before,.ion-android-alarm-clock:before,.ion-android-alert:before,.ion-android-apps:before,.ion-android-archive:before,.ion-android-arrow-back:before,.ion-android-arrow-down:before,.ion-android-arrow-dropdown:before,.ion-android-arrow-dropdown-circle:before,.ion-android-arrow-dropleft:before,.ion-android-arrow-dropleft-circle:before,.ion-android-arrow-dropright:before,.ion-android-arrow-dropright-circle:before,.ion-android-arrow-dropup:before,.ion-android-arrow-dropup-circle:before,.ion-android-arrow-forward:before,.ion-android-arrow-up:before,.ion-android-attach:before,.ion-android-bar:before,.ion-android-bicycle:before,.ion-android-boat:before,.ion-android-bookmark:before,.ion-android-bulb:before,.ion-android-bus:before,.ion-android-calendar:before,.ion-android-call:before,.ion-android-camera:before,.ion-android-cancel:before,.ion-android-car:before,.ion-android-cart:before,.ion-android-chat:before,.ion-android-checkbox:before,.ion-android-checkbox-blank:before,.ion-android-checkbox-outline:before,.ion-android-checkbox-outline-blank:before,.ion-android-checkmark-circle:before,.ion-android-clipboard:before,.ion-android-close:before,.ion-android-cloud:before,.ion-android-cloud-circle:before,.ion-android-cloud-done:before,.ion-android-cloud-outline:before,.ion-android-color-palette:before,.ion-android-compass:before,.ion-android-contact:before,.ion-android-contacts:before,.ion-android-contract:before,.ion-android-create:before,.ion-android-delete:before,.ion-android-desktop:before,.ion-android-document:before,.ion-android-done:before,.ion-android-done-all:before,.ion-android-download:before,.ion-android-drafts:before,.ion-android-exit:before,.ion-android-expand:before,.ion-android-favorite:before,.ion-android-favorite-outline:before,.ion-android-film:before,.ion-android-folder:before,.ion-android-folder-open:before,.ion-android-funnel:before,.ion-android-globe:before,.ion-android-hand:before,.ion-android-hangout:before,.ion-android-happy:before,.ion-android-home:before,.ion-android-image:before,.ion-android-laptop:before,.ion-android-list:before,.ion-android-locate:before,.ion-android-lock:before,.ion-android-mail:before,.ion-android-map:before,.ion-android-menu:before,.ion-android-microphone:before,.ion-android-microphone-off:before,.ion-android-more-horizontal:before,.ion-android-more-vertical:before,.ion-android-navigate:before,.ion-android-notifications:before,.ion-android-notifications-none:before,.ion-android-notifications-off:before,.ion-android-open:before,.ion-android-options:before,.ion-android-people:before,.ion-android-person:before,.ion-android-person-add:before,.ion-android-phone-landscape:before,.ion-android-phone-portrait:before,.ion-android-pin:before,.ion-android-plane:before,.ion-android-playstore:before,.ion-android-print:before,.ion-android-radio-button-off:before,.ion-android-radio-button-on:before,.ion-android-refresh:before,.ion-android-remove:before,.ion-android-remove-circle:before,.ion-android-restaurant:before,.ion-android-sad:before,.ion-android-search:before,.ion-android-send:before,.ion-android-settings:before,.ion-android-share:before,.ion-android-share-alt:before,.ion-android-star:before,.ion-android-star-half:before,.ion-android-star-outline:before,.ion-android-stopwatch:before,.ion-android-subway:before,.ion-android-sunny:before,.ion-android-sync:before,.ion-android-textsms:before,.ion-android-time:before,.ion-android-train:before,.ion-android-unlock:before,.ion-android-upload:before,.ion-android-volume-down:before,.ion-android-volume-mute:before,.ion-android-volume-off:before,.ion-android-volume-up:before,.ion-android-walk:before,.ion-android-warning:before,.ion-android-watch:before,.ion-android-wifi:before,.ion-aperture:before,.ion-archive:before,.ion-arrow-down-a:before,.ion-arrow-down-b:before,.ion-arrow-down-c:before,.ion-arrow-expand:before,.ion-arrow-graph-down-left:before,.ion-arrow-graph-down-right:before,.ion-arrow-graph-up-left:before,.ion-arrow-graph-up-right:before,.ion-arrow-left-a:before,.ion-arrow-left-b:before,.ion-arrow-left-c:before,.ion-arrow-move:before,.ion-arrow-resize:before,.ion-arrow-return-left:before,.ion-arrow-return-right:before,.ion-arrow-right-a:before,.ion-arrow-right-b:before,.ion-arrow-right-c:before,.ion-arrow-shrink:before,.ion-arrow-swap:before,.ion-arrow-up-a:before,.ion-arrow-up-b:before,.ion-arrow-up-c:before,.ion-asterisk:before,.ion-at:before,.ion-backspace:before,.ion-backspace-outline:before,.ion-bag:before,.ion-battery-charging:before,.ion-battery-empty:before,.ion-battery-full:before,.ion-battery-half:before,.ion-battery-low:before,.ion-beaker:before,.ion-beer:before,.ion-bluetooth:before,.ion-bonfire:before,.ion-bookmark:before,.ion-bowtie:before,.ion-briefcase:before,.ion-bug:before,.ion-calculator:before,.ion-calendar:before,.ion-camera:before,.ion-card:before,.ion-cash:before,.ion-chatbox:before,.ion-chatbox-working:before,.ion-chatboxes:before,.ion-chatbubble:before,.ion-chatbubble-working:before,.ion-chatbubbles:before,.ion-checkmark:before,.ion-checkmark-circled:before,.ion-checkmark-round:before,.ion-chevron-down:before,.ion-chevron-left:before,.ion-chevron-right:before,.ion-chevron-up:before,.ion-clipboard:before,.ion-clock:before,.ion-close:before,.ion-close-circled:before,.ion-close-round:before,.ion-closed-captioning:before,.ion-cloud:before,.ion-code:before,.ion-code-download:before,.ion-code-working:before,.ion-coffee:before,.ion-compass:before,.ion-compose:before,.ion-connection-bars:before,.ion-contrast:before,.ion-crop:before,.ion-cube:before,.ion-disc:before,.ion-document:before,.ion-document-text:before,.ion-drag:before,.ion-earth:before,.ion-easel:before,.ion-edit:before,.ion-egg:before,.ion-eject:before,.ion-email:before,.ion-email-unread:before,.ion-erlenmeyer-flask:before,.ion-erlenmeyer-flask-bubbles:before,.ion-eye:before,.ion-eye-disabled:before,.ion-female:before,.ion-filing:before,.ion-film-marker:before,.ion-fireball:before,.ion-flag:before,.ion-flame:before,.ion-flash:before,.ion-flash-off:before,.ion-folder:before,.ion-fork:before,.ion-fork-repo:before,.ion-forward:before,.ion-funnel:before,.ion-gear-a:before,.ion-gear-b:before,.ion-grid:before,.ion-hammer:before,.ion-happy:before,.ion-happy-outline:before,.ion-headphone:before,.ion-heart:before,.ion-heart-broken:before,.ion-help:before,.ion-help-buoy:before,.ion-help-circled:before,.ion-home:before,.ion-icecream:before,.ion-image:before,.ion-images:before,.ion-information:before,.ion-information-circled:before,.ion-ionic:before,.ion-ios-alarm:before,.ion-ios-alarm-outline:before,.ion-ios-albums:before,.ion-ios-albums-outline:before,.ion-ios-americanfootball:before,.ion-ios-americanfootball-outline:before,.ion-ios-analytics:before,.ion-ios-analytics-outline:before,.ion-ios-arrow-back:before,.ion-ios-arrow-down:before,.ion-ios-arrow-forward:before,.ion-ios-arrow-left:before,.ion-ios-arrow-right:before,.ion-ios-arrow-thin-down:before,.ion-ios-arrow-thin-left:before,.ion-ios-arrow-thin-right:before,.ion-ios-arrow-thin-up:before,.ion-ios-arrow-up:before,.ion-ios-at:before,.ion-ios-at-outline:before,.ion-ios-barcode:before,.ion-ios-barcode-outline:before,.ion-ios-baseball:before,.ion-ios-baseball-outline:before,.ion-ios-basketball:before,.ion-ios-basketball-outline:before,.ion-ios-bell:before,.ion-ios-bell-outline:before,.ion-ios-body:before,.ion-ios-body-outline:before,.ion-ios-bolt:before,.ion-ios-bolt-outline:before,.ion-ios-book:before,.ion-ios-book-outline:before,.ion-ios-bookmarks:before,.ion-ios-bookmarks-outline:before,.ion-ios-box:before,.ion-ios-box-outline:before,.ion-ios-briefcase:before,.ion-ios-briefcase-outline:before,.ion-ios-browsers:before,.ion-ios-browsers-outline:before,.ion-ios-calculator:before,.ion-ios-calculator-outline:before,.ion-ios-calendar:before,.ion-ios-calendar-outline:before,.ion-ios-camera:before,.ion-ios-camera-outline:before,.ion-ios-cart:before,.ion-ios-cart-outline:before,.ion-ios-chatboxes:before,.ion-ios-chatboxes-outline:before,.ion-ios-chatbubble:before,.ion-ios-chatbubble-outline:before,.ion-ios-checkmark:before,.ion-ios-checkmark-empty:before,.ion-ios-checkmark-outline:before,.ion-ios-circle-filled:before,.ion-ios-circle-outline:before,.ion-ios-clock:before,.ion-ios-clock-outline:before,.ion-ios-close:before,.ion-ios-close-empty:before,.ion-ios-close-outline:before,.ion-ios-cloud:before,.ion-ios-cloud-download:before,.ion-ios-cloud-download-outline:before,.ion-ios-cloud-outline:before,.ion-ios-cloud-upload:before,.ion-ios-cloud-upload-outline:before,.ion-ios-cloudy:before,.ion-ios-cloudy-night:before,.ion-ios-cloudy-night-outline:before,.ion-ios-cloudy-outline:before,.ion-ios-cog:before,.ion-ios-cog-outline:before,.ion-ios-color-filter:before,.ion-ios-color-filter-outline:before,.ion-ios-color-wand:before,.ion-ios-color-wand-outline:before,.ion-ios-compose:before,.ion-ios-compose-outline:before,.ion-ios-contact:before,.ion-ios-contact-outline:before,.ion-ios-copy:before,.ion-ios-copy-outline:before,.ion-ios-crop:before,.ion-ios-crop-strong:before,.ion-ios-download:before,.ion-ios-download-outline:before,.ion-ios-drag:before,.ion-ios-email:before,.ion-ios-email-outline:before,.ion-ios-eye:before,.ion-ios-eye-outline:before,.ion-ios-fastforward:before,.ion-ios-fastforward-outline:before,.ion-ios-filing:before,.ion-ios-filing-outline:before,.ion-ios-film:before,.ion-ios-film-outline:before,.ion-ios-flag:before,.ion-ios-flag-outline:before,.ion-ios-flame:before,.ion-ios-flame-outline:before,.ion-ios-flask:before,.ion-ios-flask-outline:before,.ion-ios-flower:before,.ion-ios-flower-outline:before,.ion-ios-folder:before,.ion-ios-folder-outline:before,.ion-ios-football:before,.ion-ios-football-outline:before,.ion-ios-game-controller-a:before,.ion-ios-game-controller-a-outline:before,.ion-ios-game-controller-b:before,.ion-ios-game-controller-b-outline:before,.ion-ios-gear:before,.ion-ios-gear-outline:before,.ion-ios-glasses:before,.ion-ios-glasses-outline:before,.ion-ios-grid-view:before,.ion-ios-grid-view-outline:before,.ion-ios-heart:before,.ion-ios-heart-outline:before,.ion-ios-help:before,.ion-ios-help-empty:before,.ion-ios-help-outline:before,.ion-ios-home:before,.ion-ios-home-outline:before,.ion-ios-infinite:before,.ion-ios-infinite-outline:before,.ion-ios-information:before,.ion-ios-information-empty:before,.ion-ios-information-outline:before,.ion-ios-ionic-outline:before,.ion-ios-keypad:before,.ion-ios-keypad-outline:before,.ion-ios-lightbulb:before,.ion-ios-lightbulb-outline:before,.ion-ios-list:before,.ion-ios-list-outline:before,.ion-ios-location:before,.ion-ios-location-outline:before,.ion-ios-locked:before,.ion-ios-locked-outline:before,.ion-ios-loop:before,.ion-ios-loop-strong:before,.ion-ios-medical:before,.ion-ios-medical-outline:before,.ion-ios-medkit:before,.ion-ios-medkit-outline:before,.ion-ios-mic:before,.ion-ios-mic-off:before,.ion-ios-mic-outline:before,.ion-ios-minus:before,.ion-ios-minus-empty:before,.ion-ios-minus-outline:before,.ion-ios-monitor:before,.ion-ios-monitor-outline:before,.ion-ios-moon:before,.ion-ios-moon-outline:before,.ion-ios-more:before,.ion-ios-more-outline:before,.ion-ios-musical-note:before,.ion-ios-musical-notes:before,.ion-ios-navigate:before,.ion-ios-navigate-outline:before,.ion-ios-nutrition:before,.ion-ios-nutrition-outline:before,.ion-ios-paper:before,.ion-ios-paper-outline:before,.ion-ios-paperplane:before,.ion-ios-paperplane-outline:before,.ion-ios-partlysunny:before,.ion-ios-partlysunny-outline:before,.ion-ios-pause:before,.ion-ios-pause-outline:before,.ion-ios-paw:before,.ion-ios-paw-outline:before,.ion-ios-people:before,.ion-ios-people-outline:before,.ion-ios-person:before,.ion-ios-person-outline:before,.ion-ios-personadd:before,.ion-ios-personadd-outline:before,.ion-ios-photos:before,.ion-ios-photos-outline:before,.ion-ios-pie:before,.ion-ios-pie-outline:before,.ion-ios-pint:before,.ion-ios-pint-outline:before,.ion-ios-play:before,.ion-ios-play-outline:before,.ion-ios-plus:before,.ion-ios-plus-empty:before,.ion-ios-plus-outline:before,.ion-ios-pricetag:before,.ion-ios-pricetag-outline:before,.ion-ios-pricetags:before,.ion-ios-pricetags-outline:before,.ion-ios-printer:before,.ion-ios-printer-outline:before,.ion-ios-pulse:before,.ion-ios-pulse-strong:before,.ion-ios-rainy:before,.ion-ios-rainy-outline:before,.ion-ios-recording:before,.ion-ios-recording-outline:before,.ion-ios-redo:before,.ion-ios-redo-outline:before,.ion-ios-refresh:before,.ion-ios-refresh-empty:before,.ion-ios-refresh-outline:before,.ion-ios-reload:before,.ion-ios-reverse-camera:before,.ion-ios-reverse-camera-outline:before,.ion-ios-rewind:before,.ion-ios-rewind-outline:before,.ion-ios-rose:before,.ion-ios-rose-outline:before,.ion-ios-search:before,.ion-ios-search-strong:before,.ion-ios-settings:before,.ion-ios-settings-strong:before,.ion-ios-shuffle:before,.ion-ios-shuffle-strong:before,.ion-ios-skipbackward:before,.ion-ios-skipbackward-outline:before,.ion-ios-skipforward:before,.ion-ios-skipforward-outline:before,.ion-ios-snowy:before,.ion-ios-speedometer:before,.ion-ios-speedometer-outline:before,.ion-ios-star:before,.ion-ios-star-half:before,.ion-ios-star-outline:before,.ion-ios-stopwatch:before,.ion-ios-stopwatch-outline:before,.ion-ios-sunny:before,.ion-ios-sunny-outline:before,.ion-ios-telephone:before,.ion-ios-telephone-outline:before,.ion-ios-tennisball:before,.ion-ios-tennisball-outline:before,.ion-ios-thunderstorm:before,.ion-ios-thunderstorm-outline:before,.ion-ios-time:before,.ion-ios-time-outline:before,.ion-ios-timer:before,.ion-ios-timer-outline:before,.ion-ios-toggle:before,.ion-ios-toggle-outline:before,.ion-ios-trash:before,.ion-ios-trash-outline:before,.ion-ios-undo:before,.ion-ios-undo-outline:before,.ion-ios-unlocked:before,.ion-ios-unlocked-outline:before,.ion-ios-upload:before,.ion-ios-upload-outline:before,.ion-ios-videocam:before,.ion-ios-videocam-outline:before,.ion-ios-volume-high:before,.ion-ios-volume-low:before,.ion-ios-wineglass:before,.ion-ios-wineglass-outline:before,.ion-ios-world:before,.ion-ios-world-outline:before,.ion-ipad:before,.ion-iphone:before,.ion-ipod:before,.ion-jet:before,.ion-key:before,.ion-knife:before,.ion-laptop:before,.ion-leaf:before,.ion-levels:before,.ion-lightbulb:before,.ion-link:before,.ion-load-a:before,.ion-load-b:before,.ion-load-c:before,.ion-load-d:before,.ion-location:before,.ion-lock-combination:before,.ion-locked:before,.ion-log-in:before,.ion-log-out:before,.ion-loop:before,.ion-magnet:before,.ion-male:before,.ion-man:before,.ion-map:before,.ion-medkit:before,.ion-merge:before,.ion-mic-a:before,.ion-mic-b:before,.ion-mic-c:before,.ion-minus:before,.ion-minus-circled:before,.ion-minus-round:before,.ion-model-s:before,.ion-monitor:before,.ion-more:before,.ion-mouse:before,.ion-music-note:before,.ion-navicon:before,.ion-navicon-round:before,.ion-navigate:before,.ion-network:before,.ion-no-smoking:before,.ion-nuclear:before,.ion-outlet:before,.ion-paintbrush:before,.ion-paintbucket:before,.ion-paper-airplane:before,.ion-paperclip:before,.ion-pause:before,.ion-person:before,.ion-person-add:before,.ion-person-stalker:before,.ion-pie-graph:before,.ion-pin:before,.ion-pinpoint:before,.ion-pizza:before,.ion-plane:before,.ion-planet:before,.ion-play:before,.ion-playstation:before,.ion-plus:before,.ion-plus-circled:before,.ion-plus-round:before,.ion-podium:before,.ion-pound:before,.ion-power:before,.ion-pricetag:before,.ion-pricetags:before,.ion-printer:before,.ion-pull-request:before,.ion-qr-scanner:before,.ion-quote:before,.ion-radio-waves:before,.ion-record:before,.ion-refresh:before,.ion-reply:before,.ion-reply-all:before,.ion-ribbon-a:before,.ion-ribbon-b:before,.ion-sad:before,.ion-sad-outline:before,.ion-scissors:before,.ion-search:before,.ion-settings:before,.ion-share:before,.ion-shuffle:before,.ion-skip-backward:before,.ion-skip-forward:before,.ion-social-android:before,.ion-social-android-outline:before,.ion-social-angular:before,.ion-social-angular-outline:before,.ion-social-apple:before,.ion-social-apple-outline:before,.ion-social-bitcoin:before,.ion-social-bitcoin-outline:before,.ion-social-buffer:before,.ion-social-buffer-outline:before,.ion-social-chrome:before,.ion-social-chrome-outline:before,.ion-social-codepen:before,.ion-social-codepen-outline:before,.ion-social-css3:before,.ion-social-css3-outline:before,.ion-social-designernews:before,.ion-social-designernews-outline:before,.ion-social-dribbble:before,.ion-social-dribbble-outline:before,.ion-social-dropbox:before,.ion-social-dropbox-outline:before,.ion-social-euro:before,.ion-social-euro-outline:before,.ion-social-facebook:before,.ion-social-facebook-outline:before,.ion-social-foursquare:before,.ion-social-foursquare-outline:before,.ion-social-freebsd-devil:before,.ion-social-github:before,.ion-social-github-outline:before,.ion-social-google:before,.ion-social-google-outline:before,.ion-social-googleplus:before,.ion-social-googleplus-outline:before,.ion-social-hackernews:before,.ion-social-hackernews-outline:before,.ion-social-html5:before,.ion-social-html5-outline:before,.ion-social-instagram:before,.ion-social-instagram-outline:before,.ion-social-javascript:before,.ion-social-javascript-outline:before,.ion-social-linkedin:before,.ion-social-linkedin-outline:before,.ion-social-markdown:before,.ion-social-nodejs:before,.ion-social-octocat:before,.ion-social-pinterest:before,.ion-social-pinterest-outline:before,.ion-social-python:before,.ion-social-reddit:before,.ion-social-reddit-outline:before,.ion-social-rss:before,.ion-social-rss-outline:before,.ion-social-sass:before,.ion-social-skype:before,.ion-social-skype-outline:before,.ion-social-snapchat:before,.ion-social-snapchat-outline:before,.ion-social-tumblr:before,.ion-social-tumblr-outline:before,.ion-social-tux:before,.ion-social-twitch:before,.ion-social-twitch-outline:before,.ion-social-twitter:before,.ion-social-twitter-outline:before,.ion-social-usd:before,.ion-social-usd-outline:before,.ion-social-vimeo:before,.ion-social-vimeo-outline:before,.ion-social-whatsapp:before,.ion-social-whatsapp-outline:before,.ion-social-windows:before,.ion-social-windows-outline:before,.ion-social-wordpress:before,.ion-social-wordpress-outline:before,.ion-social-yahoo:before,.ion-social-yahoo-outline:before,.ion-social-yen:before,.ion-social-yen-outline:before,.ion-social-youtube:before,.ion-social-youtube-outline:before,.ion-soup-can:before,.ion-soup-can-outline:before,.ion-speakerphone:before,.ion-speedometer:before,.ion-spoon:before,.ion-star:before,.ion-stats-bars:before,.ion-steam:before,.ion-stop:before,.ion-thermometer:before,.ion-thumbsdown:before,.ion-thumbsup:before,.ion-toggle:before,.ion-toggle-filled:before,.ion-transgender:before,.ion-trash-a:before,.ion-trash-b:before,.ion-trophy:before,.ion-tshirt:before,.ion-tshirt-outline:before,.ion-umbrella:before,.ion-university:before,.ion-unlocked:before,.ion-upload:before,.ion-usb:before,.ion-videocamera:before,.ion-volume-high:before,.ion-volume-low:before,.ion-volume-medium:before,.ion-volume-mute:before,.ion-wand:before,.ion-waterdrop:before,.ion-wifi:before,.ion-wineglass:before,.ion-woman:before,.ion-wrench:before,.ion-xbox:before{display:inline-block;font-family:\"Ionicons\";speak:none;font-style:normal;font-weight:normal;-webkit-font-feature-settings:normal;-moz-font-feature-settings:normal;font-feature-settings:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ion-alert:before{content:\"\\f101\"}.ion-alert-circled:before{content:\"\\f100\"}.ion-android-add:before{content:\"\\f2c7\"}.ion-android-add-circle:before{content:\"\\f359\"}.ion-android-alarm-clock:before{content:\"\\f35a\"}.ion-android-alert:before{content:\"\\f35b\"}.ion-android-apps:before{content:\"\\f35c\"}.ion-android-archive:before{content:\"\\f2c9\"}.ion-android-arrow-back:before{content:\"\\f2ca\"}.ion-android-arrow-down:before{content:\"\\f35d\"}.ion-android-arrow-dropdown:before{content:\"\\f35f\"}.ion-android-arrow-dropdown-circle:before{content:\"\\f35e\"}.ion-android-arrow-dropleft:before{content:\"\\f361\"}.ion-android-arrow-dropleft-circle:before{content:\"\\f360\"}.ion-android-arrow-dropright:before{content:\"\\f363\"}.ion-android-arrow-dropright-circle:before{content:\"\\f362\"}.ion-android-arrow-dropup:before{content:\"\\f365\"}.ion-android-arrow-dropup-circle:before{content:\"\\f364\"}.ion-android-arrow-forward:before{content:\"\\f30f\"}.ion-android-arrow-up:before{content:\"\\f366\"}.ion-android-attach:before{content:\"\\f367\"}.ion-android-bar:before{content:\"\\f368\"}.ion-android-bicycle:before{content:\"\\f369\"}.ion-android-boat:before{content:\"\\f36a\"}.ion-android-bookmark:before{content:\"\\f36b\"}.ion-android-bulb:before{content:\"\\f36c\"}.ion-android-bus:before{content:\"\\f36d\"}.ion-android-calendar:before{content:\"\\f2d1\"}.ion-android-call:before{content:\"\\f2d2\"}.ion-android-camera:before{content:\"\\f2d3\"}.ion-android-cancel:before{content:\"\\f36e\"}.ion-android-car:before{content:\"\\f36f\"}.ion-android-cart:before{content:\"\\f370\"}.ion-android-chat:before{content:\"\\f2d4\"}.ion-android-checkbox:before{content:\"\\f374\"}.ion-android-checkbox-blank:before{content:\"\\f371\"}.ion-android-checkbox-outline:before{content:\"\\f373\"}.ion-android-checkbox-outline-blank:before{content:\"\\f372\"}.ion-android-checkmark-circle:before{content:\"\\f375\"}.ion-android-clipboard:before{content:\"\\f376\"}.ion-android-close:before{content:\"\\f2d7\"}.ion-android-cloud:before{content:\"\\f37a\"}.ion-android-cloud-circle:before{content:\"\\f377\"}.ion-android-cloud-done:before{content:\"\\f378\"}.ion-android-cloud-outline:before{content:\"\\f379\"}.ion-android-color-palette:before{content:\"\\f37b\"}.ion-android-compass:before{content:\"\\f37c\"}.ion-android-contact:before{content:\"\\f2d8\"}.ion-android-contacts:before{content:\"\\f2d9\"}.ion-android-contract:before{content:\"\\f37d\"}.ion-android-create:before{content:\"\\f37e\"}.ion-android-delete:before{content:\"\\f37f\"}.ion-android-desktop:before{content:\"\\f380\"}.ion-android-document:before{content:\"\\f381\"}.ion-android-done:before{content:\"\\f383\"}.ion-android-done-all:before{content:\"\\f382\"}.ion-android-download:before{content:\"\\f2dd\"}.ion-android-drafts:before{content:\"\\f384\"}.ion-android-exit:before{content:\"\\f385\"}.ion-android-expand:before{content:\"\\f386\"}.ion-android-favorite:before{content:\"\\f388\"}.ion-android-favorite-outline:before{content:\"\\f387\"}.ion-android-film:before{content:\"\\f389\"}.ion-android-folder:before{content:\"\\f2e0\"}.ion-android-folder-open:before{content:\"\\f38a\"}.ion-android-funnel:before{content:\"\\f38b\"}.ion-android-globe:before{content:\"\\f38c\"}.ion-android-hand:before{content:\"\\f2e3\"}.ion-android-hangout:before{content:\"\\f38d\"}.ion-android-happy:before{content:\"\\f38e\"}.ion-android-home:before{content:\"\\f38f\"}.ion-android-image:before{content:\"\\f2e4\"}.ion-android-laptop:before{content:\"\\f390\"}.ion-android-list:before{content:\"\\f391\"}.ion-android-locate:before{content:\"\\f2e9\"}.ion-android-lock:before{content:\"\\f392\"}.ion-android-mail:before{content:\"\\f2eb\"}.ion-android-map:before{content:\"\\f393\"}.ion-android-menu:before{content:\"\\f394\"}.ion-android-microphone:before{content:\"\\f2ec\"}.ion-android-microphone-off:before{content:\"\\f395\"}.ion-android-more-horizontal:before{content:\"\\f396\"}.ion-android-more-vertical:before{content:\"\\f397\"}.ion-android-navigate:before{content:\"\\f398\"}.ion-android-notifications:before{content:\"\\f39b\"}.ion-android-notifications-none:before{content:\"\\f399\"}.ion-android-notifications-off:before{content:\"\\f39a\"}.ion-android-open:before{content:\"\\f39c\"}.ion-android-options:before{content:\"\\f39d\"}.ion-android-people:before{content:\"\\f39e\"}.ion-android-person:before{content:\"\\f3a0\"}.ion-android-person-add:before{content:\"\\f39f\"}.ion-android-phone-landscape:before{content:\"\\f3a1\"}.ion-android-phone-portrait:before{content:\"\\f3a2\"}.ion-android-pin:before{content:\"\\f3a3\"}.ion-android-plane:before{content:\"\\f3a4\"}.ion-android-playstore:before{content:\"\\f2f0\"}.ion-android-print:before{content:\"\\f3a5\"}.ion-android-radio-button-off:before{content:\"\\f3a6\"}.ion-android-radio-button-on:before{content:\"\\f3a7\"}.ion-android-refresh:before{content:\"\\f3a8\"}.ion-android-remove:before{content:\"\\f2f4\"}.ion-android-remove-circle:before{content:\"\\f3a9\"}.ion-android-restaurant:before{content:\"\\f3aa\"}.ion-android-sad:before{content:\"\\f3ab\"}.ion-android-search:before{content:\"\\f2f5\"}.ion-android-send:before{content:\"\\f2f6\"}.ion-android-settings:before{content:\"\\f2f7\"}.ion-android-share:before{content:\"\\f2f8\"}.ion-android-share-alt:before{content:\"\\f3ac\"}.ion-android-star:before{content:\"\\f2fc\"}.ion-android-star-half:before{content:\"\\f3ad\"}.ion-android-star-outline:before{content:\"\\f3ae\"}.ion-android-stopwatch:before{content:\"\\f2fd\"}.ion-android-subway:before{content:\"\\f3af\"}.ion-android-sunny:before{content:\"\\f3b0\"}.ion-android-sync:before{content:\"\\f3b1\"}.ion-android-textsms:before{content:\"\\f3b2\"}.ion-android-time:before{content:\"\\f3b3\"}.ion-android-train:before{content:\"\\f3b4\"}.ion-android-unlock:before{content:\"\\f3b5\"}.ion-android-upload:before{content:\"\\f3b6\"}.ion-android-volume-down:before{content:\"\\f3b7\"}.ion-android-volume-mute:before{content:\"\\f3b8\"}.ion-android-volume-off:before{content:\"\\f3b9\"}.ion-android-volume-up:before{content:\"\\f3ba\"}.ion-android-walk:before{content:\"\\f3bb\"}.ion-android-warning:before{content:\"\\f3bc\"}.ion-android-watch:before{content:\"\\f3bd\"}.ion-android-wifi:before{content:\"\\f305\"}.ion-aperture:before{content:\"\\f313\"}.ion-archive:before{content:\"\\f102\"}.ion-arrow-down-a:before{content:\"\\f103\"}.ion-arrow-down-b:before{content:\"\\f104\"}.ion-arrow-down-c:before{content:\"\\f105\"}.ion-arrow-expand:before{content:\"\\f25e\"}.ion-arrow-graph-down-left:before{content:\"\\f25f\"}.ion-arrow-graph-down-right:before{content:\"\\f260\"}.ion-arrow-graph-up-left:before{content:\"\\f261\"}.ion-arrow-graph-up-right:before{content:\"\\f262\"}.ion-arrow-left-a:before{content:\"\\f106\"}.ion-arrow-left-b:before{content:\"\\f107\"}.ion-arrow-left-c:before{content:\"\\f108\"}.ion-arrow-move:before{content:\"\\f263\"}.ion-arrow-resize:before{content:\"\\f264\"}.ion-arrow-return-left:before{content:\"\\f265\"}.ion-arrow-return-right:before{content:\"\\f266\"}.ion-arrow-right-a:before{content:\"\\f109\"}.ion-arrow-right-b:before{content:\"\\f10a\"}.ion-arrow-right-c:before{content:\"\\f10b\"}.ion-arrow-shrink:before{content:\"\\f267\"}.ion-arrow-swap:before{content:\"\\f268\"}.ion-arrow-up-a:before{content:\"\\f10c\"}.ion-arrow-up-b:before{content:\"\\f10d\"}.ion-arrow-up-c:before{content:\"\\f10e\"}.ion-asterisk:before{content:\"\\f314\"}.ion-at:before{content:\"\\f10f\"}.ion-backspace:before{content:\"\\f3bf\"}.ion-backspace-outline:before{content:\"\\f3be\"}.ion-bag:before{content:\"\\f110\"}.ion-battery-charging:before{content:\"\\f111\"}.ion-battery-empty:before{content:\"\\f112\"}.ion-battery-full:before{content:\"\\f113\"}.ion-battery-half:before{content:\"\\f114\"}.ion-battery-low:before{content:\"\\f115\"}.ion-beaker:before{content:\"\\f269\"}.ion-beer:before{content:\"\\f26a\"}.ion-bluetooth:before{content:\"\\f116\"}.ion-bonfire:before{content:\"\\f315\"}.ion-bookmark:before{content:\"\\f26b\"}.ion-bowtie:before{content:\"\\f3c0\"}.ion-briefcase:before{content:\"\\f26c\"}.ion-bug:before{content:\"\\f2be\"}.ion-calculator:before{content:\"\\f26d\"}.ion-calendar:before{content:\"\\f117\"}.ion-camera:before{content:\"\\f118\"}.ion-card:before{content:\"\\f119\"}.ion-cash:before{content:\"\\f316\"}.ion-chatbox:before{content:\"\\f11b\"}.ion-chatbox-working:before{content:\"\\f11a\"}.ion-chatboxes:before{content:\"\\f11c\"}.ion-chatbubble:before{content:\"\\f11e\"}.ion-chatbubble-working:before{content:\"\\f11d\"}.ion-chatbubbles:before{content:\"\\f11f\"}.ion-checkmark:before{content:\"\\f122\"}.ion-checkmark-circled:before{content:\"\\f120\"}.ion-checkmark-round:before{content:\"\\f121\"}.ion-chevron-down:before{content:\"\\f123\"}.ion-chevron-left:before{content:\"\\f124\"}.ion-chevron-right:before{content:\"\\f125\"}.ion-chevron-up:before{content:\"\\f126\"}.ion-clipboard:before{content:\"\\f127\"}.ion-clock:before{content:\"\\f26e\"}.ion-close:before{content:\"\\f12a\"}.ion-close-circled:before{content:\"\\f128\"}.ion-close-round:before{content:\"\\f129\"}.ion-closed-captioning:before{content:\"\\f317\"}.ion-cloud:before{content:\"\\f12b\"}.ion-code:before{content:\"\\f271\"}.ion-code-download:before{content:\"\\f26f\"}.ion-code-working:before{content:\"\\f270\"}.ion-coffee:before{content:\"\\f272\"}.ion-compass:before{content:\"\\f273\"}.ion-compose:before{content:\"\\f12c\"}.ion-connection-bars:before{content:\"\\f274\"}.ion-contrast:before{content:\"\\f275\"}.ion-crop:before{content:\"\\f3c1\"}.ion-cube:before{content:\"\\f318\"}.ion-disc:before{content:\"\\f12d\"}.ion-document:before{content:\"\\f12f\"}.ion-document-text:before{content:\"\\f12e\"}.ion-drag:before{content:\"\\f130\"}.ion-earth:before{content:\"\\f276\"}.ion-easel:before{content:\"\\f3c2\"}.ion-edit:before{content:\"\\f2bf\"}.ion-egg:before{content:\"\\f277\"}.ion-eject:before{content:\"\\f131\"}.ion-email:before{content:\"\\f132\"}.ion-email-unread:before{content:\"\\f3c3\"}.ion-erlenmeyer-flask:before{content:\"\\f3c5\"}.ion-erlenmeyer-flask-bubbles:before{content:\"\\f3c4\"}.ion-eye:before{content:\"\\f133\"}.ion-eye-disabled:before{content:\"\\f306\"}.ion-female:before{content:\"\\f278\"}.ion-filing:before{content:\"\\f134\"}.ion-film-marker:before{content:\"\\f135\"}.ion-fireball:before{content:\"\\f319\"}.ion-flag:before{content:\"\\f279\"}.ion-flame:before{content:\"\\f31a\"}.ion-flash:before{content:\"\\f137\"}.ion-flash-off:before{content:\"\\f136\"}.ion-folder:before{content:\"\\f139\"}.ion-fork:before{content:\"\\f27a\"}.ion-fork-repo:before{content:\"\\f2c0\"}.ion-forward:before{content:\"\\f13a\"}.ion-funnel:before{content:\"\\f31b\"}.ion-gear-a:before{content:\"\\f13d\"}.ion-gear-b:before{content:\"\\f13e\"}.ion-grid:before{content:\"\\f13f\"}.ion-hammer:before{content:\"\\f27b\"}.ion-happy:before{content:\"\\f31c\"}.ion-happy-outline:before{content:\"\\f3c6\"}.ion-headphone:before{content:\"\\f140\"}.ion-heart:before{content:\"\\f141\"}.ion-heart-broken:before{content:\"\\f31d\"}.ion-help:before{content:\"\\f143\"}.ion-help-buoy:before{content:\"\\f27c\"}.ion-help-circled:before{content:\"\\f142\"}.ion-home:before{content:\"\\f144\"}.ion-icecream:before{content:\"\\f27d\"}.ion-image:before{content:\"\\f147\"}.ion-images:before{content:\"\\f148\"}.ion-information:before{content:\"\\f14a\"}.ion-information-circled:before{content:\"\\f149\"}.ion-ionic:before{content:\"\\f14b\"}.ion-ios-alarm:before{content:\"\\f3c8\"}.ion-ios-alarm-outline:before{content:\"\\f3c7\"}.ion-ios-albums:before{content:\"\\f3ca\"}.ion-ios-albums-outline:before{content:\"\\f3c9\"}.ion-ios-americanfootball:before{content:\"\\f3cc\"}.ion-ios-americanfootball-outline:before{content:\"\\f3cb\"}.ion-ios-analytics:before{content:\"\\f3ce\"}.ion-ios-analytics-outline:before{content:\"\\f3cd\"}.ion-ios-arrow-back:before{content:\"\\f3cf\"}.ion-ios-arrow-down:before{content:\"\\f3d0\"}.ion-ios-arrow-forward:before{content:\"\\f3d1\"}.ion-ios-arrow-left:before{content:\"\\f3d2\"}.ion-ios-arrow-right:before{content:\"\\f3d3\"}.ion-ios-arrow-thin-down:before{content:\"\\f3d4\"}.ion-ios-arrow-thin-left:before{content:\"\\f3d5\"}.ion-ios-arrow-thin-right:before{content:\"\\f3d6\"}.ion-ios-arrow-thin-up:before{content:\"\\f3d7\"}.ion-ios-arrow-up:before{content:\"\\f3d8\"}.ion-ios-at:before{content:\"\\f3da\"}.ion-ios-at-outline:before{content:\"\\f3d9\"}.ion-ios-barcode:before{content:\"\\f3dc\"}.ion-ios-barcode-outline:before{content:\"\\f3db\"}.ion-ios-baseball:before{content:\"\\f3de\"}.ion-ios-baseball-outline:before{content:\"\\f3dd\"}.ion-ios-basketball:before{content:\"\\f3e0\"}.ion-ios-basketball-outline:before{content:\"\\f3df\"}.ion-ios-bell:before{content:\"\\f3e2\"}.ion-ios-bell-outline:before{content:\"\\f3e1\"}.ion-ios-body:before{content:\"\\f3e4\"}.ion-ios-body-outline:before{content:\"\\f3e3\"}.ion-ios-bolt:before{content:\"\\f3e6\"}.ion-ios-bolt-outline:before{content:\"\\f3e5\"}.ion-ios-book:before{content:\"\\f3e8\"}.ion-ios-book-outline:before{content:\"\\f3e7\"}.ion-ios-bookmarks:before{content:\"\\f3ea\"}.ion-ios-bookmarks-outline:before{content:\"\\f3e9\"}.ion-ios-box:before{content:\"\\f3ec\"}.ion-ios-box-outline:before{content:\"\\f3eb\"}.ion-ios-briefcase:before{content:\"\\f3ee\"}.ion-ios-briefcase-outline:before{content:\"\\f3ed\"}.ion-ios-browsers:before{content:\"\\f3f0\"}.ion-ios-browsers-outline:before{content:\"\\f3ef\"}.ion-ios-calculator:before{content:\"\\f3f2\"}.ion-ios-calculator-outline:before{content:\"\\f3f1\"}.ion-ios-calendar:before{content:\"\\f3f4\"}.ion-ios-calendar-outline:before{content:\"\\f3f3\"}.ion-ios-camera:before{content:\"\\f3f6\"}.ion-ios-camera-outline:before{content:\"\\f3f5\"}.ion-ios-cart:before{content:\"\\f3f8\"}.ion-ios-cart-outline:before{content:\"\\f3f7\"}.ion-ios-chatboxes:before{content:\"\\f3fa\"}.ion-ios-chatboxes-outline:before{content:\"\\f3f9\"}.ion-ios-chatbubble:before{content:\"\\f3fc\"}.ion-ios-chatbubble-outline:before{content:\"\\f3fb\"}.ion-ios-checkmark:before{content:\"\\f3ff\"}.ion-ios-checkmark-empty:before{content:\"\\f3fd\"}.ion-ios-checkmark-outline:before{content:\"\\f3fe\"}.ion-ios-circle-filled:before{content:\"\\f400\"}.ion-ios-circle-outline:before{content:\"\\f401\"}.ion-ios-clock:before{content:\"\\f403\"}.ion-ios-clock-outline:before{content:\"\\f402\"}.ion-ios-close:before{content:\"\\f406\"}.ion-ios-close-empty:before{content:\"\\f404\"}.ion-ios-close-outline:before{content:\"\\f405\"}.ion-ios-cloud:before{content:\"\\f40c\"}.ion-ios-cloud-download:before{content:\"\\f408\"}.ion-ios-cloud-download-outline:before{content:\"\\f407\"}.ion-ios-cloud-outline:before{content:\"\\f409\"}.ion-ios-cloud-upload:before{content:\"\\f40b\"}.ion-ios-cloud-upload-outline:before{content:\"\\f40a\"}.ion-ios-cloudy:before{content:\"\\f410\"}.ion-ios-cloudy-night:before{content:\"\\f40e\"}.ion-ios-cloudy-night-outline:before{content:\"\\f40d\"}.ion-ios-cloudy-outline:before{content:\"\\f40f\"}.ion-ios-cog:before{content:\"\\f412\"}.ion-ios-cog-outline:before{content:\"\\f411\"}.ion-ios-color-filter:before{content:\"\\f414\"}.ion-ios-color-filter-outline:before{content:\"\\f413\"}.ion-ios-color-wand:before{content:\"\\f416\"}.ion-ios-color-wand-outline:before{content:\"\\f415\"}.ion-ios-compose:before{content:\"\\f418\"}.ion-ios-compose-outline:before{content:\"\\f417\"}.ion-ios-contact:before{content:\"\\f41a\"}.ion-ios-contact-outline:before{content:\"\\f419\"}.ion-ios-copy:before{content:\"\\f41c\"}.ion-ios-copy-outline:before{content:\"\\f41b\"}.ion-ios-crop:before{content:\"\\f41e\"}.ion-ios-crop-strong:before{content:\"\\f41d\"}.ion-ios-download:before{content:\"\\f420\"}.ion-ios-download-outline:before{content:\"\\f41f\"}.ion-ios-drag:before{content:\"\\f421\"}.ion-ios-email:before{content:\"\\f423\"}.ion-ios-email-outline:before{content:\"\\f422\"}.ion-ios-eye:before{content:\"\\f425\"}.ion-ios-eye-outline:before{content:\"\\f424\"}.ion-ios-fastforward:before{content:\"\\f427\"}.ion-ios-fastforward-outline:before{content:\"\\f426\"}.ion-ios-filing:before{content:\"\\f429\"}.ion-ios-filing-outline:before{content:\"\\f428\"}.ion-ios-film:before{content:\"\\f42b\"}.ion-ios-film-outline:before{content:\"\\f42a\"}.ion-ios-flag:before{content:\"\\f42d\"}.ion-ios-flag-outline:before{content:\"\\f42c\"}.ion-ios-flame:before{content:\"\\f42f\"}.ion-ios-flame-outline:before{content:\"\\f42e\"}.ion-ios-flask:before{content:\"\\f431\"}.ion-ios-flask-outline:before{content:\"\\f430\"}.ion-ios-flower:before{content:\"\\f433\"}.ion-ios-flower-outline:before{content:\"\\f432\"}.ion-ios-folder:before{content:\"\\f435\"}.ion-ios-folder-outline:before{content:\"\\f434\"}.ion-ios-football:before{content:\"\\f437\"}.ion-ios-football-outline:before{content:\"\\f436\"}.ion-ios-game-controller-a:before{content:\"\\f439\"}.ion-ios-game-controller-a-outline:before{content:\"\\f438\"}.ion-ios-game-controller-b:before{content:\"\\f43b\"}.ion-ios-game-controller-b-outline:before{content:\"\\f43a\"}.ion-ios-gear:before{content:\"\\f43d\"}.ion-ios-gear-outline:before{content:\"\\f43c\"}.ion-ios-glasses:before{content:\"\\f43f\"}.ion-ios-glasses-outline:before{content:\"\\f43e\"}.ion-ios-grid-view:before{content:\"\\f441\"}.ion-ios-grid-view-outline:before{content:\"\\f440\"}.ion-ios-heart:before{content:\"\\f443\"}.ion-ios-heart-outline:before{content:\"\\f442\"}.ion-ios-help:before{content:\"\\f446\"}.ion-ios-help-empty:before{content:\"\\f444\"}.ion-ios-help-outline:before{content:\"\\f445\"}.ion-ios-home:before{content:\"\\f448\"}.ion-ios-home-outline:before{content:\"\\f447\"}.ion-ios-infinite:before{content:\"\\f44a\"}.ion-ios-infinite-outline:before{content:\"\\f449\"}.ion-ios-information:before{content:\"\\f44d\"}.ion-ios-information-empty:before{content:\"\\f44b\"}.ion-ios-information-outline:before{content:\"\\f44c\"}.ion-ios-ionic-outline:before{content:\"\\f44e\"}.ion-ios-keypad:before{content:\"\\f450\"}.ion-ios-keypad-outline:before{content:\"\\f44f\"}.ion-ios-lightbulb:before{content:\"\\f452\"}.ion-ios-lightbulb-outline:before{content:\"\\f451\"}.ion-ios-list:before{content:\"\\f454\"}.ion-ios-list-outline:before{content:\"\\f453\"}.ion-ios-location:before{content:\"\\f456\"}.ion-ios-location-outline:before{content:\"\\f455\"}.ion-ios-locked:before{content:\"\\f458\"}.ion-ios-locked-outline:before{content:\"\\f457\"}.ion-ios-loop:before{content:\"\\f45a\"}.ion-ios-loop-strong:before{content:\"\\f459\"}.ion-ios-medical:before{content:\"\\f45c\"}.ion-ios-medical-outline:before{content:\"\\f45b\"}.ion-ios-medkit:before{content:\"\\f45e\"}.ion-ios-medkit-outline:before{content:\"\\f45d\"}.ion-ios-mic:before{content:\"\\f461\"}.ion-ios-mic-off:before{content:\"\\f45f\"}.ion-ios-mic-outline:before{content:\"\\f460\"}.ion-ios-minus:before{content:\"\\f464\"}.ion-ios-minus-empty:before{content:\"\\f462\"}.ion-ios-minus-outline:before{content:\"\\f463\"}.ion-ios-monitor:before{content:\"\\f466\"}.ion-ios-monitor-outline:before{content:\"\\f465\"}.ion-ios-moon:before{content:\"\\f468\"}.ion-ios-moon-outline:before{content:\"\\f467\"}.ion-ios-more:before{content:\"\\f46a\"}.ion-ios-more-outline:before{content:\"\\f469\"}.ion-ios-musical-note:before{content:\"\\f46b\"}.ion-ios-musical-notes:before{content:\"\\f46c\"}.ion-ios-navigate:before{content:\"\\f46e\"}.ion-ios-navigate-outline:before{content:\"\\f46d\"}.ion-ios-nutrition:before{content:\"\\f470\"}.ion-ios-nutrition-outline:before{content:\"\\f46f\"}.ion-ios-paper:before{content:\"\\f472\"}.ion-ios-paper-outline:before{content:\"\\f471\"}.ion-ios-paperplane:before{content:\"\\f474\"}.ion-ios-paperplane-outline:before{content:\"\\f473\"}.ion-ios-partlysunny:before{content:\"\\f476\"}.ion-ios-partlysunny-outline:before{content:\"\\f475\"}.ion-ios-pause:before{content:\"\\f478\"}.ion-ios-pause-outline:before{content:\"\\f477\"}.ion-ios-paw:before{content:\"\\f47a\"}.ion-ios-paw-outline:before{content:\"\\f479\"}.ion-ios-people:before{content:\"\\f47c\"}.ion-ios-people-outline:before{content:\"\\f47b\"}.ion-ios-person:before{content:\"\\f47e\"}.ion-ios-person-outline:before{content:\"\\f47d\"}.ion-ios-personadd:before{content:\"\\f480\"}.ion-ios-personadd-outline:before{content:\"\\f47f\"}.ion-ios-photos:before{content:\"\\f482\"}.ion-ios-photos-outline:before{content:\"\\f481\"}.ion-ios-pie:before{content:\"\\f484\"}.ion-ios-pie-outline:before{content:\"\\f483\"}.ion-ios-pint:before{content:\"\\f486\"}.ion-ios-pint-outline:before{content:\"\\f485\"}.ion-ios-play:before{content:\"\\f488\"}.ion-ios-play-outline:before{content:\"\\f487\"}.ion-ios-plus:before{content:\"\\f48b\"}.ion-ios-plus-empty:before{content:\"\\f489\"}.ion-ios-plus-outline:before{content:\"\\f48a\"}.ion-ios-pricetag:before{content:\"\\f48d\"}.ion-ios-pricetag-outline:before{content:\"\\f48c\"}.ion-ios-pricetags:before{content:\"\\f48f\"}.ion-ios-pricetags-outline:before{content:\"\\f48e\"}.ion-ios-printer:before{content:\"\\f491\"}.ion-ios-printer-outline:before{content:\"\\f490\"}.ion-ios-pulse:before{content:\"\\f493\"}.ion-ios-pulse-strong:before{content:\"\\f492\"}.ion-ios-rainy:before{content:\"\\f495\"}.ion-ios-rainy-outline:before{content:\"\\f494\"}.ion-ios-recording:before{content:\"\\f497\"}.ion-ios-recording-outline:before{content:\"\\f496\"}.ion-ios-redo:before{content:\"\\f499\"}.ion-ios-redo-outline:before{content:\"\\f498\"}.ion-ios-refresh:before{content:\"\\f49c\"}.ion-ios-refresh-empty:before{content:\"\\f49a\"}.ion-ios-refresh-outline:before{content:\"\\f49b\"}.ion-ios-reload:before{content:\"\\f49d\"}.ion-ios-reverse-camera:before{content:\"\\f49f\"}.ion-ios-reverse-camera-outline:before{content:\"\\f49e\"}.ion-ios-rewind:before{content:\"\\f4a1\"}.ion-ios-rewind-outline:before{content:\"\\f4a0\"}.ion-ios-rose:before{content:\"\\f4a3\"}.ion-ios-rose-outline:before{content:\"\\f4a2\"}.ion-ios-search:before{content:\"\\f4a5\"}.ion-ios-search-strong:before{content:\"\\f4a4\"}.ion-ios-settings:before{content:\"\\f4a7\"}.ion-ios-settings-strong:before{content:\"\\f4a6\"}.ion-ios-shuffle:before{content:\"\\f4a9\"}.ion-ios-shuffle-strong:before{content:\"\\f4a8\"}.ion-ios-skipbackward:before{content:\"\\f4ab\"}.ion-ios-skipbackward-outline:before{content:\"\\f4aa\"}.ion-ios-skipforward:before{content:\"\\f4ad\"}.ion-ios-skipforward-outline:before{content:\"\\f4ac\"}.ion-ios-snowy:before{content:\"\\f4ae\"}.ion-ios-speedometer:before{content:\"\\f4b0\"}.ion-ios-speedometer-outline:before{content:\"\\f4af\"}.ion-ios-star:before{content:\"\\f4b3\"}.ion-ios-star-half:before{content:\"\\f4b1\"}.ion-ios-star-outline:before{content:\"\\f4b2\"}.ion-ios-stopwatch:before{content:\"\\f4b5\"}.ion-ios-stopwatch-outline:before{content:\"\\f4b4\"}.ion-ios-sunny:before{content:\"\\f4b7\"}.ion-ios-sunny-outline:before{content:\"\\f4b6\"}.ion-ios-telephone:before{content:\"\\f4b9\"}.ion-ios-telephone-outline:before{content:\"\\f4b8\"}.ion-ios-tennisball:before{content:\"\\f4bb\"}.ion-ios-tennisball-outline:before{content:\"\\f4ba\"}.ion-ios-thunderstorm:before{content:\"\\f4bd\"}.ion-ios-thunderstorm-outline:before{content:\"\\f4bc\"}.ion-ios-time:before{content:\"\\f4bf\"}.ion-ios-time-outline:before{content:\"\\f4be\"}.ion-ios-timer:before{content:\"\\f4c1\"}.ion-ios-timer-outline:before{content:\"\\f4c0\"}.ion-ios-toggle:before{content:\"\\f4c3\"}.ion-ios-toggle-outline:before{content:\"\\f4c2\"}.ion-ios-trash:before{content:\"\\f4c5\"}.ion-ios-trash-outline:before{content:\"\\f4c4\"}.ion-ios-undo:before{content:\"\\f4c7\"}.ion-ios-undo-outline:before{content:\"\\f4c6\"}.ion-ios-unlocked:before{content:\"\\f4c9\"}.ion-ios-unlocked-outline:before{content:\"\\f4c8\"}.ion-ios-upload:before{content:\"\\f4cb\"}.ion-ios-upload-outline:before{content:\"\\f4ca\"}.ion-ios-videocam:before{content:\"\\f4cd\"}.ion-ios-videocam-outline:before{content:\"\\f4cc\"}.ion-ios-volume-high:before{content:\"\\f4ce\"}.ion-ios-volume-low:before{content:\"\\f4cf\"}.ion-ios-wineglass:before{content:\"\\f4d1\"}.ion-ios-wineglass-outline:before{content:\"\\f4d0\"}.ion-ios-world:before{content:\"\\f4d3\"}.ion-ios-world-outline:before{content:\"\\f4d2\"}.ion-ipad:before{content:\"\\f1f9\"}.ion-iphone:before{content:\"\\f1fa\"}.ion-ipod:before{content:\"\\f1fb\"}.ion-jet:before{content:\"\\f295\"}.ion-key:before{content:\"\\f296\"}.ion-knife:before{content:\"\\f297\"}.ion-laptop:before{content:\"\\f1fc\"}.ion-leaf:before{content:\"\\f1fd\"}.ion-levels:before{content:\"\\f298\"}.ion-lightbulb:before{content:\"\\f299\"}.ion-link:before{content:\"\\f1fe\"}.ion-load-a:before{content:\"\\f29a\"}.ion-load-b:before{content:\"\\f29b\"}.ion-load-c:before{content:\"\\f29c\"}.ion-load-d:before{content:\"\\f29d\"}.ion-location:before{content:\"\\f1ff\"}.ion-lock-combination:before{content:\"\\f4d4\"}.ion-locked:before{content:\"\\f200\"}.ion-log-in:before{content:\"\\f29e\"}.ion-log-out:before{content:\"\\f29f\"}.ion-loop:before{content:\"\\f201\"}.ion-magnet:before{content:\"\\f2a0\"}.ion-male:before{content:\"\\f2a1\"}.ion-man:before{content:\"\\f202\"}.ion-map:before{content:\"\\f203\"}.ion-medkit:before{content:\"\\f2a2\"}.ion-merge:before{content:\"\\f33f\"}.ion-mic-a:before{content:\"\\f204\"}.ion-mic-b:before{content:\"\\f205\"}.ion-mic-c:before{content:\"\\f206\"}.ion-minus:before{content:\"\\f209\"}.ion-minus-circled:before{content:\"\\f207\"}.ion-minus-round:before{content:\"\\f208\"}.ion-model-s:before{content:\"\\f2c1\"}.ion-monitor:before{content:\"\\f20a\"}.ion-more:before{content:\"\\f20b\"}.ion-mouse:before{content:\"\\f340\"}.ion-music-note:before{content:\"\\f20c\"}.ion-navicon:before{content:\"\\f20e\"}.ion-navicon-round:before{content:\"\\f20d\"}.ion-navigate:before{content:\"\\f2a3\"}.ion-network:before{content:\"\\f341\"}.ion-no-smoking:before{content:\"\\f2c2\"}.ion-nuclear:before{content:\"\\f2a4\"}.ion-outlet:before{content:\"\\f342\"}.ion-paintbrush:before{content:\"\\f4d5\"}.ion-paintbucket:before{content:\"\\f4d6\"}.ion-paper-airplane:before{content:\"\\f2c3\"}.ion-paperclip:before{content:\"\\f20f\"}.ion-pause:before{content:\"\\f210\"}.ion-person:before{content:\"\\f213\"}.ion-person-add:before{content:\"\\f211\"}.ion-person-stalker:before{content:\"\\f212\"}.ion-pie-graph:before{content:\"\\f2a5\"}.ion-pin:before{content:\"\\f2a6\"}.ion-pinpoint:before{content:\"\\f2a7\"}.ion-pizza:before{content:\"\\f2a8\"}.ion-plane:before{content:\"\\f214\"}.ion-planet:before{content:\"\\f343\"}.ion-play:before{content:\"\\f215\"}.ion-playstation:before{content:\"\\f30a\"}.ion-plus:before{content:\"\\f218\"}.ion-plus-circled:before{content:\"\\f216\"}.ion-plus-round:before{content:\"\\f217\"}.ion-podium:before{content:\"\\f344\"}.ion-pound:before{content:\"\\f219\"}.ion-power:before{content:\"\\f2a9\"}.ion-pricetag:before{content:\"\\f2aa\"}.ion-pricetags:before{content:\"\\f2ab\"}.ion-printer:before{content:\"\\f21a\"}.ion-pull-request:before{content:\"\\f345\"}.ion-qr-scanner:before{content:\"\\f346\"}.ion-quote:before{content:\"\\f347\"}.ion-radio-waves:before{content:\"\\f2ac\"}.ion-record:before{content:\"\\f21b\"}.ion-refresh:before{content:\"\\f21c\"}.ion-reply:before{content:\"\\f21e\"}.ion-reply-all:before{content:\"\\f21d\"}.ion-ribbon-a:before{content:\"\\f348\"}.ion-ribbon-b:before{content:\"\\f349\"}.ion-sad:before{content:\"\\f34a\"}.ion-sad-outline:before{content:\"\\f4d7\"}.ion-scissors:before{content:\"\\f34b\"}.ion-search:before{content:\"\\f21f\"}.ion-settings:before{content:\"\\f2ad\"}.ion-share:before{content:\"\\f220\"}.ion-shuffle:before{content:\"\\f221\"}.ion-skip-backward:before{content:\"\\f222\"}.ion-skip-forward:before{content:\"\\f223\"}.ion-social-android:before{content:\"\\f225\"}.ion-social-android-outline:before{content:\"\\f224\"}.ion-social-angular:before{content:\"\\f4d9\"}.ion-social-angular-outline:before{content:\"\\f4d8\"}.ion-social-apple:before{content:\"\\f227\"}.ion-social-apple-outline:before{content:\"\\f226\"}.ion-social-bitcoin:before{content:\"\\f2af\"}.ion-social-bitcoin-outline:before{content:\"\\f2ae\"}.ion-social-buffer:before{content:\"\\f229\"}.ion-social-buffer-outline:before{content:\"\\f228\"}.ion-social-chrome:before{content:\"\\f4db\"}.ion-social-chrome-outline:before{content:\"\\f4da\"}.ion-social-codepen:before{content:\"\\f4dd\"}.ion-social-codepen-outline:before{content:\"\\f4dc\"}.ion-social-css3:before{content:\"\\f4df\"}.ion-social-css3-outline:before{content:\"\\f4de\"}.ion-social-designernews:before{content:\"\\f22b\"}.ion-social-designernews-outline:before{content:\"\\f22a\"}.ion-social-dribbble:before{content:\"\\f22d\"}.ion-social-dribbble-outline:before{content:\"\\f22c\"}.ion-social-dropbox:before{content:\"\\f22f\"}.ion-social-dropbox-outline:before{content:\"\\f22e\"}.ion-social-euro:before{content:\"\\f4e1\"}.ion-social-euro-outline:before{content:\"\\f4e0\"}.ion-social-facebook:before{content:\"\\f231\"}.ion-social-facebook-outline:before{content:\"\\f230\"}.ion-social-foursquare:before{content:\"\\f34d\"}.ion-social-foursquare-outline:before{content:\"\\f34c\"}.ion-social-freebsd-devil:before{content:\"\\f2c4\"}.ion-social-github:before{content:\"\\f233\"}.ion-social-github-outline:before{content:\"\\f232\"}.ion-social-google:before{content:\"\\f34f\"}.ion-social-google-outline:before{content:\"\\f34e\"}.ion-social-googleplus:before{content:\"\\f235\"}.ion-social-googleplus-outline:before{content:\"\\f234\"}.ion-social-hackernews:before{content:\"\\f237\"}.ion-social-hackernews-outline:before{content:\"\\f236\"}.ion-social-html5:before{content:\"\\f4e3\"}.ion-social-html5-outline:before{content:\"\\f4e2\"}.ion-social-instagram:before{content:\"\\f351\"}.ion-social-instagram-outline:before{content:\"\\f350\"}.ion-social-javascript:before{content:\"\\f4e5\"}.ion-social-javascript-outline:before{content:\"\\f4e4\"}.ion-social-linkedin:before{content:\"\\f239\"}.ion-social-linkedin-outline:before{content:\"\\f238\"}.ion-social-markdown:before{content:\"\\f4e6\"}.ion-social-nodejs:before{content:\"\\f4e7\"}.ion-social-octocat:before{content:\"\\f4e8\"}.ion-social-pinterest:before{content:\"\\f2b1\"}.ion-social-pinterest-outline:before{content:\"\\f2b0\"}.ion-social-python:before{content:\"\\f4e9\"}.ion-social-reddit:before{content:\"\\f23b\"}.ion-social-reddit-outline:before{content:\"\\f23a\"}.ion-social-rss:before{content:\"\\f23d\"}.ion-social-rss-outline:before{content:\"\\f23c\"}.ion-social-sass:before{content:\"\\f4ea\"}.ion-social-skype:before{content:\"\\f23f\"}.ion-social-skype-outline:before{content:\"\\f23e\"}.ion-social-snapchat:before{content:\"\\f4ec\"}.ion-social-snapchat-outline:before{content:\"\\f4eb\"}.ion-social-tumblr:before{content:\"\\f241\"}.ion-social-tumblr-outline:before{content:\"\\f240\"}.ion-social-tux:before{content:\"\\f2c5\"}.ion-social-twitch:before{content:\"\\f4ee\"}.ion-social-twitch-outline:before{content:\"\\f4ed\"}.ion-social-twitter:before{content:\"\\f243\"}.ion-social-twitter-outline:before{content:\"\\f242\"}.ion-social-usd:before{content:\"\\f353\"}.ion-social-usd-outline:before{content:\"\\f352\"}.ion-social-vimeo:before{content:\"\\f245\"}.ion-social-vimeo-outline:before{content:\"\\f244\"}.ion-social-whatsapp:before{content:\"\\f4f0\"}.ion-social-whatsapp-outline:before{content:\"\\f4ef\"}.ion-social-windows:before{content:\"\\f247\"}.ion-social-windows-outline:before{content:\"\\f246\"}.ion-social-wordpress:before{content:\"\\f249\"}.ion-social-wordpress-outline:before{content:\"\\f248\"}.ion-social-yahoo:before{content:\"\\f24b\"}.ion-social-yahoo-outline:before{content:\"\\f24a\"}.ion-social-yen:before{content:\"\\f4f2\"}.ion-social-yen-outline:before{content:\"\\f4f1\"}.ion-social-youtube:before{content:\"\\f24d\"}.ion-social-youtube-outline:before{content:\"\\f24c\"}.ion-soup-can:before{content:\"\\f4f4\"}.ion-soup-can-outline:before{content:\"\\f4f3\"}.ion-speakerphone:before{content:\"\\f2b2\"}.ion-speedometer:before{content:\"\\f2b3\"}.ion-spoon:before{content:\"\\f2b4\"}.ion-star:before{content:\"\\f24e\"}.ion-stats-bars:before{content:\"\\f2b5\"}.ion-steam:before{content:\"\\f30b\"}.ion-stop:before{content:\"\\f24f\"}.ion-thermometer:before{content:\"\\f2b6\"}.ion-thumbsdown:before{content:\"\\f250\"}.ion-thumbsup:before{content:\"\\f251\"}.ion-toggle:before{content:\"\\f355\"}.ion-toggle-filled:before{content:\"\\f354\"}.ion-transgender:before{content:\"\\f4f5\"}.ion-trash-a:before{content:\"\\f252\"}.ion-trash-b:before{content:\"\\f253\"}.ion-trophy:before{content:\"\\f356\"}.ion-tshirt:before{content:\"\\f4f7\"}.ion-tshirt-outline:before{content:\"\\f4f6\"}.ion-umbrella:before{content:\"\\f2b7\"}.ion-university:before{content:\"\\f357\"}.ion-unlocked:before{content:\"\\f254\"}.ion-upload:before{content:\"\\f255\"}.ion-usb:before{content:\"\\f2b8\"}.ion-videocamera:before{content:\"\\f256\"}.ion-volume-high:before{content:\"\\f257\"}.ion-volume-low:before{content:\"\\f258\"}.ion-volume-medium:before{content:\"\\f259\"}.ion-volume-mute:before{content:\"\\f25a\"}.ion-wand:before{content:\"\\f358\"}.ion-waterdrop:before{content:\"\\f25b\"}.ion-wifi:before{content:\"\\f25c\"}.ion-wineglass:before{content:\"\\f2b9\"}.ion-woman:before{content:\"\\f25d\"}.ion-wrench:before{content:\"\\f2ba\"}.ion-xbox:before{content:\"\\f30c\"}\n", "",{"version":3,"sources":["webpack://node_modules/ionicons/css/ionicons.min.css"],"names":[],"mappings":"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","sourcesContent":["@charset \"UTF-8\";/*!\n  Ionicons, v2.0.1\n  Created by Ben Sperry for the Ionic Framework, http://ionicons.com/\n  https://twitter.com/benjsperry  https://twitter.com/ionicframework\n  MIT License: https://github.com/driftyco/ionicons\n\n  Android-style icons originally built by Google’s\n  Material Design Icons: https://github.com/google/material-design-icons\n  used under CC BY http://creativecommons.org/licenses/by/4.0/\n  Modified icons to fit ionicon’s grid from original.\n*/@font-face{font-family:\"Ionicons\";src:url(\"../fonts/ionicons.eot?v=2.0.1\");src:url(\"../fonts/ionicons.eot?v=2.0.1#iefix\") format(\"embedded-opentype\"),url(\"../fonts/ionicons.ttf?v=2.0.1\") format(\"truetype\"),url(\"../fonts/ionicons.woff?v=2.0.1\") format(\"woff\"),url(\"../fonts/ionicons.svg?v=2.0.1#Ionicons\") format(\"svg\");font-weight:normal;font-style:normal}.ion,.ionicons,.ion-alert:before,.ion-alert-circled:before,.ion-android-add:before,.ion-android-add-circle:before,.ion-android-alarm-clock:before,.ion-android-alert:before,.ion-android-apps:before,.ion-android-archive:before,.ion-android-arrow-back:before,.ion-android-arrow-down:before,.ion-android-arrow-dropdown:before,.ion-android-arrow-dropdown-circle:before,.ion-android-arrow-dropleft:before,.ion-android-arrow-dropleft-circle:before,.ion-android-arrow-dropright:before,.ion-android-arrow-dropright-circle:before,.ion-android-arrow-dropup:before,.ion-android-arrow-dropup-circle:before,.ion-android-arrow-forward:before,.ion-android-arrow-up:before,.ion-android-attach:before,.ion-android-bar:before,.ion-android-bicycle:before,.ion-android-boat:before,.ion-android-bookmark:before,.ion-android-bulb:before,.ion-android-bus:before,.ion-android-calendar:before,.ion-android-call:before,.ion-android-camera:before,.ion-android-cancel:before,.ion-android-car:before,.ion-android-cart:before,.ion-android-chat:before,.ion-android-checkbox:before,.ion-android-checkbox-blank:before,.ion-android-checkbox-outline:before,.ion-android-checkbox-outline-blank:before,.ion-android-checkmark-circle:before,.ion-android-clipboard:before,.ion-android-close:before,.ion-android-cloud:before,.ion-android-cloud-circle:before,.ion-android-cloud-done:before,.ion-android-cloud-outline:before,.ion-android-color-palette:before,.ion-android-compass:before,.ion-android-contact:before,.ion-android-contacts:before,.ion-android-contract:before,.ion-android-create:before,.ion-android-delete:before,.ion-android-desktop:before,.ion-android-document:before,.ion-android-done:before,.ion-android-done-all:before,.ion-android-download:before,.ion-android-drafts:before,.ion-android-exit:before,.ion-android-expand:before,.ion-android-favorite:before,.ion-android-favorite-outline:before,.ion-android-film:before,.ion-android-folder:before,.ion-android-folder-open:before,.ion-android-funnel:before,.ion-android-globe:before,.ion-android-hand:before,.ion-android-hangout:before,.ion-android-happy:before,.ion-android-home:before,.ion-android-image:before,.ion-android-laptop:before,.ion-android-list:before,.ion-android-locate:before,.ion-android-lock:before,.ion-android-mail:before,.ion-android-map:before,.ion-android-menu:before,.ion-android-microphone:before,.ion-android-microphone-off:before,.ion-android-more-horizontal:before,.ion-android-more-vertical:before,.ion-android-navigate:before,.ion-android-notifications:before,.ion-android-notifications-none:before,.ion-android-notifications-off:before,.ion-android-open:before,.ion-android-options:before,.ion-android-people:before,.ion-android-person:before,.ion-android-person-add:before,.ion-android-phone-landscape:before,.ion-android-phone-portrait:before,.ion-android-pin:before,.ion-android-plane:before,.ion-android-playstore:before,.ion-android-print:before,.ion-android-radio-button-off:before,.ion-android-radio-button-on:before,.ion-android-refresh:before,.ion-android-remove:before,.ion-android-remove-circle:before,.ion-android-restaurant:before,.ion-android-sad:before,.ion-android-search:before,.ion-android-send:before,.ion-android-settings:before,.ion-android-share:before,.ion-android-share-alt:before,.ion-android-star:before,.ion-android-star-half:before,.ion-android-star-outline:before,.ion-android-stopwatch:before,.ion-android-subway:before,.ion-android-sunny:before,.ion-android-sync:before,.ion-android-textsms:before,.ion-android-time:before,.ion-android-train:before,.ion-android-unlock:before,.ion-android-upload:before,.ion-android-volume-down:before,.ion-android-volume-mute:before,.ion-android-volume-off:before,.ion-android-volume-up:before,.ion-android-walk:before,.ion-android-warning:before,.ion-android-watch:before,.ion-android-wifi:before,.ion-aperture:before,.ion-archive:before,.ion-arrow-down-a:before,.ion-arrow-down-b:before,.ion-arrow-down-c:before,.ion-arrow-expand:before,.ion-arrow-graph-down-left:before,.ion-arrow-graph-down-right:before,.ion-arrow-graph-up-left:before,.ion-arrow-graph-up-right:before,.ion-arrow-left-a:before,.ion-arrow-left-b:before,.ion-arrow-left-c:before,.ion-arrow-move:before,.ion-arrow-resize:before,.ion-arrow-return-left:before,.ion-arrow-return-right:before,.ion-arrow-right-a:before,.ion-arrow-right-b:before,.ion-arrow-right-c:before,.ion-arrow-shrink:before,.ion-arrow-swap:before,.ion-arrow-up-a:before,.ion-arrow-up-b:before,.ion-arrow-up-c:before,.ion-asterisk:before,.ion-at:before,.ion-backspace:before,.ion-backspace-outline:before,.ion-bag:before,.ion-battery-charging:before,.ion-battery-empty:before,.ion-battery-full:before,.ion-battery-half:before,.ion-battery-low:before,.ion-beaker:before,.ion-beer:before,.ion-bluetooth:before,.ion-bonfire:before,.ion-bookmark:before,.ion-bowtie:before,.ion-briefcase:before,.ion-bug:before,.ion-calculator:before,.ion-calendar:before,.ion-camera:before,.ion-card:before,.ion-cash:before,.ion-chatbox:before,.ion-chatbox-working:before,.ion-chatboxes:before,.ion-chatbubble:before,.ion-chatbubble-working:before,.ion-chatbubbles:before,.ion-checkmark:before,.ion-checkmark-circled:before,.ion-checkmark-round:before,.ion-chevron-down:before,.ion-chevron-left:before,.ion-chevron-right:before,.ion-chevron-up:before,.ion-clipboard:before,.ion-clock:before,.ion-close:before,.ion-close-circled:before,.ion-close-round:before,.ion-closed-captioning:before,.ion-cloud:before,.ion-code:before,.ion-code-download:before,.ion-code-working:before,.ion-coffee:before,.ion-compass:before,.ion-compose:before,.ion-connection-bars:before,.ion-contrast:before,.ion-crop:before,.ion-cube:before,.ion-disc:before,.ion-document:before,.ion-document-text:before,.ion-drag:before,.ion-earth:before,.ion-easel:before,.ion-edit:before,.ion-egg:before,.ion-eject:before,.ion-email:before,.ion-email-unread:before,.ion-erlenmeyer-flask:before,.ion-erlenmeyer-flask-bubbles:before,.ion-eye:before,.ion-eye-disabled:before,.ion-female:before,.ion-filing:before,.ion-film-marker:before,.ion-fireball:before,.ion-flag:before,.ion-flame:before,.ion-flash:before,.ion-flash-off:before,.ion-folder:before,.ion-fork:before,.ion-fork-repo:before,.ion-forward:before,.ion-funnel:before,.ion-gear-a:before,.ion-gear-b:before,.ion-grid:before,.ion-hammer:before,.ion-happy:before,.ion-happy-outline:before,.ion-headphone:before,.ion-heart:before,.ion-heart-broken:before,.ion-help:before,.ion-help-buoy:before,.ion-help-circled:before,.ion-home:before,.ion-icecream:before,.ion-image:before,.ion-images:before,.ion-information:before,.ion-information-circled:before,.ion-ionic:before,.ion-ios-alarm:before,.ion-ios-alarm-outline:before,.ion-ios-albums:before,.ion-ios-albums-outline:before,.ion-ios-americanfootball:before,.ion-ios-americanfootball-outline:before,.ion-ios-analytics:before,.ion-ios-analytics-outline:before,.ion-ios-arrow-back:before,.ion-ios-arrow-down:before,.ion-ios-arrow-forward:before,.ion-ios-arrow-left:before,.ion-ios-arrow-right:before,.ion-ios-arrow-thin-down:before,.ion-ios-arrow-thin-left:before,.ion-ios-arrow-thin-right:before,.ion-ios-arrow-thin-up:before,.ion-ios-arrow-up:before,.ion-ios-at:before,.ion-ios-at-outline:before,.ion-ios-barcode:before,.ion-ios-barcode-outline:before,.ion-ios-baseball:before,.ion-ios-baseball-outline:before,.ion-ios-basketball:before,.ion-ios-basketball-outline:before,.ion-ios-bell:before,.ion-ios-bell-outline:before,.ion-ios-body:before,.ion-ios-body-outline:before,.ion-ios-bolt:before,.ion-ios-bolt-outline:before,.ion-ios-book:before,.ion-ios-book-outline:before,.ion-ios-bookmarks:before,.ion-ios-bookmarks-outline:before,.ion-ios-box:before,.ion-ios-box-outline:before,.ion-ios-briefcase:before,.ion-ios-briefcase-outline:before,.ion-ios-browsers:before,.ion-ios-browsers-outline:before,.ion-ios-calculator:before,.ion-ios-calculator-outline:before,.ion-ios-calendar:before,.ion-ios-calendar-outline:before,.ion-ios-camera:before,.ion-ios-camera-outline:before,.ion-ios-cart:before,.ion-ios-cart-outline:before,.ion-ios-chatboxes:before,.ion-ios-chatboxes-outline:before,.ion-ios-chatbubble:before,.ion-ios-chatbubble-outline:before,.ion-ios-checkmark:before,.ion-ios-checkmark-empty:before,.ion-ios-checkmark-outline:before,.ion-ios-circle-filled:before,.ion-ios-circle-outline:before,.ion-ios-clock:before,.ion-ios-clock-outline:before,.ion-ios-close:before,.ion-ios-close-empty:before,.ion-ios-close-outline:before,.ion-ios-cloud:before,.ion-ios-cloud-download:before,.ion-ios-cloud-download-outline:before,.ion-ios-cloud-outline:before,.ion-ios-cloud-upload:before,.ion-ios-cloud-upload-outline:before,.ion-ios-cloudy:before,.ion-ios-cloudy-night:before,.ion-ios-cloudy-night-outline:before,.ion-ios-cloudy-outline:before,.ion-ios-cog:before,.ion-ios-cog-outline:before,.ion-ios-color-filter:before,.ion-ios-color-filter-outline:before,.ion-ios-color-wand:before,.ion-ios-color-wand-outline:before,.ion-ios-compose:before,.ion-ios-compose-outline:before,.ion-ios-contact:before,.ion-ios-contact-outline:before,.ion-ios-copy:before,.ion-ios-copy-outline:before,.ion-ios-crop:before,.ion-ios-crop-strong:before,.ion-ios-download:before,.ion-ios-download-outline:before,.ion-ios-drag:before,.ion-ios-email:before,.ion-ios-email-outline:before,.ion-ios-eye:before,.ion-ios-eye-outline:before,.ion-ios-fastforward:before,.ion-ios-fastforward-outline:before,.ion-ios-filing:before,.ion-ios-filing-outline:before,.ion-ios-film:before,.ion-ios-film-outline:before,.ion-ios-flag:before,.ion-ios-flag-outline:before,.ion-ios-flame:before,.ion-ios-flame-outline:before,.ion-ios-flask:before,.ion-ios-flask-outline:before,.ion-ios-flower:before,.ion-ios-flower-outline:before,.ion-ios-folder:before,.ion-ios-folder-outline:before,.ion-ios-football:before,.ion-ios-football-outline:before,.ion-ios-game-controller-a:before,.ion-ios-game-controller-a-outline:before,.ion-ios-game-controller-b:before,.ion-ios-game-controller-b-outline:before,.ion-ios-gear:before,.ion-ios-gear-outline:before,.ion-ios-glasses:before,.ion-ios-glasses-outline:before,.ion-ios-grid-view:before,.ion-ios-grid-view-outline:before,.ion-ios-heart:before,.ion-ios-heart-outline:before,.ion-ios-help:before,.ion-ios-help-empty:before,.ion-ios-help-outline:before,.ion-ios-home:before,.ion-ios-home-outline:before,.ion-ios-infinite:before,.ion-ios-infinite-outline:before,.ion-ios-information:before,.ion-ios-information-empty:before,.ion-ios-information-outline:before,.ion-ios-ionic-outline:before,.ion-ios-keypad:before,.ion-ios-keypad-outline:before,.ion-ios-lightbulb:before,.ion-ios-lightbulb-outline:before,.ion-ios-list:before,.ion-ios-list-outline:before,.ion-ios-location:before,.ion-ios-location-outline:before,.ion-ios-locked:before,.ion-ios-locked-outline:before,.ion-ios-loop:before,.ion-ios-loop-strong:before,.ion-ios-medical:before,.ion-ios-medical-outline:before,.ion-ios-medkit:before,.ion-ios-medkit-outline:before,.ion-ios-mic:before,.ion-ios-mic-off:before,.ion-ios-mic-outline:before,.ion-ios-minus:before,.ion-ios-minus-empty:before,.ion-ios-minus-outline:before,.ion-ios-monitor:before,.ion-ios-monitor-outline:before,.ion-ios-moon:before,.ion-ios-moon-outline:before,.ion-ios-more:before,.ion-ios-more-outline:before,.ion-ios-musical-note:before,.ion-ios-musical-notes:before,.ion-ios-navigate:before,.ion-ios-navigate-outline:before,.ion-ios-nutrition:before,.ion-ios-nutrition-outline:before,.ion-ios-paper:before,.ion-ios-paper-outline:before,.ion-ios-paperplane:before,.ion-ios-paperplane-outline:before,.ion-ios-partlysunny:before,.ion-ios-partlysunny-outline:before,.ion-ios-pause:before,.ion-ios-pause-outline:before,.ion-ios-paw:before,.ion-ios-paw-outline:before,.ion-ios-people:before,.ion-ios-people-outline:before,.ion-ios-person:before,.ion-ios-person-outline:before,.ion-ios-personadd:before,.ion-ios-personadd-outline:before,.ion-ios-photos:before,.ion-ios-photos-outline:before,.ion-ios-pie:before,.ion-ios-pie-outline:before,.ion-ios-pint:before,.ion-ios-pint-outline:before,.ion-ios-play:before,.ion-ios-play-outline:before,.ion-ios-plus:before,.ion-ios-plus-empty:before,.ion-ios-plus-outline:before,.ion-ios-pricetag:before,.ion-ios-pricetag-outline:before,.ion-ios-pricetags:before,.ion-ios-pricetags-outline:before,.ion-ios-printer:before,.ion-ios-printer-outline:before,.ion-ios-pulse:before,.ion-ios-pulse-strong:before,.ion-ios-rainy:before,.ion-ios-rainy-outline:before,.ion-ios-recording:before,.ion-ios-recording-outline:before,.ion-ios-redo:before,.ion-ios-redo-outline:before,.ion-ios-refresh:before,.ion-ios-refresh-empty:before,.ion-ios-refresh-outline:before,.ion-ios-reload:before,.ion-ios-reverse-camera:before,.ion-ios-reverse-camera-outline:before,.ion-ios-rewind:before,.ion-ios-rewind-outline:before,.ion-ios-rose:before,.ion-ios-rose-outline:before,.ion-ios-search:before,.ion-ios-search-strong:before,.ion-ios-settings:before,.ion-ios-settings-strong:before,.ion-ios-shuffle:before,.ion-ios-shuffle-strong:before,.ion-ios-skipbackward:before,.ion-ios-skipbackward-outline:before,.ion-ios-skipforward:before,.ion-ios-skipforward-outline:before,.ion-ios-snowy:before,.ion-ios-speedometer:before,.ion-ios-speedometer-outline:before,.ion-ios-star:before,.ion-ios-star-half:before,.ion-ios-star-outline:before,.ion-ios-stopwatch:before,.ion-ios-stopwatch-outline:before,.ion-ios-sunny:before,.ion-ios-sunny-outline:before,.ion-ios-telephone:before,.ion-ios-telephone-outline:before,.ion-ios-tennisball:before,.ion-ios-tennisball-outline:before,.ion-ios-thunderstorm:before,.ion-ios-thunderstorm-outline:before,.ion-ios-time:before,.ion-ios-time-outline:before,.ion-ios-timer:before,.ion-ios-timer-outline:before,.ion-ios-toggle:before,.ion-ios-toggle-outline:before,.ion-ios-trash:before,.ion-ios-trash-outline:before,.ion-ios-undo:before,.ion-ios-undo-outline:before,.ion-ios-unlocked:before,.ion-ios-unlocked-outline:before,.ion-ios-upload:before,.ion-ios-upload-outline:before,.ion-ios-videocam:before,.ion-ios-videocam-outline:before,.ion-ios-volume-high:before,.ion-ios-volume-low:before,.ion-ios-wineglass:before,.ion-ios-wineglass-outline:before,.ion-ios-world:before,.ion-ios-world-outline:before,.ion-ipad:before,.ion-iphone:before,.ion-ipod:before,.ion-jet:before,.ion-key:before,.ion-knife:before,.ion-laptop:before,.ion-leaf:before,.ion-levels:before,.ion-lightbulb:before,.ion-link:before,.ion-load-a:before,.ion-load-b:before,.ion-load-c:before,.ion-load-d:before,.ion-location:before,.ion-lock-combination:before,.ion-locked:before,.ion-log-in:before,.ion-log-out:before,.ion-loop:before,.ion-magnet:before,.ion-male:before,.ion-man:before,.ion-map:before,.ion-medkit:before,.ion-merge:before,.ion-mic-a:before,.ion-mic-b:before,.ion-mic-c:before,.ion-minus:before,.ion-minus-circled:before,.ion-minus-round:before,.ion-model-s:before,.ion-monitor:before,.ion-more:before,.ion-mouse:before,.ion-music-note:before,.ion-navicon:before,.ion-navicon-round:before,.ion-navigate:before,.ion-network:before,.ion-no-smoking:before,.ion-nuclear:before,.ion-outlet:before,.ion-paintbrush:before,.ion-paintbucket:before,.ion-paper-airplane:before,.ion-paperclip:before,.ion-pause:before,.ion-person:before,.ion-person-add:before,.ion-person-stalker:before,.ion-pie-graph:before,.ion-pin:before,.ion-pinpoint:before,.ion-pizza:before,.ion-plane:before,.ion-planet:before,.ion-play:before,.ion-playstation:before,.ion-plus:before,.ion-plus-circled:before,.ion-plus-round:before,.ion-podium:before,.ion-pound:before,.ion-power:before,.ion-pricetag:before,.ion-pricetags:before,.ion-printer:before,.ion-pull-request:before,.ion-qr-scanner:before,.ion-quote:before,.ion-radio-waves:before,.ion-record:before,.ion-refresh:before,.ion-reply:before,.ion-reply-all:before,.ion-ribbon-a:before,.ion-ribbon-b:before,.ion-sad:before,.ion-sad-outline:before,.ion-scissors:before,.ion-search:before,.ion-settings:before,.ion-share:before,.ion-shuffle:before,.ion-skip-backward:before,.ion-skip-forward:before,.ion-social-android:before,.ion-social-android-outline:before,.ion-social-angular:before,.ion-social-angular-outline:before,.ion-social-apple:before,.ion-social-apple-outline:before,.ion-social-bitcoin:before,.ion-social-bitcoin-outline:before,.ion-social-buffer:before,.ion-social-buffer-outline:before,.ion-social-chrome:before,.ion-social-chrome-outline:before,.ion-social-codepen:before,.ion-social-codepen-outline:before,.ion-social-css3:before,.ion-social-css3-outline:before,.ion-social-designernews:before,.ion-social-designernews-outline:before,.ion-social-dribbble:before,.ion-social-dribbble-outline:before,.ion-social-dropbox:before,.ion-social-dropbox-outline:before,.ion-social-euro:before,.ion-social-euro-outline:before,.ion-social-facebook:before,.ion-social-facebook-outline:before,.ion-social-foursquare:before,.ion-social-foursquare-outline:before,.ion-social-freebsd-devil:before,.ion-social-github:before,.ion-social-github-outline:before,.ion-social-google:before,.ion-social-google-outline:before,.ion-social-googleplus:before,.ion-social-googleplus-outline:before,.ion-social-hackernews:before,.ion-social-hackernews-outline:before,.ion-social-html5:before,.ion-social-html5-outline:before,.ion-social-instagram:before,.ion-social-instagram-outline:before,.ion-social-javascript:before,.ion-social-javascript-outline:before,.ion-social-linkedin:before,.ion-social-linkedin-outline:before,.ion-social-markdown:before,.ion-social-nodejs:before,.ion-social-octocat:before,.ion-social-pinterest:before,.ion-social-pinterest-outline:before,.ion-social-python:before,.ion-social-reddit:before,.ion-social-reddit-outline:before,.ion-social-rss:before,.ion-social-rss-outline:before,.ion-social-sass:before,.ion-social-skype:before,.ion-social-skype-outline:before,.ion-social-snapchat:before,.ion-social-snapchat-outline:before,.ion-social-tumblr:before,.ion-social-tumblr-outline:before,.ion-social-tux:before,.ion-social-twitch:before,.ion-social-twitch-outline:before,.ion-social-twitter:before,.ion-social-twitter-outline:before,.ion-social-usd:before,.ion-social-usd-outline:before,.ion-social-vimeo:before,.ion-social-vimeo-outline:before,.ion-social-whatsapp:before,.ion-social-whatsapp-outline:before,.ion-social-windows:before,.ion-social-windows-outline:before,.ion-social-wordpress:before,.ion-social-wordpress-outline:before,.ion-social-yahoo:before,.ion-social-yahoo-outline:before,.ion-social-yen:before,.ion-social-yen-outline:before,.ion-social-youtube:before,.ion-social-youtube-outline:before,.ion-soup-can:before,.ion-soup-can-outline:before,.ion-speakerphone:before,.ion-speedometer:before,.ion-spoon:before,.ion-star:before,.ion-stats-bars:before,.ion-steam:before,.ion-stop:before,.ion-thermometer:before,.ion-thumbsdown:before,.ion-thumbsup:before,.ion-toggle:before,.ion-toggle-filled:before,.ion-transgender:before,.ion-trash-a:before,.ion-trash-b:before,.ion-trophy:before,.ion-tshirt:before,.ion-tshirt-outline:before,.ion-umbrella:before,.ion-university:before,.ion-unlocked:before,.ion-upload:before,.ion-usb:before,.ion-videocamera:before,.ion-volume-high:before,.ion-volume-low:before,.ion-volume-medium:before,.ion-volume-mute:before,.ion-wand:before,.ion-waterdrop:before,.ion-wifi:before,.ion-wineglass:before,.ion-woman:before,.ion-wrench:before,.ion-xbox:before{display:inline-block;font-family:\"Ionicons\";speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;text-rendering:auto;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.ion-alert:before{content:\"\\f101\"}.ion-alert-circled:before{content:\"\\f100\"}.ion-android-add:before{content:\"\\f2c7\"}.ion-android-add-circle:before{content:\"\\f359\"}.ion-android-alarm-clock:before{content:\"\\f35a\"}.ion-android-alert:before{content:\"\\f35b\"}.ion-android-apps:before{content:\"\\f35c\"}.ion-android-archive:before{content:\"\\f2c9\"}.ion-android-arrow-back:before{content:\"\\f2ca\"}.ion-android-arrow-down:before{content:\"\\f35d\"}.ion-android-arrow-dropdown:before{content:\"\\f35f\"}.ion-android-arrow-dropdown-circle:before{content:\"\\f35e\"}.ion-android-arrow-dropleft:before{content:\"\\f361\"}.ion-android-arrow-dropleft-circle:before{content:\"\\f360\"}.ion-android-arrow-dropright:before{content:\"\\f363\"}.ion-android-arrow-dropright-circle:before{content:\"\\f362\"}.ion-android-arrow-dropup:before{content:\"\\f365\"}.ion-android-arrow-dropup-circle:before{content:\"\\f364\"}.ion-android-arrow-forward:before{content:\"\\f30f\"}.ion-android-arrow-up:before{content:\"\\f366\"}.ion-android-attach:before{content:\"\\f367\"}.ion-android-bar:before{content:\"\\f368\"}.ion-android-bicycle:before{content:\"\\f369\"}.ion-android-boat:before{content:\"\\f36a\"}.ion-android-bookmark:before{content:\"\\f36b\"}.ion-android-bulb:before{content:\"\\f36c\"}.ion-android-bus:before{content:\"\\f36d\"}.ion-android-calendar:before{content:\"\\f2d1\"}.ion-android-call:before{content:\"\\f2d2\"}.ion-android-camera:before{content:\"\\f2d3\"}.ion-android-cancel:before{content:\"\\f36e\"}.ion-android-car:before{content:\"\\f36f\"}.ion-android-cart:before{content:\"\\f370\"}.ion-android-chat:before{content:\"\\f2d4\"}.ion-android-checkbox:before{content:\"\\f374\"}.ion-android-checkbox-blank:before{content:\"\\f371\"}.ion-android-checkbox-outline:before{content:\"\\f373\"}.ion-android-checkbox-outline-blank:before{content:\"\\f372\"}.ion-android-checkmark-circle:before{content:\"\\f375\"}.ion-android-clipboard:before{content:\"\\f376\"}.ion-android-close:before{content:\"\\f2d7\"}.ion-android-cloud:before{content:\"\\f37a\"}.ion-android-cloud-circle:before{content:\"\\f377\"}.ion-android-cloud-done:before{content:\"\\f378\"}.ion-android-cloud-outline:before{content:\"\\f379\"}.ion-android-color-palette:before{content:\"\\f37b\"}.ion-android-compass:before{content:\"\\f37c\"}.ion-android-contact:before{content:\"\\f2d8\"}.ion-android-contacts:before{content:\"\\f2d9\"}.ion-android-contract:before{content:\"\\f37d\"}.ion-android-create:before{content:\"\\f37e\"}.ion-android-delete:before{content:\"\\f37f\"}.ion-android-desktop:before{content:\"\\f380\"}.ion-android-document:before{content:\"\\f381\"}.ion-android-done:before{content:\"\\f383\"}.ion-android-done-all:before{content:\"\\f382\"}.ion-android-download:before{content:\"\\f2dd\"}.ion-android-drafts:before{content:\"\\f384\"}.ion-android-exit:before{content:\"\\f385\"}.ion-android-expand:before{content:\"\\f386\"}.ion-android-favorite:before{content:\"\\f388\"}.ion-android-favorite-outline:before{content:\"\\f387\"}.ion-android-film:before{content:\"\\f389\"}.ion-android-folder:before{content:\"\\f2e0\"}.ion-android-folder-open:before{content:\"\\f38a\"}.ion-android-funnel:before{content:\"\\f38b\"}.ion-android-globe:before{content:\"\\f38c\"}.ion-android-hand:before{content:\"\\f2e3\"}.ion-android-hangout:before{content:\"\\f38d\"}.ion-android-happy:before{content:\"\\f38e\"}.ion-android-home:before{content:\"\\f38f\"}.ion-android-image:before{content:\"\\f2e4\"}.ion-android-laptop:before{content:\"\\f390\"}.ion-android-list:before{content:\"\\f391\"}.ion-android-locate:before{content:\"\\f2e9\"}.ion-android-lock:before{content:\"\\f392\"}.ion-android-mail:before{content:\"\\f2eb\"}.ion-android-map:before{content:\"\\f393\"}.ion-android-menu:before{content:\"\\f394\"}.ion-android-microphone:before{content:\"\\f2ec\"}.ion-android-microphone-off:before{content:\"\\f395\"}.ion-android-more-horizontal:before{content:\"\\f396\"}.ion-android-more-vertical:before{content:\"\\f397\"}.ion-android-navigate:before{content:\"\\f398\"}.ion-android-notifications:before{content:\"\\f39b\"}.ion-android-notifications-none:before{content:\"\\f399\"}.ion-android-notifications-off:before{content:\"\\f39a\"}.ion-android-open:before{content:\"\\f39c\"}.ion-android-options:before{content:\"\\f39d\"}.ion-android-people:before{content:\"\\f39e\"}.ion-android-person:before{content:\"\\f3a0\"}.ion-android-person-add:before{content:\"\\f39f\"}.ion-android-phone-landscape:before{content:\"\\f3a1\"}.ion-android-phone-portrait:before{content:\"\\f3a2\"}.ion-android-pin:before{content:\"\\f3a3\"}.ion-android-plane:before{content:\"\\f3a4\"}.ion-android-playstore:before{content:\"\\f2f0\"}.ion-android-print:before{content:\"\\f3a5\"}.ion-android-radio-button-off:before{content:\"\\f3a6\"}.ion-android-radio-button-on:before{content:\"\\f3a7\"}.ion-android-refresh:before{content:\"\\f3a8\"}.ion-android-remove:before{content:\"\\f2f4\"}.ion-android-remove-circle:before{content:\"\\f3a9\"}.ion-android-restaurant:before{content:\"\\f3aa\"}.ion-android-sad:before{content:\"\\f3ab\"}.ion-android-search:before{content:\"\\f2f5\"}.ion-android-send:before{content:\"\\f2f6\"}.ion-android-settings:before{content:\"\\f2f7\"}.ion-android-share:before{content:\"\\f2f8\"}.ion-android-share-alt:before{content:\"\\f3ac\"}.ion-android-star:before{content:\"\\f2fc\"}.ion-android-star-half:before{content:\"\\f3ad\"}.ion-android-star-outline:before{content:\"\\f3ae\"}.ion-android-stopwatch:before{content:\"\\f2fd\"}.ion-android-subway:before{content:\"\\f3af\"}.ion-android-sunny:before{content:\"\\f3b0\"}.ion-android-sync:before{content:\"\\f3b1\"}.ion-android-textsms:before{content:\"\\f3b2\"}.ion-android-time:before{content:\"\\f3b3\"}.ion-android-train:before{content:\"\\f3b4\"}.ion-android-unlock:before{content:\"\\f3b5\"}.ion-android-upload:before{content:\"\\f3b6\"}.ion-android-volume-down:before{content:\"\\f3b7\"}.ion-android-volume-mute:before{content:\"\\f3b8\"}.ion-android-volume-off:before{content:\"\\f3b9\"}.ion-android-volume-up:before{content:\"\\f3ba\"}.ion-android-walk:before{content:\"\\f3bb\"}.ion-android-warning:before{content:\"\\f3bc\"}.ion-android-watch:before{content:\"\\f3bd\"}.ion-android-wifi:before{content:\"\\f305\"}.ion-aperture:before{content:\"\\f313\"}.ion-archive:before{content:\"\\f102\"}.ion-arrow-down-a:before{content:\"\\f103\"}.ion-arrow-down-b:before{content:\"\\f104\"}.ion-arrow-down-c:before{content:\"\\f105\"}.ion-arrow-expand:before{content:\"\\f25e\"}.ion-arrow-graph-down-left:before{content:\"\\f25f\"}.ion-arrow-graph-down-right:before{content:\"\\f260\"}.ion-arrow-graph-up-left:before{content:\"\\f261\"}.ion-arrow-graph-up-right:before{content:\"\\f262\"}.ion-arrow-left-a:before{content:\"\\f106\"}.ion-arrow-left-b:before{content:\"\\f107\"}.ion-arrow-left-c:before{content:\"\\f108\"}.ion-arrow-move:before{content:\"\\f263\"}.ion-arrow-resize:before{content:\"\\f264\"}.ion-arrow-return-left:before{content:\"\\f265\"}.ion-arrow-return-right:before{content:\"\\f266\"}.ion-arrow-right-a:before{content:\"\\f109\"}.ion-arrow-right-b:before{content:\"\\f10a\"}.ion-arrow-right-c:before{content:\"\\f10b\"}.ion-arrow-shrink:before{content:\"\\f267\"}.ion-arrow-swap:before{content:\"\\f268\"}.ion-arrow-up-a:before{content:\"\\f10c\"}.ion-arrow-up-b:before{content:\"\\f10d\"}.ion-arrow-up-c:before{content:\"\\f10e\"}.ion-asterisk:before{content:\"\\f314\"}.ion-at:before{content:\"\\f10f\"}.ion-backspace:before{content:\"\\f3bf\"}.ion-backspace-outline:before{content:\"\\f3be\"}.ion-bag:before{content:\"\\f110\"}.ion-battery-charging:before{content:\"\\f111\"}.ion-battery-empty:before{content:\"\\f112\"}.ion-battery-full:before{content:\"\\f113\"}.ion-battery-half:before{content:\"\\f114\"}.ion-battery-low:before{content:\"\\f115\"}.ion-beaker:before{content:\"\\f269\"}.ion-beer:before{content:\"\\f26a\"}.ion-bluetooth:before{content:\"\\f116\"}.ion-bonfire:before{content:\"\\f315\"}.ion-bookmark:before{content:\"\\f26b\"}.ion-bowtie:before{content:\"\\f3c0\"}.ion-briefcase:before{content:\"\\f26c\"}.ion-bug:before{content:\"\\f2be\"}.ion-calculator:before{content:\"\\f26d\"}.ion-calendar:before{content:\"\\f117\"}.ion-camera:before{content:\"\\f118\"}.ion-card:before{content:\"\\f119\"}.ion-cash:before{content:\"\\f316\"}.ion-chatbox:before{content:\"\\f11b\"}.ion-chatbox-working:before{content:\"\\f11a\"}.ion-chatboxes:before{content:\"\\f11c\"}.ion-chatbubble:before{content:\"\\f11e\"}.ion-chatbubble-working:before{content:\"\\f11d\"}.ion-chatbubbles:before{content:\"\\f11f\"}.ion-checkmark:before{content:\"\\f122\"}.ion-checkmark-circled:before{content:\"\\f120\"}.ion-checkmark-round:before{content:\"\\f121\"}.ion-chevron-down:before{content:\"\\f123\"}.ion-chevron-left:before{content:\"\\f124\"}.ion-chevron-right:before{content:\"\\f125\"}.ion-chevron-up:before{content:\"\\f126\"}.ion-clipboard:before{content:\"\\f127\"}.ion-clock:before{content:\"\\f26e\"}.ion-close:before{content:\"\\f12a\"}.ion-close-circled:before{content:\"\\f128\"}.ion-close-round:before{content:\"\\f129\"}.ion-closed-captioning:before{content:\"\\f317\"}.ion-cloud:before{content:\"\\f12b\"}.ion-code:before{content:\"\\f271\"}.ion-code-download:before{content:\"\\f26f\"}.ion-code-working:before{content:\"\\f270\"}.ion-coffee:before{content:\"\\f272\"}.ion-compass:before{content:\"\\f273\"}.ion-compose:before{content:\"\\f12c\"}.ion-connection-bars:before{content:\"\\f274\"}.ion-contrast:before{content:\"\\f275\"}.ion-crop:before{content:\"\\f3c1\"}.ion-cube:before{content:\"\\f318\"}.ion-disc:before{content:\"\\f12d\"}.ion-document:before{content:\"\\f12f\"}.ion-document-text:before{content:\"\\f12e\"}.ion-drag:before{content:\"\\f130\"}.ion-earth:before{content:\"\\f276\"}.ion-easel:before{content:\"\\f3c2\"}.ion-edit:before{content:\"\\f2bf\"}.ion-egg:before{content:\"\\f277\"}.ion-eject:before{content:\"\\f131\"}.ion-email:before{content:\"\\f132\"}.ion-email-unread:before{content:\"\\f3c3\"}.ion-erlenmeyer-flask:before{content:\"\\f3c5\"}.ion-erlenmeyer-flask-bubbles:before{content:\"\\f3c4\"}.ion-eye:before{content:\"\\f133\"}.ion-eye-disabled:before{content:\"\\f306\"}.ion-female:before{content:\"\\f278\"}.ion-filing:before{content:\"\\f134\"}.ion-film-marker:before{content:\"\\f135\"}.ion-fireball:before{content:\"\\f319\"}.ion-flag:before{content:\"\\f279\"}.ion-flame:before{content:\"\\f31a\"}.ion-flash:before{content:\"\\f137\"}.ion-flash-off:before{content:\"\\f136\"}.ion-folder:before{content:\"\\f139\"}.ion-fork:before{content:\"\\f27a\"}.ion-fork-repo:before{content:\"\\f2c0\"}.ion-forward:before{content:\"\\f13a\"}.ion-funnel:before{content:\"\\f31b\"}.ion-gear-a:before{content:\"\\f13d\"}.ion-gear-b:before{content:\"\\f13e\"}.ion-grid:before{content:\"\\f13f\"}.ion-hammer:before{content:\"\\f27b\"}.ion-happy:before{content:\"\\f31c\"}.ion-happy-outline:before{content:\"\\f3c6\"}.ion-headphone:before{content:\"\\f140\"}.ion-heart:before{content:\"\\f141\"}.ion-heart-broken:before{content:\"\\f31d\"}.ion-help:before{content:\"\\f143\"}.ion-help-buoy:before{content:\"\\f27c\"}.ion-help-circled:before{content:\"\\f142\"}.ion-home:before{content:\"\\f144\"}.ion-icecream:before{content:\"\\f27d\"}.ion-image:before{content:\"\\f147\"}.ion-images:before{content:\"\\f148\"}.ion-information:before{content:\"\\f14a\"}.ion-information-circled:before{content:\"\\f149\"}.ion-ionic:before{content:\"\\f14b\"}.ion-ios-alarm:before{content:\"\\f3c8\"}.ion-ios-alarm-outline:before{content:\"\\f3c7\"}.ion-ios-albums:before{content:\"\\f3ca\"}.ion-ios-albums-outline:before{content:\"\\f3c9\"}.ion-ios-americanfootball:before{content:\"\\f3cc\"}.ion-ios-americanfootball-outline:before{content:\"\\f3cb\"}.ion-ios-analytics:before{content:\"\\f3ce\"}.ion-ios-analytics-outline:before{content:\"\\f3cd\"}.ion-ios-arrow-back:before{content:\"\\f3cf\"}.ion-ios-arrow-down:before{content:\"\\f3d0\"}.ion-ios-arrow-forward:before{content:\"\\f3d1\"}.ion-ios-arrow-left:before{content:\"\\f3d2\"}.ion-ios-arrow-right:before{content:\"\\f3d3\"}.ion-ios-arrow-thin-down:before{content:\"\\f3d4\"}.ion-ios-arrow-thin-left:before{content:\"\\f3d5\"}.ion-ios-arrow-thin-right:before{content:\"\\f3d6\"}.ion-ios-arrow-thin-up:before{content:\"\\f3d7\"}.ion-ios-arrow-up:before{content:\"\\f3d8\"}.ion-ios-at:before{content:\"\\f3da\"}.ion-ios-at-outline:before{content:\"\\f3d9\"}.ion-ios-barcode:before{content:\"\\f3dc\"}.ion-ios-barcode-outline:before{content:\"\\f3db\"}.ion-ios-baseball:before{content:\"\\f3de\"}.ion-ios-baseball-outline:before{content:\"\\f3dd\"}.ion-ios-basketball:before{content:\"\\f3e0\"}.ion-ios-basketball-outline:before{content:\"\\f3df\"}.ion-ios-bell:before{content:\"\\f3e2\"}.ion-ios-bell-outline:before{content:\"\\f3e1\"}.ion-ios-body:before{content:\"\\f3e4\"}.ion-ios-body-outline:before{content:\"\\f3e3\"}.ion-ios-bolt:before{content:\"\\f3e6\"}.ion-ios-bolt-outline:before{content:\"\\f3e5\"}.ion-ios-book:before{content:\"\\f3e8\"}.ion-ios-book-outline:before{content:\"\\f3e7\"}.ion-ios-bookmarks:before{content:\"\\f3ea\"}.ion-ios-bookmarks-outline:before{content:\"\\f3e9\"}.ion-ios-box:before{content:\"\\f3ec\"}.ion-ios-box-outline:before{content:\"\\f3eb\"}.ion-ios-briefcase:before{content:\"\\f3ee\"}.ion-ios-briefcase-outline:before{content:\"\\f3ed\"}.ion-ios-browsers:before{content:\"\\f3f0\"}.ion-ios-browsers-outline:before{content:\"\\f3ef\"}.ion-ios-calculator:before{content:\"\\f3f2\"}.ion-ios-calculator-outline:before{content:\"\\f3f1\"}.ion-ios-calendar:before{content:\"\\f3f4\"}.ion-ios-calendar-outline:before{content:\"\\f3f3\"}.ion-ios-camera:before{content:\"\\f3f6\"}.ion-ios-camera-outline:before{content:\"\\f3f5\"}.ion-ios-cart:before{content:\"\\f3f8\"}.ion-ios-cart-outline:before{content:\"\\f3f7\"}.ion-ios-chatboxes:before{content:\"\\f3fa\"}.ion-ios-chatboxes-outline:before{content:\"\\f3f9\"}.ion-ios-chatbubble:before{content:\"\\f3fc\"}.ion-ios-chatbubble-outline:before{content:\"\\f3fb\"}.ion-ios-checkmark:before{content:\"\\f3ff\"}.ion-ios-checkmark-empty:before{content:\"\\f3fd\"}.ion-ios-checkmark-outline:before{content:\"\\f3fe\"}.ion-ios-circle-filled:before{content:\"\\f400\"}.ion-ios-circle-outline:before{content:\"\\f401\"}.ion-ios-clock:before{content:\"\\f403\"}.ion-ios-clock-outline:before{content:\"\\f402\"}.ion-ios-close:before{content:\"\\f406\"}.ion-ios-close-empty:before{content:\"\\f404\"}.ion-ios-close-outline:before{content:\"\\f405\"}.ion-ios-cloud:before{content:\"\\f40c\"}.ion-ios-cloud-download:before{content:\"\\f408\"}.ion-ios-cloud-download-outline:before{content:\"\\f407\"}.ion-ios-cloud-outline:before{content:\"\\f409\"}.ion-ios-cloud-upload:before{content:\"\\f40b\"}.ion-ios-cloud-upload-outline:before{content:\"\\f40a\"}.ion-ios-cloudy:before{content:\"\\f410\"}.ion-ios-cloudy-night:before{content:\"\\f40e\"}.ion-ios-cloudy-night-outline:before{content:\"\\f40d\"}.ion-ios-cloudy-outline:before{content:\"\\f40f\"}.ion-ios-cog:before{content:\"\\f412\"}.ion-ios-cog-outline:before{content:\"\\f411\"}.ion-ios-color-filter:before{content:\"\\f414\"}.ion-ios-color-filter-outline:before{content:\"\\f413\"}.ion-ios-color-wand:before{content:\"\\f416\"}.ion-ios-color-wand-outline:before{content:\"\\f415\"}.ion-ios-compose:before{content:\"\\f418\"}.ion-ios-compose-outline:before{content:\"\\f417\"}.ion-ios-contact:before{content:\"\\f41a\"}.ion-ios-contact-outline:before{content:\"\\f419\"}.ion-ios-copy:before{content:\"\\f41c\"}.ion-ios-copy-outline:before{content:\"\\f41b\"}.ion-ios-crop:before{content:\"\\f41e\"}.ion-ios-crop-strong:before{content:\"\\f41d\"}.ion-ios-download:before{content:\"\\f420\"}.ion-ios-download-outline:before{content:\"\\f41f\"}.ion-ios-drag:before{content:\"\\f421\"}.ion-ios-email:before{content:\"\\f423\"}.ion-ios-email-outline:before{content:\"\\f422\"}.ion-ios-eye:before{content:\"\\f425\"}.ion-ios-eye-outline:before{content:\"\\f424\"}.ion-ios-fastforward:before{content:\"\\f427\"}.ion-ios-fastforward-outline:before{content:\"\\f426\"}.ion-ios-filing:before{content:\"\\f429\"}.ion-ios-filing-outline:before{content:\"\\f428\"}.ion-ios-film:before{content:\"\\f42b\"}.ion-ios-film-outline:before{content:\"\\f42a\"}.ion-ios-flag:before{content:\"\\f42d\"}.ion-ios-flag-outline:before{content:\"\\f42c\"}.ion-ios-flame:before{content:\"\\f42f\"}.ion-ios-flame-outline:before{content:\"\\f42e\"}.ion-ios-flask:before{content:\"\\f431\"}.ion-ios-flask-outline:before{content:\"\\f430\"}.ion-ios-flower:before{content:\"\\f433\"}.ion-ios-flower-outline:before{content:\"\\f432\"}.ion-ios-folder:before{content:\"\\f435\"}.ion-ios-folder-outline:before{content:\"\\f434\"}.ion-ios-football:before{content:\"\\f437\"}.ion-ios-football-outline:before{content:\"\\f436\"}.ion-ios-game-controller-a:before{content:\"\\f439\"}.ion-ios-game-controller-a-outline:before{content:\"\\f438\"}.ion-ios-game-controller-b:before{content:\"\\f43b\"}.ion-ios-game-controller-b-outline:before{content:\"\\f43a\"}.ion-ios-gear:before{content:\"\\f43d\"}.ion-ios-gear-outline:before{content:\"\\f43c\"}.ion-ios-glasses:before{content:\"\\f43f\"}.ion-ios-glasses-outline:before{content:\"\\f43e\"}.ion-ios-grid-view:before{content:\"\\f441\"}.ion-ios-grid-view-outline:before{content:\"\\f440\"}.ion-ios-heart:before{content:\"\\f443\"}.ion-ios-heart-outline:before{content:\"\\f442\"}.ion-ios-help:before{content:\"\\f446\"}.ion-ios-help-empty:before{content:\"\\f444\"}.ion-ios-help-outline:before{content:\"\\f445\"}.ion-ios-home:before{content:\"\\f448\"}.ion-ios-home-outline:before{content:\"\\f447\"}.ion-ios-infinite:before{content:\"\\f44a\"}.ion-ios-infinite-outline:before{content:\"\\f449\"}.ion-ios-information:before{content:\"\\f44d\"}.ion-ios-information-empty:before{content:\"\\f44b\"}.ion-ios-information-outline:before{content:\"\\f44c\"}.ion-ios-ionic-outline:before{content:\"\\f44e\"}.ion-ios-keypad:before{content:\"\\f450\"}.ion-ios-keypad-outline:before{content:\"\\f44f\"}.ion-ios-lightbulb:before{content:\"\\f452\"}.ion-ios-lightbulb-outline:before{content:\"\\f451\"}.ion-ios-list:before{content:\"\\f454\"}.ion-ios-list-outline:before{content:\"\\f453\"}.ion-ios-location:before{content:\"\\f456\"}.ion-ios-location-outline:before{content:\"\\f455\"}.ion-ios-locked:before{content:\"\\f458\"}.ion-ios-locked-outline:before{content:\"\\f457\"}.ion-ios-loop:before{content:\"\\f45a\"}.ion-ios-loop-strong:before{content:\"\\f459\"}.ion-ios-medical:before{content:\"\\f45c\"}.ion-ios-medical-outline:before{content:\"\\f45b\"}.ion-ios-medkit:before{content:\"\\f45e\"}.ion-ios-medkit-outline:before{content:\"\\f45d\"}.ion-ios-mic:before{content:\"\\f461\"}.ion-ios-mic-off:before{content:\"\\f45f\"}.ion-ios-mic-outline:before{content:\"\\f460\"}.ion-ios-minus:before{content:\"\\f464\"}.ion-ios-minus-empty:before{content:\"\\f462\"}.ion-ios-minus-outline:before{content:\"\\f463\"}.ion-ios-monitor:before{content:\"\\f466\"}.ion-ios-monitor-outline:before{content:\"\\f465\"}.ion-ios-moon:before{content:\"\\f468\"}.ion-ios-moon-outline:before{content:\"\\f467\"}.ion-ios-more:before{content:\"\\f46a\"}.ion-ios-more-outline:before{content:\"\\f469\"}.ion-ios-musical-note:before{content:\"\\f46b\"}.ion-ios-musical-notes:before{content:\"\\f46c\"}.ion-ios-navigate:before{content:\"\\f46e\"}.ion-ios-navigate-outline:before{content:\"\\f46d\"}.ion-ios-nutrition:before{content:\"\\f470\"}.ion-ios-nutrition-outline:before{content:\"\\f46f\"}.ion-ios-paper:before{content:\"\\f472\"}.ion-ios-paper-outline:before{content:\"\\f471\"}.ion-ios-paperplane:before{content:\"\\f474\"}.ion-ios-paperplane-outline:before{content:\"\\f473\"}.ion-ios-partlysunny:before{content:\"\\f476\"}.ion-ios-partlysunny-outline:before{content:\"\\f475\"}.ion-ios-pause:before{content:\"\\f478\"}.ion-ios-pause-outline:before{content:\"\\f477\"}.ion-ios-paw:before{content:\"\\f47a\"}.ion-ios-paw-outline:before{content:\"\\f479\"}.ion-ios-people:before{content:\"\\f47c\"}.ion-ios-people-outline:before{content:\"\\f47b\"}.ion-ios-person:before{content:\"\\f47e\"}.ion-ios-person-outline:before{content:\"\\f47d\"}.ion-ios-personadd:before{content:\"\\f480\"}.ion-ios-personadd-outline:before{content:\"\\f47f\"}.ion-ios-photos:before{content:\"\\f482\"}.ion-ios-photos-outline:before{content:\"\\f481\"}.ion-ios-pie:before{content:\"\\f484\"}.ion-ios-pie-outline:before{content:\"\\f483\"}.ion-ios-pint:before{content:\"\\f486\"}.ion-ios-pint-outline:before{content:\"\\f485\"}.ion-ios-play:before{content:\"\\f488\"}.ion-ios-play-outline:before{content:\"\\f487\"}.ion-ios-plus:before{content:\"\\f48b\"}.ion-ios-plus-empty:before{content:\"\\f489\"}.ion-ios-plus-outline:before{content:\"\\f48a\"}.ion-ios-pricetag:before{content:\"\\f48d\"}.ion-ios-pricetag-outline:before{content:\"\\f48c\"}.ion-ios-pricetags:before{content:\"\\f48f\"}.ion-ios-pricetags-outline:before{content:\"\\f48e\"}.ion-ios-printer:before{content:\"\\f491\"}.ion-ios-printer-outline:before{content:\"\\f490\"}.ion-ios-pulse:before{content:\"\\f493\"}.ion-ios-pulse-strong:before{content:\"\\f492\"}.ion-ios-rainy:before{content:\"\\f495\"}.ion-ios-rainy-outline:before{content:\"\\f494\"}.ion-ios-recording:before{content:\"\\f497\"}.ion-ios-recording-outline:before{content:\"\\f496\"}.ion-ios-redo:before{content:\"\\f499\"}.ion-ios-redo-outline:before{content:\"\\f498\"}.ion-ios-refresh:before{content:\"\\f49c\"}.ion-ios-refresh-empty:before{content:\"\\f49a\"}.ion-ios-refresh-outline:before{content:\"\\f49b\"}.ion-ios-reload:before{content:\"\\f49d\"}.ion-ios-reverse-camera:before{content:\"\\f49f\"}.ion-ios-reverse-camera-outline:before{content:\"\\f49e\"}.ion-ios-rewind:before{content:\"\\f4a1\"}.ion-ios-rewind-outline:before{content:\"\\f4a0\"}.ion-ios-rose:before{content:\"\\f4a3\"}.ion-ios-rose-outline:before{content:\"\\f4a2\"}.ion-ios-search:before{content:\"\\f4a5\"}.ion-ios-search-strong:before{content:\"\\f4a4\"}.ion-ios-settings:before{content:\"\\f4a7\"}.ion-ios-settings-strong:before{content:\"\\f4a6\"}.ion-ios-shuffle:before{content:\"\\f4a9\"}.ion-ios-shuffle-strong:before{content:\"\\f4a8\"}.ion-ios-skipbackward:before{content:\"\\f4ab\"}.ion-ios-skipbackward-outline:before{content:\"\\f4aa\"}.ion-ios-skipforward:before{content:\"\\f4ad\"}.ion-ios-skipforward-outline:before{content:\"\\f4ac\"}.ion-ios-snowy:before{content:\"\\f4ae\"}.ion-ios-speedometer:before{content:\"\\f4b0\"}.ion-ios-speedometer-outline:before{content:\"\\f4af\"}.ion-ios-star:before{content:\"\\f4b3\"}.ion-ios-star-half:before{content:\"\\f4b1\"}.ion-ios-star-outline:before{content:\"\\f4b2\"}.ion-ios-stopwatch:before{content:\"\\f4b5\"}.ion-ios-stopwatch-outline:before{content:\"\\f4b4\"}.ion-ios-sunny:before{content:\"\\f4b7\"}.ion-ios-sunny-outline:before{content:\"\\f4b6\"}.ion-ios-telephone:before{content:\"\\f4b9\"}.ion-ios-telephone-outline:before{content:\"\\f4b8\"}.ion-ios-tennisball:before{content:\"\\f4bb\"}.ion-ios-tennisball-outline:before{content:\"\\f4ba\"}.ion-ios-thunderstorm:before{content:\"\\f4bd\"}.ion-ios-thunderstorm-outline:before{content:\"\\f4bc\"}.ion-ios-time:before{content:\"\\f4bf\"}.ion-ios-time-outline:before{content:\"\\f4be\"}.ion-ios-timer:before{content:\"\\f4c1\"}.ion-ios-timer-outline:before{content:\"\\f4c0\"}.ion-ios-toggle:before{content:\"\\f4c3\"}.ion-ios-toggle-outline:before{content:\"\\f4c2\"}.ion-ios-trash:before{content:\"\\f4c5\"}.ion-ios-trash-outline:before{content:\"\\f4c4\"}.ion-ios-undo:before{content:\"\\f4c7\"}.ion-ios-undo-outline:before{content:\"\\f4c6\"}.ion-ios-unlocked:before{content:\"\\f4c9\"}.ion-ios-unlocked-outline:before{content:\"\\f4c8\"}.ion-ios-upload:before{content:\"\\f4cb\"}.ion-ios-upload-outline:before{content:\"\\f4ca\"}.ion-ios-videocam:before{content:\"\\f4cd\"}.ion-ios-videocam-outline:before{content:\"\\f4cc\"}.ion-ios-volume-high:before{content:\"\\f4ce\"}.ion-ios-volume-low:before{content:\"\\f4cf\"}.ion-ios-wineglass:before{content:\"\\f4d1\"}.ion-ios-wineglass-outline:before{content:\"\\f4d0\"}.ion-ios-world:before{content:\"\\f4d3\"}.ion-ios-world-outline:before{content:\"\\f4d2\"}.ion-ipad:before{content:\"\\f1f9\"}.ion-iphone:before{content:\"\\f1fa\"}.ion-ipod:before{content:\"\\f1fb\"}.ion-jet:before{content:\"\\f295\"}.ion-key:before{content:\"\\f296\"}.ion-knife:before{content:\"\\f297\"}.ion-laptop:before{content:\"\\f1fc\"}.ion-leaf:before{content:\"\\f1fd\"}.ion-levels:before{content:\"\\f298\"}.ion-lightbulb:before{content:\"\\f299\"}.ion-link:before{content:\"\\f1fe\"}.ion-load-a:before{content:\"\\f29a\"}.ion-load-b:before{content:\"\\f29b\"}.ion-load-c:before{content:\"\\f29c\"}.ion-load-d:before{content:\"\\f29d\"}.ion-location:before{content:\"\\f1ff\"}.ion-lock-combination:before{content:\"\\f4d4\"}.ion-locked:before{content:\"\\f200\"}.ion-log-in:before{content:\"\\f29e\"}.ion-log-out:before{content:\"\\f29f\"}.ion-loop:before{content:\"\\f201\"}.ion-magnet:before{content:\"\\f2a0\"}.ion-male:before{content:\"\\f2a1\"}.ion-man:before{content:\"\\f202\"}.ion-map:before{content:\"\\f203\"}.ion-medkit:before{content:\"\\f2a2\"}.ion-merge:before{content:\"\\f33f\"}.ion-mic-a:before{content:\"\\f204\"}.ion-mic-b:before{content:\"\\f205\"}.ion-mic-c:before{content:\"\\f206\"}.ion-minus:before{content:\"\\f209\"}.ion-minus-circled:before{content:\"\\f207\"}.ion-minus-round:before{content:\"\\f208\"}.ion-model-s:before{content:\"\\f2c1\"}.ion-monitor:before{content:\"\\f20a\"}.ion-more:before{content:\"\\f20b\"}.ion-mouse:before{content:\"\\f340\"}.ion-music-note:before{content:\"\\f20c\"}.ion-navicon:before{content:\"\\f20e\"}.ion-navicon-round:before{content:\"\\f20d\"}.ion-navigate:before{content:\"\\f2a3\"}.ion-network:before{content:\"\\f341\"}.ion-no-smoking:before{content:\"\\f2c2\"}.ion-nuclear:before{content:\"\\f2a4\"}.ion-outlet:before{content:\"\\f342\"}.ion-paintbrush:before{content:\"\\f4d5\"}.ion-paintbucket:before{content:\"\\f4d6\"}.ion-paper-airplane:before{content:\"\\f2c3\"}.ion-paperclip:before{content:\"\\f20f\"}.ion-pause:before{content:\"\\f210\"}.ion-person:before{content:\"\\f213\"}.ion-person-add:before{content:\"\\f211\"}.ion-person-stalker:before{content:\"\\f212\"}.ion-pie-graph:before{content:\"\\f2a5\"}.ion-pin:before{content:\"\\f2a6\"}.ion-pinpoint:before{content:\"\\f2a7\"}.ion-pizza:before{content:\"\\f2a8\"}.ion-plane:before{content:\"\\f214\"}.ion-planet:before{content:\"\\f343\"}.ion-play:before{content:\"\\f215\"}.ion-playstation:before{content:\"\\f30a\"}.ion-plus:before{content:\"\\f218\"}.ion-plus-circled:before{content:\"\\f216\"}.ion-plus-round:before{content:\"\\f217\"}.ion-podium:before{content:\"\\f344\"}.ion-pound:before{content:\"\\f219\"}.ion-power:before{content:\"\\f2a9\"}.ion-pricetag:before{content:\"\\f2aa\"}.ion-pricetags:before{content:\"\\f2ab\"}.ion-printer:before{content:\"\\f21a\"}.ion-pull-request:before{content:\"\\f345\"}.ion-qr-scanner:before{content:\"\\f346\"}.ion-quote:before{content:\"\\f347\"}.ion-radio-waves:before{content:\"\\f2ac\"}.ion-record:before{content:\"\\f21b\"}.ion-refresh:before{content:\"\\f21c\"}.ion-reply:before{content:\"\\f21e\"}.ion-reply-all:before{content:\"\\f21d\"}.ion-ribbon-a:before{content:\"\\f348\"}.ion-ribbon-b:before{content:\"\\f349\"}.ion-sad:before{content:\"\\f34a\"}.ion-sad-outline:before{content:\"\\f4d7\"}.ion-scissors:before{content:\"\\f34b\"}.ion-search:before{content:\"\\f21f\"}.ion-settings:before{content:\"\\f2ad\"}.ion-share:before{content:\"\\f220\"}.ion-shuffle:before{content:\"\\f221\"}.ion-skip-backward:before{content:\"\\f222\"}.ion-skip-forward:before{content:\"\\f223\"}.ion-social-android:before{content:\"\\f225\"}.ion-social-android-outline:before{content:\"\\f224\"}.ion-social-angular:before{content:\"\\f4d9\"}.ion-social-angular-outline:before{content:\"\\f4d8\"}.ion-social-apple:before{content:\"\\f227\"}.ion-social-apple-outline:before{content:\"\\f226\"}.ion-social-bitcoin:before{content:\"\\f2af\"}.ion-social-bitcoin-outline:before{content:\"\\f2ae\"}.ion-social-buffer:before{content:\"\\f229\"}.ion-social-buffer-outline:before{content:\"\\f228\"}.ion-social-chrome:before{content:\"\\f4db\"}.ion-social-chrome-outline:before{content:\"\\f4da\"}.ion-social-codepen:before{content:\"\\f4dd\"}.ion-social-codepen-outline:before{content:\"\\f4dc\"}.ion-social-css3:before{content:\"\\f4df\"}.ion-social-css3-outline:before{content:\"\\f4de\"}.ion-social-designernews:before{content:\"\\f22b\"}.ion-social-designernews-outline:before{content:\"\\f22a\"}.ion-social-dribbble:before{content:\"\\f22d\"}.ion-social-dribbble-outline:before{content:\"\\f22c\"}.ion-social-dropbox:before{content:\"\\f22f\"}.ion-social-dropbox-outline:before{content:\"\\f22e\"}.ion-social-euro:before{content:\"\\f4e1\"}.ion-social-euro-outline:before{content:\"\\f4e0\"}.ion-social-facebook:before{content:\"\\f231\"}.ion-social-facebook-outline:before{content:\"\\f230\"}.ion-social-foursquare:before{content:\"\\f34d\"}.ion-social-foursquare-outline:before{content:\"\\f34c\"}.ion-social-freebsd-devil:before{content:\"\\f2c4\"}.ion-social-github:before{content:\"\\f233\"}.ion-social-github-outline:before{content:\"\\f232\"}.ion-social-google:before{content:\"\\f34f\"}.ion-social-google-outline:before{content:\"\\f34e\"}.ion-social-googleplus:before{content:\"\\f235\"}.ion-social-googleplus-outline:before{content:\"\\f234\"}.ion-social-hackernews:before{content:\"\\f237\"}.ion-social-hackernews-outline:before{content:\"\\f236\"}.ion-social-html5:before{content:\"\\f4e3\"}.ion-social-html5-outline:before{content:\"\\f4e2\"}.ion-social-instagram:before{content:\"\\f351\"}.ion-social-instagram-outline:before{content:\"\\f350\"}.ion-social-javascript:before{content:\"\\f4e5\"}.ion-social-javascript-outline:before{content:\"\\f4e4\"}.ion-social-linkedin:before{content:\"\\f239\"}.ion-social-linkedin-outline:before{content:\"\\f238\"}.ion-social-markdown:before{content:\"\\f4e6\"}.ion-social-nodejs:before{content:\"\\f4e7\"}.ion-social-octocat:before{content:\"\\f4e8\"}.ion-social-pinterest:before{content:\"\\f2b1\"}.ion-social-pinterest-outline:before{content:\"\\f2b0\"}.ion-social-python:before{content:\"\\f4e9\"}.ion-social-reddit:before{content:\"\\f23b\"}.ion-social-reddit-outline:before{content:\"\\f23a\"}.ion-social-rss:before{content:\"\\f23d\"}.ion-social-rss-outline:before{content:\"\\f23c\"}.ion-social-sass:before{content:\"\\f4ea\"}.ion-social-skype:before{content:\"\\f23f\"}.ion-social-skype-outline:before{content:\"\\f23e\"}.ion-social-snapchat:before{content:\"\\f4ec\"}.ion-social-snapchat-outline:before{content:\"\\f4eb\"}.ion-social-tumblr:before{content:\"\\f241\"}.ion-social-tumblr-outline:before{content:\"\\f240\"}.ion-social-tux:before{content:\"\\f2c5\"}.ion-social-twitch:before{content:\"\\f4ee\"}.ion-social-twitch-outline:before{content:\"\\f4ed\"}.ion-social-twitter:before{content:\"\\f243\"}.ion-social-twitter-outline:before{content:\"\\f242\"}.ion-social-usd:before{content:\"\\f353\"}.ion-social-usd-outline:before{content:\"\\f352\"}.ion-social-vimeo:before{content:\"\\f245\"}.ion-social-vimeo-outline:before{content:\"\\f244\"}.ion-social-whatsapp:before{content:\"\\f4f0\"}.ion-social-whatsapp-outline:before{content:\"\\f4ef\"}.ion-social-windows:before{content:\"\\f247\"}.ion-social-windows-outline:before{content:\"\\f246\"}.ion-social-wordpress:before{content:\"\\f249\"}.ion-social-wordpress-outline:before{content:\"\\f248\"}.ion-social-yahoo:before{content:\"\\f24b\"}.ion-social-yahoo-outline:before{content:\"\\f24a\"}.ion-social-yen:before{content:\"\\f4f2\"}.ion-social-yen-outline:before{content:\"\\f4f1\"}.ion-social-youtube:before{content:\"\\f24d\"}.ion-social-youtube-outline:before{content:\"\\f24c\"}.ion-soup-can:before{content:\"\\f4f4\"}.ion-soup-can-outline:before{content:\"\\f4f3\"}.ion-speakerphone:before{content:\"\\f2b2\"}.ion-speedometer:before{content:\"\\f2b3\"}.ion-spoon:before{content:\"\\f2b4\"}.ion-star:before{content:\"\\f24e\"}.ion-stats-bars:before{content:\"\\f2b5\"}.ion-steam:before{content:\"\\f30b\"}.ion-stop:before{content:\"\\f24f\"}.ion-thermometer:before{content:\"\\f2b6\"}.ion-thumbsdown:before{content:\"\\f250\"}.ion-thumbsup:before{content:\"\\f251\"}.ion-toggle:before{content:\"\\f355\"}.ion-toggle-filled:before{content:\"\\f354\"}.ion-transgender:before{content:\"\\f4f5\"}.ion-trash-a:before{content:\"\\f252\"}.ion-trash-b:before{content:\"\\f253\"}.ion-trophy:before{content:\"\\f356\"}.ion-tshirt:before{content:\"\\f4f7\"}.ion-tshirt-outline:before{content:\"\\f4f6\"}.ion-umbrella:before{content:\"\\f2b7\"}.ion-university:before{content:\"\\f357\"}.ion-unlocked:before{content:\"\\f254\"}.ion-upload:before{content:\"\\f255\"}.ion-usb:before{content:\"\\f2b8\"}.ion-videocamera:before{content:\"\\f256\"}.ion-volume-high:before{content:\"\\f257\"}.ion-volume-low:before{content:\"\\f258\"}.ion-volume-medium:before{content:\"\\f259\"}.ion-volume-mute:before{content:\"\\f25a\"}.ion-wand:before{content:\"\\f358\"}.ion-waterdrop:before{content:\"\\f25b\"}.ion-wifi:before{content:\"\\f25c\"}.ion-wineglass:before{content:\"\\f2b9\"}.ion-woman:before{content:\"\\f25d\"}.ion-wrench:before{content:\"\\f2ba\"}.ion-xbox:before{content:\"\\f30c\"}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[7].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[7].use[4]!./style.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".loading-spinner {\n  position: relative;\n  width: 40px;\n  height: 40px;\n  margin: 90px auto;\n  border-radius: 50%;\n  border-top: 3px solid rgba(0, 0, 0, 0.1);\n  border-right: 3px solid rgba(0, 0, 0, 0.1);\n  border-bottom: 3px solid rgba(0, 0, 0, 0.1);\n  border-left: 3px solid #818a91;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-animation: spin 0.5s infinite linear;\n          animation: spin 0.5s infinite linear;\n  /* TODO the spinner appears broken, might be because of this typo that existed in the original.\n   * We noticed it when migrating to SASS which does a compile check ;-). */\n  /*\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n  */\n}\n\n.error-message {\n  display: -webkit-flex;\n  display: -moz-box;\n  display: flex;\n  -webkit-justify-content: center;\n     -moz-box-pack: center;\n          justify-content: center;\n}\n.error-message .error-message-presenter {\n  display: inline-block;\n  margin: 20px auto;\n  padding: 8px 15px;\n  border-radius: 4px;\n  color: #f02d2d;\n  font-weight: 600;\n  background: rgba(240, 45, 45, 0.1);\n}\n\n/* https://github.com/gothinkster/angular-realworld-example-app/blob/9e8c49514ee874e5e0bbfe53ffdba7d2fd0af36f/src/app/shared/article-helpers/article-list.component.css#L1 */\n.page-link {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://style.scss"],"names":[],"mappings":"AAAA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,wCAAA;EACA,0CAAA;EACA,2CAAA;EACA,8BAAA;EACA,gCAAA;UAAA,wBAAA;EACA,4CAAA;UAAA,oCAAA;EACA;2EAAA;EAEA;;;;;;;GAAA;AAQF;;AAEA;EACE,qBAAA;EAAA,iBAAA;EAAA,aAAA;EACA,+BAAA;KAAA,qBAAA;UAAA,uBAAA;AACF;AAAE;EACE,qBAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,kCAAA;AAEJ;;AAEA,4KAAA;AACA;EACE,eAAA;AACF","sourcesContent":[".loading-spinner {\r\n  position: relative;\r\n  width: 40px;\r\n  height: 40px;\r\n  margin: 90px auto;\r\n  border-radius: 50%;\r\n  border-top: 3px solid rgba(0, 0, 0, 0.1);\r\n  border-right: 3px solid rgba(0, 0, 0, 0.1);\r\n  border-bottom: 3px solid rgba(0, 0, 0, 0.1);\r\n  border-left: 3px solid #818a91;\r\n  transform: translateZ(0);\r\n  animation: spin 0.5s infinite linear;\r\n  /* TODO the spinner appears broken, might be because of this typo that existed in the original.\r\n   * We noticed it when migrating to SASS which does a compile check ;-). */\r\n  /*\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n  */\r\n}\r\n\r\n.error-message {\r\n  display: flex;\r\n  justify-content: center;\r\n  .error-message-presenter {\r\n    display: inline-block;\r\n    margin: 20px auto;\r\n    padding: 8px 15px;\r\n    border-radius: 4px;\r\n    color: #f02d2d;\r\n    font-weight: 600;\r\n    background: rgba(240, 45, 45, 0.1);\r\n  }\r\n}\r\n\r\n/* https://github.com/gothinkster/angular-realworld-example-app/blob/9e8c49514ee874e5e0bbfe53ffdba7d2fd0af36f/src/app/shared/article-helpers/article-list.component.css#L1 */\r\n.page-link {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/getUrl.js":
/*!**************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/getUrl.js ***!
  \**************************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var e={91:function(e){e.exports=function(e,r){if(!r){r={}}e=e&&e.__esModule?e.default:e;if(typeof e!=="string"){return e}if(/^['"].*['"]$/.test(e)){e=e.slice(1,-1)}if(r.hash){e+=r.hash}if(/["'() \t\n]/.test(e)||r.needQuotes){return'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"')}return e}}};var r={};function __nccwpck_require__(t){if(r[t]){return r[t].exports}var _=r[t]={exports:{}};var n=true;try{e[t](_,_.exports,__nccwpck_require__);n=false}finally{if(n)delete r[t]}return _.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(91)}();

/***/ }),

/***/ "./node_modules/ionicons/fonts/ionicons.eot?v=2.0.1":
/*!**********************************************************!*\
  !*** ./node_modules/ionicons/fonts/ionicons.eot?v=2.0.1 ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ionicons.3e10c450f96bf28a640777fc18af2197.eot");

/***/ }),

/***/ "./node_modules/ionicons/fonts/ionicons.svg?v=2.0.1":
/*!**********************************************************!*\
  !*** ./node_modules/ionicons/fonts/ionicons.svg?v=2.0.1 ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ionicons.e9190273f3942224e920e73e1e7ae045.svg");

/***/ }),

/***/ "./node_modules/ionicons/fonts/ionicons.ttf?v=2.0.1":
/*!**********************************************************!*\
  !*** ./node_modules/ionicons/fonts/ionicons.ttf?v=2.0.1 ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ionicons.e9f4c425fc377740601bf321aff5b419.ttf");

/***/ }),

/***/ "./node_modules/ionicons/fonts/ionicons.woff?v=2.0.1":
/*!***********************************************************!*\
  !*** ./node_modules/ionicons/fonts/ionicons.woff?v=2.0.1 ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/ionicons.e5a4fae098c926d7f34b15a15969cb7d.woff");

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/swr/esm/cache.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/cache.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/hash */ "./node_modules/swr/esm/libs/hash.js");

var Cache = /** @class */ (function () {
    function Cache(initialData) {
        if (initialData === void 0) { initialData = {}; }
        this.__cache = new Map(Object.entries(initialData));
        this.__listeners = [];
    }
    Cache.prototype.get = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.get(_key);
    };
    Cache.prototype.set = function (key, value) {
        var _key = this.serializeKey(key)[0];
        this.__cache.set(_key, value);
        this.notify();
    };
    Cache.prototype.keys = function () {
        return Array.from(this.__cache.keys());
    };
    Cache.prototype.has = function (key) {
        var _key = this.serializeKey(key)[0];
        return this.__cache.has(_key);
    };
    Cache.prototype.clear = function () {
        this.__cache.clear();
        this.notify();
    };
    Cache.prototype.delete = function (key) {
        var _key = this.serializeKey(key)[0];
        this.__cache.delete(_key);
        this.notify();
    };
    // TODO: introduce namespace for the cache
    Cache.prototype.serializeKey = function (key) {
        var args = null;
        if (typeof key === 'function') {
            try {
                key = key();
            }
            catch (err) {
                // dependencies not ready
                key = '';
            }
        }
        if (Array.isArray(key)) {
            // args array
            args = key;
            key = (0,_libs_hash__WEBPACK_IMPORTED_MODULE_0__.default)(key);
        }
        else {
            // convert null to ''
            key = String(key || '');
        }
        var errorKey = key ? 'err@' + key : '';
        return [key, args, errorKey];
    };
    Cache.prototype.subscribe = function (listener) {
        var _this = this;
        if (typeof listener !== 'function') {
            throw new Error('Expected the listener to be a function.');
        }
        var isSubscribed = true;
        this.__listeners.push(listener);
        return function () {
            if (!isSubscribed)
                return;
            isSubscribed = false;
            var index = _this.__listeners.indexOf(listener);
            if (index > -1) {
                _this.__listeners[index] = _this.__listeners[_this.__listeners.length - 1];
                _this.__listeners.length--;
            }
        };
    };
    // Notify Cache subscribers about a change in the cache
    Cache.prototype.notify = function () {
        for (var _i = 0, _a = this.__listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener();
        }
    };
    return Cache;
}());
/* harmony default export */ __webpack_exports__["default"] = (Cache);


/***/ }),

/***/ "./node_modules/swr/esm/config.js":
/*!****************************************!*\
  !*** ./node_modules/swr/esm/config.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cache": function() { return /* binding */ cache; }
/* harmony export */ });
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-deep-equal */ "./node_modules/fast-deep-equal/index.js");
/* harmony import */ var fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_deep_equal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cache */ "./node_modules/swr/esm/cache.js");



// cache
var cache = new _cache__WEBPACK_IMPORTED_MODULE_2__.default();
// error retry
function onErrorRetry(_, __, config, revalidate, opts) {
    if (!(0,_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_1__.default)()) {
        // if it's hidden, stop
        // it will auto revalidate when focus
        return;
    }
    if (typeof config.errorRetryCount === 'number' &&
        opts.retryCount > config.errorRetryCount) {
        return;
    }
    // exponential backoff
    var count = Math.min(opts.retryCount || 0, 8);
    var timeout = ~~((Math.random() + 0.5) * (1 << count)) * config.errorRetryInterval;
    setTimeout(revalidate, timeout, opts);
}
// client side: need to adjust the config
// based on the browser status
// slow connection (<= 70Kbps)
var slowConnection = typeof window !== 'undefined' &&
    navigator['connection'] &&
    ['slow-2g', '2g'].indexOf(navigator['connection'].effectiveType) !== -1;
// config
var defaultConfig = {
    // events
    onLoadingSlow: function () { },
    onSuccess: function () { },
    onError: function () { },
    onErrorRetry: onErrorRetry,
    errorRetryInterval: (slowConnection ? 10 : 5) * 1000,
    focusThrottleInterval: 5 * 1000,
    dedupingInterval: 2 * 1000,
    loadingTimeout: (slowConnection ? 5 : 3) * 1000,
    refreshInterval: 0,
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    refreshWhenHidden: false,
    refreshWhenOffline: false,
    shouldRetryOnError: true,
    suspense: false,
    compare: (fast_deep_equal__WEBPACK_IMPORTED_MODULE_0___default())
};

/* harmony default export */ __webpack_exports__["default"] = (defaultConfig);


/***/ }),

/***/ "./node_modules/swr/esm/index.js":
/*!***************************************!*\
  !*** ./node_modules/swr/esm/index.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSWRInfinite": function() { return /* reexport safe */ _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__.useSWRInfinite; },
/* harmony export */   "cache": function() { return /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_2__.cache; }
/* harmony export */ });
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _use_swr__WEBPACK_IMPORTED_MODULE_0__) if(["default","useSWRInfinite","cache"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _use_swr__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _use_swr_infinite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./use-swr-infinite */ "./node_modules/swr/esm/use-swr-infinite.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");




/* harmony default export */ __webpack_exports__["default"] = (_use_swr__WEBPACK_IMPORTED_MODULE_0__.default);


/***/ }),

/***/ "./node_modules/swr/esm/libs/hash.js":
/*!*******************************************!*\
  !*** ./node_modules/swr/esm/libs/hash.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hash; }
/* harmony export */ });
// use WeakMap to store the object->key mapping
// so the objects can be garbage collected.
// WeakMap uses a hashtable under the hood, so the lookup
// complexity is almost O(1).
var table = new WeakMap();
// counter of the key
var counter = 0;
// hashes an array of objects and returns a string
function hash(args) {
    if (!args.length)
        return '';
    var key = 'arg';
    for (var i = 0; i < args.length; ++i) {
        var _hash = void 0;
        if (args[i] === null || typeof args[i] !== 'object') {
            // need to consider the case that args[i] is a string:
            // args[i]        _hash
            // "undefined" -> '"undefined"'
            // undefined   -> 'undefined'
            // 123         -> '123'
            // null        -> 'null'
            // "null"      -> '"null"'
            if (typeof args[i] === 'string') {
                _hash = '"' + args[i] + '"';
            }
            else {
                _hash = String(args[i]);
            }
        }
        else {
            if (!table.has(args[i])) {
                _hash = counter;
                table.set(args[i], counter++);
            }
            else {
                _hash = table.get(args[i]);
            }
        }
        key += '@' + _hash;
    }
    return key;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-document-visible.js":
/*!**********************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-document-visible.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isDocumentVisible; }
/* harmony export */ });
function isDocumentVisible() {
    if (typeof document !== 'undefined' &&
        typeof document.visibilityState !== 'undefined') {
        return document.visibilityState !== 'hidden';
    }
    // always assume it's visible
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/is-online.js":
/*!************************************************!*\
  !*** ./node_modules/swr/esm/libs/is-online.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isOnline; }
/* harmony export */ });
function isOnline() {
    if (typeof navigator.onLine !== 'undefined') {
        return navigator.onLine;
    }
    // always assume it's online
    return true;
}


/***/ }),

/***/ "./node_modules/swr/esm/libs/throttle.js":
/*!***********************************************!*\
  !*** ./node_modules/swr/esm/libs/throttle.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ throttle; }
/* harmony export */ });
function throttle(fn, interval) {
    var pending = false;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (pending)
            return;
        pending = true;
        fn.apply(void 0, args);
        setTimeout(function () { return (pending = false); }, interval);
    };
}


/***/ }),

/***/ "./node_modules/swr/esm/swr-config-context.js":
/*!****************************************************!*\
  !*** ./node_modules/swr/esm/swr-config-context.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var SWRConfigContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
SWRConfigContext.displayName = 'SWRConfigContext';
/* harmony default export */ __webpack_exports__["default"] = (SWRConfigContext);


/***/ }),

/***/ "./node_modules/swr/esm/use-swr-infinite.js":
/*!**************************************************!*\
  !*** ./node_modules/swr/esm/use-swr-infinite.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSWRInfinite": function() { return /* binding */ useSWRInfinite; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
/* harmony import */ var _use_swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./use-swr */ "./node_modules/swr/esm/use-swr.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




function useSWRInfinite() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var getKey, fn, config = {};
    if (args.length >= 1) {
        getKey = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__.default, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_swr_config_context__WEBPACK_IMPORTED_MODULE_2__.default), config);
    var _a = config.initialSize, initialSize = _a === void 0 ? 1 : _a, _b = config.revalidateAll, revalidateAll = _b === void 0 ? false : _b, _c = config.persistSize, persistSize = _c === void 0 ? false : _c, defaultFetcher = config.fetcher, extraConfig = __rest(config, ["initialSize", "revalidateAll", "persistSize", "fetcher"]);
    if (typeof fn === 'undefined') {
        // use the global fetcher
        // we have to convert the type here
        fn = defaultFetcher;
    }
    // get the serialized key of the first page
    var firstPageKey = null;
    try {
        ;
        firstPageKey = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(getKey(0, null))[0];
    }
    catch (err) {
        // not ready
    }
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false)[1];
    // we use cache to pass extra info (context) to fetcher so it can be globally shared
    // here we get the key of the fetcher context cache
    var contextCacheKey = null;
    if (firstPageKey) {
        contextCacheKey = 'context@' + firstPageKey;
    }
    // page count is cached as well, so when navigating the list can be restored
    var pageCountCacheKey = null;
    var cachedPageSize;
    if (firstPageKey) {
        pageCountCacheKey = 'size@' + firstPageKey;
        cachedPageSize = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(pageCountCacheKey);
    }
    var pageCountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(cachedPageSize || initialSize);
    var didMountRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // every time the key changes, we reset the page size if it's not persisted
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (didMountRef.current) {
            if (!persistSize) {
                pageCountRef.current = initialSize;
            }
        }
        else {
            didMountRef.current = true;
        }
    }, [firstPageKey]);
    // actual swr of all pages
    var swr = (0,_use_swr__WEBPACK_IMPORTED_MODULE_3__.default)(firstPageKey ? ['many', firstPageKey] : null, function () { return __awaiter(_this, void 0, void 0, function () {
        var _a, originalData, force, data, previousPageData, i, _b, pageKey, pageArgs, pageData, shouldRevalidatePage;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(contextCacheKey) || {}, originalData = _a.originalData, force = _a.force;
                    data = [];
                    previousPageData = null;
                    i = 0;
                    _c.label = 1;
                case 1:
                    if (!(i < pageCountRef.current)) return [3 /*break*/, 8];
                    _b = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(getKey(i, previousPageData)), pageKey = _b[0], pageArgs = _b[1];
                    if (!pageKey) {
                        // pageKey is falsy, stop fetching next pages
                        return [3 /*break*/, 8];
                    }
                    pageData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(pageKey);
                    shouldRevalidatePage = revalidateAll ||
                        force ||
                        (typeof force === 'undefined' && i === 0) ||
                        (originalData && !config.compare(originalData[i], pageData)) ||
                        typeof pageData === 'undefined';
                    if (!shouldRevalidatePage) return [3 /*break*/, 6];
                    if (!(pageArgs !== null)) return [3 /*break*/, 3];
                    return [4 /*yield*/, fn.apply(void 0, pageArgs)];
                case 2:
                    pageData = _c.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, fn(pageKey)];
                case 4:
                    pageData = _c.sent();
                    _c.label = 5;
                case 5:
                    _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(pageKey, pageData);
                    _c.label = 6;
                case 6:
                    data.push(pageData);
                    previousPageData = pageData;
                    _c.label = 7;
                case 7:
                    ++i;
                    return [3 /*break*/, 1];
                case 8:
                    // once we executed the data fetching based on the context, clear the context
                    _config__WEBPACK_IMPORTED_MODULE_1__.cache.delete(contextCacheKey);
                    // return the data
                    return [2 /*return*/, data];
            }
        });
    }); }, extraConfig);
    // extend the SWR API
    var mutate = swr.mutate;
    swr.size = pageCountRef.current;
    swr.mutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, shouldRevalidate) {
        if (shouldRevalidate === void 0) { shouldRevalidate = true; }
        if (shouldRevalidate && typeof data !== 'undefined') {
            // we only revalidate the pages that are changed
            var originalData = swr.data;
            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(contextCacheKey, { originalData: originalData, force: false });
        }
        else if (shouldRevalidate) {
            // calling `mutate()`, we revalidate all pages
            _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(contextCacheKey, { force: true });
        }
        return mutate(data, shouldRevalidate);
    }, [mutate, swr.data, contextCacheKey]);
    swr.setSize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (arg) {
        if (typeof arg === 'function') {
            pageCountRef.current = arg(pageCountRef.current);
        }
        else if (typeof arg === 'number') {
            pageCountRef.current = arg;
        }
        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(pageCountCacheKey, pageCountRef.current);
        rerender(function (v) { return !v; });
        return swr.mutate(function (v) { return v; });
    }, [swr.mutate, pageCountCacheKey]);
    return swr;
}



/***/ }),

/***/ "./node_modules/swr/esm/use-swr.js":
/*!*****************************************!*\
  !*** ./node_modules/swr/esm/use-swr.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "trigger": function() { return /* binding */ trigger; },
/* harmony export */   "mutate": function() { return /* binding */ mutate; },
/* harmony export */   "SWRConfig": function() { return /* binding */ SWRConfig; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/swr/esm/config.js");
/* harmony import */ var _libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/is-document-visible */ "./node_modules/swr/esm/libs/is-document-visible.js");
/* harmony import */ var _libs_is_online__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/is-online */ "./node_modules/swr/esm/libs/is-online.js");
/* harmony import */ var _libs_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./libs/throttle */ "./node_modules/swr/esm/libs/throttle.js");
/* harmony import */ var _swr_config_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./swr-config-context */ "./node_modules/swr/esm/swr-config-context.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var IS_SERVER = typeof window === 'undefined';
// polyfill for requestIdleCallback
var rIC = IS_SERVER
    ? null
    : window['requestIdleCallback'] || (function (f) { return setTimeout(f, 1); });
// React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser.
var useIsomorphicLayoutEffect = IS_SERVER ? react__WEBPACK_IMPORTED_MODULE_0__.useEffect : react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;
// global state managers
var CONCURRENT_PROMISES = {};
var CONCURRENT_PROMISES_TS = {};
var FOCUS_REVALIDATORS = {};
var RECONNECT_REVALIDATORS = {};
var CACHE_REVALIDATORS = {};
var MUTATION_TS = {};
var MUTATION_END_TS = {};
// setup DOM events listeners for `focus` and `reconnect` actions
if (!IS_SERVER && window.addEventListener) {
    var revalidate_1 = function (revalidators) {
        if (!(0,_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__.default)() || !(0,_libs_is_online__WEBPACK_IMPORTED_MODULE_3__.default)())
            return;
        for (var key in revalidators) {
            if (revalidators[key][0])
                revalidators[key][0]();
        }
    };
    // focus revalidate
    window.addEventListener('visibilitychange', function () { return revalidate_1(FOCUS_REVALIDATORS); }, false);
    window.addEventListener('focus', function () { return revalidate_1(FOCUS_REVALIDATORS); }, false);
    // reconnect revalidate
    window.addEventListener('online', function () { return revalidate_1(RECONNECT_REVALIDATORS); }, false);
}
var trigger = function (_key, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    // we are ignoring the second argument which correspond to the arguments
    // the fetcher will receive when key is an array
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(_key), key = _a[0], keyErr = _a[2];
    if (!key)
        return Promise.resolve();
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        var currentData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key);
        var currentError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyErr);
        var promises = [];
        for (var i = 0; i < updaters.length; ++i) {
            promises.push(updaters[i](shouldRevalidate, currentData, currentError, i > 0));
        }
        // return new updated value
        return Promise.all(promises).then(function () { return _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key); });
    }
    return Promise.resolve(_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key));
};
var broadcastState = function (key, data, error) {
    var updaters = CACHE_REVALIDATORS[key];
    if (key && updaters) {
        for (var i = 0; i < updaters.length; ++i) {
            updaters[i](false, data, error);
        }
    }
};
var mutate = function (_key, _data, shouldRevalidate) {
    if (shouldRevalidate === void 0) { shouldRevalidate = true; }
    return __awaiter(void 0, void 0, void 0, function () {
        var _a, key, keyErr, beforeMutationTs, beforeConcurrentPromisesTs, data, error, err_1, err_2, updaters, promises, i;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(_key), key = _a[0], keyErr = _a[2];
                    if (!key)
                        return [2 /*return*/];
                    // if there is no new data, call revalidate against the key
                    if (typeof _data === 'undefined')
                        return [2 /*return*/, trigger(_key, shouldRevalidate)
                            // update timestamps
                        ];
                    // update timestamps
                    MUTATION_TS[key] = Date.now() - 1;
                    MUTATION_END_TS[key] = 0;
                    beforeMutationTs = MUTATION_TS[key];
                    beforeConcurrentPromisesTs = CONCURRENT_PROMISES_TS[key];
                    if (!(_data && typeof _data === 'function')) return [3 /*break*/, 5];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, _data(_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key))];
                case 2:
                    data = _b.sent();
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    error = err_1;
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 11];
                case 5:
                    if (!(_data && typeof _data.then === 'function')) return [3 /*break*/, 10];
                    _b.label = 6;
                case 6:
                    _b.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, _data];
                case 7:
                    data = _b.sent();
                    return [3 /*break*/, 9];
                case 8:
                    err_2 = _b.sent();
                    error = err_2;
                    return [3 /*break*/, 9];
                case 9: return [3 /*break*/, 11];
                case 10:
                    data = _data;
                    _b.label = 11;
                case 11:
                    // check if other mutations have occurred since we've started awaiting, if so then do not persist this change
                    if (beforeMutationTs !== MUTATION_TS[key] ||
                        beforeConcurrentPromisesTs !== CONCURRENT_PROMISES_TS[key]) {
                        if (error)
                            throw error;
                        return [2 /*return*/, data];
                    }
                    if (typeof data !== 'undefined') {
                        // update cached data, avoid notifying from the cache
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(key, data);
                    }
                    _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyErr, error);
                    // reset the timestamp to mark the mutation has ended
                    MUTATION_END_TS[key] = Date.now() - 1;
                    updaters = CACHE_REVALIDATORS[key];
                    if (updaters) {
                        promises = [];
                        for (i = 0; i < updaters.length; ++i) {
                            promises.push(updaters[i](!!shouldRevalidate, data, error, i > 0));
                        }
                        // return new updated value
                        return [2 /*return*/, Promise.all(promises).then(function () {
                                if (error)
                                    throw error;
                                return _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key);
                            })];
                    }
                    // throw error or return data to be used by caller of mutate
                    if (error)
                        throw error;
                    return [2 /*return*/, data];
            }
        });
    });
};
function useSWR() {
    var _this = this;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var _key, fn, config = {};
    if (args.length >= 1) {
        _key = args[0];
    }
    if (args.length > 2) {
        fn = args[1];
        config = args[2];
    }
    else {
        if (typeof args[1] === 'function') {
            fn = args[1];
        }
        else if (typeof args[1] === 'object') {
            config = args[1];
        }
    }
    // we assume `key` as the identifier of the request
    // `key` can change but `fn` shouldn't
    // (because `revalidate` only depends on `key`)
    // `keyErr` is the cache key for error objects
    var _a = _config__WEBPACK_IMPORTED_MODULE_1__.cache.serializeKey(_key), key = _a[0], fnArgs = _a[1], keyErr = _a[2];
    config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__.default, (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_swr_config_context__WEBPACK_IMPORTED_MODULE_5__.default), config);
    if (typeof fn === 'undefined') {
        // use the global fetcher
        fn = config.fetcher;
    }
    var initialData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key) || config.initialData;
    var initialError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyErr);
    // if a state is accessed (data, error or isValidating),
    // we add the state to dependencies so if the state is
    // updated in the future, we can trigger a rerender
    var stateDependencies = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: false,
        error: false,
        isValidating: false
    });
    var stateRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        data: initialData,
        error: initialError,
        isValidating: false
    });
    var rerender = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null)[1];
    var dispatch = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (payload) {
        var shouldUpdateState = false;
        for (var k in payload) {
            stateRef.current[k] = payload[k];
            if (stateDependencies.current[k]) {
                shouldUpdateState = true;
            }
        }
        if (shouldUpdateState || config.suspense) {
            if (unmountedRef.current)
                return;
            rerender({});
        }
    }, []);
    // error ref inside revalidate (is last request errored?)
    var unmountedRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    var keyRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(key);
    // do unmount check for callbacks
    var eventsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        emit: function (event) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            if (unmountedRef.current)
                return;
            config[event].apply(config, params);
        }
    });
    var boundMutate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (data, shouldRevalidate) {
        return mutate(key, data, shouldRevalidate);
    }, [key]);
    var addRevalidator = function (revalidators, callback) {
        if (!callback)
            return;
        if (!revalidators[key]) {
            revalidators[key] = [callback];
        }
        else {
            revalidators[key].push(callback);
        }
    };
    var removeRevalidator = function (revlidators, callback) {
        if (revlidators[key]) {
            var revalidators = revlidators[key];
            var index = revalidators.indexOf(callback);
            if (index >= 0) {
                // 10x faster than splice
                // https://jsperf.com/array-remove-by-index
                revalidators[index] = revalidators[revalidators.length - 1];
                revalidators.pop();
            }
        }
    };
    // start a revalidation
    var revalidate = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (revalidateOpts) {
        if (revalidateOpts === void 0) { revalidateOpts = {}; }
        return __awaiter(_this, void 0, void 0, function () {
            var loading, shouldDeduping, newData, startAt, shouldIgnoreRequest, newState, err_3, retryCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!key || !fn)
                            return [2 /*return*/, false];
                        if (unmountedRef.current)
                            return [2 /*return*/, false];
                        revalidateOpts = Object.assign({ dedupe: false }, revalidateOpts);
                        loading = true;
                        shouldDeduping = typeof CONCURRENT_PROMISES[key] !== 'undefined' && revalidateOpts.dedupe;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        dispatch({
                            isValidating: true
                        });
                        newData = void 0;
                        startAt = void 0;
                        if (!shouldDeduping) return [3 /*break*/, 3];
                        // there's already an ongoing request,
                        // this one needs to be deduplicated.
                        startAt = CONCURRENT_PROMISES_TS[key];
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 2:
                        newData = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        // if no cache being rendered currently (it shows a blank page),
                        // we trigger the loading slow event.
                        if (config.loadingTimeout && !_config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key)) {
                            setTimeout(function () {
                                if (loading)
                                    eventsRef.current.emit('onLoadingSlow', key, config);
                            }, config.loadingTimeout);
                        }
                        if (fnArgs !== null) {
                            CONCURRENT_PROMISES[key] = fn.apply(void 0, fnArgs);
                        }
                        else {
                            CONCURRENT_PROMISES[key] = fn(key);
                        }
                        CONCURRENT_PROMISES_TS[key] = startAt = Date.now();
                        return [4 /*yield*/, CONCURRENT_PROMISES[key]];
                    case 4:
                        newData = _a.sent();
                        setTimeout(function () {
                            delete CONCURRENT_PROMISES[key];
                            delete CONCURRENT_PROMISES_TS[key];
                        }, config.dedupingInterval);
                        // trigger the success event,
                        // only do this for the original request.
                        eventsRef.current.emit('onSuccess', newData, key, config);
                        _a.label = 5;
                    case 5:
                        shouldIgnoreRequest = 
                        // if there're other ongoing request(s), started after the current one,
                        // we need to ignore the current one to avoid possible race conditions:
                        //   req1------------------>res1        (current one)
                        //        req2---------------->res2
                        // the request that fired later will always be kept.
                        CONCURRENT_PROMISES_TS[key] > startAt ||
                            // if there're other mutations(s), overlapped with the current revalidation:
                            // case 1:
                            //   req------------------>res
                            //       mutate------>end
                            // case 2:
                            //         req------------>res
                            //   mutate------>end
                            // case 3:
                            //   req------------------>res
                            //       mutate-------...---------->
                            // we have to ignore the revalidation result (res) because it's no longer fresh.
                            // meanwhile, a new revalidation should be triggered when the mutation ends.
                            (MUTATION_TS[key] &&
                                // case 1
                                (startAt <= MUTATION_TS[key] ||
                                    // case 2
                                    startAt <= MUTATION_END_TS[key] ||
                                    // case 3
                                    MUTATION_END_TS[key] === 0));
                        if (shouldIgnoreRequest) {
                            dispatch({ isValidating: false });
                            return [2 /*return*/, false];
                        }
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(key, newData);
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyErr, undefined);
                        newState = {
                            isValidating: false
                        };
                        if (typeof stateRef.current.error !== 'undefined') {
                            // we don't have an error
                            newState.error = undefined;
                        }
                        if (!config.compare(stateRef.current.data, newData)) {
                            // deep compare to avoid extra re-render
                            // data changed
                            newState.data = newData;
                        }
                        // merge the new state
                        dispatch(newState);
                        if (!shouldDeduping) {
                            // also update other hooks
                            broadcastState(key, newData, undefined);
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        delete CONCURRENT_PROMISES[key];
                        delete CONCURRENT_PROMISES_TS[key];
                        _config__WEBPACK_IMPORTED_MODULE_1__.cache.set(keyErr, err_3);
                        // get a new error
                        // don't use deep equal for errors
                        if (stateRef.current.error !== err_3) {
                            // we keep the stale data
                            dispatch({
                                isValidating: false,
                                error: err_3
                            });
                            if (!shouldDeduping) {
                                // also broadcast to update other hooks
                                broadcastState(key, undefined, err_3);
                            }
                        }
                        // events and retry
                        eventsRef.current.emit('onError', err_3, key, config);
                        if (config.shouldRetryOnError) {
                            retryCount = (revalidateOpts.retryCount || 0) + 1;
                            eventsRef.current.emit('onErrorRetry', err_3, key, config, revalidate, Object.assign({ dedupe: true }, revalidateOpts, { retryCount: retryCount }));
                        }
                        return [3 /*break*/, 7];
                    case 7:
                        loading = false;
                        return [2 /*return*/, true];
                }
            });
        });
    }, [key]);
    // mounted (client side rendering)
    useIsomorphicLayoutEffect(function () {
        if (!key)
            return undefined;
        // after `key` updates, we need to mark it as mounted
        unmountedRef.current = false;
        // after the component is mounted (hydrated),
        // we need to update the data from the cache
        // and trigger a revalidation
        var currentHookData = stateRef.current.data;
        var latestKeyedData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key) || config.initialData;
        // update the state if the key changed (not the inital render) or cache updated
        if (keyRef.current !== key ||
            !config.compare(currentHookData, latestKeyedData)) {
            dispatch({ data: latestKeyedData });
            keyRef.current = key;
        }
        // revalidate with deduping
        var softRevalidate = function () { return revalidate({ dedupe: true }); };
        // trigger a revalidation
        if (config.revalidateOnMount ||
            (!config.initialData && config.revalidateOnMount === undefined)) {
            if (typeof latestKeyedData !== 'undefined') {
                // delay revalidate if there's cache
                // to not block the rendering
                rIC(softRevalidate);
            }
            else {
                softRevalidate();
            }
        }
        // whenever the window gets focused, revalidate
        var onFocus;
        if (config.revalidateOnFocus) {
            // throttle: avoid being called twice from both listeners
            // and tabs being switched quickly
            onFocus = (0,_libs_throttle__WEBPACK_IMPORTED_MODULE_4__.default)(softRevalidate, config.focusThrottleInterval);
        }
        // when reconnect, revalidate
        var onReconnect;
        if (config.revalidateOnReconnect) {
            onReconnect = softRevalidate;
        }
        // register global cache update listener
        var onUpdate = function (shouldRevalidate, updatedData, updatedError, dedupe) {
            if (shouldRevalidate === void 0) { shouldRevalidate = true; }
            if (dedupe === void 0) { dedupe = true; }
            // update hook state
            var newState = {};
            var needUpdate = false;
            if (typeof updatedData !== 'undefined' &&
                !config.compare(stateRef.current.data, updatedData)) {
                newState.data = updatedData;
                needUpdate = true;
            }
            // always update error
            // because it can be `undefined`
            if (stateRef.current.error !== updatedError) {
                newState.error = updatedError;
                needUpdate = true;
            }
            if (needUpdate) {
                dispatch(newState);
            }
            if (shouldRevalidate) {
                if (dedupe) {
                    return softRevalidate();
                }
                else {
                    return revalidate();
                }
            }
            return false;
        };
        addRevalidator(FOCUS_REVALIDATORS, onFocus);
        addRevalidator(RECONNECT_REVALIDATORS, onReconnect);
        addRevalidator(CACHE_REVALIDATORS, onUpdate);
        return function () {
            // cleanup
            dispatch = function () { return null; };
            // mark it as unmounted
            unmountedRef.current = true;
            removeRevalidator(FOCUS_REVALIDATORS, onFocus);
            removeRevalidator(RECONNECT_REVALIDATORS, onReconnect);
            removeRevalidator(CACHE_REVALIDATORS, onUpdate);
        };
    }, [key, revalidate]);
    // set up polling
    useIsomorphicLayoutEffect(function () {
        var timer = null;
        var tick = function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(!stateRef.current.error &&
                            (config.refreshWhenHidden || (0,_libs_is_document_visible__WEBPACK_IMPORTED_MODULE_2__.default)()) &&
                            (config.refreshWhenOffline || (0,_libs_is_online__WEBPACK_IMPORTED_MODULE_3__.default)()))) return [3 /*break*/, 2];
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        return [4 /*yield*/, revalidate({ dedupe: true })];
                    case 1:
                        // only revalidate when the page is visible
                        // if API request errored, we stop polling in this round
                        // and let the error retry function handle it
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (config.refreshInterval) {
                            timer = setTimeout(tick, config.refreshInterval);
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        if (config.refreshInterval) {
            timer = setTimeout(tick, config.refreshInterval);
        }
        return function () {
            if (timer)
                clearTimeout(timer);
        };
    }, [
        config.refreshInterval,
        config.refreshWhenHidden,
        config.refreshWhenOffline,
        revalidate
    ]);
    // suspense
    if (config.suspense) {
        // in suspense mode, we can't return empty state
        // (it should be suspended)
        // try to get data and error from cache
        var latestData = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(key) || initialData;
        var latestError = _config__WEBPACK_IMPORTED_MODULE_1__.cache.get(keyErr) || initialError;
        if (typeof latestData === 'undefined' &&
            typeof latestError === 'undefined') {
            // need to start the request if it hasn't
            if (!CONCURRENT_PROMISES[key]) {
                // trigger revalidate immediately
                // to get the promise
                revalidate();
            }
            if (CONCURRENT_PROMISES[key] &&
                typeof CONCURRENT_PROMISES[key].then === 'function') {
                // if it is a promise
                throw CONCURRENT_PROMISES[key];
            }
            // it's a value, return it directly (override)
            latestData = CONCURRENT_PROMISES[key];
        }
        if (typeof latestData === 'undefined' && latestError) {
            // in suspense mode, throw error if there's no content
            throw latestError;
        }
        // return the latest data / error from cache
        // in case `key` has changed
        return {
            error: latestError,
            data: latestData,
            revalidate: revalidate,
            mutate: boundMutate,
            isValidating: stateRef.current.isValidating
        };
    }
    // define returned state
    // can be memorized since the state is a ref
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        var state = { revalidate: revalidate, mutate: boundMutate };
        Object.defineProperties(state, {
            error: {
                // `key` might be changed in the upcoming hook re-render,
                // but the previous state will stay
                // so we need to match the latest key and data (fallback to `initialData`)
                get: function () {
                    stateDependencies.current.error = true;
                    return keyRef.current === key ? stateRef.current.error : initialError;
                },
                enumerable: true
            },
            data: {
                get: function () {
                    stateDependencies.current.data = true;
                    return keyRef.current === key ? stateRef.current.data : initialData;
                },
                enumerable: true
            },
            isValidating: {
                get: function () {
                    stateDependencies.current.isValidating = true;
                    return stateRef.current.isValidating;
                },
                enumerable: true
            }
        });
        return state;
    }, [revalidate]);
}
var SWRConfig = _swr_config_context__WEBPACK_IMPORTED_MODULE_5__.default.Provider;

/* harmony default export */ __webpack_exports__["default"] = (useSWR);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tSW1hZ2UudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9DdXN0b21MaW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vRm9vdGVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTWF5YmUudHN4Iiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbW1vbi9OYXZMaW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vTmF2YmFyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9saWIvY29udGV4dC9QYWdlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9jb250ZXh0L1BhZ2VDb3VudENvbnRleHQudHN4Iiwid2VicGFjazovL19OX0UvLi9saWIvY29udGV4dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9ob29rcy91c2VTZXNzaW9uU3RvcmFnZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2NoZWNrTG9naW4udHMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYi91dGlscy9jb25zdGFudC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2dldExvZ2dlZEluVXNlci50cyIsIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzL2hhbmRsZUJyb2tlbkltYWdlLnRzIiwid2VicGFjazovL19OX0UvLi9saWIvdXRpbHMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAtY29udGV4dC50cyIsIndlYnBhY2s6Ly9fTl9FLy4uL25leHQtc2VydmVyL2xpYi9hbXAudHMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvaGVhZC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uLi9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QudHN4Iiwid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Zhc3QtZGVlcC1lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lvbmljb25zL2Nzcy9pb25pY29ucy5taW4uY3NzPzZkYWUiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlLnNjc3M/MDJhZSIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9pb25pY29ucy9jc3MvaW9uaWNvbnMubWluLmNzcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2dldFVybC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lvbmljb25zL2ZvbnRzL2lvbmljb25zLmVvdCIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lvbmljb25zL2ZvbnRzL2lvbmljb25zLnN2ZyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lvbmljb25zL2ZvbnRzL2lvbmljb25zLnR0ZiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2lvbmljb25zL2ZvbnRzL2lvbmljb25zLndvZmYiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2hlYWQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvanN4LWRldi1ydW50aW1lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9jYWNoZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vY29uZmlnLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3N3ci9lc20vbGlicy9oYXNoLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9saWJzL2lzLWRvY3VtZW50LXZpc2libGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL2xpYnMvaXMtb25saW5lLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9saWJzL3Rocm90dGxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvc3dyL2VzbS9zd3ItY29uZmlnLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL3VzZS1zd3ItaW5maW5pdGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9zd3IvZXNtL3VzZS1zd3IuanMiXSwibmFtZXMiOlsiQ3VzdG9tSW1hZ2UiLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJwcm9wcyIsImhhbmRsZUJyb2tlbkltYWdlIiwiQ3VzdG9tTGluayIsImhyZWYiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaGFsbG93IiwidW5kZWZpbmVkIiwiRm9vdGVyIiwiQVBQX05BTUUiLCJNYXliZSIsInRlc3QiLCJOYXZMaW5rIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXNQYXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTmF2YmFySXRlbSIsIk5hdmJhciIsInNldFBhZ2UiLCJ1c2VQYWdlRGlzcGF0Y2giLCJsb2dnZWRJblVzZXIiLCJnZXRMb2dnZWRJblVzZXIiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwidXNlcm5hbWUiLCJlZmZlY3RpdmVJbWFnZSIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOVl9PVkVSUklERSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcGlQYXRoIiwiZGF0YWJhc2VVcmwiLCJEQVRBQkFTRV9VUkwiLCJnb29nbGVBbmFseXRpY3NJZCIsImlzRGVtbyIsIkNJUk9TQU5USUxMSV9ERU1PIiwiaXNQcm9kdWN0aW9uTmV4dCIsIk5PREVfRU5WX05FWFQiLCJwb3J0IiwiUE9SVCIsInByZXJlbmRlckFsbCIsInJldmFsaWRhdGUiLCJzZWNyZXQiLCJTRUNSRVQiLCJ2ZXJib3NlIiwiVkVSQk9TRSIsImJsYWNrbGlzdFRhZ3MiLCJTZXQiLCJQYWdlU3RhdGVDb250ZXh0IiwiUGFnZURpc3BhdGNoQ29udGV4dCIsIlBhZ2VDb250ZXh0UHJvdmlkZXIiLCJwYWdlIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJ1c2VQYWdlU3RhdGUiLCJzdGF0ZSIsImRpc3BhdGNoIiwiUGFnZUNvdW50U3RhdGVDb250ZXh0IiwiUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0IiwiUGFnZUNvdW50Q29udGV4dFByb3ZpZGVyIiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwidXNlUGFnZUNvdW50U3RhdGUiLCJ1c2VQYWdlQ291bnREaXNwYXRjaCIsIkNvbnRleHRQcm92aWRlciIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJpdGVtIiwid2luZG93Iiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwic2V0VmFsdWUiLCJ2YWx1ZSIsInZhbHVlVG9TdG9yZSIsIkZ1bmN0aW9uIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImNoZWNrTG9naW4iLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJTRVJWRVJfQkFTRV9VUkwiLCJBUlRJQ0xFX1FVRVJZX01BUCIsIkRFRkFVTFRfUFJPRklMRV9JTUFHRSIsIkRFRkFVTFRfTElNSVQiLCJERUZBVUxUX0lNQUdFX1NPVVJDRSIsImRhdGEiLCJ1c2VTV1IiLCJzdG9yYWdlIiwiaXNMb2dnZWRJbiIsImUiLCJ0YXJnZXQiLCJvbmVycm9yIiwibG9jYWxTdG9yYWdlIiwicHJlZmV0Y2hlZCIsImVyciIsImN1ckxvY2FsZSIsIm9wdGlvbnMiLCJldmVudCIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwiYXJncyIsImV4cGVjdGVkIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFjdHVhbCIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJjb25zb2xlIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJlbCIsInNldEludGVyc2VjdGlvblJlZiIsInNob3VsZFByZWZldGNoIiwiaXNWaXNpYmxlIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsInJlZiIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwiZGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJjYWxsYmFjayIsIkFtcFN0YXRlQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJpc0luQW1wTW9kZSIsImluQW1wTW9kZSIsImhlYWQiLCJsaXN0IiwiZnJhZ21lbnRMaXN0IiwiTUVUQVRZUEVTIiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaSIsImxlbiIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsImhlYWRFbGVtZW50IiwiZGVmYXVsdEhlYWQiLCJ1bmlxdWUiLCJjIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsIkhlYWQiLCJpc1NlcnZlciIsIkNvbXBvbmVudCIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJjb21wb25lbnREaWRNb3VudCIsImNvbXBvbmVudERpZFVwZGF0ZSIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVuZGVyIiwiTXlBcHAiLCJwYWdlUHJvcHMiLCJoYW5kbGVSb3V0ZUNoYW5nZSIsInVybCIsImd0YWciLCJwYWdlX3BhdGgiLCJ1c2VFZmZlY3QiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7Ozs7Ozs7QUNmZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTs7QUFRQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQyxLQUFGO0FBQU9DLEtBQVA7QUFBWUM7QUFBWixDQUFELEtBQStDO0FBQ2pFLFFBQU1DLEtBQVUsR0FBRyxFQUFuQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDYkMsU0FBSyxDQUFDRCxTQUFOLEdBQWtCQSxTQUFsQjtBQUNEOztBQUNELHNCQUNFO0FBQ0UsT0FBRyxFQUFFRixHQURQO0FBRUUsT0FBRyxFQUFFQyxHQUZQO0FBR0UsV0FBTyxFQUFFRyxnRUFBaUJBO0FBSDVCLEtBSU1ELEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FiRDs7S0FBTUosVztBQWVOLCtEQUFlQSxXQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTs7QUFVQSxNQUFNTSxVQUFVLEdBQUcsQ0FBQztBQUNsQkgsV0FEa0I7QUFFbEJJLE1BRmtCO0FBR2xCQyxTQUhrQjtBQUlsQkMsVUFKa0I7QUFLbEJDO0FBTGtCLENBQUQsS0FNSTtBQUNyQixNQUFJQSxPQUFPLEtBQUtDLFNBQWhCLEVBQTJCO0FBQ3pCRCxXQUFPLEdBQUcsS0FBVjtBQUNEOztBQUNELHNCQUFRLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxF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QUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsOENBQVM7QUFDbEMsMEJBQTBCLDhDQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDhDQUFPO0FBQ2xCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxnQkFBZ0IsaUVBQXlCO0FBQ0g7QUFDdEMsK0RBQWUsTUFBTSxFQUFDIiwiZmlsZSI6InN0YXRpYy9jaHVua3MvcGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJpbXBvcnQgeyBERUZBVUxUX0lNQUdFX1NPVVJDRSB9IGZyb20gXCJsaWIvdXRpbHMvY29uc3RhbnRcIjtcclxuaW1wb3J0IGhhbmRsZUJyb2tlbkltYWdlIGZyb20gXCJsaWIvdXRpbHMvaGFuZGxlQnJva2VuSW1hZ2VcIjtcclxuXHJcbmludGVyZmFjZSBDdXN0b21JbWFnZVByb3BzIHtcclxuICBzcmM6IHN0cmluZztcclxuICBhbHQ6IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEN1c3RvbUltYWdlID0gKHsgc3JjLCBhbHQsIGNsYXNzTmFtZSB9OiBDdXN0b21JbWFnZVByb3BzKSA9PiB7XHJcbiAgY29uc3QgcHJvcHM6IGFueSA9IHt9XHJcbiAgaWYgKGNsYXNzTmFtZSkge1xyXG4gICAgcHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8aW1nXHJcbiAgICAgIHNyYz17c3JjfVxyXG4gICAgICBhbHQ9e2FsdH1cclxuICAgICAgb25FcnJvcj17aGFuZGxlQnJva2VuSW1hZ2V9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21JbWFnZTtcclxuIiwiLyogSGVscGVyIGZvciBhIGxpbmsgdGhhdCBhY2NlcHRzIHBhcmFtZXRlcnMgc3VjaCBhcyBjbGFzc05hbWUgKi9cclxuXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIEN1c3RvbUxpbmtQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG4gIHNoYWxsb3c/OiBib29sZWFuO1xyXG59XHJcblxyXG5jb25zdCBDdXN0b21MaW5rID0gKHtcclxuICBjbGFzc05hbWUsXHJcbiAgaHJlZixcclxuICBvbkNsaWNrLFxyXG4gIGNoaWxkcmVuLFxyXG4gIHNoYWxsb3csXHJcbn06IEN1c3RvbUxpbmtQcm9wcykgPT4ge1xyXG4gIGlmIChzaGFsbG93ID09PSB1bmRlZmluZWQpIHtcclxuICAgIHNoYWxsb3cgPSBmYWxzZTtcclxuICB9XHJcbiAgcmV0dXJuICg8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZiBzaGFsbG93PXtzaGFsbG93fT5cclxuICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT17Y2xhc3NOYW1lIHx8IFwiXCJ9PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tTGluaztcclxuIiwiaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0N1c3RvbUxpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPGZvb3Rlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nby1mb250XCI+XHJcbiAgICAgICAge0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgIDwvQ3VzdG9tTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cclxuICAgICAgICB7XCIgXCJ9wqkgMjAyMS4gQW4gaW50ZXJhY3RpdmUgbGVhcm5pbmcgcHJvamVjdCBmcm9te1wiIFwifVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoaW5rc3Rlci5pb1wiPlRoaW5rc3RlcjwvYT4uIENvZGUgbGljZW5zZWQgdW5kZXIgTUlULlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWF5YmUgPSAoeyB0ZXN0LCBjaGlsZHJlbiB9KSA9PiA8Pnt0ZXN0ICYmIGNoaWxkcmVufTwvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1heWJlO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IE5hdkxpbmsgPSAoeyBocmVmLCBvbkNsaWNrLCBjaGlsZHJlbiB9OiBOYXZMaW5rUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gcm91dGVyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cclxuICAgICAgPGFcclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoYXNQYXRoKSA9PT0gZW5jb2RlVVJJQ29tcG9uZW50KGhyZWYpICYmICdhY3RpdmUgJyB8fCAnJ1xyXG4gICAgICAgIH1uYXYtbGlua2B9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGluaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0N1c3RvbUltYWdlXCI7XHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9DdXN0b21MaW5rXCI7XHJcbmltcG9ydCBNYXliZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vTWF5YmVcIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL05hdkxpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VEaXNwYXRjaCB9IGZyb20gXCJsaWIvY29udGV4dC9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgZ2V0TG9nZ2VkSW5Vc2VyIGZyb20gXCJsaWIvdXRpbHMvZ2V0TG9nZ2VkSW5Vc2VyXCI7XHJcblxyXG5jb25zdCBOYXZiYXJJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPntjaGlsZHJlbn08L2xpPlxyXG4pXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2V0UGFnZSA9IHVzZVBhZ2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGxvZ2dlZEluVXNlciA9IGdldExvZ2dlZEluVXNlcigpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBzZXRQYWdlKDApLCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAge0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBwdWxsLXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICA8TWF5YmUgdGVzdD17bG9nZ2VkSW5Vc2VyfT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1jb21wb3NlXCIgLz5cclxuICAgICAgICAgICAgICAgICZuYnNwO05ldyBBcnRpY2xlXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1nZWFyLWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7U2V0dGluZ3NcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS8ke2xvZ2dlZEluVXNlcj8udXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLXBpY1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nZ2VkSW5Vc2VyPy5lZmZlY3RpdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwieW91ciBwcm9maWxlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7bG9nZ2VkSW5Vc2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgICA8TWF5YmUgdGVzdD17IWxvZ2dlZEluVXNlcn0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvdXNlci9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3VzZXIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJsZXQgaXNQcm9kdWN0aW9uO1xyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlZfT1ZFUlJJREUgPT09IHVuZGVmaW5lZCkge1xyXG4gIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbidcclxufSBlbHNlIHtcclxuICBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOVl9PVkVSUklERSA9PT0gJ3Byb2R1Y3Rpb24nXHJcbn1cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgYXBpUGF0aDogJy9hcGknLFxyXG4gIGRhdGFiYXNlVXJsOiBwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwgfHwgJycsXHJcbiAgZ29vZ2xlQW5hbHl0aWNzSWQ6ICdVQS00Nzg2NzcwNi0zJyxcclxuICBpc0RlbW86IHByb2Nlc3MuZW52LkNJUk9TQU5USUxMSV9ERU1PID09PSAndHJ1ZScsXHJcbiAgaXNQcm9kdWN0aW9uOiBpc1Byb2R1Y3Rpb24sXHJcbiAgaXNQcm9kdWN0aW9uTmV4dDogcHJvY2Vzcy5lbnYuTk9ERV9FTlZfTkVYVCA9PT0gdW5kZWZpbmVkID9cclxuICAgIChpc1Byb2R1Y3Rpb24pIDpcclxuICAgIChwcm9jZXNzLmVudi5OT0RFX0VOVl9ORVhUID09PSAncHJvZHVjdGlvbicpLFxyXG4gIHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgMzAwMCxcclxuICAvLyBNYWtlcyBkZXBsb3ltZW50IGltcG9zc2libHkgc2xvdyBpZiB0aGVyZSBhcmUgbG90cyBvZiBwYWdlc1xyXG4gIC8vIGxpa2UgaW4gYSByZWFsLXdvcmxkIHByb2R1Y3Rpb24gcHVibGljIHdlYnNpdGUuXHJcbiAgcHJlcmVuZGVyQWxsOiBmYWxzZSxcclxuICByZXZhbGlkYXRlOiAxMCxcclxuICBzZWNyZXQ6IGlzUHJvZHVjdGlvbiA/IHByb2Nlc3MuZW52LlNFQ1JFVCA6ICdzZWNyZXQnLFxyXG4gIHZlcmJvc2U6IHByb2Nlc3MuZW52LlZFUkJPU0UsXHJcbiAgYmxhY2tsaXN0VGFnczogbmV3IFNldChbXHJcbiAgICAnY3lwcmVzcycsXHJcbiAgXSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgdXNlU2Vzc2lvblN0b3JhZ2UgZnJvbSBcImxpYi9ob29rcy91c2VTZXNzaW9uU3RvcmFnZVwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFnZURpc3BhdGNoID0gUmVhY3QuRGlzcGF0Y2g8YW55PjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgUGFnZVN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8bnVtYmVyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgUGFnZURpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8UGFnZURpc3BhdGNoIHwgdW5kZWZpbmVkPihcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhZ2VDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVNlc3Npb25TdG9yYWdlKFwib2Zmc2V0XCIsIDApO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UGFnZX0+XHJcbiAgICAgIDxQYWdlU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYWdlfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUGFnZVN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvUGFnZURpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZVN0YXRlQ29udGV4dCk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VEaXNwYXRjaCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZURpc3BhdGNoQ29udGV4dCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IHR5cGUgUGFnZUNvdW50RGlzcGF0Y2ggPSBSZWFjdC5EaXNwYXRjaDxhbnk+O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBQYWdlQ291bnRTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PG51bWJlciB8IHVuZGVmaW5lZD4oXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYWdlQ291bnREaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFxyXG4gIFBhZ2VDb3VudERpc3BhdGNoIHwgdW5kZWZpbmVkXHJcbj4odW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IFBhZ2VDb3VudENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2VDb3VudCwgc2V0UGFnZUNvdW50XSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8UGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQYWdlQ291bnR9PlxyXG4gICAgICA8UGFnZUNvdW50U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtwYWdlQ291bnR9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QYWdlQ291bnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1BhZ2VDb3VudERpc3BhdGNoQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VDb3VudFN0YXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChQYWdlQ291bnRTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdlQ291bnREaXNwYXRjaCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0KTtcclxuICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlQ291bnRDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBQYWdlQ29udGV4dCBmcm9tIFwiLi9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgUGFnZUNvdW50Q29udGV4dCBmcm9tIFwiLi9QYWdlQ291bnRDb250ZXh0XCI7XHJcblxyXG5jb25zdCBDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXHJcbiAgPFBhZ2VDb250ZXh0PlxyXG4gICAgPFBhZ2VDb3VudENvbnRleHQ+e2NoaWxkcmVufTwvUGFnZUNvdW50Q29udGV4dD5cclxuICA8L1BhZ2VDb250ZXh0PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGV4dFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTZXNzaW9uU3RvcmFnZSA9IChrZXksIGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiAhIWl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcclxuICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xyXG4iLCJjb25zdCBjaGVja0xvZ2luID0gKGxvZ2dlZEluVXNlcikgPT5cclxuICAhIWxvZ2dlZEluVXNlciAmJlxyXG4gIGxvZ2dlZEluVXNlcj8uY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxyXG4gIE9iamVjdC5rZXlzKGxvZ2dlZEluVXNlcikubGVuZ3RoICE9PSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tMb2dpbjtcclxuIiwiaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJ2NvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfQkFTRV9VUkwgPSBhcGlQYXRoO1xyXG5leHBvcnQgY29uc3QgQVBQX05BTUUgPSBgQ29uZHVpdGA7XHJcbmV4cG9ydCBjb25zdCBBUlRJQ0xFX1FVRVJZX01BUCA9IHtcclxuICBcInRhYj1mZWVkXCI6IGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXMvZmVlZGAsXHJcbiAgXCJ0YWI9dGFnXCI6IGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXMvdGFnYFxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9GSUxFX0lNQUdFID0gYGh0dHBzOi8vc3RhdGljLnByb2R1Y3Rpb25yZWFkeS5pby9pbWFnZXMvc21pbGV5LWN5cnVzLmpwZ2A7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xJTUlUID0gMTA7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lNQUdFX1NPVVJDRSA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFQblVsRVFWUjRYdTJkeTVManVBNUVXLy8vby8xKzcvdUdOV0ZmU2FiSUl4R0NBQkN6bVVXRjBjaE1KRkswemFycHo1OC8vNlpwK3ZEdjM3OFBwZjkvQVA5ZCtmcG5YNkNOWXY5YlhCcDFhbndrbnZLY1dlUGxPU2ZUMzc5Ly94MFpvbWppdjRpNGNFbFlGYisyTEtMcGZCYlAxRW9RS1hFMU5qY1pkaWs4cE01WlViWmNXYWxqcFE5Tm5Zc0pNcUw0aFBSb0pvK0c1NHE1blJPRURBZjV4MG1kRk9XYXM1NlVQcVRPU0VsU1RaQWt5Lzh3NTlJcXIyUnE4bFdDRURLSmFVaWRUQkwvNXFORDF0TGFjcDJYUVhxYjdIMDlNWldVT2FYcXRJUi8vTndUTDlId0VKMmIraXpQSUhlOGU1S2laSkpZWG81dmoxaE5SMDFUZGFaN1gyK1pyS3MrVENXYlRwT1hYRnFMcFZWTGtCU2xQaXE5eTZEMzlacjZFQk5Id3pNL0l1OFpwQmRzNyt1dGlVLzZpYlo1bytFNVpmTGZ2My9QMzhVaS8ya012WlUrQ0puRU5LU09CcStrajhUelBuMjdDWkprblgrOGltYnlhSGpJc25ndHJXZUNrQmRKbVliVUdWcVVJRitjakpDTXpRUWh3MHpNRllHc2ttbEgrcXIva0V0cm15QmsyS1ZNUStvTUtVb2xRYXpwUS9yeHZCem5CQ0VneVRDVE9wN0pxcGsxazJUTlRoU2RwNzBFSWNNdVpScFNKNU1rUDNFbmN5STl0NnNFa1M1K2R1TnE5cUZKZWpTVFI4TlRtcnRtZ2xnYjFoRkUyV0tNOHJpaXVZeWs1cmFZSUZMRlNaMW80cE1oaUdieWFIaVdjenNuQ0JHVkRMdG1uY2lpN0dHTHRrdzg0S2ttaUtZcFBKQzEvVFp2cjBsN1g2K3BEMWwrMGZETS9DNFRoSkNRb3R6L2U1MmlMUlBMZUY0R3NkS2tsVDQwbDBXMHpSc0tUeWxCTklkREtwRkNpYkw0Skgya3Q4b3RMc2UzUnl3clRWcnBRM05aUkRONUNEeTFCTkVjamt5UzgyZWJhTXZFRXA3aUlmMWhEQ3ROV3VsRGMxbUUyTHp3TVZHVDExTkwrTmV2WDZadUZKNENVZmoyYTdRaEk3eEVXeVlXOE93bWlEVm5XeUJyYVRxTmZxS1ozQ1dlWjRLUURXWE5OS1FmbDZKMDNnZlJNSy9tdk55SnA1a2daQWhISWF0a05nM3hvcG5jRTU1cG15Q2F3NjVwUGsraVNQR2lZVjdOZWJrRHo1d2dtaUJUL0xwVjgyYmltcDg3VExFNmErNGxpRWZURVBObGt1VE5SREluei9sZkpZaEhVOXk5WWJhRzArZ25tc2t0NDVuUElNUlJsa0hzOVRiUzR3cFpiaHJtSlgyUWVTTjFOUEFVRTRRMEp3VlNxbzRHV2RaNHlhVjEvZVBpS2tISXNLWW8xNHZTNHJoM0dmUytuc3lKNWpLNUVrODFRVFJCU3BGK0pWblNOd3FsK0cwWjZ2RnpUN3lZd3JNOGd4dzVjSm9DSWZEYjZhUGhJZWJ6WkpxNzhMd2VzWktzc2tVODhSTE41Q2J3MUJLRVBQYVlBQ0g0MWVwb2VPN2F2TnZIVWRJSG1UZFNSM0twdlIzU0pZdnZrVVJBV2lUTEFoN0NTelNUMzRybjU4K2ZJdmRCYmdWeHdYMlFhSGpJVXNybCtLNTY4VzFlYis5NmpDaCtKb25TbWZHWklHVElVaFFsVVc3K0MxT1pKUC9YZVRkQmlCbWtUS1ZaSjVyNFJLZG9qNHVxZUxZSklqV3NxaUE2YitDTk9HUkU1MmpMNUF5ZVpvS1E0U0ZrVzZ0emhxeVM2VDNWeWFWMS9HdEMwMTZDU0ExOWluSmNsRndtOWFucFhVcEhYajhuaUpRWlBOWTVRbFpOTms5MWNtbnhwZFZNRUttaFQxRzRLRnV1ckpqUFNoOVNDVXZ3ckJKRXlnd2U2eEN5MHVTMlRYNkZQbk9DU0RtUzFMa0N4RjVOamFHUGhvY3NOdzFlU1I5azNraWRHcDVpZ3BDaVVzMVpxeE5OZk1Kdk5KTkw0bGtsQ0NGVHlqeVNJRnExTklhKzFjUGo1eHA5U09sRDZveUE1MldRR3RnVTMvYXpOeGxtc3Z5aTZTeUNaM2tHdWVQZEV4RVFBamNLYzhqeTc1T1Vsc2piSTFZbXlkcXkwUjRqTWtuS0szbFg1MXFDRURKejg0N3grRVYwanJaTUhuaUtoM1NKQTJWRXNyemNLQ1REVEpaZlB2NysrekQ5K1BGRDVFWmhpcEpKUWt3bk5TZGFkWFlUaElDTnRtRUk2ZEdTY1VTZEQ4M3RNMEhJY0JBeXBlb2NBbkh6RFR6Q1N6UThST2NJeTZTWklFVDhVY2hhRG5rRThVdW1IZWxkVExTMHRnbENobDNLTktRT0FxRndvMUNLbDJoNENDK2VsOG1jSUFUa2lNTk1lUEVzZnMyc21TVC9zZk42RjJ2dkxVd3JHODlLSDhRMHVVd09maGduK0pzeHBmUjUxbGtsaUhUeHN4dEtzdzh5ektTZlRCTC9waWlleWZiT0lOdEVzYkxCcmZSQlRFUE1GdzBQNGNYVE1pa21DQUZKeENkMVBKRTFJaDZpY3pTVHI5NnRmQ1FJSVlFTWgyYWR5S0xzWWN0bG92OFlWMDBRVFZPaytQcmlTejlHUjF4YTg3dFlXMkNlaGpXaUtDMU1udlFoUzlZeW5wZEJyRFJwcFErcHg4Vm9lQWd2TFlQUG55OTQrWEMzbENDRUJMSVpOT3VFRXNYUURVbE5uUzJhNXUwUnkwcVRWdnFRTW5rMFBJU1hFRXVybGlDRUJNME5RL29KSVlyaFQ1WTErTFcwVElxSGRFdlBpSmJJa3VBbEdwN3dTK3Y3OSsrbWJoUktKWkxHcGlQRGtYaDgvN2FVM1FUUkZKOE1VYlROR3cwUG1SZVhTK3VaSUdSSUNRblc2cmdVeGNFTlNVMmQ3MXdtelFTeFpvbzd5U3FacmJlZjN0ZGIwNGYwNDJscFRkc0UwZHdNaEV5cGZqeUpRbmlKaG9mb2ZNY3ltUk9FTkVkRTA2eHpCMW0xb2V6dHAvZjExdlFoL1hndytXNkNhQTQ3SVZPcUh3K2liSHNjNmZvcjBWbHptYXdTaERTbk9jeWtIMDJ5Tk13VkRRK1pGdzFlU1IrbGVXc21DQm5Tcy8vNEhqRWFRMkpabERPOFJNTkQ1azVqVG9vSlFwcXpaZ29Oc2pSNWlZYUh6SXRGazg4SlFwclhIQTdOZml5SzB1b3B6eVJyaHE1Y0p0VUU4V2lLSzhtU3ZvRkgrSTJHaHl5LzFvSjQvRnlObDJXQ2tPYUpxQjdybUJKRjRENUlORHhrN3E0d3plc1I2NHJpMjQxTFFFcVpLL0dVTGVLSkZ4TW1MeVdJMUpCNnJHTkNGTUg3SU5Id2tDVXJ1UVJXaDNUVlp6dUJ4d2h0c3ZZU2tmUWh0U3dreGJlQWgvQnlxOG0vZmZ2V3ZBK1NvdVRqaXVZU0lLWWgvVWpNN1Z1Q1NEVm5yWTRFV1pZU05ob2VNaSszSk1relFiUWNhV25JeklweTRYMlFXNGJzUWp4WHorMXVncERoSWMxWnF4TnQ4MGJEUStaRjFlVGJCQ0ZEbjZMa21ZVE1DUmwyelRwbjVyYVpJTlpBU3ZWemhxeVNMYXpVc2RLSGxENmtqa2FTVEhzSlFweWRvbVNTa0RraHc2NVo1OGpjemdtaTJaeG5zbW9iNndqcFY5YXgwb2VtemxjbVNUTkJpSGxTbEV3U01pZWFwaUg5a0xsZEpRZ3BhZzJrVkQrRXJDczMxYloyYnorOXI1ZmlWYlBPRmZyTUNTSUZJa1hKSlBHNFpHdHpXMHdRanlEVDVQN05LVFYza2tteVNwQWNzanExdFUwaktVcXJsa1pTdDNwNC9GeWpEeW5Ua0RvbFBDK0RqQ1QrV2JLMjMzNzFORVRSaHBrc2N4RjlsbWVRUENoT2hOUHE1aVFGUEExck5EeEhsK1BiSTFZbXlYb2tQQTN6VWZIdnZQRkpFb0RnSVhXNlRGNUxFUEtQRXhEUmhvencwaVdLNEkxQ29zK0llQWd2ajdrdEh0SmJCN0JvNGxPeXZOekFHeEhQWlNiLyt2VnI4MFloK2NkVGxQSmZVb3EyVEtMaGFjM3Rib0lRVTR4R1ZpdFpXMlF2K2JMeTJHbWxEekp2VXZ3ZW10dG5na2o5NDZST2lsS1d5Qk12aDRiczVodUZQZVpySmdncFBncFpGaE9BNkpOTHErUHhkNXNnaE13VXBiNFNSbnFyUFBweW5CTkV5aFRSeVNyaDgvUllSSFNPaG9jczg5cmNUbnNKUXNnay96aXBrNkxrbVlUTWlkUzhIYW16U2hDcEpqTkpPcDU1S3dkYUtYMUluVnhhLzAxeE0wRUltVWNjV1kwekk4TWhoWWZVaWJaTW91RXBKb2lVS2FLUlJYaUp0bm1qNFRtNnRPWUVJUzhpd3lGVlozUlI5aGFMSjE2aUxNZHFna2laSWdwWlIrNkRlQnBtb25NMFBHU1p2ODRnMndHMlFvYVZQZ2laWk1oSW5Xakx4RHVlMXlPV3hqQjZKK3ZNL1FrTlhxWE1TZXBFdzlOY1dzc3pTQ1pKLzQxQ01tUk5VWlQrdUJEcFkzUThxMFA2L015bDhGWnJKa2wrVHFKcHppNlQxeExFR2dnTjgzYVJXVmd1dmN1ZzkvV0pwN3lNS0M5dkNhSnBpbWppRTlLam1Ud2FucmY1Ly9MbGk5cU5RaW56aFJmbGdpUWk1cFhTaDlUeHNoeDNFNFNBbENMZEMxbkxQbnROMnZ0NlRYMkl6dEh3dlBoOUpnZ2hJVVdwVzFsalNLSXRFK3Q0bWdtaWFRcnJaSlg2NnpWRjcrczE5U0ZMTkJ5ZWJZSVFFbEtVVEpJalg3c2g4MkoxT2M0SllzMFVWc21xOWRXN09YdGZUNFpRVStjb2VLYTlCTkVrVTByY0tLSnNqWmgzM05lTWFPcThTaEJycHNna3lVL2NwWmJuMlRyTkJMRm1HdEtQNW9heFltSXJmUkI5eUxCYXdWTk1FQ21RVW5Xc2tDV0ZoOVNKWm5LdmVPWUVJWTRtb2xxcjQxV1Uxa0xJTTRuZW1hU2FJTlpNMFJxY3g4K2ptU0x4bEZWWDQyV1pJTllTUUtvZk5USU4zZU9JdGt6dXd2TjZ4UEkwUkhlUmRlWkdZWnI4NWdUb1hWcWxCSkVTMVZvZFQwdEE2dkUyMmpMUnhyTTZwSHQ3aHRjbWF5OUJwSWFaMUlsbWN2TjRhZ2xpTFFHaytqRXZ5Z1gzUWFJdEV5MDhid2tpTllTYWRiVElzcFN3MFV4dUZzL256NS9kM1NpVU1wOVpVUzc4aTB6UmxzblZlSFlUUkdvSU5ldGNUZGF5dmhWeldlbERTbWR6ZUo0SlFnNklVaVJZcTJOT2xQelZTOFZkZDhjM0NKb0pZbTJZU1QrWkpQa3RZREluSkJTbWJZS1FGMG45NDlicVpKSTQvMUN2OTBQQlJYSy9adlB4Tm05VVUyU1NaSkwwTHVIZEJJbHFHb0lya3lTVDVEa244eGxFK2dJK0djSmVaMjhsdk9NQVZ4b2pLK2F5MG9lVXpuZmhtUk9FZ01qSEZmK1BLeVBxM0R1M3hRU3hsZ0JTL2ZTU0pkV0hacDI3TnU4ZTE3Mzk5TDZlTEltbFBxc0VJUy9PSWNza0lYT2l1UVJJUDJmbnRwb2cxa0JLOVhPV0xNOW5OZTNOMitLNHQ1L2UxeE5Uelhvdnp5QjU4SzMvaFNrMVVTNTRQNzgyc0NPOXdkRXk3dVBuU3o1ZUJrbngvYisxU1JJMm1zNlg0NmtsQ0ltaG80Njg4OW9xd1RQaWtCRmVvdWxNOGJ3OVlsM3V5TUxIK1dmam53enppT0lUWHFMcGZCbWVUNTgraWR3SG9ZNjBjRzJWbUdiRUlTTzhSTk81aFdmM2tINlpJeSs0VGtxR2VVVHhDUy9SZEJiSDgwd1FRbVlPMlJnSCtSRjEzdjFnczNWSUYzZmtoZGRKMCtUbi8rUnhOSjNGOEd3VEpJY3NoMnprejhQZXNEOFNoSmhDekpFSzEwa0puaEVmSXdndjBYVHV4VFB0SlFnaGt3d1pxZE1MUXFvUHFUclI4QkJlV3U4R2JUK2h0djU1MkF2ek1rRkdIT1lSeFI5UjU3TkxxNWtnaE13Y3NueDNTMnBPck5XWlB3YzVFM2RuSFhua0FHaU5yR2lQRVlUZmFEb2Z4VE1uQ0VrQVFxWlVuYU1nZHQvRE52S0dRRFE4Uk9jb3k2U2FJTVFVS2Y0WWoxZlJkS1o0VmdsQ05nTXhqVlFkQ3FLMXJhelVzZEtIbEQ2a1Rrc2I2Kzl1dlF6U0sxN3Y2d25abXVZay9YZ1hQOCtlNEc5YUxzOGdWZy9RMGN3WERVL2taZkwyaU5Vclh1L3JDZG1aSk9lL0RpUEZielNkZC9IVUVrU0tUS2s2dzRoaThGS1oxRkx5OWxoYVBLUkxISnlpRFRNeHVUZnhVK2QzeGQ3bTl1UEhqeUkzQ3FVMkRLa1R6WHpSOEVSYUpyc0pRa0NPT015RWwwd1MvNzljNzdXMG5nbENocDBNaDJhZGFKczNHaDR5TDlhWFNUTkJDRWhpaWhRL1AzRW5jeUkxYjFKMXBtMkN1QVJoNUR0WFlxSUV3ME40c1pva2M0Sm9taUtUSkpORWM5NklPV3Y5N0NhSUp4QzlKT1EzQ09xL2sxaVRYMnRKc2tvUVRWTmtrbVNTYU03YldaTTNFOFFEQ0tzSmNGYVU2SGdJTDFhU3BKZ2dtcWJJSk1razBadzNZczVsUDNPQ0hIMVJ5OTFXaHQ1S0gxTDhSc05EZUduTjJ1UG5WL0pTVFJCTloxOEpjbnZ2NFc3U05Ya2xRNmpaanp1ZGx3bGlqVXlwZnR5SjB2Z0xVOUh3RUozdldtcXZSeXdycEZ2cGc0Z210WG52RXYvTWpVSXBYcnpvL0QvQXlHWldzaUVOU3dBQUFBQkpSVTVFcmtKZ2dnPT1gO1xyXG4iLCJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCBjaGVja0xvZ2luIGZyb20gXCJsaWIvdXRpbHMvY2hlY2tMb2dpblwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwibGliL3V0aWxzL3N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExvZ2dlZEluVXNlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YTogbG9nZ2VkSW5Vc2VyIH0gPSB1c2VTV1IoXCJ1c2VyXCIsIHN0b3JhZ2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGNoZWNrTG9naW4obG9nZ2VkSW5Vc2VyKTtcclxuICAgIGlmIChpc0xvZ2dlZEluKSB7XHJcbiAgICAgIHJldHVybiBsb2dnZWRJblVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERFRkFVTFRfUFJPRklMRV9JTUFHRSB9IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG5jb25zdCBoYW5kbGVCcm9rZW5JbWFnZSA9IGUgPT4ge1xyXG4gIGUudGFyZ2V0LnNyYyA9IERFRkFVTFRfUFJPRklMRV9JTUFHRTtcclxuICBlLnRhcmdldC5vbmVycm9yID0gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUJyb2tlbkltYWdlO1xyXG4iLCJjb25zdCBzdG9yYWdlID0gYXN5bmMga2V5ID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgcmV0dXJuICEhdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBnZXREb21haW5Mb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgY29uc3QgY3VyTG9jYWxlID1cbiAgICBvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgID8gb3B0aW9ucy5sb2NhbGVcbiAgICAgIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcblxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpOiBib29sZWFuIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgIHNoYWxsb3csXG4gICAgbG9jYWxlLFxuICAgIHNjcm9sbCxcbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5hc1BhdGgpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSB1c2VJbnRlcnNlY3Rpb24oe1xuICAgIHJvb3RNYXJnaW46ICcyMDBweCcsXG4gIH0pXG4gIGNvbnN0IHNldFJlZiA9IFJlYWN0LnVzZUNhbGxiYWNrKFxuICAgIChlbDogRWxlbWVudCkgPT4ge1xuICAgICAgc2V0SW50ZXJzZWN0aW9uUmVmKGVsKVxuICAgICAgaWYgKGNoaWxkUmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGRSZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtjaGlsZFJlZiwgc2V0SW50ZXJzZWN0aW9uUmVmXVxuICApXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiBpc0xvY2FsVVJMKGhyZWYpXG4gICAgY29uc3QgY3VyTG9jYWxlID1cbiAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGVcbiAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXVxuICAgIGlmIChzaG91bGRQcmVmZXRjaCAmJiAhaXNQcmVmZXRjaGVkKSB7XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7XG4gICAgICAgIGxvY2FsZTogY3VyTG9jYWxlLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFthcywgaHJlZiwgaXNWaXNpYmxlLCBsb2NhbGUsIHAsIHJvdXRlcl0pXG5cbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiBzZXRSZWYsXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgIH1cbiAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gICAgLy8gd2Ugb25seSByZW5kZXIgZG9tYWluIGxvY2FsZXMgaWYgd2UgYXJlIGN1cnJlbnRseSBvbiBhIGRvbWFpbiBsb2NhbGVcbiAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgIGNvbnN0IGxvY2FsZURvbWFpbiA9XG4gICAgICByb3V0ZXIgJiZcbiAgICAgIHJvdXRlci5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgZ2V0RG9tYWluTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgY3VyTG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZXMsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZG9tYWluTG9jYWxlc1xuICAgICAgKVxuXG4gICAgY2hpbGRQcm9wcy5ocmVmID1cbiAgICAgIGxvY2FsZURvbWFpbiB8fFxuICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGFzLCBjdXJMb2NhbGUsIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZSkpXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBjb25zdCBBbXBTdGF0ZUNvbnRleHQ6IFJlYWN0LkNvbnRleHQ8YW55PiA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIEFtcFN0YXRlQ29udGV4dC5kaXNwbGF5TmFtZSA9ICdBbXBTdGF0ZUNvbnRleHQnXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBBbXBTdGF0ZUNvbnRleHQgfSBmcm9tICcuL2FtcC1jb250ZXh0J1xuXG5leHBvcnQgZnVuY3Rpb24gaXNJbkFtcE1vZGUoe1xuICBhbXBGaXJzdCA9IGZhbHNlLFxuICBoeWJyaWQgPSBmYWxzZSxcbiAgaGFzUXVlcnkgPSBmYWxzZSxcbn0gPSB7fSk6IGJvb2xlYW4ge1xuICByZXR1cm4gYW1wRmlyc3QgfHwgKGh5YnJpZCAmJiBoYXNRdWVyeSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUFtcCgpOiBib29sZWFuIHtcbiAgLy8gRG9uJ3QgYXNzaWduIHRoZSBjb250ZXh0IHZhbHVlIHRvIGEgdmFyaWFibGUgdG8gc2F2ZSBieXRlc1xuICByZXR1cm4gaXNJbkFtcE1vZGUoUmVhY3QudXNlQ29udGV4dChBbXBTdGF0ZUNvbnRleHQpKVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBFZmZlY3QgZnJvbSAnLi9zaWRlLWVmZmVjdCdcbmltcG9ydCB7IEFtcFN0YXRlQ29udGV4dCB9IGZyb20gJy4vYW1wLWNvbnRleHQnXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuL2hlYWQtbWFuYWdlci1jb250ZXh0J1xuaW1wb3J0IHsgaXNJbkFtcE1vZGUgfSBmcm9tICcuL2FtcCdcblxudHlwZSBXaXRoSW5BbXBNb2RlID0ge1xuICBpbkFtcE1vZGU/OiBib29sZWFuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGUgPSBmYWxzZSk6IEpTWC5FbGVtZW50W10ge1xuICBjb25zdCBoZWFkID0gWzxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XVxuICBpZiAoIWluQW1wTW9kZSkge1xuICAgIGhlYWQucHVzaCg8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz4pXG4gIH1cbiAgcmV0dXJuIGhlYWRcbn1cblxuZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChcbiAgbGlzdDogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICBjaGlsZDogUmVhY3QuUmVhY3RDaGlsZFxuKTogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+IHtcbiAgLy8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbiAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGNoaWxkID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiBsaXN0XG4gIH1cbiAgLy8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuICBpZiAoY2hpbGQudHlwZSA9PT0gUmVhY3QuRnJhZ21lbnQpIHtcbiAgICByZXR1cm4gbGlzdC5jb25jYXQoXG4gICAgICBSZWFjdC5DaGlsZHJlbi50b0FycmF5KGNoaWxkLnByb3BzLmNoaWxkcmVuKS5yZWR1Y2UoXG4gICAgICAgIChcbiAgICAgICAgICBmcmFnbWVudExpc3Q6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PixcbiAgICAgICAgICBmcmFnbWVudENoaWxkOiBSZWFjdC5SZWFjdENoaWxkXG4gICAgICAgICk6IEFycmF5PFJlYWN0LlJlYWN0RWxlbWVudDxhbnk+PiA9PiB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgdHlwZW9mIGZyYWdtZW50Q2hpbGQgPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICB0eXBlb2YgZnJhZ21lbnRDaGlsZCA9PT0gJ251bWJlcidcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHJldHVybiBmcmFnbWVudExpc3RcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZClcbiAgICAgICAgfSxcbiAgICAgICAgW11cbiAgICAgIClcbiAgICApXG4gIH1cbiAgcmV0dXJuIGxpc3QuY29uY2F0KGNoaWxkKVxufVxuXG5jb25zdCBNRVRBVFlQRVMgPSBbJ25hbWUnLCAnaHR0cEVxdWl2JywgJ2NoYXJTZXQnLCAnaXRlbVByb3AnXVxuXG4vKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9cbmZ1bmN0aW9uIHVuaXF1ZSgpIHtcbiAgY29uc3Qga2V5cyA9IG5ldyBTZXQoKVxuICBjb25zdCB0YWdzID0gbmV3IFNldCgpXG4gIGNvbnN0IG1ldGFUeXBlcyA9IG5ldyBTZXQoKVxuICBjb25zdCBtZXRhQ2F0ZWdvcmllczogeyBbbWV0YXR5cGU6IHN0cmluZ106IFNldDxzdHJpbmc+IH0gPSB7fVxuXG4gIHJldHVybiAoaDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICBsZXQgaXNVbmlxdWUgPSB0cnVlXG4gICAgbGV0IGhhc0tleSA9IGZhbHNlXG5cbiAgICBpZiAoaC5rZXkgJiYgdHlwZW9mIGgua2V5ICE9PSAnbnVtYmVyJyAmJiBoLmtleS5pbmRleE9mKCckJykgPiAwKSB7XG4gICAgICBoYXNLZXkgPSB0cnVlXG4gICAgICBjb25zdCBrZXkgPSBoLmtleS5zbGljZShoLmtleS5pbmRleE9mKCckJykgKyAxKVxuICAgICAgaWYgKGtleXMuaGFzKGtleSkpIHtcbiAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAga2V5cy5hZGQoa2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWZhdWx0LWNhc2VcbiAgICBzd2l0Y2ggKGgudHlwZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgY2FzZSAnYmFzZSc6XG4gICAgICAgIGlmICh0YWdzLmhhcyhoLnR5cGUpKSB7XG4gICAgICAgICAgaXNVbmlxdWUgPSBmYWxzZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhZ3MuYWRkKGgudHlwZSlcbiAgICAgICAgfVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnbWV0YSc6XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBNRVRBVFlQRVMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCBtZXRhdHlwZSA9IE1FVEFUWVBFU1tpXVxuICAgICAgICAgIGlmICghaC5wcm9wcy5oYXNPd25Qcm9wZXJ0eShtZXRhdHlwZSkpIGNvbnRpbnVlXG5cbiAgICAgICAgICBpZiAobWV0YXR5cGUgPT09ICdjaGFyU2V0Jykge1xuICAgICAgICAgICAgaWYgKG1ldGFUeXBlcy5oYXMobWV0YXR5cGUpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIG1ldGFUeXBlcy5hZGQobWV0YXR5cGUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gaC5wcm9wc1ttZXRhdHlwZV1cbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gfHwgbmV3IFNldCgpXG4gICAgICAgICAgICBpZiAoKG1ldGF0eXBlICE9PSAnbmFtZScgfHwgIWhhc0tleSkgJiYgY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKSB7XG4gICAgICAgICAgICAgIGlzVW5pcXVlID0gZmFsc2VcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNhdGVnb3JpZXMuYWRkKGNhdGVnb3J5KVxuICAgICAgICAgICAgICBtZXRhQ2F0ZWdvcmllc1ttZXRhdHlwZV0gPSBjYXRlZ29yaWVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVW5pcXVlXG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL1xuZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhcbiAgaGVhZEVsZW1lbnRzOiBBcnJheTxSZWFjdC5SZWFjdEVsZW1lbnQ8YW55Pj4sXG4gIHByb3BzOiBXaXRoSW5BbXBNb2RlXG4pIHtcbiAgcmV0dXJuIGhlYWRFbGVtZW50c1xuICAgIC5yZWR1Y2UoXG4gICAgICAobGlzdDogUmVhY3QuUmVhY3RDaGlsZFtdLCBoZWFkRWxlbWVudDogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4pID0+IHtcbiAgICAgICAgY29uc3QgaGVhZEVsZW1lbnRDaGlsZHJlbiA9IFJlYWN0LkNoaWxkcmVuLnRvQXJyYXkoXG4gICAgICAgICAgaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW5cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbGlzdC5jb25jYXQoaGVhZEVsZW1lbnRDaGlsZHJlbilcbiAgICAgIH0sXG4gICAgICBbXVxuICAgIClcbiAgICAucmVkdWNlKG9ubHlSZWFjdEVsZW1lbnQsIFtdKVxuICAgIC5yZXZlcnNlKClcbiAgICAuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpXG4gICAgLmZpbHRlcih1bmlxdWUoKSlcbiAgICAucmV2ZXJzZSgpXG4gICAgLm1hcCgoYzogUmVhY3QuUmVhY3RFbGVtZW50PGFueT4sIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qga2V5ID0gYy5rZXkgfHwgaVxuICAgICAgaWYgKFxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50JyAmJlxuICAgICAgICBwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMgJiZcbiAgICAgICAgIXByb3BzLmluQW1wTW9kZVxuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjLnR5cGUgPT09ICdsaW5rJyAmJlxuICAgICAgICAgIGMucHJvcHNbJ2hyZWYnXSAmJlxuICAgICAgICAgIC8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuICAgICAgICAgIFtcbiAgICAgICAgICAgICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsXG4gICAgICAgICAgICAnaHR0cHM6Ly91c2UudHlwZWtpdC5uZXQvJyxcbiAgICAgICAgICBdLnNvbWUoKHVybCkgPT4gYy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgICAgbmV3UHJvcHNbJ2RhdGEtaHJlZiddID0gbmV3UHJvcHNbJ2hyZWYnXVxuICAgICAgICAgIG5ld1Byb3BzWydocmVmJ10gPSB1bmRlZmluZWRcblxuICAgICAgICAgIC8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3NcbiAgICAgICAgICBuZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXSA9IHRydWVcblxuICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgbmV3UHJvcHMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoYywgeyBrZXkgfSlcbiAgICB9KVxufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovXG5mdW5jdGlvbiBIZWFkKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlIH0pIHtcbiAgY29uc3QgYW1wU3RhdGUgPSB1c2VDb250ZXh0KEFtcFN0YXRlQ29udGV4dClcbiAgY29uc3QgaGVhZE1hbmFnZXIgPSB1c2VDb250ZXh0KEhlYWRNYW5hZ2VyQ29udGV4dClcbiAgcmV0dXJuIChcbiAgICA8RWZmZWN0XG4gICAgICByZWR1Y2VDb21wb25lbnRzVG9TdGF0ZT17cmVkdWNlQ29tcG9uZW50c31cbiAgICAgIGhlYWRNYW5hZ2VyPXtoZWFkTWFuYWdlcn1cbiAgICAgIGluQW1wTW9kZT17aXNJbkFtcE1vZGUoYW1wU3RhdGUpfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0VmZmVjdD5cbiAgKVxufVxuXG4vLyBUT0RPOiBSZW1vdmUgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZVxuSGVhZC5yZXdpbmQgPSAoKSA9PiB7fVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcblxudHlwZSBTdGF0ZSA9IEpTWC5FbGVtZW50W10gfCB1bmRlZmluZWRcblxudHlwZSBTaWRlRWZmZWN0UHJvcHMgPSB7XG4gIHJlZHVjZUNvbXBvbmVudHNUb1N0YXRlOiA8VD4oXG4gICAgY29tcG9uZW50czogQXJyYXk8UmVhY3QuUmVhY3RFbGVtZW50PGFueT4+LFxuICAgIHByb3BzOiBUXG4gICkgPT4gU3RhdGVcbiAgaGFuZGxlU3RhdGVDaGFuZ2U/OiAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkXG4gIGhlYWRNYW5hZ2VyOiBhbnlcbiAgaW5BbXBNb2RlPzogYm9vbGVhblxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudDxTaWRlRWZmZWN0UHJvcHM+IHtcbiAgcHJpdmF0ZSBfaGFzSGVhZE1hbmFnZXI6IGJvb2xlYW5cblxuICBlbWl0Q2hhbmdlID0gKCk6IHZvaWQgPT4ge1xuICAgIGlmICh0aGlzLl9oYXNIZWFkTWFuYWdlcikge1xuICAgICAgdGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKFxuICAgICAgICB0aGlzLnByb3BzLnJlZHVjZUNvbXBvbmVudHNUb1N0YXRlKFxuICAgICAgICAgIFsuLi50aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXNdLFxuICAgICAgICAgIHRoaXMucHJvcHNcbiAgICAgICAgKVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBhbnkpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLl9oYXNIZWFkTWFuYWdlciA9XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyICYmIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc1xuXG4gICAgaWYgKGlzU2VydmVyICYmIHRoaXMuX2hhc0hlYWRNYW5hZ2VyKSB7XG4gICAgICB0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpXG4gICAgICB0aGlzLmVtaXRDaGFuZ2UoKVxuICAgIH1cbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICBpZiAodGhpcy5faGFzSGVhZE1hbmFnZXIpIHtcbiAgICAgIHRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcylcbiAgICB9XG4gICAgdGhpcy5lbWl0Q2hhbmdlKClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBGb290ZXIgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0Zvb3RlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9OYXZiYXJcIjtcclxuaW1wb3J0IHsgZ29vZ2xlQW5hbHl0aWNzSWQsIGlzUHJvZHVjdGlvbiB9IGZyb20gXCJjb25maWdcIjtcclxuaW1wb3J0IENvbnRleHRQcm92aWRlciBmcm9tIFwibGliL2NvbnRleHRcIjtcclxuaW1wb3J0IFwiaW9uaWNvbnMvY3NzL2lvbmljb25zLm1pbi5jc3NcIjtcclxuaW1wb3J0IFwic3R5bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XHJcbiAgaWYgKGlzUHJvZHVjdGlvbikge1xyXG4gICAgLy8gR29vZ2xlIEFuYWx5dGljcyBwYWdlIHN3aXRjaGVzOlxyXG4gICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjA0MTEzNTEvaG93LXRvLXVzZS1nb29nbGUtYW5hbHl0aWNzLXdpdGgtbmV4dC1qcy1hcHAvNjI1NTIyNjMjNjI1NTIyNjNcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgaGFuZGxlUm91dGVDaGFuZ2UgPSAodXJsKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5ndGFnKCdjb25maWcnLCBnb29nbGVBbmFseXRpY3NJZCwge1xyXG4gICAgICAgIHBhZ2VfcGF0aDogdXJsLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICByb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgIHJvdXRlci5ldmVudHMub2ZmKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgaGFuZGxlUm91dGVDaGFuZ2UpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW3JvdXRlci5ldmVudHNdKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBtYXhpbXVtLXNjYWxlPTFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9Db250ZXh0UHJvdmlkZXI+XHJcbiAgICA8Lz5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIga2V5TGlzdCA9IE9iamVjdC5rZXlzO1xudmFyIGhhc1Byb3AgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHJldHVybiB0cnVlO1xuXG4gIGlmIChhICYmIGIgJiYgdHlwZW9mIGEgPT0gJ29iamVjdCcgJiYgdHlwZW9mIGIgPT0gJ29iamVjdCcpIHtcbiAgICB2YXIgYXJyQSA9IGlzQXJyYXkoYSlcbiAgICAgICwgYXJyQiA9IGlzQXJyYXkoYilcbiAgICAgICwgaVxuICAgICAgLCBsZW5ndGhcbiAgICAgICwga2V5O1xuXG4gICAgaWYgKGFyckEgJiYgYXJyQikge1xuICAgICAgbGVuZ3RoID0gYS5sZW5ndGg7XG4gICAgICBpZiAobGVuZ3RoICE9IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICAgIGlmICghZXF1YWwoYVtpXSwgYltpXSkpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChhcnJBICE9IGFyckIpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBkYXRlQSA9IGEgaW5zdGFuY2VvZiBEYXRlXG4gICAgICAsIGRhdGVCID0gYiBpbnN0YW5jZW9mIERhdGU7XG4gICAgaWYgKGRhdGVBICE9IGRhdGVCKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGRhdGVBICYmIGRhdGVCKSByZXR1cm4gYS5nZXRUaW1lKCkgPT0gYi5nZXRUaW1lKCk7XG5cbiAgICB2YXIgcmVnZXhwQSA9IGEgaW5zdGFuY2VvZiBSZWdFeHBcbiAgICAgICwgcmVnZXhwQiA9IGIgaW5zdGFuY2VvZiBSZWdFeHA7XG4gICAgaWYgKHJlZ2V4cEEgIT0gcmVnZXhwQikgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChyZWdleHBBICYmIHJlZ2V4cEIpIHJldHVybiBhLnRvU3RyaW5nKCkgPT0gYi50b1N0cmluZygpO1xuXG4gICAgdmFyIGtleXMgPSBrZXlMaXN0KGEpO1xuICAgIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuXG4gICAgaWYgKGxlbmd0aCAhPT0ga2V5TGlzdChiKS5sZW5ndGgpXG4gICAgICByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspXG4gICAgICBpZiAoIWhhc1Byb3AuY2FsbChiLCBrZXlzW2ldKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgZm9yIChpID0gbGVuZ3RoOyBpLS0gIT09IDA7KSB7XG4gICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgaWYgKCFlcXVhbChhW2tleV0sIGJba2V5XSkpIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19hcHBcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCJwcml2YXRlLW5leHQtcGFnZXMvX2FwcC50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9pb25pY29ucy5taW4uY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMV0hLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls1XS51c2VbMl0hLi9pb25pY29ucy5taW4uY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzFdIS4uLy4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNV0udXNlWzJdIS4vaW9uaWNvbnMubWluLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vc3R5bGUuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbN10udXNlWzRdIS4vc3R5bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsxXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVsyXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzddLnVzZVs0XSEuL3N0eWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ZvbnRzL2lvbmljb25zLmVvdD92PTIuMC4xXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4uL2ZvbnRzL2lvbmljb25zLnR0Zj92PTIuMC4xXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4uL2ZvbnRzL2lvbmljb25zLndvZmY/dj0yLjAuMVwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fIGZyb20gXCIuLi9mb250cy9pb25pY29ucy5zdmc/dj0yLjAuMVwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXywgeyBoYXNoOiBcIiNpZWZpeFwiIH0pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18sIHsgaGFzaDogXCIjSW9uaWNvbnNcIiB9KTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7LyohXFxuICBJb25pY29ucywgdjIuMC4xXFxuICBDcmVhdGVkIGJ5IEJlbiBTcGVycnkgZm9yIHRoZSBJb25pYyBGcmFtZXdvcmssIGh0dHA6Ly9pb25pY29ucy5jb20vXFxuICBodHRwczovL3R3aXR0ZXIuY29tL2JlbmpzcGVycnkgIGh0dHBzOi8vdHdpdHRlci5jb20vaW9uaWNmcmFtZXdvcmtcXG4gIE1JVCBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vZHJpZnR5Y28vaW9uaWNvbnNcXG5cXG4gIEFuZHJvaWQtc3R5bGUgaWNvbnMgb3JpZ2luYWxseSBidWlsdCBieSBHb29nbGXigJlzXFxuICBNYXRlcmlhbCBEZXNpZ24gSWNvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9nb29nbGUvbWF0ZXJpYWwtZGVzaWduLWljb25zXFxuICB1c2VkIHVuZGVyIENDIEJZIGh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL2J5LzQuMC9cXG4gIE1vZGlmaWVkIGljb25zIHRvIGZpdCBpb25pY29u4oCZcyBncmlkIGZyb20gb3JpZ2luYWwuXFxuKi9AZm9udC1mYWNle2ZvbnQtZmFtaWx5OlxcXCJJb25pY29uc1xcXCI7c3JjOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7c3JjOnVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJlbWJlZGRlZC1vcGVudHlwZVxcXCIpLHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpLHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIiksdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbH0uaW9uLC5pb25pY29ucywuaW9uLWFsZXJ0OmJlZm9yZSwuaW9uLWFsZXJ0LWNpcmNsZWQ6YmVmb3JlLC5pb24tYW5kcm9pZC1hZGQ6YmVmb3JlLC5pb24tYW5kcm9pZC1hZGQtY2lyY2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYWxhcm0tY2xvY2s6YmVmb3JlLC5pb24tYW5kcm9pZC1hbGVydDpiZWZvcmUsLmlvbi1hbmRyb2lkLWFwcHM6YmVmb3JlLC5pb24tYW5kcm9pZC1hcmNoaXZlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctYmFjazpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRvd246YmVmb3JlLC5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bjpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duLWNpcmNsZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0OmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQtY2lyY2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0OmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0LWNpcmNsZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cDpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cC1jaXJjbGU6YmVmb3JlLC5pb24tYW5kcm9pZC1hcnJvdy1mb3J3YXJkOmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctdXA6YmVmb3JlLC5pb24tYW5kcm9pZC1hdHRhY2g6YmVmb3JlLC5pb24tYW5kcm9pZC1iYXI6YmVmb3JlLC5pb24tYW5kcm9pZC1iaWN5Y2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYm9hdDpiZWZvcmUsLmlvbi1hbmRyb2lkLWJvb2ttYXJrOmJlZm9yZSwuaW9uLWFuZHJvaWQtYnVsYjpiZWZvcmUsLmlvbi1hbmRyb2lkLWJ1czpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhbGVuZGFyOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2FsbDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhbWVyYTpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhbmNlbDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhcjpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhcnQ6YmVmb3JlLC5pb24tYW5kcm9pZC1jaGF0OmJlZm9yZSwuaW9uLWFuZHJvaWQtY2hlY2tib3g6YmVmb3JlLC5pb24tYW5kcm9pZC1jaGVja2JveC1ibGFuazpiZWZvcmUsLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmU6YmVmb3JlLC5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2hlY2ttYXJrLWNpcmNsZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWNsaXBib2FyZDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNsb3NlOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2xvdWQ6YmVmb3JlLC5pb24tYW5kcm9pZC1jbG91ZC1jaXJjbGU6YmVmb3JlLC5pb24tYW5kcm9pZC1jbG91ZC1kb25lOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2xvdWQtb3V0bGluZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWNvbG9yLXBhbGV0dGU6YmVmb3JlLC5pb24tYW5kcm9pZC1jb21wYXNzOmJlZm9yZSwuaW9uLWFuZHJvaWQtY29udGFjdDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNvbnRhY3RzOmJlZm9yZSwuaW9uLWFuZHJvaWQtY29udHJhY3Q6YmVmb3JlLC5pb24tYW5kcm9pZC1jcmVhdGU6YmVmb3JlLC5pb24tYW5kcm9pZC1kZWxldGU6YmVmb3JlLC5pb24tYW5kcm9pZC1kZXNrdG9wOmJlZm9yZSwuaW9uLWFuZHJvaWQtZG9jdW1lbnQ6YmVmb3JlLC5pb24tYW5kcm9pZC1kb25lOmJlZm9yZSwuaW9uLWFuZHJvaWQtZG9uZS1hbGw6YmVmb3JlLC5pb24tYW5kcm9pZC1kb3dubG9hZDpiZWZvcmUsLmlvbi1hbmRyb2lkLWRyYWZ0czpiZWZvcmUsLmlvbi1hbmRyb2lkLWV4aXQ6YmVmb3JlLC5pb24tYW5kcm9pZC1leHBhbmQ6YmVmb3JlLC5pb24tYW5kcm9pZC1mYXZvcml0ZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWZhdm9yaXRlLW91dGxpbmU6YmVmb3JlLC5pb24tYW5kcm9pZC1maWxtOmJlZm9yZSwuaW9uLWFuZHJvaWQtZm9sZGVyOmJlZm9yZSwuaW9uLWFuZHJvaWQtZm9sZGVyLW9wZW46YmVmb3JlLC5pb24tYW5kcm9pZC1mdW5uZWw6YmVmb3JlLC5pb24tYW5kcm9pZC1nbG9iZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWhhbmQ6YmVmb3JlLC5pb24tYW5kcm9pZC1oYW5nb3V0OmJlZm9yZSwuaW9uLWFuZHJvaWQtaGFwcHk6YmVmb3JlLC5pb24tYW5kcm9pZC1ob21lOmJlZm9yZSwuaW9uLWFuZHJvaWQtaW1hZ2U6YmVmb3JlLC5pb24tYW5kcm9pZC1sYXB0b3A6YmVmb3JlLC5pb24tYW5kcm9pZC1saXN0OmJlZm9yZSwuaW9uLWFuZHJvaWQtbG9jYXRlOmJlZm9yZSwuaW9uLWFuZHJvaWQtbG9jazpiZWZvcmUsLmlvbi1hbmRyb2lkLW1haWw6YmVmb3JlLC5pb24tYW5kcm9pZC1tYXA6YmVmb3JlLC5pb24tYW5kcm9pZC1tZW51OmJlZm9yZSwuaW9uLWFuZHJvaWQtbWljcm9waG9uZTpiZWZvcmUsLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmUtb2ZmOmJlZm9yZSwuaW9uLWFuZHJvaWQtbW9yZS1ob3Jpem9udGFsOmJlZm9yZSwuaW9uLWFuZHJvaWQtbW9yZS12ZXJ0aWNhbDpiZWZvcmUsLmlvbi1hbmRyb2lkLW5hdmlnYXRlOmJlZm9yZSwuaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uczpiZWZvcmUsLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtbm9uZTpiZWZvcmUsLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtb2ZmOmJlZm9yZSwuaW9uLWFuZHJvaWQtb3BlbjpiZWZvcmUsLmlvbi1hbmRyb2lkLW9wdGlvbnM6YmVmb3JlLC5pb24tYW5kcm9pZC1wZW9wbGU6YmVmb3JlLC5pb24tYW5kcm9pZC1wZXJzb246YmVmb3JlLC5pb24tYW5kcm9pZC1wZXJzb24tYWRkOmJlZm9yZSwuaW9uLWFuZHJvaWQtcGhvbmUtbGFuZHNjYXBlOmJlZm9yZSwuaW9uLWFuZHJvaWQtcGhvbmUtcG9ydHJhaXQ6YmVmb3JlLC5pb24tYW5kcm9pZC1waW46YmVmb3JlLC5pb24tYW5kcm9pZC1wbGFuZTpiZWZvcmUsLmlvbi1hbmRyb2lkLXBsYXlzdG9yZTpiZWZvcmUsLmlvbi1hbmRyb2lkLXByaW50OmJlZm9yZSwuaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9mZjpiZWZvcmUsLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vbjpiZWZvcmUsLmlvbi1hbmRyb2lkLXJlZnJlc2g6YmVmb3JlLC5pb24tYW5kcm9pZC1yZW1vdmU6YmVmb3JlLC5pb24tYW5kcm9pZC1yZW1vdmUtY2lyY2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtcmVzdGF1cmFudDpiZWZvcmUsLmlvbi1hbmRyb2lkLXNhZDpiZWZvcmUsLmlvbi1hbmRyb2lkLXNlYXJjaDpiZWZvcmUsLmlvbi1hbmRyb2lkLXNlbmQ6YmVmb3JlLC5pb24tYW5kcm9pZC1zZXR0aW5nczpiZWZvcmUsLmlvbi1hbmRyb2lkLXNoYXJlOmJlZm9yZSwuaW9uLWFuZHJvaWQtc2hhcmUtYWx0OmJlZm9yZSwuaW9uLWFuZHJvaWQtc3RhcjpiZWZvcmUsLmlvbi1hbmRyb2lkLXN0YXItaGFsZjpiZWZvcmUsLmlvbi1hbmRyb2lkLXN0YXItb3V0bGluZTpiZWZvcmUsLmlvbi1hbmRyb2lkLXN0b3B3YXRjaDpiZWZvcmUsLmlvbi1hbmRyb2lkLXN1YndheTpiZWZvcmUsLmlvbi1hbmRyb2lkLXN1bm55OmJlZm9yZSwuaW9uLWFuZHJvaWQtc3luYzpiZWZvcmUsLmlvbi1hbmRyb2lkLXRleHRzbXM6YmVmb3JlLC5pb24tYW5kcm9pZC10aW1lOmJlZm9yZSwuaW9uLWFuZHJvaWQtdHJhaW46YmVmb3JlLC5pb24tYW5kcm9pZC11bmxvY2s6YmVmb3JlLC5pb24tYW5kcm9pZC11cGxvYWQ6YmVmb3JlLC5pb24tYW5kcm9pZC12b2x1bWUtZG93bjpiZWZvcmUsLmlvbi1hbmRyb2lkLXZvbHVtZS1tdXRlOmJlZm9yZSwuaW9uLWFuZHJvaWQtdm9sdW1lLW9mZjpiZWZvcmUsLmlvbi1hbmRyb2lkLXZvbHVtZS11cDpiZWZvcmUsLmlvbi1hbmRyb2lkLXdhbGs6YmVmb3JlLC5pb24tYW5kcm9pZC13YXJuaW5nOmJlZm9yZSwuaW9uLWFuZHJvaWQtd2F0Y2g6YmVmb3JlLC5pb24tYW5kcm9pZC13aWZpOmJlZm9yZSwuaW9uLWFwZXJ0dXJlOmJlZm9yZSwuaW9uLWFyY2hpdmU6YmVmb3JlLC5pb24tYXJyb3ctZG93bi1hOmJlZm9yZSwuaW9uLWFycm93LWRvd24tYjpiZWZvcmUsLmlvbi1hcnJvdy1kb3duLWM6YmVmb3JlLC5pb24tYXJyb3ctZXhwYW5kOmJlZm9yZSwuaW9uLWFycm93LWdyYXBoLWRvd24tbGVmdDpiZWZvcmUsLmlvbi1hcnJvdy1ncmFwaC1kb3duLXJpZ2h0OmJlZm9yZSwuaW9uLWFycm93LWdyYXBoLXVwLWxlZnQ6YmVmb3JlLC5pb24tYXJyb3ctZ3JhcGgtdXAtcmlnaHQ6YmVmb3JlLC5pb24tYXJyb3ctbGVmdC1hOmJlZm9yZSwuaW9uLWFycm93LWxlZnQtYjpiZWZvcmUsLmlvbi1hcnJvdy1sZWZ0LWM6YmVmb3JlLC5pb24tYXJyb3ctbW92ZTpiZWZvcmUsLmlvbi1hcnJvdy1yZXNpemU6YmVmb3JlLC5pb24tYXJyb3ctcmV0dXJuLWxlZnQ6YmVmb3JlLC5pb24tYXJyb3ctcmV0dXJuLXJpZ2h0OmJlZm9yZSwuaW9uLWFycm93LXJpZ2h0LWE6YmVmb3JlLC5pb24tYXJyb3ctcmlnaHQtYjpiZWZvcmUsLmlvbi1hcnJvdy1yaWdodC1jOmJlZm9yZSwuaW9uLWFycm93LXNocmluazpiZWZvcmUsLmlvbi1hcnJvdy1zd2FwOmJlZm9yZSwuaW9uLWFycm93LXVwLWE6YmVmb3JlLC5pb24tYXJyb3ctdXAtYjpiZWZvcmUsLmlvbi1hcnJvdy11cC1jOmJlZm9yZSwuaW9uLWFzdGVyaXNrOmJlZm9yZSwuaW9uLWF0OmJlZm9yZSwuaW9uLWJhY2tzcGFjZTpiZWZvcmUsLmlvbi1iYWNrc3BhY2Utb3V0bGluZTpiZWZvcmUsLmlvbi1iYWc6YmVmb3JlLC5pb24tYmF0dGVyeS1jaGFyZ2luZzpiZWZvcmUsLmlvbi1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSwuaW9uLWJhdHRlcnktZnVsbDpiZWZvcmUsLmlvbi1iYXR0ZXJ5LWhhbGY6YmVmb3JlLC5pb24tYmF0dGVyeS1sb3c6YmVmb3JlLC5pb24tYmVha2VyOmJlZm9yZSwuaW9uLWJlZXI6YmVmb3JlLC5pb24tYmx1ZXRvb3RoOmJlZm9yZSwuaW9uLWJvbmZpcmU6YmVmb3JlLC5pb24tYm9va21hcms6YmVmb3JlLC5pb24tYm93dGllOmJlZm9yZSwuaW9uLWJyaWVmY2FzZTpiZWZvcmUsLmlvbi1idWc6YmVmb3JlLC5pb24tY2FsY3VsYXRvcjpiZWZvcmUsLmlvbi1jYWxlbmRhcjpiZWZvcmUsLmlvbi1jYW1lcmE6YmVmb3JlLC5pb24tY2FyZDpiZWZvcmUsLmlvbi1jYXNoOmJlZm9yZSwuaW9uLWNoYXRib3g6YmVmb3JlLC5pb24tY2hhdGJveC13b3JraW5nOmJlZm9yZSwuaW9uLWNoYXRib3hlczpiZWZvcmUsLmlvbi1jaGF0YnViYmxlOmJlZm9yZSwuaW9uLWNoYXRidWJibGUtd29ya2luZzpiZWZvcmUsLmlvbi1jaGF0YnViYmxlczpiZWZvcmUsLmlvbi1jaGVja21hcms6YmVmb3JlLC5pb24tY2hlY2ttYXJrLWNpcmNsZWQ6YmVmb3JlLC5pb24tY2hlY2ttYXJrLXJvdW5kOmJlZm9yZSwuaW9uLWNoZXZyb24tZG93bjpiZWZvcmUsLmlvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlLC5pb24tY2hldnJvbi1yaWdodDpiZWZvcmUsLmlvbi1jaGV2cm9uLXVwOmJlZm9yZSwuaW9uLWNsaXBib2FyZDpiZWZvcmUsLmlvbi1jbG9jazpiZWZvcmUsLmlvbi1jbG9zZTpiZWZvcmUsLmlvbi1jbG9zZS1jaXJjbGVkOmJlZm9yZSwuaW9uLWNsb3NlLXJvdW5kOmJlZm9yZSwuaW9uLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZSwuaW9uLWNsb3VkOmJlZm9yZSwuaW9uLWNvZGU6YmVmb3JlLC5pb24tY29kZS1kb3dubG9hZDpiZWZvcmUsLmlvbi1jb2RlLXdvcmtpbmc6YmVmb3JlLC5pb24tY29mZmVlOmJlZm9yZSwuaW9uLWNvbXBhc3M6YmVmb3JlLC5pb24tY29tcG9zZTpiZWZvcmUsLmlvbi1jb25uZWN0aW9uLWJhcnM6YmVmb3JlLC5pb24tY29udHJhc3Q6YmVmb3JlLC5pb24tY3JvcDpiZWZvcmUsLmlvbi1jdWJlOmJlZm9yZSwuaW9uLWRpc2M6YmVmb3JlLC5pb24tZG9jdW1lbnQ6YmVmb3JlLC5pb24tZG9jdW1lbnQtdGV4dDpiZWZvcmUsLmlvbi1kcmFnOmJlZm9yZSwuaW9uLWVhcnRoOmJlZm9yZSwuaW9uLWVhc2VsOmJlZm9yZSwuaW9uLWVkaXQ6YmVmb3JlLC5pb24tZWdnOmJlZm9yZSwuaW9uLWVqZWN0OmJlZm9yZSwuaW9uLWVtYWlsOmJlZm9yZSwuaW9uLWVtYWlsLXVucmVhZDpiZWZvcmUsLmlvbi1lcmxlbm1leWVyLWZsYXNrOmJlZm9yZSwuaW9uLWVybGVubWV5ZXItZmxhc2stYnViYmxlczpiZWZvcmUsLmlvbi1leWU6YmVmb3JlLC5pb24tZXllLWRpc2FibGVkOmJlZm9yZSwuaW9uLWZlbWFsZTpiZWZvcmUsLmlvbi1maWxpbmc6YmVmb3JlLC5pb24tZmlsbS1tYXJrZXI6YmVmb3JlLC5pb24tZmlyZWJhbGw6YmVmb3JlLC5pb24tZmxhZzpiZWZvcmUsLmlvbi1mbGFtZTpiZWZvcmUsLmlvbi1mbGFzaDpiZWZvcmUsLmlvbi1mbGFzaC1vZmY6YmVmb3JlLC5pb24tZm9sZGVyOmJlZm9yZSwuaW9uLWZvcms6YmVmb3JlLC5pb24tZm9yay1yZXBvOmJlZm9yZSwuaW9uLWZvcndhcmQ6YmVmb3JlLC5pb24tZnVubmVsOmJlZm9yZSwuaW9uLWdlYXItYTpiZWZvcmUsLmlvbi1nZWFyLWI6YmVmb3JlLC5pb24tZ3JpZDpiZWZvcmUsLmlvbi1oYW1tZXI6YmVmb3JlLC5pb24taGFwcHk6YmVmb3JlLC5pb24taGFwcHktb3V0bGluZTpiZWZvcmUsLmlvbi1oZWFkcGhvbmU6YmVmb3JlLC5pb24taGVhcnQ6YmVmb3JlLC5pb24taGVhcnQtYnJva2VuOmJlZm9yZSwuaW9uLWhlbHA6YmVmb3JlLC5pb24taGVscC1idW95OmJlZm9yZSwuaW9uLWhlbHAtY2lyY2xlZDpiZWZvcmUsLmlvbi1ob21lOmJlZm9yZSwuaW9uLWljZWNyZWFtOmJlZm9yZSwuaW9uLWltYWdlOmJlZm9yZSwuaW9uLWltYWdlczpiZWZvcmUsLmlvbi1pbmZvcm1hdGlvbjpiZWZvcmUsLmlvbi1pbmZvcm1hdGlvbi1jaXJjbGVkOmJlZm9yZSwuaW9uLWlvbmljOmJlZm9yZSwuaW9uLWlvcy1hbGFybTpiZWZvcmUsLmlvbi1pb3MtYWxhcm0tb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYWxidW1zOmJlZm9yZSwuaW9uLWlvcy1hbGJ1bXMtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbDpiZWZvcmUsLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1hbmFseXRpY3M6YmVmb3JlLC5pb24taW9zLWFuYWx5dGljcy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1iYWNrOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1kb3duOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1mb3J3YXJkOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1sZWZ0OmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmUsLmlvbi1pb3MtYXJyb3ctdGhpbi1kb3duOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy10aGluLWxlZnQ6YmVmb3JlLC5pb24taW9zLWFycm93LXRoaW4tcmlnaHQ6YmVmb3JlLC5pb24taW9zLWFycm93LXRoaW4tdXA6YmVmb3JlLC5pb24taW9zLWFycm93LXVwOmJlZm9yZSwuaW9uLWlvcy1hdDpiZWZvcmUsLmlvbi1pb3MtYXQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYmFyY29kZTpiZWZvcmUsLmlvbi1pb3MtYmFyY29kZS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1iYXNlYmFsbDpiZWZvcmUsLmlvbi1pb3MtYmFzZWJhbGwtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYmFza2V0YmFsbDpiZWZvcmUsLmlvbi1pb3MtYmFza2V0YmFsbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1iZWxsOmJlZm9yZSwuaW9uLWlvcy1iZWxsLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJvZHk6YmVmb3JlLC5pb24taW9zLWJvZHktb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYm9sdDpiZWZvcmUsLmlvbi1pb3MtYm9sdC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1ib29rOmJlZm9yZSwuaW9uLWlvcy1ib29rLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJvb2ttYXJrczpiZWZvcmUsLmlvbi1pb3MtYm9va21hcmtzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJveDpiZWZvcmUsLmlvbi1pb3MtYm94LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJyaWVmY2FzZTpiZWZvcmUsLmlvbi1pb3MtYnJpZWZjYXNlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJyb3dzZXJzOmJlZm9yZSwuaW9uLWlvcy1icm93c2Vycy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jYWxjdWxhdG9yOmJlZm9yZSwuaW9uLWlvcy1jYWxjdWxhdG9yLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNhbGVuZGFyOmJlZm9yZSwuaW9uLWlvcy1jYWxlbmRhci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jYW1lcmE6YmVmb3JlLC5pb24taW9zLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jYXJ0OmJlZm9yZSwuaW9uLWlvcy1jYXJ0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNoYXRib3hlczpiZWZvcmUsLmlvbi1pb3MtY2hhdGJveGVzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNoYXRidWJibGU6YmVmb3JlLC5pb24taW9zLWNoYXRidWJibGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY2hlY2ttYXJrOmJlZm9yZSwuaW9uLWlvcy1jaGVja21hcmstZW1wdHk6YmVmb3JlLC5pb24taW9zLWNoZWNrbWFyay1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jaXJjbGUtZmlsbGVkOmJlZm9yZSwuaW9uLWlvcy1jaXJjbGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY2xvY2s6YmVmb3JlLC5pb24taW9zLWNsb2NrLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNsb3NlOmJlZm9yZSwuaW9uLWlvcy1jbG9zZS1lbXB0eTpiZWZvcmUsLmlvbi1pb3MtY2xvc2Utb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY2xvdWQ6YmVmb3JlLC5pb24taW9zLWNsb3VkLWRvd25sb2FkOmJlZm9yZSwuaW9uLWlvcy1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jbG91ZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jbG91ZC11cGxvYWQ6YmVmb3JlLC5pb24taW9zLWNsb3VkLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jbG91ZHk6YmVmb3JlLC5pb24taW9zLWNsb3VkeS1uaWdodDpiZWZvcmUsLmlvbi1pb3MtY2xvdWR5LW5pZ2h0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNsb3VkeS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb2c6YmVmb3JlLC5pb24taW9zLWNvZy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb2xvci1maWx0ZXI6YmVmb3JlLC5pb24taW9zLWNvbG9yLWZpbHRlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb2xvci13YW5kOmJlZm9yZSwuaW9uLWlvcy1jb2xvci13YW5kLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNvbXBvc2U6YmVmb3JlLC5pb24taW9zLWNvbXBvc2Utb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY29udGFjdDpiZWZvcmUsLmlvbi1pb3MtY29udGFjdC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb3B5OmJlZm9yZSwuaW9uLWlvcy1jb3B5LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNyb3A6YmVmb3JlLC5pb24taW9zLWNyb3Atc3Ryb25nOmJlZm9yZSwuaW9uLWlvcy1kb3dubG9hZDpiZWZvcmUsLmlvbi1pb3MtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZHJhZzpiZWZvcmUsLmlvbi1pb3MtZW1haWw6YmVmb3JlLC5pb24taW9zLWVtYWlsLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWV5ZTpiZWZvcmUsLmlvbi1pb3MtZXllLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWZhc3Rmb3J3YXJkOmJlZm9yZSwuaW9uLWlvcy1mYXN0Zm9yd2FyZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1maWxpbmc6YmVmb3JlLC5pb24taW9zLWZpbGluZy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1maWxtOmJlZm9yZSwuaW9uLWlvcy1maWxtLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWZsYWc6YmVmb3JlLC5pb24taW9zLWZsYWctb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZmxhbWU6YmVmb3JlLC5pb24taW9zLWZsYW1lLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWZsYXNrOmJlZm9yZSwuaW9uLWlvcy1mbGFzay1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1mbG93ZXI6YmVmb3JlLC5pb24taW9zLWZsb3dlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1mb2xkZXI6YmVmb3JlLC5pb24taW9zLWZvbGRlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1mb290YmFsbDpiZWZvcmUsLmlvbi1pb3MtZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWE6YmVmb3JlLC5pb24taW9zLWdhbWUtY29udHJvbGxlci1hLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWdhbWUtY29udHJvbGxlci1iOmJlZm9yZSwuaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1nZWFyOmJlZm9yZSwuaW9uLWlvcy1nZWFyLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWdsYXNzZXM6YmVmb3JlLC5pb24taW9zLWdsYXNzZXMtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZ3JpZC12aWV3OmJlZm9yZSwuaW9uLWlvcy1ncmlkLXZpZXctb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtaGVhcnQ6YmVmb3JlLC5pb24taW9zLWhlYXJ0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWhlbHA6YmVmb3JlLC5pb24taW9zLWhlbHAtZW1wdHk6YmVmb3JlLC5pb24taW9zLWhlbHAtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtaG9tZTpiZWZvcmUsLmlvbi1pb3MtaG9tZS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1pbmZpbml0ZTpiZWZvcmUsLmlvbi1pb3MtaW5maW5pdGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtaW5mb3JtYXRpb246YmVmb3JlLC5pb24taW9zLWluZm9ybWF0aW9uLWVtcHR5OmJlZm9yZSwuaW9uLWlvcy1pbmZvcm1hdGlvbi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1pb25pYy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1rZXlwYWQ6YmVmb3JlLC5pb24taW9zLWtleXBhZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1saWdodGJ1bGI6YmVmb3JlLC5pb24taW9zLWxpZ2h0YnVsYi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1saXN0OmJlZm9yZSwuaW9uLWlvcy1saXN0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWxvY2F0aW9uOmJlZm9yZSwuaW9uLWlvcy1sb2NhdGlvbi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1sb2NrZWQ6YmVmb3JlLC5pb24taW9zLWxvY2tlZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1sb29wOmJlZm9yZSwuaW9uLWlvcy1sb29wLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3MtbWVkaWNhbDpiZWZvcmUsLmlvbi1pb3MtbWVkaWNhbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1tZWRraXQ6YmVmb3JlLC5pb24taW9zLW1lZGtpdC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1taWM6YmVmb3JlLC5pb24taW9zLW1pYy1vZmY6YmVmb3JlLC5pb24taW9zLW1pYy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1taW51czpiZWZvcmUsLmlvbi1pb3MtbWludXMtZW1wdHk6YmVmb3JlLC5pb24taW9zLW1pbnVzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLW1vbml0b3I6YmVmb3JlLC5pb24taW9zLW1vbml0b3Itb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtbW9vbjpiZWZvcmUsLmlvbi1pb3MtbW9vbi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1tb3JlOmJlZm9yZSwuaW9uLWlvcy1tb3JlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLW11c2ljYWwtbm90ZTpiZWZvcmUsLmlvbi1pb3MtbXVzaWNhbC1ub3RlczpiZWZvcmUsLmlvbi1pb3MtbmF2aWdhdGU6YmVmb3JlLC5pb24taW9zLW5hdmlnYXRlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLW51dHJpdGlvbjpiZWZvcmUsLmlvbi1pb3MtbnV0cml0aW9uLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXBhcGVyOmJlZm9yZSwuaW9uLWlvcy1wYXBlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1wYXBlcnBsYW5lOmJlZm9yZSwuaW9uLWlvcy1wYXBlcnBsYW5lLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXBhcnRseXN1bm55OmJlZm9yZSwuaW9uLWlvcy1wYXJ0bHlzdW5ueS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1wYXVzZTpiZWZvcmUsLmlvbi1pb3MtcGF1c2Utb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGF3OmJlZm9yZSwuaW9uLWlvcy1wYXctb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGVvcGxlOmJlZm9yZSwuaW9uLWlvcy1wZW9wbGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGVyc29uOmJlZm9yZSwuaW9uLWlvcy1wZXJzb24tb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGVyc29uYWRkOmJlZm9yZSwuaW9uLWlvcy1wZXJzb25hZGQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGhvdG9zOmJlZm9yZSwuaW9uLWlvcy1waG90b3Mtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGllOmJlZm9yZSwuaW9uLWlvcy1waWUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGludDpiZWZvcmUsLmlvbi1pb3MtcGludC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1wbGF5OmJlZm9yZSwuaW9uLWlvcy1wbGF5LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXBsdXM6YmVmb3JlLC5pb24taW9zLXBsdXMtZW1wdHk6YmVmb3JlLC5pb24taW9zLXBsdXMtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcHJpY2V0YWc6YmVmb3JlLC5pb24taW9zLXByaWNldGFnLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXByaWNldGFnczpiZWZvcmUsLmlvbi1pb3MtcHJpY2V0YWdzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXByaW50ZXI6YmVmb3JlLC5pb24taW9zLXByaW50ZXItb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcHVsc2U6YmVmb3JlLC5pb24taW9zLXB1bHNlLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3MtcmFpbnk6YmVmb3JlLC5pb24taW9zLXJhaW55LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXJlY29yZGluZzpiZWZvcmUsLmlvbi1pb3MtcmVjb3JkaW5nLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXJlZG86YmVmb3JlLC5pb24taW9zLXJlZG8tb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcmVmcmVzaDpiZWZvcmUsLmlvbi1pb3MtcmVmcmVzaC1lbXB0eTpiZWZvcmUsLmlvbi1pb3MtcmVmcmVzaC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1yZWxvYWQ6YmVmb3JlLC5pb24taW9zLXJldmVyc2UtY2FtZXJhOmJlZm9yZSwuaW9uLWlvcy1yZXZlcnNlLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1yZXdpbmQ6YmVmb3JlLC5pb24taW9zLXJld2luZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1yb3NlOmJlZm9yZSwuaW9uLWlvcy1yb3NlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXNlYXJjaDpiZWZvcmUsLmlvbi1pb3Mtc2VhcmNoLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3Mtc2V0dGluZ3M6YmVmb3JlLC5pb24taW9zLXNldHRpbmdzLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3Mtc2h1ZmZsZTpiZWZvcmUsLmlvbi1pb3Mtc2h1ZmZsZS1zdHJvbmc6YmVmb3JlLC5pb24taW9zLXNraXBiYWNrd2FyZDpiZWZvcmUsLmlvbi1pb3Mtc2tpcGJhY2t3YXJkLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXNraXBmb3J3YXJkOmJlZm9yZSwuaW9uLWlvcy1za2lwZm9yd2FyZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1zbm93eTpiZWZvcmUsLmlvbi1pb3Mtc3BlZWRvbWV0ZXI6YmVmb3JlLC5pb24taW9zLXNwZWVkb21ldGVyLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXN0YXI6YmVmb3JlLC5pb24taW9zLXN0YXItaGFsZjpiZWZvcmUsLmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1zdG9wd2F0Y2g6YmVmb3JlLC5pb24taW9zLXN0b3B3YXRjaC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1zdW5ueTpiZWZvcmUsLmlvbi1pb3Mtc3Vubnktb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdGVsZXBob25lOmJlZm9yZSwuaW9uLWlvcy10ZWxlcGhvbmUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdGVubmlzYmFsbDpiZWZvcmUsLmlvbi1pb3MtdGVubmlzYmFsbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10aHVuZGVyc3Rvcm06YmVmb3JlLC5pb24taW9zLXRodW5kZXJzdG9ybS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10aW1lOmJlZm9yZSwuaW9uLWlvcy10aW1lLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXRpbWVyOmJlZm9yZSwuaW9uLWlvcy10aW1lci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10b2dnbGU6YmVmb3JlLC5pb24taW9zLXRvZ2dsZS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10cmFzaDpiZWZvcmUsLmlvbi1pb3MtdHJhc2gtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdW5kbzpiZWZvcmUsLmlvbi1pb3MtdW5kby1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy11bmxvY2tlZDpiZWZvcmUsLmlvbi1pb3MtdW5sb2NrZWQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdXBsb2FkOmJlZm9yZSwuaW9uLWlvcy11cGxvYWQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdmlkZW9jYW06YmVmb3JlLC5pb24taW9zLXZpZGVvY2FtLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXZvbHVtZS1oaWdoOmJlZm9yZSwuaW9uLWlvcy12b2x1bWUtbG93OmJlZm9yZSwuaW9uLWlvcy13aW5lZ2xhc3M6YmVmb3JlLC5pb24taW9zLXdpbmVnbGFzcy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy13b3JsZDpiZWZvcmUsLmlvbi1pb3Mtd29ybGQtb3V0bGluZTpiZWZvcmUsLmlvbi1pcGFkOmJlZm9yZSwuaW9uLWlwaG9uZTpiZWZvcmUsLmlvbi1pcG9kOmJlZm9yZSwuaW9uLWpldDpiZWZvcmUsLmlvbi1rZXk6YmVmb3JlLC5pb24ta25pZmU6YmVmb3JlLC5pb24tbGFwdG9wOmJlZm9yZSwuaW9uLWxlYWY6YmVmb3JlLC5pb24tbGV2ZWxzOmJlZm9yZSwuaW9uLWxpZ2h0YnVsYjpiZWZvcmUsLmlvbi1saW5rOmJlZm9yZSwuaW9uLWxvYWQtYTpiZWZvcmUsLmlvbi1sb2FkLWI6YmVmb3JlLC5pb24tbG9hZC1jOmJlZm9yZSwuaW9uLWxvYWQtZDpiZWZvcmUsLmlvbi1sb2NhdGlvbjpiZWZvcmUsLmlvbi1sb2NrLWNvbWJpbmF0aW9uOmJlZm9yZSwuaW9uLWxvY2tlZDpiZWZvcmUsLmlvbi1sb2ctaW46YmVmb3JlLC5pb24tbG9nLW91dDpiZWZvcmUsLmlvbi1sb29wOmJlZm9yZSwuaW9uLW1hZ25ldDpiZWZvcmUsLmlvbi1tYWxlOmJlZm9yZSwuaW9uLW1hbjpiZWZvcmUsLmlvbi1tYXA6YmVmb3JlLC5pb24tbWVka2l0OmJlZm9yZSwuaW9uLW1lcmdlOmJlZm9yZSwuaW9uLW1pYy1hOmJlZm9yZSwuaW9uLW1pYy1iOmJlZm9yZSwuaW9uLW1pYy1jOmJlZm9yZSwuaW9uLW1pbnVzOmJlZm9yZSwuaW9uLW1pbnVzLWNpcmNsZWQ6YmVmb3JlLC5pb24tbWludXMtcm91bmQ6YmVmb3JlLC5pb24tbW9kZWwtczpiZWZvcmUsLmlvbi1tb25pdG9yOmJlZm9yZSwuaW9uLW1vcmU6YmVmb3JlLC5pb24tbW91c2U6YmVmb3JlLC5pb24tbXVzaWMtbm90ZTpiZWZvcmUsLmlvbi1uYXZpY29uOmJlZm9yZSwuaW9uLW5hdmljb24tcm91bmQ6YmVmb3JlLC5pb24tbmF2aWdhdGU6YmVmb3JlLC5pb24tbmV0d29yazpiZWZvcmUsLmlvbi1uby1zbW9raW5nOmJlZm9yZSwuaW9uLW51Y2xlYXI6YmVmb3JlLC5pb24tb3V0bGV0OmJlZm9yZSwuaW9uLXBhaW50YnJ1c2g6YmVmb3JlLC5pb24tcGFpbnRidWNrZXQ6YmVmb3JlLC5pb24tcGFwZXItYWlycGxhbmU6YmVmb3JlLC5pb24tcGFwZXJjbGlwOmJlZm9yZSwuaW9uLXBhdXNlOmJlZm9yZSwuaW9uLXBlcnNvbjpiZWZvcmUsLmlvbi1wZXJzb24tYWRkOmJlZm9yZSwuaW9uLXBlcnNvbi1zdGFsa2VyOmJlZm9yZSwuaW9uLXBpZS1ncmFwaDpiZWZvcmUsLmlvbi1waW46YmVmb3JlLC5pb24tcGlucG9pbnQ6YmVmb3JlLC5pb24tcGl6emE6YmVmb3JlLC5pb24tcGxhbmU6YmVmb3JlLC5pb24tcGxhbmV0OmJlZm9yZSwuaW9uLXBsYXk6YmVmb3JlLC5pb24tcGxheXN0YXRpb246YmVmb3JlLC5pb24tcGx1czpiZWZvcmUsLmlvbi1wbHVzLWNpcmNsZWQ6YmVmb3JlLC5pb24tcGx1cy1yb3VuZDpiZWZvcmUsLmlvbi1wb2RpdW06YmVmb3JlLC5pb24tcG91bmQ6YmVmb3JlLC5pb24tcG93ZXI6YmVmb3JlLC5pb24tcHJpY2V0YWc6YmVmb3JlLC5pb24tcHJpY2V0YWdzOmJlZm9yZSwuaW9uLXByaW50ZXI6YmVmb3JlLC5pb24tcHVsbC1yZXF1ZXN0OmJlZm9yZSwuaW9uLXFyLXNjYW5uZXI6YmVmb3JlLC5pb24tcXVvdGU6YmVmb3JlLC5pb24tcmFkaW8td2F2ZXM6YmVmb3JlLC5pb24tcmVjb3JkOmJlZm9yZSwuaW9uLXJlZnJlc2g6YmVmb3JlLC5pb24tcmVwbHk6YmVmb3JlLC5pb24tcmVwbHktYWxsOmJlZm9yZSwuaW9uLXJpYmJvbi1hOmJlZm9yZSwuaW9uLXJpYmJvbi1iOmJlZm9yZSwuaW9uLXNhZDpiZWZvcmUsLmlvbi1zYWQtb3V0bGluZTpiZWZvcmUsLmlvbi1zY2lzc29yczpiZWZvcmUsLmlvbi1zZWFyY2g6YmVmb3JlLC5pb24tc2V0dGluZ3M6YmVmb3JlLC5pb24tc2hhcmU6YmVmb3JlLC5pb24tc2h1ZmZsZTpiZWZvcmUsLmlvbi1za2lwLWJhY2t3YXJkOmJlZm9yZSwuaW9uLXNraXAtZm9yd2FyZDpiZWZvcmUsLmlvbi1zb2NpYWwtYW5kcm9pZDpiZWZvcmUsLmlvbi1zb2NpYWwtYW5kcm9pZC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1hbmd1bGFyOmJlZm9yZSwuaW9uLXNvY2lhbC1hbmd1bGFyLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWFwcGxlOmJlZm9yZSwuaW9uLXNvY2lhbC1hcHBsZS1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1iaXRjb2luOmJlZm9yZSwuaW9uLXNvY2lhbC1iaXRjb2luLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWJ1ZmZlcjpiZWZvcmUsLmlvbi1zb2NpYWwtYnVmZmVyLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWNocm9tZTpiZWZvcmUsLmlvbi1zb2NpYWwtY2hyb21lLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWNvZGVwZW46YmVmb3JlLC5pb24tc29jaWFsLWNvZGVwZW4tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtY3NzMzpiZWZvcmUsLmlvbi1zb2NpYWwtY3NzMy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3M6YmVmb3JlLC5pb24tc29jaWFsLWRlc2lnbmVybmV3cy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1kcmliYmJsZTpiZWZvcmUsLmlvbi1zb2NpYWwtZHJpYmJibGUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtZHJvcGJveDpiZWZvcmUsLmlvbi1zb2NpYWwtZHJvcGJveC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1ldXJvOmJlZm9yZSwuaW9uLXNvY2lhbC1ldXJvLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWZhY2Vib29rOmJlZm9yZSwuaW9uLXNvY2lhbC1mYWNlYm9vay1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1mb3Vyc3F1YXJlOmJlZm9yZSwuaW9uLXNvY2lhbC1mb3Vyc3F1YXJlLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWZyZWVic2QtZGV2aWw6YmVmb3JlLC5pb24tc29jaWFsLWdpdGh1YjpiZWZvcmUsLmlvbi1zb2NpYWwtZ2l0aHViLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWdvb2dsZTpiZWZvcmUsLmlvbi1zb2NpYWwtZ29vZ2xlLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWdvb2dsZXBsdXM6YmVmb3JlLC5pb24tc29jaWFsLWdvb2dsZXBsdXMtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtaGFja2VybmV3czpiZWZvcmUsLmlvbi1zb2NpYWwtaGFja2VybmV3cy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1odG1sNTpiZWZvcmUsLmlvbi1zb2NpYWwtaHRtbDUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtaW5zdGFncmFtOmJlZm9yZSwuaW9uLXNvY2lhbC1pbnN0YWdyYW0tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtamF2YXNjcmlwdDpiZWZvcmUsLmlvbi1zb2NpYWwtamF2YXNjcmlwdC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1saW5rZWRpbjpiZWZvcmUsLmlvbi1zb2NpYWwtbGlua2VkaW4tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtbWFya2Rvd246YmVmb3JlLC5pb24tc29jaWFsLW5vZGVqczpiZWZvcmUsLmlvbi1zb2NpYWwtb2N0b2NhdDpiZWZvcmUsLmlvbi1zb2NpYWwtcGludGVyZXN0OmJlZm9yZSwuaW9uLXNvY2lhbC1waW50ZXJlc3Qtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtcHl0aG9uOmJlZm9yZSwuaW9uLXNvY2lhbC1yZWRkaXQ6YmVmb3JlLC5pb24tc29jaWFsLXJlZGRpdC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1yc3M6YmVmb3JlLC5pb24tc29jaWFsLXJzcy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1zYXNzOmJlZm9yZSwuaW9uLXNvY2lhbC1za3lwZTpiZWZvcmUsLmlvbi1zb2NpYWwtc2t5cGUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtc25hcGNoYXQ6YmVmb3JlLC5pb24tc29jaWFsLXNuYXBjaGF0LW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXR1bWJscjpiZWZvcmUsLmlvbi1zb2NpYWwtdHVtYmxyLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXR1eDpiZWZvcmUsLmlvbi1zb2NpYWwtdHdpdGNoOmJlZm9yZSwuaW9uLXNvY2lhbC10d2l0Y2gtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtdHdpdHRlcjpiZWZvcmUsLmlvbi1zb2NpYWwtdHdpdHRlci1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC11c2Q6YmVmb3JlLC5pb24tc29jaWFsLXVzZC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC12aW1lbzpiZWZvcmUsLmlvbi1zb2NpYWwtdmltZW8tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtd2hhdHNhcHA6YmVmb3JlLC5pb24tc29jaWFsLXdoYXRzYXBwLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXdpbmRvd3M6YmVmb3JlLC5pb24tc29jaWFsLXdpbmRvd3Mtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtd29yZHByZXNzOmJlZm9yZSwuaW9uLXNvY2lhbC13b3JkcHJlc3Mtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwteWFob286YmVmb3JlLC5pb24tc29jaWFsLXlhaG9vLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXllbjpiZWZvcmUsLmlvbi1zb2NpYWwteWVuLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXlvdXR1YmU6YmVmb3JlLC5pb24tc29jaWFsLXlvdXR1YmUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb3VwLWNhbjpiZWZvcmUsLmlvbi1zb3VwLWNhbi1vdXRsaW5lOmJlZm9yZSwuaW9uLXNwZWFrZXJwaG9uZTpiZWZvcmUsLmlvbi1zcGVlZG9tZXRlcjpiZWZvcmUsLmlvbi1zcG9vbjpiZWZvcmUsLmlvbi1zdGFyOmJlZm9yZSwuaW9uLXN0YXRzLWJhcnM6YmVmb3JlLC5pb24tc3RlYW06YmVmb3JlLC5pb24tc3RvcDpiZWZvcmUsLmlvbi10aGVybW9tZXRlcjpiZWZvcmUsLmlvbi10aHVtYnNkb3duOmJlZm9yZSwuaW9uLXRodW1ic3VwOmJlZm9yZSwuaW9uLXRvZ2dsZTpiZWZvcmUsLmlvbi10b2dnbGUtZmlsbGVkOmJlZm9yZSwuaW9uLXRyYW5zZ2VuZGVyOmJlZm9yZSwuaW9uLXRyYXNoLWE6YmVmb3JlLC5pb24tdHJhc2gtYjpiZWZvcmUsLmlvbi10cm9waHk6YmVmb3JlLC5pb24tdHNoaXJ0OmJlZm9yZSwuaW9uLXRzaGlydC1vdXRsaW5lOmJlZm9yZSwuaW9uLXVtYnJlbGxhOmJlZm9yZSwuaW9uLXVuaXZlcnNpdHk6YmVmb3JlLC5pb24tdW5sb2NrZWQ6YmVmb3JlLC5pb24tdXBsb2FkOmJlZm9yZSwuaW9uLXVzYjpiZWZvcmUsLmlvbi12aWRlb2NhbWVyYTpiZWZvcmUsLmlvbi12b2x1bWUtaGlnaDpiZWZvcmUsLmlvbi12b2x1bWUtbG93OmJlZm9yZSwuaW9uLXZvbHVtZS1tZWRpdW06YmVmb3JlLC5pb24tdm9sdW1lLW11dGU6YmVmb3JlLC5pb24td2FuZDpiZWZvcmUsLmlvbi13YXRlcmRyb3A6YmVmb3JlLC5pb24td2lmaTpiZWZvcmUsLmlvbi13aW5lZ2xhc3M6YmVmb3JlLC5pb24td29tYW46YmVmb3JlLC5pb24td3JlbmNoOmJlZm9yZSwuaW9uLXhib3g6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5OlxcXCJJb25pY29uc1xcXCI7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7LXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsOy1tb3otZm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDtmb250LWZlYXR1cmUtc2V0dGluZ3M6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7dGV4dC10cmFuc2Zvcm06bm9uZTt0ZXh0LXJlbmRlcmluZzphdXRvO2xpbmUtaGVpZ2h0OjE7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDstbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGV9Lmlvbi1hbGVydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDFcXFwifS5pb24tYWxlcnQtY2lyY2xlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDBcXFwifS5pb24tYW5kcm9pZC1hZGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmM3XFxcIn0uaW9uLWFuZHJvaWQtYWRkLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTlcXFwifS5pb24tYW5kcm9pZC1hbGFybS1jbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNWFcXFwifS5pb24tYW5kcm9pZC1hbGVydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNWJcXFwifS5pb24tYW5kcm9pZC1hcHBzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1Y1xcXCJ9Lmlvbi1hbmRyb2lkLWFyY2hpdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmM5XFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctYmFjazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyY2FcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1ZFxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1ZlxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNWVcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjFcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1kcm9wbGVmdC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzYwXFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2M1xcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRyb3ByaWdodC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzYyXFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2NVxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzY0XFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMGZcXFwifS5pb24tYW5kcm9pZC1hcnJvdy11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjZcXFwifS5pb24tYW5kcm9pZC1hdHRhY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzY3XFxcIn0uaW9uLWFuZHJvaWQtYmFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2OFxcXCJ9Lmlvbi1hbmRyb2lkLWJpY3ljbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzY5XFxcIn0uaW9uLWFuZHJvaWQtYm9hdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNmFcXFwifS5pb24tYW5kcm9pZC1ib29rbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNmJcXFwifS5pb24tYW5kcm9pZC1idWxiOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2Y1xcXCJ9Lmlvbi1hbmRyb2lkLWJ1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNmRcXFwifS5pb24tYW5kcm9pZC1jYWxlbmRhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZDFcXFwifS5pb24tYW5kcm9pZC1jYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkMlxcXCJ9Lmlvbi1hbmRyb2lkLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZDNcXFwifS5pb24tYW5kcm9pZC1jYW5jZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzZlXFxcIn0uaW9uLWFuZHJvaWQtY2FyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2ZlxcXCJ9Lmlvbi1hbmRyb2lkLWNhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzcwXFxcIn0uaW9uLWFuZHJvaWQtY2hhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZDRcXFwifS5pb24tYW5kcm9pZC1jaGVja2JveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzRcXFwifS5pb24tYW5kcm9pZC1jaGVja2JveC1ibGFuazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzFcXFwifS5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3M1xcXCJ9Lmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmUtYmxhbms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzcyXFxcIn0uaW9uLWFuZHJvaWQtY2hlY2ttYXJrLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzVcXFwifS5pb24tYW5kcm9pZC1jbGlwYm9hcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzc2XFxcIn0uaW9uLWFuZHJvaWQtY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmQ3XFxcIn0uaW9uLWFuZHJvaWQtY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzdhXFxcIn0uaW9uLWFuZHJvaWQtY2xvdWQtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3N1xcXCJ9Lmlvbi1hbmRyb2lkLWNsb3VkLWRvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzc4XFxcIn0uaW9uLWFuZHJvaWQtY2xvdWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzlcXFwifS5pb24tYW5kcm9pZC1jb2xvci1wYWxldHRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3YlxcXCJ9Lmlvbi1hbmRyb2lkLWNvbXBhc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzdjXFxcIn0uaW9uLWFuZHJvaWQtY29udGFjdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZDhcXFwifS5pb24tYW5kcm9pZC1jb250YWN0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZDlcXFwifS5pb24tYW5kcm9pZC1jb250cmFjdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzN2RcXFwifS5pb24tYW5kcm9pZC1jcmVhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzdlXFxcIn0uaW9uLWFuZHJvaWQtZGVsZXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3ZlxcXCJ9Lmlvbi1hbmRyb2lkLWRlc2t0b3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzgwXFxcIn0uaW9uLWFuZHJvaWQtZG9jdW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzgxXFxcIn0uaW9uLWFuZHJvaWQtZG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODNcXFwifS5pb24tYW5kcm9pZC1kb25lLWFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODJcXFwifS5pb24tYW5kcm9pZC1kb3dubG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZGRcXFwifS5pb24tYW5kcm9pZC1kcmFmdHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzg0XFxcIn0uaW9uLWFuZHJvaWQtZXhpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODVcXFwifS5pb24tYW5kcm9pZC1leHBhbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzg2XFxcIn0uaW9uLWFuZHJvaWQtZmF2b3JpdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzg4XFxcIn0uaW9uLWFuZHJvaWQtZmF2b3JpdGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODdcXFwifS5pb24tYW5kcm9pZC1maWxtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4OVxcXCJ9Lmlvbi1hbmRyb2lkLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZTBcXFwifS5pb24tYW5kcm9pZC1mb2xkZXItb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOGFcXFwifS5pb24tYW5kcm9pZC1mdW5uZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzhiXFxcIn0uaW9uLWFuZHJvaWQtZ2xvYmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzhjXFxcIn0uaW9uLWFuZHJvaWQtaGFuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZTNcXFwifS5pb24tYW5kcm9pZC1oYW5nb3V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4ZFxcXCJ9Lmlvbi1hbmRyb2lkLWhhcHB5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4ZVxcXCJ9Lmlvbi1hbmRyb2lkLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzhmXFxcIn0uaW9uLWFuZHJvaWQtaW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmU0XFxcIn0uaW9uLWFuZHJvaWQtbGFwdG9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5MFxcXCJ9Lmlvbi1hbmRyb2lkLWxpc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzkxXFxcIn0uaW9uLWFuZHJvaWQtbG9jYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJlOVxcXCJ9Lmlvbi1hbmRyb2lkLWxvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzkyXFxcIn0uaW9uLWFuZHJvaWQtbWFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZWJcXFwifS5pb24tYW5kcm9pZC1tYXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzkzXFxcIn0uaW9uLWFuZHJvaWQtbWVudTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOTRcXFwifS5pb24tYW5kcm9pZC1taWNyb3Bob25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJlY1xcXCJ9Lmlvbi1hbmRyb2lkLW1pY3JvcGhvbmUtb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5NVxcXCJ9Lmlvbi1hbmRyb2lkLW1vcmUtaG9yaXpvbnRhbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOTZcXFwifS5pb24tYW5kcm9pZC1tb3JlLXZlcnRpY2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5N1xcXCJ9Lmlvbi1hbmRyb2lkLW5hdmlnYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5OFxcXCJ9Lmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzliXFxcIn0uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1ub25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5OVxcXCJ9Lmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5YVxcXCJ9Lmlvbi1hbmRyb2lkLW9wZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzljXFxcIn0uaW9uLWFuZHJvaWQtb3B0aW9uczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOWRcXFwifS5pb24tYW5kcm9pZC1wZW9wbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzllXFxcIn0uaW9uLWFuZHJvaWQtcGVyc29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhMFxcXCJ9Lmlvbi1hbmRyb2lkLXBlcnNvbi1hZGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzlmXFxcIn0uaW9uLWFuZHJvaWQtcGhvbmUtbGFuZHNjYXBlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhMVxcXCJ9Lmlvbi1hbmRyb2lkLXBob25lLXBvcnRyYWl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhMlxcXCJ9Lmlvbi1hbmRyb2lkLXBpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYTNcXFwifS5pb24tYW5kcm9pZC1wbGFuZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYTRcXFwifS5pb24tYW5kcm9pZC1wbGF5c3RvcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmYwXFxcIn0uaW9uLWFuZHJvaWQtcHJpbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2E1XFxcIn0uaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9mZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYTZcXFwifS5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2E3XFxcIn0uaW9uLWFuZHJvaWQtcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYThcXFwifS5pb24tYW5kcm9pZC1yZW1vdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmY0XFxcIn0uaW9uLWFuZHJvaWQtcmVtb3ZlLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYTlcXFwifS5pb24tYW5kcm9pZC1yZXN0YXVyYW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhYVxcXCJ9Lmlvbi1hbmRyb2lkLXNhZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYWJcXFwifS5pb24tYW5kcm9pZC1zZWFyY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmY1XFxcIn0uaW9uLWFuZHJvaWQtc2VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZjZcXFwifS5pb24tYW5kcm9pZC1zZXR0aW5nczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZjdcXFwifS5pb24tYW5kcm9pZC1zaGFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZjhcXFwifS5pb24tYW5kcm9pZC1zaGFyZS1hbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2FjXFxcIn0uaW9uLWFuZHJvaWQtc3RhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZmNcXFwifS5pb24tYW5kcm9pZC1zdGFyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2FkXFxcIn0uaW9uLWFuZHJvaWQtc3Rhci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhZVxcXCJ9Lmlvbi1hbmRyb2lkLXN0b3B3YXRjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZmRcXFwifS5pb24tYW5kcm9pZC1zdWJ3YXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2FmXFxcIn0uaW9uLWFuZHJvaWQtc3Vubnk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2IwXFxcIn0uaW9uLWFuZHJvaWQtc3luYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjFcXFwifS5pb24tYW5kcm9pZC10ZXh0c21zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiMlxcXCJ9Lmlvbi1hbmRyb2lkLXRpbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2IzXFxcIn0uaW9uLWFuZHJvaWQtdHJhaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2I0XFxcIn0uaW9uLWFuZHJvaWQtdW5sb2NrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiNVxcXCJ9Lmlvbi1hbmRyb2lkLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjZcXFwifS5pb24tYW5kcm9pZC12b2x1bWUtZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjdcXFwifS5pb24tYW5kcm9pZC12b2x1bWUtbXV0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjhcXFwifS5pb24tYW5kcm9pZC12b2x1bWUtb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiOVxcXCJ9Lmlvbi1hbmRyb2lkLXZvbHVtZS11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYmFcXFwifS5pb24tYW5kcm9pZC13YWxrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiYlxcXCJ9Lmlvbi1hbmRyb2lkLXdhcm5pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2JjXFxcIn0uaW9uLWFuZHJvaWQtd2F0Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2JkXFxcIn0uaW9uLWFuZHJvaWQtd2lmaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMDVcXFwifS5pb24tYXBlcnR1cmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzEzXFxcIn0uaW9uLWFyY2hpdmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTAyXFxcIn0uaW9uLWFycm93LWRvd24tYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDNcXFwifS5pb24tYXJyb3ctZG93bi1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwNFxcXCJ9Lmlvbi1hcnJvdy1kb3duLWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTA1XFxcIn0uaW9uLWFycm93LWV4cGFuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNWVcXFwifS5pb24tYXJyb3ctZ3JhcGgtZG93bi1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1ZlxcXCJ9Lmlvbi1hcnJvdy1ncmFwaC1kb3duLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2MFxcXCJ9Lmlvbi1hcnJvdy1ncmFwaC11cC1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2MVxcXCJ9Lmlvbi1hcnJvdy1ncmFwaC11cC1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNjJcXFwifS5pb24tYXJyb3ctbGVmdC1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwNlxcXCJ9Lmlvbi1hcnJvdy1sZWZ0LWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTA3XFxcIn0uaW9uLWFycm93LWxlZnQtYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDhcXFwifS5pb24tYXJyb3ctbW92ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNjNcXFwifS5pb24tYXJyb3ctcmVzaXplOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2NFxcXCJ9Lmlvbi1hcnJvdy1yZXR1cm4tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNjVcXFwifS5pb24tYXJyb3ctcmV0dXJuLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2NlxcXCJ9Lmlvbi1hcnJvdy1yaWdodC1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwOVxcXCJ9Lmlvbi1hcnJvdy1yaWdodC1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwYVxcXCJ9Lmlvbi1hcnJvdy1yaWdodC1jOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwYlxcXCJ9Lmlvbi1hcnJvdy1zaHJpbms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjY3XFxcIn0uaW9uLWFycm93LXN3YXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjY4XFxcIn0uaW9uLWFycm93LXVwLWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTBjXFxcIn0uaW9uLWFycm93LXVwLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTBkXFxcIn0uaW9uLWFycm93LXVwLWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTBlXFxcIn0uaW9uLWFzdGVyaXNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMxNFxcXCJ9Lmlvbi1hdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMGZcXFwifS5pb24tYmFja3NwYWNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiZlxcXCJ9Lmlvbi1iYWNrc3BhY2Utb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYmVcXFwifS5pb24tYmFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExMFxcXCJ9Lmlvbi1iYXR0ZXJ5LWNoYXJnaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExMVxcXCJ9Lmlvbi1iYXR0ZXJ5LWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExMlxcXCJ9Lmlvbi1iYXR0ZXJ5LWZ1bGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTEzXFxcIn0uaW9uLWJhdHRlcnktaGFsZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMTRcXFwifS5pb24tYmF0dGVyeS1sb3c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTE1XFxcIn0uaW9uLWJlYWtlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNjlcXFwifS5pb24tYmVlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNmFcXFwifS5pb24tYmx1ZXRvb3RoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExNlxcXCJ9Lmlvbi1ib25maXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMxNVxcXCJ9Lmlvbi1ib29rbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNmJcXFwifS5pb24tYm93dGllOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjMFxcXCJ9Lmlvbi1icmllZmNhc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjZjXFxcIn0uaW9uLWJ1ZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYmVcXFwifS5pb24tY2FsY3VsYXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNmRcXFwifS5pb24tY2FsZW5kYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTE3XFxcIn0uaW9uLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMThcXFwifS5pb24tY2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMTlcXFwifS5pb24tY2FzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMTZcXFwifS5pb24tY2hhdGJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMWJcXFwifS5pb24tY2hhdGJveC13b3JraW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExYVxcXCJ9Lmlvbi1jaGF0Ym94ZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTFjXFxcIn0uaW9uLWNoYXRidWJibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTFlXFxcIn0uaW9uLWNoYXRidWJibGUtd29ya2luZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMWRcXFwifS5pb24tY2hhdGJ1YmJsZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTFmXFxcIn0uaW9uLWNoZWNrbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjJcXFwifS5pb24tY2hlY2ttYXJrLWNpcmNsZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTIwXFxcIn0uaW9uLWNoZWNrbWFyay1yb3VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjFcXFwifS5pb24tY2hldnJvbi1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyM1xcXCJ9Lmlvbi1jaGV2cm9uLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTI0XFxcIn0uaW9uLWNoZXZyb24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTI1XFxcIn0uaW9uLWNoZXZyb24tdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTI2XFxcIn0uaW9uLWNsaXBib2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjdcXFwifS5pb24tY2xvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjZlXFxcIn0uaW9uLWNsb3NlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyYVxcXCJ9Lmlvbi1jbG9zZS1jaXJjbGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyOFxcXCJ9Lmlvbi1jbG9zZS1yb3VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjlcXFwifS5pb24tY2xvc2VkLWNhcHRpb25pbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzE3XFxcIn0uaW9uLWNsb3VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyYlxcXCJ9Lmlvbi1jb2RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3MVxcXCJ9Lmlvbi1jb2RlLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2ZlxcXCJ9Lmlvbi1jb2RlLXdvcmtpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjcwXFxcIn0uaW9uLWNvZmZlZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNzJcXFwifS5pb24tY29tcGFzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNzNcXFwifS5pb24tY29tcG9zZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMmNcXFwifS5pb24tY29ubmVjdGlvbi1iYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3NFxcXCJ9Lmlvbi1jb250cmFzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNzVcXFwifS5pb24tY3JvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYzFcXFwifS5pb24tY3ViZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMThcXFwifS5pb24tZGlzYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMmRcXFwifS5pb24tZG9jdW1lbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTJmXFxcIn0uaW9uLWRvY3VtZW50LXRleHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTJlXFxcIn0uaW9uLWRyYWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTMwXFxcIn0uaW9uLWVhcnRoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3NlxcXCJ9Lmlvbi1lYXNlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYzJcXFwifS5pb24tZWRpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYmZcXFwifS5pb24tZWdnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3N1xcXCJ9Lmlvbi1lamVjdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzFcXFwifS5pb24tZW1haWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTMyXFxcIn0uaW9uLWVtYWlsLXVucmVhZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYzNcXFwifS5pb24tZXJsZW5tZXllci1mbGFzazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYzVcXFwifS5pb24tZXJsZW5tZXllci1mbGFzay1idWJibGVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjNFxcXCJ9Lmlvbi1leWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTMzXFxcIn0uaW9uLWV5ZS1kaXNhYmxlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMDZcXFwifS5pb24tZmVtYWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3OFxcXCJ9Lmlvbi1maWxpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTM0XFxcIn0uaW9uLWZpbG0tbWFya2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzNVxcXCJ9Lmlvbi1maXJlYmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMTlcXFwifS5pb24tZmxhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNzlcXFwifS5pb24tZmxhbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzFhXFxcIn0uaW9uLWZsYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzN1xcXCJ9Lmlvbi1mbGFzaC1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTM2XFxcIn0uaW9uLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzlcXFwifS5pb24tZm9yazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyN2FcXFwifS5pb24tZm9yay1yZXBvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJjMFxcXCJ9Lmlvbi1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzYVxcXCJ9Lmlvbi1mdW5uZWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzFiXFxcIn0uaW9uLWdlYXItYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxM2RcXFwifS5pb24tZ2Vhci1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzZVxcXCJ9Lmlvbi1ncmlkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzZlxcXCJ9Lmlvbi1oYW1tZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjdiXFxcIn0uaW9uLWhhcHB5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMxY1xcXCJ9Lmlvbi1oYXBweS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjNlxcXCJ9Lmlvbi1oZWFkcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQwXFxcIn0uaW9uLWhlYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjE0MVxcXCJ9Lmlvbi1oZWFydC1icm9rZW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzFkXFxcIn0uaW9uLWhlbHA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQzXFxcIn0uaW9uLWhlbHAtYnVveTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyN2NcXFwifS5pb24taGVscC1jaXJjbGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjE0MlxcXCJ9Lmlvbi1ob21lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjE0NFxcXCJ9Lmlvbi1pY2VjcmVhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyN2RcXFwifS5pb24taW1hZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQ3XFxcIn0uaW9uLWltYWdlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxNDhcXFwifS5pb24taW5mb3JtYXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTRhXFxcIn0uaW9uLWluZm9ybWF0aW9uLWNpcmNsZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQ5XFxcIn0uaW9uLWlvbmljOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjE0YlxcXCJ9Lmlvbi1pb3MtYWxhcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2M4XFxcIn0uaW9uLWlvcy1hbGFybS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjN1xcXCJ9Lmlvbi1pb3MtYWxidW1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjYVxcXCJ9Lmlvbi1pb3MtYWxidW1zLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2M5XFxcIn0uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjY1xcXCJ9Lmlvbi1pb3MtYW1lcmljYW5mb290YmFsbC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjYlxcXCJ9Lmlvbi1pb3MtYW5hbHl0aWNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjZVxcXCJ9Lmlvbi1pb3MtYW5hbHl0aWNzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2NkXFxcIn0uaW9uLWlvcy1hcnJvdy1iYWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjZlxcXCJ9Lmlvbi1pb3MtYXJyb3ctZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZDBcXFwifS5pb24taW9zLWFycm93LWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2QxXFxcIn0uaW9uLWlvcy1hcnJvdy1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkMlxcXCJ9Lmlvbi1pb3MtYXJyb3ctcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2QzXFxcIn0uaW9uLWlvcy1hcnJvdy10aGluLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Q0XFxcIn0uaW9uLWlvcy1hcnJvdy10aGluLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Q1XFxcIn0uaW9uLWlvcy1hcnJvdy10aGluLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkNlxcXCJ9Lmlvbi1pb3MtYXJyb3ctdGhpbi11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZDdcXFwifS5pb24taW9zLWFycm93LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkOFxcXCJ9Lmlvbi1pb3MtYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2RhXFxcIn0uaW9uLWlvcy1hdC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkOVxcXCJ9Lmlvbi1pb3MtYmFyY29kZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZGNcXFwifS5pb24taW9zLWJhcmNvZGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZGJcXFwifS5pb24taW9zLWJhc2ViYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkZVxcXCJ9Lmlvbi1pb3MtYmFzZWJhbGwtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZGRcXFwifS5pb24taW9zLWJhc2tldGJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2UwXFxcIn0uaW9uLWlvcy1iYXNrZXRiYWxsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2RmXFxcIn0uaW9uLWlvcy1iZWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlMlxcXCJ9Lmlvbi1pb3MtYmVsbC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlMVxcXCJ9Lmlvbi1pb3MtYm9keTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZTRcXFwifS5pb24taW9zLWJvZHktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZTNcXFwifS5pb24taW9zLWJvbHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2U2XFxcIn0uaW9uLWlvcy1ib2x0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2U1XFxcIn0uaW9uLWlvcy1ib29rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlOFxcXCJ9Lmlvbi1pb3MtYm9vay1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlN1xcXCJ9Lmlvbi1pb3MtYm9va21hcmtzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlYVxcXCJ9Lmlvbi1pb3MtYm9va21hcmtzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2U5XFxcIn0uaW9uLWlvcy1ib3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2VjXFxcIn0uaW9uLWlvcy1ib3gtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZWJcXFwifS5pb24taW9zLWJyaWVmY2FzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZWVcXFwifS5pb24taW9zLWJyaWVmY2FzZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlZFxcXCJ9Lmlvbi1pb3MtYnJvd3NlcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2YwXFxcIn0uaW9uLWlvcy1icm93c2Vycy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlZlxcXCJ9Lmlvbi1pb3MtY2FsY3VsYXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjJcXFwifS5pb24taW9zLWNhbGN1bGF0b3Itb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjFcXFwifS5pb24taW9zLWNhbGVuZGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmNFxcXCJ9Lmlvbi1pb3MtY2FsZW5kYXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjNcXFwifS5pb24taW9zLWNhbWVyYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjZcXFwifS5pb24taW9zLWNhbWVyYS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmNVxcXCJ9Lmlvbi1pb3MtY2FydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjhcXFwifS5pb24taW9zLWNhcnQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjdcXFwifS5pb24taW9zLWNoYXRib3hlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZmFcXFwifS5pb24taW9zLWNoYXRib3hlcy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmOVxcXCJ9Lmlvbi1pb3MtY2hhdGJ1YmJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZmNcXFwifS5pb24taW9zLWNoYXRidWJibGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZmJcXFwifS5pb24taW9zLWNoZWNrbWFyazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZmZcXFwifS5pb24taW9zLWNoZWNrbWFyay1lbXB0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZmRcXFwifS5pb24taW9zLWNoZWNrbWFyay1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmZVxcXCJ9Lmlvbi1pb3MtY2lyY2xlLWZpbGxlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDBcXFwifS5pb24taW9zLWNpcmNsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwMVxcXCJ9Lmlvbi1pb3MtY2xvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDAzXFxcIn0uaW9uLWlvcy1jbG9jay1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwMlxcXCJ9Lmlvbi1pb3MtY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDA2XFxcIn0uaW9uLWlvcy1jbG9zZS1lbXB0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDRcXFwifS5pb24taW9zLWNsb3NlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDA1XFxcIn0uaW9uLWlvcy1jbG91ZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MGNcXFwifS5pb24taW9zLWNsb3VkLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwOFxcXCJ9Lmlvbi1pb3MtY2xvdWQtZG93bmxvYWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDdcXFwifS5pb24taW9zLWNsb3VkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDA5XFxcIn0uaW9uLWlvcy1jbG91ZC11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDBiXFxcIn0uaW9uLWlvcy1jbG91ZC11cGxvYWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MGFcXFwifS5pb24taW9zLWNsb3VkeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTBcXFwifS5pb24taW9zLWNsb3VkeS1uaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MGVcXFwifS5pb24taW9zLWNsb3VkeS1uaWdodC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwZFxcXCJ9Lmlvbi1pb3MtY2xvdWR5LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDBmXFxcIn0uaW9uLWlvcy1jb2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDEyXFxcIn0uaW9uLWlvcy1jb2ctb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTFcXFwifS5pb24taW9zLWNvbG9yLWZpbHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTRcXFwifS5pb24taW9zLWNvbG9yLWZpbHRlci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxM1xcXCJ9Lmlvbi1pb3MtY29sb3Itd2FuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTZcXFwifS5pb24taW9zLWNvbG9yLXdhbmQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTVcXFwifS5pb24taW9zLWNvbXBvc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDE4XFxcIn0uaW9uLWlvcy1jb21wb3NlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDE3XFxcIn0uaW9uLWlvcy1jb250YWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxYVxcXCJ9Lmlvbi1pb3MtY29udGFjdC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxOVxcXCJ9Lmlvbi1pb3MtY29weTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MWNcXFwifS5pb24taW9zLWNvcHktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MWJcXFwifS5pb24taW9zLWNyb3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDFlXFxcIn0uaW9uLWlvcy1jcm9wLXN0cm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MWRcXFwifS5pb24taW9zLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyMFxcXCJ9Lmlvbi1pb3MtZG93bmxvYWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MWZcXFwifS5pb24taW9zLWRyYWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDIxXFxcIn0uaW9uLWlvcy1lbWFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjNcXFwifS5pb24taW9zLWVtYWlsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDIyXFxcIn0uaW9uLWlvcy1leWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDI1XFxcIn0uaW9uLWlvcy1leWUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjRcXFwifS5pb24taW9zLWZhc3Rmb3J3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyN1xcXCJ9Lmlvbi1pb3MtZmFzdGZvcndhcmQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjZcXFwifS5pb24taW9zLWZpbGluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjlcXFwifS5pb24taW9zLWZpbGluZy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyOFxcXCJ9Lmlvbi1pb3MtZmlsbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MmJcXFwifS5pb24taW9zLWZpbG0tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MmFcXFwifS5pb24taW9zLWZsYWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDJkXFxcIn0uaW9uLWlvcy1mbGFnLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDJjXFxcIn0uaW9uLWlvcy1mbGFtZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MmZcXFwifS5pb24taW9zLWZsYW1lLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDJlXFxcIn0uaW9uLWlvcy1mbGFzazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzFcXFwifS5pb24taW9zLWZsYXNrLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDMwXFxcIn0uaW9uLWlvcy1mbG93ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDMzXFxcIn0uaW9uLWlvcy1mbG93ZXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzJcXFwifS5pb24taW9zLWZvbGRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzVcXFwifS5pb24taW9zLWZvbGRlci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzNFxcXCJ9Lmlvbi1pb3MtZm9vdGJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDM3XFxcIn0uaW9uLWlvcy1mb290YmFsbC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzNlxcXCJ9Lmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDM5XFxcIn0uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzOFxcXCJ9Lmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDNiXFxcIn0uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzYVxcXCJ9Lmlvbi1pb3MtZ2VhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0M2RcXFwifS5pb24taW9zLWdlYXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0M2NcXFwifS5pb24taW9zLWdsYXNzZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDNmXFxcIn0uaW9uLWlvcy1nbGFzc2VzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDNlXFxcIn0uaW9uLWlvcy1ncmlkLXZpZXc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDQxXFxcIn0uaW9uLWlvcy1ncmlkLXZpZXctb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDBcXFwifS5pb24taW9zLWhlYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0M1xcXCJ9Lmlvbi1pb3MtaGVhcnQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDJcXFwifS5pb24taW9zLWhlbHA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDQ2XFxcIn0uaW9uLWlvcy1oZWxwLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0NFxcXCJ9Lmlvbi1pb3MtaGVscC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0NVxcXCJ9Lmlvbi1pb3MtaG9tZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDhcXFwifS5pb24taW9zLWhvbWUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDdcXFwifS5pb24taW9zLWluZmluaXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0YVxcXCJ9Lmlvbi1pb3MtaW5maW5pdGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDlcXFwifS5pb24taW9zLWluZm9ybWF0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0ZFxcXCJ9Lmlvbi1pb3MtaW5mb3JtYXRpb24tZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDRiXFxcIn0uaW9uLWlvcy1pbmZvcm1hdGlvbi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0Y1xcXCJ9Lmlvbi1pb3MtaW9uaWMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NGVcXFwifS5pb24taW9zLWtleXBhZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NTBcXFwifS5pb24taW9zLWtleXBhZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0ZlxcXCJ9Lmlvbi1pb3MtbGlnaHRidWxiOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1MlxcXCJ9Lmlvbi1pb3MtbGlnaHRidWxiLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDUxXFxcIn0uaW9uLWlvcy1saXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1NFxcXCJ9Lmlvbi1pb3MtbGlzdC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1M1xcXCJ9Lmlvbi1pb3MtbG9jYXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDU2XFxcIn0uaW9uLWlvcy1sb2NhdGlvbi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1NVxcXCJ9Lmlvbi1pb3MtbG9ja2VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1OFxcXCJ9Lmlvbi1pb3MtbG9ja2VkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDU3XFxcIn0uaW9uLWlvcy1sb29wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1YVxcXCJ9Lmlvbi1pb3MtbG9vcC1zdHJvbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDU5XFxcIn0uaW9uLWlvcy1tZWRpY2FsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1Y1xcXCJ9Lmlvbi1pb3MtbWVkaWNhbC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1YlxcXCJ9Lmlvbi1pb3MtbWVka2l0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1ZVxcXCJ9Lmlvbi1pb3MtbWVka2l0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDVkXFxcIn0uaW9uLWlvcy1taWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDYxXFxcIn0uaW9uLWlvcy1taWMtb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1ZlxcXCJ9Lmlvbi1pb3MtbWljLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDYwXFxcIn0uaW9uLWlvcy1taW51czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjRcXFwifS5pb24taW9zLW1pbnVzLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2MlxcXCJ9Lmlvbi1pb3MtbWludXMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjNcXFwifS5pb24taW9zLW1vbml0b3I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDY2XFxcIn0uaW9uLWlvcy1tb25pdG9yLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDY1XFxcIn0uaW9uLWlvcy1tb29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2OFxcXCJ9Lmlvbi1pb3MtbW9vbi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2N1xcXCJ9Lmlvbi1pb3MtbW9yZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NmFcXFwifS5pb24taW9zLW1vcmUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjlcXFwifS5pb24taW9zLW11c2ljYWwtbm90ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NmJcXFwifS5pb24taW9zLW11c2ljYWwtbm90ZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDZjXFxcIn0uaW9uLWlvcy1uYXZpZ2F0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NmVcXFwifS5pb24taW9zLW5hdmlnYXRlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDZkXFxcIn0uaW9uLWlvcy1udXRyaXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDcwXFxcIn0uaW9uLWlvcy1udXRyaXRpb24tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NmZcXFwifS5pb24taW9zLXBhcGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3MlxcXCJ9Lmlvbi1pb3MtcGFwZXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzFcXFwifS5pb24taW9zLXBhcGVycGxhbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDc0XFxcIn0uaW9uLWlvcy1wYXBlcnBsYW5lLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDczXFxcIn0uaW9uLWlvcy1wYXJ0bHlzdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzZcXFwifS5pb24taW9zLXBhcnRseXN1bm55LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDc1XFxcIn0uaW9uLWlvcy1wYXVzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzhcXFwifS5pb24taW9zLXBhdXNlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDc3XFxcIn0uaW9uLWlvcy1wYXc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDdhXFxcIn0uaW9uLWlvcy1wYXctb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzlcXFwifS5pb24taW9zLXBlb3BsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0N2NcXFwifS5pb24taW9zLXBlb3BsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3YlxcXCJ9Lmlvbi1pb3MtcGVyc29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3ZVxcXCJ9Lmlvbi1pb3MtcGVyc29uLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDdkXFxcIn0uaW9uLWlvcy1wZXJzb25hZGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDgwXFxcIn0uaW9uLWlvcy1wZXJzb25hZGQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0N2ZcXFwifS5pb24taW9zLXBob3RvczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ODJcXFwifS5pb24taW9zLXBob3Rvcy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4MVxcXCJ9Lmlvbi1pb3MtcGllOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4NFxcXCJ9Lmlvbi1pb3MtcGllLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDgzXFxcIn0uaW9uLWlvcy1waW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4NlxcXCJ9Lmlvbi1pb3MtcGludC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4NVxcXCJ9Lmlvbi1pb3MtcGxheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ODhcXFwifS5pb24taW9zLXBsYXktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ODdcXFwifS5pb24taW9zLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDhiXFxcIn0uaW9uLWlvcy1wbHVzLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4OVxcXCJ9Lmlvbi1pb3MtcGx1cy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4YVxcXCJ9Lmlvbi1pb3MtcHJpY2V0YWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDhkXFxcIn0uaW9uLWlvcy1wcmljZXRhZy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4Y1xcXCJ9Lmlvbi1pb3MtcHJpY2V0YWdzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4ZlxcXCJ9Lmlvbi1pb3MtcHJpY2V0YWdzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDhlXFxcIn0uaW9uLWlvcy1wcmludGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5MVxcXCJ9Lmlvbi1pb3MtcHJpbnRlci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5MFxcXCJ9Lmlvbi1pb3MtcHVsc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDkzXFxcIn0uaW9uLWlvcy1wdWxzZS1zdHJvbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDkyXFxcIn0uaW9uLWlvcy1yYWlueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTVcXFwifS5pb24taW9zLXJhaW55LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDk0XFxcIn0uaW9uLWlvcy1yZWNvcmRpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDk3XFxcIn0uaW9uLWlvcy1yZWNvcmRpbmctb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTZcXFwifS5pb24taW9zLXJlZG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDk5XFxcIn0uaW9uLWlvcy1yZWRvLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDk4XFxcIn0uaW9uLWlvcy1yZWZyZXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5Y1xcXCJ9Lmlvbi1pb3MtcmVmcmVzaC1lbXB0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OWFcXFwifS5pb24taW9zLXJlZnJlc2gtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OWJcXFwifS5pb24taW9zLXJlbG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OWRcXFwifS5pb24taW9zLXJldmVyc2UtY2FtZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5ZlxcXCJ9Lmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmEtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OWVcXFwifS5pb24taW9zLXJld2luZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTFcXFwifS5pb24taW9zLXJld2luZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhMFxcXCJ9Lmlvbi1pb3Mtcm9zZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTNcXFwifS5pb24taW9zLXJvc2Utb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTJcXFwifS5pb24taW9zLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTVcXFwifS5pb24taW9zLXNlYXJjaC1zdHJvbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGE0XFxcIn0uaW9uLWlvcy1zZXR0aW5nczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTdcXFwifS5pb24taW9zLXNldHRpbmdzLXN0cm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTZcXFwifS5pb24taW9zLXNodWZmbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGE5XFxcIn0uaW9uLWlvcy1zaHVmZmxlLXN0cm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YThcXFwifS5pb24taW9zLXNraXBiYWNrd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YWJcXFwifS5pb24taW9zLXNraXBiYWNrd2FyZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhYVxcXCJ9Lmlvbi1pb3Mtc2tpcGZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGFkXFxcIn0uaW9uLWlvcy1za2lwZm9yd2FyZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhY1xcXCJ9Lmlvbi1pb3Mtc25vd3k6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGFlXFxcIn0uaW9uLWlvcy1zcGVlZG9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YjBcXFwifS5pb24taW9zLXNwZWVkb21ldGVyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGFmXFxcIn0uaW9uLWlvcy1zdGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiM1xcXCJ9Lmlvbi1pb3Mtc3Rhci1oYWxmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiMVxcXCJ9Lmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiMlxcXCJ9Lmlvbi1pb3Mtc3RvcHdhdGNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiNVxcXCJ9Lmlvbi1pb3Mtc3RvcHdhdGNoLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGI0XFxcIn0uaW9uLWlvcy1zdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YjdcXFwifS5pb24taW9zLXN1bm55LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGI2XFxcIn0uaW9uLWlvcy10ZWxlcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGI5XFxcIn0uaW9uLWlvcy10ZWxlcGhvbmUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YjhcXFwifS5pb24taW9zLXRlbm5pc2JhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGJiXFxcIn0uaW9uLWlvcy10ZW5uaXNiYWxsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGJhXFxcIn0uaW9uLWlvcy10aHVuZGVyc3Rvcm06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGJkXFxcIn0uaW9uLWlvcy10aHVuZGVyc3Rvcm0tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YmNcXFwifS5pb24taW9zLXRpbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGJmXFxcIn0uaW9uLWlvcy10aW1lLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGJlXFxcIn0uaW9uLWlvcy10aW1lcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzFcXFwifS5pb24taW9zLXRpbWVyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGMwXFxcIn0uaW9uLWlvcy10b2dnbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGMzXFxcIn0uaW9uLWlvcy10b2dnbGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzJcXFwifS5pb24taW9zLXRyYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjNVxcXCJ9Lmlvbi1pb3MtdHJhc2gtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzRcXFwifS5pb24taW9zLXVuZG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGM3XFxcIn0uaW9uLWlvcy11bmRvLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGM2XFxcIn0uaW9uLWlvcy11bmxvY2tlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzlcXFwifS5pb24taW9zLXVubG9ja2VkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGM4XFxcIn0uaW9uLWlvcy11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGNiXFxcIn0uaW9uLWlvcy11cGxvYWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0Y2FcXFwifS5pb24taW9zLXZpZGVvY2FtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjZFxcXCJ9Lmlvbi1pb3MtdmlkZW9jYW0tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0Y2NcXFwifS5pb24taW9zLXZvbHVtZS1oaWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjZVxcXCJ9Lmlvbi1pb3Mtdm9sdW1lLWxvdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0Y2ZcXFwifS5pb24taW9zLXdpbmVnbGFzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDFcXFwifS5pb24taW9zLXdpbmVnbGFzcy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkMFxcXCJ9Lmlvbi1pb3Mtd29ybGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGQzXFxcIn0uaW9uLWlvcy13b3JsZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkMlxcXCJ9Lmlvbi1pcGFkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjFmOVxcXCJ9Lmlvbi1pcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMWZhXFxcIn0uaW9uLWlwb2Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMWZiXFxcIn0uaW9uLWpldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOTVcXFwifS5pb24ta2V5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5NlxcXCJ9Lmlvbi1rbmlmZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOTdcXFwifS5pb24tbGFwdG9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjFmY1xcXCJ9Lmlvbi1sZWFmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjFmZFxcXCJ9Lmlvbi1sZXZlbHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjk4XFxcIn0uaW9uLWxpZ2h0YnVsYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOTlcXFwifS5pb24tbGluazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxZmVcXFwifS5pb24tbG9hZC1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5YVxcXCJ9Lmlvbi1sb2FkLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjliXFxcIn0uaW9uLWxvYWQtYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOWNcXFwifS5pb24tbG9hZC1kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5ZFxcXCJ9Lmlvbi1sb2NhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxZmZcXFwifS5pb24tbG9jay1jb21iaW5hdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDRcXFwifS5pb24tbG9ja2VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwMFxcXCJ9Lmlvbi1sb2ctaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjllXFxcIn0uaW9uLWxvZy1vdXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjlmXFxcIn0uaW9uLWxvb3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjAxXFxcIn0uaW9uLW1hZ25ldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYTBcXFwifS5pb24tbWFsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYTFcXFwifS5pb24tbWFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwMlxcXCJ9Lmlvbi1tYXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjAzXFxcIn0uaW9uLW1lZGtpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYTJcXFwifS5pb24tbWVyZ2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzNmXFxcIn0uaW9uLW1pYy1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwNFxcXCJ9Lmlvbi1taWMtYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMDVcXFwifS5pb24tbWljLWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjA2XFxcIn0uaW9uLW1pbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwOVxcXCJ9Lmlvbi1taW51cy1jaXJjbGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwN1xcXCJ9Lmlvbi1taW51cy1yb3VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMDhcXFwifS5pb24tbW9kZWwtczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYzFcXFwifS5pb24tbW9uaXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMGFcXFwifS5pb24tbW9yZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMGJcXFwifS5pb24tbW91c2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzQwXFxcIn0uaW9uLW11c2ljLW5vdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjBjXFxcIn0uaW9uLW5hdmljb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjBlXFxcIn0uaW9uLW5hdmljb24tcm91bmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjBkXFxcIn0uaW9uLW5hdmlnYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhM1xcXCJ9Lmlvbi1uZXR3b3JrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0MVxcXCJ9Lmlvbi1uby1zbW9raW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJjMlxcXCJ9Lmlvbi1udWNsZWFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhNFxcXCJ9Lmlvbi1vdXRsZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzQyXFxcIn0uaW9uLXBhaW50YnJ1c2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGQ1XFxcIn0uaW9uLXBhaW50YnVja2V0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkNlxcXCJ9Lmlvbi1wYXBlci1haXJwbGFuZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYzNcXFwifS5pb24tcGFwZXJjbGlwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwZlxcXCJ9Lmlvbi1wYXVzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTBcXFwifS5pb24tcGVyc29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxM1xcXCJ9Lmlvbi1wZXJzb24tYWRkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxMVxcXCJ9Lmlvbi1wZXJzb24tc3RhbGtlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTJcXFwifS5pb24tcGllLWdyYXBoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhNVxcXCJ9Lmlvbi1waW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmE2XFxcIn0uaW9uLXBpbnBvaW50OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhN1xcXCJ9Lmlvbi1waXp6YTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYThcXFwifS5pb24tcGxhbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjE0XFxcIn0uaW9uLXBsYW5ldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDNcXFwifS5pb24tcGxheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTVcXFwifS5pb24tcGxheXN0YXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzBhXFxcIn0uaW9uLXBsdXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjE4XFxcIn0uaW9uLXBsdXMtY2lyY2xlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTZcXFwifS5pb24tcGx1cy1yb3VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTdcXFwifS5pb24tcG9kaXVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0NFxcXCJ9Lmlvbi1wb3VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTlcXFwifS5pb24tcG93ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmE5XFxcIn0uaW9uLXByaWNldGFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhYVxcXCJ9Lmlvbi1wcmljZXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmFiXFxcIn0uaW9uLXByaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjFhXFxcIn0uaW9uLXB1bGwtcmVxdWVzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDVcXFwifS5pb24tcXItc2Nhbm5lcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDZcXFwifS5pb24tcXVvdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzQ3XFxcIn0uaW9uLXJhZGlvLXdhdmVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhY1xcXCJ9Lmlvbi1yZWNvcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjFiXFxcIn0uaW9uLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjFjXFxcIn0uaW9uLXJlcGx5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxZVxcXCJ9Lmlvbi1yZXBseS1hbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjFkXFxcIn0uaW9uLXJpYmJvbi1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0OFxcXCJ9Lmlvbi1yaWJib24tYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDlcXFwifS5pb24tc2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0YVxcXCJ9Lmlvbi1zYWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDdcXFwifS5pb24tc2Npc3NvcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzRiXFxcIn0uaW9uLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMWZcXFwifS5pb24tc2V0dGluZ3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmFkXFxcIn0uaW9uLXNoYXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyMFxcXCJ9Lmlvbi1zaHVmZmxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyMVxcXCJ9Lmlvbi1za2lwLWJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyMlxcXCJ9Lmlvbi1za2lwLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjIzXFxcIn0uaW9uLXNvY2lhbC1hbmRyb2lkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyNVxcXCJ9Lmlvbi1zb2NpYWwtYW5kcm9pZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyNFxcXCJ9Lmlvbi1zb2NpYWwtYW5ndWxhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDlcXFwifS5pb24tc29jaWFsLWFuZ3VsYXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDhcXFwifS5pb24tc29jaWFsLWFwcGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyN1xcXCJ9Lmlvbi1zb2NpYWwtYXBwbGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMjZcXFwifS5pb24tc29jaWFsLWJpdGNvaW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmFmXFxcIn0uaW9uLXNvY2lhbC1iaXRjb2luLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmFlXFxcIn0uaW9uLXNvY2lhbC1idWZmZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjI5XFxcIn0uaW9uLXNvY2lhbC1idWZmZXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMjhcXFwifS5pb24tc29jaWFsLWNocm9tZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZGJcXFwifS5pb24tc29jaWFsLWNocm9tZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkYVxcXCJ9Lmlvbi1zb2NpYWwtY29kZXBlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZGRcXFwifS5pb24tc29jaWFsLWNvZGVwZW4tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZGNcXFwifS5pb24tc29jaWFsLWNzczM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGRmXFxcIn0uaW9uLXNvY2lhbC1jc3MzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGRlXFxcIn0uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjJiXFxcIn0uaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMmFcXFwifS5pb24tc29jaWFsLWRyaWJiYmxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyZFxcXCJ9Lmlvbi1zb2NpYWwtZHJpYmJibGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMmNcXFwifS5pb24tc29jaWFsLWRyb3Bib3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjJmXFxcIn0uaW9uLXNvY2lhbC1kcm9wYm94LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjJlXFxcIn0uaW9uLXNvY2lhbC1ldXJvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlMVxcXCJ9Lmlvbi1zb2NpYWwtZXVyby1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlMFxcXCJ9Lmlvbi1zb2NpYWwtZmFjZWJvb2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjMxXFxcIn0uaW9uLXNvY2lhbC1mYWNlYm9vay1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzMFxcXCJ9Lmlvbi1zb2NpYWwtZm91cnNxdWFyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNGRcXFwifS5pb24tc29jaWFsLWZvdXJzcXVhcmUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNGNcXFwifS5pb24tc29jaWFsLWZyZWVic2QtZGV2aWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmM0XFxcIn0uaW9uLXNvY2lhbC1naXRodWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjMzXFxcIn0uaW9uLXNvY2lhbC1naXRodWItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzJcXFwifS5pb24tc29jaWFsLWdvb2dsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNGZcXFwifS5pb24tc29jaWFsLWdvb2dsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0ZVxcXCJ9Lmlvbi1zb2NpYWwtZ29vZ2xlcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzVcXFwifS5pb24tc29jaWFsLWdvb2dsZXBsdXMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzRcXFwifS5pb24tc29jaWFsLWhhY2tlcm5ld3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjM3XFxcIn0uaW9uLXNvY2lhbC1oYWNrZXJuZXdzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjM2XFxcIn0uaW9uLXNvY2lhbC1odG1sNTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTNcXFwifS5pb24tc29jaWFsLWh0bWw1LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGUyXFxcIn0uaW9uLXNvY2lhbC1pbnN0YWdyYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzUxXFxcIn0uaW9uLXNvY2lhbC1pbnN0YWdyYW0tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTBcXFwifS5pb24tc29jaWFsLWphdmFzY3JpcHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGU1XFxcIn0uaW9uLXNvY2lhbC1qYXZhc2NyaXB0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGU0XFxcIn0uaW9uLXNvY2lhbC1saW5rZWRpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzlcXFwifS5pb24tc29jaWFsLWxpbmtlZGluLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjM4XFxcIn0uaW9uLXNvY2lhbC1tYXJrZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTZcXFwifS5pb24tc29jaWFsLW5vZGVqczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTdcXFwifS5pb24tc29jaWFsLW9jdG9jYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGU4XFxcIn0uaW9uLXNvY2lhbC1waW50ZXJlc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmIxXFxcIn0uaW9uLXNvY2lhbC1waW50ZXJlc3Qtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYjBcXFwifS5pb24tc29jaWFsLXB5dGhvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTlcXFwifS5pb24tc29jaWFsLXJlZGRpdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyM2JcXFwifS5pb24tc29jaWFsLXJlZGRpdC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzYVxcXCJ9Lmlvbi1zb2NpYWwtcnNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzZFxcXCJ9Lmlvbi1zb2NpYWwtcnNzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjNjXFxcIn0uaW9uLXNvY2lhbC1zYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlYVxcXCJ9Lmlvbi1zb2NpYWwtc2t5cGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjNmXFxcIn0uaW9uLXNvY2lhbC1za3lwZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzZVxcXCJ9Lmlvbi1zb2NpYWwtc25hcGNoYXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGVjXFxcIn0uaW9uLXNvY2lhbC1zbmFwY2hhdC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlYlxcXCJ9Lmlvbi1zb2NpYWwtdHVtYmxyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0MVxcXCJ9Lmlvbi1zb2NpYWwtdHVtYmxyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQwXFxcIn0uaW9uLXNvY2lhbC10dXg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmM1XFxcIn0uaW9uLXNvY2lhbC10d2l0Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGVlXFxcIn0uaW9uLXNvY2lhbC10d2l0Y2gtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZWRcXFwifS5pb24tc29jaWFsLXR3aXR0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQzXFxcIn0uaW9uLXNvY2lhbC10d2l0dGVyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQyXFxcIn0uaW9uLXNvY2lhbC11c2Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzUzXFxcIn0uaW9uLXNvY2lhbC11c2Qtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTJcXFwifS5pb24tc29jaWFsLXZpbWVvOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0NVxcXCJ9Lmlvbi1zb2NpYWwtdmltZW8tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDRcXFwifS5pb24tc29jaWFsLXdoYXRzYXBwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRmMFxcXCJ9Lmlvbi1zb2NpYWwtd2hhdHNhcHAtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZWZcXFwifS5pb24tc29jaWFsLXdpbmRvd3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQ3XFxcIn0uaW9uLXNvY2lhbC13aW5kb3dzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQ2XFxcIn0uaW9uLXNvY2lhbC13b3JkcHJlc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQ5XFxcIn0uaW9uLXNvY2lhbC13b3JkcHJlc3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDhcXFwifS5pb24tc29jaWFsLXlhaG9vOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0YlxcXCJ9Lmlvbi1zb2NpYWwteWFob28tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNGFcXFwifS5pb24tc29jaWFsLXllbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZjJcXFwifS5pb24tc29jaWFsLXllbi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRmMVxcXCJ9Lmlvbi1zb2NpYWwteW91dHViZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNGRcXFwifS5pb24tc29jaWFsLXlvdXR1YmUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNGNcXFwifS5pb24tc291cC1jYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGY0XFxcIn0uaW9uLXNvdXAtY2FuLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGYzXFxcIn0uaW9uLXNwZWFrZXJwaG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYjJcXFwifS5pb24tc3BlZWRvbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmIzXFxcIn0uaW9uLXNwb29uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiNFxcXCJ9Lmlvbi1zdGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0ZVxcXCJ9Lmlvbi1zdGF0cy1iYXJzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiNVxcXCJ9Lmlvbi1zdGVhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMGJcXFwifS5pb24tc3RvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNGZcXFwifS5pb24tdGhlcm1vbWV0ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmI2XFxcIn0uaW9uLXRodW1ic2Rvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjUwXFxcIn0uaW9uLXRodW1ic3VwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1MVxcXCJ9Lmlvbi10b2dnbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzU1XFxcIn0uaW9uLXRvZ2dsZS1maWxsZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzU0XFxcIn0uaW9uLXRyYW5zZ2VuZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRmNVxcXCJ9Lmlvbi10cmFzaC1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1MlxcXCJ9Lmlvbi10cmFzaC1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1M1xcXCJ9Lmlvbi10cm9waHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzU2XFxcIn0uaW9uLXRzaGlydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZjdcXFwifS5pb24tdHNoaXJ0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGY2XFxcIn0uaW9uLXVtYnJlbGxhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiN1xcXCJ9Lmlvbi11bml2ZXJzaXR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1N1xcXCJ9Lmlvbi11bmxvY2tlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNTRcXFwifS5pb24tdXBsb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1NVxcXCJ9Lmlvbi11c2I6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmI4XFxcIn0uaW9uLXZpZGVvY2FtZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1NlxcXCJ9Lmlvbi12b2x1bWUtaGlnaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNTdcXFwifS5pb24tdm9sdW1lLWxvdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNThcXFwifS5pb24tdm9sdW1lLW1lZGl1bTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNTlcXFwifS5pb24tdm9sdW1lLW11dGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjVhXFxcIn0uaW9uLXdhbmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzU4XFxcIn0uaW9uLXdhdGVyZHJvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNWJcXFwifS5pb24td2lmaTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNWNcXFwifS5pb24td2luZWdsYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiOVxcXCJ9Lmlvbi13b21hbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNWRcXFwifS5pb24td3JlbmNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiYVxcXCJ9Lmlvbi14Ym94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMwY1xcXCJ9XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL25vZGVfbW9kdWxlcy9pb25pY29ucy9jc3MvaW9uaWNvbnMubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7OztDQVVoQixDQUFDLFdBQVcsc0JBQXNCLENBQUMsMkNBQXdDLENBQUMsK09BQW1QLENBQUMsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsa3psQkFBa3psQixvQkFBb0IsQ0FBQyxzQkFBc0IsQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsb0NBQW1CLENBQW5CLGlDQUFtQixDQUFuQiw0QkFBbUIsQ0FBbkIsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsbUJBQW1CLENBQUMsYUFBYSxDQUFDLGtDQUFrQyxDQUFDLGlDQUFpQyxDQUFDLGtCQUFrQixlQUFlLENBQUMsMEJBQTBCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQywwQkFBMEIsZUFBZSxDQUFDLHlCQUF5QixlQUFlLENBQUMsNEJBQTRCLGVBQWUsQ0FBQywrQkFBK0IsZUFBZSxDQUFDLCtCQUErQixlQUFlLENBQUMsbUNBQW1DLGVBQWUsQ0FBQywwQ0FB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ZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyx3QkFBd0IsZUFBZSxDQUFDLHVCQUF1QixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxvQkFBb0IsZUFBZSxDQUFDLG9CQUFvQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxtQkFBbUIsZUFBZSxDQUFDLDJCQUEyQixlQUFlLENBQUMscUJBQXFCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLHFCQUFxQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxnQkFBZ0IsZUFBZSxDQUFDLHdCQUF3QixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyx1QkFBdUIsZUFBZSxDQUFDLDBCQUEwQixlQUFlLENBQUMsd0JBQXdCLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLHNCQUFzQixlQUFlLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxzQkFBc0IsZUFBZSxDQUFDLGtCQUFrQixlQUFlLENBQUMsbUJBQW1CLGVBQWUsQ0FBQyxpQkFBaUIsZUFBZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiOy8qIVxcbiAgSW9uaWNvbnMsIHYyLjAuMVxcbiAgQ3JlYXRlZCBieSBCZW4gU3BlcnJ5IGZvciB0aGUgSW9uaWMgRnJhbWV3b3JrLCBodHRwOi8vaW9uaWNvbnMuY29tL1xcbiAgaHR0cHM6Ly90d2l0dGVyLmNvbS9iZW5qc3BlcnJ5ICBodHRwczovL3R3aXR0ZXIuY29tL2lvbmljZnJhbWV3b3JrXFxuICBNSVQgTGljZW5zZTogaHR0cHM6Ly9naXRodWIuY29tL2RyaWZ0eWNvL2lvbmljb25zXFxuXFxuICBBbmRyb2lkLXN0eWxlIGljb25zIG9yaWdpbmFsbHkgYnVpbHQgYnkgR29vZ2xl4oCZc1xcbiAgTWF0ZXJpYWwgRGVzaWduIEljb25zOiBodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlL21hdGVyaWFsLWRlc2lnbi1pY29uc1xcbiAgdXNlZCB1bmRlciBDQyBCWSBodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9saWNlbnNlcy9ieS80LjAvXFxuICBNb2RpZmllZCBpY29ucyB0byBmaXQgaW9uaWNvbuKAmXMgZ3JpZCBmcm9tIG9yaWdpbmFsLlxcbiovQGZvbnQtZmFjZXtmb250LWZhbWlseTpcXFwiSW9uaWNvbnNcXFwiO3NyYzp1cmwoXFxcIi4uL2ZvbnRzL2lvbmljb25zLmVvdD92PTIuMC4xXFxcIik7c3JjOnVybChcXFwiLi4vZm9udHMvaW9uaWNvbnMuZW90P3Y9Mi4wLjEjaWVmaXhcXFwiKSBmb3JtYXQoXFxcImVtYmVkZGVkLW9wZW50eXBlXFxcIiksdXJsKFxcXCIuLi9mb250cy9pb25pY29ucy50dGY/dj0yLjAuMVxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKSx1cmwoXFxcIi4uL2ZvbnRzL2lvbmljb25zLndvZmY/dj0yLjAuMVxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpLHVybChcXFwiLi4vZm9udHMvaW9uaWNvbnMuc3ZnP3Y9Mi4wLjEjSW9uaWNvbnNcXFwiKSBmb3JtYXQoXFxcInN2Z1xcXCIpO2ZvbnQtd2VpZ2h0Om5vcm1hbDtmb250LXN0eWxlOm5vcm1hbH0uaW9uLC5pb25pY29ucywuaW9uLWFsZXJ0OmJlZm9yZSwuaW9uLWFsZXJ0LWNpcmNsZWQ6YmVmb3JlLC5pb24tYW5kcm9pZC1hZGQ6YmVmb3JlLC5pb24tYW5kcm9pZC1hZGQtY2lyY2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYWxhcm0tY2xvY2s6YmVmb3JlLC5pb24tYW5kcm9pZC1hbGVydDpiZWZvcmUsLmlvbi1hbmRyb2lkLWFwcHM6YmVmb3JlLC5pb24tYW5kcm9pZC1hcmNoaXZlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctYmFjazpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRvd246YmVmb3JlLC5pb24tYW5kcm9pZC1hcnJvdy1kcm9wZG93bjpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3Bkb3duLWNpcmNsZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0OmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGxlZnQtY2lyY2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0OmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0LWNpcmNsZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cDpiZWZvcmUsLmlvbi1hbmRyb2lkLWFycm93LWRyb3B1cC1jaXJjbGU6YmVmb3JlLC5pb24tYW5kcm9pZC1hcnJvdy1mb3J3YXJkOmJlZm9yZSwuaW9uLWFuZHJvaWQtYXJyb3ctdXA6YmVmb3JlLC5pb24tYW5kcm9pZC1hdHRhY2g6YmVmb3JlLC5pb24tYW5kcm9pZC1iYXI6YmVmb3JlLC5pb24tYW5kcm9pZC1iaWN5Y2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtYm9hdDpiZWZvcmUsLmlvbi1hbmRyb2lkLWJvb2ttYXJrOmJlZm9yZSwuaW9uLWFuZHJvaWQtYnVsYjpiZWZvcmUsLmlvbi1hbmRyb2lkLWJ1czpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhbGVuZGFyOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2FsbDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhbWVyYTpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhbmNlbDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhcjpiZWZvcmUsLmlvbi1hbmRyb2lkLWNhcnQ6YmVmb3JlLC5pb24tYW5kcm9pZC1jaGF0OmJlZm9yZSwuaW9uLWFuZHJvaWQtY2hlY2tib3g6YmVmb3JlLC5pb24tYW5kcm9pZC1jaGVja2JveC1ibGFuazpiZWZvcmUsLmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmU6YmVmb3JlLC5pb24tYW5kcm9pZC1jaGVja2JveC1vdXRsaW5lLWJsYW5rOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2hlY2ttYXJrLWNpcmNsZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWNsaXBib2FyZDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNsb3NlOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2xvdWQ6YmVmb3JlLC5pb24tYW5kcm9pZC1jbG91ZC1jaXJjbGU6YmVmb3JlLC5pb24tYW5kcm9pZC1jbG91ZC1kb25lOmJlZm9yZSwuaW9uLWFuZHJvaWQtY2xvdWQtb3V0bGluZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWNvbG9yLXBhbGV0dGU6YmVmb3JlLC5pb24tYW5kcm9pZC1jb21wYXNzOmJlZm9yZSwuaW9uLWFuZHJvaWQtY29udGFjdDpiZWZvcmUsLmlvbi1hbmRyb2lkLWNvbnRhY3RzOmJlZm9yZSwuaW9uLWFuZHJvaWQtY29udHJhY3Q6YmVmb3JlLC5pb24tYW5kcm9pZC1jcmVhdGU6YmVmb3JlLC5pb24tYW5kcm9pZC1kZWxldGU6YmVmb3JlLC5pb24tYW5kcm9pZC1kZXNrdG9wOmJlZm9yZSwuaW9uLWFuZHJvaWQtZG9jdW1lbnQ6YmVmb3JlLC5pb24tYW5kcm9pZC1kb25lOmJlZm9yZSwuaW9uLWFuZHJvaWQtZG9uZS1hbGw6YmVmb3JlLC5pb24tYW5kcm9pZC1kb3dubG9hZDpiZWZvcmUsLmlvbi1hbmRyb2lkLWRyYWZ0czpiZWZvcmUsLmlvbi1hbmRyb2lkLWV4aXQ6YmVmb3JlLC5pb24tYW5kcm9pZC1leHBhbmQ6YmVmb3JlLC5pb24tYW5kcm9pZC1mYXZvcml0ZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWZhdm9yaXRlLW91dGxpbmU6YmVmb3JlLC5pb24tYW5kcm9pZC1maWxtOmJlZm9yZSwuaW9uLWFuZHJvaWQtZm9sZGVyOmJlZm9yZSwuaW9uLWFuZHJvaWQtZm9sZGVyLW9wZW46YmVmb3JlLC5pb24tYW5kcm9pZC1mdW5uZWw6YmVmb3JlLC5pb24tYW5kcm9pZC1nbG9iZTpiZWZvcmUsLmlvbi1hbmRyb2lkLWhhbmQ6YmVmb3JlLC5pb24tYW5kcm9pZC1oYW5nb3V0OmJlZm9yZSwuaW9uLWFuZHJvaWQtaGFwcHk6YmVmb3JlLC5pb24tYW5kcm9pZC1ob21lOmJlZm9yZSwuaW9uLWFuZHJvaWQtaW1hZ2U6YmVmb3JlLC5pb24tYW5kcm9pZC1sYXB0b3A6YmVmb3JlLC5pb24tYW5kcm9pZC1saXN0OmJlZm9yZSwuaW9uLWFuZHJvaWQtbG9jYXRlOmJlZm9yZSwuaW9uLWFuZHJvaWQtbG9jazpiZWZvcmUsLmlvbi1hbmRyb2lkLW1haWw6YmVmb3JlLC5pb24tYW5kcm9pZC1tYXA6YmVmb3JlLC5pb24tYW5kcm9pZC1tZW51OmJlZm9yZSwuaW9uLWFuZHJvaWQtbWljcm9waG9uZTpiZWZvcmUsLmlvbi1hbmRyb2lkLW1pY3JvcGhvbmUtb2ZmOmJlZm9yZSwuaW9uLWFuZHJvaWQtbW9yZS1ob3Jpem9udGFsOmJlZm9yZSwuaW9uLWFuZHJvaWQtbW9yZS12ZXJ0aWNhbDpiZWZvcmUsLmlvbi1hbmRyb2lkLW5hdmlnYXRlOmJlZm9yZSwuaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uczpiZWZvcmUsLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtbm9uZTpiZWZvcmUsLmlvbi1hbmRyb2lkLW5vdGlmaWNhdGlvbnMtb2ZmOmJlZm9yZSwuaW9uLWFuZHJvaWQtb3BlbjpiZWZvcmUsLmlvbi1hbmRyb2lkLW9wdGlvbnM6YmVmb3JlLC5pb24tYW5kcm9pZC1wZW9wbGU6YmVmb3JlLC5pb24tYW5kcm9pZC1wZXJzb246YmVmb3JlLC5pb24tYW5kcm9pZC1wZXJzb24tYWRkOmJlZm9yZSwuaW9uLWFuZHJvaWQtcGhvbmUtbGFuZHNjYXBlOmJlZm9yZSwuaW9uLWFuZHJvaWQtcGhvbmUtcG9ydHJhaXQ6YmVmb3JlLC5pb24tYW5kcm9pZC1waW46YmVmb3JlLC5pb24tYW5kcm9pZC1wbGFuZTpiZWZvcmUsLmlvbi1hbmRyb2lkLXBsYXlzdG9yZTpiZWZvcmUsLmlvbi1hbmRyb2lkLXByaW50OmJlZm9yZSwuaW9uLWFuZHJvaWQtcmFkaW8tYnV0dG9uLW9mZjpiZWZvcmUsLmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vbjpiZWZvcmUsLmlvbi1hbmRyb2lkLXJlZnJlc2g6YmVmb3JlLC5pb24tYW5kcm9pZC1yZW1vdmU6YmVmb3JlLC5pb24tYW5kcm9pZC1yZW1vdmUtY2lyY2xlOmJlZm9yZSwuaW9uLWFuZHJvaWQtcmVzdGF1cmFudDpiZWZvcmUsLmlvbi1hbmRyb2lkLXNhZDpiZWZvcmUsLmlvbi1hbmRyb2lkLXNlYXJjaDpiZWZvcmUsLmlvbi1hbmRyb2lkLXNlbmQ6YmVmb3JlLC5pb24tYW5kcm9pZC1zZXR0aW5nczpiZWZvcmUsLmlvbi1hbmRyb2lkLXNoYXJlOmJlZm9yZSwuaW9uLWFuZHJvaWQtc2hhcmUtYWx0OmJlZm9yZSwuaW9uLWFuZHJvaWQtc3RhcjpiZWZvcmUsLmlvbi1hbmRyb2lkLXN0YXItaGFsZjpiZWZvcmUsLmlvbi1hbmRyb2lkLXN0YXItb3V0bGluZTpiZWZvcmUsLmlvbi1hbmRyb2lkLXN0b3B3YXRjaDpiZWZvcmUsLmlvbi1hbmRyb2lkLXN1YndheTpiZWZvcmUsLmlvbi1hbmRyb2lkLXN1bm55OmJlZm9yZSwuaW9uLWFuZHJvaWQtc3luYzpiZWZvcmUsLmlvbi1hbmRyb2lkLXRleHRzbXM6YmVmb3JlLC5pb24tYW5kcm9pZC10aW1lOmJlZm9yZSwuaW9uLWFuZHJvaWQtdHJhaW46YmVmb3JlLC5pb24tYW5kcm9pZC11bmxvY2s6YmVmb3JlLC5pb24tYW5kcm9pZC11cGxvYWQ6YmVmb3JlLC5pb24tYW5kcm9pZC12b2x1bWUtZG93bjpiZWZvcmUsLmlvbi1hbmRyb2lkLXZvbHVtZS1tdXRlOmJlZm9yZSwuaW9uLWFuZHJvaWQtdm9sdW1lLW9mZjpiZWZvcmUsLmlvbi1hbmRyb2lkLXZvbHVtZS11cDpiZWZvcmUsLmlvbi1hbmRyb2lkLXdhbGs6YmVmb3JlLC5pb24tYW5kcm9pZC13YXJuaW5nOmJlZm9yZSwuaW9uLWFuZHJvaWQtd2F0Y2g6YmVmb3JlLC5pb24tYW5kcm9pZC13aWZpOmJlZm9yZSwuaW9uLWFwZXJ0dXJlOmJlZm9yZSwuaW9uLWFyY2hpdmU6YmVmb3JlLC5pb24tYXJyb3ctZG93bi1hOmJlZm9yZSwuaW9uLWFycm93LWRvd24tYjpiZWZvcmUsLmlvbi1hcnJvdy1kb3duLWM6YmVmb3JlLC5pb24tYXJyb3ctZXhwYW5kOmJlZm9yZSwuaW9uLWFycm93LWdyYXBoLWRvd24tbGVmdDpiZWZvcmUsLmlvbi1hcnJvdy1ncmFwaC1kb3duLXJpZ2h0OmJlZm9yZSwuaW9uLWFycm93LWdyYXBoLXVwLWxlZnQ6YmVmb3JlLC5pb24tYXJyb3ctZ3JhcGgtdXAtcmlnaHQ6YmVmb3JlLC5pb24tYXJyb3ctbGVmdC1hOmJlZm9yZSwuaW9uLWFycm93LWxlZnQtYjpiZWZvcmUsLmlvbi1hcnJvdy1sZWZ0LWM6YmVmb3JlLC5pb24tYXJyb3ctbW92ZTpiZWZvcmUsLmlvbi1hcnJvdy1yZXNpemU6YmVmb3JlLC5pb24tYXJyb3ctcmV0dXJuLWxlZnQ6YmVmb3JlLC5pb24tYXJyb3ctcmV0dXJuLXJpZ2h0OmJlZm9yZSwuaW9uLWFycm93LXJpZ2h0LWE6YmVmb3JlLC5pb24tYXJyb3ctcmlnaHQtYjpiZWZvcmUsLmlvbi1hcnJvdy1yaWdodC1jOmJlZm9yZSwuaW9uLWFycm93LXNocmluazpiZWZvcmUsLmlvbi1hcnJvdy1zd2FwOmJlZm9yZSwuaW9uLWFycm93LXVwLWE6YmVmb3JlLC5pb24tYXJyb3ctdXAtYjpiZWZvcmUsLmlvbi1hcnJvdy11cC1jOmJlZm9yZSwuaW9uLWFzdGVyaXNrOmJlZm9yZSwuaW9uLWF0OmJlZm9yZSwuaW9uLWJhY2tzcGFjZTpiZWZvcmUsLmlvbi1iYWNrc3BhY2Utb3V0bGluZTpiZWZvcmUsLmlvbi1iYWc6YmVmb3JlLC5pb24tYmF0dGVyeS1jaGFyZ2luZzpiZWZvcmUsLmlvbi1iYXR0ZXJ5LWVtcHR5OmJlZm9yZSwuaW9uLWJhdHRlcnktZnVsbDpiZWZvcmUsLmlvbi1iYXR0ZXJ5LWhhbGY6YmVmb3JlLC5pb24tYmF0dGVyeS1sb3c6YmVmb3JlLC5pb24tYmVha2VyOmJlZm9yZSwuaW9uLWJlZXI6YmVmb3JlLC5pb24tYmx1ZXRvb3RoOmJlZm9yZSwuaW9uLWJvbmZpcmU6YmVmb3JlLC5pb24tYm9va21hcms6YmVmb3JlLC5pb24tYm93dGllOmJlZm9yZSwuaW9uLWJyaWVmY2FzZTpiZWZvcmUsLmlvbi1idWc6YmVmb3JlLC5pb24tY2FsY3VsYXRvcjpiZWZvcmUsLmlvbi1jYWxlbmRhcjpiZWZvcmUsLmlvbi1jYW1lcmE6YmVmb3JlLC5pb24tY2FyZDpiZWZvcmUsLmlvbi1jYXNoOmJlZm9yZSwuaW9uLWNoYXRib3g6YmVmb3JlLC5pb24tY2hhdGJveC13b3JraW5nOmJlZm9yZSwuaW9uLWNoYXRib3hlczpiZWZvcmUsLmlvbi1jaGF0YnViYmxlOmJlZm9yZSwuaW9uLWNoYXRidWJibGUtd29ya2luZzpiZWZvcmUsLmlvbi1jaGF0YnViYmxlczpiZWZvcmUsLmlvbi1jaGVja21hcms6YmVmb3JlLC5pb24tY2hlY2ttYXJrLWNpcmNsZWQ6YmVmb3JlLC5pb24tY2hlY2ttYXJrLXJvdW5kOmJlZm9yZSwuaW9uLWNoZXZyb24tZG93bjpiZWZvcmUsLmlvbi1jaGV2cm9uLWxlZnQ6YmVmb3JlLC5pb24tY2hldnJvbi1yaWdodDpiZWZvcmUsLmlvbi1jaGV2cm9uLXVwOmJlZm9yZSwuaW9uLWNsaXBib2FyZDpiZWZvcmUsLmlvbi1jbG9jazpiZWZvcmUsLmlvbi1jbG9zZTpiZWZvcmUsLmlvbi1jbG9zZS1jaXJjbGVkOmJlZm9yZSwuaW9uLWNsb3NlLXJvdW5kOmJlZm9yZSwuaW9uLWNsb3NlZC1jYXB0aW9uaW5nOmJlZm9yZSwuaW9uLWNsb3VkOmJlZm9yZSwuaW9uLWNvZGU6YmVmb3JlLC5pb24tY29kZS1kb3dubG9hZDpiZWZvcmUsLmlvbi1jb2RlLXdvcmtpbmc6YmVmb3JlLC5pb24tY29mZmVlOmJlZm9yZSwuaW9uLWNvbXBhc3M6YmVmb3JlLC5pb24tY29tcG9zZTpiZWZvcmUsLmlvbi1jb25uZWN0aW9uLWJhcnM6YmVmb3JlLC5pb24tY29udHJhc3Q6YmVmb3JlLC5pb24tY3JvcDpiZWZvcmUsLmlvbi1jdWJlOmJlZm9yZSwuaW9uLWRpc2M6YmVmb3JlLC5pb24tZG9jdW1lbnQ6YmVmb3JlLC5pb24tZG9jdW1lbnQtdGV4dDpiZWZvcmUsLmlvbi1kcmFnOmJlZm9yZSwuaW9uLWVhcnRoOmJlZm9yZSwuaW9uLWVhc2VsOmJlZm9yZSwuaW9uLWVkaXQ6YmVmb3JlLC5pb24tZWdnOmJlZm9yZSwuaW9uLWVqZWN0OmJlZm9yZSwuaW9uLWVtYWlsOmJlZm9yZSwuaW9uLWVtYWlsLXVucmVhZDpiZWZvcmUsLmlvbi1lcmxlbm1leWVyLWZsYXNrOmJlZm9yZSwuaW9uLWVybGVubWV5ZXItZmxhc2stYnViYmxlczpiZWZvcmUsLmlvbi1leWU6YmVmb3JlLC5pb24tZXllLWRpc2FibGVkOmJlZm9yZSwuaW9uLWZlbWFsZTpiZWZvcmUsLmlvbi1maWxpbmc6YmVmb3JlLC5pb24tZmlsbS1tYXJrZXI6YmVmb3JlLC5pb24tZmlyZWJhbGw6YmVmb3JlLC5pb24tZmxhZzpiZWZvcmUsLmlvbi1mbGFtZTpiZWZvcmUsLmlvbi1mbGFzaDpiZWZvcmUsLmlvbi1mbGFzaC1vZmY6YmVmb3JlLC5pb24tZm9sZGVyOmJlZm9yZSwuaW9uLWZvcms6YmVmb3JlLC5pb24tZm9yay1yZXBvOmJlZm9yZSwuaW9uLWZvcndhcmQ6YmVmb3JlLC5pb24tZnVubmVsOmJlZm9yZSwuaW9uLWdlYXItYTpiZWZvcmUsLmlvbi1nZWFyLWI6YmVmb3JlLC5pb24tZ3JpZDpiZWZvcmUsLmlvbi1oYW1tZXI6YmVmb3JlLC5pb24taGFwcHk6YmVmb3JlLC5pb24taGFwcHktb3V0bGluZTpiZWZvcmUsLmlvbi1oZWFkcGhvbmU6YmVmb3JlLC5pb24taGVhcnQ6YmVmb3JlLC5pb24taGVhcnQtYnJva2VuOmJlZm9yZSwuaW9uLWhlbHA6YmVmb3JlLC5pb24taGVscC1idW95OmJlZm9yZSwuaW9uLWhlbHAtY2lyY2xlZDpiZWZvcmUsLmlvbi1ob21lOmJlZm9yZSwuaW9uLWljZWNyZWFtOmJlZm9yZSwuaW9uLWltYWdlOmJlZm9yZSwuaW9uLWltYWdlczpiZWZvcmUsLmlvbi1pbmZvcm1hdGlvbjpiZWZvcmUsLmlvbi1pbmZvcm1hdGlvbi1jaXJjbGVkOmJlZm9yZSwuaW9uLWlvbmljOmJlZm9yZSwuaW9uLWlvcy1hbGFybTpiZWZvcmUsLmlvbi1pb3MtYWxhcm0tb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYWxidW1zOmJlZm9yZSwuaW9uLWlvcy1hbGJ1bXMtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbDpiZWZvcmUsLmlvbi1pb3MtYW1lcmljYW5mb290YmFsbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1hbmFseXRpY3M6YmVmb3JlLC5pb24taW9zLWFuYWx5dGljcy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1iYWNrOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1kb3duOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1mb3J3YXJkOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1sZWZ0OmJlZm9yZSwuaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmUsLmlvbi1pb3MtYXJyb3ctdGhpbi1kb3duOmJlZm9yZSwuaW9uLWlvcy1hcnJvdy10aGluLWxlZnQ6YmVmb3JlLC5pb24taW9zLWFycm93LXRoaW4tcmlnaHQ6YmVmb3JlLC5pb24taW9zLWFycm93LXRoaW4tdXA6YmVmb3JlLC5pb24taW9zLWFycm93LXVwOmJlZm9yZSwuaW9uLWlvcy1hdDpiZWZvcmUsLmlvbi1pb3MtYXQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYmFyY29kZTpiZWZvcmUsLmlvbi1pb3MtYmFyY29kZS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1iYXNlYmFsbDpiZWZvcmUsLmlvbi1pb3MtYmFzZWJhbGwtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYmFza2V0YmFsbDpiZWZvcmUsLmlvbi1pb3MtYmFza2V0YmFsbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1iZWxsOmJlZm9yZSwuaW9uLWlvcy1iZWxsLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJvZHk6YmVmb3JlLC5pb24taW9zLWJvZHktb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtYm9sdDpiZWZvcmUsLmlvbi1pb3MtYm9sdC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1ib29rOmJlZm9yZSwuaW9uLWlvcy1ib29rLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJvb2ttYXJrczpiZWZvcmUsLmlvbi1pb3MtYm9va21hcmtzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJveDpiZWZvcmUsLmlvbi1pb3MtYm94LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJyaWVmY2FzZTpiZWZvcmUsLmlvbi1pb3MtYnJpZWZjYXNlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWJyb3dzZXJzOmJlZm9yZSwuaW9uLWlvcy1icm93c2Vycy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jYWxjdWxhdG9yOmJlZm9yZSwuaW9uLWlvcy1jYWxjdWxhdG9yLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNhbGVuZGFyOmJlZm9yZSwuaW9uLWlvcy1jYWxlbmRhci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jYW1lcmE6YmVmb3JlLC5pb24taW9zLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jYXJ0OmJlZm9yZSwuaW9uLWlvcy1jYXJ0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNoYXRib3hlczpiZWZvcmUsLmlvbi1pb3MtY2hhdGJveGVzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNoYXRidWJibGU6YmVmb3JlLC5pb24taW9zLWNoYXRidWJibGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY2hlY2ttYXJrOmJlZm9yZSwuaW9uLWlvcy1jaGVja21hcmstZW1wdHk6YmVmb3JlLC5pb24taW9zLWNoZWNrbWFyay1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jaXJjbGUtZmlsbGVkOmJlZm9yZSwuaW9uLWlvcy1jaXJjbGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY2xvY2s6YmVmb3JlLC5pb24taW9zLWNsb2NrLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNsb3NlOmJlZm9yZSwuaW9uLWlvcy1jbG9zZS1lbXB0eTpiZWZvcmUsLmlvbi1pb3MtY2xvc2Utb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY2xvdWQ6YmVmb3JlLC5pb24taW9zLWNsb3VkLWRvd25sb2FkOmJlZm9yZSwuaW9uLWlvcy1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jbG91ZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jbG91ZC11cGxvYWQ6YmVmb3JlLC5pb24taW9zLWNsb3VkLXVwbG9hZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jbG91ZHk6YmVmb3JlLC5pb24taW9zLWNsb3VkeS1uaWdodDpiZWZvcmUsLmlvbi1pb3MtY2xvdWR5LW5pZ2h0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNsb3VkeS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb2c6YmVmb3JlLC5pb24taW9zLWNvZy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb2xvci1maWx0ZXI6YmVmb3JlLC5pb24taW9zLWNvbG9yLWZpbHRlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb2xvci13YW5kOmJlZm9yZSwuaW9uLWlvcy1jb2xvci13YW5kLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNvbXBvc2U6YmVmb3JlLC5pb24taW9zLWNvbXBvc2Utb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtY29udGFjdDpiZWZvcmUsLmlvbi1pb3MtY29udGFjdC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1jb3B5OmJlZm9yZSwuaW9uLWlvcy1jb3B5LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWNyb3A6YmVmb3JlLC5pb24taW9zLWNyb3Atc3Ryb25nOmJlZm9yZSwuaW9uLWlvcy1kb3dubG9hZDpiZWZvcmUsLmlvbi1pb3MtZG93bmxvYWQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZHJhZzpiZWZvcmUsLmlvbi1pb3MtZW1haWw6YmVmb3JlLC5pb24taW9zLWVtYWlsLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWV5ZTpiZWZvcmUsLmlvbi1pb3MtZXllLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWZhc3Rmb3J3YXJkOmJlZm9yZSwuaW9uLWlvcy1mYXN0Zm9yd2FyZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1maWxpbmc6YmVmb3JlLC5pb24taW9zLWZpbGluZy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1maWxtOmJlZm9yZSwuaW9uLWlvcy1maWxtLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWZsYWc6YmVmb3JlLC5pb24taW9zLWZsYWctb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZmxhbWU6YmVmb3JlLC5pb24taW9zLWZsYW1lLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWZsYXNrOmJlZm9yZSwuaW9uLWlvcy1mbGFzay1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1mbG93ZXI6YmVmb3JlLC5pb24taW9zLWZsb3dlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1mb2xkZXI6YmVmb3JlLC5pb24taW9zLWZvbGRlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1mb290YmFsbDpiZWZvcmUsLmlvbi1pb3MtZm9vdGJhbGwtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZ2FtZS1jb250cm9sbGVyLWE6YmVmb3JlLC5pb24taW9zLWdhbWUtY29udHJvbGxlci1hLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWdhbWUtY29udHJvbGxlci1iOmJlZm9yZSwuaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1nZWFyOmJlZm9yZSwuaW9uLWlvcy1nZWFyLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWdsYXNzZXM6YmVmb3JlLC5pb24taW9zLWdsYXNzZXMtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtZ3JpZC12aWV3OmJlZm9yZSwuaW9uLWlvcy1ncmlkLXZpZXctb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtaGVhcnQ6YmVmb3JlLC5pb24taW9zLWhlYXJ0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWhlbHA6YmVmb3JlLC5pb24taW9zLWhlbHAtZW1wdHk6YmVmb3JlLC5pb24taW9zLWhlbHAtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtaG9tZTpiZWZvcmUsLmlvbi1pb3MtaG9tZS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1pbmZpbml0ZTpiZWZvcmUsLmlvbi1pb3MtaW5maW5pdGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtaW5mb3JtYXRpb246YmVmb3JlLC5pb24taW9zLWluZm9ybWF0aW9uLWVtcHR5OmJlZm9yZSwuaW9uLWlvcy1pbmZvcm1hdGlvbi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1pb25pYy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1rZXlwYWQ6YmVmb3JlLC5pb24taW9zLWtleXBhZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1saWdodGJ1bGI6YmVmb3JlLC5pb24taW9zLWxpZ2h0YnVsYi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1saXN0OmJlZm9yZSwuaW9uLWlvcy1saXN0LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLWxvY2F0aW9uOmJlZm9yZSwuaW9uLWlvcy1sb2NhdGlvbi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1sb2NrZWQ6YmVmb3JlLC5pb24taW9zLWxvY2tlZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1sb29wOmJlZm9yZSwuaW9uLWlvcy1sb29wLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3MtbWVkaWNhbDpiZWZvcmUsLmlvbi1pb3MtbWVkaWNhbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1tZWRraXQ6YmVmb3JlLC5pb24taW9zLW1lZGtpdC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1taWM6YmVmb3JlLC5pb24taW9zLW1pYy1vZmY6YmVmb3JlLC5pb24taW9zLW1pYy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1taW51czpiZWZvcmUsLmlvbi1pb3MtbWludXMtZW1wdHk6YmVmb3JlLC5pb24taW9zLW1pbnVzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLW1vbml0b3I6YmVmb3JlLC5pb24taW9zLW1vbml0b3Itb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtbW9vbjpiZWZvcmUsLmlvbi1pb3MtbW9vbi1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1tb3JlOmJlZm9yZSwuaW9uLWlvcy1tb3JlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLW11c2ljYWwtbm90ZTpiZWZvcmUsLmlvbi1pb3MtbXVzaWNhbC1ub3RlczpiZWZvcmUsLmlvbi1pb3MtbmF2aWdhdGU6YmVmb3JlLC5pb24taW9zLW5hdmlnYXRlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLW51dHJpdGlvbjpiZWZvcmUsLmlvbi1pb3MtbnV0cml0aW9uLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXBhcGVyOmJlZm9yZSwuaW9uLWlvcy1wYXBlci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1wYXBlcnBsYW5lOmJlZm9yZSwuaW9uLWlvcy1wYXBlcnBsYW5lLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXBhcnRseXN1bm55OmJlZm9yZSwuaW9uLWlvcy1wYXJ0bHlzdW5ueS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1wYXVzZTpiZWZvcmUsLmlvbi1pb3MtcGF1c2Utb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGF3OmJlZm9yZSwuaW9uLWlvcy1wYXctb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGVvcGxlOmJlZm9yZSwuaW9uLWlvcy1wZW9wbGUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGVyc29uOmJlZm9yZSwuaW9uLWlvcy1wZXJzb24tb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGVyc29uYWRkOmJlZm9yZSwuaW9uLWlvcy1wZXJzb25hZGQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGhvdG9zOmJlZm9yZSwuaW9uLWlvcy1waG90b3Mtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGllOmJlZm9yZSwuaW9uLWlvcy1waWUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcGludDpiZWZvcmUsLmlvbi1pb3MtcGludC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1wbGF5OmJlZm9yZSwuaW9uLWlvcy1wbGF5LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXBsdXM6YmVmb3JlLC5pb24taW9zLXBsdXMtZW1wdHk6YmVmb3JlLC5pb24taW9zLXBsdXMtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcHJpY2V0YWc6YmVmb3JlLC5pb24taW9zLXByaWNldGFnLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXByaWNldGFnczpiZWZvcmUsLmlvbi1pb3MtcHJpY2V0YWdzLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXByaW50ZXI6YmVmb3JlLC5pb24taW9zLXByaW50ZXItb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcHVsc2U6YmVmb3JlLC5pb24taW9zLXB1bHNlLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3MtcmFpbnk6YmVmb3JlLC5pb24taW9zLXJhaW55LW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXJlY29yZGluZzpiZWZvcmUsLmlvbi1pb3MtcmVjb3JkaW5nLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXJlZG86YmVmb3JlLC5pb24taW9zLXJlZG8tb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtcmVmcmVzaDpiZWZvcmUsLmlvbi1pb3MtcmVmcmVzaC1lbXB0eTpiZWZvcmUsLmlvbi1pb3MtcmVmcmVzaC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1yZWxvYWQ6YmVmb3JlLC5pb24taW9zLXJldmVyc2UtY2FtZXJhOmJlZm9yZSwuaW9uLWlvcy1yZXZlcnNlLWNhbWVyYS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1yZXdpbmQ6YmVmb3JlLC5pb24taW9zLXJld2luZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1yb3NlOmJlZm9yZSwuaW9uLWlvcy1yb3NlLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXNlYXJjaDpiZWZvcmUsLmlvbi1pb3Mtc2VhcmNoLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3Mtc2V0dGluZ3M6YmVmb3JlLC5pb24taW9zLXNldHRpbmdzLXN0cm9uZzpiZWZvcmUsLmlvbi1pb3Mtc2h1ZmZsZTpiZWZvcmUsLmlvbi1pb3Mtc2h1ZmZsZS1zdHJvbmc6YmVmb3JlLC5pb24taW9zLXNraXBiYWNrd2FyZDpiZWZvcmUsLmlvbi1pb3Mtc2tpcGJhY2t3YXJkLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXNraXBmb3J3YXJkOmJlZm9yZSwuaW9uLWlvcy1za2lwZm9yd2FyZC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1zbm93eTpiZWZvcmUsLmlvbi1pb3Mtc3BlZWRvbWV0ZXI6YmVmb3JlLC5pb24taW9zLXNwZWVkb21ldGVyLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXN0YXI6YmVmb3JlLC5pb24taW9zLXN0YXItaGFsZjpiZWZvcmUsLmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1zdG9wd2F0Y2g6YmVmb3JlLC5pb24taW9zLXN0b3B3YXRjaC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy1zdW5ueTpiZWZvcmUsLmlvbi1pb3Mtc3Vubnktb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdGVsZXBob25lOmJlZm9yZSwuaW9uLWlvcy10ZWxlcGhvbmUtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdGVubmlzYmFsbDpiZWZvcmUsLmlvbi1pb3MtdGVubmlzYmFsbC1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10aHVuZGVyc3Rvcm06YmVmb3JlLC5pb24taW9zLXRodW5kZXJzdG9ybS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10aW1lOmJlZm9yZSwuaW9uLWlvcy10aW1lLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXRpbWVyOmJlZm9yZSwuaW9uLWlvcy10aW1lci1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10b2dnbGU6YmVmb3JlLC5pb24taW9zLXRvZ2dsZS1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy10cmFzaDpiZWZvcmUsLmlvbi1pb3MtdHJhc2gtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdW5kbzpiZWZvcmUsLmlvbi1pb3MtdW5kby1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy11bmxvY2tlZDpiZWZvcmUsLmlvbi1pb3MtdW5sb2NrZWQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdXBsb2FkOmJlZm9yZSwuaW9uLWlvcy11cGxvYWQtb3V0bGluZTpiZWZvcmUsLmlvbi1pb3MtdmlkZW9jYW06YmVmb3JlLC5pb24taW9zLXZpZGVvY2FtLW91dGxpbmU6YmVmb3JlLC5pb24taW9zLXZvbHVtZS1oaWdoOmJlZm9yZSwuaW9uLWlvcy12b2x1bWUtbG93OmJlZm9yZSwuaW9uLWlvcy13aW5lZ2xhc3M6YmVmb3JlLC5pb24taW9zLXdpbmVnbGFzcy1vdXRsaW5lOmJlZm9yZSwuaW9uLWlvcy13b3JsZDpiZWZvcmUsLmlvbi1pb3Mtd29ybGQtb3V0bGluZTpiZWZvcmUsLmlvbi1pcGFkOmJlZm9yZSwuaW9uLWlwaG9uZTpiZWZvcmUsLmlvbi1pcG9kOmJlZm9yZSwuaW9uLWpldDpiZWZvcmUsLmlvbi1rZXk6YmVmb3JlLC5pb24ta25pZmU6YmVmb3JlLC5pb24tbGFwdG9wOmJlZm9yZSwuaW9uLWxlYWY6YmVmb3JlLC5pb24tbGV2ZWxzOmJlZm9yZSwuaW9uLWxpZ2h0YnVsYjpiZWZvcmUsLmlvbi1saW5rOmJlZm9yZSwuaW9uLWxvYWQtYTpiZWZvcmUsLmlvbi1sb2FkLWI6YmVmb3JlLC5pb24tbG9hZC1jOmJlZm9yZSwuaW9uLWxvYWQtZDpiZWZvcmUsLmlvbi1sb2NhdGlvbjpiZWZvcmUsLmlvbi1sb2NrLWNvbWJpbmF0aW9uOmJlZm9yZSwuaW9uLWxvY2tlZDpiZWZvcmUsLmlvbi1sb2ctaW46YmVmb3JlLC5pb24tbG9nLW91dDpiZWZvcmUsLmlvbi1sb29wOmJlZm9yZSwuaW9uLW1hZ25ldDpiZWZvcmUsLmlvbi1tYWxlOmJlZm9yZSwuaW9uLW1hbjpiZWZvcmUsLmlvbi1tYXA6YmVmb3JlLC5pb24tbWVka2l0OmJlZm9yZSwuaW9uLW1lcmdlOmJlZm9yZSwuaW9uLW1pYy1hOmJlZm9yZSwuaW9uLW1pYy1iOmJlZm9yZSwuaW9uLW1pYy1jOmJlZm9yZSwuaW9uLW1pbnVzOmJlZm9yZSwuaW9uLW1pbnVzLWNpcmNsZWQ6YmVmb3JlLC5pb24tbWludXMtcm91bmQ6YmVmb3JlLC5pb24tbW9kZWwtczpiZWZvcmUsLmlvbi1tb25pdG9yOmJlZm9yZSwuaW9uLW1vcmU6YmVmb3JlLC5pb24tbW91c2U6YmVmb3JlLC5pb24tbXVzaWMtbm90ZTpiZWZvcmUsLmlvbi1uYXZpY29uOmJlZm9yZSwuaW9uLW5hdmljb24tcm91bmQ6YmVmb3JlLC5pb24tbmF2aWdhdGU6YmVmb3JlLC5pb24tbmV0d29yazpiZWZvcmUsLmlvbi1uby1zbW9raW5nOmJlZm9yZSwuaW9uLW51Y2xlYXI6YmVmb3JlLC5pb24tb3V0bGV0OmJlZm9yZSwuaW9uLXBhaW50YnJ1c2g6YmVmb3JlLC5pb24tcGFpbnRidWNrZXQ6YmVmb3JlLC5pb24tcGFwZXItYWlycGxhbmU6YmVmb3JlLC5pb24tcGFwZXJjbGlwOmJlZm9yZSwuaW9uLXBhdXNlOmJlZm9yZSwuaW9uLXBlcnNvbjpiZWZvcmUsLmlvbi1wZXJzb24tYWRkOmJlZm9yZSwuaW9uLXBlcnNvbi1zdGFsa2VyOmJlZm9yZSwuaW9uLXBpZS1ncmFwaDpiZWZvcmUsLmlvbi1waW46YmVmb3JlLC5pb24tcGlucG9pbnQ6YmVmb3JlLC5pb24tcGl6emE6YmVmb3JlLC5pb24tcGxhbmU6YmVmb3JlLC5pb24tcGxhbmV0OmJlZm9yZSwuaW9uLXBsYXk6YmVmb3JlLC5pb24tcGxheXN0YXRpb246YmVmb3JlLC5pb24tcGx1czpiZWZvcmUsLmlvbi1wbHVzLWNpcmNsZWQ6YmVmb3JlLC5pb24tcGx1cy1yb3VuZDpiZWZvcmUsLmlvbi1wb2RpdW06YmVmb3JlLC5pb24tcG91bmQ6YmVmb3JlLC5pb24tcG93ZXI6YmVmb3JlLC5pb24tcHJpY2V0YWc6YmVmb3JlLC5pb24tcHJpY2V0YWdzOmJlZm9yZSwuaW9uLXByaW50ZXI6YmVmb3JlLC5pb24tcHVsbC1yZXF1ZXN0OmJlZm9yZSwuaW9uLXFyLXNjYW5uZXI6YmVmb3JlLC5pb24tcXVvdGU6YmVmb3JlLC5pb24tcmFkaW8td2F2ZXM6YmVmb3JlLC5pb24tcmVjb3JkOmJlZm9yZSwuaW9uLXJlZnJlc2g6YmVmb3JlLC5pb24tcmVwbHk6YmVmb3JlLC5pb24tcmVwbHktYWxsOmJlZm9yZSwuaW9uLXJpYmJvbi1hOmJlZm9yZSwuaW9uLXJpYmJvbi1iOmJlZm9yZSwuaW9uLXNhZDpiZWZvcmUsLmlvbi1zYWQtb3V0bGluZTpiZWZvcmUsLmlvbi1zY2lzc29yczpiZWZvcmUsLmlvbi1zZWFyY2g6YmVmb3JlLC5pb24tc2V0dGluZ3M6YmVmb3JlLC5pb24tc2hhcmU6YmVmb3JlLC5pb24tc2h1ZmZsZTpiZWZvcmUsLmlvbi1za2lwLWJhY2t3YXJkOmJlZm9yZSwuaW9uLXNraXAtZm9yd2FyZDpiZWZvcmUsLmlvbi1zb2NpYWwtYW5kcm9pZDpiZWZvcmUsLmlvbi1zb2NpYWwtYW5kcm9pZC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1hbmd1bGFyOmJlZm9yZSwuaW9uLXNvY2lhbC1hbmd1bGFyLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWFwcGxlOmJlZm9yZSwuaW9uLXNvY2lhbC1hcHBsZS1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1iaXRjb2luOmJlZm9yZSwuaW9uLXNvY2lhbC1iaXRjb2luLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWJ1ZmZlcjpiZWZvcmUsLmlvbi1zb2NpYWwtYnVmZmVyLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWNocm9tZTpiZWZvcmUsLmlvbi1zb2NpYWwtY2hyb21lLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWNvZGVwZW46YmVmb3JlLC5pb24tc29jaWFsLWNvZGVwZW4tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtY3NzMzpiZWZvcmUsLmlvbi1zb2NpYWwtY3NzMy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1kZXNpZ25lcm5ld3M6YmVmb3JlLC5pb24tc29jaWFsLWRlc2lnbmVybmV3cy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1kcmliYmJsZTpiZWZvcmUsLmlvbi1zb2NpYWwtZHJpYmJibGUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtZHJvcGJveDpiZWZvcmUsLmlvbi1zb2NpYWwtZHJvcGJveC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1ldXJvOmJlZm9yZSwuaW9uLXNvY2lhbC1ldXJvLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWZhY2Vib29rOmJlZm9yZSwuaW9uLXNvY2lhbC1mYWNlYm9vay1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1mb3Vyc3F1YXJlOmJlZm9yZSwuaW9uLXNvY2lhbC1mb3Vyc3F1YXJlLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWZyZWVic2QtZGV2aWw6YmVmb3JlLC5pb24tc29jaWFsLWdpdGh1YjpiZWZvcmUsLmlvbi1zb2NpYWwtZ2l0aHViLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWdvb2dsZTpiZWZvcmUsLmlvbi1zb2NpYWwtZ29vZ2xlLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLWdvb2dsZXBsdXM6YmVmb3JlLC5pb24tc29jaWFsLWdvb2dsZXBsdXMtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtaGFja2VybmV3czpiZWZvcmUsLmlvbi1zb2NpYWwtaGFja2VybmV3cy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1odG1sNTpiZWZvcmUsLmlvbi1zb2NpYWwtaHRtbDUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtaW5zdGFncmFtOmJlZm9yZSwuaW9uLXNvY2lhbC1pbnN0YWdyYW0tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtamF2YXNjcmlwdDpiZWZvcmUsLmlvbi1zb2NpYWwtamF2YXNjcmlwdC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1saW5rZWRpbjpiZWZvcmUsLmlvbi1zb2NpYWwtbGlua2VkaW4tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtbWFya2Rvd246YmVmb3JlLC5pb24tc29jaWFsLW5vZGVqczpiZWZvcmUsLmlvbi1zb2NpYWwtb2N0b2NhdDpiZWZvcmUsLmlvbi1zb2NpYWwtcGludGVyZXN0OmJlZm9yZSwuaW9uLXNvY2lhbC1waW50ZXJlc3Qtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtcHl0aG9uOmJlZm9yZSwuaW9uLXNvY2lhbC1yZWRkaXQ6YmVmb3JlLC5pb24tc29jaWFsLXJlZGRpdC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1yc3M6YmVmb3JlLC5pb24tc29jaWFsLXJzcy1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC1zYXNzOmJlZm9yZSwuaW9uLXNvY2lhbC1za3lwZTpiZWZvcmUsLmlvbi1zb2NpYWwtc2t5cGUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtc25hcGNoYXQ6YmVmb3JlLC5pb24tc29jaWFsLXNuYXBjaGF0LW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXR1bWJscjpiZWZvcmUsLmlvbi1zb2NpYWwtdHVtYmxyLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXR1eDpiZWZvcmUsLmlvbi1zb2NpYWwtdHdpdGNoOmJlZm9yZSwuaW9uLXNvY2lhbC10d2l0Y2gtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtdHdpdHRlcjpiZWZvcmUsLmlvbi1zb2NpYWwtdHdpdHRlci1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC11c2Q6YmVmb3JlLC5pb24tc29jaWFsLXVzZC1vdXRsaW5lOmJlZm9yZSwuaW9uLXNvY2lhbC12aW1lbzpiZWZvcmUsLmlvbi1zb2NpYWwtdmltZW8tb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtd2hhdHNhcHA6YmVmb3JlLC5pb24tc29jaWFsLXdoYXRzYXBwLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXdpbmRvd3M6YmVmb3JlLC5pb24tc29jaWFsLXdpbmRvd3Mtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwtd29yZHByZXNzOmJlZm9yZSwuaW9uLXNvY2lhbC13b3JkcHJlc3Mtb3V0bGluZTpiZWZvcmUsLmlvbi1zb2NpYWwteWFob286YmVmb3JlLC5pb24tc29jaWFsLXlhaG9vLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXllbjpiZWZvcmUsLmlvbi1zb2NpYWwteWVuLW91dGxpbmU6YmVmb3JlLC5pb24tc29jaWFsLXlvdXR1YmU6YmVmb3JlLC5pb24tc29jaWFsLXlvdXR1YmUtb3V0bGluZTpiZWZvcmUsLmlvbi1zb3VwLWNhbjpiZWZvcmUsLmlvbi1zb3VwLWNhbi1vdXRsaW5lOmJlZm9yZSwuaW9uLXNwZWFrZXJwaG9uZTpiZWZvcmUsLmlvbi1zcGVlZG9tZXRlcjpiZWZvcmUsLmlvbi1zcG9vbjpiZWZvcmUsLmlvbi1zdGFyOmJlZm9yZSwuaW9uLXN0YXRzLWJhcnM6YmVmb3JlLC5pb24tc3RlYW06YmVmb3JlLC5pb24tc3RvcDpiZWZvcmUsLmlvbi10aGVybW9tZXRlcjpiZWZvcmUsLmlvbi10aHVtYnNkb3duOmJlZm9yZSwuaW9uLXRodW1ic3VwOmJlZm9yZSwuaW9uLXRvZ2dsZTpiZWZvcmUsLmlvbi10b2dnbGUtZmlsbGVkOmJlZm9yZSwuaW9uLXRyYW5zZ2VuZGVyOmJlZm9yZSwuaW9uLXRyYXNoLWE6YmVmb3JlLC5pb24tdHJhc2gtYjpiZWZvcmUsLmlvbi10cm9waHk6YmVmb3JlLC5pb24tdHNoaXJ0OmJlZm9yZSwuaW9uLXRzaGlydC1vdXRsaW5lOmJlZm9yZSwuaW9uLXVtYnJlbGxhOmJlZm9yZSwuaW9uLXVuaXZlcnNpdHk6YmVmb3JlLC5pb24tdW5sb2NrZWQ6YmVmb3JlLC5pb24tdXBsb2FkOmJlZm9yZSwuaW9uLXVzYjpiZWZvcmUsLmlvbi12aWRlb2NhbWVyYTpiZWZvcmUsLmlvbi12b2x1bWUtaGlnaDpiZWZvcmUsLmlvbi12b2x1bWUtbG93OmJlZm9yZSwuaW9uLXZvbHVtZS1tZWRpdW06YmVmb3JlLC5pb24tdm9sdW1lLW11dGU6YmVmb3JlLC5pb24td2FuZDpiZWZvcmUsLmlvbi13YXRlcmRyb3A6YmVmb3JlLC5pb24td2lmaTpiZWZvcmUsLmlvbi13aW5lZ2xhc3M6YmVmb3JlLC5pb24td29tYW46YmVmb3JlLC5pb24td3JlbmNoOmJlZm9yZSwuaW9uLXhib3g6YmVmb3Jle2Rpc3BsYXk6aW5saW5lLWJsb2NrO2ZvbnQtZmFtaWx5OlxcXCJJb25pY29uc1xcXCI7c3BlYWs6bm9uZTtmb250LXN0eWxlOm5vcm1hbDtmb250LXdlaWdodDpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDt0ZXh0LXRyYW5zZm9ybTpub25lO3RleHQtcmVuZGVyaW5nOmF1dG87bGluZS1oZWlnaHQ6MTstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkOy1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZX0uaW9uLWFsZXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwMVxcXCJ9Lmlvbi1hbGVydC1jaXJjbGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwMFxcXCJ9Lmlvbi1hbmRyb2lkLWFkZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYzdcXFwifS5pb24tYW5kcm9pZC1hZGQtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1OVxcXCJ9Lmlvbi1hbmRyb2lkLWFsYXJtLWNsb2NrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1YVxcXCJ9Lmlvbi1hbmRyb2lkLWFsZXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1YlxcXCJ9Lmlvbi1hbmRyb2lkLWFwcHM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzVjXFxcIn0uaW9uLWFuZHJvaWQtYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYzlcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1iYWNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJjYVxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzVkXFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzVmXFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcGRvd24tY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1ZVxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2MVxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LWRyb3BsZWZ0LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjBcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1kcm9wcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzYzXFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHJpZ2h0LWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjJcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1kcm9wdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzY1XFxcIn0uaW9uLWFuZHJvaWQtYXJyb3ctZHJvcHVwLWNpcmNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjRcXFwifS5pb24tYW5kcm9pZC1hcnJvdy1mb3J3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMwZlxcXCJ9Lmlvbi1hbmRyb2lkLWFycm93LXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2NlxcXCJ9Lmlvbi1hbmRyb2lkLWF0dGFjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjdcXFwifS5pb24tYW5kcm9pZC1iYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzY4XFxcIn0uaW9uLWFuZHJvaWQtYmljeWNsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNjlcXFwifS5pb24tYW5kcm9pZC1ib2F0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2YVxcXCJ9Lmlvbi1hbmRyb2lkLWJvb2ttYXJrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2YlxcXCJ9Lmlvbi1hbmRyb2lkLWJ1bGI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzZjXFxcIn0uaW9uLWFuZHJvaWQtYnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM2ZFxcXCJ9Lmlvbi1hbmRyb2lkLWNhbGVuZGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkMVxcXCJ9Lmlvbi1hbmRyb2lkLWNhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmQyXFxcIn0uaW9uLWFuZHJvaWQtY2FtZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkM1xcXCJ9Lmlvbi1hbmRyb2lkLWNhbmNlbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNmVcXFwifS5pb24tYW5kcm9pZC1jYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzZmXFxcIn0uaW9uLWFuZHJvaWQtY2FydDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzBcXFwifS5pb24tYW5kcm9pZC1jaGF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkNFxcXCJ9Lmlvbi1hbmRyb2lkLWNoZWNrYm94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3NFxcXCJ9Lmlvbi1hbmRyb2lkLWNoZWNrYm94LWJsYW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3MVxcXCJ9Lmlvbi1hbmRyb2lkLWNoZWNrYm94LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzczXFxcIn0uaW9uLWFuZHJvaWQtY2hlY2tib3gtb3V0bGluZS1ibGFuazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzJcXFwifS5pb24tYW5kcm9pZC1jaGVja21hcmstY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3NVxcXCJ9Lmlvbi1hbmRyb2lkLWNsaXBib2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzZcXFwifS5pb24tYW5kcm9pZC1jbG9zZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZDdcXFwifS5pb24tYW5kcm9pZC1jbG91ZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzN2FcXFwifS5pb24tYW5kcm9pZC1jbG91ZC1jaXJjbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzc3XFxcIn0uaW9uLWFuZHJvaWQtY2xvdWQtZG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNzhcXFwifS5pb24tYW5kcm9pZC1jbG91ZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3OVxcXCJ9Lmlvbi1hbmRyb2lkLWNvbG9yLXBhbGV0dGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzdiXFxcIn0uaW9uLWFuZHJvaWQtY29tcGFzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzN2NcXFwifS5pb24tYW5kcm9pZC1jb250YWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkOFxcXCJ9Lmlvbi1hbmRyb2lkLWNvbnRhY3RzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkOVxcXCJ9Lmlvbi1hbmRyb2lkLWNvbnRyYWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM3ZFxcXCJ9Lmlvbi1hbmRyb2lkLWNyZWF0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzN2VcXFwifS5pb24tYW5kcm9pZC1kZWxldGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzdmXFxcIn0uaW9uLWFuZHJvaWQtZGVza3RvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODBcXFwifS5pb24tYW5kcm9pZC1kb2N1bWVudDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODFcXFwifS5pb24tYW5kcm9pZC1kb25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4M1xcXCJ9Lmlvbi1hbmRyb2lkLWRvbmUtYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4MlxcXCJ9Lmlvbi1hbmRyb2lkLWRvd25sb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJkZFxcXCJ9Lmlvbi1hbmRyb2lkLWRyYWZ0czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODRcXFwifS5pb24tYW5kcm9pZC1leGl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4NVxcXCJ9Lmlvbi1hbmRyb2lkLWV4cGFuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODZcXFwifS5pb24tYW5kcm9pZC1mYXZvcml0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzODhcXFwifS5pb24tYW5kcm9pZC1mYXZvcml0ZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4N1xcXCJ9Lmlvbi1hbmRyb2lkLWZpbG06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzg5XFxcIn0uaW9uLWFuZHJvaWQtZm9sZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJlMFxcXCJ9Lmlvbi1hbmRyb2lkLWZvbGRlci1vcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM4YVxcXCJ9Lmlvbi1hbmRyb2lkLWZ1bm5lbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOGJcXFwifS5pb24tYW5kcm9pZC1nbG9iZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOGNcXFwifS5pb24tYW5kcm9pZC1oYW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJlM1xcXCJ9Lmlvbi1hbmRyb2lkLWhhbmdvdXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzhkXFxcIn0uaW9uLWFuZHJvaWQtaGFwcHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzhlXFxcIn0uaW9uLWFuZHJvaWQtaG9tZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOGZcXFwifS5pb24tYW5kcm9pZC1pbWFnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZTRcXFwifS5pb24tYW5kcm9pZC1sYXB0b3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzkwXFxcIn0uaW9uLWFuZHJvaWQtbGlzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOTFcXFwifS5pb24tYW5kcm9pZC1sb2NhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmU5XFxcIn0uaW9uLWFuZHJvaWQtbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOTJcXFwifS5pb24tYW5kcm9pZC1tYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJlYlxcXCJ9Lmlvbi1hbmRyb2lkLW1hcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOTNcXFwifS5pb24tYW5kcm9pZC1tZW51OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5NFxcXCJ9Lmlvbi1hbmRyb2lkLW1pY3JvcGhvbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmVjXFxcIn0uaW9uLWFuZHJvaWQtbWljcm9waG9uZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzk1XFxcIn0uaW9uLWFuZHJvaWQtbW9yZS1ob3Jpem9udGFsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5NlxcXCJ9Lmlvbi1hbmRyb2lkLW1vcmUtdmVydGljYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzk3XFxcIn0uaW9uLWFuZHJvaWQtbmF2aWdhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzk4XFxcIn0uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9uczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOWJcXFwifS5pb24tYW5kcm9pZC1ub3RpZmljYXRpb25zLW5vbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzk5XFxcIn0uaW9uLWFuZHJvaWQtbm90aWZpY2F0aW9ucy1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzlhXFxcIn0uaW9uLWFuZHJvaWQtb3BlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOWNcXFwifS5pb24tYW5kcm9pZC1vcHRpb25zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM5ZFxcXCJ9Lmlvbi1hbmRyb2lkLXBlb3BsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOWVcXFwifS5pb24tYW5kcm9pZC1wZXJzb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2EwXFxcIn0uaW9uLWFuZHJvaWQtcGVyc29uLWFkZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzOWZcXFwifS5pb24tYW5kcm9pZC1waG9uZS1sYW5kc2NhcGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2ExXFxcIn0uaW9uLWFuZHJvaWQtcGhvbmUtcG9ydHJhaXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2EyXFxcIn0uaW9uLWFuZHJvaWQtcGluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhM1xcXCJ9Lmlvbi1hbmRyb2lkLXBsYW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhNFxcXCJ9Lmlvbi1hbmRyb2lkLXBsYXlzdG9yZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZjBcXFwifS5pb24tYW5kcm9pZC1wcmludDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYTVcXFwifS5pb24tYW5kcm9pZC1yYWRpby1idXR0b24tb2ZmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhNlxcXCJ9Lmlvbi1hbmRyb2lkLXJhZGlvLWJ1dHRvbi1vbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYTdcXFwifS5pb24tYW5kcm9pZC1yZWZyZXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhOFxcXCJ9Lmlvbi1hbmRyb2lkLXJlbW92ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZjRcXFwifS5pb24tYW5kcm9pZC1yZW1vdmUtY2lyY2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhOVxcXCJ9Lmlvbi1hbmRyb2lkLXJlc3RhdXJhbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2FhXFxcIn0uaW9uLWFuZHJvaWQtc2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNhYlxcXCJ9Lmlvbi1hbmRyb2lkLXNlYXJjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyZjVcXFwifS5pb24tYW5kcm9pZC1zZW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJmNlxcXCJ9Lmlvbi1hbmRyb2lkLXNldHRpbmdzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJmN1xcXCJ9Lmlvbi1hbmRyb2lkLXNoYXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJmOFxcXCJ9Lmlvbi1hbmRyb2lkLXNoYXJlLWFsdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYWNcXFwifS5pb24tYW5kcm9pZC1zdGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJmY1xcXCJ9Lmlvbi1hbmRyb2lkLXN0YXItaGFsZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYWRcXFwifS5pb24tYW5kcm9pZC1zdGFyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2FlXFxcIn0uaW9uLWFuZHJvaWQtc3RvcHdhdGNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJmZFxcXCJ9Lmlvbi1hbmRyb2lkLXN1YndheTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYWZcXFwifS5pb24tYW5kcm9pZC1zdW5ueTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjBcXFwifS5pb24tYW5kcm9pZC1zeW5jOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiMVxcXCJ9Lmlvbi1hbmRyb2lkLXRleHRzbXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2IyXFxcIn0uaW9uLWFuZHJvaWQtdGltZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjNcXFwifS5pb24tYW5kcm9pZC10cmFpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYjRcXFwifS5pb24tYW5kcm9pZC11bmxvY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2I1XFxcIn0uaW9uLWFuZHJvaWQtdXBsb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiNlxcXCJ9Lmlvbi1hbmRyb2lkLXZvbHVtZS1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiN1xcXCJ9Lmlvbi1hbmRyb2lkLXZvbHVtZS1tdXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiOFxcXCJ9Lmlvbi1hbmRyb2lkLXZvbHVtZS1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2I5XFxcIn0uaW9uLWFuZHJvaWQtdm9sdW1lLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiYVxcXCJ9Lmlvbi1hbmRyb2lkLXdhbGs6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2JiXFxcIn0uaW9uLWFuZHJvaWQtd2FybmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYmNcXFwifS5pb24tYW5kcm9pZC13YXRjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYmRcXFwifS5pb24tYW5kcm9pZC13aWZpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMwNVxcXCJ9Lmlvbi1hcGVydHVyZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMTNcXFwifS5pb24tYXJjaGl2ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDJcXFwifS5pb24tYXJyb3ctZG93bi1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwM1xcXCJ9Lmlvbi1hcnJvdy1kb3duLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTA0XFxcIn0uaW9uLWFycm93LWRvd24tYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDVcXFwifS5pb24tYXJyb3ctZXhwYW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1ZVxcXCJ9Lmlvbi1hcnJvdy1ncmFwaC1kb3duLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjVmXFxcIn0uaW9uLWFycm93LWdyYXBoLWRvd24tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjYwXFxcIn0uaW9uLWFycm93LWdyYXBoLXVwLWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjYxXFxcIn0uaW9uLWFycm93LWdyYXBoLXVwLXJpZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2MlxcXCJ9Lmlvbi1hcnJvdy1sZWZ0LWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTA2XFxcIn0uaW9uLWFycm93LWxlZnQtYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMDdcXFwifS5pb24tYXJyb3ctbGVmdC1jOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwOFxcXCJ9Lmlvbi1hcnJvdy1tb3ZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2M1xcXCJ9Lmlvbi1hcnJvdy1yZXNpemU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjY0XFxcIn0uaW9uLWFycm93LXJldHVybi1sZWZ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2NVxcXCJ9Lmlvbi1hcnJvdy1yZXR1cm4tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjY2XFxcIn0uaW9uLWFycm93LXJpZ2h0LWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTA5XFxcIn0uaW9uLWFycm93LXJpZ2h0LWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTBhXFxcIn0uaW9uLWFycm93LXJpZ2h0LWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTBiXFxcIn0uaW9uLWFycm93LXNocmluazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNjdcXFwifS5pb24tYXJyb3ctc3dhcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNjhcXFwifS5pb24tYXJyb3ctdXAtYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMGNcXFwifS5pb24tYXJyb3ctdXAtYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMGRcXFwifS5pb24tYXJyb3ctdXAtYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMGVcXFwifS5pb24tYXN0ZXJpc2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzE0XFxcIn0uaW9uLWF0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEwZlxcXCJ9Lmlvbi1iYWNrc3BhY2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2JmXFxcIn0uaW9uLWJhY2tzcGFjZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNiZVxcXCJ9Lmlvbi1iYWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTEwXFxcIn0uaW9uLWJhdHRlcnktY2hhcmdpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTExXFxcIn0uaW9uLWJhdHRlcnktZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTEyXFxcIn0uaW9uLWJhdHRlcnktZnVsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMTNcXFwifS5pb24tYmF0dGVyeS1oYWxmOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExNFxcXCJ9Lmlvbi1iYXR0ZXJ5LWxvdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMTVcXFwifS5pb24tYmVha2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2OVxcXCJ9Lmlvbi1iZWVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2YVxcXCJ9Lmlvbi1ibHVldG9vdGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTE2XFxcIn0uaW9uLWJvbmZpcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzE1XFxcIn0uaW9uLWJvb2ttYXJrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2YlxcXCJ9Lmlvbi1ib3d0aWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2MwXFxcIn0uaW9uLWJyaWVmY2FzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNmNcXFwifS5pb24tYnVnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiZVxcXCJ9Lmlvbi1jYWxjdWxhdG9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI2ZFxcXCJ9Lmlvbi1jYWxlbmRhcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMTdcXFwifS5pb24tY2FtZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExOFxcXCJ9Lmlvbi1jYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExOVxcXCJ9Lmlvbi1jYXNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMxNlxcXCJ9Lmlvbi1jaGF0Ym94OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExYlxcXCJ9Lmlvbi1jaGF0Ym94LXdvcmtpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTFhXFxcIn0uaW9uLWNoYXRib3hlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMWNcXFwifS5pb24tY2hhdGJ1YmJsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMWVcXFwifS5pb24tY2hhdGJ1YmJsZS13b3JraW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjExZFxcXCJ9Lmlvbi1jaGF0YnViYmxlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMWZcXFwifS5pb24tY2hlY2ttYXJrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyMlxcXCJ9Lmlvbi1jaGVja21hcmstY2lyY2xlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjBcXFwifS5pb24tY2hlY2ttYXJrLXJvdW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyMVxcXCJ9Lmlvbi1jaGV2cm9uLWRvd246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTIzXFxcIn0uaW9uLWNoZXZyb24tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjRcXFwifS5pb24tY2hldnJvbi1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjVcXFwifS5pb24tY2hldnJvbi11cDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMjZcXFwifS5pb24tY2xpcGJvYXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyN1xcXCJ9Lmlvbi1jbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNmVcXFwifS5pb24tY2xvc2U6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTJhXFxcIn0uaW9uLWNsb3NlLWNpcmNsZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTI4XFxcIn0uaW9uLWNsb3NlLXJvdW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyOVxcXCJ9Lmlvbi1jbG9zZWQtY2FwdGlvbmluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMTdcXFwifS5pb24tY2xvdWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTJiXFxcIn0uaW9uLWNvZGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjcxXFxcIn0uaW9uLWNvZGUtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjZmXFxcIn0uaW9uLWNvZGUtd29ya2luZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNzBcXFwifS5pb24tY29mZmVlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3MlxcXCJ9Lmlvbi1jb21wYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3M1xcXCJ9Lmlvbi1jb21wb3NlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyY1xcXCJ9Lmlvbi1jb25uZWN0aW9uLWJhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjc0XFxcIn0uaW9uLWNvbnRyYXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3NVxcXCJ9Lmlvbi1jcm9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjMVxcXCJ9Lmlvbi1jdWJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMxOFxcXCJ9Lmlvbi1kaXNjOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEyZFxcXCJ9Lmlvbi1kb2N1bWVudDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMmZcXFwifS5pb24tZG9jdW1lbnQtdGV4dDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMmVcXFwifS5pb24tZHJhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzBcXFwifS5pb24tZWFydGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjc2XFxcIn0uaW9uLWVhc2VsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjMlxcXCJ9Lmlvbi1lZGl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiZlxcXCJ9Lmlvbi1lZ2c6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjc3XFxcIn0uaW9uLWVqZWN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzMVxcXCJ9Lmlvbi1lbWFpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzJcXFwifS5pb24tZW1haWwtdW5yZWFkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjM1xcXCJ9Lmlvbi1lcmxlbm1leWVyLWZsYXNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNjNVxcXCJ9Lmlvbi1lcmxlbm1leWVyLWZsYXNrLWJ1YmJsZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2M0XFxcIn0uaW9uLWV5ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzNcXFwifS5pb24tZXllLWRpc2FibGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMwNlxcXCJ9Lmlvbi1mZW1hbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjc4XFxcIn0uaW9uLWZpbGluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzRcXFwifS5pb24tZmlsbS1tYXJrZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTM1XFxcIn0uaW9uLWZpcmViYWxsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMxOVxcXCJ9Lmlvbi1mbGFnOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3OVxcXCJ9Lmlvbi1mbGFtZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMWFcXFwifS5pb24tZmxhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTM3XFxcIn0uaW9uLWZsYXNoLW9mZjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxMzZcXFwifS5pb24tZm9sZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzOVxcXCJ9Lmlvbi1mb3JrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3YVxcXCJ9Lmlvbi1mb3JrLXJlcG86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmMwXFxcIn0uaW9uLWZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTNhXFxcIn0uaW9uLWZ1bm5lbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMWJcXFwifS5pb24tZ2Vhci1hOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjEzZFxcXCJ9Lmlvbi1nZWFyLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTNlXFxcIn0uaW9uLWdyaWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTNmXFxcIn0uaW9uLWhhbW1lcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyN2JcXFwifS5pb24taGFwcHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzFjXFxcIn0uaW9uLWhhcHB5LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2M2XFxcIn0uaW9uLWhlYWRwaG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxNDBcXFwifS5pb24taGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQxXFxcIn0uaW9uLWhlYXJ0LWJyb2tlbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMWRcXFwifS5pb24taGVscDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxNDNcXFwifS5pb24taGVscC1idW95OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3Y1xcXCJ9Lmlvbi1oZWxwLWNpcmNsZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQyXFxcIn0uaW9uLWhvbWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTQ0XFxcIn0uaW9uLWljZWNyZWFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI3ZFxcXCJ9Lmlvbi1pbWFnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxNDdcXFwifS5pb24taW1hZ2VzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjE0OFxcXCJ9Lmlvbi1pbmZvcm1hdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxNGFcXFwifS5pb24taW5mb3JtYXRpb24tY2lyY2xlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxNDlcXFwifS5pb24taW9uaWM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMTRiXFxcIn0uaW9uLWlvcy1hbGFybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYzhcXFwifS5pb24taW9zLWFsYXJtLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2M3XFxcIn0uaW9uLWlvcy1hbGJ1bXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2NhXFxcIn0uaW9uLWlvcy1hbGJ1bXMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzYzlcXFwifS5pb24taW9zLWFtZXJpY2FuZm9vdGJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2NjXFxcIn0uaW9uLWlvcy1hbWVyaWNhbmZvb3RiYWxsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2NiXFxcIn0uaW9uLWlvcy1hbmFseXRpY3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2NlXFxcIn0uaW9uLWlvcy1hbmFseXRpY3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzY2RcXFwifS5pb24taW9zLWFycm93LWJhY2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2NmXFxcIn0uaW9uLWlvcy1hcnJvdy1kb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkMFxcXCJ9Lmlvbi1pb3MtYXJyb3ctZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZDFcXFwifS5pb24taW9zLWFycm93LWxlZnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2QyXFxcIn0uaW9uLWlvcy1hcnJvdy1yaWdodDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZDNcXFwifS5pb24taW9zLWFycm93LXRoaW4tZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZDRcXFwifS5pb24taW9zLWFycm93LXRoaW4tbGVmdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZDVcXFwifS5pb24taW9zLWFycm93LXRoaW4tcmlnaHQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Q2XFxcIn0uaW9uLWlvcy1hcnJvdy10aGluLXVwOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkN1xcXCJ9Lmlvbi1pb3MtYXJyb3ctdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Q4XFxcIn0uaW9uLWlvcy1hdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZGFcXFwifS5pb24taW9zLWF0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Q5XFxcIn0uaW9uLWlvcy1iYXJjb2RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkY1xcXCJ9Lmlvbi1pb3MtYmFyY29kZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkYlxcXCJ9Lmlvbi1pb3MtYmFzZWJhbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2RlXFxcIn0uaW9uLWlvcy1iYXNlYmFsbC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNkZFxcXCJ9Lmlvbi1pb3MtYmFza2V0YmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZTBcXFwifS5pb24taW9zLWJhc2tldGJhbGwtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZGZcXFwifS5pb24taW9zLWJlbGw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2UyXFxcIn0uaW9uLWlvcy1iZWxsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2UxXFxcIn0uaW9uLWlvcy1ib2R5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlNFxcXCJ9Lmlvbi1pb3MtYm9keS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlM1xcXCJ9Lmlvbi1pb3MtYm9sdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZTZcXFwifS5pb24taW9zLWJvbHQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZTVcXFwifS5pb24taW9zLWJvb2s6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2U4XFxcIn0uaW9uLWlvcy1ib29rLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2U3XFxcIn0uaW9uLWlvcy1ib29rbWFya3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2VhXFxcIn0uaW9uLWlvcy1ib29rbWFya3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZTlcXFwifS5pb24taW9zLWJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZWNcXFwifS5pb24taW9zLWJveC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlYlxcXCJ9Lmlvbi1pb3MtYnJpZWZjYXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNlZVxcXCJ9Lmlvbi1pb3MtYnJpZWZjYXNlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2VkXFxcIn0uaW9uLWlvcy1icm93c2VyczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzZjBcXFwifS5pb24taW9zLWJyb3dzZXJzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2VmXFxcIn0uaW9uLWlvcy1jYWxjdWxhdG9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmMlxcXCJ9Lmlvbi1pb3MtY2FsY3VsYXRvci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmMVxcXCJ9Lmlvbi1pb3MtY2FsZW5kYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Y0XFxcIn0uaW9uLWlvcy1jYWxlbmRhci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmM1xcXCJ9Lmlvbi1pb3MtY2FtZXJhOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmNlxcXCJ9Lmlvbi1pb3MtY2FtZXJhLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Y1XFxcIn0uaW9uLWlvcy1jYXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmOFxcXCJ9Lmlvbi1pb3MtY2FydC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmN1xcXCJ9Lmlvbi1pb3MtY2hhdGJveGVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmYVxcXCJ9Lmlvbi1pb3MtY2hhdGJveGVzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2Y5XFxcIn0uaW9uLWlvcy1jaGF0YnViYmxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmY1xcXCJ9Lmlvbi1pb3MtY2hhdGJ1YmJsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmYlxcXCJ9Lmlvbi1pb3MtY2hlY2ttYXJrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmZlxcXCJ9Lmlvbi1pb3MtY2hlY2ttYXJrLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjNmZFxcXCJ9Lmlvbi1pb3MtY2hlY2ttYXJrLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmM2ZlXFxcIn0uaW9uLWlvcy1jaXJjbGUtZmlsbGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwMFxcXCJ9Lmlvbi1pb3MtY2lyY2xlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDAxXFxcIn0uaW9uLWlvcy1jbG9jazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDNcXFwifS5pb24taW9zLWNsb2NrLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDAyXFxcIn0uaW9uLWlvcy1jbG9zZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDZcXFwifS5pb24taW9zLWNsb3NlLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwNFxcXCJ9Lmlvbi1pb3MtY2xvc2Utb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDVcXFwifS5pb24taW9zLWNsb3VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwY1xcXCJ9Lmlvbi1pb3MtY2xvdWQtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDA4XFxcIn0uaW9uLWlvcy1jbG91ZC1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwN1xcXCJ9Lmlvbi1pb3MtY2xvdWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MDlcXFwifS5pb24taW9zLWNsb3VkLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MGJcXFwifS5pb24taW9zLWNsb3VkLXVwbG9hZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwYVxcXCJ9Lmlvbi1pb3MtY2xvdWR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxMFxcXCJ9Lmlvbi1pb3MtY2xvdWR5LW5pZ2h0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQwZVxcXCJ9Lmlvbi1pb3MtY2xvdWR5LW5pZ2h0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDBkXFxcIn0uaW9uLWlvcy1jbG91ZHktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MGZcXFwifS5pb24taW9zLWNvZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTJcXFwifS5pb24taW9zLWNvZy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxMVxcXCJ9Lmlvbi1pb3MtY29sb3ItZmlsdGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxNFxcXCJ9Lmlvbi1pb3MtY29sb3ItZmlsdGVyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDEzXFxcIn0uaW9uLWlvcy1jb2xvci13YW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxNlxcXCJ9Lmlvbi1pb3MtY29sb3Itd2FuZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxNVxcXCJ9Lmlvbi1pb3MtY29tcG9zZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MThcXFwifS5pb24taW9zLWNvbXBvc2Utb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MTdcXFwifS5pb24taW9zLWNvbnRhY3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDFhXFxcIn0uaW9uLWlvcy1jb250YWN0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDE5XFxcIn0uaW9uLWlvcy1jb3B5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxY1xcXCJ9Lmlvbi1pb3MtY29weS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxYlxcXCJ9Lmlvbi1pb3MtY3JvcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MWVcXFwifS5pb24taW9zLWNyb3Atc3Ryb25nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxZFxcXCJ9Lmlvbi1pb3MtZG93bmxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDIwXFxcIn0uaW9uLWlvcy1kb3dubG9hZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQxZlxcXCJ9Lmlvbi1pb3MtZHJhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjFcXFwifS5pb24taW9zLWVtYWlsOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyM1xcXCJ9Lmlvbi1pb3MtZW1haWwtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjJcXFwifS5pb24taW9zLWV5ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MjVcXFwifS5pb24taW9zLWV5ZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyNFxcXCJ9Lmlvbi1pb3MtZmFzdGZvcndhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDI3XFxcIn0uaW9uLWlvcy1mYXN0Zm9yd2FyZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyNlxcXCJ9Lmlvbi1pb3MtZmlsaW5nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyOVxcXCJ9Lmlvbi1pb3MtZmlsaW5nLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDI4XFxcIn0uaW9uLWlvcy1maWxtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyYlxcXCJ9Lmlvbi1pb3MtZmlsbS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyYVxcXCJ9Lmlvbi1pb3MtZmxhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MmRcXFwifS5pb24taW9zLWZsYWctb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MmNcXFwifS5pb24taW9zLWZsYW1lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQyZlxcXCJ9Lmlvbi1pb3MtZmxhbWUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MmVcXFwifS5pb24taW9zLWZsYXNrOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzMVxcXCJ9Lmlvbi1pb3MtZmxhc2stb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzBcXFwifS5pb24taW9zLWZsb3dlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzNcXFwifS5pb24taW9zLWZsb3dlci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzMlxcXCJ9Lmlvbi1pb3MtZm9sZGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzNVxcXCJ9Lmlvbi1pb3MtZm9sZGVyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDM0XFxcIn0uaW9uLWlvcy1mb290YmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzdcXFwifS5pb24taW9zLWZvb3RiYWxsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDM2XFxcIn0uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0MzlcXFwifS5pb24taW9zLWdhbWUtY29udHJvbGxlci1hLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDM4XFxcIn0uaW9uLWlvcy1nYW1lLWNvbnRyb2xsZXItYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0M2JcXFwifS5pb24taW9zLWdhbWUtY29udHJvbGxlci1iLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDNhXFxcIn0uaW9uLWlvcy1nZWFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzZFxcXCJ9Lmlvbi1pb3MtZ2Vhci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQzY1xcXCJ9Lmlvbi1pb3MtZ2xhc3NlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0M2ZcXFwifS5pb24taW9zLWdsYXNzZXMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0M2VcXFwifS5pb24taW9zLWdyaWQtdmlldzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDFcXFwifS5pb24taW9zLWdyaWQtdmlldy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0MFxcXCJ9Lmlvbi1pb3MtaGVhcnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDQzXFxcIn0uaW9uLWlvcy1oZWFydC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0MlxcXCJ9Lmlvbi1pb3MtaGVscDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NDZcXFwifS5pb24taW9zLWhlbHAtZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDQ0XFxcIn0uaW9uLWlvcy1oZWxwLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDQ1XFxcIn0uaW9uLWlvcy1ob21lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0OFxcXCJ9Lmlvbi1pb3MtaG9tZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0N1xcXCJ9Lmlvbi1pb3MtaW5maW5pdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDRhXFxcIn0uaW9uLWlvcy1pbmZpbml0ZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0OVxcXCJ9Lmlvbi1pb3MtaW5mb3JtYXRpb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDRkXFxcIn0uaW9uLWlvcy1pbmZvcm1hdGlvbi1lbXB0eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NGJcXFwifS5pb24taW9zLWluZm9ybWF0aW9uLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDRjXFxcIn0uaW9uLWlvcy1pb25pYy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ0ZVxcXCJ9Lmlvbi1pb3Mta2V5cGFkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ1MFxcXCJ9Lmlvbi1pb3Mta2V5cGFkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDRmXFxcIn0uaW9uLWlvcy1saWdodGJ1bGI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDUyXFxcIn0uaW9uLWlvcy1saWdodGJ1bGItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NTFcXFwifS5pb24taW9zLWxpc3Q6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDU0XFxcIn0uaW9uLWlvcy1saXN0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDUzXFxcIn0uaW9uLWlvcy1sb2NhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NTZcXFwifS5pb24taW9zLWxvY2F0aW9uLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDU1XFxcIn0uaW9uLWlvcy1sb2NrZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDU4XFxcIn0uaW9uLWlvcy1sb2NrZWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NTdcXFwifS5pb24taW9zLWxvb3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDVhXFxcIn0uaW9uLWlvcy1sb29wLXN0cm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NTlcXFwifS5pb24taW9zLW1lZGljYWw6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDVjXFxcIn0uaW9uLWlvcy1tZWRpY2FsLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDViXFxcIn0uaW9uLWlvcy1tZWRraXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDVlXFxcIn0uaW9uLWlvcy1tZWRraXQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NWRcXFwifS5pb24taW9zLW1pYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjFcXFwifS5pb24taW9zLW1pYy1vZmY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDVmXFxcIn0uaW9uLWlvcy1taWMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjBcXFwifS5pb24taW9zLW1pbnVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2NFxcXCJ9Lmlvbi1pb3MtbWludXMtZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDYyXFxcIn0uaW9uLWlvcy1taW51cy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2M1xcXCJ9Lmlvbi1pb3MtbW9uaXRvcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjZcXFwifS5pb24taW9zLW1vbml0b3Itb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NjVcXFwifS5pb24taW9zLW1vb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDY4XFxcIn0uaW9uLWlvcy1tb29uLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDY3XFxcIn0uaW9uLWlvcy1tb3JlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2YVxcXCJ9Lmlvbi1pb3MtbW9yZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2OVxcXCJ9Lmlvbi1pb3MtbXVzaWNhbC1ub3RlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2YlxcXCJ9Lmlvbi1pb3MtbXVzaWNhbC1ub3RlczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NmNcXFwifS5pb24taW9zLW5hdmlnYXRlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2ZVxcXCJ9Lmlvbi1pb3MtbmF2aWdhdGUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NmRcXFwifS5pb24taW9zLW51dHJpdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzBcXFwifS5pb24taW9zLW51dHJpdGlvbi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ2ZlxcXCJ9Lmlvbi1pb3MtcGFwZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDcyXFxcIn0uaW9uLWlvcy1wYXBlci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3MVxcXCJ9Lmlvbi1pb3MtcGFwZXJwbGFuZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzRcXFwifS5pb24taW9zLXBhcGVycGxhbmUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzNcXFwifS5pb24taW9zLXBhcnRseXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3NlxcXCJ9Lmlvbi1pb3MtcGFydGx5c3Vubnktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzVcXFwifS5pb24taW9zLXBhdXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3OFxcXCJ9Lmlvbi1pb3MtcGF1c2Utb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0NzdcXFwifS5pb24taW9zLXBhdzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0N2FcXFwifS5pb24taW9zLXBhdy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3OVxcXCJ9Lmlvbi1pb3MtcGVvcGxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3Y1xcXCJ9Lmlvbi1pb3MtcGVvcGxlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDdiXFxcIn0uaW9uLWlvcy1wZXJzb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDdlXFxcIn0uaW9uLWlvcy1wZXJzb24tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0N2RcXFwifS5pb24taW9zLXBlcnNvbmFkZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ODBcXFwifS5pb24taW9zLXBlcnNvbmFkZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ3ZlxcXCJ9Lmlvbi1pb3MtcGhvdG9zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4MlxcXCJ9Lmlvbi1pb3MtcGhvdG9zLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDgxXFxcIn0uaW9uLWlvcy1waWU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDg0XFxcIn0uaW9uLWlvcy1waWUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ODNcXFwifS5pb24taW9zLXBpbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDg2XFxcIn0uaW9uLWlvcy1waW50LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDg1XFxcIn0uaW9uLWlvcy1wbGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4OFxcXCJ9Lmlvbi1pb3MtcGxheS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ4N1xcXCJ9Lmlvbi1pb3MtcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OGJcXFwifS5pb24taW9zLXBsdXMtZW1wdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDg5XFxcIn0uaW9uLWlvcy1wbHVzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDhhXFxcIn0uaW9uLWlvcy1wcmljZXRhZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OGRcXFwifS5pb24taW9zLXByaWNldGFnLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDhjXFxcIn0uaW9uLWlvcy1wcmljZXRhZ3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDhmXFxcIn0uaW9uLWlvcy1wcmljZXRhZ3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OGVcXFwifS5pb24taW9zLXByaW50ZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDkxXFxcIn0uaW9uLWlvcy1wcmludGVyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDkwXFxcIn0uaW9uLWlvcy1wdWxzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTNcXFwifS5pb24taW9zLXB1bHNlLXN0cm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTJcXFwifS5pb24taW9zLXJhaW55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5NVxcXCJ9Lmlvbi1pb3MtcmFpbnktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTRcXFwifS5pb24taW9zLXJlY29yZGluZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTdcXFwifS5pb24taW9zLXJlY29yZGluZy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5NlxcXCJ9Lmlvbi1pb3MtcmVkbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OTlcXFwifS5pb24taW9zLXJlZG8tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0OThcXFwifS5pb24taW9zLXJlZnJlc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDljXFxcIn0uaW9uLWlvcy1yZWZyZXNoLWVtcHR5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5YVxcXCJ9Lmlvbi1pb3MtcmVmcmVzaC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5YlxcXCJ9Lmlvbi1pb3MtcmVsb2FkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5ZFxcXCJ9Lmlvbi1pb3MtcmV2ZXJzZS1jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNDlmXFxcIn0uaW9uLWlvcy1yZXZlcnNlLWNhbWVyYS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjQ5ZVxcXCJ9Lmlvbi1pb3MtcmV3aW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhMVxcXCJ9Lmlvbi1pb3MtcmV3aW5kLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGEwXFxcIn0uaW9uLWlvcy1yb3NlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhM1xcXCJ9Lmlvbi1pb3Mtcm9zZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhMlxcXCJ9Lmlvbi1pb3Mtc2VhcmNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhNVxcXCJ9Lmlvbi1pb3Mtc2VhcmNoLXN0cm9uZzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTRcXFwifS5pb24taW9zLXNldHRpbmdzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhN1xcXCJ9Lmlvbi1pb3Mtc2V0dGluZ3Mtc3Ryb25nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhNlxcXCJ9Lmlvbi1pb3Mtc2h1ZmZsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YTlcXFwifS5pb24taW9zLXNodWZmbGUtc3Ryb25nOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhOFxcXCJ9Lmlvbi1pb3Mtc2tpcGJhY2t3YXJkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRhYlxcXCJ9Lmlvbi1pb3Mtc2tpcGJhY2t3YXJkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGFhXFxcIn0uaW9uLWlvcy1za2lwZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YWRcXFwifS5pb24taW9zLXNraXBmb3J3YXJkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGFjXFxcIn0uaW9uLWlvcy1zbm93eTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YWVcXFwifS5pb24taW9zLXNwZWVkb21ldGVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiMFxcXCJ9Lmlvbi1pb3Mtc3BlZWRvbWV0ZXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YWZcXFwifS5pb24taW9zLXN0YXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGIzXFxcIn0uaW9uLWlvcy1zdGFyLWhhbGY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGIxXFxcIn0uaW9uLWlvcy1zdGFyLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGIyXFxcIn0uaW9uLWlvcy1zdG9wd2F0Y2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGI1XFxcIn0uaW9uLWlvcy1zdG9wd2F0Y2gtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YjRcXFwifS5pb24taW9zLXN1bm55OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiN1xcXCJ9Lmlvbi1pb3Mtc3Vubnktb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YjZcXFwifS5pb24taW9zLXRlbGVwaG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YjlcXFwifS5pb24taW9zLXRlbGVwaG9uZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiOFxcXCJ9Lmlvbi1pb3MtdGVubmlzYmFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YmJcXFwifS5pb24taW9zLXRlbm5pc2JhbGwtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YmFcXFwifS5pb24taW9zLXRodW5kZXJzdG9ybTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YmRcXFwifS5pb24taW9zLXRodW5kZXJzdG9ybS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRiY1xcXCJ9Lmlvbi1pb3MtdGltZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YmZcXFwifS5pb24taW9zLXRpbWUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YmVcXFwifS5pb24taW9zLXRpbWVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjMVxcXCJ9Lmlvbi1pb3MtdGltZXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzBcXFwifS5pb24taW9zLXRvZ2dsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzNcXFwifS5pb24taW9zLXRvZ2dsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjMlxcXCJ9Lmlvbi1pb3MtdHJhc2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGM1XFxcIn0uaW9uLWlvcy10cmFzaC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjNFxcXCJ9Lmlvbi1pb3MtdW5kbzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzdcXFwifS5pb24taW9zLXVuZG8tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzZcXFwifS5pb24taW9zLXVubG9ja2VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjOVxcXCJ9Lmlvbi1pb3MtdW5sb2NrZWQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0YzhcXFwifS5pb24taW9zLXVwbG9hZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0Y2JcXFwifS5pb24taW9zLXVwbG9hZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjYVxcXCJ9Lmlvbi1pb3MtdmlkZW9jYW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGNkXFxcIn0uaW9uLWlvcy12aWRlb2NhbS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjY1xcXCJ9Lmlvbi1pb3Mtdm9sdW1lLWhpZ2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGNlXFxcIn0uaW9uLWlvcy12b2x1bWUtbG93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRjZlxcXCJ9Lmlvbi1pb3Mtd2luZWdsYXNzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkMVxcXCJ9Lmlvbi1pb3Mtd2luZWdsYXNzLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGQwXFxcIn0uaW9uLWlvcy13b3JsZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDNcXFwifS5pb24taW9zLXdvcmxkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGQyXFxcIn0uaW9uLWlwYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMWY5XFxcIn0uaW9uLWlwaG9uZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxZmFcXFwifS5pb24taXBvZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYxZmJcXFwifS5pb24tamV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5NVxcXCJ9Lmlvbi1rZXk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjk2XFxcIn0uaW9uLWtuaWZlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5N1xcXCJ9Lmlvbi1sYXB0b3A6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMWZjXFxcIn0uaW9uLWxlYWY6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMWZkXFxcIn0uaW9uLWxldmVsczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOThcXFwifS5pb24tbGlnaHRidWxiOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5OVxcXCJ9Lmlvbi1saW5rOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjFmZVxcXCJ9Lmlvbi1sb2FkLWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjlhXFxcIn0uaW9uLWxvYWQtYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOWJcXFwifS5pb24tbG9hZC1jOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI5Y1xcXCJ9Lmlvbi1sb2FkLWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjlkXFxcIn0uaW9uLWxvY2F0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjFmZlxcXCJ9Lmlvbi1sb2NrLWNvbWJpbmF0aW9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkNFxcXCJ9Lmlvbi1sb2NrZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjAwXFxcIn0uaW9uLWxvZy1pbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOWVcXFwifS5pb24tbG9nLW91dDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyOWZcXFwifS5pb24tbG9vcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMDFcXFwifS5pb24tbWFnbmV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhMFxcXCJ9Lmlvbi1tYWxlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhMVxcXCJ9Lmlvbi1tYW46YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjAyXFxcIn0uaW9uLW1hcDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMDNcXFwifS5pb24tbWVka2l0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhMlxcXCJ9Lmlvbi1tZXJnZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzM2ZcXFwifS5pb24tbWljLWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjA0XFxcIn0uaW9uLW1pYy1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwNVxcXCJ9Lmlvbi1taWMtYzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMDZcXFwifS5pb24tbWludXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjA5XFxcIn0uaW9uLW1pbnVzLWNpcmNsZWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjA3XFxcIn0uaW9uLW1pbnVzLXJvdW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwOFxcXCJ9Lmlvbi1tb2RlbC1zOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJjMVxcXCJ9Lmlvbi1tb25pdG9yOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwYVxcXCJ9Lmlvbi1tb3JlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIwYlxcXCJ9Lmlvbi1tb3VzZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDBcXFwifS5pb24tbXVzaWMtbm90ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMGNcXFwifS5pb24tbmF2aWNvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMGVcXFwifS5pb24tbmF2aWNvbi1yb3VuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMGRcXFwifS5pb24tbmF2aWdhdGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmEzXFxcIn0uaW9uLW5ldHdvcms6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzQxXFxcIn0uaW9uLW5vLXNtb2tpbmc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmMyXFxcIn0uaW9uLW51Y2xlYXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmE0XFxcIn0uaW9uLW91dGxldDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDJcXFwifS5pb24tcGFpbnRicnVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZDVcXFwifS5pb24tcGFpbnRidWNrZXQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGQ2XFxcIn0uaW9uLXBhcGVyLWFpcnBsYW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJjM1xcXCJ9Lmlvbi1wYXBlcmNsaXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjBmXFxcIn0uaW9uLXBhdXNlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxMFxcXCJ9Lmlvbi1wZXJzb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjEzXFxcIn0uaW9uLXBlcnNvbi1hZGQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjExXFxcIn0uaW9uLXBlcnNvbi1zdGFsa2VyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxMlxcXCJ9Lmlvbi1waWUtZ3JhcGg6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmE1XFxcIn0uaW9uLXBpbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYTZcXFwifS5pb24tcGlucG9pbnQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmE3XFxcIn0uaW9uLXBpenphOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJhOFxcXCJ9Lmlvbi1wbGFuZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMTRcXFwifS5pb24tcGxhbmV0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0M1xcXCJ9Lmlvbi1wbGF5OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxNVxcXCJ9Lmlvbi1wbGF5c3RhdGlvbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzMGFcXFwifS5pb24tcGx1czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMThcXFwifS5pb24tcGx1cy1jaXJjbGVkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxNlxcXCJ9Lmlvbi1wbHVzLXJvdW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxN1xcXCJ9Lmlvbi1wb2RpdW06YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzQ0XFxcIn0uaW9uLXBvdW5kOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxOVxcXCJ9Lmlvbi1wb3dlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYTlcXFwifS5pb24tcHJpY2V0YWc6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmFhXFxcIn0uaW9uLXByaWNldGFnczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYWJcXFwifS5pb24tcHJpbnRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMWFcXFwifS5pb24tcHVsbC1yZXF1ZXN0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0NVxcXCJ9Lmlvbi1xci1zY2FubmVyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0NlxcXCJ9Lmlvbi1xdW90ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNDdcXFwifS5pb24tcmFkaW8td2F2ZXM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmFjXFxcIn0uaW9uLXJlY29yZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMWJcXFwifS5pb24tcmVmcmVzaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMWNcXFwifS5pb24tcmVwbHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjFlXFxcIn0uaW9uLXJlcGx5LWFsbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMWRcXFwifS5pb24tcmliYm9uLWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzQ4XFxcIn0uaW9uLXJpYmJvbi1iOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0OVxcXCJ9Lmlvbi1zYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzRhXFxcIn0uaW9uLXNhZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkN1xcXCJ9Lmlvbi1zY2lzc29yczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNGJcXFwifS5pb24tc2VhcmNoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIxZlxcXCJ9Lmlvbi1zZXR0aW5nczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYWRcXFwifS5pb24tc2hhcmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjIwXFxcIn0uaW9uLXNodWZmbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjIxXFxcIn0uaW9uLXNraXAtYmFja3dhcmQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjIyXFxcIn0uaW9uLXNraXAtZm9yd2FyZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMjNcXFwifS5pb24tc29jaWFsLWFuZHJvaWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjI1XFxcIn0uaW9uLXNvY2lhbC1hbmRyb2lkLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjI0XFxcIn0uaW9uLXNvY2lhbC1hbmd1bGFyOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkOVxcXCJ9Lmlvbi1zb2NpYWwtYW5ndWxhci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkOFxcXCJ9Lmlvbi1zb2NpYWwtYXBwbGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjI3XFxcIn0uaW9uLXNvY2lhbC1hcHBsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyNlxcXCJ9Lmlvbi1zb2NpYWwtYml0Y29pbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYWZcXFwifS5pb24tc29jaWFsLWJpdGNvaW4tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYWVcXFwifS5pb24tc29jaWFsLWJ1ZmZlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMjlcXFwifS5pb24tc29jaWFsLWJ1ZmZlci1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyOFxcXCJ9Lmlvbi1zb2NpYWwtY2hyb21lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkYlxcXCJ9Lmlvbi1zb2NpYWwtY2hyb21lLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGRhXFxcIn0uaW9uLXNvY2lhbC1jb2RlcGVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkZFxcXCJ9Lmlvbi1zb2NpYWwtY29kZXBlbi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRkY1xcXCJ9Lmlvbi1zb2NpYWwtY3NzMzpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZGZcXFwifS5pb24tc29jaWFsLWNzczMtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZGVcXFwifS5pb24tc29jaWFsLWRlc2lnbmVybmV3czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMmJcXFwifS5pb24tc29jaWFsLWRlc2lnbmVybmV3cy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyYVxcXCJ9Lmlvbi1zb2NpYWwtZHJpYmJibGU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjJkXFxcIn0uaW9uLXNvY2lhbC1kcmliYmJsZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIyY1xcXCJ9Lmlvbi1zb2NpYWwtZHJvcGJveDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMmZcXFwifS5pb24tc29jaWFsLWRyb3Bib3gtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMmVcXFwifS5pb24tc29jaWFsLWV1cm86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGUxXFxcIn0uaW9uLXNvY2lhbC1ldXJvLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGUwXFxcIn0uaW9uLXNvY2lhbC1mYWNlYm9vazpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzFcXFwifS5pb24tc29jaWFsLWZhY2Vib29rLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjMwXFxcIn0uaW9uLXNvY2lhbC1mb3Vyc3F1YXJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0ZFxcXCJ9Lmlvbi1zb2NpYWwtZm91cnNxdWFyZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0Y1xcXCJ9Lmlvbi1zb2NpYWwtZnJlZWJzZC1kZXZpbDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYzRcXFwifS5pb24tc29jaWFsLWdpdGh1YjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzNcXFwifS5pb24tc29jaWFsLWdpdGh1Yi1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzMlxcXCJ9Lmlvbi1zb2NpYWwtZ29vZ2xlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM0ZlxcXCJ9Lmlvbi1zb2NpYWwtZ29vZ2xlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzRlXFxcIn0uaW9uLXNvY2lhbC1nb29nbGVwbHVzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzNVxcXCJ9Lmlvbi1zb2NpYWwtZ29vZ2xlcGx1cy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzNFxcXCJ9Lmlvbi1zb2NpYWwtaGFja2VybmV3czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzdcXFwifS5pb24tc29jaWFsLWhhY2tlcm5ld3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzZcXFwifS5pb24tc29jaWFsLWh0bWw1OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlM1xcXCJ9Lmlvbi1zb2NpYWwtaHRtbDUtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTJcXFwifS5pb24tc29jaWFsLWluc3RhZ3JhbTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTFcXFwifS5pb24tc29jaWFsLWluc3RhZ3JhbS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1MFxcXCJ9Lmlvbi1zb2NpYWwtamF2YXNjcmlwdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTVcXFwifS5pb24tc29jaWFsLWphdmFzY3JpcHQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZTRcXFwifS5pb24tc29jaWFsLWxpbmtlZGluOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzOVxcXCJ9Lmlvbi1zb2NpYWwtbGlua2VkaW4tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyMzhcXFwifS5pb24tc29jaWFsLW1hcmtkb3duOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlNlxcXCJ9Lmlvbi1zb2NpYWwtbm9kZWpzOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlN1xcXCJ9Lmlvbi1zb2NpYWwtb2N0b2NhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZThcXFwifS5pb24tc29jaWFsLXBpbnRlcmVzdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYjFcXFwifS5pb24tc29jaWFsLXBpbnRlcmVzdC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiMFxcXCJ9Lmlvbi1zb2NpYWwtcHl0aG9uOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlOVxcXCJ9Lmlvbi1zb2NpYWwtcmVkZGl0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjIzYlxcXCJ9Lmlvbi1zb2NpYWwtcmVkZGl0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjNhXFxcIn0uaW9uLXNvY2lhbC1yc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjNkXFxcIn0uaW9uLXNvY2lhbC1yc3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyM2NcXFwifS5pb24tc29jaWFsLXNhc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGVhXFxcIn0uaW9uLXNvY2lhbC1za3lwZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyM2ZcXFwifS5pb24tc29jaWFsLXNreXBlLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjNlXFxcIn0uaW9uLXNvY2lhbC1zbmFwY2hhdDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZWNcXFwifS5pb24tc29jaWFsLXNuYXBjaGF0LW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGViXFxcIn0uaW9uLXNvY2lhbC10dW1ibHI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQxXFxcIn0uaW9uLXNvY2lhbC10dW1ibHItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDBcXFwifS5pb24tc29jaWFsLXR1eDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYzVcXFwifS5pb24tc29jaWFsLXR3aXRjaDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZWVcXFwifS5pb24tc29jaWFsLXR3aXRjaC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlZFxcXCJ9Lmlvbi1zb2NpYWwtdHdpdHRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDNcXFwifS5pb24tc29jaWFsLXR3aXR0ZXItb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDJcXFwifS5pb24tc29jaWFsLXVzZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTNcXFwifS5pb24tc29jaWFsLXVzZC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjM1MlxcXCJ9Lmlvbi1zb2NpYWwtdmltZW86YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjQ1XFxcIn0uaW9uLXNvY2lhbC12aW1lby1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0NFxcXCJ9Lmlvbi1zb2NpYWwtd2hhdHNhcHA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGYwXFxcIn0uaW9uLXNvY2lhbC13aGF0c2FwcC1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRlZlxcXCJ9Lmlvbi1zb2NpYWwtd2luZG93czpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDdcXFwifS5pb24tc29jaWFsLXdpbmRvd3Mtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDZcXFwifS5pb24tc29jaWFsLXdvcmRwcmVzczpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNDlcXFwifS5pb24tc29jaWFsLXdvcmRwcmVzcy1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0OFxcXCJ9Lmlvbi1zb2NpYWwteWFob286YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjRiXFxcIn0uaW9uLXNvY2lhbC15YWhvby1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0YVxcXCJ9Lmlvbi1zb2NpYWwteWVuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRmMlxcXCJ9Lmlvbi1zb2NpYWwteWVuLW91dGxpbmU6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGYxXFxcIn0uaW9uLXNvY2lhbC15b3V0dWJlOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0ZFxcXCJ9Lmlvbi1zb2NpYWwteW91dHViZS1vdXRsaW5lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0Y1xcXCJ9Lmlvbi1zb3VwLWNhbjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZjRcXFwifS5pb24tc291cC1jYW4tb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZjNcXFwifS5pb24tc3BlYWtlcnBob25lOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjJiMlxcXCJ9Lmlvbi1zcGVlZG9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYjNcXFwifS5pb24tc3Bvb246YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmI0XFxcIn0uaW9uLXN0YXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjRlXFxcIn0uaW9uLXN0YXRzLWJhcnM6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmI1XFxcIn0uaW9uLXN0ZWFtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjMwYlxcXCJ9Lmlvbi1zdG9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI0ZlxcXCJ9Lmlvbi10aGVybW9tZXRlcjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYjZcXFwifS5pb24tdGh1bWJzZG93bjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNTBcXFwifS5pb24tdGh1bWJzdXA6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjUxXFxcIn0uaW9uLXRvZ2dsZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTVcXFwifS5pb24tdG9nZ2xlLWZpbGxlZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTRcXFwifS5pb24tdHJhbnNnZW5kZXI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmNGY1XFxcIn0uaW9uLXRyYXNoLWE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjUyXFxcIn0uaW9uLXRyYXNoLWI6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjUzXFxcIn0uaW9uLXRyb3BoeTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNTZcXFwifS5pb24tdHNoaXJ0OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjRmN1xcXCJ9Lmlvbi10c2hpcnQtb3V0bGluZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGY0ZjZcXFwifS5pb24tdW1icmVsbGE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmI3XFxcIn0uaW9uLXVuaXZlcnNpdHk6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzU3XFxcIn0uaW9uLXVubG9ja2VkOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1NFxcXCJ9Lmlvbi11cGxvYWQ6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjU1XFxcIn0uaW9uLXVzYjpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyYjhcXFwifS5pb24tdmlkZW9jYW1lcmE6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMjU2XFxcIn0uaW9uLXZvbHVtZS1oaWdoOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1N1xcXCJ9Lmlvbi12b2x1bWUtbG93OmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1OFxcXCJ9Lmlvbi12b2x1bWUtbWVkaXVtOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1OVxcXCJ9Lmlvbi12b2x1bWUtbXV0ZTpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYyNWFcXFwifS5pb24td2FuZDpiZWZvcmV7Y29udGVudDpcXFwiXFxcXGYzNThcXFwifS5pb24td2F0ZXJkcm9wOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1YlxcXCJ9Lmlvbi13aWZpOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1Y1xcXCJ9Lmlvbi13aW5lZ2xhc3M6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmI5XFxcIn0uaW9uLXdvbWFuOmJlZm9yZXtjb250ZW50OlxcXCJcXFxcZjI1ZFxcXCJ9Lmlvbi13cmVuY2g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMmJhXFxcIn0uaW9uLXhib3g6YmVmb3Jle2NvbnRlbnQ6XFxcIlxcXFxmMzBjXFxcIn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIubG9hZGluZy1zcGlubmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgbWFyZ2luOiA5MHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBib3JkZXItdG9wOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzgxOGE5MTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAwLjVzIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDAuNXMgaW5maW5pdGUgbGluZWFyO1xcbiAgLyogVE9ETyB0aGUgc3Bpbm5lciBhcHBlYXJzIGJyb2tlbiwgbWlnaHQgYmUgYmVjYXVzZSBvZiB0aGlzIHR5cG8gdGhhdCBleGlzdGVkIGluIHRoZSBvcmlnaW5hbC5cXG4gICAqIFdlIG5vdGljZWQgaXQgd2hlbiBtaWdyYXRpbmcgdG8gU0FTUyB3aGljaCBkb2VzIGEgY29tcGlsZSBjaGVjayA7LSkuICovXFxuICAvKlxcbiAgMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gIH1cXG4gIDEwMCUge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcbiAgfVxcbiAgKi9cXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1vei1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgIC1tb3otYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5lcnJvci1tZXNzYWdlIC5lcnJvci1tZXNzYWdlLXByZXNlbnRlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmc6IDhweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6ICNmMDJkMmQ7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNDAsIDQ1LCA0NSwgMC4xKTtcXG59XFxuXFxuLyogaHR0cHM6Ly9naXRodWIuY29tL2dvdGhpbmtzdGVyL2FuZ3VsYXItcmVhbHdvcmxkLWV4YW1wbGUtYXBwL2Jsb2IvOWU4YzQ5NTE0ZWU4NzRlNWUwYmJmZTUzZmZkYmE3ZDJmZDBhZjM2Zi9zcmMvYXBwL3NoYXJlZC9hcnRpY2xlLWhlbHBlcnMvYXJ0aWNsZS1saXN0LmNvbXBvbmVudC5jc3MjTDEgKi9cXG4ucGFnZS1saW5rIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7VUFBQSx3QkFBQTtFQUNBLDRDQUFBO1VBQUEsb0NBQUE7RUFDQTsyRUFBQTtFQUVBOzs7Ozs7O0dBQUE7QUFRRjs7QUFFQTtFQUNFLHFCQUFBO0VBQUEsaUJBQUE7RUFBQSxhQUFBO0VBQ0EsK0JBQUE7S0FBQSxxQkFBQTtVQUFBLHVCQUFBO0FBQ0Y7QUFBRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFFSjs7QUFFQSw0S0FBQTtBQUNBO0VBQ0UsZUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5sb2FkaW5nLXNwaW5uZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDQwcHg7XFxyXFxuICBoZWlnaHQ6IDQwcHg7XFxyXFxuICBtYXJnaW46IDkwcHggYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxyXFxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xcclxcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjODE4YTkxO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcclxcbiAgYW5pbWF0aW9uOiBzcGluIDAuNXMgaW5maW5pdGUgbGluZWFyO1xcclxcbiAgLyogVE9ETyB0aGUgc3Bpbm5lciBhcHBlYXJzIGJyb2tlbiwgbWlnaHQgYmUgYmVjYXVzZSBvZiB0aGlzIHR5cG8gdGhhdCBleGlzdGVkIGluIHRoZSBvcmlnaW5hbC5cXHJcXG4gICAqIFdlIG5vdGljZWQgaXQgd2hlbiBtaWdyYXRpbmcgdG8gU0FTUyB3aGljaCBkb2VzIGEgY29tcGlsZSBjaGVjayA7LSkuICovXFxyXFxuICAvKlxcclxcbiAgMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXHJcXG4gIH1cXHJcXG4gIDEwMCUge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcclxcbiAgfVxcclxcbiAgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmVycm9yLW1lc3NhZ2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLmVycm9yLW1lc3NhZ2UtcHJlc2VudGVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6ICNmMDJkMmQ7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQwLCA0NSwgNDUsIDAuMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9nb3RoaW5rc3Rlci9hbmd1bGFyLXJlYWx3b3JsZC1leGFtcGxlLWFwcC9ibG9iLzllOGM0OTUxNGVlODc0ZTVlMGJiZmU1M2ZmZGJhN2QyZmQwYWYzNmYvc3JjL2FwcC9zaGFyZWQvYXJ0aWNsZS1oZWxwZXJzL2FydGljbGUtbGlzdC5jb21wb25lbnQuY3NzI0wxICovXFxyXFxuLnBhZ2UtbGluayB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJtb2R1bGUuZXhwb3J0cz1mdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPXs5MTpmdW5jdGlvbihlKXtlLmV4cG9ydHM9ZnVuY3Rpb24oZSxyKXtpZighcil7cj17fX1lPWUmJmUuX19lc01vZHVsZT9lLmRlZmF1bHQ6ZTtpZih0eXBlb2YgZSE9PVwic3RyaW5nXCIpe3JldHVybiBlfWlmKC9eWydcIl0uKlsnXCJdJC8udGVzdChlKSl7ZT1lLnNsaWNlKDEsLTEpfWlmKHIuaGFzaCl7ZSs9ci5oYXNofWlmKC9bXCInKCkgXFx0XFxuXS8udGVzdChlKXx8ci5uZWVkUXVvdGVzKXtyZXR1cm4nXCInLmNvbmNhdChlLnJlcGxhY2UoL1wiL2csJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLFwiXFxcXG5cIiksJ1wiJyl9cmV0dXJuIGV9fX07dmFyIHI9e307ZnVuY3Rpb24gX19uY2N3cGNrX3JlcXVpcmVfXyh0KXtpZihyW3RdKXtyZXR1cm4gclt0XS5leHBvcnRzfXZhciBfPXJbdF09e2V4cG9ydHM6e319O3ZhciBuPXRydWU7dHJ5e2VbdF0oXyxfLmV4cG9ydHMsX19uY2N3cGNrX3JlcXVpcmVfXyk7bj1mYWxzZX1maW5hbGx5e2lmKG4pZGVsZXRlIHJbdF19cmV0dXJuIF8uZXhwb3J0c31fX25jY3dwY2tfcmVxdWlyZV9fLmFiPV9fZGlybmFtZStcIi9cIjtyZXR1cm4gX19uY2N3cGNrX3JlcXVpcmVfXyg5MSl9KCk7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9pb25pY29ucy4zZTEwYzQ1MGY5NmJmMjhhNjQwNzc3ZmMxOGFmMjE5Ny5lb3RcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL21lZGlhL2lvbmljb25zLmU5MTkwMjczZjM5NDIyMjRlOTIwZTczZTFlN2FlMDQ1LnN2Z1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvbWVkaWEvaW9uaWNvbnMuZTlmNGM0MjVmYzM3Nzc0MDYwMWJmMzIxYWZmNWI0MTkudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9tZWRpYS9pb25pY29ucy5lNWE0ZmFlMDk4YzkyNmQ3ZjM0YjE1YTE1OTY5Y2I3ZC53b2ZmXCI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIF9hc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG5leHBvcnRzLkZyYWdtZW50ID0gMHhlYWNiO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSAweGVhY2M7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IDB4ZWFjZTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gMHhlYWQwO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gMHhlYWQ4O1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IDB4ZWFkMztcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XG52YXIgUkVBQ1RfQkxPQ0tfVFlQRSA9IDB4ZWFkOTtcbnZhciBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IDB4ZWFkYTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSAweGVhZDc7XG52YXIgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSAweGVhZTA7XG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSAweGVhZTI7XG52YXIgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gMHhlYWUzO1xuXG5pZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wuZm9yKSB7XG4gIHZhciBzeW1ib2xGb3IgPSBTeW1ib2wuZm9yO1xuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbiAgUkVBQ1RfUE9SVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnBvcnRhbCcpO1xuICBleHBvcnRzLkZyYWdtZW50ID0gc3ltYm9sRm9yKCdyZWFjdC5mcmFnbWVudCcpO1xuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xuICBSRUFDVF9QUk9GSUxFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm9maWxlcicpO1xuICBSRUFDVF9QUk9WSURFUl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wcm92aWRlcicpO1xuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcbiAgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2UnKTtcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG4gIFJFQUNUX01FTU9fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubWVtbycpO1xuICBSRUFDVF9MQVpZX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxhenknKTtcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcbiAgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNlcnZlci5ibG9jaycpO1xuICBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mdW5kYW1lbnRhbCcpO1xuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xuICBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub3BhcXVlLmlkJyk7XG4gIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5kZWJ1Z190cmFjZV9tb2RlJyk7XG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbiAgUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sZWdhY3lfaGlkZGVuJyk7XG59XG5cbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5pdGVyYXRvcjtcbnZhciBGQVVYX0lURVJBVE9SX1NZTUJPTCA9ICdAQGl0ZXJhdG9yJztcbmZ1bmN0aW9uIGdldEl0ZXJhdG9yRm4obWF5YmVJdGVyYWJsZSkge1xuICBpZiAobWF5YmVJdGVyYWJsZSA9PT0gbnVsbCB8fCB0eXBlb2YgbWF5YmVJdGVyYWJsZSAhPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBtYXliZUl0ZXJhdG9yID0gTUFZQkVfSVRFUkFUT1JfU1lNQk9MICYmIG1heWJlSXRlcmFibGVbTUFZQkVfSVRFUkFUT1JfU1lNQk9MXSB8fCBtYXliZUl0ZXJhYmxlW0ZBVVhfSVRFUkFUT1JfU1lNQk9MXTtcblxuICBpZiAodHlwZW9mIG1heWJlSXRlcmF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gbWF5YmVJdGVyYXRvcjtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG52YXIgUmVhY3RTaGFyZWRJbnRlcm5hbHMgPSBSZWFjdC5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtcblxuZnVuY3Rpb24gZXJyb3IoZm9ybWF0KSB7XG4gIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjIgPiAxID8gX2xlbjIgLSAxIDogMCksIF9rZXkyID0gMTsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICBwcmludFdhcm5pbmcoJ2Vycm9yJywgZm9ybWF0LCBhcmdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9XG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuICcnICsgaXRlbTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbi8vIEZpbHRlciBjZXJ0YWluIERPTSBhdHRyaWJ1dGVzIChlLmcuIHNyYywgaHJlZikgaWYgdGhlaXIgdmFsdWVzIGFyZSBlbXB0eSBzdHJpbmdzLlxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gLy8gTm90ZTogdHlwZW9mIG1pZ2h0IGJlIG90aGVyIHRoYW4gJ3N5bWJvbCcgb3IgJ251bWJlcicgKGUuZy4gaWYgaXQncyBhIHBvbHlmaWxsKS5cblxuXG4gIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50IHx8IHR5cGUgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgfHwgZW5hYmxlU2NvcGVBUEkgKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcbiAgICBpZiAodHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTEFaWV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9QUk9WSURFUl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0NPTlRFWFRfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQkxPQ0tfVFlQRSB8fCB0eXBlWzBdID09PSBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIG91dGVyVHlwZS5kaXNwbGF5TmFtZSB8fCAoZnVuY3Rpb25OYW1lICE9PSAnJyA/IHdyYXBwZXJOYW1lICsgXCIoXCIgKyBmdW5jdGlvbk5hbWUgKyBcIilcIiA6IHdyYXBwZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59XG5cbmZ1bmN0aW9uIGdldENvbXBvbmVudE5hbWUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lKCkuICcgKyAnVGhpcyBpcyBsaWtlbHkgYSBidWcgaW4gUmVhY3QuIFBsZWFzZSBmaWxlIGFuIGlzc3VlLicpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8IHR5cGUubmFtZSB8fCBudWxsO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0eXBlO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBleHBvcnRzLkZyYWdtZW50OlxuICAgICAgcmV0dXJuICdGcmFnbWVudCc7XG5cbiAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgcmV0dXJuICdQb3J0YWwnO1xuXG4gICAgY2FzZSBSRUFDVF9QUk9GSUxFUl9UWVBFOlxuICAgICAgcmV0dXJuICdQcm9maWxlcic7XG5cbiAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N0cmljdE1vZGUnO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiAnU3VzcGVuc2VMaXN0JztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICB2YXIgY29udGV4dCA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShjb250ZXh0KSArICcuQ29uc3VtZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgIHZhciBwcm92aWRlciA9IHR5cGU7XG4gICAgICAgIHJldHVybiBnZXRDb250ZXh0TmFtZShwcm92aWRlci5fY29udGV4dCkgKyAnLlByb3ZpZGVyJztcblxuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0V3JhcHBlZE5hbWUodHlwZSwgdHlwZS5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpO1xuXG4gICAgICBjYXNlIFJFQUNUX0JMT0NLX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUoaW5pdChwYXlsb2FkKSk7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIEhlbHBlcnMgdG8gcGF0Y2ggY29uc29sZS5sb2dzIHRvIGF2b2lkIGxvZ2dpbmcgZHVyaW5nIHNpZGUtZWZmZWN0IGZyZWVcbi8vIHJlcGxheWluZyBvbiByZW5kZXIgZnVuY3Rpb24uIFRoaXMgY3VycmVudGx5IG9ubHkgcGF0Y2hlcyB0aGUgb2JqZWN0XG4vLyBsYXppbHkgd2hpY2ggd29uJ3QgY292ZXIgaWYgdGhlIGxvZyBmdW5jdGlvbiB3YXMgZXh0cmFjdGVkIGVhZ2VybHkuXG4vLyBXZSBjb3VsZCBhbHNvIGVhZ2VybHkgcGF0Y2ggdGhlIG1ldGhvZC5cbnZhciBkaXNhYmxlZERlcHRoID0gMDtcbnZhciBwcmV2TG9nO1xudmFyIHByZXZJbmZvO1xudmFyIHByZXZXYXJuO1xudmFyIHByZXZFcnJvcjtcbnZhciBwcmV2R3JvdXA7XG52YXIgcHJldkdyb3VwQ29sbGFwc2VkO1xudmFyIHByZXZHcm91cEVuZDtcblxuZnVuY3Rpb24gZGlzYWJsZWRMb2coKSB7fVxuXG5kaXNhYmxlZExvZy5fX3JlYWN0RGlzYWJsZWRMb2cgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICBwcmV2TG9nID0gY29uc29sZS5sb2c7XG4gICAgICBwcmV2SW5mbyA9IGNvbnNvbGUuaW5mbztcbiAgICAgIHByZXZXYXJuID0gY29uc29sZS53YXJuO1xuICAgICAgcHJldkVycm9yID0gY29uc29sZS5lcnJvcjtcbiAgICAgIHByZXZHcm91cCA9IGNvbnNvbGUuZ3JvdXA7XG4gICAgICBwcmV2R3JvdXBDb2xsYXBzZWQgPSBjb25zb2xlLmdyb3VwQ29sbGFwc2VkO1xuICAgICAgcHJldkdyb3VwRW5kID0gY29uc29sZS5ncm91cEVuZDsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xOTA5OVxuXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGRpc2FibGVkTG9nLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBpbmZvOiBwcm9wcyxcbiAgICAgICAgbG9nOiBwcm9wcyxcbiAgICAgICAgd2FybjogcHJvcHMsXG4gICAgICAgIGVycm9yOiBwcm9wcyxcbiAgICAgICAgZ3JvdXA6IHByb3BzLFxuICAgICAgICBncm91cENvbGxhcHNlZDogcHJvcHMsXG4gICAgICAgIGdyb3VwRW5kOiBwcm9wc1xuICAgICAgfSk7XG4gICAgICAvKiBlc2xpbnQtZW5hYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgIH1cblxuICAgIGRpc2FibGVkRGVwdGgrKztcbiAgfVxufVxuZnVuY3Rpb24gcmVlbmFibGVMb2dzKCkge1xuICB7XG4gICAgZGlzYWJsZWREZXB0aC0tO1xuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGxvZzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkluZm9cbiAgICAgICAgfSksXG4gICAgICAgIHdhcm46IF9hc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZXYXJuXG4gICAgICAgIH0pLFxuICAgICAgICBlcnJvcjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cENvbGxhcHNlZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwQ29sbGFwc2VkXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cEVuZDogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50OyAvLyBTZXQgdGhlIGRpc3BhdGNoZXIgaW4gREVWIGJlY2F1c2UgdGhpcyBtaWdodCBiZSBjYWxsIGluIHRoZSByZW5kZXIgZnVuY3Rpb25cbiAgICAvLyBmb3Igd2FybmluZ3MuXG5cbiAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBudWxsO1xuICAgIGRpc2FibGVMb2dzKCk7XG4gIH1cblxuICB0cnkge1xuICAgIC8vIFRoaXMgc2hvdWxkIHRocm93LlxuICAgIGlmIChjb25zdHJ1Y3QpIHtcbiAgICAgIC8vIFNvbWV0aGluZyBzaG91bGQgYmUgc2V0dGluZyB0aGUgcHJvcHMgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgdmFyIEZha2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lXG5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZha2UucHJvdG90eXBlLCAncHJvcHMnLCB7XG4gICAgICAgIHNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIFdlIHVzZSBhIHRocm93aW5nIHNldHRlciBpbnN0ZWFkIG9mIGZyb3plbiBvciBub24td3JpdGFibGUgcHJvcHNcbiAgICAgICAgICAvLyBiZWNhdXNlIHRoYXQgd29uJ3QgdGhyb3cgaW4gYSBub24tc3RyaWN0IG1vZGUgZnVuY3Rpb24uXG4gICAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgJiYgUmVmbGVjdC5jb25zdHJ1Y3QpIHtcbiAgICAgICAgLy8gV2UgY29uc3RydWN0IGEgZGlmZmVyZW50IGNvbnRyb2wgZm9yIHRoaXMgY2FzZSB0byBpbmNsdWRlIGFueSBleHRyYVxuICAgICAgICAvLyBmcmFtZXMgYWRkZWQgYnkgdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICB0cnkge1xuICAgICAgICAgIFJlZmxlY3QuY29uc3RydWN0KEZha2UsIFtdKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoZm4sIFtdLCBGYWtlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgRmFrZS5jYWxsKCk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZuLmNhbGwoRmFrZS5wcm90b3R5cGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICBjb250cm9sID0geDtcbiAgICAgIH1cblxuICAgICAgZm4oKTtcbiAgICB9XG4gIH0gY2F0Y2ggKHNhbXBsZSkge1xuICAgIC8vIFRoaXMgaXMgaW5saW5lZCBtYW51YWxseSBiZWNhdXNlIGNsb3N1cmUgZG9lc24ndCBkbyBpdCBmb3IgdXMuXG4gICAgaWYgKHNhbXBsZSAmJiBjb250cm9sICYmIHR5cGVvZiBzYW1wbGUuc3RhY2sgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBUaGlzIGV4dHJhY3RzIHRoZSBmaXJzdCBmcmFtZSBmcm9tIHRoZSBzYW1wbGUgdGhhdCBpc24ndCBhbHNvIGluIHRoZSBjb250cm9sLlxuICAgICAgLy8gU2tpcHBpbmcgb25lIGZyYW1lIHRoYXQgd2UgYXNzdW1lIGlzIHRoZSBmcmFtZSB0aGF0IGNhbGxzIHRoZSB0d28uXG4gICAgICB2YXIgc2FtcGxlTGluZXMgPSBzYW1wbGUuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIGNvbnRyb2xMaW5lcyA9IGNvbnRyb2wuc3RhY2suc3BsaXQoJ1xcbicpO1xuICAgICAgdmFyIHMgPSBzYW1wbGVMaW5lcy5sZW5ndGggLSAxO1xuICAgICAgdmFyIGMgPSBjb250cm9sTGluZXMubGVuZ3RoIC0gMTtcblxuICAgICAgd2hpbGUgKHMgPj0gMSAmJiBjID49IDAgJiYgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAvLyBXZSBleHBlY3QgYXQgbGVhc3Qgb25lIHN0YWNrIGZyYW1lIHRvIGJlIHNoYXJlZC5cbiAgICAgICAgLy8gVHlwaWNhbGx5IHRoaXMgd2lsbCBiZSB0aGUgcm9vdCBtb3N0IG9uZS4gSG93ZXZlciwgc3RhY2sgZnJhbWVzIG1heSBiZVxuICAgICAgICAvLyBjdXQgb2ZmIGR1ZSB0byBtYXhpbXVtIHN0YWNrIGxpbWl0cy4gSW4gdGhpcyBjYXNlLCBvbmUgbWF5YmUgY3V0IG9mZlxuICAgICAgICAvLyBlYXJsaWVyIHRoYW4gdGhlIG90aGVyLiBXZSBhc3N1bWUgdGhhdCB0aGUgc2FtcGxlIGlzIGxvbmdlciBvciB0aGUgc2FtZVxuICAgICAgICAvLyBhbmQgdGhlcmUgZm9yIGN1dCBvZmYgZWFybGllci4gU28gd2Ugc2hvdWxkIGZpbmQgdGhlIHJvb3QgbW9zdCBmcmFtZSBpblxuICAgICAgICAvLyB0aGUgc2FtcGxlIHNvbWV3aGVyZSBpbiB0aGUgY29udHJvbC5cbiAgICAgICAgYy0tO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgcyA+PSAxICYmIGMgPj0gMDsgcy0tLCBjLS0pIHtcbiAgICAgICAgLy8gTmV4dCB3ZSBmaW5kIHRoZSBmaXJzdCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSB3aGljaCBzaG91bGQgYmUgdGhlXG4gICAgICAgIC8vIGZyYW1lIHRoYXQgY2FsbGVkIG91ciBzYW1wbGUgZnVuY3Rpb24gYW5kIHRoZSBjb250cm9sLlxuICAgICAgICBpZiAoc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgIC8vIEluIFY4LCB0aGUgZmlyc3QgbGluZSBpcyBkZXNjcmliaW5nIHRoZSBtZXNzYWdlIGJ1dCBvdGhlciBWTXMgZG9uJ3QuXG4gICAgICAgICAgLy8gSWYgd2UncmUgYWJvdXQgdG8gcmV0dXJuIHRoZSBmaXJzdCBsaW5lLCBhbmQgdGhlIGNvbnRyb2wgaXMgYWxzbyBvbiB0aGUgc2FtZVxuICAgICAgICAgIC8vIGxpbmUsIHRoYXQncyBhIHByZXR0eSBnb29kIGluZGljYXRvciB0aGF0IG91ciBzYW1wbGUgdGhyZXcgYXQgc2FtZSBsaW5lIGFzXG4gICAgICAgICAgLy8gdGhlIGNvbnRyb2wuIEkuZS4gYmVmb3JlIHdlIGVudGVyZWQgdGhlIHNhbXBsZSBmcmFtZS4gU28gd2UgaWdub3JlIHRoaXMgcmVzdWx0LlxuICAgICAgICAgIC8vIFRoaXMgY2FuIGhhcHBlbiBpZiB5b3UgcGFzc2VkIGEgY2xhc3MgdG8gZnVuY3Rpb24gY29tcG9uZW50LCBvciBub24tZnVuY3Rpb24uXG4gICAgICAgICAgaWYgKHMgIT09IDEgfHwgYyAhPT0gMSkge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICBzLS07XG4gICAgICAgICAgICAgIGMtLTsgLy8gV2UgbWF5IHN0aWxsIGhhdmUgc2ltaWxhciBpbnRlcm1lZGlhdGUgZnJhbWVzIGZyb20gdGhlIGNvbnN0cnVjdCBjYWxsLlxuICAgICAgICAgICAgICAvLyBUaGUgbmV4dCBvbmUgdGhhdCBpc24ndCB0aGUgc2FtZSBzaG91bGQgYmUgb3VyIG1hdGNoIHRob3VnaC5cblxuICAgICAgICAgICAgICBpZiAoYyA8IDAgfHwgc2FtcGxlTGluZXNbc10gIT09IGNvbnRyb2xMaW5lc1tjXSkge1xuICAgICAgICAgICAgICAgIC8vIFY4IGFkZHMgYSBcIm5ld1wiIHByZWZpeCBmb3IgbmF0aXZlIGNsYXNzZXMuIExldCdzIHJlbW92ZSBpdCB0byBtYWtlIGl0IHByZXR0aWVyLlxuICAgICAgICAgICAgICAgIHZhciBfZnJhbWUgPSAnXFxuJyArIHNhbXBsZUxpbmVzW3NdLnJlcGxhY2UoJyBhdCBuZXcgJywgJyBhdCAnKTtcblxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIF9mcmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAvLyBSZXR1cm4gdGhlIGxpbmUgd2UgZm91bmQuXG5cblxuICAgICAgICAgICAgICAgIHJldHVybiBfZnJhbWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gd2hpbGUgKHMgPj0gMSAmJiBjID49IDApO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGZpbmFsbHkge1xuICAgIHJlZW50cnkgPSBmYWxzZTtcblxuICAgIHtcbiAgICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLl9yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB2YXIgZXJyID0gRXJyb3IoKGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJykgKyAnOiAnICsgbG9jYXRpb24gKyAnIHR5cGUgYCcgKyB0eXBlU3BlY05hbWUgKyAnYCBpcyBpbnZhbGlkOyAnICsgJ2l0IG11c3QgYmUgYSBmdW5jdGlvbiwgdXN1YWxseSBmcm9tIHRoZSBgcHJvcC10eXBlc2AgcGFja2FnZSwgYnV0IHJlY2VpdmVkIGAnICsgdHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICsgJ2AuJyArICdUaGlzIG9mdGVuIGhhcHBlbnMgYmVjYXVzZSBvZiB0eXBvcyBzdWNoIGFzIGBQcm9wVHlwZXMuZnVuY3Rpb25gIGluc3RlYWQgb2YgYFByb3BUeXBlcy5mdW5jYC4nKTtcbiAgICAgICAgICAgIGVyci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yJDEgPSB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSh2YWx1ZXMsIHR5cGVTcGVjTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIG51bGwsICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCcpO1xuICAgICAgICB9IGNhdGNoIChleCkge1xuICAgICAgICAgIGVycm9yJDEgPSBleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxICYmICEoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJyVzOiB0eXBlIHNwZWNpZmljYXRpb24gb2YgJXMnICsgJyBgJXNgIGlzIGludmFsaWQ7IHRoZSB0eXBlIGNoZWNrZXIgJyArICdmdW5jdGlvbiBtdXN0IHJldHVybiBgbnVsbGAgb3IgYW4gYEVycm9yYCBidXQgcmV0dXJuZWQgYSAlcy4gJyArICdZb3UgbWF5IGhhdmUgZm9yZ290dGVuIHRvIHBhc3MgYW4gYXJndW1lbnQgdG8gdGhlIHR5cGUgY2hlY2tlciAnICsgJ2NyZWF0b3IgKGFycmF5T2YsIGluc3RhbmNlT2YsIG9iamVjdE9mLCBvbmVPZiwgb25lT2ZUeXBlLCBhbmQgJyArICdzaGFwZSBhbGwgcmVxdWlyZSBhbiBhcmd1bWVudCkuJywgY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnLCBsb2NhdGlvbiwgdHlwZVNwZWNOYW1lLCB0eXBlb2YgZXJyb3IkMSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IgJiYgIShlcnJvciQxLm1lc3NhZ2UgaW4gbG9nZ2VkVHlwZUZhaWx1cmVzKSkge1xuICAgICAgICAgIC8vIE9ubHkgbW9uaXRvciB0aGlzIGZhaWx1cmUgb25jZSBiZWNhdXNlIHRoZXJlIHRlbmRzIHRvIGJlIGEgbG90IG9mIHRoZVxuICAgICAgICAgIC8vIHNhbWUgZXJyb3IuXG4gICAgICAgICAgbG9nZ2VkVHlwZUZhaWx1cmVzW2Vycm9yJDEubWVzc2FnZV0gPSB0cnVlO1xuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpO1xuXG4gICAgICAgICAgZXJyb3IoJ0ZhaWxlZCAlcyB0eXBlOiAlcycsIGxvY2F0aW9uLCBlcnJvciQxLm1lc3NhZ2UpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIFJFU0VSVkVEX1BST1BTID0ge1xuICBrZXk6IHRydWUsXG4gIHJlZjogdHJ1ZSxcbiAgX19zZWxmOiB0cnVlLFxuICBfX3NvdXJjZTogdHJ1ZVxufTtcbnZhciBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bjtcbnZhciBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bjtcbnZhciBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZikge1xuICB7XG4gICAgaWYgKHR5cGVvZiBjb25maWcucmVmID09PSAnc3RyaW5nJyAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50ICYmIHNlbGYgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC5zdGF0ZU5vZGUgIT09IHNlbGYpIHtcbiAgICAgIHZhciBjb21wb25lbnROYW1lID0gZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgZ2V0Q29tcG9uZW50TmFtZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAga2V5ID0gJycgKyBjb25maWcua2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZFJlZihjb25maWcpKSB7XG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgd2FybklmU3RyaW5nUmVmQ2Fubm90QmVBdXRvQ29udmVydGVkKGNvbmZpZywgc2VsZik7XG4gICAgfSAvLyBSZW1haW5pbmcgcHJvcGVydGllcyBhcmUgYWRkZWQgdG8gYSBuZXcgcHJvcHMgb2JqZWN0XG5cblxuICAgIGZvciAocHJvcE5hbWUgaW4gY29uZmlnKSB7XG4gICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsIHByb3BOYW1lKSAmJiAhUkVTRVJWRURfUFJPUFMuaGFzT3duUHJvcGVydHkocHJvcE5hbWUpKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGNvbmZpZ1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfSAvLyBSZXNvbHZlIGRlZmF1bHQgcHJvcHNcblxuXG4gICAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIHZhciBkZWZhdWx0UHJvcHMgPSB0eXBlLmRlZmF1bHRQcm9wcztcblxuICAgICAgZm9yIChwcm9wTmFtZSBpbiBkZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gZGVmYXVsdFByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnRPd25lciQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbnZhciBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bjtcblxue1xuICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IGZhbHNlO1xufVxuLyoqXG4gKiBWZXJpZmllcyB0aGUgb2JqZWN0IGlzIGEgUmVhY3RFbGVtZW50LlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNpc3ZhbGlkZWxlbWVudFxuICogQHBhcmFtIHs/b2JqZWN0fSBvYmplY3RcbiAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgYG9iamVjdGAgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBAZmluYWxcbiAqL1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudChvYmplY3QpIHtcbiAge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCkge1xuICB7XG4gICAgaWYgKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudCkge1xuICAgICAgdmFyIG5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWUoZWxlbWVudC5fb3duZXIudHlwZSkgKyBcIi5cIjtcbiAgICB9XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpO1xuXG4gICAgZXJyb3IoJ0VhY2ggY2hpbGQgaW4gYSBsaXN0IHNob3VsZCBoYXZlIGEgdW5pcXVlIFwia2V5XCIgcHJvcC4nICsgJyVzJXMgU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay93YXJuaW5nLWtleXMgZm9yIG1vcmUgaW5mb3JtYXRpb24uJywgY3VycmVudENvbXBvbmVudEVycm9ySW5mbywgY2hpbGRPd25lcik7XG5cbiAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICB9XG59XG4vKipcbiAqIEVuc3VyZSB0aGF0IGV2ZXJ5IGVsZW1lbnQgZWl0aGVyIGlzIHBhc3NlZCBpbiBhIHN0YXRpYyBsb2NhdGlvbiwgaW4gYW5cbiAqIGFycmF5IHdpdGggYW4gZXhwbGljaXQga2V5cyBwcm9wZXJ0eSBkZWZpbmVkLCBvciBpbiBhbiBvYmplY3QgbGl0ZXJhbFxuICogd2l0aCB2YWxpZCBrZXkgcHJvcGVydHkuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0Tm9kZX0gbm9kZSBTdGF0aWNhbGx5IHBhc3NlZCBjaGlsZCBvZiBhbnkgdHlwZS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBub2RlJ3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlQ2hpbGRLZXlzKG5vZGUsIHBhcmVudFR5cGUpIHtcbiAge1xuICAgIGlmICh0eXBlb2Ygbm9kZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShub2RlKSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KGNoaWxkKSkge1xuICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoY2hpbGQsIHBhcmVudFR5cGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1ZhbGlkRWxlbWVudChub2RlKSkge1xuICAgICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICAgIGlmIChub2RlLl9zdG9yZSkge1xuICAgICAgICBub2RlLl9zdG9yZS52YWxpZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAobm9kZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yRm4gPSBnZXRJdGVyYXRvckZuKG5vZGUpO1xuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gRW50cnkgaXRlcmF0b3JzIHVzZWQgdG8gcHJvdmlkZSBpbXBsaWNpdCBrZXlzLFxuICAgICAgICAvLyBidXQgbm93IHdlIHByaW50IGEgc2VwYXJhdGUgd2FybmluZyBmb3IgdGhlbSBsYXRlci5cbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChub2RlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcblxuICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChzdGVwLnZhbHVlKSkge1xuICAgICAgICAgICAgICB2YWxpZGF0ZUV4cGxpY2l0S2V5KHN0ZXAudmFsdWUsIHBhcmVudFR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhbiBlbGVtZW50LCB2YWxpZGF0ZSB0aGF0IGl0cyBwcm9wcyBmb2xsb3cgdGhlIHByb3BUeXBlcyBkZWZpbml0aW9uLFxuICogcHJvdmlkZWQgYnkgdGhlIHR5cGUuXG4gKlxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpIHtcbiAge1xuICAgIHZhciB0eXBlID0gZWxlbWVudC50eXBlO1xuXG4gICAgaWYgKHR5cGUgPT09IG51bGwgfHwgdHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBwcm9wVHlwZXM7XG5cbiAgICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFIHx8IC8vIE5vdGU6IE1lbW8gb25seSBjaGVja3Mgb3V0ZXIgcHJvcHMgaGVyZS5cbiAgICAvLyBJbm5lciBwcm9wcyBhcmUgY2hlY2tlZCBpbiB0aGUgcmVjb25jaWxlci5cbiAgICB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUpKSB7XG4gICAgICBwcm9wVHlwZXMgPSB0eXBlLnByb3BUeXBlcztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwcm9wVHlwZXMpIHtcbiAgICAgIC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG4gICAgICBjaGVja1Byb3BUeXBlcyhwcm9wVHlwZXMsIGVsZW1lbnQucHJvcHMsICdwcm9wJywgbmFtZSwgZWxlbWVudCk7XG4gICAgfSBlbHNlIGlmICh0eXBlLlByb3BUeXBlcyAhPT0gdW5kZWZpbmVkICYmICFwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93bikge1xuICAgICAgcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24gPSB0cnVlOyAvLyBJbnRlbnRpb25hbGx5IGluc2lkZSB0byBhdm9pZCB0cmlnZ2VyaW5nIGxhenkgaW5pdGlhbGl6ZXJzOlxuXG4gICAgICB2YXIgX25hbWUgPSBnZXRDb21wb25lbnROYW1lKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZSh0eXBlLnR5cGUpIHx8ICdVbmtub3duJykgKyBcIiAvPlwiO1xuICAgICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlU3RyaW5nID0gdHlwZW9mIHR5cGU7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKCdSZWFjdC5qc3g6IHR5cGUgaXMgaW52YWxpZCAtLSBleHBlY3RlZCBhIHN0cmluZyAoZm9yICcgKyAnYnVpbHQtaW4gY29tcG9uZW50cykgb3IgYSBjbGFzcy9mdW5jdGlvbiAoZm9yIGNvbXBvc2l0ZSAnICsgJ2NvbXBvbmVudHMpIGJ1dCBnb3Q6ICVzLiVzJywgdHlwZVN0cmluZywgaW5mbyk7XG4gICAgfVxuXG4gICAgdmFyIGVsZW1lbnQgPSBqc3hERVYodHlwZSwgcHJvcHMsIGtleSwgc291cmNlLCBzZWxmKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgICAvLyBUT0RPOiBEcm9wIHRoaXMgd2hlbiB0aGVzZSBhcmUgbm8gbG9uZ2VyIGFsbG93ZWQgYXMgdGhlIHR5cGUgYXJndW1lbnQuXG5cbiAgICBpZiAoZWxlbWVudCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9IC8vIFNraXAga2V5IHdhcm5pbmcgaWYgdGhlIHR5cGUgaXNuJ3QgdmFsaWQgc2luY2Ugb3VyIGtleSB2YWxpZGF0aW9uIGxvZ2ljXG4gICAgLy8gZG9lc24ndCBleHBlY3QgYSBub24tc3RyaW5nL2Z1bmN0aW9uIHR5cGUgYW5kIGNhbiB0aHJvdyBjb25mdXNpbmcgZXJyb3JzLlxuICAgIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgICAvLyAoUmVuZGVyaW5nIHdpbGwgdGhyb3cgd2l0aCBhIGhlbHBmdWwgbWVzc2FnZSBhbmQgYXMgc29vbiBhcyB0aGUgdHlwZSBpc1xuICAgIC8vIGZpeGVkLCB0aGUga2V5IHdhcm5pbmdzIHdpbGwgYXBwZWFyLilcblxuXG4gICAgaWYgKHZhbGlkVHlwZSkge1xuICAgICAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmIChjaGlsZHJlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChpc1N0YXRpY0NoaWxkcmVuKSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuW2ldLCB0eXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgICAgICAgICAgT2JqZWN0LmZyZWV6ZShjaGlsZHJlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVycm9yKCdSZWFjdC5qc3g6IFN0YXRpYyBjaGlsZHJlbiBzaG91bGQgYWx3YXlzIGJlIGFuIGFycmF5LiAnICsgJ1lvdSBhcmUgbGlrZWx5IGV4cGxpY2l0bHkgY2FsbGluZyBSZWFjdC5qc3hzIG9yIFJlYWN0LmpzeERFVi4gJyArICdVc2UgdGhlIEJhYmVsIHRyYW5zZm9ybSBpbnN0ZWFkLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhjaGlsZHJlbiwgdHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PT0gZXhwb3J0cy5GcmFnbWVudCkge1xuICAgICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZVByb3BUeXBlcyhlbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxufSAvLyBUaGVzZSB0d28gZnVuY3Rpb25zIGV4aXN0IHRvIHN0aWxsIGdldCBjaGlsZCB3YXJuaW5ncyBpbiBkZXZcblxudmFyIGpzeERFViQxID0gIGpzeFdpdGhWYWxpZGF0aW9uIDtcblxuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzJyk7XG59XG4iLCJpbXBvcnQgaGFzaCBmcm9tICcuL2xpYnMvaGFzaCc7XG52YXIgQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2FjaGUoaW5pdGlhbERhdGEpIHtcbiAgICAgICAgaWYgKGluaXRpYWxEYXRhID09PSB2b2lkIDApIHsgaW5pdGlhbERhdGEgPSB7fTsgfVxuICAgICAgICB0aGlzLl9fY2FjaGUgPSBuZXcgTWFwKE9iamVjdC5lbnRyaWVzKGluaXRpYWxEYXRhKSk7XG4gICAgICAgIHRoaXMuX19saXN0ZW5lcnMgPSBbXTtcbiAgICB9XG4gICAgQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9rZXkgPSB0aGlzLnNlcmlhbGl6ZUtleShrZXkpWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmdldChfa2V5KTtcbiAgICB9O1xuICAgIENhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgX2tleSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSlbMF07XG4gICAgICAgIHRoaXMuX19jYWNoZS5zZXQoX2tleSwgdmFsdWUpO1xuICAgICAgICB0aGlzLm5vdGlmeSgpO1xuICAgIH07XG4gICAgQ2FjaGUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuX19jYWNoZS5rZXlzKCkpO1xuICAgIH07XG4gICAgQ2FjaGUucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdmFyIF9rZXkgPSB0aGlzLnNlcmlhbGl6ZUtleShrZXkpWzBdO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2NhY2hlLmhhcyhfa2V5KTtcbiAgICB9O1xuICAgIENhY2hlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fX2NhY2hlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfTtcbiAgICBDYWNoZS5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgX2tleSA9IHRoaXMuc2VyaWFsaXplS2V5KGtleSlbMF07XG4gICAgICAgIHRoaXMuX19jYWNoZS5kZWxldGUoX2tleSk7XG4gICAgICAgIHRoaXMubm90aWZ5KCk7XG4gICAgfTtcbiAgICAvLyBUT0RPOiBpbnRyb2R1Y2UgbmFtZXNwYWNlIGZvciB0aGUgY2FjaGVcbiAgICBDYWNoZS5wcm90b3R5cGUuc2VyaWFsaXplS2V5ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgYXJncyA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlb2Yga2V5ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGtleSA9IGtleSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIC8vIGRlcGVuZGVuY2llcyBub3QgcmVhZHlcbiAgICAgICAgICAgICAgICBrZXkgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShrZXkpKSB7XG4gICAgICAgICAgICAvLyBhcmdzIGFycmF5XG4gICAgICAgICAgICBhcmdzID0ga2V5O1xuICAgICAgICAgICAga2V5ID0gaGFzaChrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29udmVydCBudWxsIHRvICcnXG4gICAgICAgICAgICBrZXkgPSBTdHJpbmcoa2V5IHx8ICcnKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZXJyb3JLZXkgPSBrZXkgPyAnZXJyQCcgKyBrZXkgOiAnJztcbiAgICAgICAgcmV0dXJuIFtrZXksIGFyZ3MsIGVycm9yS2V5XTtcbiAgICB9O1xuICAgIENhY2hlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbGlzdGVuZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaXNTdWJzY3JpYmVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fX2xpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghaXNTdWJzY3JpYmVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIGlzU3Vic2NyaWJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gX3RoaXMuX19saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9fbGlzdGVuZXJzW2luZGV4XSA9IF90aGlzLl9fbGlzdGVuZXJzW190aGlzLl9fbGlzdGVuZXJzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgIF90aGlzLl9fbGlzdGVuZXJzLmxlbmd0aC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH07XG4gICAgLy8gTm90aWZ5IENhY2hlIHN1YnNjcmliZXJzIGFib3V0IGEgY2hhbmdlIGluIHRoZSBjYWNoZVxuICAgIENhY2hlLnByb3RvdHlwZS5ub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgX2EgPSB0aGlzLl9fbGlzdGVuZXJzOyBfaSA8IF9hLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gX2FbX2ldO1xuICAgICAgICAgICAgbGlzdGVuZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENhY2hlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuIiwiaW1wb3J0IGRlZXBFcXVhbCBmcm9tICdmYXN0LWRlZXAtZXF1YWwnO1xuaW1wb3J0IGlzRG9jdW1lbnRWaXNpYmxlIGZyb20gJy4vbGlicy9pcy1kb2N1bWVudC12aXNpYmxlJztcbmltcG9ydCBDYWNoZSBmcm9tICcuL2NhY2hlJztcbi8vIGNhY2hlXG52YXIgY2FjaGUgPSBuZXcgQ2FjaGUoKTtcbi8vIGVycm9yIHJldHJ5XG5mdW5jdGlvbiBvbkVycm9yUmV0cnkoXywgX18sIGNvbmZpZywgcmV2YWxpZGF0ZSwgb3B0cykge1xuICAgIGlmICghaXNEb2N1bWVudFZpc2libGUoKSkge1xuICAgICAgICAvLyBpZiBpdCdzIGhpZGRlbiwgc3RvcFxuICAgICAgICAvLyBpdCB3aWxsIGF1dG8gcmV2YWxpZGF0ZSB3aGVuIGZvY3VzXG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBjb25maWcuZXJyb3JSZXRyeUNvdW50ID09PSAnbnVtYmVyJyAmJlxuICAgICAgICBvcHRzLnJldHJ5Q291bnQgPiBjb25maWcuZXJyb3JSZXRyeUNvdW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZXhwb25lbnRpYWwgYmFja29mZlxuICAgIHZhciBjb3VudCA9IE1hdGgubWluKG9wdHMucmV0cnlDb3VudCB8fCAwLCA4KTtcbiAgICB2YXIgdGltZW91dCA9IH5+KChNYXRoLnJhbmRvbSgpICsgMC41KSAqICgxIDw8IGNvdW50KSkgKiBjb25maWcuZXJyb3JSZXRyeUludGVydmFsO1xuICAgIHNldFRpbWVvdXQocmV2YWxpZGF0ZSwgdGltZW91dCwgb3B0cyk7XG59XG4vLyBjbGllbnQgc2lkZTogbmVlZCB0byBhZGp1c3QgdGhlIGNvbmZpZ1xuLy8gYmFzZWQgb24gdGhlIGJyb3dzZXIgc3RhdHVzXG4vLyBzbG93IGNvbm5lY3Rpb24gKDw9IDcwS2JwcylcbnZhciBzbG93Q29ubmVjdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbmF2aWdhdG9yWydjb25uZWN0aW9uJ10gJiZcbiAgICBbJ3Nsb3ctMmcnLCAnMmcnXS5pbmRleE9mKG5hdmlnYXRvclsnY29ubmVjdGlvbiddLmVmZmVjdGl2ZVR5cGUpICE9PSAtMTtcbi8vIGNvbmZpZ1xudmFyIGRlZmF1bHRDb25maWcgPSB7XG4gICAgLy8gZXZlbnRzXG4gICAgb25Mb2FkaW5nU2xvdzogZnVuY3Rpb24gKCkgeyB9LFxuICAgIG9uU3VjY2VzczogZnVuY3Rpb24gKCkgeyB9LFxuICAgIG9uRXJyb3I6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICBvbkVycm9yUmV0cnk6IG9uRXJyb3JSZXRyeSxcbiAgICBlcnJvclJldHJ5SW50ZXJ2YWw6IChzbG93Q29ubmVjdGlvbiA/IDEwIDogNSkgKiAxMDAwLFxuICAgIGZvY3VzVGhyb3R0bGVJbnRlcnZhbDogNSAqIDEwMDAsXG4gICAgZGVkdXBpbmdJbnRlcnZhbDogMiAqIDEwMDAsXG4gICAgbG9hZGluZ1RpbWVvdXQ6IChzbG93Q29ubmVjdGlvbiA/IDUgOiAzKSAqIDEwMDAsXG4gICAgcmVmcmVzaEludGVydmFsOiAwLFxuICAgIHJldmFsaWRhdGVPbkZvY3VzOiB0cnVlLFxuICAgIHJldmFsaWRhdGVPblJlY29ubmVjdDogdHJ1ZSxcbiAgICByZWZyZXNoV2hlbkhpZGRlbjogZmFsc2UsXG4gICAgcmVmcmVzaFdoZW5PZmZsaW5lOiBmYWxzZSxcbiAgICBzaG91bGRSZXRyeU9uRXJyb3I6IHRydWUsXG4gICAgc3VzcGVuc2U6IGZhbHNlLFxuICAgIGNvbXBhcmU6IGRlZXBFcXVhbFxufTtcbmV4cG9ydCB7IGNhY2hlIH07XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0Q29uZmlnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi91c2Utc3dyJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgdXNlU1dSIH0gZnJvbSAnLi91c2Utc3dyJztcbmV4cG9ydCB7IHVzZVNXUkluZmluaXRlIH0gZnJvbSAnLi91c2Utc3dyLWluZmluaXRlJztcbmV4cG9ydCB7IGNhY2hlIH0gZnJvbSAnLi9jb25maWcnO1xuZXhwb3J0IGRlZmF1bHQgdXNlU1dSO1xuIiwiLy8gdXNlIFdlYWtNYXAgdG8gc3RvcmUgdGhlIG9iamVjdC0+a2V5IG1hcHBpbmdcbi8vIHNvIHRoZSBvYmplY3RzIGNhbiBiZSBnYXJiYWdlIGNvbGxlY3RlZC5cbi8vIFdlYWtNYXAgdXNlcyBhIGhhc2h0YWJsZSB1bmRlciB0aGUgaG9vZCwgc28gdGhlIGxvb2t1cFxuLy8gY29tcGxleGl0eSBpcyBhbG1vc3QgTygxKS5cbnZhciB0YWJsZSA9IG5ldyBXZWFrTWFwKCk7XG4vLyBjb3VudGVyIG9mIHRoZSBrZXlcbnZhciBjb3VudGVyID0gMDtcbi8vIGhhc2hlcyBhbiBhcnJheSBvZiBvYmplY3RzIGFuZCByZXR1cm5zIGEgc3RyaW5nXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYXNoKGFyZ3MpIHtcbiAgICBpZiAoIWFyZ3MubGVuZ3RoKVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgdmFyIGtleSA9ICdhcmcnO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgX2hhc2ggPSB2b2lkIDA7XG4gICAgICAgIGlmIChhcmdzW2ldID09PSBudWxsIHx8IHR5cGVvZiBhcmdzW2ldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgLy8gbmVlZCB0byBjb25zaWRlciB0aGUgY2FzZSB0aGF0IGFyZ3NbaV0gaXMgYSBzdHJpbmc6XG4gICAgICAgICAgICAvLyBhcmdzW2ldICAgICAgICBfaGFzaFxuICAgICAgICAgICAgLy8gXCJ1bmRlZmluZWRcIiAtPiAnXCJ1bmRlZmluZWRcIidcbiAgICAgICAgICAgIC8vIHVuZGVmaW5lZCAgIC0+ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAvLyAxMjMgICAgICAgICAtPiAnMTIzJ1xuICAgICAgICAgICAgLy8gbnVsbCAgICAgICAgLT4gJ251bGwnXG4gICAgICAgICAgICAvLyBcIm51bGxcIiAgICAgIC0+ICdcIm51bGxcIidcbiAgICAgICAgICAgIGlmICh0eXBlb2YgYXJnc1tpXSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBfaGFzaCA9ICdcIicgKyBhcmdzW2ldICsgJ1wiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIF9oYXNoID0gU3RyaW5nKGFyZ3NbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKCF0YWJsZS5oYXMoYXJnc1tpXSkpIHtcbiAgICAgICAgICAgICAgICBfaGFzaCA9IGNvdW50ZXI7XG4gICAgICAgICAgICAgICAgdGFibGUuc2V0KGFyZ3NbaV0sIGNvdW50ZXIrKyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBfaGFzaCA9IHRhYmxlLmdldChhcmdzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXkgKz0gJ0AnICsgX2hhc2g7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RvY3VtZW50VmlzaWJsZSgpIHtcbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICB0eXBlb2YgZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQudmlzaWJpbGl0eVN0YXRlICE9PSAnaGlkZGVuJztcbiAgICB9XG4gICAgLy8gYWx3YXlzIGFzc3VtZSBpdCdzIHZpc2libGVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzT25saW5lKCkge1xuICAgIGlmICh0eXBlb2YgbmF2aWdhdG9yLm9uTGluZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvci5vbkxpbmU7XG4gICAgfVxuICAgIC8vIGFsd2F5cyBhc3N1bWUgaXQncyBvbmxpbmVcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRocm90dGxlKGZuLCBpbnRlcnZhbCkge1xuICAgIHZhciBwZW5kaW5nID0gZmFsc2U7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVuZGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcGVuZGluZyA9IHRydWU7XG4gICAgICAgIGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHBlbmRpbmcgPSBmYWxzZSk7IH0sIGludGVydmFsKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbnZhciBTV1JDb25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSk7XG5TV1JDb25maWdDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1NXUkNvbmZpZ0NvbnRleHQnO1xuZXhwb3J0IGRlZmF1bHQgU1dSQ29uZmlnQ29udGV4dDtcbiIsInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG52YXIgX19yZXN0ID0gKHRoaXMgJiYgdGhpcy5fX3Jlc3QpIHx8IGZ1bmN0aW9uIChzLCBlKSB7XG4gICAgdmFyIHQgPSB7fTtcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcbiAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XG4gICAgICAgIH1cbiAgICByZXR1cm4gdDtcbn07XG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRDb25maWcsIHsgY2FjaGUgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgU1dSQ29uZmlnQ29udGV4dCBmcm9tICcuL3N3ci1jb25maWctY29udGV4dCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJy4vdXNlLXN3cic7XG5mdW5jdGlvbiB1c2VTV1JJbmZpbml0ZSgpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgZ2V0S2V5LCBmbiwgY29uZmlnID0ge307XG4gICAgaWYgKGFyZ3MubGVuZ3RoID49IDEpIHtcbiAgICAgICAgZ2V0S2V5ID0gYXJnc1swXTtcbiAgICB9XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMikge1xuICAgICAgICBmbiA9IGFyZ3NbMV07XG4gICAgICAgIGNvbmZpZyA9IGFyZ3NbMl07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIGFyZ3NbMV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGZuID0gYXJnc1sxXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbmZpZyA9IGFyZ3NbMV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgdXNlQ29udGV4dChTV1JDb25maWdDb250ZXh0KSwgY29uZmlnKTtcbiAgICB2YXIgX2EgPSBjb25maWcuaW5pdGlhbFNpemUsIGluaXRpYWxTaXplID0gX2EgPT09IHZvaWQgMCA/IDEgOiBfYSwgX2IgPSBjb25maWcucmV2YWxpZGF0ZUFsbCwgcmV2YWxpZGF0ZUFsbCA9IF9iID09PSB2b2lkIDAgPyBmYWxzZSA6IF9iLCBfYyA9IGNvbmZpZy5wZXJzaXN0U2l6ZSwgcGVyc2lzdFNpemUgPSBfYyA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYywgZGVmYXVsdEZldGNoZXIgPSBjb25maWcuZmV0Y2hlciwgZXh0cmFDb25maWcgPSBfX3Jlc3QoY29uZmlnLCBbXCJpbml0aWFsU2l6ZVwiLCBcInJldmFsaWRhdGVBbGxcIiwgXCJwZXJzaXN0U2l6ZVwiLCBcImZldGNoZXJcIl0pO1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgZ2xvYmFsIGZldGNoZXJcbiAgICAgICAgLy8gd2UgaGF2ZSB0byBjb252ZXJ0IHRoZSB0eXBlIGhlcmVcbiAgICAgICAgZm4gPSBkZWZhdWx0RmV0Y2hlcjtcbiAgICB9XG4gICAgLy8gZ2V0IHRoZSBzZXJpYWxpemVkIGtleSBvZiB0aGUgZmlyc3QgcGFnZVxuICAgIHZhciBmaXJzdFBhZ2VLZXkgPSBudWxsO1xuICAgIHRyeSB7XG4gICAgICAgIDtcbiAgICAgICAgZmlyc3RQYWdlS2V5ID0gY2FjaGUuc2VyaWFsaXplS2V5KGdldEtleSgwLCBudWxsKSlbMF07XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgLy8gbm90IHJlYWR5XG4gICAgfVxuICAgIHZhciByZXJlbmRlciA9IHVzZVN0YXRlKGZhbHNlKVsxXTtcbiAgICAvLyB3ZSB1c2UgY2FjaGUgdG8gcGFzcyBleHRyYSBpbmZvIChjb250ZXh0KSB0byBmZXRjaGVyIHNvIGl0IGNhbiBiZSBnbG9iYWxseSBzaGFyZWRcbiAgICAvLyBoZXJlIHdlIGdldCB0aGUga2V5IG9mIHRoZSBmZXRjaGVyIGNvbnRleHQgY2FjaGVcbiAgICB2YXIgY29udGV4dENhY2hlS2V5ID0gbnVsbDtcbiAgICBpZiAoZmlyc3RQYWdlS2V5KSB7XG4gICAgICAgIGNvbnRleHRDYWNoZUtleSA9ICdjb250ZXh0QCcgKyBmaXJzdFBhZ2VLZXk7XG4gICAgfVxuICAgIC8vIHBhZ2UgY291bnQgaXMgY2FjaGVkIGFzIHdlbGwsIHNvIHdoZW4gbmF2aWdhdGluZyB0aGUgbGlzdCBjYW4gYmUgcmVzdG9yZWRcbiAgICB2YXIgcGFnZUNvdW50Q2FjaGVLZXkgPSBudWxsO1xuICAgIHZhciBjYWNoZWRQYWdlU2l6ZTtcbiAgICBpZiAoZmlyc3RQYWdlS2V5KSB7XG4gICAgICAgIHBhZ2VDb3VudENhY2hlS2V5ID0gJ3NpemVAJyArIGZpcnN0UGFnZUtleTtcbiAgICAgICAgY2FjaGVkUGFnZVNpemUgPSBjYWNoZS5nZXQocGFnZUNvdW50Q2FjaGVLZXkpO1xuICAgIH1cbiAgICB2YXIgcGFnZUNvdW50UmVmID0gdXNlUmVmKGNhY2hlZFBhZ2VTaXplIHx8IGluaXRpYWxTaXplKTtcbiAgICB2YXIgZGlkTW91bnRSZWYgPSB1c2VSZWYoZmFsc2UpO1xuICAgIC8vIGV2ZXJ5IHRpbWUgdGhlIGtleSBjaGFuZ2VzLCB3ZSByZXNldCB0aGUgcGFnZSBzaXplIGlmIGl0J3Mgbm90IHBlcnNpc3RlZFxuICAgIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChkaWRNb3VudFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICBpZiAoIXBlcnNpc3RTaXplKSB7XG4gICAgICAgICAgICAgICAgcGFnZUNvdW50UmVmLmN1cnJlbnQgPSBpbml0aWFsU2l6ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpZE1vdW50UmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSwgW2ZpcnN0UGFnZUtleV0pO1xuICAgIC8vIGFjdHVhbCBzd3Igb2YgYWxsIHBhZ2VzXG4gICAgdmFyIHN3ciA9IHVzZVNXUihmaXJzdFBhZ2VLZXkgPyBbJ21hbnknLCBmaXJzdFBhZ2VLZXldIDogbnVsbCwgZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2EsIG9yaWdpbmFsRGF0YSwgZm9yY2UsIGRhdGEsIHByZXZpb3VzUGFnZURhdGEsIGksIF9iLCBwYWdlS2V5LCBwYWdlQXJncywgcGFnZURhdGEsIHNob3VsZFJldmFsaWRhdGVQYWdlO1xuICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9jKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKF9jLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBfYSA9IGNhY2hlLmdldChjb250ZXh0Q2FjaGVLZXkpIHx8IHt9LCBvcmlnaW5hbERhdGEgPSBfYS5vcmlnaW5hbERhdGEsIGZvcmNlID0gX2EuZm9yY2U7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlRGF0YSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIShpIDwgcGFnZUNvdW50UmVmLmN1cnJlbnQpKSByZXR1cm4gWzMgLypicmVhayovLCA4XTtcbiAgICAgICAgICAgICAgICAgICAgX2IgPSBjYWNoZS5zZXJpYWxpemVLZXkoZ2V0S2V5KGksIHByZXZpb3VzUGFnZURhdGEpKSwgcGFnZUtleSA9IF9iWzBdLCBwYWdlQXJncyA9IF9iWzFdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhZ2VLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHBhZ2VLZXkgaXMgZmFsc3ksIHN0b3AgZmV0Y2hpbmcgbmV4dCBwYWdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgOF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGFnZURhdGEgPSBjYWNoZS5nZXQocGFnZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIHNob3VsZFJldmFsaWRhdGVQYWdlID0gcmV2YWxpZGF0ZUFsbCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZm9yY2UgPT09ICd1bmRlZmluZWQnICYmIGkgPT09IDApIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAob3JpZ2luYWxEYXRhICYmICFjb25maWcuY29tcGFyZShvcmlnaW5hbERhdGFbaV0sIHBhZ2VEYXRhKSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwYWdlRGF0YSA9PT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkUmV2YWxpZGF0ZVBhZ2UpIHJldHVybiBbMyAvKmJyZWFrKi8sIDZdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShwYWdlQXJncyAhPT0gbnVsbCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmbi5hcHBseSh2b2lkIDAsIHBhZ2VBcmdzKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzQgLyp5aWVsZCovLCBmbihwYWdlS2V5KV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBwYWdlRGF0YSA9IF9jLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA1O1xuICAgICAgICAgICAgICAgIGNhc2UgNTpcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KHBhZ2VLZXksIHBhZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgX2MubGFiZWwgPSA2O1xuICAgICAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5wdXNoKHBhZ2VEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXNQYWdlRGF0YSA9IHBhZ2VEYXRhO1xuICAgICAgICAgICAgICAgICAgICBfYy5sYWJlbCA9IDc7XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICArK2k7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDFdO1xuICAgICAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICAgICAgLy8gb25jZSB3ZSBleGVjdXRlZCB0aGUgZGF0YSBmZXRjaGluZyBiYXNlZCBvbiB0aGUgY29udGV4dCwgY2xlYXIgdGhlIGNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgY2FjaGUuZGVsZXRlKGNvbnRleHRDYWNoZUtleSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiB0aGUgZGF0YVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9LCBleHRyYUNvbmZpZyk7XG4gICAgLy8gZXh0ZW5kIHRoZSBTV1IgQVBJXG4gICAgdmFyIG11dGF0ZSA9IHN3ci5tdXRhdGU7XG4gICAgc3dyLnNpemUgPSBwYWdlQ291bnRSZWYuY3VycmVudDtcbiAgICBzd3IubXV0YXRlID0gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKGRhdGEsIHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgICAgaWYgKHNob3VsZFJldmFsaWRhdGUgPT09IHZvaWQgMCkgeyBzaG91bGRSZXZhbGlkYXRlID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZSAmJiB0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIC8vIHdlIG9ubHkgcmV2YWxpZGF0ZSB0aGUgcGFnZXMgdGhhdCBhcmUgY2hhbmdlZFxuICAgICAgICAgICAgdmFyIG9yaWdpbmFsRGF0YSA9IHN3ci5kYXRhO1xuICAgICAgICAgICAgY2FjaGUuc2V0KGNvbnRleHRDYWNoZUtleSwgeyBvcmlnaW5hbERhdGE6IG9yaWdpbmFsRGF0YSwgZm9yY2U6IGZhbHNlIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNob3VsZFJldmFsaWRhdGUpIHtcbiAgICAgICAgICAgIC8vIGNhbGxpbmcgYG11dGF0ZSgpYCwgd2UgcmV2YWxpZGF0ZSBhbGwgcGFnZXNcbiAgICAgICAgICAgIGNhY2hlLnNldChjb250ZXh0Q2FjaGVLZXksIHsgZm9yY2U6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG11dGF0ZShkYXRhLCBzaG91bGRSZXZhbGlkYXRlKTtcbiAgICB9LCBbbXV0YXRlLCBzd3IuZGF0YSwgY29udGV4dENhY2hlS2V5XSk7XG4gICAgc3dyLnNldFNpemUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBwYWdlQ291bnRSZWYuY3VycmVudCA9IGFyZyhwYWdlQ291bnRSZWYuY3VycmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGFyZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIHBhZ2VDb3VudFJlZi5jdXJyZW50ID0gYXJnO1xuICAgICAgICB9XG4gICAgICAgIGNhY2hlLnNldChwYWdlQ291bnRDYWNoZUtleSwgcGFnZUNvdW50UmVmLmN1cnJlbnQpO1xuICAgICAgICByZXJlbmRlcihmdW5jdGlvbiAodikgeyByZXR1cm4gIXY7IH0pO1xuICAgICAgICByZXR1cm4gc3dyLm11dGF0ZShmdW5jdGlvbiAodikgeyByZXR1cm4gdjsgfSk7XG4gICAgfSwgW3N3ci5tdXRhdGUsIHBhZ2VDb3VudENhY2hlS2V5XSk7XG4gICAgcmV0dXJuIHN3cjtcbn1cbmV4cG9ydCB7IHVzZVNXUkluZmluaXRlIH07XG4iLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlTGF5b3V0RWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGRlZmF1bHRDb25maWcsIHsgY2FjaGUgfSBmcm9tICcuL2NvbmZpZyc7XG5pbXBvcnQgaXNEb2N1bWVudFZpc2libGUgZnJvbSAnLi9saWJzL2lzLWRvY3VtZW50LXZpc2libGUnO1xuaW1wb3J0IGlzT25saW5lIGZyb20gJy4vbGlicy9pcy1vbmxpbmUnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJy4vbGlicy90aHJvdHRsZSc7XG5pbXBvcnQgU1dSQ29uZmlnQ29udGV4dCBmcm9tICcuL3N3ci1jb25maWctY29udGV4dCc7XG52YXIgSVNfU0VSVkVSID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XG4vLyBwb2x5ZmlsbCBmb3IgcmVxdWVzdElkbGVDYWxsYmFja1xudmFyIHJJQyA9IElTX1NFUlZFUlxuICAgID8gbnVsbFxuICAgIDogd2luZG93WydyZXF1ZXN0SWRsZUNhbGxiYWNrJ10gfHwgKGZ1bmN0aW9uIChmKSB7IHJldHVybiBzZXRUaW1lb3V0KGYsIDEpOyB9KTtcbi8vIFJlYWN0IGN1cnJlbnRseSB0aHJvd3MgYSB3YXJuaW5nIHdoZW4gdXNpbmcgdXNlTGF5b3V0RWZmZWN0IG9uIHRoZSBzZXJ2ZXIuXG4vLyBUbyBnZXQgYXJvdW5kIGl0LCB3ZSBjYW4gY29uZGl0aW9uYWxseSB1c2VFZmZlY3Qgb24gdGhlIHNlcnZlciAobm8tb3ApIGFuZFxuLy8gdXNlTGF5b3V0RWZmZWN0IGluIHRoZSBicm93c2VyLlxudmFyIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgPSBJU19TRVJWRVIgPyB1c2VFZmZlY3QgOiB1c2VMYXlvdXRFZmZlY3Q7XG4vLyBnbG9iYWwgc3RhdGUgbWFuYWdlcnNcbnZhciBDT05DVVJSRU5UX1BST01JU0VTID0ge307XG52YXIgQ09OQ1VSUkVOVF9QUk9NSVNFU19UUyA9IHt9O1xudmFyIEZPQ1VTX1JFVkFMSURBVE9SUyA9IHt9O1xudmFyIFJFQ09OTkVDVF9SRVZBTElEQVRPUlMgPSB7fTtcbnZhciBDQUNIRV9SRVZBTElEQVRPUlMgPSB7fTtcbnZhciBNVVRBVElPTl9UUyA9IHt9O1xudmFyIE1VVEFUSU9OX0VORF9UUyA9IHt9O1xuLy8gc2V0dXAgRE9NIGV2ZW50cyBsaXN0ZW5lcnMgZm9yIGBmb2N1c2AgYW5kIGByZWNvbm5lY3RgIGFjdGlvbnNcbmlmICghSVNfU0VSVkVSICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgdmFyIHJldmFsaWRhdGVfMSA9IGZ1bmN0aW9uIChyZXZhbGlkYXRvcnMpIHtcbiAgICAgICAgaWYgKCFpc0RvY3VtZW50VmlzaWJsZSgpIHx8ICFpc09ubGluZSgpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gcmV2YWxpZGF0b3JzKSB7XG4gICAgICAgICAgICBpZiAocmV2YWxpZGF0b3JzW2tleV1bMF0pXG4gICAgICAgICAgICAgICAgcmV2YWxpZGF0b3JzW2tleV1bMF0oKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gZm9jdXMgcmV2YWxpZGF0ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgZnVuY3Rpb24gKCkgeyByZXR1cm4gcmV2YWxpZGF0ZV8xKEZPQ1VTX1JFVkFMSURBVE9SUyk7IH0sIGZhbHNlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBmdW5jdGlvbiAoKSB7IHJldHVybiByZXZhbGlkYXRlXzEoRk9DVVNfUkVWQUxJREFUT1JTKTsgfSwgZmFsc2UpO1xuICAgIC8vIHJlY29ubmVjdCByZXZhbGlkYXRlXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ29ubGluZScsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJldmFsaWRhdGVfMShSRUNPTk5FQ1RfUkVWQUxJREFUT1JTKTsgfSwgZmFsc2UpO1xufVxudmFyIHRyaWdnZXIgPSBmdW5jdGlvbiAoX2tleSwgc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgIGlmIChzaG91bGRSZXZhbGlkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkUmV2YWxpZGF0ZSA9IHRydWU7IH1cbiAgICAvLyB3ZSBhcmUgaWdub3JpbmcgdGhlIHNlY29uZCBhcmd1bWVudCB3aGljaCBjb3JyZXNwb25kIHRvIHRoZSBhcmd1bWVudHNcbiAgICAvLyB0aGUgZmV0Y2hlciB3aWxsIHJlY2VpdmUgd2hlbiBrZXkgaXMgYW4gYXJyYXlcbiAgICB2YXIgX2EgPSBjYWNoZS5zZXJpYWxpemVLZXkoX2tleSksIGtleSA9IF9hWzBdLCBrZXlFcnIgPSBfYVsyXTtcbiAgICBpZiAoIWtleSlcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIHZhciB1cGRhdGVycyA9IENBQ0hFX1JFVkFMSURBVE9SU1trZXldO1xuICAgIGlmIChrZXkgJiYgdXBkYXRlcnMpIHtcbiAgICAgICAgdmFyIGN1cnJlbnREYXRhID0gY2FjaGUuZ2V0KGtleSk7XG4gICAgICAgIHZhciBjdXJyZW50RXJyb3IgPSBjYWNoZS5nZXQoa2V5RXJyKTtcbiAgICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXBkYXRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2godXBkYXRlcnNbaV0oc2hvdWxkUmV2YWxpZGF0ZSwgY3VycmVudERhdGEsIGN1cnJlbnRFcnJvciwgaSA+IDApKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXR1cm4gbmV3IHVwZGF0ZWQgdmFsdWVcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNhY2hlLmdldChrZXkpOyB9KTtcbiAgICB9XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZS5nZXQoa2V5KSk7XG59O1xudmFyIGJyb2FkY2FzdFN0YXRlID0gZnVuY3Rpb24gKGtleSwgZGF0YSwgZXJyb3IpIHtcbiAgICB2YXIgdXBkYXRlcnMgPSBDQUNIRV9SRVZBTElEQVRPUlNba2V5XTtcbiAgICBpZiAoa2V5ICYmIHVwZGF0ZXJzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdXBkYXRlcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHVwZGF0ZXJzW2ldKGZhbHNlLCBkYXRhLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9XG59O1xudmFyIG11dGF0ZSA9IGZ1bmN0aW9uIChfa2V5LCBfZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgIGlmIChzaG91bGRSZXZhbGlkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkUmV2YWxpZGF0ZSA9IHRydWU7IH1cbiAgICByZXR1cm4gX19hd2FpdGVyKHZvaWQgMCwgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF9hLCBrZXksIGtleUVyciwgYmVmb3JlTXV0YXRpb25UcywgYmVmb3JlQ29uY3VycmVudFByb21pc2VzVHMsIGRhdGEsIGVycm9yLCBlcnJfMSwgZXJyXzIsIHVwZGF0ZXJzLCBwcm9taXNlcywgaTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBjYWNoZS5zZXJpYWxpemVLZXkoX2tleSksIGtleSA9IF9hWzBdLCBrZXlFcnIgPSBfYVsyXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFrZXkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIGlzIG5vIG5ldyBkYXRhLCBjYWxsIHJldmFsaWRhdGUgYWdhaW5zdCB0aGUga2V5XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX2RhdGEgPT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHRyaWdnZXIoX2tleSwgc2hvdWxkUmV2YWxpZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGltZXN0YW1wc1xuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHRpbWVzdGFtcHNcbiAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05fVFNba2V5XSA9IERhdGUubm93KCkgLSAxO1xuICAgICAgICAgICAgICAgICAgICBNVVRBVElPTl9FTkRfVFNba2V5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZU11dGF0aW9uVHMgPSBNVVRBVElPTl9UU1trZXldO1xuICAgICAgICAgICAgICAgICAgICBiZWZvcmVDb25jdXJyZW50UHJvbWlzZXNUcyA9IENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoX2RhdGEgJiYgdHlwZW9mIF9kYXRhID09PSAnZnVuY3Rpb24nKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIF9kYXRhKGNhY2hlLmdldChrZXkpKV07XG4gICAgICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIGVycl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycl8xO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKF9kYXRhICYmIHR5cGVvZiBfZGF0YS50aGVuID09PSAnZnVuY3Rpb24nKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMTBdO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDY7XG4gICAgICAgICAgICAgICAgY2FzZSA2OlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzYsIDgsICwgOV0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBfZGF0YV07XG4gICAgICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICBjYXNlIDg6XG4gICAgICAgICAgICAgICAgICAgIGVycl8yID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IGVycl8yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA5XTtcbiAgICAgICAgICAgICAgICBjYXNlIDk6IHJldHVybiBbMyAvKmJyZWFrKi8sIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgICAgICAgICBkYXRhID0gX2RhdGE7XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMTE7XG4gICAgICAgICAgICAgICAgY2FzZSAxMTpcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgb3RoZXIgbXV0YXRpb25zIGhhdmUgb2NjdXJyZWQgc2luY2Ugd2UndmUgc3RhcnRlZCBhd2FpdGluZywgaWYgc28gdGhlbiBkbyBub3QgcGVyc2lzdCB0aGlzIGNoYW5nZVxuICAgICAgICAgICAgICAgICAgICBpZiAoYmVmb3JlTXV0YXRpb25UcyAhPT0gTVVUQVRJT05fVFNba2V5XSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYmVmb3JlQ29uY3VycmVudFByb21pc2VzVHMgIT09IENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGRhdGFdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjYWNoZWQgZGF0YSwgYXZvaWQgbm90aWZ5aW5nIGZyb20gdGhlIGNhY2hlXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBkYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5RXJyLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRoZSB0aW1lc3RhbXAgdG8gbWFyayB0aGUgbXV0YXRpb24gaGFzIGVuZGVkXG4gICAgICAgICAgICAgICAgICAgIE1VVEFUSU9OX0VORF9UU1trZXldID0gRGF0ZS5ub3coKSAtIDE7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZXJzID0gQ0FDSEVfUkVWQUxJREFUT1JTW2tleV07XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB1cGRhdGVycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2godXBkYXRlcnNbaV0oISFzaG91bGRSZXZhbGlkYXRlLCBkYXRhLCBlcnJvciwgaSA+IDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVybiBuZXcgdXBkYXRlZCB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWNoZS5nZXQoa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhyb3cgZXJyb3Igb3IgcmV0dXJuIGRhdGEgdG8gYmUgdXNlZCBieSBjYWxsZXIgb2YgbXV0YXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZGF0YV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIHVzZVNXUigpIHtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIHZhciBhcmdzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICB2YXIgX2tleSwgZm4sIGNvbmZpZyA9IHt9O1xuICAgIGlmIChhcmdzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgIF9rZXkgPSBhcmdzWzBdO1xuICAgIH1cbiAgICBpZiAoYXJncy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZuID0gYXJnc1sxXTtcbiAgICAgICAgY29uZmlnID0gYXJnc1syXTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJnc1sxXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZm4gPSBhcmdzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmdzWzFdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY29uZmlnID0gYXJnc1sxXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyB3ZSBhc3N1bWUgYGtleWAgYXMgdGhlIGlkZW50aWZpZXIgb2YgdGhlIHJlcXVlc3RcbiAgICAvLyBga2V5YCBjYW4gY2hhbmdlIGJ1dCBgZm5gIHNob3VsZG4ndFxuICAgIC8vIChiZWNhdXNlIGByZXZhbGlkYXRlYCBvbmx5IGRlcGVuZHMgb24gYGtleWApXG4gICAgLy8gYGtleUVycmAgaXMgdGhlIGNhY2hlIGtleSBmb3IgZXJyb3Igb2JqZWN0c1xuICAgIHZhciBfYSA9IGNhY2hlLnNlcmlhbGl6ZUtleShfa2V5KSwga2V5ID0gX2FbMF0sIGZuQXJncyA9IF9hWzFdLCBrZXlFcnIgPSBfYVsyXTtcbiAgICBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q29uZmlnLCB1c2VDb250ZXh0KFNXUkNvbmZpZ0NvbnRleHQpLCBjb25maWcpO1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIHVzZSB0aGUgZ2xvYmFsIGZldGNoZXJcbiAgICAgICAgZm4gPSBjb25maWcuZmV0Y2hlcjtcbiAgICB9XG4gICAgdmFyIGluaXRpYWxEYXRhID0gY2FjaGUuZ2V0KGtleSkgfHwgY29uZmlnLmluaXRpYWxEYXRhO1xuICAgIHZhciBpbml0aWFsRXJyb3IgPSBjYWNoZS5nZXQoa2V5RXJyKTtcbiAgICAvLyBpZiBhIHN0YXRlIGlzIGFjY2Vzc2VkIChkYXRhLCBlcnJvciBvciBpc1ZhbGlkYXRpbmcpLFxuICAgIC8vIHdlIGFkZCB0aGUgc3RhdGUgdG8gZGVwZW5kZW5jaWVzIHNvIGlmIHRoZSBzdGF0ZSBpc1xuICAgIC8vIHVwZGF0ZWQgaW4gdGhlIGZ1dHVyZSwgd2UgY2FuIHRyaWdnZXIgYSByZXJlbmRlclxuICAgIHZhciBzdGF0ZURlcGVuZGVuY2llcyA9IHVzZVJlZih7XG4gICAgICAgIGRhdGE6IGZhbHNlLFxuICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgIGlzVmFsaWRhdGluZzogZmFsc2VcbiAgICB9KTtcbiAgICB2YXIgc3RhdGVSZWYgPSB1c2VSZWYoe1xuICAgICAgICBkYXRhOiBpbml0aWFsRGF0YSxcbiAgICAgICAgZXJyb3I6IGluaXRpYWxFcnJvcixcbiAgICAgICAgaXNWYWxpZGF0aW5nOiBmYWxzZVxuICAgIH0pO1xuICAgIHZhciByZXJlbmRlciA9IHVzZVN0YXRlKG51bGwpWzFdO1xuICAgIHZhciBkaXNwYXRjaCA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uIChwYXlsb2FkKSB7XG4gICAgICAgIHZhciBzaG91bGRVcGRhdGVTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBmb3IgKHZhciBrIGluIHBheWxvYWQpIHtcbiAgICAgICAgICAgIHN0YXRlUmVmLmN1cnJlbnRba10gPSBwYXlsb2FkW2tdO1xuICAgICAgICAgICAgaWYgKHN0YXRlRGVwZW5kZW5jaWVzLmN1cnJlbnRba10pIHtcbiAgICAgICAgICAgICAgICBzaG91bGRVcGRhdGVTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3VsZFVwZGF0ZVN0YXRlIHx8IGNvbmZpZy5zdXNwZW5zZSkge1xuICAgICAgICAgICAgaWYgKHVubW91bnRlZFJlZi5jdXJyZW50KVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHJlcmVuZGVyKHt9KTtcbiAgICAgICAgfVxuICAgIH0sIFtdKTtcbiAgICAvLyBlcnJvciByZWYgaW5zaWRlIHJldmFsaWRhdGUgKGlzIGxhc3QgcmVxdWVzdCBlcnJvcmVkPylcbiAgICB2YXIgdW5tb3VudGVkUmVmID0gdXNlUmVmKGZhbHNlKTtcbiAgICB2YXIga2V5UmVmID0gdXNlUmVmKGtleSk7XG4gICAgLy8gZG8gdW5tb3VudCBjaGVjayBmb3IgY2FsbGJhY2tzXG4gICAgdmFyIGV2ZW50c1JlZiA9IHVzZVJlZih7XG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAxOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNbX2kgLSAxXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodW5tb3VudGVkUmVmLmN1cnJlbnQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgY29uZmlnW2V2ZW50XS5hcHBseShjb25maWcsIHBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICB2YXIgYm91bmRNdXRhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAoZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgICByZXR1cm4gbXV0YXRlKGtleSwgZGF0YSwgc2hvdWxkUmV2YWxpZGF0ZSk7XG4gICAgfSwgW2tleV0pO1xuICAgIHZhciBhZGRSZXZhbGlkYXRvciA9IGZ1bmN0aW9uIChyZXZhbGlkYXRvcnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghcmV2YWxpZGF0b3JzW2tleV0pIHtcbiAgICAgICAgICAgIHJldmFsaWRhdG9yc1trZXldID0gW2NhbGxiYWNrXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldmFsaWRhdG9yc1trZXldLnB1c2goY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgcmVtb3ZlUmV2YWxpZGF0b3IgPSBmdW5jdGlvbiAocmV2bGlkYXRvcnMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChyZXZsaWRhdG9yc1trZXldKSB7XG4gICAgICAgICAgICB2YXIgcmV2YWxpZGF0b3JzID0gcmV2bGlkYXRvcnNba2V5XTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHJldmFsaWRhdG9ycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gMTB4IGZhc3RlciB0aGFuIHNwbGljZVxuICAgICAgICAgICAgICAgIC8vIGh0dHBzOi8vanNwZXJmLmNvbS9hcnJheS1yZW1vdmUtYnktaW5kZXhcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnNbaW5kZXhdID0gcmV2YWxpZGF0b3JzW3JldmFsaWRhdG9ycy5sZW5ndGggLSAxXTtcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRvcnMucG9wKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIHN0YXJ0IGEgcmV2YWxpZGF0aW9uXG4gICAgdmFyIHJldmFsaWRhdGUgPSB1c2VDYWxsYmFjayhmdW5jdGlvbiAocmV2YWxpZGF0ZU9wdHMpIHtcbiAgICAgICAgaWYgKHJldmFsaWRhdGVPcHRzID09PSB2b2lkIDApIHsgcmV2YWxpZGF0ZU9wdHMgPSB7fTsgfVxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGxvYWRpbmcsIHNob3VsZERlZHVwaW5nLCBuZXdEYXRhLCBzdGFydEF0LCBzaG91bGRJZ25vcmVSZXF1ZXN0LCBuZXdTdGF0ZSwgZXJyXzMsIHJldHJ5Q291bnQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWtleSB8fCAhZm4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIGZhbHNlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bm1vdW50ZWRSZWYuY3VycmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgZmFsc2VdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV2YWxpZGF0ZU9wdHMgPSBPYmplY3QuYXNzaWduKHsgZGVkdXBlOiBmYWxzZSB9LCByZXZhbGlkYXRlT3B0cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3VsZERlZHVwaW5nID0gdHlwZW9mIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSAhPT0gJ3VuZGVmaW5lZCcgJiYgcmV2YWxpZGF0ZU9wdHMuZGVkdXBlO1xuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS50cnlzLnB1c2goWzEsIDYsICwgN10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmFsaWRhdGluZzogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhID0gdm9pZCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRBdCA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkRGVkdXBpbmcpIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlcmUncyBhbHJlYWR5IGFuIG9uZ29pbmcgcmVxdWVzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgb25lIG5lZWRzIHRvIGJlIGRlZHVwbGljYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QXQgPSBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBDT05DVVJSRU5UX1BST01JU0VTW2tleV1dO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIG5vIGNhY2hlIGJlaW5nIHJlbmRlcmVkIGN1cnJlbnRseSAoaXQgc2hvd3MgYSBibGFuayBwYWdlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIHRyaWdnZXIgdGhlIGxvYWRpbmcgc2xvdyBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubG9hZGluZ1RpbWVvdXQgJiYgIWNhY2hlLmdldChrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsb2FkaW5nKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRzUmVmLmN1cnJlbnQuZW1pdCgnb25Mb2FkaW5nU2xvdycsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBjb25maWcubG9hZGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZuQXJncyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSA9IGZuLmFwcGx5KHZvaWQgMCwgZm5BcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XSA9IGZuKGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV0gPSBzdGFydEF0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0RhdGEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBDT05DVVJSRU5UX1BST01JU0VTX1RTW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCBjb25maWcuZGVkdXBpbmdJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBzdWNjZXNzIGV2ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb25seSBkbyB0aGlzIGZvciB0aGUgb3JpZ2luYWwgcmVxdWVzdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50c1JlZi5jdXJyZW50LmVtaXQoJ29uU3VjY2VzcycsIG5ld0RhdGEsIGtleSwgY29uZmlnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkSWdub3JlUmVxdWVzdCA9IFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUncmUgb3RoZXIgb25nb2luZyByZXF1ZXN0KHMpLCBzdGFydGVkIGFmdGVyIHRoZSBjdXJyZW50IG9uZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gaWdub3JlIHRoZSBjdXJyZW50IG9uZSB0byBhdm9pZCBwb3NzaWJsZSByYWNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHJlcTEtLS0tLS0tLS0tLS0tLS0tLS0+cmVzMSAgICAgICAgKGN1cnJlbnQgb25lKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgIHJlcTItLS0tLS0tLS0tLS0tLS0tPnJlczJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSByZXF1ZXN0IHRoYXQgZmlyZWQgbGF0ZXIgd2lsbCBhbHdheXMgYmUga2VwdC5cbiAgICAgICAgICAgICAgICAgICAgICAgIENPTkNVUlJFTlRfUFJPTUlTRVNfVFNba2V5XSA+IHN0YXJ0QXQgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiB0aGVyZSdyZSBvdGhlciBtdXRhdGlvbnMocyksIG92ZXJsYXBwZWQgd2l0aCB0aGUgY3VycmVudCByZXZhbGlkYXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmVxLS0tLS0tLS0tLS0tLS0tLS0tPnJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIG11dGF0ZS0tLS0tLT5lbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICByZXEtLS0tLS0tLS0tLS0+cmVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBtdXRhdGUtLS0tLS0+ZW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgcmVxLS0tLS0tLS0tLS0tLS0tLS0tPnJlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgIG11dGF0ZS0tLS0tLS0uLi4tLS0tLS0tLS0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gaWdub3JlIHRoZSByZXZhbGlkYXRpb24gcmVzdWx0IChyZXMpIGJlY2F1c2UgaXQncyBubyBsb25nZXIgZnJlc2guXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWVhbndoaWxlLCBhIG5ldyByZXZhbGlkYXRpb24gc2hvdWxkIGJlIHRyaWdnZXJlZCB3aGVuIHRoZSBtdXRhdGlvbiBlbmRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChNVVRBVElPTl9UU1trZXldICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoc3RhcnRBdCA8PSBNVVRBVElPTl9UU1trZXldIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjYXNlIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0QXQgPD0gTVVUQVRJT05fRU5EX1RTW2tleV0gfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTVVUQVRJT05fRU5EX1RTW2tleV0gPT09IDApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaG91bGRJZ25vcmVSZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goeyBpc1ZhbGlkYXRpbmc6IGZhbHNlIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCBmYWxzZV07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWNoZS5zZXQoa2V5LCBuZXdEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlLnNldChrZXlFcnIsIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdGF0ZVJlZi5jdXJyZW50LmVycm9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGRvbid0IGhhdmUgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5lcnJvciA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29uZmlnLmNvbXBhcmUoc3RhdGVSZWYuY3VycmVudC5kYXRhLCBuZXdEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlZXAgY29tcGFyZSB0byBhdm9pZCBleHRyYSByZS1yZW5kZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkYXRhIGNoYW5nZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gbmV3RGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1lcmdlIHRoZSBuZXcgc3RhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5ld1N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc2hvdWxkRGVkdXBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBhbHNvIHVwZGF0ZSBvdGhlciBob29rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyb2FkY2FzdFN0YXRlKGtleSwgbmV3RGF0YSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMyA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBDT05DVVJSRU5UX1BST01JU0VTW2tleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ09OQ1VSUkVOVF9QUk9NSVNFU19UU1trZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGUuc2V0KGtleUVyciwgZXJyXzMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IGEgbmV3IGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBkb24ndCB1c2UgZGVlcCBlcXVhbCBmb3IgZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVSZWYuY3VycmVudC5lcnJvciAhPT0gZXJyXzMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3ZSBrZWVwIHRoZSBzdGFsZSBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXzNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNob3VsZERlZHVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsc28gYnJvYWRjYXN0IHRvIHVwZGF0ZSBvdGhlciBob29rc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicm9hZGNhc3RTdGF0ZShrZXksIHVuZGVmaW5lZCwgZXJyXzMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZW50cyBhbmQgcmV0cnlcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50c1JlZi5jdXJyZW50LmVtaXQoJ29uRXJyb3InLCBlcnJfMywga2V5LCBjb25maWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmZpZy5zaG91bGRSZXRyeU9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyeUNvdW50ID0gKHJldmFsaWRhdGVPcHRzLnJldHJ5Q291bnQgfHwgMCkgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50c1JlZi5jdXJyZW50LmVtaXQoJ29uRXJyb3JSZXRyeScsIGVycl8zLCBrZXksIGNvbmZpZywgcmV2YWxpZGF0ZSwgT2JqZWN0LmFzc2lnbih7IGRlZHVwZTogdHJ1ZSB9LCByZXZhbGlkYXRlT3B0cywgeyByZXRyeUNvdW50OiByZXRyeUNvdW50IH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDddO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzIgLypyZXR1cm4qLywgdHJ1ZV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtrZXldKTtcbiAgICAvLyBtb3VudGVkIChjbGllbnQgc2lkZSByZW5kZXJpbmcpXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgha2V5KVxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgLy8gYWZ0ZXIgYGtleWAgdXBkYXRlcywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIG1vdW50ZWRcbiAgICAgICAgdW5tb3VudGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gYWZ0ZXIgdGhlIGNvbXBvbmVudCBpcyBtb3VudGVkIChoeWRyYXRlZCksXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBkYXRhIGZyb20gdGhlIGNhY2hlXG4gICAgICAgIC8vIGFuZCB0cmlnZ2VyIGEgcmV2YWxpZGF0aW9uXG4gICAgICAgIHZhciBjdXJyZW50SG9va0RhdGEgPSBzdGF0ZVJlZi5jdXJyZW50LmRhdGE7XG4gICAgICAgIHZhciBsYXRlc3RLZXllZERhdGEgPSBjYWNoZS5nZXQoa2V5KSB8fCBjb25maWcuaW5pdGlhbERhdGE7XG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgaWYgdGhlIGtleSBjaGFuZ2VkIChub3QgdGhlIGluaXRhbCByZW5kZXIpIG9yIGNhY2hlIHVwZGF0ZWRcbiAgICAgICAgaWYgKGtleVJlZi5jdXJyZW50ICE9PSBrZXkgfHxcbiAgICAgICAgICAgICFjb25maWcuY29tcGFyZShjdXJyZW50SG9va0RhdGEsIGxhdGVzdEtleWVkRGF0YSkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgZGF0YTogbGF0ZXN0S2V5ZWREYXRhIH0pO1xuICAgICAgICAgICAga2V5UmVmLmN1cnJlbnQgPSBrZXk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV2YWxpZGF0ZSB3aXRoIGRlZHVwaW5nXG4gICAgICAgIHZhciBzb2Z0UmV2YWxpZGF0ZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJldmFsaWRhdGUoeyBkZWR1cGU6IHRydWUgfSk7IH07XG4gICAgICAgIC8vIHRyaWdnZXIgYSByZXZhbGlkYXRpb25cbiAgICAgICAgaWYgKGNvbmZpZy5yZXZhbGlkYXRlT25Nb3VudCB8fFxuICAgICAgICAgICAgKCFjb25maWcuaW5pdGlhbERhdGEgJiYgY29uZmlnLnJldmFsaWRhdGVPbk1vdW50ID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxhdGVzdEtleWVkRGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAvLyBkZWxheSByZXZhbGlkYXRlIGlmIHRoZXJlJ3MgY2FjaGVcbiAgICAgICAgICAgICAgICAvLyB0byBub3QgYmxvY2sgdGhlIHJlbmRlcmluZ1xuICAgICAgICAgICAgICAgIHJJQyhzb2Z0UmV2YWxpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzb2Z0UmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHdoZW5ldmVyIHRoZSB3aW5kb3cgZ2V0cyBmb2N1c2VkLCByZXZhbGlkYXRlXG4gICAgICAgIHZhciBvbkZvY3VzO1xuICAgICAgICBpZiAoY29uZmlnLnJldmFsaWRhdGVPbkZvY3VzKSB7XG4gICAgICAgICAgICAvLyB0aHJvdHRsZTogYXZvaWQgYmVpbmcgY2FsbGVkIHR3aWNlIGZyb20gYm90aCBsaXN0ZW5lcnNcbiAgICAgICAgICAgIC8vIGFuZCB0YWJzIGJlaW5nIHN3aXRjaGVkIHF1aWNrbHlcbiAgICAgICAgICAgIG9uRm9jdXMgPSB0aHJvdHRsZShzb2Z0UmV2YWxpZGF0ZSwgY29uZmlnLmZvY3VzVGhyb3R0bGVJbnRlcnZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gd2hlbiByZWNvbm5lY3QsIHJldmFsaWRhdGVcbiAgICAgICAgdmFyIG9uUmVjb25uZWN0O1xuICAgICAgICBpZiAoY29uZmlnLnJldmFsaWRhdGVPblJlY29ubmVjdCkge1xuICAgICAgICAgICAgb25SZWNvbm5lY3QgPSBzb2Z0UmV2YWxpZGF0ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZWdpc3RlciBnbG9iYWwgY2FjaGUgdXBkYXRlIGxpc3RlbmVyXG4gICAgICAgIHZhciBvblVwZGF0ZSA9IGZ1bmN0aW9uIChzaG91bGRSZXZhbGlkYXRlLCB1cGRhdGVkRGF0YSwgdXBkYXRlZEVycm9yLCBkZWR1cGUpIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRSZXZhbGlkYXRlID09PSB2b2lkIDApIHsgc2hvdWxkUmV2YWxpZGF0ZSA9IHRydWU7IH1cbiAgICAgICAgICAgIGlmIChkZWR1cGUgPT09IHZvaWQgMCkgeyBkZWR1cGUgPSB0cnVlOyB9XG4gICAgICAgICAgICAvLyB1cGRhdGUgaG9vayBzdGF0ZVxuICAgICAgICAgICAgdmFyIG5ld1N0YXRlID0ge307XG4gICAgICAgICAgICB2YXIgbmVlZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB1cGRhdGVkRGF0YSAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgICAgICAgICAhY29uZmlnLmNvbXBhcmUoc3RhdGVSZWYuY3VycmVudC5kYXRhLCB1cGRhdGVkRGF0YSkpIHtcbiAgICAgICAgICAgICAgICBuZXdTdGF0ZS5kYXRhID0gdXBkYXRlZERhdGE7XG4gICAgICAgICAgICAgICAgbmVlZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbHdheXMgdXBkYXRlIGVycm9yXG4gICAgICAgICAgICAvLyBiZWNhdXNlIGl0IGNhbiBiZSBgdW5kZWZpbmVkYFxuICAgICAgICAgICAgaWYgKHN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgIT09IHVwZGF0ZWRFcnJvcikge1xuICAgICAgICAgICAgICAgIG5ld1N0YXRlLmVycm9yID0gdXBkYXRlZEVycm9yO1xuICAgICAgICAgICAgICAgIG5lZWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5lZWRVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChuZXdTdGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkUmV2YWxpZGF0ZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWR1cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNvZnRSZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV2YWxpZGF0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgYWRkUmV2YWxpZGF0b3IoRk9DVVNfUkVWQUxJREFUT1JTLCBvbkZvY3VzKTtcbiAgICAgICAgYWRkUmV2YWxpZGF0b3IoUkVDT05ORUNUX1JFVkFMSURBVE9SUywgb25SZWNvbm5lY3QpO1xuICAgICAgICBhZGRSZXZhbGlkYXRvcihDQUNIRV9SRVZBTElEQVRPUlMsIG9uVXBkYXRlKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNsZWFudXBcbiAgICAgICAgICAgIGRpc3BhdGNoID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbnVsbDsgfTtcbiAgICAgICAgICAgIC8vIG1hcmsgaXQgYXMgdW5tb3VudGVkXG4gICAgICAgICAgICB1bm1vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAgICAgICByZW1vdmVSZXZhbGlkYXRvcihGT0NVU19SRVZBTElEQVRPUlMsIG9uRm9jdXMpO1xuICAgICAgICAgICAgcmVtb3ZlUmV2YWxpZGF0b3IoUkVDT05ORUNUX1JFVkFMSURBVE9SUywgb25SZWNvbm5lY3QpO1xuICAgICAgICAgICAgcmVtb3ZlUmV2YWxpZGF0b3IoQ0FDSEVfUkVWQUxJREFUT1JTLCBvblVwZGF0ZSk7XG4gICAgICAgIH07XG4gICAgfSwgW2tleSwgcmV2YWxpZGF0ZV0pO1xuICAgIC8vIHNldCB1cCBwb2xsaW5nXG4gICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB0aW1lciA9IG51bGw7XG4gICAgICAgIHZhciB0aWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoIXN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29uZmlnLnJlZnJlc2hXaGVuSGlkZGVuIHx8IGlzRG9jdW1lbnRWaXNpYmxlKCkpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbmZpZy5yZWZyZXNoV2hlbk9mZmxpbmUgfHwgaXNPbmxpbmUoKSkpKSByZXR1cm4gWzMgLypicmVhayovLCAyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgcmV2YWxpZGF0ZSB3aGVuIHRoZSBwYWdlIGlzIHZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIEFQSSByZXF1ZXN0IGVycm9yZWQsIHdlIHN0b3AgcG9sbGluZyBpbiB0aGlzIHJvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgbGV0IHRoZSBlcnJvciByZXRyeSBmdW5jdGlvbiBoYW5kbGUgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHJldmFsaWRhdGUoeyBkZWR1cGU6IHRydWUgfSldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvbmx5IHJldmFsaWRhdGUgd2hlbiB0aGUgcGFnZSBpcyB2aXNpYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBBUEkgcmVxdWVzdCBlcnJvcmVkLCB3ZSBzdG9wIHBvbGxpbmcgaW4gdGhpcyByb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGxldCB0aGUgZXJyb3IgcmV0cnkgZnVuY3Rpb24gaGFuZGxlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcucmVmcmVzaEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZXIgPSBzZXRUaW1lb3V0KHRpY2ssIGNvbmZpZy5yZWZyZXNoSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTsgfTtcbiAgICAgICAgaWYgKGNvbmZpZy5yZWZyZXNoSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIHRpbWVyID0gc2V0VGltZW91dCh0aWNrLCBjb25maWcucmVmcmVzaEludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRpbWVyKVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgICAgIH07XG4gICAgfSwgW1xuICAgICAgICBjb25maWcucmVmcmVzaEludGVydmFsLFxuICAgICAgICBjb25maWcucmVmcmVzaFdoZW5IaWRkZW4sXG4gICAgICAgIGNvbmZpZy5yZWZyZXNoV2hlbk9mZmxpbmUsXG4gICAgICAgIHJldmFsaWRhdGVcbiAgICBdKTtcbiAgICAvLyBzdXNwZW5zZVxuICAgIGlmIChjb25maWcuc3VzcGVuc2UpIHtcbiAgICAgICAgLy8gaW4gc3VzcGVuc2UgbW9kZSwgd2UgY2FuJ3QgcmV0dXJuIGVtcHR5IHN0YXRlXG4gICAgICAgIC8vIChpdCBzaG91bGQgYmUgc3VzcGVuZGVkKVxuICAgICAgICAvLyB0cnkgdG8gZ2V0IGRhdGEgYW5kIGVycm9yIGZyb20gY2FjaGVcbiAgICAgICAgdmFyIGxhdGVzdERhdGEgPSBjYWNoZS5nZXQoa2V5KSB8fCBpbml0aWFsRGF0YTtcbiAgICAgICAgdmFyIGxhdGVzdEVycm9yID0gY2FjaGUuZ2V0KGtleUVycikgfHwgaW5pdGlhbEVycm9yO1xuICAgICAgICBpZiAodHlwZW9mIGxhdGVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgICAgICB0eXBlb2YgbGF0ZXN0RXJyb3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBuZWVkIHRvIHN0YXJ0IHRoZSByZXF1ZXN0IGlmIGl0IGhhc24ndFxuICAgICAgICAgICAgaWYgKCFDT05DVVJSRU5UX1BST01JU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICAvLyB0cmlnZ2VyIHJldmFsaWRhdGUgaW1tZWRpYXRlbHlcbiAgICAgICAgICAgICAgICAvLyB0byBnZXQgdGhlIHByb21pc2VcbiAgICAgICAgICAgICAgICByZXZhbGlkYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldICYmXG4gICAgICAgICAgICAgICAgdHlwZW9mIENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XS50aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgaXQgaXMgYSBwcm9taXNlXG4gICAgICAgICAgICAgICAgdGhyb3cgQ09OQ1VSUkVOVF9QUk9NSVNFU1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXQncyBhIHZhbHVlLCByZXR1cm4gaXQgZGlyZWN0bHkgKG92ZXJyaWRlKVxuICAgICAgICAgICAgbGF0ZXN0RGF0YSA9IENPTkNVUlJFTlRfUFJPTUlTRVNba2V5XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGxhdGVzdERhdGEgPT09ICd1bmRlZmluZWQnICYmIGxhdGVzdEVycm9yKSB7XG4gICAgICAgICAgICAvLyBpbiBzdXNwZW5zZSBtb2RlLCB0aHJvdyBlcnJvciBpZiB0aGVyZSdzIG5vIGNvbnRlbnRcbiAgICAgICAgICAgIHRocm93IGxhdGVzdEVycm9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJldHVybiB0aGUgbGF0ZXN0IGRhdGEgLyBlcnJvciBmcm9tIGNhY2hlXG4gICAgICAgIC8vIGluIGNhc2UgYGtleWAgaGFzIGNoYW5nZWRcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVycm9yOiBsYXRlc3RFcnJvcixcbiAgICAgICAgICAgIGRhdGE6IGxhdGVzdERhdGEsXG4gICAgICAgICAgICByZXZhbGlkYXRlOiByZXZhbGlkYXRlLFxuICAgICAgICAgICAgbXV0YXRlOiBib3VuZE11dGF0ZSxcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzogc3RhdGVSZWYuY3VycmVudC5pc1ZhbGlkYXRpbmdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gZGVmaW5lIHJldHVybmVkIHN0YXRlXG4gICAgLy8gY2FuIGJlIG1lbW9yaXplZCBzaW5jZSB0aGUgc3RhdGUgaXMgYSByZWZcbiAgICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IHsgcmV2YWxpZGF0ZTogcmV2YWxpZGF0ZSwgbXV0YXRlOiBib3VuZE11dGF0ZSB9O1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdGF0ZSwge1xuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICAvLyBga2V5YCBtaWdodCBiZSBjaGFuZ2VkIGluIHRoZSB1cGNvbWluZyBob29rIHJlLXJlbmRlcixcbiAgICAgICAgICAgICAgICAvLyBidXQgdGhlIHByZXZpb3VzIHN0YXRlIHdpbGwgc3RheVxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWF0Y2ggdGhlIGxhdGVzdCBrZXkgYW5kIGRhdGEgKGZhbGxiYWNrIHRvIGBpbml0aWFsRGF0YWApXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlRGVwZW5kZW5jaWVzLmN1cnJlbnQuZXJyb3IgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UmVmLmN1cnJlbnQgPT09IGtleSA/IHN0YXRlUmVmLmN1cnJlbnQuZXJyb3IgOiBpbml0aWFsRXJyb3I7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5jdXJyZW50LmRhdGEgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UmVmLmN1cnJlbnQgPT09IGtleSA/IHN0YXRlUmVmLmN1cnJlbnQuZGF0YSA6IGluaXRpYWxEYXRhO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVmFsaWRhdGluZzoge1xuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZURlcGVuZGVuY2llcy5jdXJyZW50LmlzVmFsaWRhdGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZVJlZi5jdXJyZW50LmlzVmFsaWRhdGluZztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LCBbcmV2YWxpZGF0ZV0pO1xufVxudmFyIFNXUkNvbmZpZyA9IFNXUkNvbmZpZ0NvbnRleHQuUHJvdmlkZXI7XG5leHBvcnQgeyB0cmlnZ2VyLCBtdXRhdGUsIFNXUkNvbmZpZyB9O1xuZXhwb3J0IGRlZmF1bHQgdXNlU1dSO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==