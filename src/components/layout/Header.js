import React from 'react'
import {Navbar} from 'react-bootstrap'
import  './Layout.css'
import logo from '../../Icon.png'
import { Link} from "react-router-dom"

export default function Header() {
  return (
    
    <Navbar className='header' bg='dark' variant='dark'>
    <div className='navbar__title navbar__item'>
    <Navbar.Brand href="#">
           <img src={logo} 
           width="50"
          height="30"
            alt='Brand logo'
            style={{color:"#fff"}}/>
            Dictionary
          </Navbar.Brand>
    </div>
  <div className='navbar__item'><Link to= '/' className='nav-link'>Home</Link></div>
    <div className='navbar__item'><Link to= '/about' className='nav-link'>About</Link></div>
    <div className='navbar__item'><Link to= '/translator' className='nav-link'>Translator</Link></div>
    <div className='navbar__item'><Link to='/puzzle'className='nav-link'>Word puzzle</Link></div>
    <div className='navbar__item'><Link to='/kiddies'className='nav-link'>Kiddies</Link></div> 
    <div className='navbar__item'><Link to='/help'className='nav-link'>Help</Link></div>            
</Navbar>
  )
}
