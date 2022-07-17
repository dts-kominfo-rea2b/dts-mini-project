import React, { useEffect, useState } from "react";

import { ArrowBackIosRounded, ArrowForwardIosRounded } from "@mui/icons-material";
import './Hero.css'
import HeroItems from "./HeroItems";
import tmdb from "../../apis/tmdb";

const BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const Hero = () => {
  const [movieItems, setMovieItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchMovies = async() => {
        try{
            const fetchedMovies = await tmdb.get("/discover/movie");
            setMovieItems(fetchedMovies.data.results.slice(1, 6));
        }catch(error) {
            console.log(error);
        }
    }
    fetchMovies();
  },[]);
  
    return (
    <div className="hero">
      <span>Discover</span>
      <div className="hero-content">
      <ArrowBackIosRounded className="arrow-left"/>
      <ArrowForwardIosRounded className="arrow-right"/>
      <div className="hero-slide">
        {movieItems.map(movie => {
            return(
                <div>
                    {<HeroItems key={movie.title} movie={movie}/>}
                </div>)
        })}
      </div>
      </div>
    </div>
  );
};

export default Hero;
