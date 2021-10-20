const { expect, describe } = require("@jest/globals");
const {
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
} = require("./jsbasics");

const fizzBuzzResult = [
  1,
  2,
  "fizz",
  4,
  "buzz",
  "fizz",
  7,
  8,
  "fizz",
  "buzz",
  11,
  "fizz",
  13,
  14,
  "fizzbuzz",
  16,
  17,
  "fizz",
  19,
  "buzz",
  "fizz",
  22,
  23,
  "fizz",
  "buzz",
  26,
  "fizz",
  28,
  29,
  "fizzbuzz",
];

const array = [1, 3, 5, 2, 31, 52, 7, 309, 567, 435, 123, 7564, 3312356, 7643];

test("fizzbuzz", () => {
  expect(fizzBuzz()).toStrictEqual(fizzBuzzResult);
});

describe("Remove duplicated letters", () => {
  test("tree traversal", () => {
    expect(removeDuplicates("tree traversal")).toBe("tre avsl");
  });
  test("jan pawel drugi", () => {
    expect(removeDuplicates("jan pawel drugi")).toBe("jan pweldrugi");
  });
});

describe("Reverse Words", () => {
  test("Interviews are awesome!", () => {
    expect(reverseWords("Interviews are awesome!")).toBe(
      "awesome! are Interviews"
    );
  });

  test(" CS   degree  ", () => {
    expect(reverseWords(" CS   degree  ")).toBe("degree CS");
  });
});

describe("Check if number is prime", () => {
  test("number: 1", () => {
    expect(isPrime(1)).toBe(false);
  });
  test("number: 2137", () => {
    expect(isPrime(2137)).toBe(true);
  });
  test("number: 4", () => {
    expect(isPrime(4)).toBe(false);
  });
});

describe("Correctly flat array and sum numbers", () => {
  test("array [1,2,3]", () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });
  test("array [1,2,3,[4,5]]", () => {
    expect(sumArray([1, 2, 3, [4, 5]])).toBe(15);
  });
  test("array [1,2,3,[4,5,[6]]]", () => {
    expect(sumArray([1, 2, 3, [4, 5, [6]]])).toBe(21);
  });
});

describe("Correctly compute factorial", () => {
  test("0!", () => {
    expect(factorial(0)).toBe(1);
  });
  test("1!", () => {
    expect(factorial(1)).toBe(1);
  });
  test("2!", () => {
    expect(factorial(2)).toBe(2);
  });
  test("5!", () => {
    expect(factorial(5)).toBe(120);
  });
});

describe("Correctly compute fibonacci", () => {
  test("position 1", () => {
    expect(fibonacci(1)).toBe(0);
  });
  test("position 2", () => {
    expect(fibonacci(2)).toBe(1);
  });
  test("position 3", () => {
    expect(fibonacci(3)).toBe(1);
  });
  test("position 10", () => {
    expect(fibonacci(10)).toBe(34);
  });
});

describe("Should find correct index", () => {
  test("for number 1", () => {
    expect(findIndexOfNumber(1, array)).toBe(0);
  });
  test("for number 3", () => {
    expect(findIndexOfNumber(3, array)).toBe(1);
  });
  test("for number 31", () => {
    expect(findIndexOfNumber(31, array)).toBe(4);
  });
  test("for number 7643", () => {
    expect(findIndexOfNumber(7643, array)).toBe(13);
  });
});

describe("Should return number of digts in intiger", () => {
  test("when nothing passed", () => {
    expect(intigerLength()).toStrictEqual(null);
  });
  test("when one digit number", () => {
    expect(intigerLength(2)).toStrictEqual(1);
  });
  test("when two digit number", () => {
    expect(intigerLength(21)).toStrictEqual(2);
  });
  test("when three digit number", () => {
    expect(intigerLength(213)).toStrictEqual(3);
  });
  test("when four digit number", () => {
    expect(intigerLength(2137)).toStrictEqual(4);
  });
});

describe("string splitter should return", () => {
  test('["hello","world"]', () => {
    const string = "hello, world";
    const delimiter = ",";
    expect(splitingString(string, delimiter)).toStrictEqual(["hello", "world"]);
  });
});
