const isDivisibleByN = (dividend, divisor) => {
  return dividend % divisor === 0;
}

const fizzBuzzFunction = () => {
  const arr = [];

  for (let i = 1; i <= 100; i++) {
    let str = '';
    if (isDivisibleByN(i, 3)) {
      str += 'Fizz'
    }
    if (isDivisibleByN(i, 5)) {
      str += 'Buzz'
    }
    arr[i] = str || i;
  }

  return arr;
}

module.exports = {isDivisibleByN, fizzBuzzFunction};
