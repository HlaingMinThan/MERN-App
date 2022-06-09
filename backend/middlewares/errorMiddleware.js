const errorHandler=(err,req,res,next)=>{
    res.status(res.statusCode ?? 500)
        .json({
            message:err.message,
            stack:process.env.APP_ENV==='local' ? err.stack : null
        })
}
module.exports={errorHandler}