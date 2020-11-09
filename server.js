const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true, useUnifiedTopology: true})

const db = mongoose.connection
db.on('error',(error)=>console.error(error))
db.once('open',()=>console.log('Connected to Database'))

app.use(express.json())

const subRouter= require('./routes/subscribers')

app.use('/subs',subRouter)

app.listen(3000,()=>console.log('Server Started running at Port 3000'))