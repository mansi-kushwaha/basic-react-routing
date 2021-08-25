import React from 'react';
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
const Header = () => {

    return (
        <header>

            <Navbar collapseOnSelect expand="lg" bg="dark " variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/service" className="nav-link">Service</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            <NavLink to="/blogs" className="nav-link">Blogs</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>



    )
}
export default Header