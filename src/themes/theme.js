import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    type: "dark",
    primary: {
      main: "#141414",
    },
    secondary: {
      main: "#EFCA08",
    },
  },
});

export default theme;
