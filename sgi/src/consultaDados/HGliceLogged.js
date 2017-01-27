// ./HGlicoLogged.js
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import HGliceRow from './HGliceRow';

class HGliceLogged extends Component {
	render() {
		const rows = [];
		let coletaGlicemia = require('../db/dados-glicemia.json').glicemia;
		coletaGlicemia.sort((a, b) => {
			return new Date(b.data) - new Date(a.data);
		});
		coletaGlicemia.forEach(glicemia => {
			if(glicemia.userId === this.props.userId){
				rows.push(
					<HGliceRow
						key={glicemia.id}
						data={glicemia.data}
						glicemia={glicemia.glicemia}
					/>
				);
			}
		})

		return (
			<Table responsive>
				<thead>
					<tr>
						<th>Data</th>
						<th>Glicemia</th>
						<th>Classificação</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</Table>
		);
	}
}

export default HGliceLogged;
