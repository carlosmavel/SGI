// src/Logo.js
import React, { Component } from 'react';

import logo from './img/logo.png';

class Logo extends Component{
  render(){
    return(
      <img className="logoSize" src={logo} title="Home" alt="Logo SGI" />
    );
  }
}

export default Logo;
