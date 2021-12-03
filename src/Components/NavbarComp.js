import React, { Component, Fragment } from "react";
import {
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Nav,
} from "react-bootstrap";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import WriteComment from "../Pages/WriteComment";
import { Link } from "react-router-dom";
import "../Styles/NavbarComp.css";

export default class NavbarComp extends Component {
  render() {
    return (
      <div className="header">
        {/*  <Navbar bg="dark" variant={"dark"} expand="lg">
          <Link to="/" className="link">
            <Navbar.Brand>Rate My Major</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mr-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>
        </Navbar> */}

        <div class="header p-3 mb-5 text-dark">
          {/*  Container */}
          <div class="container">
            <div class="row">
              {/* First col */}
              <div class="col">
                <a href="/"  className="header-top_logo">
                    <h1 class="display-7" className="header-top_logo1" >Rate MY</h1>
                    <h1 class="display-6" className="header-top_logo2">Major</h1>
                </a>
              </div>
              {/*  Second col */}
              {/* <div class="col col-lg-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-square"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                </svg>
              </div> */}

              <hr className="header-top_seperator" />

              <div className="header-bottom">
                {/*  Team Null */}
                <div className="header-bottom_slogan">Connect your passions to your career</div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
