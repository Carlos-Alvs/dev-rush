import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import "./css/login.css"

function Login() {
  return (

    <div className="background">
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <div className="container-login">
        <div className="container-form">
          <h1 className="container-title">Mentrica</h1>
          <span className="container-text">Efetue login para acessar os recursos</span>
          <form className="form-login">
            <div>
              <label>Login: </label>
              <input />
            </div>
            <div>
              <label>Senha: </label>
              <input type="password" />
            </div>
            <button className="form-button">Entrar</button>
          </form>
        </div>
      </div>

      <Footer />
    </div >
  )
}

export default Login;