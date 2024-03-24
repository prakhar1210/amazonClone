import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import "./Carousel.css";
import Grocery1 from "../Albums/magento-grocery-website-1200x894.png";
import Grocery2 from "../Albums/Online-Grocery-website-design-and-development-agency-in-UK.jpg";
import Laptop from "../Albums/d53a7d37095353.573443ff6e8a8.png";

const HeroCarousel = () => {
    return (
        <div className='heroCauroselMainContainer'>
            <Carousel className='carousel-inner' >
                <Carousel.Item>
                    <img
                        className="caruselImage"
                        src={Grocery1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={Grocery2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 h-100"
                        src={Laptop}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default HeroCarousel;
