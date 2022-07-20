import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_KEY;
// const API_KEY = '1e5238a16446199e1393210ccac016b4';
const baseUrl = 'https://api.themoviedb.org/3/';

const tmdb = axios.create({
  baseURL: baseUrl,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
