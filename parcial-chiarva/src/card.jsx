import React from "react";
import Formulario from './Formulario'


function Card ({ espacio1, espacio2 }) {
    


    return (
      <div className="card">
        <h2>Información del formulario</h2>
        <p> Escribe aqui tu: {espacio1}</p>
        <p>Cual es tu vehiculo favorito?: {espacio2}</p>

      </div>
    );
  }
  
  export default Card;
