import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import backgroundImage from '../assets/ProfilePicture.jpg';

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const email = data.get('email');
      const password = data.get('password');

      try {
          await signInWithEmailAndPassword(auth, email, password);
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
          <Box
            component='form'
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, flex: 1 }}
          >
            <TextField
              variant='outlined'
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
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='PASSWORD'
              type='password'
              id='password'
              autoComplete='current-password'
              sx={{ letterSpacing: "0.1em" }}
              InputLabelProps={{ required: false }}
            />
            <Typography color='red'>{errorMessage}</Typography>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              size="large"
              sx={{ mt: 3, mb: 2, backgroundColor: '#E50913', color: "#A9A9A9" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link className="text-white" to='/register'>{"Don't have an account? Sign Up"}</Link><br />
                <Link className="text-white" to='/forgot-password'>{"Forgot Password"}</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default LoginPage