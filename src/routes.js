import React from 'react'
import Land from './pages/Land'
import Medico from './pages/Medico'
import Paciente from './pages/Paciente'
import Login from './pages/Login'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Land} />
            <Route path="/medico" exact component={Medico} />
            <Route path="/paciente" exact component={Paciente} />
            <Route path="/login" exact component={Login} />
        </BrowserRouter>
    )
}

export default Routes