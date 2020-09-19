import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./component/Banner";
import Home from "./page/Home";
import Signin from "./page/Signin";

function App() {
  return (
    <Router>
      <div>
        <Banner />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
