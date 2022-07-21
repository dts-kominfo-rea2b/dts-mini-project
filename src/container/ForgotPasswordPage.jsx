import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { sendPasswordResetEmail } from 'firebase/auth';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../config/firebase';
import backgroundImage from '../assets/ProfilePicture.jpg';

const ForgotPasswordPage = () => {
  const [successMessage, setSuccessMessage] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");

    try {
      await sendPasswordResetEmail(auth, email);
      setErrorMessage("");
      setSuccessMessage("a password reset email has been sent to " + email);
    } catch (error) {
      setSuccessMessage("");
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
      <Container component='main' maxWidth='xs'
        sx={{ flex: 1, maxWidth: "100% !important", backgroundColor: "transparent" }}
      >
        <Box
          sx={{
            mt: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='EMAIL'
              name='email'
              autoComplete='email'
              autoFocus
              sx={{ letterSpacing: "0.1em" }}
              InputLabelProps={{ required: false }}
            />
            <Typography color='blue'>{successMessage}</Typography>
            <Typography color='red'>{errorMessage}</Typography>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              size="large"
              sx={{ mt: 3, mb: 2, backgroundColor: '#E50913', color: "#A9A9A9" }}
            >
              Send Password Reset Link
            </Button>
            <Grid container>
              <Grid item>
                <Link className="text-white" to='/login'>{"Sign in"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default ForgotPasswordPage