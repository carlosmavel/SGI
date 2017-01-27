// ./LoggedContainer.js
import React, { Component } from 'react';

import { Grid, Row, Navbar, Nav, NavItem, NavDropdown, MenuItem, Collapse } from 'react-bootstrap';

import HomeLogged from './HomeLogged';
import HPressLogged from './consultaDados/HPressLogged';
import HGliceLogged from './consultaDados/HGliceLogged';
import Jumbotron from './logadoapp/Jumbotron';
import JumboGlice from './logadoapp/JumboGlice';

import RetornoEmergencia from './retorno/RetornoEmergencia';
import RetornoMuitoUrgente from './retorno/RetornoMuitoUrgente';
import RetornoNaoUrgente from './retorno/RetornoNaoUrgente';
import RetornoPoucoUrgente from './retorno/RetornoPoucoUrgente';
import RetornoUrgente from './retorno/RetornoUrgente';

//import SystemDescription from './SystemDescription';

class LoggedContainer extends Component {

	constructor(props) {
		super(props);
		this.state = {
			view: "initial",
			collapse_state: false,
			retorno: "n_urgente"
		};
		this.retornos = {
			emergencia: <RetornoEmergencia toggleCollapse={this.toggleCollapse} />,
			m_urgente: <RetornoMuitoUrgente toggleCollapse={this.toggleCollapse} />,
			n_urgente: <RetornoNaoUrgente toggleCollapse={this.toggleCollapse} />,
			p_urgente: <RetornoPoucoUrgente toggleCollapse={this.toggleCollapse} />,
			urgente: <RetornoUrgente toggleCollapse={this.toggleCollapse} />
		}
		this.views = {
			initial: <HomeLogged userId={this.props.userId} />,
			h_press: <HPressLogged userId={this.props.userId} />,
			h_glice: <HGliceLogged userId={this.props.userId} />,
			i_press: <Jumbotron
				setView={this.setView}
				userId={this.props.userId}
				setRetorno={this.setRetorno}
			/>,
			i_glice: <JumboGlice
				setView={this.setView}
				userId={this.props.userId}
				setRetorno={this.setRetorno}
			/>
		}
	}

	setView = (view) => {
		this.setState({
			view: view
		});
	}

	toggleCollapse = () => {
		this.setState({
			collapse_state: !this.state.collapse_state
		});
	}

	setRetorno = (retorno) => {
		this.setState({
			collapse_state: true,
			retorno: retorno
		});
	}

	render(){
		return(
			<Grid>
				<Row>
					<Navbar onSelect={this.setView}>
						<Navbar.Header>
							<Navbar.Brand>
								<a href="#" onClick={()=>{this.setView("initial")}}>Início</a>
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
				<Collapse in={this.state.collapse_state}>
					<div>
						{this.retornos[this.state.retorno]}
					</div>
				</Collapse>
				<Row>
					{this.views[this.state.view]}
				</Row>
			</Grid>
		);
	}

}

export default LoggedContainer;
