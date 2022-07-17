import React from 'react';

import MovieList from '../containers/MovieList';
import Hero from '../components/hero/Hero'



const Home = () => {
 
  return (
    <>
      <div>
      <Hero/>
      <MovieList/>
      </div>
    </>
  )
}

export default Home