import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MovieList from './containers/MovieList';
import Subscribed from './containers/Subscribed';
import theme from './themes/theme';
import Login from "./containers/Login";
import Register from './containers/Register';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<Box sx={{ mt: 10 }}>Halaman about</Box>} />
          <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Routes>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;