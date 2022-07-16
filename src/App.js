import "./App.css";


import MovieSlider from "./components/MovieSlider";
import { landscape, portrait } from "./components/dummyData";
import { MovieCarousel } from "./components/MovieCarousel";

function App() {
  return (
    <>
      <MovieCarousel data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Portrait Movies"} data={portrait} original={true} />
    </>
  );
}

export default App;
