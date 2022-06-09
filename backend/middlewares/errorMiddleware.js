const errorHandler=(err,req,res,next)=>{
    res.status(res.statusCode ?? 500)//check the status is already defined or not
        .json({
            message:err.message,
            stack:process.env.APP_ENV==='local' ? err.stack : null
        })
}
module.exports={errorHandler}