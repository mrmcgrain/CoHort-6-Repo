

// reverse a String
// strings are immutable
// make function
// take in a string
// convert str to []
// make loop
// make a empty [] to hold the new values
// convert that back to a string

function reverseString(input) {
    // console.log(input)
    let result = []

    let split = input.split("")
    // console.log("spilt", split)
    for (let i = 0; i < split.length; i++) {
        // console.log("i:", i, "split[i]", split[i])
                result.unshift(split[i])
        // console.log("result", result, "split[i]", split[i])
    }

// console.log("result", result.join(""))
return result.join("")

}

console.log(reverseString("abcdefghijklmnopqrstuvwxyz"))