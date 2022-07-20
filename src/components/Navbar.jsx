import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from '../config/firebase'
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth)
  const navigate = useNavigate();

  const logOut = ()=> {
    signOut(auth)
    navigate('/')
  }

  const [toogle, setToogle] = useState(true);
  const toogleHandler = () => {
    setToogle(!toogle);
  };

  return (
    <>
      <Box
        sx={{
          background: "#141414",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
          zIndex:100
        }}
      >
        <Box sx={{ width: "40px" }}>
          <Link to="/">
            <img width="100%" src={logo} alt="logo" />
          </Link>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/">
              <Typography color={"white"}>Home</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/movies">
              <Typography color={"white"}>Movies</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/series">
              <Typography color={"white"}>Series</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/popular">
              <Typography color={"white"}>Popular</Typography>
            </Link>
          </Button>
          <Button>
            <Link style={{ textDecoration: "none" }} to="/trending">
              <Typography color={"white"}>Trending</Typography>
            </Link>
          </Button>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            {toogle ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "absolute",
                  top: 20,
                  right: 0,
                  paddingRight: 1,
                  zIndex: 150,
                }}
              >
                <MenuIcon
                  onClick={toogleHandler}
                  fontSize="large"
                  sx={{ color: "white" }}
                />
              </Box>
            ) : (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "end",
                  position: "absolute",
                  top: 20,
                  right: 0,
                  paddingRight: 1,
                  paddingLeft: 3,
                  paddingBottom: 3,
                  zIndex: 150,
                  bgcolor: "rgba(0,0,0,0.8)",
                }}
              >
                <CloseIcon
                  onClick={toogleHandler}
                  fontSize="large"
                  sx={{ color: "white" }}
                />
                <Box
                  onClick={toogleHandler}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    marginTop: "15px",
                    alignItems: "end",
                  }}
                >
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/">
                      <Typography color={"white"}>Home</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/series">
                      <Typography color={"white"}>Series</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/movies">
                      <Typography color={"white"}>Movies</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/popular">
                      <Typography color={"white"}>Popular</Typography>
                    </Link>
                  </Button>
                  <Button>
                    <Link style={{ textDecoration: "none" }} to="/trending">
                      <Typography color={"white"}>Trending</Typography>
                    </Link>
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {
              loading ? <Typography
              color={"white"}
              bgcolor={"red"}
              padding={0.5}
              borderRadius={"5px"}
            >
              Initializing user
            </Typography> : error ? <Typography
              color={"white"}
              bgcolor={"red"}
              padding={0.5}
              borderRadius={"5px"}
            >
              error
            </Typography> : user ? 
            <>
            <Typography
              color={"white"}
              bgcolor={"red"}
              borderRadius={"5px"}
            >
              <Button sx={{color:'white'}} onClick={logOut}>Sign Out</Button>
            </Typography>
            <Typography
              color={"white"}
              border={'1px solid white'}
              borderRadius={"5px"}
            >
              <Button sx={{color:'white'}}>{user.email.split("@")[0]}</Button>
            </Typography>
            </> :
            <>
            <PersonIcon onClick={() => navigate('/profile')} fontSize="large" sx={{color:'white', margin: 'auto'}}/>
            <Typography
              color={"white"}
              bgcolor={"red"}
              borderRadius={"5px"}
            >
              <Button sx={{color:'white'}} onClick={()=> navigate('/login')}>Sign In</Button>
            </Typography>
            <Typography
              color={"white"}
              border={"1px solid white"}
              borderRadius={"5px"}
            >
              <Button sx={{color:'white'}} onClick={()=> navigate('/register')}>Sign Up</Button>
            </Typography>
            </>
            }
            
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;







// import * as React from 'react';
// import { useState } from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// //import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// //import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import MovieFilter from '@mui/icons-material/MovieFilter'
// import {  NavLink } from 'react-router-dom';
// import UserLog from './UserLog';

// const navItems = [
//   { text: 'Home', link: '/' },
//   { text: 'Series', link: '/series' },
//   { text: 'Movies', link: '/movies' },
//   { text: 'Popular', link: '/popular' }
// ];
// //const settings = ['Profile', 'Logout'];

// const Navbar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   //const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
// //   const handleOpenUserMenu = (event) => {
// //     setAnchorElUser(event.currentTarget);
// //   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

// //   const handleCloseUserMenu = () => {
// //     setAnchorElUser(null);
// //   };

//   return (
//     <AppBar position="static" color='primary'>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <MovieFilter sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//                 {navItems.map((item) => (
//                   <MenuItem key={item.link} onClick={handleCloseNavMenu}>
//                     <Typography 
//                       textAlign="center">
//                       <NavLink 
//                         to={item.link}
//                         className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
//                       >
//                         {item.text}
//                       </NavLink>
//                     </Typography>
//                   </MenuItem>
//                   ))}
               
//             </Menu>
//           </Box>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {navItems.map((item) => (
//               <Button
//                 key={item.link}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'inherit', display: 'block', textDecoration: 'none'}}
//               >
//                 <NavLink 
//                   to={item.link}
//                   className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
//                 >
//                   {item.text}
//                 </NavLink>
//               </Button>
//             ))}
//           </Box>

//           <UserLog />
//           {/* <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="https://placekitten.com/200/300" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box> */}
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default Navbar;