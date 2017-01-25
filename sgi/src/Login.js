import React, { Component } from 'react';
import './Login.css';

import { Button,
  Col,
  Grid,
  Form,
  FormControl,
  HelpBlock,
  FormGroup,
  Modal
} from 'react-bootstrap';


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      emailValidationState: null,
      passwordValidationState: null,
      hideEmailHelpBlock: "hidden",
      hidePasswordHelpBlock: "hidden"
    };
    this.email = null;
    this.password = null;
  }

  validateEmail = () =>{
    if(this.email.value === "test"){
      this.setState({
        emailValidationState: "success",
        hideEmailHelpBlock: "hidden"
      });
      return true;
    } else {
      this.setState({
        emailValidationState: "error",
        hideEmailHelpBlock: null
      });
      return false;
    }
  }

  validatePassword = () =>{
    if(this.password.value === "test"){
      this.setState({
        passwordValidationState: "success",
        hidePasswordHelpBlock: "hidden"
      });
      return true;
    } else {
      this.setState({
        passwordValidationState: "error",
        hidePasswordHelpBlock: null
      });
      return false;
    }
  }

  hideLoginModal = () => {
    this.setState({
      emailValidationState: null,
      passwordValidationState: null,
      hideEmailHelpBlock: "hidden",
      hidePasswordHelpBlock: "hidden"
    });
    this.props.toggleLoginModal();
  }

  finalValidation = () => {
    return (this.validateEmail() && this.validatePassword());
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
        this.hideLoginModal();
      }
    }
  }

  render() {
    return (
      <div className="static-modal">
        <Modal bsSize="sm" show={this.props.showLoginModal} onHide={this.hideLoginModal}>
          <Modal.Header>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Grid componentClass={Form} horizontal fluid={true}>
                <Col md={12}>
                    <FormGroup validationState={ this.state.emailValidationState }>
                      <FormControl
                        inputRef={(email) => { this.email = email; }}
                        type="text"
                        placeholder="Digite o nome de usuário"
                        onChange={this.validateEmail}
                      />
                      <FormControl.Feedback />
                      <HelpBlock className={this.state.hideEmailHelpBlock}>Digite test para entrar</HelpBlock>
                    </FormGroup>
                    <FormGroup validationState={ this.state.passwordValidationState }>
                      <FormControl
                        inputRef={(password) => { this.password = password; }}
                        type="password"
                        placeholder="Digite a senha"
                        onChange={this.validatePassword}
                      />
                      <FormControl.Feedback />
                      <HelpBlock className={this.state.hidePasswordHelpBlock}>Digite test para entrar</HelpBlock>
                    </FormGroup>
                </Col>
              </Grid>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideLoginModal} > Close </Button>
            <Button onClick={this.submit} bsStyle="primary" > Login </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Login;
