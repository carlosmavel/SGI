// src/logadoapp/Navbar.js
import React, { Component } from 'react';


class Navbar extends Component {
  render() {
    return(
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container">
          <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#app-navbar-collapse">
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <a className="navbar-brand" href="#">
                <p>Logo</p>
              </a>
              <a className="navbar-brand" href="#">
                <p>SGI</p>
              </a>
          </div>
          <div className="collapse navbar-collapse" id="app-navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
              <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div>
        </nav>






    );
  }
}

export default Navbar;
