import React, {Component} from 'react'
import {Container} from 'reactstrap'
import Header from './Header'
import Footer from './Footer'



class Layout extends Component {

    render() {
        return(
            <>
                <Header />
                    <Container fluid>
                        { this.props.children }
                    </Container>
                   < Footer />
            </>
        )
    }

}

export default Layout