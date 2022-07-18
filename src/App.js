import './App.css';
import Footer from './components/Footer';

import Navbar from './components/Navbar';
import MovieList from './containers/MovieList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MovieList />
      <Footer></Footer>
    </div>
  );
}

export default App;
