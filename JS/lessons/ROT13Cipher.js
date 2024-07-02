// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


// const rot13 = function rot13() {
// }

const rot13 = (str) => {
    console.log("str", str)
    let uppercase = str.toUpperCase()

    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let code  = "NOPQRSTUVWXYZABCDEFGHIJKLM"
    let cipher = ""

    for ( let i = 0 ; i < str.length ; i++){

        if(uppercase[i] == " "){
            cipher += " "
            // cipher = cipher + " "
        } else {
            // console.log("indexOf", str[i], alpha.indexOf(str[i]), i, code.charAt(alpha.indexOf(str[i])))
            cipher += code.charAt(alpha.indexOf(uppercase[i]))
        }
    }

return cipher

}

// console.log(rot13("This is so much fun, I hate Michael "))





// Return true if the given string is a palindrome. Otherwise, return false.
    
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

const palindrome = (str) => {
// console.log("str", str)
let normal = str.toLowerCase()
// console.log("lower", normal)
let regex = /[a-z0-9]/g
let result = normal.match(regex)
// console.log("result", result.join(""))
let compare = result.join("")

let rev = result.reverse()

return rev.join("") == compare

// return str.toLowerCase().match(/[a-z0-9]/).reverse().join("") == str.toLowerCase().match(/[a-z0-9]/).join("")

}
// console.log(palindrome("eye"))// should return a boolean.
// console.log(palindrome("eye"))// should return true.
// console.log(palindrome("_Eye"))// should return true.
// console.log(palindrome("race car"))// should return true.
console.log(palindrome("not a palindrome"))// should return false.
console.log(palindrome("A man, a plan, a canal. Panama"))// should return true.
// console.log(palindrome("never odd or even"))// should return true.
// console.log(palindrome("nope"))// should return false.
// console.log(palindrome("almostomla"))// should return false.
// console.log(palindrome("My age is 0, 0 si ega ym."))// should return true.
// console.log(palindrome("1 eye for of 1 eye."))// should return false.
// console.log(palindrome("0_0 (: /-\ :) 0-0"))// should return true.
// console.log(palindrome("five|\_/|four"))// should return false.




// const rot13 = (str) => {

// //    function rot13(str) {

//     let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
//     let code =  "NOPQRSTUVWXYZABCDEFGHIJKLM"
//     let decoded = ""

//     // console.log("charAt", alpha.charAt(0))
//     // console.log("indexOf", alpha.indexOf('A'))

//     for (let i = 0; i < str.length; i++) {
//          console.log(`i: ${i} str[i] ${str[i]}`)
//         if (str[i] == " ") {
//             decoded += " "

//         } else {
//             decoded += code.charAt(alpha.indexOf(str[i]))
//         }
//     }
//     return decoded
// }














// console.log(rot13("SERR PBQR PNZC")) //should decode to the string             FREE CODE CAMP
// console.log(rot13("SERR CVMMN!"))//should decode to the string FREE PIZZA!
// console.log(rot13("SERR YBIR?")) //should decode to the string FREE LOVE?
// console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."))// should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.