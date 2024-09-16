

// Regex has 2 methods, 
// .test
// .match

// .test return a boolean

// regexSearch.test(What searching)

let testStr = "freeCodeCamp";
let regex = /Code/

console.log(regex.test(testStr))

// console.log(/Code/.test("freeCodeCamp"))





// .match
// whereImLooking.match(/looking for/)
let testStr2 = "freeCodeCamp";
let regex2 = /Code/

// console.log(testStr2.match(regex2))
// console.log("freeCodeCamp".match(/Code/))





// to search for a range of character  /[a-z]/

let alpha = "abcdefghijklMNOPqrstuvwxyz"
let newRegex = /[^m-z]/gi
// console.log(alpha.match(newRegex))





// If we want to check for multiple patterns

let otherRegex = /tea|soda|coffee/    // |  =  or in regex

// flags   /something/ i       i = ignore case
//         /something/ g       g =  return ALL matches

// wildcard  =  .      

let str = "The Cat in the Hat, bat, sat, mat, kitkat"
let reg = /.at/ig
// console.log(str.match(reg))



let run = "Run"
let ruon = "Ruon"
let ron = "Ron"
let ran = "Ran"
let thisRegex = /R[ou]n/

// console.log(run.match(thisRegex))
// console.log(ron.match(thisRegex))
// console.log(ran.match(thisRegex))

let str2 = "The Cat in the Hat likes to sleep on a mat"
let regex3 = /[^c-l]at/ig
// console.log(str2.match(regex3))





let testString = "Hello my name hello is Steve hellO"
let testRegex = /[aeiou]|steve/gi
let reg2 = /l{2}/gi
console.log(testString.match(reg2))

let phoneTest = /[1-9]{3}[1-9]{4}/

let num = 5552345

// console.log(phoneTest.test(num))

let pass = 'PP$$0rd'
let passTest = /[A-Z]{2}[^A-Za-z0-9]{2}[0-9]{1}/gi

// console.log(passTest.test(pass))




// console.log(lorem.match(/lorem/gi).length)
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

// Example usage:
console.log(validatePassword("AB$$1"));   // Expected output: true
console.log(validatePassword("A$1bcdef")); // Expected output: false