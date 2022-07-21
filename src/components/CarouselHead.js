import Carousel from 'react-bootstrap/Carousel';
import gbSatu from '../img/1.jpg';
import gbDua from '../img/2.jpg';
import gbTiga from '../img/3.jpg';

function CarouselHead() {
  return (
    <Carousel className="carouselStyling">
      <Carousel.Item>
        <img
          className="d-block w-100 fittingImage"
          src={gbSatu}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Watch Movie Every Time</h3>
          <p>With Family and Enjoy Your Time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fittingImage"
          src={gbDua}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Watch Movie Every Time</h3>
          <p>With Family and Enjoy Your Time</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 fittingImage"
          src={gbTiga}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Watch Movie Every Time</h3>
          <p>With Family and Enjoy Your Time</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHead;