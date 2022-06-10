const jwt=require('jsonwebtoken')

function generateJwtToken(_id){
    let token=jwt.sign({_id},process.env.JWT_SECRET_KEY,{
        expiresIn:'1d'
    })
    return token;
}
module.exports=generateJwtToken;