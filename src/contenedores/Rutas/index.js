import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProgramaPagina from '../ProgramaPagina';
import SucursalesPagina from '../SucursalesPagina';

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route component={ProgramaPagina} exact={true} path='/programax' />
        <Route component={SucursalesPagina} exact={true} path='/sucursales' />
      </Switch>
    </Router>
  );
};

export default Rutas;
