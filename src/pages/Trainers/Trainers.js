import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Trainer from '../Trainer/Trainer';
import './Trainers.css';

const Trainers = () => {
    const [trainers,setTrainers]=useState([]);

    useEffect(()=>{
        fetch('./trainers.json')
            .then(res => res.json())
            .then(data => setTrainers(data))
    },[])

    return (
        <div className='bg-dark text-white'>
            <div className="tainer-header">
                <h1 className='text-uppercase '>tainers</h1>
                <p>YOU ARE WHAT I NEVER KNEW I ALWAYS WANTED</p>
            </div>
            <div className="my-5 trainer-top">
                <h2>Fitness and weight loss</h2>
                <p className='w-50 mx-auto my-2'>Fitness involves activity of some sort that stimulates various systems of the body and maintains a certain condition within the body</p>
            </div>
            <Container className="trainers">
                {
                    trainers.map(trainer => <Trainer trainer={trainer} key={trainer.key}></Trainer>)
                }
            </Container>

        </div>
    );
};

export default Trainers;







// const trainers=[
//     {
//         key:1,
//         name:'Kyne Jameson',
//         spealist:'ASHTANGA YOGA',
//         cetagory:'fitness',
//         details:'Commonly called Power yoga, Ashtanga is definitely physically demanding. It’s probably best suited for an ex-athlete or someone looking to really push their body.',
//         img:'https://i.ibb.co/xYGg5CD/yoga-3053487-640.jpg'
//     },
//     {
//         key:2,
//         name:'Ashley Fletcher',
//         spealist:'FITNESS INSTRUCTOR',
//         cetagory:'fitness',
//         details:'Commonly called Power yoga, Ashtanga is definitely physically demanding. It’s probably best suited for an ex-athlete or someone looking to really push their body.',
//         img:'https://i.ibb.co/nwvVcBY/sport-1815783-640.jpg'
//     },
//     {
//         key:3,
//         name:'Rodney Stratton',
//         spealist:'PRO BODYBUILDER',
//         cetagory:'bodybuild',
//         details:'Commonly called Power yoga, Ashtanga is definitely physically demanding. It’s probably best suited for an ex-athlete or someone looking to really push their body.',
//         img:'https://i.ibb.co/6tSQBpg/people-5.png'
//     },
//     {
//         key:4,
//         name:'Ashley Fletcher',
//         spealist:'Pro boxer',
//         cetagory:'bodybuild',
//         details:'Commonly called Power yoga, Ashtanga is definitely physically demanding. It’s probably best suited for an ex-athlete or someone looking to really push their body.',
//         img:'https://i.ibb.co/8sQfsWn/body-1846668-640.jpg'
//     },
// ]


// https://i.ibb.co/nwvVcBY/sport-1815783-640.jpg
// https://i.ibb.co/xYGg5CD/yoga-3053487-640.jpg
// https://i.ibb.co/8sQfsWn/body-1846668-640.jpg
// https://i.ibb.co/6tSQBpg/people-5.png