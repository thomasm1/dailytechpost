exports.id = "components_common_CustomImage_tsx-components_common_CustomLink_tsx-components_common_Maybe_ts-e510a1";
exports.ids = ["components_common_CustomImage_tsx-components_common_CustomLink_tsx-components_common_Maybe_ts-e510a1"];
exports.modules = {

/***/ "./components/common/CustomImage.tsx":
/*!*******************************************!*\
  !*** ./components/common/CustomImage.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_handleBrokenImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/utils/handleBrokenImage */ "./lib/utils/handleBrokenImage.ts");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\CustomImage.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CustomImage = ({
  src,
  alt,
  className
}) => {
  const props = {};

  if (className) {
    props.className = className;
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", _objectSpread({
    src: src,
    alt: alt,
    onError: lib_utils_handleBrokenImage__WEBPACK_IMPORTED_MODULE_1__.default
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (CustomImage);

/***/ }),

/***/ "./components/common/CustomLink.tsx":
/*!******************************************!*\
  !*** ./components/common/CustomLink.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

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

/* harmony default export */ __webpack_exports__["default"] = (CustomLink);

/***/ }),

/***/ "./components/common/Maybe.tsx":
/*!*************************************!*\
  !*** ./components/common/Maybe.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);




const Maybe = ({
  test,
  children
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
  children: test && children
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (Maybe);

/***/ }),

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

/***/ "./lib/context/PageContext.tsx":
/*!*************************************!*\
  !*** ./lib/context/PageContext.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageState": function() { return /* binding */ usePageState; },
/* harmony export */   "usePageDispatch": function() { return /* binding */ usePageDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lib_hooks_useSessionStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/hooks/useSessionStorage */ "./lib/hooks/useSessionStorage.ts");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\PageContext.tsx";


const PageStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const PageDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);

const PageContextProvider = ({
  children
}) => {
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

const usePageState = () => {
  const state = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageStateContext);
  return state;
};
const usePageDispatch = () => {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageDispatchContext);
  return dispatch;
};
/* harmony default export */ __webpack_exports__["default"] = (PageContextProvider);

/***/ }),

/***/ "./lib/context/PageCountContext.tsx":
/*!******************************************!*\
  !*** ./lib/context/PageCountContext.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usePageCountState": function() { return /* binding */ usePageCountState; },
/* harmony export */   "usePageCountDispatch": function() { return /* binding */ usePageCountDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\PageCountContext.tsx";

const PageCountStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);
const PageCountDispatchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(undefined);

const PageCountContextProvider = ({
  children
}) => {
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

const usePageCountState = () => {
  const state = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageCountStateContext);
  return state;
};
const usePageCountDispatch = () => {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(PageCountDispatchContext);
  return dispatch;
};
/* harmony default export */ __webpack_exports__["default"] = (PageCountContextProvider);

/***/ }),

/***/ "./lib/hooks/useSessionStorage.ts":
/*!****************************************!*\
  !*** ./lib/hooks/useSessionStorage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const useSessionStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(() => {
    if (false) {} else {
      return initialValue;
    }
  });

  const setValue = value => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);

    if (false) {}
  };

  return [storedValue, setValue];
};

/* harmony default export */ __webpack_exports__["default"] = (useSessionStorage);

/***/ }),

/***/ "./lib/utils/checkLogin.ts":
/*!*********************************!*\
  !*** ./lib/utils/checkLogin.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const checkLogin = loggedInUser => !!loggedInUser && (loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.constructor) === Object && Object.keys(loggedInUser).length !== 0;

/* harmony default export */ __webpack_exports__["default"] = (checkLogin);

/***/ }),

/***/ "./lib/utils/constant.ts":
/*!*******************************!*\
  !*** ./lib/utils/constant.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

const SERVER_BASE_URL = config__WEBPACK_IMPORTED_MODULE_0__.apiPath;
const APP_NAME = `Conduit`;
const ARTICLE_QUERY_MAP = {
  "tab=feed": `${SERVER_BASE_URL}/articles/feed`,
  "tab=tag": `${SERVER_BASE_URL}/articles/tag`
};
const DEFAULT_PROFILE_IMAGE = `https://static.productionready.io/images/smiley-cyrus.jpg`;
const DEFAULT_LIMIT = 10;
const DEFAULT_IMAGE_SOURCE = `data:image/png;base64,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`;

/***/ }),

/***/ "./lib/utils/getLoggedInUser.ts":
/*!**************************************!*\
  !*** ./lib/utils/getLoggedInUser.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ getLoggedInUser; }
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/utils/checkLogin */ "./lib/utils/checkLogin.ts");
/* harmony import */ var lib_utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/storage */ "./lib/utils/storage.ts");



function getLoggedInUser() {
  const {
    data: loggedInUser
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()("user", lib_utils_storage__WEBPACK_IMPORTED_MODULE_2__.default);
  const isLoggedIn = (0,lib_utils_checkLogin__WEBPACK_IMPORTED_MODULE_1__.default)(loggedInUser);

  if (isLoggedIn) {
    return loggedInUser;
  } else {
    return undefined;
  }
}

/***/ }),

