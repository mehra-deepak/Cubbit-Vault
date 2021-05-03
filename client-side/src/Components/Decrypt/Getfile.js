import aes256 from 'aes256'
import React, {useState} from 'react'
import { getSingleFile } from '../../data/api'
// 'http://localhost:8080/api/'

// C5VXQagQmk
// Encrypt.js:5 df5e3f-c53-3388-121d-af15dec0bc4

const Getfile = () => {

    const [fileName, setfileName] = useState('')
    const [filePath, setfilePath] = useState('')
    const [fileSize, setfileSize] = useState('')
    const [fileMime, setfileMime] = useState('')
    const [fileContent, setFileContent] = useState('')
    const [flag, setFlag] = useState(false)
    const [fileFound, setFileFound]= useState(true)
    
//     FileID
// 516c86-5d0-388a-3df-a1431115ad3
// Encryption Key
// kVmzJSTeDs

    const getText = async(path) =>{
        var request = new XMLHttpRequest()
        request.open('GET', path, true)
        request.send(null)
        request.onreadystatechange = function() {
            if(request.readyState === 4 && request.status === 200){
                var type = request.getResponseHeader('Content-Type');
                if (type.indexOf("text") !== 1) {
                    setFileContent(request.responseText)
                    return request.responseText;
                }
            }
        }
    }

    const GetFile = () => {
        return <div>
            <label>Insert Your File Id</label>
            <input type='text' id='fileId'></input>
            <button onClick={()=> getfileFromDB()}>Get File</button>
        </div>
    }

    const getfileFromDB = async() => {
        var id = document.getElementById('fileId').value
        console.log(id)
        var fileFile = await getSingleFile(id).then((result) => {
            return result[0]
        })

        if(!fileFile){
            setFileFound(false)
            return
        }

        setFlag(true)
        setfileName(fileFile.fileName)
        setfileMime(fileFile.fileType)
        setfileSize(fileFile.fileSize)
        setfilePath(fileFile.filePath)        
    }

    const downloadTxtFile = () => {
        var element = document.createElement('a');
        var decryptionKey =document.getElementById('dKey').value
        console.log(fileContent)
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(aes256.decrypt(decryptionKey, fileContent)));
        element.setAttribute('download', fileName);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }



    const FileDetail = () => {
        // console.log(filePath)
        if(filePath !== ''){
            var text = getText(`http://localhost:8080/${filePath}`)
        }
        return (<div>
            <p>{fileName}</p>
            <p>{fileSize}</p>
            <p>{fileMime}</p>
            <label>Input your encryption key</label>
            <input type='text' id='dKey'></input>
            <button onClick={downloadTxtFile}>Decrypt and Download</button>
        </div>)
    }

    
    const FileNotFoundError = () => {
        return <div>
            <p>File Not found</p>
        </div>
    }

    
    return (
        <div>
            {!flag && <GetFile/>}
            {flag && fileFound && <FileDetail/>}
            {!fileFound && <FileNotFoundError/>}
        </div>
    )
}

export default Getfile