import React from 'react'
import Land from './paginas/Land'
import Medico from './paginas/Medico'
import Paciente from './paginas/Paciente'
import { BrowserRouter, Route } from 'react-router-dom'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Land} />
            <Route path="/medico" exact component={Medico} />
            <Route path="/paciente" exact component={Paciente} />
        </BrowserRouter>
    )
}

export default Routes