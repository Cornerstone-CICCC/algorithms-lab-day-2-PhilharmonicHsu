// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

function capitalizeWords(inputString) {
    let words = inputString.split(' ');
    let output = [];

    for(let word of words) {
        let letters = word.split('');

        letters[0] = letters[0].toUpperCase();
        output.push(letters.join(''))
    }

    return output.join(' ');
}

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"