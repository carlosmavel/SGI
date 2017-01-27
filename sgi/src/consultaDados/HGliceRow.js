// ./src/consultaDados/HGliceRow.js

import React, { Component } from 'react';

class HGliceRow extends Component {
	render() {
		const {
			data,
			glicemia
		} = this.props;

		let classi;
		if (glicemia <=100) {
			classi = "Normal";
		} else if (glicemia >100 && glicemia <=125) {
			classi = "Pre diabete";
		} else if (glicemia > 125) {
			classi = "Com Diabete";
		}

		return(
			<tr>
				<td>{new Date(data).toLocaleDateString()}</td>
				<td>{glicemia}</td>
				<td>{classi}</td>
			</tr>
		);
	}
}

export default HGliceRow;