import FizzBuzz from "./FizzBuzz";

test("non-edge case numbers correctly return the corresponding output string", () => {
  expect(FizzBuzz(15)).toEqual(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz"
  );
});

test("n=0 returns an empty string", () => {
  expect(FizzBuzz(0)).toEqual("");
});

test("n=1 returns a string containing only the number 1", () => {
  expect(FizzBuzz(1)).toEqual("1");
});
