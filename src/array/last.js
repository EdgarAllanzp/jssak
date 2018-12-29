/**
 * Get the last element.
 * 
 * @syntax last(array)
 * @param {Array} `array` The array to query. 
 * @returns {Any} Returns the last element.
 * 
 * ``` js
 * last(['a', 'b', 'c', 'd', 'e', 'f']); 
 * // => 'f'
 * ```
 */

function last(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected array.');
  }

  const arrayLen = array.length;
  if (!arrayLen) {
    return undefined;
  }
  return array[arrayLen - 1];
}

export default last;
