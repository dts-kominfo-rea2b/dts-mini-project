import axios from 'axios';

const API_KEY = '10831f7af4aee8e9009805b88a5c5379';
const baseUrl = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
    baseURL: baseUrl,
    params:{
        api_key: API_KEY,
    },
});


export default tmdb;