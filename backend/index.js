const exp=require("express")
const app=exp()
const port=5000
app.listen(port,()=>{
    console.log(`Server is listening on ${port}`)
})