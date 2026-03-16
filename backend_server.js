import express from 'express'
import AppError from "./apperror.js";

const app=express()

app.use(express.json())



app.post('/hi',(req,res,next)=>{
    try{
        const data=req.body



        if(typeof(data)!="object"|| data === null|| Object.entries(data).length===0){


            return next(new AppError("Check whether the req body is in right format",450))
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