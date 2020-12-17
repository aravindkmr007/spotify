import React from "react";
import { loginURL } from "../spotify";
import "./Login.css";

function Login() {

  return (
    <div className="Login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
