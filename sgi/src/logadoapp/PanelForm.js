// src/logadoapp/Navbar.js
import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Info from './Info';

class PanelForm extends Component {
  render() {
    return(

    	<div className="container">
    	 <div className="panel panel-primary"> 
    	   <div className="panel-heading">Pressão Arterial</div>
		      <div className="panel-body">
		       <Jumbotron />
		        <Info />
		     
			</div>    	
		  </div>
        </div>
    );
  }
}

export default PanelForm;