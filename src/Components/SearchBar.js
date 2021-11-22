/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import {Route,Router,Link} from 'react-router-dom';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css'
import WriteComment from '../Pages/WriteComment';
import '../Styles/SearchBar.css';
import commentImage from "../img/mainpageimg/commentImage.png" ;


export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <Container className = "search-bar">
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                            <Navbar.Brand href="/">Navbar</Navbar.Brand>
                        </Container>
                    </Navbar>
                </Container>
                <Button Major="outline-success" className="search-btn">Search</Button>
                
                <div className="comment-img">
                    <img src={ commentImage } alt="commentImage" className="img-fluid"/>
                </div>
               
                <div>
                    <p><span class="word-span">Create</span> The First Comment Now !</p>
                    <Button WriteReview="outline-success" className="review-btn"><Link to='WriteComment'className="link">Write A Review</Link></Button>
                </div>                


            </div>
            
        )
    }
}