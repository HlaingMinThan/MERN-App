require('dotenv').config()
const PORT=process.env.PORT||8000;
const express=require("express");
const app=express();

app.use('/api/goals',require('./routes/goalRoutes.js'))

app.listen(PORT,()=>console.log(`Server is running on ${PORT}`))