import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Recomended from "../../../components/movies/home/detailMovie/Recomended";
import Similar from "../../../components/movies/home/detailMovie/Similar";
import WatchMovie from "../../../components/movies/home/watchedMovie/WatchMovie";
import useGet from "../../../hooks/useGet";
import Original from "../../../components/movies/home/movielist/Original";

const MoviesPlaying = () => {
  const { id } = useParams();
  const { data, get } = useGet(`movie/${id}`);
  // data
  const dataFeedback = data.feedback;
  console.log("data detail dalam playing", dataFeedback);

  useEffect(() => {
    get();
  }, []);
  if (data.feedback) {
    return (
      <div className="flex flex-col w-full aspect-video gap-y-8">
        <WatchMovie />
        <div className="flex flex-col gap-y-8 px-11">
          <p>Description :</p>
          <p>{dataFeedback.overview}</p>
        </div>
        <Similar />
        <Recomended />
        <Original />
      </div>
    );
  } else {
    return <div>Tidak Ada Data</div>;
  }
};

export default MoviesPlaying;
