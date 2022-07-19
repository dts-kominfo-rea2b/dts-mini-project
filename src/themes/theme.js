import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#0576e4",
    },
    danger: {
      main: "#ff0000",
    },
    text: {
      primary: "rgba(255,255,255,0.87)",
    },
    background: {
      default: "#ff0000",
    },
  },
});

export default theme;
