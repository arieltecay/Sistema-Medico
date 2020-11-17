import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Paciente from './components/Paciente/Paciente'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar'
import EditPaciente from './components/EditPaciente/EditPaciente'
import UpdateOK from './components/UpdateOK'
import Prueba from './components/Prueba/prueba'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/paciente' component={Paciente} exact />
          <Route path='/' component={Home} exact />
          <Route path='/prueba' component={Prueba} exact />
          <Route path='/paciente/:id' component={EditPaciente} exact />
          <Route path='/updateOk' component={UpdateOK} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
