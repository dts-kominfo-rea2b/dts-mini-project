import { useEffect, useState } from 'react';
import Carousel from "better-react-carousel";
import { Link, useParams } from 'react-router-dom';
import tmdb from '../api/tmdbapi';

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const MovieRecomen = () => {
        const params = useParams();
        const [movieRecomen, setMovieRecomen] = useState([]);
        const [selected, setSelected] = useState(null);

        const getMovieRecomen = async () => {
                try {
                        const fetchedMovies = await tmdb.get(`movie/${params.id}/recommendations`);
                        setMovieRecomen(fetchedMovies.data.results);
                } catch (error) {
                        console.log(error);
                }
        }

        useEffect(() => {
                getMovieRecomen();
        }, []);

    return (
        <div className="flex flex-col gap-y-3 mt-10">
        <p className="font-medium text-2xl px-8">Recommendations Movies</p>
        <Carousel
          scrollSnap={true}
          cols={5}
          rows={1}
          gap={5}
          containerClassName="flex w-full h-auto px-3"
          arrowLeft={
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full left-8 rounded-l-sm bg-slate-800 bg-opacity-80">
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
            <div className="absolute flex flex-col items-center px-1 justify-center z-[104] cursor-pointer h-full right-8 rounded-r-sm bg-slate-800 bg-opacity-30">
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
          {movieRecomen.map((movie) => (
            <Carousel.Item key={movie.id}>
              <Link
                to={`/moviedetail/${movie.id}`}
                onMouseEnter={() => setSelected(movie.id)}
                onMouseLeave={() => setSelected(null)}
              >
                <div className="relative cursor-pointer">
                  {selected === movie.id && (
                    <div
                      className={
                        selected === movie.id
                          ? "absolute z-[102] flex w-full h-full bg-black opacity-50"
                          : ""
                      }
                    >
                      <div className="flex w-full h-full justify-center items-center">
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
                          <p className="text-xl">Watch</p>
                        </p>
                      </div>
                    </div>
                  )}
                  <img
                    src={`${BASE_IMAGE_URL}${movie.poster_path}`}
                    alt=""
                    className={
                      selected === movie.id
                        ? "w-[285px] h-auto scale-95 aspect-2/3 object-cover transition-all duration-100"
                        : "w-[285px] h-auto aspect-2/3 transition-all duration-100"
                    }
                  />
                </div>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
    );
};

export default MovieRecomen;