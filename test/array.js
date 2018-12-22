const sak = require('../');
const assert = require('assert');
const nonArray = 'foobar';

describe('Array#isSorted', function() {
  const fixtures = require('./fixtures/is-sorted');
  const comparators = {
    descending: (a, b) => b - a
  };

  it('should throw type error when non-Array inputs', function() {
    assert.throws(sak.isSorted.bind(null, nonArray), 'Expected Array');
  });

  fixtures.forEach((f) => {
    it(`should return ${f.expected} for [${f.array}]`, function() {
      assert.equal(sak.isSorted(f.array, comparators[f.comparator]), f.expected);
    });
  });
});

describe('Array#first', function() {
  it('should throw type error when non-Array inputs', function() {
    assert.throws(sak.first.bind(null, nonArray), 'Expected Array');
  });

  it('should get the first element of array', function() {
    assert.equal(sak.first([1, 2, 3, 4, 5]), 1);
  });

  it('should return undefined while array is empty', function() {
    assert.equal(sak.first([]), undefined);
  });
});
