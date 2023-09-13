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

/***/ "./src/app/js/sweetalert.js":
/*!**********************************!*\
  !*** ./src/app/js/sweetalert.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   messageError: () => (/* binding */ messageError),\n/* harmony export */   messageInfo: () => (/* binding */ messageInfo),\n/* harmony export */   messageSuccess: () => (/* binding */ messageSuccess)\n/* harmony export */ });\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ \"./node_modules/sweetalert2/dist/sweetalert2.all.js\");\n/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _regeneratorRuntime() { \"use strict\"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = \"function\" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || \"@@iterator\", asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\", toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, \"\"); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, \"_invoke\", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: \"normal\", arg: fn.call(obj, arg) }; } catch (err) { return { type: \"throw\", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { [\"next\", \"throw\", \"return\"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if (\"throw\" !== record.type) { var result = record.arg, value = result.value; return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke(\"next\", value, resolve, reject); }, function (err) { invoke(\"throw\", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke(\"throw\", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, \"_invoke\", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = \"suspendedStart\"; return function (method, arg) { if (\"executing\" === state) throw new Error(\"Generator is already running\"); if (\"completed\" === state) { if (\"throw\" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) { if (\"suspendedStart\" === state) throw state = \"completed\", context.arg; context.dispatchException(context.arg); } else \"return\" === context.method && context.abrupt(\"return\", context.arg); state = \"executing\"; var record = tryCatch(innerFn, self, context); if (\"normal\" === record.type) { if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, \"throw\" === methodName && delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method) || \"return\" !== methodName && (context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a '\" + methodName + \"' method\")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = \"normal\", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: \"root\" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || \"\" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if (\"function\" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + \" is not iterable\"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, \"constructor\", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, \"constructor\", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) { var ctor = \"function\" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, \"toString\", function () { return \"[object Generator]\"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if (\"throw\" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if (\"root\" === entry.tryLoc) return handle(\"end\"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, \"catchLoc\"), hasFinally = hasOwn.call(entry, \"finallyLoc\"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error(\"try statement without catch or finally\"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if (\"throw\" === record.type) throw record.arg; return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, \"catch\": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if (\"throw\" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error(\"illegal catch attempt\"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction messageSuccess(_x) {\n  return _messageSuccess.apply(this, arguments);\n}\nfunction _messageSuccess() {\n  _messageSuccess = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(message) {\n    var action,\n      result,\n      _args = arguments;\n    return _regeneratorRuntime().wrap(function _callee$(_context) {\n      while (1) switch (_context.prev = _context.next) {\n        case 0:\n          action = _args.length > 1 && _args[1] !== undefined ? _args[1] : function () {};\n          _context.prev = 1;\n          _context.next = 4;\n          return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n            title: message,\n            icon: 'success',\n            confirmButtonText: 'Ok'\n          });\n        case 4:\n          result = _context.sent;\n          if (result.isConfirmed) {\n            action();\n          }\n          _context.next = 11;\n          break;\n        case 8:\n          _context.prev = 8;\n          _context.t0 = _context[\"catch\"](1);\n          console.error('Error al mostrar la alerta:', _context.t0);\n        case 11:\n        case \"end\":\n          return _context.stop();\n      }\n    }, _callee, null, [[1, 8]]);\n  }));\n  return _messageSuccess.apply(this, arguments);\n}\nfunction messageError(_x2) {\n  return _messageError.apply(this, arguments);\n}\nfunction _messageError() {\n  _messageError = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(message) {\n    var action,\n      result,\n      _args2 = arguments;\n    return _regeneratorRuntime().wrap(function _callee2$(_context2) {\n      while (1) switch (_context2.prev = _context2.next) {\n        case 0:\n          action = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : function () {};\n          _context2.prev = 1;\n          _context2.next = 4;\n          return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n            title: message,\n            icon: 'error',\n            confirmButtonText: 'Ok'\n          });\n        case 4:\n          result = _context2.sent;\n          if (result.isConfirmed) {\n            action();\n          }\n          _context2.next = 11;\n          break;\n        case 8:\n          _context2.prev = 8;\n          _context2.t0 = _context2[\"catch\"](1);\n          console.error('Error al mostrar la alerta:', _context2.t0);\n        case 11:\n        case \"end\":\n          return _context2.stop();\n      }\n    }, _callee2, null, [[1, 8]]);\n  }));\n  return _messageError.apply(this, arguments);\n}\nfunction messageInfo(_x3) {\n  return _messageInfo.apply(this, arguments);\n}\nfunction _messageInfo() {\n  _messageInfo = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(message) {\n    var action,\n      result,\n      _args3 = arguments;\n    return _regeneratorRuntime().wrap(function _callee3$(_context3) {\n      while (1) switch (_context3.prev = _context3.next) {\n        case 0:\n          action = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : function () {};\n          _context3.prev = 1;\n          _context3.next = 4;\n          return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({\n            title: message,\n            icon: 'info',\n            confirmButtonText: 'Ok'\n          });\n        case 4:\n          result = _context3.sent;\n          if (result.isConfirmed) {\n            action();\n          }\n          _context3.next = 11;\n          break;\n        case 8:\n          _context3.prev = 8;\n          _context3.t0 = _context3[\"catch\"](1);\n          console.error('Error al mostrar la alerta:', _context3.t0);\n        case 11:\n        case \"end\":\n          return _context3.stop();\n      }\n    }, _callee3, null, [[1, 8]]);\n  }));\n  return _messageInfo.apply(this, arguments);\n}\n\n//# sourceURL=webpack://webpack-tutorial/./src/app/js/sweetalert.js?");

/***/ }),

/***/ "./node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************!*\
  !*** ./node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************/
