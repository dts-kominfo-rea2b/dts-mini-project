import React from 'react';
import {Link} from 'react-router-dom';

import './Footer.css';
import bg from "./footer-bg.jpg";
import logo from "./image 3.png";


const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-logo'>
          <Link to="home">
            {<img src={logo} alt=''/>}
          </Link>
        </div>
        <div className='footer-menu'>
            <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Home</Link>
            <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Contact us</Link>
            <Link to="/" style={{color: 'white', textDecoration: 'none'}}>Term of Services</Link>
            <Link to="/" style={{color: 'white', textDecoration: 'none'}}>About Us</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer;