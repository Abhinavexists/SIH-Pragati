import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieparser from 'cookie-parser'

dotenv.config()
const PORT=process.env.PORT || 3000
const app=express()


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})