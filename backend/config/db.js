const mongoose=require('mongoose')

let connectDB=async()=>{
    try {
        let conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`Mongodb is connected : ${conn.connection.host}`.cyan)       
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports=connectDB;