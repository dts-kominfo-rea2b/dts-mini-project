import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export default function MovieCard({ movie }) {
  let navigate = useNavigate();
  const onClickHandler = (movie) => {
    // console.log(movie);
    navigate(`/movie-detail/${movie.id}`);
  }

  return (
    <Card id={movie.id} sx={{ display: "flex", mt: 5}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={BASE_IMAGE_URL + movie.poster_path}
        alt="movie.jpg" onClick={()=>onClickHandler(movie)}
      />
    </Card>
  );
}
