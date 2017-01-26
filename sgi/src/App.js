import React, { Component } from 'react';
import './App.css';

import Login from './Login.js';
import SignUp from './SignUp.js'


import InitialNavbar from './InitialNavbar.js';
import InitialContainer from './InitialContainer.js';
// import InitialView from './InitialView.js';

import LoggedView from './LoggedView.js';



const modals = {
  login: Login,
  signUp: SignUp
};


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: "initial",
      showModal: false,
      modal: "login",
    };
  }

  setLogado = () => {
    this.setState({page: "logged"});
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
    switch (this.state.page) {
      case "initial":
        let ComponentModal = modals[this.state.modal?this.state.modal:"login"];
        let getModal = <ComponentModal toggleModal={this.toggleModal} showModal={this.state.showModal} setLogado={this.setLogado} />;

        return (
          <div>
            <InitialNavbar toggleModal={this.toggleModal} />
            <InitialContainer>
              {getModal}
            </InitialContainer>

          </div>
        );
        break;

      case "logged":
        return (
          <LoggedView />
        );
        break;
    }
  }


}

export default App;
