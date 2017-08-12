(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ReactCdPlayer = factory());
}(this, (function () { 'use strict';

function __$styleInject(css, returnValue) {
  if (typeof document === 'undefined') {
    return returnValue;
  }
  css = css || '';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  head.appendChild(style);
  
  if (style.styleSheet){
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
  return returnValue;
}

__$styleInject("@charset \"UTF-8\";@import \"//fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600,700\";a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baselinebaseline;outline:none;-webkit-box-sizing:border-box;box-sizing:border-box}html{display:block}body,html{width:100%;height:100%}body{font-size:100%;line-height:1;font-family:Open Sans,Helvetica,Tahoma,Arial,STXihei,华文细黑,Microsoft YaHei,微软雅黑,SimSun,宋体,Heiti,黑体,sans-serif!important}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}strong{font-weight:700}table{border-collapse:collapse;border-spacing:0}img{border:0;max-width:100%}::-webkit-scrollbar,::-webkit-scrollbar-track-piece{background:#666}::-webkit-scrollbar{width:10px;height:14px}::-webkit-scrollbar-thumb{height:80px;background-color:#333}::-webkit-scrollbar-thumb:hover{background-color:#111}.cd-player-container{padding-top:50px;display:block;text-align:center}.cd-player-container .bottom-bar{width:100%}.cd-player-container .process-outer{height:3px;width:40%;margin:0 auto;margin-top:30px;background:#ccc;cursor:pointer}.cd-player-container .title{position:relative;margin-top:20px;color:#000}.cd-player-container .title h1.name{font-size:2.4em}.cd-player-container .title h1.name:before{content:\"\\300C   \"}.cd-player-container .title h1.name:after{content:\" \\300D\"}.cd-player-container .title h2.sub-title{margin-top:10px;font-size:1.6em;color:#666}.cd-player-container .control-buttons{display:inline-block;overflow:hidden}.cd-player-container .control-buttons .fast-rewind-outer{float:left;margin-top:260px}.cd-player-container .control-buttons .fast-rewind-outer .fast-rewind-icon{width:100px;height:100px;color:#fff;background:#ccc;border-radius:50%}.cd-player-container .control-buttons .fast-rewind-outer .fast-rewind-icon:hover{background:#3aa8bd}.cd-player-container .control-buttons .cd-outer{float:left}.cd-player-container .control-buttons .fast-forward-outer{float:left;margin-top:260px}.cd-player-container .control-buttons .fast-forward-outer .fast-forward-icon{width:100px;height:100px;color:#fff;background:#ccc;border-radius:50%}.cd-player-container .control-buttons .fast-forward-outer .fast-forward-icon:hover{background:#3aa8bd}@media screen and (max-width:700px){.cd-player-container{padding-top:0}.cd-player-container .bottom-bar{position:absolute;bottom:10%;width:100%}.cd-player-container .process-outer{width:80%}.cd-player-container .title h1.name{font-size:2em}.cd-player-container .title h2.sub-title{font-size:1em}.cd-player-container .control-buttons .fast-rewind-outer{position:absolute;left:25%;margin-top:0;z-index:1}.cd-player-container .control-buttons .fast-rewind-outer .fast-rewind-icon{width:60px;height:60px;color:#fff;background:#ccc;border-radius:50%}.cd-player-container .control-buttons .fast-rewind-outer .fast-rewind-icon:hover{background:#ccc}.cd-player-container .control-buttons .fast-forward-outer{position:absolute;right:25%;margin-top:0;z-index:1}.cd-player-container .control-buttons .fast-forward-outer .fast-forward-icon{width:60px;height:60px;color:#fff;background:#ccc;border-radius:50%}.cd-player-container .control-buttons .fast-forward-outer .fast-forward-icon:hover{background:#ccc}}", undefined);

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

var reactProdInvariant_1 = reactProdInvariant;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning_1(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {
  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var canDefineProperty$1 = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty$1 = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

var canDefineProperty_1 = canDefineProperty$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning$1 = function () {};

if (process.env.NODE_ENV !== 'production') {
  var printWarning$1 = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning$1 = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning$1.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning_1 = lowPriorityWarning$1;

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : reactProdInvariant_1('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty_1) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
index(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

var ReactBaseClasses = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler$1 = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler$1 = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Trying to release an instance into a pool of a different type.') : reactProdInvariant_1('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler$1,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler$1
};

var PooledClass_1 = PooledClass;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

var ReactCurrentOwner_1 = ReactCurrentOwner;

/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var ReactElementSymbol = REACT_ELEMENT_TYPE;

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;



var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty$1.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty$1.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning_1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning_1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: ReactElementSymbol,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty_1) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== ReactElementSymbol) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = index({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner_1.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === ReactElementSymbol;
};

var ReactElement_1 = ReactElement;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var getIteratorFn_1 = getIteratorFn;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

var KeyEscapeUtils_1 = KeyEscapeUtils;

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils_1.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === ReactElementSymbol) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn_1(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner_1.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner_1.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning_1(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils_1.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner_1.current) {
          var name = ReactCurrentOwner_1.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : reactProdInvariant_1('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

var traverseAllChildren_1 = traverseAllChildren;

var twoArgumentPooler = PooledClass_1.twoArgumentPooler;
var fourArgumentPooler = PooledClass_1.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren_1(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction_1.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren_1(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren_1(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction_1.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

var ReactChildren_1 = ReactChildren;

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning_1(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Item must have been set') : reactProdInvariant_1('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : reactProdInvariant_1('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : reactProdInvariant_1('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : reactProdInvariant_1('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : reactProdInvariant_1('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Item must have been set') : reactProdInvariant_1('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,

  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

var ReactComponentTreeHook_1 = ReactComponentTreeHook;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

var ReactPropTypeLocationNames_1 = ReactPropTypeLocationNames;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var ReactComponentTreeHook$1;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant_1(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : reactProdInvariant_1('84', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning_1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook$1) {
            ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning_1(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

var checkReactTypeSpec_1 = checkReactTypeSpec;

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = ReactCurrentOwner_1.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
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
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning_1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook_1.getCurrentStackAddendum(element)) : void 0;
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
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn_1(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
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
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec_1(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning_1(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator$2 = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook_1.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook_1.pushNonStandardWarningStack(true, currentSource);
        process.env.NODE_ENV !== 'production' ? warning_1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        ReactComponentTreeHook_1.popNonStandardWarningStack();
      }
    }

    var element = ReactElement_1.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator$2.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty_1) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning_1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

var ReactElementValidator_1 = ReactElementValidator$2;

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement_1.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator$1 = ReactElementValidator_1;
  createDOMFactory = ReactElementValidator$1.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

var ReactDOMFactories_1 = ReactDOMFactories;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$2;

if (process.env.NODE_ENV !== 'production') {
  var invariant$2 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$3 = ReactPropTypesSecret_1$2;
  var loggedTypeFailures$1 = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$3);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$1[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1$2) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning_1(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$2);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning_1(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction_1.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$2) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.

var factory_1 = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
};

var isValidElement = ReactElement_1.isValidElement;



var ReactPropTypes = factory_1(isValidElement);

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var ReactVersion = '15.6.1';

if (process.env.NODE_ENV !== 'production') {
  var warning$2 = warning_1;
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames$2;
if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames$2 = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames$2 = {};
}

function factory$1(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = index(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = index(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (process.env.NODE_ENV !== 'production') {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = index({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (process.env.NODE_ENV !== 'production') {
          warning$2(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames$2[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      invariant_1(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      invariant_1(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (process.env.NODE_ENV !== 'production') {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (process.env.NODE_ENV !== 'production') {
          warning$2(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    invariant_1(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    invariant_1(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            invariant_1(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (process.env.NODE_ENV !== 'production') {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }
    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      invariant_1(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isInherited = name in Constructor;
      invariant_1(
        !isInherited,
        'ReactClass: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be ' +
          'due to a mixin.',
        name
      );
      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    invariant_1(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        invariant_1(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (process.env.NODE_ENV !== 'production') {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (process.env.NODE_ENV !== 'production') {
            warning$2(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (process.env.NODE_ENV !== 'production') {
            warning$2(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (process.env.NODE_ENV !== 'production') {
        warning$2(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  index(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        warning$2(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      invariant_1(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    invariant_1(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (process.env.NODE_ENV !== 'production') {
      warning$2(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning$2(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

var factory_1$2 = factory$1;

var Component = ReactBaseClasses.Component;

var isValidElement$1 = ReactElement_1.isValidElement;




var createClass = factory_1$2(Component, isValidElement$1, ReactNoopUpdateQueue_1);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement_1.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'React.Children.only expected to receive a single React element child.') : reactProdInvariant_1('143') : void 0;
  return children;
}

var onlyChild_1 = onlyChild;

var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var lowPriorityWarning = lowPriorityWarning_1;
  var canDefineProperty = canDefineProperty_1;
  var ReactElementValidator = ReactElementValidator_1;
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = index;
var createMixin = function (mixin) {
  return mixin;
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return index.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React$1 = {
  // Modern

  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories_1,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (process.env.NODE_ENV !== 'production') {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React$1, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React$1, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React$1.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories_1).forEach(function (factory) {
    React$1.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories_1[factory].apply(ReactDOMFactories_1, arguments);
    };
  });
}

var React_1 = React$1;

var react = React_1;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};



function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1$2) {
      // It is still safe when called from React.
      return;
    }
    invariant_1(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var index$2 = createCommonjsModule(function (module) {
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

var setStatic_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;
});

var setDisplayName_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _setStatic2 = _interopRequireDefault(setStatic_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;
});

var getDisplayName_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;
});

var wrapDisplayName_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _getDisplayName2 = _interopRequireDefault(getDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;
});

var createEagerElementUtil_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;
});

var isClassComponent_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

exports.default = isClassComponent;
});

var isReferentiallyTransparentFunctionComponent_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _isClassComponent2 = _interopRequireDefault(isClassComponent_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
});

var createEagerFactory = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _createEagerElementUtil2 = _interopRequireDefault(createEagerElementUtil_1);



var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(isReferentiallyTransparentFunctionComponent_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;
});

var shouldUpdate_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;





var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);



var _createEagerFactory2 = _interopRequireDefault(createEagerFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      _inherits(ShouldUpdate, _Component);

      function ShouldUpdate() {
        _classCallCheck(this, ShouldUpdate);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(react.Component);

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */

var hasOwnProperty$2 = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual$2(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty$2.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

var shallowEqual_1 = shallowEqual$2;

var shallowEqual = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;
});

var pure_1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _shouldUpdate2 = _interopRequireDefault(shouldUpdate_1);



var _shallowEqual2 = _interopRequireDefault(shallowEqual);



var _setDisplayName2 = _interopRequireDefault(setDisplayName_1);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (process.env.NODE_ENV !== 'production') {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;
});

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
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

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is$1 = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is$1 ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var hasOwnProperty$3 = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty$3.call(it, key);
};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
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

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');

var _sharedKey = function (key) {
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var f$1 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$1
};

var f$2 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$2
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

// 19.1.3.1 Object.assign(target, source)


_export(_export.S + _export.F, 'Object', { assign: _objectAssign });

var assign$2 = _core.Object.assign;

var assign = createCommonjsModule(function (module) {
module.exports = { "default": assign$2, __esModule: true };
});

var _extends = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _assign2 = _interopRequireDefault(assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
});

var objectWithoutProperties = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};
});

var index$5 = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys$2 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$2, __esModule: true };
});

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning$3 = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning$3 = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

var browser = warning$3;

var index$2$1 = function isMergeableObject(value) {
	return isNonNullObject(value) && isNotSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isNotSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue !== '[object RegExp]'
		&& stringValue !== '[object Date]'
}

function emptyTarget(val) {
    return Array.isArray(val) ? [] : {}
}

function cloneIfNecessary(value, optionsArgument) {
    var clone = optionsArgument && optionsArgument.clone === true;
    return (clone && index$2$1(value)) ? deepmerge(emptyTarget(value), value, optionsArgument) : value
}

function defaultArrayMerge(target, source, optionsArgument) {
    var destination = target.slice();
    source.forEach(function(e, i) {
        if (typeof destination[i] === 'undefined') {
            destination[i] = cloneIfNecessary(e, optionsArgument);
        } else if (index$2$1(e)) {
            destination[i] = deepmerge(target[i], e, optionsArgument);
        } else if (target.indexOf(e) === -1) {
            destination.push(cloneIfNecessary(e, optionsArgument));
        }
    });
    return destination
}

function mergeObject(target, source, optionsArgument) {
    var destination = {};
    if (index$2$1(target)) {
        Object.keys(target).forEach(function(key) {
            destination[key] = cloneIfNecessary(target[key], optionsArgument);
        });
    }
    Object.keys(source).forEach(function(key) {
        if (!index$2$1(source[key]) || !target[key]) {
            destination[key] = cloneIfNecessary(source[key], optionsArgument);
        } else {
            destination[key] = deepmerge(target[key], source[key], optionsArgument);
        }
    });
    return destination
}

function deepmerge(target, source, optionsArgument) {
    var sourceIsArray = Array.isArray(source);
    var targetIsArray = Array.isArray(target);
    var options = optionsArgument || { arrayMerge: defaultArrayMerge };
    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

    if (!sourceAndTargetTypesMatch) {
        return cloneIfNecessary(source, optionsArgument)
    } else if (sourceIsArray) {
        var arrayMerge = options.arrayMerge || defaultArrayMerge;
        return arrayMerge(target, source, optionsArgument)
    } else {
        return mergeObject(target, source, optionsArgument)
    }
}

deepmerge.all = function deepmergeAll(array, optionsArgument) {
    if (!Array.isArray(array) || array.length < 2) {
        throw new Error('first argument should be an array with at least two elements')
    }

    // we are sure there are at least 2 values, so it is safe to have no initial value
    return array.reduce(function(prev, next) {
        return deepmerge(prev, next, optionsArgument)
    })
};

var index$6 = deepmerge;

var cjs = index$6;

var createStyleSheet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _keys2 = _interopRequireDefault(keys);



var _extends3 = _interopRequireDefault(_extends);



var _warning2 = _interopRequireDefault(browser);



var _deepmerge2 = _interopRequireDefault(cjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// < 1kb payload overhead when lodash/merge is > 3kb.

/* eslint-disable flowtype/require-valid-file-annotation */

function createStyleSheet(name, callback) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var getStyles = typeof name === 'string' ? callback : name;

  function createStyles() {
    var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var styles = typeof getStyles === 'function' ? getStyles(theme) : getStyles;

    if (!theme.overrides || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _extends3.default)({}, styles);

    (0, _keys2.default)(overrides).forEach(function (key) {
      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(stylesWithOverrides[key], 'You are trying to overrides a style that do not exist.') : void 0;
      stylesWithOverrides[key] = (0, _deepmerge2.default)(stylesWithOverrides[key], overrides[key], { clone: true });
    });

    return stylesWithOverrides;
  }

  return {
    name: typeof name === 'string' ? name : false,
    createStyles: createStyles,
    options: options,
    // Enable the theme if the getStyles is a function (as we provide the theme as first argument)
    // or if the sheets has a name (as we can use the overrides key of the theme).
    themingEnabled: typeof getStyles === 'function' || typeof name === 'string'
  };
}

exports.default = createStyleSheet;
});

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _redefine = _hide;

var _iterators = {};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
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
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
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

var _addToUnscopables = function () { /* empty */ };

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var SPECIES = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
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
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
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
  if (!_has(it, META)) {
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
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var dP$1 = _objectDp.f;









var fastKey = _meta.fastKey;

var SIZE = _descriptors ? '_s' : 'size';

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

var _collectionStrong = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = _objectCreate(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
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
        var that = _validateCollection(this, NAME);
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
        _validateCollection(this, NAME);
        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
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
        return !!getEntry(_validateCollection(this, NAME), key);
      }
    });
    if (_descriptors) dP$1(C.prototype, 'size', {
      get: function () {
        return _validateCollection(this, NAME)[SIZE];
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
    _iterDefine(C, NAME, function (iterated, kind) {
      this._t = _validateCollection(iterated, NAME); // target
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
        return _iterStep(1);
      }
      // return step by kind
      if (kind == 'keys') return _iterStep(0, entry.k);
      if (kind == 'values') return _iterStep(0, entry.v);
      return _iterStep(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    _setSpecies(NAME);
  }
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

var SPECIES$1 = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES$1];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
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

var dP$2 = _objectDp.f;
var each = _arrayMethods(0);


var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$2(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var MAP = 'Map';

// 23.1 Map Objects
var es6_map = _collection(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = _collectionStrong.getEntry(_validateCollection(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionStrong.def(_validateCollection(this, MAP), key === 0 ? 0 : key, value);
  }
}, _collectionStrong, true);

var _arrayFromIterable = function (iter, ITERATOR) {
  var result = [];
  _forOf(iter, false, result.push, result, ITERATOR);
  return result;
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


var _collectionToJson = function (NAME) {
  return function toJSON() {
    if (_classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return _arrayFromIterable(this);
  };
};

// https://github.com/DavidBruant/Map-Set.prototype.toJSON


_export(_export.P + _export.R, 'Map', { toJSON: _collectionToJson('Map') });

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
_setCollectionOf('Map');

// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
_setCollectionFrom('Map');

var map$2 = _core.Map;

var map = createCommonjsModule(function (module) {
module.exports = { "default": map$2, __esModule: true };
});

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf$2 = _core.Object.getPrototypeOf;

var getPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf$2, __esModule: true };
});

var classCallCheck = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
});

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

var defineProperty = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

var createClass$2 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
});

var f$3 = _wks;

var _wksExt = {
	f: f$3
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

var defineProperty$4 = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty$4($Symbol, name, { value: _wksExt.f(name) });
};

var _keyof = function (object, el) {
  var O = _toIobject(object);
  var keys = _objectKeys(O);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) if (O[key = keys[index++]] === el) return key;
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1 = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD$1(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD = _objectGopd.f;
var dP$3 = _objectDp.f;
var gOPN = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$3({}, 'a', {
    get: function () { return dP$3(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$3(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$3(ObjectProto$1, key, protoDesc);
} : dP$3;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$3(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$3(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key) {
    if (isSymbol(key)) return _keyof(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
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

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !_isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var index$7 = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": index$7, __esModule: true };
});

var _typeof_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var possibleConstructorReturn = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};
});

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */


var check = function (O, proto) {
  _anObject(O);
  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
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

// 19.1.3.19 Object.setPrototypeOf(O, proto)

_export(_export.S, 'Object', { setPrototypeOf: _setProto.set });

var setPrototypeOf$2 = _core.Object.setPrototypeOf;

var setPrototypeOf = createCommonjsModule(function (module) {
module.exports = { "default": setPrototypeOf$2, __esModule: true };
});

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
_export(_export.S, 'Object', { create: _objectCreate });

var $Object$1 = _core.Object;
var create$2 = function create(P, D) {
  return $Object$1.create(P, D);
};

var create = createCommonjsModule(function (module) {
module.exports = { "default": create$2, __esModule: true };
});

var inherits = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _setPrototypeOf2 = _interopRequireDefault(setPrototypeOf);



var _create2 = _interopRequireDefault(create);



var _typeof3 = _interopRequireDefault(_typeof_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};
});

var getWeak = _meta.getWeak;







var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

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

var _collectionWeak = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var es6_weakMap = createCommonjsModule(function (module) {
'use strict';
var each = _arrayMethods(0);







var WEAK_MAP = 'WeakMap';
var getWeak = _meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = _collectionWeak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (_isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
if (_fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
  _objectAssign(InternalMap.prototype, methods);
  _meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    _redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (_isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');

var weakMap$2 = _core.WeakMap;

var weakMap = createCommonjsModule(function (module) {
module.exports = { "default": weakMap$2, __esModule: true };
});

// 20.1.2.10 Number.MIN_SAFE_INTEGER


_export(_export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });

var minSafeInteger$2 = -0x1fffffffffffff;

var minSafeInteger = createCommonjsModule(function (module) {
module.exports = { "default": minSafeInteger$2, __esModule: true };
});

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

var index$9 = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') { // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {

                }
            }
        }
    }

    return targetComponent;
};

var getDisplayName_1$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;
});

var wrapDisplayName_1$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _getDisplayName2 = _interopRequireDefault(getDisplayName_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;
});

var createEagerElementUtil_1$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var _react2 = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createEagerElementUtil = function createEagerElementUtil(hasKey, isReferentiallyTransparent, type, props, children) {
  if (!hasKey && isReferentiallyTransparent) {
    if (children) {
      return type(_extends({}, props, { children: children }));
    }
    return type(props);
  }

  var Component = type;

  if (children) {
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  }

  return _react2.default.createElement(Component, props);
};

exports.default = createEagerElementUtil;
});

var isClassComponent_1$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && _typeof(Component.prototype.isReactComponent) === 'object');
};

exports.default = isClassComponent;
});

var isReferentiallyTransparentFunctionComponent_1$1 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _isClassComponent2 = _interopRequireDefault(isClassComponent_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isReferentiallyTransparentFunctionComponent = function isReferentiallyTransparentFunctionComponent(Component) {
  return Boolean(typeof Component === 'function' && !(0, _isClassComponent2.default)(Component) && !Component.defaultProps && !Component.contextTypes && (process.env.NODE_ENV === 'production' || !Component.propTypes));
};

exports.default = isReferentiallyTransparentFunctionComponent;
});

var createEagerFactory$2 = createCommonjsModule(function (module, exports) {
'use strict';

exports.__esModule = true;



var _createEagerElementUtil2 = _interopRequireDefault(createEagerElementUtil_1$1);



var _isReferentiallyTransparentFunctionComponent2 = _interopRequireDefault(isReferentiallyTransparentFunctionComponent_1$1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFactory = function createFactory(type) {
  var isReferentiallyTransparent = (0, _isReferentiallyTransparentFunctionComponent2.default)(type);
  return function (p, c) {
    return (0, _createEagerElementUtil2.default)(false, isReferentiallyTransparent, type, p, c);
  };
};

exports.default = createFactory;
});

var createGenerateClassName = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var globalRef = typeof window === 'undefined' ? commonjsGlobal : window;

var namespace = '__JSS_VERSION_COUNTER__';
if (globalRef[namespace] == null) globalRef[namespace] = 0;
// In case we have more than one JSS version.
var jssCounter = globalRef[namespace]++;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;

  return function (rule) {
    return rule.key + '-' + jssCounter + '-' + ruleCounter++;
  };
};
});

var SheetsManager_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;

      var index = sheets.indexOf(sheet);

      if (index !== -1) return index;

      sheets.push(sheet);
      refs.push(0);
      keys.push(key);

      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);
      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])('SheetsManager: can\'t find sheet to unmanage');
        return;
      }
      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;
});

var getDynamicStyles = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Extracts a styles object with only props that contain function values.
 */
exports['default'] = function (styles) {
  // eslint-disable-next-line no-shadow
  function extract(styles) {
    var to = null;

    for (var key in styles) {
      var value = styles[key];
      var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

      if (type === 'function') {
        if (!to) to = {};
        to[key] = value;
      } else if (type === 'object' && value !== null && !Array.isArray(value)) {
        var extracted = extract(value);
        if (extracted) {
          if (!to) to = {};
          to[key] = extracted;
        }
      }
    }

    return to;
  }

  return extract(styles);
};
});

var SheetsRegistry_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',


    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;


      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      }

      // Find a position.
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }

    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }

    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }

    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',


    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;
});

var toCssValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;
var joinWithSpace = function joinWithSpace(value) {
  return value.join(' ');
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 */
function toCssValue(value) {
  if (!Array.isArray(value)) return value;

  // Support space separated values.
  if (Array.isArray(value[0])) {
    return toCssValue(value.map(joinWithSpace));
  }

  return value.join(', ');
}
});

var toCss_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;



var _toCssValue2 = _interopRequireDefault(toCssValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';
  for (var index = 0; index < indent; index++) {
    result += '  ';
  }return result + str;
}

/**
 * Converts a Rule to CSS string.
 */

function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = '';

  if (!style) return result;

  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;


  indent++;

  // Apply fallbacks first.
  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    }
    // Object syntax {fallbacks: {prop: value}}
    else {
        for (var _prop in fallbacks) {
          var _value = fallbacks[_prop];
          if (_value != null) {
            result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
          }
        }
      }
  }

  var hasFunctionValue = false;

  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (typeof _value2 === 'function') {
      _value2 = style['$' + _prop2];
      hasFunctionValue = true;
    }
    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  }

  if (!result && !hasFunctionValue) return result;

  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

  return result;
}
});

var StyleRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _toCss2 = _interopRequireDefault(toCss_1);



var _toCssValue2 = _interopRequireDefault(toCssValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var generateClassName = options.generateClassName,
        sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;

    this.key = key;
    this.options = options;
    this.style = style;
    this.selectorText = selector || '.' + generateClassName(this, sheet);
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }

  /**
   * Set selector string.
   * TODO rewrite this #419
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',


    /**
     * Get or set a style property.
     */
    value: function prop(name, nextValue) {
      var $name = typeof this.style[name] === 'function' ? '$' + name : name;
      var currValue = this.style[$name];

      // Its a setter.
      if (nextValue != null) {
        // Don't do anything if the value has not changed.
        if (currValue !== nextValue) {
          nextValue = this.options.jss.plugins.onChangeValue(nextValue, name, this);
          Object.defineProperty(this.style, $name, {
            value: nextValue,
            writable: true
          });
          // Defined if StyleSheet option `link` is true.
          if (this.renderable) this.renderer.setStyle(this.renderable, name, nextValue);
        }
        return this;
      }

      // Its a getter, read the value from the DOM if its not cached.
      if (this.renderable && currValue == null) {
        // Cache the value after we have got it from the DOM first time.
        Object.defineProperty(this.style, $name, {
          value: this.renderer.getStyle(this.renderable, name),
          writable: true
        });
      }

      return this.style[$name];
    }

    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();
      for (var prop in json) {
        this.renderer.setStyle(renderable, prop, json[prop]);
      }return this;
    }

    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
        if (type === 'function') json[prop] = this.style['$' + prop];else if (type !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }
      return json;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.selector, this.style, options);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      var sheet = this.options.sheet;

      // After we modify a selector, ref by old selector needs to be removed.

      if (sheet) sheet.rules.unregister(this);

      this.selectorText = selector;

      if (!this.renderable) {
        // Register the rule with new selector.
        if (sheet) sheet.rules.register(this);
        return;
      }

      var changed = this.renderer.setSelector(this.renderable, selector);

      if (changed && sheet) {
        sheet.rules.register(this);
        return;
      }

      // If selector setter is not implemented, rerender the sheet.
      // We need to delete renderable from the rule, because when sheet.deploy()
      // calls rule.toString, it will get the old selector.
      delete this.renderable;
      if (sheet) {
        sheet.rules.register(this);
        sheet.deploy().link();
      }
    }

    /**
     * Get selector string.
     */
    ,
    get: function get() {
      if (this.renderable) {
        return this.renderer.getSelector(this.renderable);
      }

      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;
});

var cloneStyle_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = cloneStyle;
var isArray = Array.isArray;
function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style;

  // Support string value for SimpleRule.
  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);
  if (typeOfStyle === 'string' || typeOfStyle === 'number') return style;

  // Support array for FontFaceRule.
  if (isArray(style)) return style.map(cloneStyle);

  var newStyle = {};
  for (var name in style) {
    var value = style[name];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }
    newStyle[name] = value;
  }

  return newStyle;
}
});

var createRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;



var _warning2 = _interopRequireDefault(browser);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _cloneStyle2 = _interopRequireDefault(cloneStyle_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a rule instance.
 */
function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;

  var declCopy = (0, _cloneStyle2['default'])(decl);

  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  // It is an at-rule and it has no instance.
  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}
});

var updateRule = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports['default'] = function (rule, data, RuleList) {
  if (rule.type === 'style') {
    for (var prop in rule.style) {
      var value = rule.style[prop];
      if (typeof value === 'function') {
        rule.prop(prop, value(data));
      }
    }
  } else if (rule.rules instanceof RuleList) {
    rule.rules.update(data);
  }
};
});

var linkRule_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */
function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}
});

var RuleList_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _createRule2$$1 = _interopRequireDefault(createRule_1);



var _updateRule2 = _interopRequireDefault(updateRule);



var _linkRule2 = _interopRequireDefault(linkRule_1);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */
var RuleList = function () {

  // Original styles object.
  function RuleList(options) {
    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.options = options;
    this.classes = options.classes;
  }

  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  // Used to ensure correct rules order.

  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options = this.options,
          parent = _options.parent,
          sheet = _options.sheet,
          jss = _options.jss,
          Renderer = _options.Renderer,
          generateClassName = _options.generateClassName;


      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) options.selector = '.' + this.classes[name];

      this.raw[name] = decl;

      var rule = (0, _createRule2$$1['default'])(name, decl, options);
      this.register(rule);

      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);

      return rule;
    }

    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }

    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins;
      // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }

    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule) {
      this.map[rule.key] = rule;
      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        this.classes[rule.key] = rule.selector.substr(1);
      }
    }

    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];
      delete this.classes[rule.key];
      if (rule instanceof _StyleRule2['default']) delete this.map[rule.selector];
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      if (typeof name === 'string') {
        (0, _updateRule2['default'])(this.get(name), data, RuleList);
        return;
      }

      for (var index = 0; index < this.index.length; index++) {
        (0, _updateRule2['default'])(this.index[index], name, RuleList);
      }
    }

    /**
     * Link renderable rules with CSSRuleList.
     */

  }, {
    key: 'link',
    value: function link(cssRules) {
      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];
        var rule = this.get(this.options.sheet.renderer.getSelector(cssRule));
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options);

        // No need to render an empty rule.
        if (!css) continue;

        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;
});

var sheets = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _SheetsRegistry2 = _interopRequireDefault(SheetsRegistry_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */
exports['default'] = new _SheetsRegistry2['default']();
});

var StyleSheet_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _linkRule2 = _interopRequireDefault(linkRule_1);



var _RuleList2 = _interopRequireDefault(RuleList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleSheet = function () {
  function StyleSheet(styles, options) {
    _classCallCheck(this, StyleSheet);

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }

    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }

    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue;

      // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];

      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule;
        // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.
        if (queue) queue.push(rule);else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      }

      // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.
      this.deployed = false;

      return rule;
    }

    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }

    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];
      for (var name in styles) {
        added.push(this.addRule(name, styles[name], options));
      }
      return added;
    }

    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);

      if (!rule) return false;

      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }

    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules();

      // Is undefined when VirtualRenderer is used.
      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'update',
    value: function update(name, data) {
      this.rules.update(name, data);
      return this;
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;
});

var PluginsRegistry_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: []

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    }

    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      }

      // $FlowFixMe
      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

      rule.isProcessed = true;
    }

    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
        // $FlowFixMe
        rule.style = nextStyle;
      }
    }

    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }

    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    }

    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;
});

var SimpleRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;

    this.key = key;
    this.value = value;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';
        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }
        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;
});

var KeyframesRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _RuleList2 = _interopRequireDefault(RuleList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rule for @keyframes
 */
var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }

  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;
});

var ConditionalRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _RuleList2 = _interopRequireDefault(RuleList_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Conditional rule for @media, @supports
 */
var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;
});

var FontFaceRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _toCss2 = _interopRequireDefault(toCss_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';
        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }
        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;
});

var ViewportRule_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _toCss2 = _interopRequireDefault(toCss_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;
});

var rules = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _SimpleRule2 = _interopRequireDefault(SimpleRule_1);



var _KeyframesRule2 = _interopRequireDefault(KeyframesRule_1);



var _ConditionalRule2 = _interopRequireDefault(ConditionalRule_1);



var _FontFaceRule2 = _interopRequireDefault(FontFaceRule_1);



var _ViewportRule2 = _interopRequireDefault(ViewportRule_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']

  /**
   * Generate plugins which will register all rules.
   */
};
exports['default'] = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new classes[key](name, decl, options) : null;
  };
  return { onCreateRule: onCreateRule };
});
});

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof$1(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof$1(document)) === 'object' && document.nodeType === 9;




var module$1 = Object.freeze({
	isBrowser: isBrowser,
	default: isBrowser
});

var DomRenderer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _warning2 = _interopRequireDefault(browser);



var _sheets2 = _interopRequireDefault(sheets);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Get a style property.
 */
