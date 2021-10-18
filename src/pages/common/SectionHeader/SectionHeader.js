import React from 'react';
import { Container } from 'react-bootstrap';
import './SectionHeader.css'

const SectionHeader = ({children}) => {
    return (
        <div className='bg-dark mt-5'>
            <Container className='section-header'>
                <h2 className='text-start text-uppercase ps-2'>{children}</h2>
            </Container>
        </div>
    );
};

export default SectionHeader;