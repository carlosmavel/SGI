// src/Logo.js
import React, { Component } from 'react';

import logo from './img/logo.png';

class Logo extends Component{
  render(){
    return(
      <a href="#">
      <img className="logoSize" src={logo} title="Home" alt="Logo SGI" />
      </a>
    );
  }
}

export default Logo;
