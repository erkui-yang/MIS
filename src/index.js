import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, HashRouter } from "react-router-dom";
import './index.css';
import Mis from './Mis';
import Menage from "./Menage";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Mis} />
      <Route path="/menage" component={Menage} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
