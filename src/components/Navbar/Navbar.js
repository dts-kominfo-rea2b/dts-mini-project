import React from "react";
import {Search} from '@mui/icons-material';
import './Navbar.css';
// import UserLog from "./UserLog";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
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
