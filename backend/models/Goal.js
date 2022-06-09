const mongoose=require('mongoose');

const GoalSchema=mongoose.Schema({
    title:  {
        type:String,
        required:[true,'Please add title field']
    }
},{
    tiimestamp:true
})

module.exports=mongoose.model('Goal',GoalSchema)