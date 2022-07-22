import React, { useState, useEffect } from "react";
import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";

import tmdb from "../apis/tmdb";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const HomePage = () => {
  const [moviesSlider, setMoviesSlider] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/day");
        setMoviesSlider(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  const [moviesPopular, setMoviesPopular] = useState([]);

  useEffect(() => {
    const fetchMoviesPopular = async () => {
      try {
        const fetchedMoviesPopular = await tmdb.get("trending/movie/week");
        setMoviesPopular(fetchedMoviesPopular.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMoviesPopular();
  }, []);

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#000000" }}>
      <NavbarComp />
      <AwesomeSlider>
        {moviesSlider.map((movie) => (
          <Card id={movie.id}>
            <CardMedia
              component="img"
              sx={{ width: 1900, height: "500" }}
              image={`${BASE_IMAGE_URL}${movie.poster_path}`}
              alt="Movie poster"
            />
          </Card>
        ))}
      </AwesomeSlider>
      <Typography
        variant="h5"
        sx={{ marginY: 5, fontWeight: "bold", color: "white" }}
      >
        Popular
      </Typography>
      <ImageList cols={6}>
        {moviesPopular.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${BASE_IMAGE_URL}${item.poster_path}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <FooterComp />
    </Box>
  );
};

export default HomePage;