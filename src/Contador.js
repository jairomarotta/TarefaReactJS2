import React, {useState} from 'react';

const Contador = props => {
 
    const [inputState, setInputState] = useState(0);

    return(
      <div>
          <p><b> Informe um texto: </b></p>  
          <input type="text" onChange={() => setInputState(inputState + 1)} title="Informe um texto"></input>
          <p>Esse texto contém {inputState} caracteres.</p>
      </div>
    );
}

export default Contador;

