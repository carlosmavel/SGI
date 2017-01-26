// src/logadoapp/Navbar.js
import React, { Component } from 'react';
import Jumbotron from './Jumbotron';
import Info from './Info';

class PanelForm extends Component {
  render() {
    return(

    	<div className="container">
    	 <div className="col-md-12">
    	  <div className="row">
    	  <div className="panel panel-primary"> 
    	   <div className="panel-heading">Pressão Arterial</div>
		      <div className="panel-body">
		      <div className="col-md-6">
		       <Jumbotron />
		       </div>
		       <div className="col-md-6">
		        <Info />
		        </div>
		     
			</div>    	
		  </div>
		  </div>
		  </div>
        </div>
    );
  }
}

export default PanelForm;