// Exercise 7: Write a function `validateEmail` that takes a string as an email
// and returns true if the email is valid, and false otherwise. Use basic validation
// (e.g., the presence of "@" and a ".").
// Example: validateEmail("test@example.com") should return true.

function validateEmail(emailString) {
    let necessaryPresence = ['@', '.'];
    let standerCount = 0;

    for (let presence of necessaryPresence) {
        if (emailString.includes(presence)) standerCount++
    }

    return standerCount === necessaryPresence.length;
}

console.log(validateEmail("test@example.com")); // Expected output: true
console.log(validateEmail("invalid-email.com")); // Expected output: false