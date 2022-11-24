import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../assets/carousel1.webp';
import Carousel2 from '../assets/carousel2.webp';
import carousel from '../assets/carousel3.webp'

function Carousel() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We sell incredibly fresh produce</h3>
          <p>Fresh fruits and vegetables are an important part of a healthy diet. They contain essential vitamins, minerals, and other nutrients that are essential for good health.</p>
          <Button variant="success">Start Shopping</Button>
          {/* <div class>

          </div> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Carousel2}
          alt="Second slide"
        />

        
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={Carousel1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carousel}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel;