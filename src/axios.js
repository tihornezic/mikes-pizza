import axios from 'axios'

const instance = axios.create({
    // the api (cloud function) url
    baseURL: 'http://localhost:5001/mikes-pizza-c8851/us-central1/api'
})

export default instance