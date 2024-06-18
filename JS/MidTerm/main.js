// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘


// function oddIndices(arr) {
//     let newArr = []
// // console.log(arr)
//     for (let i = 1; i < arr.length; i+=2) {

//         // if (i % 2 !== 0) {

//             newArr.push(arr[i])
//             // console.log('arr[i]',arr[i]) 
//         // }

//     }
//     return newArr
// }

// write a function
// take in a arr
// returns only the values at odd indices


function oddIndices(arr) {

    let odds = []

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 !== 0) {
            // console.log("i", i)

            odds.push(arr[i])
        }
    }
    return odds

}
// console.log(oddIndices([2, 4, 6, 8, 10, 1, 2, 3, 4, 6]))


// need a function
// take in a []
// return AMMOUNT of odd values
// need a counter to track odd values

// function numOddValues(arr){
// let count = 0
// for(let i = 0 ; i < arr.length ; i++){

//     if(arr[i] % 2 !== 0){
//         count++
//     }
// }
//     return count
// }


function numOddValues(arr) {
    let oddValues = []
    for (let i = 0; i < arr.length; i++) {
        // oddValues.push(arr[i])
        if (arr[i] % 2 !== 0) {
            oddValues.push(arr[i])
        }
    }
    return oddValues.length
}

// write function averageStringLength(arr){}
// need to know the length of every string
// need to add all those values
// divide by the number of strings
// return avg length of strings........

function averageStringLength(arr) {
    let total = 0 // holds vaule of each arr[i].len
    if (arr.length === 0) {
        return 0
    }


    for (let i = 0; i < arr.length; i++) {
        // console.log("i", i, "arr[i].len", arr[i].length, "total", total)

        total = total + arr[i].length
        // console.log("New Total", total)
    }
    return total / arr.length
}

// console.log(averageStringLength(["hello", "world", "BOB"]))


function firstPunctuationIndex(str) {


    for (let i = 0; i < str.length; i++) {

        if (str[i] == "!" || str[i] == "." || str[i] == "?") {
            // do stuff
            return i
        }

    }

    return -1

}

function addToObj(obj, key, value) {

    if(typeof key !== "string"){
       return 'Function must be called with a valid key.'
    }




    obj[key] = value


}

// console.log(addToObj(person, "name", "pikachu"))

// let person = {
//     user: 'teacher',
//     birthday: 'January 1st',
//     favoriteColor: 'yellow'
// }

// console.log("pre", obj)
// obj.user = "BOB"
// obj.age = 42
// console.log("post", obj)


console.log(typeof 23)    // "number"
console.log(typeof "23")   //  "string"
console.log(typeof {name: "23"})  //   "object"


























// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
