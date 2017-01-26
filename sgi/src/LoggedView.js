// .LoggedView.js

import React, { Component } from 'react';

import LoggedNavbar from './LoggedNavbar';
import LoggedContainer from './LoggedContainer';

import HomeLogged from './HomeLogged';
import HPressLogged from './HPressLogged';
import HGlicoLogged from './HGlicoLogged';
import IPressLogged from './IPressLogged';
import IGliceLogged from './IGliceLogged';


class LoggedView extends Component {

	constructor(props) {
		super(props);
		this.state = {
			view: "initial"
		};
		this.views = {
			initial: <HomeLogged />,
			h_press: <HPressLogged />,
			h_glice: <HGlicoLogged />,
			i_press: <IPressLogged />,
			i_glice: <IGliceLogged />
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