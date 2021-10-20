import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {CgShoppingCart} from 'react-icons/cg'
import { useHistory, useParams } from 'react-router';
// import useServices from '../../../Hooks/useServices';

const ServiceDetails = () => {
    const [service,setService]=useState({});
    // const {services}=useServices();
    const {serviceKey}=useParams();
    const history=useHistory();

    // useEffect(()=>{
    //     const displayService=services?.find(service => service.key===parseFloat(serviceKey));
    //     setService(displayService)
    // },[services])
    
    useEffect(() => {
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=>{ 
        const p=data.find(p=>p.key===parseFloat(serviceKey))
        setService(p)
        })
        
        },[serviceKey])

    const handleGoBack=()=>{
        history.push('/')
    }

    return (
        <Container className='p-5' id='serviceDetail'>
        <Row className='my-5'>
            <Col md={6} className='text-start pt-2' >
                <h1 className="text-uppercase">{service?.name}</h1>
                <p className='text-muted'>{service?.shortDetail}</p>
                <p className='text-muted'>{service?.detail}</p>
                <div className='my-2'>
                    <span className='fw-bold fs-3 me-4'>PRICE: $ <span className='fw-bold'>{service?.price}</span></span>
                    <br/>
                    <span className='fs-5 mt-2'>DURATION: <span className='fs-2 fw-bold text-danger'>{service?.time}</span> month.</span>
                </div>
                <Button 
                variant="danger" 
                className='hot-btn mt-4 me-3'>
                    <CgShoppingCart className='me-1'></CgShoppingCart>
                     Book Now
                </Button>
                <Button
                onClick={handleGoBack}
                variant="warning" 
                className='hot-btn mt-4'>
                     Go back
                </Button>
            </Col>
            <Col md={6} className='align-items-center'>
                <img width='400px' className='img-fluid' src={service?.img} alt="" />
            </Col>
        </Row>
    </Container>
    );
};

export default ServiceDetails;