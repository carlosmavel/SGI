// src/retorno/RetornoEmergencia.js
import React, { Component } from 'react';

import { Alert, Button } from 'react-bootstrap';

class RetornoEmergencia extends Component {
  render(){
    return(
      <Alert bsStyle="danger">
        <h3><strong> Sua Pressão Arterial está muito Alta!</strong></h3>
        <p>Procure um Hospital com urgência</p>
        <p>
        	<Button onClick={() => {this.props.toggleCollapse()}}>Fechar</Button>
        </p>
      </Alert>
    );
  }
}

export default RetornoEmergencia;
