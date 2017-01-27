// src/logadoapp/FormPress.js
import React, { Component } from 'react';

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
		var max = Number.isInteger(pressao[0] / 10) && (pressao[0] !== 10) ? pressao[0] / 10 : pressao[0];
		var min = Number.isInteger(pressao[1] / 10) ? pressao[1] / 10 : pressao[1];

		if (max < 10 && min <= 6) {
			alert('valor maior que 100 Hipertensão: ' + this.state.value);
		} else if (max >= 10 && max < 14 && min >= 6 && min < 9) {
			alert('valor maior que 100 e menor 140 Normal: ' + this.state.value);
		} else if (max >= 14 && max < 16 && min >= 9 && min < 10) {
			alert('valor maior que 140 e menor 160 Hipertensão limite: ' + this.state.value);
		} else if (max >= 16 && max < 18 && min >= 10 && min < 11)  {
			alert('valor maior que 160 e menor 180 Hipertensão moderada: ' + this.state.value);
		}
	}

	render() {
		return(
			<form onSubmit={this.handleSubmit}>

				<div className="form-group">
					<label>Pressão Arterial Máxima/Mínima </label>
					<input
						type="text"
						maxLength="4"
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