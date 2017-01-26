import React, { Component } from 'react';

import FormInput from './FormInput.js';
import './Util.css';

import { Button,
  Col,
  Grid,
  Form,
  Modal
} from 'react-bootstrap';

class Login extends Component {
  constructor(props){
    super(props);
    this.email = null;
    this.password = null;

    this.inputConfigs = [
          { type: "email", setValue: this.setEmail },
          { type: "password", setValue: this.setPassword }
        ];

    this.inputs = this.inputConfigs.map((input)=>{
        return <FormInput key={input.type} type={input.type} setValue={input.setValue} />
      });
  }

  setEmail = (input) => {
    this.email = input;
  }

  setPassword = (input) => {
    this.password = input;
  }

  hide = () => {
    this.props.toggleModal();
  }

  finalValidation = () => {
    return (this.email && this.password);
  }

  submit = () => {
    if(this.finalValidation()){
      console.log(
        "Email: "
        + this.email.value
        + "\nSenha: "
        + this.password.value
      );
    } else {
      if(!confirm('As informações de login não foram válidas, tentar novamente?')){
        this.hide();
      }
    }
  }


  render() {
    return (
      <div className="static-modal">
        <Modal bsSize="sm" show={this.props.showModal} onHide={this.hide}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Grid componentClass={Form} horizontal fluid={true}>
                <Col md={12}>
                  {this.inputs}
                </Col>
              </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hide} > Close </Button>
            <Button onClick={this.submit} bsStyle="primary" > Login </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

  var users = [
      {"id":1,"email":"carlos@teste.com","password":"abc12345"},
      {"id":2,"email":"fabio@teste.com","password":"abc12345"},
      {"id":3,"email":"isaque@teste.com","password":"abc12345"},
      {"id":4,"email":"alisson@teste.com","password":"abc12345"}
    ];

export default Login;
