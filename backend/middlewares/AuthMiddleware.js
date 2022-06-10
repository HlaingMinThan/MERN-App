const jwt=require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler=require('express-async-handler');

const AuthMiddleware={
    //err first argument no need for normal middleware
    auth:asyncHandler(async(req,res,next)=>{
        let authorization=req.headers.authorization;
        let token;
        if(!authorization){
            res.status(401);
            throw new Error('Not token')
        }
        token=authorization.split(' ')[1];
        if(!token){
            res.status(401);
            throw new Error('Not token')
        }
        //for handle jwt error
       try{
            let decodedPayload=jwt.verify(token,process.env.JWT_SECRET_KEY);
            let user=await User.findById(decodedPayload._id).select('-password');
            req.user=user;
            next();
       }catch(err){
            console.log(err);
            res.status(401);
            throw new Error('Not Authorize');
       }
    })
}
module.exports=AuthMiddleware