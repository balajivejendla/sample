import express from 'express'
const app=express()

app.use(express.json())



app.post('/hi',(req,res,next)=>{
    try{
        const data=req.body
        if(Object.entries(data).length===0|| typeof(data)!="object"){
            const error=  new Error("Error not good")
            error.statusCode=400
            next(error)
        }
        else{
            return res.status(200).json("Good")
        }
    }
    catch(error){
        next(error)
    }
})
app.use((error,req,res,next)=>{
    const statuscode= error.statusCode || 500
    return res.status(statuscode).json({
        msg:error.message|| "Internal Server Error",
        stack:error.stack
    })
})

app.listen((3000),()=>
{
    console.log("logged")
}
)