import React, { useState, useEffect } from 'react'
import tmdb from '../apis/tmdb'
import MovieCard from '../components/MovieCard'

const Recommendations = ({ movieId }) => {
  const [movies, setMovies] = useState([])

  const fetchSimilar = async () => {
    try {
      const fetchData = await tmdb.get(`movie/${movieId}/recommendations`, {
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
      <h3 style={{ marginTop: '0px' }}>Recommendations</h3>
      {movies &&
        <div className='movie-grid'>
          {movies.map((movie, i) => (
            <MovieCard movie={movie} index={i} key={movie.id} />
          ))}
        </div>}

    </div>
  )
}

export default Recommendations