// Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.
// Examples
// lessThan100(22, 15) ➞ true
// // 22 + 15 = 37
// lessThan100(83, 34) ➞ false
// // 83 + 34 = 117
// lessThan100(3, 77) ➞ true

// //////////////////////////
// step 1: write a function
// step 2: take in 2 nums (parameters)
// step 3: Add those numbers
// step 4: return true if SUM is less than 100



// function giveMeAName(param1, param2){
//     // do some stuff

//     return "something"
// }

// console.log(giveMeAName(argument1, argument2))

function isGreater(num1, num2) {

    let sum = num1 + num2
    
    console.log("num1", num1, "num2", num2, "sum: ", sum)

    if (sum > 100) {
        return true
    } else {
        return false
    }

}

console.log(isGreater(10, 80))
console.log(isGreater(10, 91))




