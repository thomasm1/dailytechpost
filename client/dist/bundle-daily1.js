/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(18);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(12);
var ctx = __webpack_require__(19);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(47)('wks');
var uid = __webpack_require__(33);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(21);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var IE8_DOM_DEFINE = __webpack_require__(94);
var toPrimitive = __webpack_require__(23);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var createDesc = __webpack_require__(32);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var has = __webpack_require__(14);
var SRC = __webpack_require__(33)('src');
var $toString = __webpack_require__(134);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(18).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var fails = __webpack_require__(3);
var defined = __webpack_require__(24);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(48);
var defined = __webpack_require__(24);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(49);
var createDesc = __webpack_require__(32);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(23);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(94);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(9);
var IE_PROTO = __webpack_require__(68)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.9' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(3);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(0);
var core = __webpack_require__(18);
var fails = __webpack_require__(3);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(19);
var IObject = __webpack_require__(48);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(6);
var asc = __webpack_require__(84);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

if (__webpack_require__(7)) {
  var LIBRARY = __webpack_require__(29);
  var global = __webpack_require__(2);
  var fails = __webpack_require__(3);
  var $export = __webpack_require__(0);
  var $typed = __webpack_require__(62);
  var $buffer = __webpack_require__(92);
  var ctx = __webpack_require__(19);
  var anInstance = __webpack_require__(39);
  var propertyDesc = __webpack_require__(32);
  var hide = __webpack_require__(11);
  var redefineAll = __webpack_require__(41);
  var toInteger = __webpack_require__(21);
  var toLength = __webpack_require__(6);
  var toIndex = __webpack_require__(122);
  var toAbsoluteIndex = __webpack_require__(35);
  var toPrimitive = __webpack_require__(23);
  var has = __webpack_require__(14);
  var classof = __webpack_require__(44);
  var isObject = __webpack_require__(4);
  var toObject = __webpack_require__(9);
  var isArrayIter = __webpack_require__(81);
  var create = __webpack_require__(36);
  var getPrototypeOf = __webpack_require__(17);
  var gOPN = __webpack_require__(37).f;
  var getIterFn = __webpack_require__(83);
  var uid = __webpack_require__(33);
  var wks = __webpack_require__(5);
  var createArrayMethod = __webpack_require__(26);
  var createArrayIncludes = __webpack_require__(52);
  var speciesConstructor = __webpack_require__(51);
  var ArrayIterators = __webpack_require__(86);
  var Iterators = __webpack_require__(46);
  var $iterDetect = __webpack_require__(57);
  var setSpecies = __webpack_require__(38);
  var arrayFill = __webpack_require__(85);
  var arrayCopyWithin = __webpack_require__(111);
  var $DP = __webpack_require__(8);
  var $GOPD = __webpack_require__(16);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var Map = __webpack_require__(117);
var $export = __webpack_require__(0);
var shared = __webpack_require__(47)('metadata');
var store = shared.store || (shared.store = new (__webpack_require__(120))());

var getOrCreateMetadataMap = function (target, targetKey, create) {
  var targetMetadata = store.get(target);
  if (!targetMetadata) {
    if (!create) return undefined;
    store.set(target, targetMetadata = new Map());
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if (!keyMetadata) {
    if (!create) return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map());
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function (target, targetKey) {
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
  var keys = [];
  if (metadataMap) metadataMap.forEach(function (_, key) { keys.push(key); });
  return keys;
};
var toMetaKey = function (it) {
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp = function (O) {
  $export($export.S, 'Reflect', O);
};

module.exports = {
  store: store,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey,
  exp: exp
};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(33)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(8).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(3)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(5)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(96);
var enumBugKeys = __webpack_require__(69);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(1);
var dPs = __webpack_require__(97);
var enumBugKeys = __webpack_require__(69);
var IE_PROTO = __webpack_require__(68)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(66)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(70).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(96);
var hiddenKeys = __webpack_require__(69).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(8);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var call = __webpack_require__(109);
var isArrayIter = __webpack_require__(81);
var anObject = __webpack_require__(1);
var toLength = __webpack_require__(6);
var getIterFn = __webpack_require__(83);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(5)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(20);
var TAG = __webpack_require__(5)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var defined = __webpack_require__(24);
var fails = __webpack_require__(3);
var spaces = __webpack_require__(72);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(18);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(29) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(20);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 49 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(1);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(5)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(6);
var toAbsoluteIndex = __webpack_require__(35);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 53 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(20);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(21);
var defined = __webpack_require__(24);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(20);
var MATCH = __webpack_require__(5)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(5)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(44);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(113);
var redefine = __webpack_require__(12);
var hide = __webpack_require__(11);
var fails = __webpack_require__(3);
var defined = __webpack_require__(24);
var wks = __webpack_require__(5);
var regexpExec = __webpack_require__(87);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var redefineAll = __webpack_require__(41);
var meta = __webpack_require__(30);
var forOf = __webpack_require__(40);
var anInstance = __webpack_require__(39);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var $iterDetect = __webpack_require__(57);
var setToStringTag = __webpack_require__(43);
var inheritIfRequired = __webpack_require__(73);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var uid = __webpack_require__(33);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Forced replacement prototype accessors methods
module.exports = __webpack_require__(29) || !__webpack_require__(3)(function () {
  var K = Math.random();
  // In FF throws only define methods
  // eslint-disable-next-line no-undef, no-useless-call
  __defineSetter__.call(null, K, function () { /* empty */ });
  delete __webpack_require__(2)[K];
});


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var ctx = __webpack_require__(19);
var forOf = __webpack_require__(40);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(18);
var LIBRARY = __webpack_require__(29);
var wksExt = __webpack_require__(95);
var defineProperty = __webpack_require__(8).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(47)('keys');
var uid = __webpack_require__(33);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(19)(Function.call, __webpack_require__(16).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(71).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toInteger = __webpack_require__(21);
var defined = __webpack_require__(24);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 75 */
/***/ (function(module, exports) {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 76 */
/***/ (function(module, exports) {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(46);
var $iterCreate = __webpack_require__(78);
var setToStringTag = __webpack_require__(43);
var getPrototypeOf = __webpack_require__(17);
var ITERATOR = __webpack_require__(5)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(36);
var descriptor = __webpack_require__(32);
var setToStringTag = __webpack_require__(43);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(5)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(56);
var defined = __webpack_require__(24);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(5)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(46);
var ITERATOR = __webpack_require__(5)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8);
var createDesc = __webpack_require__(32);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(44);
var ITERATOR = __webpack_require__(5)('iterator');
var Iterators = __webpack_require__(46);
module.exports = __webpack_require__(18).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(223);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(31);
var step = __webpack_require__(112);
var Iterators = __webpack_require__(46);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(77)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(50);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(55)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(19);
var invoke = __webpack_require__(102);
var html = __webpack_require__(70);
var cel = __webpack_require__(66);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(20)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(89).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(20)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var DESCRIPTORS = __webpack_require__(7);
var LIBRARY = __webpack_require__(29);
var $typed = __webpack_require__(62);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(41);
var fails = __webpack_require__(3);
var anInstance = __webpack_require__(39);
var toInteger = __webpack_require__(21);
var toLength = __webpack_require__(6);
var toIndex = __webpack_require__(122);
var gOPN = __webpack_require__(37).f;
var dP = __webpack_require__(8).f;
var arrayFill = __webpack_require__(85);
var setToStringTag = __webpack_require__(43);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 93 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(3)(function () {
  return Object.defineProperty(__webpack_require__(66)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(5);


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(14);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(52)(false);
var IE_PROTO = __webpack_require__(68)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8);
var anObject = __webpack_require__(1);
var getKeys = __webpack_require__(34);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(37).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(7);
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(49);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(48);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(3)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 100 */
/***/ (function(module, exports) {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(10);
var isObject = __webpack_require__(4);
var invoke = __webpack_require__(102);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(2).parseInt;
var $trim = __webpack_require__(45).trim;
var ws = __webpack_require__(72);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(2).parseFloat;
var $trim = __webpack_require__(45).trim;

module.exports = 1 / $parseFloat(__webpack_require__(72) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var cof = __webpack_require__(20);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(75);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(1);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var IObject = __webpack_require__(48);
var toLength = __webpack_require__(6);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(87);
__webpack_require__(0)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(8).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(50)
});


/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(91);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(118);
var validate = __webpack_require__(42);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(61)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(8).f;
var create = __webpack_require__(36);
var redefineAll = __webpack_require__(41);
var ctx = __webpack_require__(19);
var anInstance = __webpack_require__(39);
var forOf = __webpack_require__(40);
var $iterDefine = __webpack_require__(77);
var step = __webpack_require__(112);
var setSpecies = __webpack_require__(38);
var DESCRIPTORS = __webpack_require__(7);
var fastKey = __webpack_require__(30).fastKey;
var validate = __webpack_require__(42);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(118);
var validate = __webpack_require__(42);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(61)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var each = __webpack_require__(26)(0);
var redefine = __webpack_require__(12);
var meta = __webpack_require__(30);
var assign = __webpack_require__(99);
var weak = __webpack_require__(121);
var isObject = __webpack_require__(4);
var validate = __webpack_require__(42);
var NATIVE_WEAK_MAP = __webpack_require__(42);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(61)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(41);
var getWeak = __webpack_require__(30).getWeak;
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var anInstance = __webpack_require__(39);
var forOf = __webpack_require__(40);
var createArrayMethod = __webpack_require__(26);
var $has = __webpack_require__(14);
var validate = __webpack_require__(42);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(21);
var toLength = __webpack_require__(6);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(37);
var gOPS = __webpack_require__(53);
var anObject = __webpack_require__(1);
var Reflect = __webpack_require__(2).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(54);
var isObject = __webpack_require__(4);
var toLength = __webpack_require__(6);
var ctx = __webpack_require__(19);
var IS_CONCAT_SPREADABLE = __webpack_require__(5)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(6);
var repeat = __webpack_require__(74);
var defined = __webpack_require__(24);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(7);
var getKeys = __webpack_require__(34);
var toIObject = __webpack_require__(15);
var isEnum = __webpack_require__(49).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(44);
var from = __webpack_require__(128);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(40);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// https://rwaldron.github.io/proposal-math-extensions/
module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
  if (
    arguments.length === 0
      // eslint-disable-next-line no-self-compare
      || x != x
      // eslint-disable-next-line no-self-compare
      || inLow != inLow
      // eslint-disable-next-line no-self-compare
      || inHigh != inHigh
      // eslint-disable-next-line no-self-compare
      || outLow != outLow
      // eslint-disable-next-line no-self-compare
      || outHigh != outHigh
  ) return NaN;
  if (x === Infinity || x === -Infinity) return x;
  return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(131);
module.exports = __webpack_require__(333);


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

__webpack_require__(132);

__webpack_require__(329);

__webpack_require__(330);

if (global._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
global._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
__webpack_require__(136);
__webpack_require__(137);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(142);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(158);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(161);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(164);
__webpack_require__(165);
__webpack_require__(166);
__webpack_require__(167);
__webpack_require__(168);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(171);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(175);
__webpack_require__(176);
__webpack_require__(177);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(183);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(188);
__webpack_require__(189);
__webpack_require__(190);
__webpack_require__(191);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(195);
__webpack_require__(196);
__webpack_require__(197);
__webpack_require__(198);
__webpack_require__(199);
__webpack_require__(200);
__webpack_require__(201);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(205);
__webpack_require__(206);
__webpack_require__(207);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(211);
__webpack_require__(213);
__webpack_require__(214);
__webpack_require__(216);
__webpack_require__(217);
__webpack_require__(218);
__webpack_require__(219);
__webpack_require__(220);
__webpack_require__(221);
__webpack_require__(222);
__webpack_require__(224);
__webpack_require__(225);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(228);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(231);
__webpack_require__(232);
__webpack_require__(233);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(236);
__webpack_require__(86);
__webpack_require__(237);
__webpack_require__(113);
__webpack_require__(238);
__webpack_require__(114);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(117);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(256);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
__webpack_require__(260);
__webpack_require__(261);
__webpack_require__(262);
__webpack_require__(263);
__webpack_require__(264);
__webpack_require__(265);
__webpack_require__(266);
__webpack_require__(267);
__webpack_require__(268);
__webpack_require__(269);
__webpack_require__(270);
__webpack_require__(271);
__webpack_require__(272);
__webpack_require__(273);
__webpack_require__(274);
__webpack_require__(275);
__webpack_require__(276);
__webpack_require__(277);
__webpack_require__(278);
__webpack_require__(279);
__webpack_require__(280);
__webpack_require__(281);
__webpack_require__(282);
__webpack_require__(283);
__webpack_require__(284);
__webpack_require__(285);
__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
__webpack_require__(289);
__webpack_require__(290);
__webpack_require__(291);
__webpack_require__(292);
__webpack_require__(293);
__webpack_require__(294);
__webpack_require__(295);
__webpack_require__(296);
__webpack_require__(297);
__webpack_require__(298);
__webpack_require__(299);
__webpack_require__(300);
__webpack_require__(301);
__webpack_require__(302);
__webpack_require__(303);
__webpack_require__(304);
__webpack_require__(305);
__webpack_require__(306);
__webpack_require__(307);
__webpack_require__(308);
__webpack_require__(309);
__webpack_require__(310);
__webpack_require__(311);
__webpack_require__(312);
__webpack_require__(313);
__webpack_require__(314);
__webpack_require__(315);
__webpack_require__(316);
__webpack_require__(317);
__webpack_require__(318);
__webpack_require__(319);
__webpack_require__(320);
__webpack_require__(321);
__webpack_require__(322);
__webpack_require__(323);
__webpack_require__(324);
__webpack_require__(325);
__webpack_require__(326);
__webpack_require__(327);
__webpack_require__(328);
module.exports = __webpack_require__(18);


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(0);
var redefine = __webpack_require__(12);
var META = __webpack_require__(30).KEY;
var $fails = __webpack_require__(3);
var shared = __webpack_require__(47);
var setToStringTag = __webpack_require__(43);
var uid = __webpack_require__(33);
var wks = __webpack_require__(5);
var wksExt = __webpack_require__(95);
var wksDefine = __webpack_require__(67);
var enumKeys = __webpack_require__(135);
var isArray = __webpack_require__(54);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var toObject = __webpack_require__(9);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(23);
var createDesc = __webpack_require__(32);
var _create = __webpack_require__(36);
var gOPNExt = __webpack_require__(98);
var $GOPD = __webpack_require__(16);
var $GOPS = __webpack_require__(53);
var $DP = __webpack_require__(8);
var $keys = __webpack_require__(34);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(37).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(49).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(29)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47)('native-function-to-string', Function.toString);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(34);
var gOPS = __webpack_require__(53);
var pIE = __webpack_require__(49);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(36) });


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(8).f });


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(97) });


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(15);
var $getOwnPropertyDescriptor = __webpack_require__(16).f;

__webpack_require__(25)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(9);
var $getPrototypeOf = __webpack_require__(17);

__webpack_require__(25)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(9);
var $keys = __webpack_require__(34);

__webpack_require__(25)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(25)('getOwnPropertyNames', function () {
  return __webpack_require__(98).f;
});


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(25)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(25)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(4);
var meta = __webpack_require__(30).onFreeze;

__webpack_require__(25)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(4);

__webpack_require__(25)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(4);

__webpack_require__(25)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(4);

__webpack_require__(25)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(0);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(99) });


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { is: __webpack_require__(100) });


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(0);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(71).set });


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(44);
var test = {};
test[__webpack_require__(5)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(12)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(0);

$export($export.P, 'Function', { bind: __webpack_require__(101) });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(8).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(4);
var getPrototypeOf = __webpack_require__(17);
var HAS_INSTANCE = __webpack_require__(5)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(8).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(103);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(104);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(14);
var cof = __webpack_require__(20);
var inheritIfRequired = __webpack_require__(73);
var toPrimitive = __webpack_require__(23);
var fails = __webpack_require__(3);
var gOPN = __webpack_require__(37).f;
var gOPD = __webpack_require__(16).f;
var dP = __webpack_require__(8).f;
var $trim = __webpack_require__(45).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(36)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(12)(global, NUMBER, $Number);
}


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toInteger = __webpack_require__(21);
var aNumberValue = __webpack_require__(105);
var repeat = __webpack_require__(74);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(3)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $fails = __webpack_require__(3);
var aNumberValue = __webpack_require__(105);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(0);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(0);
var _isFinite = __webpack_require__(2).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', { isInteger: __webpack_require__(106) });


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(0);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(0);
var isInteger = __webpack_require__(106);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(0);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseFloat = __webpack_require__(104);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $parseInt = __webpack_require__(103);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(0);
var log1p = __webpack_require__(107);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(0);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(0);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(0);
var sign = __webpack_require__(75);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(0);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(0);
var $expm1 = __webpack_require__(76);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { fround: __webpack_require__(108) });


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(0);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(0);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { log1p: __webpack_require__(107) });


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', { sign: __webpack_require__(75) });


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(76);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(3)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(0);
var expm1 = __webpack_require__(76);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toAbsoluteIndex = __webpack_require__(35);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(6);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(45)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(55)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(77)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $at = __webpack_require__(55)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(6);
var context = __webpack_require__(79);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(80)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(0);
var context = __webpack_require__(79);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(80)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(74)
});


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(0);
var toLength = __webpack_require__(6);
var context = __webpack_require__(79);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(80)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(13)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(13)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(13)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(13)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(13)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(13)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(13)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(13)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(13)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(13)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(13)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(13)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(13)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(0);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(23);

$export($export.P + $export.F * __webpack_require__(3)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(0);
var toISOString = __webpack_require__(212);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(3);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(12)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var TO_PRIMITIVE = __webpack_require__(5)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(215));


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(23);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(0);

$export($export.S, 'Array', { isArray: __webpack_require__(54) });


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(19);
var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var call = __webpack_require__(109);
var isArrayIter = __webpack_require__(81);
var toLength = __webpack_require__(6);
var createProperty = __webpack_require__(82);
var getIterFn = __webpack_require__(83);

