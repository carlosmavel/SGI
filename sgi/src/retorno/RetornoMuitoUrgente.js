// src/retorno/RetornoMuitoUrgente.js
import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';

class RetornoMuitoUrgente extends Component {
  render(){
    return(
      <Alert bsStyle="warning">
        <h3><strong> Sua Pressão Arterial está Alta!</strong></h3>
        <p>Procure um consultório Médico</p>
      </Alert>
    );
  }
}

export default RetornoMuitoUrgente;
