// .LoggedView.js

import React, { Component } from 'react';

import LoggedNavbar from './LoggedNavbar';
import LoggedContainer from './LoggedContainer';

import HomeLogged from './HomeLogged';
import ConsultaDadosCadastrados from './HPressLogged';
import HGlicoLogged from './HGlicoLogged';
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
			h_press: <ConsultaDadosCadastrados />,
			h_glice: <HGlicoLogged />,
			i_press: <Jumbotron />,
			i_glice: <JumboGlice />
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
