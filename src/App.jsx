
import { useState } from 'react';

import jpIMP from './imgs/bonequinho.jpg';
import './style.css';


function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div>
      <div className="container">
        <div className="container-login">
          <div className="wrap-login">
            <form action="" className="login-form">
              <span className="login-form-title">Bem Vindo!</span>
              <span className="login-form-title">
                <img src={jpIMP} alt="jovem programador" />
              </span>
              <div className="werp-input">
                <input 
                  type="email"
                  className={email !== "" ? 'has-val input' : 'input'}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  
                />
                <span className="focus-input" data-placeholder='Email'></span>
              </div>
              <div className="werp-input">
                <input 
                  type="password" 
                  className={password !== "" ? 'has-val input' : 'input'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder='Password'></span>
              </div>
              <div className="container-login-form-btn">
                <button className="login-form-btn">Login</button>
              </div>
              <div className="text-center">
                <span className="txt1">Esqueceu sua senha?</span>
                <a href="#" className="txt2">Clique Aqui!</a>
              </div>
              <div className="text-center">
                <span className="txt1">Nao possui conta?</span>
                <a href="#" className="txt2">Cria conta.</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
