import { Search, Notifications, KeyboardArrowDown } from "@mui/icons-material";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import * as React from "react";
import logo from "../logo.png";
import img_id from "../img/angrybird.jpg";
import { Button } from "@mui/material";

const Navbar = ({ handleLogout, user }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={logo} alt="logo" className="logo"></img>
          <span>Home</span>
          <span>Series</span>
          <span>Movie</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        {user ? (
          <div className="right">
            <Search className="navIcon"></Search>
            <span>{user.email}</span>
            <Notifications className="navIcon"></Notifications>
            <img src={img_id} alt="img_id" className="img_id" />
            <div className="profile">
              <KeyboardArrowDown className="navIcon"></KeyboardArrowDown>
              <div className="option">
                <span onClick={handleLogout}>Logout</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="right">
            <Button color="danger" href="/login">
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
