// src/retorno/RetornoUrgente.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

import RetornoUrgenteStyle from'./RetornoUrgenteStyle.js';

class RetornoUrgente extends Component {
  render(){
    return(
      <div>
          <RetornoUrgenteStyle />
        <Alert bsStyle='custom'>
          <h3><strong> Sua Pressão Arterial está baixa!</strong></h3>
          <p>Procure uma Unidade de Saúde</p>
        </Alert>
      </div>
    );
  }
}

export default RetornoUrgente;
