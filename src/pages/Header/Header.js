import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import brand from '../../images/logo/logo2.png'
import {FiShoppingCart} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <Navbar.Brand href="#" className='fw-bold'><img width='44px' className='img-fluid me-2' src={brand} alt="" />FITNESS-GURU</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className='justify-content-between ms-4'>
                <Nav
                className="mr-auto my-2 my-lg-0 align-items-center "
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/service">Service</Nav.Link>
                    <Nav.Link as={Link} to="/tips">Tips &#38; Gellary</Nav.Link>
                    <Nav.Link as={Link} to="/shop">Shop</Nav.Link>
                </Nav>
                <Nav className='align-items-center fw-bold'>
                    <Nav.Link as={Link} to="/card" className='nav-card'>
                        <FiShoppingCart></FiShoppingCart> 
                        <span className='card-count'>0</span>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/signIn" className='mx-2'>SignIn</Nav.Link>
                    <Nav.Link as={Link} to="/register">
                        <Button variant="danger nav-btn">Register</Button>
                    </Nav.Link>
                </Nav>
                
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;