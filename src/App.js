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
import Pricing from './containers/Pricing';
import Login from './containers/Login';
import About from './containers/About';
import theme from './themes/theme';
import React, { useRef, useState } from "react";
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about" element={<About />}>
            <Route path="login" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
          </Route>
        </Routes>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;