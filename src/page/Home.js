import React from "react";
import "../css/Home.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "../state-manager/redux-actions";

function Home() {
  const dispatch = useDispatch();
  const appStore = useSelector((state) => state.app);
  const changeAppName = () => {
    dispatch(actions.app.changeName());
  };
  return (
    <div className="Home">
      This is the Home component <br />
      App name is: {appStore.appName} <br />
      <button onClick={changeAppName}>change name app</button>
    </div>
  );
}

export default Home;
