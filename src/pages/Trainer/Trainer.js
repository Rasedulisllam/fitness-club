import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import {BsFacebook} from 'react-icons/bs'
import {BsYoutube} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Trainer = (props) => {
    const {name,details,spealist,img}=props.trainer
    return (
        <div>
            <Row className='mb-5'>
                <Col md={6} className='text-start py-5'>
                    <h2>{name}</h2>
                    <p className='text-warning'>{spealist}</p>
                    <p className='text-muted'>{details}</p>
                    <ul className='footer-social fs-5'>
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
                        <Button variant='outline-danger'>Book a course</Button>
                </Col>
                <Col md={6} className='overflow-hidden' style={{height:'400px'}}>
                    <img width='100%' height='70%' className='img-fluid' src={img} alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default Trainer;