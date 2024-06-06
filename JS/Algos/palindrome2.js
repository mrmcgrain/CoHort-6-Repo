

// pseudocode
// 1.  write a function that takes in a string  (str)
// 2.  convert string to a array    (.split(""))
// 3.  create a empty array to hold the reversed string
// 4.  create a loop and push into the new array, and normalize our data with .toLowerCase()
// 5.  convert back to a string (.join(""))
// 6.  normalize input
// 7.  str === our new reversed string 

function palindrome(input) {
    console.log(input)
    let lowerCase = input.toLowerCase()
    console.log("lowerCase", lowerCase)

    let split = lowerCase.split("")
    console.log("split", split)

    let reversed = []

    for (let i = 0; i < split.length; i++) {
        console.log(split[i])

        reversed.unshift(split[i])
    }
    console.log("rev", reversed)
    
    let join = reversed.join("")
    console.log("join", join)

     if(join === lowerCase){
        return true
     }else {
         return false
     }
}

// console.log(palindrome("RaceCar"))

function round2(input){


return input.toLowerCase().split("").reverse().join("") === input.toLowerCase()


}

// console.log(round2("raceCar"))



let arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(arr.map((item) => {

return (
<div>



    
</div>

)



}))

let test = []
for (let i = 0 ; i < arr.length ; i++){
     test.push(arr[i] * 2)
}



