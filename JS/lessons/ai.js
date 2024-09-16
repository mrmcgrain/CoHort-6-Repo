function validatePassword(password) {
    const uppercasePattern = /([A-Z].*){2,}/; // Pattern to check for at least two uppercase letters
    const numberPattern = /\d/;               // Pattern to check for at least one number
    const specialCharPattern = /([^A-Za-z0-9].*){2,}/; // Pattern to check for at least two special characters

    // Validate the password
    if (uppercasePattern.test(password) &&
        numberPattern.test(password) &&
        specialCharPattern.test(password)) {
        return true; // Password is valid
    } else {
        return false; // Password is not valid
    }
}

console.log(validatePassword("AB$$1"));   // Expected output: true
console.log(validatePassword("A$1bcdef"));

let phoneValid = /[1-9]{3}-[1-9]{4}/