const express = require('express')
const app = express()
const dotenv = require('dotenv')
const connection = require('./DB/connection')


// enviroment variable 
dotenv.config()

// database connection 
connection()

app.use(express.json())

// router configuration

app.use(require('./router/auth'))



app.listen(process.env.PORT,()=>{
    console.log(`surver running on PORT ${process.env.PORT}`)
})