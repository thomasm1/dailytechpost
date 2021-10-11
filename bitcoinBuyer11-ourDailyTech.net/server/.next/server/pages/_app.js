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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\Footer.tsx";



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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\NavLink.tsx";



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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\Navbar.tsx";









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

var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\lib\\context\\index.tsx";




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


var _jsxFileName = "C:\\w\\www\\dailytechpost\\bitcoinBuyer11-ourDailyTech.net\\server\\pages\\_app.tsx";

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_common_CustomLink_tsx-lib_utils_constant_ts","components_common_CustomImage_tsx-components_common_Maybe_tsx-lib_context_PageContext_tsx-lib-61e28e"], function() { return __webpack_exec__("./pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL0Zvb3Rlci50c3giLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9OYXZMaW5rLnRzeCIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9saWIvY29udGV4dC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvLi9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9kYWlseXRlY2gtbm9kZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2RhaWx5dGVjaC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vZGFpbHl0ZWNoLW5vZGUvZXh0ZXJuYWwgXCJzd3JcIiJdLCJuYW1lcyI6WyJGb290ZXIiLCJBUFBfTkFNRSIsIk5hdkxpbmsiLCJocmVmIiwib25DbGljayIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXNQYXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiTmF2YmFySXRlbSIsIk5hdmJhciIsInNldFBhZ2UiLCJ1c2VQYWdlRGlzcGF0Y2giLCJsb2dnZWRJblVzZXIiLCJnZXRMb2dnZWRJblVzZXIiLCJoYW5kbGVDbGljayIsIlJlYWN0IiwidXNlcm5hbWUiLCJlZmZlY3RpdmVJbWFnZSIsIkNvbnRleHRQcm92aWRlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaXNQcm9kdWN0aW9uIiwiaGFuZGxlUm91dGVDaGFuZ2UiLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwiZ29vZ2xlQW5hbHl0aWNzSWQiLCJwYWdlX3BhdGgiLCJ1c2VFZmZlY3QiLCJldmVudHMiLCJvbiIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxtQkFDYjtBQUFBLHlCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSw0QkFDRSw4REFBQyxpRUFBRDtBQUFZLFVBQUksRUFBQyxHQUFqQjtBQUFxQixlQUFTLEVBQUMsV0FBL0I7QUFBQSxnQkFDR0Msb0VBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBSUU7QUFBTSxlQUFTLEVBQUMsYUFBaEI7QUFBQSxpQkFDRyxHQURILHFEQUNvRCxHQURwRCxlQUVFO0FBQUcsWUFBSSxFQUFDLHNCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBY0EsK0RBQWVELE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTs7QUFRQSxNQUFNRSxPQUFPLEdBQUcsQ0FBQztBQUFFQyxNQUFGO0FBQVFDLFNBQVI7QUFBaUJDO0FBQWpCLENBQUQsS0FBK0M7QUFDN0QsUUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQUNBLFFBQU07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Ozs7OztBQ0FBLGlDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vQ3VzdG9tTGlua1wiO1xyXG5pbXBvcnQgeyBBUFBfTkFNRSB9IGZyb20gXCJsaWIvdXRpbHMvY29uc3RhbnRcIjtcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICA8Zm9vdGVyPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPEN1c3RvbUxpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJsb2dvLWZvbnRcIj5cclxuICAgICAgICB7QVBQX05BTUUudG9Mb3dlckNhc2UoKX1cclxuICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJhdHRyaWJ1dGlvblwiPlxyXG4gICAgICAgIHtcIiBcIn3CqSAyMDIxLiBBbiBpbnRlcmFjdGl2ZSBsZWFybmluZyBwcm9qZWN0IGZyb217XCIgXCJ9XHJcbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vdGhpbmtzdGVyLmlvXCI+VGhpbmtzdGVyPC9hPi4gQ29kZSBsaWNlbnNlZCB1bmRlciBNSVQuXHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZm9vdGVyPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW50ZXJmYWNlIE5hdkxpbmtQcm9wcyB7XHJcbiAgaHJlZjogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/OiAoKSA9PiB2b2lkO1xyXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbn1cclxuXHJcbmNvbnN0IE5hdkxpbmsgPSAoeyBocmVmLCBvbkNsaWNrLCBjaGlsZHJlbiB9OiBOYXZMaW5rUHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gcm91dGVyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBocmVmPXtocmVmfSBwYXNzSHJlZj5cclxuICAgICAgPGFcclxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YCR7XHJcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQoYXNQYXRoKSA9PT0gZW5jb2RlVVJJQ29tcG9uZW50KGhyZWYpICYmICdhY3RpdmUgJyB8fCAnJ1xyXG4gICAgICAgIH1uYXYtbGlua2B9XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvYT5cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2TGluaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgQ3VzdG9tSW1hZ2UgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0N1c3RvbUltYWdlXCI7XHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9DdXN0b21MaW5rXCI7XHJcbmltcG9ydCBNYXliZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vTWF5YmVcIjtcclxuaW1wb3J0IE5hdkxpbmsgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL05hdkxpbmtcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VEaXNwYXRjaCB9IGZyb20gXCJsaWIvY29udGV4dC9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgZ2V0TG9nZ2VkSW5Vc2VyIGZyb20gXCJsaWIvdXRpbHMvZ2V0TG9nZ2VkSW5Vc2VyXCI7XHJcblxyXG5jb25zdCBOYXZiYXJJdGVtID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPntjaGlsZHJlbn08L2xpPlxyXG4pXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2V0UGFnZSA9IHVzZVBhZ2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGxvZ2dlZEluVXNlciA9IGdldExvZ2dlZEluVXNlcigpXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBzZXRQYWdlKDApLCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1saWdodFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxDdXN0b21MaW5rIGhyZWY9XCIvXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiPlxyXG4gICAgICAgICAge0FQUF9OQU1FLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdiBwdWxsLXhzLXJpZ2h0XCI+XHJcbiAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9cIiBvbkNsaWNrPXtoYW5kbGVDbGlja30+XHJcbiAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICA8TWF5YmUgdGVzdD17bG9nZ2VkSW5Vc2VyfT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj1cIi9lZGl0b3JcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1jb21wb3NlXCIgLz5cclxuICAgICAgICAgICAgICAgICZuYnNwO05ldyBBcnRpY2xlXHJcbiAgICAgICAgICAgICAgPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICA8L05hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvc2V0dGluZ3NcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1nZWFyLWFcIiAvPlxyXG4gICAgICAgICAgICAgICAgJm5ic3A7U2V0dGluZ3NcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgICAgPE5hdmJhckl0ZW0+XHJcbiAgICAgICAgICAgICAgPE5hdkxpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS8ke2xvZ2dlZEluVXNlcj8udXNlcm5hbWV9YH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDdXN0b21JbWFnZVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1c2VyLXBpY1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nZ2VkSW5Vc2VyPy5lZmZlY3RpdmVJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwieW91ciBwcm9maWxlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7bG9nZ2VkSW5Vc2VyPy51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgICA8TWF5YmUgdGVzdD17IWxvZ2dlZEluVXNlcn0+XHJcbiAgICAgICAgICAgIDxOYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICAgIDxOYXZMaW5rIGhyZWY9XCIvdXNlci9sb2dpblwiPlxyXG4gICAgICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgICAgIDwvTmF2TGluaz5cclxuICAgICAgICAgICAgPC9OYXZiYXJJdGVtPlxyXG4gICAgICAgICAgICA8TmF2YmFySXRlbT5cclxuICAgICAgICAgICAgICA8TmF2TGluayBocmVmPVwiL3VzZXIvcmVnaXN0ZXJcIj5cclxuICAgICAgICAgICAgICAgIFNpZ24gdXBcclxuICAgICAgICAgICAgICA8L05hdkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFySXRlbT5cclxuICAgICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgUGFnZUNvbnRleHQgZnJvbSBcIi4vUGFnZUNvbnRleHRcIjtcclxuaW1wb3J0IFBhZ2VDb3VudENvbnRleHQgZnJvbSBcIi4vUGFnZUNvdW50Q29udGV4dFwiO1xyXG5cclxuY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxQYWdlQ29udGV4dD5cclxuICAgIDxQYWdlQ291bnRDb250ZXh0PntjaGlsZHJlbn08L1BhZ2VDb3VudENvbnRleHQ+XHJcbiAgPC9QYWdlQ29udGV4dD5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRleHRQcm92aWRlcjtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9Gb290ZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vTmF2YmFyXCI7XHJcbmltcG9ydCB7IGdvb2dsZUFuYWx5dGljc0lkLCBpc1Byb2R1Y3Rpb24gfSBmcm9tIFwiY29uZmlnXCI7XHJcbmltcG9ydCBDb250ZXh0UHJvdmlkZXIgZnJvbSBcImxpYi9jb250ZXh0XCI7XHJcbmltcG9ydCBcImlvbmljb25zL2Nzcy9pb25pY29ucy5taW4uY3NzXCI7XHJcbmltcG9ydCBcInN0eWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkgPT4ge1xyXG4gIGlmIChpc1Byb2R1Y3Rpb24pIHtcclxuICAgIC8vIEdvb2dsZSBBbmFseXRpY3MgcGFnZSBzd2l0Y2hlczpcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzYwNDExMzUxL2hvdy10by11c2UtZ29vZ2xlLWFuYWx5dGljcy13aXRoLW5leHQtanMtYXBwLzYyNTUyMjYzIzYyNTUyMjYzXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKHVybCkgPT4ge1xyXG4gICAgICB3aW5kb3cuZ3RhZygnY29uZmlnJywgZ29vZ2xlQW5hbHl0aWNzSWQsIHtcclxuICAgICAgICBwYWdlX3BhdGg6IHVybCxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgcm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtyb3V0ZXIuZXZlbnRzXSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MSwgbWF4aW11bS1zY2FsZT0xXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=