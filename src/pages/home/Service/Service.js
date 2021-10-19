import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './service.css'

const Service = props => {
    const {name,img,price,shortDetail,time,key}=props.service;
    const history=useHistory();

    const handleServiceDetails=()=>{
        history.push(`/serviceDetail/${key}`)
    }

    return (
            <Card className='border-0 text-start h-100'>
                <div className="card-body p-0 h-100">
                    <div className="card-title-img position-relative">
                        <div className="card-img">
                            <img  src={img} alt="card-img" />
                        </div>
                        <div className='card-title position-absolute'>
                            <h4 className='text-capitalize '>{name}</h4>
                            <span className='px-4 fw-bold text-white'>
                                Price:
                                 <span className='fs-2 fw-bold text-danger'>${price}</span>
                                 / {time} month
                                </span>
                        </div>
                    </div>
                    <div className="card-btn p-3">
                        <Button onClick={handleServiceDetails} variant='danger'>Details..</Button>
                    </div>
                </div>
                <Card.Text className='my-3 w-75'>
                    {shortDetail}
                </Card.Text>
            </Card>
    );
};

export default Service;