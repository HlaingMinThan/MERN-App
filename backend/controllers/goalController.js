let goalController={
    /**
     *@desc  Get goals
     *@route GET /api/goals
     *@access Private
     */
    getGoals(req,res){
        res.status(200).json({
            'message':' Get goals'
        });
    },
     /**
     *@desc  Set goals
     *@route POST /api/goals
     *@access Private
     */
    setGoals(req,res){
        res.status(200).json({
            'message':'Set goals'
        });
    },
     /**
     *@desc  Update goals
     *@route PUT /api/goals/:id
     *@access Private
     */
    updateGoals(req,res){
        res.status(200).json({
            'message':`Update goal for ${req.params.id}`
        });
    },
    /**
     *@desc  Delete goals
     *@route DELETE /api/goals/:id
     *@access Private
     */
    deleteGoals(req,res){
        res.status(200).json({
            'message':`Delete goal for ${req.params.id}`
        });
    }
}

module.exports=goalController;