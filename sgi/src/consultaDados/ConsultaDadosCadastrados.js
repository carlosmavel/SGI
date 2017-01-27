// src/consultaDados/ConsultaDadosCadastrados.js
import React, { Component } from 'react';

import ColetadadosRow from './ColetadadosRow.js';

class ConsultaDadosCadastrados extends Component {

    
    
  render(){


    const rows = [];
    coletaPressao.forEach(pressao => {
     rows.push(
              <ColetadadosRow
                key={id}
                userId={userId}
                pressao={pressao}
              />
            );
          }
        });
    return(

              <table className="Histórico">
                <thead>
                  <tr>
                    <th>Pressão</th>
                    <th>Data</th>
                  </tr>
                </thead>
                <tbody>
                  {rows}
                </tbody>
              </table>


    );
  }
}

  var coletaPressao = [
    {"id": 1, "userId": 1, "pressao": "12/8", data:"20/08/1990"},
    {"id": 2, "userId": 1, "pressao": "14/9", data:"20/08/1990"},
    {"id": 3, "userId": 1, "pressao": "16/10", data:"20/08/1990"},
    {"id": 4, "userId": 1, "pressao": "18/11", data:"20/08/1990"},
    {"id": 5, "userId": 2, "pressao": "12/8", data:"20/08/1990"},
    {"id": 6, "userId": 2, "pressao": "14/9", data:"20/08/1990"},
    {"id": 7, "userId": 2, "pressao": "16/10", data:"20/08/1990"},
    {"id": 8, "userId": 2, "pressao": "18/11", data:"20/08/1990"},
    {"id": 9, "userId": 3, "pressao": "12/8", data:"20/08/1990"},
    {"id": 10, "userId": 3, "pressao": "14/9", data:"20/08/1990"},
    {"id": 11, "userId": 3, "pressao": "16/10", data:"20/08/1990"},
    {"id": 12, "userId": 3, "pressao": "18/11", data:"20/08/1990"},
    {"id": 13, "userId": 4, "pressao": "12/8", data:"20/08/1990"},
    {"id": 14, "userId": 4, "pressao": "14/9", data:"20/08/1990"},
    {"id": 15, "userId": 4, "pressao": "16/10", data:"20/08/1990"},
    {"id": 16, "userId": 4, "pressao": "18/11", data:"20/08/1990"}
  ];

export default ConsultaDadosCadastrados;
