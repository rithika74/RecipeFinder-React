import React from 'react'
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleNavbar = () => {
        setExpanded(!expanded);
    };
    return (
        <>

            <header>
                <Navbar expand="lg" className="bg fixed-top ">
                    <Container style={{ padding: '10px' }}>
                        <Navbar.Brand href="#home" className='brand' style={{ color: 'whitesmoke', fontSize: '36px' }}>
                            Bon Appetit
                        </Navbar.Brand>
                        <Navbar.Toggle onClick={toggleNavbar} aria-controls="basic-navbar-nav">
                            {expanded ? <span style={{ color: 'white' }}>&times;</span> : <span style={{ color: 'white' }}>&#9776;</span>}
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? 'show' : ''}`}>
                            <Nav className="ms-auto">
                                <Nav.Link href="#home" as={Link} to='/'><li><a href="">HOME</a></li></Nav.Link>
                                <Nav.Link href="#link" as={Link} to='/allitems'><li><a href="">ALL ITEMS</a></li></Nav.Link>
                                <Nav.Link href="#link" as={Link} to='/favourites'><li><a href="">FAVOURITES</a></li></Nav.Link>
                                <Nav.Link href="#link" as={Link} to='/country'><li><a href="">COUNTRY</a></li></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>

            <Outlet />


        </>
    )
}

export default Home