/***/ (function(module) {

eval("/*!\n* sweetalert2 v11.7.27\n* Released under the MIT License.\n*/\n(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n})(this, (function () { 'use strict';\n\n  function _classPrivateFieldGet(receiver, privateMap) {\n    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\");\n    return _classApplyDescriptorGet(receiver, descriptor);\n  }\n  function _classPrivateFieldSet(receiver, privateMap, value) {\n    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\");\n    _classApplyDescriptorSet(receiver, descriptor, value);\n    return value;\n  }\n  function _classExtractFieldDescriptor(receiver, privateMap, action) {\n    if (!privateMap.has(receiver)) {\n      throw new TypeError(\"attempted to \" + action + \" private field on non-instance\");\n    }\n    return privateMap.get(receiver);\n  }\n  function _classApplyDescriptorGet(receiver, descriptor) {\n    if (descriptor.get) {\n      return descriptor.get.call(receiver);\n    }\n    return descriptor.value;\n  }\n  function _classApplyDescriptorSet(receiver, descriptor, value) {\n    if (descriptor.set) {\n      descriptor.set.call(receiver, value);\n    } else {\n      if (!descriptor.writable) {\n        throw new TypeError(\"attempted to set read only private field\");\n      }\n      descriptor.value = value;\n    }\n  }\n  function _checkPrivateRedeclaration(obj, privateCollection) {\n    if (privateCollection.has(obj)) {\n      throw new TypeError(\"Cannot initialize the same private elements twice on an object\");\n    }\n  }\n  function _classPrivateFieldInitSpec(obj, privateMap, value) {\n    _checkPrivateRedeclaration(obj, privateMap);\n    privateMap.set(obj, value);\n  }\n\n  const RESTORE_FOCUS_TIMEOUT = 100;\n\n  /** @type {GlobalState} */\n  const globalState = {};\n  const focusPreviousActiveElement = () => {\n    if (globalState.previousActiveElement instanceof HTMLElement) {\n      globalState.previousActiveElement.focus();\n      globalState.previousActiveElement = null;\n    } else if (document.body) {\n      document.body.focus();\n    }\n  };\n\n  /**\n   * Restore previous active (focused) element\n   *\n   * @param {boolean} returnFocus\n   * @returns {Promise<void>}\n   */\n  const restoreActiveElement = returnFocus => {\n    return new Promise(resolve => {\n      if (!returnFocus) {\n        return resolve();\n      }\n      const x = window.scrollX;\n      const y = window.scrollY;\n      globalState.restoreFocusTimeout = setTimeout(() => {\n        focusPreviousActiveElement();\n        resolve();\n      }, RESTORE_FOCUS_TIMEOUT); // issues/900\n\n      window.scrollTo(x, y);\n    });\n  };\n\n  /**\n   * This module contains `WeakMap`s for each effectively-\"private  property\" that a `Swal` has.\n   * For example, to set the private property \"foo\" of `this` to \"bar\", you can `privateProps.foo.set(this, 'bar')`\n   * This is the approach that Babel will probably take to implement private methods/fields\n   *   https://github.com/tc39/proposal-private-methods\n   *   https://github.com/babel/babel/pull/7555\n   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*\n   *   then we can use that language feature.\n   */\n\n  var privateProps = {\n    innerParams: new WeakMap(),\n    domCache: new WeakMap()\n  };\n\n  const swalPrefix = 'swal2-';\n\n  /**\n   * @typedef\n   * { | 'container'\n   *   | 'shown'\n   *   | 'height-auto'\n   *   | 'iosfix'\n   *   | 'popup'\n   *   | 'modal'\n   *   | 'no-backdrop'\n   *   | 'no-transition'\n   *   | 'toast'\n   *   | 'toast-shown'\n   *   | 'show'\n   *   | 'hide'\n   *   | 'close'\n   *   | 'title'\n   *   | 'html-container'\n   *   | 'actions'\n   *   | 'confirm'\n   *   | 'deny'\n   *   | 'cancel'\n   *   | 'default-outline'\n   *   | 'footer'\n   *   | 'icon'\n   *   | 'icon-content'\n   *   | 'image'\n   *   | 'input'\n   *   | 'file'\n   *   | 'range'\n   *   | 'select'\n   *   | 'radio'\n   *   | 'checkbox'\n   *   | 'label'\n   *   | 'textarea'\n   *   | 'inputerror'\n   *   | 'input-label'\n   *   | 'validation-message'\n   *   | 'progress-steps'\n   *   | 'active-progress-step'\n   *   | 'progress-step'\n   *   | 'progress-step-line'\n   *   | 'loader'\n   *   | 'loading'\n   *   | 'styled'\n   *   | 'top'\n   *   | 'top-start'\n   *   | 'top-end'\n   *   | 'top-left'\n   *   | 'top-right'\n   *   | 'center'\n   *   | 'center-start'\n   *   | 'center-end'\n   *   | 'center-left'\n   *   | 'center-right'\n   *   | 'bottom'\n   *   | 'bottom-start'\n   *   | 'bottom-end'\n   *   | 'bottom-left'\n   *   | 'bottom-right'\n   *   | 'grow-row'\n   *   | 'grow-column'\n   *   | 'grow-fullscreen'\n   *   | 'rtl'\n   *   | 'timer-progress-bar'\n   *   | 'timer-progress-bar-container'\n   *   | 'scrollbar-measure'\n   *   | 'icon-success'\n   *   | 'icon-warning'\n   *   | 'icon-info'\n   *   | 'icon-question'\n   *   | 'icon-error'\n   * } SwalClass\n   * @typedef {Record<SwalClass, string>} SwalClasses\n   */\n\n  /**\n   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon\n   * @typedef {Record<SwalIcon, string>} SwalIcons\n   */\n\n  /** @type {SwalClass[]} */\n  const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];\n  const swalClasses = classNames.reduce((acc, className) => {\n    acc[className] = swalPrefix + className;\n    return acc;\n  }, /** @type {SwalClasses} */{});\n\n  /** @type {SwalIcon[]} */\n  const icons = ['success', 'warning', 'info', 'question', 'error'];\n  const iconTypes = icons.reduce((acc, icon) => {\n    acc[icon] = swalPrefix + icon;\n    return acc;\n  }, /** @type {SwalIcons} */{});\n\n  const consolePrefix = 'SweetAlert2:';\n\n  /**\n   * Capitalize the first letter of a string\n   *\n   * @param {string} str\n   * @returns {string}\n   */\n  const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);\n\n  /**\n   * Standardize console warnings\n   *\n   * @param {string | string[]} message\n   */\n  const warn = message => {\n    console.warn(\"\".concat(consolePrefix, \" \").concat(typeof message === 'object' ? message.join(' ') : message));\n  };\n\n  /**\n   * Standardize console errors\n   *\n   * @param {string} message\n   */\n  const error = message => {\n    console.error(\"\".concat(consolePrefix, \" \").concat(message));\n  };\n\n  /**\n   * Private global state for `warnOnce`\n   *\n   * @type {string[]}\n   * @private\n   */\n  const previousWarnOnceMessages = [];\n\n  /**\n   * Show a console warning, but only if it hasn't already been shown\n   *\n   * @param {string} message\n   */\n  const warnOnce = message => {\n    if (!previousWarnOnceMessages.includes(message)) {\n      previousWarnOnceMessages.push(message);\n      warn(message);\n    }\n  };\n\n  /**\n   * Show a one-time console warning about deprecated params/methods\n   *\n   * @param {string} deprecatedParam\n   * @param {string} useInstead\n   */\n  const warnAboutDeprecation = (deprecatedParam, useInstead) => {\n    warnOnce(\"\\\"\".concat(deprecatedParam, \"\\\" is deprecated and will be removed in the next major release. Please use \\\"\").concat(useInstead, \"\\\" instead.\"));\n  };\n\n  /**\n   * If `arg` is a function, call it (with no arguments or context) and return the result.\n   * Otherwise, just pass the value through\n   *\n   * @param {Function | any} arg\n   * @returns {any}\n   */\n  const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;\n\n  /**\n   * @param {any} arg\n   * @returns {boolean}\n   */\n  const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';\n\n  /**\n   * @param {any} arg\n   * @returns {Promise<any>}\n   */\n  const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);\n\n  /**\n   * @param {any} arg\n   * @returns {boolean}\n   */\n  const isPromise = arg => arg && Promise.resolve(arg) === arg;\n\n  /**\n   * Gets the popup container which contains the backdrop and the popup itself.\n   *\n   * @returns {HTMLElement | null}\n   */\n  const getContainer = () => document.body.querySelector(\".\".concat(swalClasses.container));\n\n  /**\n   * @param {string} selectorString\n   * @returns {HTMLElement | null}\n   */\n  const elementBySelector = selectorString => {\n    const container = getContainer();\n    return container ? container.querySelector(selectorString) : null;\n  };\n\n  /**\n   * @param {string} className\n   * @returns {HTMLElement | null}\n   */\n  const elementByClass = className => {\n    return elementBySelector(\".\".concat(className));\n  };\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getPopup = () => elementByClass(swalClasses.popup);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getIcon = () => elementByClass(swalClasses.icon);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getIconContent = () => elementByClass(swalClasses['icon-content']);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getTitle = () => elementByClass(swalClasses.title);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getHtmlContainer = () => elementByClass(swalClasses['html-container']);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getImage = () => elementByClass(swalClasses.image);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getValidationMessage = () => elementByClass(swalClasses['validation-message']);\n\n  /**\n   * @returns {HTMLButtonElement | null}\n   */\n  const getConfirmButton = () => /** @type {HTMLButtonElement} */elementBySelector(\".\".concat(swalClasses.actions, \" .\").concat(swalClasses.confirm));\n\n  /**\n   * @returns {HTMLButtonElement | null}\n   */\n  const getCancelButton = () => /** @type {HTMLButtonElement} */elementBySelector(\".\".concat(swalClasses.actions, \" .\").concat(swalClasses.cancel));\n\n  /**\n   * @returns {HTMLButtonElement | null}\n   */\n  const getDenyButton = () => /** @type {HTMLButtonElement} */elementBySelector(\".\".concat(swalClasses.actions, \" .\").concat(swalClasses.deny));\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getInputLabel = () => elementByClass(swalClasses['input-label']);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getLoader = () => elementBySelector(\".\".concat(swalClasses.loader));\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getActions = () => elementByClass(swalClasses.actions);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getFooter = () => elementByClass(swalClasses.footer);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);\n\n  /**\n   * @returns {HTMLElement | null}\n   */\n  const getCloseButton = () => elementByClass(swalClasses.close);\n\n  // https://github.com/jkup/focusable/blob/master/index.js\n  const focusable = \"\\n  a[href],\\n  area[href],\\n  input:not([disabled]),\\n  select:not([disabled]),\\n  textarea:not([disabled]),\\n  button:not([disabled]),\\n  iframe,\\n  object,\\n  embed,\\n  [tabindex=\\\"0\\\"],\\n  [contenteditable],\\n  audio[controls],\\n  video[controls],\\n  summary\\n\";\n  /**\n   * @returns {HTMLElement[]}\n   */\n  const getFocusableElements = () => {\n    const popup = getPopup();\n    if (!popup) {\n      return [];\n    }\n    /** @type {NodeListOf<HTMLElement>} */\n    const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex=\"-1\"]):not([tabindex=\"0\"])');\n    const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)\n    // sort according to tabindex\n    .sort((a, b) => {\n      const tabindexA = parseInt(a.getAttribute('tabindex') || '0');\n      const tabindexB = parseInt(b.getAttribute('tabindex') || '0');\n      if (tabindexA > tabindexB) {\n        return 1;\n      } else if (tabindexA < tabindexB) {\n        return -1;\n      }\n      return 0;\n    });\n\n    /** @type {NodeListOf<HTMLElement>} */\n    const otherFocusableElements = popup.querySelectorAll(focusable);\n    const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');\n    return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));\n  };\n\n  /**\n   * @returns {boolean}\n   */\n  const isModal = () => {\n    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);\n  };\n\n  /**\n   * @returns {boolean}\n   */\n  const isToast = () => {\n    const popup = getPopup();\n    if (!popup) {\n      return false;\n    }\n    return hasClass(popup, swalClasses.toast);\n  };\n\n  /**\n   * @returns {boolean}\n   */\n  const isLoading = () => {\n    const popup = getPopup();\n    if (!popup) {\n      return false;\n    }\n    return popup.hasAttribute('data-loading');\n  };\n\n  /**\n   * Securely set innerHTML of an element\n   * https://github.com/sweetalert2/sweetalert2/issues/1926\n   *\n   * @param {HTMLElement} elem\n   * @param {string} html\n   */\n  const setInnerHtml = (elem, html) => {\n    elem.textContent = '';\n    if (html) {\n      const parser = new DOMParser();\n      const parsed = parser.parseFromString(html, \"text/html\");\n      const head = parsed.querySelector('head');\n      head && Array.from(head.childNodes).forEach(child => {\n        elem.appendChild(child);\n      });\n      const body = parsed.querySelector('body');\n      body && Array.from(body.childNodes).forEach(child => {\n        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {\n          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507\n        } else {\n          elem.appendChild(child);\n        }\n      });\n    }\n  };\n\n  /**\n   * @param {HTMLElement} elem\n   * @param {string} className\n   * @returns {boolean}\n   */\n  const hasClass = (elem, className) => {\n    if (!className) {\n      return false;\n    }\n    const classList = className.split(/\\s+/);\n    for (let i = 0; i < classList.length; i++) {\n      if (!elem.classList.contains(classList[i])) {\n        return false;\n      }\n    }\n    return true;\n  };\n\n  /**\n   * @param {HTMLElement} elem\n   * @param {SweetAlertOptions} params\n   */\n  const removeCustomClasses = (elem, params) => {\n    Array.from(elem.classList).forEach(className => {\n      if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {\n        elem.classList.remove(className);\n      }\n    });\n  };\n\n  /**\n   * @param {HTMLElement} elem\n   * @param {SweetAlertOptions} params\n   * @param {string} className\n   */\n  const applyCustomClass = (elem, params, className) => {\n    removeCustomClasses(elem, params);\n    if (params.customClass && params.customClass[className]) {\n      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {\n        warn(\"Invalid type of customClass.\".concat(className, \"! Expected string or iterable object, got \\\"\").concat(typeof params.customClass[className], \"\\\"\"));\n        return;\n      }\n      addClass(elem, params.customClass[className]);\n    }\n  };\n\n  /**\n   * @param {HTMLElement} popup\n   * @param {import('./renderers/renderInput').InputClass} inputClass\n   * @returns {HTMLInputElement | null}\n   */\n  const getInput$1 = (popup, inputClass) => {\n    if (!inputClass) {\n      return null;\n    }\n    switch (inputClass) {\n      case 'select':\n      case 'textarea':\n      case 'file':\n        return popup.querySelector(\".\".concat(swalClasses.popup, \" > .\").concat(swalClasses[inputClass]));\n      case 'checkbox':\n        return popup.querySelector(\".\".concat(swalClasses.popup, \" > .\").concat(swalClasses.checkbox, \" input\"));\n      case 'radio':\n        return popup.querySelector(\".\".concat(swalClasses.popup, \" > .\").concat(swalClasses.radio, \" input:checked\")) || popup.querySelector(\".\".concat(swalClasses.popup, \" > .\").concat(swalClasses.radio, \" input:first-child\"));\n      case 'range':\n        return popup.querySelector(\".\".concat(swalClasses.popup, \" > .\").concat(swalClasses.range, \" input\"));\n      default:\n        return popup.querySelector(\".\".concat(swalClasses.popup, \" > .\").concat(swalClasses.input));\n    }\n  };\n\n  /**\n   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input\n   */\n  const focusInput = input => {\n    input.focus();\n\n    // place cursor at end of text in text input\n    if (input.type !== 'file') {\n      // http://stackoverflow.com/a/2345915\n      const val = input.value;\n      input.value = '';\n      input.value = val;\n    }\n  };\n\n  /**\n   * @param {HTMLElement | HTMLElement[] | null} target\n   * @param {string | string[] | readonly string[] | undefined} classList\n   * @param {boolean} condition\n   */\n  const toggleClass = (target, classList, condition) => {\n    if (!target || !classList) {\n      return;\n    }\n    if (typeof classList === 'string') {\n      classList = classList.split(/\\s+/).filter(Boolean);\n    }\n    classList.forEach(className => {\n      if (Array.isArray(target)) {\n        target.forEach(elem => {\n          condition ? elem.classList.add(className) : elem.classList.remove(className);\n        });\n      } else {\n        condition ? target.classList.add(className) : target.classList.remove(className);\n      }\n    });\n  };\n\n  /**\n   * @param {HTMLElement | HTMLElement[] | null} target\n   * @param {string | string[] | readonly string[] | undefined} classList\n   */\n  const addClass = (target, classList) => {\n    toggleClass(target, classList, true);\n  };\n\n  /**\n   * @param {HTMLElement | HTMLElement[] | null} target\n   * @param {string | string[] | readonly string[] | undefined} classList\n   */\n  const removeClass = (target, classList) => {\n    toggleClass(target, classList, false);\n  };\n\n  /**\n   * Get direct child of an element by class name\n   *\n   * @param {HTMLElement} elem\n   * @param {string} className\n   * @returns {HTMLElement | undefined}\n   */\n  const getDirectChildByClass = (elem, className) => {\n    const children = Array.from(elem.children);\n    for (let i = 0; i < children.length; i++) {\n      const child = children[i];\n      if (child instanceof HTMLElement && hasClass(child, className)) {\n        return child;\n      }\n    }\n  };\n\n  /**\n   * @param {HTMLElement} elem\n   * @param {string} property\n   * @param {*} value\n   */\n  const applyNumericalStyle = (elem, property, value) => {\n    if (value === \"\".concat(parseInt(value))) {\n      value = parseInt(value);\n    }\n    if (value || parseInt(value) === 0) {\n      elem.style[property] = typeof value === 'number' ? \"\".concat(value, \"px\") : value;\n    } else {\n      elem.style.removeProperty(property);\n    }\n  };\n\n  /**\n   * @param {HTMLElement | null} elem\n   * @param {string} display\n   */\n  const show = function (elem) {\n    let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';\n    elem && (elem.style.display = display);\n  };\n\n  /**\n   * @param {HTMLElement | null} elem\n   */\n  const hide = elem => {\n    elem && (elem.style.display = 'none');\n  };\n\n  /**\n   * @param {HTMLElement} parent\n   * @param {string} selector\n   * @param {string} property\n   * @param {string} value\n   */\n  const setStyle = (parent, selector, property, value) => {\n    /** @type {HTMLElement} */\n    const el = parent.querySelector(selector);\n    if (el) {\n      el.style[property] = value;\n    }\n  };\n\n  /**\n   * @param {HTMLElement} elem\n   * @param {any} condition\n   * @param {string} display\n   */\n  const toggle = function (elem, condition) {\n    let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';\n    condition ? show(elem, display) : hide(elem);\n  };\n\n  /**\n   * borrowed from jquery $(elem).is(':visible') implementation\n   *\n   * @param {HTMLElement | null} elem\n   * @returns {boolean}\n   */\n  const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));\n\n  /**\n   * @returns {boolean}\n   */\n  const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());\n\n  /**\n   * @param {HTMLElement} elem\n   * @returns {boolean}\n   */\n  const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);\n\n  /**\n   * borrowed from https://stackoverflow.com/a/46352119\n   *\n   * @param {HTMLElement} elem\n   * @returns {boolean}\n   */\n  const hasCssAnimation = elem => {\n    const style = window.getComputedStyle(elem);\n    const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');\n    const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');\n    return animDuration > 0 || transDuration > 0;\n  };\n\n  /**\n   * @param {number} timer\n   * @param {boolean} reset\n   */\n  const animateTimerProgressBar = function (timer) {\n    let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    const timerProgressBar = getTimerProgressBar();\n    if (!timerProgressBar) {\n      return;\n    }\n    if (isVisible$1(timerProgressBar)) {\n      if (reset) {\n        timerProgressBar.style.transition = 'none';\n        timerProgressBar.style.width = '100%';\n      }\n      setTimeout(() => {\n        timerProgressBar.style.transition = \"width \".concat(timer / 1000, \"s linear\");\n        timerProgressBar.style.width = '0%';\n      }, 10);\n    }\n  };\n  const stopTimerProgressBar = () => {\n    const timerProgressBar = getTimerProgressBar();\n    if (!timerProgressBar) {\n      return;\n    }\n    const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);\n    timerProgressBar.style.removeProperty('transition');\n    timerProgressBar.style.width = '100%';\n    const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);\n    const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;\n    timerProgressBar.style.width = \"\".concat(timerProgressBarPercent, \"%\");\n  };\n\n  /**\n   * Detect Node env\n   *\n   * @returns {boolean}\n   */\n  const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';\n\n  const sweetHTML = \"\\n <div aria-labelledby=\\\"\".concat(swalClasses.title, \"\\\" aria-describedby=\\\"\").concat(swalClasses['html-container'], \"\\\" class=\\\"\").concat(swalClasses.popup, \"\\\" tabindex=\\\"-1\\\">\\n   <button type=\\\"button\\\" class=\\\"\").concat(swalClasses.close, \"\\\"></button>\\n   <ul class=\\\"\").concat(swalClasses['progress-steps'], \"\\\"></ul>\\n   <div class=\\\"\").concat(swalClasses.icon, \"\\\"></div>\\n   <img class=\\\"\").concat(swalClasses.image, \"\\\" />\\n   <h2 class=\\\"\").concat(swalClasses.title, \"\\\" id=\\\"\").concat(swalClasses.title, \"\\\"></h2>\\n   <div class=\\\"\").concat(swalClasses['html-container'], \"\\\" id=\\\"\").concat(swalClasses['html-container'], \"\\\"></div>\\n   <input class=\\\"\").concat(swalClasses.input, \"\\\" id=\\\"\").concat(swalClasses.input, \"\\\" />\\n   <input type=\\\"file\\\" class=\\\"\").concat(swalClasses.file, \"\\\" />\\n   <div class=\\\"\").concat(swalClasses.range, \"\\\">\\n     <input type=\\\"range\\\" />\\n     <output></output>\\n   </div>\\n   <select class=\\\"\").concat(swalClasses.select, \"\\\" id=\\\"\").concat(swalClasses.select, \"\\\"></select>\\n   <div class=\\\"\").concat(swalClasses.radio, \"\\\"></div>\\n   <label class=\\\"\").concat(swalClasses.checkbox, \"\\\">\\n     <input type=\\\"checkbox\\\" id=\\\"\").concat(swalClasses.checkbox, \"\\\" />\\n     <span class=\\\"\").concat(swalClasses.label, \"\\\"></span>\\n   </label>\\n   <textarea class=\\\"\").concat(swalClasses.textarea, \"\\\" id=\\\"\").concat(swalClasses.textarea, \"\\\"></textarea>\\n   <div class=\\\"\").concat(swalClasses['validation-message'], \"\\\" id=\\\"\").concat(swalClasses['validation-message'], \"\\\"></div>\\n   <div class=\\\"\").concat(swalClasses.actions, \"\\\">\\n     <div class=\\\"\").concat(swalClasses.loader, \"\\\"></div>\\n     <button type=\\\"button\\\" class=\\\"\").concat(swalClasses.confirm, \"\\\"></button>\\n     <button type=\\\"button\\\" class=\\\"\").concat(swalClasses.deny, \"\\\"></button>\\n     <button type=\\\"button\\\" class=\\\"\").concat(swalClasses.cancel, \"\\\"></button>\\n   </div>\\n   <div class=\\\"\").concat(swalClasses.footer, \"\\\"></div>\\n   <div class=\\\"\").concat(swalClasses['timer-progress-bar-container'], \"\\\">\\n     <div class=\\\"\").concat(swalClasses['timer-progress-bar'], \"\\\"></div>\\n   </div>\\n </div>\\n\").replace(/(^|\\n)\\s*/g, '');\n\n  /**\n   * @returns {boolean}\n   */\n  const resetOldContainer = () => {\n    const oldContainer = getContainer();\n    if (!oldContainer) {\n      return false;\n    }\n    oldContainer.remove();\n    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);\n    return true;\n  };\n  const resetValidationMessage$1 = () => {\n    globalState.currentInstance.resetValidationMessage();\n  };\n  const addInputChangeListeners = () => {\n    const popup = getPopup();\n    const input = getDirectChildByClass(popup, swalClasses.input);\n    const file = getDirectChildByClass(popup, swalClasses.file);\n    /** @type {HTMLInputElement} */\n    const range = popup.querySelector(\".\".concat(swalClasses.range, \" input\"));\n    /** @type {HTMLOutputElement} */\n    const rangeOutput = popup.querySelector(\".\".concat(swalClasses.range, \" output\"));\n    const select = getDirectChildByClass(popup, swalClasses.select);\n    /** @type {HTMLInputElement} */\n    const checkbox = popup.querySelector(\".\".concat(swalClasses.checkbox, \" input\"));\n    const textarea = getDirectChildByClass(popup, swalClasses.textarea);\n    input.oninput = resetValidationMessage$1;\n    file.onchange = resetValidationMessage$1;\n    select.onchange = resetValidationMessage$1;\n    checkbox.onchange = resetValidationMessage$1;\n    textarea.oninput = resetValidationMessage$1;\n    range.oninput = () => {\n      resetValidationMessage$1();\n      rangeOutput.value = range.value;\n    };\n    range.onchange = () => {\n      resetValidationMessage$1();\n      rangeOutput.value = range.value;\n    };\n  };\n\n  /**\n   * @param {string | HTMLElement} target\n   * @returns {HTMLElement}\n   */\n  const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;\n\n  /**\n   * @param {SweetAlertOptions} params\n   */\n  const setupAccessibility = params => {\n    const popup = getPopup();\n    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');\n    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');\n    if (!params.toast) {\n      popup.setAttribute('aria-modal', 'true');\n    }\n  };\n\n  /**\n   * @param {HTMLElement} targetElement\n   */\n  const setupRTL = targetElement => {\n    if (window.getComputedStyle(targetElement).direction === 'rtl') {\n      addClass(getContainer(), swalClasses.rtl);\n    }\n  };\n\n  /**\n   * Add modal + backdrop + no-war message for Russians to DOM\n   *\n   * @param {SweetAlertOptions} params\n   */\n  const init = params => {\n    // Clean up the old popup container if it exists\n    const oldContainerExisted = resetOldContainer();\n    if (isNodeEnv()) {\n      error('SweetAlert2 requires document to initialize');\n      return;\n    }\n    const container = document.createElement('div');\n    container.className = swalClasses.container;\n    if (oldContainerExisted) {\n      addClass(container, swalClasses['no-transition']);\n    }\n    setInnerHtml(container, sweetHTML);\n    const targetElement = getTarget(params.target);\n    targetElement.appendChild(container);\n    setupAccessibility(params);\n    setupRTL(targetElement);\n    addInputChangeListeners();\n  };\n\n  /**\n   * @param {HTMLElement | object | string} param\n   * @param {HTMLElement} target\n   */\n  const parseHtmlToContainer = (param, target) => {\n    // DOM element\n    if (param instanceof HTMLElement) {\n      target.appendChild(param);\n    }\n\n    // Object\n    else if (typeof param === 'object') {\n      handleObject(param, target);\n    }\n\n    // Plain string\n    else if (param) {\n      setInnerHtml(target, param);\n    }\n  };\n\n  /**\n   * @param {any} param\n   * @param {HTMLElement} target\n   */\n  const handleObject = (param, target) => {\n    // JQuery element(s)\n    if (param.jquery) {\n      handleJqueryElem(target, param);\n    }\n\n    // For other objects use their string representation\n    else {\n      setInnerHtml(target, param.toString());\n    }\n  };\n\n  /**\n   * @param {HTMLElement} target\n   * @param {any} elem\n   */\n  const handleJqueryElem = (target, elem) => {\n    target.textContent = '';\n    if (0 in elem) {\n      for (let i = 0; (i in elem); i++) {\n        target.appendChild(elem[i].cloneNode(true));\n      }\n    } else {\n      target.appendChild(elem.cloneNode(true));\n    }\n  };\n\n  /**\n   * @returns {'webkitAnimationEnd' | 'animationend' | false}\n   */\n  const animationEndEvent = (() => {\n    // Prevent run in Node env\n    if (isNodeEnv()) {\n      return false;\n    }\n    const testEl = document.createElement('div');\n\n    // Chrome, Safari and Opera\n    if (typeof testEl.style.webkitAnimation !== 'undefined') {\n      return 'webkitAnimationEnd';\n    }\n\n    // Standard syntax\n    if (typeof testEl.style.animation !== 'undefined') {\n      return 'animationend';\n    }\n    return false;\n  })();\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderActions = (instance, params) => {\n    const actions = getActions();\n    const loader = getLoader();\n    if (!actions || !loader) {\n      return;\n    }\n\n    // Actions (buttons) wrapper\n    if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {\n      hide(actions);\n    } else {\n      show(actions);\n    }\n\n    // Custom class\n    applyCustomClass(actions, params, 'actions');\n\n    // Render all the buttons\n    renderButtons(actions, loader, params);\n\n    // Loader\n    setInnerHtml(loader, params.loaderHtml || '');\n    applyCustomClass(loader, params, 'loader');\n  };\n\n  /**\n   * @param {HTMLElement} actions\n   * @param {HTMLElement} loader\n   * @param {SweetAlertOptions} params\n   */\n  function renderButtons(actions, loader, params) {\n    const confirmButton = getConfirmButton();\n    const denyButton = getDenyButton();\n    const cancelButton = getCancelButton();\n    if (!confirmButton || !denyButton || !cancelButton) {\n      return;\n    }\n\n    // Render buttons\n    renderButton(confirmButton, 'confirm', params);\n    renderButton(denyButton, 'deny', params);\n    renderButton(cancelButton, 'cancel', params);\n    handleButtonsStyling(confirmButton, denyButton, cancelButton, params);\n    if (params.reverseButtons) {\n      if (params.toast) {\n        actions.insertBefore(cancelButton, confirmButton);\n        actions.insertBefore(denyButton, confirmButton);\n      } else {\n        actions.insertBefore(cancelButton, loader);\n        actions.insertBefore(denyButton, loader);\n        actions.insertBefore(confirmButton, loader);\n      }\n    }\n  }\n\n  /**\n   * @param {HTMLElement} confirmButton\n   * @param {HTMLElement} denyButton\n   * @param {HTMLElement} cancelButton\n   * @param {SweetAlertOptions} params\n   */\n  function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {\n    if (!params.buttonsStyling) {\n      removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);\n      return;\n    }\n    addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);\n\n    // Buttons background colors\n    if (params.confirmButtonColor) {\n      confirmButton.style.backgroundColor = params.confirmButtonColor;\n      addClass(confirmButton, swalClasses['default-outline']);\n    }\n    if (params.denyButtonColor) {\n      denyButton.style.backgroundColor = params.denyButtonColor;\n      addClass(denyButton, swalClasses['default-outline']);\n    }\n    if (params.cancelButtonColor) {\n      cancelButton.style.backgroundColor = params.cancelButtonColor;\n      addClass(cancelButton, swalClasses['default-outline']);\n    }\n  }\n\n  /**\n   * @param {HTMLElement} button\n   * @param {'confirm' | 'deny' | 'cancel'} buttonType\n   * @param {SweetAlertOptions} params\n   */\n  function renderButton(button, buttonType, params) {\n    const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);\n    toggle(button, params[\"show\".concat(buttonName, \"Button\")], 'inline-block');\n    setInnerHtml(button, params[\"\".concat(buttonType, \"ButtonText\")] || ''); // Set caption text\n    button.setAttribute('aria-label', params[\"\".concat(buttonType, \"ButtonAriaLabel\")] || ''); // ARIA label\n\n    // Add buttons custom classes\n    button.className = swalClasses[buttonType];\n    applyCustomClass(button, params, \"\".concat(buttonType, \"Button\"));\n  }\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderCloseButton = (instance, params) => {\n    const closeButton = getCloseButton();\n    if (!closeButton) {\n      return;\n    }\n    setInnerHtml(closeButton, params.closeButtonHtml || '');\n\n    // Custom class\n    applyCustomClass(closeButton, params, 'closeButton');\n    toggle(closeButton, params.showCloseButton);\n    closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderContainer = (instance, params) => {\n    const container = getContainer();\n    if (!container) {\n      return;\n    }\n    handleBackdropParam(container, params.backdrop);\n    handlePositionParam(container, params.position);\n    handleGrowParam(container, params.grow);\n\n    // Custom class\n    applyCustomClass(container, params, 'container');\n  };\n\n  /**\n   * @param {HTMLElement} container\n   * @param {SweetAlertOptions['backdrop']} backdrop\n   */\n  function handleBackdropParam(container, backdrop) {\n    if (typeof backdrop === 'string') {\n      container.style.background = backdrop;\n    } else if (!backdrop) {\n      addClass([document.documentElement, document.body], swalClasses['no-backdrop']);\n    }\n  }\n\n  /**\n   * @param {HTMLElement} container\n   * @param {SweetAlertOptions['position']} position\n   */\n  function handlePositionParam(container, position) {\n    if (!position) {\n      return;\n    }\n    if (position in swalClasses) {\n      addClass(container, swalClasses[position]);\n    } else {\n      warn('The \"position\" parameter is not valid, defaulting to \"center\"');\n      addClass(container, swalClasses.center);\n    }\n  }\n\n  /**\n   * @param {HTMLElement} container\n   * @param {SweetAlertOptions['grow']} grow\n   */\n  function handleGrowParam(container, grow) {\n    if (!grow) {\n      return;\n    }\n    addClass(container, swalClasses[\"grow-\".concat(grow)]);\n  }\n\n  /// <reference path=\"../../../../sweetalert2.d.ts\"/>\n\n\n  /** @type {InputClass[]} */\n  const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderInput = (instance, params) => {\n    const popup = getPopup();\n    if (!popup) {\n      return;\n    }\n    const innerParams = privateProps.innerParams.get(instance);\n    const rerender = !innerParams || params.input !== innerParams.input;\n    inputClasses.forEach(inputClass => {\n      const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);\n      if (!inputContainer) {\n        return;\n      }\n\n      // set attributes\n      setAttributes(inputClass, params.inputAttributes);\n\n      // set class\n      inputContainer.className = swalClasses[inputClass];\n      if (rerender) {\n        hide(inputContainer);\n      }\n    });\n    if (params.input) {\n      if (rerender) {\n        showInput(params);\n      }\n      // set custom class\n      setCustomClass(params);\n    }\n  };\n\n  /**\n   * @param {SweetAlertOptions} params\n   */\n  const showInput = params => {\n    if (!params.input) {\n      return;\n    }\n    if (!renderInputType[params.input]) {\n      error(\"Unexpected type of input! Expected \\\"text\\\", \\\"email\\\", \\\"password\\\", \\\"number\\\", \\\"tel\\\", \\\"select\\\", \\\"radio\\\", \\\"checkbox\\\", \\\"textarea\\\", \\\"file\\\" or \\\"url\\\", got \\\"\".concat(params.input, \"\\\"\"));\n      return;\n    }\n    const inputContainer = getInputContainer(params.input);\n    const input = renderInputType[params.input](inputContainer, params);\n    show(inputContainer);\n\n    // input autofocus\n    if (params.inputAutoFocus) {\n      setTimeout(() => {\n        focusInput(input);\n      });\n    }\n  };\n\n  /**\n   * @param {HTMLInputElement} input\n   */\n  const removeAttributes = input => {\n    for (let i = 0; i < input.attributes.length; i++) {\n      const attrName = input.attributes[i].name;\n      if (!['id', 'type', 'value', 'style'].includes(attrName)) {\n        input.removeAttribute(attrName);\n      }\n    }\n  };\n\n  /**\n   * @param {InputClass} inputClass\n   * @param {SweetAlertOptions['inputAttributes']} inputAttributes\n   */\n  const setAttributes = (inputClass, inputAttributes) => {\n    const input = getInput$1(getPopup(), inputClass);\n    if (!input) {\n      return;\n    }\n    removeAttributes(input);\n    for (const attr in inputAttributes) {\n      input.setAttribute(attr, inputAttributes[attr]);\n    }\n  };\n\n  /**\n   * @param {SweetAlertOptions} params\n   */\n  const setCustomClass = params => {\n    const inputContainer = getInputContainer(params.input);\n    if (typeof params.customClass === 'object') {\n      addClass(inputContainer, params.customClass.input);\n    }\n  };\n\n  /**\n   * @param {HTMLInputElement | HTMLTextAreaElement} input\n   * @param {SweetAlertOptions} params\n   */\n  const setInputPlaceholder = (input, params) => {\n    if (!input.placeholder || params.inputPlaceholder) {\n      input.placeholder = params.inputPlaceholder;\n    }\n  };\n\n  /**\n   * @param {Input} input\n   * @param {Input} prependTo\n   * @param {SweetAlertOptions} params\n   */\n  const setInputLabel = (input, prependTo, params) => {\n    if (params.inputLabel) {\n      const label = document.createElement('label');\n      const labelClass = swalClasses['input-label'];\n      label.setAttribute('for', input.id);\n      label.className = labelClass;\n      if (typeof params.customClass === 'object') {\n        addClass(label, params.customClass.inputLabel);\n      }\n      label.innerText = params.inputLabel;\n      prependTo.insertAdjacentElement('beforebegin', label);\n    }\n  };\n\n  /**\n   * @param {SweetAlertOptions['input']} inputType\n   * @returns {HTMLElement}\n   */\n  const getInputContainer = inputType => {\n    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);\n  };\n\n  /**\n   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input\n   * @param {SweetAlertOptions['inputValue']} inputValue\n   */\n  const checkAndSetInputValue = (input, inputValue) => {\n    if (['string', 'number'].includes(typeof inputValue)) {\n      input.value = \"\".concat(inputValue);\n    } else if (!isPromise(inputValue)) {\n      warn(\"Unexpected type of inputValue! Expected \\\"string\\\", \\\"number\\\" or \\\"Promise\\\", got \\\"\".concat(typeof inputValue, \"\\\"\"));\n    }\n  };\n\n  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */\n  const renderInputType = {};\n\n  /**\n   * @param {HTMLInputElement} input\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLInputElement}\n   */\n  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {\n    checkAndSetInputValue(input, params.inputValue);\n    setInputLabel(input, input, params);\n    setInputPlaceholder(input, params);\n    input.type = params.input;\n    return input;\n  };\n\n  /**\n   * @param {HTMLInputElement} input\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLInputElement}\n   */\n  renderInputType.file = (input, params) => {\n    setInputLabel(input, input, params);\n    setInputPlaceholder(input, params);\n    return input;\n  };\n\n  /**\n   * @param {HTMLInputElement} range\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLInputElement}\n   */\n  renderInputType.range = (range, params) => {\n    const rangeInput = range.querySelector('input');\n    const rangeOutput = range.querySelector('output');\n    checkAndSetInputValue(rangeInput, params.inputValue);\n    rangeInput.type = params.input;\n    checkAndSetInputValue(rangeOutput, params.inputValue);\n    setInputLabel(rangeInput, range, params);\n    return range;\n  };\n\n  /**\n   * @param {HTMLSelectElement} select\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLSelectElement}\n   */\n  renderInputType.select = (select, params) => {\n    select.textContent = '';\n    if (params.inputPlaceholder) {\n      const placeholder = document.createElement('option');\n      setInnerHtml(placeholder, params.inputPlaceholder);\n      placeholder.value = '';\n      placeholder.disabled = true;\n      placeholder.selected = true;\n      select.appendChild(placeholder);\n    }\n    setInputLabel(select, select, params);\n    return select;\n  };\n\n  /**\n   * @param {HTMLInputElement} radio\n   * @returns {HTMLInputElement}\n   */\n  renderInputType.radio = radio => {\n    radio.textContent = '';\n    return radio;\n  };\n\n  /**\n   * @param {HTMLLabelElement} checkboxContainer\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLInputElement}\n   */\n  renderInputType.checkbox = (checkboxContainer, params) => {\n    const checkbox = getInput$1(getPopup(), 'checkbox');\n    checkbox.value = '1';\n    checkbox.checked = Boolean(params.inputValue);\n    const label = checkboxContainer.querySelector('span');\n    setInnerHtml(label, params.inputPlaceholder);\n    return checkbox;\n  };\n\n  /**\n   * @param {HTMLTextAreaElement} textarea\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLTextAreaElement}\n   */\n  renderInputType.textarea = (textarea, params) => {\n    checkAndSetInputValue(textarea, params.inputValue);\n    setInputPlaceholder(textarea, params);\n    setInputLabel(textarea, textarea, params);\n\n    /**\n     * @param {HTMLElement} el\n     * @returns {number}\n     */\n    const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);\n\n    // https://github.com/sweetalert2/sweetalert2/issues/2291\n    setTimeout(() => {\n      // https://github.com/sweetalert2/sweetalert2/issues/1699\n      if ('MutationObserver' in window) {\n        const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);\n        const textareaResizeHandler = () => {\n          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)\n          if (!document.body.contains(textarea)) {\n            return;\n          }\n          const textareaWidth = textarea.offsetWidth + getMargin(textarea);\n          if (textareaWidth > initialPopupWidth) {\n            getPopup().style.width = \"\".concat(textareaWidth, \"px\");\n          } else {\n            applyNumericalStyle(getPopup(), 'width', params.width);\n          }\n        };\n        new MutationObserver(textareaResizeHandler).observe(textarea, {\n          attributes: true,\n          attributeFilter: ['style']\n        });\n      }\n    });\n    return textarea;\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderContent = (instance, params) => {\n    const htmlContainer = getHtmlContainer();\n    if (!htmlContainer) {\n      return;\n    }\n    applyCustomClass(htmlContainer, params, 'htmlContainer');\n\n    // Content as HTML\n    if (params.html) {\n      parseHtmlToContainer(params.html, htmlContainer);\n      show(htmlContainer, 'block');\n    }\n\n    // Content as plain text\n    else if (params.text) {\n      htmlContainer.textContent = params.text;\n      show(htmlContainer, 'block');\n    }\n\n    // No content\n    else {\n      hide(htmlContainer);\n    }\n    renderInput(instance, params);\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderFooter = (instance, params) => {\n    const footer = getFooter();\n    if (!footer) {\n      return;\n    }\n    toggle(footer, params.footer, 'block');\n    if (params.footer) {\n      parseHtmlToContainer(params.footer, footer);\n    }\n\n    // Custom class\n    applyCustomClass(footer, params, 'footer');\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderIcon = (instance, params) => {\n    const innerParams = privateProps.innerParams.get(instance);\n    const icon = getIcon();\n    if (!icon) {\n      return;\n    }\n\n    // if the given icon already rendered, apply the styling without re-rendering the icon\n    if (innerParams && params.icon === innerParams.icon) {\n      // Custom or default content\n      setContent(icon, params);\n      applyStyles(icon, params);\n      return;\n    }\n    if (!params.icon && !params.iconHtml) {\n      hide(icon);\n      return;\n    }\n    if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {\n      error(\"Unknown icon! Expected \\\"success\\\", \\\"error\\\", \\\"warning\\\", \\\"info\\\" or \\\"question\\\", got \\\"\".concat(params.icon, \"\\\"\"));\n      hide(icon);\n      return;\n    }\n    show(icon);\n\n    // Custom or default content\n    setContent(icon, params);\n    applyStyles(icon, params);\n\n    // Animate icon\n    addClass(icon, params.showClass && params.showClass.icon);\n  };\n\n  /**\n   * @param {HTMLElement} icon\n   * @param {SweetAlertOptions} params\n   */\n  const applyStyles = (icon, params) => {\n    for (const [iconType, iconClassName] of Object.entries(iconTypes)) {\n      if (params.icon !== iconType) {\n        removeClass(icon, iconClassName);\n      }\n    }\n    addClass(icon, params.icon && iconTypes[params.icon]);\n\n    // Icon color\n    setColor(icon, params);\n\n    // Success icon background color\n    adjustSuccessIconBackgroundColor();\n\n    // Custom class\n    applyCustomClass(icon, params, 'icon');\n  };\n\n  // Adjust success icon background color to match the popup background color\n  const adjustSuccessIconBackgroundColor = () => {\n    const popup = getPopup();\n    if (!popup) {\n      return;\n    }\n    const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');\n    /** @type {NodeListOf<HTMLElement>} */\n    const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');\n    for (let i = 0; i < successIconParts.length; i++) {\n      successIconParts[i].style.backgroundColor = popupBackgroundColor;\n    }\n  };\n  const successIconHtml = \"\\n  <div class=\\\"swal2-success-circular-line-left\\\"></div>\\n  <span class=\\\"swal2-success-line-tip\\\"></span> <span class=\\\"swal2-success-line-long\\\"></span>\\n  <div class=\\\"swal2-success-ring\\\"></div> <div class=\\\"swal2-success-fix\\\"></div>\\n  <div class=\\\"swal2-success-circular-line-right\\\"></div>\\n\";\n  const errorIconHtml = \"\\n  <span class=\\\"swal2-x-mark\\\">\\n    <span class=\\\"swal2-x-mark-line-left\\\"></span>\\n    <span class=\\\"swal2-x-mark-line-right\\\"></span>\\n  </span>\\n\";\n\n  /**\n   * @param {HTMLElement} icon\n   * @param {SweetAlertOptions} params\n   */\n  const setContent = (icon, params) => {\n    if (!params.icon && !params.iconHtml) {\n      return;\n    }\n    let oldContent = icon.innerHTML;\n    let newContent = '';\n    if (params.iconHtml) {\n      newContent = iconContent(params.iconHtml);\n    } else if (params.icon === 'success') {\n      newContent = successIconHtml;\n      oldContent = oldContent.replace(/ style=\".*?\"/g, ''); // undo adjustSuccessIconBackgroundColor()\n    } else if (params.icon === 'error') {\n      newContent = errorIconHtml;\n    } else if (params.icon) {\n      const defaultIconHtml = {\n        question: '?',\n        warning: '!',\n        info: 'i'\n      };\n      newContent = iconContent(defaultIconHtml[params.icon]);\n    }\n    if (oldContent.trim() !== newContent.trim()) {\n      setInnerHtml(icon, newContent);\n    }\n  };\n\n  /**\n   * @param {HTMLElement} icon\n   * @param {SweetAlertOptions} params\n   */\n  const setColor = (icon, params) => {\n    if (!params.iconColor) {\n      return;\n    }\n    icon.style.color = params.iconColor;\n    icon.style.borderColor = params.iconColor;\n    for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {\n      setStyle(icon, sel, 'backgroundColor', params.iconColor);\n    }\n    setStyle(icon, '.swal2-success-ring', 'borderColor', params.iconColor);\n  };\n\n  /**\n   * @param {string} content\n   * @returns {string}\n   */\n  const iconContent = content => \"<div class=\\\"\".concat(swalClasses['icon-content'], \"\\\">\").concat(content, \"</div>\");\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderImage = (instance, params) => {\n    const image = getImage();\n    if (!image) {\n      return;\n    }\n    if (!params.imageUrl) {\n      hide(image);\n      return;\n    }\n    show(image, '');\n\n    // Src, alt\n    image.setAttribute('src', params.imageUrl);\n    image.setAttribute('alt', params.imageAlt || '');\n\n    // Width, height\n    applyNumericalStyle(image, 'width', params.imageWidth);\n    applyNumericalStyle(image, 'height', params.imageHeight);\n\n    // Class\n    image.className = swalClasses.image;\n    applyCustomClass(image, params, 'image');\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderPopup = (instance, params) => {\n    const container = getContainer();\n    const popup = getPopup();\n    if (!container || !popup) {\n      return;\n    }\n\n    // Width\n    // https://github.com/sweetalert2/sweetalert2/issues/2170\n    if (params.toast) {\n      applyNumericalStyle(container, 'width', params.width);\n      popup.style.width = '100%';\n      const loader = getLoader();\n      loader && popup.insertBefore(loader, getIcon());\n    } else {\n      applyNumericalStyle(popup, 'width', params.width);\n    }\n\n    // Padding\n    applyNumericalStyle(popup, 'padding', params.padding);\n\n    // Color\n    if (params.color) {\n      popup.style.color = params.color;\n    }\n\n    // Background\n    if (params.background) {\n      popup.style.background = params.background;\n    }\n    hide(getValidationMessage());\n\n    // Classes\n    addClasses$1(popup, params);\n  };\n\n  /**\n   * @param {HTMLElement} popup\n   * @param {SweetAlertOptions} params\n   */\n  const addClasses$1 = (popup, params) => {\n    const showClass = params.showClass || {};\n    // Default Class + showClass when updating Swal.update({})\n    popup.className = \"\".concat(swalClasses.popup, \" \").concat(isVisible$1(popup) ? showClass.popup : '');\n    if (params.toast) {\n      addClass([document.documentElement, document.body], swalClasses['toast-shown']);\n      addClass(popup, swalClasses.toast);\n    } else {\n      addClass(popup, swalClasses.modal);\n    }\n\n    // Custom class\n    applyCustomClass(popup, params, 'popup');\n    if (typeof params.customClass === 'string') {\n      addClass(popup, params.customClass);\n    }\n\n    // Icon class (#1842)\n    if (params.icon) {\n      addClass(popup, swalClasses[\"icon-\".concat(params.icon)]);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderProgressSteps = (instance, params) => {\n    const progressStepsContainer = getProgressSteps();\n    if (!progressStepsContainer) {\n      return;\n    }\n    const {\n      progressSteps,\n      currentProgressStep\n    } = params;\n    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {\n      hide(progressStepsContainer);\n      return;\n    }\n    show(progressStepsContainer);\n    progressStepsContainer.textContent = '';\n    if (currentProgressStep >= progressSteps.length) {\n      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');\n    }\n    progressSteps.forEach((step, index) => {\n      const stepEl = createStepElement(step);\n      progressStepsContainer.appendChild(stepEl);\n      if (index === currentProgressStep) {\n        addClass(stepEl, swalClasses['active-progress-step']);\n      }\n      if (index !== progressSteps.length - 1) {\n        const lineEl = createLineElement(params);\n        progressStepsContainer.appendChild(lineEl);\n      }\n    });\n  };\n\n  /**\n   * @param {string} step\n   * @returns {HTMLLIElement}\n   */\n  const createStepElement = step => {\n    const stepEl = document.createElement('li');\n    addClass(stepEl, swalClasses['progress-step']);\n    setInnerHtml(stepEl, step);\n    return stepEl;\n  };\n\n  /**\n   * @param {SweetAlertOptions} params\n   * @returns {HTMLLIElement}\n   */\n  const createLineElement = params => {\n    const lineEl = document.createElement('li');\n    addClass(lineEl, swalClasses['progress-step-line']);\n    if (params.progressStepsDistance) {\n      applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);\n    }\n    return lineEl;\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const renderTitle = (instance, params) => {\n    const title = getTitle();\n    if (!title) {\n      return;\n    }\n    toggle(title, params.title || params.titleText, 'block');\n    if (params.title) {\n      parseHtmlToContainer(params.title, title);\n    }\n    if (params.titleText) {\n      title.innerText = params.titleText;\n    }\n\n    // Custom class\n    applyCustomClass(title, params, 'title');\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const render = (instance, params) => {\n    renderPopup(instance, params);\n    renderContainer(instance, params);\n    renderProgressSteps(instance, params);\n    renderIcon(instance, params);\n    renderImage(instance, params);\n    renderTitle(instance, params);\n    renderCloseButton(instance, params);\n    renderContent(instance, params);\n    renderActions(instance, params);\n    renderFooter(instance, params);\n    const popup = getPopup();\n    if (typeof params.didRender === 'function' && popup) {\n      params.didRender(popup);\n    }\n  };\n\n  /*\n   * Global function to determine if SweetAlert2 popup is shown\n   */\n  const isVisible = () => {\n    return isVisible$1(getPopup());\n  };\n\n  /*\n   * Global function to click 'Confirm' button\n   */\n  const clickConfirm = () => {\n    var _dom$getConfirmButton;\n    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();\n  };\n\n  /*\n   * Global function to click 'Deny' button\n   */\n  const clickDeny = () => {\n    var _dom$getDenyButton;\n    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();\n  };\n\n  /*\n   * Global function to click 'Cancel' button\n   */\n  const clickCancel = () => {\n    var _dom$getCancelButton;\n    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();\n  };\n\n  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */\n\n  /** @type {Record<DismissReason, DismissReason>} */\n  const DismissReason = Object.freeze({\n    cancel: 'cancel',\n    backdrop: 'backdrop',\n    close: 'close',\n    esc: 'esc',\n    timer: 'timer'\n  });\n\n  /**\n   * @param {GlobalState} globalState\n   */\n  const removeKeydownHandler = globalState => {\n    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {\n      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {\n        capture: globalState.keydownListenerCapture\n      });\n      globalState.keydownHandlerAdded = false;\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {GlobalState} globalState\n   * @param {SweetAlertOptions} innerParams\n   * @param {*} dismissWith\n   */\n  const addKeydownHandler = (instance, globalState, innerParams, dismissWith) => {\n    removeKeydownHandler(globalState);\n    if (!innerParams.toast) {\n      globalState.keydownHandler = e => keydownHandler(instance, e, dismissWith);\n      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();\n      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;\n      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {\n        capture: globalState.keydownListenerCapture\n      });\n      globalState.keydownHandlerAdded = true;\n    }\n  };\n\n  /**\n   * @param {number} index\n   * @param {number} increment\n   */\n  const setFocus = (index, increment) => {\n    const focusableElements = getFocusableElements();\n    // search for visible elements and select the next possible match\n    if (focusableElements.length) {\n      index = index + increment;\n\n      // rollover to first item\n      if (index === focusableElements.length) {\n        index = 0;\n\n        // go to last item\n      } else if (index === -1) {\n        index = focusableElements.length - 1;\n      }\n      focusableElements[index].focus();\n      return;\n    }\n    // no visible focusable elements, focus the popup\n    getPopup().focus();\n  };\n  const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];\n  const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {KeyboardEvent} event\n   * @param {Function} dismissWith\n   */\n  const keydownHandler = (instance, event, dismissWith) => {\n    const innerParams = privateProps.innerParams.get(instance);\n    if (!innerParams) {\n      return; // This instance has already been destroyed\n    }\n\n    // Ignore keydown during IME composition\n    // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition\n    // https://github.com/sweetalert2/sweetalert2/issues/720\n    // https://github.com/sweetalert2/sweetalert2/issues/2406\n    if (event.isComposing || event.keyCode === 229) {\n      return;\n    }\n    if (innerParams.stopKeydownPropagation) {\n      event.stopPropagation();\n    }\n\n    // ENTER\n    if (event.key === 'Enter') {\n      handleEnter(instance, event, innerParams);\n    }\n\n    // TAB\n    else if (event.key === 'Tab') {\n      handleTab(event);\n    }\n\n    // ARROWS - switch focus between buttons\n    else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {\n      handleArrows(event.key);\n    }\n\n    // ESC\n    else if (event.key === 'Escape') {\n      handleEsc(event, innerParams, dismissWith);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {KeyboardEvent} event\n   * @param {SweetAlertOptions} innerParams\n   */\n  const handleEnter = (instance, event, innerParams) => {\n    // https://github.com/sweetalert2/sweetalert2/issues/2386\n    if (!callIfFunction(innerParams.allowEnterKey)) {\n      return;\n    }\n    if (event.target && instance.getInput() && event.target instanceof HTMLElement && event.target.outerHTML === instance.getInput().outerHTML) {\n      if (['textarea', 'file'].includes(innerParams.input)) {\n        return; // do not submit\n      }\n\n      clickConfirm();\n      event.preventDefault();\n    }\n  };\n\n  /**\n   * @param {KeyboardEvent} event\n   */\n  const handleTab = event => {\n    const targetElement = event.target;\n    const focusableElements = getFocusableElements();\n    let btnIndex = -1;\n    for (let i = 0; i < focusableElements.length; i++) {\n      if (targetElement === focusableElements[i]) {\n        btnIndex = i;\n        break;\n      }\n    }\n\n    // Cycle to the next button\n    if (!event.shiftKey) {\n      setFocus(btnIndex, 1);\n    }\n\n    // Cycle to the prev button\n    else {\n      setFocus(btnIndex, -1);\n    }\n    event.stopPropagation();\n    event.preventDefault();\n  };\n\n  /**\n   * @param {string} key\n   */\n  const handleArrows = key => {\n    const confirmButton = getConfirmButton();\n    const denyButton = getDenyButton();\n    const cancelButton = getCancelButton();\n    /** @type HTMLElement[] */\n    const buttons = [confirmButton, denyButton, cancelButton];\n    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {\n      return;\n    }\n    const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';\n    let buttonToFocus = document.activeElement;\n    for (let i = 0; i < getActions().children.length; i++) {\n      buttonToFocus = buttonToFocus[sibling];\n      if (!buttonToFocus) {\n        return;\n      }\n      if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {\n        break;\n      }\n    }\n    if (buttonToFocus instanceof HTMLButtonElement) {\n      buttonToFocus.focus();\n    }\n  };\n\n  /**\n   * @param {KeyboardEvent} event\n   * @param {SweetAlertOptions} innerParams\n   * @param {Function} dismissWith\n   */\n  const handleEsc = (event, innerParams, dismissWith) => {\n    if (callIfFunction(innerParams.allowEscapeKey)) {\n      event.preventDefault();\n      dismissWith(DismissReason.esc);\n    }\n  };\n\n  /**\n   * This module contains `WeakMap`s for each effectively-\"private  property\" that a `Swal` has.\n   * For example, to set the private property \"foo\" of `this` to \"bar\", you can `privateProps.foo.set(this, 'bar')`\n   * This is the approach that Babel will probably take to implement private methods/fields\n   *   https://github.com/tc39/proposal-private-methods\n   *   https://github.com/babel/babel/pull/7555\n   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*\n   *   then we can use that language feature.\n   */\n\n  var privateMethods = {\n    swalPromiseResolve: new WeakMap(),\n    swalPromiseReject: new WeakMap()\n  };\n\n  // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/\n  // Adding aria-hidden=\"true\" to elements outside of the active modal dialog ensures that\n  // elements not within the active modal dialog will not be surfaced if a user opens a screen\n  // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.\n\n  const setAriaHidden = () => {\n    const bodyChildren = Array.from(document.body.children);\n    bodyChildren.forEach(el => {\n      if (el === getContainer() || el.contains(getContainer())) {\n        return;\n      }\n      if (el.hasAttribute('aria-hidden')) {\n        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');\n      }\n      el.setAttribute('aria-hidden', 'true');\n    });\n  };\n  const unsetAriaHidden = () => {\n    const bodyChildren = Array.from(document.body.children);\n    bodyChildren.forEach(el => {\n      if (el.hasAttribute('data-previous-aria-hidden')) {\n        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');\n        el.removeAttribute('data-previous-aria-hidden');\n      } else {\n        el.removeAttribute('aria-hidden');\n      }\n    });\n  };\n\n  // @ts-ignore\n  const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394\n\n  /**\n   * Fix iOS scrolling\n   * http://stackoverflow.com/q/39626302\n   */\n  const iOSfix = () => {\n    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {\n      const offset = document.body.scrollTop;\n      document.body.style.top = \"\".concat(offset * -1, \"px\");\n      addClass(document.body, swalClasses.iosfix);\n      lockBodyScroll();\n    }\n  };\n\n  /**\n   * https://github.com/sweetalert2/sweetalert2/issues/1246\n   */\n  const lockBodyScroll = () => {\n    const container = getContainer();\n    if (!container) {\n      return;\n    }\n    /** @type {boolean} */\n    let preventTouchMove;\n    /**\n     * @param {TouchEvent} event\n     */\n    container.ontouchstart = event => {\n      preventTouchMove = shouldPreventTouchMove(event);\n    };\n    /**\n     * @param {TouchEvent} event\n     */\n    container.ontouchmove = event => {\n      if (preventTouchMove) {\n        event.preventDefault();\n        event.stopPropagation();\n      }\n    };\n  };\n\n  /**\n   * @param {TouchEvent} event\n   * @returns {boolean}\n   */\n  const shouldPreventTouchMove = event => {\n    const target = event.target;\n    const container = getContainer();\n    const htmlContainer = getHtmlContainer();\n    if (!container || !htmlContainer) {\n      return false;\n    }\n    if (isStylus(event) || isZoom(event)) {\n      return false;\n    }\n    if (target === container) {\n      return true;\n    }\n    if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&\n    // #1603\n    target.tagName !== 'TEXTAREA' &&\n    // #2266\n    !(isScrollable(htmlContainer) &&\n    // #1944\n    htmlContainer.contains(target))) {\n      return true;\n    }\n    return false;\n  };\n\n  /**\n   * https://github.com/sweetalert2/sweetalert2/issues/1786\n   *\n   * @param {*} event\n   * @returns {boolean}\n   */\n  const isStylus = event => {\n    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';\n  };\n\n  /**\n   * https://github.com/sweetalert2/sweetalert2/issues/1891\n   *\n   * @param {TouchEvent} event\n   * @returns {boolean}\n   */\n  const isZoom = event => {\n    return event.touches && event.touches.length > 1;\n  };\n  const undoIOSfix = () => {\n    if (hasClass(document.body, swalClasses.iosfix)) {\n      const offset = parseInt(document.body.style.top, 10);\n      removeClass(document.body, swalClasses.iosfix);\n      document.body.style.top = '';\n      document.body.scrollTop = offset * -1;\n    }\n  };\n\n  /**\n   * Measure scrollbar width for padding body during modal show/hide\n   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js\n   *\n   * @returns {number}\n   */\n  const measureScrollbar = () => {\n    const scrollDiv = document.createElement('div');\n    scrollDiv.className = swalClasses['scrollbar-measure'];\n    document.body.appendChild(scrollDiv);\n    const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;\n    document.body.removeChild(scrollDiv);\n    return scrollbarWidth;\n  };\n\n  /**\n   * Remember state in cases where opening and handling a modal will fiddle with it.\n   * @type {number | null}\n   */\n  let previousBodyPadding = null;\n\n  /**\n   * @param {string} initialBodyOverflow\n   */\n  const replaceScrollbarWithPadding = initialBodyOverflow => {\n    // for queues, do not do this more than once\n    if (previousBodyPadding !== null) {\n      return;\n    }\n    // if the body has overflow\n    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663\n    ) {\n      // add padding so the content doesn't shift after removal of scrollbar\n      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));\n      document.body.style.paddingRight = \"\".concat(previousBodyPadding + measureScrollbar(), \"px\");\n    }\n  };\n  const undoReplaceScrollbarWithPadding = () => {\n    if (previousBodyPadding !== null) {\n      document.body.style.paddingRight = \"\".concat(previousBodyPadding, \"px\");\n      previousBodyPadding = null;\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {HTMLElement} container\n   * @param {boolean} returnFocus\n   * @param {Function} didClose\n   */\n  function removePopupAndResetState(instance, container, returnFocus, didClose) {\n    if (isToast()) {\n      triggerDidCloseAndDispose(instance, didClose);\n    } else {\n      restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));\n      removeKeydownHandler(globalState);\n    }\n\n    // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088\n    // for some reason removing the container in Safari will scroll the document to bottom\n    if (isSafariOrIOS) {\n      container.setAttribute('style', 'display:none !important');\n      container.removeAttribute('class');\n      container.innerHTML = '';\n    } else {\n      container.remove();\n    }\n    if (isModal()) {\n      undoReplaceScrollbarWithPadding();\n      undoIOSfix();\n      unsetAriaHidden();\n    }\n    removeBodyClasses();\n  }\n\n  /**\n   * Remove SweetAlert2 classes from body\n   */\n  function removeBodyClasses() {\n    removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);\n  }\n\n  /**\n   * Instance method to close sweetAlert\n   *\n   * @param {any} resolveValue\n   */\n  function close(resolveValue) {\n    resolveValue = prepareResolveValue(resolveValue);\n    const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);\n    const didClose = triggerClosePopup(this);\n    if (this.isAwaitingPromise) {\n      // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335\n      if (!resolveValue.isDismissed) {\n        handleAwaitingPromise(this);\n        swalPromiseResolve(resolveValue);\n      }\n    } else if (didClose) {\n      // Resolve Swal promise\n      swalPromiseResolve(resolveValue);\n    }\n  }\n  const triggerClosePopup = instance => {\n    const popup = getPopup();\n    if (!popup) {\n      return false;\n    }\n    const innerParams = privateProps.innerParams.get(instance);\n    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {\n      return false;\n    }\n    removeClass(popup, innerParams.showClass.popup);\n    addClass(popup, innerParams.hideClass.popup);\n    const backdrop = getContainer();\n    removeClass(backdrop, innerParams.showClass.backdrop);\n    addClass(backdrop, innerParams.hideClass.backdrop);\n    handlePopupAnimation(instance, popup, innerParams);\n    return true;\n  };\n\n  /**\n   * @param {any} error\n   */\n  function rejectPromise(error) {\n    const rejectPromise = privateMethods.swalPromiseReject.get(this);\n    handleAwaitingPromise(this);\n    if (rejectPromise) {\n      // Reject Swal promise\n      rejectPromise(error);\n    }\n  }\n\n  /**\n   * @param {SweetAlert} instance\n   */\n  const handleAwaitingPromise = instance => {\n    if (instance.isAwaitingPromise) {\n      delete instance.isAwaitingPromise;\n      // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335\n      if (!privateProps.innerParams.get(instance)) {\n        instance._destroy();\n      }\n    }\n  };\n\n  /**\n   * @param {any} resolveValue\n   * @returns {SweetAlertResult}\n   */\n  const prepareResolveValue = resolveValue => {\n    // When user calls Swal.close()\n    if (typeof resolveValue === 'undefined') {\n      return {\n        isConfirmed: false,\n        isDenied: false,\n        isDismissed: true\n      };\n    }\n    return Object.assign({\n      isConfirmed: false,\n      isDenied: false,\n      isDismissed: false\n    }, resolveValue);\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {HTMLElement} popup\n   * @param {SweetAlertOptions} innerParams\n   */\n  const handlePopupAnimation = (instance, popup, innerParams) => {\n    const container = getContainer();\n    // If animation is supported, animate\n    const animationIsSupported = animationEndEvent && hasCssAnimation(popup);\n    if (typeof innerParams.willClose === 'function') {\n      innerParams.willClose(popup);\n    }\n    if (animationIsSupported) {\n      animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);\n    } else {\n      // Otherwise, remove immediately\n      removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {HTMLElement} popup\n   * @param {HTMLElement} container\n   * @param {boolean} returnFocus\n   * @param {Function} didClose\n   */\n  const animatePopup = (instance, popup, container, returnFocus, didClose) => {\n    if (!animationEndEvent) {\n      return;\n    }\n    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);\n    popup.addEventListener(animationEndEvent, function (e) {\n      if (e.target === popup) {\n        globalState.swalCloseEventFinishedCallback();\n        delete globalState.swalCloseEventFinishedCallback;\n      }\n    });\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {Function} didClose\n   */\n  const triggerDidCloseAndDispose = (instance, didClose) => {\n    setTimeout(() => {\n      if (typeof didClose === 'function') {\n        didClose.bind(instance.params)();\n      }\n      // instance might have been destroyed already\n      if (instance._destroy) {\n        instance._destroy();\n      }\n    });\n  };\n\n  /**\n   * Shows loader (spinner), this is useful with AJAX requests.\n   * By default the loader be shown instead of the \"Confirm\" button.\n   *\n   * @param {HTMLButtonElement | null} [buttonToReplace]\n   */\n  const showLoading = buttonToReplace => {\n    let popup = getPopup();\n    if (!popup) {\n      new Swal(); // eslint-disable-line no-new\n    }\n\n    popup = getPopup();\n    if (!popup) {\n      return;\n    }\n    const loader = getLoader();\n    if (isToast()) {\n      hide(getIcon());\n    } else {\n      replaceButton(popup, buttonToReplace);\n    }\n    show(loader);\n    popup.setAttribute('data-loading', 'true');\n    popup.setAttribute('aria-busy', 'true');\n    popup.focus();\n  };\n\n  /**\n   * @param {HTMLElement} popup\n   * @param {HTMLButtonElement | null} [buttonToReplace]\n   */\n  const replaceButton = (popup, buttonToReplace) => {\n    const actions = getActions();\n    const loader = getLoader();\n    if (!actions || !loader) {\n      return;\n    }\n    if (!buttonToReplace && isVisible$1(getConfirmButton())) {\n      buttonToReplace = getConfirmButton();\n    }\n    show(actions);\n    if (buttonToReplace) {\n      hide(buttonToReplace);\n      loader.setAttribute('data-button-to-replace', buttonToReplace.className);\n      actions.insertBefore(loader, buttonToReplace);\n    }\n    addClass([popup, actions], swalClasses.loading);\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const handleInputOptionsAndValue = (instance, params) => {\n    if (params.input === 'select' || params.input === 'radio') {\n      handleInputOptions(instance, params);\n    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {\n      showLoading(getConfirmButton());\n      handleInputValue(instance, params);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} innerParams\n   * @returns {SweetAlertInputValue}\n   */\n  const getInputValue = (instance, innerParams) => {\n    const input = instance.getInput();\n    if (!input) {\n      return null;\n    }\n    switch (innerParams.input) {\n      case 'checkbox':\n        return getCheckboxValue(input);\n      case 'radio':\n        return getRadioValue(input);\n      case 'file':\n        return getFileValue(input);\n      default:\n        return innerParams.inputAutoTrim ? input.value.trim() : input.value;\n    }\n  };\n\n  /**\n   * @param {HTMLInputElement} input\n   * @returns {number}\n   */\n  const getCheckboxValue = input => input.checked ? 1 : 0;\n\n  /**\n   * @param {HTMLInputElement} input\n   * @returns {string | null}\n   */\n  const getRadioValue = input => input.checked ? input.value : null;\n\n  /**\n   * @param {HTMLInputElement} input\n   * @returns {FileList | File | null}\n   */\n  const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const handleInputOptions = (instance, params) => {\n    const popup = getPopup();\n    if (!popup) {\n      return;\n    }\n    /**\n     * @param {Record<string, any>} inputOptions\n     */\n    const processInputOptions = inputOptions => {\n      if (params.input === 'select') {\n        populateSelectOptions(popup, formatInputOptions(inputOptions), params);\n      } else if (params.input === 'radio') {\n        populateRadioOptions(popup, formatInputOptions(inputOptions), params);\n      }\n    };\n    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {\n      showLoading(getConfirmButton());\n      asPromise(params.inputOptions).then(inputOptions => {\n        instance.hideLoading();\n        processInputOptions(inputOptions);\n      });\n    } else if (typeof params.inputOptions === 'object') {\n      processInputOptions(params.inputOptions);\n    } else {\n      error(\"Unexpected type of inputOptions! Expected object, Map or Promise, got \".concat(typeof params.inputOptions));\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertOptions} params\n   */\n  const handleInputValue = (instance, params) => {\n    const input = instance.getInput();\n    if (!input) {\n      return;\n    }\n    hide(input);\n    asPromise(params.inputValue).then(inputValue => {\n      input.value = params.input === 'number' ? \"\".concat(parseFloat(inputValue) || 0) : \"\".concat(inputValue);\n      show(input);\n      input.focus();\n      instance.hideLoading();\n    }).catch(err => {\n      error(\"Error in inputValue promise: \".concat(err));\n      input.value = '';\n      show(input);\n      input.focus();\n      instance.hideLoading();\n    });\n  };\n\n  /**\n   * @param {HTMLElement} popup\n   * @param {InputOptionFlattened[]} inputOptions\n   * @param {SweetAlertOptions} params\n   */\n  function populateSelectOptions(popup, inputOptions, params) {\n    const select = getDirectChildByClass(popup, swalClasses.select);\n    if (!select) {\n      return;\n    }\n    /**\n     * @param {HTMLElement} parent\n     * @param {string} optionLabel\n     * @param {string} optionValue\n     */\n    const renderOption = (parent, optionLabel, optionValue) => {\n      const option = document.createElement('option');\n      option.value = optionValue;\n      setInnerHtml(option, optionLabel);\n      option.selected = isSelected(optionValue, params.inputValue);\n      parent.appendChild(option);\n    };\n    inputOptions.forEach(inputOption => {\n      const optionValue = inputOption[0];\n      const optionLabel = inputOption[1];\n      // <optgroup> spec:\n      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6\n      // \"...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)...\"\n      // check whether this is a <optgroup>\n      if (Array.isArray(optionLabel)) {\n        // if it is an array, then it is an <optgroup>\n        const optgroup = document.createElement('optgroup');\n        optgroup.label = optionValue;\n        optgroup.disabled = false; // not configurable for now\n        select.appendChild(optgroup);\n        optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));\n      } else {\n        // case of <option>\n        renderOption(select, optionLabel, optionValue);\n      }\n    });\n    select.focus();\n  }\n\n  /**\n   * @param {HTMLElement} popup\n   * @param {InputOptionFlattened[]} inputOptions\n   * @param {SweetAlertOptions} params\n   */\n  function populateRadioOptions(popup, inputOptions, params) {\n    const radio = getDirectChildByClass(popup, swalClasses.radio);\n    if (!radio) {\n      return;\n    }\n    inputOptions.forEach(inputOption => {\n      const radioValue = inputOption[0];\n      const radioLabel = inputOption[1];\n      const radioInput = document.createElement('input');\n      const radioLabelElement = document.createElement('label');\n      radioInput.type = 'radio';\n      radioInput.name = swalClasses.radio;\n      radioInput.value = radioValue;\n      if (isSelected(radioValue, params.inputValue)) {\n        radioInput.checked = true;\n      }\n      const label = document.createElement('span');\n      setInnerHtml(label, radioLabel);\n      label.className = swalClasses.label;\n      radioLabelElement.appendChild(radioInput);\n      radioLabelElement.appendChild(label);\n      radio.appendChild(radioLabelElement);\n    });\n    const radios = radio.querySelectorAll('input');\n    if (radios.length) {\n      radios[0].focus();\n    }\n  }\n\n  /**\n   * Converts `inputOptions` into an array of `[value, label]`s\n   *\n   * @param {Record<string, any>} inputOptions\n   * @typedef {string[]} InputOptionFlattened\n   * @returns {InputOptionFlattened[]}\n   */\n  const formatInputOptions = inputOptions => {\n    /** @type {InputOptionFlattened[]} */\n    const result = [];\n    if (inputOptions instanceof Map) {\n      inputOptions.forEach((value, key) => {\n        let valueFormatted = value;\n        if (typeof valueFormatted === 'object') {\n          // case of <optgroup>\n          valueFormatted = formatInputOptions(valueFormatted);\n        }\n        result.push([key, valueFormatted]);\n      });\n    } else {\n      Object.keys(inputOptions).forEach(key => {\n        let valueFormatted = inputOptions[key];\n        if (typeof valueFormatted === 'object') {\n          // case of <optgroup>\n          valueFormatted = formatInputOptions(valueFormatted);\n        }\n        result.push([key, valueFormatted]);\n      });\n    }\n    return result;\n  };\n\n  /**\n   * @param {string} optionValue\n   * @param {SweetAlertInputValue} inputValue\n   * @returns {boolean}\n   */\n  const isSelected = (optionValue, inputValue) => {\n    return !!inputValue && inputValue.toString() === optionValue.toString();\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   */\n  const handleConfirmButtonClick = instance => {\n    const innerParams = privateProps.innerParams.get(instance);\n    instance.disableButtons();\n    if (innerParams.input) {\n      handleConfirmOrDenyWithInput(instance, 'confirm');\n    } else {\n      confirm(instance, true);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   */\n  const handleDenyButtonClick = instance => {\n    const innerParams = privateProps.innerParams.get(instance);\n    instance.disableButtons();\n    if (innerParams.returnInputValueOnDeny) {\n      handleConfirmOrDenyWithInput(instance, 'deny');\n    } else {\n      deny(instance, false);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {Function} dismissWith\n   */\n  const handleCancelButtonClick = (instance, dismissWith) => {\n    instance.disableButtons();\n    dismissWith(DismissReason.cancel);\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {'confirm' | 'deny'} type\n   */\n  const handleConfirmOrDenyWithInput = (instance, type) => {\n    const innerParams = privateProps.innerParams.get(instance);\n    if (!innerParams.input) {\n      error(\"The \\\"input\\\" parameter is needed to be set when using returnInputValueOn\".concat(capitalizeFirstLetter(type)));\n      return;\n    }\n    const input = instance.getInput();\n    const inputValue = getInputValue(instance, innerParams);\n    if (innerParams.inputValidator) {\n      handleInputValidator(instance, inputValue, type);\n    } else if (input && !input.checkValidity()) {\n      instance.enableButtons();\n      instance.showValidationMessage(innerParams.validationMessage);\n    } else if (type === 'deny') {\n      deny(instance, inputValue);\n    } else {\n      confirm(instance, inputValue);\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {SweetAlertInputValue | null} inputValue\n   * @param {'confirm' | 'deny'} type\n   */\n  const handleInputValidator = (instance, inputValue, type) => {\n    const innerParams = privateProps.innerParams.get(instance);\n    instance.disableInput();\n    const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));\n    validationPromise.then(validationMessage => {\n      instance.enableButtons();\n      instance.enableInput();\n      if (validationMessage) {\n        instance.showValidationMessage(validationMessage);\n      } else if (type === 'deny') {\n        deny(instance, inputValue);\n      } else {\n        confirm(instance, inputValue);\n      }\n    });\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {any} value\n   */\n  const deny = (instance, value) => {\n    const innerParams = privateProps.innerParams.get(instance || undefined);\n    if (innerParams.showLoaderOnDeny) {\n      showLoading(getDenyButton());\n    }\n    if (innerParams.preDeny) {\n      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received\n      const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));\n      preDenyPromise.then(preDenyValue => {\n        if (preDenyValue === false) {\n          instance.hideLoading();\n          handleAwaitingPromise(instance);\n        } else {\n          instance.close({\n            isDenied: true,\n            value: typeof preDenyValue === 'undefined' ? value : preDenyValue\n          });\n        }\n      }).catch(error => rejectWith(instance || undefined, error));\n    } else {\n      instance.close({\n        isDenied: true,\n        value\n      });\n    }\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {any} value\n   */\n  const succeedWith = (instance, value) => {\n    instance.close({\n      isConfirmed: true,\n      value\n    });\n  };\n\n  /**\n   *\n   * @param {SweetAlert} instance\n   * @param {string} error\n   */\n  const rejectWith = (instance, error) => {\n    instance.rejectPromise(error);\n  };\n\n  /**\n   *\n   * @param {SweetAlert} instance\n   * @param {any} value\n   */\n  const confirm = (instance, value) => {\n    const innerParams = privateProps.innerParams.get(instance || undefined);\n    if (innerParams.showLoaderOnConfirm) {\n      showLoading();\n    }\n    if (innerParams.preConfirm) {\n      instance.resetValidationMessage();\n      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received\n      const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));\n      preConfirmPromise.then(preConfirmValue => {\n        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {\n          instance.hideLoading();\n          handleAwaitingPromise(instance);\n        } else {\n          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);\n        }\n      }).catch(error => rejectWith(instance || undefined, error));\n    } else {\n      succeedWith(instance, value);\n    }\n  };\n\n  /**\n   * Hides loader and shows back the button which was hidden by .showLoading()\n   */\n  function hideLoading() {\n    // do nothing if popup is closed\n    const innerParams = privateProps.innerParams.get(this);\n    if (!innerParams) {\n      return;\n    }\n    const domCache = privateProps.domCache.get(this);\n    hide(domCache.loader);\n    if (isToast()) {\n      if (innerParams.icon) {\n        show(getIcon());\n      }\n    } else {\n      showRelatedButton(domCache);\n    }\n    removeClass([domCache.popup, domCache.actions], swalClasses.loading);\n    domCache.popup.removeAttribute('aria-busy');\n    domCache.popup.removeAttribute('data-loading');\n    domCache.confirmButton.disabled = false;\n    domCache.denyButton.disabled = false;\n    domCache.cancelButton.disabled = false;\n  }\n  const showRelatedButton = domCache => {\n    const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));\n    if (buttonToReplace.length) {\n      show(buttonToReplace[0], 'inline-block');\n    } else if (allButtonsAreHidden()) {\n      hide(domCache.actions);\n    }\n  };\n\n  /**\n   * Gets the input DOM node, this method works with input parameter.\n   *\n   * @returns {HTMLInputElement | null}\n   */\n  function getInput() {\n    const innerParams = privateProps.innerParams.get(this);\n    const domCache = privateProps.domCache.get(this);\n    if (!domCache) {\n      return null;\n    }\n    return getInput$1(domCache.popup, innerParams.input);\n  }\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {string[]} buttons\n   * @param {boolean} disabled\n   */\n  function setButtonsDisabled(instance, buttons, disabled) {\n    const domCache = privateProps.domCache.get(instance);\n    buttons.forEach(button => {\n      domCache[button].disabled = disabled;\n    });\n  }\n\n  /**\n   * @param {HTMLInputElement | null} input\n   * @param {boolean} disabled\n   */\n  function setInputDisabled(input, disabled) {\n    const popup = getPopup();\n    if (!popup || !input) {\n      return;\n    }\n    if (input.type === 'radio') {\n      /** @type {NodeListOf<HTMLInputElement>} */\n      const radios = popup.querySelectorAll(\"[name=\\\"\".concat(swalClasses.radio, \"\\\"]\"));\n      for (let i = 0; i < radios.length; i++) {\n        radios[i].disabled = disabled;\n      }\n    } else {\n      input.disabled = disabled;\n    }\n  }\n\n  /**\n   * Enable all the buttons\n   * @this {SweetAlert}\n   */\n  function enableButtons() {\n    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);\n  }\n\n  /**\n   * Disable all the buttons\n   * @this {SweetAlert}\n   */\n  function disableButtons() {\n    setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);\n  }\n\n  /**\n   * Enable the input field\n   * @this {SweetAlert}\n   */\n  function enableInput() {\n    setInputDisabled(this.getInput(), false);\n  }\n\n  /**\n   * Disable the input field\n   * @this {SweetAlert}\n   */\n  function disableInput() {\n    setInputDisabled(this.getInput(), true);\n  }\n\n  /**\n   * Show block with validation message\n   *\n   * @param {string} error\n   */\n  function showValidationMessage(error) {\n    const domCache = privateProps.domCache.get(this);\n    const params = privateProps.innerParams.get(this);\n    setInnerHtml(domCache.validationMessage, error);\n    domCache.validationMessage.className = swalClasses['validation-message'];\n    if (params.customClass && params.customClass.validationMessage) {\n      addClass(domCache.validationMessage, params.customClass.validationMessage);\n    }\n    show(domCache.validationMessage);\n    const input = this.getInput();\n    if (input) {\n      input.setAttribute('aria-invalid', true);\n      input.setAttribute('aria-describedby', swalClasses['validation-message']);\n      focusInput(input);\n      addClass(input, swalClasses.inputerror);\n    }\n  }\n\n  /**\n   * Hide block with validation message\n   */\n  function resetValidationMessage() {\n    const domCache = privateProps.domCache.get(this);\n    if (domCache.validationMessage) {\n      hide(domCache.validationMessage);\n    }\n    const input = this.getInput();\n    if (input) {\n      input.removeAttribute('aria-invalid');\n      input.removeAttribute('aria-describedby');\n      removeClass(input, swalClasses.inputerror);\n    }\n  }\n\n  const defaultParams = {\n    title: '',\n    titleText: '',\n    text: '',\n    html: '',\n    footer: '',\n    icon: undefined,\n    iconColor: undefined,\n    iconHtml: undefined,\n    template: undefined,\n    toast: false,\n    showClass: {\n      popup: 'swal2-show',\n      backdrop: 'swal2-backdrop-show',\n      icon: 'swal2-icon-show'\n    },\n    hideClass: {\n      popup: 'swal2-hide',\n      backdrop: 'swal2-backdrop-hide',\n      icon: 'swal2-icon-hide'\n    },\n    customClass: {},\n    target: 'body',\n    color: undefined,\n    backdrop: true,\n    heightAuto: true,\n    allowOutsideClick: true,\n    allowEscapeKey: true,\n    allowEnterKey: true,\n    stopKeydownPropagation: true,\n    keydownListenerCapture: false,\n    showConfirmButton: true,\n    showDenyButton: false,\n    showCancelButton: false,\n    preConfirm: undefined,\n    preDeny: undefined,\n    confirmButtonText: 'OK',\n    confirmButtonAriaLabel: '',\n    confirmButtonColor: undefined,\n    denyButtonText: 'No',\n    denyButtonAriaLabel: '',\n    denyButtonColor: undefined,\n    cancelButtonText: 'Cancel',\n    cancelButtonAriaLabel: '',\n    cancelButtonColor: undefined,\n    buttonsStyling: true,\n    reverseButtons: false,\n    focusConfirm: true,\n    focusDeny: false,\n    focusCancel: false,\n    returnFocus: true,\n    showCloseButton: false,\n    closeButtonHtml: '&times;',\n    closeButtonAriaLabel: 'Close this dialog',\n    loaderHtml: '',\n    showLoaderOnConfirm: false,\n    showLoaderOnDeny: false,\n    imageUrl: undefined,\n    imageWidth: undefined,\n    imageHeight: undefined,\n    imageAlt: '',\n    timer: undefined,\n    timerProgressBar: false,\n    width: undefined,\n    padding: undefined,\n    background: undefined,\n    input: undefined,\n    inputPlaceholder: '',\n    inputLabel: '',\n    inputValue: '',\n    inputOptions: {},\n    inputAutoFocus: true,\n    inputAutoTrim: true,\n    inputAttributes: {},\n    inputValidator: undefined,\n    returnInputValueOnDeny: false,\n    validationMessage: undefined,\n    grow: false,\n    position: 'center',\n    progressSteps: [],\n    currentProgressStep: undefined,\n    progressStepsDistance: undefined,\n    willOpen: undefined,\n    didOpen: undefined,\n    didRender: undefined,\n    willClose: undefined,\n    didClose: undefined,\n    didDestroy: undefined,\n    scrollbarPadding: true\n  };\n  const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];\n\n  /** @type {Record<string, string>} */\n  const deprecatedParams = {};\n  const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];\n\n  /**\n   * Is valid parameter\n   *\n   * @param {string} paramName\n   * @returns {boolean}\n   */\n  const isValidParameter = paramName => {\n    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);\n  };\n\n  /**\n   * Is valid parameter for Swal.update() method\n   *\n   * @param {string} paramName\n   * @returns {boolean}\n   */\n  const isUpdatableParameter = paramName => {\n    return updatableParams.indexOf(paramName) !== -1;\n  };\n\n  /**\n   * Is deprecated parameter\n   *\n   * @param {string} paramName\n   * @returns {string | undefined}\n   */\n  const isDeprecatedParameter = paramName => {\n    return deprecatedParams[paramName];\n  };\n\n  /**\n   * @param {string} param\n   */\n  const checkIfParamIsValid = param => {\n    if (!isValidParameter(param)) {\n      warn(\"Unknown parameter \\\"\".concat(param, \"\\\"\"));\n    }\n  };\n\n  /**\n   * @param {string} param\n   */\n  const checkIfToastParamIsValid = param => {\n    if (toastIncompatibleParams.includes(param)) {\n      warn(\"The parameter \\\"\".concat(param, \"\\\" is incompatible with toasts\"));\n    }\n  };\n\n  /**\n   * @param {string} param\n   */\n  const checkIfParamIsDeprecated = param => {\n    const isDeprecated = isDeprecatedParameter(param);\n    if (isDeprecated) {\n      warnAboutDeprecation(param, isDeprecated);\n    }\n  };\n\n  /**\n   * Show relevant warnings for given params\n   *\n   * @param {SweetAlertOptions} params\n   */\n  const showWarningsForParams = params => {\n    if (params.backdrop === false && params.allowOutsideClick) {\n      warn('\"allowOutsideClick\" parameter requires `backdrop` parameter to be set to `true`');\n    }\n    for (const param in params) {\n      checkIfParamIsValid(param);\n      if (params.toast) {\n        checkIfToastParamIsValid(param);\n      }\n      checkIfParamIsDeprecated(param);\n    }\n  };\n\n  /**\n   * Updates popup parameters.\n   *\n   * @param {SweetAlertOptions} params\n   */\n  function update(params) {\n    const popup = getPopup();\n    const innerParams = privateProps.innerParams.get(this);\n    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {\n      warn(\"You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.\");\n      return;\n    }\n    const validUpdatableParams = filterValidParams(params);\n    const updatedParams = Object.assign({}, innerParams, validUpdatableParams);\n    render(this, updatedParams);\n    privateProps.innerParams.set(this, updatedParams);\n    Object.defineProperties(this, {\n      params: {\n        value: Object.assign({}, this.params, params),\n        writable: false,\n        enumerable: true\n      }\n    });\n  }\n\n  /**\n   * @param {SweetAlertOptions} params\n   * @returns {SweetAlertOptions}\n   */\n  const filterValidParams = params => {\n    const validUpdatableParams = {};\n    Object.keys(params).forEach(param => {\n      if (isUpdatableParameter(param)) {\n        validUpdatableParams[param] = params[param];\n      } else {\n        warn(\"Invalid parameter to update: \".concat(param));\n      }\n    });\n    return validUpdatableParams;\n  };\n\n  /**\n   * Dispose the current SweetAlert2 instance\n   */\n  function _destroy() {\n    const domCache = privateProps.domCache.get(this);\n    const innerParams = privateProps.innerParams.get(this);\n    if (!innerParams) {\n      disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335\n      return; // This instance has already been destroyed\n    }\n\n    // Check if there is another Swal closing\n    if (domCache.popup && globalState.swalCloseEventFinishedCallback) {\n      globalState.swalCloseEventFinishedCallback();\n      delete globalState.swalCloseEventFinishedCallback;\n    }\n    if (typeof innerParams.didDestroy === 'function') {\n      innerParams.didDestroy();\n    }\n    disposeSwal(this);\n  }\n\n  /**\n   * @param {SweetAlert} instance\n   */\n  const disposeSwal = instance => {\n    disposeWeakMaps(instance);\n    // Unset this.params so GC will dispose it (#1569)\n    delete instance.params;\n    // Unset globalState props so GC will dispose globalState (#1569)\n    delete globalState.keydownHandler;\n    delete globalState.keydownTarget;\n    // Unset currentInstance\n    delete globalState.currentInstance;\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   */\n  const disposeWeakMaps = instance => {\n    // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335\n    if (instance.isAwaitingPromise) {\n      unsetWeakMaps(privateProps, instance);\n      instance.isAwaitingPromise = true;\n    } else {\n      unsetWeakMaps(privateMethods, instance);\n      unsetWeakMaps(privateProps, instance);\n      delete instance.isAwaitingPromise;\n      // Unset instance methods\n      delete instance.disableButtons;\n      delete instance.enableButtons;\n      delete instance.getInput;\n      delete instance.disableInput;\n      delete instance.enableInput;\n      delete instance.hideLoading;\n      delete instance.disableLoading;\n      delete instance.showValidationMessage;\n      delete instance.resetValidationMessage;\n      delete instance.close;\n      delete instance.closePopup;\n      delete instance.closeModal;\n      delete instance.closeToast;\n      delete instance.rejectPromise;\n      delete instance.update;\n      delete instance._destroy;\n    }\n  };\n\n  /**\n   * @param {object} obj\n   * @param {SweetAlert} instance\n   */\n  const unsetWeakMaps = (obj, instance) => {\n    for (const i in obj) {\n      obj[i].delete(instance);\n    }\n  };\n\n  var instanceMethods = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    _destroy: _destroy,\n    close: close,\n    closeModal: close,\n    closePopup: close,\n    closeToast: close,\n    disableButtons: disableButtons,\n    disableInput: disableInput,\n    disableLoading: hideLoading,\n    enableButtons: enableButtons,\n    enableInput: enableInput,\n    getInput: getInput,\n    handleAwaitingPromise: handleAwaitingPromise,\n    hideLoading: hideLoading,\n    rejectPromise: rejectPromise,\n    resetValidationMessage: resetValidationMessage,\n    showValidationMessage: showValidationMessage,\n    update: update\n  });\n\n  const handlePopupClick = (instance, domCache, dismissWith) => {\n    const innerParams = privateProps.innerParams.get(instance);\n    if (innerParams.toast) {\n      handleToastClick(instance, domCache, dismissWith);\n    } else {\n      // Ignore click events that had mousedown on the popup but mouseup on the container\n      // This can happen when the user drags a slider\n      handleModalMousedown(domCache);\n\n      // Ignore click events that had mousedown on the container but mouseup on the popup\n      handleContainerMousedown(domCache);\n      handleModalClick(instance, domCache, dismissWith);\n    }\n  };\n  const handleToastClick = (instance, domCache, dismissWith) => {\n    // Closing toast by internal click\n    domCache.popup.onclick = () => {\n      const innerParams = privateProps.innerParams.get(instance);\n      if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {\n        return;\n      }\n      dismissWith(DismissReason.close);\n    };\n  };\n\n  /**\n   * @param {*} innerParams\n   * @returns {boolean}\n   */\n  const isAnyButtonShown = innerParams => {\n    return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;\n  };\n  let ignoreOutsideClick = false;\n  const handleModalMousedown = domCache => {\n    domCache.popup.onmousedown = () => {\n      domCache.container.onmouseup = function (e) {\n        domCache.container.onmouseup = undefined;\n        // We only check if the mouseup target is the container because usually it doesn't\n        // have any other direct children aside of the popup\n        if (e.target === domCache.container) {\n          ignoreOutsideClick = true;\n        }\n      };\n    };\n  };\n  const handleContainerMousedown = domCache => {\n    domCache.container.onmousedown = () => {\n      domCache.popup.onmouseup = function (e) {\n        domCache.popup.onmouseup = undefined;\n        // We also need to check if the mouseup target is a child of the popup\n        if (e.target === domCache.popup || domCache.popup.contains(e.target)) {\n          ignoreOutsideClick = true;\n        }\n      };\n    };\n  };\n  const handleModalClick = (instance, domCache, dismissWith) => {\n    domCache.container.onclick = e => {\n      const innerParams = privateProps.innerParams.get(instance);\n      if (ignoreOutsideClick) {\n        ignoreOutsideClick = false;\n        return;\n      }\n      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {\n        dismissWith(DismissReason.backdrop);\n      }\n    };\n  };\n\n  const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;\n  const isElement = elem => elem instanceof Element || isJqueryElement(elem);\n  const argsToParams = args => {\n    const params = {};\n    if (typeof args[0] === 'object' && !isElement(args[0])) {\n      Object.assign(params, args[0]);\n    } else {\n      ['title', 'html', 'icon'].forEach((name, index) => {\n        const arg = args[index];\n        if (typeof arg === 'string' || isElement(arg)) {\n          params[name] = arg;\n        } else if (arg !== undefined) {\n          error(\"Unexpected type of \".concat(name, \"! Expected \\\"string\\\" or \\\"Element\\\", got \").concat(typeof arg));\n        }\n      });\n    }\n    return params;\n  };\n\n  /**\n   * Main method to create a new SweetAlert2 popup\n   *\n   * @param  {...SweetAlertOptions} args\n   * @returns {Promise<SweetAlertResult>}\n   */\n  function fire() {\n    const Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    return new Swal(...args);\n  }\n\n  /**\n   * Returns an extended version of `Swal` containing `params` as defaults.\n   * Useful for reusing Swal configuration.\n   *\n   * For example:\n   *\n   * Before:\n   * const textPromptOptions = { input: 'text', showCancelButton: true }\n   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })\n   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })\n   *\n   * After:\n   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })\n   * const {value: firstName} = await TextPrompt('What is your first name?')\n   * const {value: lastName} = await TextPrompt('What is your last name?')\n   *\n   * @param {SweetAlertOptions} mixinParams\n   * @returns {SweetAlert}\n   */\n  function mixin(mixinParams) {\n    class MixinSwal extends this {\n      _main(params, priorityMixinParams) {\n        return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));\n      }\n    }\n    // @ts-ignore\n    return MixinSwal;\n  }\n\n  /**\n   * If `timer` parameter is set, returns number of milliseconds of timer remained.\n   * Otherwise, returns undefined.\n   *\n   * @returns {number | undefined}\n   */\n  const getTimerLeft = () => {\n    return globalState.timeout && globalState.timeout.getTimerLeft();\n  };\n\n  /**\n   * Stop timer. Returns number of milliseconds of timer remained.\n   * If `timer` parameter isn't set, returns undefined.\n   *\n   * @returns {number | undefined}\n   */\n  const stopTimer = () => {\n    if (globalState.timeout) {\n      stopTimerProgressBar();\n      return globalState.timeout.stop();\n    }\n  };\n\n  /**\n   * Resume timer. Returns number of milliseconds of timer remained.\n   * If `timer` parameter isn't set, returns undefined.\n   *\n   * @returns {number | undefined}\n   */\n  const resumeTimer = () => {\n    if (globalState.timeout) {\n      const remaining = globalState.timeout.start();\n      animateTimerProgressBar(remaining);\n      return remaining;\n    }\n  };\n\n  /**\n   * Resume timer. Returns number of milliseconds of timer remained.\n   * If `timer` parameter isn't set, returns undefined.\n   *\n   * @returns {number | undefined}\n   */\n  const toggleTimer = () => {\n    const timer = globalState.timeout;\n    return timer && (timer.running ? stopTimer() : resumeTimer());\n  };\n\n  /**\n   * Increase timer. Returns number of milliseconds of an updated timer.\n   * If `timer` parameter isn't set, returns undefined.\n   *\n   * @param {number} n\n   * @returns {number | undefined}\n   */\n  const increaseTimer = n => {\n    if (globalState.timeout) {\n      const remaining = globalState.timeout.increase(n);\n      animateTimerProgressBar(remaining, true);\n      return remaining;\n    }\n  };\n\n  /**\n   * Check if timer is running. Returns true if timer is running\n   * or false if timer is paused or stopped.\n   * If `timer` parameter isn't set, returns undefined\n   *\n   * @returns {boolean}\n   */\n  const isTimerRunning = () => {\n    return !!(globalState.timeout && globalState.timeout.isRunning());\n  };\n\n  let bodyClickListenerAdded = false;\n  const clickHandlers = {};\n\n  /**\n   * @param {string} attr\n   */\n  function bindClickHandler() {\n    let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';\n    clickHandlers[attr] = this;\n    if (!bodyClickListenerAdded) {\n      document.body.addEventListener('click', bodyClickListener);\n      bodyClickListenerAdded = true;\n    }\n  }\n  const bodyClickListener = event => {\n    for (let el = event.target; el && el !== document; el = el.parentNode) {\n      for (const attr in clickHandlers) {\n        const template = el.getAttribute(attr);\n        if (template) {\n          clickHandlers[attr].fire({\n            template\n          });\n          return;\n        }\n      }\n    }\n  };\n\n  var staticMethods = /*#__PURE__*/Object.freeze({\n    __proto__: null,\n    argsToParams: argsToParams,\n    bindClickHandler: bindClickHandler,\n    clickCancel: clickCancel,\n    clickConfirm: clickConfirm,\n    clickDeny: clickDeny,\n    enableLoading: showLoading,\n    fire: fire,\n    getActions: getActions,\n    getCancelButton: getCancelButton,\n    getCloseButton: getCloseButton,\n    getConfirmButton: getConfirmButton,\n    getContainer: getContainer,\n    getDenyButton: getDenyButton,\n    getFocusableElements: getFocusableElements,\n    getFooter: getFooter,\n    getHtmlContainer: getHtmlContainer,\n    getIcon: getIcon,\n    getIconContent: getIconContent,\n    getImage: getImage,\n    getInputLabel: getInputLabel,\n    getLoader: getLoader,\n    getPopup: getPopup,\n    getProgressSteps: getProgressSteps,\n    getTimerLeft: getTimerLeft,\n    getTimerProgressBar: getTimerProgressBar,\n    getTitle: getTitle,\n    getValidationMessage: getValidationMessage,\n    increaseTimer: increaseTimer,\n    isDeprecatedParameter: isDeprecatedParameter,\n    isLoading: isLoading,\n    isTimerRunning: isTimerRunning,\n    isUpdatableParameter: isUpdatableParameter,\n    isValidParameter: isValidParameter,\n    isVisible: isVisible,\n    mixin: mixin,\n    resumeTimer: resumeTimer,\n    showLoading: showLoading,\n    stopTimer: stopTimer,\n    toggleTimer: toggleTimer\n  });\n\n  class Timer {\n    /**\n     * @param {Function} callback\n     * @param {number} delay\n     */\n    constructor(callback, delay) {\n      this.callback = callback;\n      this.remaining = delay;\n      this.running = false;\n      this.start();\n    }\n\n    /**\n     * @returns {number}\n     */\n    start() {\n      if (!this.running) {\n        this.running = true;\n        this.started = new Date();\n        this.id = setTimeout(this.callback, this.remaining);\n      }\n      return this.remaining;\n    }\n\n    /**\n     * @returns {number}\n     */\n    stop() {\n      if (this.started && this.running) {\n        this.running = false;\n        clearTimeout(this.id);\n        this.remaining -= new Date().getTime() - this.started.getTime();\n      }\n      return this.remaining;\n    }\n\n    /**\n     * @param {number} n\n     * @returns {number}\n     */\n    increase(n) {\n      const running = this.running;\n      if (running) {\n        this.stop();\n      }\n      this.remaining += n;\n      if (running) {\n        this.start();\n      }\n      return this.remaining;\n    }\n\n    /**\n     * @returns {number}\n     */\n    getTimerLeft() {\n      if (this.running) {\n        this.stop();\n        this.start();\n      }\n      return this.remaining;\n    }\n\n    /**\n     * @returns {boolean}\n     */\n    isRunning() {\n      return this.running;\n    }\n  }\n\n  const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];\n\n  /**\n   * @param {SweetAlertOptions} params\n   * @returns {SweetAlertOptions}\n   */\n  const getTemplateParams = params => {\n    /** @type {HTMLTemplateElement} */\n    const template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;\n    if (!template) {\n      return {};\n    }\n    /** @type {DocumentFragment} */\n    const templateContent = template.content;\n    showWarningsForElements(templateContent);\n    const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalParams = templateContent => {\n    const result = {};\n    /** @type {HTMLElement[]} */\n    const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));\n    swalParams.forEach(param => {\n      showWarningsForAttributes(param, ['name', 'value']);\n      const paramName = param.getAttribute('name');\n      const value = param.getAttribute('value');\n      if (typeof defaultParams[paramName] === 'boolean') {\n        result[paramName] = value !== 'false';\n      } else if (typeof defaultParams[paramName] === 'object') {\n        result[paramName] = JSON.parse(value);\n      } else {\n        result[paramName] = value;\n      }\n    });\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalFunctionParams = templateContent => {\n    const result = {};\n    /** @type {HTMLElement[]} */\n    const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));\n    swalFunctions.forEach(param => {\n      const paramName = param.getAttribute('name');\n      const value = param.getAttribute('value');\n      result[paramName] = new Function(\"return \".concat(value))();\n    });\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalButtons = templateContent => {\n    const result = {};\n    /** @type {HTMLElement[]} */\n    const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));\n    swalButtons.forEach(button => {\n      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);\n      const type = button.getAttribute('type');\n      result[\"\".concat(type, \"ButtonText\")] = button.innerHTML;\n      result[\"show\".concat(capitalizeFirstLetter(type), \"Button\")] = true;\n      if (button.hasAttribute('color')) {\n        result[\"\".concat(type, \"ButtonColor\")] = button.getAttribute('color');\n      }\n      if (button.hasAttribute('aria-label')) {\n        result[\"\".concat(type, \"ButtonAriaLabel\")] = button.getAttribute('aria-label');\n      }\n    });\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalImage = templateContent => {\n    const result = {};\n    /** @type {HTMLElement} */\n    const image = templateContent.querySelector('swal-image');\n    if (image) {\n      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);\n      if (image.hasAttribute('src')) {\n        result.imageUrl = image.getAttribute('src');\n      }\n      if (image.hasAttribute('width')) {\n        result.imageWidth = image.getAttribute('width');\n      }\n      if (image.hasAttribute('height')) {\n        result.imageHeight = image.getAttribute('height');\n      }\n      if (image.hasAttribute('alt')) {\n        result.imageAlt = image.getAttribute('alt');\n      }\n    }\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalIcon = templateContent => {\n    const result = {};\n    /** @type {HTMLElement} */\n    const icon = templateContent.querySelector('swal-icon');\n    if (icon) {\n      showWarningsForAttributes(icon, ['type', 'color']);\n      if (icon.hasAttribute('type')) {\n        /** @type {SweetAlertIcon} */\n        // @ts-ignore\n        result.icon = icon.getAttribute('type');\n      }\n      if (icon.hasAttribute('color')) {\n        result.iconColor = icon.getAttribute('color');\n      }\n      result.iconHtml = icon.innerHTML;\n    }\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalInput = templateContent => {\n    const result = {};\n    /** @type {HTMLElement} */\n    const input = templateContent.querySelector('swal-input');\n    if (input) {\n      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);\n      /** @type {SweetAlertInput} */\n      // @ts-ignore\n      result.input = input.getAttribute('type') || 'text';\n      if (input.hasAttribute('label')) {\n        result.inputLabel = input.getAttribute('label');\n      }\n      if (input.hasAttribute('placeholder')) {\n        result.inputPlaceholder = input.getAttribute('placeholder');\n      }\n      if (input.hasAttribute('value')) {\n        result.inputValue = input.getAttribute('value');\n      }\n    }\n    /** @type {HTMLElement[]} */\n    const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));\n    if (inputOptions.length) {\n      result.inputOptions = {};\n      inputOptions.forEach(option => {\n        showWarningsForAttributes(option, ['value']);\n        const optionValue = option.getAttribute('value');\n        const optionName = option.innerHTML;\n        result.inputOptions[optionValue] = optionName;\n      });\n    }\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   * @param {string[]} paramNames\n   * @returns {SweetAlertOptions}\n   */\n  const getSwalStringParams = (templateContent, paramNames) => {\n    const result = {};\n    for (const i in paramNames) {\n      const paramName = paramNames[i];\n      /** @type {HTMLElement} */\n      const tag = templateContent.querySelector(paramName);\n      if (tag) {\n        showWarningsForAttributes(tag, []);\n        result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();\n      }\n    }\n    return result;\n  };\n\n  /**\n   * @param {DocumentFragment} templateContent\n   */\n  const showWarningsForElements = templateContent => {\n    const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);\n    Array.from(templateContent.children).forEach(el => {\n      const tagName = el.tagName.toLowerCase();\n      if (!allowedElements.includes(tagName)) {\n        warn(\"Unrecognized element <\".concat(tagName, \">\"));\n      }\n    });\n  };\n\n  /**\n   * @param {HTMLElement} el\n   * @param {string[]} allowedAttributes\n   */\n  const showWarningsForAttributes = (el, allowedAttributes) => {\n    Array.from(el.attributes).forEach(attribute => {\n      if (allowedAttributes.indexOf(attribute.name) === -1) {\n        warn([\"Unrecognized attribute \\\"\".concat(attribute.name, \"\\\" on <\").concat(el.tagName.toLowerCase(), \">.\"), \"\".concat(allowedAttributes.length ? \"Allowed attributes are: \".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);\n      }\n    });\n  };\n\n  const SHOW_CLASS_TIMEOUT = 10;\n\n  /**\n   * Open popup, add necessary classes and styles, fix scrollbar\n   *\n   * @param {SweetAlertOptions} params\n   */\n  const openPopup = params => {\n    const container = getContainer();\n    const popup = getPopup();\n    if (typeof params.willOpen === 'function') {\n      params.willOpen(popup);\n    }\n    const bodyStyles = window.getComputedStyle(document.body);\n    const initialBodyOverflow = bodyStyles.overflowY;\n    addClasses(container, popup, params);\n\n    // scrolling is 'hidden' until animation is done, after that 'auto'\n    setTimeout(() => {\n      setScrollingVisibility(container, popup);\n    }, SHOW_CLASS_TIMEOUT);\n    if (isModal()) {\n      fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);\n      setAriaHidden();\n    }\n    if (!isToast() && !globalState.previousActiveElement) {\n      globalState.previousActiveElement = document.activeElement;\n    }\n    if (typeof params.didOpen === 'function') {\n      setTimeout(() => params.didOpen(popup));\n    }\n    removeClass(container, swalClasses['no-transition']);\n  };\n\n  /**\n   * @param {AnimationEvent} event\n   */\n  const swalOpenAnimationFinished = event => {\n    const popup = getPopup();\n    if (event.target !== popup || !animationEndEvent) {\n      return;\n    }\n    const container = getContainer();\n    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);\n    container.style.overflowY = 'auto';\n  };\n\n  /**\n   * @param {HTMLElement} container\n   * @param {HTMLElement} popup\n   */\n  const setScrollingVisibility = (container, popup) => {\n    if (animationEndEvent && hasCssAnimation(popup)) {\n      container.style.overflowY = 'hidden';\n      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);\n    } else {\n      container.style.overflowY = 'auto';\n    }\n  };\n\n  /**\n   * @param {HTMLElement} container\n   * @param {boolean} scrollbarPadding\n   * @param {string} initialBodyOverflow\n   */\n  const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {\n    iOSfix();\n    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {\n      replaceScrollbarWithPadding(initialBodyOverflow);\n    }\n\n    // sweetalert2/issues/1247\n    setTimeout(() => {\n      container.scrollTop = 0;\n    });\n  };\n\n  /**\n   * @param {HTMLElement} container\n   * @param {HTMLElement} popup\n   * @param {SweetAlertOptions} params\n   */\n  const addClasses = (container, popup, params) => {\n    addClass(container, params.showClass.backdrop);\n    // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059\n    popup.style.setProperty('opacity', '0', 'important');\n    show(popup, 'grid');\n    setTimeout(() => {\n      // Animate popup right after showing it\n      addClass(popup, params.showClass.popup);\n      // and remove the opacity workaround\n      popup.style.removeProperty('opacity');\n    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062\n\n    addClass([document.documentElement, document.body], swalClasses.shown);\n    if (params.heightAuto && params.backdrop && !params.toast) {\n      addClass([document.documentElement, document.body], swalClasses['height-auto']);\n    }\n  };\n\n  var defaultInputValidators = {\n    /**\n     * @param {string} string\n     * @param {string} [validationMessage]\n     * @returns {Promise<string | void>}\n     */\n    email: (string, validationMessage) => {\n      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');\n    },\n    /**\n     * @param {string} string\n     * @param {string} [validationMessage]\n     * @returns {Promise<string | void>}\n     */\n    url: (string, validationMessage) => {\n      // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013\n      return /^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\\.[a-z]{2,63}\\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');\n    }\n  };\n\n  /**\n   * @param {SweetAlertOptions} params\n   */\n  function setDefaultInputValidators(params) {\n    // Use default `inputValidator` for supported input types if not provided\n    if (params.inputValidator) {\n      return;\n    }\n    if (params.input === 'email') {\n      params.inputValidator = defaultInputValidators['email'];\n    }\n    if (params.input === 'url') {\n      params.inputValidator = defaultInputValidators['url'];\n    }\n  }\n\n  /**\n   * @param {SweetAlertOptions} params\n   */\n  function validateCustomTargetElement(params) {\n    // Determine if the custom target element is valid\n    if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {\n      warn('Target parameter is not valid, defaulting to \"body\"');\n      params.target = 'body';\n    }\n  }\n\n  /**\n   * Set type, text and actions on popup\n   *\n   * @param {SweetAlertOptions} params\n   */\n  function setParameters(params) {\n    setDefaultInputValidators(params);\n\n    // showLoaderOnConfirm && preConfirm\n    if (params.showLoaderOnConfirm && !params.preConfirm) {\n      warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\\n' + 'https://sweetalert2.github.io/#ajax-request');\n    }\n    validateCustomTargetElement(params);\n\n    // Replace newlines with <br> in title\n    if (typeof params.title === 'string') {\n      params.title = params.title.split('\\n').join('<br />');\n    }\n    init(params);\n  }\n\n  /** @type {SweetAlert} */\n  let currentInstance;\n  var _promise = /*#__PURE__*/new WeakMap();\n  class SweetAlert {\n    /**\n     * @param {...any} args\n     * @this {SweetAlert}\n     */\n    constructor() {\n      /**\n       * @type {Promise<SweetAlertResult>}\n       */\n      _classPrivateFieldInitSpec(this, _promise, {\n        writable: true,\n        value: void 0\n      });\n      // Prevent run in Node env\n      if (typeof window === 'undefined') {\n        return;\n      }\n      currentInstance = this;\n\n      // @ts-ignore\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      const outerParams = Object.freeze(this.constructor.argsToParams(args));\n\n      /** @type {Readonly<SweetAlertOptions>} */\n      this.params = outerParams;\n\n      /** @type {boolean} */\n      this.isAwaitingPromise = false;\n      _classPrivateFieldSet(this, _promise, this._main(currentInstance.params));\n    }\n    _main(userParams) {\n      let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      showWarningsForParams(Object.assign({}, mixinParams, userParams));\n      if (globalState.currentInstance) {\n        globalState.currentInstance._destroy();\n        if (isModal()) {\n          unsetAriaHidden();\n        }\n      }\n      globalState.currentInstance = currentInstance;\n      const innerParams = prepareParams(userParams, mixinParams);\n      setParameters(innerParams);\n      Object.freeze(innerParams);\n\n      // clear the previous timer\n      if (globalState.timeout) {\n        globalState.timeout.stop();\n        delete globalState.timeout;\n      }\n\n      // clear the restore focus timeout\n      clearTimeout(globalState.restoreFocusTimeout);\n      const domCache = populateDomCache(currentInstance);\n      render(currentInstance, innerParams);\n      privateProps.innerParams.set(currentInstance, innerParams);\n      return swalPromise(currentInstance, domCache, innerParams);\n    }\n\n    // `catch` cannot be the name of a module export, so we define our thenable methods here instead\n    then(onFulfilled) {\n      return _classPrivateFieldGet(this, _promise).then(onFulfilled);\n    }\n    finally(onFinally) {\n      return _classPrivateFieldGet(this, _promise).finally(onFinally);\n    }\n  }\n\n  /**\n   * @param {SweetAlert} instance\n   * @param {DomCache} domCache\n   * @param {SweetAlertOptions} innerParams\n   * @returns {Promise}\n   */\n  const swalPromise = (instance, domCache, innerParams) => {\n    return new Promise((resolve, reject) => {\n      // functions to handle all closings/dismissals\n      /**\n       * @param {DismissReason} dismiss\n       */\n      const dismissWith = dismiss => {\n        instance.close({\n          isDismissed: true,\n          dismiss\n        });\n      };\n      privateMethods.swalPromiseResolve.set(instance, resolve);\n      privateMethods.swalPromiseReject.set(instance, reject);\n      domCache.confirmButton.onclick = () => {\n        handleConfirmButtonClick(instance);\n      };\n      domCache.denyButton.onclick = () => {\n        handleDenyButtonClick(instance);\n      };\n      domCache.cancelButton.onclick = () => {\n        handleCancelButtonClick(instance, dismissWith);\n      };\n      domCache.closeButton.onclick = () => {\n        dismissWith(DismissReason.close);\n      };\n      handlePopupClick(instance, domCache, dismissWith);\n      addKeydownHandler(instance, globalState, innerParams, dismissWith);\n      handleInputOptionsAndValue(instance, innerParams);\n      openPopup(innerParams);\n      setupTimer(globalState, innerParams, dismissWith);\n      initFocus(domCache, innerParams);\n\n      // Scroll container to top on open (#1247, #1946)\n      setTimeout(() => {\n        domCache.container.scrollTop = 0;\n      });\n    });\n  };\n\n  /**\n   * @param {SweetAlertOptions} userParams\n   * @param {SweetAlertOptions} mixinParams\n   * @returns {SweetAlertOptions}\n   */\n  const prepareParams = (userParams, mixinParams) => {\n    const templateParams = getTemplateParams(userParams);\n    const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131\n    params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);\n    params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);\n    return params;\n  };\n\n  /**\n   * @param {SweetAlert} instance\n   * @returns {DomCache}\n   */\n  const populateDomCache = instance => {\n    const domCache = {\n      popup: getPopup(),\n      container: getContainer(),\n      actions: getActions(),\n      confirmButton: getConfirmButton(),\n      denyButton: getDenyButton(),\n      cancelButton: getCancelButton(),\n      loader: getLoader(),\n      closeButton: getCloseButton(),\n      validationMessage: getValidationMessage(),\n      progressSteps: getProgressSteps()\n    };\n    privateProps.domCache.set(instance, domCache);\n    return domCache;\n  };\n\n  /**\n   * @param {GlobalState} globalState\n   * @param {SweetAlertOptions} innerParams\n   * @param {Function} dismissWith\n   */\n  const setupTimer = (globalState, innerParams, dismissWith) => {\n    const timerProgressBar = getTimerProgressBar();\n    hide(timerProgressBar);\n    if (innerParams.timer) {\n      globalState.timeout = new Timer(() => {\n        dismissWith('timer');\n        delete globalState.timeout;\n      }, innerParams.timer);\n      if (innerParams.timerProgressBar) {\n        show(timerProgressBar);\n        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');\n        setTimeout(() => {\n          if (globalState.timeout && globalState.timeout.running) {\n            // timer can be already stopped or unset at this point\n            animateTimerProgressBar(innerParams.timer);\n          }\n        });\n      }\n    }\n  };\n\n  /**\n   * @param {DomCache} domCache\n   * @param {SweetAlertOptions} innerParams\n   */\n  const initFocus = (domCache, innerParams) => {\n    if (innerParams.toast) {\n      return;\n    }\n    if (!callIfFunction(innerParams.allowEnterKey)) {\n      blurActiveElement();\n      return;\n    }\n    if (!focusButton(domCache, innerParams)) {\n      setFocus(-1, 1);\n    }\n  };\n\n  /**\n   * @param {DomCache} domCache\n   * @param {SweetAlertOptions} innerParams\n   * @returns {boolean}\n   */\n  const focusButton = (domCache, innerParams) => {\n    if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {\n      domCache.denyButton.focus();\n      return true;\n    }\n    if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {\n      domCache.cancelButton.focus();\n      return true;\n    }\n    if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {\n      domCache.confirmButton.focus();\n      return true;\n    }\n    return false;\n  };\n  const blurActiveElement = () => {\n    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {\n      document.activeElement.blur();\n    }\n  };\n\n  // Dear russian users visiting russian sites. Let's have fun.\n  if (typeof window !== 'undefined' && /^ru\\b/.test(navigator.language) && location.host.match(/\\.(ru|su|by|xn--p1ai)$/)) {\n    const now = new Date();\n    const initiationDate = localStorage.getItem('swal-initiation');\n    if (!initiationDate) {\n      localStorage.setItem('swal-initiation', \"\".concat(now));\n    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {\n      setTimeout(() => {\n        document.body.style.pointerEvents = 'none';\n        const ukrainianAnthem = document.createElement('audio');\n        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';\n        ukrainianAnthem.loop = true;\n        document.body.appendChild(ukrainianAnthem);\n        setTimeout(() => {\n          ukrainianAnthem.play().catch(() => {\n            // ignore\n          });\n        }, 2500);\n      }, 500);\n    }\n  }\n\n  // Assign instance methods from src/instanceMethods/*.js to prototype\n  SweetAlert.prototype.disableButtons = disableButtons;\n  SweetAlert.prototype.enableButtons = enableButtons;\n  SweetAlert.prototype.getInput = getInput;\n  SweetAlert.prototype.disableInput = disableInput;\n  SweetAlert.prototype.enableInput = enableInput;\n  SweetAlert.prototype.hideLoading = hideLoading;\n  SweetAlert.prototype.disableLoading = hideLoading;\n  SweetAlert.prototype.showValidationMessage = showValidationMessage;\n  SweetAlert.prototype.resetValidationMessage = resetValidationMessage;\n  SweetAlert.prototype.close = close;\n  SweetAlert.prototype.closePopup = close;\n  SweetAlert.prototype.closeModal = close;\n  SweetAlert.prototype.closeToast = close;\n  SweetAlert.prototype.rejectPromise = rejectPromise;\n  SweetAlert.prototype.update = update;\n  SweetAlert.prototype._destroy = _destroy;\n\n  // Assign static methods from src/staticMethods/*.js to constructor\n  Object.assign(SweetAlert, staticMethods);\n\n  // Proxy to instance methods to constructor, for now, for backwards compatibility\n  Object.keys(instanceMethods).forEach(key => {\n    /**\n     * @param {...any} args\n     * @returns {any | undefined}\n     */\n    SweetAlert[key] = function () {\n      if (currentInstance && currentInstance[key]) {\n        return currentInstance[key](...arguments);\n      }\n      return null;\n    };\n  });\n  SweetAlert.DismissReason = DismissReason;\n  SweetAlert.version = '11.7.27';\n\n  const Swal = SweetAlert;\n  // @ts-ignore\n  Swal.default = Swal;\n\n  return Swal;\n\n}));\nif (typeof this !== 'undefined' && this.Sweetalert2){this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}\n\"undefined\"!=typeof document&&function(e,t){var n=e.createElement(\"style\");if(e.getElementsByTagName(\"head\")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,\".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\\\"top-start     top            top-end\\\" \\\"center-start  center         center-end\\\" \\\"bottom-start  bottom-center  bottom-end\\\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\\\"!\\\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}\");\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/sweetalert2/dist/sweetalert2.all.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("sweetalert." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("462a178032d570b9bf10")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack-tutorial:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"sweetalert": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_tutorial"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/js/sweetalert.js");
/******/ 	
/******/ })()
;