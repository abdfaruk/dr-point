import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="navbar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Container>
                    <Navbar.Brand href="#home"><img className="nav-img" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/medical-logo.jpg" alt="" /></Navbar.Brand>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/services">Services</Nav.Link>
                    <Nav.Link as={Link} to="/extra">Treatments</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    {user?.email ? 
                    <Button onClick={logOut} variant="light">Logout</Button>:
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    }
                    <Navbar.Text>
                        Signed in as: <a href="#login">{user?.displayName || user.email}</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
        </div>
    );
};

export default Header;