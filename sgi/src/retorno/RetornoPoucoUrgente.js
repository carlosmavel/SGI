// src/retorno/RetornoPoucoUrgente.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class RetornoPoucoUrgente extends Component {
  render(){
    return(
      <Alert bsStyle="success">
        <h3><strong> Sua Pressão Arterial está normal!</strong></h3>
        <p>Mantenha sua rotina de alimentação saudável e atividade física regularmente</p>
      </Alert>
    );
  }
}

export default RetornoPoucoUrgente;
