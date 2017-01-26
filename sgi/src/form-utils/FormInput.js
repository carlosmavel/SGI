import React, { Component } from 'react';

import {
  FormControl,
  HelpBlock,
  FormGroup
} from 'react-bootstrap';

import '../Util.css';



class FormInput extends Component {

  constructor(props){
    super(props);
    this.state = {
      validationState: null,
      validationText: "",
      hideHelpBlock: "hidden"
    }
    this.input = null;
    this.value = "";
    switch(props.type){
      case "email":
        this.type = "email";
        this.instructions = this.validateUserName;
        this.placeholder = "Digite o email cadastrado";
        break;
      case "password":
        this.type = "password";
        this.instructions = this.validatePassword;
        this.placeholder = "Digite uma senha";
        break;
      case "doublePassword":
        this.type = "password";
        this.instructions = this.validateDoublePassword;
        this.placeholder = "Repita a senha";
        break;
      default:
        console.log("Invalid Type");
        break;
    }
  }

  validate = () => {

    if (this.input !== null & this.input !== undefined) {
      let userInput = this.input.value;
      if (userInput !== null & userInput !== undefined & userInput !== "") {
        this.instructions(userInput);
      } else {
        this.setState({
          validationState: "error",
          validationText: "Campo requerido",
          helpBlockState: ""
        });
      }
    }
  }

  validateUserName = (userInput) => {
    let rgx = /([\w.]+@[\w]+.[\w.]+)/g;
    this.value = rgx.exec(userInput);
    if(this.value !== null){
      this.props.setValue(this.input);
      this.setState({
        validationState: "success",
        helpBlockState: "hidden"
      });
    } else {
      this.setState({
        validationState: "error",
        validationText: "Por favor, digite um email válido. Ex:\"antonio@sgi.com.br\"",
        helpBlockState: ""
      });
    }
  }

  validatePassword = (userInput) => {
    let rgx = /(^[\w\d]{6,12}$)/g;
    this.value = rgx.exec(userInput);
    if(this.value !== null){
      this.props.setValue(this.input);
      this.setState({
        validationState: "success",
        helpBlockState: "hidden"
      });
    } else {
      this.setState({
        validationState: "error",
        validationText: "A senha inválida",
        helpBlockState: ""
      });
    }
  }

  validateDoublePassword = (userInput) => {
    let rgx = /(^[\w\d]{6,12}$)/g;
    this.value = rgx.exec(userInput);
    if(this.value !== null){
      this.props.setValue(this.input);
      this.setState({
        validationState: "success",
        helpBlockState: "hidden"
      });
    } else {
        this.setState({
          validationState: "error",
          validationText: "Por favor, digite uma senha válida. \nEla precisa ter no mínimo 6 caracteres e no máximo 12, ser constituída de letras e números e não pode conter símbolos como: \"!\",\"@\",\"%\".\nEx:\"abc123\".",
          helpBlockState: ""
        });
    }
  }

  refInput = (input) => {
    this.input = input;
  }


  render(){
    return (
      <FormGroup validationState={ this.state.validationState }>
        <FormControl
          inputRef={this.refInput}
          type={this.type}
          placeholder={this.placeholder}
          onChange={this.validate}
          onBlur={this.validate}
        />
        <FormControl.Feedback />
        <HelpBlock className={this.state.helpBlockState}>{this.state.validationText}</HelpBlock>
      </FormGroup>
    )
  }
}

export default FormInput;
