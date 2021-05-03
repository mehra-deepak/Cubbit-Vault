import axios from 'axios'
const apiUrl = 'http://localhost:8080/api/'

export const singleFileUpload = async(data) => {
    try{
        await axios.post(apiUrl+ 'upload', data)
    }catch(error){
        throw error;
    }
}

export const getSingleFile = (id) => {
    return fetch(`${apiUrl}download/${id}`, {
        method: 'GET',
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err))
}