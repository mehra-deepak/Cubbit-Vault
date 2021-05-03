'use strict'

const express = require('express')
const { singleFileUpload, getAllFiles, getFileById } = require('../controllers/fileUploader')
const { upload } = require('../helpers/filehelper')
const router = express.Router()

router.post('/upload', upload.single('file'), singleFileUpload)
router.get('/download', getAllFiles)
router.get('/download/:id', getFileById)
module.exports = {
    routes: router  
}