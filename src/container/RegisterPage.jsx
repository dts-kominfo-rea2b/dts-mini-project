import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import backgroundImage from '../assets/ProfilePicture.jpg';

const RegisterPage = () => {
  const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <Container sx={{
                display: "flex",
                flexWrap: "wrap",
                margin: 0,
                minWidth: "100%",
                height: "100vh",
                paddingLeft: "0 !important",
                paddingRight: "0 !important",
                backgroundImage: "linear-gradient(to left, #000000, #D9D9D9)"
            }}>
            <Box sx={{ flex: 1, backgroundImage: `url(${backgroundImage})` }}></Box>
            <Container component="main" maxWidth="xs"
                sx={{ flex: 1, maxWidth: "100% !important", backgroundColor: "transparent" }}
            >
                <Box
                    sx={{
                        mt: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="EMAIL"
                                    name="email"
                                    autoComplete="email"
                                    sx={{ letterSpacing: "0.1em" }}
                                    InputLabelProps={{ required: false }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="PASSWORD"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    sx={{ letterSpacing: "0.1em" }}
                                    InputLabelProps={{ required: false }}
                                />
                            </Grid>
                        </Grid>
                        <Typography color='red'>{errorMessage}</Typography>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            size="large"
                            sx={{ mt: 3, mb: 2, backgroundColor: '#E50913', color: "#A9A9A9" }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link className="text-white" to="/login">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Container>
    );
}

export default RegisterPage