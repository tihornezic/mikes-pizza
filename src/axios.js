import axios from 'axios'

const instance = axios.create({
    // the api (cloud function) url (local)
    // baseURL: 'http://localhost:5001/mikes-pizza-c8851/us-central1/api'
    
    // 
    baseURL: 'https://us-central1-mikes-pizza-c8851.cloudfunctions.net/api'
})

export default instance