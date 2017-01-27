// src/consultaDados/HPressRow.js
import React, { Component } from 'react';


class HPressRow extends Component {

  	render() {
  		const {
  			pressao,
  			data
  		} = this.props;

		return(
			<tr>
				<td>{pressao}</td>
				<td>{data}</td>
			</tr>
		);
	}
}

export default HPressRow;