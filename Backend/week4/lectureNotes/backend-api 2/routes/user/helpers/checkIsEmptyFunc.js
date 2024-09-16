const { checkIsEmpty } = require("../../utils/authMethods");

//this function checks any incoming data is empty if is empty send error message back
//else go to the next middleware function next()
function checkIsEmptyFunc(req, res, next) {
  let errorObj = {};

  let inComingData = req.body;

  for (let key in inComingData) {
    if (checkIsEmpty(inComingData[key])) {
      errorObj[key] = `${key} cannot be empty`;
    }
  }

  if (Object.keys(errorObj).length > 0) {
    return res.status(500).json({ message: "failure", payload: errorObj });
  } else {
    next();
  }
}

module.exports = checkIsEmptyFunc;
