import React from "react";
import Slider from "react-slick";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "0px",
        display: "flex",
        minHeight: "90%",
        minWidth: "18%",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "0px",
        position: "absolute",
        zIndex: 100,
        display: "flex",
        minHeight: "90%",
        minWidth: "18%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      onClick={onClick}
    />
  );
}

export const MovieCarousel = ({ data }) => {
  const settings = {
    centerMode: true,
    infinite: true,
    centerPadding: "220px",
    slidesToShow: 1,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  const movies = data;

  return (
    <div style={{ marginTop: "3%", marginBottom: "3%" }}>
      <Slider {...settings}>
        {movies.map((e, i) => {
          return (
            <div key={i}>
              <a href="/www.google.com">
                <img
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
