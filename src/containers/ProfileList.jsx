import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Box, CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography';

const profileAvatar = [
    {
        name:'Murat',
        avatar:'https://i.postimg.cc/MHs8SS69/ava-1.png'
    },
    {
        name:'Umut',
        avatar:'https://i.postimg.cc/QN6LVjDb/ava-2.png'
    },
    {
        name:'Kemal',
        avatar:'https://i.postimg.cc/RVqkH2Vz/ava-3.png'
    },
    {
        name:'Cocuk',
        avatar:'https://i.postimg.cc/25NMg6dz/ava-4.png'
    },
    {
        name:'Other',
        avatar:'https://i.postimg.cc/rwr7hWrn/ava-5.png'
    }
]

const ProfileList = () => {
    return (
        <Box sx={
            {
                display: 'flex',
                flexDirection: 'flow',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }
        }>
            {
                profileAvatar.map(profile => (
                    <Card sx={{ 
                        maxWidth: 500, 
                        margin:'0.75em' }}>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            height="160"
                            image={profile.avatar}
                            alt={`Avatar of ${profile.name}`}
                            sx={{ paddingBottom:'1em' }}
                          />
                            <Typography variant="body2" color="text.secondary" sx={{ paddingBottom:'1em' }}>
                                {profile.name}
                            </Typography>
                        </CardActionArea>
                    </Card>
                ))
            }
        </Box>
    )
}


export default ProfileList;