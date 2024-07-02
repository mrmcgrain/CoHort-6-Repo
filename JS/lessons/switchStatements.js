

// Fun with switch statements

// switch (expression) {
//     case value1:
//         // Code to execute if expression === value1
//         break;
//     case value2:
//         // Code to execute if expression === value2
//         break;
//     // More cases...
// }

let student = "auren"
student = "Mike"

//  ==   "2"  ==  2   : true  only looks at the value
//  ===  "2"  ==  2   : False , verify data type and the value


// Lets say we want a function to tell us the day of the week

function isDay(day) {

    if (day == "monday") {
        return "it's monday"

    } else if (day == " tuesday") {
        return "it's tuesday"

    } else if (day == "wednesday") {
        return "it's wednesday"

    } else if (day == "thursday") {
        return "it's thursday"

    } else if (day == " friday") {
        return "it's friday"

    } else if (day == "saturday") {
        return "it's saturday"

    } else if (day == "sunday") {
        return "it's sunday"

    }
    // continue this madness for everyday
}

// console.log(isDay("monday"))

// switch statement, we can consolidate our conditions alot...

function isDay2(day) {

    switch (day) {

        case "monday":   //  if ( day === "monday")
            console.log("IT's monday!!!   :( ")
            break;
        case "monday":
            console.log("tuesday")
            break;
        case "wednesday":
            return "wednesday"
            break;
        case "thursday":
            return "thursday"
            break;
        case "friday":
            return "friday"
            break;
        case "saturday":
            return "saturday"
            break;
        case "sunday":
            return "sunday"
            break;

    }


}

console.log(isDay2("monday"))

// for (let i = 0; i < 100; i++) {
//     console.log(i)
//     break  //  it will exit the loop
//     console.log("this should not work")
// }


// make a function to count cards in Black Jack
//  2, 3, 4, 5, 6, increse our count + 1
//  10, A, Q, K, J  dec our count  - 1
// need a variable to hold our count
// need a conditional statement to do the thing to the count

let count = 0

function cc(card) {

    // if( card == 2 || card == 3 || card == 4, card == 5, card == 6){
    //     count++
    // }
    switch (card) {

        case 2:   // if ( card == 2)
        case 3:   //  if ( card == 3)
        case 4:   //  if ( card == 4)
        case 5:   //  if ( card == 5)
        case 6:   // if ( card == 6)
            count++
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count --
            break
    }

    if ( count > 0){
        return count + " Bet!"
    }else {
     7   return count + " Hold!!!!!!!!!!!!!"
    }

    console.log(card, "count", count)


}




console.log(cc(2))
console.log(cc(3))
console.log(cc("A"))
console.log(cc("K"))
console.log(cc("K"))
// console.log("count", count)



// Create a function to return all odd numbers from a array

// 1: create a function       -    function findOdds()
// 2: it will take in a array -    function findOdds(arr)
//      create empty arr      -    let odds  = []
// 3: need loop over array    -    for(let i = 0 ; i < arr.length; i++)    
// 4: isolate odd number      -    if (arr[i] % 2 !== 0)  {
// 5: store those in a empty arr      odds.push(arr[i])    }
// 6: return that array       -    return odds


// Convert Hours into Seconds
// Write a function that converts hours into seconds.

// 1: create a function   :    function howManySeconds()
// 2: taking in hours     :    function howManySeconds(hours)
// 3: how many minutes in a hour     :  60 mins in one hour
// 4: how many seconds in a minutes  :  60 seconds in a minute
// 5: return hours * minutes * seconds    :   hours * 60 * 60

function howManySeconds(hours) {
    console.log("hours", hours)

    let mins = hours * 60
    console.log("mins", mins)

    let seconds = mins * 60
    console.log("seconds", seconds)

    return seconds

}

// Examples
// console.log(howManySeconds(2))// ➞ 7200
// howManySeconds(10) ➞ 36000
// howManySeconds(24) ➞ 86400
// Notes
// 60 seconds in a minute, 60 minutes in an hour
// Don't forget to return your answer.