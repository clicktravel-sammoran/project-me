import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import styles from './Header.module.css'

import pages from '../../data/pages'

import pageParser from '../../Functions/pageParser'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Sam Moran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {(pages.map(page => {
                        const parsedPage = pageParser(page)
                        return <Nav.Link className={styles.Link} key={parsedPage} href={page === "Home" ? "/" : parsedPage}>{page}</Nav.Link>
                    }))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
