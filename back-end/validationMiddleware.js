const validator = require("validator");

function validateRegistration(req, res, next) {
  if (!validator.isEmail(req.body.email)) {
    return res.status(400).json({ message: "Invalid email address" });
  }

  if (!validator.isLength(req.body.password, { min: 6 })) {
    return res.status(400).json({ message: "Password must be at least 6 characters long" });
  }

  next();
}

module.exports = {
  validateRegistration,
};
