import React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Movie from "../assets/movie-icon.png";
import Profile from "../assets/ProfileIMG.png";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { Link, NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import NotificationsIcon from "@mui/icons-material/Notifications";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import LogoutPage from "../container/LogoutPage";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Alert } from '@mui/material';

const navItems = [
  { text: "Home", link: "/home" },
  { text: "Series", link: "/series" },
  { text: "Movies", link: "/movies" },
  { text: "New and Popular", link: "/new-and-popular" },
  { text: "My List", link: "/my-list" },
];

const NavbarComp = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            return (
                <Alert severity="error">{err}</Alert>
            );
        }
    };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img
              src={Movie}
              alt="movie-logo"
              style={{ height: "44px", width: "36px", marginRight: 40 }}
            />
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: { xs: "none", md: "center" },
            }}
          >
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-inactive"
                }
              >
                {item.text}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Box>

          <IconButton
            size="small"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            sx={{ marginRight: 2 }}
          >
            <CardGiftcardIcon />
          </IconButton>

          <IconButton
            size="small"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <NotificationsIcon />
          </IconButton>

          <List>
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <img
                  src={Profile}
                  alt="profile-img"
                  style={{ height: "35px", width: "35px" }}
                />
              </ListItemIcon>
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </List>
        </Toolbar>
      </AppBar>
      <Collapse in={open} timeout="auto">
        <LogoutPage onLogout={onLogout}/>
      </Collapse>
    </Box>
  );
};

export default NavbarComp;
