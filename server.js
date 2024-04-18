
require('dotenv').config();
const express=require('express')
const router=require('./routes/route')

const connectDB=require('./database/mongoose')
connectDB()

const app=express()
app.use(express.json())
app.use(router)


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`The port is running in the port at ${port}`)
})

