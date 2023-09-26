const exp=require("express")
const app=exp()
const env=require("dotenv").config()
const port=process.env.PORT
const db=process.env.DATABASE
const mongoose=require("mongoose")
// security http headers
const helmet=require("helmet")
app.use(helmet())
// sanitized
const mongoSanitize=require("express-mongo-sanitize")
const xss=require("xss-clean")
app.use(mongoSanitize())
app.use(xss())
// parameter pollution
const hpp=require("hpp")
app.use(hpp())
// connetion
const path=require("path")
app.use(exp.static(path.join(__dirname,'./dist/app')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'./dist/app/index.html'))
})
const userapp=require("./controller/userController")
app.use('/user',userapp)
const productapp=require("./controller/productController")
app.use('/product',productapp)
mongoose.connect(db).then(()=>{
    console.log("Database is connected")
}).catch((err)=>{
    console.log("error",err)
})
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})