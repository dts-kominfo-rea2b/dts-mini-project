import axios from 'axios';

const API_KEY = '02b6eac65609034138be6a8c25c0a7ca';//process.env.REACT_APP_TMDB_KEY;
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdbapi = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdbapi;