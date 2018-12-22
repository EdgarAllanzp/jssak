function _defineProperty(obj, key, value) {
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var defaultComparator = function defaultComparator(a, b) {
  return a - b;
};

function isSorted (array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected Array');
  }

  comparator = comparator || defaultComparator;

  for (var i = 1, len = array.length; i < len; i++) {
    if (comparator(array[i - 1], array[i]) > 0) {
      return false;
    }
  }

  return true;
}

function first (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected Array');
  }

  if (array.length) {
    return array[0];
  }

  return undefined;
}

var array = {
  isSorted: isSorted,
  first: first
};

var _function = {};

var main = _objectSpread({}, array, _function);

export default main;
