import React, { Component } from 'react';

import FormInput from './FormInput.js';

import '../Util.css';

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
    this.userId = null;

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
      if(this.checkUser()){
        this.props.setUserId(this.userId);
        this.props.setPage("logged");
      } else {
        if(!confirm("Usuário não encontrado, tentar novamente?")){
          this.hide();
        }
      }
    } else {
      if(!confirm('As informações de login não foram válidas, tentar novamente?')){
        this.hide();
      }
    }
  }

  checkUser = () => {
    let users = require('../db/users.json').users;
    for(let user of users){
      if(user.email === this.email.value.trim() && user.password === this.password.value.trim()){
        this.userId = user.id;
        return true;
      }
    }
    return false;
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




export default Login;
