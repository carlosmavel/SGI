// src/logadoapp/FormPress.js
import React, { Component } from 'react';


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
   
    if (glicemia <=100) {
      alert('valor menor que 100 Normal: ' + this.state.value);
    } else if (glicemia >100 && glicemia <=125) {
      alert('valor maior que 100 e menor 125 Pre diabete: ' + this.state.value);
    } else if (glicemia > 125) {
      alert('valor maior que 126 Com Diabete: ' + this.state.value);
    }
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