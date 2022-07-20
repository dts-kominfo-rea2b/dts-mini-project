import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = React.createContext({
  token: "",
  useremail: "",
  setLogin: (token, useremail) => {},
  logout: () => {},
});

const AuthContextProvider = (props) => {
  const [authToken, setAuthToken] = useState(localStorage.getItem("token"));
  const [authEmail, setAuthEmail] = useState(localStorage.getItem("useremail"));

  const setLoginHandler = (token, useremail) => {
    setAuthToken(token);
    setAuthEmail(useremail);
  };

  const logoutHandler = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("useremail");
      setTimeout(() => {
        document.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = {
    token: authToken,
    useremail: authEmail,
    setLogin: setLoginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
