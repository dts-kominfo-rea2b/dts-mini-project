import React, { useState, useEffect } from "react";
import FooterComp from "../components/FooterComp";
import NavbarComp from "../components/NavbarComp";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

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
    <div>
      <NavbarComp />
      <AwesomeSlider style={{ height: 700 }}>
        {moviesSlider.map((movie) => (
          <Card id={movie.id}>
            <CardMedia
              component="img"
              sx={{ width: 1900, height: "auto" }}
              image={`${BASE_IMAGE_URL}${movie.poster_path}`}
              alt="Movie poster"
            />
          </Card>
        ))}
      </AwesomeSlider>
      <Typography variant="h5" sx={{ mt: 10, fontWeight: 'bold' }}>
        Popular
      </Typography>
      <ImageList sx={{ width: 1900, height: 450 }} cols={4}>
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
    </div>
  );
};

export default HomePage;
