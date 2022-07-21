import { Box } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

const trendingURL = 'https://api.themoviedb.org/3/trending/all/week?api_key=37f894301d25aeb1abe7033a4affba93'

const TrendingList = () => {
    
    const [movies, SetMovies] = useState([]);

    const fetchTrending =  async () => {
        const response = await axios.get(trendingURL);
        SetMovies(response.data.results);
    }

    useEffect(() => {
        fetchTrending();
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

export default TrendingList;