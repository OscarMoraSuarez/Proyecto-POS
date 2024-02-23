import axios from 'axios';

export const posApi=axios.create({
    baseURL:'http://localhost:8080/' 
})
