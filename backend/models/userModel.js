const mongoose=require("mongoose")
const UserSchema=new mongoose.Schema({
    username:{type:String,required:[true,"username is required"],minLength:[4,"min chart is 4"]},
    email:{type:String,required:[true,"email is required"]},
    password:{type:String,required:[true,"password is required"]},
    dob:{type:Date},
    gender:{type:String},
    pic:{type:String},
    phoneno:{type:Number,minLength:[10,"min chart is 10"]},
    url:{type:String},
    experience:[{type:String}],
    status:{type:Boolean,default:true}
},{collection:"UserCollection"})

const userModel=mongoose.model("user",UserSchema)
module.exports=userModel