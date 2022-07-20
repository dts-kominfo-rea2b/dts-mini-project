import React, { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";
import tmdb from "../apis/tmdb";
import { useParams } from "react-router-dom";

export const DetailMovie = () => {
  let params = useParams();

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);

  const idMovie = params?.id;
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const fetchedMovie = await tmdb.get(`movie/${idMovie}`);
        setMovie(fetchedMovie.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [idMovie]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await tmdb.get("trending/movie/week");
        setMovies(fetchedMovies.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <MovieDetail data={movie} />
    </>
  );
};

export default DetailMovie;