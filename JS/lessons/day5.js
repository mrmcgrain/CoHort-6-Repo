
// ==
// ===


// console.log("2" == 2)


// console.log("2" === 2)

// console.log("2" !== 2)

// console.log(3 >= 2)

// Write a function to determine if your child can drive your car.
// can we drive, can we rent
// function isOldEnough(age) {
//     console.log("age", age)
//     if(isNaN(age)){
//         return "Not a valid age"
//     }

//     if (age >= 25 ) {
//         // only turns on if condition is met
//         return "They can rent a car, and they can drive"

//     }

//     else if (age >= 16 ) {
//         return "Yes they can drive, but can't Rent"

//     } else {

//         return "To Young"

//     }
// }
// console.log(isOldEnough("Tom"))

// console.log(!true)






// console.log("2" == 2)
// console.log("2" === 2)
// console.log("2" !== 2)
// console.log(!true)

// console.log(5 >= 4)

// to rent 25
// to drive 16
// permit 15
//  anything less cant drive

// function ableToRentACar(age) {
//     // console.log("isNan?", isNaN(age))
//     if (isNaN(age)) {
//         return "That is not a number"
//     }

//     if (age >= 25) {
//         return "Can rent a car"
//     } else if (age >= 16) {
//         return "old enough to drive"
//     } else if (age === 15) {
//         return "can have permit"
//     } else {
//         return "toooo young to drive at all"
//     }
// }

// console.log(ableToRentACar("tom"))




// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37

// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117

// lessThan100(3, 77) ➞ true

// 1: create a function
// 2: add the nums
// 3: return if sum < 100
// inputs: num1 , num2
// output: boolean

function lessThan100(num1, num2) {
    console.log(num1, num2)

    let sum = num1 + num2
    console.log("sum", sum)
    
    if (sum < 100) {
        return true
    } else {
        return false
    }
}

console.log(lessThan100(40, 8))








// function someName(param1, param2) {
//     console.log(param1, param2)
//     return "something"
// }

// console.log(someName(val1, val2))





