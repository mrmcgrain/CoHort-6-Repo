

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
        return "monday"
    } else if (day == " tuesday") {
        return "tuesday"
    } else if (day == "wednesday") {
        return "wednesday"
    } else if (day == "thursday") {
        return "thursday"
    } else if (day == " friday") {
        return "friday"
    } else if (day == "saturday") {
        return "saturday"
    } else if (day == "sunday") {
        return "sunday"
    }
    // continue this madness for everyday
}

// console.log(isDay("monday"))

// switch statement, we can consolidate our conditions alot...

function isDay2(day) {

    switch (day) {

        case "monday":
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

// for ( let i = 0 ; i < 100 ; i++){
//     console.log(i)
//     continue
// }

let count = 0
function cc(card) {

    switch (card) {

        case 2:  //  if (card === 2)
        case 3:
        case 4:
        case 5:
        case 6:
            count++
            break;
        // same as if we said

        //  if( card === 2 || card === 3 || card === 4 || 
        //       card ===  5 || card === 6){
        //        count++
        //           }

        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            count--
            break;
    }

    if (count >= 1) {
        // console.log("card", card)
        console.log(card, count + " Bet")
    } else {
        console.log(card, count + " Hold")
    }


}

console.log(cc(2))
console.log(cc(3))
console.log(cc("A"))
console.log(cc(5))
console.log(cc(6))
console.log("count", count)