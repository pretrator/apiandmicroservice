const express=require('express')
const app=express()
app.get('/api/timestamp/:date_string?',(req,res)=>{
    const dat=req.params.date_string
    const retdic={}
    if(dat.length>0){
        try{
            const date=new Date(dat)
            retdic.unix=date.getTime()
            retdic.utc=date.toUTCString()
        }
        catch(err){
            retdic.error="Invalid Date"
        }
    }
    else{
        const date=new Date()
        retdic.unix=date.getTime()
        retdic.utc=date.toUTCString()
    }
    res.send(JSON.stringify(retdic))
    
})
app.listen(3332,()=>{console.log("server chall gaya")})