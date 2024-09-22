import axios from 'axios';

/*
Rodar com IPV4: json-server -h 192.168.0.6 db.json
*/

const api = axios.create ({
    baseURL : 'http://192.168.0.6:3000'
})

export default api;