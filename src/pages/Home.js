import React from "react";

import MovieList from "../containers/MovieList";
import Hero from "../components/hero/Hero";
import SeriesList from "../containers/SeriesList";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <MovieList />
        <SeriesList />
      </div>
    </>
  );
};

export default Home;
