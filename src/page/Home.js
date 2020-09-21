import React from "react";
import "../css/Home.css";
import { useSelector } from "react-redux";

function Home() {
  const appStore = useSelector((state) => state.app);
  return (
    <div className="Home">
      App name is: {appStore.appName} <br />
      This is the Home component
    </div>
  );
}

export default Home;
