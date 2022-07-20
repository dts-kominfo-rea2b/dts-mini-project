import { useContext } from "react";
import ContinueWatching from "../../../components/movies/home/movielist/ContinueWatching";
import MovieCarousel from "../../../components/movies/home/movielist/MovieCarousel";
import MyList from "../../../components/movies/home/movielist/MyList";
import Original from "../../../components/movies/home/movielist/Original";
import PopularMovie from "../../../components/movies/home/movielist/PopularMovie";
import TopIndonesian from "../../../components/movies/home/movielist/TopIndonesianMovies";
import WatchAgain from "../../../components/movies/home/movielist/WatchAgain";
import { AuthContext } from "../../../store/auth-context";

const Home = () => {
  const { token } = useContext(AuthContext);
  return (
    <div className="flex flex-col gap-y-10">
      <MovieCarousel />
      <PopularMovie />
      {token && <ContinueWatching />}
      <Original />
      <TopIndonesian />
      <WatchAgain />
      <MyList />
    </div>
  );
};
export default Home;
