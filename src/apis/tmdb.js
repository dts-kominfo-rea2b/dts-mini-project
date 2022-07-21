import axios from "axios";

// const TMDB_API_KEY = process.env.REACT_APP_TMDB_KEY;
const TMDB_API_KEY = '37f894301d25aeb1abe7033a4affba93'
const URL = 'https://api.themoviedb.org/3/'

const tmdb = axios.create({
    baseURL: URL,
    params: {
        api_key: TMDB_API_KEY
    }
});

export default tmdb;