
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Benner.css'


const Benner = () => {
    
    return (
            <Carousel fade className='slider'>
                <Carousel.Item className='slider-item'>
                    <img
                    className="d-block w-100 slider-img"
                    src=" https://i.ibb.co/wN95vNk/pexels-andrea-piacquadio-3772502.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className='slider-content'>
                        
                        <h1 className='text-uppercase w-50 mx-auto fw-bold'>Regular yoga can provide health benefits</h1>
                        <p className='w-75 mx-auto mt-3'>It’s well documented that weight-bearing exercise strengthens bones and helps ward off osteoporosis. Many postures in yoga require that you lift your own weight.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider-item'>
                    <img
                    className="d-block w-100 slider-img"
                    src="https://i.ibb.co/L5VTXwN/weight-lifting-g473ed8eba-1920.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption className='slider-content'>
                    <h1 className='text-uppercase w-50 mx-auto fw-bold'>Reach your goal at fitness-gure</h1>
                    <p className='w-75 mx-auto mt-3'>It’s well documented that weight-bearing exercise strengthens bones and helps ward off osteoporosis. Many postures in yoga require that you lift your own weight.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='slider-item'>
                    <img
                    className="d-block w-100 slider-img"
                    src="https://i.ibb.co/mhWWXKf/man-g5d74bd3ed-1920.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption className='slider-content'>
                    <h1 className='text-uppercase w-50 mx-auto fw-bold'>Reach your goal at fitness-gure</h1>
                    <p className='w-75 mx-auto mt-3'>It’s well documented that weight-bearing exercise strengthens bones and helps ward off osteoporosis. Many postures in yoga require that you lift your own weight.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
    );
};

export default Benner;