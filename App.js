const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("HEllooo")
})

app.get("/contact",(req,res)=>{
    res.send("Contact Page")
})

app.listen(8080,()=>(
    console.log("Server ON !")
))