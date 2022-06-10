const express=require('express');
const router=express.Router();
const {getGoals,setGoals,updateGoals,deleteGoals}=require('../controllers/GoalController');
const { auth } = require('../middlewares/AuthMiddleware');

router.route('/',)
    .get(getGoals)
    .post(auth,setGoals);

router.route('/:id')
    .put(updateGoals)
    .delete(deleteGoals);

module.exports=router