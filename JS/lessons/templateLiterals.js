


// let str = "Hello"
// let myName = "Jesse"


// const myStuff = () => {

//     // return str + " " + myName

//     return `${str} ${myName}`
// }

// console.log(myStuff())


// const user = 'Chris';
// const amount = 2;
// const message = `Hello, ${user}! You have ${amount * 2} new messages.`;
// console.log(message);

function test() {
    return "test function "
}

function secondTest(CB) {

    return `secondFunc  ${CB}`
}
// console.log(secondTest(test()))

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(myArr.map((item) => item * 10))

function myMap(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        console.log(`i: ${i} arr[i]:  ${arr[i]}`)
        newArr.push(arr[i] * 10)
    }
    return newArr
}
// console.log(myMap(myArr))

console.log("filter", myArr.filter((item) => item % 2 != 0))

const myFilter = (arr) => {

    let newArr = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 != 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log("homemade filter", myFilter(myArr))

// Reduce
console.log("myArr", myArr)

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// 
console.log("Reduce", myArr.reduce((a, b) => a + b))

const homeMadeReduce = (arr) => {

    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        // sum += arr[i]
        sum = sum + arr[i]
        console.log(`i: ${i} arr[i] ${arr[i]} sum: ${sum}`)
    }
    return sum
}
console.log(homeMadeReduce(myArr))