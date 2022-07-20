import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard'
//import { Box } from '@mui/material';

const PopularMovie = () => {
  const [popular, setPopular] = useState([]);

  const fetchPopular = async () => {
    try {
      const fetchData = await tmdb.get("movie/popular", {
        params: {
          language: "en-US",
        }
      });
      setPopular(fetchData.data.results);
    } catch (error) {
      console.log(error);
      setPopular([]);
    }
  }

  useEffect(() => {
    fetchPopular()
  }, []);


  return (
    <div className='popular'>
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
                    popular.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
        </Box> */}
      <h1 style={{ marginTop: '0px' }}>Popular Movies</h1>
      {popular &&
        <div className='movie-grid'>
          {popular.map((movie, i) => (
            <MovieCard movie={movie} index={i} key={movie.id} />
          ))}
        </div>}

    </div>
  )
}
export default PopularMovie