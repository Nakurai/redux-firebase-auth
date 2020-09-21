import React from "react";
import "../css/Banner.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Banner() {
  const appStore = useSelector((state) => state.app);
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home of {appStore.appName}</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Banner;
