import "./App.css";
import MovieSlider from "./components/MovieSlider";
import { landscape, portrait } from "./components/dummyData";

function App() {
  return (
    <>
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Landscape Movies"} data={landscape} />
      <MovieSlider title={"Portrait Movies"} data={portrait} original={true} />
    </>
  );
}

export default App;
