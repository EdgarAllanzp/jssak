import capitalize from './capitalize';

function camelCase(string = '') {
  string = string.toLowerCase()
    .replace(/[^A-Za-z0-9]/g, ' ')
    .split(' ')
    .reduce((result, word) => result + capitalize(word.toLowerCase()));

  return string.charAt(0).toLowerCase() + string.slice(1);
}

export default camelCase;
