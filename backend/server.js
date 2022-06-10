require('dotenv').config()
require('colors');
const PORT=process.env.PORT||8000;
const express=require("express");
const app=express();
const {errorHandler}=require('./middlewares/errorMiddleware');
const connectDB=require('./config/db')

connectDB();

//https://expressjs.com/en/api.html#express.json
//https://expressjs.com/en/5x/api.html#express.urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals',require('./routes/goalRoutes.js'))
app.use('/api/users',require('./routes/getUsers.js'))

//error will throw from route controller so need to catch after that
app.use(errorHandler);
app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))