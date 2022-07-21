import { useEffect, useState } from 'react';
import Carousel from "better-react-carousel";
import { Link } from 'react-router-dom';
import tmdb from '../api/tmdbapi';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieNow = () => {
    const [moviesNow, setMoviesNow] = useState([]);

    const getMoviesNow = async () => {
        try {
                const fetchedMovies = await tmdb.get("movie/now_playing");
                setMoviesNow(fetchedMovies.data.results);
        } catch (error) {
                console.log(error);
        }
    }

    useEffect(() => {
        getMoviesNow();
    }, []);

    return (
        <Carousel
        scrollSnap={true}
        cols={1}
        rows={1}
        gap={10}
        loop={true}
        autoplay={5000}
        containerClassName="flex w-full md:h-[420px] px-3"
        arrowLeft={
          <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-0 rounded-l-sm bg-slate-800 bg-opacity-50">
            <svg
              className="rotate-180"
              width="20"
              height="34"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                fill="white"
              />
            </svg>
          </div>
        }
        arrowRight={
          <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-0 rounded-r-sm bg-slate-800 bg-opacity-30">
            <svg
              width="20"
              height="34"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.41423 0L0.641113 1.76728L15.8243 17L0.641113 32.2327L2.41423 34L19.3589 17L2.41423 0Z"
                fill="white"
              />
            </svg>
          </div>
        }
      >
        {/* loop here */}
        {moviesNow.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className="relative w-full h-auto">
              {/* image */}
              <div className="relative inline-flex w-full">
                <div className="absolute w-full h-full bg-gradient-to-r from-[#040B16] via-slate-900" />
                <div className="flex w-1/2 min-h-full" />
                <img
                  src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                  alt=""
                  className="w-1/2 h-auto rounded-l-3xl object-cover right-0"
                />
              </div>
              {/* content */}
              <div className="absolute flex flex-col gap-y-3 w-1/2 top-16 left-8">
                <p className="text-xl font-semibold">{movie.title}</p>
                <div className="inline-flex gap-x-2 text-sm">
                </div>
                <p className="line-clamp-3 text-base">{movie.overview}</p>
                <div className="flex max-w-fit h-auto">
                  <Link to={`/moviedetail/${movie.id}`}>
                    <p className="inline-flex w-auto justify-center h-auto px-4 py-1 border-2 border-white gap-x-3 items-center">
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 0.333328L20 11L0 21.6667V0.333328Z"
                          fill="white"
                        />
                      </svg>

                      <p className="text-xl">Watch Now</p>
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    );
};

export default MovieNow;