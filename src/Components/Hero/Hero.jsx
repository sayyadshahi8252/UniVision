import React from 'react'
import style from '../Hero/Hero.module.css'
import arrow from '../../assets/right-arrow.png'

export default function Hero() {
    return (
        <div className={`${style.hero} container`} id='hero'>
            <div className={style.herotext}>
                <h1>Shaping the Future Through Education</h1>
                <p>Welcome to UniVision, where academic excellence meets real-world experience. Explore our programs, connect with our vibrant campus community, and begin your journey toward a brighter future.</p>

                <button className='btn'>Explore <img src={arrow} alt="" /> </button>
            </div>
        </div>
    )
}
