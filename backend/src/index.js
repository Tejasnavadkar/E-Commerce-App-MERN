import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import db from './db/db.js'
import cors from 'cors'
import rootRoter from './router.js'
const app = express()
const port = process.env.PORT


db.ConnectDb()
app.use(express.json()) // for body parsing
app.use(cors({
    exposedHeaders:['X-Total-Count','X-Total-items'] // we send header from backend so we need expose that
})) // prevevt cors errors

//routes place here
app.get('/',(req,res)=>{
    res.json({
        msg:'Success'
    })
})

// main routes
app.use(rootRoter)

app.listen(port,()=>console.log(`server started at ${port} port`))