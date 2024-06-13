


// Write a function to determine if you can get into a club, get into the bar, or not..
// step 1: Create Function  :    function isOldEnought()
// step 2: inputing a age   :    (age)
// step 3: age >= 18 - can into the club
//    -    age < 18  -  go home
//    -    age >= 21 -  bar access

function isOldEnough(age) {
    console.log("age", age, "typeof age = ", typeof age, "typeof typeof age = ", typeof typeof age)
    if (typeof age == 'number') {
        return "InValid Number"
    }

    if (age >= 21) {
        return "Bar Access Granted"
    } else if (age >= 18) {
        return "Club Access Granted"
    } else {
        return "Go Home"
    }
}

// console.log(isOldEnough(16)) // "Go Home"
// console.log(isOldEnough(18)) // "Club Access Granted"
// console.log(isOldEnough(21)) // "Bar Access Granted"
// console.log(isOldEnough("23"))  // "InValid Number"


// Write a function to determine how many even numbers are in a array
// Step 1: write a function
// Step 2: need a empty array to hold even vaules
// Step 3: make a loop 
// Step 4: if statement  % 2 == 0 its even
// Step 5: when condition is met, we push even numbers into our new []
// Step 6: return our new arr . length


function howMany(arr) {

    // let evenArr = []
    let count = 0
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 == 0) {
            count++
            // evenArr.push(arr[i])
        }
    }

    // return evenArr.length
    return count

}

// console.log(howMany([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// we need a function to update my student records. 

let students = {
    name: "Andrea",
    grade: "B"
}
let student1 = {
    name: "Chris",
    grade: "B"
}


// console.log("students1", students)

// students['grade'] = "A"
// console.log("students3", students)
// 1. Need a function
// input, 3 of them.... (obj, key, value )
// 
function changeGrade(obj, key, value){

    // console.log("obj=", obj, "key=", key, "value=", value )
    obj[key] = value

}

console.log(changeGrade(student1, "name", "SuperCool"))
console.log(changeGrade(student1, "grade", "HELLO WORLD"))
console.log(changeGrade(students, "grade", "Hacked"))
console.log("student1", student1)
console.log("student2", students)
