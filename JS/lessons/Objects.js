



// Fun with Objects

let student = {
    name: 'Jonathan',
    age: 34,
    grade: "A",
    location: "TN",
    pokemon: {
        name: 'pikachu',
        type: "electicty",
        color: {
            stuff: "is neat"
        }
    }
}

student.pokemon.color.random = "HELLO"
// console.log(student['pokemon']['color'])

// const updateRecord1 = function updateRecord()
const updateRecord = (obj, key, value) => {

    obj[key] = value

}

// console.log(updateRecord(student, 'grade', "Z"))

// console.log("new student", student)

//  let objName = {
//    key: value   
// }
// console.log(student)
// console.log(student.name)
// console.log("og grade", student.grade)
student.grade = "B"
// console.log("new grade", student.grade)
// console.log(student)

student.attendance = "GOOD"

// console.log(student)

student.food = "Pizza"

// console.log(student)

delete student.food

// console.log(student)







/////////////////////  AFTERNOON ///////////////




let myObj = {
    key: 'value'
}

// #myId {
// border: 'solid red 2px', 
// 
// }

let car = {
    make: 'ford',
    model: 'edge',
    year: 2008,
    color: 'black',
    radio: function (a, b) {
        return a + b
    },
    seats: 4,
    prevOwners: {
        owner1: {
            name: "BOB",
            age: 19
        },
        owner2: {
            name: "Chris"
        }
    },
    doesRun: true,
    'two words': true
}

console.log("car.model =", car.model)
console.log(car.prevOwners.owner1.name)
// console.log(car.radio(100, 200))

console.log("car", car)
car.model = "Explorer"
console.log("car", car)

// this is how you delete a key : 'value' pair
delete car.radio


console.log("car", car)

const updateObj = (obj, key, value) => {

    obj[key] = value


}

console.log(updateObj(car, 'year', 2020))


console.log(car['two words'])

console.log(car.model)

// Object.entries converts object to a multideminsional array
console.log(Object.entries(car))

// Object.keys() converts the keys to an array
console.log(Object.keys(car))

// Object.values() converts the keys to an array
console.log(Object.values(car))


























