import { CardMedia } from '@mui/material';
import * as React from 'react';


const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const SeriesCard = ({movie}) => {

  return (
    <CardMedia
        component="img"
        sx={{
            width: 200,
            height: 300,
            cursor: 'pointer',
            '&:hover' : {opacity: 0.7, transition: '0.5s'}
        }}
        images={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt="Series poster"
    />
  )
}

export default SeriesCard;