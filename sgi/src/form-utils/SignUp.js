import React, { Component } from 'react';
import FormInput from './FormInput.js'
import '../Util.css';
import * as fs from 'fs-web';

import { Button,
	Col,
	Grid,
	Form,
	Modal
} from 'react-bootstrap';


class SignUp extends Component {
  constructor(props){
    super(props);
    this.email = null;
    this.password = null;
    this.userId = null;

    this.inputConfigs = [
          { type: "email", setValue: this.setEmail },
          { type: "doublePassword", setValue: this.setDoublePassword },
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

  setDoublePassword = (input) => {
    this.doublePassword = input;
  }

  hide = () => {
    this.props.toggleModal();
  }


  finalValidation = () => {
    if(this.email && this.password && this.doublePassword){
      if(!(this.password.value === this.doublePassword.value)){
        this.showError("As senhas digitadas não estão iguais, tentar novamente?");
        return false;
      }
    }else{
      this.showError('As informações de login não foram válidas, tentar novamente?');
      return false;
    }
    return true;
  }

  saveUser = () => {
    let filePath = '../db/users.json';
    let users = require('../db/users.json').users;
    let ids = users.map((user)=>{
      return user.id;
    });
    ids.sort();
    this.userId = ids[ids.length - 1 ] + 1;
    users.push({
      "id": this.userId,
      "email": this.email.value,
      "password": this.password.value
    });
    fs.writeFile(filePath,users)
    .then(()=>{
      this.props.setUserId(this.userId);
      this.props.setPage("logged");
    }
    ,()=>{
      this.showError("Não foi possível salvar, tentar novamente?");
    });
  }

  showError = (msg) => {
    if(!confirm(msg)){
      this.hide();
    }
  }


  submit = () => {
    if(this.finalValidation()){
      this.saveUser();
    }
  }

  render() {
    return (
      <div className="static-modal">
        <Modal bsSize="sm" show={this.props.showModal} onHide={this.hide}>
          <Modal.Header>
            <Modal.Title>SignUp</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Grid componentClass={Form} horizontal fluid={true}>
                <Col md={12}>
                    {this.inputs}
                </Col>
              </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hide} > Fechar </Button>
            <Button onClick={this.submit} bsStyle="primary" > Cadastrar </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
