// .LoggedView.js

import React, { Component } from 'react';

import LoggedNavbar from './LoggedNavbar';
import LoggedContainer from './LoggedContainer';

class LoggedView extends Component {

	render() {
		return (
			<div>
				<LoggedNavbar setPage={this.props.setPage} />
				<LoggedContainer userId={this.props.userId()} />
			</div>
		);
	};
}

export default LoggedView;
