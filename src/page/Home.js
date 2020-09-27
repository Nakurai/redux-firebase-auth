import React from "react";
import "../css/Home.css";
import { useSelector, useDispatch } from "react-redux";
import actions from "../state-manager/redux-actions";

function Home() {
  const dispatch = useDispatch();
  const appStore = useSelector((state) => state.app);
  const magicStore = useSelector((state) => state.magic);
  const changeAppName = () => {
    dispatch(actions.app.changeName());
  };
  const sortingHat = () => {
    dispatch(actions.magic.sortingHat());
  };
  return (
    <div className="Home">
      This is the Home component <br />
      App name is: {appStore.appName} <br />
      <button onClick={changeAppName}>change name app</button>
      <hr />
      My sorting house is: <b>{magicStore.house}</b> <br />
      <button onClick={sortingHat}>find my house</button>
    </div>
  );
}

export default Home;
