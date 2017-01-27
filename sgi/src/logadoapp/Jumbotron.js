// src/logadoapp/Jumbotron.js
import React, { Component } from 'react';
import FormPress from './FormPress';

class Jumbotron extends Component {

	render() {
		return(

				<div className="jumbotron">
					<h2>Informe a Presssão Arterial</h2>
						<div className="row">
							<FormPress
								setView={this.props.setView}
								userId={this.props.userId}
								setRetorno={this.props.setRetorno}
							/>

						</div>
				</div>

		);
	}
}

export default Jumbotron;
