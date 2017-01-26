import React, { Component } from 'react';


class Info extends Component {
  render() {
    return(
    

    	<h5>
    	<div className="alert alert-info" role="alert">Costuma chamar de
		       12/8 (12 por 8), mas na verdade, a forma correta 
		       é 120/80 (120 por 80), pois este é o valor da pressão
		        em milímetros de mercúrio.

		</div>

		<div className="alert alert-info" role="alert">
			   Ex:
		       Pressão arterial de 120/80 mmHg.
		       Pressão 120 mmHg Máxima.
		       Pressão 80 mmHg Mínima.
		       </div>
		</h5>
    	
    	 );
  }
}

export default Info;