import React, { useEffect, useState } from 'react';
import {  Container, Row } from 'react-bootstrap';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import Service from '../Service/Service';

const HomeServices = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('./services.json')
            .then(res => res.json())
            .then(data => {
                const newData=data.slice(0,6);
                setServices(newData)
            })
    },[])
    return (
        <div>
            <SectionHeader >Our services</SectionHeader>
            <Container className="services mb-5 mt-2">
                <Row xs={1} md={3} className="g-0 gy-1">
                    {
                        services.map(service => <Service service={service} key={service.key}></Service>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeServices;