import { useEffect } from "react";
import MoviesImage from "../../assets/logo/movies.jpg";
import { useNavigate } from "react-router-dom";

const IndexPage = () => {
  let navigate = useNavigate();
  useEffect(() => {
    document.title = "Movies";
    setTimeout(() => {
      navigate("/dts-movies/home");
    }, 5000);
  }, []);
  return (
    <div className="flex w-full min-h-screen bg-[#141414]">
      <div className="m-auto">
        <img
          src={MoviesImage}
          alt=""
          className="w-32 animate-scale-cycle rounded-md"
        />
      </div>
    </div>
  );
};

export default IndexPage;
