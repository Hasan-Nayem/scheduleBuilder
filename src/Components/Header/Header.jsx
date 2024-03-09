import React, { useContext } from 'react'
import { ToastContainer } from 'react-toastify'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { Link } from 'react-router-dom';
import { AuthContext } from './../../providers/AuthProvider';

export default function Header() {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => {
                console.log("User Logged Out");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="container my-3">
            <Navbar expand="lg" className="">
                <Container fluid>
                    <Navbar.Brand href="#">BCPS Schedule Builder</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to={'/'} className='nav-link'>Home</Link>
                            <Link to={'/manage'} className='nav-link'>Management</Link>
                            <Link to={'#'} className='nav-link'>Build Scedule</Link>
                            <NavDropdown title="Welcome Admin" id="basic-nav-dropdown">
                                <NavDropdown.Item  href="#action/3.1" onClick={handleLogout}>
                                    {/* <Link to={'#'} onClick={handleLogout} className='btn btn-danger'>Logout</Link> */}
                                    Logout
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
