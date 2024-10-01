// Exercise 3: Write a function `findMissingNumber` that takes an array of integers from 1 to `n`
// with one number missing and returns the missing number.
// Example: findMissingNumber([1, 2, 4, 5]) should return 3.

function findMissingNumber(inputArray) {
    let minimum = inputArray.at(0);
    let maximum = inputArray.at(-1);
    let missingNumbers = [];

    for (let i = minimum ; i <= maximum; i++) {
        if (! inputArray.includes(i)) {
            missingNumbers.push(i);
        }
    }

    return missingNumbers;
}

console.log(findMissingNumber([1, 2, 4, 5])); // Expected output: 3