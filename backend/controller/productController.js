const exp=require("express")
const productapp=exp.Router()
const Product=require("../models/productModel")
const expressAsyncHandler=require("express-async-handler")
const privateRouterVerification=require("./privateRouter")
const authorizedRouterVerification=require("./authorizedRouter")
const cookieParser = require("cookie-parser");
productapp.use(cookieParser());
productapp.use(exp.json())
productapp.post("",privateRouterVerification,authorizedRouterVerification,(expressAsyncHandler(async(req,res)=>{
    let doc=await Product.create(req.body)
    await doc.save()
    res.send({message:"created product successfully"})
})))
productapp.get("/list",(expressAsyncHandler(async(req,res)=>{
    // 1. Filtering
    let queryObj={...req.query}
    let excludedFields=['page','sort','limit','fields']
    excludedFields.forEach(feature=>delete queryObj[feature])
    // 2. Adv Filtering
    let queryStr=JSON.stringify(queryObj)
    queryStr=queryStr.replace(/\b(gte|gt|lte|lt)\b/g,match=>`$${match}`) 
    let query=Product.find(JSON.parse(queryStr))
    // 3. Sorting
    if(req.query.sort){
        const sortBy=req.query.sort.split(',').join(' ')
        query=query.sort(sortBy)
    }
    // 4. Fields
    if(req.query.fields){
        const fields=req.query.fields.split(',').join(' ')
        query=query.select(fields)
    }
    // 5. Pagenation
    if(req.query.page){
        const page=req.query.page*1
        const limit=req.query.limit*1
        const skip=(page-1)*limit
        query=query.skip(skip).limit(limit)
    }
    const data= await query
    res.send({message:"product list",paylaod:data})
})))
productapp.use((req,res,next)=>{
    res.send({message:`${req.url} not found...`})
})
productapp.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})
module.exports=productapp 