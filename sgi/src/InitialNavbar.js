// src/InitialNavbar.js
import React, { Component } from 'react';

import Logo from './Logo.js';
import './logo.css';
import './initialNavbar.css';

import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';

class InitialNavbar extends Component {
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
              <NavItem name='signUp' onClick={this.props.toggleModal} eventKey={1} href="#"><Glyphicon glyph="user"/> Sign Up</NavItem>
              <NavItem name='login' onClick={this.props.toggleModal} eventKey={2} href="#"><Glyphicon glyph="log-in"/> Login</NavItem>
              <NavItem eventKey={3} href="#"><Glyphicon glyph="lock"/> Área Restrita</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }

}

export default InitialNavbar;