function getStyle(rule, prop) {
  try {
    return rule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}

/**
 * Set a style property.
 */
function setStyle(rule, prop, value) {
  try {
    rule.style.setProperty(prop, value);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }
  return true;
}

function extractSelector(cssText) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  return cssText.substr(from, cssText.indexOf('{') - 1);
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7

  /**
   * Get the selector.
   */
};function getSelector(rule) {
  if (rule.type === CSSRuleTypes.STYLE_RULE) return rule.selectorText;
  if (rule.type === CSSRuleTypes.KEYFRAMES_RULE) {
    var name = rule.name;

    if (name) return '@keyframes ' + name;

    // There is no rule.name in the following browsers:
    // - IE 9
    // - Safari 7.1.8
    // - Mobile Safari 9.0.0
    var cssText = rule.cssText;

    return '@' + extractSelector(cssText, cssText.indexOf('keyframes'));
  }

  return extractSelector(rule.cssText);
}

/**
 * Set the selector.
 */
function setSelector(rule, selectorText) {
  rule.selectorText = selectorText;

  // Return false if setter was not successful.
  // Currently works in chrome only.
  return rule.selectorText === selectorText;
}

/**
 * Gets the `head` element upon the first call and caches it.
 */
var getHead = function () {
  var head = void 0;
  return function () {
    if (!head) head = document.head || document.getElementsByTagName('head')[0];
    return head;
  };
}();

/**
 * Find attached sheet with an index higher than the passed one.
 */
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find attached sheet with the highest index.
 */
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find a comment with "jss" inside.
 */
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = _sheets2['default'].registry;


  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element;

    // Otherwise insert after the last attached.
    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  }

  // Try to find a comment placeholder if registry is empty.
  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling;
    // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.
    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}

/**
 * Insert style element into the DOM.
 */
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;

  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;

    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  }

  // Works with iframes and any node types.
  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;

    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getStyle = getStyle;
    this.setStyle = setStyle;
    this.setSelector = setSelector;
    this.getSelector = getSelector;
    this.hasInsertedRules = false;

    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) _sheets2['default'].add(sheet);

    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.type = 'text/css';
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
  }

  /**
   * Insert style element into render tree.
   */


  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;

      // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.
      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }

    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }

    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }

    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      var index = cssRules.length;
      var str = rule.toString();

      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }

      this.hasInsertedRules = true;

      return cssRules[index];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(rule) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (rule === cssRules[_index]) {
          sheet.deleteRule(_index);
          return true;
        }
      }
      return false;
    }

    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;
});

var VirtualRenderer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setStyle',
    value: function setStyle() {
      return true;
    }
  }, {
    key: 'getStyle',
    value: function getStyle() {
      return '';
    }
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getSelector',
    value: function getSelector() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;
});

var _isInBrowser = ( module$1 && isBrowser ) || module$1;

var findRenderer_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = findRenderer;



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



var _DomRenderer2 = _interopRequireDefault(DomRenderer_1);



var _VirtualRenderer2 = _interopRequireDefault(VirtualRenderer_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Find proper renderer.
 * Option `virtual` is used to force use of VirtualRenderer even if DOM is
 * detected, used for testing only.
 */
function findRenderer() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (options.Renderer) return options.Renderer;
  var useVirtual = options.virtual || !_isInBrowser2['default'];
  return useVirtual ? _VirtualRenderer2['default'] : _DomRenderer2['default'];
}
});

var Jss_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



var _PluginsRegistry2 = _interopRequireDefault(PluginsRegistry_1);



var _rules2 = _interopRequireDefault(rules);



var _sheets2 = _interopRequireDefault(sheets);



var _createGenerateClassName2 = _interopRequireDefault(createGenerateClassName);



var _createRule3 = _interopRequireDefault(createRule_1);



var _findRenderer2 = _interopRequireDefault(findRenderer_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.version = "8.1.0";
    this.plugins = new _PluginsRegistry2['default']();

    // eslint-disable-next-line prefer-spread
    this.use.apply(this, _rules2['default']);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var createGenerateClassName$$1 = options.createGenerateClassName || _createGenerateClassName2['default'];
      this.generateClassName = createGenerateClassName$$1();
      this.options = _extends({}, options, {
        createGenerateClassName: createGenerateClassName$$1,
        Renderer: (0, _findRenderer2['default'])(options)
        // eslint-disable-next-line prefer-spread
      });if (options.plugins) this.use.apply(this, options.plugins);
      return this;
    }

    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = options.index;
      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }
      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);
      return sheet;
    }

    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();
      _sheets2['default'].remove(sheet);
      return this;
    }

    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // Enable rule without name for inline styles.
      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      }

      // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var ruleOptions = options;

      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);
      this.plugins.onProcessRule(rule);

      return rule;
    }

    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        return _this.plugins.use(plugin);
      });
      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;
});

var index$11 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.getDynamicStyles = undefined;



Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(getDynamicStyles)['default'];
  }
});



Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(SheetsRegistry_1)['default'];
  }
});



Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(SheetsManager_1)['default'];
  }
});



Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(RuleList_1)['default'];
  }
});



Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(sheets)['default'];
  }
});



var _Jss2 = _interopRequireDefault(Jss_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a new instance of Jss.
 */
var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};

/**
 * A global Jss instance.
 */
exports['default'] = create();
});

var index$15 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = jssExtend;



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isObject = function isObject(obj) {
  return obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && !Array.isArray(obj);
};

/**
 * Recursively extend styles.
 */
function extend(style, rule, sheet) {
  var newStyle = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  if (typeof style.extend === 'string') {
    if (sheet) {
      var refRule = sheet.getRule(style.extend);
      if (refRule) {
        if (refRule === rule) (0, _warning2['default'])(false, '[JSS] A rule tries to extend itself \r\n%s', rule);else if (refRule.options.parent) {
          var originalStyle = refRule.options.parent.rules.raw[style.extend];
          extend(originalStyle, rule, sheet, newStyle);
        }
      }
    }
  } else if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      extend(style.extend[index], rule, sheet, newStyle);
    }
  } else {
    for (var prop in style.extend) {
      if (prop === 'extend') {
        extend(style.extend.extend, rule, sheet, newStyle);
      } else if (isObject(style.extend[prop])) {
        if (!newStyle[prop]) newStyle[prop] = {};
        extend(style.extend[prop], rule, sheet, newStyle[prop]);
      } else {
        newStyle[prop] = style.extend[prop];
      }
    }
  }
  // Copy base style.
  for (var _prop in style) {
    if (_prop === 'extend') continue;
    if (isObject(newStyle[_prop]) && isObject(style[_prop])) {
      extend(style[_prop], rule, sheet, newStyle[_prop]);
    } else if (isObject(style[_prop])) {
      newStyle[_prop] = extend(style[_prop], rule, sheet);
    } else {
      newStyle[_prop] = style[_prop];
    }
  }

  return newStyle;
}

/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */
function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    return style.extend ? extend(style, rule, sheet) : style;
  }

  return { onProcessStyle: onProcessStyle };
}
});

var index$17 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = jssNested;



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);

    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';
        // Replace all & by the parent or prefix & with the parent.
        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, { index: options.index + 1 });

    var nestingLevel = rule.options.nestingLevel;

    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;
    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';

      if (!isNested && !isNestedConditional) continue;

      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector
        // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.
        );if (!replaceRef) replaceRef = getReplaceRef(container
        // Replace all $refs.
        );selector = selector.replace(refRegExp, replaceRef);

        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, _defineProperty({}, rule.key, style[prop]), options);
      }

      delete style[prop];
    }

    return style;
  }

  return { onProcessStyle: onProcessStyle };
}
});

var index$19 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = camelCase;
var regExp = /([A-Z])/g;

/**
 * Replace a string passed from String#replace.
 * @param {String} str
 * @return {String}
 */
function replace(str) {
  return "-" + str.toLowerCase();
}

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */
function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[prop.replace(regExp, replace)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */
function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }
      return style;
    }

    return convertCase(style);
  }

  return { onProcessStyle: onProcessStyle };
}
});

var defaultUnits = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generated jss-default-unit CSS property units
 *
 * @type object
 */
exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',
  // Not existing properties.
  // Used to avoid issues with jss-expand intergration.
  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};
});

var index$21 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = defaultUnit;



var _defaultUnits2 = _interopRequireDefault(defaultUnits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);

/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */
function iterate(prop, value, options) {
  if (!value) return value;

  var convertedValue = value;

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
        break;
      }
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }
      break;
    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
      break;
    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }
      break;
    default:
      break;
  }

  return convertedValue;
}

/**
 * Add unit to numeric values.
 */
function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}
});

var prefix = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; /**
              * Export javascript style and css style vendor prefixes.
              * Based on "transform" support test.
              */

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };
});

var camelize_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Convert dash separated strings to camel cased.
 *
 * @param {String} str
 * @return {String}
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
});

var supportedProperty_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



var _prefix2 = _interopRequireDefault(prefix);



var _camelize2 = _interopRequireDefault(camelize_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */
function supportedProperty(prop) {
  // For server-side rendering.
  if (!el) return prop;

  // We have not tested this prop yet, lets do the test.
  if (cache[prop] != null) return cache[prop];

  // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.
  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  }
  // Test if property is supported with vendor prefix.
  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}
});

var supportedValue_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;



var _isInBrowser2 = _interopRequireDefault(_isInBrowser);



var _prefix2 = _interopRequireDefault(prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var el = void 0;

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */
function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

  var cacheKey = property + value;

  if (cache[cacheKey] != null) return cache[cacheKey];

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  }

  // Value is supported as it is.
  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    // Test value with vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    el.style[property] = value;

    // Value is supported with vendor prefix.
    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false;

  // Reset style value.
  el.style[property] = '';

  return cache[cacheKey];
}
});

var index$25 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;



var _prefix2 = _interopRequireDefault(prefix);



var _supportedProperty2 = _interopRequireDefault(supportedProperty_1);



var _supportedValue2 = _interopRequireDefault(supportedValue_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
}; /**
    * CSS Vendor prefix detection and property feature testing.
    *
    * @copyright Oleg Slobodskoi 2015
    * @website https://github.com/jsstyles/css-vendor
    * @license MIT
    */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];
});

var index$23 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;



var vendor = _interopRequireWildcard(index$25);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * Add vendor prefix to a property name when needed.
 *
 * @param {Rule} rule
 * @api public
 */
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;

      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}
});

var index$27 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;
/**
 * Sort props by length.
 */
function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    var newStyle = {};
    var props = Object.keys(style).sort(sort);
    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }
    return newStyle;
  }

  return { onProcessStyle: onProcessStyle };
}
});

var index$29 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = jssCompose;



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true;

  // Support array of class names `{composes: ['foo', 'bar']}`
  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  }

  // Support space separated class names `{composes: 'foo bar'}`
  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var parent = rule.options.parent;

  // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
      (0, _warning2.default)(false, '[JSS] Referenced rule is not defined. \r\n%s', rule);
      return false;
    }

    if (refRule === rule) {
      (0, _warning2.default)(false, '[JSS] Cyclic composition detected. \r\n%s', rule);
      return false;
    }

    parent.classes[rule.key] += ' ' + parent.classes[refRule.key];

    return true;
  }

  rule.options.parent.classes[rule.key] += ' ' + className;

  return true;
}

/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!style.composes) return style;
    registerClass(rule, style.composes);
    // Remove composes property to prevent infinite loop.
    delete style.composes;
    return style;
  }
  return { onProcessStyle: onProcessStyle };
}
});

var props = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = exports.propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true
};

/**
 * A scheme for converting arrays to regular styles inside of objects.
 * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
 */
var propArrayInObj = exports.propArrayInObj = {
  position: true, // background-position
  size: true // background-size
};

/**
 * A scheme for parsing and building correct styles from passed objects.
 */
var propObj = exports.propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null, // Needed for avoiding comilation issues with jss-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null, // Needed to avoid compilation issues with jss-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null, // Needed to avoid compilation issues with jss-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null, // Needed to avoid compilation issues with jss-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-camel-case
  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: null,
    spread: null,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
};

/**
 * A scheme for converting non-standart properties inside object.
 * For e.g.: include 'border-radius' property inside 'border' object.
 */
var customPropObj = exports.customPropObj = {
  border: {
    radius: 'border-radius'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height', // Needed to avoid compilation issues with jss-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  }
};
});

var index$31 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = jssExpand;



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToString(item, prop, rule);
  });
}

/**
 * Convert array to string.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {Object} sheme, for converting arrays in strings
 * @param {Object} original rule
 * @return {String} converted string
 */
function arrayToString(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value.join(',');
  if (value.length === 0) return '';
  if (Array.isArray(value[0])) return arrayToString(value[0], prop, scheme);
  if (_typeof(value[0]) === 'object') return mapValuesByProp(value, prop, rule);
  return value.join(' ');
}

/**
 * Convert object to string.
 *
 * @param {Object} object of values
 * @param {String} original property
 * @param {Object} original rule
 * @param {Boolean} is fallback prop
 * @return {String} converted string
 */
function objectToString(value, prop, rule, isFallback) {
  if (!(props.propObj[prop] || props.customPropObj[prop])) return '';

  var result = [];

  // Check if exists any non-standart property
  if (props.customPropObj[prop]) {
    value = customPropsToStyle(value, rule, props.customPropObj[prop], isFallback);
  }

  // Pass throught all standart props
  if (Object.keys(value).length) {
    for (var baseProp in props.propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(arrayToString(value[baseProp], baseProp, props.propArrayInObj));
        } else result.push(value[baseProp]);
        continue;
      }

      // Add default value from props config.
      if (props.propObj[prop][baseProp] != null) {
        result.push(props.propObj[prop][baseProp]);
      }
    }
  }

  return result.join(' ');
}

/**
 * Convert custom properties values to styles adding them to rule directly
 *
 * @param {Object} object of values
 * @param {Object} original rule
 * @param {String} property, that contain partial custom properties
 * @param {Boolean} is fallback prop
 * @return {Object} value without custom properties, that was already added to rule
 */
function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop];

    // If current property doesn't exist already in rule - add new one
    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var appendedValue = styleDetector(_defineProperty({}, propName, value[prop]), rule)[propName];

      // Add style directly in rule
      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    }
    // Delete converted property to avoid double converting
    delete value[prop];
  }

  return value;
}

/**
 * Detect if a style needs to be converted.
 *
 * @param {Object} style
 * @param {Object} rule
 * @param {Boolean} is fallback prop
 * @return {Object} convertedStyle
 */
function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }
          continue;
        }

        style[prop] = arrayToString(value, prop, props.propArray);
        // Avoid creating properties with empty values
        if (!style[prop]) delete style[prop];
      }
    } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToString(value, prop, rule, isFallback);
      // Avoid creating properties with empty values
      if (!style[prop]) delete style[prop];
    }

    // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}

/**
 * Adds possibility to write expanded styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }
      return style;
    }

    return styleDetector(style, rule);
  }

  return { onProcessStyle: onProcessStyle };
}
});

var index$33 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports['default'] = jssGlobal;



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';

    this.key = key;
    this.options = options;
    this.rules = new index$11.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], { selector: selector });
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }
  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;

  var rules = style[propKey];

  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;

    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;


    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;

    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
}
});

var index$13 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _jssExtend2 = _interopRequireDefault(index$15);



var _jssNested2 = _interopRequireDefault(index$17);



var _jssCamelCase2 = _interopRequireDefault(index$19);



var _jssDefaultUnit2 = _interopRequireDefault(index$21);



var _jssVendorPrefixer2 = _interopRequireDefault(index$23);



var _jssPropsSort2 = _interopRequireDefault(index$27);



var _jssCompose2 = _interopRequireDefault(index$29);



var _jssExpand2 = _interopRequireDefault(index$31);



var _jssGlobal2 = _interopRequireDefault(index$33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    plugins: [(0, _jssGlobal2.default)(options.global), (0, _jssExtend2.default)(options.extend), (0, _jssNested2.default)(options.nested), (0, _jssCompose2.default)(options.compose), (0, _jssCamelCase2.default)(options.camelCase), (0, _jssDefaultUnit2.default)(options.defaultUnit), (0, _jssExpand2.default)(options.expand), (0, _jssVendorPrefixer2.default)(options.vendorPrefixer), (0, _jssPropsSort2.default)(options.propsSort)]
  };
};
});

var jss = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDynamicStyles = exports.SheetsRegistry = exports.SheetsManager = exports.createGenerateClassNameDefault = undefined;



Object.defineProperty(exports, 'createGenerateClassNameDefault', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(createGenerateClassName)['default'];
  }
});



Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(SheetsManager_1)['default'];
  }
});



Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return index$11.SheetsRegistry;
  }
});
Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return index$11.getDynamicStyles;
  }
});



var _jssPresetDefault2 = _interopRequireDefault(index$13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = (0, index$11.create)((0, _jssPresetDefault2['default'])());
});

var ns = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Namespaces to avoid conflicts on the context.
 */
