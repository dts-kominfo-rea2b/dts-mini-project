import MovieBanner from "../../../components/movies/home/detailMovie/MovieBanner";
import Recomended from "../../../components/movies/home/detailMovie/Recomended";
import Similar from "../../../components/movies/home/detailMovie/Similar";
import ContinueWatching from "../../../components/movies/home/movielist/ContinueWatching";

const MovieIsSelected = () => {
  return (
    <div className="flex flex-col gap-y-10 w-full h-auto">
      <MovieBanner />
      <Similar />
      <Recomended />
      <ContinueWatching />
    </div>
  );
};

export default MovieIsSelected;
