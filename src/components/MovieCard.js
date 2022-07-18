import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Button, Rating } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';

export default function MovieCard({movie}) {
  const theme = useTheme();
  const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";

  const navigate = useNavigate();

  const handlerDetail = (id) =>{
    navigate(`/detail/${id}`)
  }

  return (
    <Card sx={{ display: 'flex' ,mt:5,ml:5,mr:5, width:350}}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ BASE_IMAGE_URL + movie.poster_path}
        alt={movie.title}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          {movie.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          {new Date(movie.release_date).getFullYear()}
          </Typography>
          <Button variant="contained" size='small' onClick={()=> handlerDetail(movie.id)}>Detail</Button>
        </CardContent>
        
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        <Rating sx={{mr:1}} name="read-only" precision={0.1} value={movie.vote_average/2} readOnly />
        <p>{(movie.vote_average/2).toFixed(2)} / 5</p>
        </Box>
      </Box>
      
    </Card>
  );
}

