const defaultComparator = (a, b) => a - b;

export default function (array, comparator) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected Array');
  }

  comparator = comparator || defaultComparator;

  for (let i = 1, len = array.length; i < len; i++) {
    if (comparator(array[i - 1], array[i]) > 0) {
      return false;
    }
  }
  return true;
}
