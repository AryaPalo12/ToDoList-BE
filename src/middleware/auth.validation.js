const { body } = require("express-validator");

const loginValidation = [
  body("number").notEmpty().
  withMessage('Please provide a combination of four digits'),
  body("password").notEmpty().
  withMessage('Password cannot be empty'),
];

module.exports = {
  loginValidation,
};
