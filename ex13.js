// Exercise 13: Write a recursive function `sumRange` that takes a number `n`
// and returns the sum of all numbers from 1 to `n`1 + 2 + 3 + 4 + 5.
// Example: sumRange(5) should return 15 ().

function sumRange(number) {
    let sum = 0;

    for (let i = 1; i <= number; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumRange(5)); // Expected output: 15