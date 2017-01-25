import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';
import Login from './Login.js';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {showLoginModal: false};
  }


  toggleLoginModal = () => {
      this.setState({showLoginModal: !this.state.showLoginModal});
  }

  render() {
    return (
      <div>
        <Navbar toggleLoginModal={this.toggleLoginModal} />
        <div className="container">
          <Login toggleLoginModal={this.toggleLoginModal} showLoginModal={this.state.showLoginModal} />
        </div>
      </div>
    );
  }
}

export default App;
