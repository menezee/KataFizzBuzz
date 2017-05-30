const assert = require('assert');
const isDivisibleByN = require('../FizzBuzz').isDivisibleByN;
const fizzBuzzFunction = require('../FizzBuzz').fizzBuzzFunction;
const numberContains = require('../FizzBuzz').numberContains;

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

describe('Function returns a string if number is divisible by 3 or 5 || contain 3 or 5', function () {
  let arr;

  before(function() {
    arr = fizzBuzzFunction();
  });

  context('When number is divisible by 3 or contains 3', function () {
    it('it should return Fizz', function () {
      assert.equal('Fizz', arr[3]);
      assert.equal('Fizz', arr[9]);
      assert.equal('Fizz', arr[33]);
      assert.equal('Fizz', arr[13]);
    });
  });

  context('When number is divisible by 5 or contains 5', function () {
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

  context('When number contains 3 or 5', function () {
    it('it should return FizzBuzz', function () {
      assert.equal('FizzBuzz', arr[53]);
    });
  });

  context('When number is neither divisible by 3 nor 5', function () {
    it('it should return the number itself', function () {
      assert.equal(2, arr[2]);
      assert.equal(1, arr[1]);
      assert.equal(4, arr[4]);
      assert.equal(7, arr[7]);
      assert.equal(11, arr[11]);
      assert.equal(7, arr[7]);
      assert.equal(41, arr[41]);
      assert.equal(47, arr[47]);
    });
  });
});

describe('Function returns true if num contains val', function () {
  context('When num contains val', function () {
    it('it should return true', function () {
      assert.equal(true, numberContains(30, 3));
      assert.equal(true, numberContains(548, 5));
    });
  });

  context('When num does not contain val', function () {
    it('it should return false', function () {
      assert.equal(false, numberContains(5, 3));
      assert.equal(false, numberContains(31, 5));
    });
  });
});