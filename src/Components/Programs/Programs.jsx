import React from 'react'
import style from '../Programs/Programs.module.css'
import program1 from '../../assets/program1.jpg'
import program2 from '../../assets/program2.png'
import program3 from '../../assets/program3.jpg'
import icon1 from '../../assets/program1icon.png'
import icon2 from '../../assets/program2icon.jpg'
import icon3 from '../../assets/program3icon.png'

export default function Programs() {
  const programs = [
    {
      image: program1,
      icon: icon1,
      title: "Bachelor's Degree",
    },
    {
      image: program2,
      icon: icon2,
      title: "Master's Degree",
    },
    {
      image: program3,
      icon: icon3,
      title: "PhD Degree",
    }
  ];

  return (
    <div className={style.programsContainer} id='program'>
      <h2 className={style.sectionTitle}>Our Programs</h2>
      <div className={style.programs}>
        {programs.map((program, index) => (
          <div className={style.programCard} key={index}>
            <img src={program.image} alt={program.title} className={style.programImage} />
            <div className={style.caption}>
              <img src={program.icon} alt="icon" className={style.icon} />
              <p className={style.captionText}>{program.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
