import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import "../assets/css/medico-pub.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"

function MedicoPub() {
  const [activy, setActivy] = useState(true)

  return (
    <div className="background">
      <div id="mod-view-user">
        <div className="modal-bg">
          <div className="modal-view-pac">
            <div class="user exist">
            </div>
            <div>
              <h2>
                Nome do Perfil
              </h2>
            </div>
            <div className="mod-view-content">
              <div>
                <label>Nome: </label>
                <input />
              </div>
              <div>
                <label>Nascimento: </label>
                <input />
              </div>
              <div>
                <label>Genêro: </label>
                <label>Masculino</label>
              </div>
              <div>
                <label>Sexualidade: </label>
                <select>
                  <option value="hetero"> Hetero </option>
                  <option value="hetero"> Homo </option>
                  <option value="hetero"> Bi </option>
                  <option value="hetero"> Trans </option>
                  <option value="hetero"> Outro </option>
                  <option value="hetero"> Prefiro não responder </option>
                </select>
              </div>
              <div>
                <button>Contatar</button>
                <button>Reportar</button>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="mod-contact-user">
        <div className="modal-bg">
          <div className="modal-contact-pac">
            <div class="user exist">
            </div>
            <div>
              <h2>
                Nome do Perfil
              </h2>
            </div>
            <div>
              <h3>
                Entre em contato com este usuário:
              </h3>
            </div>
            <div className="mod-contact-content">
              <div>
                <label>Titulo: </label>
                <input />
              </div>
              <div>
                <label>Mensagem: </label>
                <textarea />
              </div>

              <div>
                <button>Enviar</button>
                <button>Voltar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mod-report-user">
        <div className="modal-bg">
          <div className="modal-report-pac">
            <div class="user exist">
            </div>
            <div>
              <h2>
                Nome do Perfil
              </h2>
            </div>
            <div>
              <h3>
                Reporte este usuário:
              </h3>
            </div>
            <div className="mod-report-content">
              <div>
                <label>Titulo: </label>
                <input />
              </div>
              <div>
                <label>Detalhes: </label>
                <textarea />
              </div>

              <div>
                <button>Reportar</button>
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
          <p className="selected-side-op">Pacientes</p>
          <p><Link to="/medico-cons">Consultas</Link></p>
          <p>Relatório</p>
          <p>Público</p>
        </aside>
        <div className="cont-med-pub-cen">
          <h1>
            Pacientes
          </h1>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Nascimento</th>
                <th>Código</th>
                <th>Stats</th>

                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Caique Pires
                </td>
                <td>
                  15/03/1997
                </td>
                <td>
                  #365448
                </td>
                <td>
                  4,17
                </td>
                <td>
                  <button>Ver</button>
                </td>
                <td>
                  <button> Contatar </button>
                </td>
                <td>
                  <button> Reportar</button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div >
  )
}

export default MedicoPub;