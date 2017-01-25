// src/SystemDescription.js
import React, { Component } from 'react';

import InitialTitle from './InitialTitle';
import InitialTextDescription from './InitialTextDescription';

class SystemDescription extends Component{
  render(){
    return(
      <div>
        <InitialTitle />
        <InitialTextDescription />
      </div>
    );
  }
}

export default SystemDescription;
