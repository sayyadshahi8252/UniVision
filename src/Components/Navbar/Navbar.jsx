import React, { useEffect, useState } from 'react'
import style from './Navbar.module.css'
import logo from '../../assets/logo.png'
import { Link, Element } from 'react-scroll';
import menuicon from '../../assets/menu-bar.png'

function Navbar() {

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 100 ? setSticky(true) : setSticky(false);
    })
  },)
  const [mobilemenu, setMobilemenu] = useState(false)
  const togglemenu = () => {
    mobilemenu ? setMobilemenu(false) : setMobilemenu(true);
  }
  return (
    <>
      <nav className={`container  ${sticky ? 'dark-nav' : ''}`}>
        {/* <img src={logo} alt="" className={style.logo} /> */}
        <h1 className={style.logo}> <Link to='hero' smooth={true} offset={0} duration={500} >UniVision</Link></h1>
        <ul className={`${mobilemenu ? '' : style.hidemobilemenu}`}>
          <li><Link to='hero' smooth={true} offset={-200} duration={500} >Home</Link></li>
          <li><Link to='program' smooth={true} offset={-130} duration={500} >Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-50} duration={500} >campus</Link></li>
          <li><Link to='heatmap' smooth={true} offset={-160} duration={500} >Map</Link></li>
          <li><Link to='research' smooth={true} offset={-10} duration={500} >Research</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-100} duration={500} >Testimonials</Link></li>
          <li><Link to='contact' smooth={true} offset={-80} duration={500} className="btn">Contact us</Link></li>
        </ul>
        <img src={menuicon} alt="" onClick={togglemenu} className={style.menuicon} />
      </nav>
    </>
  )
}

export default Navbar


