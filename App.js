const express = require('express');
const app = express();
const cors = require('cors');
const authRouter = require("./src/auth/auth.router");
const userRouter = require("./src/user/user.router");
const listRouter = require("./src/list/list.router");
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.use(userRouter);
app.use(listRouter);
app.use(authRouter);

app.listen(port, ()=> {
    console.log("Server is up and listening from " + port)
})