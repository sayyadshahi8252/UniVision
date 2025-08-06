import React, { useRef, useState } from 'react';
import style from '../Testimonials/Testimonials.module.css';
import rightarrow from '../../assets/arrowright (1).png';
import leftarrow from '../../assets/arrowright (2).png';
import testimonial1 from '../../assets/t1.jpg';
import testimonial2 from '../../assets/t2.jpg';
import testimonial3 from '../../assets/t3.jpg';

export default function Testimonials() {
    const sliderRef = useRef(null);
    const [index, setIndex] = useState(0);

    const testimonials = [
        {
            image: testimonial1,
            name: 'Lucas Martin',
            location: 'Toronto, Canada',
            message:
                'Studying here has been a game-changer. The faculty genuinely care about student growth and the curriculum is aligned with modern industry needs.'
        },
        {
            image: testimonial2,
            name: 'Aarya',
            location: 'Mumbai, India',
            message:
                'The university helped me grow both academically and personally. The exposure to real-world projects was the best part of my journey here.'
        },
        {
            image: testimonial3,
            name: 'Vaishnavi',
            location: 'Pune, India',
            message:
                'The learning environment is incredibly supportive and innovative. I felt encouraged to explore new ideas and step out of my comfort zone.'
        },
        {
            image: testimonial2,
            name: 'Yuki Tanaka',
            location: 'Osaka, Japan',
            message:
                'As an international student, I found the campus welcoming and inclusive. The cultural exchange and support services made my transition smooth.'
        }

    ];

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handleBack = () => {
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <>
           
            <div className={style.testimonials} id='testimonials'>
                 <h4 style={{ textAlign: 'center', color: '#C8A2C8' }} >Testimonials</h4>
            <h1 style={{ textAlign: 'center' }}>What students say</h1>
                <div className={style.backbtn} onClick={handleBack}>
                    <img src={leftarrow} alt="Back" />
                </div>
                <div className={style.nextbtn} onClick={handleNext}>
                    <img src={rightarrow} alt="Next" />
                </div>
                <div className={style.slider} ref={sliderRef}>
                    <ul style={{ transform: `translateX(-${index * 100}%)` }}>
                        {testimonials.map((item, idx) => (
                            <li key={idx}>
                                <div className={style.slide}>
                                    <div className={style.userinfo}>
                                        <img src={item.image} alt={item.name} />
                                        <div>
                                            <h3>{item.name}</h3>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                    <p>{item.message}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
