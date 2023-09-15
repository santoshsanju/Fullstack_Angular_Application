const exp=require("express")
const userapp=exp.Router()
const User=require("../models/userModel")
const expressAsyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const env=require("dotenv").config()
userapp.use(exp.json())
userapp.post("",expressAsyncHandler(async(req,res)=>{
    req.body.password=await bcrypt.hash(req.body.password,5)
    let doc = await User.create(req.body)
    await doc.save()
    res.send({message:"created successfully"})
}))
userapp.post("/login",expressAsyncHandler(async(req,res)=>{
    let dbpassword=(await User.findOne({username:req.body.username})).password
    if(await bcrypt.compare(req.body.password,dbpassword)){
        let token=await jwt.sign({username:req.body.username},process.env.SECURITY,{expiresIn:"2d"})
        res.cookie('jwt',token,{expires:new Date(Date.now()+2*24*60*60*1000),httpOnly:true})
        res.send({message:"login succesfully",payload:token})
    }
    else{
        res.send({message:"Incorrect credentials"})
    }
}))
module.exports=userapp