

// let pokemon = "hello world"
// // pokemon[0] = pokemon[0].toUpperCase()
// // console.log(pokemon[0].toUpperCase())
// // console.log("up", pokemon.toUpperCase())
// // console.log("poke", pokemon)
// let split = pokemon.split(" ") 
// //["a", "b", "c", "d"]
// console.log(split)

// // split[0] = split[0].toUpperCase()
// //  // ["A", "b", "c", "d"]
// // console.log(split)

// let join = split.join("POKEMON")
// // // "Abcdefghi"
// console.log(join)


// let num = 123456789123456789123456789
// console.log(num)



// UNBOSS#
// Undefined
// Null
// Boolean
// Object
// String
// Symbol
// Number
// BigInt


// 3 ways to make variables
// const
// var
// let

// const test = "test"
// console.log(test)
// test  = "whoops"
// console.log(test)


// function add(num1, num2){


// return  num1 + num2

// }

// // console.log(add(200, 44994449))

// let myArr = ["string", 23, {}, true, [23, 23 , []], add()]

// console.log(myArr)

// console.log(isNaN("test"))
// let st = "234567"

// console.log(st)
// console.log(parseInt(st))
// console.log(Number("2323"))

// JSON - JS Object Notation
// let jsn = [ {}, {}, {}, {} ]
//   "[{}, {}]"

// <p style="border: 2px solid black">
// <link rel="stylesheet" href="./styles.css">


// class   .className
// id      #idName
// .p {

// }
// let num1
// let num2
// let num3

function mult(num1, num2, num3) {

    return num1 * num2 * num3

}

// console.log(mult(2, 4, 8))







// if (somecondtion){
//     // only
// }

// console.log(poke)



//  ==    "2"  == 2  only compares vaule

//  ===   strict     datatype and vaule



// function sub(num1, num2) {

//     // let result = num1 - num2
//     return num1 - num2

// }

// console.log(sub(10, 5))
function adder(a, b) {
    return a + b
}

// function increase(a + b) {

//     return a + b;
// }

// // adder(4, 5);
// increase(4, 5);

// function multi(x, y) {
//     return x * y;
// } 

// multi(6, 7);

// Need a function
// input: number   (num)
// return ["string vals"]
// conditional statement 
// if i is divisible by 3 and 5    "FizzBuzz"
// if i is divisible by 3           "Fizz"
// if i is divisible by 5.          "Buzz"
// for loop
// need a empty []     let result = []
// .push()

function fizz(num) {
    let result = []

    for (let i = 1; i <= num; i++) {

        // if(i % 3 == 0 && i % 5 == 0){
        if (i % 3 == 0 && i % 5 == 0) {
            result.push("FizzBuzz", i)

        } else if (i % 3 == 0) {
            result.push("Fizz", i)

        } else if (i % 5 == 0) {
            result.push("Buzz", i)

        } else {
            result.push(i.toString())
        }
    }


    return result

}

// console.log(fizz(50))

function getAverage(scores) {
    let total = 0

    for (let i = 0; i < scores.length; i++) {
        console.log("i:", i, scores[i])
    }

}

// console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
// console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));






// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.


// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


// Constraints:

// 1 <= n <= 104

function getAverage(scores) {
    let sum = 0;

    for (const score of scores) {
        sum += score;
    }

    return sum / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {

let avg = getAverage(totalScores)
let grade = getGrade(studentScore)

return "Class Avg " + avg + " " + "Stud Grad " + grade

// return "Class avg" + " " + getAvere(totalScores) ag+ " " + "Student Grade" + " "  + getGrade(studentScore)

}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));