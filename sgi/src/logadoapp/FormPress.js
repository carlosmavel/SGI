// src/logadoapp/FormPress.js
import React, { Component } from 'react';
import * as fs from 'fs-web';

class FormPress extends Component {

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
			this.setState({value: event.target.value});
	}

	handleSubmit(event) {
		event.preventDefault();

		var pressao = this.state.value.split("/");
		var max = (Number(pressao[0]) !== 10) && Number.isInteger(pressao[0] / 10) ? pressao[0] / 10 : pressao[0];
		var min = (Number(pressao[1]) !== 10) && Number.isInteger(pressao[1] / 10) ? pressao[1] / 10 : pressao[1];

		let filePath = '../db/dados-pressao.json';
		let dados = require('../db/dados-pressao.json').pressao;
		let ids = dados.map((dado) => {
			return dado.id;
		});
		ids.sort((a,b)=>{return a - b;});

		let d = new Date();
		dados.push({
			"id": ids[ids.length - 1] + 1,
			"userId": this.props.userId,
			"pressao": (max+"/"+min),
			"data": d.toDateString()
		});
		fs.writeFile(filePath, dados)
			.then(
				() => {

					if (max < 10 && min <= 6) {
						this.props.setRetorno("urgente");
						// alert('Valor maior que 100, classificação: HIPERTENSÃO (' + this.state.value + ')');
					} else if (max >= 10 && max < 14 && min >= 6 && min < 9) {
						this.props.setRetorno("");
						// alert('Valor maior que 100 e menor 140, classificação: NORMAL (' + this.state.value + ')');
					} else if (max >= 14 && max < 16 && min >= 9 && min < 10) {
						this.props.setRetorno("");
						// alert('Valor maior que 140 e menor 160, classificação: HIPERTENSÃO LIMITE (' + this.state.value + ')');
					} else if (max >= 16 && max <= 18 && min >= 10 && min < 11)  {
						this.props.setRetorno("");
						// alert('Valor maior que 160 e menor 180, classificação: HIPERTENSÃO MODERADA (' + this.state.value + ')');
					}

					this.props.setView("h_press");
				},
				() => {

				}
			);
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>

				<div className="form-group">
					<label>Pressão Arterial Máxima(Sistólica) / Mínima(Diastólica) </label>
					<input
						type="text"
						maxLength="7"
						ref="ArterialMaxi"
						className="form-control"
						pattern="\d{1,3}\/\d{1,3}"
						title="Ex: 120/80 mmHg"
						value={this.state.value}
						onChange={this.handleChange}
						placeholder="Ex: 120/80 mmHg"
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
				>
						Enviar
				</button>
			</form>
		);
	}
}

export default FormPress;
