(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/article/ArticleList.tsx":
/*!********************************************!*\
  !*** ./components/article/ArticleList.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_article_ArticlePreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/article/ArticlePreview */ "./components/article/ArticlePreview.tsx");
/* harmony import */ var components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/ErrorMessage */ "./components/common/ErrorMessage.tsx");
/* harmony import */ var components_common_FavoriteArticleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/common/FavoriteArticleButton */ "./components/common/FavoriteArticleButton.tsx");
/* harmony import */ var components_common_Maybe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/common/Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var components_common_Pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/Pagination */ "./components/common/Pagination.tsx");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var lib_context_PageCountContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lib/context/PageCountContext */ "./lib/context/PageCountContext.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_utils_fetcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lib/utils/fetcher */ "./lib/utils/fetcher.ts");


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\article\\ArticleList.tsx";













const ArticleList = props => {
  const page = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_9__.usePageState)();
  const pageCount = (0,lib_context_PageCountContext__WEBPACK_IMPORTED_MODULE_10__.usePageCountState)();
  const setPageCount = (0,lib_context_PageCountContext__WEBPACK_IMPORTED_MODULE_10__.usePageCountDispatch)();
  const lastIndex = pageCount > 480 ? Math.ceil(pageCount / lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT) : Math.ceil(pageCount / lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT) - 1;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    asPath,
    pathname,
    query
  } = router;
  const {
    favorite,
    follow,
    tag,
    pid
  } = query;

  let fetchURL = (() => {
    switch (props.what) {
      case 'favorites':
        return `${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.SERVER_BASE_URL}/articles?limit=${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}&favorited=${encodeURIComponent(String(pid))}&offset=${page * lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}`;

      case 'my-posts':
        return `${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.SERVER_BASE_URL}/articles?limit=${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}&author=${encodeURIComponent(String(pid))}&offset=${page * lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}`;

      case 'tag':
        return `${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.SERVER_BASE_URL}/articles?limit=${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}&tag=${encodeURIComponent(props.tag)}&offset=${page * lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}`;

      case 'feed':
        return `${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.SERVER_BASE_URL}/articles/feed?limit=${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}&offset=${page * lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}`;

      case 'global':
        return `${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.SERVER_BASE_URL}/articles?limit=${lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}&offset=${page * lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT}`;

      default:
        throw new Error(`Unknown search: ${props.what}`);
    }
  })();

  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_3___default()(fetchURL, (0,lib_utils_fetcher__WEBPACK_IMPORTED_MODULE_12__.default)());
  const {
    articles,
    articlesCount
  } = data || {
    articles: [],
    articlesCount: 0
  };
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    setPageCount(articlesCount);
  }, [articlesCount]); // Favorite article button state.

  const favorited = [];
  const setFavorited = [];
  const favoritesCount = [];
  const setFavoritesCount = [];

  for (let i = 0; i < lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT; i++) {
    [favorited[i], setFavorited[i]] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
    [favoritesCount[i], setFavoritesCount[i]] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(0);
  }

  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    for (let i = 0; i < articles.length; i++) {
      setFavorited[i](articles[i].favorited);
      setFavoritesCount[i](articles[i].favoritesCount);
    }
  }, [articles]);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__.default, {
    message: "Cannot load recent articles..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 21
  }, undefined);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "article-preview",
    children: "Loading articles..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 78,
    columnNumber: 21
  }, undefined);

  if ((articles === null || articles === void 0 ? void 0 : articles.length) === 0) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "article-preview",
      children: "No articles are here... yet."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [articles === null || articles === void 0 ? void 0 : articles.map((article, i) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_FavoriteArticleButton__WEBPACK_IMPORTED_MODULE_6__.FavoriteArticleButtonContext.Provider, {
        value: {
          favorited: favorited[i],
          setFavorited: setFavorited[i],
          favoritesCount: favoritesCount[i],
          setFavoritesCount: setFavoritesCount[i]
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_article_ArticlePreview__WEBPACK_IMPORTED_MODULE_4__.default, {
          article: article
        }, article.slug, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined)
      }, article.slug, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 11
      }, undefined);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_7__.default, {
      test: articlesCount && articlesCount > lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Pagination__WEBPACK_IMPORTED_MODULE_8__.default, {
        total: pageCount,
        limit: lib_utils_constant__WEBPACK_IMPORTED_MODULE_11__.DEFAULT_LIMIT,
        pageCount: 10,
        currentPage: page,
        lastIndex: lastIndex,
        fetchURL: fetchURL
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (ArticleList);

/***/ }),

/***/ "./components/article/ArticlePreview.tsx":
/*!***********************************************!*\
  !*** ./components/article/ArticlePreview.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var components_common_CustomImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/CustomImage */ "./components/common/CustomImage.tsx");
/* harmony import */ var components_common_FavoriteArticleButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/common/FavoriteArticleButton */ "./components/common/FavoriteArticleButton.tsx");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var lib_utils_date__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/utils/date */ "./lib/utils/date.ts");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\article\\ArticlePreview.tsx";








const ArticlePreview = ({
  article
}) => {
  const setPage = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_6__.usePageDispatch)();
  const preview = article;
  const [hover, setHover] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(false);
  const [currentIndex, setCurrentIndex] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(-1);
  if (!article) return;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "article-preview",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "article-meta",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__.default, {
        href: `/profile/${preview.author.username}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomImage__WEBPACK_IMPORTED_MODULE_4__.default, {
          src: preview.author.image,
          alt: "author profile image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "info",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__.default, {
          href: `/profile/${preview.author.username}`,
          className: "author",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            onClick: () => setPage(0),
            children: preview.author.username
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: "date",
          children: (0,lib_utils_date__WEBPACK_IMPORTED_MODULE_7__.formatDate)(preview.createdAt)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "pull-xs-right",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_FavoriteArticleButton__WEBPACK_IMPORTED_MODULE_5__.default, {
          favorited: preview.favorited,
          favoritesCount: preview.favoritesCount,
          slug: preview.slug
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_3__.default, {
      href: `/article/${preview.slug}`,
      className: "preview-link",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        children: preview.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: preview.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        children: "Read more..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "tag-list",
        children: preview.tagList.map((tag, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/?tag=${tag}`,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
              className: "tag-default tag-pill tag-outline",
              onClick: e => e.stopPropagation(),
              onMouseOver: () => {
                setHover(true);
                setCurrentIndex(index);
              },
              onMouseLeave: () => {
                setHover(false);
                setCurrentIndex(-1);
              },
              children: tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 17
            }, undefined)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (ArticlePreview);

/***/ }),

/***/ "./components/common/ErrorMessage.tsx":
/*!********************************************!*\
  !*** ./components/common/ErrorMessage.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\ErrorMessage.tsx";


const ErrorMessage = ({
  message
}) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "error-message",
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "error-message-presenter",
    children: message
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (ErrorMessage);

/***/ }),

/***/ "./components/common/FavoriteArticleButton.tsx":
/*!*****************************************************!*\
  !*** ./components/common/FavoriteArticleButton.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FavoriteArticleButtonContext": function() { return /* binding */ FavoriteArticleButtonContext; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/utils/getLoggedInUser */ "./lib/utils/getLoggedInUser.ts");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\FavoriteArticleButton.tsx";





const FAVORITED_CLASS = "btn btn-sm btn-primary";
const NOT_FAVORITED_CLASS = "btn btn-sm btn-outline-primary";
const FavoriteArticleButtonContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createContext(undefined);

const FavoriteArticleButton = props => {
  const loggedInUser = (0,lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_5__.default)();
  const {
    favorited,
    setFavorited,
    favoritesCount,
    setFavoritesCount
  } = react__WEBPACK_IMPORTED_MODULE_2___default().useContext(FavoriteArticleButtonContext);
  let buttonText;

  if (props.showText) {
    if (favorited) {
      buttonText = 'Unfavorite';
    } else {
      buttonText = 'Favorite';
    }

    buttonText = ' ' + buttonText + ' Article ';
  } else {
    buttonText = '';
  }

  const handleClickFavorite = async () => {
    if (!loggedInUser) {
      next_router__WEBPACK_IMPORTED_MODULE_3___default().push(`/user/login`);
      return;
    }

    setFavorited(!favorited);
    setFavoritesCount(favoritesCount + (favorited ? -1 : 1));

    try {
      if (favorited) {
        await axios__WEBPACK_IMPORTED_MODULE_1___default().delete(`${lib_utils_constant__WEBPACK_IMPORTED_MODULE_4__.SERVER_BASE_URL}/articles/${props.slug}/favorite`, {
          headers: {
            Authorization: `Token ${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token}`
          }
        });
      } else {
        await axios__WEBPACK_IMPORTED_MODULE_1___default().post(`${lib_utils_constant__WEBPACK_IMPORTED_MODULE_4__.SERVER_BASE_URL}/articles/${props.slug}/favorite`, {}, {
          headers: {
            Authorization: `Token ${loggedInUser === null || loggedInUser === void 0 ? void 0 : loggedInUser.token}`
          }
        });
      }
    } catch (error) {
      setFavorited(!favorited);
      setFavoritesCount(favoritesCount + (favorited ? 1 : -1));
    }
  };

  let count = favoritesCount;

  if (props.showText) {
    count = /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
      className: "counter",
      children: ["(", count, ")"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 14
    }, undefined);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: favorited ? FAVORITED_CLASS : NOT_FAVORITED_CLASS,
    onClick: () => handleClickFavorite(),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      className: "ion-heart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), props.showText ? ' ' : '', buttonText, ' ', count]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FavoriteArticleButton);

/***/ }),

/***/ "./components/common/LoadingSpinner.tsx":
/*!**********************************************!*\
  !*** ./components/common/LoadingSpinner.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\LoadingSpinner.tsx";


const LoadingSpinner = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: "loading-spinner"
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 3,
  columnNumber: 30
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (LoadingSpinner);

/***/ }),

/***/ "./components/common/Pagination.tsx":
/*!******************************************!*\
  !*** ./components/common/Pagination.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Maybe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var lib_utils_calculatePagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils/calculatePagination */ "./lib/utils/calculatePagination.ts");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\common\\Pagination.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function PaginationItem(props) {
  const newProps = Object.assign({}, props);
  delete newProps.children;
  delete newProps.className;
  let className;

  if (props.className) {
    className = ' ' + props.className;
  } else {
    className = '';
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", _objectSpread(_objectSpread({
    className: `page-item${className}`
  }, newProps), {}, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      className: "page-link",
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

const Pagination = ({
  total,
  limit,
  pageCount,
  currentPage,
  lastIndex,
  fetchURL
}) => {
  const page = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_5__.usePageState)();
  const setPage = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_5__.usePageDispatch)();
  const {
    firstPage,
    lastPage,
    hasPreviousPage,
    hasNextPage
  } = (0,lib_utils_calculatePagination__WEBPACK_IMPORTED_MODULE_4__.getPageInfo)({
    limit,
    pageCount,
    total,
    page: currentPage
  });
  const pages = total > 0 ? (0,lib_utils_calculatePagination__WEBPACK_IMPORTED_MODULE_4__.getRange)(firstPage, lastPage) : [];
  const handleClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback((e, index) => {
    e.preventDefault();
    setPage(index);
    (0,swr__WEBPACK_IMPORTED_MODULE_2__.trigger)(fetchURL);
  }, []);
  const handleFirstClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(e => {
    e.preventDefault();
    setPage(0);
    (0,swr__WEBPACK_IMPORTED_MODULE_2__.trigger)(fetchURL);
  }, []);
  const handlePrevClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(e => {
    e.preventDefault();
    setPage(page - 1);
    (0,swr__WEBPACK_IMPORTED_MODULE_2__.trigger)(fetchURL);
  }, []);
  const handleNextClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(e => {
    e.preventDefault();
    setPage(page + 1);
    (0,swr__WEBPACK_IMPORTED_MODULE_2__.trigger)(fetchURL);
  }, []);
  const handleLastClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(e => {
    e.preventDefault();
    setPage(lastIndex);
    (0,swr__WEBPACK_IMPORTED_MODULE_2__.trigger)(fetchURL);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("nav", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "pagination",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationItem, {
        onClick: handleFirstClick,
        children: `<<`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Maybe__WEBPACK_IMPORTED_MODULE_3__.default, {
        test: hasPreviousPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationItem, {
          onClick: handlePrevClick,
          children: `<`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, undefined), pages.map(page => {
        const isCurrent = !currentPage ? page === 0 : page === currentPage;
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationItem, {
          className: isCurrent && "active",
          onClick: e => handleClick(e, page),
          children: page + 1
        }, page.toString(), false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 13
        }, undefined);
      }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Maybe__WEBPACK_IMPORTED_MODULE_3__.default, {
        test: hasNextPage,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationItem, {
          onClick: handleNextClick,
          children: `>`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PaginationItem, {
        onClick: handleLastClick,
        children: `>>`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 99,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ }),

/***/ "./components/home/TabList.tsx":
/*!*************************************!*\
  !*** ./components/home/TabList.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var components_common_Maybe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/utils/getLoggedInUser */ "./lib/utils/getLoggedInUser.ts");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\home\\TabList.tsx";





const TabList = ({
  tab,
  setTab,
  tag
}) => {
  const loggedInUser = (0,lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_4__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    className: "nav nav-pills outline-active",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_3__.default, {
      test: loggedInUser,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "nav-item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_2__.default, {
          className: `nav-link${tab === 'feed' ? ' active' : ''}`,
          href: "/",
          onClick: () => {
            setTab('feed');
          },
          shallow: true,
          children: "Your Feed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: "nav-item",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_2__.default, {
        className: `nav-link${tab === 'global' ? ' active' : ''}`,
        href: "/",
        shallow: true,
        onClick: () => {
          setTab('global');
        },
        children: "Global Feed"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_3__.default, {
      test: tab == 'tag',
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        className: "nav-item",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: `/`,
          className: "nav-link active",
          shallow: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
            className: "ion-pound"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), " ", tag]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (TabList);

/***/ }),

/***/ "./components/home/Tags.tsx":
/*!**********************************!*\
  !*** ./components/home/Tags.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_common_CustomLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/common/CustomLink */ "./components/common/CustomLink.tsx");
/* harmony import */ var components_common_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/common/LoadingSpinner */ "./components/common/LoadingSpinner.tsx");
/* harmony import */ var lib_context_PageContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lib/context/PageContext */ "./lib/context/PageContext.tsx");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ "swr");
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_utils_fetcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/utils/fetcher */ "./lib/utils/fetcher.ts");
/* harmony import */ var components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/common/ErrorMessage */ "./components/common/ErrorMessage.tsx");

