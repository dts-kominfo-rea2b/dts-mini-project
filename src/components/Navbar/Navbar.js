import React from "react";
import {Search} from '@mui/icons-material';
import './Navbar.css';
import logo from './image 3.png'
import { NavLink } from "react-router-dom";
// import UserLog from "./UserLog";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <img src={logo} alt=''></img>
          <NavLink to='/' style={{color: 'inherit', textDecoration: 'none' }}>Home</NavLink>
          <NavLink to='/movies' style={{color:'white', textDecoration: 'none'}}>Movies</NavLink>
          <NavLink to='/series' style={{color:'white', textDecoration: 'none'}}>Series</NavLink>
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
