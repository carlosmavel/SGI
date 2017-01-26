// ./LoggedContainer.js
import React, { Component } from 'react';

import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import SystemDescription from './SystemDescription';

class LoggedContainer extends Component {
	handleSelect(eventKey) {
    	event.preventDefault();
    	alert(`selected ${eventKey}`);
	};
	
	render(){
		return(
			<Grid >
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="#">Início</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						<NavItem eventKey={1} href="#">Histórico de pressão</NavItem>
						<NavItem eventKey={2} href="#">Histórico de glicemia</NavItem>
						<NavDropdown eventKey={3} title="Inserir dados" id="basic-nav-dropdown">
							<MenuItem eventKey={3.1}>Pressão</MenuItem>
							<MenuItem eventKey={3.2}>Glicemia</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={3.3}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
			</Grid>
		);
	}

}

export default LoggedContainer;