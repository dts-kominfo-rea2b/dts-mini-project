//import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard';

const Trending = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <div className='top-rated'>
     {/* <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            
            backgroundColor: "#201F1F",
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
        </Box> */}
   <h1 style={{ marginTop: '0px' }}>Trending Movie</h1>
   {movies ?
    <div className='movie-grid'>
     {movies.map((movie, i) => (
      <MovieCard movie={movie} index={i} key={movie.id} />
     ))}
    </div>
    : <div>
     No Movie yet...</div>}
  </div>
    );
}

export default Trending;
