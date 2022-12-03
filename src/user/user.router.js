const express = require('express');
const userRouter = express.Router();
const userControllers = require("./user.controller");
const { validate } = require("../middleware/validation");


userRouter.post('/registration',validate, userControllers.createUser);

userRouter.options((req,res)=>{
    return res.status(200).send('OK');
})


module.exports = userRouter;