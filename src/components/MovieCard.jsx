import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ 
      maxWidth: 500, 
      margin:'0.75em', }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={BASE_IMAGE_URL + movie.poster_path}
          alt={movie.original_title}
        />
      </CardActionArea>
    </Card>
  );
}

export default MovieCard;
