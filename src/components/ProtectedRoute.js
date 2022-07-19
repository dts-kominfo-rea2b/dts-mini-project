import app from "../config/firebase";
import { getAuth, currentUser } from "firebase/auth";
import React from "react";
import { NavLink } from "react-router-dom";

const ProtectedRoute = ({ children, loginOnly = true }) => {
  const Auth = getAuth(app);
  const user = Auth.currentUser;

  if (!user) {
    return <NavLink to="/" />;
  }
  if (!user) {
    return <NavLink to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
