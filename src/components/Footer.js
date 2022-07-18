import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React from "react";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';


const Footer = () => {
    // const Div = styled('div')(({ theme }) => ({
    //     ...theme.typography.button,
    //     backgroundColor: '#101437',
    //     padding: theme.spacing(1),
    //     color:"white",
    //     textAlign:"center",
    //     bottom:0
    //     }));    
    return (
        <Box sx={{ }} className="footer">
            <p>{"Copyright 2022 @Dedy Pratama"}</p>
        </Box>
    );
    };
export default Footer;
