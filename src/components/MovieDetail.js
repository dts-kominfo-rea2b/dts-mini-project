import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import theme from '../themes/theme';
import Grid from '@mui/material/Grid'

// import { auth } from '../config/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
const MovieDetail = () => {
    const location = useLocation();
    const movies = location.state.movies;
    let genre = [];
    let lg = [];
    const genres = () => {
        movies.genres.forEach(el => {
            genre.push(el.name);
        });
        return genre.toString();
    }
   
    const lang = () => {
        movies.spoken_languages.forEach(e => {
            lg.push(e.name);
        })
        return lg.toString();
    }
    console.log(movies);
    // const [movies, setMovies] = useState([]);
    // const fetchData = async () => {
    //     const response = await axios.get(`https://api.themoviedb.org/3/movie/${location.state.id}?api_key=9125531ff6b1854ab80d9cd56441e806`)
    //     setMovies(response.data);
    //     console.log(response.data);
    // }

    // useEffect(() => {

    //     fetchData();
    // }, [])

    return (
        <>
            <ThemeProvider theme={theme}>
                <Navbar></Navbar>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mt: 5
                    }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'start',
                        
                    }}>
                        <Card id={movies.id} sx={{ display: 'flex', maxWidth: 20000, margin: 5 }}>
                            <CardMedia
                                component="img"
                                sx={{ maxWidth: 2000, height: 255 }}
                                image={`${BASE_IMAGE_URL}${movies.backdrop_path}`}
                                alt="Fantastic Beast"
                            />
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h6">
                                        {movies.title}
                                    </Typography>
                                    <Box sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={0}>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Genre
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {genres()}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Release
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {movies.release_date}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Duration
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {movies.runtime} Minutes
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Production Countries
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {movies.production_countries[0].name}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Language
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {lang()}
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    Rating
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                                    {movies.vote_average.toFixed(1)}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </CardContent>
                            </Box>
                        </Card>
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'start',
                        marginLeft: 5
                    }}>
                        <h3>Sinopsis</h3>
                        <p></p>
                        <Grid container spacing={0}>
                            <Grid item xs={8}>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {movies.overview}
                                </Typography>
                                
                            </Grid>
                        </Grid>
                    </Box>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                    }}>
                    
                    </Box>
                </Box>
                <Footer></Footer>

            </ThemeProvider>
        </>
    );
}


export default MovieDetail;
