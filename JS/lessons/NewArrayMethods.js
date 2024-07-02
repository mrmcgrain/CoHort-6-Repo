

let arr = ["a", "b", "c", "d", "e", "a"]

// console.log(".at()", arr.at(-5))
// console.log("indexOf()", arr.indexOf("j")) // -1 as it is not in the arr
// console.log("indexOf()", arr.indexOf("c")) //  2

// arr.indexOf("item", starting at what index)
// console.log("indexOf('a')", arr.indexOf("a", 1)) //  0

// console.log("lastIndexOf('a')", arr.lastIndexOf("a")) //  5
// const foundElement = array.find(callbackFunction(element, index, array), thisArg);
// console.log(arr.find((item) => item == "a"))

// console.log(".find()", arr.find("a"))
// console.log(".charAt()", arr.(1))


let arr2 = ["a", "b", "c", "d", "e", "a"]

const findItem = (arr, item) => {

    if (arr.indexOf(item) == -1) {
        return "Item not found"
    } else {
        return item
    }
}
// console.log(findItem(arr2, "j"))
// .includes("item")
// console.log(".includes('zod')", arr2.includes('a'))


let testArr = [1, 2, 3, 4, 5, 6]
// console.log(testArr.copyWithin(2, 1, 3))
// console.log("testArr", testArr)
// testArr.splice(3, 0, "BOB", "JAMES")
// console.log("testArr - splice(1,2)", testArr)

let sort = [2, [[4, [5, [2], 15], 9], 0], 6]
// console.log(sort.sort((a, b) => a - b))
// console.log("sort", sort.flat(Infinity))



////////////  AFTERNOON  //////////


// let str = "abEc$%#0"
// let newStr = ""
// let regex = /[a-z]/gi


// for(let i = 0 ; i < str.length; i++){

//     console.log(str.match(regex))

//     if(str[i].match(regex)){
//         newStr += str[i]
//     }
// return newStr
// }


let arr3 = ["a", "b", "c", "d", "e", "f", "g", "h"]

// console.log(".includes()", arr3.includes("f"))
// console.log(arr3.lastIndexOf("f"))


let newArr = [...arr3]
// console.log("newArr", newArr)


arr3.copyWithin(3, 1)
// console.log("arr3.copyWithin", arr3)

// newArr.splice(3, 0, "BOB", "JOHN")
// console.log("newArr", newArr)





// console.log(arr3.find((item, i) => console.log("i", i, "item", item)))

// let found = arr3.find((item) => item == "b")
// console.log("found", found)
// console.log(arr3[4])
// console.log(arr3.length -1)

// console.log(arr3[arr3.length -1])

// console.log(".at(-1)", arr3.at(-1))
// console.log("arr3[2]", arr3[2])


//.sort()

let nums = [4, 2, 6, 0.3, 7, 12, 18]
let alpha = ["C", "b", "a", "c","A", "B"]
console.log(nums.sort((a , b) => a - b))
console.log(nums)
// console.log(alpha.sort())