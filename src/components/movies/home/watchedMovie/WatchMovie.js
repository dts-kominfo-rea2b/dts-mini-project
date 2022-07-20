import { useEffect, useState } from "react";
import useGet from "../../../../hooks/useGet";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";

const WatchMovie = () => {
  const { id } = useParams();
  const { data, get } = useGet(`movie/${id}/videos`);
  // data
  const dataFeedback = data.feedback.results;

  useEffect(() => {
    get();
  }, []);

  // get screen widht
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    if (windowSize.innerWidth > 768) {
      setIsHide(true);
    } else {
      setIsHide(false);
    }
  }, [windowSize.innerWidth]);

  const opts = {
    height: isHide ? "810" : "405",
    width: "100%",
    playerVars: {
      authoplay: 1,
    },
  };

  if (data.feedback && dataFeedback.length > 0) {
    return (
      <div className="flex flex-col w-full h-auto gap-y-8">
        <YouTube className="w-full" videoId={dataFeedback[0].key} opts={opts} />
      </div>
    );
  } else {
    return <div>TIdak Ada Data</div>;
  }
};

export default WatchMovie;
