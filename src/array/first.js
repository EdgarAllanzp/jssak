/**
 * @description Get the first element or first n elements of an array.
 * 
 * @param {Array} array: The array to query. 
 * @param {*} num: The first elements count.
 * 
 * @returns {*|Array} Returns the first element or first n elements of array.
 * 
 * @example
 * 
 * ``` js
 * first(['a', 'b', 'c', 'd', 'e', 'f']); 
 * // => 'a'
 * 
 * first(['a', 'b', 'c', 'd', 'e', 'f'], 1);
 * // => 'a'
 * 
 * first(['a', 'b', 'c', 'd', 'e', 'f'], 3);
 * // => ['a', 'b', 'c']
 * ```
 */

export default function (array, num = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected array.');
  }
  if (!array.length) {
    return undefined;
  }

  if (num === 1) {
    return array[0];
  }
  return array.slice(0, num);
}
