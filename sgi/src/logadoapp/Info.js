import React, { Component } from 'react';


class Info extends Component {
  render() {
    return(

    	<h4>
    	
	      <span className="label label-info"> Costuma chamar de
		       12/8 (12 por 8), mas na verdade, a forma correta 
		       é 120/80 (120 por 80), pois este é o valor da pressão
		        em milímetros de mercúrio.

	      </span>
	      
	      <br></br>

	      <span className="label label-info">
		      Ex:
		       Pressão arterial de 120/80 mmHg.
		       Pressão 120 mmHg Máxima.
		       Pressão 80 mmHg Mínima.

		  </span>
		</h4>

    		


    	 );
  }
}

export default Info;