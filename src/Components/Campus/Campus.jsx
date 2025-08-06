import React from 'react'
import style from '../Campus/Campus.module.css'
import gallery1 from '../../assets/Campus1.jpg'
import gallery2 from '../../assets/campus2.jpg'
import gallery3 from '../../assets/campus3.jpg'
import gallery4 from '../../assets/Campus4.jpg'
import gallery5 from '../../assets/Campus5.jpg'
import gallery6 from '../../assets/Campus6.jpg'
import arrow from '../../assets/icons8-arrow-50.png'

export default function Campus() {
    return (
        <div className={style.campus} id='campus'>
            <h4>Gallery</h4>
            <h1>campus photo</h1>
            <div className={style.gallery}>
                <img src={gallery1} alt="" />
                <img src={gallery2} alt="" />
                <img src={gallery3} alt="" />
                <img src={gallery4} alt="" />
                <img src={gallery5} alt="" />
                <img src={gallery6} alt="" />
                <img src={gallery2} alt="" />
            </div>
            <button>see more here <img src={arrow} alt="" /></button>
        </div>
    )
}
