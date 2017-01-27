// src/consultaDados/HPressRow.js
import React, { Component } from 'react';


class HPressRow extends Component {

  	render() {
  		const {
  			pressao,
  			data
  		} = this.props;

		let pre = pressao.split("/");
		let max = Number.isInteger(pre[0] / 10) && (pre[0] !== 10) ? pre[0] / 10 : pre[0];
		let min = Number.isInteger(pre[1] / 10) ? pre[1] / 10 : pre[1];

  		let estado;

  		if (max < 10 && min <= 6) {
  			estado = "Hipertensão";
		} else if (max >= 10 && max < 14 && min >= 6 && min < 9) {
			estado = "Normal";
		} else if (max >= 14 && max < 16 && min >= 9 && min < 10) {
			estado = "Hipertensão limite";
		} else  {
			estado = "Hipertensão moderada";
		}

		return(
			<tr>
				<td>{new Date(data).toLocaleDateString()}</td>
				<td>{pressao}</td>
				<td>{estado}</td>
			</tr>
		);
	}
}

export default HPressRow;