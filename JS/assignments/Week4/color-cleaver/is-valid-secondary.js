/******************
 * YOUR CODE HERE *
 ******************/

function isValidSecondary(color){
  return color === 'purple' || color === 'orange' || color === 'green'
}

// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