var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
var providerId = exports.providerId = 'd9f144a51454eae08eb84ab3ade674a5';
var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';
});

var contextTypes = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns$jss$ns$sheetOptio;





var _jss2 = _interopRequireDefault(jss);



var ns$$1 = _interopRequireWildcard(ns);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.jss, (0, index$2.instanceOf)(_jss2['default'].constructor)), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetOptions, index$2.object), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.sheetsRegistry, (0, index$2.instanceOf)(jss.SheetsRegistry)), _defineProperty(_ns$jss$ns$sheetOptio, ns$$1.providerId, index$2.number), _ns$jss$ns$sheetOptio);
});

var shadows_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return [(arguments.length <= 0 ? undefined : arguments[0]) + 'px ' + (arguments.length <= 1 ? undefined : arguments[1]) + 'px ' + (arguments.length <= 2 ? undefined : arguments[2]) + 'px ' + (arguments.length <= 3 ? undefined : arguments[3]) + 'px rgba(0, 0, 0, ' + shadowKeyUmbraOpacity + ')', (arguments.length <= 4 ? undefined : arguments[4]) + 'px ' + (arguments.length <= 5 ? undefined : arguments[5]) + 'px ' + (arguments.length <= 6 ? undefined : arguments[6]) + 'px ' + (arguments.length <= 7 ? undefined : arguments[7]) + 'px rgba(0, 0, 0, ' + shadowKeyPenumbraOpacity + ')', (arguments.length <= 8 ? undefined : arguments[8]) + 'px ' + (arguments.length <= 9 ? undefined : arguments[9]) + 'px ' + (arguments.length <= 10 ? undefined : arguments[10]) + 'px ' + (arguments.length <= 11 ? undefined : arguments[11]) + 'px rgba(0, 0, 0, ' + shadowAmbientShadowOpacity + ')'].join(',');
}

var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];

exports.default = shadows;
});

var transitions = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = undefined;



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = exports.easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0.0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0.0, 0.6, 1)'
};

// Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
//  weak
/* eslint-disable no-param-reassign */

var duration = exports.duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};

var formatMs = exports.formatMs = function formatMs(milliseconds) {
  return Math.round(milliseconds) + 'ms';
};
var isString = exports.isString = function isString(value) {
  return typeof value === 'string';
};
var isNumber = exports.isNumber = function isNumber(value) {
  return !isNaN(parseFloat(value));
};

/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
*/
exports.default = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$duration = options.duration,
        durationOption = _options$duration === undefined ? duration.standard : _options$duration,
        _options$easing = options.easing,
        easingOption = _options$easing === undefined ? easing.easeInOut : _options$easing,
        _options$delay = options.delay,
        delay = _options$delay === undefined ? 0 : _options$delay,
        other = (0, _objectWithoutProperties3.default)(options, ['duration', 'easing', 'delay']);


    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isNumber(durationOption), 'Material-UI: argument "duration" must be a number') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isString(easingOption), 'Material-UI: argument "easing" must be a string') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(isNumber(delay), 'Material-UI: argument "delay" must be a string') : void 0;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)((0, _keys2.default)(other).length === 0, 'Material-UI: unrecognized argument(s) [' + (0, _keys2.default)(other).join(',') + ']') : void 0;

    return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
      return animatedProp + ' ' + formatMs(durationOption) + ' ' + easingOption + ' ' + formatMs(delay);
    }).join(',');
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36;

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
});

var typography = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);

exports.default = createTypography;



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createTypography(palette) {
  var constants = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _constants$fontFamily = constants.fontFamily,
      fontFamily = _constants$fontFamily === undefined ? '"Roboto", "Helvetica", "Arial", sans-serif' : _constants$fontFamily,
      _constants$fontSize = constants.fontSize,
      fontSize = _constants$fontSize === undefined ? 14 : _constants$fontSize,
      _constants$fontWeight = constants.fontWeightLight,
      fontWeightLight = _constants$fontWeight === undefined ? 300 : _constants$fontWeight,
      _constants$fontWeight2 = constants.fontWeightRegular,
      fontWeightRegular = _constants$fontWeight2 === undefined ? 400 : _constants$fontWeight2,
      _constants$fontWeight3 = constants.fontWeightMedium,
      fontWeightMedium = _constants$fontWeight3 === undefined ? 500 : _constants$fontWeight3,
      other = (0, _objectWithoutProperties3.default)(constants, ['fontFamily', 'fontSize', 'fontWeightLight', 'fontWeightRegular', 'fontWeightMedium']);


  process.env.NODE_ENV !== "production" ? (0, _warning2.default)((0, _keys2.default)(other).length === 0, 'Material-UI: unrecognized argument(s) [' + (0, _keys2.default)(other).join(',') + ']') : void 0;

  return {
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    display4: {
      fontSize: 112,
      fontWeight: fontWeightLight,
      fontFamily: fontFamily,
      letterSpacing: '-.04em',
      lineHeight: 1,
      color: palette.text.secondary
    },
    display3: {
      fontSize: 56,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      letterSpacing: '-.02em',
      lineHeight: 1.35,
      color: palette.text.secondary
    },
    display2: {
      fontSize: 45,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: '48px',
      color: palette.text.secondary
    },
    display1: {
      fontSize: 34,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: '40px',
      color: palette.text.secondary
    },
    headline: {
      fontSize: 24,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: '32px',
      color: palette.text.primary
    },
    title: {
      fontSize: 21,
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: 1,
      color: palette.text.primary
    },
    subheading: {
      fontSize: 16,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: '24px',
      color: palette.text.primary
    },
    body2: {
      fontSize: 14,
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: '24px',
      color: palette.text.primary
    },
    body1: {
      fontSize: 14,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: '20px',
      color: palette.text.primary
    },
    caption: {
      fontSize: 12,
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: 1,
      color: palette.text.secondary
    },
    button: {
      fontSize: fontSize,
      textTransform: 'uppercase',
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily
    }
  };
}
});

var breakpoints = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBreakpoints;

var babelPluginFlowReactPropTypes_proptype_Breakpoint = index$2.oneOf(['xs', 'sm', 'md', 'lg', 'xl']); //  weak

// Sorted ASC by size. That's important.
var keys = exports.keys = ['xs', 'sm', 'md', 'lg', 'xl'];

var defaultBreakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultBreakpoints;
  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var values = keys.map(function (key) {
    return breakpoints[key];
  });

  function up(key) {
    var value = void 0;
    // min-width of xs starts at 0
    if (key === 'xs') {
      value = 0;
    } else {
      value = breakpoints[key] || key;
    }
    return '@media (min-width:' + value + unit + ')';
  }

  function down(key) {
    var value = breakpoints[key] || key;
    return '@media (max-width:' + (value - step / 100) + unit + ')';
  }

  function between(start, end) {
    var startIndex = keys.indexOf(start);
    var endIndex = keys.indexOf(end);
    return '@media (min-width:' + values[startIndex] + unit + ') and ' + ('(max-width:' + (values[endIndex + 1] - step / 100) + unit + ')');
  }

  function only(key) {
    var keyIndex = keys.indexOf(key);
    if (keyIndex === keys.length - 1) {
      return up(key);
    }
    return between(key, key);
  }

  function getWidth(key) {
    return breakpoints[key];
  }

  return {
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    getWidth: getWidth
  };
}
});

var indigo_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Wait https://github.com/facebook/flow/issues/380 to be fixed
/* eslint-disable flowtype/require-valid-file-annotation */

var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe',
  contrastDefaultColor: 'light'
};

exports.default = indigo;
});

var pink_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Wait https://github.com/facebook/flow/issues/380 to be fixed
/* eslint-disable flowtype/require-valid-file-annotation */

var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162',
  contrastDefaultColor: 'light'
};

exports.default = pink;
});

var grey_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Wait https://github.com/facebook/flow/issues/380 to be fixed
/* eslint-disable flowtype/require-valid-file-annotation */

var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
  contrastDefaultColor: 'dark'
};

exports.default = grey;
});

var red_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Wait https://github.com/facebook/flow/issues/380 to be fixed
/* eslint-disable flowtype/require-valid-file-annotation */

var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
  contrastDefaultColor: 'light'
};

exports.default = red;
});

var common_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var common = {
  black: '#000',
  white: '#fff',
  transparent: 'rgba(0, 0, 0, 0)',
  fullBlack: 'rgba(0, 0, 0, 1)',
  darkBlack: 'rgba(0, 0, 0, 0.87)',
  lightBlack: 'rgba(0, 0, 0, 0.54)',
  minBlack: 'rgba(0, 0, 0, 0.26)',
  faintBlack: 'rgba(0, 0, 0, 0.12)',
  fullWhite: 'rgba(255, 255, 255, 1)',
  darkWhite: 'rgba(255, 255, 255, 0.87)',
  lightWhite: 'rgba(255, 255, 255, 0.54)'
};

exports.default = common;
});

var colorManipulator = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertColorToString = convertColorToString;
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;
//  weak
/* eslint-disable */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value, min, max) {
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
}

/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of, 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function convertColorToString(color) {
  var type = color.type,
      values = color.values;


  if (type.indexOf('rgb') > -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    for (var i = 0; i < 3; i++) {
      values[i] = parseInt(values[i]);
    }
  }

  var colorString = void 0;

  if (type.indexOf('hsl') > -1) {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + '%, ' + values[2] + '%';
  } else {
    colorString = color.type + '(' + values[0] + ', ' + values[1] + ', ' + values[2];
  }

  if (values.length === 4) {
    colorString += ', ' + color.values[3] + ')';
  } else {
    colorString += ')';
  }

  return colorString;
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
function convertHexToRGB(color) {
  if (color.length === 4) {
    var extendedColor = '#';
    for (var i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i);
    }
    color = extendedColor;
  }

  var values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  };

  return 'rgb(' + values.r + ', ' + values.g + ', ' + values.b + ')';
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  return { type: type, values: values };
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */
function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  var contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);

  return Number(contrastRatio.toFixed(2)); // Truncate at two digits
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);

  if (color.type.indexOf('rgb') > -1) {
    var rgb = color.values.map(function (val) {
      val /= 255; // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)); // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100;
  }
}

/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;

  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}

/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function fade(color, value) {
  color = decomposeColor(color);
  value = clamp(value, 0, 1);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  color.values[3] = value;

  return convertColorToString(color);
}

/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return convertColorToString(color);
}

/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clamp(coefficient, 0, 1);

  if (color.type.indexOf('hsl') > -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') > -1) {
    for (var i = 0; i < 3; i++) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return convertColorToString(color);
}
});

var palette = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dark = exports.light = undefined;



var _keys2 = _interopRequireDefault(keys);

exports.default = createPalette;



var _warning2 = _interopRequireDefault(browser);



var _indigo2 = _interopRequireDefault(indigo_1);



var _pink2 = _interopRequireDefault(pink_1);



var _grey2 = _interopRequireDefault(grey_1);



var _red2 = _interopRequireDefault(red_1);



var _common2 = _interopRequireDefault(common_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var light = exports.light = {
  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
    hint: 'rgba(0, 0, 0, 0.38)',
    icon: 'rgba(0, 0, 0, 0.38)',
    divider: 'rgba(0, 0, 0, 0.12)',
    lightDivider: 'rgba(0, 0, 0, 0.075)'
  },
  input: {
    bottomLine: 'rgba(0, 0, 0, 0.42)',
    helperText: 'rgba(0, 0, 0, 0.54)',
    labelText: 'rgba(0, 0, 0, 0.54)',
    inputText: 'rgba(0, 0, 0, 0.87)',
    disabled: 'rgba(0, 0, 0, 0.42)'
  },
  action: {
    active: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.26)'
  },
  background: {
    default: _grey2.default[50],
    paper: _common2.default.white,
    appBar: _grey2.default[100],
    contentFrame: _grey2.default[200]
  }
}; //  weak

var dark = exports.dark = {
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
    divider: 'rgba(255, 255, 255, 0.12)',
    lightDivider: 'rgba(255, 255, 255, 0.075)'
  },
  input: {
    bottomLine: 'rgba(255, 255, 255, 0.7)',
    helperText: 'rgba(255, 255, 255, 0.7)',
    labelText: 'rgba(255, 255, 255, 0.7)',
    inputText: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.5)'
  },
  action: {
    active: 'rgba(255, 255, 255, 1)',
    disabled: 'rgba(255, 255, 255, 0.3)'
  },
  background: {
    default: '#303030',
    paper: _grey2.default[800],
    appBar: _grey2.default[900],
    contentFrame: _grey2.default[900],
    status: _common2.default.black
  }
};

function getContrastText(color) {
  if ((0, colorManipulator.getContrastRatio)(color, _common2.default.black) < 7) {
    return dark.text.primary;
  }
  return light.text.primary;
}

function createPalette() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$primary = options.primary,
      primary = _options$primary === undefined ? _indigo2.default : _options$primary,
      _options$accent = options.accent,
      accent = _options$accent === undefined ? _pink2.default : _options$accent,
      _options$error = options.error,
      error = _options$error === undefined ? _red2.default : _options$error,
      _options$type = options.type,
      type = _options$type === undefined ? 'light' : _options$type;


  if (process.env.NODE_ENV !== 'production') {
    var difference = function difference(base, compare) {
      if (!compare) {
        compare = {};
      }

      return (0, _keys2.default)(base).filter(function (hue) {
        return !compare[hue];
      });
    };

    var paletteColorError = function paletteColorError(name, base, compare) {
      var missing = difference(base, compare);

      if (missing.length === 0) {
        return;
      }

      process.env.NODE_ENV !== "production" ? (0, _warning2.default)(false, ['Material-UI: ' + name + ' color is missing the following hues: ' + missing.join(','), 'See the default colors, indigo, or pink, as exported from material-ui/colors.'].join('\n')) : void 0;
    };

    paletteColorError('primary', _indigo2.default, primary);
    paletteColorError('accent', _pink2.default, accent);
    paletteColorError('error', _red2.default, error);
  }

  var shades = { dark: dark, light: light };

  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(shades[type], 'Material-UI: the palette type `' + type + '` is not supported.') : void 0;

  return {
    common: _common2.default,
    type: type,
    shades: shades,
    text: shades[type].text,
    input: shades[type].input,
    action: shades[type].action,
    background: shades[type].background,
    primary: primary,
    accent: accent,
    error: error,
    grey: _grey2.default,
    getContrastText: getContrastText
  };
}
});

var zIndex = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


// Needed as the zIndex works with absolute values.
exports.default = {
  mobileStepper: 900,
  menu: 1000,
  appBar: 1100,
  drawerOverlay: 1200,
  navDrawer: 1300,
  dialogOverlay: 1400,
  dialog: 1500,
  layer: 2000,
  popover: 2100,
  snackbar: 2900,
  tooltip: 3000
};
});

var mixins = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMixins;
function createMixins(breakpoints, spacing) {
  return {
    gutters: function gutters(styles) {
      styles.paddingLeft = spacing.unit * 2;
      styles.paddingRight = spacing.unit * 2;
      styles[breakpoints.up('sm')] = {
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3
      };
      return styles;
    }
  };
}
});

var spacing = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/guidelines/layout/metrics-keylines.html#metrics-keylines-baseline-grids
  unit: 8
};
});

var theme = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _shadows2 = _interopRequireDefault(shadows_1);



var _transitions2 = _interopRequireDefault(transitions);



var _typography2 = _interopRequireDefault(typography);



var _breakpoints2 = _interopRequireDefault(breakpoints);



var _palette2 = _interopRequireDefault(palette);



var _zIndex2 = _interopRequireDefault(zIndex);



var _mixins2 = _interopRequireDefault(mixins);



