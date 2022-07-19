import { CardMedia } from "@mui/material";

import * as React from "react";
import "./MovieCard.css";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie }) => {
  return (
    <CardMedia
      className={"media"}
      component="img"
      sx={{
        width: 165,
        height: 250,
        cursor: "pointer",
        borderRadius: 5,
        "&:hover": { opacity: 0.7, transition: "0.5s" },
      }}
      image={`${BASE_IMAGE_URL}${movie.poster_path}`}
      alt="Movie poster"
    />
  );
};

export default MovieCard;
