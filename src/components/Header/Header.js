import { Navbar, Nav } from 'react-bootstrap'
import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/">Sam Moran</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="work_history">Work History</Nav.Link>
                        <Nav.Link href="Projects">Projects</Nav.Link>
                        <Nav.Link href="Contact">Contact Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


        )
    }
}

