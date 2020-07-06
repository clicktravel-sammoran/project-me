import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Sam Moran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="work-history">Work History</Nav.Link>
                    <Nav.Link href="projects">Projects</Nav.Link>
                    <Nav.Link href="contact-me">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
