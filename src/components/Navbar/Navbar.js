import React from "react";
import {Search} from '@mui/icons-material';
import './Navbar.css';
import logo from './image 3.png'
// import UserLog from "./UserLog";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={logo} alt=''></img>
          <span>Home</span>
          <span>Movies</span>
          <span>Series</span>
        </div>
        <div className="right">
          <Search />
          {/* <UserLog/> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
