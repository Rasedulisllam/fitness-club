import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import Service from '../home/Service/Service';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])

    
    return (
        <div>
            <SectionHeader>Our Services</SectionHeader>
            <Container className='my-5'>
                <Row xs={1} md={3} className="g-0 gy-1">
                    {
                        services.map(service => <Service service={service} key={service.key}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;