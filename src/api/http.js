import axios from 'axios'

export default axios.create({
    baseURL: 'https://digitacao-webserver.herokuapp.com/'
    // baseURL: 'http://localhost:5000/'
    // baseURL: 'http://localhost:3000/'
});