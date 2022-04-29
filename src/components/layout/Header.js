import React, {Component} from 'react'
import {Navbar} from 'react-bootstrap'
import  './Layout.css'
import logo from '../../Icon.png'

class Header extends Component {
    render() {
        return(
            // Navbar section
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
            <div className='navbar__item'>Home</div>
            <div className='navbar__item'>About</div>
            <div className='navbar__item'>Translator</div>
            <div className='navbar__item'>Word puzzle</div>
            <div className='navbar__item'>Kiddies Center</div> 
            <div className='navbar__item'>Help</div>            
        </Navbar>
        )
    }

}

export default Header