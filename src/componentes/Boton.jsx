import React from 'react';
import '../estilos/Boton.css';

function Boton(props){

  const esOperador = valor => {
    return isNaN(valor) && valor !== '.' && valor !== '=';
  };

  if (esOperador(props.children)) {
    return(
      <div 
        className="boton-contenedor operador"
        onClick={() => props.handleClick(props.children)}
      >
        {props.children }
      </div>
    );
  } else {
    return(
      <div 
        className="boton-contenedor"
        onClick={() => props.handleClick(props.children)}>
          {props.children }
      </div>
    );
  }

  /* estructura abreviada del codigo 
  return(
    <button 
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
    onClick={() => props.handleClick(props.children)}>
      {props.children }
    </button>
  );*/
}

export default Boton