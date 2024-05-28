import React from "react";
import "./../../../styles/Freelancer/Userauth/Login.css";
import Header from "./Header";
import Title from "./Title";
import Middle from "./Middle";
import Bluebutton from "./Bluebutton";
import Last from "./Last";
function Login() {
  return (
    <div className="main4">
      <Header />
      <Title title="Welcome back" />
      <Middle text="Login with Google" text2="Or login with email" />
      <div className="inputs">
        <div className="input1">
          <p>Email Address</p>
          <input
            type="text"
            placeholder="Enter email address"
            autocomplete="new-password"
          />
        </div>
        <div className="input1">
          <p>Password</p>
          <input type="password" placeholder="Enter password" />
        </div>
      </div>
      <div className="remember">
        <input
          type="checkbox"
          id="checkbox"
          name="checkbox"
          class="custom-checkbox"
        />
        <span class="checkmark"></span>
        <label for="checkbox">Remember me</label>
      </div>
      <Bluebutton text="Login" />

      <Last text="Don't have an account? " text1="Sign Up" />
    </div>
  );
}

export default Login;