var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\components\\home\\Tags.tsx";









const Tags = ({
  setTab,
  setTag
}) => {
  const setPage = (0,lib_context_PageContext__WEBPACK_IMPORTED_MODULE_4__.usePageDispatch)();
  const handleClick = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => setPage(0), []);
  const {
    data,
    error
  } = swr__WEBPACK_IMPORTED_MODULE_5___default()(`${lib_utils_constant__WEBPACK_IMPORTED_MODULE_6__.SERVER_BASE_URL}/tags`, (0,lib_utils_fetcher__WEBPACK_IMPORTED_MODULE_7__.default)());
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__.default, {
    message: "Cannot load popular tags..."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 21
  }, undefined);
  if (!data) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_LoadingSpinner__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 21
  }, undefined);
  const {
    tags
  } = data;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "tag-list",
    children: tags === null || tags === void 0 ? void 0 : tags.map(tag => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_CustomLink__WEBPACK_IMPORTED_MODULE_2__.default, {
      href: ``,
      className: "tag-default tag-pill",
      onClick: () => {
        setTab('tag');
        setTag(tag);
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        onClick: handleClick,
        children: tag
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 11
      }, undefined)
    }, tag, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Tags);

/***/ }),

/***/ "./lib/utils/calculatePagination.ts":
/*!******************************************!*\
  !*** ./lib/utils/calculatePagination.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getRange": function() { return /* binding */ getRange; },
/* harmony export */   "getPageInfo": function() { return /* binding */ getPageInfo; }
/* harmony export */ });
const getRange = (start, end) => {
  return [...Array(end - start + 1)].map((_, i) => start + i);
};
const getPageInfo = ({
  limit,
  pageCount,
  total,
  page
}) => {
  const totalPages = Math.floor(total / limit);
  let currentPage = page;

  if (currentPage > totalPages) {
    currentPage = totalPages;
  }

  let firstPage = Math.max(0, currentPage - Math.floor(pageCount / 2));
  let lastPage = Math.min(totalPages, currentPage + Math.floor(pageCount / 2));

  if (lastPage - firstPage + 1 < pageCount) {
    if (currentPage < totalPages / 2) {
      lastPage = Math.min(totalPages, lastPage + (pageCount - (lastPage - firstPage)));
    } else {
      firstPage = Math.max(1, firstPage - (pageCount - (lastPage - firstPage)));
    }
  }

  if (lastPage - firstPage + 1 > pageCount) {
    if (currentPage > totalPages / 2) {
      firstPage = firstPage + 1;
    } else {
      lastPage = lastPage - 1;
    }
  }

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasPreviousPage = currentPage > 0;
  const hasNextPage = currentPage < totalPages;
  return {
    firstPage,
    lastPage,
    previousPage,
    nextPage,
    hasPreviousPage,
    hasNextPage,
    totalPages
  };
};

/***/ }),

/***/ "./lib/utils/date.ts":
/*!***************************!*\
  !*** ./lib/utils/date.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatDate": function() { return /* binding */ formatDate; }
/* harmony export */ });
function formatDate(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString('default', {
    month: 'long'
  });
  return `${month} ${date.getDate()}, ${date.getFullYear()}`;
}

/***/ }),

/***/ "./lib/utils/fetcher.ts":
/*!******************************!*\
  !*** ./lib/utils/fetcher.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Fetcher; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


const updateOptions = () => {
  if (true) return {};
  if (!window.localStorage.user) return {};
  if (Object.keys(window.localStorage.user).length === 0) return {};
  const user = JSON.parse(window.localStorage.user);

  if (!!user.token) {
    return {
      headers: {
        Authorization: `Token ${user.token}`
      }
    };
  }
};

function Fetcher(isFallback = false) {
  return async url => {
    if (!isFallback) {
      const {
        data
      } = await axios__WEBPACK_IMPORTED_MODULE_0___default().get(url, updateOptions());
      return data;
    }
  };
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_article_ArticleList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/article/ArticleList */ "./components/article/ArticleList.tsx");
/* harmony import */ var components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/common/Maybe */ "./components/common/Maybe.tsx");
/* harmony import */ var components_home_Tags__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/home/Tags */ "./components/home/Tags.tsx");
/* harmony import */ var components_home_TabList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/home/TabList */ "./components/home/TabList.tsx");
/* harmony import */ var lib_utils_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/utils/constant */ "./lib/utils/constant.ts");
/* harmony import */ var lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lib/utils/getLoggedInUser */ "./lib/utils/getLoggedInUser.ts");


var _jsxFileName = "C:\\w\\www\\armchair\\bitcoinBuyer11-ourDailyTech.net\\server\\pages\\index.tsx";









