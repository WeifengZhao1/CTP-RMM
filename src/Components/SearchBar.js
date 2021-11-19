/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Route,Router,Link} from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import WriteComment from '../Pages/WriteComment';
import '../Styles/SearchBar.css';


export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
                <Button Major="outline-success">Search</Button>
                
                <p></p>
               
                <div>
                    <p>Did not find your school? Create the first comment now!</p>
                    <Button WriteReview="outline-success"><Link to='WriteComment'className="link">Write a Review</Link></Button>
                </div>
            </div>
            
        )
    }
}