import axios from 'axios';

const API_KEY = '238502d088460d24037d629e9d5d0a97';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;