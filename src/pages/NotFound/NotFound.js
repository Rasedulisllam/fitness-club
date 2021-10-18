import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import notfound from '../../images/banner/5224474.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
            <img className='img-fluid' src={notfound} alt="" />
            <Link to='/home'> 
            <Button variant='danger' className='notFound-btn'>Go home</Button>
            </Link>
        </div>
    );
};

export default NotFound;