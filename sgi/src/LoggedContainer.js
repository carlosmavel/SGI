// ./LoggedContainer.js
import React, { Component } from 'react';

import { Grid, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

//import SystemDescription from './SystemDescription';

class LoggedContainer extends Component {

	handleSelect = (eventKey) => {
		if (eventKey)
			this.props.setView(eventKey);
	}
	
	render(){
		return(
			<Grid>
				<Row>
					<Navbar onSelect={this.handleSelect}>
						<Navbar.Header>
							<Navbar.Brand>
								<a href="#">Início</a>
							</Navbar.Brand>
						</Navbar.Header>
						<Nav>
							<NavItem eventKey={"h_press"} href="#">Histórico de pressão</NavItem>
							<NavItem eventKey={"h_glice"} href="#">Histórico de glicemia</NavItem>
							<NavDropdown eventKey={null} title="Inserir dados" id="basic-nav-dropdown">
								<MenuItem eventKey={"i_press"}>Pressão</MenuItem>
								<MenuItem eventKey={"i_glice"}>Glicemia</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar>
				</Row>
				<Row>
					{this.props.theView}
				</Row>
			</Grid>
		);
	}

}

export default LoggedContainer;