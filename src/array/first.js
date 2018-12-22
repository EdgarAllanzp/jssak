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
