import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/medico-cons.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"

function MedicoCons() {
  const [value, onChange] = useState(new Date());
  return (
    <div className="background">

      <div className="modal-add-cons">
        <div className="modal-bg">
          <div className="mod-add-cons">
            <div className="mod-add-cons-content">
              <div>
                <label>Data: </label>
                <input />
              </div>
              <div>
                <label>Paciente (CPF): </label>
                <input />
              </div>
              <div>
                <label>Nome: </label>
                <input />
              </div>
              <div>
                <label>Tipo: </label>
                <select>
                  <option value="event"> Eventual </option>
                  <option value="rotina"> Rotina </option>
                </select>
              </div>

              <div>
                <button>Registrar</button>
                <button>Voltar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medico">Painel</Link></li>
          <li><Link to="/">Sair</Link></li>
        </ul>
      </nav>

      <div className="cont-principal">
        <aside className="side-menu">
          <p><Link to="/medico-pac">Pacientes</Link></p>
          <p className="selected-side-op"><Link to="/medico-cons">Consultas</Link></p>
          <p><Link to="/medico-rel">Relatório</Link></p>
          <p>Público</p>
        </aside>
        <div className="cont-cons-l">
          <p> ADICIONAR IFRAME POWER BI</p>
          <button>Nova consulta</button>
        </div>

      </div>
    </div >
  )
}

export default MedicoCons;