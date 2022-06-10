const express=require('express');
const router=express.Router();
const {register,login,user}=require('../controllers/UserController')

router.post('/',register)
router.get('/me',user)
router.post('/login',login)
   

module.exports=router