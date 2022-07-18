import { Box } from '@mui/material'
import * as React from 'react'
import { useParams } from 'react-router-dom'

const Subscribed = () => {
  const params = useParams();

  return (
    
        <Box sx={{mt:10, ml:30}}>
            <p>Thanks For subcribed!
            Your Plan : {params?.plan } </p>
        </Box>
    
  )
}

export default Subscribed;