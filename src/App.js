import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import MovieDetail from './pages/movie-detail'
import NotFound from './pages/not-found'
import { ThemeProvider } from "@mui/material";

import theme from "./styles/theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="movie-detail/:id" element={<MovieDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
