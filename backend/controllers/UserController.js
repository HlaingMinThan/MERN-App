const User = require("../Models/User");
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
    res.json({msg:'Login user'})
  }),

  /**
   *@desc  register user
   *@route PUT /api/users
   *@access Public
   */
  register: asyncHandler(async (req, res) => {
    res.json({msg:'Register user'})
  }),

};

module.exports = UserController;
