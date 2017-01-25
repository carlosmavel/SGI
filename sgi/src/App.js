import React, { Component } from 'react';
import './App.css';


import InitialNavbar from './InitialNavbar.js';
import InitialContainer from './InitialContainer.js';


class App extends Component {
  render() {
    return (
      <div>
        <InitialNavbar />
        <InitialContainer />
      </div>
    );
  }
}

export default App;
