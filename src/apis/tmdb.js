import axios from 'axios';

const API_KEY = 'AIzaSyCdth0ia9BkvmbXf_GT6m50nepBIfZvJQ8';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;