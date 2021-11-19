import React, { Component, Fragment } from 'react'
import { Navbar, NavDropdown, Form, FormControl, Button, Nav } from 'react-bootstrap'
import Home from './Home';
import Contact from './Contact';
import About from './About'
import WriteComment from '../Pages/WriteComment';
import {Link} from "react-router-dom";

export default class NavbarComp extends Component {
    render() {
        return (
                <div>
                    <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Link to='/' className="link"><Navbar.Brand >Rate My Major</Navbar.Brand></Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="mr-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                    

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
               
        )
    }
}