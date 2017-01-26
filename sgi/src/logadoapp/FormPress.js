// src/logadoapp/FormPress.js
import React, { Component } from 'react';

/*handleSubmit:function(e) {
  e.preventDefault();
  console.log(this.refs.ArterialMaxi.value);
  console.log(this.refs.arterialMini.value);
}*/

class FormPress extends Component {
  render() {
    return(

       <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>Pressão Arterial Máxima/Mínima </label>
                <input
                  type="text"
                  ref="ArterialMaxi"
                  className="form-control"
                  placeholder="Ex: 120/80 mmHg"
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

export default FormPress;