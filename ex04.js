// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

function mostFrequentChar(inputString) {
    let chars = inputString.split('');
    let uniChars = new Set(chars);
    let rank = []

    uniChars.forEach(uniChar => {
        let charObject = {
            char: uniChar,
            count: 0
        };

        chars.map((char) => {
            if (char === uniChar) charObject.count++
        })

        rank.push(charObject)
    })

    return rank.sort((a, b) => b.count - a.count).at(0).char
}

console.log(mostFrequentChar("javascript")); // Expected output: "a"