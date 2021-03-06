const Goal = require("../Models/Goal");
const asyncHandler = require("express-async-handler");

let GoalController = {

  /**
   *@desc  Get goals
   *@route GET /api/goals
   *@access Private
   */
  getGoals: asyncHandler(async (req, res) => {
    //login user's goals
    let goals = await Goal.find({user_id:req.user._id});
    res.status(200).json(goals);
  }),

  /**
   *@desc  Set goals
   *@route POST /api/goals
   *@access Private
   */
  setGoals: asyncHandler(async (req, res) => {
    if (!req.body.title) {
      res.status(400); //set custom status
      throw new Error("Please add the title field");
    }
    let goal = await Goal.create({
      title: req.body.title,
      user_id:req.user._id
    });
    res.status(200).json(goal);
  }),

  /**
   *@desc  Update goals
   *@route PUT /api/goals/:id
   *@access Private
   */
  updateGoals: asyncHandler(async (req, res) => {
    if (!req.body.title) {
      res.status(400); //set custom status
      throw new Error("Please add the title field");
    }

    let auth_user=req.user;
    let goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(400); //set custom status
      throw new Error("Goal not exists with that id");
    }

    if(auth_user._id.toString() !== goal.user_id.toString()){
      res.status(400); //set custom status
      throw new Error("User not authorize to do this action.");
    }

    let updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
      new: true, //will give the updated value
    });
    res.status(200).json(updatedGoal);
  }),

  /**
   *@desc  Delete goals
   *@route DELETE /api/goals/:id
   *@access Private
   */
  deleteGoals: asyncHandler(async (req, res) => {
    let auth_user=req.user;
    let goal = await Goal.findById(req.params.id);
    if (!goal) {
      res.status(400); //set custom status
      throw new Error("Goal not exists with that id");
    }

    if(auth_user._id.toString() !== goal.user_id.toString()){
      res.status(400); //set custom status
      throw new Error("User not authorize to do this action.");
    }
   
    await goal.remove();
    res.status(200).json({
      id: req.params.id,
    });
  }),
  
};

module.exports = GoalController;
