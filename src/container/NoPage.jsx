import React from 'react'
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const NoPage = () => {
  return (
    <Box sx={{
        display: 'flex',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    }}>
        <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
            alt="404"
        />
        <p>page not found</p>
        <Link to="/">Take me home!</Link>
    </Box>
  )
}

export default NoPage