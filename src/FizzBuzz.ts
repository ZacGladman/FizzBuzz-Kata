/*
>>>>>>> PSEUDOCODE <<<<<<<

==== Highest-level solution ====

function FizzBuzz(n):
    Set rawOutputString equal to an empty string;
    FOR EACH number from 1 to n:
        Add a comma and a space onto the end of rawOutputString
        Convert number into 'Fizz', 'Buzz', 'FizzBuzz' or keep the same according to the rules;
        Add that converted value onto the end of rawOutputString 
    END FOR.
    Set cleanedOutputString to equal rawOutputString minus its first two characters (comma and space);
    RETURN cleanedOutputString;
END.


==== More detailed solution ====

function convertNumberOrKeepSame(inputNumber):
    IF number is divisible by 3 AND 5:
        return "FizzBuzz"
    ELSE IF number is divisible by 3:
        return "Fizz"
    ELSE IF number is divisible by 5:
        return "Buzz"
    ELSE return number
    END IF.
END.

function FizzBuzz(n):
    Set rawOutputString equal to an empty string;
    FOR EACH number from 1 to n:
        Add a comma and a space onto the end of rawOutputString;
        Set convertedNumber equal to convertNumberOrKeepSame(number);
        Add convertedNumber onto the end of rawOutputString
    END FOR.
    Set cleanedOutputString to equal rawOutputString minus its first two characters (comma and space);
    RETURN cleanedOutputString;
END.

*/
