/**
 * Check if an array is sorted.
 * 
 * @param {Array} `array` The array to check.
 * @param {Function} `[comparator]` Optionally. Specifies a function that defines the sort order.
 * @returns {Boolean} Returns `true` if `array` is sorted, else `false`. 
 * 
 * ``` js
 * isSorted([1, 2, 3, 4, 5]);
 * // => true
 * 
 * isSorted([1, 3, 5, 2, 4]);
 * // => false
 * 
 * isSorted([5, 4, 3, 2, 1], (a, b) => b - a);
 * // => true
 * ```
 */

const defaultComparator = (a, b) => a - b;

function isSorted(array, comparator = defaultComparator) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected Array');
  }

  for (let i = 1, len = array.length; i < len; i++) {
    if (comparator(array[i - 1], array[i]) > 0) {
      return false;
    }
  }
  return true;
}

export default isSorted;
