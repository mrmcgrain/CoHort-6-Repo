

// Regex has 2 methods, 
// .test
// .match

// .test return a boolean

// regexSearch.test(What searching)

let testStr = "freeCodeCamp";
let regex = /Code/
console.log(regex.test(testStr))

// .match
// whereImLooking.match(/looking for/)
let testStr2 = "freeCodeCamp";
let regex2 = /Code/
console.log(testStr2.match(regex2))

// to search for a range of character  /[a-z]/

let alpha = "abcdefghijklMNOPqrstuvwxyz"
let newRegex = /[m-z]/gi
console.log(alpha.match(newRegex))

// If we want to check for multiple patterns

let otherRegex = /tea|soda|coffee/    // |  =  or in regex

// flags   /something/ i       i = ignore case
//         /something/ g       g =  return ALL matches

// wildcard  =  .

let str = "The Cat in the Hat, bat, sat, mat, kitkat"
let reg = /.at/ig
console.log(str.match(reg))



let run = "Run"
let ron = "Ron"
let ran = "Ran"
let thisRegex = /R[uo]n/

console.log(run.match(thisRegex))
console.log(ron.match(thisRegex))
console.log(ran.match(thisRegex))

let str2 = "The Cat in the Hat likes to sleep on a mat"
let regex3 = /[c-m]at/ig
console.log(str2.match(regex3))

let testString = "Hello my name is Steve"
let testRegex = /[aeiou]|steve/gi

console.log(testString.match(testRegex))





