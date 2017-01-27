// src/retorno/RetornoNaoUrgente.js
import React, { Component } from 'react';

import { Alert, Button } from 'react-bootstrap';

class RetornoNaoUrgente extends Component {
  render(){
    return(
      <Alert bsStyle="info">
        <h3><strong> Sua Pressão Arterial está Normal!</strong></h3>
        <p>Pratique atividade física aliada a uma alimentação balanceada para manter sua saúde em dia</p>
        <p>
        	<Button onClick={() => {this.props.toggleCollapse()}}>Hide Alert</Button>
        </p>
      </Alert>
    );
  }

}

export default RetornoNaoUrgente;
