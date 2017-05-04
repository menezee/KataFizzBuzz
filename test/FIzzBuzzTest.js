const assert = require('assert');
const isDivisibleByN = require('../FizzBuzz').isDivisibleByN;

describe('Function returns true if dividend is divisible by divisor', function () {
  context('When rest is 0', function () {
    it('it should return true', function () {
      assert.equal(true, isDivisibleByN(30, 3));
      assert.equal(true, isDivisibleByN(30, 5));
    });
  });

  context('When rest is not 0', function () {
    it('it should return false', function () {
      assert.equal(false, isDivisibleByN(5, 3));
      assert.equal(false, isDivisibleByN(31, 5));
    });
  });
});
