const express=require('express');
const router=express.Router();
const {getGoals,setGoals,updateGoals,deleteGoals}=require('../controllers/GoalController');
const { auth } = require('../middlewares/AuthMiddleware');

router.route('/',)
    .get(auth,getGoals)
    .post(auth,setGoals);

router.route('/:id')
    .put(auth,updateGoals)
    .delete(auth,deleteGoals);

module.exports=router