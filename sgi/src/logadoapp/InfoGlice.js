import React, { Component } from 'react';


class InfoGlice extends Component {
  render() {
    return(
    

    	<h5>
    		<div 
    			className="alert alert-info" role="alert">Glicemia em jejum: 70 a 99 mg/dL 
			</div>

			<div 
				className="alert alert-info" role="alert"> 
				Glicemia pós-prandial até 2 horas após alimentação: 70 a 140 mg/dL 
		    </div>
		</h5>
    	
    	 );
  }
}

export default InfoGlice;