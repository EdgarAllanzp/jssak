import _ from '../src/main';
import assert from 'assert';
const nonArray = 'foobar';

describe('Array#isSorted', function() {
  const fixtures = require('./fixtures/is-sorted');
  const comparators = {
    descending: (a, b) => b - a
  };

  it('should throw type error when non-Array inputs', function() {
    assert.throws(_.isSorted.bind(null, nonArray), 'Expected Array');
  });

  fixtures.forEach((f) => {
    it(`should return ${f.expected} for [${f.array}]`, function() {
      assert.equal(_.isSorted(f.array, comparators[f.comparator]), f.expected);
    });
  });
});

describe('Array#first', function() {
  it('should throw type error when non-Array inputs', function() {
    assert.throws(_.first.bind(null, nonArray), 'Expected array.');
  });

  it('should get the first element of array', function() {
    assert.equal(_.first([1, 2, 3, 4, 5], 1), 1);
  });

  it('should return the first n elements of the array', function() {
    assert.deepEqual(_.first([1, 2, 3, 4, 5], 3), [1, 2, 3]);
  });

  it('should return undefined while array is empty', function() {
    assert.equal(_.first([]), undefined);
  });
});

describe('Array#last', function() {
  it('should throw type error when non-Array inputs', function() {
    assert.throws(_.last.bind(null, nonArray), 'Expected array.');
  });

  it('should get the last element of array', function() {
    assert.equal(_.last([1, 2, 3, 4, 5], 1), 5);
  });

  it('should return the last n elements of the array', function() {
    assert.deepEqual(_.last([1, 2, 3, 4, 5], 3), [3, 4, 5]);
  });

  it('should return undefined while array is empty', function() {
    assert.equal(_.last([]), undefined);
  });
});
