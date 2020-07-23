import axios from 'axios';

/**
 * servico para as requisições
 */
export default axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    headers: {
        'Content-Type': 'application/json',
    }
});