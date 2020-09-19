import React from "react";
import "../css/Banner.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Banner;
