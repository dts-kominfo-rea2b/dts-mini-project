import {
  AppBar,  Box,
  Button,  IconButton,
  SvgIcon,  Toolbar,
  Typography,
} from "@mui/material";
import { ReactComponent as Logo } from "../static/logo.svg";

const navItems = [
  { name: "Movie Detail", link: "/" },
  { name: "Register", link: "/register" },
  { name: "Login", link: "/login" },
  { name: "Logout", link: "/logout" },
];

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <SvgIcon component={Logo} inheritViewBox sx={{ mr: 5 }} />
          {navItems.map((item) => {
            <Button key={item.name}>{item.name}</Button>;
          })}
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