var _spacing2 = _interopRequireDefault(spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$palette = options.palette,
      palette$$1 = _options$palette === undefined ? (0, _palette2.default)() : _options$palette,
      _options$breakpoints = options.breakpoints,
      breakpoints$$1 = _options$breakpoints === undefined ? (0, _breakpoints2.default)() : _options$breakpoints,
      _options$mixins = options.mixins,
      mixins$$1 = _options$mixins === undefined ? (0, _mixins2.default)(breakpoints$$1, _spacing2.default) : _options$mixins,
      _options$typography = options.typography,
      typography$$1 = _options$typography === undefined ? (0, _typography2.default)(palette$$1) : _options$typography,
      more = (0, _objectWithoutProperties3.default)(options, ['palette', 'breakpoints', 'mixins', 'typography']);


  return (0, _extends3.default)({
    direction: 'ltr',
    palette: palette$$1,
    typography: typography$$1,
    shadows: _shadows2.default,
    transitions: _transitions2.default,
    mixins: mixins$$1,
    spacing: _spacing2.default,
    breakpoints: breakpoints$$1,
    zIndex: _zIndex2.default
  }, more);
}

exports.default = createMuiTheme;
});

var defineProperty$5 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
});

var themeListener_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHANNEL = undefined;



var _defineProperty3 = _interopRequireDefault(defineProperty$5);



var _propTypes2 = _interopRequireDefault(index$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CHANNEL = exports.CHANNEL = 'material-ui';

var themeListener = {
  contextTypes: (0, _defineProperty3.default)({}, CHANNEL, _propTypes2.default.object),
  initial: function initial(context) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].getState();
  },
  subscribe: function subscribe(context, cb) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].subscribe(cb);
  }
};

exports.default = themeListener;
});

var types = createCommonjsModule(function (module) {
'use strict';



var _Jss2 = _interopRequireDefault(Jss_1);



var _StyleSheet2 = _interopRequireDefault(StyleSheet_1);



var _ConditionalRule2 = _interopRequireDefault(ConditionalRule_1);



var _KeyframesRule2 = _interopRequireDefault(KeyframesRule_1);



var _StyleRule2 = _interopRequireDefault(StyleRule_1);



var _ViewportRule2 = _interopRequireDefault(ViewportRule_1);



var _SimpleRule2 = _interopRequireDefault(SimpleRule_1);



var _FontFaceRule2 = _interopRequireDefault(FontFaceRule_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
});

var createGenerateClassName_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;



var _warning2 = _interopRequireDefault(browser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_StyleSheet = StyleSheet_1.babelPluginFlowReactPropTypes_proptype_StyleSheet || index$2.any;

// Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's an improved version of
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js
var babelPluginFlowReactPropTypes_proptype_generateClassName = types.babelPluginFlowReactPropTypes_proptype_generateClassName || index$2.any;

var babelPluginFlowReactPropTypes_proptype_Rule = types.babelPluginFlowReactPropTypes_proptype_Rule || index$2.any;

function createGenerateClassName() {
  var ruleCounter = 0;

  return function (rule, sheet) {
    ruleCounter += 1;
    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0;

    if (process.env.NODE_ENV === 'production') {
      return 'c' + ruleCounter;
    }

    if (sheet && sheet.options.meta) {
      return sheet.options.meta + '-' + rule.key + '-' + ruleCounter;
    }

    return rule.key + '-' + ruleCounter;
  };
}
});

var withStyles_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _map2 = _interopRequireDefault(map);



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass$2);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _weakMap2 = _interopRequireDefault(weakMap);



var _minSafeInteger2 = _interopRequireDefault(minSafeInteger);





var _propTypes2 = _interopRequireDefault(index$2);



var _warning2 = _interopRequireDefault(browser);



var _hoistNonReactStatics2 = _interopRequireDefault(index$9);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1$1);



var _createEagerFactory2 = _interopRequireDefault(createEagerFactory$2);



var _getDisplayName2 = _interopRequireDefault(getDisplayName_1$1);



var _contextTypes2 = _interopRequireDefault(contextTypes);



var _jss2 = _interopRequireDefault(jss);



var ns$$1 = _interopRequireWildcard(ns);



var _theme2 = _interopRequireDefault(theme);



var _themeListener2 = _interopRequireDefault(themeListener_1);



var _createGenerateClassName2 = _interopRequireDefault(createGenerateClassName_1);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Use a singleton or the provided one by the context.
var generateClassName = (0, _createGenerateClassName2.default)();

// Global index counter to preserve source order.
// As we create the style sheet during componentWillMount lifecycle,
// children are handled after the parents, so the order of style elements would
// be parent->child. It is a problem though when a parent passes a className
// which needs to override any childs styles. StyleSheet of the child has a higher
// specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.
/* eslint-disable flowtype/require-valid-file-annotation */

var indexCounter = _minSafeInteger2.default;

var sheetsManager = new _weakMap2.default();
var noopTheme = {};

var defaultTheme = void 0;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _theme2.default)();
  return defaultTheme;
}

// Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new, with a `classes` property.
var withStyles = function withStyles(styleSheet) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (BaseComponent) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === undefined ? false : _options$withTheme;

    var factory = (0, _createEagerFactory2.default)(BaseComponent);
    var styleSheets = (Array.isArray(styleSheet) ? styleSheet : [styleSheet]).filter(Boolean);
    var listenToTheme = styleSheets.some(function (currentStyleSheet) {
      return currentStyleSheet.themingEnabled;
    }) || withTheme;

    styleSheets.forEach(function (currentStyleSheet) {
      if (currentStyleSheet.options.index === undefined) {
        indexCounter += 1;
        currentStyleSheet.options.index = indexCounter;
      }
    });

    process.env.NODE_ENV !== "production" ? (0, _warning2.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var Style = function (_Component) {
      (0, _inherits3.default)(Style, _Component);

      function Style(props, context) {
        (0, _classCallCheck3.default)(this, Style);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Style.__proto__ || (0, _getPrototypeOf2.default)(Style)).call(this, props, context));

        _this.state = {};
        _this.unsubscribe = null;
        _this.jss = null;
        _this.sheetOptions = null;
        _this.theme = null;

        _this.jss = _this.context[ns$$1.jss] || _jss2.default;
        _this.sheetsManager = _this.context.sheetsManager || sheetsManager;
        // Attach the styleSheets to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107
        _this.styleSheets = styleSheets;
        _this.sheetOptions = (0, _extends3.default)({
          generateClassName: generateClassName
        }, _this.context[ns$$1.sheetOptions]);
        // We use || as it's lazy evaluated.
        _this.theme = listenToTheme ? _themeListener2.default.initial(context) || getDefaultTheme() : noopTheme;
        return _this;
      }
      // Exposed for test purposes.


      (0, _createClass3.default)(Style, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
          this.attach(this.theme);
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribe = _themeListener2.default.subscribe(this.context, function (theme$$1) {
            var oldTheme = _this2.theme;
            _this2.theme = theme$$1;
            _this2.attach(_this2.theme);

            // Rerender the component so the underlying component gets the theme update.
            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribe !== null) {
            this.unsubscribe();
          }
        }
      }, {
        key: 'attach',
        value: function attach(theme$$1) {
          var _this3 = this;

          this.styleSheets.forEach(function (currentStyleSheet) {
            var sheetManager = _this3.sheetsManager.get(currentStyleSheet);

            if (!sheetManager) {
              sheetManager = new _map2.default();
              _this3.sheetsManager.set(currentStyleSheet, sheetManager);
            }

            var sheetManagerTheme = sheetManager.get(theme$$1);

            if (!sheetManagerTheme) {
              sheetManagerTheme = {
                refs: 0,
                sheet: null
              };
              sheetManager.set(theme$$1, sheetManagerTheme);
            }

            if (sheetManagerTheme.refs === 0) {
              var styles = currentStyleSheet.createStyles(theme$$1);
              var meta = void 0;

              if (process.env.NODE_ENV !== 'production') {
                meta = currentStyleSheet.name ? currentStyleSheet.name : (0, _getDisplayName2.default)(BaseComponent);
                // Sanitize the string as will be used in development to prefix the generated
                // class name.
                meta = meta.replace(new RegExp(/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g), '-');
              }

              var sheet = _this3.jss.createStyleSheet(styles, (0, _extends3.default)({
                meta: meta,
                link: false
              }, _this3.sheetOptions, currentStyleSheet.options));

              sheetManagerTheme.sheet = sheet;
              sheet.attach();

              var sheetsRegistry = _this3.context[ns$$1.sheetsRegistry];
              if (sheetsRegistry) {
                sheetsRegistry.add(sheet);
              }
            }

            sheetManagerTheme.refs += 1;
          });
        }
      }, {
        key: 'detach',
        value: function detach(theme$$1) {
          var _this4 = this;

          this.styleSheets.forEach(function (currentStyleSheet) {
            var sheetManager = _this4.sheetsManager.get(currentStyleSheet);
            var sheetManagerTheme = sheetManager.get(theme$$1);

            sheetManagerTheme.refs -= 1;

            if (sheetManagerTheme.refs === 0) {
              sheetManager.delete(theme$$1);
              sheetManagerTheme.sheet.detach();
              var sheetsRegistry = _this4.context[ns$$1.sheetsRegistry];
              if (sheetsRegistry) {
                sheetsRegistry.remove(sheetManagerTheme.sheet);
              }
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var _this5 = this;

          var _props = this.props,
              classesProp = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties3.default)(_props, ['classes', 'innerRef']);


          var classes = void 0;
          var renderedClasses = this.styleSheets.reduce(function (acc, current) {
            var sheetManager = _this5.sheetsManager.get(current);
            var sheetsManagerTheme = sheetManager.get(_this5.theme);

            return (0, _extends3.default)({}, acc, sheetsManagerTheme.sheet.classes);
          }, {});

          if (classesProp) {
            classes = (0, _extends3.default)({}, renderedClasses, (0, _keys2.default)(classesProp).reduce(function (acc, key) {
              process.env.NODE_ENV !== "production" ? (0, _warning2.default)(renderedClasses[key], ['Material-UI: the key `' + key + '` ' + ('provided to the classes property object is not implemented in ' + (0, _getDisplayName2.default)(BaseComponent) + '.'), 'You can only overrides one of the following: ' + (0, _keys2.default)(renderedClasses).join(',')].join('\n')) : void 0;

              if (classesProp[key] !== undefined) {
                acc[key] = renderedClasses[key] + ' ' + classesProp[key];
              }
              return acc;
            }, {}));
          } else {
            classes = renderedClasses;
          }

          var more = {};

          // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order component.
          if (withTheme) {
            more.theme = this.theme;
          }

          return factory((0, _extends3.default)({
            classes: classes,
            ref: innerRef
          }, more, other));
        }
      }]);
      return Style;
    }(react.Component);

    Style.Naked = BaseComponent;


    Style.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * Useful to extend the style applied to components.
       */
      classes: _propTypes2.default.object,
      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes2.default.func
    } : {};

    Style.contextTypes = (0, _extends3.default)({
      sheetsManager: _propTypes2.default.object
    }, _contextTypes2.default, listenToTheme ? _themeListener2.default.contextTypes : {});

    (0, _hoistNonReactStatics2.default)(Style, BaseComponent);

    if (process.env.NODE_ENV !== 'production') {
      Style.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withStyles');
    }

    return Style;
  };
};

exports.default = withStyles;
});

var SvgIcon_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(index$2);



var _classnames2 = _interopRequireDefault(index$5);



var _createStyleSheet2 = _interopRequireDefault(createStyleSheet_1);



var _withStyles2 = _interopRequireDefault(withStyles_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiSvgIcon', function (theme) {
  return {
    root: {
      display: 'inline-block',
      fill: 'currentColor',
      height: 24,
      width: 24,
      userSelect: 'none',
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    }
  };
}); //  weak

function SvgIcon(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'classes', 'className', 'titleAccess', 'viewBox']);


  return _react2.default.createElement(
    'svg',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, className),
      focusable: false,
      viewBox: viewBox,
      'aria-hidden': titleAccess ? 'false' : 'true'
    }, other),
    titleAccess ? _react2.default.createElement(
      'title',
      null,
      titleAccess
    ) : null,
    children
  );
}

SvgIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Elements passed into the SVG Icon.
   */
  children: _propTypes2.default.node,
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes2.default.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an svg element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the svg will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes2.default.string
} : {};

SvgIcon.defaultProps = {
  viewBox: '0 0 24 24'
};

SvgIcon.muiName = 'SvgIcon';

exports.default = (0, _withStyles2.default)(styleSheet)(SvgIcon);
});

var index$3 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(SvgIcon_1).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var FastForward_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _react2 = _interopRequireDefault(react);



var _pure2 = _interopRequireDefault(pure_1);



var _SvgIcon2 = _interopRequireDefault(index$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z' });

var FastForward = function FastForward(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};

FastForward = (0, _pure2.default)(FastForward);
FastForward.muiName = 'SvgIcon';

exports.default = FastForward;
});

var FastForward = unwrapExports(FastForward_1);

var requirePropFactory_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//  weak

var requirePropFactory = function requirePropFactory(componentNameInError) {
  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error('The property `' + propFullNameSafe + '` of ' + ('`' + componentNameInError + '` must be used on `' + requiredProp + '`.'));
      }

      return null;
    };
  };
  return requireProp;
};

exports.default = requirePropFactory;
});

var $JSON$1 = _core.JSON || (_core.JSON = { stringify: JSON.stringify });
var stringify$2 = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON$1.stringify.apply($JSON$1, arguments);
};

var stringify = createCommonjsModule(function (module) {
module.exports = { "default": stringify$2, __esModule: true };
});

var defineProperty_1 = createCommonjsModule(function (module, exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _defineProperty2 = _interopRequireDefault(defineProperty);

exports.default = defineProperty$$2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//  weak

function defineProperty$$2(o, p, attr) {
  return (0, _defineProperty2.default)(o, p, attr);
}
});

var supports = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passiveOption = exports.detachEvent = exports.attachEvent = exports.removeEventListener = exports.addEventListener = exports.canUseDOM = undefined;



var _defineProperty2 = _interopRequireDefault(defineProperty_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Inspired by https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/ExecutionEnvironment.js
var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

var addEventListener = exports.addEventListener = canUseDOM && 'addEventListener' in window;
var removeEventListener = exports.removeEventListener = canUseDOM && 'removeEventListener' in window;

// IE8+ Support
var attachEvent = exports.attachEvent = canUseDOM && 'attachEvent' in window;
var detachEvent = exports.detachEvent = canUseDOM && 'detachEvent' in window;

// Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js
var passiveOption = exports.passiveOption = function () {
  var cache = null;

  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, (0, _defineProperty2.default)({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (e) {} // eslint-disable-line no-empty

    cache = supportsPassiveOption;

    return supportsPassiveOption;
  }();
}();
});

var index$38 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass$2);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _typeof3 = _interopRequireDefault(_typeof_1);



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _assign2 = _interopRequireDefault(assign);

exports.withOptions = withOptions;



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(index$2);



var _shallowEqual2 = _interopRequireDefault(shallowEqual_1);



var _warning2 = _interopRequireDefault(browser);



var supports$$1 = _interopRequireWildcard(supports);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEventOptions = {
  capture: false,
  passive: false
};
/* eslint-disable prefer-spread */

function mergeDefaultEventOptions(options) {
  return (0, _assign2.default)({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(supports$$1.passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  if (supports$$1.addEventListener) {
    target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports$$1.attachEvent) {
    // IE8+ Support
    target.attachEvent('on' + eventName, function () {
      callback.call(target);
    });
  }
}

function off(target, eventName, callback, options) {
  if (supports$$1.removeEventListener) {
    target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
  } else if (supports$$1.detachEvent) {
    // IE8+ Support
    target.detachEvent('on' + eventName, callback);
  }
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = (0, _objectWithoutProperties3.default)(props, ['children', 'target']);


  (0, _keys2.default)(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];
    var type = typeof prop === 'undefined' ? 'undefined' : (0, _typeof3.default)(prop);
    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({ capture: capture }));
    }
  });
}

