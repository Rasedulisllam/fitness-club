import React from 'react';
import { Button } from 'react-bootstrap';
import './Blog.css'

const Blog = (props) => {
    const {title,img,blogCreator,date,details,cetagory}=props.blog
    return (
        <div className='text-start p-4 border-0 mb-5'>
            <h3 className='text-white'>{title}</h3>
            <ul className='d-flex list-unstyled blog-auth text-muted flex-md-row flex-column'>
                <li className='my-1 my-md-0'>On: {date}</li>
                <li className='my-1 my-md-0'>by: {blogCreator}</li>
                <li className='my-1 my-md-0'>tgged: {cetagory} </li>
            </ul>
            <img className='img-fluid' src={img} alt="" />
            <p className='my-4 text-muted'>{details}</p>
            <Button variant="outline-danger">Read more</Button>
        </div>
        
    );
};

export default Blog;