/**
 * Converts the first character of `string` to upper case.
 * 
 * @syntax capitalize([string])
 * @param {String} `[string]` The string to capitalize.
 * @returns {String} Returns the capitalized string.
 * 
 * ``` js
 * capitalize('foo');
 * // => 'Foo'
 * ```
 */

function capitalize(string = '') {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default capitalize;
