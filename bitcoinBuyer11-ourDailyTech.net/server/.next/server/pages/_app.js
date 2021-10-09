(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/common/Footer.tsx":
/*!**************************************!*\
  !*** ./components/common/Footer.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");

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

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/common/NavLink.tsx":
/*!***************************************!*\
  !*** ./components/common/NavLink.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\NavLink.tsx";



const NavLink = ({
  href,
  onClick,
  children
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    asPath
  } = router;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: href,
    passHref: true,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      onClick: onClick,
      className: `${encodeURIComponent(asPath) === encodeURIComponent(href) && 'active ' || ''}nav-link`,
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

/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./components/common/Navbar.tsx":
/*!**************************************!*\
  !*** ./components/common/Navbar.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_CustomImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/CustomImage */ "./components/common/CustomImage.tsx");
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var components_common_NavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/NavLink */ "./components/common/NavLink.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/utils/getLoggedInUser */ "./lib/utils/getLoggedInUser.ts");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\Navbar.tsx";









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

const Navbar = () => {
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
              href: `/profile/${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.username}`,
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

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./lib/context/index.tsx":
/*!*******************************!*\
  !*** ./lib/context/index.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PageContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var _PageCountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PageCountContext */ "./lib/context/PageCountContext.tsx");

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

