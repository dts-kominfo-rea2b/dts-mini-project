import { useEffect, useState, useRef } from "react";
import tmdb from "../config/Apis";
import requests from "../config/request";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";

const Banner = () => {
  const [movies, setMovies] = useState([]);
  //   useEffect(() => {
  //     async function fetchData() {
  //       const request = await tmdb.get(requests.fetchNetflixOriginals);
  //       setMovie(
  //         request.data.results[
  //           Math.floor(Math.random() * request.data.results.length)
  //         ]
  //       );
  //       return request;
  //     }
  //     fetchData();
  //   }, []);
  //   const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(requests.fetchNetflixOriginals);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [requests.fetchNetflixOriginals]);
  const listRef = useRef();
  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left") {
      listRef.current.style.transform = `translateX(${1440 + distance}px)`;
    }
    if (direction === "right") {
      listRef.current.style.transform = `translateX(${-1440 + distance}px)`;
    }
  };
  return (
    <div className="row">
      <ArrowBackIosOutlined
        className="sliderArrow left"
        onClick={() => handleClick("left")}
      />
      <div className="row_banner" ref={listRef}>
        {movies.map((movie) => (
          <header
            key={movie?.id}
            className="banner"
            style={{
              backgroundSize: "cover",
              backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
              backgroundPosition: "center center",
              marginTop: "40px",
              Height: "400px",
            }}
          >
            <div className="banner_content">
              <h1>{movie?.name || movie?.title || movie?.original_name}</h1>
              <div className="description">
                <p>{movie?.overview}</p>
              </div>
            </div>
          </header>
        ))}
      </div>
      <ArrowForwardIosOutlined
        className="sliderArrow right"
        onClick={() => handleClick("right")}
      />
    </div>
  );
};

export default Banner;
