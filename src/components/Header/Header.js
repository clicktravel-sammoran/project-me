import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import styles from './Header.module.css'

import pages from '../../data/pages'

import pageParser from '../../Functions/pageParser'
import checkIfHome from '../../Functions/checkIfHome'
import checkActivePage from '../../Functions/checkActivePage'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Sam Moran</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {(pages.map(page => {
                        const currentPage = document.URL
                        const parsedPage = pageParser(page)
                        const activePage = checkActivePage({ currentPage, parsedPage })
                        return <Nav.Link className={activePage ? styles.ActiveLink : styles.Link} key={`${parsedPage}link`} href={checkIfHome(page) ? "/" : parsedPage}>{page}</Nav.Link>
                    }))}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
