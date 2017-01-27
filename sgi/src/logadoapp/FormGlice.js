// src/logadoapp/FormGlice.js
import React, { Component } from 'react';
import * as fs from 'fs-web';

class FormGlice extends Component {

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

    var glicemia = this.state.value;

    let filePath = '../db/dados-glicemia.json';
    let dados = require('../db/dados-glicemia.json').glicemia;
    let ids = dados.map((dado) => {
      return dado.id;
    });
    let d = new Date();
    dados.push({
      "id": ids.length + 1,
      "userId": 1,
      "glicemia": glicemia,
      "data": d.toDateString()
    });
    fs.writeFile(filePath, dados)
      .then(
        () => {
          if (glicemia <=100) {
            alert('Valor menor que 100, classificação Normal (' + this.state.value + ')');
          } else if (glicemia >100 && glicemia <=125) {
            alert('Valor maior que 100 e menor 125, classificação: pre diabete (' + this.state.value + ')');
          } else if (glicemia > 125) {
            alert('Valor maior que 126, classificação: com diabete (' + this.state.value + ')');
          }

          this.props.setView("h_glice");
        },
        () => {

        }
      );
  }

  render() {
    return(

        <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>informe o resultado do teste de Glicemia </label>
                <input
                  type="number"
                  ref="ArterialMaxi"
                  className="form-control"
                  maxLength="3"
                  value={this.state.value} onChange={this.handleChange}
                  placeholder="Ex: 110 mg/dL"
                 />

                           
              </div>

                <button  
                  type="submit"
                  className="btn btn-primary">Enviar
                </button>
            </form>

    	
    );
  }
}

export default FormGlice;