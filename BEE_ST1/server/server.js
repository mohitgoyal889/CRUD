const express=require("express")
const cors=require("cors")
const collection=require('./model/model')
const app= express()
app.use(express.json())
app.use(express.urlencoded({extended :true}))
app.use(cors())

app.get("/",cors(),(req,res)=>{
   
})

app.post("/",async(req,res)=>{
    
})



