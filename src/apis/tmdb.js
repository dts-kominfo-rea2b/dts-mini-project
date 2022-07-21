import axios from 'axios';

const API_KEY = '9125531ff6b1854ab80d9cd56441e806';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;