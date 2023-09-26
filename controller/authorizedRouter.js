const authorizedRouterVerification=(req,res,next)=>{
    if(req.cookies.role!="admin"){
        res.send({message:"un-Authorized section"})
    }
    else{
        next()
    }
}
module.exports=authorizedRouterVerification