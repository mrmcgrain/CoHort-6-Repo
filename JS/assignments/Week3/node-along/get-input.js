// DON'T TOUCH THE BELOW HELPER FUNCTION
// It's just a nice function so you don't
// have to deal with arrays yet.

// If you call the below function in your
// code, you'll get back the first thing
// the user typed after `node [filename]`.
function getInput() {
  return process.argv[2];
}

module.exports = getInput;
