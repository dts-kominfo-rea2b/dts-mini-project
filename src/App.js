import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { ThemeProvider } from "@mui/material";
import theme from "./themes/theme";
import Home from "./pages/Home";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React, { useState, useEffect } from "react";
import app from "./config/firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearError = () => {
    setEmailError("");
    setPasswordError("");
  };

  const navigate = useNavigate();

  const handleLogin = () => {
    clearError();
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleSignup = () => {
    clearError();
    createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      switch (err.code) {
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break;
      }
    });
  };

  const handleLogout = () => {
    signOut(auth);
  };

  useEffect(() => {
    authListener();
  }, []);

  const authListener = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        clearInputs();
        setUser(user);
        navigate("/");
      } else {
        setUser("");
      }
    });
  };
  console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route
            path="/login"
            element={
              // <ProtectedRoute loginOnly="true">
              <Login
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
              />
              // </ProtectedRoute>
            }
          />

          <Route
            path="/"
            element={<Home handleLogout={handleLogout} user={user} />}
          />

          <Route
            path="*"
            element={
              <Box sx={{ mt: 10 }}>Erorr 404 (Halaman Belum Tersedia)</Box>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;
