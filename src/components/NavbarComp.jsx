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

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar>
        <Toolbar>
          <Link to="/">
            <img
              src={Movie}
              alt="movie-logo"
              style={{ height: "44px", width: "36px", marginRight: "200px" }}
            />
          </Link>
          <Box sx={{ display: "block" }}>
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
          <Box sx={{ flexGrow: 1 }} />
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
            sx={{ marginX: 3 }}
          >
            <CardGiftcardIcon />
          </IconButton>

          <IconButton
            size="small"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
            sx={{ marginRight: 2 }}
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
    </Box>
  );
};

export default NavbarComp;
