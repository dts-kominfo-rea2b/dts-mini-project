import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { red } from '@mui/material/colors';
import "./HeroItem.css";

const BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const PlayButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  borderRadius: 25,
  marginRight: 15,
  height: 50,
  '&:hover': {
    backgroundColor: red[900],
  },
}));

const HeroItems = ({ movie }) => {
  return (
    <div className="hero-items">
      <div className="hero-bg-image">
        {movie.backdrop_path && <img src={BACKGROUND_IMAGE_URL + movie.backdrop_path} alt={movie.title} />}
      </div>
      <div className="heroItems-content">
        <h1 className={"movie-title"}>{movie.title}</h1>
        <p className={"movie-overview"}>{movie.overview}</p>
        <PlayButton variant="contained" size="large">
          Play Trailer
          </PlayButton>
        <button className="button-details">Details</button>
      </div>
    </div>
  );
};

export default HeroItems;
