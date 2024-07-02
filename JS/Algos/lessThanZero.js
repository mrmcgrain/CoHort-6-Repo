// Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// Examples
// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true

// step one:  create a function
// step  two: return true if less or = 0
// input:  number
// output: boolean

function lessThanZero(num){

    if(num <= 0){

        return true

    } else {
        
        return false
    }


}
console.log(lessThanZero(-.2))