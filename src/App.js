import React from 'react'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import MovieDetail from './pages/movie-detail'
import NotFound from './pages/not-found'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="movie-detail/:id" element={<MovieDetail/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
