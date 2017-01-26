// src/retorno/RetornoEmergencia.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class RetornoEmergencia extends Component {
  render(){
    return(
      <Alert bsStyle="danger">
        <h3><strong> Sua Pressão Arterial está normal!</strong></h3>
        <p>Mantenha sua rotina de alimentação saudável e atividade física regularmente</p>
      </Alert>
    );
  }
}

export default RetornoEmergencia;
