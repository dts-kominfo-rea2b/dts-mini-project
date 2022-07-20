import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb'
import MovieCard from '../components/MovieCard'
//import { Box } from '@mui/material';

const TopRatedMovie = () => {
 const [movies, setMovies] = useState([])
 const fetchTopRated = async () => {
  try {
   const fetchData = await tmdb.get("movie/top_rated", {
    params: {
     language: "en-US",
     region: "ID"
    }
   });
   setMovies(fetchData.data.results);
  } catch (error) {
   console.log(error);
   setMovies([]);
  }
 }

 useEffect(() => {
  fetchTopRated()
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
   <h1 style={{ marginTop: '0px' }}>Top Rated Movie</h1>
   {movies ?
    <div className='movie-grid'>
     {movies.map((movie, i) => (
      <MovieCard movie={movie} index={i} key={movie.id} />
     ))}
    </div>
    : <div>
     No Movie yet...</div>}
  </div>
 )
}

export default TopRatedMovie



// import { Box, Button } from '@mui/material';
// import { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';

// import tmdb from '../apis/tmdb';
// import MovieCard from '../components/MovieCard';

// const MovieList = () => {
//     const [queryParams, setQueryParams] = useSearchParams();
//     const [movies, setMovies] = useState([]);
//     const [moviesReady, setMoviesReady] = useState(false);

//     useEffect(() => {
//         const fetchMovies = async () => {
//             try {
//                 const fetchedMovies = await tmdb.get("trending/movie/week");
//                 setMovies(fetchedMovies.data.results);
//                 setMoviesReady(true);
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//         fetchMovies();
//     }, []);

//     useEffect(() => {
//         if (!moviesReady) return;
//         const sortMovies = (type) => {
//             if (type === 'asc') {
//                 const sorted = [...movies].sort((a, b) => a.vote_average - b.vote_average);
//                 setMovies(sorted);
//             }
//             if (type === 'desc') {
//                 const sorted = [...movies].sort((a, b) => b.vote_average - a.vote_average);
//                 setMovies(sorted);
//             }
//         }

//         sortMovies(queryParams.get('sort'));
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [queryParams, moviesReady]);

//     const setSortParam = (type) => {
//         queryParams.set("sort", type);
//         setQueryParams(queryParams);
//     }

//     return (
//         <Box sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             mt: 5,
//         }}>
//             <Box sx={{
//                 mt: 5,
//                 display: 'flex',
//                 flexDirection: 'row',
//                 justifyContent: 'flex-end',
//                 alignItems: 'center',
//             }}>
//                 Sort by Rating
//                 <Button
//                     variant="contained"
//                     sx={{ ml: 2 }}
//                     onClick={() => setSortParam("asc")}
//                 >
//                     Asc
//                 </Button>
//                 <Button
//                     variant="contained"
//                     sx={{ ml: 2, mr: 2 }}
//                     onClick={() => setSortParam("desc")}
//                 >
//                     Desc
//                 </Button>
//             </Box>
//             <Box sx={{
//                 display: 'flex',
//                 flexDirection: 'row',
//                 flexWrap: 'wrap',
//                 justifyContent: 'space-between',
//             }}>
//                 {
//                     movies.map(movie => (
//                         <MovieCard key={movie.title} movie={movie}></MovieCard>
//                     ))
//                 }
//             </Box>
//         </Box>
//     );
// }

// export default MovieList;
