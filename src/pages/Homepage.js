import React from "react";
import { landscape, portrait } from "../components/dummyData";
import { MovieCarousel } from "../components/MovieCarousel";
import MovieSlider from "../components/MovieSlider";

export const Homepage = () => {
  return (
    <div>
      <MovieCarousel data={landscape} />
      <MovieSlider title={"Popular Movies"} data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Portrait Movies"} data={portrait} original={true} />
    </div>
  );
};
