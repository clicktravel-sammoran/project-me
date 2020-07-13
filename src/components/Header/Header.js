import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import styles from './Header.module.css'

import pages from '../../data/pages'

import pageParser from '../../functions/pageParser'
import checkIfHome from '../../functions/checkIfHome'
import checkActivePage from '../../functions/checkActivePage'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Sam Moran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {(pages.map(page => {
                        const parsedPage = pageParser({ page })
                        const activePage = checkActivePage({ parsedPage })
                        return <Nav.Link className={activePage ? styles.ActiveLink : styles.Link} key={`${parsedPage}link`} href={checkIfHome(page) ? "/" : parsedPage}>{page}</Nav.Link>
                    }))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
