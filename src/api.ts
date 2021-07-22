import axios from 'axios';

const api = axios.create({
    baseURL: "http://challange.goomer.com.br/restaurants"
})

export default api;