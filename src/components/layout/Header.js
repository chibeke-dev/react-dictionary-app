import React, {Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

class Header extends Component {
    render() {
        return(
            // Navbar section
            <Navbar color={'dark'} dark>
                <NavbarBrand href="/">Dictionary</NavbarBrand>
            </Navbar>
        )
    }

}

export default Header