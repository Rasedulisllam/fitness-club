import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import {BsStopwatch} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-main'>
            <Container>
                <Row>
                    <Col md={4} className='text-start px-5 '>
                        <h2>About</h2>
                        <p className='text-muted'>Yoga does not remove us from the reality or responsibilities of everyday life but rather places our feet firmly.</p>
                        <h2>Recent post</h2>
                        <span className='text-muted'>The do’s and don’ts of running for fitness</span>
                        <br/>
                        <span className='text-muted '>August 1, 2021</span>
                        <p className='text-muted mb-0 mt-2'>Sed rhoncus nulla turpis, vitae rutrum velit iaculis et. Curabitur vestibulum,</p>
                        <Button variant='link' className='text-danger m-0 p-0'>Read more</Button>
                    </Col>

                    <Col md={4} className=' px-5 mt-md-0 mt-5 '>
                        <h2>opening hours</h2>
                        <ListGroup variant="flush" className='bg-transparent'>
                            <ListGroup.Item className='bg-transparent text-white d-flex justify-content-between  '>
                                <span>
                                    <BsStopwatch style={{color:'aqua',marginRight:'.3rem'}}/>
                                    Monday</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent text-white d-flex justify-content-between'>
                                <span>
                                    <BsStopwatch
                                    style={{color:'aqua',marginRight:'.3rem'}}/>
                                    Wednesday</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent text-white d-flex justify-content-between'>
                                <span>
                                    <BsStopwatch
                                    style={{color:'aqua',marginRight:'.3rem'}}/>
                                    Friday</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent text-white d-flex justify-content-between'>
                                <span>
                                    <BsStopwatch
                                    style={{color:'aqua',marginRight:'.3rem'}}/>
                                    Saturday</span>
                                <span>9:00 AM - 8:00 PM</span>
                            </ListGroup.Item>
                            <ListGroup.Item className='bg-transparent text-white d-flex justify-content-between'>
                                <span>
                                    <BsStopwatch
                                    style={{color:'aqua',marginRight:'.3rem'}}/>
                                    Sunday</span>
                                <span>closed</span>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={4} className='text-start  mt-md-0 mt-5  px-5'>
                        <h2>contact info</h2>
                        <p>210,green-road,Dhaka</p>
                        <p>Email: <span className='text-danger'>fitnessclub@gmail.com</span></p>
                        <ul className='footer-social'>
                            <li>follow us:</li>
                            <li>
                                <BsFacebook></BsFacebook>
                            </li>
                            <li>
                                <BsTwitter></BsTwitter>
                            </li>
                            <li>
                                <BsYoutube></BsYoutube>
                            </li>
                            <li>
                                <BsInstagram></BsInstagram>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            <div className='bg-dark p-2 mt-2'>
                <h5 className='text-danger'>&copy;Copyright 2021.</h5>
            </div>
        </div>
    );
};

export default Footer;