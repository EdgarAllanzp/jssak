export default function (array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected Array');
  }
  if (array.length) {
    return array[0];
  }
  return undefined;
}
