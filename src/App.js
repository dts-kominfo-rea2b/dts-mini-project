import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Outlet} from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Navbar />

    <Outlet/>
    <Footer/>
  </div>
  );
}

export default App;
