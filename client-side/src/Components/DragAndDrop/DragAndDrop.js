import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { singleFileUpload } from '../../data/api';
import uuid from 'react-uuid'
import './styles.css'
const aes256 = require('aes256')
const randkey = require('random-keygen')

const DragAndDrop = () => {
  const [singleFile, setSingleFile] = useState('')
  const [fileContent, setFileContent] = useState('')
  const [fileId] = useState(uuid())
  const [key] = useState(randkey.get({
    length: 10,
    numbers: true
  }))
  

  
  const handleFileChange = (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async(e) => {
      const text = e.target.result
      const encryptedText = aes256.encrypt(key, text)
      console.log(key)
      const dtext = aes256.decrypt(key, encryptedText)
      console.log(dtext)
      setFileContent(encryptedText)
    }
    reader.readAsText(e.target.files[0])
    setSingleFile(e.target.files[0])
  }

  const uploadSingleFile = async() =>{

    

    const formData = new FormData();
    formData.append('file', singleFile)
    formData.append('fileId', fileId)
    formData.append('fileContent', fileContent)
    await singleFileUpload(formData)
  }

  return (
    <div className='box'> 
      <label>Select File</label>
      <input type='file' onChange={(e) => handleFileChange(e)} />

      <button type='button' onClick={()=>uploadSingleFile()}><Link to = {
        {
          pathname:'/encrypt',
          state: {key: key, fileId: fileId}
        }
      }>Encrypt and Upload</Link></button>
      <button type='button'><Link to='/decrypt'>Decrypt and Download</Link></button>
    </div>
  );
}

export default DragAndDrop;
