import MovieList from "../components/movieList";
import requests from "../config/request";
import Banner from "../components/banner";
import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import DetailFilm from "../components/DetailFilm";
import { useState, useEffect } from "react";
import tmdb from "../config/Apis";

const Home = ({ handleLogout, user }) => {
  const [movieId, setMovieId] = useState();
  const [detailMovie, setDetailMovie] = useState([]);

  const fetchUrl = `movie/${movieId}?api_key=df7934f249ad19ef751a3c7ae05883e7`;
  useEffect(() => {
    async function fetchData() {
      const request = await tmdb.get(fetchUrl);
      setDetailMovie(request.data);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(detailMovie);

  const onClickHandle = (id) => {
    setDetailMovie("");
    setMovieId(id);
  };
  return (
    <div>
      <Navbar handleLogout={handleLogout} user={user} />
      {movieId && user ? <DetailFilm detailMovie={detailMovie} /> : <Banner />}
      <MovieList
        title="Popular"
        fetchUrl={requests.fetchTrending}
        onClickHandle={onClickHandle}
      />
      <MovieList
        title="On The Agenda"
        fetchUrl={requests.fetchRomanceMovies}
        onClickHandle={onClickHandle}
      />
      <MovieList
        title="Original"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieList
        title="Watch Again"
        fetchUrl={requests.fetchDocumentariesMovies}
        onClickHandle={onClickHandle}
      />
      <MovieList
        title="My List"
        fetchUrl={requests.fetchComedyMovies}
        onClickHandle={onClickHandle}
      />
      <Footer />
    </div>
  );
};

export default Home;
