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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\CustomImage.tsx";

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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\CustomLink.tsx";

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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\PageContext.tsx";


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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\PageCountContext.tsx";

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
const APP_NAME = `Daily Tech`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL0N1c3RvbUltYWdlLnRzeCIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL0N1c3RvbUxpbmsudHN4Iiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vTWF5YmUudHN4Iiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlLy4vY29uZmlnLmpzIiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlLy4vbGliL2NvbnRleHQvUGFnZUNvbnRleHQudHN4Iiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlLy4vbGliL2NvbnRleHQvUGFnZUNvdW50Q29udGV4dC50c3giLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9saWIvaG9va3MvdXNlU2Vzc2lvblN0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9saWIvdXRpbHMvY2hlY2tMb2dpbi50cyIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2xpYi91dGlscy9jb25zdGFudC50cyIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2xpYi91dGlscy9nZXRMb2dnZWRJblVzZXIudHMiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9saWIvdXRpbHMvaGFuZGxlQnJva2VuSW1hZ2UudHMiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9saWIvdXRpbHMvc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS9pZ25vcmVkfEM6XFx3XFx3d3dcXGRhaWx5dGVjaHBvc3RcXGJpdGNvaW5CdXllcjExLW91ckRhaWx5VGVjaC5uZXRcXHNlcnZlclxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkN1c3RvbUltYWdlIiwic3JjIiwiYWx0IiwiY2xhc3NOYW1lIiwicHJvcHMiLCJoYW5kbGVCcm9rZW5JbWFnZSIsIkN1c3RvbUxpbmsiLCJocmVmIiwib25DbGljayIsImNoaWxkcmVuIiwic2hhbGxvdyIsInVuZGVmaW5lZCIsIk1heWJlIiwidGVzdCIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOVl9PVkVSUklERSIsIm1vZHVsZSIsImV4cG9ydHMiLCJhcGlQYXRoIiwiZGF0YWJhc2VVcmwiLCJEQVRBQkFTRV9VUkwiLCJnb29nbGVBbmFseXRpY3NJZCIsImlzRGVtbyIsIkNJUk9TQU5USUxMSV9ERU1PIiwiaXNQcm9kdWN0aW9uTmV4dCIsIk5PREVfRU5WX05FWFQiLCJwb3J0IiwiUE9SVCIsInByZXJlbmRlckFsbCIsInJldmFsaWRhdGUiLCJzZWNyZXQiLCJTRUNSRVQiLCJ2ZXJib3NlIiwiVkVSQk9TRSIsImJsYWNrbGlzdFRhZ3MiLCJTZXQiLCJQYWdlU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJQYWdlRGlzcGF0Y2hDb250ZXh0IiwiUGFnZUNvbnRleHRQcm92aWRlciIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU2Vzc2lvblN0b3JhZ2UiLCJ1c2VQYWdlU3RhdGUiLCJzdGF0ZSIsInVzZVBhZ2VEaXNwYXRjaCIsImRpc3BhdGNoIiwiUGFnZUNvdW50U3RhdGVDb250ZXh0IiwiUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0IiwiUGFnZUNvdW50Q29udGV4dFByb3ZpZGVyIiwicGFnZUNvdW50Iiwic2V0UGFnZUNvdW50IiwidXNlUGFnZUNvdW50U3RhdGUiLCJ1c2VQYWdlQ291bnREaXNwYXRjaCIsImtleSIsImluaXRpYWxWYWx1ZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJzZXRWYWx1ZSIsInZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJjaGVja0xvZ2luIiwibG9nZ2VkSW5Vc2VyIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiU0VSVkVSX0JBU0VfVVJMIiwiQVBQX05BTUUiLCJBUlRJQ0xFX1FVRVJZX01BUCIsIkRFRkFVTFRfUFJPRklMRV9JTUFHRSIsIkRFRkFVTFRfTElNSVQiLCJERUZBVUxUX0lNQUdFX1NPVVJDRSIsImdldExvZ2dlZEluVXNlciIsImRhdGEiLCJ1c2VTV1IiLCJzdG9yYWdlIiwiaXNMb2dnZWRJbiIsImUiLCJ0YXJnZXQiLCJvbmVycm9yIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBUUEsTUFBTUEsV0FBVyxHQUFHLENBQUM7QUFBRUMsS0FBRjtBQUFPQyxLQUFQO0FBQVlDO0FBQVosQ0FBRCxLQUErQztBQUNqRSxRQUFNQyxLQUFVLEdBQUcsRUFBbkI7O0FBQ0EsTUFBSUQsU0FBSixFQUFlO0FBQ2JDLFNBQUssQ0FBQ0QsU0FBTixHQUFrQkEsU0FBbEI7QUFDRDs7QUFDRCxzQkFDRTtBQUNFLE9BQUcsRUFBRUYsR0FEUDtBQUVFLE9BQUcsRUFBRUMsR0FGUDtBQUdFLFdBQU8sRUFBRUcsZ0VBQWlCQTtBQUg1QixLQUlNRCxLQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVFELENBYkQ7O0FBZUEsK0RBQWVKLFdBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBRUE7QUFDQTs7QUFVQSxNQUFNTSxVQUFVLEdBQUcsQ0FBQztBQUNsQkgsV0FEa0I7QUFFbEJJLE1BRmtCO0FBR2xCQyxTQUhrQjtBQUlsQkMsVUFKa0I7QUFLbEJDO0FBTGtCLENBQUQsS0FNSTtBQUNyQixNQUFJQSxPQUFPLEtBQUtDLFNBQWhCLEVBQTJCO0FBQ3pCRCxXQUFPLEdBQUcsS0FBVjtBQUNEOztBQUNELHNCQUFRLDhEQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFSCxJQUFaO0FBQWtCLFlBQVEsTUFBMUI7QUFBMkIsV0FBTyxFQUFFRyxPQUFwQztBQUFBLDJCQUNOO0FBQUcsYUFBTyxFQUFFRixPQUFaO0FB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R0FBRzRFLENBQUMsSUFBSTtBQUM3QkEsR0FBQyxDQUFDQyxNQUFGLENBQVNqRixHQUFULEdBQWV3RSw0REFBZjtBQUNBUSxHQUFDLENBQUNDLE1BQUYsQ0FBU0MsT0FBVCxHQUFtQixJQUFuQjtBQUNELENBSEQ7O0FBS0EsK0RBQWU5RSxpQkFBZixFOzs7Ozs7Ozs7Ozs7QUNQQSxNQUFNMEUsT0FBTyxHQUFHLE1BQU12QixHQUFOLElBQWE7QUFDM0IsUUFBTUssS0FBSyxHQUFHdUIsWUFBWSxDQUFDQyxPQUFiLENBQXFCN0IsR0FBckIsQ0FBZDtBQUNBLFNBQU8sQ0FBQyxDQUFDSyxLQUFGLEdBQVV5QixJQUFJLENBQUNDLEtBQUwsQ0FBVzFCLEtBQVgsQ0FBVixHQUE4QmxELFNBQXJDO0FBQ0QsQ0FIRDs7QUFLQSwrREFBZW9FLE9BQWYsRTs7Ozs7Ozs7OztBQ0xBLGUiLCJmaWxlIjoiY29tcG9uZW50c19jb21tb25fQ3VzdG9tSW1hZ2VfdHN4LWNvbXBvbmVudHNfY29tbW9uX0N1c3RvbUxpbmtfdHN4LWNvbXBvbmVudHNfY29tbW9uX01heWJlX3RzLWU1MTBhMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERFRkFVTFRfSU1BR0VfU09VUkNFIH0gZnJvbSBcImxpYi91dGlscy9jb25zdGFudFwiO1xyXG5pbXBvcnQgaGFuZGxlQnJva2VuSW1hZ2UgZnJvbSBcImxpYi91dGlscy9oYW5kbGVCcm9rZW5JbWFnZVwiO1xyXG5cclxuaW50ZXJmYWNlIEN1c3RvbUltYWdlUHJvcHMge1xyXG4gIHNyYzogc3RyaW5nO1xyXG4gIGFsdDogc3RyaW5nO1xyXG4gIGNsYXNzTmFtZT86IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQ3VzdG9tSW1hZ2UgPSAoeyBzcmMsIGFsdCwgY2xhc3NOYW1lIH06IEN1c3RvbUltYWdlUHJvcHMpID0+IHtcclxuICBjb25zdCBwcm9wczogYW55ID0ge31cclxuICBpZiAoY2xhc3NOYW1lKSB7XHJcbiAgICBwcm9wcy5jbGFzc05hbWUgPSBjbGFzc05hbWVcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxpbWdcclxuICAgICAgc3JjPXtzcmN9XHJcbiAgICAgIGFsdD17YWx0fVxyXG4gICAgICBvbkVycm9yPXtoYW5kbGVCcm9rZW5JbWFnZX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbUltYWdlO1xyXG4iLCIvKiBIZWxwZXIgZm9yIGEgbGluayB0aGF0IGFjY2VwdHMgcGFyYW1ldGVycyBzdWNoIGFzIGNsYXNzTmFtZSAqL1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgQ3VzdG9tTGlua1Byb3BzIHtcclxuICBocmVmOiBzdHJpbmc7XHJcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgc2hhbGxvdz86IGJvb2xlYW47XHJcbn1cclxuXHJcbmNvbnN0IEN1c3RvbUxpbmsgPSAoe1xyXG4gIGNsYXNzTmFtZSxcclxuICBocmVmLFxyXG4gIG9uQ2xpY2ssXHJcbiAgY2hpbGRyZW4sXHJcbiAgc2hhbGxvdyxcclxufTogQ3VzdG9tTGlua1Byb3BzKSA9PiB7XHJcbiAgaWYgKHNoYWxsb3cgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgc2hhbGxvdyA9IGZhbHNlO1xyXG4gIH1cclxuICByZXR1cm4gKDxMaW5rIGhyZWY9e2hyZWZ9IHBhc3NIcmVmIHNoYWxsb3c9e3NoYWxsb3d9PlxyXG4gICAgPGEgb25DbGljaz17b25DbGlja30gY2xhc3NOYW1lPXtjbGFzc05hbWUgfHwgXCJcIn0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvYT5cclxuICA8L0xpbms+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21MaW5rO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYXliZSA9ICh7IHRlc3QsIGNoaWxkcmVuIH0pID0+IDw+e3Rlc3QgJiYgY2hpbGRyZW59PC8+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWF5YmU7XHJcbiIsImxldCBpc1Byb2R1Y3Rpb247XHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOVl9PVkVSUklERSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgaXNQcm9kdWN0aW9uID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xyXG59IGVsc2Uge1xyXG4gIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WX09WRVJSSURFID09PSAncHJvZHVjdGlvbidcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBhcGlQYXRoOiAnL2FwaScsXHJcbiAgZGF0YWJhc2VVcmw6IHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCB8fCAnJyxcclxuICBnb29nbGVBbmFseXRpY3NJZDogJ1VBLTQ3ODY3NzA2LTMnLFxyXG4gIGlzRGVtbzogcHJvY2Vzcy5lbnYuQ0lST1NBTlRJTExJX0RFTU8gPT09ICd0cnVlJyxcclxuICBpc1Byb2R1Y3Rpb246IGlzUHJvZHVjdGlvbixcclxuICBpc1Byb2R1Y3Rpb25OZXh0OiBwcm9jZXNzLmVudi5OT0RFX0VOVl9ORVhUID09PSB1bmRlZmluZWQgP1xyXG4gICAgKGlzUHJvZHVjdGlvbikgOlxyXG4gICAgKHByb2Nlc3MuZW52Lk5PREVfRU5WX05FWFQgPT09ICdwcm9kdWN0aW9uJyksXHJcbiAgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwLFxyXG4gIC8vIE1ha2VzIGRlcGxveW1lbnQgaW1wb3NzaWJseSBzbG93IGlmIHRoZXJlIGFyZSBsb3RzIG9mIHBhZ2VzXHJcbiAgLy8gbGlrZSBpbiBhIHJlYWwtd29ybGQgcHJvZHVjdGlvbiBwdWJsaWMgd2Vic2l0ZS5cclxuICBwcmVyZW5kZXJBbGw6IGZhbHNlLFxyXG4gIHJldmFsaWRhdGU6IDEwLFxyXG4gIHNlY3JldDogaXNQcm9kdWN0aW9uID8gcHJvY2Vzcy5lbnYuU0VDUkVUIDogJ3NlY3JldCcsXHJcbiAgdmVyYm9zZTogcHJvY2Vzcy5lbnYuVkVSQk9TRSxcclxuICBibGFja2xpc3RUYWdzOiBuZXcgU2V0KFtcclxuICAgICdjeXByZXNzJyxcclxuICBdKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB1c2VTZXNzaW9uU3RvcmFnZSBmcm9tIFwibGliL2hvb2tzL3VzZVNlc3Npb25TdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgdHlwZSBQYWdlRGlzcGF0Y2ggPSBSZWFjdC5EaXNwYXRjaDxhbnk+O1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBQYWdlU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxudW1iZXIgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG5jb25zdCBQYWdlRGlzcGF0Y2hDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dDxQYWdlRGlzcGF0Y2ggfCB1bmRlZmluZWQ+KFxyXG4gIHVuZGVmaW5lZFxyXG4pO1xyXG5cclxuY29uc3QgUGFnZUNvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU2Vzc2lvblN0b3JhZ2UoXCJvZmZzZXRcIiwgMCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtzZXRQYWdlfT5cclxuICAgICAgPFBhZ2VTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3BhZ2V9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9QYWdlU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9QYWdlRGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnZVN0YXRlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHN0YXRlID0gUmVhY3QudXNlQ29udGV4dChQYWdlU3RhdGVDb250ZXh0KTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnZURpc3BhdGNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gUmVhY3QudXNlQ29udGV4dChQYWdlRGlzcGF0Y2hDb250ZXh0KTtcclxuICByZXR1cm4gZGlzcGF0Y2g7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlQ29udGV4dFByb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgdHlwZSBQYWdlQ291bnREaXNwYXRjaCA9IFJlYWN0LkRpc3BhdGNoPGFueT47XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IFBhZ2VDb3VudFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8bnVtYmVyIHwgdW5kZWZpbmVkPihcclxuICB1bmRlZmluZWRcclxuKTtcclxuXHJcbmNvbnN0IFBhZ2VDb3VudERpc3BhdGNoQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQ8XHJcbiAgUGFnZUNvdW50RGlzcGF0Y2ggfCB1bmRlZmluZWRcclxuPih1bmRlZmluZWQpO1xyXG5cclxuY29uc3QgUGFnZUNvdW50Q29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcclxuICBjb25zdCBbcGFnZUNvdW50LCBzZXRQYWdlQ291bnRdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxQYWdlQ291bnREaXNwYXRjaENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldFBhZ2VDb3VudH0+XHJcbiAgICAgIDxQYWdlQ291bnRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3BhZ2VDb3VudH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L1BhZ2VDb3VudFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIDwvUGFnZUNvdW50RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUGFnZUNvdW50U3RhdGUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3RhdGUgPSBSZWFjdC51c2VDb250ZXh0KFBhZ2VDb3VudFN0YXRlQ29udGV4dCk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVBhZ2VDb3VudERpc3BhdGNoID0gKCkgPT4ge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gUmVhY3QudXNlQ29udGV4dChQYWdlQ291bnREaXNwYXRjaENvbnRleHQpO1xyXG4gIHJldHVybiBkaXNwYXRjaDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBhZ2VDb3VudENvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgdXNlU2Vzc2lvblN0b3JhZ2UgPSAoa2V5LCBpbml0aWFsVmFsdWUpID0+IHtcclxuICBjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgIGNvbnN0IGl0ZW0gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICByZXR1cm4gISFpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbml0aWFsVmFsdWU7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZVRvU3RvcmUgPSB2YWx1ZSBpbnN0YW5jZW9mIEZ1bmN0aW9uID8gdmFsdWUoc3RvcmVkVmFsdWUpIDogdmFsdWU7XHJcbiAgICBzZXRTdG9yZWRWYWx1ZSh2YWx1ZVRvU3RvcmUpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZVRvU3RvcmUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTZXNzaW9uU3RvcmFnZTtcclxuIiwiY29uc3QgY2hlY2tMb2dpbiA9IChsb2dnZWRJblVzZXIpID0+XHJcbiAgISFsb2dnZWRJblVzZXIgJiZcclxuICBsb2dnZWRJblVzZXI/LmNvbnN0cnVjdG9yID09PSBPYmplY3QgJiZcclxuICBPYmplY3Qua2V5cyhsb2dnZWRJblVzZXIpLmxlbmd0aCAhPT0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNoZWNrTG9naW47XHJcbiIsImltcG9ydCB7IGFwaVBhdGggfSBmcm9tICdjb25maWcnXHJcblxyXG5leHBvcnQgY29uc3QgU0VSVkVSX0JBU0VfVVJMID0gYXBpUGF0aDtcclxuZXhwb3J0IGNvbnN0IEFQUF9OQU1FID0gYERhaWx5IFRlY2hgO1xyXG5leHBvcnQgY29uc3QgQVJUSUNMRV9RVUVSWV9NQVAgPSB7XHJcbiAgXCJ0YWI9ZmVlZFwiOiBgJHtTRVJWRVJfQkFTRV9VUkx9L2FydGljbGVzL2ZlZWRgLFxyXG4gIFwidGFiPXRhZ1wiOiBgJHtTRVJWRVJfQkFTRV9VUkx9L2FydGljbGVzL3RhZ2BcclxufTtcclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPRklMRV9JTUFHRSA9IGBodHRwczovL3N0YXRpYy5wcm9kdWN0aW9ucmVhZHkuaW8vaW1hZ2VzL3NtaWxleS1jeXJ1cy5qcGdgO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9MSU1JVCA9IDEwO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTUFHRV9TT1VSQ0UgPSBgZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFNZ0FBQURJQ0FZQUFBQ3RXSzZlQUFBUG5VbEVRVlI0WHUyZHk1TGp1QTVFVy8vL28vMSs3L3VHTldGZlNhYklJeEdDQUJDem1VV0YwY2hNSkZLMHphcnB6NTgvLzZacCt2RHYzNzhQcGY5L0FQOWQrZnBuWDZDTll2OWJYQnAxYW53a252S2NXZVBsT1NmVDM3OS8veDBab21qaXY0aTRjRWxZRmIrMkxLTHBmQmJQMUVvUUtYRTFOamNaZGlrOHBNNVpVYlpjV2FsanBROU5uWXNKTXFMNGhQUm9KbytHNTRxNW5ST0VEQWY1eDBtZEZPV2FzNTZVUHFUT1NFbFNUWkFreS84dzU5SXFyMlJxOGxXQ0VES0phVWlkVEJMLzVxTkQxdExhY3AyWFFYcWI3SDA5TVpXVU9hWHF0SVIvL053VEw5SHdFSjJiK2l6UElIZThlNUtpWkpKWVhvNXZqMWhOUjAxVGRhWjdYMitacktzK1RDV2JUcE9YWEZxTHBWVkxrQlNsUGlxOXk2RDM5WnI2RUJOSHd6TS9JdThacEJkczcrdXRpVS82aWJaNW8rRTVaZkxmdjMvUDM4VWkvMmtNdlpVK0NKbkVOS1NPQnEra2o4VHpQbjI3Q1pKa25YKzhpbWJ5YUhqSXNuZ3RyV2VDa0JkSm1ZYlVHVnFVSUYrY2pKQ016UVFodzB6TUZZR3NrbWxIK3FyL2tFdHJteUJrMktWTVErb01LVW9sUWF6cFEvcnh2QnpuQkNFZ3lUQ1RPcDdKcXBrMWsyVE5UaFNkcDcwRUljTXVaUnBTSjVNa1AzRW5jeUk5dDZzRWtTNStkdU5xOXFGSmVqU1RSOE5UbXJ0bWdsZ2IxaEZFMldLTThyaWl1WXlrNXJhWUlGTEZTWjFvNHBNaGlHYnlhSGlXY3pzbkNCR1ZETHRtbmNpaTdHR0x0a3c4NEtrbWlLWXBQSkMxL1RadnIwbDdYNitwRDFsKzBmRE0vQzRUaEpDUW90ei9lNTJpTFJQTGVGNEdzZEtrbFQ0MGwwVzB6UnNLVHlsQk5JZERLcEZDaWJMNEpIMmt0OG90THNlM1J5d3JUVnJwUTNOWlJETjVDRHkxQk5FY2preVM4MmViYU12RUVwN2lJZjFoREN0Tld1bERjMW1FMkx6d01WR1QxMU5MK05ldlg2WnVGSjRDVWZqMmE3UWhJN3hFV3lZVzhPd21pRFZuV3lCcmFUcU5mcUtaM0NXZVo0S1FEV1hOTktRZmw2SjAzZ2ZSTUsvbXZOeUpwNWtnWkFoSElhdGtOZzN4b3BuY0U1NXBteUNhdzY1cFBrK2lTUEdpWVY3TmVia0R6NXdnbWlCVC9McFY4MmJpbXA4N1RMRTZhKzRsaUVmVEVQTmxrdVROUkRJbnovbGZKWWhIVTl5OVliYUcwK2dubXNrdDQ1blBJTVJSbGtIczlUYlM0d3BaYmhybUpYMlFlU04xTlBBVUU0UTBKd1ZTcW80R1dkWjR5YVYxL2VQaUtrSElzS1lvMTR2UzRyaDNHZlMrbnN5SjVqSzVFazgxUVRSQlNwRitKVm5TTndxbCtHMFo2dkZ6VDd5WXdyTThneHc1Y0pvQ0lmRGI2YVBoSWVielpKcTc4THdlc1pLc3NrVTg4UkxONUNidzFCS0VQUGFZQUNINDFlcG9lTzdhdk52SFVkSUhtVGRTUjNLcHZSM1NKWXZ2a1VSQVdpVExBaDdDU3pTVDM0cm41OCtmSXZkQmJnVnh3WDJRYUhqSVVzcmwrSzU2OFcxZWIrOTZqQ2grSm9uU21mR1pJR1RJVWhRbFVXNytDMU9aSlAvWGVUZEJpQm1rVEtWWko1cjRSS2RvajR1cWVMWUpJaldzcWlBNmIrQ05PR1JFNTJqTDVBeWVab0tRNFNGa1c2dHpocXlTNlQzVnlhVjEvR3RDMDE2Q1NBMTlpbkpjbEZ3bTlhbnBYVXBIWGo4bmlKUVpQTlk1UWxaTk5rOTFjbW54cGRWTUVLbWhUMUc0S0Z1dXJKalBTaDlTQ1V2d3JCSkV5Z3dlNnhDeTB1UzJUWDZGUG5PQ1NEbVMxTGtDeEY1TmphR1Bob2NzTncxZVNSOWsza2lkR3A1aWdwQ2lVczFacXhOTmZNSnZOSk5MNGxrbENDRlR5anlTSUZxMU5JYSsxY1BqNXhwOVNPbEQ2b3lBNTJXUUd0Z1UzL2F6TnhsbXN2eWk2U3lDWjNrR3VlUGRFeEVRQWpjS2M4ank3NU9VbHNqYkkxWW15ZHF5MFI0ak1rbktLM2xYNTFxQ0VESno4NDd4K0VWMGpyWk1IbmlLaDNTSkEyVkVzcnpjS0NURFRKWmZQdjcrK3pEOStQRkQ1RVpoaXBKSlFrd25OU2RhZFhZVGhJQ050bUVJNmRHU2NVU2REODN0TTBISWNCQXlwZW9jQW5IekRUekNTelE4Uk9jSXk2U1pJRVQ4VWNoYURua0U4VXVtSGVsZFRMUzB0Z2xDaGwzS05LUU9BcUZ3bzFDS2wyaDRDQytlbDhtY0lBVGtpTU5NZVBFc2ZzMnNtU1Qvc2ZONkYydnZMVXdyRzg5S0g4UTB1VXdPZmhnbitKc3hwZlI1MWxrbGlIVHhzeHRLc3c4eXpLU2ZUQkwvcGlpZXlmYk9JTnRFc2JMQnJmUkJURVBNRncwUDRjWFRNaWttQ0FGSnhDZDFQSkUxSWg2aWN6U1RyOTZ0ZkNRSUlZRU1oMmFkeUtMc1ljdGxvdjhZVjAwUVRWT2srUHJpU3o5R1IxeGE4N3RZVzJDZWhqV2lLQzFNbnZRaFM5WXlucGRCckRScHBRK3B4OFZvZUFndkxZUFBueTk0K1hDM2xDQ0VCTElaTk91RUVzWFFEVWxOblMyYTV1MFJ5MHFUVnZxUU1uazBQSVNYRUV1cmxpQ0VCTTBOUS9vSklZcmhUNVkxK0xXMFRJcUhkRXZQaUpiSWt1QWxHcDd3Uyt2NzkrK21iaFJLSlpMR3BpUERrWGg4LzdhVTNRVFJGSjhNVWJUTkd3MFBtUmVYUyt1WklHUklDUW5XNnJnVXhjRU5TVTJkNzF3bXpRU3hab283eVNxWnJiZWYzdGRiMDRmMDQybHBUZHNFMGR3TWhFeXBmanlKUW5pSmhvZm9mTWN5bVJPRU5FZEUwNnh6QjFtMW9lenRwL2YxMXZRaC9YZ3crVzZDYUE0N0lWT3FIdytpYkhzYzZmb3IwVmx6bWF3U2hEU25PY3lrSDAyeU5Nd1ZEUStaRncxZVNSK2xlV3NtQ0JuU3MvLzRIakVhUTJKWmxETzhSTU5ENWs1alRvb0pRcHF6WmdvTnNqUjVpWWFIekl0Rms4OEpRcHJYSEE3TmZpeUswdW9wenlScmhxNWNKdFVFOFdpS0s4bVN2b0ZIK0kyR2h5eS8xb0o0L0Z5TmwyV0NrT2FKcUI3cm1CSkY0RDVJTkR4azdxNHd6ZXNSNjRyaTI0MUxRRXFaSy9HVUxlS0pGeE1tTHlXSTFKQjZyR05DRk1IN0lOSHdrQ1VydVFSV2gzVFZaenVCeHdodHN2WVNrZlFodFN3a3hiZUFoL0J5cThtL2Zmdld2QStTb3VUaml1WVNJS1loL1VqTTdWdUNTRFZuclk0RVdaWVNOaG9lTWkrM0pNa3pRYlFjYVduSXpJcHk0WDJRVzRic1FqeFh6KzF1Z3BEaEljMVpxeE50ODBiRFErWkYxZVRiQkNGRG42TGttWVRNQ1JsMnpUcG41cmFaSU5aQVN2VnpocXlTTGF6VXNkS0hsRDZramthU1RIc0pRcHlkb21TU2tEa2h3NjVaNThqY3pnbWkyWnhuc21vYjZ3anBWOWF4MG9lbXpsY21TVE5CaUhsU2xFd1NNaWVhcGlIOWtMbGRKUWdwYWcya1ZEK0VyQ3MzMWJaMmJ6KzlyNWZpVmJQT0Zmck1DU0lGSWtYSkpQRzRaR3R6VzB3UWp5RFQ1UDdOS1RWM2trbXlTcEFjc2pxMXRVMGpLVXFybGtaU3QzcDQvRnlqRHluVGtEb2xQQytEakNUK1diSzIzMzcxTkVUUmhwa3NjeEY5bG1lUVBDaE9oTlBxNWlRRlBBMXJORHhIbCtQYkkxWW15WG9rUEEzelVmSHZ2UEZKRW9EZ0lYVzZURjVMRVBLUEV4RFJob3p3MGlXSzRJMUNvcytJZUFndmo3a3RIdEpiQjdCbzRsT3l2TnpBR3hIUFpTYi8rdlZyODBZaCtjZFRsUEpmVW9xMlRLTGhhYzN0Ym9JUVU0eEdWaXRaVzJRditiTHkyR21sRHpKdlV2d2VtdHRuZ2tqOTQ2Uk9pbEtXeUJNdmg0YnM1aHVGUGVackpnZ3BQZ3BaRmhPQTZKTkxxK1B4ZDVzZ2hNd1VwYjRTUm5xclBQcHluQk5FeWhUUnlTcmg4L1JZUkhTT2hvY3M4OXJjVG5zSlFzZ2svemlwazZMa21ZVE1pZFM4SGFtelNoQ3BKak5KT3A1NUt3ZGFLWDFJblZ4YS8wMXhNMEVJbVVjY1dZMHpJOE1oaFlmVWliWk1vdUVwSm9pVUthS1JSWGlKdG5tajRUbTZ0T1lFSVM4aXd5RlZaM1JSOWhhTEoxNmlMTWRxZ2tpWklncFpSKzZEZUJwbW9uTTBQR1Nadjg0ZzJ3RzJRb2FWUGdpWlpNaEluV2pMeER1ZTF5T1d4akI2Sit2TS9Ra05YcVhNU2VwRXc5TmNXc3N6U0NaSi80MUNNbVJOVVpUK3VCRHBZM1E4cTBQNi9NeWw4RlpySmtsK1RxSnB6aTZUMXhMRUdnZ044M2FSV1ZndXZjdWc5L1dKcDd5TUtDOXZDYUpwaW1qaUU5S2ptVHdhbnJmNS8vTGxpOXFOUWluemhSZmxnaVFpNXBYU2g5VHhzaHgzRTRTQWxDTGRDMW5MUG50TjJ2dDZUWDJJenRId3ZQaDlKZ2doSVVXcFcxbGpTS0l0RSt0NG1nbWlhUXJyWkpYNjZ6VkY3K3MxOVNGTE5CeWViWUlRRWxLVVRKSWpYN3NoODJKMU9jNEpZczBVVnNtcTlkVzdPWHRmVDRaUVUrY29lS2E5Qk5Fa1UwcmNLS0pzalpoMzNOZU1hT3E4U2hCcnBzZ2t5VS9jcFpibjJUck5CTEZtR3RLUDVvYXhZbUlyZlJCOXlMQmF3Vk5NRUNtUVVuV3NrQ1dGaDlTSlpuS3ZlT1lFSVk0bW9scXI0MVdVMWtMSU00bmVtYVNhSU5aTTBScWN4OCtqbVNMeGxGVlg0MldaSU5ZU1FLb2ZOVElOM2VPSXRrenV3dk42eFBJMFJIZVJkZVpHWVpyODVnVG9YVnFsQkpFUzFWb2RUMHRBNnZFMjJqTFJ4ck02cEh0N2h0Y21heTlCcElhWjFJbG1jdk40YWdsaUxRR2srakV2eWdYM1FhSXRFeTA4YndraU5ZU2FkYlRJc3BTdzBVeHVGcy9uejUvZDNTaVVNcDlaVVM3OGkwelJsc25WZUhZVFJHb0lOZXRjVGRheXZoVnpXZWxEU21kemVKNEpRZzZJVWlSWXEyTk9sUHpWUzhWZGQ4YzNDSm9KWW0yWVNUK1pKUGt0WURJbkpCU21iWUtRRjBuOTQ5YnFaSkk0LzFDdjkwUEJSWEsvWnZQeE5tOVVVMlNTWkpMMEx1SGRCSWxxR29Jcmt5U1Q1RGtuOHhsRStnSStHY0plWjI4bHZPTUFWeG9qSytheTBvZVV6bmZobVJPRWdNakhGZitQS3lQcTNEdTN4UVN4bGdCUy9mU1NKZFdIWnAyN051OGUxNzM5OUw2ZUxJbWxQcXNFSVMvT0ljc2tJWE9pdVFSSVAyZm50cG9nMWtCSzlYT1dMTTluTmUzTjIrSzR0NS9lMXhOVHpYb3Z6eUI1OEszL2hTazFVUzU0UDc4MnNDTzl3ZEV5N3VQblN6NWVCa254L2IrMVNSSTJtczZYNDZrbENJbWhvNDY4ODlvcXdUUGlrQkZlb3VsTThidzlZbDN1eU1MSCtXZmpud3p6aU9JVFhxTHBmQm1lVDU4K2lkd0hvWTYwY0cyVm1HYkVJU084Uk5PNWhXZjNrSDZaSXkrNFRrcUdlVVR4Q1MvUmRCYkg4MHdRUW1ZTzJSZ0grUkYxM3YxZ3MzVklGM2ZraGRkSjArVG4vK1J4TkozRjhHd1RKSWNzaDJ6a3o4UGVzRDhTaEpoQ3pKRUsxMGtKbmhFZkl3Z3YwWFR1eFRQdEpRZ2hrd3dacWRNTFFxb1BxVHJSOEJCZVd1OEdiVCtodHY1NTJBdnpNa0ZHSE9ZUnhSOVI1N05McTVrZ2hNd2NzbngzUzJwT3JOV1pQd2M1RTNkbkhYbmtBR2lOckdpUEVZVGZhRG9meFRNbkNFa0FRcVpVbmFNZ2R0L0ROdktHUURROFJPY295NlNhSU1RVUtmNFlqMWZSZEtaNFZnbENOZ014alZRZENxSzFyYXpVc2RLSGxENmtUa3NiNis5dXZRelNLMTd2NnduWm11WWsvWGdYUDgrZTRHOWFMczhnVmcvUTBjd1hEVS9rWmZMMmlOVXJYdS9yQ2RtWkpPZS9EaVBGYnpTZGQvSFVFa1NLVEtrNnc0aGk4RktaMUZMeTlsaGFQS1JMSEp5aURUTXh1VGZ4VStkM3hkN205dVBIanlJM0NxVTJES2tUelh6UjhFUmFKcnNKUWtDT09NeUVsMHdTLzc5Yzc3VzBuZ2xDaHAwTWgyYWRhSnMzR2g0eUw5YVhTVE5CQ0VoaWloUS9QM0VuY3lJMWIxSjFwbTJDdUFSaDVEdFhZcUlFdzBONHNab2tjNEpvbWlLVEpKTkVjOTZJT1d2OTdDYUlKeEM5Sk9RM0NPcS9rMWlUWDJ0SnNrb1FUVk5ra21TU2FNN2JXWk0zRThRRENLc0pjRmFVNkhnSUwxYVNwSmdnbXFiSUpNa2swWnczWXM1bFAzT0NISDFSeTkxV2h0NUtIMUw4UnNORGVHbk4ydVBuVi9KU1RSQk5aMThKY252djRXN1NOWGtsUTZqWmp6dWRsd2xpalV5cGZ0eUowdmdMVTlId0VKM3ZXbXF2Unl3cnBGdnBnNGdtdFhudkV2L01qVUlwWHJ6by9EL0F5R1pXc2lFTlN3QUFBQUJKUlU1RXJrSmdnZz09YDtcclxuIiwiaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XHJcblxyXG5pbXBvcnQgY2hlY2tMb2dpbiBmcm9tIFwibGliL3V0aWxzL2NoZWNrTG9naW5cIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcImxpYi91dGlscy9zdG9yYWdlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRMb2dnZWRJblVzZXIoKSB7XHJcbiAgICBjb25zdCB7IGRhdGE6IGxvZ2dlZEluVXNlciB9ID0gdXNlU1dSKFwidXNlclwiLCBzdG9yYWdlKTtcclxuICAgIGNvbnN0IGlzTG9nZ2VkSW4gPSBjaGVja0xvZ2luKGxvZ2dlZEluVXNlcik7XHJcbiAgICBpZiAoaXNMb2dnZWRJbikge1xyXG4gICAgICByZXR1cm4gbG9nZ2VkSW5Vc2VyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBERUZBVUxUX1BST0ZJTEVfSU1BR0UgfSBmcm9tIFwiLi9jb25zdGFudFwiO1xyXG5cclxuY29uc3QgaGFuZGxlQnJva2VuSW1hZ2UgPSBlID0+IHtcclxuICBlLnRhcmdldC5zcmMgPSBERUZBVUxUX1BST0ZJTEVfSU1BR0U7XHJcbiAgZS50YXJnZXQub25lcnJvciA9IG51bGw7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVCcm9rZW5JbWFnZTtcclxuIiwiY29uc3Qgc3RvcmFnZSA9IGFzeW5jIGtleSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gIHJldHVybiAhIXZhbHVlID8gSlNPTi5wYXJzZSh2YWx1ZSkgOiB1bmRlZmluZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yYWdlO1xyXG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9