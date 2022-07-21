// import { MovieFilter, EmojiEmotions, Logout } from '@mui/icons-material';
import { MovieFilter, Logout } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
// import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import DirectionsIcon from '@mui/icons-material/Directions';
// import { getAccordionDetailsUtilityClass } from '@mui/material';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [setQuery] = useState("")

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const search = () => {
    if (search === '') {
      return(('https://api.themoviedb.org/3/trending/movie/week?api_key=9125531ff6b1854ab80d9cd56441e806'));
    } else {
      alert('error')
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
              CGV LIST
            </Link>
          </Typography><Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setQuery(e.target.value)} 
            />
            <IconButton onClick={search} sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          {
            user ? <Box sx={{ display: 'flex' }}>
              <Box sx={{ padding: 1 }}>
                <Logout onClick={onLogout} />
              </Box>
            </Box>
              : ''
          }
          {/* <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
                <NavLink
                    to={item.link}
                    key={item.text}
                    className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive' }
                >
                    {item.text}
                </NavLink>
              
            ))}
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
