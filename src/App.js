import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
