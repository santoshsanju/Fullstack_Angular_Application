const exp=require("express")
const app=exp()
const env=require("dotenv").config()
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})