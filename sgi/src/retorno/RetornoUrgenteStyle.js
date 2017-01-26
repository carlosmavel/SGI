import React, { Component } from 'react';

import { Alert } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
bootstrapUtils.addStyle(Alert, 'custom');

class RetornoUrgenteStyle extends Component {
  render(){
    return(
      <style type="text/css">{`
        .alert-custom {
        background-color: #ffff6e;
        color: #333;
        background: rgba(255, 255, 0, 0.3);
        border-color: #e9f746;
        }
      `}</style>
    );
  }
}

export default RetornoUrgenteStyle;
