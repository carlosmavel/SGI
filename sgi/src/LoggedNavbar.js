// src/LoggedNavbar.js
import React, { Component } from 'react';

import Logo from './Logo.js';
import './logo.css';

import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';

class LoggedNavbar extends Component {
  render(){
      return(
        <Navbar staticTop inverse collapseOnSelect >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="home" title="Sistema de Gerenciamento de Indicadores"><Logo />SGI</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem name='logout' eventKey={2} href="#"><Glyphicon glyph="log-out"/> Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }

}

export default LoggedNavbar;