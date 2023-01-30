import convertNumberOrKeepSame from "./ConvertNumberOrKeepSame";

test("multiples of 3 AND 5 return 'FizzBuzz'", () => {
  expect(convertNumberOrKeepSame(15)).toEqual("FizzBuzz");
  expect(convertNumberOrKeepSame(300)).toEqual("FizzBuzz");
});

test("multiples of 3 only return 'Fizz'", () => {
  expect(convertNumberOrKeepSame(3)).toEqual("Fizz");
  expect(convertNumberOrKeepSame(33)).toEqual("Fizz");
});

test("multiples of 5 only return 'Buzz'", () => {
  expect(convertNumberOrKeepSame(5)).toEqual("Buzz");
  expect(convertNumberOrKeepSame(55)).toEqual("Buzz");
});

test("numbers that are not multiples of 3 or 5 return themselves", () => {
  expect(convertNumberOrKeepSame(7)).toEqual(7);
  expect(convertNumberOrKeepSame(79)).toEqual(79);
});
