// src/retorno/RetornoNaoUrgente.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class RetornoNaoUrgente extends Component {
  render(){
    return(
      <Alert bsStyle="info">
        <h3><strong> Sua Pressão Arterial está normal!</strong></h3>
        <p>Mantenha sua rotina de alimentação saudável e atividade física regularmente</p>
      </Alert>
    );
  }

}

export default RetornoNaoUrgente;
