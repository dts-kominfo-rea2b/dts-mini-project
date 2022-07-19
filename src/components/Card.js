import React from "react";
import Card from "@mui/material/Card";
import { CardMedia } from "@mui/material";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MCard = ({ movie }) => {
  return (
    <Card sx={{ maxWidth: 200, backgroundColor: "blue" }}>
      <CardMedia
        component="img"
        height="300"
        image={`${BASE_IMAGE_URL}${movie.poster_path}`}
      />
    </Card>
  );
};

export default MCard;
