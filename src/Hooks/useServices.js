import  { useEffect, useState } from 'react';

const useServices = () => {
    const [services,setServices]=useState([])
    const servicesData=[
        {
            key:1,
            name:'stretching',
            img:'https://i.ibb.co/drJ6j7n/stretching.jpg',
            shortDetail:'Stretching Exercises for Better Flexibility',
            detail:'Stretching may not be the most exciting part of working out, but doing flexibility work is just as important for a well-rounded fitness routine as strength and cardio work. Incorporating some stretching exercises into your workout schedule will help you improve flexibility, reduce tightness, and ultimately, make your workouts more efficient and safe.',
            price:150,
            time:1,
        },
        {
            key:2,
            name:'normal GYM fitness',
            img:'https://i.ibb.co/sPTHDNv/normal-gym-fitness.jpg',
            shortDetail:'Turn your passion for a fit and healthy lifestyle into instant rewards.',
            detail:'Deciding how to fit out a gym or functional fitness space isnt easy, which is why Gym and Fitness is here to help guide you through the process. Explore our portfolio of custom gym fit outs by clicking below.',
            price:200,
            time:1,
        },
        {
            key:3,
            name:'simple weight loss',
            img:'https://i.ibb.co/jypkJb7/weight-loss.jpg',
            shortDetail:'Even modest weight loss can mean big benefits',
            detail:'It’s natural for anyone trying to lose weight to want to lose it very quickly. But people who lose weight gradually and steadily (about 1 to 2 pounds per week) are more successful at keeping weight off. Healthy weight loss isn’t just about a “diet” or “program”.',
            price:400,
            time:2.5,
        },
        {
            key:4,
            name:'bodybuilding',
            img:'https://i.ibb.co/phkHgb9/bodybuilding.jpg',
            shortDetail:'Bodybuilding is a great way to strengthen, tone, and stabilize your entire body.',
            detail:'Bodybuilding is the use of progressive resistance exercise to control and develop ones muscles by muscle hypertrophy for aesthetic purposes. It is distinct from similar activities such as powerlifting because it focuses on physical appearance instead of strength.',
            price:500,
            time:3,
        },
        {
            key:5,
            name:'GYM boxing',
            img:'https://i.ibb.co/71rJScS/boxing.jpg',
            shortDetail:'Boxing is a combat sport in which two people.',
            detail:'Boxing is a combat sport in which two people, usually wearing protective gloves and other protective equipment such as hand wraps and mouthguards, throw punches at each other for a predetermined amount of time in a boxing ring.',
            price:250,
            time:2,
        },
        {
            key:6,
            name:'Pilates yoga',
            img:'https://i.ibb.co/bgv00cK/pilates.jpg',
            shortDetail:' physical fitness system developed in the early 20th century by Joseph Pilates.',
            detail:'Pilates developed in the aftermath of the late 19th century physical culture of exercising in order to alleviate ill health',
            price:180,
            time:1.5,
        },
        {
            key:7,
            name:'woman fitness program',
            img:'https://i.ibb.co/fN8qYc7/woman-fitness.jpg',
            shortDetail:'Each phase of your menstrual cycle is characterized by a specific energetic shift, desire.',
            detail:'Be kind to your body and the planet by making the switch to sustainable activewear! Whether you’re on the lookout for leggings, trainers or water bottles, we’ve got you covered.',
            price:300,
            time:2,
        },
        {
            key:8,
            name:'bikram yoga',
            img:'https://i.ibb.co/3NhjC76/bikram-yoga.jpg',
            shortDetail:'Bikram Yoga is a system of hot yoga.',
            detail:'Bikram Yoga is a system of hot yoga, a type of yoga as exercise, devised by Bikram Choudhury and based on the writings of B. C. Ghosh, that became popular in the early 1970 Classes consist of a fixed sequence of 26 postures intended to replicate the climate of India.',
            price:100,
            time:1,
        },
        {
            key:9,
            name:'weight gaining',
            img:'https://i.ibb.co/TgXJ1mB/weight-gaining.jpg',
            shortDetail:'Working Out Help Me Gain Weight',
            detail:'When you are trying to gain weight, you might feel frustrated that working out can instead lead to weight-loss. Though it is true that certain forms of exercise such as running or high-intensity cardio can promote weight loss, there are many workout options available to you to build muscle, rather than reduce fat.',
            price:400,
            time:2.5,
        },
    ]

    useEffect(()=>{
        setServices(servicesData)
    },[])


    return {
        services,
        setServices,
    }
};

export default useServices;