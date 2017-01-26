// src/logadoapp/Navbar.js
import React, { Component } from 'react';
import JumboGlice from './JumboGlice';
import InfoGlice from './InfoGlice';

class PanelFormGlice extends Component {
  render() {
    return(

    <div className="container">
      <div className="col-md-12">
    	<div className="row">
    	  <div className="panel panel-primary"> 
    	    <div className="panel-heading">Glicemia </div>
		      <div className="panel-body">
		      <div className="col-md-6">
		        <JumboGlice />
		       </div>
		       <div className="col-md-6">
		        <InfoGlice />
		       </div>
		     
			</div>    	
		  </div>
		</div>
	  </div>
    </div>
    );
  }
}

export default PanelFormGlice;