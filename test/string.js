import _ from '../src/main';
import assert from 'assert';

describe('String', function() {
  describe('camelCase', function() {
    it('should convert string to camelcase based.', function() {
      assert.equal(_.camelCase('foo bar'), 'fooBar');
    });

    it('should return empty string', function() {
      assert.equal(_.camelCase(), '');
    });
  });

  describe('capitalize', function() {
    it('should convert string to capitalize based.', function() {
      assert.equal(_.capitalize('foo'), 'Foo');
    });

    it('should return empty string', function() {
      assert.equal(_.capitalize(), '');
    });
  });
});
