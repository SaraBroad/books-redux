import React from "react";
import { render } from "react-dom";
import { Router } from "react-router-dom";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import configureStore, { history } from './redux/store/store'
import { Provider as ReduxProvider } from "react-redux";

const store = configureStore();

render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </ReduxProvider>,
  document.getElementById("app")
);