import React from "react"; 
import Carousel from 'react-bootstrap/Carousel';
//import Button from "react-bootstrap/Button";
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";

function HomeImageCarousel() {
  return (
    <div className="carousel-container">
        <Carousel>
            <Carousel.Item interval={3000}>
                <img
                    className="carousel-image"
                    src={Image1}
                    alt="First slide"
                />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carousel-image"
                    src={Image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carousel-image"
                    src={Image3}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <img
                    className="carousel-image"
                    src={Image4}
                    alt="Fourth slide"
                />
            </Carousel.Item>
        </Carousel>
        <div className="overlay">
            <h1>
                Serve your community
            </h1>
            <h4>
                ServiceSquad connects you to service opportunities right within your own community.
            </h4>
            <button className="button">Get Started</button>
        </div>
    </div>
  );
}

export default HomeImageCarousel;