import { Box, Button, CardMedia, Divider, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  let params = useParams();

  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() =>{
      const fetchData = async () => {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${params?.id}?api_key=ccd631bba7a9cee1d6a100b57551aeab&language=en-US`);
          console.log("ini response: ", response.data)
          setMovieDetail(response.data);
      }
      fetchData();
  }, []);

  return (
    <>
      <Box sx={{ backgroundColor: "white", width: '100%', height: 500, display: "flex", alignItems: "center" }}>
      {/* backgroundColor: "cyan", width: '100%', height: 500, display: "flex", alignItems: "center" */}
        {/*  display: "flex", alignItems: "center", backgroundSize: 'cover', height: 500, backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path})` */}
        <Box sx={{ ml: 5, mr: 5, width: '40%'}}>
          <Typography><h3>{movieDetail.title}</h3></Typography>
          <Typography sx={{ mb: 5}}>{movieDetail.overview}</Typography>
          <Button sx={{ m: 1 }}  variant="contained">Play</Button>
          <Button sx={{ m: 1 }} variant="outlined">Description</Button>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: '100%', height: 500 }}
          image={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt="movie.jpg"
        />
        {console.log("ini movie detail: ", movieDetail) }
        
      </Box>
      <Divider/>
      <Box sx={{ m: 5 }}>
        <Typography >Description</Typography>
        <Typography><h3>{movieDetail.title}</h3></Typography>
        <Typography>{movieDetail.overview}</Typography>
      </Box>
    </>
  );
};

export default MovieDetails;
