import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const popularSeriesURL = 'https://api.themoviedb.org/3/tv/popular?api_key=37f894301d25aeb1abe7033a4affba93&language=en-US&page=1'

const PopSeriesList = () => {
    
    const [movies, SetMovies] = useState([]);

    const fetchPopSeries =  async () => {
        const response = await axios.get(popularSeriesURL);
        SetMovies(response.data.results);
    }

    useEffect(() => {
        fetchPopSeries();
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

export default PopSeriesList;
