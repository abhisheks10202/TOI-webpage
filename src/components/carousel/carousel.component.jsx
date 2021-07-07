import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/2.jpg';
import image3 from '../../assets/images/3.jpg';

import './carousel.styles.scss';

const CarouselContainer = () => {
    return(
        <Carousel controls={false} pause={false} className="carousel">
            <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                />
            </Carousel.Item>
        <Carousel.Item interval={2000}>
                <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
            />
        </Carousel.Item>
</Carousel>
    );
}

export default CarouselContainer;