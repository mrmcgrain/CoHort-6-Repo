
let styles = {
    border: "solid 2px",
    width: "100px",
    backgroundColor: "red"
}


let Student = {
    name: "Pat",
    age: 24,
    location: {
        state: "TN",
        city: "Memphis",
        zipCode: "83737"
    },
    myMethod: function test() {
      return  "test"

    },
    phoneNumber: "931-555-5555"
}
// console.log("og record", Student)
console.log(Student.myMethod())
// dot notation       ie:    student.name
// Bracket notation   ie:    student['name']

Student.name = "Bob"

// console.log(Student)

// console.log("Keys", Object.keys(Student))
// console.log("Values", Object.values(Student))
// console.log("Entries", Object.entries(Student))
// let entries = Object.entries(Student)

// console.log("entries", entries[0][1][1])


// let arr =
//     [
//         "hello",
//         "world",
//         ["second", 2],
//         ["yes"]
//     ]

// console.log("arr", arr[2])


// function logMe() {

//     console.log("message")
// }

// console.log(logMe())







