import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Box, CardMedia, Rating } from '@mui/material';
import Button from '@mui/material/Button';

import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
const MovieCard = ({ movie }) => {
  
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchData = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=9125531ff6b1854ab80d9cd56441e806`)
      return response.data;
  }
  const getDetailsMovie = async () => {
    if(user) {
      const data = await fetchData();
      return navigate("/moviedetail", { state: { movies: data } });
      // return navigate("/moviedetail", { state: { id: movie.id } });
    } else {
      alert('Anda harus Login untuk melihat Detail');
      return navigate("/login");
    }
  }

  return (
    <Card id={movie.id} sx={{ display: 'flex', width: 400, margin: 5 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 255 }}
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Fantastic Beast"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Box
            sx={{
              width: 200,
              display: 'flex',
              alignItems: 'center',
            }}>
            <Rating name="read-only" precision={0.1} value={movie.vote_average / 2} max={5} readOnly />
            <Box sx={{ ml: 2 }}>{movie.vote_average.toFixed(1)}</Box>
          </Box>
          <Button
            type="button"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={getDetailsMovie}
          >
            Detail Movies
          </Button>
        </CardContent>
      </Box>
    </Card>
  );
}


export default MovieCard;
