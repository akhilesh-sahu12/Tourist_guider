import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const HomeScreenNav = () => {
    return (
                <div>
                    <Navbar expand="lg" style={{backgroundColor:'#a0ddf0', color:'#fff'}}> 
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="m-auto home-screen-nav" style={{paddingLeft:'30px'}}>
                                        <LinkContainer to="/shingapor">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>Shingapor</span></Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/india">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>India</span></Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/china">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>Chine</span></Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/germany">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>Germany</span></Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/dubai">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>Dubai</span></Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/usa">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>USA</span></Nav.Link>
                                        </LinkContainer>
                                        <LinkContainer to="/uk">
                                            <Nav.Link ><span style={{color:'#fff', fontWeight:'bold'}}>UK</span></Nav.Link>
                                        </LinkContainer>
                                    </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            )
}

export default HomeScreenNav