$export($export.S + $export.F * !__webpack_require__(57)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var createProperty = __webpack_require__(82);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(3)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(48) != Object || !__webpack_require__(22)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var html = __webpack_require__(70);
var cof = __webpack_require__(20);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(3)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var toObject = __webpack_require__(9);
var fails = __webpack_require__(3);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(22)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $forEach = __webpack_require__(26)(0);
var STRICT = __webpack_require__(22)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(54);
var SPECIES = __webpack_require__(5)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $map = __webpack_require__(26)(1);

$export($export.P + $export.F * !__webpack_require__(22)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $filter = __webpack_require__(26)(2);

$export($export.P + $export.F * !__webpack_require__(22)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $some = __webpack_require__(26)(3);

$export($export.P + $export.F * !__webpack_require__(22)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $every = __webpack_require__(26)(4);

$export($export.P + $export.F * !__webpack_require__(22)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(110);

$export($export.P + $export.F * !__webpack_require__(22)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $reduce = __webpack_require__(110);

$export($export.P + $export.F * !__webpack_require__(22)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $indexOf = __webpack_require__(52)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toIObject = __webpack_require__(15);
var toInteger = __webpack_require__(21);
var toLength = __webpack_require__(6);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(22)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { copyWithin: __webpack_require__(111) });

__webpack_require__(31)('copyWithin');


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(0);

$export($export.P, 'Array', { fill: __webpack_require__(85) });

__webpack_require__(31)('fill');


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(26)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(31)(KEY);


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(0);
var $find = __webpack_require__(26)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(31)(KEY);


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(38)('Array');


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var inheritIfRequired = __webpack_require__(73);
var dP = __webpack_require__(8).f;
var gOPN = __webpack_require__(37).f;
var isRegExp = __webpack_require__(56);
var $flags = __webpack_require__(50);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(3)(function () {
  re2[__webpack_require__(5)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(12)(global, 'RegExp', $RegExp);
}

__webpack_require__(38)('RegExp');


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(114);
var anObject = __webpack_require__(1);
var $flags = __webpack_require__(50);
var DESCRIPTORS = __webpack_require__(7);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(12)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(3)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toLength = __webpack_require__(6);
var advanceStringIndex = __webpack_require__(88);
var regExpExec = __webpack_require__(58);

// @@match logic
__webpack_require__(59)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(6);
var toInteger = __webpack_require__(21);
var advanceStringIndex = __webpack_require__(88);
var regExpExec = __webpack_require__(58);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(59)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(1);
var sameValue = __webpack_require__(100);
var regExpExec = __webpack_require__(58);

// @@search logic
__webpack_require__(59)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(56);
var anObject = __webpack_require__(1);
var speciesConstructor = __webpack_require__(51);
var advanceStringIndex = __webpack_require__(88);
var toLength = __webpack_require__(6);
var callRegExpExec = __webpack_require__(58);
var regexpExec = __webpack_require__(87);
var fails = __webpack_require__(3);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(59)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(29);
var global = __webpack_require__(2);
var ctx = __webpack_require__(19);
var classof = __webpack_require__(44);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(39);
var forOf = __webpack_require__(40);
var speciesConstructor = __webpack_require__(51);
var task = __webpack_require__(89).set;
var microtask = __webpack_require__(90)();
var newPromiseCapabilityModule = __webpack_require__(91);
var perform = __webpack_require__(115);
var userAgent = __webpack_require__(60);
var promiseResolve = __webpack_require__(116);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(5)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(41)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(43)($Promise, PROMISE);
__webpack_require__(38)(PROMISE);
Wrapper = __webpack_require__(18)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(57)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var weak = __webpack_require__(121);
var validate = __webpack_require__(42);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(61)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var $typed = __webpack_require__(62);
var buffer = __webpack_require__(92);
var anObject = __webpack_require__(1);
var toAbsoluteIndex = __webpack_require__(35);
var toLength = __webpack_require__(6);
var isObject = __webpack_require__(4);
var ArrayBuffer = __webpack_require__(2).ArrayBuffer;
var speciesConstructor = __webpack_require__(51);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(3)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(38)(ARRAY_BUFFER);


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
$export($export.G + $export.W + $export.F * !__webpack_require__(62).ABV, {
  DataView: __webpack_require__(92).DataView
});


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(27)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(0);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var rApply = (__webpack_require__(2).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(3)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(0);
var create = __webpack_require__(36);
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);
var fails = __webpack_require__(3);
var bind = __webpack_require__(101);
var rConstruct = (__webpack_require__(2).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(8);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var toPrimitive = __webpack_require__(23);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(3)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(0);
var gOPD = __webpack_require__(16).f;
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(78)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(16);
var getPrototypeOf = __webpack_require__(17);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(1);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(16);
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(0);
var getProto = __webpack_require__(17);
var anObject = __webpack_require__(1);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(0);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(123) });


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(0);
var anObject = __webpack_require__(1);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(8);
var gOPD = __webpack_require__(16);
var getPrototypeOf = __webpack_require__(17);
var has = __webpack_require__(14);
var $export = __webpack_require__(0);
var createDesc = __webpack_require__(32);
var anObject = __webpack_require__(1);
var isObject = __webpack_require__(4);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(0);
var setProto = __webpack_require__(71);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(0);
var $includes = __webpack_require__(52)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(31)('includes');


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(124);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(6);
var aFunction = __webpack_require__(10);
var arraySpeciesCreate = __webpack_require__(84);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(31)('flatMap');


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
var $export = __webpack_require__(0);
var flattenIntoArray = __webpack_require__(124);
var toObject = __webpack_require__(9);
var toLength = __webpack_require__(6);
var toInteger = __webpack_require__(21);
var arraySpeciesCreate = __webpack_require__(84);

$export($export.P, 'Array', {
  flatten: function flatten(/* depthArg = 1 */) {
    var depthArg = arguments[0];
    var O = toObject(this);
    var sourceLen = toLength(O.length);
    var A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
    return A;
  }
});

__webpack_require__(31)('flatten');


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/mathiasbynens/String.prototype.at
var $export = __webpack_require__(0);
var $at = __webpack_require__(55)(true);

$export($export.P, 'String', {
  at: function at(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(125);
var userAgent = __webpack_require__(60);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(0);
var $pad = __webpack_require__(125);
var userAgent = __webpack_require__(60);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(45)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(45)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/String.prototype.matchAll/
var $export = __webpack_require__(0);
var defined = __webpack_require__(24);
var toLength = __webpack_require__(6);
var isRegExp = __webpack_require__(56);
var getFlags = __webpack_require__(50);
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function (regexp, string) {
  this._r = regexp;
  this._s = string;
};

__webpack_require__(78)($RegExpStringIterator, 'RegExp String', function next() {
  var match = this._r.exec(this._s);
  return { value: match, done: match === null };
});

$export($export.P, 'String', {
  matchAll: function matchAll(regexp) {
    defined(this);
    if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
    var S = String(this);
    var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
    var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)('asyncIterator');


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(67)('observable');


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(0);
var ownKeys = __webpack_require__(123);
var toIObject = __webpack_require__(15);
var gOPD = __webpack_require__(16);
var createProperty = __webpack_require__(82);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $values = __webpack_require__(126)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(0);
var $entries = __webpack_require__(126)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(8);

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __defineGetter__: function __defineGetter__(P, getter) {
    $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var aFunction = __webpack_require__(10);
var $defineProperty = __webpack_require__(8);

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __defineSetter__: function __defineSetter__(P, setter) {
    $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
  }
});


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(16).f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __lookupGetter__: function __lookupGetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.get;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(0);
var toObject = __webpack_require__(9);
var toPrimitive = __webpack_require__(23);
var getPrototypeOf = __webpack_require__(17);
var getOwnPropertyDescriptor = __webpack_require__(16).f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
__webpack_require__(7) && $export($export.P + __webpack_require__(63), 'Object', {
  __lookupSetter__: function __lookupSetter__(P) {
    var O = toObject(this);
    var K = toPrimitive(P, true);
    var D;
    do {
      if (D = getOwnPropertyDescriptor(O, K)) return D.set;
    } while (O = getPrototypeOf(O));
  }
});


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(127)('Map') });


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(0);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(127)('Set') });


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(64)('Map');


/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(64)('Set');


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(64)('WeakMap');


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
__webpack_require__(64)('WeakSet');


/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(65)('Map');


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(65)('Set');


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(65)('WeakMap');


/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
__webpack_require__(65)('WeakSet');


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.G, { global: __webpack_require__(2) });


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(0);

$export($export.S, 'System', { global: __webpack_require__(2) });


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/ljharb/proposal-is-error
var $export = __webpack_require__(0);
var cof = __webpack_require__(20);

$export($export.S, 'Error', {
  isError: function isError(it) {
    return cof(it) === 'Error';
  }
});


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  clamp: function clamp(x, lower, upper) {
    return Math.min(upper, Math.max(lower, x));
  }
});


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { DEG_PER_RAD: Math.PI / 180 });


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var RAD_PER_DEG = 180 / Math.PI;

$export($export.S, 'Math', {
  degrees: function degrees(radians) {
    return radians * RAD_PER_DEG;
  }
});


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var scale = __webpack_require__(129);
var fround = __webpack_require__(108);

$export($export.S, 'Math', {
  fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
    return fround(scale(x, inLow, inHigh, outLow, outHigh));
  }
});


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1) {
    var $x0 = x0 >>> 0;
    var $x1 = x1 >>> 0;
    var $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  imulh: function imulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >> 16;
    var v1 = $v >> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { RAD_PER_DEG: 180 / Math.PI });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);
var DEG_PER_RAD = Math.PI / 180;

$export($export.S, 'Math', {
  radians: function radians(degrees) {
    return degrees * DEG_PER_RAD;
  }
});


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

// https://rwaldron.github.io/proposal-math-extensions/
var $export = __webpack_require__(0);

$export($export.S, 'Math', { scale: __webpack_require__(129) });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// https://gist.github.com/BrendanEich/4294d5c212a6d2254703
var $export = __webpack_require__(0);

$export($export.S, 'Math', {
  umulh: function umulh(u, v) {
    var UINT16 = 0xffff;
    var $u = +u;
    var $v = +v;
    var u0 = $u & UINT16;
    var v0 = $v & UINT16;
    var u1 = $u >>> 16;
    var v1 = $v >>> 16;
    var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// http://jfbastien.github.io/papers/Math.signbit.html
var $export = __webpack_require__(0);

$export($export.S, 'Math', { signbit: function signbit(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
} });


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(0);
var core = __webpack_require__(18);
var global = __webpack_require__(2);
var speciesConstructor = __webpack_require__(51);
var promiseResolve = __webpack_require__(116);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(0);
var newPromiseCapability = __webpack_require__(91);
var perform = __webpack_require__(115);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
} });


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var toMetaKey = metadata.key;
var getOrCreateMetadataMap = metadata.map;
var store = metadata.store;

metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */) {
  var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
  var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
  if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
  if (metadataMap.size) return true;
  var targetMetadata = store.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store['delete'](target);
} });


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryHasOwnMetadata = metadata.has;
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

var ordinaryGetMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({ getMetadata: function getMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(119);
var from = __webpack_require__(128);
var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

var ordinaryMetadataKeys = function (O, P) {
  var oKeys = ordinaryOwnMetadataKeys(O, P);
  var parent = getPrototypeOf(O);
  if (parent === null) return oKeys;
  var pKeys = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({ getMetadataKeys: function getMetadataKeys(target /* , targetKey */) {
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryGetOwnMetadata = metadata.get;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryGetOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryOwnMetadataKeys = metadata.keys;
var toMetaKey = metadata.key;

metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */) {
  return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var getPrototypeOf = __webpack_require__(17);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

var ordinaryHasMetadata = function (MetadataKey, O, P) {
  var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
  if (hasOwn) return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

var metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var ordinaryHasOwnMetadata = metadata.has;
var toMetaKey = metadata.key;

metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */) {
  return ordinaryHasOwnMetadata(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
} });


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

var $metadata = __webpack_require__(28);
var anObject = __webpack_require__(1);
var aFunction = __webpack_require__(10);
var toMetaKey = $metadata.key;
var ordinaryDefineOwnMetadata = $metadata.set;

$metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
  return function decorator(target, targetKey) {
    ordinaryDefineOwnMetadata(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey(targetKey)
    );
  };
} });


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
var $export = __webpack_require__(0);
var microtask = __webpack_require__(90)();
var process = __webpack_require__(2).process;
var isNode = __webpack_require__(20)(process) == 'process';

$export($export.G, {
  asap: function asap(fn) {
    var domain = isNode && process.domain;
    microtask(domain ? domain.bind(fn) : fn);
  }
});


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/zenparsing/es-observable
var $export = __webpack_require__(0);
var global = __webpack_require__(2);
var core = __webpack_require__(18);
var microtask = __webpack_require__(90)();
var OBSERVABLE = __webpack_require__(5)('observable');
var aFunction = __webpack_require__(10);
var anObject = __webpack_require__(1);
var anInstance = __webpack_require__(39);
var redefineAll = __webpack_require__(41);
var hide = __webpack_require__(11);
var forOf = __webpack_require__(40);
var RETURN = forOf.RETURN;

var getMethod = function (fn) {
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function (subscription) {
  var cleanup = subscription._c;
  if (cleanup) {
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function (subscription) {
  return subscription._o === undefined;
};

var closeSubscription = function (subscription) {
  if (!subscriptionClosed(subscription)) {
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function (observer, subscriber) {
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup = subscriber(observer);
    var subscription = cleanup;
    if (cleanup != null) {
      if (typeof cleanup.unsubscribe === 'function') cleanup = function () { subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch (e) {
    observer.error(e);
    return;
  } if (subscriptionClosed(this)) cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe() { closeSubscription(this); }
});

var SubscriptionObserver = function (subscription) {
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if (m) return m.call(observer, value);
      } catch (e) {
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value) {
    var subscription = this._s;
    if (subscriptionClosed(subscription)) throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if (!m) throw value;
      value = m.call(observer, value);
    } catch (e) {
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value) {
    var subscription = this._s;
    if (!subscriptionClosed(subscription)) {
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber) {
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer) {
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn) {
    var that = this;
    return new (core.Promise || global.Promise)(function (resolve, reject) {
      aFunction(fn);
      var subscription = that.subscribe({
        next: function (value) {
          try {
            return fn(value);
          } catch (e) {
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x) {
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if (method) {
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function (observer) {
        return observable.subscribe(observer);
      });
    }
    return new C(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          try {
            if (forOf(x, false, function (it) {
              observer.next(it);
              if (done) return RETURN;
            }) === RETURN) return;
          } catch (e) {
            if (done) throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  },
  of: function of() {
    for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function (observer) {
      var done = false;
      microtask(function () {
        if (!done) {
          for (var j = 0; j < items.length; ++j) {
            observer.next(items[j]);
            if (done) return;
          } observer.complete();
        }
      });
      return function () { done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function () { return this; });

$export($export.G, { Observable: $Observable });

__webpack_require__(38)('Observable');


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(2);
var $export = __webpack_require__(0);
var userAgent = __webpack_require__(60);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(0);
var $task = __webpack_require__(89);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(86);
var getKeys = __webpack_require__(34);
var redefine = __webpack_require__(12);
var global = __webpack_require__(2);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(46);
var wks = __webpack_require__(5);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(93)))

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(331);
module.exports = __webpack_require__(18).RegExp.escape;


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/benjamingr/RexExp.escape
var $export = __webpack_require__(0);
var $re = __webpack_require__(332)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export($export.S, 'RegExp', { escape: function escape(it) { return $re(it); } });


/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = function (regExp, replace) {
  var replacer = replace === Object(replace) ? function (part) {
    return replace[part];
  } : replace;
  return function (it) {
    return String(it).replace(regExp, replacer);
  };
};


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//require('./js/force');  

__webpack_require__(334);
__webpack_require__(335);

__webpack_require__(336);
__webpack_require__(337);
__webpack_require__(338);
__webpack_require__(339);
// require('./js/blog-draft-dec');
// require('./js/blog-draft-nov');
// require('./js/blog-draft-oct');
// require('./js/blog-draft-sep');
// require('./js/blog-draft-aug');
// require('./js/blog-draft-jul');
// require('./js/blog-draft-june');
// require('./js/blog-draft-may');
// require('./js/blog-draft-apr');
// require('./js/blog-draft-mar');
// require('./js/blog-draft-feb'); 

// modal
var modal = document.getElementById('msimpleModal');
var modalBtn = document.getElementById('mmodalBtn');
var closeBtn = document.getElementsByClassName('mcloseBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
  modal.style.display = 'block';
  modalBtn.style.display = 'none';
}
function closeModal() {
  modal.style.display = 'none';
  modalBtn.style.display = 'block';
}
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
    modalBtn.style.display = 'block';
  }
};

/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.getElementById("dailyNav").innerHTML = "<nav class=\"navbar navbar-toggleable-sm  fixed-top bg-primary app-navbar\">\n    \n \n    <button aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"\n        class=\"navbar-toggler navbar-toggler-center hidden-md-up\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\"\n        type=\"button\" on-click=\"fadeUp()\" id=\"toggler\"> </button>\n\n    <div class=\"collapse navbar-collapse   multi_drop_menu   menu\" id=\"navbarResponsive\">\n        <ul class=\"navbar-nav mr-auto \">\n            <li  id=\"banner\" >\n            <a href=\"/\" class=\"banner\" id=\"linkbanner\" title=\"Our Daily Tech\"><img src=\"https://s3.amazonaws.com/ourdailytech.net/dist/img/ourdailytechbanner.png\" alt=\"our dailytech banner\"  /></a>\n            </li>\n        <!--    <li class=\"nav-item   \">\n                <a class=\"nav-link\" href=\"/\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\"\n                    on-click=\"fadeUp()\">\n                    <span class=\" subdailytech\"> TECH\n                        <br />BLOG </span>\n                </a>\n            </li>-->\n            <li class=\"nav-item  \">\n                <a class=\"nav-link\" href=\"/archives\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\"\n                    type=\"button\" on-click=\"fadeUp()\">\n                    <span class=\"subdailytech \">BLOG  \u2728\n                        <br />ARCHIVES </span>\n                </a>\n            </li>\n            <li class=\"nav-item hidden\">\n                <a class=\"nav-link\" ng-href=\"https://www.ourdailytech.net/_For_Cat_Eyes_Only_/index.html\"\n                    title=\"tmm FICTION\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\">\n                    <span class=\"caret subdailytech\">FOR_CAT\n                        <br />EYES_ONLY</span>\n                </a>\n\n                <a class=\"nav-link\" ng-href=\"/_For_Cat_Eyes_Only_\" title=\"tmm FICTION\" data-target=\"#navbarResponsive\"\n                    data-toggle=\"collapse\" type=\"button\">\n                    <span class=\"caret subdailytech\">FOR_CAT\n                        <br />EYES_ONLY</span>\n                </a>\n                <ul style=\"z-index:0\" class=\"menu-left\">\n                    <li>\n                        tmm FICTION\n                        <a style=\"z-index:199; \" ng-href=\"https://www.ourdailytech.net/_For_Cat_Eyes_Only_/index.html\"\n                            title=\"tmm FICTION\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\">For\n                            Cat Eyes Only:\n                            <i>Early Months of Win&#39;s Campaign</i>\n                        </a>\n                    </li>\n                    <li style=\"z-index:199; \">\n                        tmm FICTION\n                        <a style=\"z-index:199; \"\n                            ng-href=\"https://www.ourdailytech.net/_For_Cat_Eyes_Only_/index.html#capturing\"\n                            title=\"tmm FICTION\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\"\n                            type=\"button\">Fiction Excerpts From:\n                            <br />\n                            <i>The Casperian Ancestries</i>\n                            <br />\n                            <small>Capturing One Cat&#39;s Past and Present</small>\n                        </a>\n                        tmm FICTION\n                    </li>\n                </ul>\n            </li>\n            <li style=\"z-index:5\" class=\"nav-item\">\n                <a class=\"nav-link\" data-target=\"#navbarResponsive\" data-toggle=\"collapse\" type=\"button\"\n                    on-click=\"fadeUp()\">\n                    <span class=\" subdailytech\">DATA\n                        <br /> TOOLS\n                    </span>\n                </a>\n\n\n                <ul>\n\n                    <!--START UL -->\n\n                    <li style=\"z-index:100;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> Web &nbsp;&nbsp;\n                            <span> </span>\n                        </a>\n\n\n                        <ul>\n                            <li style=\"z-index:100;\">\n                                <a href=\"http://webreference.com/\" target=\"_blank\">Web Reference</a>\n                            </li>\n                            <li>\n                                <a href=\"https://developer.mozilla.org\" target=\"_blank\">Mozilla Dev</a>\n                            </li>\n                            <li>\n                                <a href=\"http://support.google.com/webmasters/?hl=en\" target=\"_blank\">Google Dev</a>\n                            </li>\n                            <li>\n                                <a href=\"http://developer.yahoo.com/\" target=\"_blank\">Yahoo! Dev</a>\n                            </li>\n                            <li>\n                                <a href=\"http://www.w3schools.com\" target=\"_blank\">W3 schools</a>\n                            </li>\n                            <li>\n                                <a href=\"http://www.w3.org/\" target=\"_blank\">World Wide Web Consortium</a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.icann.org\" target=\"_blank\">ICANN</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:98.2;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> D3 tools &nbsp;&nbsp; </a>\n                        <ul class=\"dropdown-menu\">\n                            <li style=\"z-index:98\">\n                                <a href=\"http://d3js.org\" target=\"_blank\">D3js</a>\n                            </li>\n                            <li style=\"z-index:98.5\">\n                                <a\n                                    href=\"https://github.com/d3/d3-3.x-api-reference/blob/master/API-Reference.md\">d3.v3</a>\n                            </li>\n                            <!--    <li style=\"z-index:98.5\">\n        <a href=\"https://chartio.com/\" target=\"_blank\">chartio</a>\n    </li>\n    <li style=\"z-index:98.5\">\n    <a href=\"http://code.shutterstock.com/rickshaw/\" target=\"_blank\">rickshaw</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://rawgraphs.io/\" target=\"_blank\">rawgraphs.io </a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://dimplejs.org\" target=\"_blank\">dimplejs</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://nvd3.org/\" target=\"_blank\">nvd3</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/SVG\" target=\"_blank\">SVG</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://www.khronos.org/webgl/\" target=\"_blank\">WebGL</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API\" target=\"_blank\">Canvas</a>\n</li>\n<li>\n<a href=\"https://www.telerik.com/kendo-ui\"  >  <i class=\"fa fa-cog\"></i></a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://alignedleft.com/tutorials/d3/binding-data\" target=\"_blank\">binding-data</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"http://datajournalismhandbook.org/1.0/en/getting_data_3.html\" target=\"_blank\">getting_data</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API\" target=\"_blank\">Canvas</a>\n</li>\n<li style=\"z-index:98.5\">\n    <a href=\"https://github.com/d3/d3/blob/master/CHANGES.md\" target=\"_blank\">d3.v4 changes</a>\n</li>\n-->\n                            <li style=\"z-index:98\">\n                                <a href=\"https://github.com/d3/d3/blob/master/API.md\" target=\"_blank\">D3js APIs</a>\n                            </li>\n\n                        </ul>\n                    </li>\n                    <li style=\"z-index:98;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Javascript &nbsp;&nbsp; </a>\n                        <ul class=\"dropdown-menu\">\n                            <li style=\"z-index:98\">\n                                <a href=\"https://jsbin.com\" target=\"_blank\">JS Bin</a>\n                            </li>\n                            <li style=\"z-index:98\">\n                                <a href=\"https://developer.mozilla.org/en-US/docs/Web/API\" target=\"_blank\">JavaScript\n                                    APIs</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:10 ;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Datasets &nbsp;&nbsp;</a>\n                        <ul>\n                            <li style=\"z-index:10 ;\">\n                                <a href=\"http://www.icpsr.umich.edu/icpsrweb/ICPSR/index.jsp\" target=\"_blank\">ICPSR\n                                    Datasets</a>\n                            </li>\n                            <li style=\"z-index:10 ;\">\n                                <a href=\"http://data.imf.org/?sk=7CB6619C-CF87-48DC-9443-2973E161ABEB\"\n                                    target=\"_blank\">Datasets IMF</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:101;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Stats &nbsp;&nbsp;</a>\n                        <ul>\n                            <li style=\"z-index:101;\">\n                                <a href=\"https://stats.idre.ucla.edu/other/dae/\" target=\"_blank\">Stats</a>\n                            </li>\n                            <li style=\"z-index:101;\">\n                                <a href=\"http://openrefine.org/\" target=\"_blank\">OpenRefine</a>\n                            </li>\n                            <li style=\"z-index:102;\">\n                                <a href=\"http://statacumen.com\" target=\"_blank\">Stat Acumen</a>\n                            </li>\n                            <li style=\"z-index:102;\">\n                                <a href=\"http://www.mapageweb.umontreal.ca/durandc/\" target=\"_blank\">Montr&eacute;al\n                                    Stats</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:12;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">SQL &nbsp;&nbsp; </a>\n                        <ul>\n                            <li style=\"z-index:12;\">\n                                <a target=\"_blank\">MySQL &nbsp;&nbsp;</a>\n                            </li>\n                            <li style=\"z-index:12;\">\n                                <a href=\"https://www.mysql.com/\" target=\"_blank\">MySQL</a>\n                            </li>\n                            <li style=\"z-index:121;\">\n                                <a href=\"http://www.oracle.com/technetwork/developer-tools/apex/overview/index-155186.html\"\n                                    target=\"_blank\">Oracle Express</a>\n                            </li>\n                            <li style=\"z-index:121;\">\n                                <a href=\"http://iacademy.oracle.com\" target=\"_blank\">Application Express</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> R-Project &nbsp;&nbsp; </a>\n                        <ul>\n                            <li style=\"z-index:1;\">\n                                <a href=\"https://www.r-project.org/\" target=\"_blank\">R-Project </a>\n                            </li>\n                            <li>\n                                <a href=\"https://www.rstudio.com/\" target=\"_blank\">RStudio</a>\n                            </li>\n                            <li>\n                                <a href=\"https://shiny.rstudio.com/\" target=\"_blank\">Shiny</a>\n                            </li>\n                            <li>\n                                <a href=\"http://amsantac.co/blog/en/2015/10/31/qgis-r.html\" target=\"_blank\">Open GIS</a>\n                            </li>\n                            <li>\n                                <a href=\"http://www.tableau.com/products/cloud-bi\" target=\"_blank\">Tableau </a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\"> Python &nbsp;&nbsp; </a>\n                        <ul>\n                            <li style=\"z-index:1;\">\n                                <a href=\"https://www.python.org/\" target=\"_blank\">Python.org</a>\n                            </li>\n                            <li>\n                                <a href=\"https://pypi.python.org/pypi\" target=\"_blank\">Python Package Index</a>\n                            </li>\n                            <li>\n                                <a href=\"https://docs.python.org/2/library/index.html\" target=\"_blank\">Python Standard\n                                    Library</a>\n                            </li>\n                            <li>\n                                <a href=\"https://pandas.pydata.org/pandas-docs/stable/\" target=\"_blank\">Pandas Data\n                                    Analysis Toolkit</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:9;\">\n                        <a aria-expanded=\"false\" aria-haspopup=\"true\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"\n                            role=\"button\">Validators &nbsp;&nbsp;</a>\n                        <ul>\n                            <li style=\"z-index:9;\">\n                                <a href=\"https://stats.idre.ucla.edu/other/dae/\" target=\"_blank\">Validators </a>\n                            </li>\n                            <li>\n                                <a href=\"http://validator.w3.org\" target=\"_blank\">HTML validator</a>\n                            </li>\n                            <li>\n                                <a href=\"http://jigsaw.w3.org/css-validator/\" target=\"_blank\">CSS validator</a>\n                            </li>\n                            <li>\n                                <a href=\"http://jsonlint.com/\" target=\"_blank\">JSON Validator</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"http://html-color-codes.info/\" target=\"_blank\">Color Codes</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"https://inkscape.org/en/\" target=\"_blank\">Inkscape</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"https://v4-alpha.getbootstrap.com\" target=\"_blank\">Bootstrap</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"http://www.dynamicdrive.com/\" target=\"_blank\">Dynamic Drive</a>\n                    </li>\n                    <li style=\"z-index:1;\">\n                        <a href=\"http://php.net\" target=\"_blank\">PHP.net</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.useit.com/\" target=\"_blank\">Jakob Nielson</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.alistapart.com/\" target=\"_blank\">A List Apart</a>\n                    </li>\n                    <li>\n                        <a href=\"http://codepen.io/\" target=\"_blank\">codepen.io</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.sitepoint.com/\" target=\"_blank\">sitepoint</a>\n                    </li>\n                    <li>\n                        <a href=\"http://www.kaggle.com\" target=\"_blank\">Kaggle</a>\n                    </li>\n                    <li>\n                        <a href=\"http://plnkr.co/\" target=\"_blank\">Plunker</a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com\" target=\"_blank\">GitHub</a>\n                    </li>\n                    <li>\n                        <a href=\"https://gist.github.com/\" target=\"_blank\">Gist\n                            <small>GitHub</small>\n                        </a>\n                    </li>\n                    <li>\n                        <a class=\"last\" href=\"http://stackoverflow.com\" target=\"_blank\">Stack Overflow</a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.virtualbox.org/\" target=\"_blank\">Virtual Box</a>\n                    </li>\n                </ul>\n                <!--end UL-->\n\n\n            </li>\n        </ul>\n        <ul id=\"media\" class=\"nav navbar-nav navbar-right\">\n\n\n            <li>\n\n                <a title=\"Medium\" href=\"https://medium.com/@thomasm1\" target=\"_blank\">\n\n                    <i class=\"fa fa-medium\"></i>\n\n                </a>\n\n            </li>\n            <li>\n\n                <a title=\"github\" href=\"https://github.com/thomasm1\" target=\"_blank\">\n\n                    <i class=\"fa fa-github\"></i>\n\n                </a>\n\n            </li>\n\n\n            <li>\n\n                <a title=\"facebook\" href=\"https://www.facebook.com/thomasm1.maestas\" target=\"_blank\">\n\n                    <i class=\"fa fa-facebook\"></i>\n\n                </a>\n\n            </li>\n\n            <li>\n\n                <a title=\"linkedin\" href=\"http://linkedin.com/in/thomasmaestas\" target=\"_blank\">\n\n                    <i class=\"fa fa-linkedin\"></i>\n\n                </a>\n\n            </li>\n            \n            <!--End UL -->\n\n        </ul>\n        <abbr title=\"Our Daily Tech\">\n\n            <img class=\"card-profile-img zoom\" id=\"dailylogo\" alt=\"image of Le Mont Real\"\n                src=\"dist/img/blueColorTriomphe.png\" />\n\n        </abbr>\n\n    </div>\n\n</nav>";

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


setTimeout(function () {

  // OLD_KEY: NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
  // NEW_KEY: p2o1kCukELyMEhVm912JFO17GgidlBIx4dhi4Ppu
  var url = "https://api.nasa.gov/planetary/apod?api_key=mF6DQEqY3WtCubgab5P2otQQ6bP1b8nY24VmiJw0";
  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    // console.log("onreadystate changed")
    // if (xhttp.readyState == 4 && xhttp.statusText == 200) {  
    // console.log("200");
    var result = JSON.parse(this.responseText);
    // console.log(this.responseText);

    if (result.copyright != "") {
      document.getElementById("copyright").innerHTML = "Image Credits: " + result.copyright;
    } else {
      document.getElementById("copyright").innerHTML = "Image Credits: " + "Public Domain";
    }

    if (result.media_type == "video") {
      document.getElementById("apod_img_id").style.display = "none";
      document.getElementById("apod_vid_id").setAttribute("src", result.url);
    } else {
      document.getElementById("apod_vid_id").style.display = "none";
      document.getElementById("apod_img_id").setAttribute("src", result.url);
    }
    document.getElementById("reqObject").text = url;
    document.getElementById("returnObject").innerHTML = JSON.stringify(result, null, 4);

    document.getElementById("apod_explaination").innerHTML = result.explanation;
    document.getElementById("apod_title").innerHTML = result.title;
    // }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
  // var url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";


  // $.ajax({
  //   url: url,
  //   success: function(result){
  //   if("copyright" in result) {
  //     $("#copyright").text("Image Credits: " + result.copyright);
  //   }
  //   else {
  //     $("#copyright").text("Image Credits: " + "Public Domain");
  //   }

  //   if(result.media_type == "video") {
  //     $("#apod_img_id").css("display", "none"); 
  //     $("#apod_vid_id").attr("src", result.url);
  //   }
  //   else {
  //     $("#apod_vid_id").css("display", "none"); 
  //     $("#apod_img_id").attr("src", result.url);
  //   }
  //   $("#reqObject").text(url);
  //   $("#returnObject").text(JSON.stringify(result, null, 4));  
  //   $("#apod_explaination").text(result.explanation);
  //   $("#apod_title").text(result.title);
  // }
  // });
}, 2500);

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMarch20 = function bloggerMarch20() {

    var blogpost11 = '<p>\n    </p>\n    <p class="quote">Graphene batteries are one of the fastest energy-storing solutions available, globally. Graphene utilized as electrode material in batteries needs to be of high quality, that is, single to few layered graphene.<sup>1</sup>\n    </p>\n    <p class="quote">\n    ';
    var blogcite11 = ' \n      <p>1. <a  target="_blank" href="https://nysenewstimes.com/huge-demand-for-graphene-battery-market-2020-statistics-facts-and-figures-growth-overview-size-swot-analysis-and-forecast-to-2026-by-cabot-corporation-nanoxplore-graphene-3d-lab/">https://nysenewstimes.com/huge-demand-for-graphene-battery-market-2020-statistics-facts-and-figures-growth-overview-size-swot-analysis-and-forecast-to-2026-by-cabot-corporation-nanoxplore-graphene-3d-lab/</a> \n</p>\n<p>2. <a  target="_blank" href="https://www.graphene-info.com/graphene-batteries">https://www.graphene-info.com/graphene-batteries</a> </p>  \n<p>3. <a  target="_blank" href="https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/">https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/</a> \n</p>  \n  ';
    var blogpost10 = '<p>The Nuts &amp; Bolts of one of graphene\'s contributions ...\n    </p>\n    <p class="quote">When a lithium-ion battery is charging, lithium ions flow to the anode, which is typically made of a type of carbon called graphite. If you swap graphite for silicon, far more lithium ions can be stored in the anode, which increases the energy capacity of the battery. But packing all these lithium ions into the electrode causes it to swell like a balloon; in some cases, it can grow up to four times larger.\n<br /><br />\nThe swollen anode can pulverize the nanoengineered silicon particles and rupture the protective barrier between the anode and the battery\u2019s electrolyte, which ferries the lithium ions between the electrodes. Over time, crud builds up at the boundary between the anode and electrolyte. This both blocks the efficient transfer of lithium ions and takes many of the ions out of service. It quickly kills any performance improvements the silicon anode provided.\n<br /><br />\nOne way out of this problem is to sprinkle small amounts of silicon oxide\u2014better known as sand\u2014throughout a graphite anode. This is what Tesla currently does with its batteries. Silicon oxide comes pre-puffed, so it reduces the stress on the anode from swelling during charging. But it also limits the amount of lithium that can be stored in the anode. Juicing a battery this way isn\u2019t enough to produce double-digit performance gains, but it\u2019s better than nothing.\n<br /><br />\nCary Hayner, cofounder and CTO of NanoGraf, thinks it\u2019s possible to get the best of silicon and graphite without the loss of energy capacity from silicon oxide. At NanoGraf, he and his colleagues are boosting the energy of carbon-silicon batteries by embedding silicon particles in graphene, graphite\u2019s Nobel Prize-winning cousin. Their design uses a graphene matrix to give silicon room to swell and to protect the anode from damaging reactions with the electrolyte. Hayner says a graphene-silicon anode can increase the amount of energy in a lithium-ion battery by up to 30 percent.<sup>1</sup>\n    </p>\n    ';
    var blogcite10 = ' \n      <p>1. <a  target="_blank" href="https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/">https://www.wired.com/story/welcome-to-the-era-of-supercharged-lithium-silicon-batteries/</a>  </p>\n\n      <!-- <p>2. <a  target="_blank" href=""></a> </p>  -->  ';

    //     var blogpost8 =     `<p>
    //     </p>
    //     <p class="quote">
    //     </p>
    //     `
    //      var blogcite8 =    ` 
    //       <p>1. <a  target="_blank" href=""></a>  </p>
    // <p>2. <a  target="_blank" href="</a> </p>    
    //   `;

    var blogpost7 = '<p>\n     Democratization of access to quantum software -- Cloud-backed hardware and open-software API\'s available to the public -- has been broadly expanded with Google Cloud Platform\'s March 6th White Paper, which outlines a package of (data analysis) simulation hardware, which "combines Cirq, an open source quantum circuit library, and the <a href="https://www.tensorflow.org/quantum" target="_blank">TensorFlow</a> machine learning platform." In short, the complete package: \n    </p> \n    <p class="quote">Google today announced the launch of TensorFlow Quantum, bringing together machine learning and quantum computing initiatives at the company. The framework can construct quantum datasets, prototype hybrid quantum and classic machine learning models, support quantum circuit simulators, and train discriminative and generative quantum models.\n    <sup>1 &nbsp; 2</sup>\n    </p>\n    <p>In my <a href="#12-22-18">12-22-18 blog post, Quantum Computing</a>, I wrote on IBM\'s pioneering efforts to provide public access to quantum hardware for limited use. IBM\'s <em>Q Experience</em> was the first to provide large-scale applications for public consumption, but those were test rides around a track while Google here is offering the track, the pit crew and unlimited supply of racing cars to work with and invent with, from under the hood to every tool in the shop. \n    <br /><br />\nFrom the White Paper:\n    </p>\n    <p class="quote">\nWe introduce TensorFlow Quantum (TFQ), an open source library for the rapid prototyping of hybrid quantum-classical models for classical or quantum data. This framework offers high-level abstractions for the design and training of both discriminative and generative quantum models under TensorFlow and supports high-performance quantum circuit simulators. We provide an overview of the software architecture and building blocks through several examples and review the theory of hybrid quantum-classical neural networks. We illustrate TFQ functionalities via several basic applications including supervised learning for quantum classification, quantum control, and quantum approximate optimization. Moreover, we demonstrate how one can apply TFQ to tackle advanced quantum learning tasks including meta-learning, Hamiltonian learning, and sampling thermal states. We hope this framework provides the necessary tools for the quantum computing and machine learning research communities to explore models of both natural and artificial quantum systems, and ultimately discover new quantum algorithms which could potentially yield a quantum advantage.\n    <sup>3</sup>\n</p> \n   ';
    var blogcite7 = '  \n    <p>1. <a  target="_blank" href="https://venturebeat.com/2020/03/09/google-launches-tensorflow-quantum-a-machine-learning-framework-for-training-quantum-models/">https://venturebeat.com/2020/03/09/google-launches-tensorflow-quantum-a-machine-learning-framework-for-training-quantum-models/</a> \n</p>\n<p>2. <a  target="_blank" href="https://ai.googleblog.com/2020/03/announcing-tensorflow-quantum-open.html">https://ai.googleblog.com/2020/03/announcing-tensorflow-quantum-open.html</a> </p>  \n<p>3. <a  target="_blank" href="https://arxiv.org/abs/2003.02989">March 6th, 2020 Google White Paper</a> \n</p>  \n\n  ';

    var blogpost4 = '<p>\n    At a time when the national lines blur between multi-national corporations, and an interdependent global tech community, the 21st century space race is nonetheless well-defined -- however defined along the lines of sub-atomic inner-space. \n    </p>\n       <img src="dist/img/q-chandelier.jpg" width="400"  class="zoom" />\n    <p class="quote">\n    But just as the Soviet Union was the first to put both a satellite and a human being into orbit, before going on to lose the space race, China March be poised to outstrip any American achievements in a specific field of quantum technology \u2014 communication.<sup>1</sup>\n    </p>\n    <p>\n    But the goals are less abstract than sending a traveler to space; they define how national secrets can be securely stored, accessed and communicated: </p>\n\n    <p class="quote">With Micius, Chinese researchers are attempting to use a different type of quantum technology to develop new forms of secure communications that would be unbreakable. Micius is being used to share cryptography keys, which are used to encode and decode secure communications.\n<br /><br />\nOrdinarily, these keys are vulnerable to interception, but Micius uses photons in a quantum-superposition state \u2013 it\u2019s impossible to read them without changing what they say, so you can\u2019t copy or intercept a key sent in this manner.<sup>2</sup>\n</p> \n   ';
    var blogcite4 = '  \n    <p>1. <a  target="_blank" href="https://www.cnn.com/2019/10/24/tech/china-quantum-computing-intl-hnk/index.html">https://www.cnn.com/2019/10/24/tech/china-quantum-computing-intl-hnk/index.html</a> \n</p> \n<p>2. <a  target="_blank" href="https://www.wired.co.uk/article/quantum-computing-china-us">https://www.wired.co.uk/article/quantum-computing-china-us</a> \n</p>  \n\n<p>3. <a  target="_blank" href="https://www.technologyreview.com/s/615180/quantum-computer-race-ibm-google/">https://www.technologyreview.com/s/615180/quantum-computer-race-ibm-google/</a> \n</p>  ';

    var blogpost3 = '\n\n<p class="firstparagraph">Data -- from the warehousing to the accessing and securing, all the while complying with data privacy regulations, has been a piecemeal, multi-faceted challenge: a race against the clock, against others\' race against the clock, and of course the changing dynamics of the clock itself. If this sounds like an impossiblly rigged game, it is, because the goal posts bend for the best technologies availed by whom. </p>\n  <img src="dist/img/q-superposition.jpg" width="400"  class="zoom" />\n<p class="quote"> Countries around the world are investing billions into quantum computing research. Mainly, it\u2019s because it has applications in artificial intelligence. Security and the search for unbreakable encryption in AI-enabled applications that house personal, business, and government data are prompting the investment into this new research area.<sup>1</sup>\n</p> \n\n<p>The roadblocks for machine learning are clear: computing power for modern techniques are not sustainable in terms of insufficient memory and computing power, hence the current "A.I. Winter". In my <a href="#07-05-18">July 5th 2018 post, <em>Godfathers of A.I.</em></a> I outline the periods that technical limitations reduce progress and interest in A.I. applicibility. In preliminary advances, single-layered algorithms (think of one set of variables that drive prediction) and later iterations that involve multiple-layers that exponentially increase computing needs: \n</p>\n\n\n\n<p class="quote">Programs that performed well in the laboratory were useless in everyday situations; a simple act like picking up a ball turned out to require an overwhelming number of computations. The research fell into the first of several \u201CA.I. winters.\u201D As Bostrom notes in his book, \u201CAmong academics and their funders, \u2018A.I.\u2019 became an unwanted epithet.\u201D<sup>2</sup></p>\n<p>So, then, what is at stake with the potential of quantum-based computations? Everything, because all the current machine learning roadblocks are flattened: </p>\n\n<p class="quote">Quantum Computing also has the potential to allow AI to optimize its processing to such a degree that complex calculations needed to achieve artificial general intelligence can be carried out in record time.<sup>1</sup>\n</p>\n\n<p>This time it\'s more than a roll of the die and a few good hires. To the winner go the spoils, the losers work for the winners, and finally, not even time spent can predict the winners!</p>\n<br />\n';

    var blogcite3 = '\n     \n<p>1. <a  target="_blank" href="https://towardsdatascience.com/is-quantum-computing-a-dream-fd7385b1db56">https://towardsdatascience.com/is-quantum-computing-a-dream-fd7385b1db56</a> \n</p>  \n<p>2. <a  target="_blank" href="http://fortune.com/longform/element-ai-startup-tech/">http://fortune.com/longform/element-ai-startup-tech/</a> \n</p> \n';

    var blogpost2 = '\n\n<p class="firstparagraph">Gone are the days when the best and the brightest took home the honors and laurels. Today, an obsucre darkness rules over visibility into the advances that don\'t arise from obvious luck. Instead, networks of tech advances, some stolen, some spilled and some surmised from nothing form the new space race: The rocket head forms the algorithm and the expendible data form the solid rocket boosters. Period. \n</p>\n\n<p class="quote"> We need quantum-resistant algorithms as soon as possible,\u201D Grobman said. \nCloud computing is sweeping through the industry, and it will enable the use of quantum computing. And that\u2019s a problem, as quantum computers may be able to break encryption techniques such as RSA encryption much faster than traditional computers can. Typically, encryption techniques make it easy to encode data but hugely difficult to decode it without the use of a special key. The security is possible only because of the huge amount of time it takes for a classical computer to do the computations. <sup>1</sup></p>  \n\n  ';

    var blogcite2 = '\n<p>1. <a  target="_blank" href="https://venturebeat.com/2020/02/25/mcafee-start-protecting-against-quantum-computing-hacks-now/">https://venturebeat.com/2020/02/25/mcafee-start-protecting-against-quantum-computing-hacks-now/</a> \n</p>  \n';

    var url = [{
        id: '11',
        did: '20-03-17',
        date: 'March 17, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Tomorrow!',
        title: 'Graphene Relief: Batteries\' Demand',
        post: blogpost11,
        cite: blogcite11
    }, {
        id: '10',
        did: '20-03-16',
        date: 'March 16, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Tomorrow!',
        title: 'Graphene Relief: Batteries\' Context',
        post: blogpost10,
        cite: blogcite10
    },
    //   {
    //     id: '8',
    //     did: '20-03-14',
    //     date: 'March 14-15, 2020<br />Weekend',
    //     author: 'by Thomas Maestas, MA',
    //     cat3: ' ',
    //     title: ' ',
    //     post: blogpost8,
    //     cite: blogcite8
    // },
    {
        id: '7',
        did: '20-03-09',
        date: 'March 9, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Moving your Quantum Dreams into Today, Part V: <br />Quantum Data in the Cloud',
        post: blogpost7,
        cite: blogcite7
    }, {
        id: '4',
        did: '20-03-05',
        date: 'March 5, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Moving your Quantum Dreams into Today, Part III: <br />The Nationalism of Quantum Data and Privacy',
        post: blogpost4,
        cite: blogcite4
    }, {
        id: '3',
        did: '20-03-04',
        date: 'March 4, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Moving your Quantum Dreams into Today, Part II:<br />The Business of Quantum Data and Privacy',
        post: blogpost3,
        cite: blogcite3
    }, {
        id: '2',
        did: '20-03-03',
        date: 'March 3, 2020 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Today',
        title: 'Moving your Quantum Dreams into Today, Part I: <br /> The Timing of Quantum Data and Privacy',
        post: blogpost2,
        cite: blogcite2
    }];

    for (i = 0; i < url.length; i++) {
        var cat = ' \n\t  <div id="' + url[i].did + '" class="blogDiv"> \n\t  <hr />  \n\t  <a href="#top"><button>Top</button></a>  \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n\t  <div id="post">' + url[i].post + '\t  </div>\n      <div id="post">' + url[i].cite + '</div>\n\t  </div>';

        document.getElementById("paragraph-March20").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
        var catMod = '\n\t  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n\t  <hr />  \n\t  <a href="#top-mod"><button>Top</button></a>   \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n      <div id="post">' + url[i].post + '</div>\n      <div id="post">' + url[i].cite + '</div>\n      \n\n\t  </div>';

        document.getElementById("paragraph-March20-mod").innerHTML += catMod;
    }

    console.log('blogger-March-20');
    // console.log(angular.toJson(url));
};

bloggerMarch20();

/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMay19 = function bloggerMay19() {

    /*
    
    august  16 - 
    https://bitcoinist.com/bakkt-wins-regulatory-approval-to-launch-bitcoin-futures/
    ----
     The tables have turned ..
    -
    and now the launchlad
    june 14
    https://www.cnet.com/news/calls-to-break-up-amazon-google-facebook-and-apple-get-louder/
    DOJ-->
    Last week, The Wall Street Journal reported that the FTC and Justice Department reached a new agreement, with the FTC gaining authority to review Amazon and Facebook, while the Justice Department is able to look into Apple and Google. This deal is seen as an early step in these agencies digging into potential anticompetitive practices by all four companies.
    consumer view-->
    That could result in a flourishing of new services and features for consumers, giving them a lot more choices for e-commerce, social media and search. That change could also sow confusion, as sites that used to be part of the same company no longer work as seamlessly together.
        June 11, 2019
    Most cross-border payments are done through the Society for Worldwide Interbank Financial Telecommunication, or Swift, a Belgian organization started in 1973 that counts 11,000 financial institutions as members. But its legacy system has inefficiencies. Because few banks are connected directly to each other, a payment that originates in Kansas City and is bound for Nairobi might have to stop at banks in New York and London before reaching its final destination, with each bank extracting a fee. 
    https://www.forbes.com/sites/jeffkauflin/2019/06/11/visa-targets-swift-with-new-blockchain-product-for-global-money-transfers/
    Visa seems to do everything on a massive scale. Last year, it moved $11.2 trillion over its payment rails across more than 200 countries for purchases ranging from cups of coffee to cars. Now it’s eyeing an even bigger market: cross-border, business-to-business (B2B) transactions, where banks transfer money on behalf of corporate customers. Visa says it’s entering a $125 trillion market and using distributed ledger technology—software where transactions must be confirmed by multiple computers on a network to be considered final—to make these payments faster, cheaper and more transparent.
    Phalen’s team created Visa B2B Connect using distributed ledger technology because it provides more transparency and traceability than a typical state-of-the-art database, he says. They used Hyperledger Fabric, the blockchain software developed in part by IBM and hosted by Linux, to build it, and it has taken two years to launch. Unlike cryptocurrency-based blockchains including Bitcoin and Ethereum, Visa’s product isn’t decentralized, since the payments giant has complete control over it. Visa made Forbes’ first-ever Blockhain 50 list earlier this year.
    june 6
    Unlike the original vision spelled out in the Nakamoto paper, these initiatives don’t use a proof-of-work system for verification, but are permissioned blockchains in which each participant is identified and known—and therefore accountable—to the others in the blockchain network. Essentially this verifies members before transactions take place, much as Global Entry and TSA Pre do at airline security checkpoints.
    https://www.barrons.com/articles/blockchain-moves-beyond-the-walled-garden-stage-51559820635
    IBM hath been busy ...
    "To understand what the future of blockchain could look like, it’s helpful to look at IBM ’s recent initiatives to build communities around peer-to-peer networks in financial services, identity and supply chain.
    The company is also working with SecureKey to develop a digital identity system in Canada. The system is designed to allow consumers to develop digital identities that they can control. 
    Perhaps the greatest opportunity for blockchain technology is in helping to streamline supply chains. In fact, a 2013 study by the World Economic Forum found that reducing back-office friction in international trade could increase GDP by nearly 5%. IBM has two major efforts in this area. It partnered with Maersk to create TradeLens, which aims to digitize global shipping and created Food Trust that focuses on agricultural products."
    June 4 - Near-Zero Latency Apps and Bots
    And then there's the question of what type of 5G signals are available. Verizon, like AT&T, has focused on what's known as millimeter wave spectrum, which is fast but has a limited range and can have trouble with walls and even foliage. Carriers in Europe and Asia, along with Sprint and T-Mobile in the US, have been using sub-6GHz airwaves for slower but more reliable coverage.
    https://www.cnet.com/news/verizon-5g-lab-tunes-up-robots-and-medical-tech-heading-your-way/
    The bigger goal, Palmer said, is to enable whole new experiences -- in education, for instance, transporting someone who's studying glaciers to an actual glacier via virtual reality or a holographic experience that's not possible today.
    When the next generation matures eventually, a whole array of technologies will be able to blossom in ways that today's 4G networks don't allow -- cars communicating with each other and with sensors on a highway or city streets at speed, for instance. The internet of things becomes a lot more than just you checking in with your Nest thermostat or an August smart doorbell. Soldiers and first responders get better, faster situational awareness.
    June 3 - The $6000 computadora
    https://www.cnet.com/news/the-new-mac-pro-makes-its-debut-at-wwdc-2019-starts-at-5999-available-fall-2019-apple/
    June 2 - Steer Clear of TapeWorms: Practice Good Hygiene
    https://blogs.technet.microsoft.com/msrc/2019/05/30/a-reminder-to-update-your-systems-to-prevent-a-worm/
    EternalBlue Timeline
    Almost two months passed between the release of fixes for the EternalBlue vulnerability and when ransomware attacks began. Despite having nearly 60 days to patch their systems, many customers had not.
    A significant number of these customers were infected by the ransomware.
    /// Quantum::: mainstream
    AUTHOR::: Yun-Hee Kim at yun-hee.kim@wsj.com
    Dow Jones & Company, Inc. All Rights Reserved.
    Quantum computers won’t replace today’s traditional computers, but they will become mainstream within five years, a top executive in charge of emerging technologies at International Business Machines Corp. predicted.
    Speaking at The Wall Street Journal’s Future of Everything Festival Wednesday, Arvind Krishna, senior vice president of cloud and cognitive software, predicted that with quantum computing, batteries could last “a thousand times longer” and airplanes could become lighter.
    “All of these use cases, I think, will get solved in a few years,” Mr. Krishna said. “Pharmaceuticals and drug discovery is a much harder problem.”
    Quantum computers have the potential to sort through a vast number of possible solutions—more than the number of atoms in the universe—with the calculations being completed as fast as a fraction of a second.
    Responding to criticism from researchers that the U.S. may be falling behind China and the European Union to invest in quantum computing, Mr. Krishna said the U.S. is currently slightly ahead but does need to invest more. China is constructing a $10 billion research center for quantum applications. The European Union announced in 2016 that it is creating a €1 billion effort on four areas of quantum technology including computing and communication.
    Mr. Krishna, who also oversees the integration of IBM’s $33 billion acquisition of Red Hat Inc. said he expects the deal—IBM’s largest acquisition to date—to close around June. The company has received approval from the U.S. Department of Justice for the deal, and is now awaiting approval from the European Union.
    Asked about restructuring after the acquisition is completed, Mr. Krishna said that it wouldn’t result in any job cuts at Red Hat.
    “This is a value deal, not about cost synergy. They [Red Hat] run on multiple public clouds. It’s got to be preserved,” he said.
    In the public cloud space, IBM trails rivals Amazon Inc. and Microsoft Corp. IBM ranked fifth in the world for public cloud-infrastructure service in 2017, according to data from Gartner Inc., behind Amazon, Microsoft, Alibaba Group Holding Inc. and Google Inc.
    But Mr. Krishna said the acquisition creates a big opportunity for IBM to expand in the so-called hybrid cloud space where customers run some software in their own data centers but also use cloud services.
    “I’m not trying to catch up to Amazon and Microsoft,” he said. “They are going down the path of public cloud and we are going to be hybrid. There is so much investment that’s already happening and there is so much data that can’t sit on the public cloud. I believe there is space for all of us,” he said.
    ///
    The use of the trapped ion technology puts Honeywell in rare company, since the most visible companies pursuing quantum computing, including IBM, Google, Intel, and Rigetti, are basing their hardware on semiconductor technology.
    June 1 - 
    https://www.nextplatform.com/2019/05/28/honeywell-one-step-closer-to-universal-quantum-computer/
    In November, the company revealed it had started testing its first-generation qubit devices, followed in January by the claim that it had “demonstrated record-breaking high fidelity quantum operations” on its trapped-ion qubits. In March, it announced it had demonstrated “parallel operating zones” on the device, which it believes will provide faster execution and more flexible qubit connectivity.
    Honeywell’s attraction to trapped ion technology mirrors that of IonQ, namely that these atomic level structures are totally uniform, naturally resistant to error-producing noise, and can be connected to one another in different configurations at runtime. While this technology doesn’t have the decades-long history and proven scalability of semiconductors, at this point, it offers the most interesting alternative for solid-state quantum computing.
     */
    var blogpost30 = '\n\n<p class="firstparagraph">Substituting one material for another when in a pinch invites a panoply of complications when the quality of substitute materials vary by geographical and political borders ... <br />\n  <img src="dist/img/metal.jpg"  width="400"  class="zoom" />\n</p>\n\n<p class="quote">Electronics manufacturers could be among the first to feel the full brunt of the trade war. The industry is perhaps uniquely global: Chips made in Oregon or Texas are shipped to a plant in Mexico to be attached to circuit boards made in China alongside capacitors made in Vietnam. It is not unheard-of for a product or its components to cross the Pacific three or even four times before showing up on retail shelves. \nBut nearly a year later, the trade war shows no sign of cooling off. So ControlTek, the electronics manufacturer that Mr. LaFrazia runs near Portland, is taking steps to protect itself, a strategic shift that has been repeated in boardrooms and executive suites around the world in recent weeks.\n<br /><br /> \n\u201CWe\u2019re very much at the end of the whip getting thrown around,\u201D Mr. LaFrazia said.\nIt was also unclear which products were subject to tariffs. Mr. LaFrazia, a 54-year-old Air Force veteran, recalled spending hours poring over an online list of tariff codes to figure out which applied to his parts. When he called the manufacturers, they often didn\u2019t know where they fell in the government\u2019s taxonomy of tradable goods. Even the government\u2019s experts can get confused \u2014 ControlTek recently had a shipment of parts delayed for 12 days because customs officials thought they contained aluminum that was subject to tariffs. (They didn\u2019t.)<sup>1</sup></p>\n \n\n';

    var blogcite30 = '\n<p>1. <a  target="_blank" href="https://www.nytimes.com/2019/05/30/business/economy/trump-tariff-manufacturer.html">https://www.nytimes.com/2019/05/30/business/economy/trump-tariff-manufacturer.html</a> \n</p>\n\n<p><a  target="_blank" href="https://markets.businessinsider.com/news/stocks/apple-stock-price-slides-trade-war-tensions-overshadow-product-launches-2018-9-1027522247">https://markets.businessinsider.com/news/stocks/apple-stock-price-slides-trade-war-tensions-overshadow-product-launches-2018-9-1027522247</a> \n</p> \n\n';

    var blogpost29 = '\n  <p class="firstparagraph">My <a href="#09-11-18">September 11th post</a> last year touched on global tech\'s dependence on rare earth materials  ... and again, the trade war begins to take its toll:\n  </p>\n  \n  <p class="quote">Against a backdrop of mounting concern over the long-running trade dispute between the US and China, which stands to choke global growth, Beijing signalled that exports of rare-earth elements to the US could be curtailed.\n  <br /><br />Chinese media reports, including the People\u2019s Daily, the flagship newspaper of the Communist party, raised the prospect of the crackdown, which would stand to hit American companies involved in electronics, car production and defence.\n\n  Analysts said China handles roughly 80% of US imports of rare earths and that high-tech manufacturers could see their profits crippled by the measures.<sup></sup></p> ';

    var blogcite29 = '  \n<p><a  target="_blank" href="https://www.theguardian.com/business/2019/may/29/global-markets-fall-as-china-prepares-to-hit-back-at-us-in-trade-war">https://www.theguardian.com/business/2019/may/29/global-markets-fall-as-china-prepares-to-hit-back-at-us-in-trade-war</a> \n</p>\n\n';
    var blogpost18 = ' \n  \n  <p class="firstparagraph"> \n  </p>\n  \n  <p class="quote">In a surprise bit of weekend news that could have major implications on the smartphone market, Reuters reports that \u201CGoogle has suspended business with Huawei that requires the transfer of hardware, software, and technical services except those publicly available via open source licensing.\u201D\n  <br /><br />\n  Translation: Huawei can no longer implement a full-fledged version of Android, losing access to Google services and more. Instead, it\u2019ll only be allowed to use the open source components of Android. That means no Google Play Store, no Gmail, no YouTube \u2013 at least not without major workarounds. This presumably affects future devices; it\u2019s not clear what effect it will have on current ones.<sup></sup></p>\n\n  \n';
    var blogcite18 = '  \n  \n  <p><a  target="_blank" href="https://thenextweb.com/insider/2019/05/20/report-google-breaks-up-with-huawei-cutting-access-to-android-services-and-apps/">https://thenextweb.com/insider/2019/05/20/report-google-breaks-up-with-huawei-cutting-access-to-android-services-and-apps/</a> \n  </p>\n  \n\n';
    var blogpost17 = ' \n  \n<p class="firstparagraph"> \n</p>\n\n<p class="quote">Quantum computers won\u2019t replace today\u2019s traditional computers, but they will become mainstream within five years, a top executive in charge of emerging technologies at International Business Machines Corp. predicted.\n\nSpeaking at The Wall Street Journal\u2019s Future of Everything Festival Wednesday, Arvind Krishna, senior vice president of cloud and cognitive software, predicted that with quantum computing, batteries could last \u201Ca thousand times longer\u201D and airplanes could become lighter.\n\n\u201CAll of these use cases, I think, will get solved in a few years,\u201D Mr. Krishna said. \u201CPharmaceuticals and drug discovery is a much harder problem.\u201D\n\nQuantum computers have the potential to sort through a vast number of possible solutions\u2014more than the number of atoms in the universe\u2014with the calculations being completed as fast as a fraction of a second.\n<br /><br />\nResponding to criticism from researchers that the U.S. may be falling behind China and the European Union to invest in quantum computing, Mr. Krishna said the U.S. is currently slightly ahead but does need to invest more. China is constructing a $10 billion research center for quantum applications. The European Union announced in 2016 that it is creating a \u20AC1 billion effort on four areas of quantum technology including computing and communication.\n\nMr. Krishna, who also oversees the integration of IBM\u2019s $33 billion acquisition of Red Hat Inc. said he expects the deal\u2014IBM\u2019s largest acquisition to date\u2014to close around June. The company has received approval from the U.S. Department of Justice for the deal, and is now awaiting approval from the European Union.\n<br /><br />\nAsked about restructuring after the acquisition is completed, Mr. Krishna said that it wouldn\u2019t result in any job cuts at Red Hat.\n\u201CThis is a value deal, not about cost synergy. They [Red Hat] run on multiple public clouds. It\u2019s got to be preserved,\u201D he said.\nIn the public cloud space, IBM trails rivals Amazon Inc. and Microsoft Corp. IBM ranked fifth in the world for public cloud-infrastructure service in 2017, according to data from Gartner Inc., behind Amazon, Microsoft, Alibaba Group Holding Inc. and Google Inc.\n<br /><br />\nBut Mr. Krishna said the acquisition creates a big opportunity for IBM to expand in the so-called hybrid cloud space where customers run some software in their own data centers but also use cloud services.  \u201CI\u2019m not trying to catch up to Amazon and Microsoft,\u201D he said. \u201CThey are going down the path of public cloud and we are going to be hybrid. There is so much investment that\u2019s already happening and there is so much data that can\u2019t sit on the public cloud. I believe there is space for all of us,\u201D he said. <sup>1</sup></p>\n  ';
    var blogcite17 = '  \n  \n<p><a  target="_blank" href="https://www.wsj.com/articles/ibm-software-exec-predicts-quantum-computers-will-become-mainstream-in-five-years-11558548160">https://www.wsj.com/articles/ibm-software-exec-predicts-quantum-computers-will-become-mainstream-in-five-years-11558548160</a> \n</p>\n  ';

    var blogpost16 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote"> \n<br /><br /> <sup></sup></p>\n';
    var blogcite16 = '  \n<p><a  target="_blank" href=""></a> \n</p>\n\n';
    var blogpost15 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote">But, interestingly, the word \u201Cblockchain\u201D doesn\u2019t actually appear in the original bitcoin white paper, released back in 2008. Rather, the white paper uses the words \u201Cblock\u201D and \u201Cchain\u201D separately many times.\n\nIt describes the word \u201Cblock\u201D as the vehicle for a bundle bitcoin transactions. Then, these blocks of are linked together, forming a \u201Cchain\u201D of \u201Cblocks.\u201D <br /><br /><sup>1</sup></p>\n';
    var blogcite15 = '  \n\n \n<p>1. <a target="_blank" href="https://www.coindesk.com/bitcoin-and-blockchain-the-tangled-history-of-two-tech-buzzwords">https://www.coindesk.com/bitcoin-and-blockchain-the-tangled-history-of-two-tech-buzzwords</a> \n</p>\n';

    var blogpost14 = ' \n  <p class="firstparagraph"> \n  </p>\n \n<p class="quote"> <sup></sup></p>\n';
    var blogcite14 = ' \n    <p><a  target="_blank" href=""></a> \n    </p>\n';

    var blogpost13 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote"> <sup></sup></p>\n';
    var blogcite13 = '  \n<p><a  target="_blank" href=""></a> \n</p>\n\n';

    var blogpost12 = ' \n<p class="firstparagraph"> \n</p>\n\n<p class="quote"> <sup></sup></p>\n';
    var blogcite12 = '  \n<p><a  target="_blank" href=""></a> \n</p>\n\n';
    var blogpost11 = ' \n  <p class="firstparagraph">The <i>global quest</i> for Satoshi Nakamoto\'s identity now reveals an interesting new plot twist. Contrasting with my  May 4th and 5th post articles, this theory appears to hold water ... \n  </p> \n<p class="quote">\nOne of the most enduring mysteries of modern times has produced another enthralling twist. Satoshi Nakamoto, Bitcoin\u2019s pseudonymous and enigmatic creator, has not been seen online in more than eight years. Evidence has now surfaced that points to a new Satoshi candidate, whose known life has a number of parallels with that of Bitcoin\u2019s inventor. His name is Paul Le Roux and, if proven to be Satoshi, there is a good reason why his 1 million BTC hasn\u2019t moved \u2013 the Rhodesian has been in jail since 2012.<sup>1</sup></p>\n';
    var blogcite11 = '  \n<p>1.<a target="_blank"  href="https://news.bitcoin.com/satoshi-nakamoto-could-be-criminal-mastermind-paul-le-roux/">https://news.bitcoin.com/satoshi-nakamoto-could-be-criminal-mastermind-paul-le-roux/</a> \n</p> \n';
    var blogpost10 = ' \n<p class="quote"><i>Bitcoin is like gold in many ways. Like gold, Bitcoin cannot simply be created arbitrarily. Gold must be mined out of the ground, and Bitcoin must be mined via digital means. Linked with this process is the stipulation set forth by the founders of Bitcoin that, like gold, it have a limited and finite supply. In fact, there are only 21 million Bitcoins that can be mined in total. Once miners have unlocked this many Bitcoins, the planet\'s supply will essentially be tapped out, unless Bitcoin\'s protocol is changed to allow for a larger supply. All confirmed Bitcoin transactions are recorded in the blockchain. The blockchain is described as a shared public ledger on which the entire Bitcoin network relies.</i> <sup>1</sup></p>\n<p class="firstparagraph">Sometime near 2020, the rules of crypto-logic begin to bend ... \n</p>\n<p class="quote"> It may seem that the group of individuals most directly affected by the limit of the Bitcoin supply will be the Bitcoin miners themselves. On one hand, there are detractors of the Bitcoin limitation who that say that miners will be forced away from the block rewards they receive for their work once the Bitcoin supply has reached 21 million in circulation. In this case, these miners may need to rely on transaction fees in order to maintain operations. Bitcoin.com points to an argument that miners will then find the process unaffordable, leading to a reduction in the number of miners, a centralization process of the Bitcoin network, and numerous negative effects on the Bitcoin system. <sup>2</sup></p>\n\n\n';
    var blogcite10 = '  \n\n  <p>1.\n  <a href="https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a" target="_blank">https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a</a>https://www.cnbc.com/2019/04/28/bitcoin-bull-tom-lee-says-new-crypto-highs-likely-by-2020.html\n  </p>\n<p>1.\n<a href="https://www.investopedia.com/tech/what-happens-bitcoin-after-21-million-mined/" target="_blank">https://www.investopedia.com/tech/what-happens-bitcoin-after-21-million-mined/</a> \n</p>\n';
    var blogpost9 = ' \n  <p class="firstparagraph">Linus Torvalds\' great contribution now extends to Microsoft 10, rather than the past couple year\'s emulated mounting. \n  </p>\n \n<p class="quote">Windows 10 will soon include a built-in Linux kernel updated through Windows Update. Windows itself will still be based on the Windows kernel, of course. The Linux kernel will power the Windows Subsystem for Linux 2 (WSL 2) and let you run even more Linux applications on Windows 10.\n<br /><br />\nWSL version 1 was powerful, but it relied on emulation to run Linux software. That prevented more complex Linux applications\u2014like Docker\u2014from running on Windows. WSL 2 will be more powerful and will run Linux software using an actual Linux kernel.<sup>1</sup></p>\n<p>\nThis, along with 2019 Google Chromebooks\' command-line Linux development environments -- Hooray, the Universe has finally converged!\n</p>\n';
    var blogcite9 = '  \n<p>1. <a href="https://www.howtogeek.com/414036/2019-is-the-year-of-linux-on-the-desktop/">https://www.howtogeek.com/414036/2019-is-the-year-of-linux-on-the-desktop/</a> \n</p>\n \n';
    var blogpost8 = ' \n  <p class="firstparagraph"> \n  </p>\n \n<p class="quote"> <sup></sup></p>\n';
    var blogcite8 = '  \n<p><a href=""></a> \n</p>\n \n';

    var blogpost7 = ' \n  <p class="firstparagraph">  BTC smart contract ability now gets a boost, as it looks like R & D has been busy lately:\n  </p>\n  <p class="quote">\n  The two proposals, announced on the bitcoin developer email list, describe Taproot, a code change designed to increase bitcoin\u2019s privacy. Taproot is expected to be bundled together with an upgrade called Schnorr in a soft fork that developers have been looking into for some time, paving the way for privacy and scalability improvements to bitcoin.\n<br /><br />\nDevelopers have long been thinking about how to arrange this particular upgrade. There have been a number of proposed changes to bitcoin over the years and, as they are all related, it makes sense to implement them together. That includes Merkelized Abstract Syntax Trees (MAST), adding, improved bitcoin smart contracts, Schnorr signatures, which adds another way to sign bitcoin transactions, and Taproot, which adds even better privacy.<sup>1</sup>\n</p>\n\n';
    var blogcite7 = ' \n<p>1.<a href="https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork">https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork</a>\n</p> \n\n';
    var blogpost6 = ' \n  <p class="firstparagraph">Bitcoin\'s bare simplicity--designed more than ten years ago, published October 31, 2008--has traditionally served as a strength of reliability in an uncharted industry field. Yet, in a complex and demanding Tech world, others took the spotlight--as the Bitcoin distributed ledger has been contrasted with Ethereum\'s complex scripting language, Solidity, which provides multi-variate <i>Smart Contracts</i> that are well-suited for Distributed Apps, <i>DAPPs</i> and generally for financial-clerical-legal documents. However, the once belittled simple, but reliable, distributed blockchain ledger leverages third-party smart contracting:\n  </p>\n \n<p class="quote">\nEthereum has become the most popular blockchain for creating smart contracts. One of the major design goals of the Ethereum platform was to support smart contracts. From the start, this set Ethereum apart from Bitcoin, which was created first and foremost as a digital currency platform.\n<br /><br />\nAs the Bitcoin protocol has evolved, it has gained support for smart contracts. Smart contract functionality is not as programmable and extensible on Bitcoin as it is on Ethereum. However, using features added to Bitcoin through improvement proposals, certain smart contract functionality can be achieved through Bitcoin scripting.\n<br /><br />\nFor Particl, the most important smart contract feature in Bitcoin is the OP_CHECKLOCKTIMEVERIFY opcode, which was introduced by Peter Todd as Bitcoin Improvement Proposal (BIP) 65. The opcode makes it possible to write scripts that prevent funds in a multi-signature wallet from being spent until a certain signature pattern is implemented or a certain amount of time passes.<sup>1</sup></p>\n';
    var blogcite6 = '  \n<p>1.<a href="https://bitcoinmagazine.com/articles/yes-bitcoin-can-do-smart-contracts-and-particl-demonstrates-how/">https://bitcoinmagazine.com/articles/yes-bitcoin-can-do-smart-contracts-and-particl-demonstrates-how/</a> \n</p>\n\n<p>White Paper<a href="https://github.com/particl/whitepaper/blob/master/decentralized-private-marketplace-draft-0.1.pdf">https://github.com/particl/whitepaper/blob/master/decentralized-private-marketplace-draft-0.1.pdf</a>\n</p>\n';
    var blogpost5 = ' \n  <p class="firstparagraph"> \n  </p>\n    \n  <p class="quote">\n  The self-proclaimed Satoshi, Craig Wright, is being sued by the Kleiman family on behalf of the now deceased Dave Kleiman and his estate. The lawsuit accuses Wright of fraud and theft of \u201Cover $11 billion worth of bitcoins and intellectual property from the estate of Dave Kleiman and W&K shortly after Dave\u2019s 2013 death.\u201D Last week the court ordered Wright to disclose bitcoin addresses that belonged to him before December 2013. The Florida Magistrate overseeing the lawsuit, Judge Bruce Reinhart, signed the order and gave Wright a few days to produce the list.\n  <br /><br />\n  Since then a list of addresses that were once filed in an obscure fashion was unsealed and Wright claims to have mined the first 70 bitcoin blocks starting from the Genesis block. After the redacted list was unsealed, the researchers at Wizsec decided to study the addresses and wrote a blog post about the recently disclosed file. Wizsec claims that Wright simply copied and pasted the addresses from the first 70 blocks and asserted the addresses belonged to him without any cryptographic proof.\n<br /><br />\nWizsec says the motion begs the belief that the self-proclaimed inventor acts as if he is \u201Cignorant about the fundamentals of his invention.\u201D \u201CPerhaps Wright thinks that being a bitcoin miner means pointing at bitcoins and yelling \u2018Mine,\u2019\u201D the researchers jokingly remarked. In the document, Wright\u2019s filing continues to assert that he did not keep track of which Bitcoin blocks he mined and that he does not know any of the other Bitcoin public addresses. The motion further states that the self-styled Satoshi does not have a complete list of the public addresses that he owned as of any date.<sup>1</sup>\n</p>\n';
    var blogcite5 = ' \n<p>1.<a href="https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork">https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork" target="_blank">https://www.coindesk.com/new-bips-hint-at-upcoming-taproot-bitcoin-soft-fork</a>\n</p>\n \n';

    var blogpost4 = ' \n<p class="firstparagraph">Satoshi Nakamoto, the omni-present legend that introduced the final frontier for Trustless-based cryptocurrencies is worthy of the world\'s respect. But the Prying Eyes of the tech paparazzi are on the attack. <br /><br />Some character development:  \n</p>\n \n\n<p class="quote"> Ten years ago today, someone using the name Satoshi Nakamoto sent an academic paper to a cryptography mailing list proposing a form of digital cash called "bitcoin." The pseudonymous Nakamoto, whose true identity remains unknown, described an idea for "mining" a limited amount of this virtual currency through a peer-to-peer scheme that wouldn\'t depend on a bank, government, or any other central authority. Once people started using bitcoin, it would be impossible for a government to pull the plug, as happened with previous attempts to create digital money, such as E-Gold.\n<sup>1</sup>\n</p>\n<p>However, seeking a life of anonymity can only stir up further the paparazzis\' research fervor. So, the latest attempt on the inventor\'s privacy, there is the latest claim:</p>\n<p class="quote">The Gotsatoshi.com domain was registered in May 2017, but has lain dormant until last month, when an archived snapshot of the site shows it to have been proclaiming Satoshi\u2019s unveiling as 10 days away then. It\u2019s possible that the great reveal will remain forever 10 days away, to frustrate watchers hoping for a thrilling denouement, or the countdown may reach zero only to reveal a new shitcoin, puzzle game, or to hail the efforts of the marketing agency that dreamed up the stunt.<sup>2</sup>\n</p>\n<p> \nChanneling our adoration of Satoshi Nakamoto toward respect is a bygone hope, but unwarranted paparazzi expos&eacute;s cross the line of decency, so let\'s see if Satoshi\'s cleverness yet once again thwarts the prying eyes!</p>\n';
    var blogcite4 = '\n<p>0. Night at the Roxbury</p>\n<p>1.<a href="https://www.wired.com/story/after-10-years-bitcoin-changed-everything-nothing/" target="_blank">Oct. 31, 2019: https://www.wired.com/story/after-10-years-bitcoin-changed-everything-nothing/</a>\n</p>\n\n<p>2.   <a href="https://news.bitcoin.com/new-website-promises-to-unveil-satoshi-nakamoto-in-10-days/" target="_blank">https://news.bitcoin.com/new-website-promises-to-unveil-satoshi-nakamoto-in-10-days/</a>\n</p>\n';
    var blogpost3 = '\n    <p class="firstparagraph">Rekognition, a premier AWS service, shines among a few dozen other AI software resources, not to mention Platforms-as-a-Service, yet not without controversy: On the one hand, AI algorithms necessarily reflect the biases of its origin lab. On the other hand, Providers like AWS\' democratizing access to every researcher, professional, and student the unlimited use of sophisticated and expensive AI resources; thus canceling out any potential bias through the diversity of individuals\' and teams\' participation.  \n    <br /><br />\n    <img   class="zoom" src="https://s3.amazonaws.com/tmm-nov/img/rekognition.jpg">  \n    <br /><br />\n    At the heart of these healthy public debates, it\'s the particular use-cases that exemplify the spectrum of the debate. For instance, policing practice by bot is a sure example, if not for the <i>RoboCop</i> Hollywood allure ... As always, the AI\'s algorithm bears the imprint of the creator\'s intentions: </p>\n\t\n\t<p class="quote"> \n\tBut Washington County also became ground zero for a high-stakes battle over the unregulated growth of policing by algorithm. Defense attorneys, artificial-intelligence researchers and civil rights experts argue that the technology could lead to the wrongful arrest of innocent people who bear only a resemblance to a video image. Rekognition\u2019s accuracy is also hotly disputed, and some experts worry that a case of mistaken identity by armed deputies could have dangerous implications, threatening privacy and people\u2019s lives.<br /><br />\n\nSome police agencies have in recent years run facial-recognition searches against state or FBI databases using systems built by contractors such as Cognitec, IDEMIA and NEC. But the rollout by Amazon has marked perhaps the biggest step in making the controversial face-scanning technology mainstream. Rekognition is easy to activate, requires no major technical infrastructure, and is offered to virtually anyone at bargain-barrel prices. Washington County spent about $700 to upload its first big haul of photos, and now, for all its searches, pays about $7 a month.<sup>1</sup> \n    </p>\n    <p>Whether government services or commercial enterprise, the landscape  is converting <i>en masse</i> the manual and the mundane to machine learning.  Public advocacy, now-g5 23 more than ever, can help direct A.I. technology and use toward a more society-friendly endeavor ...</p>\n\t';
    var blogcite3 = ' \n \n\t<p>1.\n\t<a href="https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a" target="_blank">https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a</a>\n\t</p>\n    \n    ';

    var blogpost2 = '  \n    <p class="firstparagraph">Ethereum Ether and Bitcoin have plenty in common, including their Proof-of-Work architecture--requiring Mining computationally difficult math problems to create scarcity and other functions. The downside is the nation-comparable amount of electricity spent each year, which in many cases are unregulated, coal-filled energy sources across the globe. This commonality will end next month when the Ethereum cryptocurrency will transition to Proof-of-Stake architecture, the long-ago and highly anticipated Ethereum 2.0.\n    </p> \n    <p class="quote"> \n    Ethereum has been inching toward a major upgrade, dubbed ethereum 2.0, which would radically change the how the $17 billion network creates blocks and verifies transactions. As explained by founder of ethereum Vitalik Buterin in a recent interview at ethereum conference ETHCapetown, ethereum 2.0 has \u201Ctwo major flagship components.\u201D\n    <br /><br />\n    \u201COne is Casper, which is our proof-of-stake algorithm which replaces mining\u2026with something that we consider to be much more efficient,\u201D Buterin said at the time. \u201CThe second part is sharding which is this massive scalability improvement which happens because you don\u2019t need every computer in the network to process every transaction in the network any more.\n    <br /><br />\n    Buterin added that with sharding, he anticipates a \u201C1,000 factor increase in scalability\u201D to the network. However, sharding will only come in the later two phases of ethereum 2.0 roll-out. The first phase \u2013 dubbed Phase Zero \u2013 strictly launches ethereum\u2019s new proof-of-stake blockchain.\n    <sup>1.</sup>\n    </p>\n    \n    <p>The second improvement accentuates Ethereum\'s contract-capable currency (unlike Bitcoin\'s lack of contractual functionality), which means to revolutionize not only how data is persisted but also distributed, and managed at the individualized crypto-level! Using a language called <i>Solidity</i>, derived from Java and JavaScript origins, this crypto-currency stands first in line for upsetting the existing systems of finance, manufacture, and enterprise data. An exemple use-case ...\n   \n    </p>\n    \n    <p class="quote"> \n    In the United States, healthcare comes from a patchwork of private companies, which means the handling of patient data is even more fragmented. John Halamka, chief information officer at Beth Israel Deaconess Medical Center in Boston, Massachusetts, told MIT Technology Review last year that there are 26 different electronic medical records systems in his home city alone.\n    <br /><br />\n    In 2016, Halamka teamed up with a group of scientists at MIT to try to find a solution to the problem using blockchain. They published their white paper on the subject in August 2016, laying out their proposal for a system that would help all those disparate databases exchange data\u200A\u2014\u200Aa project they called MedRec.\n    <br /><br />\n    Andy Lippman, a senior research scientist at MIT, co-authored the paper with Halamka. The system they outlined was to use Ethereum software\u200A\u2014\u200Awhich, unlike bitcoin, can integrate and execute smart contracts\u200A\u2014\u200Ato build a private blockchain, linking healthcare providers together and allowing them to share their data.\n    <sup>2.</sup>\n    </p>\n    <p>So, as usual, Ethereum wins the day for both daily applicability and now a more scalable <strong><i>and</i> conscientious</strong> crypto-currency Tech!\n\t';

    var blogcite2 = ' \n      \n  <p class="cite">1. \n  <a href="https://www.coindesk.com/code-for-ethereums-proof-of-stake-blockchain-to-be-finalized-next-month" target="_blank"> https://www.coindesk.com/code-for-ethereums-proof-of-stake-blockchain-to-be-finalized-next-month</a>\n  \n  </p>\n  \n      \n  <p class="cite">2. [Post article 2/20/18]\n  <a href="https://medium.com/s/welcome-to-blockchain/what-could-blockchain-do-for-healthcare-59c17245448e" target="_blank">https://medium.com/s/welcome-to-blockchain/what-could-blockchain-do-for-healthcare-59c17245448e</a> </p>\n  \n  ';
    var blogpost1 = ' \n  \n  <p class="firstparagraph">Data Analytics\' <i>Law of Large Numbers</i>, i.e. over n = 10,000, promises a predictable likelihood of conditions and events, given a sufficiently high sample of training data. Despite the quantum-directed molecular behavior of biological organisms, the classical exponentiation of machine-learning statistical algorithms still does work miracles:  \n  </p> \n  \n  <p class="quote"> \n  Studies indicate that using algorithms to analyze digital slides delivers diagnoses as accurate as an expert pathologist\u2014and in some instances, the algorithms are more accurate. A 2018 study by Massachusetts General Hospital and MIT found that an automated system they developed diagnosed dense breast tissue (an indicator of breast cancer) in mammograms at the same level as an expert radiologist. Another algorithm developed by Google was found to \u201Chelp detect metastatic breast cancers with significant accuracy and improve pathologist performance,\u201D according to studies in the Archives of Pathology and Laboratory Medicine and the American Journal of Surgical Pathology.\n  </p>\n  So, how can we best take advantage of these advances? Clear the brush! The meta-organization of healthcare technology and financing simply can\'t keep pace with the pure tech:\n  <p class="quote">\n  After taking a look, the pathologist might ship it to a specialist at another lab for a second opinion. Each time the slide is moved, it is packed up and shipped to a different address. All the while, you\u2019re waiting days or even weeks to hear whether or not you have cancer.\n<br /><br />\n  For decades, there have been limited ways to share medical slides, with information management lagging behind even as medical science advanced. But in the past few years, a new industry of digital pathology has emerged that could finally offer a more efficient and large-scale way of distributing and analyzing these kinds of samples.\n  <sup>1</sup>\n  </p>\n  <p>So, the good news from <i>the doctors\'</i> occasional nemesis, U.S. Food and Drug Administration, decided that after 8 years of trials and hearings, truly scalable and sufficiently large sample data can now be digitized - hence personalizing the law of large numbers from the whole to the individual patient. At long last, the patience has paid off!\n  ';
    var blogcite1 = '\n  \n  \n  <p>1. [Post article 2/22/19]\n  <a href="https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8" target="_blank">\n  https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8\n  </a>\n  </p>\n  \n  ';

    var url = [{
        id: '30',
        did: '19-05-30',
        date: 'May 30, 2019 <br />Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'All\'s Fair in War and Peace, but Not in Trade! Part II: <br />Material Substitutes',
        post: blogpost30,
        cite: blogcite30
    }, {
        id: '29',
        did: '19-05-29',
        date: 'May 29, 2019 <br />Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'All\'s Fair in War and Peace, but Not in Trade! Part I: <br />When the Dogs of War take a Bite out of Tech',
        post: blogpost29,
        cite: blogcite29
    }, {
        id: '18',
        did: '19-05-21',
        date: 'May 21, 2019 ',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'The Politics of Tech',
        post: blogpost18,
        cite: blogcite18
    }, {
        id: '17',
        did: '19-05-20',
        date: 'May 20, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Quantum Data',
        title: 'Procrastinating a Quantum Leap are We?',
        post: blogpost17,
        cite: blogcite17
    }, {
        id: '16',
        did: '19-05-18',
        date: 'May 18-19, 2019 <br />Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost16,
        cite: blogcite16
    }, {
        id: '15',
        did: '19-05-17',
        date: 'May 17, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost15,
        cite: blogcite15
    }, {
        id: '14',
        did: '19-05-16',
        date: 'May 16, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'M',
        title: '',
        post: blogpost14,
        cite: blogcite14
    }, {
        id: '13',
        did: '19-05-15',
        date: 'May 15, 2019 ',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost13,
        cite: blogcite13
    }, {
        id: '12',
        did: '19-05-14',
        date: 'May 14, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: '',
        title: '',
        post: blogpost12,
        cite: blogcite12
    }, {
        id: '11',
        did: '19-05-13',
        date: 'May 13, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Satoshi \'Le Roux\' Nakamoto?',
        post: blogpost11,
        cite: blogcite11
    }, {
        id: '10',
        did: '19-05-11',
        date: 'May 11-12, 2019 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Finite Bitcoin',
        post: blogpost10,
        cite: blogcite10
    }, {
        id: '9',
        did: '19-05-10',
        date: 'May 10, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'The Long and Ubiquitous Reign of Linux OS',
        post: blogpost9,
        cite: blogcite9
    }, {
        id: '8',
        did: '19-05-09',
        date: 'May 9, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: ' ',
        title: ' ',
        post: blogpost8,
        cite: blogcite8
    }, {
        id: '7',
        did: '19-05-08',
        date: 'May 8, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Toward a Smarter Bitcoin, Part II:<br />Designing a More Scalable and Private Crypto-Currency',
        post: blogpost7,
        cite: blogcite7
    }, {
        id: '6',
        did: '19-05-07',
        date: 'May 7, 2019 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Toward a Smarter Bitcoin, Part I:<br />Contracting a More Functional Crypto-Currency',
        post: blogpost6,
        cite: blogcite6
    }, {
        id: '5',
        did: '19-05-05',
        date: 'May 6, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: '<i>What is Love? Baby, Baby Don\'t Hurt Me No More! </i><sup>0</sup> Part II:<br /><br />Bitcoin\'s Palaentology Deepens the Founder\'s Obscurity',
        post: blogpost5,
        cite: blogcite5
    }, {
        id: '4',
        did: '19-05-04',
        date: 'May 4 - 5, 2019 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: '<i>What is Love? Baby, Baby Don\'t Hurt Me No More! </i><sup>0</sup> Part I:<br /><br />Paparazzi Sighting of our Bitcoin Father: <br />Adoring Adulation or Privacy Invasion?',
        post: blogpost4,
        cite: blogcite4
    }, {
        id: '3',
        did: '19-05-03',
        date: 'May 3, 2019  ',
        author: 'by Thomas Maestas, MA',
        cat3: 'A.I.Now.',
        title: 'Rekognize Me?',
        post: blogpost3,
        cite: blogcite3
    }, {
        id: '2',
        did: '19-05-02',
        date: 'May 2, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Modern Healthcare, Part II:<br />The Scalable and Clean Data Platform',
        post: blogpost2,
        cite: blogcite2
    }, {
        id: '1',
        did: '19-05-01',
        date: 'May 1, 2019',
        author: 'by Thomas Maestas, MA',
        cat3: 'A.I.Now.',
        title: 'Modern Healthcare, Part I:<br />On the Second Opinion of 10,000 Doctors',
        post: blogpost1,
        cite: blogcite1
    }];

    for (i = 0; i < url.length; i++) {
        var cat = ' \n\t  <div id="' + url[i].did + '" class="blogDiv"> \n\t  <hr />  \n\t  <a href="#top"><button>Top</button></a>  \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n\t  <div id="post">' + url[i].post + '\t  </div>\n      <div id="post">' + url[i].cite + '</div>\n\t  </div>';

        document.getElementById("paragraph-may19").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
        var catMod = '\n\t  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n\t  <hr />  \n\t  <a href="#top-mod"><button>Top</button></a>   \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n      <div id="post">' + url[i].post + '</div>\n      <div id="post">' + url[i].cite + '</div>\n      \n\n\t  </div>';

        document.getElementById("paragraph-may19-mod").innerHTML += catMod;
    }

    console.log('blogger-may-19');
    // console.log(angular.toJson(url));
};

bloggerMay19();

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bloggerMarch19 = function bloggerMarch19() {
    /*
    https://medium.com/s/teamhuman/the-right-kind-of-ai-with-kenric-mcdowell-7481b239a0cb
      https://medium.com/hummingbird-ventures/a-brief-history-of-blockchain-an-investors-perspective-387c440ad11c
      https://medium.com/@thinkoutsidetheblox/why-bitcoin-and-crypto-have-no-future-4f95980bb774
      https://medium.com/mit-technology-review/explainer-what-is-quantum-communication-527bb0f5d987
      https://media.consensys.net/18-predictions-for-2018-7a376ea7bd4b
      https://medium.com/s/welcome-to-blockchain/what-could-blockchain-do-for-healthcare-59c17245448e
      https://medium.com/mit-technology-review/russia-wants-to-cut-itself-off-from-the-global-internet-heres-what-that-really-means-c6f8851987ca
    
      https://onezero.medium.com/computer-generated-faces-are-getting-real-b32e8902586d
      https://medium.com/s/story/the-best-strategies-to-boost-your-willpower-5eb1b2d9af2b
     
    */

    var blogpost3 = '\n    <p class="firstparagraph">AWS Rekognition, a premier service among dozens of others, is like all AI software along with a Platform-as-a-Service necessarily reflects the biases of its origin lab. Alternately, AWS\' democratizing access to every student, professional, and researcher the unlimited use of sophisticated and expensive AI resources;thus hedging any potential bias to diverse individual\'s and team\'s participation.  At the heart of these healthy public debates, it\'s the particular use-cases that exemplify the spectrum of the debate. For instance, policing practice by bot is a sure example, if not for the <i>RoboCop</i> Hollywood allure ... As always, the AI\'s algorithm bears the imprint of the creator\'s intentions: </p>\n\t\n\t<p class="quote"> \n\tBut Washington County also became ground zero for a high-stakes battle over the unregulated growth of policing by algorithm. Defense attorneys, artificial-intelligence researchers and civil rights experts argue that the technology could lead to the wrongful arrest of innocent people who bear only a resemblance to a video image. Rekognition\u2019s accuracy is also hotly disputed, and some experts worry that a case of mistaken identity by armed deputies could have dangerous implications, threatening privacy and people\u2019s lives.<br /><br />\n\nSome police agencies have in recent years run facial-recognition searches against state or FBI databases using systems built by contractors such as Cognitec, IDEMIA and NEC. But the rollout by Amazon has marked perhaps the biggest step in making the controversial face-scanning technology mainstream. Rekognition is easy to activate, requires no major technical infrastructure, and is offered to virtually anyone at bargain-barrel prices. Washington County spent about $700 to upload its first big haul of photos, and now, for all its searches, pays about $7 a month.<sup>1</sup> \n    </p>\n    <p>Whether government services or commercial enterprise, the landscape  is converting <i>en masse</i> the manual and the mundane to machine learning.  Public advocacy, now more than ever, can help direct A.I. technology and use toward a more society-friendly endeavor ...</p>\n\t';

    var blogcite3 = ' \n \n\t<p>1.\n\t<a href="https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a" target="_blank">https://www.washingtonpost.com/technology/2019/04/30/amazons-facial-recognition-technology-is-supercharging-local-police/?noredirect=on&utm_source=pocket-newtab&utm_term=.8a8a1b75b94a</a>\n\t</p>\n    \n    ';

    var blogpost2 = '\n  <p class="firstparagraph">Security, security, another day another platform risk, or risks from your device, or risks from transactions, Today&#39;s\n  headline buried beneath a techy jargon provides a glimpse of the rising threat of web-application-based hackery:\n  Cryptojacking.\n  <i>Coindesk</i> reports, &quot; Opera browser introduces cryptocurrency miner protection for smartphones ... &quot;</p>\n  \n  <p class="quote">Cryptocurrency miners can overload smartphones&#39; CPUs, forcing 100 percent usage and potentially causing a phone\n  to overheat. And the damage can sometimes be permanent. According to a ZDNet article, one trojan generated so much\n  heat in a phone, its battery became swollen, permanently damaging the phone. While excessive ads were one reason\n  for the heat generation, the main cause was that the phone&#39;s CPU was hijacked to mine for Monero.\n  <sup>1</sup>\n  </p>\n  \n  <p>The larger issue here is that the lines between trusted mobile-app authorities, i.e., certified by Play Store or\n  Apple&#39;s is increasingly irrelevent. This is because an increasing number of app-users are ditching device-downloaded\n  apps, preferring for browser applications--hence, a much more appetizing market for the newest generation of blackhat\n  hackers, online thieves, peeping-toms, and other ill-wishers. There are a few driving factors for this issue--one\n  of which is the onset of Decentralized Applications (DAPPs), which use the\n  <i>browser</i> to interface between the Every-Day blockchain client/merchant/programmer and the actual byte-code of\n  the blockchain (via WEB).</p>\n  \n  <p>More importantly, the larger issue is that we live in an age in which the exclusive, native browser language since\n  1995, i.e. JavaScript. Security issues with browser-based apps were very low, because JavaScript never left the\n  browser, ever. Until 2009, Data, Servers were the domain of PHP, JAVA, Python, etc. or some other language for the\n  highly sensitive, dirty work of dipping into all that data sitting ontop of centralized servers around the world.\n  PHP wasn&#39;t easy, so power and responsibility usually followed with all the extra effort and expertise.</p>\n  \n  <p>2015 augured in the Node.js server-accessing (can create, read, update, and delete date) new-born capabilities of\n  JavaScript</p>\n  \n\t';

    var blogcite2 = ' \n     \n       \n      \n  \n  <p>1.\n  <a href="https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8" target="_blank">\n  https://medium.com/s/story/algorithms-can-now-identify-cancerous-cells-better-than-humans-78e6518f65e8\n  </a>\n  </p>\n  ';
    var blogpost1 = '\n  <p class="firstparagraph"> \n  <sup>2</sup>\n  </p>\n  \n  <p> </p>\n  \n  \n  <p class="quote"> \n  <sup>1</sup>\n  </p>\n  \n  <p>\n \n  </p>\n  \n\t';

    var blogcite1 = ' \n  <p>1.\n  <a href="https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a" target="_blank">https://hackernoon.com/blockchains-dont-scale-not-today-at-least-but-there-s-hope-2cb43946551a</a>\n  </p>\n   \n  ';
    var url = [{
        id: '3',
        did: '19-03-03',
        date: 'March 3-4, 2018 <br /> Weekend',
        author: 'by Thomas Maestas, MA',
        cat3: 'Sociology Tomorrow!',
        title: 'A Return to the Question of Guns, Germs, and Steel',
        post: blogpost3,
        cite: blogcite3
    }, {
        id: '2',
        did: '19-03-02',
        date: 'March 2, 2018',
        author: 'by Thomas Maestas, MA',
        cat3: 'Web Dev Affairs',
        title: 'Widening Circles of Mobile-App Security Risks',
        post: blogpost2,
        cite: blogcite2
    }, {
        id: '1',
        did: '19-03-01',
        date: 'March 1, 2018',
        author: 'by Thomas Maestas, MA',
        cat3: 'Musing Blockchain',
        title: 'Blockchain Sustainability Issues and The Double-Edged Sword',
        post: blogpost1,
        cite: blogcite1
    }];

    for (i = 0; i < url.length; i++) {
        var cat = ' \n\t  <div id="' + url[i].did + '" class="blogDiv"> \n\t  <hr />  \n\t  <a href="#top"><button>Top</button></a>  \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5> \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n\t  <div id="post">' + url[i].post + '\t  </div>\n      <div id="post">' + url[i].cite + '</div>\n\t  </div>';

        document.getElementById("paragraph-march19").innerHTML += cat;
    }

    var i;
    for (i = 0; i < url.length; i++) {
        var catMod = '\n\t  <div id="' + url[i].did + '_mod" class="blogDivMod"> \n\t  <hr />  \n\t  <a href="#top-mod"><button>Top</button></a>   \n\t  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n\t  <h5 id="cat3" class="  subdailytech">' + url[i].cat3 + '</h5>  \n\t  <p id="author" class="  author">' + url[i].author + '</p>   \n\t  <h6  id="date" class="  chapternumber">' + url[i].date + '</h6>    \n\t  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n\t  <br />\n      <div id="post">' + url[i].post + '</div>\n      <div id="post">' + url[i].cite + '</div>\n      \n\n\t  </div>';

        document.getElementById("paragraph-march19-mod").innerHTML += catMod;
    }

    console.log('blogger-march19');
    // console.log(angular.toJson(url));
};

bloggerMarch19();

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://www.digitaltrends.com/home/mui-wood-smart-display-ces-2019/'use strict'; https://www.latimes.com/business/la-fi-spacex-layoffs-20190111-story.html
// 'use strict';  

//june 
// http://nautil.us/issue/64/the-unseen/the-fourth-copernican-revolution
// https://www.theatlantic.com/science/archive/2018/09/your-dna-is-not-your-culture/571150/

var bloggerJan = function bloggerJan() {

  var blogpost1790 = '<p class="firstparagraph">Bitcoin\'s carbon footprint -- matching yearly Kilowatt usage as Portugul -- shows an example of the need to improve the technology. The Electrical drain from "Proof-of-Work" blockchain designs, like Ethereum and Bitcoin, makes the demand of scarcity through computationally difficult \'blocks\'. That is the \'weight\' worth in gold, at least cryptographically: <strong>A computer had to sweat alot so that <i>I</i> could own a piece of bitcoin.</strong> The problem is this makes for a lot of hot computing around the globe--a problem that grows with more ecological climate change.</p>\n\n  <p class="quote">Developers plan to ditch proof-of-work, the algorithm that the network currently uses to determine which transactions are valid and protect it from tampering, in favor of proof of stake, where the network is secured by the owners of tokens.\n<br /><br />\n  If and when that algorithm is rolled out, proof-of-stake could be a means for achieving distributed consensus that uses fewer resources.<sup>1</sup>\n  </p>\n  <p>So this is the conundrum with a long-term blockchain plans for ecological responsibility. Right now, Environmental hopes, like mine, are invested in Ethereum\'s planned migration to a "Proof-of-Stake" design... \n  </p>\n  <p class="quote">   At the cutting edge of blockchain research is a potential $15 million dollar venture by the Ethereum Foundation centered around a technology called Verifiable Delay Functions (VDFs).\n\n  Acting as a source of computer-generated randomness that is unpredictable and unbias-able, VDFs are envisioned for use in a highly-anticipated \u201Cproof-of-stake\u201D(PoS) system called Serenity which the ethereum network will migrate to in the next few years.\n  \n  What\u2019s more, the ability to generate secure randomized numbers \u2013 if implemented in Serenity \u2013 would be a feature that can be leveraged by all decentralized applications (dapps) on the platform once integrated into the ethereum codebase.\n<br />\n    <br />  \n    Speaking to current viability studies on VDF technology, Ethereum Foundation researcher Justin Drake told CoinDesk:\n    \n    \u201CWe\u2019re basically doing all this groundwork to make an informed go, no-go decision on the bigger project. The bigger project is 15 million dollars on that order of magnitude. So we want to make sure that if we do go ahead it\u2019s going to be successful.\u201D<sup>2</sup>\n  </p> \n  <br />\n  <img src="dist/img/bitcoin.jpg" class="zoom"   /><br />\n  <p class="cite">Photo: <a href="https://digiconomist.net/bitcoin-energy-consumption">https://digiconomist.net/bitcoin-energy-consumption</a></p> ';
  var blogcite1790 = '\n  <p class="cite">1. (background)<a target="_blank" href="https://www.coindesk.com/ethereum-foundation-weighs-15-million-bid-to-build-randomness-tech">\n  https://www.coindesk.com/ethereum-foundation-weighs-15-million-bid-to-build-randomness-tech</a></p>  \n\n  <p class="cite">2. <a target="_blank" href="https://www.coindesk.com/information/ethereum-mining-works">\n  https://www.coindesk.com/information/ethereum-mining-works</a></p>  \n  ';

  var blogpost1789 = '<p class="firstparagraph">Oracle the Great. Oracle the Fast. Oracle the Secure Database stands high among all Tech Giants. After all, aren\'t 99 out of a hundred SAP setups on Oracle DBs? ...with maybe an IBM DB2 on a blue moon. The Cloud Greats like Amazon, for instance, run their own servers using Oracle hardware--even their Aurora DB is a rendition of Oracle\'s legacy MySQL ...  \n  </p><p>Such power <i>requires</i> trust in order to thrive. Yet it looks like Oracle\'s hyper-competitive <i>and possibly suspect</i> collecting habit of personal and marketing data makes for a real, even existential, conflict of interest vis-&agrave;-vis customers, and customers of customers:  </p>\n  <p class="quote">Facing tough questions about its practices over the past year, Oracle\u2019s advertising software division, known as Data Cloud, has implemented previously unreported dismissals. While Data Cloud has always been a small part of Oracle\u2019s overall sales, Hurd, co-founder Larry Ellison, and other executives repeatedly cited it over the years as a bright spot in their otherwise humdrum business. That appears to be over. Investment bank Stifel Nicolaus & Co. estimates that Data Cloud delivered only about $500 million of Oracle\u2019s $40 billion in sales last year. \u201CWhat happened over the past couple years is, the nebulous concerns people may have had about what companies were doing with personal data all of a sudden became very real,\u201D says Blair Hanley Frank, an analyst at ISG, a technology research and advisory firm. \u201CThe risk to Oracle in all of this is what seemed like a somewhat ignorable value-add business a few years ago could all of a sudden become a big scary bugbear.\u201D\n  </p>  ';
  var blogcite1789 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming">\n  https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming</a></p>  \n \n  ';
  var blogpost1788 = '<p class="firstparagraph">Oracle\'s lofty role of providing the globe\'s finest and fastest databases, also means a commitment--to some degree--of respect for privacy data. This power does require trust in order to survive: And, it looks like Oracle\'s hyper-competitive <i>and possibly suspect</i> (or negligent at best) habit equates <i>and in turn helps monetize</i> the ties and boundaries between personal data and marketing data ...  </p>\n  <p class="quote">   \n    If Company X wants to, it can ask Oracle to find people looking at images of its SUV, add the information to its consumer profiles, and then upload the data to Facebook, where the carmaker can target those people with ads for the same model.\n  \n    <br />\n    That last part has gotten tougher in the past year. In March, after the Cambridge Analytica scandal revealed just how casually Facebook Inc. had shared user data with other companies for years, the social network\u2019s clampdown on its own systems became a serious problem for Oracle ...<sup>1</sup>\n  </p> \n  <br />\n  <img src="dist/img/oracle.jpg" class="zoom" width="340px" /> ';
  var blogcite1788 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming">\n  https://www.bloomberg.com/news/articles/2019-02-06/oracle-didn-t-see-the-data-reckoning-coming</a></p>  \n \n  ';
  var blogpost1786 = '<p class="firstparagraph">Hecdraclitus\' iconic maxim, "that no man has stepped into the same river twice, for it\'s not the same river <i> and he\'s not the same man.</i>" This phrasing underscores that Earth is a living, evolving organic Ecosystem, just like man/woman-kind makes for an evolving being, too. How much moreso, given our symbiosis with Earth. So, the future is double blind--making Life all the more interesting!</p>\n  <p class="quote">\n\n  Magnetic north has never sat still. In the last hundred years or so, the direction in which our compasses steadfastly point has lumbered ever northward, driven by Earth\'s churning liquid outer core some 1,800 miles beneath the surface. Yet in recent years, scientists noticed something unusual: Magnetic north\'s routine plod has shifted into high gear, sending it galloping across the Northern Hemisphere\u2014and no one can entirely explain why.\n  <br /><br />  \n  The changes have been so large that scientists began working on an emergency update for the World Magnetic Model, the mathematical system that lays the foundations for navigation, from cell phones and ships to commercial airlines. But then the U.S. government shut down, placing the model\'s official release on hold, as Nature News first reported earlier this year.<sup>1</sup>\n  </p>  ';
  var blogcite1786 = '\n  <p class="cite">1. <a target="_blank" href="https://www.nationalgeographic.com/science/2019/02/magnetic-north-update-navigation-maps">\n  https://www.nationalgeographic.com/science/2019/02/magnetic-north-update-navigation-maps</a></p>  \n \n  ';
  var blogpost1785 = '<p class="firstparagraph">Memorization is a cultural topic and, contrary to many opinions, technology can\'t be directly blamed for waning interest. I helped judge a Speech and Debate Tournement last month, and there are no shortage of texting high-schoolers that <i>also happen to memorize long passsages of historical and political works</i>. Yet, this author makes some points about how far society has drifted ...</p>\n  <p class="quote">Before every smidgen of knowledge was a mere Google search away, it was customary for students to memorize great works, from poems to famous political speeches to religious passages. In antiquity, "there were elaborate mnemotechnic ways of memorizing speeches," explained Katharina Volk, the director of undergraduate Classics studies at Columbia University, citing the method of Ioci and Ars Memorativa.  \n  <br /><br /> \n   It was also customary to memorize far more prosaic works: In the U.S. and U.K. in the 19th century, "memorization was the default learning technique across the whole curriculum," said Catherine Robson, the author of Heart Beats: Everyday Life and the Memorized Poem. "To learn your lesson was to learn the passage in the textbook about the geography of Iowa. When it was your turn to be examined by the teacher, in the U.S. system you would go up to the recitation bench and you would recite that paragraph."\n \n  <sup>1</sup>\n  </p>\n  <p>So, is the declining practice of memorization a function of culture or technology, or rather merely a cultural aberration that might revive, and catch on like the next big fad?</p>';

  var blogcite1785 = '\n  <p class="cite">1. <a target="_blank" href="https://theweek.com/articles/820197/lost-art-memorization">\n  https://theweek.com/articles/820197/lost-art-memorization</a></p>  \n \n  ';
  var blogpost1784 = '<p class="firstparagraph"> </p>\n  <p class="quote">Gates\' prediction: "Automated price comparison services will be developed, allowing people to see prices across multiple websites, making it effortless to find the cheapest product for all industries."\n  <br /><br /> \n  Gates\' prediction: "\'Personal companions\' will be developed. They will connect and sync all your devices in a smart way, whether they are at home or in the office, and allow them to exchange data. The device will check your email or notifications, and present the information that you need. When you go to the store, you can tell it what recipes you want to prepare, and it will generate a list of ingredients that you need to pick up. It will inform all the devices that you use of your purchases and schedule, allowing them to automatically adjust to what you\'re doing."\n \n  <sup>1</sup>\n  </p>\n  <p>The author of future technologies does offer a certain vantage point over the horizon ...</p>';

  var blogcite1784 = '\n  <p class="cite">1. <a target="_blank" href="https://www.entrepreneur.com/slideshow/327229">https://www.entrepreneur.com/slideshow/327229</a></p>  \n \n  ';

  var blogpost178 = '<p class="firstparagraph">Photography\'s trajectory spanning three centuries makes for a common thread of experience: <i>The Art of the Image Capture</i> lives above the mere tools for the job--whether a flash-bulb, or dark-room, or yes, an experience with the likes of \'Tappy\' the Extraordinary Phone Bot!</p>  \n  <p class="quote">\n  It takes a lot of time and processing power to train an algorithm like this, but after the data centers have done their thing, it can be run on low-powered mobile devices without much trouble. The heavy-lifting work has already been done, so once your photos are uploaded to the cloud, Google can use its model to analyze and label the whole library. About a year after Google Photos was launched, Apple announced a photo search feature that was similarly trained on a neural network, but as part of the company\u2019s commitment to privacy the actual categorization is performed on each device\u2019s processor separately without sending the data. This usually takes a day or two and happens in the background following setup.<sup> 1</sup>\n  \'</p>  ';
  var blogcite178 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theverge.com/2019/1/31/18203363/ai-artificial-intelligence-photography-google-photos-apple-huawei">\n  https://www.theverge.com/2019/1/31/18203363/ai-artificial-intelligence-photography-google-photos-apple-huawei</a></p>  \n \n  ';

  var blogpost177 = '<p class="firstparagraph">URL dramas are never short of controversy--this, making the theme of my <a href="#09-04-18">Sept. 4th post </a>exploring the unfathomable task. There is but one likely outcome: a bifurcated internet: Imagine futre hang-ups resembling inconsistencies and incompatible experiences, <i>like, say ... the seemingly Immortal and Persistently Awkward Internet Explorer 11</i>.</p>  \n  <p class="quote">   \n  In September, members of Google\'s Chrome security team put forth a radical proposal: Kill off URLs as we know them. The researchers aren\'t actually advocating a change to the web\'s underlying infrastructure. They do, though, want to rework how browsers convey what website you\'re looking at, so that you don\'t have to contend with increasingly long and unintelligible URLs\u2014and the fraud that has sprung up around them. In a talk at the Bay Area Enigma security conference on Tuesday, Chrome usable security lead Emily Stark is wading into the controversy, detailing Google\'s first steps toward more robust website identity.<sup>1</sup>\n  </p><p>And yet, as my September post wondered: Since there <i>are</i> needs, as much as there was a need for asphalt roads, directly following the <i>vulkanizing</i> new opportunities for rubber tires. The inevitable Univorm Resource Locator revolution does loom, but <i>is Now</i> the timing right for the times?<sup> 1</sup></p>';
  var blogcite177 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/google-chrome-kill-url-first-steps">\n  https://www.wired.com/story/google-chrome-kill-url-first-steps</a></p>  \n \n  ';

  var blogpost176 = '<p class="firstparagraph"><i>Tappy</i> may not look like a kind of high-stakes value-item, compared with a Hollywood story like "Chappie" with Hugh Jackman. A story featuring  Factions fighting over control of one artistic, talented droid-bot. Yet, with equally high drama, it sounds like the stakes got raised to international proportions, for... for a phenomenal T-Mobile phone-tester bot... \n  </p>\n  <p class="quote">A grand jury in Seattle has charged Huawei with conspiracy to steal trade secrets, attempted theft of trade secrets, seven counts of wire fraud and one count of obstruction of justice for the company\u2019s alleged attempts to move potential witnesses back to China. The indictments grew out of a civil suit dating all the way back to 2014 in which T-Mobile sued Huawei for stealing trade secrets related to a robotic phone-testing device known as \u201CTappy.\u201D <sup>1</sup></p>\n <p>It looks like high justice will be served for "Tappy" the <i>phenomenal</i> phone-tester bot... Talk about dramatic escalation!<p>\n  </p>  ';
  var blogcite176 = '\n  <p class="cite">1. <a target="_blank" href="https://techcrunch.com/2019/01/28/huawei-us-meng-wanzhou-doj">\n  https://techcrunch.com/2019/01/28/huawei-us-meng-wanzhou-doj</a></p>  \n \n  ';
  var blogpost175 = '<p class="firstparagraph">TechCrunch Disrupt! 2018 hailed an A.I. startup named Kairos<sup> 0</sup> that addressed this same dilemma: How do you accurately report results when faced with disproportionate sampling due to  variance differences between stratification layers? Can you balance one group with one-hundred fold more data-points? And, equally polarized is the inferential freedoms needed to report statistically significant results with small-sample algorithms.</p> \n  </p>\n  <p class="quote">Amazon\'s Rekognition software incorrectly identified women as men 19 percent of the time, according to the study. In addition, it incorrectly identified darker-skinned women as men 31 percent of the time, it says. Software from Microsoft, by comparison, identified darker-skinned women as men 1.5 percent of the time.\n<br /><br />\nMatt Wood, general manager of artificial intelligence at Amazon Web Services, said that the study\'s test results are based on facial analysis, not facial recognition. Analysis, he said, can find faces in videos or images and assign generic attributes, such as the wearing of glasses. Recognition, he said, matches an individual\'s face to images in videos and photographs. The Rekognition technology includes both of these functionalities. <sup>1</sup>\n  </p> \n  <p>\n  <p>So, software considerations can be equally important to plain-old hardware limitations. So in all fairness, must technology\'s capabilities keep pace with politically-correct results? As they say, Why make it a federal case? \n  </p>\n  ';
  var blogcite175 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnet.com/news/amazons-facial-tech-shows-gender-racial-bias-mit-study-says/">\n  https://www.cnet.com/news/amazons-facial-tech-shows-gender-racial-bias-mit-study-says/</a></p>  \n\n  <p class="cite">0. <a target="_blank" href="https://www.kairos.com">\n  https://www.kairos.com</a></p>  \n \n  ';
  var blogpost174 = '<p class="firstparagraph">History does its own stunts. Internet History all the more, and the cast and crew could not have been better picked: Here is an  \nArchival Bests: <i>July 2016</i>\n  </p>\n  <p class="quote">The internet is so vast and formless that it\u2019s hard to imagine it being invented. It\u2019s easy to picture Thomas Edison inventing the lightbulb, because a lightbulb is easy to visualize. You can hold it in your hand and examine it from every angle.\n<br /><br />\nThe internet is the opposite. It\u2019s everywhere, but we only see it in glimpses. The internet is like the holy ghost: it makes itself knowable to us by taking possession of the pixels on our screens to manifest sites and apps and email, but its essence is always elsewhere.\n<br /><br />\nThis feature of the internet makes it seem extremely complex. Surely something so ubiquitous yet invisible must require deep technical sophistication to understand. But it doesn\u2019t. The internet is fundamentally simple. And that simplicity is the key to its success.<sup>1</sup>\n  </p>  ';
  var blogcite174 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theguardian.com/technology/2016/jul/15/how-the-internet-was-invented-1976-arpa-kahn-cerf">\n  https://www.theguardian.com/technology/2016/jul/15/how-the-internet-was-invented-1976-arpa-kahn-cerf</a></p>  \n  \n  ';

  var blogpost173 = '<p class="firstparagraph"> My new Samsung 40" Best Buy Special has shined yet  has also had trying moments. An every-once-in-a-while frozen desktop screen -- <i>perma-frozen until a couple hard resets.</i> In my opinion, nothing\'s out of the ordinary--they\'re just finicky, just like the 90\'s computers, it\'s called big plans with small hardware platforms--mole hills become mountains. Service in-fighting for precious memory resources! The hard thinking and the hardest problems, starting with ...I\'m frozen, how do I turn on and off?. \n  </p>\n  <p class="quote">I tried the obvious things. I turned off the TV and turned it back on. Same problem. Unplugged, replugged. Happened again. Reset the cable box just to try it. Again. Made the sign of the cross. Checked for software updates for the television. Threw my phone. Screamed into the abyss. But. It. Just. Kept. Happening.\n\n  Finally, I turned to the consumer micro-solidarity available in the support forums. Based on the outraged responses of other Samsung TV owners, the issue began sometime in September. No one knows how to fix it. And because of a deal that Samsung struck with app makers, you can\u2019t delete the app from your own TV.<sup>1</sup>\n  </p>  ';
  var blogcite173 = '\n  <p class="cite">1. <a target="_blank" href="https://www.theatlantic.com/technology/archive/2019/01/smart-tvs-are-dumb/581059/">\n  https://www.theatlantic.com/technology/archive/2019/01/smart-tvs-are-dumb/581059/</a></p>  \n  \n  ';

  var blogpost172 = '<p class="firstparagraph">Yet another reason to moderate on that Eco-Expensive red meat ...  \n  </p>\n  <p class="quote"> We now have so many interconnected food-related crises \u2014 climate change, pollution, and food waste, not to mention malnutrition and obesity \u2014 that it will be impossible to feed the 10 billion people expected by 2050 unless we make dramatic changes to our diets and farming practices, the researchers argue.<br /><br />\n\n  What\u2019s needed, according to the peer-reviewed report, titled \u201CFood in the Anthropocene: The EAT-Lancet Commission on healthy diets from sustainable food systems,\u201D is a new philosophy for how to eat on planet Earth. Though there are huge variations around the world in what and how much we consume, we are all in this existential crisis together.<sup>1</sup>\n  </p>  ';
  var blogcite172 = '\n  <p class="cite">1. <a target="_blank" href="https://www.vox.com/2019/1/23/18185446/climate-change-planet-based-diet-lancet-eat-commission">\n  https://www.vox.com/2019/1/23/18185446/climate-change-planet-based-diet-lancet-eat-commission</a></p>  \n  \n  ';
  var blogpost171 = '<p class="quote">Popular Mechanics reports:\n  </p>\n  <p class="quote"> The thing that\u2019s counterintuitive about the stainless steel is, it\u2019s obviously cheap, it\u2019s obviously fast\u2014but it\u2019s not obviously the lightest. But it is actually the lightest. If you look at the properties of a high-quality stainless steel, the thing that isn\u2019t obvious is that at cryogenic temperatures, the strength is boosted by 50 percent.<sup>1</sup> \n  </p>  ';
  var blogcite171 = '\n  <p class="cite">1. <a target="_blank" href="https://www.popularmechanics.com/space/rockets/a25953663/elon-musk-spacex-bfr-stainless-steel/">\n  https://www.popularmechanics.com/space/rockets/a25953663/elon-musk-spacex-bfr-stainless-steel/</a></p>  \n  \n  ';
  var blogpost1705 = '<p class="firstparagraph">Copy Cat Accusations from the few mean a slower, more expensive, ad-driven internet experience! \n  </p>\n  <p class="quote">Simply put, the Directive on Copyright places more responsibility on websites such as YouTube, Facebook and Twitter to make sure that copyrighted materially isn\u2019t being illegaly shared on their platforms. Until now, the onus has mostly been on the copyright holders \u2013 usually the companies that produce audio, video or written content \u2013 to enforce copyright protection but under the new law this responsibility will shift onto the major platforms themselves.\n<br /><br />\n  At the heart of the Directive on Copyright are two divisive articles \u2013 Article 11 and Article 13 \u2013 that have been dubbed the \u201Clink tax\u201D and \u201Cmeme ban\u201D articles respectively. Critics of the Directive on Copyright argue that these articles mean that platforms will have to pay a fee to share a link to a news article and have to start filtering and removing memes.<sup>1</sup>  \n  </p>  \n  <p>The effort involved in roping in internet creativity is ...<i> like herding cats?</i>  </p>';
  var blogcite1705 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.co.uk/article/what-is-article-13-article-11-european-directive-on-copyright-explained-meme-ban">  https://www.wired.co.uk/article/what-is-article-13-article-11-european-directive-on-copyright-explained-meme-ban</a></p>  \n  \n  ';

  var blogpost17005 = '<p class="firstparagraph">\n  At the end of the day, every secret lair depends on the software and hardware stewards of the world: Thank goodness for this special class of craftsmen -- <i>defacto</i> alotted the role of connecting every part of the world ...</p>\n  <p class="quote"> \n  A frightened Rodriguez first met Guzman in 2008, at a meeting in the mountains where the Sinaloa Cartel leader had been hiding from authorities after his laundry-cart escape from a Mexican prison years earlier. Rodriguez described being taken to a clandestine airstrip to be flown to the meeting, and says he was met on the ground by "armed military." Rodriguez\'s work initially involved creating an office-like phone extension system for Sinaloa Cartel associates that would allow their conversations to be encrypted, or unable to be intercepted by authorities. Guzman, who did not enjoy working on computers, was pleased with the ability to have protected phone conversations.  <sup>1</sup>  \n  </p>  ';
  var blogcite17005 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnn.com/2019/01/09/americas/el-chapo-it-technician-rodriguez/index.html">https://www.cnn.com/2019/01/09/americas/el-chapo-it-technician-rodriguez/index.html\n   </a></p>  \n  \n  ';

  var blogpost170 = '<p class="quote"> \n  </p>\n  <p class="quote"> The gene therapy would instead give their bodies a working gene for them to make their own factor VIII. But transferring a gene into a person is no easy feat. Genes are long strings of DNA that don\'t readily get inside cells. So therapies typically rely on viruses, which squirt DNA into cells\' nuclei as a way of life. In this case, a virus, modified so that it doesn\'t cause disease, and with the healthy human factor VIII gene added to its DNA, is injected into the body. It then enters the body\'s cells to deposit its cargo, leaving it as a separate piece of DNA in the nucleus next to the host cell\'s genome.<sup>1</sup>  \n  </p>  ';
  var blogcite170 = '\n  <p class="cite">1. <a target="_blank" href="http://digg.com/2019/gene-therapies-immunity">http://digg.com/2019/gene-therapies-immunity\n   </a></p>  \n  \n  ';
  var blogpost169 = '<p class="quote"> \n  </p>\n  <p class="quote"> In his blog, Hunt says a large file of 12,000 separate files and 87GB of data had been uploaded to MEGA, a popular cloud service. The data was then posted to a popular hacking forum and appears to be an amalgamation of over 2,000 databases. The troubling thing is the databases contain \u201Cdehashed\u201D passwords, which means the methods used to scramble those passwords into unreadable strings has been cracked, fully exposing the passwords.\n<br />\n  So what does this mean for the average person? According to Hunt, it means compromised email and password combos are more vulnerable for a practice called credential stuffing. Basically, credential stuffing is when breached username or email/password combos are used to hack into other user accounts. This could impact anyone who has used the same username and password combo across multiple sites.<sup>1</sup>\n  </p>  ';
  var blogcite169 = '\n  <p class="cite">1. <a target="_blank" href="https://gizmodo.com/mother-of-all-breaches-exposes-773-million-emails-21-m-1831833456">https://gizmodo.com/mother-of-all-breaches-exposes-773-million-emails-21-m-1831833456\n </a></p>  \n  \n  ';

  var blogpost168 = '<p class="quote"> \n  </p>\n  <p class="quote"> On October 19, 2017, astronomers at the University of Hawaii spotted a strange object travelling through our solar system, which they later described as \u201Ca red and extremely elongated asteroid.\u201D It was the first interstellar object to be detected within our solar system; the scientists named it \u2018Oumuamua, the Hawaiian word for a scout or messenger. The following October, Avi Loeb, the chair of Harvard\u2019s astronomy department, co-wrote a paper (with a Harvard postdoctoral fellow, Shmuel Bialy) that examined \u2018Oumuamua\u2019s \u201Cpeculiar acceleration\u201D and suggested that the object \u201Cmay be a fully operational probe sent intentionally to Earth\u2019s vicinity by an alien civilization.\u201D Loeb has long been interested in the search for extraterrestrial life, and he recently made further headlines by suggesting that we might communicate with the civilization that sent the probe. \u201CIf these beings are peaceful, we could learn a lot from them,\u201D he told Der Spiegel.<sup>1</sup>\n  </p>  ';
  var blogcite168 = '\n  <p class="cite">1. <a target="_blank" href="https://www.newyorker.com/news/the-new-yorker-interview/have-aliens-found-us-a-harvard-astronomer-on-the-mysterious-interstellar-object-oumuamua"> https://www.newyorker.com/news/the-new-yorker-interview/have-aliens-found-us-a-harvard-astronomer-on-the-mysterious-interstellar-object-oumuamua\n </a></p>    \n <p class="cite">2<a target="_blank" href="https://blogs.scientificamerican.com/observations/6-strange-facts-about-the-interstellar-visitor-oumuamua/"> https://blogs.scientificamerican.com/observations/6-strange-facts-about-the-interstellar-visitor-oumuamua/\n </a></p>  \n \n  ';
  var blogpost167 = '<p class="quote">\n  </p>\n  <p class="quote"> Examine how and when you set standards. Perfectionistic leaders often don\u2019t communicate their \u201Chigh standards\u201D until others miss their expectations. When you observe a gap between what you get and what you wanted, pause before reacting. Ask yourself if the person who fell short understood what you expected. Then, ask yourself if what you wanted was realistic given the circumstances and abilities of your team. Being honest about what you base your expectations on, and clearly conveying them to others in a timely manner, ensures your standards aren\u2019t just high, but realistic and fair.<sup>1</sup>\n  </p>  ';

  var blogcite167 = '\n  <p class="cite">1. <a target="_blank" href="https://hbr.org/2019/01/are-your-high-expectations-hurting-your-team">https://hbr.org/2019/01/are-your-high-expectations-hurting-your-team\n </a></p>  \n  \n  ';
  var blogpost166 = '<p class="quote">\n  </p>\n  <p class="quote">Americans love convenient recycling, but convenient recycling increasingly does not love us. Waste experts call the system of dumping all the recyclables into one bin \u201Csingle-stream recycling.\u201D It\u2019s popular. But the cost-benefit math of it has changed. The benefit \u2014 more participation and thus more material put forward for recycling \u2014 may have been overtaken by the cost \u2014 unrecyclable recyclables. On average, about 25 percent of the stuff we try to recycle is too contaminated to go anywhere but the landfill, according to the National Waste and Recycling Association, a trade group. Just a decade ago, the contamination rate was closer to 7 percent, according to the association.<sup>1</sup>  \n  </p>  ';

  var blogcite166 = '\n  <p class="cite">1. <a target="_blank" href="https://fivethirtyeight.com/features/the-era-of-easy-recycling-may-be-coming-to-an-end/">https://fivethirtyeight.com/features/the-era-of-easy-recycling-may-be-coming-to-an-end/\n</a></p>  \n  \n  ';
  var blogpost164 = '<p class="quote">  \n  </p>\n  <p class="quote"> \u201CTo continue delivering for our customers and to succeed in developing interplanetary spacecraft and a global space-based internet, SpaceX must become a leaner company,\u201D the Hawthorne-based company said in a statement. \u201CEither of these developments, even when attempted separately, have bankrupted other organizations. This means we must part ways with some talented and hardworking members of our team.\u201D\n  </p><sup>1</sup>    ';

  var blogcite164 = '\n  <p class="cite">1. <a target="_blank" href="https://www.latimes.com/business/la-fi-spacex-layoffs-20190111-story.html">\n  https://www.latimes.com/business/la-fi-spacex-layoffs-20190111-story.html</a></p>  \n  \n  ';
  var blogpost163 = ' <p class="quote"> Smartphones are as central to the economy as cars and credit cards, and a lot of people have little meaningful opportunity to quit. \n    And the \u201Coffline\u201D world is now ruled by what happens online. Escape is impossible. Quips on Twitter are indirectly programming cable news \n    <sup>1</sup> ...<br /><br />--NYT Op-Ed\n    </p>\n  <p class="firstparagraph">Technology is too often the scapegoat for problems with ... <i>(our)</i> habits. Whether its <i>screen</i> time, selfie-addiction or mental dependance, it\'s never us as a society. I argue interactive tech saved a world of passive Movie & TV watching, passive reading ... leaving only the <i>professionals</i> to film, record music, publish and actively pursue leisure. Now, everybody with a telephone <i>can do</i> anything.</p>\n  <p>Technology has expanded average knowledge breadth <i>and</i> depth far more than it has undercut our potential. 25 years ago, specialized knowedge required a library. Besides the perseverence to get there. </p><p>If 18th century Berlin invented compulsory secondary schooling, thereby raising literacy from 10% to 70$ in one generation; Similarly, if 19th century Paris invented compulsory secondary schooling and revolutionalized learning as a national force, and John Hopkins the first <i>modern</i> university template for mass Higher-Ed; Then, by de Facto means, Silicon Valley has provided meta-knowledge that comprises a far more important knowledge: Tying unlimited knowledge to our most <i>social</i> device: el telefono. Thus, between the Wikipadia tile and the Twitter tile, one generation catapults over all previous generations--at least in terms of YouTube know-how and social awareness. Armies of bureaucrats and educators could not have achieved one-tenth! Thank you, California, for auguring such great potential for our age. </p><p>One NYT op-ed writer encapsulates the less optimistic view of online life--a life viewed as \'captive to technology\'.\n  </p>\n  <p class="quote">  Smartphones are as central to the economy as cars and credit cards, and a lot of people have little meaningful opportunity to quit. \n  And the \u201Coffline\u201D world is now ruled by what happens online. Escape is impossible. Quips on Twitter are indirectly programming cable news ...\n<sup>1</sup>\n  </p>\n  ';

  var blogcite163 = ' \n  <p class="cite">1. <a target="_blank" href="https://www.nytimes.com/2019/01/09/opinion/meditation-internet.html">\n  https://www.nytimes.com/2019/01/09/opinion/meditation-internet.html</a></p>  \n  \n  ';
  var blogpost162 = ' \n  <p class="firstparagraph">Software, Hardware, and by logical conclusion ...<i> Kitchenware!</i>\n  </p>\n  <p class="quote">The kitchen of the future is here, and it\u2019s one that no one asked for. CES 2019, this year\u2019s iteration of the annual Consumer Electronics Show, just opened in Las Vegas, and as per usual, the gadgets unveiled so far reveal a unique perspective on the everyday lifestyle problems that consumers apparently want solved. The problems? Too much privacy in kitchens! And not enough things that can be solved by app!  <br />\n  <br />\n  As Rose Elveth wrote for Eater in 2015, \u201CEngineers... operate on the premise that people don\u2019t know what they need until it\u2019s built for them... the result is an array of potential futures that are strangely both unaware of the culture from which they spring, and at the same time constrained by it. The kitchen of the future is a one-size-fits all, ahistorical, acultural room, one that serves no one well.\u201D \n<sup>1</sup>\n  </p>\n  ';

  var blogcite162 = '\n  <p class="cite">1. <a target="_blank" href="https://www.eater.com/2019/1/8/18173843/ces-2019-kitchen-tech-ge-samsung-whirlpool">\n  https://www.eater.com/2019/1/8/18173843/ces-2019-kitchen-tech-ge-samsung-whirlpool</a></p>  \n  \n  ';

  var blogpost1600 = ' \n  <p class="firstparagraph">CES 2019 offered the range of IoT wizardry that even Philosophy has been virtualized into LED-embedded wood! \n  </p>\n  <p class="quote">What does it mean that one of my favorite demos at CES 2019 \u2014 the world\u2019s foremost technology show \u2014 was a block of wood? Maybe that I\u2019ve been spending too much time in my garage with a table saw. Maybe that we\u2019re collectively suffering from a bad case of screen fatigue. Maybe both. But if the crowd surrounding Mui is any indication, I\u2019m not the only one smitten with the Kyoto-based company\u2019s head-smackingly simple approach to technology.\n<sup>1</sup>\n  </p>\n  ';

  var blogcite1600 = '\n  <p class="cite">1. <a target="_blank" href="https://www.digitaltrends.com/home/mui-wood-smart-display-ces-2019/       ">https://www.digitaltrends.com/home/mui-wood-smart-display-ces-2019/</a></p>  \n  \n  ';

  var blogpost161 = ' \n  <p class="firstparagraph">Relentless criticisms hurled at the Tech Greats like Facebook can\'t really explain a lot of the connivery in the 21st century world. So, the label of a Silicon-Valley culture that espouses teamwork can\'t be blamed: It\'s the nature of Software Engineers to develop gargantuanly complex programmed products, that dissent and critical thinking have much less place than most jobs. This article is laughable, but may bear a hint of truth ... \n  </p>\n  <p class="quote">The episode speaks to an atmosphere at Facebook in which employees feel pressure to place the company above all else in their lives, fall in line with their manager\u2019s orders and force cordiality with their colleagues so they can advance. Several former employees likened the culture to a \u201Ccult.\u201D\n<br /><br />\nThis culture has contributed to the company\u2019s well-publicized wave of scandals over the last two years, such as governments spreading misinformation to try to influence elections and the misuse of private user data, according to many people who worked there during this period. They say Facebook might have have caught some of these problems sooner if employees were encouraged to deliver honest feedback.  \n<sup>1</sup>\n  </p>\n  ';

  var blogcite161 = '\n  <p class="cite">1. <a target="_blank" href="https://www.cnbc.com/2019/01/08/facebook-culture-cult-performance-review-process-blamed.html">https://www.cnbc.com/2019/01/08/facebook-culture-cult-performance-review-process-blamed.html</a></p>   ';
  var blogpost16001 = '\n  \n  <img src="dist/img/thule0.jpg" class="zoom" />\n  <p class="firstparagraph">Ultima Thule ...</p>\n  <p class="quote">\n  On New Years\' Eve, following a 13-year trip to deep space, NASA\'s New Horizons spacecraft made a close pass of Ultima Thule, a small, icy world drifting 4 billion miles from the sun in the unexplored "third zone" of our solar system. The probe zipped by at upwards of 31,000 miles per hour, about the same speed it was going when it passed Pluto in 2015. But Pluto is 100 times the size of Ultima, which measures just 20 miles long. So New Horizons had days to capture photographs and spectrographic readings of the former planet, but for this smaller cosmic quarry, it only had a matter of minutes. New Horizons\' visit was brief, but momentous: The mission\'s success makes Ultima Thule by far the most distant object ever to be imaged up close.<sup>1</sup></p>\n\n <img src="dist/img/thule.jpg" class="zoom" />\n  ';

  var blogcite16001 = '\n  <p class="cite">1. <a target="_blank" href="https://www.wired.com/story/new-horizons-first-photos-ultima-thule">https://www.wired.com/story/new-horizons-first-photos-ultima-thule</a></p>   \n  \n  ';

  var blogpost160 = '<p class="quote">Astronomers have revealed details of mysterious signals emanating from a distant galaxy, picked up by a telescope in Canada. \nThe precise nature and origin of the blasts of radio waves is unknown. \nAmong the 13 fast radio bursts, known as FRBs, was a very unusual repeating signal, coming from the same source about 1.5 billion light years away. \nSuch an event has only been reported once before, by a different telescope. \n"Knowing that there is another suggests that there could be more out there," said Ingrid Stairs, an astrophysicist from the University of British Columbia (UBC).\n \n<sup>1</sup></p>\n  <p class="firstparagraph">\n  Morse code across the Galaxies - what a concept! \n  </p>\n  <img src="dist/img/gettyimages-831502910.jpg" width="350" class="zoom" /><hr width="200"/>\n\n  <span style="float:right;">GETTY IMAGES</span>\n ';

  var blogcite160 = '\n  <p class="cite">1. <a target="_blank" href="https://www.bbc.com/news/science-environment-46811618">https://www.bbc.com/news/science-environment-46811618</a></p>  \n  ';

  var url = [{
    id: '1790',
    did: '02-08-19',
    date: 'February 8, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Musing Blockchain',
    title: 'Sustainable Blockchain Tech, Part I:<br />The Cost of Proof-of-Work Models',
    post: blogpost1790,
    blogcite: blogcite1790
  }, {
    id: '1789',
    did: '02-07-19',
    date: 'February 7, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Oracle the Great, Part II<br />Is Oracle also Good?',
    post: blogpost1789,
    blogcite: blogcite1789
  }, {
    id: '1788',
    did: '02-06-19',
    date: 'February 6, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Oracle the Great, Part I<br />Is Oracle also Trustworthy?',
    post: blogpost1788,
    blogcite: blogcite1788
  }, {
    id: '1786',
    did: '02-04-19',
    date: 'February 4, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Due North: Time to Calibrate the Compass?',
    post: blogpost1786,
    blogcite: blogcite1786
  }, {
    id: '1785',
    did: '02-02-19',
    date: 'February 2-3, 2019<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Four Score and Seven Years Ago ...',
    post: blogpost1785,
    blogcite: blogcite1785
  }, {
    id: '1784',
    did: '02-01-19',
    date: 'February 1, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Four Score and Seven Years From Now ...',
    post: blogpost1784,
    blogcite: blogcite1784
  }, {
    id: '178',
    did: '01-31-19',
    date: 'January 31, 2019',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Seeing Who Says, \'Say Cheese!\'',
    post: blogpost178,
    blogcite: blogcite178
  }, {
    id: '177',
    did: '01-29-19',
    date: 'January 29, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Construction on the Internet Super-Highway',
    post: blogpost177,
    blogcite: blogcite177
  }, {
    id: '176',
    did: '01-28-19',
    date: 'January 28, 2019',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Saving Tappy, the Extraordinary Phone-Tester Bot',
    post: blogpost176,
    blogcite: blogcite176
  }, {
    id: '175',
    did: '01-26-19',
    date: 'January 26-27, 2019',
    author: 'by Thomas Maestas',
    cat3: 'A.I.Now.',
    title: 'Who Dis',
    post: blogpost175,
    blogcite: blogcite175
  }, {
    id: '174',
    did: '01-25-19',
    date: 'January 25, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Internet Phaenomen [Greek]: To Shine; To Appear<br /><small>How the Internet was Invented',
    post: blogpost174,
    blogcite: blogcite174
  }, {
    id: '173',
    did: '01-24-19',
    date: 'January 24, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'What\'s it Take to Dethaw Frozen TV\'s?',
    post: blogpost173,
    blogcite: blogcite173
  }, {
    id: '172',
    did: '01-23-19',
    date: 'January 23, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Food for Thought',
    post: blogpost172,
    blogcite: blogcite172
  }, {
    id: '171',
    did: '01-22-19',
    date: 'January 22, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Material Thinking',
    post: blogpost171,
    blogcite: blogcite171
  }, {
    id: '1705',
    did: '01-21-19',
    date: 'January 21, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'World of OpenSource, part II:<br />The CopyRight Strikes Back',
    post: blogpost1705,
    blogcite: blogcite1705
  }, {
    id: '17005',
    did: '01-19-19',
    date: 'January 19, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Cable Guy',
    post: blogpost17005,
    blogcite: blogcite17005
  }, {
    id: '170',
    did: '01-18-19',
    date: 'January 18, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Genes for a Change',
    post: blogpost170,
    blogcite: blogcite170
  }, {
    id: '169',
    did: '01-17-19',
    date: 'January 17, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'The Virtues of a Monomagous Password',
    post: blogpost169,
    blogcite: blogcite169
  }, {
    id: '168',
    did: '01-16-19',
    date: 'January 16, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'That Funny Visitor\'s Non-Elliptical Orbit',
    post: blogpost168,
    blogcite: blogcite168
  }, {
    id: '167',
    did: '01-15-19',
    date: 'January 15, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Practicing at Imperfection',
    post: blogpost167,
    blogcite: blogcite167
  }, {
    id: '166',
    did: '01-14-19',
    date: 'January 14, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'Minimalism to the Rescue!',
    post: blogpost166,
    blogcite: blogcite166
  }, {
    id: '164',
    did: '01-12-19',
    date: 'January 12-13, 2019<br />Weekend',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'E.U.\'s Overreaching GDPR Rules',
    post: blogpost164,
    blogcite: blogcite164
  }, {
    id: '163',
    did: '01-11-19',
    date: 'January 11, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'It\'s not Fair Scapegoating Tech for *Our* Bad Habits',
    post: blogpost163,
    blogcite: blogcite163
  }, {
    id: '162',
    did: '01-10-19',
    date: 'January 10, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'Over the Edge with Gadgetry: CES 2019',
    post: blogpost162,
    blogcite: blogcite162
  }, {
    id: '1600',
    did: '01-09-19',
    date: 'January 9, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'That\'s One Smart Block of Wood!...or a Raspberri Pi',
    post: blogpost1600,
    blogcite: blogcite1600
  }, {
    id: '161',
    did: '01-08-19',
    date: 'January 8, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'What\'s Wrong with a little Esprit de Corps?',
    post: blogpost161,
    blogcite: blogcite161
  }, {
    id: '16001',
    did: '01-07-19',
    date: 'January 7, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Sociology Tomorrow!',
    title: 'It Takes Two to Dance',
    post: blogpost16001,
    blogcite: blogcite16001
  }, {
    id: '160',
    did: '01-02-19',
    date: 'January 2, 2019',
    author: 'by Thomas Maestas',
    cat3: 'Web Dev Affairs',
    title: 'InterGalactic Code',
    post: blogpost160,
    blogcite: blogcite160
  }];
  var i;
  for (i = 0; i < url.length; i++) {
    var cat = ' \n    <div id="' + url[i].did + '" class="blogDiv"> \n    <hr />  \n    <a target="_blank" href="#top"><button>Top</button></a>  \n    <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n    <h5 id="cat3" class="subdailytech">' + url[i].cat3 + '</h5> \n    <p id="author" class="author">' + url[i].author + '</p>   \n    <h6  id="date" class="chapternumber">' + url[i].date + '</h6>    \n    <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n    <br />\n    <div id="post">' + url[i].post + '\n    </div>\n    <div id="blogcite">' + url[i].blogcite + '\n    </div>';
    document.getElementById("paragraph-jan19").innerHTML += cat;
  }

  for (i = 0; i < url.length; i++) {
    var catMod = '\n  <div id="mod_' + url[i].did + '" class="blogDivMod"> \n  <hr />  \n  <a target="_blank" href="#top-mod"><button>Top</button></a>   \n  <h4 class="title dailytech longtitle">OUR DAILY TECH:</h4>  \n  <h5 id="cat3" class="subdailytech">' + url[i].cat3 + '</h5>  \n  <p id="author" class="author">' + url[i].author + '</p>   \n  <h6  id="date" class="chapternumber">' + url[i].date + '</h6>    \n  <h6  id="title"   class="dailytitle chapternumber">' + url[i].title + '</h6>\n  <br />\n  <div id="post">' + url[i].post + '</div>\n  </div>\n <div id="blogcite">' + url[i].blogcite + '\n </div>';
    document.getElementById("paragraph-jan19-mod").innerHTML += catMod;
  }

  console.log('blogger-jan19');
  //  console.log(angular.toJson(url)); 
};
bloggerJan();

/***/ })
/******/ ]);