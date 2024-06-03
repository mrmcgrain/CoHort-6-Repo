

// Array Methods

let students = ["pat", "andrew", "chris", "traci", "jonathan", "shawn", "hailey", "jesse", "auren"]

console.log("students", students)

// push  : Adds to the end of a array
students.push("BOB")
console.log("after push", students)

// pop  : Remove item from end  (removed Bob)
students.pop()
console.log("after pop", students)

// unshift : Add a item to the front of array
students.unshift("BOB")
console.log("after unshift", students)

// shift  : Removes first item from Array
students.shift()
console.log("after shift", students)   // Removed Bob

// indexOf  : Return the index of a specificed item
console.log("indexOf hailey:", students.indexOf("hailey"))

// slice  : method slices out a piece of an array into a new array
// The slice() method creates a new array.
// The slice() method does not remove any elements from the source arra
// https://www.w3schools.com/js/js_array_methods.asp#mark_slice
console.log("slice(1,5)", students.slice(1, 5))
console.log("slice did not mutate", students)

let shawn = students.slice(students.indexOf("shawn"), students.indexOf("jesse"))
console.log("after slice", shawn)

// splice : MUTATES the original array, can remove item or add to the array
// splice(where to start, how many to delete)
console.log("students", students)

// console.log("splice(0,4)", students.splice(0, 4)) // start at 0 and del 4 items
// console.log("after splice", students)

// Splice can also add items into the array
students.splice(4, 1, "Hello", "world", "neat")
console.log("after splice w/ add", students)

///////////////////

//toSpliced()  Array toSpliced() method as a safe way to splice an array without altering the original array.

console.log("toSplice(0,2)", students.toSpliced(0, 2))
console.log("students non mutated", students)


// Now we know that splice will RETURN and save the deleted in memory (varible)
// toSplice will not.. toSplice does not mutate our og array, splice() does

 // Theroy ??  how can we use splice() without mutate our array?
//   we need to make a copy of our data to splice


// spread operator  ...  copies all item into a array
console.log("students", students)
let copy = [...students]
console.log("copy", copy)








// split
// join
// concat