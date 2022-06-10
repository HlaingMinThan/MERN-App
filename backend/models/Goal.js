const mongoose=require('mongoose');

const GoalSchema=mongoose.Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},//foreign id
    title:  {
        type:String,
        required:[true,'Please add title field']
    }
},{
    tiimestamp:true
})

module.exports=mongoose.model('Goal',GoalSchema)