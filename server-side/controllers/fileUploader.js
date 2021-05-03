'use strict'
const File = require("../models/file");
const aes256 = require('aes256')
const fs = require('fs')


const crypto = require('crypto')

const singleFileUpload = async (req, res, next) => {
    try{
        
        const file = new File({
            fileId : req.body.fileId,
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize : fileSizeFormatter(req.file.size, 2) // 0.00
        });

        fs.writeFile(req.file.path, req.body.fileContent, (err) => {
            if(err){
                throw err;
            }
            console.log('saved')
        })

        await file.save()
        res.status(201).send('File Uploaded Successfully')
    }catch(e){
        res.status(400).send(e.message)
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes'
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB']
    const index = Math.floor(Math.log(bytes) / Math.log(1000))
    return parseFloat((bytes/Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
}

const getAllFiles = async (req, res, next) =>{
    try{
        const files = await File.find();
        res.status(200).send(files)

    }catch(error){
        res.status(400).send(error.message)
    }
}


const getFileById = async(req, res, next) => {
    File.find({fileId: req.params.id}).exec((error, file) => {
        if(error || !file) {
            console.log('here')
            res.status(400).send(error.message)
        }
        
        console.log(file)
        res.send(file)
    })   
}


module.exports = {singleFileUpload, getAllFiles, getFileById}   

// cYHzLUzsE7
// FileID
// dfe7bb-c03-a3c-a4b1-701ad72fcb8