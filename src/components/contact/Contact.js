import React from 'react'
import './Contact.css'
import { Element } from 'react-scroll'
import { UseTheme } from '../context/UseTheme'

const Contact = () => {
  const {theme}=UseTheme()
  return (
    <Element className='contact' id='contact'>
        <div className={`container fax ${theme}bg`}>
            <h1>Get in Touch</h1>
            <h6>Email:<span>dinakaransekar13@gmail.com</span></h6>
            <h6>Mobile:<span>8883856088</span></h6>

            <a href="https://www.linkedin.com/in/dinakaranmba/"><i class="bi bi-linkedin"></i></a>
           <a href="https://github.com/dinakaransekar13"><i class="bi bi-github"></i></a>

        </div>
    </Element>
  )
}

export default Contact