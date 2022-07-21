import { Box } from '@mui/system';
import MovieCard from '../components/MovieCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const fetchData = async () => {
        const response = await axios.get ('https://api.themoviedb.org/3/trending/movie/week?api_key=9125531ff6b1854ab80d9cd56441e806')
        setMovies(response.data.results);
    }

    useEffect (() =>{
        
        fetchData();
    }, [])
    return(
        <Box 
            sx={{ display: 'flex', 
            flexDirection: 'column', 
            mt: 5}}>
                <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
            {
                movies.map(movie =>(
                    <MovieCard key={movie.title} movie={movie}></MovieCard>
                ))
            }
            </Box>
        </Box>
    )
}

export default MovieList;