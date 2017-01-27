import React, { Component } from 'react';
import './App.css';

import LoggedView from './LoggedView.js';
import InitialView from './InitialView.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: "initial",
      userId: 0,
    };
    this.pages = {
      "initial": <InitialView setPage={this.setPage} setUserId={this.setUserId} />,
      "logged": <LoggedView setPage={this.setPage} userId={this.getUserId} />
    }
  }

  setPage = (page) => {
    this.setState({
      page: page
    });
  }
  setUserId = (id) => {
    this.setState({
      userId: id
    });
  }
  getUserId = () => {
    return this.state.userId;
  }


  render(){
    return this.pages[this.state.page];
  }


}

export default App;
