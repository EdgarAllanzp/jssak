const _ = require('../');
const fixtures = require('./fixtures');
const assert = require('assert');

describe('Array', function() {
  describe('#isSorted', function() {
    const comparators = {
      descending: (a, b) => b - a
    }

    it('should throw type error when non-Array inputs', function() {
      assert.throws(_.isSorted.bind(this, 'foobar'), 'Expected Array');
    });

    fixtures.forEach((f) => {
      it(`should return ${f.expected} for [${f.array}]`, function() {
        assert.equal(_.isSorted(f.array, comparators[f.comparator]), f.expected);
      });
    });
  });

});