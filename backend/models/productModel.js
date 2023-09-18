const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
    id:{type:Number},
    title:{type:String},
    price:{type:Number},
    description:{type:String},
    category:{type:String},
    image:{type:String,validate:{validator:function(value){
        return value.startsWith("http")
    },message:"Image should be http link"}},
    rating:{type:Object},
},{collection:"productCollection"})
// query middlewear
let timetaken
productSchema.pre(/^find/,function(next){
    timetaken=Date.now()
    next()
})
productSchema.post(/^find/,function(docs,next){
    timetaken=Date.now()-timetaken
    console.log(timetaken)
    next()
})
const productModel=mongoose.model("product",productSchema)
module.exports=productModel