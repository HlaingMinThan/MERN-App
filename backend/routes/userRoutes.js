const express=require('express');
const router=express.Router();
const {register,login,user}=require('../controllers/UserController')
const {auth}=require('../middlewares/AuthMiddleware');

router.post('/',register)
router.get('/me',auth,user)
router.post('/login',login)
   

module.exports=router