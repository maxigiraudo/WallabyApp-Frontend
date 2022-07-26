import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: 'http://localhost:3001/api/'
});

export default clienteAxios;