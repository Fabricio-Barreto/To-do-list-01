import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./components/Card";
import Todo from "./pages/Todo";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Card} />
        <Route path="/todo" component={Todo} />
      </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);