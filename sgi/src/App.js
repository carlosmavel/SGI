import React, { Component } from 'react';
import './App.css';

import LoggedView from './LoggedView.js';
import InitialView from './InitialView.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      page: "initial",
    };
    this.pages = {
      "initial": <InitialView setPage={this.setPage} />,
      "logged": <LoggedView setPage={this.setPage} />
    }
  }

  setPage = (page) => {
    this.setState({
      page: page
    });
  }


  render(){
    return this.pages[this.state.page];
  }


}

export default App;
