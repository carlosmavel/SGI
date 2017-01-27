// src/retorno/RetornoNaoUrgente.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class RetornoNaoUrgente extends Component {
  render(){
    return(
      <Alert bsStyle="info">
        <h3><strong> Sua Pressão Arterial está um pouco fora no Normal!</strong></h3>
        <p>Pratique atividade física aliada a uma alimentação balanceada</p>
      </Alert>
    );
  }

}

export default RetornoNaoUrgente;
