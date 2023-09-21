import './App.css';
//import freeCodeCamplogo from './imagenes/fCC logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from "./componentes/BotonClear";
import { useState } from 'react';
import {evaluate} from 'mathjs';

function App() {
  
  const [input, setInput] = useState('');

  const agregarInput = val => {
      setInput(input + val);
  };

  const Result = ()=>{
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };


  return (
    <div className="App">
     {/* <div className="freecodecamp-logo-contenedor">
      <img 
        src={ freeCodeCamplogo }
        className="freecodecamp-logo"
        alt="Logo de freeCodeCamp" />
        </div>*/}
      <div className="contenedor-calculadora">
        <Pantalla input={input}/>
        <div className="fila">
          <Boton handleClick={agregarInput}> 1 </Boton>
          <Boton handleClick={agregarInput}> 2 </Boton>
          <Boton handleClick={agregarInput}> 3 </Boton>
          <Boton handleClick={agregarInput}> + </Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}> 4 </Boton>
          <Boton handleClick={agregarInput}> 5 </Boton>
          <Boton handleClick={agregarInput}> 6 </Boton>
          <Boton handleClick={agregarInput}> - </Boton>
        </div>
        <div className="fila">
          <Boton handleClick={agregarInput}> 7 </Boton>
          <Boton handleClick={agregarInput}> 8 </Boton>
          <Boton handleClick={agregarInput}> 9 </Boton>
          <Boton handleClick={agregarInput}> * </Boton>
        </div>
        <div className="fila">
          <Boton handleClick={Result}> = </Boton>
          <Boton handleClick={agregarInput}> 0 </Boton>
          <Boton handleClick={agregarInput}> . </Boton>
          <Boton handleClick={agregarInput}> / </Boton>
        </div>
        <div className="fila">
          <BotonClear handleClear={()=> setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
