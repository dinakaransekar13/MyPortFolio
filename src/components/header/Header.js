import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import {UseTheme} from './../context/UseTheme'

const Header = () => {
  const {theme}=UseTheme()
  return (
    <div className={`header ${theme}bg`}>
        <div className='header__left'>
            <h1>
            Web <span>Developer</span>
            </h1>
        </div>
        <div className='header__right'>
            <Link to='about' smooth={true} duration={500}>
            <h4>About me</h4>
            </Link>
            <Link to='skills' smooth={true} duration={500}>
            <h4>Skills</h4>
            </Link>
            <Link to='project' smooth={true} duration={500}>
            <h4>Project</h4>
            </Link>
            <Link to='experiance' smooth={true} duration={500}>
            <h4>Experience</h4>
            </Link>
            <Link to='contact' smooth={true} duration={500}>
            <h4>Contact</h4>
            </Link>
            {/* <h4 className='header__rightButton'>Join with me</h4> */}
        </div>
    </div>
  )
}

export default Header