import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import { Box, ThemeProvider } from '@mui/material';
import { ThemeProvider } from '@mui/material';
// import { Link, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import theme from './themes/theme';
// import MovieList from './containers/MovieList';
// import Home from './containers/Home';
import Footer from './components/Footer';
import MovieList from './containers/MovieList';


const App = () => {

  return (
 
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <MovieList></MovieList>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
