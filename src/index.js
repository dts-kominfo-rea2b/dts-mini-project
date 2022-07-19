import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedComponent from "./components/ProtectedComponent";
import ProtectedLogin from "./components/ProtectedLogin";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedComponent>
              <App />
            </ProtectedComponent>
          }
        >
          <Route
            path="/"
            element={
              <ProtectedComponent>
                <Home />
              </ProtectedComponent>
            }
          />
          <Route
            path="movies"
            element={
              <ProtectedComponent>
                <Movies />
              </ProtectedComponent>
            }
          />
          <Route
            path="series"
            element={
              <ProtectedComponent>
                <Series />
              </ProtectedComponent>
            }
          />
        </Route>
        <Route
          path="login"
          element={
            <ProtectedLogin>
              <Login />
            </ProtectedLogin>
          }
        />
        <Route
          path="register"
          element={
            <ProtectedLogin>
              <Register />
            </ProtectedLogin>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
