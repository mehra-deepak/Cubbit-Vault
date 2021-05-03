'use strict'
const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const fileRoutes = require('./routes/fileUpload')
const app = express()

require('./database')();

app.use(bodyParser.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api', fileRoutes.routes)

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`server is listening on the port ${port}`)
})