import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';

import Login from './Login.js';
import SignUp from './SignUp.js'



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

  render() {

    let ComponentModal = modals[this.state.modal];
    let getModal = <ComponentModal toggleModal={this.toggleModal} showModal={this.state.showModal} />;
    return (
      <div>
        <Navbar toggleModal={this.toggleModal} />
        <div className="container">
          {getModal}
        </div>
      </div>
    );
  }
}

export default App;
