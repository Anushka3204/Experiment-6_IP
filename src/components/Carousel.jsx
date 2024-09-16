// src/components/Carousel.js
import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarouselComponent() {
    return (
        <Carousel id="home">
            <Carousel.Item>
                <img src="./file.png" className="d-block w-100" alt="Campus Image 1" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="./file1.jpg" className="d-block w-100" alt="Campus Image 2" />
            </Carousel.Item>
            <Carousel.Item>
                <img src="./file.png" className="d-block w-100" alt="Campus Image 3" />
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselComponent;
