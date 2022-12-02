const express = require('express');
const app = express();
const authRouter = require("./src/auth/auth.router");
const userRouter = require("./src/user/user.router");
const listRouter = require("./src/list/list.router");
const port = process.env.PORT || 4000;
const cors = require('cors')

app.use(
    cors({origin: ['*']})
  );

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello World');
})

app.get('/test', (req,res)=>{
    res.json('Works');
})

app.use(userRouter);
app.use(listRouter);
app.use(authRouter);

app.listen(port, ()=> {
    console.log("Server is up and listening from " + port)
})