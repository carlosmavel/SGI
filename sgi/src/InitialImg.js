// src/InitialImg
import React, { Component } from 'react';

import { Col } from 'react-bootstrap';
import './logo.css';
import logo from './img/logo.png';

class InitialImg extends Component {
  render(){
    return(
      <Col >
        <img className="logoSize" src={logo} />
      </Col>
    );
  }

}

export default InitialImg;
