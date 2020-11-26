import './App.css';
import React, {Component} from 'react';
import Contador from './Contador';
import Login from './Login';

class App extends Component {

  render(){    
    return (
      <div id="principal">
        <div id='principal_login'>
          <div id='esquerdo'>
            <Login />
          </div>	
          <div id='direito'>
            <Contador />
          </div>	
        </div>
      </div>
    )
  }

}

export default App;
