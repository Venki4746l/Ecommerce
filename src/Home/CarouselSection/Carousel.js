import Carousel from "react-bootstrap/Carousel";
import './index.css'

function UncontrolledExample() {
  return (
    <Carousel className="carouselContainer">
      <Carousel.Item>
        <img
          className="d-block carosalimage"
          src="https://technext.github.io/eshopper/img/carousel-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block carosalimage"
          src="https://technext.github.io/eshopper/img/carousel-2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
