


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

                      let str = ["a", "b", "c", "d", "e"]


console.log("reduce a string", str.reduce((a, b) => a + b))

// reduce function
console.log("reduce", numbers.reduce((a, b) => a + b))


// ES 5 function
const thisIsReduce = function (arr) {
    let total = 0
    
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }

    // for (item of arr) {
    //     total = total + item
    // }


    return total
}
console.log(thisIsReduce(numbers))

// ES 6 function is called a Arrow Function
// const doStuff2 = (arr) => {
//     console.log('arrowFunction', arr)
// }
// console.log(doStuff2(numbers))

// High order Functions 
// .map  array method, that will do the same thing to every item in the array

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(num.map((item) => item * 10))
// below we built our on map function, same as above
function thisIsMap(arr) {

    let result = []

    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 10)
    }

    return result

}

console.log(thisIsMap(num))




// .filter is a for loop with a conditional statement
console.log("Filter", num.filter((item) => item % 2 == 0 && item > 5))

// below we will build our own filter method

// function thisIsFilter(arr) {
const thisIsFilter = (arr) => {
    let result = []

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result

}

// thisIsFilter = "what"