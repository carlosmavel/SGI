// src/logadoapp/FormPress.js
import React, { Component } from 'react';

/*handleSubmit:function(e) {
  e.preventDefault();
  console.log(this.refs.ArterialMaxi.value);
  console.log(this.refs.arterialMini.value);
}*/

class FormPress extends Component {

   /* Mascara( campo, e )
              {
                var kC = (document.all) ? event.keyCode : e.keyCode;
                var ArterialMaxi = campo.value;
                
                if( ArterialMaxi.length==2 )
                {
                  campo.value = ArterialMaxi += '/';
                }
                else
                  campo.value = ArterialMaxi;
              }
       
        
         */  
      // onkeypress="mascara( this, event )"
                constructor(props) {
                super(props);
                this.state = {value: ''};

                  this.handleChange = this.handleChange.bind(this);
                  this.handleSubmit = this.handleSubmit.bind(this);
                }

                handleChange(event) {
                  this.setState({value: event.target.value});
                }

                handleSubmit(event) {

                  if (this.state.value<100) {
                  alert('valor maior que 100 Hipertensão: ' + this.state.value);
                  event.preventDefault();
                   }
                   if (this.state.value>100 && this.state.value<=140)  {
                    alert('valor maior que 100 e menor 140 Normal: ' + this.state.value);
                  event.preventDefault();
                  }
                  if (this.state.value>140 && this.state.value<=160)  {
                    alert('valor maior que 140 e menor 160 Hipertensão limite: ' + this.state.value);
                  }
                  if (this.state.value>160 && this.state.value<=180)  {
                    alert('valor maior que 160 e menor 180 Hipertensão moderada: ' + this.state.value);
                  }
                }
  render() {
    return(



       <form onSubmit={this.handleSubmit}>

              <div className="form-group">
                <label>Pressão Arterial Máxima/Mínima </label>
                <input
                  type="text"
                  maxlength="4"
                  ref="ArterialMaxi"
                  className="form-control"
                  value={this.state.value} onChange={this.handleChange}
                  
                  placeholder="Ex: 120/80 mmHg"
                 />

                           
              </div>

                <button  
                  type="submit"
                  className="btn btn-primary">Enviar
                </button>
        </form>

    	
    );
  }
}

export default FormPress;