import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/medico.css"
import "../assets/css/menu.css"

function Medico() {
    return (
        <div className="background">
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
                    <p><Link to="/medico-cons">Consultas</Link></p>
                    <p>Relatório</p>
                    <p>Público</p>
                </aside>
                <div className="cont-med-l">
                    <p> ADICIONAR IFRAME POWER BI</p>
                    <button>AQUI</button>
                </div>
                <div className="cont-med-r">
                    <p> ADICIONAR IFRAME POWER BI</p>
                    <button>AQUI</button>
                </div>
            </div>
        </div >
    )
}

export default Medico;