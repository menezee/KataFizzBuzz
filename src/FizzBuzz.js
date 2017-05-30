const isDivisibleByN = (dividend, divisor) => {
  return dividend % divisor === 0;
}

const numberContains = (num, val) => {
  return num.toString().indexOf(val) > -1;
}

const FIZZBUZZ_CONSTANTS = {
  Fizz: 'Fizz',
  Buzz: 'Buzz',
  FizzBuzz: 'FizzBuzz',
}

const isFizz = (num) => {
  return isDivisibleByN(num, 3) || numberContains(num, 3) ? FIZZBUZZ_CONSTANTS.Fizz : '';
}

const isBuzz = (num) => {
  return isDivisibleByN(num, 5) || numberContains(num, 5) ? FIZZBUZZ_CONSTANTS.Buzz : '';
}

const generateFizzBuzzSequence = (range) => {
  const arr = [];

  for (let i = 1; i <= range; i++) {
    arr[i] = FIZZBUZZ_CONSTANTS[isFizz(i) + isBuzz(i)] || i;
  }

  return arr;
}

module.exports = {isDivisibleByN, numberContains, generateFizzBuzzSequence, FIZZBUZZ_CONSTANTS};
