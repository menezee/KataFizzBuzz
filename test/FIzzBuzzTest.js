const assert = require('assert');
const isDivisibleByN = require('../FizzBuzz').isDivisibleByN;
const fizzBuzzFunction = require('../FizzBuzz').fizzBuzzFunction;

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

describe('Function returns a string if number is divisible by 3 or 5', function () {
  let arr;

  before(function() {
    arr = fizzBuzzFunction();
  });

  context('When number is divisible by 3', function () {
    it('it should return Fizz', function () {
      assert.equal('Fizz', arr[3]);
      assert.equal('Fizz', arr[9]);
      assert.equal('Fizz', arr[33]);
    });
  });

  context('When number is divisible by 5', function () {
    it('it should return Buzz', function () {
      assert.equal('Buzz', arr[5]);
      assert.equal('Buzz', arr[10]);
      assert.equal('Buzz', arr[20]);
    });
  });

  context('When number is divisible by 3 and 5', function () {
    it('it should return FizzBuzz', function () {
      assert.equal('FizzBuzz', arr[15]);
      assert.equal('FizzBuzz', arr[30]);
      assert.equal('FizzBuzz', arr[45]);
    });
  });
});