export default function (array, num = 1) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected array.');
  }

  const arrayLen = array.length;
  if (!arrayLen) {
    return undefined;
  }
  if (num === 1) {
    return array[arrayLen - 1];
  }
  return array.slice(arrayLen - num);
}
