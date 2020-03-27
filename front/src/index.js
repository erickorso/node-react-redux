import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import User from './components/User';
import Bank from './components/Bank';
import Log from './components/Log';
import Navigation from './components/Navigation';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <Bank />
        </Route>
        <Route path="/log" exact>
          <Log />
        </Route>
        <Route path="/user" exact>
          <User />
        </Route>
        <Route path="/anime" exact>
          <App />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);

