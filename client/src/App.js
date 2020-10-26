import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Paciente from './components/Paciente/Paciente'
import Home from './components/Home.jsx'
import NavBar from './components/NavBar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path='/paciente' component={Paciente} exact />
          <Route path='/' component={Home} exact />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
