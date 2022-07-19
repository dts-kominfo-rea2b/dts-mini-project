import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original'

export default function MovieCard({ movie }) {
  return (
    <Card id={movie.id} sx={{ display: "flex", mt: 5}}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image={BASE_IMAGE_URL + movie.poster_path}
        alt="movie.jpg"
      />
    </Card>
  );
}
