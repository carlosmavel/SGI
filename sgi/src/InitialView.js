import React, { Component } from 'react';
import './InitialView.css';

import Login from './form-utils/Login';
import SignUp from './form-utils/SignUp.js'


import InitialNavbar from './InitialNavbar.js';
import InitialContainer from './InitialContainer.js';


const modals = {
  login: Login,
  signUp: SignUp
};


class InitialView extends Component {

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
    let ComponentModal = modals[this.state.modal?this.state.modal:"login"];
    let getModal = <ComponentModal toggleModal={this.toggleModal} setPage={this.props.setPage} showModal={this.state.showModal} setUserId={this.props.setUserId} />;
    return(
      <div>
        <InitialNavbar toggleModal={this.toggleModal} />
        <InitialContainer>
          {getModal}
        </InitialContainer>
      </div>);
  }


}

export default InitialView;
