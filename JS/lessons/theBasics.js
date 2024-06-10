

// creating variables 
// Think of a variable like a box with a name on it. 
// You can put something inside this box, like a toy or a book. 
let student = "pat"
console.log("student", student)

// function, when passing value (2,4) they become (a, b)
// let a = 2
// let b = 4
function addSum(a, b){   // a,b are variable that become the stuff sent from function call on line 18
console.log("i am a console log", a, b)

return a + b // sends data outside of function - throw it back to you

}
console.log(addSum(2, 4)) // this send these values to (a and b) on line 12

let pokemon = addSum(7,3) // a function is equal to its return    a + b
console.log("pokemon", pokemon)


// lets make pizza 

function papaJohns(topping1, topping2, topping3){
console.log(topping1, topping2, topping3)

return "your pizza is " + " " + topping1 + " " + topping2 + " " + topping3
}

let pizza = papaJohns("pepperoni", "sausage", "anchovies") //phone call to order pizza
console.log( pizza)
