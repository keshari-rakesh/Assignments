const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CrudJS'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',function(){
    console.log('connected')
})

app.use(express.json())

const studentrouter = require('./routes/students')
app.use('/students',studentrouter)
app.listen(9000, ()=>{
    console.log('Server Started');
})

