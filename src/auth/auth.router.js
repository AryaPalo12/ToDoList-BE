const express = require ('express');
const { validate } = require('../middleware/validation');
const { loginValidation } = require('../middleware/auth.validation');
const authController = require('./auth.controller')
const authRouter = express.Router();


authRouter.post('/login',loginValidation, validate, authController.emailLogin);

module.exports = authRouter;