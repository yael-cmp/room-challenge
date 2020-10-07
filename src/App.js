import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' >
            <Home/>
          </Route>
          <Route exact path='/about' >
            <div>hola mundo</div>
          </Route>
          <Route>
            <div>404 :b</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
