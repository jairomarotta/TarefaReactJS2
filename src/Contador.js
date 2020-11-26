import React, {useState} from 'react';

const Contador = props => {
 
    const [channelState, setChannelState] = useState(0);

    return(
      <div>
          <p><b> Informe um texto: </b></p>  
          <input type="text" onChange={() => setChannelState(channelState + 1)} title="Informe um texto"></input>
          <p>Esse texto contém {channelState} caracteres.</p>
      </div>
    );
}

export default Contador;

