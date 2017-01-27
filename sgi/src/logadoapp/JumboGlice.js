// src/logadoapp/Jumbotron.js
import React, { Component } from 'react';
import FormGlice from './FormGlice';

class JumboGlice extends Component {
  render() {
    return(

        <div className="jumbotron">
          <h2>Informe o teste de Glicemia </h2>
            <div className="row">
               <FormGlice
                setView={this.props.setView}
                userId={this.props.userId}
                setRetorno={this.props.setRetorno}
              />
            </div>
        </div>

		);
  }
}

export default JumboGlice;
