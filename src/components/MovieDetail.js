import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import tmdb from '../apis/tmdb';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';



const MovieDetail = () => {
  const [movies, setMovies] = useState([]);
  const [moviesReady, setMoviesReady] = useState(false);
  const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
  
  const params = useParams();
  //console.log('ini adalah ' + params?.id );

  const url = "/movie/" + params?.id;
  
  
  // const [users, setUsers] = useState([])

  // const fetchData = async () => {
  //   const response = await tmdb.get("/movie/"+params?.id);
  //   const data = await response.json()
  //   setUsers(data)
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])



  useEffect(() => {
      const fetchMovies = async () => {
          try {
              
              const fetchedMovies = await tmdb.get(url);
              setMovies(fetchedMovies.data);
              setMoviesReady(true);
              
          } catch (error) {
              console.log(error);
          }
      }

      fetchMovies();
  }, [url]);
  console.log(movies)
  const navigate = useNavigate();
  const budgetX = parseInt(movies.budget).toLocaleString('id-ID');
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Card sx={{ maxWidth: '50%',mt:7,mb:5,flexDirection: 'column' }} display={'flex'}>

        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            width="200"
            image={ BASE_IMAGE_URL + movies.poster_path}
            alt={movies.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {movies.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {movies.overview}
            
            <MDBTable borderless>
              
              <MDBTableBody>
                <tr>
                  <td>Date Release</td>
                  <td>:</td>
                  <td>{movies.release_date}</td>
                  
                </tr>
                <tr>
                  <td>Budget</td>
                  <td>:</td>
                  <td>$ {budgetX}</td>
                  
                </tr>
                <tr>
                  <td>Original_language</td>
                  <td>:</td>
                  <td>{movies.original_language}</td>
                  
                </tr>
                <tr>
                  <td>Popularity</td>
                  <td>:</td>
                  <td>{movies.popularity}</td>
                  
                </tr>
                {/* <tr>
                  <td>Production Countries</td>
                  <td>:</td>
                  <td>{movies.production_countries[0].name}</td>
                  
                </tr> */}
                <tr>
                  <td>Runtime</td>
                  <td>:</td>
                  <td>{movies.runtime} Minutes</td>
                  
                </tr>
              </MDBTableBody>
            </MDBTable>
            <table>
              <thead></thead>
            </table>
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={()=>navigate('/')}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MovieDetail;