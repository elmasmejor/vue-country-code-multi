(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueCountryCode = {}));
}(this, (function (exports) { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  function _toPrimitive(input, hint) {
    if (_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (_typeof(res) !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }

  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return _typeof(key) === "symbol" ? key : String(key);
  }

  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      enumerableOnly && (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })), keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = null != arguments[i] ? arguments[i] : {};
      i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
    return target;
  }

  var fails = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
  });

  var functionBindNative = !fails(function () {
    // eslint-disable-next-line es/no-function-prototype-bind -- safe
    var test = (function () { /* empty */ }).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var FunctionPrototype = Function.prototype;
  var call = FunctionPrototype.call;
  var uncurryThisWithBind = functionBindNative && FunctionPrototype.bind.bind(call, call);

  var functionUncurryThis = functionBindNative ? uncurryThisWithBind : function (fn) {
    return function () {
      return call.apply(fn, arguments);
    };
  };

  // we can't use just `it == null` since of `document.all` special case
  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
  var isNullOrUndefined = function (it) {
    return it === null || it === undefined;
  };

  var $TypeError = TypeError;

  // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible = function (it) {
    if (isNullOrUndefined(it)) throw $TypeError("Can't call method on " + it);
    return it;
  };

  var $Object = Object;

  // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject = function (argument) {
    return $Object(requireObjectCoercible(argument));
  };

  var hasOwnProperty = functionUncurryThis({}.hasOwnProperty);

  // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  // eslint-disable-next-line es/no-object-hasown -- safe
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var FunctionPrototype$1 = Function.prototype;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;

  var EXISTS = hasOwnProperty_1(FunctionPrototype$1, 'name');
  // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
  var CONFIGURABLE = EXISTS && (!descriptors || (descriptors && getDescriptor(FunctionPrototype$1, 'name').configurable));

  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var documentAll = typeof document == 'object' && document.all;

  // https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
  // eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
  var IS_HTMLDDA = typeof documentAll == 'undefined' && documentAll !== undefined;

  var documentAll_1 = {
    all: documentAll,
    IS_HTMLDDA: IS_HTMLDDA
  };

  var documentAll$1 = documentAll_1.all;

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable = documentAll_1.IS_HTMLDDA ? function (argument) {
    return typeof argument == 'function' || argument === documentAll$1;
  } : function (argument) {
    return typeof argument == 'function';
  };

  var check = function (it) {
    return it && it.Math == Math && it;
  };

  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global_1 =
    // eslint-disable-next-line es/no-global-this -- safe
    check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    // eslint-disable-next-line no-restricted-globals -- safe
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func -- fallback
    (function () { return this; })() || commonjsGlobal || Function('return this')();

  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;

  var defineGlobalProperty = function (key, value) {
    try {
      defineProperty(global_1, key, { value: value, configurable: true, writable: true });
    } catch (error) {
      global_1[key] = value;
    } return value;
  };

  var SHARED = '__core-js_shared__';
  var store = global_1[SHARED] || defineGlobalProperty(SHARED, {});

  var sharedStore = store;

  var functionToString = functionUncurryThis(Function.toString);

  // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function (it) {
      return functionToString(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap = global_1.WeakMap;

  var weakMapBasicDetection = isCallable(WeakMap) && /native code/.test(String(WeakMap));

  var documentAll$2 = documentAll_1.all;

  var isObject = documentAll_1.IS_HTMLDDA ? function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it) || it === documentAll$2;
  } : function (it) {
    return typeof it == 'object' ? it !== null : isCallable(it);
  };

  var document$1 = global_1.document;
  // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject(document$1) && isObject(document$1.createElement);

  var documentCreateElement = function (it) {
    return EXISTS$1 ? document$1.createElement(it) : {};
  };

  // Thanks to IE8 for its funny defineProperty
  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function () { return 7; }
    }).a != 7;
  });

  // V8 ~ Chrome 36-
  // https://bugs.chromium.org/p/v8/issues/detail?id=3334
  var v8PrototypeDefineBug = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () { /* empty */ }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var $String = String;
  var $TypeError$1 = TypeError;

  // `Assert: Type(argument) is Object`
  var anObject = function (argument) {
    if (isObject(argument)) return argument;
    throw $TypeError$1($String(argument) + ' is not an object');
  };

  var call$1 = Function.prototype.call;

  var functionCall = functionBindNative ? call$1.bind(call$1) : function () {
    return call$1.apply(call$1, arguments);
  };

  var aFunction = function (argument) {
    return isCallable(argument) ? argument : undefined;
  };

  var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
  };

  var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

  var engineUserAgent = typeof navigator != 'undefined' && String(navigator.userAgent) || '';

  var process = global_1.process;
  var Deno = global_1.Deno;
  var versions = process && process.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  }

  // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */




  var $String$1 = global_1.String;

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var symbolConstructorDetection = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
    // of course, fail.
    return !$String$1(symbol) || !(Object(symbol) instanceof Symbol) ||
      // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
      !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */


  var useSymbolAsUid = symbolConstructorDetection
    && !Symbol.sham
    && typeof Symbol.iterator == 'symbol';

  var $Object$1 = Object;

  var isSymbol = useSymbolAsUid ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, $Object$1(it));
  };

  var $String$2 = String;

  var tryToString = function (argument) {
    try {
      return $String$2(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var $TypeError$2 = TypeError;

  // `Assert: IsCallable(argument) is true`
  var aCallable = function (argument) {
    if (isCallable(argument)) return argument;
    throw $TypeError$2(tryToString(argument) + ' is not a function');
  };

  // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod = function (V, P) {
    var func = V[P];
    return isNullOrUndefined(func) ? undefined : aCallable(func);
  };

  var $TypeError$3 = TypeError;

  // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    throw $TypeError$3("Can't convert object to primitive value");
  };

  var shared = createCommonjsModule(function (module) {
  (module.exports = function (key, value) {
    return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.30.2',
    mode:  'global',
    copyright: '© 2014-2023 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.30.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
  });
  });

  var id = 0;
  var postfix = Math.random();
  var toString = functionUncurryThis(1.0.toString);

  var uid = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
  };

  var Symbol$1 = global_1.Symbol;
  var WellKnownSymbolsStore = shared('wks');
  var createWellKnownSymbol = useSymbolAsUid ? Symbol$1['for'] || Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

  var wellKnownSymbol = function (name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore, name)) {
      WellKnownSymbolsStore[name] = symbolConstructorDetection && hasOwnProperty_1(Symbol$1, name)
        ? Symbol$1[name]
        : createWellKnownSymbol('Symbol.' + name);
    } return WellKnownSymbolsStore[name];
  };

  var $TypeError$4 = TypeError;
  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

  // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive = function (input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = functionCall(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw $TypeError$4("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey = function (argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var $TypeError$5 = TypeError;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty = Object.defineProperty;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable';

  // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  var f = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor(O, P);
      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    } return $defineProperty(O, P, Attributes);
  } : $defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty(O, P, Attributes);
    } catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw $TypeError$5('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var objectDefineProperty = {
  	f: f
  };

  var createPropertyDescriptor = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var keys = shared('keys');

  var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
  };

  var hiddenKeys = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$1 = global_1.TypeError;
  var WeakMap$1 = global_1.WeakMap;
  var set, get, has;

  var enforce = function (it) {
    return has(it) ? get(it) : set(it, {});
  };

  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject(it) || (state = get(it)).type !== TYPE) {
        throw TypeError$1('Incompatible receiver, ' + TYPE + ' required');
      } return state;
    };
  };

  if (weakMapBasicDetection || sharedStore.state) {
    var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
    /* eslint-disable no-self-assign -- prototype methods protection */
    store$1.get = store$1.get;
    store$1.has = store$1.has;
    store$1.set = store$1.set;
    /* eslint-enable no-self-assign -- prototype methods protection */
    set = function (it, metadata) {
      if (store$1.has(it)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      store$1.set(it, metadata);
      return metadata;
    };
    get = function (it) {
      return store$1.get(it) || {};
    };
    has = function (it) {
      return store$1.has(it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
      if (hasOwnProperty_1(it, STATE)) throw TypeError$1(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };
    get = function (it) {
      return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwnProperty_1(it, STATE);
    };
  }

  var internalState = {
    set: set,
    get: get,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };

  var makeBuiltIn_1 = createCommonjsModule(function (module) {
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;



  var enforceInternalState = internalState.enforce;
  var getInternalState = internalState.get;
  var $String = String;
  // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty = Object.defineProperty;
  var stringSlice = functionUncurryThis(''.slice);
  var replace = functionUncurryThis(''.replace);
  var join = functionUncurryThis([].join);

  var CONFIGURABLE_LENGTH = descriptors && !fails(function () {
    return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
  });

  var TEMPLATE = String(String).split('String');

  var makeBuiltIn = module.exports = function (value, name, options) {
    if (stringSlice($String(name), 0, 7) === 'Symbol(') {
      name = '[' + replace($String(name), /^Symbol\(([^)]*)\)/, '$1') + ']';
    }
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!hasOwnProperty_1(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
      if (descriptors) defineProperty(value, 'name', { value: name, configurable: true });
      else value.name = name;
    }
    if (CONFIGURABLE_LENGTH && options && hasOwnProperty_1(options, 'arity') && value.length !== options.arity) {
      defineProperty(value, 'length', { value: options.arity });
    }
    try {
      if (options && hasOwnProperty_1(options, 'constructor') && options.constructor) {
        if (descriptors) defineProperty(value, 'prototype', { writable: false });
      // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
      } else if (value.prototype) value.prototype = undefined;
    } catch (error) { /* empty */ }
    var state = enforceInternalState(value);
    if (!hasOwnProperty_1(state, 'source')) {
      state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
    } return value;
  };

  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  // eslint-disable-next-line no-extend-native -- required
  Function.prototype.toString = makeBuiltIn(function toString() {
    return isCallable(this) && getInternalState(this).source || inspectSource(this);
  }, 'toString');
  });

  var defineBuiltInAccessor = function (target, name, descriptor) {
    if (descriptor.get) makeBuiltIn_1(descriptor.get, name, { getter: true });
    if (descriptor.set) makeBuiltIn_1(descriptor.set, name, { setter: true });
    return objectDefineProperty.f(target, name, descriptor);
  };

  var FUNCTION_NAME_EXISTS = functionName.EXISTS;



  var FunctionPrototype$2 = Function.prototype;
  var functionToString$1 = functionUncurryThis(FunctionPrototype$2.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec = functionUncurryThis(nameRE.exec);
  var NAME = 'name';

  // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (descriptors && !FUNCTION_NAME_EXISTS) {
    defineBuiltInAccessor(FunctionPrototype$2, NAME, {
      configurable: true,
      get: function () {
        try {
          return regExpExec(nameRE, functionToString$1(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  var $propertyIsEnumerable = {}.propertyIsEnumerable;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

  // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

  // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  var f$1 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable;

  var objectPropertyIsEnumerable = {
  	f: f$1
  };

  var toString$1 = functionUncurryThis({}.toString);
  var stringSlice = functionUncurryThis(''.slice);

  var classofRaw = function (it) {
    return stringSlice(toString$1(it), 8, -1);
  };

  var $Object$2 = Object;
  var split = functionUncurryThis(''.split);

  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$Object$2('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split(it, '') : $Object$2(it);
  } : $Object$2;

  // toObject with fallback for non-array-like ES3 strings



  var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;

  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  var f$2 = descriptors ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) { /* empty */ }
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
  };

  var objectGetOwnPropertyDescriptor = {
  	f: f$2
  };

  var defineBuiltIn = function (O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if (isCallable(value)) makeBuiltIn_1(value, name, options);
    if (options.global) {
      if (simple) O[key] = value;
      else defineGlobalProperty(key, value);
    } else {
      try {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
      } catch (error) { /* empty */ }
      if (simple) O[key] = value;
      else objectDefineProperty.f(O, key, {
        value: value,
        enumerable: false,
        configurable: !options.nonConfigurable,
        writable: !options.nonWritable
      });
    } return O;
  };

  var ceil = Math.ceil;
  var floor = Math.floor;

  // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc
  // eslint-disable-next-line es/no-math-trunc -- safe
  var mathTrunc = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? floor : ceil)(n);
  };

  // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity = function (argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : mathTrunc(number);
  };

  var max = Math.max;
  var min = Math.min;

  // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex = function (index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max(integer + length, 0) : min(integer, length);
  };

  var min$1 = Math.min;

  // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength = function (argument) {
    return argument > 0 ? min$1(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike = function (obj) {
    return toLength(obj.length);
  };

  // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
  };

  var indexOf = arrayIncludes.indexOf;


  var push = functionUncurryThis([].push);

  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwnProperty_1(hiddenKeys, key) && hasOwnProperty_1(O, key) && push(result, key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwnProperty_1(O, key = names[i++])) {
      ~indexOf(result, key) || push(result, key);
    }
    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
  ];

  var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

  // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
  };

  var objectGetOwnPropertyNames = {
  	f: f$3
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$4 = Object.getOwnPropertySymbols;

  var objectGetOwnPropertySymbols = {
  	f: f$4
  };

  var concat = functionUncurryThis([].concat);

  // all object keys, includes non-enumerable and symbols
  var ownKeys$1 = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function (target, source, exceptions) {
    var keys = ownKeys$1(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
      : value == NATIVE ? false
      : isCallable(detection) ? fails(detection)
      : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';

  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






  /*
    options.target         - name of the target object
    options.global         - target is the global object
    options.stat           - export as static methods of target
    options.proto          - export as prototype methods of target
    options.real           - real prototype method for the `pure` version
    options.forced         - export even if the native feature is available
    options.bind           - bind methods to the target, required for the `pure` version
    options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe         - use the simple assignment of property instead of delete + defineProperty
    options.sham           - add a flag to not completely full polyfills
    options.enumerable     - export as enumerable property
    options.dontCallGetSet - prevent calling a getter on target
    options.name           - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || defineGlobalProperty(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.dontCallGetSet) {
        descriptor = getOwnPropertyDescriptor$1(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
      // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      }
      // add a flag to not completely full polyfills
      if (options.sham || (targetProperty && targetProperty.sham)) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      }
      defineBuiltIn(target, key, sourceProperty, options);
    }
  };

  var functionUncurryThisClause = function (fn) {
    // Nashorn bug:
    //   https://github.com/zloirock/core-js/issues/1128
    //   https://github.com/zloirock/core-js/issues/1130
    if (classofRaw(fn) === 'Function') return functionUncurryThis(fn);
  };

  var bind = functionUncurryThisClause(functionUncurryThisClause.bind);

  // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable(fn);
    return that === undefined ? fn : functionBindNative ? bind(fn, that) : function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray = Array.isArray || function isArray(argument) {
    return classofRaw(argument) == 'Array';
  };

  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var test = {};

  test[TO_STRING_TAG] = 'z';

  var toStringTagSupport = String(test) === '[object z]';

  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  var $Object$3 = Object;

  // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) { /* empty */ }
  };

  // getting tag from ES6+ `Object.prototype.toString`
  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (tag = tryGet(O = $Object$3(it), TO_STRING_TAG$1)) == 'string' ? tag
      // builtinTag case
      : CORRECT_ARGUMENTS ? classofRaw(O)
      // ES3 arguments fallback
      : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  var noop = function () { /* empty */ };
  var empty = [];
  var construct = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec = functionUncurryThis(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    try {
      construct(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;
    switch (classof(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction': return false;
    }
    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true;

  // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor = !construct || fails(function () {
    var called;
    return isConstructorModern(isConstructorModern.call)
      || !isConstructorModern(Object)
      || !isConstructorModern(function () { called = true; })
      || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var SPECIES = wellKnownSymbol('species');
  var $Array = Array;

  // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor = function (originalArray) {
    var C;
    if (isArray(originalArray)) {
      C = originalArray.constructor;
      // cross-realm fallback
      if (isConstructor(C) && (C === $Array || isArray(C.prototype))) C = undefined;
      else if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    } return C === undefined ? $Array : C;
  };

  // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var push$1 = functionUncurryThis([].push);

  // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that);
      var length = lengthOfArrayLike(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (;length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3: return true;              // some
            case 5: return value;             // find
            case 6: return index;             // findIndex
            case 2: push$1(target, value);      // filter
          } else switch (TYPE) {
            case 4: return false;             // every
            case 7: push$1(target, value);      // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$1(7)
  };

  var SPECIES$1 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$1] = function () {
        return { foo: 1 };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var $filter = arrayIteration.filter;


  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!toStringTagSupport) {
    defineBuiltIn(Object.prototype, 'toString', objectToString, { unsafe: true });
  }

  // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var f$5 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) objectDefineProperty.f(O, key = keys[index++], props[key]);
    return O;
  };

  var objectDefineProperties = {
  	f: f$5
  };

  var html = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */








  var GT = '>';
  var LT = '<';
  var PROTOTYPE = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO = sharedKey('IE_PROTO');

  var EmptyConstructor = function () { /* empty */ };

  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  };

  // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  };

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  };

  // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) { /* ignore */ }
    NullProtoObject = typeof document != 'undefined'
      ? document.domain && activeXDocument
        ? NullProtoObjectViaActiveX(activeXDocument) // old IE
        : NullProtoObjectViaIFrame()
      : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
  };

  hiddenKeys[IE_PROTO] = true;

  // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  // eslint-disable-next-line es/no-object-create -- safe
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
  };

  var defineProperty$1 = objectDefineProperty.f;

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype;

  // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    defineProperty$1(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  }

  // add a key to Array.prototype[@@unscopables]
  var addToUnscopables = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  var $includes = arrayIncludes.includes;



  // FF99+ bug
  var BROKEN_ON_SPARSE = fails(function () {
    // eslint-disable-next-line es/no-array-prototype-includes -- detection
    return !Array(1).includes();
  });

  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  _export({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
    includes: function includes(el /* , fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');

  var MATCH = wellKnownSymbol('match');

  // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  var $TypeError$6 = TypeError;

  var notARegexp = function (it) {
    if (isRegexp(it)) {
      throw $TypeError$6("The method doesn't accept regular expressions");
    } return it;
  };

  var $String$3 = String;

  var toString_1 = function (argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $String$3(argument);
  };

  var MATCH$1 = wellKnownSymbol('match');

  var correctIsRegexpLogic = function (METHOD_NAME) {
    var regexp = /./;
    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH$1] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) { /* empty */ }
    } return false;
  };

  var stringIndexOf = functionUncurryThis(''.indexOf);

  // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes
  _export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
    includes: function includes(searchString /* , position = 0 */) {
      return !!~stringIndexOf(
        toString_1(requireObjectCoercible(this)),
        toString_1(notARegexp(searchString)),
        arguments.length > 1 ? arguments[1] : undefined
      );
    }
  });

  var $map = arrayIteration.map;


  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');

  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $TypeError$7 = TypeError;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

  var doesNotExceedSafeInteger = function (it) {
    if (it > MAX_SAFE_INTEGER) throw $TypeError$7('Maximum allowed index exceeded');
    return it;
  };

  var createProperty = function (object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else object[propertyKey] = value;
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });

  var isConcatSpreadable = function (O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

  // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  _export({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          doesNotExceedSafeInteger(n + len);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
        } else {
          doesNotExceedSafeInteger(n + 1);
          createProperty(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });

  var $find = arrayIteration.find;


  var FIND = 'find';
  var SKIPS_HOLES = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-find -- testing
  if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
    find: function find(callbackfn /* , that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND);

  var $findIndex = arrayIteration.findIndex;


  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES$1 = true;

  // Shouldn't skip holes
  // eslint-disable-next-line es/no-array-prototype-findindex -- testing
  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES$1 = false; });

  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex
  _export({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
    findIndex: function findIndex(callbackfn /* , that = undefined */) {
      return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables(FIND_INDEX);

  var arraySlice = functionUncurryThis([].slice);

  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

  var SPECIES$2 = wellKnownSymbol('species');
  var $Array$1 = Array;
  var max$1 = Math.max;

  // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray(O)) {
        Constructor = O.constructor;
        // cross-realm fallback
        if (isConstructor(Constructor) && (Constructor === $Array$1 || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$2];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === $Array$1 || Constructor === undefined) {
          return arraySlice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? $Array$1 : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
      result.length = n;
      return result;
    }
  });

  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;







  // eslint-disable-next-line es/no-string-prototype-startswith -- safe
  var nativeStartsWith = functionUncurryThisClause(''.startsWith);
  var stringSlice$1 = functionUncurryThisClause(''.slice);
  var min$2 = Math.min;

  var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith');
  // https://github.com/zloirock/core-js/pull/702
  var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor$2(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }();

  // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith
  _export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
    startsWith: function startsWith(searchString /* , position = 0 */) {
      var that = toString_1(requireObjectCoercible(this));
      notARegexp(searchString);
      var index = toLength(min$2(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString_1(searchString);
      return nativeStartsWith
        ? nativeStartsWith(that, search, index)
        : stringSlice$1(that, index, index + search.length) === search;
    }
  });

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
    if (null != _i) {
      var _s,
        _e,
        _x,
        _r,
        _arr = [],
        _n = !0,
        _d = !1;
      try {
        if (_x = (_i = _i.call(arr)).next, 0 === i) {
          if (Object(_i) !== _i) return;
          _n = !1;
        } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
      } catch (err) {
        _d = !0, _e = err;
      } finally {
        try {
          if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
        } finally {
          if (_d) throw _e;
        }
      }
      return _arr;
    }
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  // Array of country objects for the flag dropdown.

  // Here is the criteria for the plugin to support a given country/territory
  // - It has an iso2 code: https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
  // - It has it's own country calling code (it is not a sub-region of another country): https://en.wikipedia.org/wiki/List_of_country_calling_codes
  // - It has a flag in the region-flags project: https://github.com/behdad/region-flags/tree/gh-pages/png
  // - It is supported by libphonenumber (it must be listed on this page): https://github.com/googlei18n/libphonenumber/blob/master/resources/ShortNumberMetadata.xml

  // Each country array has the following information:
  // [
  //    Country name,
  //    iso2 code,
  //    International dial code,
  //    Order (if >1 country with same dial code),
  //    Area codes
  // ]
  var allCountries = [["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1684"], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1264"], ["Antigua and Barbuda", "ag", "1268"], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1242"], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1246"], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1441"], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1284"], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1], ["Cayman Islands", "ky", "1345"], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2], ["Cocos (Keeling) Islands", "cc", "61", 1], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1767"], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1473"], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1671"], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1876"], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Macedonia (FYROM) (Македонија)", "mk", "389"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1664"], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["Northern Mariana Islands", "mp", "1670"], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1869"], ["Saint Lucia", "lc", "1758"], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1784"], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1721"], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1], ["Swaziland", "sz", "268"], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1868"], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1649"], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1340"], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1]];
  var allCountries$1 = allCountries.map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 3),
      name = _ref2[0],
      iso2 = _ref2[1],
      dialCode = _ref2[2];
    return {
      name: name,
      iso2: iso2.toUpperCase(),
      dialCode: dialCode
    };
  });

  // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags = function () {
    var that = anObject(this);
    var result = '';
    if (that.hasIndices) result += 'd';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.unicodeSets) result += 'v';
    if (that.sticky) result += 'y';
    return result;
  };

  var RegExpPrototype = RegExp.prototype;

  var regexpGetFlags = function (R) {
    var flags = R.flags;
    return flags === undefined && !('flags' in RegExpPrototype) && !hasOwnProperty_1(R, 'flags') && objectIsPrototypeOf(RegExpPrototype, R)
      ? functionCall(regexpFlags, R) : flags;
  };

  var PROPER_FUNCTION_NAME = functionName.PROPER;






  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var nativeToString = RegExpPrototype$1[TO_STRING];

  var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
  // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && nativeToString.name != TO_STRING;

  // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    defineBuiltIn(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var pattern = toString_1(R.source);
      var flags = toString_1(regexpGetFlags(R));
      return '/' + pattern + '/' + flags;
    }, { unsafe: true });
  }

  function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
      if (typeof shadowMode !== 'boolean') {
          createInjectorSSR = createInjector;
          createInjector = shadowMode;
          shadowMode = false;
      }
      // Vue.extend constructor export interop.
      const options = typeof script === 'function' ? script.options : script;
      // render functions
      if (template && template.render) {
          options.render = template.render;
          options.staticRenderFns = template.staticRenderFns;
          options._compiled = true;
          // functional template
          if (isFunctionalTemplate) {
              options.functional = true;
          }
      }
      // scopedId
      if (scopeId) {
          options._scopeId = scopeId;
      }
      let hook;
      if (moduleIdentifier) {
          // server build
          hook = function (context) {
              // 2.3 injection
              context =
                  context || // cached call
                      (this.$vnode && this.$vnode.ssrContext) || // stateful
                      (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
              // 2.2 with runInNewContext: true
              if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                  context = __VUE_SSR_CONTEXT__;
              }
              // inject component styles
              if (style) {
                  style.call(this, createInjectorSSR(context));
              }
              // register component module identifier for async chunk inference
              if (context && context._registeredComponents) {
                  context._registeredComponents.add(moduleIdentifier);
              }
          };
          // used by ssr in case component is cached and beforeCreate
          // never gets called
          options._ssrRegister = hook;
      }
      else if (style) {
          hook = shadowMode
              ? function (context) {
                  style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
              }
              : function (context) {
                  style.call(this, createInjector(context));
              };
      }
      if (hook) {
          if (options.functional) {
              // register for functional component in vue file
              const originalRender = options.render;
              options.render = function renderWithStyleInjection(h, context) {
                  hook.call(context);
                  return originalRender(h, context);
              };
          }
          else {
              // inject component registration as beforeCreate hook
              const existing = options.beforeCreate;
              options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
          }
      }
      return script;
  }

  const isOldIE = typeof navigator !== 'undefined' &&
      /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
  function createInjector(context) {
      return (id, style) => addStyle(id, style);
  }
  let HEAD;
  const styles = {};
  function addStyle(id, css) {
      const group = isOldIE ? css.media || 'default' : id;
      const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
      if (!style.ids.has(id)) {
          style.ids.add(id);
          let code = css.source;
          if (css.map) {
              // https://developer.chrome.com/devtools/docs/javascript-debugging
              // this makes source maps inside style tags work properly in Chrome
              code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
              // http://stackoverflow.com/a/26603875
              code +=
                  '\n/*# sourceMappingURL=data:application/json;base64,' +
                      btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                      ' */';
          }
          if (!style.element) {
              style.element = document.createElement('style');
              style.element.type = 'text/css';
              if (css.media)
                  style.element.setAttribute('media', css.media);
              if (HEAD === undefined) {
                  HEAD = document.head || document.getElementsByTagName('head')[0];
              }
              HEAD.appendChild(style.element);
          }
          if ('styleSheet' in style.element) {
              style.styles.push(code);
              style.element.styleSheet.cssText = style.styles
                  .filter(Boolean)
                  .join('\n');
          }
          else {
              const index = style.ids.size - 1;
              const textNode = document.createTextNode(code);
              const nodes = style.element.childNodes;
              if (nodes[index])
                  style.element.removeChild(nodes[index]);
              if (nodes.length)
                  style.element.insertBefore(textNode, nodes[index]);
              else
                  style.element.appendChild(textNode);
          }
      }
  }

  var $TypeError$8 = TypeError;
  // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;

  // Safari < 13 does not throw an error in this case
  var SILENT_ON_NON_WRITABLE_LENGTH_SET = descriptors && !function () {
    // makes no sense without proper strict mode support
    if (this !== undefined) return true;
    try {
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      Object.defineProperty([], 'length', { writable: false }).length = 1;
    } catch (error) {
      return error instanceof TypeError;
    }
  }();

  var arraySetLength = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
    if (isArray(O) && !getOwnPropertyDescriptor$3(O, 'length').writable) {
      throw $TypeError$8('Cannot set read only .length');
    } return O.length = length;
  } : function (O, length) {
    return O.length = length;
  };

  var $TypeError$9 = TypeError;

  var deletePropertyOrThrow = function (O, P) {
    if (!delete O[P]) throw $TypeError$9('Cannot delete property ' + tryToString(P) + ' of ' + tryToString(O));
  };

  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');

  var max$2 = Math.max;
  var min$3 = Math.min;

  // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  _export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
    splice: function splice(start, deleteCount /* , ...items */) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$3(max$2(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }
      doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
      A = arraySpeciesCreate(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];
          else deletePropertyOrThrow(O, to);
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];
          else deletePropertyOrThrow(O, to);
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      arraySetLength(O, len - actualDeleteCount + insertCount);
      return A;
    }
  });

  var vueMultiselect_min = createCommonjsModule(function (module, exports) {
  !function(t,e){module.exports=e();}(commonjsGlobal,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r});},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=89)}([function(t,e){t.exports=function(t){try{return !!t()}catch(t){return !0}};},function(t,e,n){var r=n(35),i=Function.prototype,o=i.call,s=r&&i.bind.bind(o,o);t.exports=r?s:function(t){return function(){return o.apply(t,arguments)}};},function(t,e,n){var r=n(59),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return "function"==typeof t||t===i}:function(t){return "function"==typeof t};},function(t,e,n){var r=n(4),i=n(43).f,o=n(30),s=n(11),u=n(33),a=n(95),l=n(66);t.exports=function(t,e){var n,c,f,p,h,d=t.target,v=t.global,g=t.stat;if(n=v?r:g?r[d]||u(d,{}):(r[d]||{}).prototype)for(c in e){if(p=e[c],t.dontCallGetSet?(h=i(n,c),f=h&&h.value):f=n[c],!l(v?c:d+(g?".":"#")+c,t.forced)&&void 0!==f){if(typeof p==typeof f)continue;a(p,f);}(t.sham||f&&f.sham)&&o(p,"sham",!0),s(n,c,p,t);}};},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")();}).call(e,n(139));},function(t,e,n){var r=n(0);t.exports=!r(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});},function(t,e,n){var r=n(8),i=String,o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not an object")};},function(t,e,n){var r=n(1),i=n(14),o=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return o(i(t),e)};},function(t,e,n){var r=n(2),i=n(59),o=i.all;t.exports=i.IS_HTMLDDA?function(t){return "object"==typeof t?null!==t:r(t)||t===o}:function(t){return "object"==typeof t?null!==t:r(t)};},function(t,e,n){var r=n(4),i=n(47),o=n(7),s=n(75),u=n(72),a=n(76),l=i("wks"),c=r.Symbol,f=c&&c.for,p=a?c:c&&c.withoutSetter||s;t.exports=function(t){if(!o(l,t)||!u&&"string"!=typeof l[t]){var e="Symbol."+t;u&&o(c,t)?l[t]=c[t]:l[t]=a&&f?f(e):p(e);}return l[t]};},function(t,e,n){var r=n(123);t.exports=function(t){return r(t.length)};},function(t,e,n){var r=n(2),i=n(13),o=n(104),s=n(33);t.exports=function(t,e,n,u){u||(u={});var a=u.enumerable,l=void 0!==u.name?u.name:e;if(r(n)&&o(n,l,u),u.global)a?t[e]=n:s(e,n);else {try{u.unsafe?t[e]&&(a=!0):delete t[e];}catch(t){}a?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!u.nonConfigurable,writable:!u.nonWritable});}return t};},function(t,e,n){var r=n(35),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)};},function(t,e,n){var r=n(5),i=n(62),o=n(77),s=n(6),u=n(50),a=TypeError,l=Object.defineProperty,c=Object.getOwnPropertyDescriptor;e.f=r?o?function(t,e,n){if(s(t),e=u(e),s(n),"function"==typeof t&&"prototype"===e&&"value"in n&&"writable"in n&&!n.writable){var r=c(t,e);r&&r.writable&&(t[e]=n.value,n={configurable:"configurable"in n?n.configurable:r.configurable,enumerable:"enumerable"in n?n.enumerable:r.enumerable,writable:!1});}return l(t,e,n)}:l:function(t,e,n){if(s(t),e=u(e),s(n),i)try{return l(t,e,n)}catch(t){}if("get"in n||"set"in n)throw a("Accessors not supported");return "value"in n&&(t[e]=n.value),t};},function(t,e,n){var r=n(24),i=Object;t.exports=function(t){return i(r(t))};},function(t,e,n){var r=n(1),i=r({}.toString),o=r("".slice);t.exports=function(t){return o(i(t),8,-1)};},function(t,e,n){var r=n(0),i=n(9),o=n(23),s=i("species");t.exports=function(t){return o>=51||!r(function(){var e=[],n=e.constructor={};return n[s]=function(){return {foo:1}},1!==e[t](Boolean).foo})};},function(t,e,n){var r=n(4),i=n(2),o=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t]):r[t]&&r[t][e]};},function(t,e,n){var r=n(15);t.exports=Array.isArray||function(t){return "Array"==r(t)};},function(t,e,n){var r=n(39),i=n(24);t.exports=function(t){return r(i(t))};},function(t,e,n){var r=n(29),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)};},function(t,e,n){var r=n(100),i=n(1),o=n(39),s=n(14),u=n(10),a=n(28),l=i([].push),c=function(t){var e=1==t,n=2==t,i=3==t,c=4==t,f=6==t,p=7==t,h=5==t||f;return function(d,v,g,y){for(var b,m,x=s(d),_=o(x),O=r(v,g),w=u(_),S=0,E=y||a,L=e?E(d,w):n||p?E(d,0):void 0;w>S;S++)if((h||S in _)&&(b=_[S],m=O(b,S,x),t))if(e)L[S]=m;else if(m)switch(t){case 3:return !0;case 5:return b;case 6:return S;case 2:l(L,b);}else switch(t){case 4:return !1;case 7:l(L,b);}return f?-1:i||c?c:L}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6),filterReject:c(7)};},function(t,e){var n=TypeError;t.exports=function(t){if(t>9007199254740991)throw n("Maximum allowed index exceeded");return t};},function(t,e,n){var r,i,o=n(4),s=n(97),u=o.process,a=o.Deno,l=u&&u.versions||a&&a.version,c=l&&l.v8;c&&(r=c.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(!(r=s.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/))&&(i=+r[1]),t.exports=i;},function(t,e,n){var r=n(40),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t};},function(t,e,n){var r=n(2),i=n(74),o=TypeError;t.exports=function(t){if(r(t))return t;throw o(i(t)+" is not a function")};},function(t,e,n){var r=n(0);t.exports=function(t,e){var n=[][t];return !!n&&r(function(){n.call(null,e||function(){return 1},1);})};},function(t,e,n){var r=n(5),i=n(18),o=TypeError,s=Object.getOwnPropertyDescriptor,u=r&&!function(){if(void 0!==this)return !0;try{Object.defineProperty([],"length",{writable:!1}).length=1;}catch(t){return t instanceof TypeError}}();t.exports=u?function(t,e){if(i(t)&&!s(t,"length").writable)throw o("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e};},function(t,e,n){var r=n(94);t.exports=function(t,e){return new(r(t))(0===e?0:e)};},function(t,e,n){var r=n(51),i=n(2),o=n(15),s=n(9),u=s("toStringTag"),a=Object,l="Arguments"==o(function(){return arguments}()),c=function(t,e){try{return t[e]}catch(t){}};t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=c(e=a(t),u))?n:l?o(e):"Object"==(r=o(e))&&i(e.callee)?"Arguments":r};},function(t,e,n){var r=n(5),i=n(13),o=n(31);t.exports=r?function(t,e,n){return i.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t};},function(t,e){t.exports=function(t,e){return {enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};},function(t,e,n){var r=n(50),i=n(13),o=n(31);t.exports=function(t,e,n){var s=r(e);s in t?i.f(t,s,o(0,n)):t[s]=n;};},function(t,e,n){var r=n(4),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0});}catch(n){r[t]=e;}return e};},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"];},function(t,e,n){var r=n(0);t.exports=!r(function(){var t=function(){}.bind();return "function"!=typeof t||t.hasOwnProperty("prototype")});},function(t,e,n){var r=n(5),i=n(7),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,u=i(o,"name"),a=u&&"something"===function(){}.name,l=u&&(!r||r&&s(o,"name").configurable);t.exports={EXISTS:u,PROPER:a,CONFIGURABLE:l};},function(t,e,n){var r=n(15),i=n(1);t.exports=function(t){if("Function"===r(t))return i(t)};},function(t,e){t.exports={};},function(t,e,n){var r=n(1),i=n(0),o=n(15),s=Object,u=r("".split);t.exports=i(function(){return !s("z").propertyIsEnumerable(0)})?function(t){return "String"==o(t)?u(t,""):s(t)}:s;},function(t,e){t.exports=function(t){return null===t||void 0===t};},function(t,e,n){var r=n(17),i=n(2),o=n(44),s=n(76),u=Object;t.exports=s?function(t){return "symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&o(e.prototype,u(t))};},function(t,e,n){var r,i=n(6),o=n(107),s=n(34),u=n(38),a=n(101),l=n(60),c=n(70),f=c("IE_PROTO"),p=function(){},h=function(t){return "<script>"+t+"<\/script>"},d=function(t){t.write(h("")),t.close();var e=t.parentWindow.Object;return t=null,e},v=function(){var t,e=l("iframe");return e.style.display="none",a.appendChild(e),e.src=String("javascript:"),t=e.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},g=function(){try{r=new ActiveXObject("htmlfile");}catch(t){}g="undefined"!=typeof document?document.domain&&r?d(r):v():d(r);for(var t=s.length;t--;)delete g.prototype[s[t]];return g()};u[f]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=i(t),n=new p,p.prototype=null,n[f]=t):n=g(),void 0===e?n:o.f(n,e)};},function(t,e,n){var r=n(5),i=n(12),o=n(110),s=n(31),u=n(19),a=n(50),l=n(7),c=n(62),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=u(t),e=a(e),c)try{return f(t,e)}catch(t){}if(l(t,e))return s(!i(o.f,t,e),t[e])};},function(t,e,n){var r=n(1);t.exports=r({}.isPrototypeOf);},function(t,e,n){var r=n(12),i=n(1),o=n(20),s=n(69),u=n(117),a=n(47),l=n(42),c=n(64).get,f=n(118),p=n(119),h=a("native-string-replace",String.prototype.replace),d=RegExp.prototype.exec,v=d,g=i("".charAt),y=i("".indexOf),b=i("".replace),m=i("".slice),x=function(){var t=/a/,e=/b*/g;return r(d,t,"a"),r(d,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),_=u.BROKEN_CARET,O=void 0!==/()??/.exec("")[1];(x||O||_||f||p)&&(v=function(t){var e,n,i,u,a,f,p,w=this,S=c(w),E=o(t),L=S.raw;if(L)return L.lastIndex=w.lastIndex,e=r(v,L,E),w.lastIndex=L.lastIndex,e;var k=S.groups,P=_&&w.sticky,j=r(s,w),T=w.source,A=0,V=E;if(P&&(j=b(j,"y",""),-1===y(j,"g")&&(j+="g"),V=m(E,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==g(E,w.lastIndex-1))&&(T="(?: "+T+")",V=" "+V,A++),n=new RegExp("^(?:"+T+")",j)),O&&(n=new RegExp("^"+T+"$(?!\\s)",j)),x&&(i=w.lastIndex),u=r(d,P?n:w,V),P?u?(u.input=m(u.input,A),u[0]=m(u[0],A),u.index=w.lastIndex,w.lastIndex+=u[0].length):w.lastIndex=0:x&&u&&(w.lastIndex=w.global?u.index+u[0].length:i),O&&u&&u.length>1&&r(h,u[0],n,function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(u[a]=void 0);}),u&&k)for(u.groups=f=l(null),a=0;a<k.length;a++)p=k[a],f[p[0]]=u[p[1]];return u}),t.exports=v;},function(t,e,n){var r=n(4),i=n(33),o=r["__core-js_shared__"]||i("__core-js_shared__",{});t.exports=o;},function(t,e,n){var r=n(103),i=n(46);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.1",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",source:"https://github.com/zloirock/core-js"});},function(t,e,n){var r=n(49),i=Math.max,o=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):o(n,e)};},function(t,e,n){var r=n(105);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)};},function(t,e,n){var r=n(73),i=n(41);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""};},function(t,e,n){var r=n(9),i=r("toStringTag"),o={};o[i]="z",t.exports="[object z]"===String(o);},function(t,e,n){var r=n(5),i=n(4),o=n(1),s=n(66),u=n(11),a=n(7),l=n(102),c=n(44),f=n(41),p=n(73),h=n(0),d=n(67).f,v=n(43).f,g=n(13).f,y=n(122),b=n(71).trim,m=i.Number,x=m.prototype,_=i.TypeError,O=o("".slice),w=o("".charCodeAt),S=function(t){var e=p(t,"number");return "bigint"==typeof e?e:E(e)},E=function(t){var e,n,r,i,o,s,u,a,l=p(t,"number");if(f(l))throw _("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),43===(e=w(l,0))||45===e){if(88===(n=w(l,2))||120===n)return NaN}else if(48===e){switch(w(l,1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return +l}for(o=O(l,2),s=o.length,u=0;u<s;u++)if((a=w(o,u))<48||a>i)return NaN;return parseInt(o,r)}return +l};if(s("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var L,k=function(t){var e=arguments.length<1?0:m(S(t)),n=this;return c(x,n)&&h(function(){y(n);})?l(Object(e),n,k):e},P=r?d(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),j=0;P.length>j;j++)a(m,L=P[j])&&!a(k,L)&&g(k,L,v(m,L));k.prototype=x,x.constructor=k,u(i,"Number",k,{constructor:!0});}},function(t,e,n){var r=n(3),i=n(45);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i});},function(t,e,n){function r(t){return 0!==t&&(!(!Array.isArray(t)||0!==t.length)||!t)}function i(t){return function(){return !t.apply(void 0,arguments)}}function o(t,e){return void 0===t&&(t="undefined"),null===t&&(t="null"),!1===t&&(t="false"),-1!==t.toString().toLowerCase().indexOf(e.trim())}function s(t,e,n,r){return t.filter(function(t){return o(r(t,n),e)})}function u(t){return t.filter(function(t){return !t.$isLabel})}function a(t,e){return function(n){return n.reduce(function(n,r){return r[t]&&r[t].length?(n.push({$groupLabel:r[e],$isLabel:!0}),n.concat(r[t])):n},[])}}function l(t,e,r,i,o){return function(u){return u.map(function(u){var a;if(!u[r])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var l=s(u[r],t,e,o);return l.length?(a={},n.i(f.a)(a,i,u[i]),n.i(f.a)(a,r,l),a):[]})}}var c=n(88),f=n(87),p=n(129),h=(n.n(p),n(82)),d=(n.n(h),n(81)),v=(n.n(d),n(83)),g=(n.n(v),n(84)),y=(n.n(g),n(128)),b=(n.n(y),n(135)),m=(n.n(b),n(127)),x=(n.n(m),n(132)),_=(n.n(x),n(131)),O=(n.n(_),n(125)),w=(n.n(O),n(130)),S=(n.n(w),n(52)),E=(n.n(S),n(53)),L=(n.n(E),n(85)),k=(n.n(L),n(134)),P=(n.n(k),n(80)),j=(n.n(P),n(79)),T=(n.n(j),n(133)),A=(n.n(T),n(126)),V=(n.n(A),function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce(function(t,e){return e(t)},t)}});e.a={data:function(){return {search:"",isOpen:!1,preferredOpenDirection:"below",optimizedHeight:this.maxHeight}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return []}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(t,e){return r(t)?"":e?t[e]:t}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},groupSelect:{type:Boolean,default:!1},blockKeys:{type:Array,default:function(){return []}},preserveSearch:{type:Boolean,default:!1},preselectFirst:{type:Boolean,default:!1},preventAutofocus:{type:Boolean,default:!1}},mounted:function(){!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false."),this.preselectFirst&&!this.internalValue.length&&this.options.length&&this.select(this.filteredOptions[0]);},computed:{internalValue:function(){return this.value||0===this.value?Array.isArray(this.value)?this.value:[this.value]:[]},filteredOptions:function(){var t=this.search||"",e=t.toLowerCase().trim(),n=this.options.concat();return n=this.internalSearch?this.groupValues?this.filterAndFlat(n,e,this.label):s(n,e,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(n):n,n=this.hideSelected?n.filter(i(this.isSelected)):n,this.taggable&&e.length&&!this.isExistingOption(e)&&("bottom"===this.tagPosition?n.push({isTag:!0,label:t}):n.unshift({isTag:!0,label:t})),n.slice(0,this.optionsLimit)},valueKeys:function(){var t=this;return this.trackBy?this.internalValue.map(function(e){return e[t.trackBy]}):this.internalValue},optionKeys:function(){var t=this;return (this.groupValues?this.flatAndStrip(this.options):this.options).map(function(e){return t.customLabel(e,t.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(){this.resetAfter&&this.internalValue.length&&(this.search="",this.$emit("input",this.multiple?[]:null));},search:function(){this.$emit("search-change",this.search,this.id);}},methods:{getValue:function(){return this.multiple?this.internalValue:0===this.internalValue.length?null:this.internalValue[0]},filterAndFlat:function(t,e,n){return V(l(e,n,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(t)},flatAndStrip:function(t){return V(a(this.groupValues,this.groupLabel),u)(t)},updateSearch:function(t){this.search=t;},isExistingOption:function(t){return !!this.options&&this.optionKeys.indexOf(t)>-1},isSelected:function(t){var e=this.trackBy?t[this.trackBy]:t;return this.valueKeys.indexOf(e)>-1},isOptionDisabled:function(t){return !!t.$isDisabled},getOptionLabel:function(t){if(r(t))return "";if(t.isTag)return t.label;if(t.$isLabel)return t.$groupLabel;var e=this.customLabel(t,this.label);return r(e)?"":e},select:function(t,e){if(t.$isLabel&&this.groupSelect)return void this.selectGroup(t);if(!(-1!==this.blockKeys.indexOf(e)||this.disabled||t.$isDisabled||t.$isLabel)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==e||this.pointerDirty)){if(t.isTag)this.$emit("tag",t.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else {if(this.isSelected(t))return void("Tab"!==e&&this.removeElement(t));this.multiple?this.$emit("input",this.internalValue.concat([t]),this.id):this.$emit("input",t,this.id),this.$emit("select",t,this.id),this.clearOnSelect&&(this.search="");}this.closeOnSelect&&this.deactivate();}},selectGroup:function(t){var e=this,n=this.options.find(function(n){return n[e.groupLabel]===t.$groupLabel});if(n){if(this.wholeGroupSelected(n)){this.$emit("remove",n[this.groupValues],this.id);var r=this.internalValue.filter(function(t){return -1===n[e.groupValues].indexOf(t)});this.$emit("input",r,this.id);}else {var i=n[this.groupValues].filter(function(t){return !(e.isOptionDisabled(t)||e.isSelected(t))});this.max&&i.splice(this.max-this.internalValue.length),this.$emit("select",i,this.id),this.$emit("input",this.internalValue.concat(i),this.id);}this.closeOnSelect&&this.deactivate();}},wholeGroupSelected:function(t){var e=this;return t[this.groupValues].every(function(t){return e.isSelected(t)||e.isOptionDisabled(t)})},wholeGroupDisabled:function(t){return t[this.groupValues].every(this.isOptionDisabled)},removeElement:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled&&!t.$isDisabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var r="object"===n.i(c.a)(t)?this.valueKeys.indexOf(t[this.trackBy]):this.valueKeys.indexOf(t);if(this.multiple){var i=this.internalValue.slice(0,r).concat(this.internalValue.slice(r+1));this.$emit("input",i,this.id);}else this.$emit("input",null,this.id);this.$emit("remove",t,this.id),this.closeOnSelect&&e&&this.deactivate();}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.internalValue.length&&this.removeElement(this.internalValue[this.internalValue.length-1],!1);},activate:function(){var t=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.preventAutofocus||this.$nextTick(function(){return t.$refs.search&&t.$refs.search.focus()})):this.preventAutofocus||void 0!==this.$el&&this.$el.focus(),this.$emit("open",this.id));},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?void 0!==this.$refs.search&&this.$refs.search.blur():void 0!==this.$el&&this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id));},toggle:function(){this.isOpen?this.deactivate():this.activate();},adjustPosition:function(){if("undefined"!=typeof window){var t=this.$el.getBoundingClientRect().top,e=window.innerHeight-this.$el.getBoundingClientRect().bottom;e>this.maxHeight||e>t||"below"===this.openDirection||"bottom"===this.openDirection?(this.preferredOpenDirection="below",this.optimizedHeight=Math.min(e-40,this.maxHeight)):(this.preferredOpenDirection="above",this.optimizedHeight=Math.min(t-40,this.maxHeight));}}}};},function(t,e,n){var r=n(52),i=(n.n(r),n(53)),o=(n.n(i),n(85)),s=(n.n(o),n(82)),u=(n.n(s),n(81)),a=(n.n(u),n(83)),l=(n.n(a),n(84)),c=(n.n(l),n(79));n.n(c);e.a={data:function(){return {pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust();},isOpen:function(){this.pointerDirty=!1;},pointer:function(){this.$refs.search&&this.$refs.search.setAttribute("aria-activedescendant",this.id+"-"+this.pointer.toString());}},methods:{optionHighlight:function(t,e){return {"multiselect__option--highlight":t===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(e)}},groupHighlight:function(t,e){var n=this;if(!this.groupSelect)return ["multiselect__option--disabled",{"multiselect__option--group":e.$isLabel}];var r=this.options.find(function(t){return t[n.groupLabel]===e.$groupLabel});return r&&!this.wholeGroupDisabled(r)?["multiselect__option--group",{"multiselect__option--highlight":t===this.pointer&&this.showPointer},{"multiselect__option--group-selected":this.wholeGroupSelected(r)}]:"multiselect__option--disabled"},addPointerElement:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",e=t.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],e),this.pointerReset();},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward()),this.pointerDirty=!0;},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer]&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerBackward()):this.filteredOptions[this.pointer]&&this.filteredOptions[0].$isLabel&&!this.groupSelect&&this.pointerForward(),this.pointerDirty=!0;},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0));},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0),this.filteredOptions.length>0&&this.filteredOptions[this.pointer].$isLabel&&!this.groupSelect&&this.pointerForward();},pointerSet:function(t){this.pointer=t,this.pointerDirty=!0;}}};},function(t,e,n){var r=n(52),i=(n.n(r),n(80)),o=(n.n(i),n(54)),s=n(55);e.a={name:"vue-multiselect",mixins:[o.a,s.a],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectGroupLabel:{type:String,default:"Press enter to select group"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},deselectGroupLabel:{type:String,default:"Press enter to deselect group"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(t){return "and ".concat(t," more")}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoOptions:{type:Boolean,default:!0},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{hasOptionGroup:function(){return this.groupValues&&this.groupLabel&&this.groupSelect},isSingleLabelVisible:function(){return (this.singleValue||0===this.singleValue)&&(!this.isOpen||!this.searchable)&&!this.visibleValues.length},isPlaceholderVisible:function(){return !(this.internalValue.length||this.searchable&&this.isOpen)},visibleValues:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},singleValue:function(){return this.internalValue[0]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},deselectGroupLabelText:function(){return this.showLabels?this.deselectGroupLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectGroupLabelText:function(){return this.showLabels?this.selectGroupLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){return this.searchable||this.multiple&&this.value&&this.value.length?this.isOpen?{width:"100%"}:{width:"0",position:"absolute",padding:"0"}:""},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return "above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.preferredOpenDirection},showSearchInput:function(){return this.searchable&&(!this.hasSingleSelectedSlot||!this.visibleSingleValue&&0!==this.visibleSingleValue||this.isOpen)}}};},function(t,e,n){var r=n(19),i=n(48),o=n(10),s=function(t){return function(e,n,s){var u,a=r(e),l=o(a),c=i(s,l);if(t&&n!=n){for(;l>c;)if((u=a[c++])!=u)return !0}else for(;l>c;c++)if((t||c in a)&&a[c]===n)return t||c||0;return !t&&-1}};t.exports={includes:s(!0),indexOf:s(!1)};},function(t,e,n){var r=n(74),i=TypeError;t.exports=function(t,e){if(!delete t[e])throw i("Cannot delete property "+r(e)+" of "+r(t))};},function(t,e){var n="object"==typeof document&&document.all,r=void 0===n&&void 0!==n;t.exports={all:n,IS_HTMLDDA:r};},function(t,e,n){var r=n(4),i=n(8),o=r.document,s=i(o)&&i(o.createElement);t.exports=function(t){return s?o.createElement(t):{}};},function(t,e,n){var r=n(25),i=n(40);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)};},function(t,e,n){var r=n(5),i=n(0),o=n(60);t.exports=!r&&!i(function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a});},function(t,e,n){var r=n(1),i=n(2),o=n(46),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(t){return s(t)}),t.exports=o.inspectSource;},function(t,e,n){var r,i,o,s=n(124),u=n(4),a=n(8),l=n(30),c=n(7),f=n(46),p=n(70),h=n(38),d=u.TypeError,v=u.WeakMap,g=function(t){return o(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!a(e)||(n=i(e)).type!==t)throw d("Incompatible receiver, "+t+" required");return n}};if(s||f.state){var b=f.state||(f.state=new v);b.get=b.get,b.has=b.has,b.set=b.set,r=function(t,e){if(b.has(t))throw d("Object already initialized");return e.facade=t,b.set(t,e),e},i=function(t){return b.get(t)||{}},o=function(t){return b.has(t)};}else {var m=p("state");h[m]=!0,r=function(t,e){if(c(t,m))throw d("Object already initialized");return e.facade=t,l(t,m,e),e},i=function(t){return c(t,m)?t[m]:{}},o=function(t){return c(t,m)};}t.exports={set:r,get:i,has:o,enforce:g,getterFor:y};},function(t,e,n){var r=n(1),i=n(0),o=n(2),s=n(29),u=n(17),a=n(63),l=function(){},c=[],f=u("Reflect","construct"),p=/^\s*(?:class|function)\b/,h=r(p.exec),d=!p.exec(l),v=function(t){if(!o(t))return !1;try{return f(l,c,t),!0}catch(t){return !1}},g=function(t){if(!o(t))return !1;switch(s(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return !1}try{return d||!!h(p,a(t))}catch(t){return !0}};g.sham=!0,t.exports=!f||i(function(){var t;return v(v.call)||!v(Object)||!v(function(){t=!0;})||t})?g:v;},function(t,e,n){var r=n(0),i=n(2),o=/#|\.prototype\./,s=function(t,e){var n=a[u(t)];return n==c||n!=l&&(i(e)?r(e):!!e)},u=s.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=s.data={},l=s.NATIVE="N",c=s.POLYFILL="P";t.exports=s;},function(t,e,n){var r=n(68),i=n(34),o=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)};},function(t,e,n){var r=n(1),i=n(7),o=n(19),s=n(57).indexOf,u=n(38),a=r([].push);t.exports=function(t,e){var n,r=o(t),l=0,c=[];for(n in r)!i(u,n)&&i(r,n)&&a(c,n);for(;e.length>l;)i(r,n=e[l++])&&(~s(c,n)||a(c,n));return c};},function(t,e,n){var r=n(6);t.exports=function(){var t=r(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};},function(t,e,n){var r=n(47),i=n(75),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))};},function(t,e,n){var r=n(1),i=n(24),o=n(20),s=n(78),u=r("".replace),a="["+s+"]",l=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),f=function(t){return function(e){var n=o(i(e));return 1&t&&(n=u(n,l,"")),2&t&&(n=u(n,c,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)};},function(t,e,n){var r=n(23),i=n(0);t.exports=!!Object.getOwnPropertySymbols&&!i(function(){var t=Symbol();return !String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41});},function(t,e,n){var r=n(12),i=n(8),o=n(41),s=n(61),u=n(113),a=n(9),l=TypeError,c=a("toPrimitive");t.exports=function(t,e){if(!i(t)||o(t))return t;var n,a=s(t,c);if(a){if(void 0===e&&(e="default"),n=r(a,t,e),!i(n)||o(n))return n;throw l("Can't convert object to primitive value")}return void 0===e&&(e="number"),u(t,e)};},function(t,e){var n=String;t.exports=function(t){try{return n(t)}catch(t){return "Object"}};},function(t,e,n){var r=n(1),i=0,o=Math.random(),s=r(1..toString);t.exports=function(t){return "Symbol("+(void 0===t?"":t)+")_"+s(++i+o,36)};},function(t,e,n){var r=n(72);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;},function(t,e,n){var r=n(5),i=n(0);t.exports=r&&i(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});},function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff";},function(t,e,n){var r=n(3),i=n(21).find,o=n(91),s=!0;"find"in[]&&Array(1).find(function(){s=!1;}),r({target:"Array",proto:!0,forced:s},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("find");},function(t,e,n){var r=n(3),i=n(18),o=n(65),s=n(8),u=n(48),a=n(10),l=n(19),c=n(32),f=n(9),p=n(16),h=n(93),d=p("slice"),v=f("species"),g=Array,y=Math.max;r({target:"Array",proto:!0,forced:!d},{slice:function(t,e){var n,r,f,p=l(this),d=a(p),b=u(t,d),m=u(void 0===e?d:e,d);if(i(p)&&(n=p.constructor,o(n)&&(n===g||i(n.prototype))?n=void 0:s(n)&&null===(n=n[v])&&(n=void 0),n===g||void 0===n))return h(p,b,m);for(r=new(void 0===n?g:n)(y(m-b,0)),f=0;b<m;b++,f++)b in p&&c(r,f,p[b]);return r.length=f,r}});},function(t,e,n){var r=n(1),i=n(11),o=Date.prototype,s=r(o.toString),u=r(o.getTime);"Invalid Date"!=String(new Date(NaN))&&i(o,"toString",function(){var t=u(this);return t===t?s(this):"Invalid Date"});},function(t,e,n){var r=n(11),i=n(98),o=Error.prototype;o.toString!==i&&r(o,"toString",i);},function(t,e,n){var r=n(51),i=n(11),o=n(112);r||i(Object.prototype,"toString",o,{unsafe:!0});},function(t,e,n){var r=n(36).PROPER,i=n(11),o=n(6),s=n(20),u=n(0),a=n(116),l=RegExp.prototype,c=l.toString,f=u(function(){return "/a/b"!=c.call({source:"a",flags:"b"})}),p=r&&"toString"!=c.name;(f||p)&&i(RegExp.prototype,"toString",function(){var t=o(this);return "/"+s(t.source)+"/"+s(a(t))},{unsafe:!0});},function(t,e,n){var r=n(12),i=n(99),o=n(6),s=n(40),u=n(24),a=n(120),l=n(20),c=n(61),f=n(115);i("search",function(t,e,n){return [function(e){var n=u(this),i=s(e)?void 0:c(e,t);return i?r(i,e,n):new RegExp(e)[t](l(n))},function(t){var r=o(this),i=l(t),s=n(e,r,i);if(s.done)return s.value;var u=r.lastIndex;a(u,0)||(r.lastIndex=0);var c=f(r,i);return a(r.lastIndex,u)||(r.lastIndex=u),null===c?-1:c.index}]});},function(t,e,n){function r(t){n(136);}var i=n(56),o=n(138),s=n(137),u=r,a=s(i.a,o.a,!1,u,null,null);e.a=a.exports;},function(t,e,n){function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a=r;},function(t,e,n){function r(t){"@babel/helpers - typeof";return (r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}e.a=r;},function(t,e,n){Object.defineProperty(e,"__esModule",{value:!0});var r=n(86),i=n(54),o=n(55);n.d(e,"Multiselect",function(){return r.a}),n.d(e,"multiselectMixin",function(){return i.a}),n.d(e,"pointerMixin",function(){return o.a}),e.default=r.a;},function(t,e,n){var r=n(2),i=String,o=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw o("Can't set "+i(t)+" as a prototype")};},function(t,e,n){var r=n(9),i=n(42),o=n(13).f,s=r("unscopables"),u=Array.prototype;void 0==u[s]&&o(u,s,{configurable:!0,value:i(null)}),t.exports=function(t){u[s][t]=!0;};},function(t,e,n){var r=n(25),i=n(14),o=n(39),s=n(10),u=TypeError,a=function(t){return function(e,n,a,l){r(n);var c=i(e),f=o(c),p=s(c),h=t?p-1:0,d=t?-1:1;if(a<2)for(;;){if(h in f){l=f[h],h+=d;break}if(h+=d,t?h<0:p<=h)throw u("Reduce of empty array with no initial value")}for(;t?h>=0:p>h;h+=d)h in f&&(l=n(l,f[h],h,c));return l}};t.exports={left:a(!1),right:a(!0)};},function(t,e,n){var r=n(1);t.exports=r([].slice);},function(t,e,n){var r=n(18),i=n(65),o=n(8),s=n(9),u=s("species"),a=Array;t.exports=function(t){var e;return r(t)&&(e=t.constructor,i(e)&&(e===a||r(e.prototype))?e=void 0:o(e)&&null===(e=e[u])&&(e=void 0)),void 0===e?a:e};},function(t,e,n){var r=n(7),i=n(114),o=n(43),s=n(13);t.exports=function(t,e,n){for(var u=i(e),a=s.f,l=o.f,c=0;c<u.length;c++){var f=u[c];r(t,f)||n&&r(n,f)||a(t,f,l(e,f));}};},function(t,e,n){var r=n(15),i=n(4);t.exports="process"==r(i.process);},function(t,e,n){var r=n(17);t.exports=r("navigator","userAgent")||"";},function(t,e,n){var r=n(5),i=n(0),o=n(6),s=n(42),u=n(106),a=Error.prototype.toString,l=i(function(){if(r){var t=s(Object.defineProperty({},"name",{get:function(){return this===t}}));if("true"!==a.call(t))return !0}return "2: 1"!==a.call({message:1,name:2})||"Error"!==a.call({})});t.exports=l?function(){var t=o(this),e=u(t.name,"Error"),n=u(t.message);return e?n?e+": "+n:e:n}:a;},function(t,e,n){n(53);var r=n(37),i=n(11),o=n(45),s=n(0),u=n(9),a=n(30),l=u("species"),c=RegExp.prototype;t.exports=function(t,e,n,f){var p=u(t),h=!s(function(){var e={};return e[p]=function(){return 7},7!=""[t](e)}),d=h&&!s(function(){var e=!1,n=/a/;return "split"===t&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e});if(!h||!d||n){var v=r(/./[p]),g=e(p,""[t],function(t,e,n,i,s){var u=r(t),a=e.exec;return a===o||a===c.exec?h&&!s?{done:!0,value:v(e,n,i)}:{done:!0,value:u(n,e,i)}:{done:!1}});i(String.prototype,t,g[0]),i(c,p,g[1]);}f&&a(c[p],"sham",!0);};},function(t,e,n){var r=n(37),i=n(25),o=n(35),s=r(r.bind);t.exports=function(t,e){return i(t),void 0===e?t:o?s(t,e):function(){return t.apply(e,arguments)}};},function(t,e,n){var r=n(17);t.exports=r("document","documentElement");},function(t,e,n){var r=n(2),i=n(8),o=n(111);t.exports=function(t,e,n){var s,u;return o&&r(s=e.constructor)&&s!==n&&i(u=s.prototype)&&u!==n.prototype&&o(t,u),t};},function(t,e){t.exports=!1;},function(t,e,n){var r=n(0),i=n(2),o=n(7),s=n(5),u=n(36).CONFIGURABLE,a=n(63),l=n(64),c=l.enforce,f=l.get,p=Object.defineProperty,h=s&&!r(function(){return 8!==p(function(){},"length",{value:8}).length}),d=String(String).split("String"),v=t.exports=function(t,e,n){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||u&&t.name!==e)&&(s?p(t,"name",{value:e,configurable:!0}):t.name=e),h&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?s&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0);}catch(t){}var r=c(t);return o(r,"source")||(r.source=d.join("string"==typeof e?e:"")),t};Function.prototype.toString=v(function(){return i(this)&&f(this).source||a(this)},"toString");},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return (e>0?r:n)(e)};},function(t,e,n){var r=n(20);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)};},function(t,e,n){var r=n(5),i=n(77),o=n(13),s=n(6),u=n(19),a=n(109);e.f=r&&!i?Object.defineProperties:function(t,e){s(t);for(var n,r=u(e),i=a(e),l=i.length,c=0;l>c;)o.f(t,n=i[c++],r[n]);return t};},function(t,e){e.f=Object.getOwnPropertySymbols;},function(t,e,n){var r=n(68),i=n(34);t.exports=Object.keys||function(t){return r(t,i)};},function(t,e,n){var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);e.f=o?function(t){var e=i(this,t);return !!e&&e.enumerable}:r;},function(t,e,n){var r=n(1),i=n(6),o=n(90);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),t(n,[]),e=n instanceof Array;}catch(t){}return function(n,r){return i(n),o(r),e?t(n,r):n.__proto__=r,n}}():void 0);},function(t,e,n){var r=n(51),i=n(29);t.exports=r?{}.toString:function(){return "[object "+i(this)+"]"};},function(t,e,n){var r=n(12),i=n(2),o=n(8),s=TypeError;t.exports=function(t,e){var n,u;if("string"===e&&i(n=t.toString)&&!o(u=r(n,t)))return u;if(i(n=t.valueOf)&&!o(u=r(n,t)))return u;if("string"!==e&&i(n=t.toString)&&!o(u=r(n,t)))return u;throw s("Can't convert object to primitive value")};},function(t,e,n){var r=n(17),i=n(1),o=n(67),s=n(108),u=n(6),a=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(u(t)),n=s.f;return n?a(e,n(t)):e};},function(t,e,n){var r=n(12),i=n(6),o=n(2),s=n(15),u=n(45),a=TypeError;t.exports=function(t,e){var n=t.exec;if(o(n)){var l=r(n,t,e);return null!==l&&i(l),l}if("RegExp"===s(t))return r(u,t,e);throw a("RegExp#exec called on incompatible receiver")};},function(t,e,n){var r=n(12),i=n(7),o=n(44),s=n(69),u=RegExp.prototype;t.exports=function(t){var e=t.flags;return void 0!==e||"flags"in u||i(t,"flags")||!o(u,t)?e:r(s,t)};},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp,s=r(function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")}),u=s||r(function(){return !o("a","y").sticky}),a=s||r(function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")});t.exports={BROKEN_CARET:a,MISSED_STICKY:u,UNSUPPORTED_Y:s};},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp;t.exports=r(function(){var t=o(".","s");return !(t.dotAll&&t.exec("\n")&&"s"===t.flags)});},function(t,e,n){var r=n(0),i=n(4),o=i.RegExp;t.exports=r(function(){var t=o("(?<a>b)","g");return "b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")});},function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e};},function(t,e,n){var r=n(36).PROPER,i=n(0),o=n(78),s="​᠎";t.exports=function(t){return i(function(){return !!o[t]()||s[t]()!==s||r&&o[t].name!==t})};},function(t,e,n){var r=n(1);t.exports=r(1..valueOf);},function(t,e,n){var r=n(49),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0};},function(t,e,n){var r=n(4),i=n(2),o=r.WeakMap;t.exports=i(o)&&/native code/.test(String(o));},function(t,e,n){var r=n(3),i=n(0),o=n(18),s=n(8),u=n(14),a=n(10),l=n(22),c=n(32),f=n(28),p=n(16),h=n(9),d=n(23),v=h("isConcatSpreadable"),g=d>=51||!i(function(){var t=[];return t[v]=!1,t.concat()[0]!==t}),y=p("concat"),b=function(t){if(!s(t))return !1;var e=t[v];return void 0!==e?!!e:o(t)};r({target:"Array",proto:!0,arity:1,forced:!g||!y},{concat:function(t){var e,n,r,i,o,s=u(this),p=f(s,0),h=0;for(e=-1,r=arguments.length;e<r;e++)if(o=-1===e?s:arguments[e],b(o))for(i=a(o),l(h+i),n=0;n<i;n++,h++)n in o&&c(p,h,o[n]);else l(h+1),c(p,h++,o);return p.length=h,p}});},function(t,e,n){var r=n(3),i=n(21).every;r({target:"Array",proto:!0,forced:!n(26)("every")},{every:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,n){var r=n(3),i=n(21).filter;r({target:"Array",proto:!0,forced:!n(16)("filter")},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,n){var r=n(3),i=n(37),o=n(57).indexOf,s=n(26),u=i([].indexOf),a=!!u&&1/u([1],1,-0)<0,l=s("indexOf");r({target:"Array",proto:!0,forced:a||!l},{indexOf:function(t){var e=arguments.length>1?arguments[1]:void 0;return a?u(this,t,e)||0:o(this,t,e)}});},function(t,e,n){n(3)({target:"Array",stat:!0},{isArray:n(18)});},function(t,e,n){var r=n(3),i=n(21).map;r({target:"Array",proto:!0,forced:!n(16)("map")},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}});},function(t,e,n){var r=n(3),i=n(14),o=n(10),s=n(27),u=n(22),a=n(0),l=a(function(){return 4294967297!==[].push.call({length:4294967296},1)}),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).push();}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{push:function(t){var e=i(this),n=o(e),r=arguments.length;u(n+r);for(var a=0;a<r;a++)e[n]=arguments[a],n++;return s(e,n),n}});},function(t,e,n){var r=n(3),i=n(92).left,o=n(26),s=n(23),u=n(96),a=o("reduce"),l=!u&&s>79&&s<83;r({target:"Array",proto:!0,forced:!a||l},{reduce:function(t){var e=arguments.length;return i(this,t,e,e>1?arguments[1]:void 0)}});},function(t,e,n){var r=n(3),i=n(14),o=n(48),s=n(49),u=n(10),a=n(27),l=n(22),c=n(28),f=n(32),p=n(58),h=n(16),d=h("splice"),v=Math.max,g=Math.min;r({target:"Array",proto:!0,forced:!d},{splice:function(t,e){var n,r,h,d,y,b,m=i(this),x=u(m),_=o(t,x),O=arguments.length;for(0===O?n=r=0:1===O?(n=0,r=x-_):(n=O-2,r=g(v(s(e),0),x-_)),l(x+n-r),h=c(m,r),d=0;d<r;d++)(y=_+d)in m&&f(h,d,m[y]);if(h.length=r,n<r){for(d=_;d<x-r;d++)y=d+r,b=d+n,y in m?m[b]=m[y]:p(m,b);for(d=x;d>x-r+n;d--)p(m,d-1);}else if(n>r)for(d=x-r;d>_;d--)y=d+r-1,b=d+n-1,y in m?m[b]=m[y]:p(m,b);for(d=0;d<n;d++)m[d+_]=arguments[d+2];return a(m,x-r+n),h}});},function(t,e,n){var r=n(3),i=n(14),o=n(10),s=n(27),u=n(58),a=n(22),l=1!==[].unshift(0),c=!function(){try{Object.defineProperty([],"length",{writable:!1}).unshift();}catch(t){return t instanceof TypeError}}();r({target:"Array",proto:!0,arity:1,forced:l||c},{unshift:function(t){var e=i(this),n=o(e),r=arguments.length;if(r){a(n+r);for(var l=n;l--;){var c=l+r;l in e?e[c]=e[l]:u(e,c);}for(var f=0;f<r;f++)e[f]=arguments[f];}return s(e,n+r)}});},function(t,e,n){var r=n(3),i=n(71).trim;r({target:"String",proto:!0,forced:n(121)("trim")},{trim:function(){return i(this)}});},function(t,e){},function(t,e){t.exports=function(t,e,n,r,i,o){var s,u=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(s=t,u=t.default);var l="function"==typeof u?u.options:u;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),i&&(l._scopeId=i);var c;if(o?(c=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o);},l._ssrRegister=c):r&&(c=r),c){var f=l.functional,p=f?l.render:l.beforeCreate;f?(l._injectStyles=c,l.render=function(t,e){return c.call(e),p(t,e)}):l.beforeCreate=p?[].concat(p,c):[c];}return {esModule:s,exports:u,options:l}};},function(t,e,n){var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"multiselect",class:{"multiselect--active":t.isOpen,"multiselect--disabled":t.disabled,"multiselect--above":t.isAbove,"multiselect--has-options-group":t.hasOptionGroup},attrs:{tabindex:t.searchable?-1:t.tabindex,role:"combobox","aria-owns":"listbox-"+t.id},on:{focus:function(e){return t.activate()},blur:function(e){!t.searchable&&t.deactivate();},keydown:[function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.target!==e.currentTarget?null:(e.preventDefault(),t.pointerForward())},function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.target!==e.currentTarget?null:(e.preventDefault(),t.pointerBackward())}],keypress:function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:(e.stopPropagation(),e.target!==e.currentTarget?null:t.addPointerElement(e))},keyup:function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.deactivate()}}},[t._t("caret",function(){return [n("div",{staticClass:"multiselect__select",on:{mousedown:function(e){return e.preventDefault(),e.stopPropagation(),t.toggle()}}})]},{toggle:t.toggle}),t._v(" "),t._t("clear",null,{search:t.search}),t._v(" "),n("div",{ref:"tags",staticClass:"multiselect__tags"},[t._t("selection",function(){return [n("div",{directives:[{name:"show",rawName:"v-show",value:t.visibleValues.length>0,expression:"visibleValues.length > 0"}],staticClass:"multiselect__tags-wrap"},[t._l(t.visibleValues,function(e,r){return [t._t("tag",function(){return [n("span",{key:r,staticClass:"multiselect__tag"},[n("span",{domProps:{textContent:t._s(t.getOptionLabel(e))}}),t._v(" "),n("i",{staticClass:"multiselect__tag-icon",attrs:{tabindex:"1"},on:{keypress:function(n){return !n.type.indexOf("key")&&t._k(n.keyCode,"enter",13,n.key,"Enter")?null:(n.preventDefault(),t.removeElement(e))},mousedown:function(n){return n.preventDefault(),t.removeElement(e)}}})])]},{option:e,search:t.search,remove:t.removeElement})]})],2),t._v(" "),t.internalValue&&t.internalValue.length>t.limit?[t._t("limit",function(){return [n("strong",{staticClass:"multiselect__strong",domProps:{textContent:t._s(t.limitText(t.internalValue.length-t.limit))}})]})]:t._e()]},{search:t.search,remove:t.removeElement,values:t.visibleValues,isOpen:t.isOpen}),t._v(" "),n("transition",{attrs:{name:"multiselect__loading"}},[t._t("loading",function(){return [n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"multiselect__spinner"})]})],2),t._v(" "),t.searchable?n("input",{ref:"search",staticClass:"multiselect__input",style:t.inputStyle,attrs:{name:t.name,id:t.id,type:"text",autocomplete:"off",spellcheck:"false",placeholder:t.placeholder,disabled:t.disabled,tabindex:t.tabindex,"aria-controls":"listbox-"+t.id},domProps:{value:t.search},on:{input:function(e){return t.updateSearch(e.target.value)},focus:function(e){return e.preventDefault(),t.activate()},blur:function(e){return e.preventDefault(),t.deactivate()},keyup:function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.deactivate()},keydown:[function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:(e.preventDefault(),t.pointerForward())},function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:(e.preventDefault(),t.pointerBackward())},function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:(e.stopPropagation(),t.removeLastElement())}],keypress:function(e){return !e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),e.stopPropagation(),e.target!==e.currentTarget?null:t.addPointerElement(e))}}}):t._e(),t._v(" "),t.isSingleLabelVisible?n("span",{staticClass:"multiselect__single",on:{mousedown:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("singleLabel",function(){return [[t._v(t._s(t.currentOptionLabel))]]},{option:t.singleValue})],2):t._e(),t._v(" "),t.isPlaceholderVisible?n("span",{staticClass:"multiselect__placeholder",on:{mousedown:function(e){return e.preventDefault(),t.toggle.apply(null,arguments)}}},[t._t("placeholder",function(){return [t._v("\n          "+t._s(t.placeholder)+"\n        ")]})],2):t._e()],2),t._v(" "),n("transition",{attrs:{name:"multiselect"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:t.optimizedHeight+"px"},attrs:{tabindex:"-1"},on:{focus:t.activate,mousedown:function(t){t.preventDefault();}}},[n("ul",{staticClass:"multiselect__content",style:t.contentStyle,attrs:{role:"listbox",id:"listbox-"+t.id}},[t._t("beforeList"),t._v(" "),t.multiple&&t.max===t.internalValue.length?n("li",[n("span",{staticClass:"multiselect__option"},[t._t("maxElements",function(){return [t._v("Maximum of "+t._s(t.max)+" options selected. First remove a selected option to select another.")]})],2)]):t._e(),t._v(" "),!t.max||t.internalValue.length<t.max?t._l(t.filteredOptions,function(e,r){return n("li",{key:r,staticClass:"multiselect__element",attrs:{id:t.id+"-"+r,role:e&&(e.$isLabel||e.$isDisabled)?null:"option"}},[e&&(e.$isLabel||e.$isDisabled)?t._e():n("span",{staticClass:"multiselect__option",class:t.optionHighlight(r,e),attrs:{"data-select":e&&e.isTag?t.tagPlaceholder:t.selectLabelText,"data-selected":t.selectedLabelText,"data-deselect":t.deselectLabelText},on:{click:function(n){return n.stopPropagation(),t.select(e)},mouseenter:function(e){return e.target!==e.currentTarget?null:t.pointerSet(r)}}},[t._t("option",function(){return [n("span",[t._v(t._s(t.getOptionLabel(e)))])]},{option:e,search:t.search,index:r})],2),t._v(" "),e&&(e.$isLabel||e.$isDisabled)?n("span",{staticClass:"multiselect__option",class:t.groupHighlight(r,e),attrs:{"data-select":t.groupSelect&&t.selectGroupLabelText,"data-deselect":t.groupSelect&&t.deselectGroupLabelText},on:{mouseenter:function(e){if(e.target!==e.currentTarget)return null;t.groupSelect&&t.pointerSet(r);},mousedown:function(n){return n.preventDefault(),t.selectGroup(e)}}},[t._t("option",function(){return [n("span",[t._v(t._s(t.getOptionLabel(e)))])]},{option:e,search:t.search,index:r})],2):t._e()])}):t._e(),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoResults&&0===t.filteredOptions.length&&t.search&&!t.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noResult",function(){return [t._v("No elements found. Consider changing the search query.")]},{search:t.search})],2)]),t._v(" "),n("li",{directives:[{name:"show",rawName:"v-show",value:t.showNoOptions&&(0===t.options.length||!0===t.hasOptionGroup&&0===t.filteredOptions.length)&&!t.search&&!t.loading,expression:"showNoOptions && ((options.length === 0 || (hasOptionGroup === true && filteredOptions.length === 0)) && !search && !loading)"}]},[n("span",{staticClass:"multiselect__option"},[t._t("noOptions",function(){return [t._v("List is empty.")]})],2)]),t._v(" "),t._t("afterList")],2)])])],2)},i=[],o={render:r,staticRenderFns:i};e.a=o;},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this");}catch(t){"object"==typeof window&&(n=window);}t.exports=n;}])});
  });

  var Multiselect = unwrapExports(vueMultiselect_min);
  var vueMultiselect_min_1 = vueMultiselect_min.VueMultiselect;

  var script = {
    components: {
      Multiselect: Multiselect
    },
    props: {
      placeholder: {
        default: "Search or add a tag"
      },
      tagPlaceholder: {
        default: "Add this as new tag"
      },
      showFlag: {
        type: Boolean,
        default: true
      },
      showName: {
        type: Boolean,
        default: true
      }
    },
    data: function data() {
      return {
        value: [],
        items: []
      };
    },
    methods: {
      removeElement: function removeElement(data) {
        var index = this.value.findIndex(function (v) {
          return v.iso2 === data.option.iso2;
        });
        if (index >= 0) {
          this.value.splice(index, 1);
          this.$emit("onSelect", this.value);
        }
      },
      onSelect: function onSelect() {
        this.$emit("onSelect", this.value);
      }
    },
    created: function created() {
      this.items = allCountries$1;
    },
    mounted: function mounted() {
      this.$emit("onSelect", this.value);
    }
  };

  var __vue_script__ = script;

  /* template */
  var __vue_render__ = function __vue_render__() {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("div", [_c("multiselect", {
      attrs: {
        "tag-placeholder": _vm.tagPlaceholder,
        placeholder: _vm.placeholder,
        label: "name",
        "track-by": "iso2",
        options: _vm.items,
        multiple: true,
        taggable: true,
        "show-labels": false,
        "tag-template": "tagTemplate"
      },
      on: {
        select: _vm.onSelect
      },
      scopedSlots: _vm._u([{
        key: "option",
        fn: function fn(props) {
          return [_c("div", {
            staticClass: "option__desc"
          }, [_c("div", {
            staticClass: "vti__flag",
            class: props.option.iso2.toLowerCase()
          }), _vm._v(" "), _c("span", {
            staticClass: "option__title"
          }, [_vm._v(_vm._s(props.option.name) + " +" + _vm._s(props.option.dialCode))])])];
        }
      }, {
        key: "tag",
        fn: function fn(option) {
          return [_c("span", {
            staticClass: "multiselect__tag"
          }, [_vm.showFlag ? _c("span", {
            staticClass: "vti__flag",
            class: option.option.iso2.toLowerCase()
          }) : _vm._e(), _vm._v(" "), _vm.showName ? _c("span", [_vm._v(_vm._s(option.option.name))]) : _vm._e(), _vm._v(" "), _c("i", {
            staticClass: "multiselect__tag-icon",
            attrs: {
              "aria-hidden": "true",
              tabindex: "1"
            },
            on: {
              keydown: function keydown($event) {
                if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) {
                  return null;
                }
                $event.preventDefault();
                return _vm.removeElement(option);
              },
              mousedown: function mousedown($event) {
                $event.preventDefault();
                return _vm.removeElement(option);
              }
            }
          })])];
        }
      }]),
      model: {
        value: _vm.value,
        callback: function callback($$v) {
          _vm.value = $$v;
        },
        expression: "value"
      }
    })], 1);
  };
  var __vue_staticRenderFns__ = [];
  __vue_render__._withStripped = true;

  /* style */
  var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
    if (!inject) return;
    inject("data-v-e6e23f26_0", {
      source: "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:40px;height:38px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{-webkit-animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__spinner:after{-webkit-animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input::-webkit-input-placeholder{color:#35495e}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input:-ms-input-placeholder{color:#35495e}.multiselect__input::-ms-input-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver;background:inherit}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@-webkit-keyframes spinning{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}@keyframes spinning{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(2turn);transform:rotate(2turn)}}",
      map: undefined,
      media: undefined
    }), inject("data-v-e6e23f26_1", {
      source: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",
      map: {
        "version": 3,
        "sources": [],
        "names": [],
        "mappings": "",
        "file": "VueCountryCodeMulti.vue"
      },
      media: undefined
    });
  };
  /* scoped */
  var __vue_scope_id__ = undefined;
  /* module identifier */
  var __vue_module_identifier__ = undefined;
  /* functional template */
  var __vue_is_functional_template__ = false;
  /* style inject SSR */

  /* style inject shadow dom */

  var __vue_component__ = /*#__PURE__*/normalizeComponent({
    render: __vue_render__,
    staticRenderFns: __vue_staticRenderFns__
  }, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, createInjector, undefined, undefined);

  var index = _objectSpread2(_objectSpread2({}, __vue_component__), {}, {
    install: function install(Vue) {
      Vue.component(__vue_component__.name, __vue_component__);
      return Vue;
    }
  });

  exports.default = index;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
