import React, { Component } from 'react';
import './App.css';

import Login from './Login.js';
import SignUp from './SignUp.js'


import InitialNavbar from './InitialNavbar.js';
import InitialContainer from './InitialContainer.js';


const modals = {
  login: Login,
  signUp: SignUp
};


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      showModal: false,
      modal: "login",
    };
  }


  toggleModal = (modal) => {
    if(modal !== undefined){
      this.setState({
        showModal: !this.state.showModal,
        modal: modal.target.name
      });
    } else {
      this.setState({
        showModal: !this.state.showModal,
        modal: this.state.modal
      })
    }
  }

  render(){
    let ComponentModal = modals[this.state.modal];
    let getModal = <ComponentModal toggleModal={this.toggleModal} showModal={this.state.showModal} />;
    return (
      <div>
        <InitialNavbar toggleModal={this.toggleModal} />
        <InitialContainer>
          {getModal}
        </InitialContainer>
      </div>
    );

  }


}

export default App;