/***/ "./lib/utils/handleBrokenImage.ts":
/*!****************************************!*\
  !*** ./lib/utils/handleBrokenImage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./lib/utils/constant.ts");


const handleBrokenImage = e => {
  e.target.src = _constant__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_PROFILE_IMAGE;
  e.target.onerror = null;
};

/* harmony default export */ __webpack_exports__["default"] = (handleBrokenImage);

/***/ }),

/***/ "./lib/utils/storage.ts":
/*!******************************!*\
  !*** ./lib/utils/storage.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const storage = async key => {
  const value = localStorage.getItem(key);
  return !!value ? JSON.parse(value) : undefined;
};

/* harmony default export */ __webpack_exports__["default"] = (storage);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9DdXN0b21JbWFnZS50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vQ3VzdG9tTGluay50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vTWF5YmUudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9saWIvY29udGV4dC9QYWdlQ29udGV4dC50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL2NvbnRleHQvUGFnZUNvdW50Q29udGV4dC50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL2hvb2tzL3VzZVNlc3Npb25TdG9yYWdlLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9jaGVja0xvZ2luLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9jb25zdGFudC50cyIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9saWIvdXRpbHMvZ2V0TG9nZ2VkSW5Vc2VyLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9oYW5kbGVCcm9rZW5JbWFnZS50cyIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9saWIvdXRpbHMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvaWdub3JlZHxDOlxcd1xcd3d3XFxhcm1jaGFpclxcYml0Y29pbkJ1eWVyMTEtb3VyRGFpbHlUZWNoLm5ldFxcc2VydmVyXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ3VzdG9tSW1hZ2UiLCJzcmMiLCJhbHQiLCJjbGFzc05hbWUiLCJwcm9wcyIsImhhbmRsZUJyb2tlbkltYWdlIiwiQ3VzdG9tTGluayIsImhyZWYiLCJvbkNsaWNrIiwiY2hpbGRyZW4iLCJzaGFsbG93IiwidW5kZWZpbmVkIiwiTWF5YmUiLCJ0ZXN0IiwiaXNQcm9kdWN0aW9uIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WX09WRVJSSURFIiwibW9kdWxlIiwiZXhwb3J0cyIsImFwaVBhdGgiLCJkYXRhYmFzZVVybCIsIkRBVEFCQVNFX1VSTCIsImdvb2dsZUFuYWx5dGljc0lkIiwiaXNEZW1vIiwiQ0lST1NBTlRJTExJX0RFTU8iLCJpc1Byb2R1Y3Rpb25OZXh0IiwiTk9ERV9FTlZfTkVYVCIsInBvcnQiLCJQT1JUIiwicHJlcmVuZGVyQWxsIiwicmV2YWxpZGF0ZSIsInNlY3JldCIsIlNFQ1JFVCIsInZlcmJvc2UiLCJWRVJCT1NFIiwiYmxhY2tsaXN0VGFncyIsIlNldCIsIlBhZ2VTdGF0ZUNvbnRleHQiLCJSZWFjdCIsIlBhZ2VEaXNwYXRjaENvbnRleHQiLCJQYWdlQ29udGV4dFByb3ZpZGVyIiwicGFnZSIsInNldFBhZ2UiLCJ1c2VTZXNzaW9uU3RvcmFnZSIsInVzZVBhZ2VTdGF0ZSIsInN0YXRlIiwidXNlUGFnZURpc3BhdGNoIiwiZGlzcGF0Y2giLCJQYWdlQ291bnRTdGF0ZUNvbnRleHQiLCJQYWdlQ291bnREaXNwYXRjaENvbnRleHQiLCJQYWdlQ291bnRDb250ZXh0UHJvdmlkZXIiLCJwYWdlQ291bnQiLCJzZXRQYWdlQ291bnQiLCJ1c2VQYWdlQ291bnRTdGF0ZSIsInVzZVBhZ2VDb3VudERpc3BhdGNoIiwia2V5IiwiaW5pdGlhbFZhbHVlIiwic3RvcmVkVmFsdWUiLCJzZXRTdG9yZWRWYWx1ZSIsInNldFZhbHVlIiwidmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsImNoZWNrTG9naW4iLCJsb2dnZWRJblVzZXIiLCJjb25zdHJ1Y3RvciIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJTRVJWRVJfQkFTRV9VUkwiLCJBUFBfTkFNRSIsIkFSVElDTEVfUVVFUllfTUFQIiwiREVGQVVMVF9QUk9GSUxFX0lNQUdFIiwiREVGQVVMVF9MSU1JVCIsIkRFRkFVTFRfSU1BR0VfU09VUkNFIiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiZGF0YSIsInVzZVNXUiIsInN0b3JhZ2UiLCJpc0xvZ2dlZEluIiwiZSIsInRhcmdldCIsIm9uZXJyb3IiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFRQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQyxLQUFGO0FBQU9DLEtBQVA7QUFBWUM7QUFBWixDQUFELEtBQStDO0FBQ2pFLFFBQU1DLEtBQVUsR0FBRyxFQUFuQjs7QUFDQSxNQUFJRCxTQUFKLEVBQWU7QUFDYkMsU0FBSyxDQUFDRCxTQUFOLEdBQWtCQSxTQUFsQjtBQUNEOztBQUNELHNCQUNFO0FBQ0UsT0FBRyxFQUFFRixHQURQO0FBRUUsT0FBRyxFQUFFQyxHQUZQO0FBR0UsV0FBTyxFQUFFRyxnRUFBaUJBO0FBSDVCLEtBSU1ELEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FiRDs7QUFlQSwrREFBZUosV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFFQTtBQUNBOztBQVVBLE1BQU1NLFVBQVUsR0FBRyxDQUFDO0FBQ2xCSCxXQURrQjtBQUVsQkksTUFGa0I7QUFHbEJDLFNBSGtCO0FBSWxCQyxVQUprQjtBQUtsQkM7QUFMa0IsQ0FBRCxLQU1JO0FBQ3JCLE1BQUlBLE9BQU8sS0FBS0MsU0FBaEIsRUFBMkI7QUFDekJELFdBQU8sR0FBRyxLQUFWO0FBQ0Q7O0FBQ0Qsc0JBQVEsOERBQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUVILElBQVo7QUFBa0IsWUFBUSxNQUExQjtBQUEyQixXQUFPLEVBQUVHLE9BQXBDO0FBQUEsMkJBQ047QUFBRyxhQUFPLEVBQUVGLE9BQVo7QUFBcUIsZUFBUyxFQUFFTCxTQUFTLElBQUksRUFBN0M7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QUNDLE1BQUYsQ0FBU2pGLEdBQVQsR0FBZXdFLDREQUFmO0FBQ0FRLEdBQUMsQ0FBQ0MsTUFBRixDQUFTQyxPQUFULEdBQW1CLElBQW5CO0FBQ0QsQ0FIRDs7QUFLQSwrREFBZTlFLGlCQUFmLEU7Ozs7Ozs7Ozs7OztBQ1BBLE1BQU0wRSxPQUFPLEdBQUcsTUFBTXZCLEdBQU4sSUFBYTtBQUMzQixRQUFNSyxLQUFLLEdBQUd1QixZQUFZLENBQUNDLE9BQWIsQ0FBcUI3QixHQUFyQixDQUFkO0FBQ0EsU0FBTyxDQUFDLENBQUNLLEtBQUYsR0FBVXlCLElBQUksQ0FBQ0MsS0FBTCxDQUFXMUIsS0FBWCxDQUFWLEdBQThCbEQsU0FBckM7QUFDRCxDQUhEOztBQUtBLCtEQUFlb0UsT0FBZixFOzs7Ozs7Ozs7O0FDTEEsZSIsImZpbGUiOiJjb21wb25lbnRzX2NvbW1vbl9DdXN0b21JbWFnZV90c3gtY29tcG9uZW50c19jb21tb25fQ3VzdG9tTGlua190c3gtY29tcG9uZW50c19jb21tb25fTWF5YmVfdHMtZTUxMGExLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgREVGQVVMVF9JTUFHRV9TT1VSQ0UgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcbmltcG9ydCBoYW5kbGVCcm9rZW5JbWFnZSBmcm9tIFwibGliL3V0aWxzL2hhbmRsZUJyb2tlbkltYWdlXCI7XHJcblxyXG5pbnRlcmZhY2UgQ3VzdG9tSW1hZ2VQcm9wcyB7XHJcbiAgc3JjOiBzdHJpbmc7XHJcbiAgYWx0OiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDdXN0b21JbWFnZSA9ICh7IHNyYywgYWx0LCBjbGFzc05hbWUgfTogQ3VzdG9tSW1hZ2VQcm9wcykgPT4ge1xyXG4gIGNvbnN0IHByb3BzOiBhbnkgPSB7fVxyXG4gIGlmIChjbGFzc05hbWUpIHtcclxuICAgIHByb3BzLmNsYXNzTmFtZSA9IGNsYXNzTmFtZVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGltZ1xyXG4gICAgICBzcmM9e3NyY31cclxuICAgICAgYWx0PXthbHR9XHJcbiAgICAgIG9uRXJyb3I9e2hhbmRsZUJyb2tlbkltYWdlfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tSW1hZ2U7XHJcbiIsIi8qIEhlbHBlciBmb3IgYSBsaW5rIHRoYXQgYWNjZXB0cyBwYXJhbWV0ZXJzIHN1Y2ggYXMgY2xhc3NOYW1lICovXHJcblxyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBDdXN0b21MaW5rUHJvcHMge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBjbGFzc05hbWU/OiBzdHJpbmc7XHJcbiAgb25DbGljaz86ICgpID0+IHZvaWQ7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxuICBzaGFsbG93PzogYm9vbGVhbjtcclxufVxyXG5cclxuY29uc3QgQ3VzdG9tTGluayA9ICh7XHJcbiAgY2xhc3NOYW1lLFxyXG4gIGhyZWYsXHJcbiAgb25DbGljayxcclxuICBjaGlsZHJlbixcclxuICBzaGFsbG93LFxyXG59OiBDdXN0b21MaW5rUHJvcHMpID0+IHtcclxuICBpZiAoc2hhbGxvdyA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICBzaGFsbG93ID0gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiAoPExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWYgc2hhbGxvdz17c2hhbGxvd30+XHJcbiAgICA8YSBvbkNsaWNrPXtvbkNsaWNrfSBjbGFzc05hbWU9e2NsYXNzTmFtZSB8fCBcIlwifT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9hPlxyXG4gIDwvTGluaz4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUxpbms7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IE1heWJlID0gKHsgdGVzdCwgY2hpbGRyZW4gfSkgPT4gPD57dGVzdCAmJiBjaGlsZHJlbn08Lz47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXliZTtcclxuIiwibGV0IGlzUHJvZHVjdGlvbjtcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WX09WRVJSSURFID09PSB1bmRlZmluZWQpIHtcclxuICBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXHJcbn0gZWxzZSB7XHJcbiAgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlZfT1ZFUlJJREUgPT09ICdwcm9kdWN0aW9uJ1xyXG59XHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGFwaVBhdGg6ICcvYXBpJyxcclxuICBkYXRhYmFzZVVybDogcHJvY2Vzcy5lbnYuREFUQUJBU0VfVVJMIHx8ICcnLFxyXG4gIGdvb2dsZUFuYWx5dGljc0lkOiAnVUEtNDc4Njc3MDYtMycsXHJcbiAgaXNEZW1vOiBwcm9jZXNzLmVudi5DSVJPU0FOVElMTElfREVNTyA9PT0gJ3RydWUnLFxyXG4gIGlzUHJvZHVjdGlvbjogaXNQcm9kdWN0aW9uLFxyXG4gIGlzUHJvZHVjdGlvbk5leHQ6IHByb2Nlc3MuZW52Lk5PREVfRU5WX05FWFQgPT09IHVuZGVmaW5lZCA/XHJcbiAgICAoaXNQcm9kdWN0aW9uKSA6XHJcbiAgICAocHJvY2Vzcy5lbnYuTk9ERV9FTlZfTkVYVCA9PT0gJ3Byb2R1Y3Rpb24nKSxcclxuICBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDAsXHJcbiAgLy8gTWFrZXMgZGVwbG95bWVudCBpbXBvc3NpYmx5IHNsb3cgaWYgdGhlcmUgYXJlIGxvdHMgb2YgcGFnZXNcclxuICAvLyBsaWtlIGluIGEgcmVhbC13b3JsZCBwcm9kdWN0aW9uIHB1YmxpYyB3ZWJzaXRlLlxyXG4gIHByZXJlbmRlckFsbDogZmFsc2UsXHJcbiAgcmV2YWxpZGF0ZTogMTAsXHJcbiAgc2VjcmV0OiBpc1Byb2R1Y3Rpb24gPyBwcm9jZXNzLmVudi5TRUNSRVQgOiAnc2VjcmV0JyxcclxuICB2ZXJib3NlOiBwcm9jZXNzLmVudi5WRVJCT1NFLFxyXG4gIGJsYWNrbGlzdFRhZ3M6IG5ldyBTZXQoW1xyXG4gICAgJ2N5cHJlc3MnLFxyXG4gIF0pXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHVzZVNlc3Npb25TdG9yYWdlIGZyb20gXCJsaWIvaG9va3MvdXNlU2Vzc2lvblN0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2VEaXNwYXRjaCA9IFJlYWN0LkRpc3BhdGNoPGFueT47XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2VTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PG51bWJlciB8IHVuZGVmaW5lZD4odW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IFBhZ2VEaXNwYXRjaENvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PFBhZ2VEaXNwYXRjaCB8IHVuZGVmaW5lZD4oXHJcbiAgdW5kZWZpbmVkXHJcbik7XHJcblxyXG5jb25zdCBQYWdlQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTZXNzaW9uU3RvcmFnZShcIm9mZnNldFwiLCAwKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VEaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFBhZ2V9PlxyXG4gICAgICA8UGFnZVN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cGFnZX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BhZ2VTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICA8L1BhZ2VEaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdlU3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFBhZ2VTdGF0ZUNvbnRleHQpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdlRGlzcGF0Y2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWFjdC51c2VDb250ZXh0KFBhZ2VEaXNwYXRjaENvbnRleHQpO1xyXG4gIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCB0eXBlIFBhZ2VDb3VudERpc3BhdGNoID0gUmVhY3QuRGlzcGF0Y2g8YW55PjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcclxufVxyXG5cclxuY29uc3QgUGFnZUNvdW50U3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxudW1iZXIgfCB1bmRlZmluZWQ+KFxyXG4gIHVuZGVmaW5lZFxyXG4pO1xyXG5cclxuY29uc3QgUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxcclxuICBQYWdlQ291bnREaXNwYXRjaCB8IHVuZGVmaW5lZFxyXG4+KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBQYWdlQ291bnRDb250ZXh0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9OiBQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtwYWdlQ291bnQsIHNldFBhZ2VDb3VudF0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICByZXR1cm4gKFxyXG4gICAgPFBhZ2VDb3VudERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c2V0UGFnZUNvdW50fT5cclxuICAgICAgPFBhZ2VDb3VudFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17cGFnZUNvdW50fT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvUGFnZUNvdW50U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9QYWdlQ291bnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQYWdlQ291bnRTdGF0ZSA9ICgpID0+IHtcclxuICBjb25zdCBzdGF0ZSA9IFJlYWN0LnVzZUNvbnRleHQoUGFnZUNvdW50U3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnZUNvdW50RGlzcGF0Y2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSBSZWFjdC51c2VDb250ZXh0KFBhZ2VDb3VudERpc3BhdGNoQ29udGV4dCk7XHJcbiAgcmV0dXJuIGRpc3BhdGNoO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnZUNvdW50Q29udGV4dFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCB1c2VTZXNzaW9uU3RvcmFnZSA9IChrZXksIGluaXRpYWxWYWx1ZSkgPT4ge1xyXG4gIGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgY29uc3QgaXRlbSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgIHJldHVybiAhIWl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluaXRpYWxWYWx1ZTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3Qgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcclxuICAgIHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiBbc3RvcmVkVmFsdWUsIHNldFZhbHVlXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVNlc3Npb25TdG9yYWdlO1xyXG4iLCJjb25zdCBjaGVja0xvZ2luID0gKGxvZ2dlZEluVXNlcikgPT5cclxuICAhIWxvZ2dlZEluVXNlciAmJlxyXG4gIGxvZ2dlZEluVXNlcj8uY29uc3RydWN0b3IgPT09IE9iamVjdCAmJlxyXG4gIE9iamVjdC5rZXlzKGxvZ2dlZEluVXNlcikubGVuZ3RoICE9PSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2hlY2tMb2dpbjtcclxuIiwiaW1wb3J0IHsgYXBpUGF0aCB9IGZyb20gJ2NvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfQkFTRV9VUkwgPSBhcGlQYXRoO1xyXG5leHBvcnQgY29uc3QgQVBQX05BTUUgPSBgQ29uZHVpdGA7XHJcbmV4cG9ydCBjb25zdCBBUlRJQ0xFX1FVRVJZX01BUCA9IHtcclxuICBcInRhYj1mZWVkXCI6IGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXMvZmVlZGAsXHJcbiAgXCJ0YWI9dGFnXCI6IGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXMvdGFnYFxyXG59O1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9GSUxFX0lNQUdFID0gYGh0dHBzOi8vc3RhdGljLnByb2R1Y3Rpb25yZWFkeS5pby9pbWFnZXMvc21pbGV5LWN5cnVzLmpwZ2A7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0xJTUlUID0gMTA7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0lNQUdFX1NPVVJDRSA9IGBkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQU1nQUFBRElDQVlBQUFDdFdLNmVBQUFQblVsRVFWUjRYdTJkeTVManVBNUVXLy8vby8xKzcvdUdOV0ZmU2FiSUl4R0NBQkN6bVVXRjBjaE1KRkswemFycHo1OC8vNlpwK3ZEdjM3OFBwZjkvQVA5ZCtmcG5YNkNOWXY5YlhCcDFhbndrbnZLY1dlUGxPU2ZUMzc5Ly94MFpvbWppdjRpNGNFbFlGYisyTEtMcGZCYlAxRW9RS1hFMU5qY1pkaWs4cE01WlViWmNXYWxqcFE5Tm5Zc0pNcUw0aFBSb0pvK0c1NHE1blJPRURBZjV4MG1kRk9XYXM1NlVQcVRPU0VsU1RaQWt5Lzh3NTlJcXIyUnE4bFdDRURLSmFVaWRUQkwvNXFORDF0TGFjcDJYUVhxYjdIMDlNWldVT2FYcXRJUi8vTndUTDlId0VKMmIraXpQSUhlOGU1S2laSkpZWG81dmoxaE5SMDFUZGFaN1gyK1pyS3MrVENXYlRwT1hYRnFMcFZWTGtCU2xQaXE5eTZEMzlacjZFQk5Id3pNL0l1OFpwQmRzNyt1dGlVLzZpYlo1bytFNVpmTGZ2My9QMzhVaS8ya012WlUrQ0puRU5LU09CcStrajhUelBuMjdDWkprblgrOGltYnlhSGpJc25ndHJXZUNrQmRKbVliVUdWcVVJRitjakpDTXpRUWh3MHpNRllHc2ttbEgrcXIva0V0cm15QmsyS1ZNUStvTUtVb2xRYXpwUS9yeHZCem5CQ0VneVRDVE9wN0pxcGsxazJUTlRoU2RwNzBFSWNNdVpScFNKNU1rUDNFbmN5STl0NnNFa1M1K2R1TnE5cUZKZWpTVFI4TlRtcnRtZ2xnYjFoRkUyV0tNOHJpaXVZeWs1cmFZSUZMRlNaMW80cE1oaUdieWFIaVdjenNuQ0JHVkRMdG1uY2lpN0dHTHRrdzg0S2ttaUtZcFBKQzEvVFp2cjBsN1g2K3BEMWwrMGZETS9DNFRoSkNRb3R6L2U1MmlMUlBMZUY0R3NkS2tsVDQwbDBXMHpSc0tUeWxCTklkREtwRkNpYkw0Skgya3Q4b3RMc2UzUnl3clRWcnBRM05aUkRONUNEeTFCTkVjamt5UzgyZWJhTXZFRXA3aUlmMWhEQ3ROV3VsRGMxbUUyTHp3TVZHVDExTkwrTmV2WDZadUZKNENVZmoyYTdRaEk3eEVXeVlXOE93bWlEVm5XeUJyYVRxTmZxS1ozQ1dlWjRLUURXWE5OS1FmbDZKMDNnZlJNSy9tdk55SnA1a2daQWhISWF0a05nM3hvcG5jRTU1cG15Q2F3NjVwUGsraVNQR2lZVjdOZWJrRHo1d2dtaUJUL0xwVjgyYmltcDg3VExFNmErNGxpRWZURVBObGt1VE5SREluei9sZkpZaEhVOXk5WWJhRzArZ25tc2t0NDVuUElNUlJsa0hzOVRiUzR3cFpiaHJtSlgyUWVTTjFOUEFVRTRRMEp3VlNxbzRHV2RaNHlhVjEvZVBpS2tISXNLWW8xNHZTNHJoM0dmUytuc3lKNWpLNUVrODFRVFJCU3BGK0pWblNOd3FsK0cwWjZ2RnpUN3lZd3JNOGd4dzVjSm9DSWZEYjZhUGhJZWJ6WkpxNzhMd2VzWktzc2tVODhSTE41Q2J3MUJLRVBQYVlBQ0g0MWVwb2VPN2F2TnZIVWRJSG1UZFNSM0twdlIzU0pZdnZrVVJBV2lUTEFoN0NTelNUMzRybjU4K2ZJdmRCYmdWeHdYMlFhSGpJVXNybCtLNTY4VzFlYis5NmpDaCtKb25TbWZHWklHVElVaFFsVVc3K0MxT1pKUC9YZVRkQmlCbWtUS1ZaSjVyNFJLZG9qNHVxZUxZSklqV3NxaUE2YitDTk9HUkU1MmpMNUF5ZVpvS1E0U0ZrVzZ0emhxeVM2VDNWeWFWMS9HdEMwMTZDU0ExOWluSmNsRndtOWFucFhVcEhYajhuaUpRWlBOWTVRbFpOTms5MWNtbnhwZFZNRUttaFQxRzRLRnV1ckpqUFNoOVNDVXZ3ckJKRXlnd2U2eEN5MHVTMlRYNkZQbk9DU0RtUzFMa0N4RjVOamFHUGhvY3NOdzFlU1I5azNraWRHcDVpZ3BDaVVzMVpxeE5OZk1Kdk5KTkw0bGtsQ0NGVHlqeVNJRnExTklhKzFjUGo1eHA5U09sRDZveUE1MldRR3RnVTMvYXpOeGxtc3Z5aTZTeUNaM2tHdWVQZEV4RVFBamNLYzhqeTc1T1Vsc2piSTFZbXlkcXkwUjRqTWtuS0szbFg1MXFDRURKejg0N3grRVYwanJaTUhuaUtoM1NKQTJWRXNyemNLQ1REVEpaZlB2NysrekQ5K1BGRDVFWmhpcEpKUWt3bk5TZGFkWFlUaElDTnRtRUk2ZEdTY1VTZEQ4M3RNMEhJY0JBeXBlb2NBbkh6RFR6Q1N6UThST2NJeTZTWklFVDhVY2hhRG5rRThVdW1IZWxkVExTMHRnbENobDNLTktRT0FxRndvMUNLbDJoNENDK2VsOG1jSUFUa2lNTk1lUEVzZnMyc21TVC9zZk42RjJ2dkxVd3JHODlLSDhRMHVVd09maGduK0pzeHBmUjUxbGtsaUhUeHN4dEtzdzh5ektTZlRCTC9waWlleWZiT0lOdEVzYkxCcmZSQlRFUE1GdzBQNGNYVE1pa21DQUZKeENkMVBKRTFJaDZpY3pTVHI5NnRmQ1FJSVlFTWgyYWR5S0xzWWN0bG92OFlWMDBRVFZPaytQcmlTejlHUjF4YTg3dFlXMkNlaGpXaUtDMU1udlFoUzlZeW5wZEJyRFJwcFErcHg4Vm9lQWd2TFlQUG55OTQrWEMzbENDRUJMSVpOT3VFRXNYUURVbE5uUzJhNXUwUnkwcVRWdnFRTW5rMFBJU1hFRXVybGlDRUJNME5RL29KSVlyaFQ1WTErTFcwVElxSGRFdlBpSmJJa3VBbEdwN3dTK3Y3OSsrbWJoUktKWkxHcGlQRGtYaDgvN2FVM1FUUkZKOE1VYlROR3cwUG1SZVhTK3VaSUdSSUNRblc2cmdVeGNFTlNVMmQ3MXdtelFTeFpvbzd5U3FacmJlZjN0ZGIwNGYwNDJscFRkc0UwZHdNaEV5cGZqeUpRbmlKaG9mb2ZNY3ltUk9FTkVkRTA2eHpCMW0xb2V6dHAvZjExdlFoL1hndytXNkNhQTQ3SVZPcUh3K2liSHNjNmZvcjBWbHptYXdTaERTbk9jeWtIMDJ5Tk13VkRRK1pGdzFlU1IrbGVXc21DQm5Tcy8vNEhqRWFRMkpabERPOFJNTkQ1azVqVG9vSlFwcXpaZ29Oc2pSNWlZYUh6SXRGazg4SlFwclhIQTdOZml5SzB1b3B6eVJyaHE1Y0p0VUU4V2lLSzhtU3ZvRkgrSTJHaHl5LzFvSjQvRnlObDJXQ2tPYUpxQjdybUJKRjRENUlORHhrN3E0d3plc1I2NHJpMjQxTFFFcVpLL0dVTGVLSkZ4TW1MeVdJMUpCNnJHTkNGTUg3SU5Id2tDVXJ1UVJXaDNUVlp6dUJ4d2h0c3ZZU2tmUWh0U3dreGJlQWgvQnlxOG0vZmZ2V3ZBK1NvdVRqaXVZU0lLWWgvVWpNN1Z1Q1NEVm5yWTRFV1pZU05ob2VNaSszSk1relFiUWNhV25JeklweTRYMlFXNGJzUWp4WHorMXVncERoSWMxWnF4TnQ4MGJEUStaRjFlVGJCQ0ZEbjZMa21ZVE1DUmwyelRwbjVyYVpJTlpBU3ZWemhxeVNMYXpVc2RLSGxENmtqa2FTVEhzSlFweWRvbVNTa0RraHc2NVo1OGpjemdtaTJaeG5zbW9iNndqcFY5YXgwb2VtemxjbVNUTkJpSGxTbEV3U01pZWFwaUg5a0xsZEpRZ3BhZzJrVkQrRXJDczMxYloyYnorOXI1ZmlWYlBPRmZyTUNTSUZJa1hKSlBHNFpHdHpXMHdRanlEVDVQN05LVFYza2tteVNwQWNzanExdFUwaktVcXJsa1pTdDNwNC9GeWpEeW5Ua0RvbFBDK0RqQ1QrV2JLMjMzNzFORVRSaHBrc2N4RjlsbWVRUENoT2hOUHE1aVFGUEExck5EeEhsK1BiSTFZbXlYb2tQQTN6VWZIdnZQRkpFb0RnSVhXNlRGNUxFUEtQRXhEUmhvencwaVdLNEkxQ29zK0llQWd2ajdrdEh0SmJCN0JvNGxPeXZOekFHeEhQWlNiLyt2VnI4MFloK2NkVGxQSmZVb3EyVEtMaGFjM3Rib0lRVTR4R1ZpdFpXMlF2K2JMeTJHbWxEekp2VXZ3ZW10dG5na2o5NDZST2lsS1d5Qk12aDRiczVodUZQZVpySmdncFBncFpGaE9BNkpOTHErUHhkNXNnaE13VXBiNFNSbnFyUFBweW5CTkV5aFRSeVNyaDgvUllSSFNPaG9jczg5cmNUbnNKUXNnay96aXBrNkxrbVlUTWlkUzhIYW16U2hDcEpqTkpPcDU1S3dkYUtYMUluVnhhLzAxeE0wRUltVWNjV1kwekk4TWhoWWZVaWJaTW91RXBKb2lVS2FLUlJYaUp0bm1qNFRtNnRPWUVJUzhpd3lGVlozUlI5aGFMSjE2aUxNZHFna2laSWdwWlIrNkRlQnBtb25NMFBHU1p2ODRnMndHMlFvYVZQZ2laWk1oSW5Xakx4RHVlMXlPV3hqQjZKK3ZNL1FrTlhxWE1TZXBFdzlOY1dzc3pTQ1pKLzQxQ01tUk5VWlQrdUJEcFkzUThxMFA2L015bDhGWnJKa2wrVHFKcHppNlQxeExFR2dnTjgzYVJXVmd1dmN1ZzkvV0pwN3lNS0M5dkNhSnBpbWppRTlLam1Ud2FucmY1Ly9MbGk5cU5RaW56aFJmbGdpUWk1cFhTaDlUeHNoeDNFNFNBbENMZEMxbkxQbnROMnZ0NlRYMkl6dEh3dlBoOUpnZ2hJVVdwVzFsalNLSXRFK3Q0bWdtaWFRcnJaSlg2NnpWRjcrczE5U0ZMTkJ5ZWJZSVFFbEtVVEpJalg3c2g4MkoxT2M0SllzMFVWc21xOWRXN09YdGZUNFpRVStjb2VLYTlCTkVrVTByY0tLSnNqWmgzM05lTWFPcThTaEJycHNna3lVL2NwWmJuMlRyTkJMRm1HdEtQNW9heFltSXJmUkI5eUxCYXdWTk1FQ21RVW5Xc2tDV0ZoOVNKWm5LdmVPWUVJWTRtb2xxcjQxV1Uxa0xJTTRuZW1hU2FJTlpNMFJxY3g4K2ptU0x4bEZWWDQyV1pJTllTUUtvZk5USU4zZU9JdGt6dXd2TjZ4UEkwUkhlUmRlWkdZWnI4NWdUb1hWcWxCSkVTMVZvZFQwdEE2dkUyMmpMUnhyTTZwSHQ3aHRjbWF5OUJwSWFaMUlsbWN2TjRhZ2xpTFFHaytqRXZ5Z1gzUWFJdEV5MDhid2tpTllTYWRiVElzcFN3MFV4dUZzL256NS9kM1NpVU1wOVpVUzc4aTB6UmxzblZlSFlUUkdvSU5ldGNUZGF5dmhWeldlbERTbWR6ZUo0SlFnNklVaVJZcTJOT2xQelZTOFZkZDhjM0NKb0pZbTJZU1QrWkpQa3RZREluSkJTbWJZS1FGMG45NDlicVpKSTQvMUN2OTBQQlJYSy9adlB4Tm05VVUyU1NaSkwwTHVIZEJJbHFHb0lya3lTVDVEa244eGxFK2dJK0djSmVaMjhsdk9NQVZ4b2pLK2F5MG9lVXpuZmhtUk9FZ01qSEZmK1BLeVBxM0R1M3hRU3hsZ0JTL2ZTU0pkV0hacDI3TnU4ZTE3Mzk5TDZlTEltbFBxc0VJUy9PSWNza0lYT2l1UVJJUDJmbnRwb2cxa0JLOVhPV0xNOW5OZTNOMitLNHQ1L2UxeE5Uelhvdnp5QjU4SzMvaFNrMVVTNTRQNzgyc0NPOXdkRXk3dVBuU3o1ZUJrbngvYisxU1JJMm1zNlg0NmtsQ0ltaG80Njg4OW9xd1RQaWtCRmVvdWxNOGJ3OVlsM3V5TUxIK1dmam53enppT0lUWHFMcGZCbWVUNTgraWR3SG9ZNjBjRzJWbUdiRUlTTzhSTk81aFdmM2tINlpJeSs0VGtxR2VVVHhDUy9SZEJiSDgwd1FRbVlPMlJnSCtSRjEzdjFnczNWSUYzZmtoZGRKMCtUbi8rUnhOSjNGOEd3VEpJY3NoMnprejhQZXNEOFNoSmhDekpFSzEwa0puaEVmSXdndjBYVHV4VFB0SlFnaGt3d1pxZE1MUXFvUHFUclI4QkJlV3U4R2JUK2h0djU1MkF2ek1rRkdIT1lSeFI5UjU3TkxxNWtnaE13Y3NueDNTMnBPck5XWlB3YzVFM2RuSFhua0FHaU5yR2lQRVlUZmFEb2Z4VE1uQ0VrQVFxWlVuYU1nZHQvRE52S0dRRFE4Uk9jb3k2U2FJTVFVS2Y0WWoxZlJkS1o0VmdsQ05nTXhqVlFkQ3FLMXJhelVzZEtIbEQ2a1Rrc2I2Kzl1dlF6U0sxN3Y2d25abXVZay9YZ1hQOCtlNEc5YUxzOGdWZy9RMGN3WERVL2taZkwyaU5Vclh1L3JDZG1aSk9lL0RpUEZielNkZC9IVUVrU0tUS2s2dzRoaThGS1oxRkx5OWxoYVBLUkxISnlpRFRNeHVUZnhVK2QzeGQ3bTl1UEhqeUkzQ3FVMkRLa1R6WHpSOEVSYUpyc0pRa0NPT015RWwwd1MvNzljNzdXMG5nbENocDBNaDJhZGFKczNHaDR5TDlhWFNUTkJDRWhpaWhRL1AzRW5jeUkxYjFKMXBtMkN1QVJoNUR0WFlxSUV3ME40c1pva2M0Sm9taUtUSkpORWM5NklPV3Y5N0NhSUp4QzlKT1EzQ09xL2sxaVRYMnRKc2tvUVRWTmtrbVNTYU03YldaTTNFOFFEQ0tzSmNGYVU2SGdJTDFhU3BKZ2dtcWJJSk1razBadzNZczVsUDNPQ0hIMVJ5OTFXaHQ1S0gxTDhSc05EZUduTjJ1UG5WL0pTVFJCTloxOEpjbnZ2NFc3U05Ya2xRNmpaanp1ZGx3bGlqVXlwZnR5SjB2Z0xVOUh3RUozdldtcXZSeXdycEZ2cGc0Z210WG52RXYvTWpVSXBYcnpvL0QvQXlHWldzaUVOU3dBQUFBQkpSVTVFcmtKZ2dnPT1gO1xyXG4iLCJpbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCBjaGVja0xvZ2luIGZyb20gXCJsaWIvdXRpbHMvY2hlY2tMb2dpblwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwibGliL3V0aWxzL3N0b3JhZ2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldExvZ2dlZEluVXNlcigpIHtcclxuICAgIGNvbnN0IHsgZGF0YTogbG9nZ2VkSW5Vc2VyIH0gPSB1c2VTV1IoXCJ1c2VyXCIsIHN0b3JhZ2UpO1xyXG4gICAgY29uc3QgaXNMb2dnZWRJbiA9IGNoZWNrTG9naW4obG9nZ2VkSW5Vc2VyKTtcclxuICAgIGlmIChpc0xvZ2dlZEluKSB7XHJcbiAgICAgIHJldHVybiBsb2dnZWRJblVzZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERFRkFVTFRfUFJPRklMRV9JTUFHRSB9IGZyb20gXCIuL2NvbnN0YW50XCI7XHJcblxyXG5jb25zdCBoYW5kbGVCcm9rZW5JbWFnZSA9IGUgPT4ge1xyXG4gIGUudGFyZ2V0LnNyYyA9IERFRkFVTFRfUFJPRklMRV9JTUFHRTtcclxuICBlLnRhcmdldC5vbmVycm9yID0gbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUJyb2tlbkltYWdlO1xyXG4iLCJjb25zdCBzdG9yYWdlID0gYXN5bmMga2V5ID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgcmV0dXJuICEhdmFsdWUgPyBKU09OLnBhcnNlKHZhbHVlKSA6IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JhZ2U7XHJcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=