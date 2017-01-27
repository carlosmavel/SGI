// src/consultaDados/HPressRow.js
import React, { Component } from 'react';
import { Label } from 'react-bootstrap';

class HPressRow extends Component {

  	render() {
  		const {
  			pressao,
  			data
  		} = this.props;

		let pre = pressao.split("/");
		let max = (Number(pre[0]) !== 10) && Number.isInteger(pre[0] / 10) ? pre[0] / 10 : pre[0];
		let min = (Number(pre[1]) !== 10) && Number.isInteger(pre[1] / 10) ? pre[1] / 10 : pre[1];

  		let classi;
  		let style;

  		if (max < 10 && min < 6) {
  			classi = "Hipertensão";
  			style = "danger";
		} else if (max >= 10 && max < 14 && min >= 6 && min < 9) {
			classi = "Normal";
			style = "default";
		} else if (max >= 14 && max < 16 && min >= 9 && min < 10) {
			classi = "Hipertensão limite";
			style = "success";
		} else if (max >= 16 && max < 18 && min >= 10 && min < 11)  {
			classi = "Hipertensão moderada";
			style = "warning";
		}

		return(
			<tr>
				<td>{new Date(data).toLocaleDateString()}</td>
				<td>{pressao}</td>
				<td><Label bsStyle={style}>{classi}</Label></td>
			</tr>
		);
	}
}

export default HPressRow;