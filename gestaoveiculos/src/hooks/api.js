import axios from 'axios';
import { API_URL } from '../helper/config';

const API = axios.create({
    baseURL: API_URL,
    headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0'
    }
});

export default API;