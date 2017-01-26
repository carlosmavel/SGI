import React, { Component } from 'react';

import FormInput from './FormInput.js'
import '../Util.css';

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
    return (this.email && this.password && (this.password === this.doublePassword));
  }

  submit = () => {
    if(this.finalValidation()){
      this.props.setPage("logged");
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
            <Button onClick={this.hide} > Close </Button>
            <Button onClick={this.submit} bsStyle="primary" > Login </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default SignUp;
