(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");
/* globals __webpack_hash__ */


if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
let {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
let mostRecentHash = null;
/* eslint-disable-next-line */

let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
} // This function reads code updates on the fly and hard
// reloads the page when it has changed.


async function tryApplyUpdates() {
  if (!isUpdateAvailable() || !canApplyUpdates()) {
    return;
  }

  try {
    const res = await fetch("".concat(hotUpdatePath).concat(curHash, ".hot-update.json"));
    const jsonData = await res.json();
    const curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

    const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(mod => {
      return mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage))) !== -1 || mod.indexOf("pages".concat(curPage.substr(0, 1) === '/' ? curPage : "/".concat(curPage)).replace(/\//g, '\\')) !== -1;
    });

    if (pageUpdated) {
      document.location.reload(true);
    } else {
      curHash = mostRecentHash;
    }
  } catch (err) {
    console.error('Error occurred checking for update', err);
    document.location.reload(true);
  }
}

(0, _eventsource.addMessageListener)(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    const message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils.setupPing)(assetPrefix, () => page);
(0, _fouc.displayContent)();

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

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(cb => {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function (fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

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

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response = window.Response;
var TextDecoder = window.TextDecoder;
var TextEncoder = window.TextEncoder;
var AbortController = window.AbortController;

if (AbortController == undefined) {
  AbortController = function () {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07ff;
    }

    if (octetsCount === 2) {
      return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xd7ff || codePoint >= 0xe000 >> shift && codePoint << shift <= 0xffff;
    }

    if (octetsCount === 3) {
      return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10ffff;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 0xfffd;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 0xffff) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(0xd800 + (codePoint - 0xffff - 1 >> 10));
        string += String.fromCharCode(0xdc00 + (codePoint - 0xffff - 1 & 0x3ff));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function supportsStreamOption() {
  try {
    return new TextDecoder().decode(new TextEncoder().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  TextDecoder = TextDecoderPolyfill;
}

var k = function k() {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function onStart() {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function onProgress() {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function onFinish() {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function onReadyStateChange() {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function onTimeout() {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 0x20);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers) {
  this._headers = headers;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  var controller = new AbortController();
  var signal = controller.signal; // see #120

  var textDecoder = new TextDecoder();
  fetch(url, {
    headers: headers,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function readNextChunk() {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event;

function MessageEvent(type, options) {
  Event.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent;
MessageEvent.prototype = Object.create(Event.prototype);

function ConnectionEvent(type, options) {
  Event.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function parseDuration(value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function clampDuration(n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function fire(that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response != undefined && 'body' in Response.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function onStart(status, statusText, contentType, headers, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function onProgress(textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function onFinish() {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function close() {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function onTimeout() {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers != undefined) {
      for (var name in headers) {
        if (Object.prototype.hasOwnProperty.call(headers, name)) {
          requestHeaders[name] = headers[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget");
$RefreshReg$(_c8, "Event");
$RefreshReg$(_c9, "MessageEvent");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

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

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.displayContent = displayContent; // This function is used to remove Next.js' no-FOUC styles workaround for using
// `style-loader` in development. It must be called before hydration, or else
// rendering won't have the correct computed values in effects.

function displayContent(callback) {
  ;
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
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

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");
/* global location */


let evtSource;
let currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource.getEventSourceWrapper)({
    path: "".concat(assetPrefix, "/_next/webpack-hmr?page=").concat(currentPage),
    timeout: 5000
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      const payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2Rldi9hbXAtZGV2LmpzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2Rldi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlLmpzIiwid2VicGFjazovL19OX0UvLi4vY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvZGV2L2ZvdWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uLi9jbGllbnQvZGV2L29uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsIkV2ZW50U291cmNlUG9seWZpbGwiLCJkYXRhIiwiSlNPTiIsImRvY3VtZW50IiwiYXNzZXRQcmVmaXgiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJob3RVcGRhdGVQYXRoIiwibW9kdWxlIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJyZXMiLCJmZXRjaCIsImpzb25EYXRhIiwiY3VyUGFnZSIsInBhZ2UiLCJwYWdlVXBkYXRlZCIsIkFycmF5IiwiT2JqZWN0IiwibW9kIiwiY29uc29sZSIsImV2ZW50IiwibWVzc2FnZSIsInRyeUFwcGx5VXBkYXRlcyIsImV2ZW50Q2FsbGJhY2tzIiwibGFzdEFjdGl2aXR5IiwibGlzdGVuZXJzIiwib3B0aW9ucyIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsInNvdXJjZSIsImkiLCJjYiIsImNsZWFySW50ZXJ2YWwiLCJzZXRUaW1lb3V0IiwiY2xvc2UiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJFdmVudFNvdXJjZVdyYXBwZXIiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJUZXh0RGVjb2RlclBvbHlmaWxsIiwib2N0ZXRzQ291bnQiLCJjb2RlUG9pbnQiLCJiaXRzTmVlZGVkIiwiUkVQTEFDRVIiLCJzdHJpbmciLCJvY3RldHMiLCJvY3RldCIsInZhbGlkIiwiU3RyaW5nIiwic3VwcG9ydHNTdHJlYW1PcHRpb24iLCJzdHJlYW0iLCJrIiwidGhhdCIsInhociIsInN0YXRlIiwidGltZW91dCIsImNsZWFyVGltZW91dCIsIm9uU3RhcnQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwiY29udGVudFR5cGUiLCJvblByb2dyZXNzIiwicmVzcG9uc2VUZXh0Iiwib25GaW5pc2giLCJvblJlYWR5U3RhdGVDaGFuZ2UiLCJvblRpbWVvdXQiLCJYTUxIdHRwUmVxdWVzdCIsInVybCIsIlhIUldyYXBwZXIiLCJuYW1lIiwiYyIsIm1hcCIsImFycmF5IiwiYWxsIiwibGluZSIsInBhcnRzIiwidmFsdWUiLCJ0b0xvd2VyQ2FzZSIsIkhlYWRlcnNQb2x5ZmlsbCIsIlhIUlRyYW5zcG9ydCIsIm9mZnNldCIsImNodW5rIiwib25Qcm9ncmVzc0NhbGxiYWNrIiwiaGVhZGVycyIsIm9uU3RhcnRDYWxsYmFjayIsIm9uRmluaXNoQ2FsbGJhY2siLCJIZWFkZXJzV3JhcHBlciIsImNvbnRyb2xsZXIiLCJzaWduYWwiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwid2l0aENyZWRlbnRpYWxzIiwiY2FjaGUiLCJyZWFkZXIiLCJyZXNwb25zZSIsInJlYWROZXh0Q2h1bmsiLCJyZXN1bHQiLCJyZXNvbHZlIiwicmVqZWN0IiwiUHJvbWlzZSIsIkV2ZW50VGFyZ2V0IiwidHlwZUxpc3RlbmVycyIsImxlbmd0aCIsImxpc3RlbmVyIiwidGhyb3dFcnJvciIsInR5cGUiLCJmb3VuZCIsImZpbHRlcmVkIiwiRXZlbnQiLCJNZXNzYWdlRXZlbnQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsImZpcmUiLCJmIiwic3RhcnQiLCJpc0ZldGNoU3VwcG9ydGVkIiwiQm9vbGVhbiIsImluaXRpYWxSZXRyeSIsImhlYXJ0YmVhdFRpbWVvdXQiLCJsYXN0RXZlbnRJZCIsInJldHJ5Iiwid2FzQWN0aXZpdHkiLCJDdXJyZW50VHJhbnNwb3J0IiwidHJhbnNwb3J0IiwiY2FuY2VsRnVuY3Rpb24iLCJjdXJyZW50U3RhdGUiLCJkYXRhQnVmZmVyIiwibGFzdEV2ZW50SWRCdWZmZXIiLCJldmVudFR5cGVCdWZmZXIiLCJ0ZXh0QnVmZmVyIiwiZmllbGRTdGFydCIsInZhbHVlU3RhcnQiLCJlcyIsInRleHRDaHVuayIsInBvc2l0aW9uIiwiZmllbGQiLCJyZXF1ZXN0VVJMIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdEhlYWRlcnMiLCJ4IiwiY2FsbGJhY2siLCJldnRTb3VyY2UiLCJwYXRobmFtZSIsInBhdGhuYW1lRm4iLCJjbG9zZVBpbmciLCJwYXRoIiwicGF5bG9hZCIsImxvY2F0aW9uIiwicGFnZVJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7O0FBQ0E7O0FBQ0E7O0FBQ0E7QUFKQTs7O0FBTUEsSUFBSSxDQUFDQSxNQUFNLENBQVgsYUFBeUI7QUFDdkJBLFFBQU0sQ0FBTkEsY0FBcUJDLHFCQUFyQkQ7QUFHRjs7QUFBQSxNQUFNRSxJQUFJLEdBQUdDLElBQUksQ0FBSkEsTUFBV0MsUUFBUSxDQUFSQSxnQ0FBeEIsV0FBYUQsQ0FBYjtBQUNBLElBQUk7QUFBQTtBQUFBO0FBQUEsSUFBSjtBQUNBRSxXQUFXLEdBQUdBLFdBQVcs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aHVua3MvYW1wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCIvKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmltcG9ydCBFdmVudFNvdXJjZVBvbHlmaWxsIGZyb20gJy4vZXZlbnQtc291cmNlLXBvbHlmaWxsJ1xuaW1wb3J0IHsgYWRkTWVzc2FnZUxpc3RlbmVyIH0gZnJvbSAnLi9lcnJvci1vdmVybGF5L2V2ZW50c291cmNlJ1xuaW1wb3J0IHsgc2V0dXBQaW5nIH0gZnJvbSAnLi9vbi1kZW1hbmQtZW50cmllcy11dGlscydcbmltcG9ydCB7IGRpc3BsYXlDb250ZW50IH0gZnJvbSAnLi9mb3VjJ1xuXG5pZiAoIXdpbmRvdy5FdmVudFNvdXJjZSkge1xuICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBFdmVudFNvdXJjZVBvbHlmaWxsXG59XG5cbmNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykudGV4dENvbnRlbnQpXG5sZXQgeyBhc3NldFByZWZpeCwgcGFnZSB9ID0gZGF0YVxuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJ1xubGV0IG1vc3RSZWNlbnRIYXNoID0gbnVsbFxuLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG5sZXQgY3VySGFzaCA9IF9fd2VicGFja19oYXNoX19cbmNvbnN0IGhvdFVwZGF0ZVBhdGggPVxuICBhc3NldFByZWZpeCArIChhc3NldFByZWZpeC5lbmRzV2l0aCgnLycpID8gJycgOiAnLycpICsgJ19uZXh0L3N0YXRpYy93ZWJwYWNrLydcblxuLy8gSXMgdGhlcmUgYSBuZXdlciB2ZXJzaW9uIG9mIHRoaXMgY29kZSBhdmFpbGFibGU/XG5mdW5jdGlvbiBpc1VwZGF0ZUF2YWlsYWJsZSgpIHtcbiAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgLy8gSXQncyBhIGdsb2JhbCB2YXJpYWJsZSBpbmplY3RlZCBieSBXZWJwYWNrLlxuICAvKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgcmV0dXJuIG1vc3RSZWNlbnRIYXNoICE9PSBfX3dlYnBhY2tfaGFzaF9fXG59XG5cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICByZXR1cm4gbW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gcmVhZHMgY29kZSB1cGRhdGVzIG9uIHRoZSBmbHkgYW5kIGhhcmRcbi8vIHJlbG9hZHMgdGhlIHBhZ2Ugd2hlbiBpdCBoYXMgY2hhbmdlZC5cbmFzeW5jIGZ1bmN0aW9uIHRyeUFwcGx5VXBkYXRlcygpIHtcbiAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgIHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApXG4gICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlXG4gICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgIGNvbnN0IHBhZ2VVcGRhdGVkID0gKEFycmF5LmlzQXJyYXkoanNvbkRhdGEuYylcbiAgICAgID8ganNvbkRhdGEuY1xuICAgICAgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKVxuICAgICkuc29tZSgobW9kKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBtb2QuaW5kZXhPZihcbiAgICAgICAgICBgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gXG4gICAgICAgICkgIT09IC0xIHx8XG4gICAgICAgIG1vZC5pbmRleE9mKFxuICAgICAgICAgIGBwYWdlcyR7XG4gICAgICAgICAgICBjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWBcbiAgICAgICAgICB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKVxuICAgICAgICApICE9PSAtMVxuICAgICAgKVxuICAgIH0pXG5cbiAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBjdXJIYXNoID0gbW9zdFJlY2VudEhhc2hcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycmVkIGNoZWNraW5nIGZvciB1cGRhdGUnLCBlcnIpXG4gICAgZG9jdW1lbnQubG9jYXRpb24ucmVsb2FkKHRydWUpXG4gIH1cbn1cblxuYWRkTWVzc2FnZUxpc3RlbmVyKChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuZGF0YSA9PT0gJ1xcdUQ4M0RcXHVEQzkzJykge1xuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKVxuXG4gICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2hcbiAgICAgIHRyeUFwcGx5VXBkYXRlcygpXG4gICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7XG4gICAgY29uc29sZS53YXJuKCdJbnZhbGlkIEhNUiBtZXNzYWdlOiAnICsgZXZlbnQuZGF0YSArICdcXG4nICsgZXgpXG4gIH1cbn0pXG5cbnNldHVwUGluZyhhc3NldFByZWZpeCwgKCkgPT4gcGFnZSlcbmRpc3BsYXlDb250ZW50KClcbiIsImNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW11cblxuZnVuY3Rpb24gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgdmFyIHNvdXJjZVxuICB2YXIgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICB2YXIgbGlzdGVuZXJzID0gW11cblxuICBpZiAoIW9wdGlvbnMudGltZW91dCkge1xuICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMFxuICB9XG5cbiAgaW5pdCgpXG4gIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgaGFuZGxlRGlzY29ubmVjdCgpXG4gICAgfVxuICB9LCBvcHRpb25zLnRpbWVvdXQgLyAyKVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpXG4gICAgc291cmNlLm9ub3BlbiA9IGhhbmRsZU9ubGluZVxuICAgIHNvdXJjZS5vbmVycm9yID0gaGFuZGxlRGlzY29ubmVjdFxuICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgaWYgKG9wdGlvbnMubG9nKSBjb25zb2xlLmxvZygnW0hNUl0gY29ubmVjdGVkJylcbiAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpXG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgbGFzdEFjdGl2aXR5ID0gbmV3IERhdGUoKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsaXN0ZW5lcnNbaV0oZXZlbnQpXG4gICAgfVxuXG4gICAgZXZlbnRDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IHtcbiAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuXG4gICAgICBjYihldmVudClcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgIHNvdXJjZS5jbG9zZSgpXG4gICAgc2V0VGltZW91dChpbml0LCBvcHRpb25zLnRpbWVvdXQpXG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNsb3NlOiAoKSA9PiB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKVxuICAgICAgc291cmNlLmNsb3NlKClcbiAgICB9LFxuICAgIGFkZE1lc3NhZ2VMaXN0ZW5lcjogZnVuY3Rpb24gKGZuKSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChmbilcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRNZXNzYWdlTGlzdGVuZXIoY2IpIHtcbiAgZXZlbnRDYWxsYmFja3MucHVzaChjYilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEV2ZW50U291cmNlV3JhcHBlcihvcHRpb25zKSB7XG4gIHJldHVybiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBJbXByb3ZlZCB2ZXJzaW9uIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9ZYWZmbGUvRXZlbnRTb3VyY2UvXG4vLyBBdmFpbGFibGUgdW5kZXIgTUlUIExpY2Vuc2UgKE1JVClcbi8vIE9ubHkgdHJpZXMgdG8gc3VwcG9ydCBJRTExIGFuZCBub3RoaW5nIGJlbG93XG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnRcbnZhciBSZXNwb25zZSA9IHdpbmRvdy5SZXNwb25zZVxudmFyIFRleHREZWNvZGVyID0gd2luZG93LlRleHREZWNvZGVyXG52YXIgVGV4dEVuY29kZXIgPSB3aW5kb3cuVGV4dEVuY29kZXJcbnZhciBBYm9ydENvbnRyb2xsZXIgPSB3aW5kb3cuQWJvcnRDb250cm9sbGVyXG5cbmlmIChBYm9ydENvbnRyb2xsZXIgPT0gdW5kZWZpbmVkKSB7XG4gIEFib3J0Q29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnNpZ25hbCA9IG51bGxcbiAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24gKCkge31cbiAgfVxufVxuXG5mdW5jdGlvbiBUZXh0RGVjb2RlclBvbHlmaWxsKCkge1xuICB0aGlzLmJpdHNOZWVkZWQgPSAwXG4gIHRoaXMuY29kZVBvaW50ID0gMFxufVxuXG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAob2N0ZXRzKSB7XG4gIGZ1bmN0aW9uIHZhbGlkKGNvZGVQb2ludCwgc2hpZnQsIG9jdGV0c0NvdW50KSB7XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAxKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDA4MCA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMHgwN2ZmXG4gICAgfVxuICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweDA4MDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZDdmZikgfHxcbiAgICAgICAgKGNvZGVQb2ludCA+PSAweGUwMDAgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDB4ZmZmZilcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKG9jdGV0c0NvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29kZVBvaW50ID49IDB4MDEwMDAwID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAweDEwZmZmZlxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoKVxuICB9XG4gIGZ1bmN0aW9uIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkge1xuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMVxuICAgIH1cbiAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgcmV0dXJuIDNcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKClcbiAgfVxuICB2YXIgUkVQTEFDRVIgPSAweGZmZmRcbiAgdmFyIHN0cmluZyA9ICcnXG4gIHZhciBiaXRzTmVlZGVkID0gdGhpcy5iaXRzTmVlZGVkXG4gIHZhciBjb2RlUG9pbnQgPSB0aGlzLmNvZGVQb2ludFxuICBmb3IgKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXVxuICAgIGlmIChiaXRzTmVlZGVkICE9PSAwKSB7XG4gICAgICBpZiAoXG4gICAgICAgIG9jdGV0IDwgMTI4IHx8XG4gICAgICAgIG9jdGV0ID4gMTkxIHx8XG4gICAgICAgICF2YWxpZChcbiAgICAgICAgICAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpLFxuICAgICAgICAgIGJpdHNOZWVkZWQgLSA2LFxuICAgICAgICAgIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludClcbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSAwXG4gICAgICAgIGNvZGVQb2ludCA9IFJFUExBQ0VSXG4gICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludClcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgIGlmIChvY3RldCA+PSAwICYmIG9jdGV0IDw9IDEyNykge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldFxuICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAxOTIgJiYgb2N0ZXQgPD0gMjIzKSB7XG4gICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMVxuICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxXG4gICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDIyNCAmJiBvY3RldCA8PSAyMzkpIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyXG4gICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTVcbiAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMjQwICYmIG9jdGV0IDw9IDI0Nykge1xuICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDNcbiAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBiaXRzTmVlZGVkID0gMFxuICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUlxuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBiaXRzTmVlZGVkICE9PSAwICYmXG4gICAgICAgICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpXG4gICAgICApIHtcbiAgICAgICAgYml0c05lZWRlZCA9IDBcbiAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVJcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYml0c05lZWRlZCAtPSA2XG4gICAgICBjb2RlUG9pbnQgPSAoY29kZVBvaW50IDw8IDYpIHwgKG9jdGV0ICYgNjMpXG4gICAgfVxuICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICBpZiAoY29kZVBvaW50IDw9IDB4ZmZmZikge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGQ4MDAgKyAoKGNvZGVQb2ludCAtIDB4ZmZmZiAtIDEpID4+IDEwKSlcbiAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoXG4gICAgICAgICAgMHhkYzAwICsgKChjb2RlUG9pbnQgLSAweGZmZmYgLSAxKSAmIDB4M2ZmKVxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHRoaXMuYml0c05lZWRlZCA9IGJpdHNOZWVkZWRcbiAgdGhpcy5jb2RlUG9pbnQgPSBjb2RlUG9pbnRcbiAgcmV0dXJuIHN0cmluZ1xufVxuXG4vLyBGaXJlZm94IDwgMzggdGhyb3dzIGFuIGVycm9yIHdpdGggc3RyZWFtIG9wdGlvblxudmFyIHN1cHBvcnRzU3RyZWFtT3B0aW9uID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAoXG4gICAgICBuZXcgVGV4dERlY29kZXIoKS5kZWNvZGUobmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgc3RyZWFtOiB0cnVlLFxuICAgICAgfSkgPT09ICd0ZXN0J1xuICAgIClcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgfVxuICByZXR1cm4gZmFsc2Vcbn1cblxuLy8gSUUsIEVkZ2VcbmlmIChcbiAgVGV4dERlY29kZXIgPT0gdW5kZWZpbmVkIHx8XG4gIFRleHRFbmNvZGVyID09IHVuZGVmaW5lZCB8fFxuICAhc3VwcG9ydHNTdHJlYW1PcHRpb24oKVxuKSB7XG4gIFRleHREZWNvZGVyID0gVGV4dERlY29kZXJQb2x5ZmlsbFxufVxuXG52YXIgayA9IGZ1bmN0aW9uICgpIHt9XG5cbmZ1bmN0aW9uIFhIUldyYXBwZXIoeGhyKSB7XG4gIHRoaXMud2l0aENyZWRlbnRpYWxzID0gZmFsc2VcbiAgdGhpcy5yZXNwb25zZVR5cGUgPSAnJ1xuICB0aGlzLnJlYWR5U3RhdGUgPSAwXG4gIHRoaXMuc3RhdHVzID0gMFxuICB0aGlzLnN0YXR1c1RleHQgPSAnJ1xuICB0aGlzLnJlc3BvbnNlVGV4dCA9ICcnXG4gIHRoaXMub25wcm9ncmVzcyA9IGtcbiAgdGhpcy5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBrXG4gIHRoaXMuX2NvbnRlbnRUeXBlID0gJydcbiAgdGhpcy5feGhyID0geGhyXG4gIHRoaXMuX3NlbmRUaW1lb3V0ID0gMFxuICB0aGlzLl9hYm9ydCA9IGtcbn1cblxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCkge1xuICB0aGlzLl9hYm9ydCh0cnVlKVxuXG4gIHZhciB0aGF0ID0gdGhpc1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIHZhciBzdGF0ZSA9IDFcbiAgdmFyIHRpbWVvdXQgPSAwXG5cbiAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbiAoc2lsZW50KSB7XG4gICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpXG4gICAgICB0aGF0Ll9zZW5kVGltZW91dCA9IDBcbiAgICB9XG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIHhoci5vbmxvYWQgPSBrXG4gICAgICB4aHIub25lcnJvciA9IGtcbiAgICAgIHhoci5vbmFib3J0ID0ga1xuICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBrXG4gICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0ga1xuICAgICAgLy8gSUUgOCAtIDk6IFhEb21haW5SZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIC8vIE9wZXJhIDwgMTA6IFhNTEh0dHBSZXF1ZXN0I2Fib3J0KCkgZG9lcyBub3QgZmlyZSBhbnkgZXZlbnRcbiAgICAgIHhoci5hYm9ydCgpXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIGlmICghc2lsZW50KSB7XG4gICAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDRcbiAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgICAgfVxuICAgIH1cbiAgICBzdGF0ZSA9IDBcbiAgfVxuXG4gIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChzdGF0ZSA9PT0gMSkge1xuICAgICAgLy8gc3RhdGUgPSAyO1xuICAgICAgdmFyIHN0YXR1cyA9IDBcbiAgICAgIHZhciBzdGF0dXNUZXh0ID0gJydcbiAgICAgIHZhciBjb250ZW50VHlwZSA9IHVuZGVmaW5lZFxuICAgICAgaWYgKCEoJ2NvbnRlbnRUeXBlJyBpbiB4aHIpKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgc3RhdHVzID0geGhyLnN0YXR1c1xuICAgICAgICAgIHN0YXR1c1RleHQgPSB4aHIuc3RhdHVzVGV4dFxuICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIC8vIElFIDwgMTAgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDIgfHwgeGhyLnJlYWR5U3RhdGUgPT09IDNcbiAgICAgICAgICAvLyBPcGVyYSA8IDExIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyXG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgc3RhdHVzID0gMFxuICAgICAgICAgIHN0YXR1c1RleHQgPSAnJ1xuICAgICAgICAgIGNvbnRlbnRUeXBlID0gdW5kZWZpbmVkXG4gICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdHVzID0gMjAwXG4gICAgICAgIHN0YXR1c1RleHQgPSAnT0snXG4gICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmNvbnRlbnRUeXBlXG4gICAgICB9XG4gICAgICBpZiAoc3RhdHVzICE9PSAwKSB7XG4gICAgICAgIHN0YXRlID0gMlxuICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAyXG4gICAgICAgIHRoYXQuc3RhdHVzID0gc3RhdHVzXG4gICAgICAgIHRoYXQuc3RhdHVzVGV4dCA9IHN0YXR1c1RleHRcbiAgICAgICAgdGhhdC5fY29udGVudFR5cGUgPSBjb250ZW50VHlwZVxuICAgICAgICB0aGF0Lm9ucmVhZHlzdGF0ZWNoYW5nZSgpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuICAgIG9uU3RhcnQoKVxuICAgIGlmIChzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgc3RhdGUgPSAzXG4gICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gJydcbiAgICAgIHRyeSB7XG4gICAgICAgIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElFIDggLSA5IHdpdGggWE1MSHR0cFJlcXVlc3RcbiAgICAgIH1cbiAgICAgIHRoYXQucmVhZHlTdGF0ZSA9IDNcbiAgICAgIHRoYXQucmVzcG9uc2VUZXh0ID0gcmVzcG9uc2VUZXh0XG4gICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKVxuICAgIH1cbiAgfVxuICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRmlyZWZveCA1MiBmaXJlcyBcInJlYWR5c3RhdGVjaGFuZ2VcIiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHdpdGhvdXQgZmluYWwgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSAzKVxuICAgIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1wiXG4gICAgb25Qcm9ncmVzcygpXG4gICAgaWYgKHN0YXRlID09PSAxIHx8IHN0YXRlID09PSAyIHx8IHN0YXRlID09PSAzKSB7XG4gICAgICBzdGF0ZSA9IDRcbiAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KVxuICAgICAgICB0aW1lb3V0ID0gMFxuICAgICAgfVxuICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNFxuICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKVxuICAgIH1cbiAgfVxuICB2YXIgb25SZWFkeVN0YXRlQ2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh4aHIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBPcGVyYSAxMlxuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgIG9uRmluaXNoKClcbiAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDMpIHtcbiAgICAgICAgb25Qcm9ncmVzcygpXG4gICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgIG9uU3RhcnQoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgNTAwKVxuICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgb25Qcm9ncmVzcygpXG4gICAgfVxuICB9XG5cbiAgLy8gWERvbWFpblJlcXVlc3QjYWJvcnQgcmVtb3ZlcyBvbnByb2dyZXNzLCBvbmVycm9yLCBvbmxvYWRcbiAgeGhyLm9ubG9hZCA9IG9uRmluaXNoXG4gIHhoci5vbmVycm9yID0gb25GaW5pc2hcbiAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAvLyBzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzY4NTk2XG4gIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTg4MDIwMFxuICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gIC8vIElFIDggZmlyZXMgXCJvbmxvYWRcIiB3aXRob3V0IFwib25wcm9ncmVzc1xuICB4aHIub25hYm9ydCA9IG9uRmluaXNoXG5cbiAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NzM2NzIzXG4gIGlmIChcbiAgICAhKCdzZW5kQXNCaW5hcnknIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkgJiZcbiAgICAhKCdtb3pBbm9uJyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpXG4gICkge1xuICAgIHhoci5vbnByb2dyZXNzID0gb25Qcm9ncmVzc1xuICB9XG5cbiAgLy8gSUUgOCAtIDkgKFhNTEhUVFBSZXF1ZXN0KVxuICAvLyBPcGVyYSA8IDEyXG4gIC8vIEZpcmVmb3ggPCAzLjVcbiAgLy8gRmlyZWZveCAzLjUgLSAzLjYgLSA/IDwgOS4wXG4gIC8vIG9ucHJvZ3Jlc3MgaXMgbm90IGZpcmVkIHNvbWV0aW1lcyBvciBkZWxheWVkXG4gIC8vIHNlZSBhbHNvICM2NFxuICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gb25SZWFkeVN0YXRlQ2hhbmdlXG5cbiAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgdXJsICs9ICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgKyAncGFkZGluZz10cnVlJ1xuICB9XG4gIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKVxuXG4gIGlmICgncmVhZHlTdGF0ZScgaW4geGhyKSB7XG4gICAgLy8gd29ya2Fyb3VuZCBmb3IgT3BlcmEgMTIgaXNzdWUgd2l0aCBcInByb2dyZXNzXCIgZXZlbnRzXG4gICAgLy8gIzkxXG4gICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25UaW1lb3V0KClcbiAgICB9LCAwKVxuICB9XG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fYWJvcnQoZmFsc2UpXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiB0aGlzLl9jb250ZW50VHlwZVxufVxuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIGlmICgnc2V0UmVxdWVzdEhlYWRlcicgaW4geGhyKSB7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgdmFsdWUpXG4gIH1cbn1cblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgPyB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcbiAgICA6ICcnXG59XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKCkge1xuICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgaWYgKFxuICAgICEoJ29udGltZW91dCcgaW4gWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlKSAmJlxuICAgIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJlxuICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgIT0gdW5kZWZpbmVkICYmXG4gICAgZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJ1xuICApIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGF0Ll9zZW5kVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwXG4gICAgICB0aGF0LnNlbmQoKVxuICAgIH0sIDQpXG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgeGhyID0gdGhpcy5feGhyXG4gIC8vIHdpdGhDcmVkZW50aWFscyBzaG91bGQgYmUgc2V0IGFmdGVyIFwib3BlblwiIGZvciBTYWZhcmkgYW5kIENocm9tZSAoPCAxOSA/KVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gdGhpcy53aXRoQ3JlZGVudGlhbHNcbiAgeGhyLnJlc3BvbnNlVHlwZSA9IHRoaXMucmVzcG9uc2VUeXBlXG4gIHRyeSB7XG4gICAgLy8geGhyLnNlbmQoKTsgdGhyb3dzIFwiTm90IGVub3VnaCBhcmd1bWVudHNcIiBpbiBGaXJlZm94IDMuMFxuICAgIHhoci5zZW5kKHVuZGVmaW5lZClcbiAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgLy8gU2FmYXJpIDUuMS43LCBPcGVyYSAxMlxuICAgIHRocm93IGVycm9yMVxuICB9XG59XG5cbmZ1bmN0aW9uIHRvTG93ZXJDYXNlKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAweDIwKVxuICB9KVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gIC8vIEdldCBoZWFkZXJzOiBpbXBsZW1lbnRlZCBhY2NvcmRpbmcgdG8gbW96aWxsYSdzIGV4YW1wbGUgY29kZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1hNTEh0dHBSZXF1ZXN0L2dldEFsbFJlc3BvbnNlSGVhZGVycyNFeGFtcGxlXG4gIHZhciBtYXAgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHZhciBhcnJheSA9IGFsbC5zcGxpdCgnXFxyXFxuJylcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHZhciBsaW5lID0gYXJyYXlbaV1cbiAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6ICcpXG4gICAgdmFyIG5hbWUgPSBwYXJ0cy5zaGlmdCgpXG4gICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKVxuICAgIG1hcFt0b0xvd2VyQ2FzZShuYW1lKV0gPSB2YWx1ZVxuICB9XG4gIHRoaXMuX21hcCA9IG1hcFxufVxuSGVhZGVyc1BvbHlmaWxsLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXVxufVxuXG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7fVxuXG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgeGhyLm9wZW4oJ0dFVCcsIHVybClcbiAgdmFyIG9mZnNldCA9IDBcbiAgeGhyLm9ucHJvZ3Jlc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJlc3BvbnNlVGV4dCA9IHhoci5yZXNwb25zZVRleHRcbiAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KVxuICAgIG9mZnNldCArPSBjaHVuay5sZW5ndGhcbiAgICBvblByb2dyZXNzQ2FsbGJhY2soY2h1bmspXG4gIH1cbiAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgIHZhciBzdGF0dXMgPSB4aHIuc3RhdHVzXG4gICAgICB2YXIgc3RhdHVzVGV4dCA9IHhoci5zdGF0dXNUZXh0XG4gICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpXG4gICAgICB2YXIgaGVhZGVycyA9IHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQsXG4gICAgICAgIGNvbnRlbnRUeXBlLFxuICAgICAgICBuZXcgSGVhZGVyc1BvbHlmaWxsKGhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgeGhyLmFib3J0KClcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgIG9uRmluaXNoQ2FsbGJhY2soKVxuICAgIH1cbiAgfVxuICB4aHIud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIHhoci5yZXNwb25zZVR5cGUgPSAndGV4dCdcbiAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzLCBuYW1lKSkge1xuICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICB9XG4gIH1cbiAgeGhyLnNlbmQoKVxufVxuXG5mdW5jdGlvbiBIZWFkZXJzV3JhcHBlcihoZWFkZXJzKSB7XG4gIHRoaXMuX2hlYWRlcnMgPSBoZWFkZXJzXG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHRoaXMuX2hlYWRlcnMuZ2V0KG5hbWUpXG59XG5cbmZ1bmN0aW9uIEZldGNoVHJhbnNwb3J0KCkge31cblxuRmV0Y2hUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbiAoXG4gIHhocixcbiAgb25TdGFydENhbGxiYWNrLFxuICBvblByb2dyZXNzQ2FsbGJhY2ssXG4gIG9uRmluaXNoQ2FsbGJhY2ssXG4gIHVybCxcbiAgd2l0aENyZWRlbnRpYWxzLFxuICBoZWFkZXJzXG4pIHtcbiAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyKClcbiAgdmFyIHNpZ25hbCA9IGNvbnRyb2xsZXIuc2lnbmFsIC8vIHNlZSAjMTIwXG4gIHZhciB0ZXh0RGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG4gIGZldGNoKHVybCwge1xuICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgY3JlZGVudGlhbHM6IHdpdGhDcmVkZW50aWFscyA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgc2lnbmFsOiBzaWduYWwsXG4gICAgY2FjaGU6ICduby1zdG9yZScsXG4gIH0pXG4gICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKVxuICAgICAgb25TdGFydENhbGxiYWNrKFxuICAgICAgICByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSxcbiAgICAgICAgbmV3IEhlYWRlcnNXcmFwcGVyKHJlc3BvbnNlLmhlYWRlcnMpLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpXG4gICAgICAgICAgcmVhZGVyLmNhbmNlbCgpXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIHZhciByZWFkTmV4dENodW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJlYWRlclxuICAgICAgICAgICAgLnJlYWQoKVxuICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAvLyBOb3RlOiBieXRlcyBpbiB0ZXh0RGVjb2RlciBhcmUgaWdub3JlZFxuICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHsgc3RyZWFtOiB0cnVlIH0pXG4gICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKVxuICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgWydjYXRjaCddKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJlYWROZXh0Q2h1bmsoKVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKFxuICAgICAgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgfSxcbiAgICAgIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKClcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gRXZlbnRUYXJnZXQoKSB7XG4gIHRoaXMuX2xpc3RlbmVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbn1cblxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHRocm93IGVcbiAgfSwgMClcbn1cblxuRXZlbnRUYXJnZXQucHJvdG90eXBlLmRpc3BhdGNoRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgZXZlbnQudGFyZ2V0ID0gdGhpc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgbGVuZ3RoID0gdHlwZUxpc3RlbmVycy5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICB2YXIgbGlzdGVuZXIgPSB0eXBlTGlzdGVuZXJzW2ldXG4gICAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyLmhhbmRsZUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgbGlzdGVuZXIuaGFuZGxlRXZlbnQoZXZlbnQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvd0Vycm9yKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5FdmVudFRhcmdldC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uICh0eXBlLCBsaXN0ZW5lcikge1xuICB0eXBlID0gU3RyaW5nKHR5cGUpXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnNcbiAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV1cbiAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgdHlwZUxpc3RlbmVycyA9IFtdXG4gICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVyc1xuICB9XG4gIHZhciBmb3VuZCA9IGZhbHNlXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmICh0eXBlTGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgZm91bmQgPSB0cnVlXG4gICAgfVxuICB9XG4gIGlmICghZm91bmQpIHtcbiAgICB0eXBlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpXG4gIH1cbn1cbkV2ZW50VGFyZ2V0LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24gKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHR5cGUgPSBTdHJpbmcodHlwZSlcbiAgdmFyIGxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1xuICB2YXIgdHlwZUxpc3RlbmVycyA9IGxpc3RlbmVyc1t0eXBlXVxuICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsdGVyZWQgPSBbXVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZUxpc3RlbmVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGZpbHRlcmVkLnB1c2godHlwZUxpc3RlbmVyc1tpXSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZpbHRlcmVkLmxlbmd0aCA9PT0gMCkge1xuICAgICAgZGVsZXRlIGxpc3RlbmVyc1t0eXBlXVxuICAgIH0gZWxzZSB7XG4gICAgICBsaXN0ZW5lcnNbdHlwZV0gPSBmaWx0ZXJlZFxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBFdmVudCh0eXBlKSB7XG4gIHRoaXMudHlwZSA9IHR5cGVcbiAgdGhpcy50YXJnZXQgPSB1bmRlZmluZWRcbn1cblxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgRXZlbnQuY2FsbCh0aGlzLCB0eXBlKVxuICB0aGlzLmRhdGEgPSBvcHRpb25zLmRhdGFcbiAgdGhpcy5sYXN0RXZlbnRJZCA9IG9wdGlvbnMubGFzdEV2ZW50SWRcbn1cblxuTWVzc2FnZUV2ZW50LnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXZlbnQucHJvdG90eXBlKVxuXG5mdW5jdGlvbiBDb25uZWN0aW9uRXZlbnQodHlwZSwgb3B0aW9ucykge1xuICBFdmVudC5jYWxsKHRoaXMsIHR5cGUpXG4gIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXNcbiAgdGhpcy5zdGF0dXNUZXh0ID0gb3B0aW9ucy5zdGF0dXNUZXh0XG4gIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVyc1xufVxuXG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudC5wcm90b3R5cGUpXG5cbnZhciBXQUlUSU5HID0gLTFcbnZhciBDT05ORUNUSU5HID0gMFxudmFyIE9QRU4gPSAxXG52YXIgQ0xPU0VEID0gMlxuXG52YXIgQUZURVJfQ1IgPSAtMVxudmFyIEZJRUxEX1NUQVJUID0gMFxudmFyIEZJRUxEID0gMVxudmFyIFZBTFVFX1NUQVJUID0gMlxudmFyIFZBTFVFID0gM1xuXG52YXIgY29udGVudFR5cGVSZWdFeHAgPSAvXnRleHRcXC9ldmVudFxcLXN0cmVhbTs/KFxccypjaGFyc2V0XFw9dXRmXFwtOCk/JC9pXG5cbnZhciBNSU5JTVVNX0RVUkFUSU9OID0gMTAwMFxudmFyIE1BWElNVU1fRFVSQVRJT04gPSAxODAwMDAwMFxuXG52YXIgcGFyc2VEdXJhdGlvbiA9IGZ1bmN0aW9uICh2YWx1ZSwgZGVmKSB7XG4gIHZhciBuID0gcGFyc2VJbnQodmFsdWUsIDEwKVxuICBpZiAobiAhPT0gbikge1xuICAgIG4gPSBkZWZcbiAgfVxuICByZXR1cm4gY2xhbXBEdXJhdGlvbihuKVxufVxudmFyIGNsYW1wRHVyYXRpb24gPSBmdW5jdGlvbiAobikge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgobiwgTUlOSU1VTV9EVVJBVElPTiksIE1BWElNVU1fRFVSQVRJT04pXG59XG5cbnZhciBmaXJlID0gZnVuY3Rpb24gKHRoYXQsIGYsIGV2ZW50KSB7XG4gIHRyeSB7XG4gICAgaWYgKHR5cGVvZiBmID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmLmNhbGwodGhhdCwgZXZlbnQpXG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgdGhyb3dFcnJvcihlKVxuICB9XG59XG5cbmZ1bmN0aW9uIEV2ZW50U291cmNlUG9seWZpbGwodXJsLCBvcHRpb25zKSB7XG4gIEV2ZW50VGFyZ2V0LmNhbGwodGhpcylcblxuICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZFxuICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZFxuICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWRcblxuICB0aGlzLnVybCA9IHVuZGVmaW5lZFxuICB0aGlzLnJlYWR5U3RhdGUgPSB1bmRlZmluZWRcbiAgdGhpcy53aXRoQ3JlZGVudGlhbHMgPSB1bmRlZmluZWRcblxuICB0aGlzLl9jbG9zZSA9IHVuZGVmaW5lZFxuXG4gIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucylcbn1cblxudmFyIGlzRmV0Y2hTdXBwb3J0ZWQgPVxuICBmZXRjaCAhPSB1bmRlZmluZWQgJiYgUmVzcG9uc2UgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZS5wcm90b3R5cGVcblxuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICB1cmwgPSBTdHJpbmcodXJsKVxuICB2YXIgd2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgQm9vbGVhbihvcHRpb25zLndpdGhDcmVkZW50aWFscylcblxuICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKVxuICB2YXIgaGVhcnRiZWF0VGltZW91dCA9XG4gICAgb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5oZWFydGJlYXRUaW1lb3V0ICE9IHVuZGVmaW5lZFxuICAgICAgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApXG4gICAgICA6IGNsYW1wRHVyYXRpb24oNDUwMDApXG5cbiAgdmFyIGxhc3RFdmVudElkID0gJydcbiAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5XG4gIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gIHZhciBoZWFkZXJzID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLmhlYWRlcnMgIT0gdW5kZWZpbmVkXG4gICAgICA/IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5oZWFkZXJzKSlcbiAgICAgIDogdW5kZWZpbmVkXG4gIHZhciBDdXJyZW50VHJhbnNwb3J0ID1cbiAgICBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBvcHRpb25zLlRyYW5zcG9ydCAhPSB1bmRlZmluZWRcbiAgICAgID8gb3B0aW9ucy5UcmFuc3BvcnRcbiAgICAgIDogWE1MSHR0cFJlcXVlc3RcbiAgdmFyIHhociA9XG4gICAgaXNGZXRjaFN1cHBvcnRlZCAmJlxuICAgICEob3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkKVxuICAgICAgPyB1bmRlZmluZWRcbiAgICAgIDogbmV3IFhIUldyYXBwZXIobmV3IEN1cnJlbnRUcmFuc3BvcnQoKSlcbiAgdmFyIHRyYW5zcG9ydCA9IHhociA9PSB1bmRlZmluZWQgPyBuZXcgRmV0Y2hUcmFuc3BvcnQoKSA6IG5ldyBYSFJUcmFuc3BvcnQoKVxuICB2YXIgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWRcbiAgdmFyIHRpbWVvdXQgPSAwXG4gIHZhciBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gIHZhciBkYXRhQnVmZmVyID0gJydcbiAgdmFyIGxhc3RFdmVudElkQnVmZmVyID0gJydcbiAgdmFyIGV2ZW50VHlwZUJ1ZmZlciA9ICcnXG5cbiAgdmFyIHRleHRCdWZmZXIgPSAnJ1xuICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICB2YXIgZmllbGRTdGFydCA9IDBcbiAgdmFyIHZhbHVlU3RhcnQgPSAwXG5cbiAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbiAoc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVycywgY2FuY2VsKSB7XG4gICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gQ09OTkVDVElORykge1xuICAgICAgY2FuY2VsRnVuY3Rpb24gPSBjYW5jZWxcbiAgICAgIGlmIChcbiAgICAgICAgc3RhdHVzID09PSAyMDAgJiZcbiAgICAgICAgY29udGVudFR5cGUgIT0gdW5kZWZpbmVkICYmXG4gICAgICAgIGNvbnRlbnRUeXBlUmVnRXhwLnRlc3QoY29udGVudFR5cGUpXG4gICAgICApIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gT1BFTlxuICAgICAgICB3YXNBY3Rpdml0eSA9IHRydWVcbiAgICAgICAgcmV0cnkgPSBpbml0aWFsUmV0cnlcbiAgICAgICAgZXMucmVhZHlTdGF0ZSA9IE9QRU5cbiAgICAgICAgdmFyIGV2ZW50ID0gbmV3IENvbm5lY3Rpb25FdmVudCgnb3BlbicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9ub3BlbiwgZXZlbnQpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbWVzc2FnZSA9ICcnXG4gICAgICAgIGlmIChzdGF0dXMgIT09IDIwMCkge1xuICAgICAgICAgIGlmIChzdGF0dXNUZXh0KSB7XG4gICAgICAgICAgICBzdGF0dXNUZXh0ID0gc3RhdHVzVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJylcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVzc2FnZSA9XG4gICAgICAgICAgICBcIkV2ZW50U291cmNlJ3MgcmVzcG9uc2UgaGFzIGEgc3RhdHVzIFwiICtcbiAgICAgICAgICAgIHN0YXR1cyArXG4gICAgICAgICAgICAnICcgK1xuICAgICAgICAgICAgc3RhdHVzVGV4dCArXG4gICAgICAgICAgICAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lc3NhZ2UgPVxuICAgICAgICAgICAgXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICtcbiAgICAgICAgICAgIChjb250ZW50VHlwZSA9PSB1bmRlZmluZWRcbiAgICAgICAgICAgICAgPyAnLSdcbiAgICAgICAgICAgICAgOiBjb250ZW50VHlwZS5yZXBsYWNlKC9cXHMrL2csICcgJykpICtcbiAgICAgICAgICAgICcuIEFib3J0aW5nIHRoZSBjb25uZWN0aW9uLidcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSlcbiAgICAgICAgY2xvc2UoKVxuICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICBzdGF0dXNUZXh0OiBzdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMsXG4gICAgICAgIH0pXG4gICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgIGZpcmUoZXMsIGVzLm9uZXJyb3IsIGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHZhciBvblByb2dyZXNzID0gZnVuY3Rpb24gKHRleHRDaHVuaykge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4pIHtcbiAgICAgIHZhciBuID0gLTFcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGV4dENodW5rLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjID0gdGV4dENodW5rLmNoYXJDb2RlQXQoaSlcbiAgICAgICAgaWYgKGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgIG4gPSBpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpXG4gICAgICB0ZXh0QnVmZmVyID0gKG4gPT09IC0xID8gdGV4dEJ1ZmZlciA6ICcnKSArIHRleHRDaHVuay5zbGljZShuICsgMSlcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgd2FzQWN0aXZpdHkgPSB0cnVlXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgY2h1bmsubGVuZ3RoOyBwb3NpdGlvbiArPSAxKSB7XG4gICAgICAgIHZhciBjID0gY2h1bmsuY2hhckNvZGVBdChwb3NpdGlvbilcbiAgICAgICAgaWYgKHN0YXRlID09PSBBRlRFUl9DUiAmJiBjID09PSAnXFxuJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gQUZURVJfQ1IpIHtcbiAgICAgICAgICAgIHN0YXRlID0gRklFTERfU1RBUlRcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGMgPT09ICdcXHInLmNoYXJDb2RlQXQoMCkgfHwgYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlICE9PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVTdGFydCA9IHBvc2l0aW9uICsgMVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKVxuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZShcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ICtcbiAgICAgICAgICAgICAgICAgICh2YWx1ZVN0YXJ0IDwgcG9zaXRpb24gJiZcbiAgICAgICAgICAgICAgICAgIGNodW5rLmNoYXJDb2RlQXQodmFsdWVTdGFydCkgPT09ICcgJy5jaGFyQ29kZUF0KDApXG4gICAgICAgICAgICAgICAgICAgID8gMVxuICAgICAgICAgICAgICAgICAgICA6IDApLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnZGF0YScpIHtcbiAgICAgICAgICAgICAgICBkYXRhQnVmZmVyICs9ICdcXG4nXG4gICAgICAgICAgICAgICAgZGF0YUJ1ZmZlciArPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaWQnKSB7XG4gICAgICAgICAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSB2YWx1ZVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnZXZlbnQnKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWVcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgIGluaXRpYWxSZXRyeSA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGluaXRpYWxSZXRyeSlcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeVxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICBoZWFydGJlYXRUaW1lb3V0ID0gcGFyc2VEdXJhdGlvbih2YWx1ZSwgaGVhcnRiZWF0VGltZW91dClcbiAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uVGltZW91dCgpXG4gICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZCA9IGxhc3RFdmVudElkQnVmZmVyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50KGV2ZW50VHlwZUJ1ZmZlciwge1xuICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YUJ1ZmZlci5zbGljZSgxKSxcbiAgICAgICAgICAgICAgICAgIGxhc3RFdmVudElkOiBsYXN0RXZlbnRJZEJ1ZmZlcixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJ21lc3NhZ2UnKSB7XG4gICAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm1lc3NhZ2UsIGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDTE9TRUQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhQnVmZmVyID0gJydcbiAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlRcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRF9TVEFSVCkge1xuICAgICAgICAgICAgICBmaWVsZFN0YXJ0ID0gcG9zaXRpb25cbiAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBGSUVMRCkge1xuICAgICAgICAgICAgICBpZiAoYyA9PT0gJzonLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZVN0YXJ0ID0gcG9zaXRpb24gKyAxXG4gICAgICAgICAgICAgICAgc3RhdGUgPSBWQUxVRV9TVEFSVFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSBWQUxVRV9TVEFSVCkge1xuICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24gKCkge1xuICAgIGlmIChjdXJyZW50U3RhdGUgPT09IE9QRU4gfHwgY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICBjdXJyZW50U3RhdGUgPSBXQUlUSU5HXG4gICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgICAgdGltZW91dCA9IDBcbiAgICAgIH1cbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgb25UaW1lb3V0KClcbiAgICAgIH0sIHJldHJ5KVxuICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKVxuXG4gICAgICBlcy5yZWFkeVN0YXRlID0gQ09OTkVDVElOR1xuICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50KCdlcnJvcicpXG4gICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KVxuICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpXG4gICAgfVxuICB9XG5cbiAgdmFyIGNsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgIGN1cnJlbnRTdGF0ZSA9IENMT1NFRFxuICAgIGlmIChjYW5jZWxGdW5jdGlvbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNhbmNlbEZ1bmN0aW9uKClcbiAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgfVxuICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dClcbiAgICAgIHRpbWVvdXQgPSAwXG4gICAgfVxuICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRURcbiAgfVxuXG4gIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGltZW91dCA9IDBcblxuICAgIGlmIChjdXJyZW50U3RhdGUgIT09IFdBSVRJTkcpIHtcbiAgICAgIGlmICghd2FzQWN0aXZpdHkgJiYgY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93RXJyb3IoXG4gICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ05vIGFjdGl2aXR5IHdpdGhpbiAnICtcbiAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCArXG4gICAgICAgICAgICAgICcgbWlsbGlzZWNvbmRzLiBSZWNvbm5lY3RpbmcuJ1xuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICBjYW5jZWxGdW5jdGlvbigpXG4gICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBvblRpbWVvdXQoKVxuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgd2FzQWN0aXZpdHkgPSBmYWxzZVxuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIG9uVGltZW91dCgpXG4gICAgfSwgaGVhcnRiZWF0VGltZW91dClcblxuICAgIGN1cnJlbnRTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgICBkYXRhQnVmZmVyID0gJydcbiAgICBldmVudFR5cGVCdWZmZXIgPSAnJ1xuICAgIGxhc3RFdmVudElkQnVmZmVyID0gbGFzdEV2ZW50SWRcbiAgICB0ZXh0QnVmZmVyID0gJydcbiAgICBmaWVsZFN0YXJ0ID0gMFxuICAgIHZhbHVlU3RhcnQgPSAwXG4gICAgc3RhdGUgPSBGSUVMRF9TVEFSVFxuXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDI4OTE2XG4gICAgLy8gUmVxdWVzdCBoZWFkZXIgZmllbGQgTGFzdC1FdmVudC1JRCBpcyBub3QgYWxsb3dlZCBieSBBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzLlxuICAgIHZhciByZXF1ZXN0VVJMID0gdXJsXG4gICAgaWYgKHVybC5zbGljZSgwLCA1KSAhPT0gJ2RhdGE6JyAmJiB1cmwuc2xpY2UoMCwgNSkgIT09ICdibG9iOicpIHtcbiAgICAgIGlmIChsYXN0RXZlbnRJZCAhPT0gJycpIHtcbiAgICAgICAgcmVxdWVzdFVSTCArPVxuICAgICAgICAgICh1cmwuaW5kZXhPZignPycpID09PSAtMSA/ICc/JyA6ICcmJykgK1xuICAgICAgICAgICdsYXN0RXZlbnRJZD0nICtcbiAgICAgICAgICBlbmNvZGVVUklDb21wb25lbnQobGFzdEV2ZW50SWQpXG4gICAgICB9XG4gICAgfVxuICAgIHZhciByZXF1ZXN0SGVhZGVycyA9IHt9XG4gICAgcmVxdWVzdEhlYWRlcnNbJ0FjY2VwdCddID0gJ3RleHQvZXZlbnQtc3RyZWFtJ1xuICAgIGlmIChoZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXJzKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICByZXF1ZXN0SGVhZGVyc1tuYW1lXSA9IGhlYWRlcnNbbmFtZV1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgdHJhbnNwb3J0Lm9wZW4oXG4gICAgICAgIHhocixcbiAgICAgICAgb25TdGFydCxcbiAgICAgICAgb25Qcm9ncmVzcyxcbiAgICAgICAgb25GaW5pc2gsXG4gICAgICAgIHJlcXVlc3RVUkwsXG4gICAgICAgIHdpdGhDcmVkZW50aWFscyxcbiAgICAgICAgcmVxdWVzdEhlYWRlcnNcbiAgICAgIClcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY2xvc2UoKVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG4gIH1cblxuICBlcy51cmwgPSB1cmxcbiAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkdcbiAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzXG4gIGVzLl9jbG9zZSA9IGNsb3NlXG5cbiAgb25UaW1lb3V0KClcbn1cblxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0LnByb3RvdHlwZSlcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTlxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ0xPU0VEID0gQ0xPU0VEXG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5fY2xvc2UoKVxufVxuXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HXG5FdmVudFNvdXJjZVBvbHlmaWxsLk9QRU4gPSBPUEVOXG5FdmVudFNvdXJjZVBvbHlmaWxsLkNMT1NFRCA9IENMT1NFRFxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkXG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50U291cmNlUG9seWZpbGxcbiIsIi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZW1vdmUgTmV4dC5qcycgbm8tRk9VQyBzdHlsZXMgd29ya2Fyb3VuZCBmb3IgdXNpbmdcbi8vIGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50LiBJdCBtdXN0IGJlIGNhbGxlZCBiZWZvcmUgaHlkcmF0aW9uLCBvciBlbHNlXG4vLyByZW5kZXJpbmcgd29uJ3QgaGF2ZSB0aGUgY29ycmVjdCBjb21wdXRlZCB2YWx1ZXMgaW4gZWZmZWN0cy5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICA7KHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dCkoZnVuY3Rpb24gKCkge1xuICAgIGZvciAoXG4gICAgICB2YXIgeCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLCBpID0geC5sZW5ndGg7XG4gICAgICBpLS07XG5cbiAgICApIHtcbiAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKVxuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKClcbiAgICB9XG4gIH0pXG59XG4iLCIvKiBnbG9iYWwgbG9jYXRpb24gKi9cbmltcG9ydCB7IGdldEV2ZW50U291cmNlV3JhcHBlciB9IGZyb20gJy4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZSdcblxubGV0IGV2dFNvdXJjZVxuZXhwb3J0IGxldCBjdXJyZW50UGFnZVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICBpZiAoZXZ0U291cmNlKSBldnRTb3VyY2UuY2xvc2UoKVxuICBldnRTb3VyY2UgPSBudWxsXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gIGNvbnN0IHBhdGhuYW1lID0gcGF0aG5hbWVGbigpXG5cbiAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgaWYgKHBhdGhuYW1lID09PSBjdXJyZW50UGFnZSAmJiAhcmV0cnkpIHJldHVyblxuICBjdXJyZW50UGFnZSA9IHBhdGhuYW1lXG4gIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICBjbG9zZVBpbmcoKVxuXG4gIGV2dFNvdXJjZSA9IGdldEV2ZW50U291cmNlV3JhcHBlcih7XG4gICAgcGF0aDogYCR7YXNzZXRQcmVmaXh9L19uZXh0L3dlYnBhY2staG1yP3BhZ2U9JHtjdXJyZW50UGFnZX1gLFxuICAgIHRpbWVvdXQ6IDUwMDAsXG4gIH0pXG5cbiAgZXZ0U291cmNlLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcGF5bG9hZCA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgLy8gUGF5bG9hZCBjYW4gYmUgaW52YWxpZCBldmVuIGlmIHRoZSBwYWdlIGRvZXMgbm90IGV4aXN0LlxuICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYWtlIHN1cmUgaXQgZXhpc3RzIGJlZm9yZSByZWxvYWRpbmcuXG4gICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgfSkudGhlbigocGFnZVJlcykgPT4ge1xuICAgICAgICAgIGlmIChwYWdlUmVzLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ29uLWRlbWFuZC1lbnRyaWVzIGZhaWxlZCB0byBwYXJzZSByZXNwb25zZScsIGVycilcbiAgICB9XG4gIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9