const IndexPage = () => {
  const loggedInUser = (0,lib_utils_getLoggedInUser__WEBPACK_IMPORTED_MODULE_8__.default)();
  const [tab, setTab] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(loggedInUser ? 'feed' : 'global');
  const [tag, setTag] = react__WEBPACK_IMPORTED_MODULE_2___default().useState();
  react__WEBPACK_IMPORTED_MODULE_2___default().useEffect(() => {
    setTab(loggedInUser ? 'feed' : 'global');
  }, [loggedInUser]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: lib_utils_constant__WEBPACK_IMPORTED_MODULE_7__.APP_NAME
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Next.js + SWR codebase containing realworld examples (CRUD, auth, advanced patterns, etc) that adheres to the realworld spec and API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "home-page",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_common_Maybe__WEBPACK_IMPORTED_MODULE_4__.default, {
        test: !loggedInUser,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "banner",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "container",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: "logo-font",
              children: lib_utils_constant__WEBPACK_IMPORTED_MODULE_7__.APP_NAME.toLowerCase()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
              children: "A place to share your knowledge."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "container page",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "row",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-9",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "feed-toggle",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_home_TabList__WEBPACK_IMPORTED_MODULE_6__.default, {
                tab: tab,
                setTab: setTab,
                tag: tag
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_article_ArticleList__WEBPACK_IMPORTED_MODULE_3__.default, {
              what: tab,
              tag: tag
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "col-md-3",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "sidebar",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: "Popular Tags"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 17
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_home_Tags__WEBPACK_IMPORTED_MODULE_5__.default, {
                setTab: setTab,
                setTag: setTag
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_common_CustomImage_tsx-components_common_CustomLink_tsx-components_common_Maybe_ts-e510a1"], function() { return __webpack_exec__("./pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2FydGljbGUvQXJ0aWNsZUxpc3QudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2NvbXBvbmVudHMvYXJ0aWNsZS9BcnRpY2xlUHJldmlldy50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9jb21tb24vRXJyb3JNZXNzYWdlLnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9GYXZvcml0ZUFydGljbGVCdXR0b24udHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2NvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdTcGlubmVyLnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2NvbW1vbi9QYWdpbmF0aW9uLnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvLi9jb21wb25lbnRzL2hvbWUvVGFiTGlzdC50c3giLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlLy4vY29tcG9uZW50cy9ob21lL1RhZ3MudHN4Iiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9jYWxjdWxhdGVQYWdpbmF0aW9uLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9kYXRlLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL2xpYi91dGlscy9mZXRjaGVyLnRzIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS8uL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9jb25kdWl0LW5vZGUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2NvbmR1aXQtbm9kZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vY29uZHVpdC1ub2RlL2V4dGVybmFsIFwic3dyXCIiXSwibmFtZXMiOlsiQXJ0aWNsZUxpc3QiLCJwcm9wcyIsInBhZ2UiLCJ1c2VQYWdlU3RhdGUiLCJwYWdlQ291bnQiLCJ1c2VQYWdlQ291bnRTdGF0ZSIsInNldFBhZ2VDb3VudCIsInVzZVBhZ2VDb3VudERpc3BhdGNoIiwibGFzdEluZGV4IiwiTWF0aCIsImNlaWwiLCJERUZBVUxUX0xJTUlUIiwicm91dGVyIiwidXNlUm91dGVyIiwiYXNQYXRoIiwicGF0aG5hbWUiLCJxdWVyeSIsImZhdm9yaXRlIiwiZm9sbG93IiwidGFnIiwicGlkIiwiZmV0Y2hVUkwiLCJ3aGF0IiwiU0VSVkVSX0JBU0VfVVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU3RyaW5nIiwiRXJyb3IiLCJkYXRhIiwiZXJyb3IiLCJ1c2VTV1IiLCJmZXRjaGVyIiwiYXJ0aWNsZXMiLCJhcnRpY2xlc0NvdW50IiwiUmVhY3QiLCJmYXZvcml0ZWQiLCJzZXRGYXZvcml0ZWQiLCJmYXZvcml0ZXNDb3VudCIsInNldEZhdm9yaXRlc0NvdW50IiwiaSIsImxlbmd0aCIsIm1hcCIsImFydGljbGUiLCJzbHVnIiwiQXJ0aWNsZVByZXZpZXciLCJzZXRQYWdlIiwidXNlUGFnZURpc3BhdGNoIiwicHJldmlldyIsImhvdmVyIiwic2V0SG92ZXIiLCJjdXJyZW50SW5kZXgiLCJzZXRDdXJyZW50SW5kZXgiLCJhdXRob3IiLCJ1c2VybmFtZSIsImltYWdlIiwiZm9ybWF0RGF0ZSIsImNyZWF0ZWRBdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0YWdMaXN0IiwiaW5kZXgiLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwiRXJyb3JNZXNzYWdlIiwibWVzc2FnZSIsIkZBVk9SSVRFRF9DTEFTUyIsIk5PVF9GQVZPUklURURfQ0xBU1MiLCJGYXZvcml0ZUFydGljbGVCdXR0b25Db250ZXh0IiwidW5kZWZpbmVkIiwiRmF2b3JpdGVBcnRpY2xlQnV0dG9uIiwibG9nZ2VkSW5Vc2VyIiwiZ2V0TG9nZ2VkSW5Vc2VyIiwiYnV0dG9uVGV4dCIsInNob3dUZXh0IiwiaGFuZGxlQ2xpY2tGYXZvcml0ZSIsIlJvdXRlciIsImF4aW9zIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImNvdW50IiwiTG9hZGluZ1NwaW5uZXIiLCJQYWdpbmF0aW9uSXRlbSIsIm5ld1Byb3BzIiwiT2JqZWN0IiwiYXNzaWduIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJQYWdpbmF0aW9uIiwidG90YWwiLCJsaW1pdCIsImN1cnJlbnRQYWdlIiwiZmlyc3RQYWdlIiwibGFzdFBhZ2UiLCJoYXNQcmV2aW91c1BhZ2UiLCJoYXNOZXh0UGFnZSIsImdldFBhZ2VJbmZvIiwicGFnZXMiLCJnZXRSYW5nZSIsImhhbmRsZUNsaWNrIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiaGFuZGxlRmlyc3RDbGljayIsImhhbmRsZVByZXZDbGljayIsImhhbmRsZU5leHRDbGljayIsImhhbmRsZUxhc3RDbGljayIsImlzQ3VycmVudCIsInRvU3RyaW5nIiwiVGFiTGlzdCIsInRhYiIsInNldFRhYiIsIlRhZ3MiLCJzZXRUYWciLCJ0YWdzIiwic3RhcnQiLCJlbmQiLCJBcnJheSIsIl8iLCJ0b3RhbFBhZ2VzIiwiZmxvb3IiLCJtYXgiLCJtaW4iLCJwcmV2aW91c1BhZ2UiLCJuZXh0UGFnZSIsImRhdGVTdHJpbmciLCJkYXRlIiwiRGF0ZSIsIm1vbnRoIiwidG9Mb2NhbGVTdHJpbmciLCJnZXREYXRlIiwiZ2V0RnVsbFllYXIiLCJ1cGRhdGVPcHRpb25zIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwidXNlciIsImtleXMiLCJKU09OIiwicGFyc2UiLCJGZXRjaGVyIiwiaXNGYWxsYmFjayIsInVybCIsIkluZGV4UGFnZSIsIkFQUF9OQU1FIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBOztBQUVBLE1BQU1BLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQzdCLFFBQU1DLElBQUksR0FBR0MscUVBQVksRUFBekI7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLGdGQUFpQixFQUFuQztBQUNBLFFBQU1DLFlBQVksR0FBR0MsbUZBQW9CLEVBQXpDO0FBQ0EsUUFBTUMsU0FBUyxHQUNiSixTQUFTLEdBQUcsR0FBWixHQUFrQkssSUFBSSxDQUFDQyxJQUFMLENBQVVOLFNBQVMsR0FBR08sOERBQXRCLENBQWxCLEdBQXlERixJQUFJLENBQUNDLElBQUwsQ0FBVU4sU0FBUyxHQUFHTyw4REFBdEIsSUFBdUMsQ0FEbEc7QUFFQSxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFlBQVY7QUFBb0JDO0FBQXBCLE1BQThCSixNQUFwQztBQUNBLFFBQU07QUFBRUssWUFBRjtBQUFZQyxVQUFaO0FBQW9CQyxPQUFwQjtBQUF5QkM7QUFBekIsTUFBaUNKLEtBQXZDOztBQUNBLE1BQUlLLFFBQVEsR0FBRyxDQUFDLE1BQU07QUFDcEIsWUFBUXBCLEtBQUssQ0FBQ3FCLElBQWQ7QUFDRSxXQUFLLFdBQUw7QUFDRSxlQUFRLEdBQUVDLGdFQUFnQixtQkFBa0JaLDhEQUFjLGNBQWFhLGtCQUFrQixDQUN2RkMsTUFBTSxDQUFDTCxHQUFELENBRGlGLENBRXZGLFdBQVVsQixJQUFJLEdBQUdTLDhEQUFjLEVBRmpDOztBQUdGLFdBQUssVUFBTDtBQUNFLGVBQVEsR0FBRVksZ0VBQWdCLG1CQUFrQlosOERBQWMsV0FBVWEsa0JBQWtCLENBQ3BGQyxNQUFNLENBQUNMLEdBQUQsQ0FEOEUsQ0FFcEYsV0FBVWxCLElBQUksR0FBR1MsOERBQWMsRUFGakM7O0FBR0YsV0FBSyxLQUFMO0FBQ0UsZUFBUSxHQUFFWSxnRUFBZ0IsbUJBQWtCWiw4REFBYyxRQUFPYSxrQkFBa0IsQ0FBQ3ZCLEtBQUssQ0FBQ2tCLEdBQVAsQ0FBWSxXQUM3RmpCLElBQUksR0FBR1MsOERBQ1IsRUFGRDs7QUFHRixXQUFLLE1BQUw7QUFDRSxlQUFRLEdBQUVZLGdFQUFnQix3QkFBdUJaLDhEQUFjLFdBQzdEVCxJQUFJLEdBQUdTLDhEQUNSLEVBRkQ7O0FBR0YsV0FBSyxRQUFMO0FBQ0UsZUFBUSxHQUFFWSxnRUFBZ0IsbUJBQWtCWiw4REFBYyxXQUFVVCxJQUFJLEdBQUdTLDhEQUFjLEVBQXpGOztBQUNGO0FBQ0UsY0FBTSxJQUFJZSxLQUFKLENBQVcsbUJBQWtCekIsS0FBSyxDQUFDcUIsSUFBSyxFQUF4QyxDQUFOO0FBcEJKO0FBc0JELEdBdkJjLEdBQWY7O0FBd0JBLFFBQU07QUFBRUssUUFBRjtBQUFRQztBQUFSLE1BQWtCQywwQ0FBTSxDQUFDUixRQUFELEVBQVdTLDJEQUFPLEVBQWxCLENBQTlCO0FBQ0EsUUFBTTtBQUFFQyxZQUFGO0FBQVlDO0FBQVosTUFBOEJMLElBQUksSUFBSTtBQUMxQ0ksWUFBUSxFQUFFLEVBRGdDO0FBRTFDQyxpQkFBYSxFQUFFO0FBRjJCLEdBQTVDO0FBSUFDLHdEQUFBLENBQWdCLE1BQU07QUFDcEIzQixnQkFBWSxDQUFDMEIsYUFBRCxDQUFaO0FBQ0QsR0FGRCxFQUVHLENBQUNBLGFBQUQsQ0FGSCxFQXRDNkIsQ0EwQzdCOztBQUNBLFFBQU1FLFNBQVMsR0FBRyxFQUFsQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxFQUFyQjtBQUNBLFFBQU1DLGNBQWMsR0FBRyxFQUF2QjtBQUNBLFFBQU1DLGlCQUFpQixHQUFHLEVBQTFCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzNCLDhEQUFwQixFQUFtQzJCLENBQUMsRUFBcEMsRUFBd0M7QUFDdEMsS0FBQ0osU0FBUyxDQUFDSSxDQUFELENBQVYsRUFBZUgsWUFBWSxDQUFDRyxDQUFELENBQTNCLElBQWtDTCxxREFBQSxDQUFlLEtBQWYsQ0FBbEM7QUFDQSxLQUFDRyxjQUFjLENBQUNFLENBQUQsQ0FBZixFQUFvQkQsaUJBQWlCLENBQUNDLENBQUQsQ0FBckMsSUFBNENMLHFEQUFBLENBQWUsQ0FBZixDQUE1QztBQUNEOztBQUNEQSx3REFBQSxDQUFnQixNQUFNO0FBQ3BCLFNBQUssSUFBSUssQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1AsUUFBUSxDQUFDUSxNQUE3QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUEwQztBQUN4Q0gsa0JBQVksQ0FBQ0csQ0FBRCxDQUFaLENBQWdCUCxRQUFRLENBQUNPLENBQUQsQ0FBUixDQUFZSixTQUE1QjtBQUNBRyx1QkFBaUIsQ0FBQ0MsQ0FBRCxDQUFqQixDQUFxQlAsUUFBUSxDQUFDTyxDQUFELENBQVIsQ0FBWUYsY0FBakM7QUFDRDtBQUNGLEdBTEQsRUFLRyxDQUFDTCxRQUFELENBTEg7QUFPQSxNQUFJSCxLQUFKLEVBQVcsb0JBQU8sOERBQUMsbUVBQUQ7QUFBYyxXQUFPLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsb0JBQU87QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDs7QUFDWCxNQUFJLENBQUFJLFFBQVEsU0FBUixJQUFBQSxRQUFRLFdBQVIsWUFBQUEsUUFBUSxDQUFFUSxNQUFWLE1BQXFCLENBQXpCLEVBQTRCO0FBQzFCLHdCQUFRO0FBQUssZUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFSO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBQSxlQUNHUixRQURILGFBQ0dBLFFBREgsdUJBQ0dBLFFBQVEsQ0FBRVMsR0FBVixDQUFjLENBQUNDLE9BQUQsRUFBVUgsQ0FBVixLQUFnQjtBQUM3QiwwQkFDRSw4REFBQywwR0FBRDtBQUEwRCxhQUFLLEVBQUU7QUFDL0RKLG1CQUFTLEVBQUVBLFNBQVMsQ0FBQ0ksQ0FBRCxDQUQyQztBQUUvREgsc0JBQVksRUFBRUEsWUFBWSxDQUFDRyxDQUFELENBRnFDO0FBRy9ERix3QkFBYyxFQUFFQSxjQUFjLENBQUNFLENBQUQsQ0FIaUM7QUFJL0RELDJCQUFpQixFQUFFQSxpQkFBaUIsQ0FBQ0MsQ0FBRDtBQUoyQixTQUFqRTtBQUFBLCtCQU1FLDhEQUFDLHNFQUFEO0FBQW1DLGlCQUFPLEVBQUVHO0FBQTVDLFdBQXFCQSxPQUFPLENBQUNDLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORixTQUE0Q0QsT0FBTyxDQUFDQyxJQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBVUQsS0FYQSxDQURILGVBYUUsOERBQUMsNERBQUQ7QUFBTyxVQUFJLEVBQUVWLGFBQWEsSUFBSUEsYUFBYSxHQUFHckIsOERBQTlDO0FBQUEsNkJBQ0UsOERBQUMsaUVBQUQ7QUFDRSxhQUFLLEVBQUVQLFNBRFQ7QUFFRSxhQUFLLEVBQUVPLDhEQUZUO0FBR0UsaUJBQVMsRUFBRSxFQUhiO0FBSUUsbUJBQVcsRUFBRVQsSUFKZjtBQUtFLGlCQUFTLEVBQUVNLFNBTGI7QUFNRSxnQkFBUSxFQUFFYTtBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGO0FBQUEsa0JBREY7QUEwQkQsQ0F6RkQ7O0FBMkZBLCtEQUFlckIsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU0yQyxjQUFjLEdBQUcsQ0FBQztBQUFFRjtBQUFGLENBQUQsS0FBaUI7QUFDdEMsUUFBTUcsT0FBTyxHQUFHQyx3RUFBZSxFQUEvQjtBQUNBLFFBQU1DLE9BQU8sR0FBR0wsT0FBaEI7QUFDQSxRQUFNLENBQUNNLEtBQUQsRUFBUUMsUUFBUixJQUFvQmYscURBQUEsQ0FBZSxLQUFmLENBQTFCO0FBQ0EsUUFBTSxDQUFDZ0IsWUFBRCxFQUFlQyxlQUFmLElBQWtDakIscURBQUEsQ0FBZSxDQUFDLENBQWhCLENBQXhDO0FBQ0EsTUFBSSxDQUFDUSxPQUFMLEVBQWM7QUFDZCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQSw4QkFDRSw4REFBQyxpRUFBRDtBQUNFLFlBQUksRUFBRyxZQUFXSyxPQUFPLENBQUNLLE1BQVIsQ0FBZUMsUUFBUyxFQUQ1QztBQUFBLCtCQUdFLDhEQUFDLGtFQUFEO0FBQ0UsYUFBRyxFQUFFTixPQUFPLENBQUNLLE1BQVIsQ0FBZUUsS0FEdEI7QUFFRSxhQUFHLEVBQUM7QUFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsZ0NBQ0UsOERBQUMsaUVBQUQ7QUFDRSxjQUFJLEVBQUcsWUFBV1AsT0FBTyxDQUFDSyxNQUFSLENBQWVDLFFBQVMsRUFENUM7QUFFRSxtQkFBUyxFQUFDLFFBRlo7QUFBQSxpQ0FJRTtBQUFNLG1CQUFPLEVBQUUsTUFBTVIsT0FBTyxDQUFDLENBQUQsQ0FBNUI7QUFBQSxzQkFBa0NFLE9BQU8sQ0FBQ0ssTUFBUixDQUFlQztBQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQU0sbUJBQVMsRUFBQyxNQUFoQjtBQUFBLG9CQUNHRSwwREFBVSxDQUFDUixPQUFPLENBQUNTLFNBQVQ7QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFURixlQW9CRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNFLDhEQUFDLDRFQUFEO0FBQ0UsbUJBQVMsRUFBRVQsT0FBTyxDQUFDWixTQURyQjtBQUVFLHdCQUFjLEVBQUVZLE9BQU8sQ0FBQ1YsY0FGMUI7QUFHRSxjQUFJLEVBQUVVLE9BQU8sQ0FBQ0o7QUFIaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQTRCRSw4REFBQyxpRUFBRDtBQUNFLFVBQUksRUFBRyxZQUFXSSxPQUFPLENBQUNKLElBQUssRUFEakM7QUFFRSxlQUFTLEVBQUMsY0FGWjtBQUFBLDhCQUlFO0FBQUEsa0JBQUtJLE9BQU8sQ0FBQ1U7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBQSxrQkFBSVYsT0FBTyxDQUFDVztBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORixlQU9FO0FBQUksaUJBQVMsRUFBQyxVQUFkO0FBQUEsa0JBQ0dYLE9BQU8sQ0FBQ1ksT0FBUixDQUFnQmxCLEdBQWhCLENBQW9CLENBQUNyQixHQUFELEVBQU13QyxLQUFOLEtBQWdCO0FBQ25DLDhCQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBRyxTQUFReEMsR0FBSSxFQUF6QjtBQUFBLG1DQUNFO0FBQ0UsdUJBQVMsRUFBQyxrQ0FEWjtBQUVFLHFCQUFPLEVBQUd5QyxDQUFELElBQU9BLENBQUMsQ0FBQ0MsZUFBRixFQUZsQjtBQUdFLHlCQUFXLEVBQUUsTUFBTTtBQUNqQmIsd0JBQVEsQ0FBQyxJQUFELENBQVI7QUFDQUUsK0JBQWUsQ0FBQ1MsS0FBRCxDQUFmO0FBQ0QsZUFOSDtBQU9FLDBCQUFZLEVBQUUsTUFBTTtBQUNsQlgsd0JBQVEsQ0FBQyxLQUFELENBQVI7QUFDQUUsK0JBQWUsQ0FBQyxDQUFDLENBQUYsQ0FBZjtBQUNELGVBVkg7QUFBQSx3QkFZRy9CO0FBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLGFBQWlDd0MsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERjtBQWtCRCxTQW5CQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTVCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTZERCxDQW5FRDs7QUFxRUEsK0RBQWVoQixjQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTs7QUFNQSxNQUFNbUIsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELGtCQUNuQjtBQUFLLFdBQVMsRUFBQyxlQUFmO0FBQUEseUJBQ0U7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSxjQUEwQ0E7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFNQSwrREFBZUQsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUEsTUFBTUUsZUFBZSxHQUFHLHdCQUF4QjtBQUNBLE1BQU1DLG1CQUFtQixHQUFHLGdDQUE1QjtBQUVPLE1BQU1DLDRCQUE0QixnQkFBR2pDLDBEQUFBLENBQW9Ca0MsU0FBcEIsQ0FBckM7O0FBRVAsTUFBTUMscUJBQXFCLEdBQUluRSxLQUFELElBQVc7QUFDdkMsUUFBTW9FLFlBQVksR0FBR0Msa0VBQWUsRUFBcEM7QUFDQSxRQUFNO0FBQUNwQyxhQUFEO0FBQVlDLGdCQUFaO0FBQTBCQyxrQkFBMUI7QUFBMENDO0FBQTFDLE1BQStESix1REFBQSxDQUFpQmlDLDRCQUFqQixDQUFyRTtBQUNBLE1BQUlLLFVBQUo7O0FBQ0EsTUFBSXRFLEtBQUssQ0FBQ3VFLFFBQVYsRUFBb0I7QUFDbEIsUUFBSXRDLFNBQUosRUFBZTtBQUNicUMsZ0JBQVUsR0FBRyxZQUFiO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLGdCQUFVLEdBQUcsVUFBYjtBQUNEOztBQUNEQSxjQUFVLEdBQUcsTUFBTUEsVUFBTixHQUFtQixXQUFoQztBQUNELEdBUEQsTUFPTztBQUNMQSxjQUFVLEdBQUcsRUFBYjtBQUNEOztBQUNELFFBQU1FLG1CQUFtQixHQUFHLFlBQVk7QUFDdEMsUUFBSSxDQUFDSixZQUFMLEVBQW1CO0FBQ2pCSyw2REFBQSxDQUFhLGFBQWI7QUFDQTtBQUNEOztBQUNEdkMsZ0JBQVksQ0FBQyxDQUFDRCxTQUFGLENBQVo7QUFDQUcscUJBQWlCLENBQUNELGNBQWMsSUFBSUYsU0FBUyxHQUFHLENBQUUsQ0FBTCxHQUFTLENBQXRCLENBQWYsQ0FBakI7O0FBQ0EsUUFBSTtBQUNGLFVBQUlBLFNBQUosRUFBZTtBQUNiLGNBQU15QyxtREFBQSxDQUFjLEdBQUVwRCwrREFBZ0IsYUFBWXRCLEtBQUssQ0FBQ3lDLElBQUssV0FBdkQsRUFBbUU7QUFDdkVrQyxpQkFBTyxFQUFFO0FBQ1BDLHlCQUFhLEVBQUcsU0FBUVIsWUFBVCxhQUFTQSxZQUFULHVCQUFTQSxZQUFZLENBQUVTLEtBQU07QUFEckM7QUFEOEQsU0FBbkUsQ0FBTjtBQUtELE9BTkQsTUFNTztBQUNMLGNBQU1ILGlEQUFBLENBQ0gsR0FBRXBELCtEQUFnQixhQUFZdEIsS0FBSyxDQUFDeUMsSUFBSyxXQUR0QyxFQUVKLEVBRkksRUFHSjtBQUNFa0MsaUJBQU8sRUFBRTtBQUNQQyx5QkFBYSxFQUFHLFNBQVFSLFlBQVQsYUFBU0EsWUFBVCx1QkFBU0EsWUFBWSxDQUFFUyxLQUFNO0FBRHJDO0FBRFgsU0FISSxDQUFOO0FBU0Q7QUFDRixLQWxCRCxDQWtCRSxPQUFPbEQsS0FBUCxFQUFjO0FBQ2RPLGtCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBQ0FHLHVCQUFpQixDQUFDRCxjQUFjLElBQUlGLFNBQVMsR0FBRyxDQUFILEdBQU8sQ0FBQyxDQUFyQixDQUFmLENBQWpCO0FBQ0Q7QUFDRixHQTdCRDs7QUE4QkEsTUFBSTZDLEtBQUssR0FBRzNDLGNBQVo7O0FBQ0EsTUFBSW5DLEtBQUssQ0FBQ3VFLFFBQVYsRUFBb0I7QUFDbEJPLFNBQUssZ0JBQUk7QUFBTSxlQUFTLEVBQUMsU0FBaEI7QUFBQSxzQkFBNEJBLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBVDtBQUNEOztBQUNELHNCQUNFO0FBQ0UsYUFBUyxFQUNQN0MsU0FBUyxHQUFHOEIsZUFBSCxHQUFxQkMsbUJBRmxDO0FBSUUsV0FBTyxFQUFFLE1BQU1RLG1CQUFtQixFQUpwQztBQUFBLDRCQU1FO0FBQUcsZUFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORixFQU04QnhFLEtBQUssQ0FBQ3VFLFFBQU4sR0FBaUIsR0FBakIsR0FBdUIsRUFOckQsRUFNeURELFVBTnpELEVBT0csR0FQSCxFQU9RUSxLQVBSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBV0QsQ0EzREQ7O0FBNkRBLCtEQUFlWCxxQkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7O0FBRUEsTUFBTVksY0FBYyxHQUFHLG1CQUFNO0FBQUssV0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUE3Qjs7QUFFQSwrREFBZUEsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQVdBLFNBQVNDLGNBQVQsQ0FBd0JoRixLQUF4QixFQUErQjtBQUM3QixRQUFNaUYsUUFBUSxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCbkYsS0FBbEIsQ0FBakI7QUFDQSxTQUFPaUYsUUFBUSxDQUFDRyxRQUFoQjtBQUNBLFNBQU9ILFFBQVEsQ0FBQ0ksU0FBaEI7QUFDQSxNQUFJQSxTQUFKOztBQUNBLE1BQUlyRixLQUFLLENBQUNxRixTQUFWLEVBQXFCO0FBQ25CQSxhQUFTLEdBQUcsTUFBTXJGLEtBQUssQ0FBQ3FGLFNBQXhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xBLGFBQVMsR0FBRyxFQUFaO0FBQ0Q7O0FBQ0Qsc0JBQ0U7QUFBSSxhQUFTLEVBQUcsWUFBV0EsU0FBVTtBQUFyQyxLQUE0Q0osUUFBNUM7QUFBQSwyQkFDRTtBQUFHLGVBQVMsRUFBQyxXQUFiO0FBQUEsZ0JBQTBCakYsS0FBSyxDQUFDb0Y7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQUtEOztBQUVELE1BQU1FLFVBQVUsR0FBRyxDQUFDO0FBQ2xCQyxPQURrQjtBQUVsQkMsT0FGa0I7QUFHbEJyRixXQUhrQjtBQUlsQnNGLGFBSmtCO0FBS2xCbEYsV0FMa0I7QUFNbEJhO0FBTmtCLENBQUQsS0FPSTtBQUNyQixRQUFNbkIsSUFBSSxHQUFHQyxxRUFBWSxFQUF6QjtBQUNBLFFBQU15QyxPQUFPLEdBQUdDLHdFQUFlLEVBQS9CO0FBRUEsUUFBTTtBQUFFOEMsYUFBRjtBQUFhQyxZQUFiO0FBQXVCQyxtQkFBdkI7QUFBd0NDO0FBQXhDLE1BQXdEQywwRUFBVyxDQUFDO0FBQ3hFTixTQUR3RTtBQUV4RXJGLGFBRndFO0FBR3hFb0YsU0FId0U7QUFJeEV0RixRQUFJLEVBQUV3RjtBQUprRSxHQUFELENBQXpFO0FBTUEsUUFBTU0sS0FBSyxHQUFHUixLQUFLLEdBQUcsQ0FBUixHQUFZUyx1RUFBUSxDQUFDTixTQUFELEVBQVlDLFFBQVosQ0FBcEIsR0FBNEMsRUFBMUQ7QUFFQSxRQUFNTSxXQUFXLEdBQUdqRSx3REFBQSxDQUNsQixDQUFDMkIsQ0FBRCxFQUFpREQsS0FBakQsS0FBbUU7QUFDakVDLEtBQUMsQ0FBQ3VDLGNBQUY7QUFDQXZELFdBQU8sQ0FBQ2UsS0FBRCxDQUFQO0FBQ0F5QyxnREFBTyxDQUFDL0UsUUFBRCxDQUFQO0FBQ0QsR0FMaUIsRUFNbEIsRUFOa0IsQ0FBcEI7QUFTQSxRQUFNZ0YsZ0JBQWdCLEdBQUdwRSx3REFBQSxDQUN0QjJCLENBQUQsSUFBb0Q7QUFDbERBLEtBQUMsQ0FBQ3VDLGNBQUY7QUFDQXZELFdBQU8sQ0FBQyxDQUFELENBQVA7QUFDQXdELGdEQUFPLENBQUMvRSxRQUFELENBQVA7QUFDRCxHQUxzQixFQU12QixFQU51QixDQUF6QjtBQVNBLFFBQU1pRixlQUFlLEdBQUdyRSx3REFBQSxDQUNyQjJCLENBQUQsSUFBb0Q7QUFDbERBLEtBQUMsQ0FBQ3VDLGNBQUY7QUFDQXZELFdBQU8sQ0FBQzFDLElBQUksR0FBRyxDQUFSLENBQVA7QUFDQWtHLGdEQUFPLENBQUMvRSxRQUFELENBQVA7QUFDRCxHQUxxQixFQU10QixFQU5zQixDQUF4QjtBQVNBLFFBQU1rRixlQUFlLEdBQUd0RSx3REFBQSxDQUNyQjJCLENBQUQsSUFBb0Q7QUFDbERBLEtBQUMsQ0FBQ3VDLGNBQUY7QUFDQXZELFdBQU8sQ0FBQzFDLElBQUksR0FBRyxDQUFSLENBQVA7QUFDQWtHLGdEQUFPLENBQUMvRSxRQUFELENBQVA7QUFDRCxHQUxxQixFQU10QixFQU5zQixDQUF4QjtBQVNBLFFBQU1tRixlQUFlLEdBQUd2RSx3REFBQSxDQUNyQjJCLENBQUQsSUFBb0Q7QUFDbERBLEtBQUMsQ0FBQ3VDLGNBQUY7QUFDQXZELFdBQU8sQ0FBQ3BDLFNBQUQsQ0FBUDtBQUNBNEYsZ0RBQU8sQ0FBQy9FLFFBQUQsQ0FBUDtBQUNELEdBTHFCLEVBTXRCLEVBTnNCLENBQXhCO0FBU0Esc0JBQ0U7QUFBQSwyQkFDRTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUEsOEJBQ0UsOERBQUMsY0FBRDtBQUFnQixlQUFPLEVBQUVnRixnQkFBekI7QUFBQSxrQkFBNkM7QUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLDhEQUFDLDJDQUFEO0FBQU8sWUFBSSxFQUFFUixlQUFiO0FBQUEsK0JBQ0UsOERBQUMsY0FBRDtBQUFnQixpQkFBTyxFQUFFUyxlQUF6QjtBQUFBLG9CQUE0QztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixFQUtHTixLQUFLLENBQUN4RCxHQUFOLENBQVd0QyxJQUFELElBQVU7QUFDbkIsY0FBTXVHLFNBQVMsR0FBRyxDQUFDZixXQUFELEdBQWV4RixJQUFJLEtBQUssQ0FBeEIsR0FBNEJBLElBQUksS0FBS3dGLFdBQXZEO0FBQ0EsNEJBQ0UsOERBQUMsY0FBRDtBQUVFLG1CQUFTLEVBQUVlLFNBQVMsSUFBSSxRQUYxQjtBQUdFLGlCQUFPLEVBQUc3QyxDQUFELElBQU9zQyxXQUFXLENBQUN0QyxDQUFELEVBQUkxRCxJQUFKLENBSDdCO0FBQUEsb0JBS0dBLElBQUksR0FBRztBQUxWLFdBQ09BLElBQUksQ0FBQ3dHLFFBQUwsRUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGO0FBU0QsT0FYQSxDQUxILGVBaUJFLDhEQUFDLDJDQUFEO0FBQU8sWUFBSSxFQUFFWixXQUFiO0FBQUEsK0JBQ0UsOERBQUMsY0FBRDtBQUFnQixpQkFBTyxFQUFFUyxlQUF6QjtBQUFBLG9CQUE0QztBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFqQkYsZUFvQkUsOERBQUMsY0FBRDtBQUFnQixlQUFPLEVBQUVDLGVBQXpCO0FBQUEsa0JBQTRDO0FBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTBCRCxDQTFGRDs7QUE0RkEsK0RBQWVqQixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNb0IsT0FBTyxHQUFHLENBQUM7QUFBQ0MsS0FBRDtBQUFNQyxRQUFOO0FBQWMxRjtBQUFkLENBQUQsS0FBd0I7QUFDdEMsUUFBTWtELFlBQVksR0FBR0Msa0VBQWUsRUFBcEM7QUFDQSxzQkFDRTtBQUFJLGFBQVMsRUFBQyw4QkFBZDtBQUFBLDRCQUNFLDhEQUFDLDREQUFEO0FBQU8sVUFBSSxFQUFFRCxZQUFiO0FBQUEsNkJBQ0U7QUFBSSxpQkFBUyxFQUFDLFVBQWQ7QUFBQSwrQkFDRSw4REFBQyxpRUFBRDtBQUNFLG1CQUFTLEVBQUcsV0FBVXVDLEdBQUcsS0FBSyxNQUFSLEdBQWlCLFNBQWpCLEdBQTZCLEVBQUcsRUFEeEQ7QUFFRSxjQUFJLEVBQUMsR0FGUDtBQUdFLGlCQUFPLEVBQUUsTUFBTTtBQUFDQyxrQkFBTSxDQUFDLE1BQUQsQ0FBTjtBQUFlLFdBSGpDO0FBSUUsaUJBQU8sTUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBYUU7QUFBSSxlQUFTLEVBQUMsVUFBZDtBQUFBLDZCQUNFLDhEQUFDLGlFQUFEO0FBQ0UsaUJBQVMsRUFBRyxXQUFVRCxHQUFHLEtBQUssUUFBUixHQUFtQixTQUFuQixHQUErQixFQUFHLEVBRDFEO0FBRUUsWUFBSSxFQUFDLEdBRlA7QUFHRSxlQUFPLE1BSFQ7QUFJRSxlQUFPLEVBQUUsTUFBTTtBQUNiQyxnQkFBTSxDQUFDLFFBQUQsQ0FBTjtBQUNELFNBTkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWJGLGVBeUJFLDhEQUFDLDREQUFEO0FBQU8sVUFBSSxFQUFFRCxHQUFHLElBQUksS0FBcEI7QUFBQSw2QkFDRTtBQUFJLGlCQUFTLEVBQUMsVUFBZDtBQUFBLCtCQUNFLDhEQUFDLGlFQUFEO0FBQ0UsY0FBSSxFQUFHLEdBRFQ7QUFFRSxtQkFBUyxFQUFDLGlCQUZaO0FBR0UsaUJBQU8sTUFIVDtBQUFBLGtDQUtFO0FBQUcscUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsT0FLK0J6RixHQUwvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF1Q0QsQ0F6Q0Q7O0FBMkNBLCtEQUFld0YsT0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1HLElBQUksR0FBRyxDQUFDO0FBQUNELFFBQUQ7QUFBU0U7QUFBVCxDQUFELEtBQXNCO0FBQ2pDLFFBQU1uRSxPQUFPLEdBQUdDLHdFQUFlLEVBQS9CO0FBQ0EsUUFBTXFELFdBQVcsR0FBR2pFLHdEQUFBLENBQWtCLE1BQU1XLE9BQU8sQ0FBQyxDQUFELENBQS9CLEVBQW9DLEVBQXBDLENBQXBCO0FBQ0EsUUFBTTtBQUFFakIsUUFBRjtBQUFRQztBQUFSLE1BQWtCQywwQ0FBTSxDQUFFLEdBQUVOLCtEQUFnQixPQUFwQixFQUE0Qk8sMERBQU8sRUFBbkMsQ0FBOUI7QUFDQSxNQUFJRixLQUFKLEVBQVcsb0JBQU8sOERBQUMsbUVBQUQ7QUFBYyxXQUFPLEVBQUM7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ1gsTUFBSSxDQUFDRCxJQUFMLEVBQVcsb0JBQU8sOERBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ1gsUUFBTTtBQUFFcUY7QUFBRixNQUFXckYsSUFBakI7QUFDQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUEsY0FDR3FGLElBREgsYUFDR0EsSUFESCx1QkFDR0EsSUFBSSxDQUFFeEUsR0FBTixDQUFXckIsR0FBRCxpQkFDVCw4REFBQyxpRUFBRDtBQUVFLFVBQUksRUFBRyxFQUZUO0FBR0UsZUFBUyxFQUFDLHNCQUhaO0FBSUUsYUFBTyxFQUFFLE1BQU07QUFBQzBGLGNBQU0sQ0FBQyxLQUFELENBQU47QUFBZUUsY0FBTSxDQUFDNUYsR0FBRCxDQUFOO0FBQWEsT0FKOUM7QUFBQSw2QkFNRTtBQUFNLGVBQU8sRUFBRStFLFdBQWY7QUFBQSxrQkFBNkIvRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkYsT0FDT0EsR0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBY0QsQ0FyQkQ7O0FBdUJBLCtEQUFlMkYsSUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNPLE1BQU1iLFFBQVEsR0FBRyxDQUFDZ0IsS0FBRCxFQUFRQyxHQUFSLEtBQWdCO0FBQ3RDLFNBQU8sQ0FBQyxHQUFHQyxLQUFLLENBQUNELEdBQUcsR0FBR0QsS0FBTixHQUFjLENBQWYsQ0FBVCxFQUE0QnpFLEdBQTVCLENBQWdDLENBQUM0RSxDQUFELEVBQUk5RSxDQUFKLEtBQVUyRSxLQUFLLEdBQUczRSxDQUFsRCxDQUFQO0FBQ0QsQ0FGTTtBQUlBLE1BQU15RCxXQUFXLEdBQUcsQ0FBQztBQUFFTixPQUFGO0FBQVNyRixXQUFUO0FBQW9Cb0YsT0FBcEI7QUFBMkJ0RjtBQUEzQixDQUFELEtBQXVDO0FBQ2hFLFFBQU1tSCxVQUFVLEdBQUc1RyxJQUFJLENBQUM2RyxLQUFMLENBQVc5QixLQUFLLEdBQUdDLEtBQW5CLENBQW5CO0FBRUEsTUFBSUMsV0FBVyxHQUFHeEYsSUFBbEI7O0FBRUEsTUFBSXdGLFdBQVcsR0FBRzJCLFVBQWxCLEVBQThCO0FBQzVCM0IsZUFBVyxHQUFHMkIsVUFBZDtBQUNEOztBQUVELE1BQUkxQixTQUFTLEdBQUdsRixJQUFJLENBQUM4RyxHQUFMLENBQVMsQ0FBVCxFQUFZN0IsV0FBVyxHQUFHakYsSUFBSSxDQUFDNkcsS0FBTCxDQUFXbEgsU0FBUyxHQUFHLENBQXZCLENBQTFCLENBQWhCO0FBQ0EsTUFBSXdGLFFBQVEsR0FBR25GLElBQUksQ0FBQytHLEdBQUwsQ0FBU0gsVUFBVCxFQUFxQjNCLFdBQVcsR0FBR2pGLElBQUksQ0FBQzZHLEtBQUwsQ0FBV2xILFNBQVMsR0FBRyxDQUF2QixDQUFuQyxDQUFmOztBQUVBLE1BQUl3RixRQUFRLEdBQUdELFNBQVgsR0FBdUIsQ0FBdkIsR0FBMkJ2RixTQUEvQixFQUEwQztBQUN4QyxRQUFJc0YsV0FBVyxHQUFHMkIsVUFBVSxHQUFHLENBQS9CLEVBQWtDO0FBQ2hDekIsY0FBUSxHQUFHbkYsSUFBSSxDQUFDK0csR0FBTCxDQUNUSCxVQURTLEVBRVR6QixRQUFRLElBQUl4RixTQUFTLElBQUl3RixRQUFRLEdBQUdELFNBQWYsQ0FBYixDQUZDLENBQVg7QUFJRCxLQUxELE1BS087QUFDTEEsZUFBUyxHQUFHbEYsSUFBSSxDQUFDOEcsR0FBTCxDQUFTLENBQVQsRUFBWTVCLFNBQVMsSUFBSXZGLFNBQVMsSUFBSXdGLFFBQVEsR0FBR0QsU0FBZixDQUFiLENBQXJCLENBQVo7QUFDRDtBQUNGOztBQUVELE1BQUlDLFFBQVEsR0FBR0QsU0FBWCxHQUF1QixDQUF2QixHQUEyQnZGLFNBQS9CLEVBQTBDO0FBQ3hDLFFBQUlzRixXQUFXLEdBQUcyQixVQUFVLEdBQUcsQ0FBL0IsRUFBa0M7QUFDaEMxQixlQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUF4QjtBQUNELEtBRkQsTUFFTztBQUNMQyxjQUFRLEdBQUdBLFFBQVEsR0FBRyxDQUF0QjtBQUNEO0FBQ0Y7O0FBRUQsUUFBTTZCLFlBQVksR0FBRy9CLFdBQVcsR0FBRyxDQUFuQztBQUNBLFFBQU1nQyxRQUFRLEdBQUdoQyxXQUFXLEdBQUcsQ0FBL0I7QUFDQSxRQUFNRyxlQUFlLEdBQUdILFdBQVcsR0FBRyxDQUF0QztBQUNBLFFBQU1JLFdBQVcsR0FBR0osV0FBVyxHQUFHMkIsVUFBbEM7QUFFQSxTQUFPO0FBQ0wxQixhQURLO0FBRUxDLFlBRks7QUFHTDZCLGdCQUhLO0FBSUxDLFlBSks7QUFLTDdCLG1CQUxLO0FBTUxDLGVBTks7QUFPTHVCO0FBUEssR0FBUDtBQVNELENBN0NNLEM7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLFNBQVMvRCxVQUFULENBQW9CcUUsVUFBcEIsRUFBZ0M7QUFDckMsUUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsVUFBVCxDQUFiO0FBQ0EsUUFBTUcsS0FBSyxHQUFHRixJQUFJLENBQUNHLGNBQUwsQ0FBb0IsU0FBcEIsRUFBK0I7QUFBRUQsU0FBSyxFQUFFO0FBQVQsR0FBL0IsQ0FBZDtBQUNBLFNBQVEsR0FBRUEsS0FBTSxJQUFHRixJQUFJLENBQUNJLE9BQUwsRUFBZSxLQUFJSixJQUFJLENBQUNLLFdBQUwsRUFBbUIsRUFBekQ7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pEOztBQUVBLE1BQU1DLGFBQWEsR0FBRyxNQUFNO0FBQzFCLFlBQW1DLE9BQU8sRUFBUDtBQUNuQyxNQUFJLENBQUNDLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsSUFBekIsRUFBK0IsT0FBTyxFQUFQO0FBQy9CLE1BQUlsRCxNQUFNLENBQUNtRCxJQUFQLENBQVlILE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsSUFBaEMsRUFBc0M5RixNQUF0QyxLQUFpRCxDQUFyRCxFQUF3RCxPQUFPLEVBQVA7QUFDeEQsUUFBTThGLElBQUksR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdMLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsSUFBL0IsQ0FBYjs7QUFDQSxNQUFJLENBQUMsQ0FBQ0EsSUFBSSxDQUFDdkQsS0FBWCxFQUFrQjtBQUNoQixXQUFPO0FBQ0xGLGFBQU8sRUFBRTtBQUNQQyxxQkFBYSxFQUFHLFNBQVF3RCxJQUFJLENBQUN2RCxLQUFNO0FBRDVCO0FBREosS0FBUDtBQUtEO0FBQ0YsQ0FaRDs7QUFjZSxTQUFTMkQsT0FBVCxDQUFpQkMsVUFBVSxHQUFHLEtBQTlCLEVBQXFDO0FBQ2xELFNBQU8sTUFBT0MsR0FBUCxJQUFlO0FBQ3BCLFFBQUksQ0FBQ0QsVUFBTCxFQUFpQjtBQUNmLFlBQU07QUFBRS9HO0FBQUYsVUFBVyxNQUFNZ0QsZ0RBQUEsQ0FBVWdFLEdBQVYsRUFBZVQsYUFBYSxFQUE1QixDQUF2QjtBQUNBLGFBQU92RyxJQUFQO0FBQ0Q7QUFDRixHQUxEO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJEO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTWlILFNBQVMsR0FBRyxNQUFNO0FBQ3RCLFFBQU12RSxZQUFZLEdBQUdDLGtFQUFlLEVBQXBDO0FBQ0EsUUFBTSxDQUFDc0MsR0FBRCxFQUFNQyxNQUFOLElBQWdCNUUscURBQUEsQ0FBZW9DLFlBQVksR0FBRyxNQUFILEdBQVksUUFBdkMsQ0FBdEI7QUFDQSxRQUFNLENBQUNsRCxHQUFELEVBQU00RixNQUFOLElBQWdCOUUscURBQUEsRUFBdEI7QUFDQUEsd0RBQUEsQ0FBZ0IsTUFBTTtBQUNwQjRFLFVBQU0sQ0FBQ3hDLFlBQVksR0FBRyxNQUFILEdBQVksUUFBekIsQ0FBTjtBQUNELEdBRkQsRUFFRyxDQUFDQSxZQUFELENBRkg7QUFHQSxzQkFDRTtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQSxrQkFBUXdFLHdEQUFRQTtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFDRSxZQUFJLEVBQUMsYUFEUDtBQUVFLGVBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBUUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBLDhCQUNFLDhEQUFDLDREQUFEO0FBQU8sWUFBSSxFQUFFLENBQUN4RSxZQUFkO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLFFBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsV0FBZjtBQUFBLG9DQUNFO0FBQUksdUJBQVMsRUFBQyxXQUFkO0FBQUEsd0JBQTJCd0Usb0VBQUE7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBU0U7QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLEtBQWY7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG9DQUNFO0FBQUssdUJBQVMsRUFBQyxhQUFmO0FBQUEscUNBQ0UsOERBQUMsNERBQUQ7QUFBUyxtQkFBRyxFQUFFakMsR0FBZDtBQUFtQixzQkFBTSxFQUFFQyxNQUEzQjtBQUFtQyxtQkFBRyxFQUFFMUY7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSw4REFBQyxtRUFBRDtBQUFhLGtCQUFJLEVBQUV5RixHQUFuQjtBQUF3QixpQkFBRyxFQUFFekY7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFPRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxTQUFmO0FBQUEsc0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRSw4REFBQyx5REFBRDtBQUFNLHNCQUFNLEVBQUUwRixNQUFkO0FBQXNCLHNCQUFNLEVBQUVFO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSRjtBQUFBLGtCQURGO0FBcUNELENBNUNEOztBQThDQSwrREFBZTZCLFNBQWYsRTs7Ozs7Ozs7Ozs7QUN4REEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEsaUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuXHJcbmltcG9ydCBBcnRpY2xlUHJldmlldyBmcm9tIFwiY29tcG9uZW50cy9hcnRpY2xlL0FydGljbGVQcmV2aWV3XCI7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0Vycm9yTWVzc2FnZVwiO1xyXG5pbXBvcnQgeyBGYXZvcml0ZUFydGljbGVCdXR0b25Db250ZXh0IH0gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0Zhdm9yaXRlQXJ0aWNsZUJ1dHRvblwiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCBNYXliZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vTWF5YmVcIjtcclxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL1BhZ2luYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlUGFnZVN0YXRlIH0gZnJvbSBcImxpYi9jb250ZXh0L1BhZ2VDb250ZXh0XCI7XHJcbmltcG9ydCB7XHJcbiAgdXNlUGFnZUNvdW50U3RhdGUsXHJcbiAgdXNlUGFnZUNvdW50RGlzcGF0Y2gsXHJcbn0gZnJvbSBcImxpYi9jb250ZXh0L1BhZ2VDb3VudENvbnRleHRcIjtcclxuaW1wb3J0IHsgU0VSVkVSX0JBU0VfVVJMLCBERUZBVUxUX0xJTUlUIH0gZnJvbSBcImxpYi91dGlscy9jb25zdGFudFwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwibGliL3V0aWxzL2ZldGNoZXJcIjtcclxuXHJcbmNvbnN0IEFydGljbGVMaXN0ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgcGFnZSA9IHVzZVBhZ2VTdGF0ZSgpO1xyXG4gIGNvbnN0IHBhZ2VDb3VudCA9IHVzZVBhZ2VDb3VudFN0YXRlKCk7XHJcbiAgY29uc3Qgc2V0UGFnZUNvdW50ID0gdXNlUGFnZUNvdW50RGlzcGF0Y2goKTtcclxuICBjb25zdCBsYXN0SW5kZXggPVxyXG4gICAgcGFnZUNvdW50ID4gNDgwID8gTWF0aC5jZWlsKHBhZ2VDb3VudCAvIERFRkFVTFRfTElNSVQpIDogTWF0aC5jZWlsKHBhZ2VDb3VudCAvIERFRkFVTFRfTElNSVQpIC0gMTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGFzUGF0aCwgcGF0aG5hbWUsIHF1ZXJ5IH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgeyBmYXZvcml0ZSwgZm9sbG93LCB0YWcsIHBpZCB9ID0gcXVlcnk7XHJcbiAgbGV0IGZldGNoVVJMID0gKCgpID0+IHtcclxuICAgIHN3aXRjaCAocHJvcHMud2hhdCkge1xyXG4gICAgICBjYXNlICdmYXZvcml0ZXMnOlxyXG4gICAgICAgIHJldHVybiBgJHtTRVJWRVJfQkFTRV9VUkx9L2FydGljbGVzP2xpbWl0PSR7REVGQVVMVF9MSU1JVH0mZmF2b3JpdGVkPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxyXG4gICAgICAgICAgU3RyaW5nKHBpZClcclxuICAgICAgICApfSZvZmZzZXQ9JHtwYWdlICogREVGQVVMVF9MSU1JVH1gXHJcbiAgICAgIGNhc2UgJ215LXBvc3RzJzpcclxuICAgICAgICByZXR1cm4gYCR7U0VSVkVSX0JBU0VfVVJMfS9hcnRpY2xlcz9saW1pdD0ke0RFRkFVTFRfTElNSVR9JmF1dGhvcj0ke2VuY29kZVVSSUNvbXBvbmVudChcclxuICAgICAgICAgIFN0cmluZyhwaWQpXHJcbiAgICAgICAgKX0mb2Zmc2V0PSR7cGFnZSAqIERFRkFVTFRfTElNSVR9YDtcclxuICAgICAgY2FzZSAndGFnJzpcclxuICAgICAgICByZXR1cm4gYCR7U0VSVkVSX0JBU0VfVVJMfS9hcnRpY2xlcz9saW1pdD0ke0RFRkFVTFRfTElNSVR9JnRhZz0ke2VuY29kZVVSSUNvbXBvbmVudChwcm9wcy50YWcpfSZvZmZzZXQ9JHtcclxuICAgICAgICAgIHBhZ2UgKiBERUZBVUxUX0xJTUlUXHJcbiAgICAgICAgfWA7XHJcbiAgICAgIGNhc2UgJ2ZlZWQnOlxyXG4gICAgICAgIHJldHVybiBgJHtTRVJWRVJfQkFTRV9VUkx9L2FydGljbGVzL2ZlZWQ/bGltaXQ9JHtERUZBVUxUX0xJTUlUfSZvZmZzZXQ9JHtcclxuICAgICAgICAgIHBhZ2UgKiBERUZBVUxUX0xJTUlUXHJcbiAgICAgICAgfWA7XHJcbiAgICAgIGNhc2UgJ2dsb2JhbCc6XHJcbiAgICAgICAgcmV0dXJuIGAke1NFUlZFUl9CQVNFX1VSTH0vYXJ0aWNsZXM/bGltaXQ9JHtERUZBVUxUX0xJTUlUfSZvZmZzZXQ9JHtwYWdlICogREVGQVVMVF9MSU1JVH1gO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBzZWFyY2g6ICR7cHJvcHMud2hhdH1gKVxyXG4gICAgfVxyXG4gIH0pKClcclxuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoZmV0Y2hVUkwsIGZldGNoZXIoKSk7XHJcbiAgY29uc3QgeyBhcnRpY2xlcywgYXJ0aWNsZXNDb3VudCB9ID0gZGF0YSB8fCB7XHJcbiAgICBhcnRpY2xlczogW10sXHJcbiAgICBhcnRpY2xlc0NvdW50OiAwLFxyXG4gIH07XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFBhZ2VDb3VudChhcnRpY2xlc0NvdW50KTtcclxuICB9LCBbYXJ0aWNsZXNDb3VudF0pO1xyXG5cclxuICAvLyBGYXZvcml0ZSBhcnRpY2xlIGJ1dHRvbiBzdGF0ZS5cclxuICBjb25zdCBmYXZvcml0ZWQgPSBbXVxyXG4gIGNvbnN0IHNldEZhdm9yaXRlZCA9IFtdXHJcbiAgY29uc3QgZmF2b3JpdGVzQ291bnQgPSBbXVxyXG4gIGNvbnN0IHNldEZhdm9yaXRlc0NvdW50ID0gW11cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IERFRkFVTFRfTElNSVQ7IGkrKykge1xyXG4gICAgW2Zhdm9yaXRlZFtpXSwgc2V0RmF2b3JpdGVkW2ldXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIFtmYXZvcml0ZXNDb3VudFtpXSwgc2V0RmF2b3JpdGVzQ291bnRbaV1dID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgfVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFydGljbGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHNldEZhdm9yaXRlZFtpXShhcnRpY2xlc1tpXS5mYXZvcml0ZWQpO1xyXG4gICAgICBzZXRGYXZvcml0ZXNDb3VudFtpXShhcnRpY2xlc1tpXS5mYXZvcml0ZXNDb3VudCk7XHJcbiAgICB9XHJcbiAgfSwgW2FydGljbGVzXSlcclxuXHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPVwiQ2Fubm90IGxvYWQgcmVjZW50IGFydGljbGVzLi4uXCIgLz47XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlLXByZXZpZXdcIj5Mb2FkaW5nIGFydGljbGVzLi4uPC9kaXY+O1xyXG4gIGlmIChhcnRpY2xlcz8ubGVuZ3RoID09PSAwKSB7XHJcbiAgICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwiYXJ0aWNsZS1wcmV2aWV3XCI+Tm8gYXJ0aWNsZXMgYXJlIGhlcmUuLi4geWV0LjwvZGl2Pik7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7YXJ0aWNsZXM/Lm1hcCgoYXJ0aWNsZSwgaSkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8RmF2b3JpdGVBcnRpY2xlQnV0dG9uQ29udGV4dC5Qcm92aWRlciBrZXk9e2FydGljbGUuc2x1Z30gdmFsdWU9e3tcclxuICAgICAgICAgICAgZmF2b3JpdGVkOiBmYXZvcml0ZWRbaV0sXHJcbiAgICAgICAgICAgIHNldEZhdm9yaXRlZDogc2V0RmF2b3JpdGVkW2ldLFxyXG4gICAgICAgICAgICBmYXZvcml0ZXNDb3VudDogZmF2b3JpdGVzQ291bnRbaV0sXHJcbiAgICAgICAgICAgIHNldEZhdm9yaXRlc0NvdW50OiBzZXRGYXZvcml0ZXNDb3VudFtpXSxcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICA8QXJ0aWNsZVByZXZpZXcga2V5PXthcnRpY2xlLnNsdWd9IGFydGljbGU9e2FydGljbGV9IC8+XHJcbiAgICAgICAgICA8L0Zhdm9yaXRlQXJ0aWNsZUJ1dHRvbkNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICAgKVxyXG4gICAgICB9KX1cclxuICAgICAgPE1heWJlIHRlc3Q9e2FydGljbGVzQ291bnQgJiYgYXJ0aWNsZXNDb3VudCA+IERFRkFVTFRfTElNSVR9PlxyXG4gICAgICAgIDxQYWdpbmF0aW9uXHJcbiAgICAgICAgICB0b3RhbD17cGFnZUNvdW50fVxyXG4gICAgICAgICAgbGltaXQ9e0RFRkFVTFRfTElNSVR9XHJcbiAgICAgICAgICBwYWdlQ291bnQ9ezEwfVxyXG4gICAgICAgICAgY3VycmVudFBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICBsYXN0SW5kZXg9e2xhc3RJbmRleH1cclxuICAgICAgICAgIGZldGNoVVJMPXtmZXRjaFVSTH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01heWJlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFydGljbGVMaXN0O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9DdXN0b21MaW5rXCI7XHJcbmltcG9ydCBDdXN0b21JbWFnZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vQ3VzdG9tSW1hZ2VcIjtcclxuaW1wb3J0IEZhdm9yaXRlQXJ0aWNsZUJ1dHRvbiBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRmF2b3JpdGVBcnRpY2xlQnV0dG9uXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VEaXNwYXRjaCB9IGZyb20gXCJsaWIvY29udGV4dC9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcImxpYi91dGlscy9kYXRlXCI7XHJcblxyXG5jb25zdCBBcnRpY2xlUHJldmlldyA9ICh7IGFydGljbGUgfSkgPT4ge1xyXG4gIGNvbnN0IHNldFBhZ2UgPSB1c2VQYWdlRGlzcGF0Y2goKTtcclxuICBjb25zdCBwcmV2aWV3ID0gYXJ0aWNsZTtcclxuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY3VycmVudEluZGV4LCBzZXRDdXJyZW50SW5kZXhdID0gUmVhY3QudXNlU3RhdGUoLTEpO1xyXG4gIGlmICghYXJ0aWNsZSkgcmV0dXJuO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtcHJldmlld1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFydGljbGUtbWV0YVwiPlxyXG4gICAgICAgIDxDdXN0b21MaW5rXHJcbiAgICAgICAgICBocmVmPXtgL3Byb2ZpbGUvJHtwcmV2aWV3LmF1dGhvci51c2VybmFtZX1gfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDdXN0b21JbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3ByZXZpZXcuYXV0aG9yLmltYWdlfVxyXG4gICAgICAgICAgICBhbHQ9XCJhdXRob3IgcHJvZmlsZSBpbWFnZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ3VzdG9tTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm9cIj5cclxuICAgICAgICAgIDxDdXN0b21MaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e2AvcHJvZmlsZS8ke3ByZXZpZXcuYXV0aG9yLnVzZXJuYW1lfWB9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImF1dGhvclwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHNldFBhZ2UoMCl9PntwcmV2aWV3LmF1dGhvci51c2VybmFtZX08L3NwYW4+XHJcbiAgICAgICAgICA8L0N1c3RvbUxpbms+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIHtmb3JtYXREYXRlKHByZXZpZXcuY3JlYXRlZEF0KX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwteHMtcmlnaHRcIj5cclxuICAgICAgICAgIDxGYXZvcml0ZUFydGljbGVCdXR0b25cclxuICAgICAgICAgICAgZmF2b3JpdGVkPXtwcmV2aWV3LmZhdm9yaXRlZH1cclxuICAgICAgICAgICAgZmF2b3JpdGVzQ291bnQ9e3ByZXZpZXcuZmF2b3JpdGVzQ291bnR9XHJcbiAgICAgICAgICAgIHNsdWc9e3ByZXZpZXcuc2x1Z30gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxDdXN0b21MaW5rXHJcbiAgICAgICAgaHJlZj17YC9hcnRpY2xlLyR7cHJldmlldy5zbHVnfWB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwicHJldmlldy1saW5rXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxoMT57cHJldmlldy50aXRsZX08L2gxPlxyXG4gICAgICAgIDxwPntwcmV2aWV3LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8c3Bhbj5SZWFkIG1vcmUuLi48L3NwYW4+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhZy1saXN0XCI+XHJcbiAgICAgICAgICB7cHJldmlldy50YWdMaXN0Lm1hcCgodGFnLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvP3RhZz0ke3RhZ31gfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0YWctZGVmYXVsdCB0YWctcGlsbCB0YWctb3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnN0b3BQcm9wYWdhdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcj17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbmRleChpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldEhvdmVyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50SW5kZXgoLTEpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICB7dGFnfVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9KX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L0N1c3RvbUxpbms+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXJ0aWNsZVByZXZpZXc7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBFcnJvck1lc3NhZ2VQcm9wcyB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBFcnJvck1lc3NhZ2UgPSAoeyBtZXNzYWdlIH06IEVycm9yTWVzc2FnZVByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2UtcHJlc2VudGVyXCI+e21lc3NhZ2V9PC9kaXY+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFcnJvck1lc3NhZ2U7XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU0VSVkVSX0JBU0VfVVJMIH0gZnJvbSBcImxpYi91dGlscy9jb25zdGFudFwiO1xyXG5pbXBvcnQgZ2V0TG9nZ2VkSW5Vc2VyIGZyb20gXCJsaWIvdXRpbHMvZ2V0TG9nZ2VkSW5Vc2VyXCI7XHJcblxyXG5jb25zdCBGQVZPUklURURfQ0xBU1MgPSBcImJ0biBidG4tc20gYnRuLXByaW1hcnlcIjtcclxuY29uc3QgTk9UX0ZBVk9SSVRFRF9DTEFTUyA9IFwiYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRmF2b3JpdGVBcnRpY2xlQnV0dG9uQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQodW5kZWZpbmVkKTtcclxuXHJcbmNvbnN0IEZhdm9yaXRlQXJ0aWNsZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGxvZ2dlZEluVXNlciA9IGdldExvZ2dlZEluVXNlcigpXHJcbiAgY29uc3Qge2Zhdm9yaXRlZCwgc2V0RmF2b3JpdGVkLCBmYXZvcml0ZXNDb3VudCwgc2V0RmF2b3JpdGVzQ291bnR9ID0gUmVhY3QudXNlQ29udGV4dChGYXZvcml0ZUFydGljbGVCdXR0b25Db250ZXh0KTtcclxuICBsZXQgYnV0dG9uVGV4dDtcclxuICBpZiAocHJvcHMuc2hvd1RleHQpIHtcclxuICAgIGlmIChmYXZvcml0ZWQpIHtcclxuICAgICAgYnV0dG9uVGV4dCA9ICdVbmZhdm9yaXRlJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYnV0dG9uVGV4dCA9ICdGYXZvcml0ZSdcclxuICAgIH1cclxuICAgIGJ1dHRvblRleHQgPSAnICcgKyBidXR0b25UZXh0ICsgJyBBcnRpY2xlICdcclxuICB9IGVsc2Uge1xyXG4gICAgYnV0dG9uVGV4dCA9ICcnXHJcbiAgfVxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrRmF2b3JpdGUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIWxvZ2dlZEluVXNlcikge1xyXG4gICAgICBSb3V0ZXIucHVzaChgL3VzZXIvbG9naW5gKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgc2V0RmF2b3JpdGVkKCFmYXZvcml0ZWQpXHJcbiAgICBzZXRGYXZvcml0ZXNDb3VudChmYXZvcml0ZXNDb3VudCArIChmYXZvcml0ZWQgPyAtIDEgOiAxKSlcclxuICAgIHRyeSB7XHJcbiAgICAgIGlmIChmYXZvcml0ZWQpIHtcclxuICAgICAgICBhd2FpdCBheGlvcy5kZWxldGUoYCR7U0VSVkVSX0JBU0VfVVJMfS9hcnRpY2xlcy8ke3Byb3BzLnNsdWd9L2Zhdm9yaXRlYCwge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgVG9rZW4gJHtsb2dnZWRJblVzZXI/LnRva2VufWAsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgICBgJHtTRVJWRVJfQkFTRV9VUkx9L2FydGljbGVzLyR7cHJvcHMuc2x1Z30vZmF2b3JpdGVgLFxyXG4gICAgICAgICAge30sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgVG9rZW4gJHtsb2dnZWRJblVzZXI/LnRva2VufWAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgc2V0RmF2b3JpdGVkKCFmYXZvcml0ZWQpXHJcbiAgICAgIHNldEZhdm9yaXRlc0NvdW50KGZhdm9yaXRlc0NvdW50ICsgKGZhdm9yaXRlZCA/IDEgOiAtMSkpXHJcbiAgICB9XHJcbiAgfTtcclxuICBsZXQgY291bnQgPSBmYXZvcml0ZXNDb3VudDtcclxuICBpZiAocHJvcHMuc2hvd1RleHQpIHtcclxuICAgIGNvdW50ID0gKDxzcGFuIGNsYXNzTmFtZT1cImNvdW50ZXJcIj4oe2NvdW50fSk8L3NwYW4+KVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgIGZhdm9yaXRlZCA/IEZBVk9SSVRFRF9DTEFTUyA6IE5PVF9GQVZPUklURURfQ0xBU1NcclxuICAgICAgfVxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGlja0Zhdm9yaXRlKCl9XHJcbiAgICA+XHJcbiAgICAgIDxpIGNsYXNzTmFtZT1cImlvbi1oZWFydFwiIC8+e3Byb3BzLnNob3dUZXh0ID8gJyAnIDogJyd9e2J1dHRvblRleHR9XHJcbiAgICAgIHsnICd9e2NvdW50fVxyXG4gICAgPC9idXR0b24+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXZvcml0ZUFydGljbGVCdXR0b247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IExvYWRpbmdTcGlubmVyID0gKCkgPT4gPGRpdiBjbGFzc05hbWU9XCJsb2FkaW5nLXNwaW5uZXJcIiAvPjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvYWRpbmdTcGlubmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHRyaWdnZXIgfSBmcm9tIFwic3dyXCI7XHJcblxyXG5pbXBvcnQgTWF5YmUgZnJvbSBcIi4vTWF5YmVcIjtcclxuaW1wb3J0IHsgZ2V0UmFuZ2UsIGdldFBhZ2VJbmZvIH0gZnJvbSBcImxpYi91dGlscy9jYWxjdWxhdGVQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VEaXNwYXRjaCwgdXNlUGFnZVN0YXRlIH0gZnJvbSBcImxpYi9jb250ZXh0L1BhZ2VDb250ZXh0XCI7XHJcblxyXG5pbnRlcmZhY2UgUGFnaW5hdGlvblByb3BzIHtcclxuICB0b3RhbDogbnVtYmVyO1xyXG4gIGxpbWl0OiBudW1iZXI7XHJcbiAgcGFnZUNvdW50OiBudW1iZXI7XHJcbiAgY3VycmVudFBhZ2U6IG51bWJlcjtcclxuICBsYXN0SW5kZXg6IG51bWJlcjtcclxuICBmZXRjaFVSTDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQYWdpbmF0aW9uSXRlbShwcm9wcykge1xyXG4gIGNvbnN0IG5ld1Byb3BzID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpXHJcbiAgZGVsZXRlIG5ld1Byb3BzLmNoaWxkcmVuXHJcbiAgZGVsZXRlIG5ld1Byb3BzLmNsYXNzTmFtZVxyXG4gIGxldCBjbGFzc05hbWU7XHJcbiAgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xyXG4gICAgY2xhc3NOYW1lID0gJyAnICsgcHJvcHMuY2xhc3NOYW1lXHJcbiAgfSBlbHNlIHtcclxuICAgIGNsYXNzTmFtZSA9ICcnXHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtJHtjbGFzc05hbWV9YH0gey4uLm5ld1Byb3BzfT5cclxuICAgICAgPGEgY2xhc3NOYW1lPVwicGFnZS1saW5rXCI+e3Byb3BzLmNoaWxkcmVufTwvYT5cclxuICAgIDwvbGk+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBQYWdpbmF0aW9uID0gKHtcclxuICB0b3RhbCxcclxuICBsaW1pdCxcclxuICBwYWdlQ291bnQsXHJcbiAgY3VycmVudFBhZ2UsXHJcbiAgbGFzdEluZGV4LFxyXG4gIGZldGNoVVJMLFxyXG59OiBQYWdpbmF0aW9uUHJvcHMpID0+IHtcclxuICBjb25zdCBwYWdlID0gdXNlUGFnZVN0YXRlKCk7XHJcbiAgY29uc3Qgc2V0UGFnZSA9IHVzZVBhZ2VEaXNwYXRjaCgpO1xyXG5cclxuICBjb25zdCB7IGZpcnN0UGFnZSwgbGFzdFBhZ2UsIGhhc1ByZXZpb3VzUGFnZSwgaGFzTmV4dFBhZ2UgfSA9IGdldFBhZ2VJbmZvKHtcclxuICAgIGxpbWl0LFxyXG4gICAgcGFnZUNvdW50LFxyXG4gICAgdG90YWwsXHJcbiAgICBwYWdlOiBjdXJyZW50UGFnZSxcclxuICB9KTtcclxuICBjb25zdCBwYWdlcyA9IHRvdGFsID4gMCA/IGdldFJhbmdlKGZpcnN0UGFnZSwgbGFzdFBhZ2UpIDogW107XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MTElFbGVtZW50LCBNb3VzZUV2ZW50PiwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldFBhZ2UoaW5kZXgpO1xyXG4gICAgICB0cmlnZ2VyKGZldGNoVVJMKTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUZpcnN0Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMSUVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0UGFnZSgwKTtcclxuICAgICAgdHJpZ2dlcihmZXRjaFVSTCk7XHJcbiAgICB9LFxyXG4gICAgW11cclxuICApO1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2Q2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjayhcclxuICAgIChlOiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxMSUVsZW1lbnQsIE1vdXNlRXZlbnQ+KSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgc2V0UGFnZShwYWdlIC0gMSk7XHJcbiAgICAgIHRyaWdnZXIoZmV0Y2hVUkwpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dENsaWNrID0gUmVhY3QudXNlQ2FsbGJhY2soXHJcbiAgICAoZTogUmVhY3QuTW91c2VFdmVudDxIVE1MTElFbGVtZW50LCBNb3VzZUV2ZW50PikgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xyXG4gICAgICB0cmlnZ2VyKGZldGNoVVJMKTtcclxuICAgIH0sXHJcbiAgICBbXVxyXG4gICk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxhc3RDbGljayA9IFJlYWN0LnVzZUNhbGxiYWNrKFxyXG4gICAgKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTExJRWxlbWVudCwgTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBzZXRQYWdlKGxhc3RJbmRleCk7XHJcbiAgICAgIHRyaWdnZXIoZmV0Y2hVUkwpO1xyXG4gICAgfSxcclxuICAgIFtdXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxuYXY+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XHJcbiAgICAgICAgPFBhZ2luYXRpb25JdGVtIG9uQ2xpY2s9e2hhbmRsZUZpcnN0Q2xpY2t9PntgPDxgfTwvUGFnaW5hdGlvbkl0ZW0+XHJcbiAgICAgICAgPE1heWJlIHRlc3Q9e2hhc1ByZXZpb3VzUGFnZX0+XHJcbiAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW0gb25DbGljaz17aGFuZGxlUHJldkNsaWNrfT57YDxgfTwvUGFnaW5hdGlvbkl0ZW0+XHJcbiAgICAgICAgPC9NYXliZT5cclxuICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBpc0N1cnJlbnQgPSAhY3VycmVudFBhZ2UgPyBwYWdlID09PSAwIDogcGFnZSA9PT0gY3VycmVudFBhZ2U7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvbkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e3BhZ2UudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzQ3VycmVudCAmJiBcImFjdGl2ZVwifVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLCBwYWdlKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtwYWdlICsgMX1cclxuICAgICAgICAgICAgPC9QYWdpbmF0aW9uSXRlbT5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgPE1heWJlIHRlc3Q9e2hhc05leHRQYWdlfT5cclxuICAgICAgICAgIDxQYWdpbmF0aW9uSXRlbSBvbkNsaWNrPXtoYW5kbGVOZXh0Q2xpY2t9PntgPmB9PC9QYWdpbmF0aW9uSXRlbT5cclxuICAgICAgICA8L01heWJlPlxyXG4gICAgICAgIDxQYWdpbmF0aW9uSXRlbSBvbkNsaWNrPXtoYW5kbGVMYXN0Q2xpY2t9PntgPj5gfTwvUGFnaW5hdGlvbkl0ZW0+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDdXN0b21MaW5rIGZyb20gXCJjb21wb25lbnRzL2NvbW1vbi9DdXN0b21MaW5rXCI7XHJcbmltcG9ydCBNYXliZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vTWF5YmVcIjtcclxuaW1wb3J0IGdldExvZ2dlZEluVXNlciBmcm9tIFwibGliL3V0aWxzL2dldExvZ2dlZEluVXNlclwiO1xyXG5cclxuY29uc3QgVGFiTGlzdCA9ICh7dGFiLCBzZXRUYWIsIHRhZ30pID0+IHtcclxuICBjb25zdCBsb2dnZWRJblVzZXIgPSBnZXRMb2dnZWRJblVzZXIoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBvdXRsaW5lLWFjdGl2ZVwiPlxyXG4gICAgICA8TWF5YmUgdGVzdD17bG9nZ2VkSW5Vc2VyfT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxDdXN0b21MaW5rXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rJHt0YWIgPT09ICdmZWVkJyA/ICcgYWN0aXZlJyA6ICcnfWB9XHJcbiAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge3NldFRhYignZmVlZCcpfX1cclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBZb3VyIEZlZWRcclxuICAgICAgICAgIDwvQ3VzdG9tTGluaz5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICA8L01heWJlPlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICA8Q3VzdG9tTGlua1xyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmske3RhYiA9PT0gJ2dsb2JhbCcgPyAnIGFjdGl2ZScgOiAnJ31gfVxyXG4gICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUYWIoJ2dsb2JhbCcpXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdsb2JhbCBGZWVkXHJcbiAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8TWF5YmUgdGVzdD17dGFiID09ICd0YWcnfT5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cclxuICAgICAgICAgIDxDdXN0b21MaW5rXHJcbiAgICAgICAgICAgIGhyZWY9e2AvYH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCJcclxuICAgICAgICAgICAgc2hhbGxvd1xyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpb24tcG91bmRcIiAvPiB7dGFnfVxyXG4gICAgICAgICAgPC9DdXN0b21MaW5rPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvTWF5YmU+XHJcbiAgICA8L3VsPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWJMaXN0O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ3VzdG9tTGluayBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vQ3VzdG9tTGlua1wiO1xyXG5pbXBvcnQgTG9hZGluZ1NwaW5uZXIgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL0xvYWRpbmdTcGlubmVyXCI7XHJcbmltcG9ydCB7IHVzZVBhZ2VEaXNwYXRjaCB9IGZyb20gXCJsaWIvY29udGV4dC9QYWdlQ29udGV4dFwiO1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcclxuaW1wb3J0IHsgU0VSVkVSX0JBU0VfVVJMIH0gZnJvbSBcImxpYi91dGlscy9jb25zdGFudFwiO1xyXG5pbXBvcnQgZmV0Y2hlciBmcm9tIFwibGliL3V0aWxzL2ZldGNoZXJcIjtcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tIFwiY29tcG9uZW50cy9jb21tb24vRXJyb3JNZXNzYWdlXCI7XHJcblxyXG5jb25zdCBUYWdzID0gKHtzZXRUYWIsIHNldFRhZ30pID0+IHtcclxuICBjb25zdCBzZXRQYWdlID0gdXNlUGFnZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiBzZXRQYWdlKDApLCBbXSk7XHJcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKGAke1NFUlZFUl9CQVNFX1VSTH0vdGFnc2AsIGZldGNoZXIoKSk7XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPEVycm9yTWVzc2FnZSBtZXNzYWdlPVwiQ2Fubm90IGxvYWQgcG9wdWxhciB0YWdzLi4uXCIgLz47XHJcbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmdTcGlubmVyIC8+O1xyXG4gIGNvbnN0IHsgdGFncyB9ID0gZGF0YTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWctbGlzdFwiPlxyXG4gICAgICB7dGFncz8ubWFwKCh0YWcpID0+IChcclxuICAgICAgICA8Q3VzdG9tTGlua1xyXG4gICAgICAgICAga2V5PXt0YWd9XHJcbiAgICAgICAgICBocmVmPXtgYH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRhZy1kZWZhdWx0IHRhZy1waWxsXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtzZXRUYWIoJ3RhZycpOyBzZXRUYWcodGFnKTt9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT57dGFnfTwvc3Bhbj5cclxuICAgICAgICA8L0N1c3RvbUxpbms+XHJcbiAgICAgICkpfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRhZ3M7XHJcbiIsImV4cG9ydCBjb25zdCBnZXRSYW5nZSA9IChzdGFydCwgZW5kKSA9PiB7XHJcbiAgcmV0dXJuIFsuLi5BcnJheShlbmQgLSBzdGFydCArIDEpXS5tYXAoKF8sIGkpID0+IHN0YXJ0ICsgaSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UGFnZUluZm8gPSAoeyBsaW1pdCwgcGFnZUNvdW50LCB0b3RhbCwgcGFnZSB9KSA9PiB7XHJcbiAgY29uc3QgdG90YWxQYWdlcyA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XHJcblxyXG4gIGxldCBjdXJyZW50UGFnZSA9IHBhZ2U7XHJcblxyXG4gIGlmIChjdXJyZW50UGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgIGN1cnJlbnRQYWdlID0gdG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIGxldCBmaXJzdFBhZ2UgPSBNYXRoLm1heCgwLCBjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IocGFnZUNvdW50IC8gMikpO1xyXG4gIGxldCBsYXN0UGFnZSA9IE1hdGgubWluKHRvdGFsUGFnZXMsIGN1cnJlbnRQYWdlICsgTWF0aC5mbG9vcihwYWdlQ291bnQgLyAyKSk7XHJcblxyXG4gIGlmIChsYXN0UGFnZSAtIGZpcnN0UGFnZSArIDEgPCBwYWdlQ291bnQpIHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXMgLyAyKSB7XHJcbiAgICAgIGxhc3RQYWdlID0gTWF0aC5taW4oXHJcbiAgICAgICAgdG90YWxQYWdlcyxcclxuICAgICAgICBsYXN0UGFnZSArIChwYWdlQ291bnQgLSAobGFzdFBhZ2UgLSBmaXJzdFBhZ2UpKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlyc3RQYWdlID0gTWF0aC5tYXgoMSwgZmlyc3RQYWdlIC0gKHBhZ2VDb3VudCAtIChsYXN0UGFnZSAtIGZpcnN0UGFnZSkpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChsYXN0UGFnZSAtIGZpcnN0UGFnZSArIDEgPiBwYWdlQ291bnQpIHtcclxuICAgIGlmIChjdXJyZW50UGFnZSA+IHRvdGFsUGFnZXMgLyAyKSB7XHJcbiAgICAgIGZpcnN0UGFnZSA9IGZpcnN0UGFnZSArIDE7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsYXN0UGFnZSA9IGxhc3RQYWdlIC0gMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByZXZpb3VzUGFnZSA9IGN1cnJlbnRQYWdlIC0gMTtcclxuICBjb25zdCBuZXh0UGFnZSA9IGN1cnJlbnRQYWdlICsgMTtcclxuICBjb25zdCBoYXNQcmV2aW91c1BhZ2UgPSBjdXJyZW50UGFnZSA+IDA7XHJcbiAgY29uc3QgaGFzTmV4dFBhZ2UgPSBjdXJyZW50UGFnZSA8IHRvdGFsUGFnZXM7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBmaXJzdFBhZ2UsXHJcbiAgICBsYXN0UGFnZSxcclxuICAgIHByZXZpb3VzUGFnZSxcclxuICAgIG5leHRQYWdlLFxyXG4gICAgaGFzUHJldmlvdXNQYWdlLFxyXG4gICAgaGFzTmV4dFBhZ2UsXHJcbiAgICB0b3RhbFBhZ2VzLFxyXG4gIH07XHJcbn07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVTdHJpbmcpIHtcclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZylcclxuICBjb25zdCBtb250aCA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IG1vbnRoOiAnbG9uZycgfSlcclxuICByZXR1cm4gYCR7bW9udGh9ICR7ZGF0ZS5nZXREYXRlKCl9LCAke2RhdGUuZ2V0RnVsbFllYXIoKX1gXHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXBkYXRlT3B0aW9ucyA9ICgpID0+IHtcclxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHt9O1xyXG4gIGlmICghd2luZG93LmxvY2FsU3RvcmFnZS51c2VyKSByZXR1cm4ge307XHJcbiAgaWYgKE9iamVjdC5rZXlzKHdpbmRvdy5sb2NhbFN0b3JhZ2UudXNlcikubGVuZ3RoID09PSAwKSByZXR1cm4ge307XHJcbiAgY29uc3QgdXNlciA9IEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS51c2VyKTtcclxuICBpZiAoISF1c2VyLnRva2VuKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYFRva2VuICR7dXNlci50b2tlbn1gLFxyXG4gICAgICB9LFxyXG4gICAgfTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGZXRjaGVyKGlzRmFsbGJhY2sgPSBmYWxzZSkge1xyXG4gIHJldHVybiBhc3luYyAodXJsKSA9PiB7XHJcbiAgICBpZiAoIWlzRmFsbGJhY2spIHtcclxuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQodXJsLCB1cGRhdGVPcHRpb25zKCkpO1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQXJ0aWNsZUxpc3QgZnJvbSBcImNvbXBvbmVudHMvYXJ0aWNsZS9BcnRpY2xlTGlzdFwiO1xyXG5pbXBvcnQgTWF5YmUgZnJvbSBcImNvbXBvbmVudHMvY29tbW9uL01heWJlXCI7XHJcbmltcG9ydCBUYWdzIGZyb20gXCJjb21wb25lbnRzL2hvbWUvVGFnc1wiO1xyXG5pbXBvcnQgVGFiTGlzdCBmcm9tIFwiY29tcG9uZW50cy9ob21lL1RhYkxpc3RcIjtcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tIFwibGliL3V0aWxzL2NvbnN0YW50XCI7XHJcbmltcG9ydCBnZXRMb2dnZWRJblVzZXIgZnJvbSBcImxpYi91dGlscy9nZXRMb2dnZWRJblVzZXJcIjtcclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBsb2dnZWRJblVzZXIgPSBnZXRMb2dnZWRJblVzZXIoKVxyXG4gIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZShsb2dnZWRJblVzZXIgPyAnZmVlZCcgOiAnZ2xvYmFsJylcclxuICBjb25zdCBbdGFnLCBzZXRUYWddID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRUYWIobG9nZ2VkSW5Vc2VyID8gJ2ZlZWQnIDogJ2dsb2JhbCcpXHJcbiAgfSwgW2xvZ2dlZEluVXNlcl0pXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57QVBQX05BTUV9PC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJOZXh0LmpzICsgU1dSIGNvZGViYXNlIGNvbnRhaW5pbmcgcmVhbHdvcmxkIGV4YW1wbGVzIChDUlVELCBhdXRoLCBhZHZhbmNlZCBwYXR0ZXJucywgZXRjKSB0aGF0IGFkaGVyZXMgdG8gdGhlIHJlYWx3b3JsZCBzcGVjIGFuZCBBUElcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLXBhZ2VcIj5cclxuICAgICAgICA8TWF5YmUgdGVzdD17IWxvZ2dlZEluVXNlcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJsb2dvLWZvbnRcIj57QVBQX05BTUUudG9Mb3dlckNhc2UoKX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwPkEgcGxhY2UgdG8gc2hhcmUgeW91ciBrbm93bGVkZ2UuPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTWF5YmU+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFnZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZC10b2dnbGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJMaXN0IHRhYj17dGFifSBzZXRUYWI9e3NldFRhYn0gdGFnPXt0YWd9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPEFydGljbGVMaXN0IHdoYXQ9e3RhYn0gdGFnPXt0YWd9Lz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGViYXJcIj5cclxuICAgICAgICAgICAgICAgIDxwPlBvcHVsYXIgVGFnczwvcD5cclxuICAgICAgICAgICAgICAgIDxUYWdzIHNldFRhYj17c2V0VGFifSBzZXRUYWc9e3NldFRhZ30gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzd3JcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=