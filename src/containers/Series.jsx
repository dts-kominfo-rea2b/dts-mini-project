import React, { useEffect, useState } from 'react'
import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard'
//import { Box } from '@mui/material';

const Series = () => {
  const [series, setSeries] = useState([]);

  const fetchSeries = async () => {
    try {
      const fetchData = await tmdb.get("tv/popular", {
        params: {
          language: "en-US",
        }
      });
      setSeries(fetchData.data.results);
    } catch (error) {
      console.log(error);
      setSeries([]);
    }
  }

  useEffect(() => {
    fetchSeries()
  }, []);


  return (
    <div className='series'>
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
                    series.map(tv => (
                        <MovieCard key={tv.name} movie={tv}></MovieCard>
                    ))
                }
            </Box>
        </Box> */}
      <h1 style={{ marginTop: '0px' }}>TV Series</h1>
      {series &&
        <div className='movie-grid'>
          {series.map((tv, i) => (
            <MovieCard movie={tv} index={i} key={tv.id} />
          ))}
        </div>}

    </div>
  )
}
export default Series;




// import { Typography } from '@mui/material';
// import { Box } from '@mui/system';
// import { Link, Outlet } from 'react-router-dom';

// const Series = () => {
//     return (
//         <Box sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             margin: 5,
//         }}>
//             <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
//                 Who are we?
//             </Typography>
//             <Link to="description">Description</Link>
//             <Link to="services">Services</Link>
//             <Outlet/>
//         </Box>
//     )
// }

// export default Series;