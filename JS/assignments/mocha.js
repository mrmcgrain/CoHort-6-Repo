

// const assert = require('assert')

// // make a function to just add to numbers
// function test(a){
//     if(a > 3 && a < 5){
//         return true
//     } else {
//         return false
//     }
// }

// console.log(test(40))

// function addSum(a, b) {
//    if(isNaN(a) === true || isNaN(b) === true){
//     return "not a number"
//    }
//     return a + b
// }
// describe('addSum', () => {
//     it('should return the sum of two positive numbers', () => {

//     })
//     it('should return the sum of two negative numbers', () => {
//         assert.strictEqual(addSum(-2, -3), -5);
//     });

//     it('should return the sum of zero and a number', () => {
//         assert.strictEqual(addSum(0, 5), 5);
//     });

//     it('should return the sum of a number and zero', () => {
//         assert.strictEqual(addSum(5, 0), 5);
//     });
// });


// describe('addSum', () => {
//     it("Should return 5", () => {
//         assert.strictEqual(addSum(2, 3), 5)
//     })
//     it("is not a number", () => {
//         assert.strictEqual(addSum("hello", 3), "not a number")   
//     })
// })

// [ a, b, c, d, e, f]

// let student = {
//     first: "Michael",
//     last: "McGrain"
// }
// console.log(Object.entries(student))



// let arr = ["1", "2", "3", "4", "5"]
// console.log(arr)

// // let map = arr.map((item, i) => parseInt(item))
// let map = arr.filter((poke) => poke % 2 === 0).map((item, i) => parseInt(item))

// console.log(map)

// let result = []

// for ( let i = 0 ; i < arr.length ; i ++){

//     result.push(parseInt(arr[i]))

// }
// console.log("result", result)
// console.log(arr[0][1])   //  [a, b]
// console.log("arr.len", arr.length)

// for (let i = 0; i < arr.length; i++) {
// console.log("i", i, arr[i])
// console.log("arr[i]", i, arr[i])

// for (let j = 0; j < 10; j++) {

//     for ( let k = i ; k < 10 ; k++){

//         console.log("i", i, "j", j, "k", k)
//     }

// }

// }

// const assert = require('assert');

// describe('multiply', () => {
//   it(`multiplies x by the given parameter`, () => {
//     multiply(15);
//     multiply(3);
//     assert.strictEqual(x, 135, 'x should be 45');
//   });
// });

// Write a function to sum 2 nums 
// describe('addSum', () => {  // calls the function
//     it("the numbers should add", () => { // log info to terminal
//         assert.strictEqual(addSum(2, 3), 5)
//     })
//     it("if not a number with return Nan", () => {
//         assert.strictEqual(addSum("hello", 3), "not a number")
//     })
// })

// function addSum(a, b) {
//     // console.log(isNaN(a))
//     // console.log(a, b)
//     if (typeof a != Number || typeof b != Number) {
        
//         return "not a number"
    
//     } else {

//         return a + b
   
//     }

// }
// console.log(typeof 23)
// console.log([1, 2, 3] + [4, 5, 6])


// console.log(addSum([3], 3))
// console.log(isNaN("two")) //true
// console.log(isNaN("2"))   //false   
// console.log(isNaN(2))     //false
// console.log(isNaN([2]))   //false
// console.log(isNaN({number: 2})) //true


let arr = ["1", "2", "3", "4"] 

console.log("arr", arr)

let result = []
for ( let i = 0 ; i < arr.length ; i++){
    
           result.push(parseInt(arr[i]))

}
console.log("res", result)




let map = arr.filter((item) => item % 2 === 0).map((item, i) => parseInt(item) )
console.log("map", map)

console.log(isNaN([2]))