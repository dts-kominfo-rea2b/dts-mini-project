import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tw-elements';

import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import PrivateComponent from './components/PrivateComponent';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import Homepage from './containers/HomePage';
import Register from './containers/Register';
import Subscribed from './containers/Subscribed';
import Series from './containers/Series';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <PrivateComponent>
            <App />
          </PrivateComponent>
        }>
          <Route path="/" element={<MovieList />} />
          <Route path="series" element={<Series />}>
            <Route path="description" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
            <Route path="services" element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
          </Route>
          {/* <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} /> */}
          <Route path="home" element={<Homepage />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Route>
        <Route path="login" element={
          <PrivateComponent loginOnly={false}>
            <Login />
          </PrivateComponent>} />
        <Route path="register" element={
          <PrivateComponent loginOnly={false}>
            <Register />
          </PrivateComponent>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
