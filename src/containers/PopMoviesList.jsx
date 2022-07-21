import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

const popularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=37f894301d25aeb1abe7033a4affba93&language=en-US&page=1'

const PopMoviesList = () => {
    
    const [movies, SetMovies] = useState([]);

    const fetchPopMovies =  async () => {
        const response = await axios.get(popularMoviesURL);
        SetMovies(response.data.results);
    }

    useEffect(() => {
        fetchPopMovies();
    }, [])

    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'flow',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }
        }>
            {
                movies.map(movie => (
                    <MovieCard movie = {movie}></MovieCard>
                ))
            }
        </Box>
    );
}

export default PopMoviesList