import {
  AppBar,  Box,
  Button,  IconButton,
  SvgIcon,  Toolbar,
  Typography, Drawer
} from "@mui/material";
import Logo from "../static/logo.svg";
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import useAuth from '../hooks/useAuth';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const navigate = useNavigate();
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  const { user } = useAuth();

  const isLogin = user ? true : false

  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static" component="nav">
    //     <Toolbar>
    //       <SvgIcon component={Logo} inheritViewBox sx={{ mr: 5 }} />
    //       <Button key="Home" component={Link} to="/" variant="contained" color="primary">Home</Button>
    //       {!isLogin && <Button key="Register" component={Link} to="/register" variant="contained" color="primary">Register</Button>}
    //       {!isLogin && <Button key="Login" component={Link} to="/login" variant="contained" color="primary">Login</Button>}
    //       {isLogin && <Button key="Logout" onClick={handleLogout} i component={Link} to="/" variant="contained" color="primary">Logout</Button>}
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar  sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
            </IconButton>
            <img src={Logo} alt="broken image" style={{width: "30px"}}/>
          </div>
          
          <div>
            <Button key="Home" component={Link} to="/" variant="contained" color="primary">Home</Button>
            {!isLogin && <Button key="Register" component={Link} to="/register" variant="contained" color="primary">Register</Button>}
            {!isLogin && <Button key="Login" component={Link} to="/login" variant="contained" color="primary">Login</Button>}
            {isLogin && <Button key="Logout" onClick={handleLogout} i component={Link} to="/" variant="contained" color="primary">Logout</Button>}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
