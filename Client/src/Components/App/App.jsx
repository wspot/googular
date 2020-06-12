import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './../Home/Home';
import InstallingBootstrap from './../InstallingBootstrap/Installingbootstrap';
import InstalingMui from './../InstallingMui/InstallingMui';
import UsingHttp from './../UsingHttp/UsingHttp';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/usinghttp">
          <UsingHttp />
        </Route>

        <Route path="/installingmaterialui">
          <InstalingMui />
        </Route>

        <Route path="/installingBootstrap">
          <InstallingBootstrap />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
