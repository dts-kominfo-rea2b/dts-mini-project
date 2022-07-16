import axios from 'axios';

// const API_KEY = process.env.REACT_APP_TMDB_KEY;
const API_KEY = 'af715024a63a4ad95f21dff49888056e'
const baseUrl = 'https://api.themoviedb.org/3/';


const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;