import React, { useEffect, useState } from 'react';
import "./Hero.css"

import SwiperCore, {Autoplay} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';

import tmdb from '../../apis/tmdb';
// import MovieCard from '../movieCard/MovieCard';
import HeroItems from './HeroItems';



const Hero = () => {

    SwiperCore.use([Autoplay]);

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try{
                const fetchMovies = await tmdb.get("/discover/movie");
                setMovieItems(fetchMovies.data.results);

            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies();
    },[]);
  return (
    <div className='hero'>
        <Swiper
            modules={[Autoplay]}
            grapCursor={true}
            spaceBetween={0}
            slidesPerView={1}
        >
            {movieItems.map(movie => (
            <SwiperSlide>
              <HeroItems key={movie.title} movie={movie}/>
            </SwiperSlide>
                ))
            }
        </Swiper>

    </div>
  );
}

export default Hero