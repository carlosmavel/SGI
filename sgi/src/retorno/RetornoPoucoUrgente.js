// src/retorno/RetornoPoucoUrgente.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class RetornoPoucoUrgente extends Component {
  render(){
    return(
      <Alert bsStyle="success">
        <h3><strong> Sua Pressão Arterial está um pouco Alterada!</strong></h3>
        <p>Procure um consultório médico e faça um checkup</p>
      </Alert>
    );
  }
}

export default RetornoPoucoUrgente;
