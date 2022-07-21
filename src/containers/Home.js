// import { Box } from '@mui/material';
import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';

// import { auth } from '../config/firebase';
import MovieList from './MovieList';

const Home = () => {
//   const [user] = useAuthState(auth);
//   console.log('user : ', user);
  return (
      <MovieList></MovieList>
    // <Box sx={{ margin: 10 }}>
    //   Welcome to Mood Meter! <br/>
    //   Current user: {user.email}
    // </Box>
  )
}

export default Home