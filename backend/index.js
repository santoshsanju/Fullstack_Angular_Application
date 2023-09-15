const exp=require("express")
const app=exp()
const env=require("dotenv").config()
const port=process.env.PORT
const db=process.env.DATABASE
const mongoose=require("mongoose")
mongoose.connect(db).then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log("error",err)
})
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})