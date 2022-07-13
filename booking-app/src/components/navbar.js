import React from 'react'
import {faCompass} from '@fortawesome/free-regular-svg-icons';
import  {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './navbar.css';

function navbar() {
  return (
    <div className='navbar'>
    <div className='navContainer'>
      <span className='logo'>
      <FontAwesomeIcon className="logo-icon" icon={faCompass} />Compass</span>
      <div className='navItems'>
          <button className='navButtons'> Register</button>
          <button className='navButtons'> login</button>
        </div>
      </div> 
    </div>
  )
}

export default navbar