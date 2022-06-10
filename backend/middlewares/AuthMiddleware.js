const jwt=require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler=require('express-async-handler');

const AuthMiddleware={
    //err first argument no need for normal middleware
    auth:asyncHandler(async(req,res,next)=>{
        let token=req.headers.authorization.split(' ')[1];
        if(!token){
            res.status(400);
            throw new Error('No token')
        }
        let decodedPayload=jwt.verify(token,process.env.JWT_SECRET_KEY);
        let user=await User.findById(decodedPayload._id).select('-password');
        req.user=user;
        next();
    })
}
module.exports=AuthMiddleware