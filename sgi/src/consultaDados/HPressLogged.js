// src/consultaDados/HPressLogged.js
import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import HPressRow from './HPressRow';

// var coletaPressao = [
// 	{"id": 1, "userId": 1, "pressao": "12/8", data:"20/08/1990"},
// 	{"id": 2, "userId": 1, "pressao": "14/9", data:"20/08/1990"},
// 	{"id": 3, "userId": 1, "pressao": "16/10", data:"20/08/1990"},
// 	{"id": 4, "userId": 1, "pressao": "18/11", data:"20/08/1990"},
// 	{"id": 5, "userId": 2, "pressao": "12/8", data:"20/08/1990"},
// 	{"id": 6, "userId": 2, "pressao": "14/9", data:"20/08/1990"},
// 	{"id": 7, "userId": 2, "pressao": "16/10", data:"20/08/1990"},
// 	{"id": 8, "userId": 2, "pressao": "18/11", data:"20/08/1990"},
// 	{"id": 9, "userId": 3, "pressao": "12/8", data:"20/08/1990"},
// 	{"id": 10, "userId": 3, "pressao": "14/9", data:"20/08/1990"},
// 	{"id": 11, "userId": 3, "pressao": "16/10", data:"20/08/1990"},
// 	{"id": 12, "userId": 3, "pressao": "18/11", data:"20/08/1990"},
// 	{"id": 13, "userId": 4, "pressao": "12/8", data:"20/08/1990"},
// 	{"id": 14, "userId": 4, "pressao": "14/9", data:"20/08/1990"},
// 	{"id": 15, "userId": 4, "pressao": "16/10", data:"20/08/1990"},
// 	{"id": 16, "userId": 4, "pressao": "18/11", data:"20/08/1990"}
// ];

class HPressLogged extends Component {
		
	render(){

		const rows = [];
		let coletaPressao = require('../db/dados-pressao.json').pressao;
		coletaPressao.forEach(pressao => {
			rows.push(
				<HPressRow
					key={pressao.id}
					// userId={pressao.userId}
					pressao={pressao.pressao}
					data={pressao.data}
				/>
			);
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
