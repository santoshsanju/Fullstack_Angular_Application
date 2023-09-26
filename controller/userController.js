const exp=require("express")
const userapp=exp.Router()
const User=require("../models/userModel")
const expressAsyncHandler=require("express-async-handler")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const env=require("dotenv").config()
const privateRouterVerification=require("./privateRouter")
const cookieParser = require("cookie-parser");
userapp.use(cookieParser());
userapp.use(exp.json())
userapp.post("",expressAsyncHandler(async(req,res)=>{
    req.body.password=await bcrypt.hash(req.body.password,5)
    let doc = await User.create(req.body)
    await doc.save()
    res.send({message:"created successfully"})
}))
userapp.post("/login",expressAsyncHandler(async(req,res)=>{
    let dbpassword=(await User.findOne({username:req.body.username}).exec()).password
    let dbrole=(await User.findOne({username:req.body.username}).exec()).role
    if(await bcrypt.compare(req.body.password,dbpassword)){
        let token=await jwt.sign({username:req.body.username},process.env.SECURITY,{expiresIn:"2d"})
        res.cookie('jwtToken',token,{expires:new Date(Date.now()+2*24*60*60*1000),httpOnly:true})
        res.cookie('role',dbrole,{expires:new Date(Date.now()+2*24*60*60*1000),httpOnly:true})
        res.send({message:"login successfully",payload:token})
    }
    else{
        res.send({message:"Incorrect credentials"})
    }
}))
userapp.get("/allcards",privateRouterVerification,expressAsyncHandler(async(req,res)=>{
    let data=await User.find().exec()
    res.send({message:"all cards",payload:data})
}))
userapp.get("/logout",expressAsyncHandler(async(req,res)=>{
    res.clearCookie("jwtToken")
    res.clearCookie("role")
    res.send({message:"logout successfully"})
}))
userapp.use((req,res,next)=>{
    res.send({message:`${req.url} not found...`})
})
userapp.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})
module.exports=userapp