

// A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.
// bob = bob, racecar = racecar,   dad = dad

// pseudocode
// 1.  write a function that takes in a string  (str)
// 2.  convert string to a array    (.split(""))
// 3.  create a empty array to hold the reversed string
// 4.  create a loop and push into the new array, and normalize our data with .toLowerCase()
// 5.  convert back to a string (.join(""))
// 6.  normalize input
// 7.  str === our new reversed string 

function palindrome(input) {      // input === "bob"    STEP 1:
    let normalizedInput = []
    let reversed = []             //                    STEP: 3

    let split = input.split("")   //  ["b", "o", B"]    STEP: 2
    console.log("split", split)

    for (let i = 0; i < split.length; i++) {         //STEP: 4
        console.log("i", i, "split[i]", split[i])
        normalizedInput.push(split[i].toLowerCase())   // STEP: 6
        reversed.unshift(split[i].toLowerCase())
    }

    // console.log("rev : ", reversed)
    let join = reversed.join("")                    // Step: 5
    console.log("join", join)

    console.log("normInput", normalizedInput.join(""), "join", join)

    if (normalizedInput.join("") === join) {    //Step: 7
        return "yes you are a palindrome"
    } else {
        return "NOOOOOOOOOOOOOOOOOOOOOO"
    }



}

console.log(palindrome("aBcDeFg"))

// BIG FLEX
function palindromeShort(input) {


    if (input.split("").map(item => item.toLowerCase()).join("") === input.split("").map(item => item.toLowerCase()).reverse().join("")) {
        return true
    } else {
        return false
    }

}


console.log(palindromeShort("Bob"))