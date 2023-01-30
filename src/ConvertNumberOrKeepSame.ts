export default function convertNumberOrKeepSame(
  inputNumber: number
): "Fizz" | "Buzz" | "FizzBuzz" | number {
  if (inputNumber % 3 === 0 && inputNumber % 5 === 0) {
    return "FizzBuzz";
  } else if (inputNumber % 3 === 0) {
    return "Fizz";
  } else if (inputNumber % 5 === 0) {
    return "Buzz";
  } else {
    return inputNumber;
  }
}

/* function convertNumberOrKeepSame(inputNumber):
      IF number is divisible by 3 AND 5:
          return "FizzBuzz"
      ELSE IF number is divisible by 3:
          return "Fizz"
      ELSE IF number is divisible by 5:
          return "Buzz"
      ELSE return number
      END IF.
  END.
  */
