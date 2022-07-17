import React, {useState, useEffect} from 'react';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';

import './Hero.css';
import tmdb from '../../apis/tmdb';


const BACKGROUND_IMAGE_URL = "https://image.tmdb.org/t/p/original";



const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [heroMovies, setHeroMovies] = useState([]);
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("discover/movie/");
                setHeroMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }
    
        fetchMovies();
    }, []);

  return (
    <div className='slider'>
        <ArrowBackIosRounded className="arrow prev"/>
        <ArrowForwardIosRounded className="arrow prev"/>

        {tmdb.map(() => {
            
        })}

    </div>
  )
}

export default Hero