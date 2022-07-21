import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './containers/Login';
import Register from './containers/Register';
import NoMatch from './containers/NoMatch';
import ProtectedRoute from './components/ProtectedRoute';
import MovieDetail from './components/MovieDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          // <ProtectedRoute>
            <App />
          // </ProtectedRoute>
        } />
        <Route path="login" element={
          <ProtectedRoute loginOnly={false}>
            <Login />
          </ProtectedRoute>} />
        <Route path="register" element={
          <ProtectedRoute loginOnly={false}>
            <Register />
          </ProtectedRoute>} />
        <Route path="*" element={<NoMatch />} />
        <Route path="moviedetail" element={
          <ProtectedRoute loginOnly={true}>
            <MovieDetail />
          </ProtectedRoute>
        } />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
