import { useEffect, useRef, useState } from "react";
import tmdb from "../config/Apis";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const MovieList = ({ title, fetchUrl, isLargeRow, onClickHandle }) => {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
  };

  return (
    <div className="row">
      <h3>{title}</h3>
      <ArrowBackIosOutlined
        className="sliderArrow left"
        onClick={() => handleClick("left")}
      />
      <div className="row_posters" ref={listRef}>
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.title}
            onClick={() => onClickHandle(movie.id)}
          />
        ))}
      </div>
      <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default MovieList;
