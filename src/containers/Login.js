import * as React from "react";
import { Typography, TextField, Box, Button, Link } from "@mui/material";

export default function Login() {
  return (
    <Box
      component="form"
      sx={{
        border: "1px solid black",
        bgcolor: "white",
        width: 400,
        height: 400,
        margin: "auto",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
      autoComplete="off"
    >
      <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>Login</Typography>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="password" variant="outlined" type="password" />
      <Button color="inherit" variant="contained" type="submit">
        Login
      </Button>
      <Link align="center" sx={{ margin: 5 }} href="/register" underline="hover">
        {"Belum punya Akun? Register Sekarang"}
      </Link>
    </Box>
  );
}