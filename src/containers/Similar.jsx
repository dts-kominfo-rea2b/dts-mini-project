import React, { useState, useEffect } from 'react'
import tmdb from '../apis/tmdb'
import MovieCard from '../components/MovieCard'
import { motion } from 'framer-motion'


const Similar = ({ movieId }) => {
  const [movies, setMovies] = useState([])

  const fetchSimilar = async () => {
    try {
      const fetchData = await tmdb.get(`movie/${movieId}/similar`, {
        params: {
          language: "en-US",
        }
      });
      setMovies(fetchData.data.results);
    } catch (error) {
      console.log(error);
      setMovies([]);
    }
  }

  useEffect(() => {
    fetchSimilar()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <div className='popular'>
      <h3 style={{ marginTop: '0px' }}>Similar Movies</h3>
      {movies &&
        <motion.div className='movie-grid'>
          {movies.map((movie, i) => (
            <MovieCard movie={movie} index={i} key={movie.id} />
          ))}
        </motion.div>}

    </div>
  )
}

export default Similar