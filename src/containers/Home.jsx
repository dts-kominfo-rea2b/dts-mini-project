import { useAuthState } from 'react-firebase-hooks';
import { auth } from '../config/firebase' ;
import { Box } from '@mui/material';

const Home = () => {
    const [user] =useAuthState(auth);
    return (
        <Box sx={{ margin:10 }}>
            Current User: {user.email}
        </Box>
    )
}

export default Home;