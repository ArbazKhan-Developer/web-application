const AppError = require(`../utils/utils`)

function authentication(req, res, next) {
  try {
    if (req.headers.token == "123") {
      console.log("authenticated successfully");
      next();
    } else {
      console.log("invalid token");
      throw new AppError("invalid token, could not process the req", 403)
    }
  } catch (error) {
    console.log("error occurred while authentication");
    throw error
  }
}

module.exports = authentication;
