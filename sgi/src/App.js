import React, { Component } from 'react';
import './App.css';

import LoggedView from './LoggedView.js';
import InitialView from './InitialView.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: "initial",
      userID: 0
    };
    this.pages = {
      "initial": <InitialView setPage={this.setPage} setUserID={this.setUserID} />,
      "logged": <LoggedView setPage={this.setPage} userID={this.state.userID} />
    }
  }

  setPage = (page) => {
    this.setState({
      page: page
    });
  }
  setUserID = (id) => {
    this.setState({
      userID: id
    });
  }


  render(){
    return this.pages[this.state.page];
  }


}

export default App;
