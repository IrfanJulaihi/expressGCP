const app =require('express')()

app.get('/rankImage',(req,res)=>{
   res.send("Images here")
})

exports.rank=app