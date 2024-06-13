// 


// Fun with MAP, Map is a high order function
// .map returns a array
// it will do the same thing to every "item" in the area and give you a new array

//  Lets make a function to double every value in a array



// function double(arr) {  //  let arr = [2, 3, 4, 5, 6, 7, 8]
//     let newArr = []  //  this is to hold the new values (doubled)

//     for (let i = 0; i < arr.length; i++) {
//         // newArr.push(arr[i] * 2)
//         console.log("i", i, "arr[i]", arr[i])
//         newArr.push(arr[i] * 2)
//     }
//     console.log("this is the map", arr.map((item) => item * 2))

//     return newArr

// }

// console.log(double([2, 3, 4, 5, 6, 7, 8]))

function pokemon(name1, name2, name3) {

    // console.log("name1:", name1, "name2:", name2, "name3:", name3)

    return name1 + " " + name2 + " " + name3

}

// console.log(pokemon("Shawn", "Chris", "Auren"))


// Long stroke .filter()  it is a for loop with a condition 

// function filterOdds(arr) {
//     let newArr = []  // empyt [] to hold odd values
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 !== 0) {
//             // console.log("Im ODD", "i = ", i, arr[i])
//             newArr.push(arr[i])
//         }
//     }

// console.log("Filter Method", arr.filter((item) => item % 2 !== 0) )

//     return newArr





// }

// console.log(filterOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))






/////////////////////   AFTERNOON CLASS  //////////////////////////



// Fun with MAP, Map is a high order function
// .map returns a array
// it will do the same thing to every "item" in the area and give you a new array

//  Lets make a function to double every value in a array

function doubleVal(arr) {
    let newArr = []

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
        // console.log('arr[i]', arr[i])
    }

    console.log("THIS IS MAP", arr.map((item) => item * 2))
    return newArr

}

// console.log(doubleVal([1,2,3,4,5,6,7,8,9]))

// create a function to filter out and return ODD number

function returnOdds(arr) {
    let odds = []
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 2 !== 0) {
            console.log("IM and odd BALL", i, arr[i])
            odds.push(arr[i])
        }
    }
    console.log("Filter BABY", arr.filter((item) => item % 2 !== 0).map((item) => item * 2).filter((item) => item % 10 === 0))
    return odds
}
console.log(returnOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]))
















// Basic 0 - 150

// for (initialization ; condition ; inc/dec){
// do stuff
// }









function basic() {

    for (let i = 0; i <= 150; i++) {
        console.log(i)
    }

}
// console.log(basic())


// Even only 0 - 256 


function even() {

    // for ( let i = 0 ; i <=256 ; i = i + 2 ){
    //     console.log(i)
    // }

    //   console.log("Modulus", 11 % 2 != 0)
    for (let i = 0; i <= 256; i++) {

        if (i % 2 === 0) {

            console.log(i)
        }
    }

}
// console.log(even())





// Odd Only 0 - 256

function odd() {

    // for (let i = 1 ; i <=256 ; i+=2) {
    //     console.log(i)
    // }

    // for (let i = 0; i <= 256; i++) {

    //     if (i % 2 !== 0) {

    //         console.log(i)
    //     }
    // }

    // console.log(2 !== 2)

}
// console.log(odd())








// Multiples of 5   0 - 256

function multiple() {

    //    for(let i = 0 ; i <= 256 ; i+=5){

    //         console.log(i)
    //    }

    for (let i = 0; i <= 256; i++) {

        if (i % 5 == 0) {
            console.log(i)
        }
    }
}


// console.log(multiple())




// perserve now counting   0  - 256
//         mult 5 print "Persevere"    
//         mult 5 && 10 print "Persevere Now"
//             else print value / #


function counting() {

    // for(let i = 0 ; i <=256 ; i++){

    //     if(i % 10 === 0 ){
    //         console.log("Persevere Now", i)
    //     }else if(i % 5 == 0 ){
    //         console.log("Persevere", i)
    //     }else {
    //         console.log(i, "else")
    //     }

    // }

    // console.log(9 % 2 == 0 )


}

// console.log(counting())


// Big sum - Return summ of every # from 0 - 50,000

function bigSum() {
    let count = 0

    for (let i = 0; i <= 50; i++) {
        console.log("Count = ", count, "Adding i", i, "count=count+i", count + i)
        count = count + i
    }

    return count


}
// console.log(bigSum())



// Countdown by 4's (startnum, endNum) countdown from start by 4 at a time until reach endNum,
//  print all value as countdown

function countdown(startNum, endNum) {

    // for( let i = 400;      i >= 2 ;     i -= 4)

    for (let i = startNum; i >= endNum; i = i - 4) {
        console.log(i)
    }

}

// console.log(countdown(400555, 23))


// function whileLoop() {

//     var arr = [];
//     var i = 0;
//     do {
//         arr.push(i); // The do will run at least once even if the
//         // condition is not met.
//         i++;
//     } while (i < 5) {
//         arr.push(i)
//         console.log(i, "still in while loop", arr)
//     }


// }

// console.log(whileLoop())






// Flexible counter (startNum, endNum, mult)
//         count up  to value of mult, print each value until reach / surpass endNum
//         ie totalValue(6, 1500, 8)

// function totalValue(startNum, endNum, mult) {


// }

// console.log(totalValue(6, 1500, 80))


// function avgGrade(arr) {
//     console.log("arr", arr)
//     // to find the avg , add all grade and divide by num of grades
//     let total = 0

//     for (let i = 0; i < arr.length; i++) {
//         // console.log("i=", i, "arr[i]", arr[i])
//         total = total + arr[i]
//         console.log("i", i, "arr[i]", arr[i], "total", total)
//     }


//     return total / arr.length


// }


// console.log(avgGrade([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))




// function addSum(num1, num2){

// return num1 + num2

// }

// console.log(addSum(20333, 433330))


// reverse a string or array
// ["hello", "world", "how", "are", "you" ]

// need a function
// need a loop
// need a empyt array to hold the new reversed array
//  unshift og  [ ] in loop into new [ ]

function reverseArray(arr) {
    console.log("arr", arr.length)

    let reversed = []

    // for (let i = arr.length -1 ; i >= 0; i--) {
    //     console.log("i:", i, "arr[i]", arr[i])
    //     reversed.push(arr[i])
    // }
    for (let i = 0; i < arr.length; i++) {
        console.log("i:", i, "arr[i]", arr[i])
        reversed.unshift(arr[i])
    }

    // console.log("rev", reversed)
}

// console.log(reverseArray(["hello", "world", "how", "are", "you"]))

