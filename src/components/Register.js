import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const Register = () => {
    return (
        <div>
            <form>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={"center"}
                    margin="auto"
                    marginTop={5}
                    padding={3}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc",
                        },
                    }}
                >
                    <Typography variant="h3" padding={3} textAlign={"center"}>
                        Sign Up
                    </Typography>
                    <TextField
                        margin="normal"
                        type={"text"}
                        variant="outlined"
                        placeholder="Username"
                    />
                    <TextField
                        margin="normal"
                        type={"email"}
                        variant="outlined"
                        placeholder="Email"
                    />
                    <TextField
                        margin="normal"
                        type={"password"}
                        variant="outlined"
                        placeholder="Password"
                    />
                    <Button
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant="contained"
                        color="warning"
                    >
                        Sign Up
                    </Button>

                    <Typography>
                        Sudah Punya akun ? <Button href="/login" sx={{ borderRadius: 3 }}>Login</Button>
                    </Typography>
                </Box>
            </form>
        </div>
    );
};

export default Register;
