// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// make a function       :   function points
// input twos and threes :   (twos, threes)       :  function points(twos, threes){}
// make a variable to hold total two points       :  let twoPoints = twos * 2
// make a variable to hold total three points     :  let threePoints = threes * 3
// add thePoints and threePoints                  :  let total = twoPoints + threePoints
// output:  return total

function points(twos , threes) {

    let twoPoints = twos * 2;
    console.log("2s", twoPoints)

    let threePoints = threes * 3;
    console.log("3s", threePoints)

    let totalPoints = twoPoints + threePoints;
    console.log("total", totalPoints)

    return totalPoints

//    return (twos * 2) + (threes *  3)

}



// Examples
// console.log(points(1, 1))// ➞ 5)
// console.log(points(7, 5)) //➞ 29
// console.log(points(38, 8)) //➞ 100


// Convert years to days: 

// Puesdo Code : human steps to make eggs
// Step1  : write a function that take in a year and converts to days
    // a) write a function    function convertYearToDay
    // b) input a number      (year)
    // c) convert (year) to day  :  year * 365
    // d) return the days  :        return year * 365


   function covertYearToDays(year) {
    let days = 365 * year;
    // console.log("days" , days)
    return days
   } 


//    console.log(covertYearToDays(20))
let pokemon = covertYearToDays(38)
// console.log(pokemon)



// Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

// Examples
// points(1, 1) ➞ 5

// points(7, 5) ➞ 29

// points(38, 8) ➞ 100

const answers = [
    "It Appears Certain",
    "It Is Deciedly So",
    "Most Likely",
    "Ask Again Later",
    "Cannot Predict This Now",
    "My Outlook Says, Not So Good",
    "Very Doubtful",
    "Reply Hazy, ask again later"
]

// console.log(Math.floor(14.9))
for ( let i = 0 ; i < 100 ; i++){

    console.log("i:", i, "die", Math.ceil(Math.random() * 6))
    console.log("i:", i, "die", Math.ceil(Math.random() * 6))
    console.log("i:", i, "die", Math.ceil(Math.random() * 6))
    console.log("i:", i, "die", Math.ceil(Math.random() * 6))
    console.log("i:", i, "die", Math.ceil(Math.random() * 6))
    console.log("i:", i, "die", Math.ceil(Math.random() * 6))
    console.log("i:", i, "die", Math.ceil(Math.random() * 6))

    }

const magicEight = str => {
    // console.log(answers[0]`)
    let rand = answers[Math.floor(Math.random() * answers.length)]
    return `You have asked Zohan the Great '${str}'

                     and I reply upon to you my wisdom
                                                             ${rand}`
    // console.log(answer)


}
// for(let i=0; i<20;i++)
// console.log(magicEight("Does a kitty go Mew Mew?????"))