// .LoggedView.js

import React, { Component } from 'react';

import LoggedNavbar from './LoggedNavbar';
import LoggedContainer from './LoggedContainer';

import HomeLogged from './HomeLogged';
import HPressLogged from './consultaDados/HPressLogged';
import HGliceLogged from './consultaDados/HGliceLogged';
import Jumbotron from './logadoapp/Jumbotron';
import JumboGlice from './logadoapp/JumboGlice';


class LoggedView extends Component {

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

	render() {
		return (
			<div>
				<LoggedNavbar setPage={this.props.setPage} />
				<LoggedContainer
					theView={this.views[this.state.view]}
					setView={this.setView}
				/>
			</div>
		);
	};
}

export default LoggedView;
