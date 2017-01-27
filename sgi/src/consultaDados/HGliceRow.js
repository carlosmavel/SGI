// ./src/consultaDados/HGliceRow.js

import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

class HGliceRow extends Component {
	render() {
		const {
			data,
			glicemia
		} = this.props;

		let classi;
		let style;
		if (glicemia <=100) {
			classi = "Normal";
			style = "success";
		} else if (glicemia >100 && glicemia <=125) {
			classi = "Pre diabete";
			style = "warning";
		} else if (glicemia > 125) {
			classi = "Com Diabete";
			style = "danger";
		}

		return(
			<tr>
				<td>{new Date(data).toLocaleDateString()}</td>
				<td>{glicemia}</td>
				<td><Label bsStyle={style}>{classi}</Label></td>
			</tr>
		);
	}
}

export default HGliceRow;