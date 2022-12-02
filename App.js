require("dotenv").config();
const express = require('express');
const app = express();
const authRouter = require("./src/auth/auth.router");
const userRouter = require("./src/user/user.router");
const listRouter = require("./src/list/list.router");
const port = process.env.PORT || 4000;
const cors = require('cors')

app.use(cors());

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.use(userRouter);
app.use(listRouter);
app.use(authRouter);

app.listen(port, ()=> {
    console.log("Server is up and listening from " + port)
})