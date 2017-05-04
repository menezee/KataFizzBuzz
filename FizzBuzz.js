const isDivisibleByN = (dividend, divisor) => {
  return dividend % divisor === 0;
}

const numberContains = (num, val) => {
  return num.toString().indexOf(val) > -1;
}

// if number is divisible by 3 = fizz, by 5 = buzz, by 3 and 5 = fizzbuzz
const fizzBuzzFunction = () => {
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    let str = '';
    if (isDivisibleByN(i, 3) || numberContains(i, 3)) {
      str += 'Fizz'
    }
    if (isDivisibleByN(i, 5) || numberContains(i, 5)) {
      str += 'Buzz'
    }
    arr[i] = str || i;
  }

  return arr;
}

module.exports = {isDivisibleByN, fizzBuzzFunction, numberContains};
