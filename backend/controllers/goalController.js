const Goal=require('../Models/Goal')

let goalController={
    /**
     *@desc  Get goals
     *@route GET /api/goals
     *@access Private
     */
    async getGoals(req,res){
        let goals=await Goal.find();
        res.status(200).json(goals);
    },
     /**
     *@desc  Set goals
     *@route POST /api/goals
     *@access Private
     */
    async setGoals(req,res){
        if(!req.body.title){
            res.status(400);//set custom status
            throw new Error('Please add the title field');
        }
        let goal=await Goal.create({
            title:req.body.title
        })
        res.status(200).json(goal);
    },
     /**
     *@desc  Update goals
     *@route PUT /api/goals/:id
     *@access Private
     */
    async updateGoals(req,res){
        try{
            if(!req.body.title){
                res.status(400);//set custom status
                throw new Error('Please add the title field');
            }
    
            let goal=await Goal.findById(req.params.id);
            if(!goal){
                res.status(400);//set custom status
                throw new Error('Goal not exists with that id');
            }
            
            let updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
                new:true//will give the updated value
            });
            res.status(200).json(updatedGoal);
        }catch(e){
            res.status(500)//check the status is already defined or not
            .json({
                message:e.message,
                stack:process.env.APP_ENV==='local' ? e.stack : null
            })
        }
    },
    /**
     *@desc  Delete goals
     *@route DELETE /api/goals/:id
     *@access Private
     */
    async deleteGoals(req,res){
        let goal=await Goal.findById(req.params.id);
        if(!goal){
            res.status(400);//set custom status
            throw new Error('Goal not exists with that id');
        }
        await goal.remove();
        res.status(200).json({
            id:req.params.id
        });
    }
}

module.exports=goalController;