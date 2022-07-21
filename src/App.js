import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { Box, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./containers/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Register from "./containers/Register";
import Subscribed from "./containers/Subscribed";
import DetailMovie from "./containers/DetailMovie";
import Pricing from "./containers/Pricing";
import Login from "./containers/Login";
import About from "./containers/About";
import theme from "./themes/theme";
import NotFound from "./containers/NotFound";
import React, { useRef, useState } from "react";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="pricing"
            element={
              <>
                <Navbar />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Navbar />
                <NotFound />
                <Footer />
              </>
            }
          />
          <Route
            path="login"
            element={
              <ProtectedRoute loginOnly={false}>
                <Login />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRoute loginOnly={false}>
                <Register />
                <Footer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Navbar />
                <DetailMovie />
                <Footer />
              </ProtectedRoute>
            }
          />
                    <Route
            path="/subscribed/:plan"
            element={
              <ProtectedRoute>
                <Navbar />
                <Subscribed />
                <Footer />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
