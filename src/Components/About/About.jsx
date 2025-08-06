import React from 'react'
import style from '../About/About.module.css'
import aboutimage from '../../assets/aboutimage.jpg'
import playicon from '../../assets/playbtn.png'
export default function About({ setplaystate }) {
  return (
    <div className={style.about} id='about'>
      <div className={style.aboutLeft}>
        <img src={aboutimage} alt="" className={style.aboutimage} />
        <img src={playicon} alt="" className={style.playiconimage} onClick={() => { setplaystate(true) }} />
      </div>
      <div className={style.aboutRight}>
        <h3>About University</h3>
        <h2>Nurturing Tomorrow’s Leaders, Today</h2>
        <p>
          Welcome to our university, a place where innovation meets tradition, and ambition finds purpose. We are committed to shaping future-ready leaders by fostering a culture of curiosity, creativity, and critical thinking.
        </p>
        <p>
          Our academic programs are designed to challenge students intellectually while nurturing their personal growth. With a faculty of renowned educators and a campus equipped with world-class facilities, we provide an environment where students are empowered to thrive.
        </p>
        <p>
          Beyond academics, we emphasize leadership, ethics, and community engagement. Whether it’s through research, internships, or social impact projects, our students graduate not only with a degree but with the skills and values needed to lead change in a complex global society.
        </p>

      </div>
    </div>
  )
}
