import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logopng from "../../assets/logopng.png";
import { Link } from 'react-scroll';
import bar from "../../assets/bar.png";
import close from "../../assets/close.png";

const Navbar = () => {
  const[sticky, setSticky] = useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 400 ? setSticky(true) : setSticky(false)
    })
  },[])

  const [mobileMenu, setMobileMenu] = useState(false)
  const toggleMennu = () =>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logopng} alt='' className='logo'/>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260} duration={500}>About us</Link></li>
        <li><Link to='campus' smooth={true} offset={0} duration={500}>Services</Link></li>
        <li><Link to='projects' smooth={true} offset={0} duration={500}>Projects</Link></li>
        <li><Link to='blog' smooth={true} offset={0} duration={500}>Blog</Link></li>
        <li><Link to='portfolio' smooth={true} offset={0} duration={500} className='btn'>PORTFOLIO</Link></li>
      </ul>
      <img src={bar} className='menu-icon' onClick={toggleMennu} />
    </nav>
  )
}

export default Navbar
