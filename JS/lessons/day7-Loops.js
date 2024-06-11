// function loopy(arr) {

//     let reversed = []
// console.log("LOOK AR ME", arr.reverse())

//     for (let i = 0; i < arr.length ; i++) {

//         // console.log("i :", i, "arr[i]", arr[i])
//         reversed.unshift(arr[i])

//     }

// console.log("reversed", reversed)
// }
// console.log(loopy([1,2,3,4,5,6]))


//   i = i + 1 
//   i++ 
//   i+=10   i = i + 10
// 

let num = 7
// console.log("og num", num)
num = num + 10
// num++
num += 10
// console.log("num2", num)



function funWithLoops(arr) {
    let revered = []
    for (let i = 0; i < arr.length; i = i + 1) {
        console.log("i:", i, "arr[i]", arr[i])
        revered.unshift(arr[i])
        console.log("building rev", revered)
    }
    // console.log("WE left the loop", grade )
    console.log("revered", revered)
}

console.log(funWithLoops([10, 20, 30, 40, 50, 60]))
// let myArr = [10, 20, 30, 40, 50, 60]
// console.log(myArr.reverse())



















