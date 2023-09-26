const jwt=require("jsonwebtoken")
const env=require("dotenv").config()
const privateRouterVerification=(req,res,next)=>{
    if(req.cookies.jwtToken==undefined){
        res.send({message:"un-Authorized section"})
    }
    else{
        jwt.verify(req.cookies.jwtToken,process.env.SECURITY)
        next()
    }
}
module.exports=privateRouterVerification