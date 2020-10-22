import React from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Paciente from './components/Paciente'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/paciente' component={Paciente} exact />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
