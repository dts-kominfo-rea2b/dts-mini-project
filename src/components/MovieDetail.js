import React from "react";

const MovieDetail = ({ data }) => {
  const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="detail-movie-poster">
        <div className="detail-movie-poster-contain">
          <h1>{`${data.title} (${data.release_date?.split("-")[0]})`}</h1>
          <div className="truncate">
            <p>{data.overview}</p>
          </div>
          <div className="button-group">
            <button className="play-button">
              <img src="/play-button.png" className="play-icon" alt="" />
              <span
                className="play-button-text"
                style={{ paddingLeft: "15px" }}
              >
                Play
              </span>
            </button>
            <button className="info-button">
              <img
                src="/more-information.png"
                alt=""
                className="info-icon"
                style={{ width: "15px" }}
              />
              <span
                className="info-button-text"
                style={{ paddingLeft: "15px" }}
              >
                More Information
              </span>
            </button>
          </div>
        </div>

        <img
          className="detail-movie-poster-image"
          src={`${BASE_IMAGE_URL}${data.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="detail-movie-description">
        <h3>Description</h3>
        <p>{data.overview}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