function withOptions(handler, options) {
  process.env.NODE_ENV !== "production" ? (0, _warning2.default)(options, 'react-event-listener: Should be specified options in withOptions.') : void 0;

  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener = function (_Component) {
  (0, _inherits3.default)(EventListener, _Component);

  function EventListener() {
    (0, _classCallCheck3.default)(this, EventListener);
    return (0, _possibleConstructorReturn3.default)(this, (EventListener.__proto__ || (0, _getPrototypeOf2.default)(EventListener)).apply(this, arguments));
  }

  (0, _createClass3.default)(EventListener, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.addListeners();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !(0, _shallowEqual2.default)(this.props, nextProps);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.removeListeners();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.addListeners();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.removeListeners();
    }
  }, {
    key: 'addListeners',
    value: function addListeners() {
      this.applyListeners(on);
    }
  }, {
    key: 'removeListeners',
    value: function removeListeners() {
      this.applyListeners(off);
    }
  }, {
    key: 'applyListeners',
    value: function applyListeners(onOrOff) {
      var target = this.props.target;


      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(this.props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children || null;
    }
  }]);
  return EventListener;
}(react.Component);

process.env.NODE_ENV !== "production" ? EventListener.propTypes = {
  /**
   * You can provide a single child too.
   */
  children: _propTypes2.default.element,
  /**
   * The DOM target to listen to.
   */
  target: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]).isRequired
} : void 0;
exports.default = EventListener;
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$1(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$1;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$4.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol$1(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol$1;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;
var nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

var withTheme_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass$2);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

exports.default = withTheme;





var _createEagerFactory2 = _interopRequireDefault(createEagerFactory$2);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1$1);



var _theme2 = _interopRequireDefault(theme);



var _themeListener2 = _interopRequireDefault(themeListener_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultTheme = void 0; //  weak

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _theme2.default)();
  return defaultTheme;
}

// Provide the theme object as a property to the input component.
function withTheme(BaseComponent) {
  var factory = (0, _createEagerFactory2.default)(BaseComponent);

  var WithTheme = function (_Component) {
    (0, _inherits3.default)(WithTheme, _Component);

    function WithTheme(props, context) {
      (0, _classCallCheck3.default)(this, WithTheme);

      var _this = (0, _possibleConstructorReturn3.default)(this, (WithTheme.__proto__ || (0, _getPrototypeOf2.default)(WithTheme)).call(this, props, context));

      _this.state = {};
      _this.unsubscribe = null;

      _this.state = {
        // We use || as it's lazy evaluated.
        theme: _themeListener2.default.initial(context) || getDefaultTheme()
      };
      return _this;
    }
    // Exposed for test purposes.


    (0, _createClass3.default)(WithTheme, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;

        this.unsubscribe = _themeListener2.default.subscribe(this.context, function (theme$$2) {
          _this2.setState({ theme: theme$$2 });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.unsubscribe !== null) {
          this.unsubscribe();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return factory((0, _extends3.default)({ theme: this.state.theme }, this.props));
      }
    }]);
    return WithTheme;
  }(react.Component);

  WithTheme.Naked = BaseComponent;


  WithTheme.contextTypes = _themeListener2.default.contextTypes;
  WithTheme.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withTheme');

  return WithTheme;
}
});

var withWidth_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isWidthDown = exports.isWidthUp = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass$2);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _react2 = _interopRequireDefault(react);



var _reactEventListener2 = _interopRequireDefault(index$38);



var _propTypes2 = _interopRequireDefault(index$2);



var _debounce2 = _interopRequireDefault(debounce_1);



var _createEagerFactory2 = _interopRequireDefault(createEagerFactory$2);



var _wrapDisplayName2 = _interopRequireDefault(wrapDisplayName_1$1);



var _withTheme2 = _interopRequireDefault(withTheme_1);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * By default, returns true if screen width is the same or greater than the given breakpoint.
 *
 * @param screenWidth
 * @param breakpoint
 * @param inclusive - defaults to true
 */
//  weak

var isWidthUp = exports.isWidthUp = function isWidthUp(breakpoint, screenWidth) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return breakpoints.keys.indexOf(breakpoint) <= breakpoints.keys.indexOf(screenWidth);
  }
  return breakpoints.keys.indexOf(breakpoint) < breakpoints.keys.indexOf(screenWidth);
};

/**
 * By default, returns true if screen width is the same or less than the given breakpoint.
 *
 * @param screenWidth
 * @param breakpoint
 * @param inclusive - defaults to true
 */
var isWidthDown = exports.isWidthDown = function isWidthDown(breakpoint, screenWidth) {
  var inclusive = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (inclusive) {
    return breakpoints.keys.indexOf(screenWidth) <= breakpoints.keys.indexOf(breakpoint);
  }
  return breakpoints.keys.indexOf(screenWidth) < breakpoints.keys.indexOf(breakpoint);
};

function withWidth() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$resizeInterv = options.resizeInterval,
      resizeInterval = _options$resizeInterv === undefined ? 166 : _options$resizeInterv;


  return function (BaseComponent) {
    var factory = (0, _createEagerFactory2.default)(BaseComponent);

    var Width = function (_Component) {
      (0, _inherits3.default)(Width, _Component);

      function Width() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Width);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Width.__proto__ || (0, _getPrototypeOf2.default)(Width)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
          width: undefined
        }, _this.handleResize = (0, _debounce2.default)(function () {
          _this.updateWidth(window.innerWidth);
        }, resizeInterval), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      }

      (0, _createClass3.default)(Width, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.updateWidth(window.innerWidth);
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.handleResize.cancel();
        }
      }, {
        key: 'updateWidth',
        value: function updateWidth(innerWidth) {
          var breakpoints$$2 = this.props.theme.breakpoints;
          var width = null;

          /**
           * Start with the slowest value as low end devices often have a small screen.
           *
           * innerWidth |0      xs      sm      md      lg      xl
           *            |-------|-------|-------|-------|-------|------>
           * width      |  xs   |  xs   |  sm   |  md   |  lg   |  xl
           */
          var index = 1;
          while (width === null && index < breakpoints$$2.keys.length) {
            var currentWidth = breakpoints$$2.keys[index];

            // @media are inclusive, so reproduce the behavior here.
            if (innerWidth < breakpoints$$2.getWidth(currentWidth)) {
              width = breakpoints$$2.keys[index - 1];
              break;
            }

            index += 1;
          }

          width = width || 'xl';

          if (width !== this.state.width) {
            this.setState({
              width: width
            });
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _props = this.props,
              initialWidth = _props.initialWidth,
              theme = _props.theme,
              width = _props.width,
              other = (0, _objectWithoutProperties3.default)(_props, ['initialWidth', 'theme', 'width']);

          var props = (0, _extends3.default)({
            width: width || this.state.width || initialWidth
          }, other);

          /**
           * When rendering the component on the server,
           * we have no idea about the client browser screen width.
           * In order to prevent blinks and help the reconciliation of the React tree
           * we are not rendering the child component.
           *
           * An alternative is to use the `initialWidth` property.
           */
          if (props.width === undefined) {
            return null;
          }

          return _react2.default.createElement(
            _reactEventListener2.default,
            { target: 'window', onResize: this.handleResize },
            factory(props)
          );
        }
      }]);
      return Width;
    }(react.Component);

    Width.propTypes = process.env.NODE_ENV !== "production" ? {
      /**
       * As `window.innerWidth` is unavailable on the server,
       * we default to rendering an empty componenent during the first mount.
       * In some situation you might want to use an heristic to approximate
       * the screen width of the client browser screen width.
       *
       * For instance, you could be using the user-agent or the client-hints.
       * http://caniuse.com/#search=client%20hint
       */
      initialWidth: _propTypes2.default.oneOf(breakpoints.keys),
      /**
       * @ignore
       */
      theme: _propTypes2.default.object.isRequired,
      /**
       * Bypass the width calculation logic.
       */
      width: _propTypes2.default.oneOf(breakpoints.keys)
    } : {};

    if (process.env.NODE_ENV !== 'production') {
      Width.displayName = (0, _wrapDisplayName2.default)(BaseComponent, 'withWidth');
    }

    return (0, _withTheme2.default)(Width);
  };
}

exports.default = withWidth;
});

var babelPluginFlowReactPropTypes_proptype_Element = react.babelPluginFlowReactPropTypes_proptype_Element || index$2.any;

var babelPluginFlowReactPropTypes_proptype_Breakpoint = breakpoints.babelPluginFlowReactPropTypes_proptype_Breakpoint || index$2.any;

var babelPluginFlowReactPropTypes_proptype_HiddenProps = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : index$2.shape(babelPluginFlowReactPropTypes_proptype_Element),
  className: index$2.string,
  only: index$2.oneOfType([typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : index$2.shape(babelPluginFlowReactPropTypes_proptype_Breakpoint), index$2.arrayOf(typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : index$2.shape(babelPluginFlowReactPropTypes_proptype_Breakpoint))]),
  xsUp: index$2.bool,
  smUp: index$2.bool,
  mdUp: index$2.bool,
  lgUp: index$2.bool,
  xlUp: index$2.bool,
  xsDown: index$2.bool,
  smDown: index$2.bool,
  mdDown: index$2.bool,
  lgDown: index$2.bool,
  xlDown: index$2.bool
};

var types$2 = {

};

var HiddenJs_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _stringify2 = _interopRequireDefault(stringify);



var _keys2 = _interopRequireDefault(keys);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _extends3 = _interopRequireDefault(_extends);



var _warning2 = _interopRequireDefault(browser);





var _withWidth2 = _interopRequireDefault(withWidth_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_HiddenProps = types$2.babelPluginFlowReactPropTypes_proptype_HiddenProps || index$2.any;

var babelPluginFlowReactPropTypes_proptype_Props = (0, _extends3.default)({}, babelPluginFlowReactPropTypes_proptype_HiddenProps === index$2.any ? {} : babelPluginFlowReactPropTypes_proptype_HiddenProps, {
  width: index$2.string.isRequired
});


/**
 * @ignore - internal component.
 */
function HiddenJs(props) {
  var children = props.children,
      only = props.only,
      xsUp = props.xsUp,
      smUp = props.smUp,
      mdUp = props.mdUp,
      lgUp = props.lgUp,
      xlUp = props.xlUp,
      xsDown = props.xsDown,
      smDown = props.smDown,
      mdDown = props.mdDown,
      lgDown = props.lgDown,
      xlDown = props.xlDown,
      width = props.width,
      other = (0, _objectWithoutProperties3.default)(props, ['children', 'only', 'xsUp', 'smUp', 'mdUp', 'lgUp', 'xlUp', 'xsDown', 'smDown', 'mdDown', 'lgDown', 'xlDown', 'width']);


  var visible = true;

  // `only` check is faster to get out sooner if used.
  if (only) {
    if (Array.isArray(only)) {
      for (var i = 0; i < only.length; i += 1) {
        var breakpoint = only[i];
        if (width === breakpoint) {
          visible = false;
          break;
        }
      }
    } else if (only && width === only) {
      visible = false;
    }
  }

  // Allow `only` to be combined with other props. If already hidden, no need to check others.
  if (visible) {
    // determine visibility based on the smallest size up
    for (var _i = 0; _i < breakpoints.keys.length; _i += 1) {
      var _breakpoint = breakpoints.keys[_i];
      var breakpointUp = props[_breakpoint + 'Up'];
      var breakpointDown = props[_breakpoint + 'Down'];
      if (breakpointUp && (0, withWidth_1.isWidthUp)(_breakpoint, width) || breakpointDown && (0, withWidth_1.isWidthDown)(_breakpoint, width)) {
        visible = false;
        break;
      }
    }
  }

  if (!visible) {
    return null;
  }

  process.env.NODE_ENV !== "production" ? (0, _warning2.default)((0, _keys2.default)(other).length === 0, 'Material-UI: unsupported properties received ' + (0, _stringify2.default)(other)) : void 0;

  return children;
}

exports.default = (0, _withWidth2.default)()(HiddenJs);
});

var Hidden_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _react2 = _interopRequireDefault(react);



var _HiddenJs2 = _interopRequireDefault(HiddenJs_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = react.babelPluginFlowReactPropTypes_proptype_Element || index$2.any;

var babelPluginFlowReactPropTypes_proptype_Breakpoint = breakpoints.babelPluginFlowReactPropTypes_proptype_Breakpoint || index$2.any;

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : index$2.shape(babelPluginFlowReactPropTypes_proptype_Element),
  className: index$2.string,
  only: index$2.oneOfType([typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : index$2.shape(babelPluginFlowReactPropTypes_proptype_Breakpoint), index$2.arrayOf(typeof babelPluginFlowReactPropTypes_proptype_Breakpoint === 'function' ? babelPluginFlowReactPropTypes_proptype_Breakpoint : index$2.shape(babelPluginFlowReactPropTypes_proptype_Breakpoint))]),
  xsUp: index$2.bool,
  smUp: index$2.bool,
  mdUp: index$2.bool,
  lgUp: index$2.bool,
  xlUp: index$2.bool,
  xsDown: index$2.bool,
  smDown: index$2.bool,
  mdDown: index$2.bool,
  lgDown: index$2.bool,
  xlDown: index$2.bool,
  implementation: index$2.oneOf(['js', 'css'])
};


/**
 * Responsively hides children based on the selected implementation.
 */
function Hidden(props) {
  var implementation = props.implementation,
      other = (0, _objectWithoutProperties3.default)(props, ['implementation']);


  if (implementation === 'js') {
    return _react2.default.createElement(_HiddenJs2.default, other);
  }

  throw new Error('<Hidden implementation="css" /> is not yet implemented');
}

Hidden.propTypes = process.env.NODE_ENV !== "production" ? babelPluginFlowReactPropTypes_proptype_Props : {};
Hidden.defaultProps = {
  implementation: 'js',
  xsUp: false,
  smUp: false,
  mdUp: false,
  lgUp: false,
  xlUp: false,
  xsDown: false,
  smDown: false,
  mdDown: false,
  lgDown: false,
  xlDown: false
};

exports.default = Hidden;
});

var index$36 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Hidden_1).default;
  }
});



Object.defineProperty(exports, 'HiddenJs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(HiddenJs_1).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var Grid_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _extends3 = _interopRequireDefault(_extends);



var _defineProperty3 = _interopRequireDefault(defineProperty$5);

var _ref;
/**
 * A grid component using the following libs as inspiration.
 *
 * For the implementation:
 * - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
 * - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
 * - https://github.com/roylee0704/react-flexbox-grid
 * - https://material.angularjs.org/latest/layout/introduction
 *
 * Follow this flexbox Guide to better understand the underlying model:
 * - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
 */



var _react2 = _interopRequireDefault(react);



var _classnames2 = _interopRequireDefault(index$5);



var _createStyleSheet2 = _interopRequireDefault(createStyleSheet_1);



var _withStyles2 = _interopRequireDefault(withStyles_1);



var _requirePropFactory2 = _interopRequireDefault(requirePropFactory_1);



var _Hidden2 = _interopRequireDefault(index$36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Element = react.babelPluginFlowReactPropTypes_proptype_Element || index$2.any;

var babelPluginFlowReactPropTypes_proptype_HiddenProps = types$2.babelPluginFlowReactPropTypes_proptype_HiddenProps || index$2.any;

var GUTTERS = [0, 8, 16, 24, 40];
var GRID_SIZES = [true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  // For the auto layouting
  var styles = (0, _defineProperty3.default)({}, 'grid-' + breakpoint, {
    flexBasis: 0,
    flexGrow: 1,
    maxWidth: '100%'
  });

  GRID_SIZES.forEach(function (size) {
    if (typeof size === 'boolean') {
      // Skip the first one as handle above.
      return;
    }

    // Only keep 6 significant numbers.
    var width = Math.round(size / 12 * Math.pow(10, 6)) / Math.pow(10, 4) + '%';

    /* eslint-disable max-len */
    // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/b0508a975d711d6b24c01f57dd5445c22699fac4/scss/mixins/_grid.scss#L69
    /* eslint-enable max-len */
    styles['grid-' + breakpoint + '-' + size] = {
      flexBasis: width,
      maxWidth: width
    };
  });

  // No need for a media query for the first size.
  if (breakpoint === 'xs') {
    (0, _extends3.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};

  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles['spacing-' + breakpoint + '-' + spacing] = {
      margin: -spacing / 2,
      width: 'calc(100% + ' + spacing + 'px)',
      '& > $typeItem': {
        padding: spacing / 2
      }
    };
  });

  return styles;
}

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiGrid', function (theme) {
  // Default CSS values
  // flex: '0 1 auto',
  // flexDirection: 'row',
  // alignItems: 'flex-start',
  // flexWrap: 'nowrap',
  // justifyContent: 'flex-start',

  return (0, _extends3.default)({
    typeContainer: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    typeItem: {
      boxSizing: 'border-box',
      flex: '0 0 auto',
      margin: '0' // For instance, it's useful when used with a `figure` element.
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'align-xs-center': {
      alignItems: 'center'
    },
    'align-xs-flex-start': {
      alignItems: 'flex-start'
    },
    'align-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'align-xs-baseline': {
      alignItems: 'baseline'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), theme.breakpoints.keys.reduce(function (styles, key) {
    // Use side effect for performance.
    generateGrid(styles, theme, key);

    return styles;
  }, {}));
});

