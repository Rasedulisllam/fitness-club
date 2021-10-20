import React, { useEffect, useState } from 'react';
import { Col, Container, Form, ListGroup, Row } from 'react-bootstrap';
import Blog from '../Blog/Blog';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import './Blogs.css'
import {FaRegLifeRing} from 'react-icons/fa'

const Blogs = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div className='bg-dark'>
            <SectionHeader>Our Blogs</SectionHeader>
            <Container className="my-4">
                <Row>
                    <Col md={8}>
                        {
                            blogs.map(blog=> <Blog blog={blog} key={blog.key}></Blog>)
                        }
                    </Col>
                    <Col md={4} className='p-4'>
                        <Form.Control size="lg" type="text" placeholder="Looking for something" />
                        <div className="blog-cetagories text-start my-5">
                            <h3 className='text-white my-4 py-2 '>CATEGORIES</h3>
                            <ListGroup variant="flush" className='blog-caregories-list'>
                                <ListGroup.Item><FaRegLifeRing className='me-2 text-success'/>Cardio</ListGroup.Item>
                                <ListGroup.Item><FaRegLifeRing className='me-2 text-success'/>Exercise</ListGroup.Item>
                                <ListGroup.Item><FaRegLifeRing className='me-2 text-success'/>Health Tips</ListGroup.Item>
                                <ListGroup.Item><FaRegLifeRing className='me-2 text-success'/>Running</ListGroup.Item>
                                <ListGroup.Item><FaRegLifeRing className='me-2 text-success'/>Six Pack</ListGroup.Item>
                                <ListGroup.Item><FaRegLifeRing className='me-2 text-success'/>Workout</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;

// const blogs=[
//     {
//         key:1,
//         img:'https://i.ibb.co/FwtfFvM/pexels-william-choquette-1954524.jpg',
//         title:'The do and don’t of running for fitness.',
//         date:'APRIL 1, 2021',
//         blogCreator:'ROBERT lii',
//         cetagory:'advice',
//         details:'Sed rhoncus nulla turpis, vitae rutrum velit iaculis et. Curabitur vestibulum, erat non imperdiet vulputate, est neque iaculis mi, at malesuada eros ante sit amet elit. Praesent tempus, est in bibendum tincidunt, sapien felis condimentum quam, eu posuere risus sem ac sem. In non massa et dolor venenatis luctus non eget dolor. Duis turpis est, euismod a tellus tristique, ultricies aliquet metus. Quisque pellentesque laoreet diam, eget facilisis ligula pulvinar eu. In vel euismod lorem. Duis vel enim at nisi hendrerit vestibulum. Cras felis mauris, placerat vitae pharetra vel, scelerisque ac felis. Vestibulum tristique est sit amet massa mattis condimentum. Nam auctor, purus in bibendum ornare, erat lacus tempus est, ac molestie nibh lacus pellentesque lacus. Etiam lacus nisl, fermentum eget neque imperdiet, iaculis egestas sapien. Quisque vel dignissim metus.',
//     },
//     {
//         key:2,
//         img:'https://i.ibb.co/f1SvXwD/people-2572265.png',
//         title:'Get six-pack abs like the guys in ‘Magic Mike’',
//         date:'APRIL 15, 2021',
//         blogCreator:'ROBERT LOUISE',
//         cetagory:'workout',
//         details:'Sed rhoncus nulla turpis, vitae rutrum velit iaculis et. Curabitur vestibulum, erat non imperdiet vulputate, est neque iaculis mi, at malesuada eros ante sit amet elit. Praesent tempus, est in bibendum tincidunt, sapien felis condimentum quam, eu posuere risus sem ac sem. In non massa et dolor venenatis luctus non eget dolor. Duis turpis est, euismod a tellus tristique, ultricies aliquet metus. Quisque pellentesque laoreet diam, eget facilisis ligula pulvinar eu. In vel euismod lorem. Duis vel enim at nisi hendrerit vestibulum. Cras felis mauris, placerat vitae pharetra vel, scelerisque ac felis. Vestibulum tristique est sit amet massa mattis condimentum. Nam auctor, purus in bibendum ornare, erat lacus tempus est, ac molestie nibh lacus pellentesque lacus. Etiam lacus nisl, fermentum eget neque imperdiet, iaculis egestas sapien. Quisque vel dignissim metus.',
//     },
//     {
//         key:3,
//         img:'https://i.ibb.co/Q6N9Vd9/pexels-cleyd.png',
//         title:'Get off your butt and exercise, orders your doc',
//         date:'august 24,2021',
//         blogCreator:'ROBERT LOUISE',
//         cetagory:'Exercise',
//         details:'Sed rhoncus nulla turpis, vitae rutrum velit iaculis et. Curabitur vestibulum, erat non imperdiet vulputate, est neque iaculis mi, at malesuada eros ante sit amet elit. Praesent tempus, est in bibendum tincidunt, sapien felis condimentum quam, eu posuere risus sem ac sem. In non massa et dolor venenatis luctus non eget dolor. Duis turpis est, euismod a tellus tristique, ultricies aliquet metus. Quisque pellentesque laoreet diam, eget facilisis ligula pulvinar eu. In vel euismod lorem. Duis vel enim at nisi hendrerit vestibulum. Cras felis mauris, placerat vitae pharetra vel, scelerisque ac felis. Vestibulum tristique est sit amet massa mattis condimentum. Nam auctor, purus in bibendum ornare, erat lacus tempus est, ac molestie nibh lacus pellentesque lacus. Etiam lacus nisl, fermentum eget neque imperdiet, iaculis egestas sapien. Quisque vel dignissim metus.',
//     },
//     {
//         key:4,
//         img:'https://i.ibb.co/k0S9xmh/pexels-artem-beliaikin-617000.jpg',
//         title:'Weight room blunders that can really hurt',
//         date:'august 24,2021',
//         blogCreator:'ROBERT LOUISE',
//         cetagory:'weight',
//         details:'Sed rhoncus nulla turpis, vitae rutrum velit iaculis et. Curabitur vestibulum, erat non imperdiet vulputate, est neque iaculis mi, at malesuada eros ante sit amet elit. Praesent tempus, est in bibendum tincidunt, sapien felis condimentum quam, eu posuere risus sem ac sem. In non massa et dolor venenatis luctus non eget dolor. Duis turpis est, euismod a tellus tristique, ultricies aliquet metus. Quisque pellentesque laoreet diam, eget facilisis ligula pulvinar eu. In vel euismod lorem. Duis vel enim at nisi hendrerit vestibulum. Cras felis mauris, placerat vitae pharetra vel, scelerisque ac felis. Vestibulum tristique est sit amet massa mattis condimentum. Nam auctor, purus in bibendum ornare, erat lacus tempus est, ac molestie nibh lacus pellentesque lacus. Etiam lacus nisl, fermentum eget neque imperdiet, iaculis egestas sapien. Quisque vel dignissim metus.',
//     },
// ]

// https://i.ibb.co/Q6N9Vd9/pexels-cleyd.png
// https://i.ibb.co/FwtfFvM/pexels-william-choquette-1954524.jpg
// https://i.ibb.co/f1SvXwD/people-2572265.png
// https://i.ibb.co/k0S9xmh/pexels-artem-beliaikin-617000.jpg