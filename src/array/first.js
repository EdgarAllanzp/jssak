/**
 * Get the first element.
 * 
 * @syntax first(array)
 * @param {Array} `array` The array to query. 
 * @returns {Any} Returns the first element.
 * 
 * ``` js
 * first(['a', 'b', 'c', 'd', 'e', 'f']); 
 * // => 'a'
 * ```
 */

function first(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected array.');
  }
  if (!array.length) {
    return undefined;
  }
  return array[0];
}

export default first;
