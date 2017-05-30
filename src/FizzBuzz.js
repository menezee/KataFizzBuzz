const isDivisibleByN = (dividend, divisor) => {
  return dividend % divisor === 0;
}

const numberContains = (num, val) => {
  return num.toString().indexOf(val) > -1;
}

const FIZZBUZZ_CONSTANTS = {
  FIZZ: 'Fizz',
  BUZZ: 'Buzz',
  FIZZBUZZ: 'FizzBuzz',
}

const isFizz = (num) => {
  return isDivisibleByN(num, 3) || numberContains(num, 3);
}

const isBuzz = (num) => {
  return isDivisibleByN(num, 5) || numberContains(num, 5);
}

const fizzBuzzFunction = (num) => {
  if(isFizz(num) && isBuzz(num)) {
    return FIZZBUZZ_CONSTANTS.FIZZBUZZ;
  }
  else if(isFizz(num)) {
    return FIZZBUZZ_CONSTANTS.FIZZ;
  }
  else if(isBuzz(num)) {
    return FIZZBUZZ_CONSTANTS.BUZZ;
  }
  else {
    return num;
  }
}

const generateFizzBuzzSequence = (range) => {
  const arr = [];

  for (let i = 1; i <= range; i++) {
    arr[i] = fizzBuzzFunction(i);
  }

  return arr;
}

module.exports = {isDivisibleByN, numberContains, generateFizzBuzzSequence, FIZZBUZZ_CONSTANTS};
