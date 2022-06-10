const User = require("../Models/User");
const bcrypt=require('bcryptjs');
const asyncHandler = require("express-async-handler");

let UserController = {

  /**
   *@desc  Get User
   *@route GET /api/users/me
   *@access Private
   */
  user: asyncHandler(async (req, res) => {
    res.json({msg:'get user'})
  }),

  /**
   *@desc  login user
   *@route POST /api/users/login
   *@access Public
   */
  login: asyncHandler(async (req, res) => {
    let {email,password}=req.body;
    if(!email || !password){
      res.status(400);
      throw new Error('please add all fields');
    }
    let user=await User.findOne({email});
    if(!user){
      res.status(400);
      throw new Error('User not exists');
    }

    let isPasswordCorrect=await bcrypt.compare(password,user.password);
    if(user&&isPasswordCorrect){
      res.json({
        _id:user._id,
        name:user.name,
        email:user.email
      })
    }else{
      res.json({
        message:'incorrect credentials'
      });
    }
  }),

  /**
   *@desc  register user
   *@route PUT /api/users
   *@access Public
   */
  register: asyncHandler(async (req, res) => {
    let {name,email,password}=req.body;
    if(!name || !email || !password){
      res.status(400);
      throw new Error('please add all fields');
    }
    let user=await User.findOne({email});
    if(user){
      res.status(400);
      throw new Error('User already exists');
    }
    let salt=await bcrypt.genSalt(10);
    let hashPW=await bcrypt.hash(password,salt);
    let newUser=await User.create({name,email,password:hashPW});

    res.json({name,email,_id:newUser._id})
  }),

};

module.exports = UserController;
