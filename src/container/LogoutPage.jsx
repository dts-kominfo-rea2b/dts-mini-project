import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import ListItemText from "@mui/material/ListItemText";

const LogoutPage = ({ onLogout }) => {
  return (
    <List component="div" disablePadding sx={{ backgroundColor: "white" }}>
      <ListItemButton onClick={onLogout}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </List>
  );
};

export default LogoutPage;
