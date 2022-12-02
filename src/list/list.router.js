const express = require('express');
const listRouter = express.Router();
const listControllers = require("./list.controller");

listRouter.get('/dashboard/', listControllers.getList);

listRouter.post('/dashboard/lists/', listControllers.createToDoEntry);

listRouter.delete('/dashboard/lists/:post_id', listControllers.deleteToDoList);

module.exports = listRouter;