import React, {useState} from 'react'
import { IconButton, Menu, MenuItem } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import {NavLink, useNavigate} from 'react-router-dom';
import {useAuthState} from 'react-firebase-hooks/auth';
import {signOut} from 'firebase/auth';

const UserLog = () => {
  const navigate = useNavigate();
  const [user] = useAuthState();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.curruntTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = async () => {
    try {
      await signOut();
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (user ?
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle/>
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>{user.email}</MenuItem>
        <MenuItem onClick={onLogout}>Logout</MenuItem>
      </Menu>
    </> :
  <NavLink to={'/login'} key={'login'}
    className={({isActive}) => isActive ? 'nav-active' : 'nav-inactive'}>
    Login
  </NavLink>
 )
}

export default UserLog;