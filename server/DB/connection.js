const express = require('express')
const mongoose = require('mongoose')

const Connection = async() =>{
    try {
        const conn = await mongoose.connect(process.env.DBMS,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            useCreateIndex:true,
        })
        console.log('Connection Sucessful.......')

    } catch (error) {
        console.log(error)
    }
}
module.exports = Connection