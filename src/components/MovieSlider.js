import React from "react";
import Slider from "react-slick";

export const MovieSlider = ({ data, title, original }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
  };


  const movies = data;

  return (
    <div className="container">
      <p className="list-title">{title ? title : "Unamed List"}</p>
      <Slider {...settings}>
        {movies.map((e, i) => {
          return (
            <div key={i}>
              <a href="/www.google.com">
                <img
                  className={original ? "original" : "list"}
                  src={e.url}
                  alt="Credit to Cristina Gottardi on Unsplash"
                />
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default MovieSlider;
