function splitingString(string, delimiter) {
  const trimmed = [];
  const array = string.split(delimiter);
  for (let x = 0; x < array.length; x++) {
    trimmed.push(array[x].trim());
  }
  return trimmed;
}

function sumArray(array) {
  let sum = 0;
  const flattenArray = array.flat(Infinity);
  flattenArray.forEach((element) => (sum += element));
  return sum;
}

function factorial(number) {
  if (number < 2) {
    return 1;
  }
  let result = 1;
  for (let x = number; x > 0; x--) {
    result *= x;
  }
  return result;
}

function fibonacci(position) {
  if (position === 1) {
    return 0;
  }
  if (position === 2) {
    return 1;
  }
  let first = 0;
  let second = 1;
  let result = 0;
  for (let x = position; x > 1; x--) {
    result = first + second;
    second = first;
    first = result;
  }
  return result;
}

function fizzBuzz() {
  const arr = [];
  for (let x = 1; x <= 30; x++) {
    arr.push((x % 3 ? "" : "fizz") + (x % 5 ? "" : "buzz") || x);
  }
  return arr;
}

function findIndexOfNumber(number, array) {
  return array.findIndex((el) => el === number);
}

function removeDuplicates(string) {
  return [...new Set(string)].join("");
  // return remove.join("");
}

function reverseWords(string) {
  const array = string.trim().split(" ");
  const reversed = array.reverse();
  return reversed.filter((el) => el !== "").join(" ");
}

function isPrime(number) {
  if (number === 1) return false;
  for (let x = 2; x < number; x++) {
    if (!(number % x)) return false;
  }
  return true;
}

function intigerLength(number) {
  if (number) {
    const string = `${number}`;
    return string.length;
  }
  return null;
}

module.exports = {
  splitingString,
  intigerLength,
  isPrime,
  reverseWords,
  removeDuplicates,
  findIndexOfNumber,
  fizzBuzz,
  fibonacci,
  factorial,
  sumArray,
};
