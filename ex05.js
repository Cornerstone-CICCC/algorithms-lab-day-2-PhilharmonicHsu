// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

function countConsonants(inputString) {
    return (new Set(inputString.replace(' ', ''))).size;
}

console.log(countConsonants("hello world")); // Expected output: 7
