// ./LoggedContainer.js
import React, { Component } from 'react';

import { Grid, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import HomeLogged from './HomeLogged';
import HPressLogged from './consultaDados/HPressLogged';
import HGliceLogged from './consultaDados/HGliceLogged';
import Jumbotron from './logadoapp/Jumbotron';
import JumboGlice from './logadoapp/JumboGlice';

//import SystemDescription from './SystemDescription';

class LoggedContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			view: "initial"
		};
		this.views = {
			initial: <HomeLogged />,
			h_press: <HPressLogged />,
			h_glice: <HGliceLogged />,
			i_press: <Jumbotron setView={this.setView}/>,
			i_glice: <JumboGlice setView={this.setView} />
		}
	}

	setView = (view) => {
		this.setState({
			view: view
		});
	}
	
	render(){
		return(
			<Grid>
				<Row>
					<Navbar onSelect={this.setView}>
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
					{this.views[this.state.view]}
				</Row>
			</Grid>
		);
	}

}

export default LoggedContainer;