/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  React Router Boiler Plate 
   FE Lab Week 16
*/

import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './Components/Home.js'
import Contact from './Components/Contact.js'
import Posts from './Components/Posts.js'

import HomeKorea from './Components/korea/HomeKorea.js'
import AboutKorea from './Components/korea/AboutKorea.js'

import HomeJapan from './Components/japan/HomeJapan.js'
import AboutJapan from './Components/japan/AboutJapan.js'


import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

/*------------------------ Creating a New Route ------------------------*/

/**
 * Step 1: npm install to install your node_modules folder
 * Step 2: npm start inside this project directory to see how the boiler plate is already set up.
 * Step 3: Rename: the Home and About components & routes to something you want
 *         to use for your final.
 * Step 4: Connect a third component so your nav now goes to three places instead
 *         of just two.
 *
 *         Make sure for this new component you have done the following:
 *           - Create a new <li></li> element in your nav component.
 *           - Put a <Link> component in that element with a name, and a to attribute.
 *           - Create a new <Route> component inside of your <Switch> component.
 *               It should sit on the upper level of the other two <Route> components.
 *               Make sure the syntax is the same as the other two components.
 *           - Test to make sure that all three components navigate correctly.
 */

export default function App() {
  return (
    // Your entire App.js is the router.
      // This is your Nav element, that users can see.
      <Router>
        <div className="bg-warning">
          <Navbar expand="lg" className="bg-primary navbar-dark" sticky="top">
            <Container fluid >
              <Navbar.Brand as={Link} to="/">Sneaky Links</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="jme-atuo" variant="tabs">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                  <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
                  <NavDropdown title="Korea" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/aboutKorea">About Korea</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/homeKorea">Travel Korea</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Japan" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/aboutJapan">About Japan</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/homeJapan">Travel Japan</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container fluid>
            <Switch>
              <Route path="/aboutJapan">
                <AboutJapan />
              </Route>
              <Route path="/homeJapan">
                <HomeJapan />
              </Route>
              <Route path="/homeKorea">
                <HomeKorea />
              </Route>
              <Route path="/aboutKorea">
                <AboutKorea />
              </Route>
              <Route path="/posts">
                <Posts />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Container>
          
        </div>
      </Router>
  );
} 

      // //* This is the logic that switches each path.
      //       1. Give your Route component a path attribute so users know where they are.
      //           This is linked directly with "to attribute" on your nav above.
      //       2. Inside that Route component, render the component you want users
      //           to see when they click on that route.
      //       <Route path="/">
      //         <Component/>
      //       </Route>  *//
         

