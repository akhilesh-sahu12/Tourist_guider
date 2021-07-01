import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {ShoppingCart,NotificationImportant} from '@material-ui/icons'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {LinkContainer,Link} from 'react-router-bootstrap'

const Header = () => {
    return (
        <div>
        <Navbar bg="dark" variant="dark">
            <LinkContainer to="/">
               <Navbar.Brand style={{paddingLeft:'25px'}} >Tourist<span style={{color:'red'}}>Guider</span></Navbar.Brand>
            </LinkContainer>
                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="" style={{marginLeft:"auto",paddingRight:'15px'}}>
                        <LinkContainer to="/notification">
                             <Nav.Link><NotificationImportant/></Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/user/login">
                            <Nav.Link>&nbsp;Log in</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/user/resister">
                            <Nav.Link>&nbsp;Resister</Nav.Link>
                        </LinkContainer>
                         
                   </Nav>
                </Navbar.Collapse>
       </Navbar>
        </div>
    )
}

export default Header
