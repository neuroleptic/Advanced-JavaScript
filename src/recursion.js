// Complete the following functions.

const nFibonacci = (n) => {
  // fibonacci sequence: 1 2 3 5 8 13 ...
  // return the nth number in the sequence
  if (n <= 1) {
    return 1;
  }
  return nFibonacci(n - 1) + nFibonacci(n - 2);
};

const nFactorial = (n) => {
  // factorial example: !5 = 5 * 4 * 3 * 2 * 1
  // return the factorial of `n`
  if (n === 0) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

/* Extra Credit */
const checkMatchingLeaves = (obj) => {
  // return true if every property on `obj` is the same
  // otherwise return false
  let value;
  let isSame = true;
  const checkLeaves = (object) => {
    Object.keys(object).forEach((key) => {
      if (value === undefined && typeof key !== 'object') {
        value = object[key];
        return undefined;
      }
      if (typeof object[key] === 'object') {
        return checkLeaves(object[key]);
      }
      if (object[key] !== value) {
        isSame = false;
        return undefined;
      }
      return undefined;
    });
  };
  checkLeaves(obj);
  return isSame;
};

/* eslint-enable no-unused-vars */

module.exports = {
  nFibonacci,
  nFactorial,
  checkMatchingLeaves
};
