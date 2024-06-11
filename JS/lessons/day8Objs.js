// objs, immutability, prototypes, 


// let ok = 23
// let str = " Hello 'ppl' how "
// let test = `anyother to make a string ${str}`

// ""
// ''
// ``

// p {
//     border: solid red 2px;

// }




// console.log(test)


// let car = [
//     {
//         //  key : value
//         makeMyDay: "ford",
//         model: "edge",
//         color: "black",
//         year: 2008,
//         milage: 100000,
//         friends: [
//             "shawn", "andrew", "pat", "John", "Auren"
//         ],
//         isOnline: false
//     },
//     {
//         //  key : value
//         makeMyDay: "ford",
//         model: "edge",
//         color: "black",
//     },
//     {
//         //  key : value
//         makeMyDay: "ford",
//         model: "edge",
//         color: "black",
//     }
// ]


// let user = {
//     username: "Mike",
//     isOnline: false,
//     friends: [],
//     age: 46,
//     location: {
//         state: "az",
//         city: "tempe"
//     }
// }

// console.log(Object.entries(user))

// car[0].isOnline = true

// console.log(car[0])


// car.friends.push("Michael")

// console.log(car.friends)

// console.log(String.prototype.)

// let myStr = "Jesse"
// p {
//  border: 2px solid red 
// }


// //////////////////   Afternoon  


// let userInfo = {
//     'username': "mmcgrain",
//     'first Name': "Michael",
//     lastName: "McGrain",
//     birthday: 3011979,
//     friends: ["phil", "zemar", "Lena", "tabitha", "Andrea"],
//     posts: [
//         { id: 232322, post: "Hello world" },
//         { id: 23232, post: "Fun with Obj's" }
//     ],
//     location: {
//         state: "az",
//         city: "tempe"
//     },
//     isOnline: false,
//     prototype: () => {
//         console.log("hello")
//     }
// }


// console.log(Object.keys(userInfo))    
//converts to [] of the keys

// console.log(Object.entries(userInfo)) 
//converts to multideminsional [] of the keys and values

// console.log(Object.values(userInfo)) 
//converts to [] of the values



// console.log(userInfo.isOnline)

// userInfo.isOnline = true
// re assigns a value

// console.log(userInfo.friends)

// userInfo.friends.push("Michael")

// console.log(userInfo.friends)

// userInfo.banned = false

// console.log(userInfo)


// let myStr1 = "Hello"

// console.log(String.prototype)
// console.log("HELLO")

// let test = 23

// console.log("hello" + "world" + test)

// console.log(`hello world ${test}`)

// let str = "hello"
// str[0] = "H"
// console.log(str)



// Lets reverse a string
// step 1: make a function
// take in a string
// convert to []
// going to need a varible to hold data
// need a loop
// make it a string again 

function reverseString(input) {
    // console.log(input)

    // let split = input.split("")
    // // console.log("split", split)

    // let result = []

    // for (let i = 0; i < split.length; i++) {

    //     result.unshift(split[i])

    //     // console.log("i", i, "spilt[i]", split[i], "result", result)
    // }
    return input.split("").reverse().join("")
}



console.log(reverseString("abcdefghijklmnopqrstuvwxyz"))






