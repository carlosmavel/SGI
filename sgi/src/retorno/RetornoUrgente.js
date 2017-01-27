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
          <h3><strong> Sua Pressão Arterial está um pouco Alta!</strong></h3>
          <p>Procure um local para fazer aferição</p>
        </Alert>
      </div>
    );
  }
}

export default RetornoUrgente;
