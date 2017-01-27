// src/consultaDados/HPressLogged.js
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import HPressRow from './HPressRow';

class HPressLogged extends Component {

	render(){

		const rows = [];
		let coletaPressao = require('../db/dados-pressao.json').pressao;
		coletaPressao.sort((a, b) => {
			return new Date(b.data) - new Date(a.data);
		});
		coletaPressao.forEach(pressao => {
			if(pressao.userId === this.props.userId){
				rows.push(
					<HPressRow
						key={pressao.id}
						pressao={pressao.pressao}
						data={pressao.data}
					/>
				);
			}
		});

		return(
			<Table responsive>
				<thead>
					<tr>
						<th>Data</th>
						<th>Pressão</th>
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

export default HPressLogged;
