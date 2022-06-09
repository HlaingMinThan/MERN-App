require('dotenv').config()
const PORT=process.env.PORT||8000;
const express=require("express");
const app=express();

//https://expressjs.com/en/api.html#express.json
//https://expressjs.com/en/5x/api.html#express.urlencoded
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/api/goals',require('./routes/goalRoutes.js'))

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))