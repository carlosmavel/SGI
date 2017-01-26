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
          <h3><strong> Sua Pressão Arterial está normal!</strong></h3>
          <p>Mantenha sua rotina de alimentação saudável e atividade física regularmente</p>
        </Alert>
      </div>
    );
  }
}

export default RetornoUrgente;
