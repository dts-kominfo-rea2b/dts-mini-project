import * as React from 'react';
import { MovieFilter } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { NavLink, useNavigate } from 'react-router-dom'
import { auth } from '../config/firebase'
import { signOut } from 'firebase/auth';

const pages = [
    { text: 'Movies', link: '/movies' },
    { text: 'TV Shows', link: '/tv-shows' },
    { text: 'About', link: '/about' },
    { text: 'Profile', link: '/profile' }
];

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/sign-in')

    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }
  
  return (
    <Box sx={{ 
        display: 'flex', 
        justifyContent: 'flex-start',
        flexGrow:1
        }}>
      <AppBar component="nav" position='static'>
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              justifyContent:'flex-start',
              mr:'0.25em'
            }}
          >
            <NavLink sx={{ 
              color: 'inherit', 
              textDecoration: 'inherit'}}
                     to='/' className={({ isActive }) => isActive? 'nav-active' : 'nav-inactive'}
            >
              FakeFlix
            </NavLink>
          </Typography>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'flex-start',
            flexGrow: 2
            }}>
            {pages.map((page) => (
              <Button variant='contained' sx={{mr:'1em', boxShadow:'none'}}>
                <NavLink
                to={page.link}
                className={({ isActive }) => isActive? 'nav-active' : 'nav-inactive'}
                >
                {page.text}
                </NavLink>
              </Button>
            ))}
          </Box>
          <Search sx={{mr:'1em'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
           </Search> 
          <IconButton size="large" aria-label="logout" color="inherit" onClick={onLogout}>
            <AccountCircleIcon />
          </IconButton>  
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;