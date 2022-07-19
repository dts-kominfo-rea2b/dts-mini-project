import { Box } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetail = () => {
  let params = useParams();

  let movies;
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params?.id}?api_key=ccd631bba7a9cee1d6a100b57551aeab&language=en-US`
      );
      movies = response;
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ mt: 10 }}>
      test aja <br />
      console.log(movies); 
			{`ini paramsnya: ${movies.id} ${movies?.original_title} ${movies?.overview}`}
    </Box>
  );
};

export default MovieDetail;
