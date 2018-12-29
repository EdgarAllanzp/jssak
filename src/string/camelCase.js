import capitalize from './capitalize';

/**
 * Converts `string` to camcel case.
 * 
 * @syntax camelCase([string])
 * @param {String} `[string]` The string to convert.
 * @returns {String} Returns the camel cased string.
 * 
 * ``` js
 * camelCase('foo bar');
 * // => 'fooBar'
 * ```
 */

function camelCase(string = '') {
  string = string.toLowerCase()
    .replace(/[^A-Za-z0-9]/g, ' ')
    .split(' ')
    .reduce((result, word) => result + capitalize(word.toLowerCase()));

  return string.charAt(0).toLowerCase() + string.slice(1);
}

export default camelCase;