var babelPluginFlowReactPropTypes_proptype_Props = {
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : index$2.shape(babelPluginFlowReactPropTypes_proptype_Element),
  classes: index$2.object,
  className: index$2.string,
  component: index$2.oneOfType([index$2.string, index$2.func]),
  container: index$2.bool,
  item: index$2.bool,
  align: index$2.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  direction: index$2.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  spacing: index$2.oneOf([0, 8, 16, 24, 40]),
  hidden: typeof babelPluginFlowReactPropTypes_proptype_HiddenProps === 'function' ? babelPluginFlowReactPropTypes_proptype_HiddenProps : index$2.shape(babelPluginFlowReactPropTypes_proptype_HiddenProps),
  justify: index$2.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  wrap: index$2.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  xs: index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])]),
  sm: index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])]),
  md: index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])]),
  lg: index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])]),
  xl: index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])])
};


function Grid(props) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      component = props.component,
      container = props.container,
      item = props.item,
      align = props.align,
      direction = props.direction,
      spacing = props.spacing,
      hidden = props.hidden,
      justify = props.justify,
      wrap = props.wrap,
      xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'component', 'container', 'item', 'align', 'direction', 'spacing', 'hidden', 'justify', 'wrap', 'xs', 'sm', 'md', 'lg', 'xl']);


  var className = (0, _classnames2.default)((_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.typeContainer, container), (0, _defineProperty3.default)(_classNames, classes.typeItem, item), (0, _defineProperty3.default)(_classNames, classes['spacing-xs-' + String(spacing)], container && spacing !== 0), (0, _defineProperty3.default)(_classNames, classes['direction-xs-' + String(direction)], direction !== Grid.defaultProps.direction), (0, _defineProperty3.default)(_classNames, classes['wrap-xs-' + String(wrap)], wrap !== Grid.defaultProps.wrap), (0, _defineProperty3.default)(_classNames, classes['align-xs-' + String(align)], align !== Grid.defaultProps.align), (0, _defineProperty3.default)(_classNames, classes['justify-xs-' + String(justify)], justify !== Grid.defaultProps.justify), (0, _defineProperty3.default)(_classNames, classes['grid-xs'], xs === true), (0, _defineProperty3.default)(_classNames, classes['grid-xs-' + String(xs)], xs && xs !== true), (0, _defineProperty3.default)(_classNames, classes['grid-sm'], sm === true), (0, _defineProperty3.default)(_classNames, classes['grid-sm-' + String(sm)], sm && sm !== true), (0, _defineProperty3.default)(_classNames, classes['grid-md'], md === true), (0, _defineProperty3.default)(_classNames, classes['grid-md-' + String(md)], md && md !== true), (0, _defineProperty3.default)(_classNames, classes['grid-lg'], lg === true), (0, _defineProperty3.default)(_classNames, classes['grid-lg-' + String(lg)], lg && lg !== true), (0, _defineProperty3.default)(_classNames, classes['grid-xl'], xl === true), (0, _defineProperty3.default)(_classNames, classes['grid-xl-' + String(xl)], xl && xl !== true), _classNames), classNameProp);
  var gridProps = (0, _extends3.default)({ className: className }, other);

  // workaround: see https://github.com/facebook/flow/issues/1660#issuecomment-297775427
  var ComponentProp = component || Grid.defaultProps.component;

  if (hidden) {
    return _react2.default.createElement(
      _Hidden2.default,
      hidden,
      _react2.default.createElement(ComponentProp, gridProps)
    );
  }

  return _react2.default.createElement(ComponentProp, gridProps);
}

Grid.propTypes = process.env.NODE_ENV !== "production" ? (_ref = {
  classes: index$2.object.isRequired,
  children: typeof babelPluginFlowReactPropTypes_proptype_Element === 'function' ? babelPluginFlowReactPropTypes_proptype_Element : index$2.shape(babelPluginFlowReactPropTypes_proptype_Element)
}, (0, _defineProperty3.default)(_ref, 'classes', index$2.object), (0, _defineProperty3.default)(_ref, 'className', index$2.string), (0, _defineProperty3.default)(_ref, 'component', index$2.oneOfType([index$2.string, index$2.func])), (0, _defineProperty3.default)(_ref, 'container', index$2.bool), (0, _defineProperty3.default)(_ref, 'item', index$2.bool), (0, _defineProperty3.default)(_ref, 'align', index$2.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline'])), (0, _defineProperty3.default)(_ref, 'direction', index$2.oneOf(['row', 'row-reverse', 'column', 'column-reverse'])), (0, _defineProperty3.default)(_ref, 'spacing', index$2.oneOf([0, 8, 16, 24, 40])), (0, _defineProperty3.default)(_ref, 'hidden', typeof babelPluginFlowReactPropTypes_proptype_HiddenProps === 'function' ? babelPluginFlowReactPropTypes_proptype_HiddenProps : index$2.shape(babelPluginFlowReactPropTypes_proptype_HiddenProps)), (0, _defineProperty3.default)(_ref, 'justify', index$2.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around'])), (0, _defineProperty3.default)(_ref, 'wrap', index$2.oneOf(['nowrap', 'wrap', 'wrap-reverse'])), (0, _defineProperty3.default)(_ref, 'xs', index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])])), (0, _defineProperty3.default)(_ref, 'sm', index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])])), (0, _defineProperty3.default)(_ref, 'md', index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])])), (0, _defineProperty3.default)(_ref, 'lg', index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])])), (0, _defineProperty3.default)(_ref, 'xl', index$2.oneOfType([index$2.bool, index$2.oneOf([1]), index$2.oneOf([2]), index$2.oneOf([3]), index$2.oneOf([4]), index$2.oneOf([5]), index$2.oneOf([6]), index$2.oneOf([7]), index$2.oneOf([8]), index$2.oneOf([9]), index$2.oneOf([10]), index$2.oneOf([11]), index$2.oneOf([12])])), _ref) : {};
Grid.defaultProps = {
  align: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  hidden: undefined,
  item: false,
  justify: 'flex-start',
  spacing: 16,
  wrap: 'wrap'
};

/**
 * Add a wrapper component to generate some helper messages in the development
 * environment.
 */
var GridWrapper = Grid; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV !== 'production') {
  var requireProp = (0, _requirePropFactory2.default)('Grid');

  GridWrapper = function GridWrapper(props) {
    return _react2.default.createElement(Grid, props);
  };

  GridWrapper.propTypes = {
    align: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item')
  };
}

exports.default = (0, _withStyles2.default)(styleSheet)(GridWrapper);
});

var index$35 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(Grid_1).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var Grid = unwrapExports(index$35);

var FastRewind_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _react2 = _interopRequireDefault(react);



var _pure2 = _interopRequireDefault(pure_1);



var _SvgIcon2 = _interopRequireDefault(index$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z' });

var FastRewind = function FastRewind(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};

FastRewind = (0, _pure2.default)(FastRewind);
FastRewind.muiName = 'SvgIcon';

exports.default = FastRewind;
});

var FastRewind = unwrapExports(FastRewind_1);

var CircularProgress_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _defineProperty3 = _interopRequireDefault(defineProperty$5);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(index$2);



var _classnames2 = _interopRequireDefault(index$5);



var _createStyleSheet2 = _interopRequireDefault(createStyleSheet_1);



var _withStyles2 = _interopRequireDefault(withStyles_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var THICKNESS = 3.6; //  weak

var PI = 3.1416; // Simple version of Math.PI for the CSS generated.

function getRelativeValue(value, min, max) {
  var clampedValue = Math.min(Math.max(min, value), max);
  return (clampedValue - min) / (max - min);
}

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiCircularProgress', function (theme) {
  return {
    root: {
      display: 'inline-block'
    },
    primaryColor: {
      color: theme.palette.primary[500]
    },
    accentColor: {
      color: theme.palette.accent.A200
    },
    svg: {
      transform: 'rotate(-90deg)'
    },
    indeterminateSvg: {
      // The main animation is loop 4 times (4 / 3 * 1300).
      animation: 'mui-rotate-progress-circle 1733ms linear infinite'
    },
    circle: {
      stroke: 'currentColor',
      strokeLinecap: 'square',
      transition: theme.transitions.create('all', { duration: 1300 })
    },
    indeterminateCircle: {
      strokeDasharray: '1, calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
      strokeDashoffset: '0%',
      animation: 'mui-scale-progress-circle 1300ms ' + theme.transitions.easing.easeInOut + ' infinite'
    },
    determinateCircle: {
      willChange: 'strokeDasharray',
      strokeDashoffset: '0%'
    },
    '@keyframes mui-rotate-progress-circle': {
      '0%': {
        transform: 'rotate(-90deg)'
      },
      '100%': {
        transform: 'rotate(270deg)'
      }
    },
    '@keyframes mui-scale-progress-circle': {
      '8%': {
        strokeDasharray: '1, calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 0
      },
      '50%, 58%': {
        // eslint-disable-next-line max-len
        strokeDasharray: 'calc((65% - ' + THICKNESS + 'px) * ' + PI + '), calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 'calc((25% - ' + THICKNESS + 'px) * -' + PI + ')'
      },
      '100%': {
        // eslint-disable-next-line max-len
        strokeDasharray: 'calc((65% - ' + THICKNESS + 'px) * ' + PI + '), calc((100% - ' + THICKNESS + 'px) * ' + PI + ')',
        strokeDashoffset: 'calc((99% - ' + THICKNESS + 'px) * -' + PI + ')'
      }
    }
  };
});

function CircularProgress(props) {
  var _classNames2;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      size = props.size,
      mode = props.mode,
      value = props.value,
      min = props.min,
      max = props.max,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'size', 'mode', 'value', 'min', 'max']);

  var radius = size / 2;
  var rootProps = {};
  var svgClasses = (0, _classnames2.default)(classes.svg, (0, _defineProperty3.default)({}, classes.indeterminateSvg, mode === 'indeterminate'));

  var circleClasses = (0, _classnames2.default)(classes.circle, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.indeterminateCircle, mode === 'indeterminate'), (0, _defineProperty3.default)(_classNames2, classes.determinateCircle, mode === 'determinate'), _classNames2));

  var circleStyle = {};
  if (mode === 'determinate') {
    var relVal = getRelativeValue(value, min, max);
    circleStyle.strokeDasharray = 'calc(((100% - ' + THICKNESS + 'px) * ' + PI + ') * ' + relVal + '),' + ('calc((100% - ' + THICKNESS + 'px) * ' + PI + ')');
    rootProps['aria-valuenow'] = value;
    rootProps['aria-valuemin'] = min;
    rootProps['aria-valuemax'] = max;
  }

  var colorClass = classes[color + 'Color'];

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({
      className: (0, _classnames2.default)(classes.root, colorClass, className),
      style: { width: size, height: size },
      role: 'progressbar'
    }, rootProps, other),
    _react2.default.createElement(
      'svg',
      { className: svgClasses, viewBox: '0 0 ' + size + ' ' + size },
      _react2.default.createElement('circle', {
        className: circleClasses,
        style: circleStyle,
        cx: radius,
        cy: radius,
        r: radius - THICKNESS / 2,
        fill: 'none',
        strokeWidth: THICKNESS,
        strokeMiterlimit: '20'
      })
    )
  );
}

CircularProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['primary', 'accent']),
  /**
   * The max value of progress in determinate mode.
   */
  max: _propTypes2.default.number,
  /**
   * The min value of progress in determinate mode.
   */
  min: _propTypes2.default.number,
  /**
   * The mode of show your progress. Indeterminate
   * for when there is no value for progress.
   * Determinate for controlled progress value.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate']),
  /**
   * The size of the circle.
   */
  size: _propTypes2.default.number,
  /**
   * The value of progress in determinate mode.
  */
  value: _propTypes2.default.number
} : {};

CircularProgress.defaultProps = {
  color: 'primary',
  size: 40,
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100
};

exports.default = (0, _withStyles2.default)(styleSheet)(CircularProgress);
});

var LinearProgress_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleSheet = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _defineProperty3 = _interopRequireDefault(defineProperty$5);



var _objectWithoutProperties3 = _interopRequireDefault(objectWithoutProperties);



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(index$2);



var _classnames2 = _interopRequireDefault(index$5);



var _createStyleSheet2 = _interopRequireDefault(createStyleSheet_1);



var _withStyles2 = _interopRequireDefault(withStyles_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transitionDuration = 4; // 400ms

//  weak

var styleSheet = exports.styleSheet = (0, _createStyleSheet2.default)('MuiLinearProgress', function (theme) {
  return {
    root: {
      position: 'relative',
      overflow: 'hidden',
      height: 5
    },
    primaryColor: {
      backgroundColor: theme.palette.primary[100]
    },
    primaryColorBar: {
      backgroundColor: theme.palette.primary[500]
    },
    primaryDashed: {
      background: 'radial-gradient(' + theme.palette.primary[100] + ' 0%, ' + theme.palette.primary[100] + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    accentColor: {
      backgroundColor: theme.palette.accent.A100
    },
    accentColorBar: {
      backgroundColor: theme.palette.accent.A400
    },
    accentDashed: {
      background: 'radial-gradient(' + theme.palette.accent.A100 + ' 0%, ' + theme.palette.accent.A100 + ' 16%, transparent 42%)',
      backgroundSize: '10px 10px',
      backgroundPosition: '0px -23px'
    },
    bar: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      top: 0,
      transition: 'transform 0.2s linear'
    },
    dashed: {
      position: 'absolute',
      marginTop: 0,
      height: '100%',
      width: '100%',
      animation: 'buffer 3s infinite linear'
    },
    bufferBar2: {
      transition: 'width .' + transitionDuration + 's linear'
    },
    rootBuffer: {
      backgroundColor: 'transparent'
    },
    rootQuery: {
      transform: 'rotate(180deg)'
    },
    indeterminateBar1: {
      willChange: 'left, right',
      animation: 'mui-indeterminate1 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite'
    },
    indeterminateBar2: {
      willChange: 'left, right',
      animation: 'mui-indeterminate2 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite',
      animationDelay: '1.15s'
    },
    determinateBar1: {
      willChange: 'width',
      transition: 'width .' + transitionDuration + 's linear'
    },
    bufferBar1: {
      zIndex: 1,
      transition: 'width .' + transitionDuration + 's linear'
    },
    bufferBar2Primary: {
      transition: 'width .' + transitionDuration + 's linear',
      backgroundColor: theme.palette.primary[100]
    },
    bufferBar2Accent: {
      transition: 'width .' + transitionDuration + 's linear',
      backgroundColor: theme.palette.accent.A100
    },
    '@keyframes mui-indeterminate1': {
      '0%': {
        left: '-35%',
        right: '100%'
      },
      '60%': {
        left: '100%',
        right: '-90%'
      },
      '100%': {
        left: '100%',
        right: '-90%'
      }
    },
    '@keyframes mui-indeterminate2': {
      '0%': {
        left: '-200%',
        right: '100%'
      },
      '60%': {
        left: '107%',
        right: '-8%'
      },
      '100%': {
        left: '107%',
        right: '-8%'
      }
    },
    '@keyframes buffer': {
      '0%': {
        opacity: 1,
        backgroundPosition: '0px -23px'
      },
      '50%': {
        opacity: 0,
        backgroundPosition: '0px -23px'
      },
      '100%': {
        opacity: 1,
        backgroundPosition: '-200px -23px'
      }
    }
  };
});

function LinearProgress(props) {
  var _classNames, _classNames2, _classNames3, _classNames4;

  var classes = props.classes,
      className = props.className,
      color = props.color,
      mode = props.mode,
      value = props.value,
      valueBuffer = props.valueBuffer,
      other = (0, _objectWithoutProperties3.default)(props, ['classes', 'className', 'color', 'mode', 'value', 'valueBuffer']);


  var dashedClass = (0, _classnames2.default)(classes.dashed, (_classNames = {}, (0, _defineProperty3.default)(_classNames, classes.primaryDashed, color === 'primary'), (0, _defineProperty3.default)(_classNames, classes.accentDashed, color === 'accent'), _classNames));

  var rootClasses = (0, _classnames2.default)(classes.root, (_classNames2 = {}, (0, _defineProperty3.default)(_classNames2, classes.primaryColor, color === 'primary'), (0, _defineProperty3.default)(_classNames2, classes.accentColor, color === 'accent'), (0, _defineProperty3.default)(_classNames2, classes.rootBuffer, mode === 'buffer'), (0, _defineProperty3.default)(_classNames2, classes.rootQuery, mode === 'query'), _classNames2), className);
  var primaryClasses = (0, _classnames2.default)(classes.bar, (_classNames3 = {}, (0, _defineProperty3.default)(_classNames3, classes.primaryColorBar, color === 'primary'), (0, _defineProperty3.default)(_classNames3, classes.accentColorBar, color === 'accent'), (0, _defineProperty3.default)(_classNames3, classes.indeterminateBar1, mode === 'indeterminate' || mode === 'query'), (0, _defineProperty3.default)(_classNames3, classes.determinateBar1, mode === 'determinate'), (0, _defineProperty3.default)(_classNames3, classes.bufferBar1, mode === 'buffer'), _classNames3));
  var secondaryClasses = (0, _classnames2.default)(classes.bar, (_classNames4 = {}, (0, _defineProperty3.default)(_classNames4, classes.bufferBar2, mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColorBar, color === 'primary' && mode !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.primaryColor, color === 'primary' && mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.accentColorBar, color === 'accent' && mode !== 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.accentColor, color === 'accent' && mode === 'buffer'), (0, _defineProperty3.default)(_classNames4, classes.indeterminateBar2, mode === 'indeterminate' || mode === 'query'), _classNames4));
  var styles = { primary: {}, secondary: {} };
  var rootProps = {};

  if (mode === 'determinate') {
    styles.primary.width = value + '%';
    rootProps['aria-valuenow'] = Math.round(value);
  } else if (mode === 'buffer') {
    styles.primary.width = value + '%';
    styles.secondary.width = valueBuffer + '%';
  }

  return _react2.default.createElement(
    'div',
    (0, _extends3.default)({ className: rootClasses }, rootProps, other),
    mode === 'buffer' ? _react2.default.createElement('div', { className: dashedClass }) : null,
    _react2.default.createElement('div', { className: primaryClasses, style: styles.primary }),
    mode === 'determinate' ? null : _react2.default.createElement('div', { className: secondaryClasses, style: styles.secondary })
  );
}

LinearProgress.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Useful to extend the style applied to components.
   */
  classes: _propTypes2.default.object.isRequired,
  /**
   * @ignore
   */
  className: _propTypes2.default.string,
  /**
   * The color of the component. It's using the theme palette when that makes sense.
   */
  color: _propTypes2.default.oneOf(['primary', 'accent']),
  /**
   * The mode of show your progress, indeterminate
   * for when there is no value for progress.
   */
  mode: _propTypes2.default.oneOf(['determinate', 'indeterminate', 'buffer', 'query']),
  /**
   * The value of progress, only works in determinate and buffer mode.
   * Value between 0 and 100.
   */
  value: _propTypes2.default.number,
  /**
   * The value of buffer, only works in buffer mode.
   * Value between 0 and 100.
   */
  valueBuffer: _propTypes2.default.number
} : {};

