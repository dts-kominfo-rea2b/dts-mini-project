import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import AuthContextProvider from './store/auth-context';
// first page when open the web
import IndexPage from './pages/movies/Index';
// movies pages
import IndexRouter from './pages/routers/IndexRouter';
// profile page
import Profile from './pages/profile/Profile';
// unauthorized page
import Unauthorized from './pages/unauthorized/Unauthorized';
import ProtectedRoute from './components/navbar/ProtectedRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          {/* redirect */}
          <Route path="/" element={<Navigate to="/dts-mini-movie" />} />
          {/* index element */}
          <Route path="/dts-mini-movie" element={<IndexPage />} />
          {/* main router */}
          <Route path="/dts-movies/*" element={<IndexRouter />} />
          {/* login */}
          <Route path="/login" element={<Login />} />
          {/* register */}
          <Route path="/register" element={<Register />} />
          {/* unauthorized */}
          <Route path="/unauthorized" element={<Unauthorized />} />
          {/* profile */}
          <Route
            path="/profile"
            element={
              <React.Suspense fallback={<p>Loading ...</p>}>
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              </React.Suspense>
            }
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
