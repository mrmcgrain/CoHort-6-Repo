
// let myArr = ["hello", "everyone", "JS", "is", "cool"]
// console.log("Pokemon", myArr)

// console.log(myArr[1])       //  "everyone"
// console.log(myArr[1][4])   //   "y"



let arr = [
    ["hello"],                         //0
    ["world"],                         //1
    ["this", "is", "an",
        ["pokemon"]
    ]   //2
]

// console.log("arr", arr)
// console.log("arr", arr[2][3][0][1])
// console.log("arr[2]", arr[2][0][2])
// console.log("arr[2][2]", arr[2][2])

// let myStr = "Hello World this is neat"
// console.log(myStr)

// let split = myStr.split("")

// console.log("split", split)

// let pop = split.pop()
// console.log("pop", pop)



// let join = split.join("")
// console.log("join", join)



// console.log(arr.join(""))

// let area

function findArea(len, width) {
    // console.log("len:", len, "width:", width)

    let area = len * width

    // console.log("area", area)
    
    return area
}

let result = findArea(200, 100)
console.log("result", result)

// function addToArea(area, addStuff) {

//     console.log(area, addStuff)

//     return area + addStuff

// }

// console.log(addToArea(findArea(200, 100), 400))



// function giveMeAName(paramater1, pokemon){



//     return "SOMETHING HERE"
// }

// console.log(giveMeAName(["THIS IS MY DATA"], "Bob"))

// let callMeSomething = []

// function addTwoValues(num1, num2, num3){
// console.log(num1, num2, num3)

// let result = num1 + num2 + num3

// return result 

// }



// console.log(addTwoValues(200, 10, 100))


// Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// Examples
// getFirstValue([1, 2, 3]) ➞ 1

// getFirstValue([80, 5, 100]) ➞ 80

// getFirstValue([-500, 0, 50]) ➞ -500
// Notes
// The first element in an array always has an index of 0.

function getFirst(pokemon){

console.log(pokemon)
return pokemon[0]

}


console.log(getFirst(["test",4,6,8]))