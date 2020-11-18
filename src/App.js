import React, { useEffect } from "react";
import "./css/App.css";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Banner from "./component/Banner";
import Home from "./page/Home";
import Signin from "./page/Signin";
import actions from "./state-manager/redux-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.auth.onAuthChanged());
  }, []);
  const authData = useSelector((state) => state.auth.data);
  return (
    <Router>
      <div>
        <Banner />
        <Switch>
          <Route path="/home">{authData ? <Home /> : <Signin />}</Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">{authData ? <Home /> : <Signin />}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
