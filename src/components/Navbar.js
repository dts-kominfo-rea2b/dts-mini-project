import { Logout, MovieFilter } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { signOut } from 'firebase/auth';
import * as React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { auth } from '../config/firebase';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));





const navItems = [{
    name:'Indonesian',
    link: "/indonesian"
  }, 
  {
    name: 'Pricing',
    link : "/pricing"
  }, 
  {
    name :'About',
    link : "/about"  
  }
];

const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    
    const [inputText, setInputText] = React.useState("");
    const searchHandler = (e) => {
        //convert input text to lower case
        
        var lowerCase = e.target.value.toLowerCase();
        let keyword = lowerCase.replace(" ","+")
        setInputText(keyword);
        navigate(`/search/${keyword}`);
        console.log(keyword);
      }

    return (
        <Box sx={{ display: 'flex',mt:5,ml:5 }}>
            <AppBar component="nav" sx = {{ background: '#101437' }}>
                <Toolbar>
                    <MovieFilter sx={{ display: 'flex', mr: 1 }} />
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{
                        flexGrow: 1,
                        display: 'block',
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        }}
                    >
                        <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
                            FilmKU
                        </Link>
                    </Typography>


                    <Box sx={{ display: 'block' }}>
                        {navItems.map((item) => (
                        <NavLink 
                            key={item.link} 
                            to={item.link} 
                            className={({isActive}) => isActive ? "NavBar-active" : "NavBar-inactive"}
                        >
                            {item.name}
                        </NavLink>

                        // <Button key={item} sx={{ color: '#fff' }}>
                        //   {item.name}
                        // </Button>
                        ))}
                    </Box>

                    <Search>
                        <SearchIconWrapper>
                        <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={searchHandler}
                        />
                    </Search>

                    <Box sx={{ display: 'flex' }}>
                        
                        <Box sx={{ padding: 1 }}>
                            <Logout onClick={onLogout} />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
}

export default Navbar;
