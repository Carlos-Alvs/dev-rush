import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/medico-rel.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"

function MedicoRel() {

  return (
    <div className="background">
      <nav id="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/medico">Painel</Link></li>
          <li><Link to="/">Sair</Link></li>
        </ul>
      </nav>

      <div className="cont-principal-rel">
        <aside className="side-menu">
          <p><Link to="/medico-pac">Pacientes</Link></p>
          <p><Link to="/medico-cons">Consultas</Link></p>
          <p className="selected-side-op"><Link to="/medico-rel">Relatório</Link></p>
          <p>Público</p>
        </aside>
        <div className="cont-rel-center">
          <p> ADICIONAR IFRAME POWER BI</p>
        </div>

      </div>
    </div >
  )
}

export default MedicoRel;