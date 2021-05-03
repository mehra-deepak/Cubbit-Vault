'use strict'
const mongoose = require('mongoose')

module.exports = () => {
    mongoose.connect('mongodb://localhost/secure-vault', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true, 
        useFindAndModify: true,
    }).then(()=>{
        console.log('connected to database')
    })
}