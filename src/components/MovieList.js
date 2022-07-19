import { Box } from '@mui/system'
import MovieCard from "./MovieCard";
import { useEffect, useState } from 'react'
import axios from 'axios'

const MovieList = () =>{
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        const fetchData = async () => {
            const response = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=ccd631bba7a9cee1d6a100b57551aeab');
            setMovies(response.data.results);
        }
        fetchData();
    }, [movies]);

    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            flexWrap: 'wrap',
            }}>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.id} movie= {movie}></MovieCard>
                    ))
                }
        </Box>
    );
}

export default MovieList;