/* harmony default export */ __webpack_exports__["default"] = (ContextProvider);

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_common_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Footer */ "./components/common/Footer.tsx");
/* harmony import */ var components_common_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/Navbar */ "./components/common/Navbar.tsx");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! config */ "./config.js");
/* harmony import */ var config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(config__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lib_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/context */ "./lib/context/index.tsx");
/* harmony import */ var ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ionicons/css/ionicons.min.css */ "./node_modules/ionicons/css/ionicons.min.css");
/* harmony import */ var ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ionicons_css_ionicons_min_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! style.scss */ "./style.scss");
/* harmony import */ var style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(style_scss__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\pages\\_app.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const MyApp = ({
  Component,
  pageProps
}) => {
  if (config__WEBPACK_IMPORTED_MODULE_6__.isProduction) {
    // Google Analytics page switches:
    // https://stackoverflow.com/questions/60411351/how-to-use-google-analytics-with-next-js-app/62552263#62552263
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

    const handleRouteChange = url => {
      window.gtag('config', config__WEBPACK_IMPORTED_MODULE_6__.googleAnalyticsId, {
        page_path: url
      });
    };

    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }, [router.events]);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
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
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(lib_context__WEBPACK_IMPORTED_MODULE_7__.default, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Footer__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
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

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./node_modules/ionicons/css/ionicons.min.css":
/*!****************************************************!*\
  !*** ./node_modules/ionicons/css/ionicons.min.css ***!
  \****************************************************/
/***/ (function() {



/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = require("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_common_CustomImage_tsx-components_common_CustomLink_tsx-components_common_Maybe_ts-e510a1"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9Gb290ZXIudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL05hdkxpbmsudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vbGliL2NvbnRleHQvaW5kZXgudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiRm9vdGVyIiwiQVBQX05BTUUiLCJOYXZMaW5rIiwiaHJlZiIsIm9uQ2xpY2siLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImFzUGF0aCIsImVuY29kZVVSSUNvbXBvbmVudCIsIk5hdmJhckl0ZW0iLCJOYXZiYXIiLCJzZXRQYWdlIiwidXNlUGFnZURpc3BhdGNoIiwibG9nZ2VkSW5Vc2VyIiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiaGFuZGxlQ2xpY2siLCJSZWFjdCIsInVzZXJuYW1lIiwiZWZmZWN0aXZlSW1hZ2UiLCJDb250ZXh0UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzUHJvZHVjdGlvbiIsImhhbmRsZVJvdXRlQ2hhbmdlIiwidXJsIiwid2luZG93IiwiZ3RhZyIsImdvb2dsZUFuYWx5dGljc0lkIiwicGFnZV9wYXRoIiwidXNlRWZmZWN0IiwiZXZlbnRzIiwib24iLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUcsbUJBQ2I7QUFBQSx5QkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0UsOERBQUMsaUVBQUQ7QUFBWSxVQUFJLEVBQUMsR0FBakI7QUFBcUIsZUFBUyxFQUFDLFdBQS9CO0FBQUEsZ0JBQ0dDLG9FQUFBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUlFO0FBQU0sZUFBUyxFQUFDLGFBQWhCO0FBQUEsaUJBQ0csR0FESCxxREFDb0QsR0FEcEQsZUFFRTtBQUFHLFlBQUksRUFBQyxzQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQWNBLCtEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7O0FBUUEsTUFBTUUsT0FBTyxHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxTQUFSO0FBQWlCQztBQUFqQixDQUFELEtBQStDO0FBQzdELFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBYUYsTUFBbkI7QUFD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cy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEN1c3RvbUxpbmsgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0N1c3RvbUxpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXHJcbiAgPGZvb3Rlcj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwibG9nby1mb250XCI+XHJcbiAgICAgICAge0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgIDwvQ3VzdG9tTGluaz5cclxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYXR0cmlidXRpb25cIj5cclxuICAgICAgICB7XCIgXCJ9wqkgMjAyMS4gQW4gaW50ZXJhY3RpdmUgbGVhcm5pbmcgcHJvamVjdCBmcm9te1wiIFwifVxyXG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoaW5rc3Rlci5pb1wiPlRoaW5rc3RlcjwvYT4uIENvZGUgbGljZW5zZWQgdW5kZXIgTUlULlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Zvb3Rlcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmludGVyZmFjZSBOYXZMaW5rUHJvcHMge1xyXG4gIGhyZWY6IHN0cmluZztcclxuICBvbkNsaWNrPzogKCkgPT4gdm9pZDtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBOYXZMaW5rID0gKHsgaHJlZiwgb25DbGljaywgY2hpbGRyZW4gfTogTmF2TGlua1Byb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHJvdXRlcjtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgaHJlZj17aHJlZn0gcGFzc0hyZWY+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICBjbGFzc05hbWU9e2Ake1xyXG4gICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KGFzUGF0aCkgPT09IGVuY29kZVVSSUNvbXBvbmVudChocmVmKSAmJiAnYWN0aXZlICcgfHwgJydcclxuICAgICAgICB9bmF2LWxpbmtgfVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2E+XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IEN1c3RvbUltYWdlIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9DdXN0b21JbWFnZVwiO1xyXG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vQ3VzdG9tTGlua1wiO1xyXG5pbXBvcnQgTWF5YmUgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL01heWJlXCI7XHJcbmltcG9ydCBOYXZMaW5rIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9OYXZMaW5rXCI7XHJcbmltcG9ydCB7IEFQUF9OQU1FIH0gZnJvbSBcImxpYi91dGlscy9jb25zdGFudFwiO1xyXG5pbXBvcnQgeyB1c2VQYWdlRGlzcGF0Y2ggfSBmcm9tIFwibGliL2NvbnRleHQvUGFnZUNvbnRleHRcIjtcclxuaW1wb3J0IGdldExvZ2dlZEluVXNlciBmcm9tIFwibGliL3V0aWxzL2dldExvZ2dlZEluVXNlclwiO1xyXG5cclxuY29uc3QgTmF2YmFySXRlbSA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj57Y2hpbGRyZW59PC9saT5cclxuKVxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNldFBhZ2UgPSB1c2VQYWdlRGlzcGF0Y2goKTtcclxuICBjb25zdCBsb2dnZWRJblVzZXIgPSBnZXRMb2dnZWRJblVzZXIoKVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4gc2V0UGFnZSgwKSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItbGlnaHRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8Q3VzdG9tTGluayBocmVmPVwiL1wiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIj5cclxuICAgICAgICAgIHtBUFBfTkFNRS50b0xvd2VyQ2FzZSgpfVxyXG4gICAgICAgIDwvQ3VzdG9tTGluaz5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXYgcHVsbC14cy1yaWdodFwiPlxyXG4gICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgICAgIEhvbWVcclxuICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgPC9OYXZiYXJJdGVtPlxyXG4gICAgICAgICAgPE1heWJlIHRlc3Q9e2xvZ2dlZEluVXNlcn0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvZWRpdG9yXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tY29tcG9zZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDtOZXcgQXJ0aWNsZVxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3NldHRpbmdzXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tZ2Vhci1hXCIgLz5cclxuICAgICAgICAgICAgICAgICZuYnNwO1NldHRpbmdzXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtgL3Byb2ZpbGUvJHtsb2dnZWRJblVzZXI/LnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8Q3VzdG9tSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1waWNcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ2dlZEluVXNlcj8uZWZmZWN0aXZlSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInlvdXIgcHJvZmlsZSBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2xvZ2dlZEluVXNlcj8udXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICA8L01heWJlPlxyXG4gICAgICAgICAgPE1heWJlIHRlc3Q9eyFsb2dnZWRJblVzZXJ9PlxyXG4gICAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3VzZXIvbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi91c2VyL3JlZ2lzdGVyXCI+XHJcbiAgICAgICAgICAgICAgICBTaWduIHVwXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICA8L01heWJlPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9uYXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IFBhZ2VDb250ZXh0IGZyb20gXCIuL1BhZ2VDb250ZXh0XCI7XHJcbmltcG9ydCBQYWdlQ291bnRDb250ZXh0IGZyb20gXCIuL1BhZ2VDb3VudENvbnRleHRcIjtcclxuXHJcbmNvbnN0IENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcclxuICA8UGFnZUNvbnRleHQ+XHJcbiAgICA8UGFnZUNvdW50Q29udGV4dD57Y2hpbGRyZW59PC9QYWdlQ291bnRDb250ZXh0PlxyXG4gIDwvUGFnZUNvbnRleHQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250ZXh0UHJvdmlkZXI7XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRm9vdGVyXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL05hdmJhclwiO1xyXG5pbXBvcnQgeyBnb29nbGVBbmFseXRpY3NJZCwgaXNQcm9kdWN0aW9uIH0gZnJvbSBcImNvbmZpZ1wiO1xyXG5pbXBvcnQgQ29udGV4dFByb3ZpZGVyIGZyb20gXCJsaWIvY29udGV4dFwiO1xyXG5pbXBvcnQgXCJpb25pY29ucy9jc3MvaW9uaWNvbnMubWluLmNzc1wiO1xyXG5pbXBvcnQgXCJzdHlsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcclxuICBpZiAoaXNQcm9kdWN0aW9uKSB7XHJcbiAgICAvLyBHb29nbGUgQW5hbHl0aWNzIHBhZ2Ugc3dpdGNoZXM6XHJcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy82MDQxMTM1MS9ob3ctdG8tdXNlLWdvb2dsZS1hbmFseXRpY3Mtd2l0aC1uZXh0LWpzLWFwcC82MjU1MjI2MyM2MjU1MjI2M1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCBoYW5kbGVSb3V0ZUNoYW5nZSA9ICh1cmwpID0+IHtcclxuICAgICAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIGdvb2dsZUFuYWx5dGljc0lkLCB7XHJcbiAgICAgICAgcGFnZV9wYXRoOiB1cmwsXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgcm91dGVyLmV2ZW50cy5vZmYoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XHJcbiAgICAgIH07XHJcbiAgICB9LCBbcm91dGVyLmV2ZW50c10pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIG5hbWU9XCJ2aWV3cG9ydFwiXHJcbiAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEsIG1heGltdW0tc2NhbGU9MVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L0NvbnRleHRQcm92aWRlcj5cclxuICAgIDwvPlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3dyXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9