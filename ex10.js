// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

function convertToCamelCase(inputString) {
    let output = '';
    const words = inputString.split('_');

    words.forEach((value, index) => {
        output += (index === 0)
            ? words[index]
            : words[index].split('').toSpliced(0, 1, words[index][0].toUpperCase()).join('');
    })

    return output;
}

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"