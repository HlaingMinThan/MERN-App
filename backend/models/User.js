const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,'Please add name field']
    },
    email:{
        type:String,
        required:[true,'Please add email field'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add password field'],
    },
},{
    timestamps:true
})

module.exports=mongoose.models.User || mongoose.model('User',UserSchema);