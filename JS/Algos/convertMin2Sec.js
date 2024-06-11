// // Convert Minutes into Seconds
// // Write a function that takes an integer minutes and converts it to seconds.

// // Examples
// // convert(5) ➞ 300

// // convert(3) ➞ 180

// // convert(2) ➞ 120

// // Pseudo
// //  step 1 :    Write a function
// //  step 2:     takes an integer minutes
// //  step 3:     converts it to seconds
// //  input:      num of minutes
// //  output:     number of second in a min   (minutes * 60)
// //            

// function convert(minutes) {
//     // console.log(minutes)
//     if (isNaN(minutes)) {

//         return "Not a number Clive"

//     } else {

//         return minutes * 60
//     }

// }

// console.log(convert("test"))


// // console.log("2" === 2)


// Convert Minutes into Seconds
// Write a function that takes an integer minutes and converts it to seconds.

// Examples
// convert(5) ➞ 300
// convert(3) ➞ 180
// convert(2) ➞ 120

// Psuedo Code - human speak for how to solve the problem
// step 1: Write a Function
// step 2: Convert mins into seconds (secs = mins * 60)
// input: mins
// output: secs

function convert(minutes) {

    if (isNaN(minutes)) {

        return "Not a Number Clive!"

    } else {

        return minutes * 60

    }


}
console.log(convert(2024))
