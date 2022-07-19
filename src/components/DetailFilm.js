import { Button } from "@mui/material";
import { maxHeight } from "@mui/system";
import React from "react";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

const DetailFilm = ({ detailMovie }) => {
  return (
    <div
      className="DetailFilm"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${detailMovie?.backdrop_path}"
        )`,
        backgroundPosition: "center",
        marginTop: "40px",
        Height: maxHeight,
      }}
    >
      <div className="detailContent">
        <h1>{detailMovie.title}</h1>
        <p>{detailMovie.overview}</p>
        <Button color="danger" variant="contained">
          <PlayArrow />
          Play
        </Button>
        <Button variant="outlined">
          <InfoOutlined /> More Information
        </Button>
      </div>
    </div>
  );
};

export default DetailFilm;
