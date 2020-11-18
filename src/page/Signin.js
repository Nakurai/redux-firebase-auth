import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../css/Signin.css";
import actions from "../state-manager/redux-actions";

function Signin() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formField, setFormField] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  async function onSubmit(e) {
    try {
      e.preventDefault();
      e.stopPropagation();
      console.log("signup ", formField);
      if (formField.email && formField.password) {
        await dispatch(
          actions.auth.signin(formField.email, formField.password)
        );
        history.push("/home");
      }
    } catch (error) {
      setError(error.message);
    }
  }
  function onFieldChange(e) {
    setFormField({ ...formField, [e.target.name]: e.target.value });
  }
  return (
    <div className="Signin">
      <form onSubmit={onSubmit}>
        Email: <br />
        <input
          type="email"
          name="email"
          value={formField.email}
          onChange={onFieldChange}
        />
        <br />
        Password: <br />
        <input
          type="password"
          name="password"
          value={formField.password}
          onChange={onFieldChange}
        />
        <br />
        <input type="submit" value="Signin" />
      </form>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

export default Signin;
