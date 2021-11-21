import React, { useState } from 'react'
import { act } from 'react-dom/test-utils'
import { Link } from 'react-router-dom'
import "../assets/css/medico-pac.css"
import "../assets/css/menu.css"
import "../assets/css/modal.css"

function MedicoPac() {
    const [activy, setActivy] = useState(true)

    return (
        <div className="background">
            <div id="mod-add-pac">
                <div className="modal-bg">
                    <div className="modal-add-pac">
                        <div class="user add">
                        </div>
                        <div className="switcher-add-pac">
                            <span className={(activy == true ? "activy" : "")} onClick={() => setActivy(true)}>Novo Usuário</span>
                            <span className={(activy == false ? "activy" : "")} onClick={() => setActivy(false)}>Usuário Existente</span>
                        </div>
                        {
                            activy == true && (
                                <>
                                    <div className="mod-add-itens-nu">
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
                                            <select>
                                                <option value="hetero"> Cis (Masculino/Feminino) </option>
                                                <option value="hetero"> Agênero </option>
                                                <option value="hetero"> Trans </option>
                                                <option value="hetero"> Não Binario </option>
                                                <option value="hetero"> Outro </option>
                                                <option value="hetero"> Prefiro não responder </option>
                                            </select>
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
                                            <button>Adicionar</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        {
                            activy == false && (
                                <>
                                    <div className="mod-add-itens-ue">
                                        <p> AQUI VAI USERS EXISTENTES</p>
                                        <div>
                                            <label>e-mail: </label>
                                            <input />
                                        </div>
                                        <center>
                                            <div>
                                                <h3>
                                                    OU
                                                </h3>
                                            </div>
                                        </center>
                                        <div>
                                            <label>Código: </label>
                                            <input />
                                        </div>
                                        <div>
                                            <button>Adicionar</button>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </div>
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
                                <select>
                                    <option value="hetero"> Cis (Masculino/Feminino) </option>
                                    <option value="hetero"> Agênero </option>
                                    <option value="hetero"> Trans </option>
                                    <option value="hetero"> Não Binario </option>
                                    <option value="hetero"> Outro </option>
                                    <option value="hetero"> Prefiro não responder </option>
                                </select>
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
                <div className="cont-med-pac-cen">
                    <h1>
                        Pacientes
                    </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>CPF</th>
                                <th>Paciente</th>
                                <th>Nascimento</th>
                                <th>Celular</th>
                                <th>Telefone</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    451515615165
                                </td>
                                <td>
                                    José
                                </td>
                                <td>
                                    15/04/2001
                                </td>
                                <td>
                                    98877442211
                                </td>
                                <td>
                                    456878788
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
                    <button className="add-pac">Adicionar Novo</button>
                </div>
            </div>
        </div >
    )
}

export default MedicoPac;