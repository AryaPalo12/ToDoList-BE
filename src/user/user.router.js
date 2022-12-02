const express = require('express');
const userRouter = express.Router();
const userControllers = require("./user.controller");
const { validate } = require("../middleware/validation");


userRouter.post('/registration',validate, userControllers.createUser);

module.exports = userRouter;