LinearProgress.defaultProps = {
  color: 'primary',
  mode: 'indeterminate',
  value: 0
};

exports.default = (0, _withStyles2.default)(styleSheet)(LinearProgress);
});

var index$40 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



Object.defineProperty(exports, 'CircularProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(CircularProgress_1).default;
  }
});



Object.defineProperty(exports, 'LinearProgress', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(LinearProgress_1).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});

var index_1$3 = index$40.LinearProgress;

__$styleInject(".cd-container{width:400px;border-radius:50%}.cd-container .playing img.cover{-webkit-transition-property:-webkit-transform;-webkit-transition-duration:1s;-moz-transition-property:-moz-transform;-moz-transition-duration:1s;-webkit-animation:a 20s linear infinite;animation:a 20s linear infinite}.cd-container .cd-cover{position:relative}.cd-container .cd-cover img.cover{width:100%;border-radius:50%;border:10px solid rgba(0,0,0,.1);z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box}.cd-container .cd-cover .control-center{position:absolute;left:50%;top:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100px;height:100px;margin-top:-50px;margin-left:-50px;background:#fff;border-radius:50%;-webkit-box-shadow:0 0 0 10px hsla(0,0%,97%,.53),inset 0 0 5px #333;box-shadow:0 0 0 10px hsla(0,0%,97%,.53),inset 0 0 5px #333;z-index:2}.cd-container .cd-cover .control-center .play-icon{width:80px;height:80px;color:#ccc;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.cd-container .cd-cover .control-center .play-icon:hover{color:#3aa8bd;-webkit-transform:scale(1.2);transform:scale(1.2)}.cd-container .cd-cover .control-center .pause-icon{width:80px;height:80px;color:#ccc;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.cd-container .cd-cover .control-center .pause-icon:hover{color:#3aa8bd;-webkit-transform:scale(1.2);transform:scale(1.2)}@media screen and (max-width:700px){.cd-container{width:300px;height:400px;position:absolute;left:50%;top:50%;margin-top:-200px;margin-left:-150px}.cd-container .cd-cover img.cover{width:250px!important;height:250px!important;border:10px solid rgba(0,0,0,.1)}.cd-container .cd-cover .control-center{width:60px;height:60px;margin-top:-30px;margin-left:-30px;-webkit-box-shadow:0 0 0 10px hsla(0,0%,97%,.53),inset 0 0 5px #333;box-shadow:0 0 0 10px hsla(0,0%,97%,.53),inset 0 0 5px #333}.cd-container .cd-cover .control-center .pause-icon,.cd-container .cd-cover .control-center .play-icon{width:50px;height:50px}}@-webkit-keyframes a{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes a{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}", undefined);

var PlayArrow_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _react2 = _interopRequireDefault(react);



var _pure2 = _interopRequireDefault(pure_1);



var _SvgIcon2 = _interopRequireDefault(index$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M8 5v14l11-7z' });

var PlayArrow = function PlayArrow(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};

PlayArrow = (0, _pure2.default)(PlayArrow);
PlayArrow.muiName = 'SvgIcon';

exports.default = PlayArrow;
});

var PlayArrow = unwrapExports(PlayArrow_1);

var Pause_1 = createCommonjsModule(function (module, exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _react2 = _interopRequireDefault(react);



var _pure2 = _interopRequireDefault(pure_1);



var _SvgIcon2 = _interopRequireDefault(index$3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _ref = _react2.default.createElement('path', { d: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z' });

var Pause = function Pause(props) {
  return _react2.default.createElement(
    _SvgIcon2.default,
    props,
    _ref
  );
};

Pause = (0, _pure2.default)(Pause);
Pause.muiName = 'SvgIcon';

exports.default = Pause;
});

var Pause = unwrapExports(Pause_1);

var classCallCheck$2 = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};









var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits$2 = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn$2 = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Cd = function (_React$Component) {
    inherits$2(Cd, _React$Component);

    function Cd(props) {
        classCallCheck$2(this, Cd);

        var _this = possibleConstructorReturn$2(this, _React$Component.call(this, props));

        _this.onPlay = function (e) {
            console.log('this is cd onPlay');
            e.preventDefault();

            console.log('isPlaying=' + _this.props.isPlaying);
            _this.props.onPlay(_this.props.isPlaying);
        };

        _this.onPause = function (e) {
            console.log('this is cd onPlay');
            e.preventDefault();
            _this.props.onPause(_this.props.isPlaying);
        };

        _this.state = {};
        return _this;
    }

    Cd.prototype.componentDidMount = function componentDidMount() {
        console.log('isPlaying=' + this.props.isPlaying);
    };

    Cd.prototype.render = function render() {
        var coverClass = index$5({
            'cd-cover': true,
            'playing': this.props.isPlaying
        });
        return react.createElement(
            'div',
            { className: 'cd-container', ref: this.props.cdContainerRef },
            react.createElement(
                Grid,
                { container: true, spacing: 0 },
                react.createElement(
                    Grid,
                    { item: true, xs: true },
                    react.createElement(
                        'div',
                        { className: coverClass },
                        react.createElement('img', { className: 'cover', src: this.props.currentMusicItem ? this.props.currentMusicItem.cover : '', alt: '' }),
                        react.createElement(
                            'div',
                            { className: 'control-center' },
                            !this.props.isPlaying ? react.createElement(PlayArrow, { className: 'play-icon', onClick: this.onPlay }) : react.createElement(Pause, { className: 'pause-icon', onClick: this.onPause })
                        )
                    )
                )
            )
        );
    };

    return Cd;
}(react.Component);

var ReactCdPlayer = function (_React$Component) {
    inherits$2(ReactCdPlayer, _React$Component);

    function ReactCdPlayer(props) {
        classCallCheck$2(this, ReactCdPlayer);

        var _this = possibleConstructorReturn$2(this, _React$Component.call(this, props));

        _this.resizeListener = function () {
            var cdPlayerRef = _this.cdPlayerRef;

            _this.fastRewind.style.top = String(cdPlayerRef.offsetTop + 260 + 'px');
            _this.fastForward.style.top = String(cdPlayerRef.offsetTop + 260 + 'px');
            _this.bottomBarRef.style.top = String(cdPlayerRef.offsetTop + 320 + 'px');
        };

        _this.onTimeUpdate = function () {
            console.log('ontimeupdate');
            var ratio = _this.state.audio.currentTime / _this.state.audio.duration * 100;
            _this.setState({
                completed: ratio
            });
            if (parseInt(ratio) == 100) {
                _this.onFastForward();
            }
        };

        _this.loadMusic = function (i) {
            localStorage.currentMusic = i;
            _this.setState({
                currentMusic: parseInt(localStorage.currentMusic),
                currentMusicItem: _this.props.musicList[i],
                completed: 0
            }, function () {
                if (_this.state.isPlaying) {
                    _this.play();
                }
            });
        };

        _this.progress = function () {
            if (_this.state.completed > 100) {
                _this.setState({ completed: 100 });
            } else {
                var diff = Math.random() * 10;
                _this.setState({ completed: _this.state.completed + diff });
            }
        };

        _this.onProgress = function (e) {
            var distance = e.pageX - _this.state.progress.offsetLeft;
            _this.state.audio.currentTime = distance * (_this.state.audio.duration / _this.state.progress.offsetWidth);
        };

        _this.play = function () {
            _this.state.audio.play();
            _this.setState({
                isPlaying: true
            });
            //call back to parent
            if (typeof _this.props.onPlay !== 'undefined') {
                _this.props.onPlay();
            }
        };

        _this.pause = function () {
            _this.state.audio.pause();
            _this.setState({
                isPlaying: false
            });
            //call back to parent
            if (typeof _this.props.onPause !== 'undefined') {
                _this.props.onPause();
            }
        };

        _this.onPlay = function (isPlaying) {
            _this.play();
        };

        _this.onPause = function (isPlaying) {
            _this.pause();
        };

        _this.onFastRewind = function () {
            console.log('onFastRewind music');
            if (_this.state.prevMusic != -1) {
                _this.loadMusic(_this.state.prevMusic);
                // prevMusic = randomNum(0, this.state.playlist.length);
            } else if (_this.state.currentMusic == 0) {
                _this.loadMusic(_this.props.musicList.length - 1);
            } else {
                _this.loadMusic(parseInt(_this.state.currentMusic) - 1);
            }
        };

        _this.onFastForward = function () {
            console.log('onFastForward music');
            if (_this.state.repeat == 0) {
                _this.setState({
                    prevMusic: _this.state.currentMusic
                });
                _this.setState({
                    nextMusic: _this.randomNum(0, _this.props.musicList.length)
                });
                _this.loadMusic(_this.state.nextMusic);
            } else if (_this.state.currentMusic == _this.props.musicList.length - 1) {
                _this.loadMusic(0);
            } else {
                _this.loadMusic(parseInt(_this.state.currentMusic) + 1);
            }
        };

        _this.randomNum = function (min, max) {
            return Math.floor(parseInt(min) + Math.random() * parseInt(max - min));
        };

        _this.state = {
            audio: null,
            listStatus: 0,
            isPlaying: false,
            currentMusic: 0,
            currentMusicItem: null,
            prevMusic: -1,
            nextMusic: 0,
            repeat: 2,
            relist: ['fa-random', 'fa-refresh', 'fa-retweet'],
            retitle: ['Random', 'Cycle', 'Order'],
            completed: 0,
            progress: null,
            fastTop: 0
        };
        _this.onTimeUpdate = _this.onTimeUpdate.bind(_this);
        _this.onProgress = _this.onProgress.bind(_this);
        return _this;
    }

    ReactCdPlayer.prototype.componentDidMount = function componentDidMount() {
        if (localStorage.currentMusic) {
            this.setState({
                currentMusic: parseInt(localStorage.currentMusic)
            });
        }
        if (this.state.currentMusic >= this.props.musicList.length) {
            localStorage.currentMusic = 0;
            this.setState({
                currentMusic: parseInt(localStorage.currentMusic)
            });
            window.location.reload();
        }
        this.loadMusic(this.state.currentMusic);
        this.state.audio.addEventListener('timeupdate', this.onTimeUpdate);
        window.addEventListener('resize', this.resizeListener);
        this.resizeListener();
    };
    //上一曲

    //下一曲


    ReactCdPlayer.prototype.render = function render() {
        var _this2 = this;

        return react.createElement(
            'section',
            { className: 'cd-player-container' },
            react.createElement(
                Grid,
                { container: true, spacing: 0 },
                react.createElement(
                    Grid,
                    { item: true, xs: 12 },
                    react.createElement(
                        Grid,
                        {
                            container: true,
                            align: 'center',
                            direction: 'column',
                            justify: 'center' },
                        react.createElement(
                            'section',
                            { className: 'control-buttons' },
                            react.createElement(
                                'section',
                                { ref: function ref(_ref) {
                                        return _this2.fastRewind = _ref;
                                    }, className: 'fast-rewind-outer' },
                                react.createElement(FastRewind, { className: 'fast-rewind-icon', onClick: this.onFastRewind })
                            ),
                            react.createElement(
                                'section',
                                { className: 'cd-outer' },
                                react.createElement(Cd, _extends$2({ cdContainerRef: function cdContainerRef(ref) {
                                        return _this2.cdPlayerRef = ref;
                                    } }, this.state, { onPlay: this.onPlay, onPause: this.onPause }))
                            ),
                            react.createElement(
                                'section',
                                { ref: function ref(_ref2) {
                                        return _this2.fastForward = _ref2;
                                    }, className: 'fast-forward-outer fast' },
                                react.createElement(FastForward, { className: 'fast-forward-icon', onClick: this.onFastForward })
                            )
                        ),
                        react.createElement(
                            'section',
                            { ref: function ref(_ref5) {
                                    return _this2.bottomBarRef = _ref5;
                                }, className: 'bottom-bar' },
                            react.createElement(
                                'section',
                                { className: 'title' },
                                react.createElement(
                                    'h1',
                                    { className: 'name' },
                                    this.state.currentMusicItem ? this.state.currentMusicItem.title : ''
                                ),
                                react.createElement(
                                    'h2',
                                    { className: 'sub-title' },
                                    this.state.currentMusicItem ? this.state.currentMusicItem.artist : ''
                                )
                            ),
                            react.createElement('audio', { ref: function ref(_ref3) {
                                    return _this2.state.audio = _ref3;
                                }, id: 'music', src: this.state.currentMusicItem ? this.state.currentMusicItem.mp3 : '' }),
                            react.createElement(
                                'section',
                                { className: 'process-outer', ref: function ref(_ref4) {
                                        return _this2.state.progress = _ref4;
                                    } },
                                react.createElement(index_1$3, { color: 'accent', mode: 'determinate', value: this.state.completed, onClick: this.onProgress })
                            )
                        )
                    )
                )
            )
        );
    };

    return ReactCdPlayer;
}(react.Component);

ReactCdPlayer.propTypes = {
    musicList: index$2.array.isRequired,
    onPlay: index$2.func
};

return ReactCdPlayer;

})));
