/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/

// * Write a function called `isItShort` that returns "That's a small string!" if the given string is shorter than 10 characters. Otherwise, it should return "That's not a small string!"


function isItLong(str) {

  if (str.length) {
    return "That's a long string!"
  }else {
    return undefined
  }
}

function isItMedium(str){
   if(str.lenght > 10 && str.length < 20) {
    return "That's a regular sized string!"
   } else {
    return undefined
   }
} 

function howLongIsMyString(str) {


}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof personsHeight === 'undefined') {
  personsHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  personsHeight,
}