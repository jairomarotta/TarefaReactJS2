import React, {useState} from 'react';

const Login = props => {
  const [LoginEstado, setLoginEstado] = useState({
        imagem: "logout.png",
        texto: "Nenhum usuário logado!",
        botao: "Login",
        idLogin: 0
  });

  const changeLogin = () => {
    if(LoginEstado.idLogin === 1){
        setLoginEstado({
            imagem: "logout.png",
            texto: "Nenhum usuário logado!",
            botao: "Login",
            idLogin: 0
      });
    }else if(LoginEstado.idLogin === 0){
        setLoginEstado({
            imagem: "login.png",
            texto: "Usuário logado!",
            botao: "Logout",
            idLogin: 1
      });
    }
  }

  return(
      <div className="login">
        <div id="conteudo">
            <p><b>{LoginEstado.texto}</b></p>  
        
            <img src={LoginEstado.imagem} id="imagem" /> 
        </div>
        <div id="botao">
            <button type="button" onClick={changeLogin} className="botao">  {LoginEstado.botao} </button>
        </div>
      </div>
    );
}

export default Login;