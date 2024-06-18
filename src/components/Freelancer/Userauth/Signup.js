import React, { useState } from "react";
import "./../../../styles/Freelancer/Userauth/Login.css";
import Header from "./Header";
import Title from "./Title";
import Middle from "./Middle";
import Bluebutton from "./Bluebutton";
import Last from "./Last";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="main4">
      <Header />
      <Title title="Get more opportunities " />
      <Middle text="Sign Up with Google" text2="Or sign up with email" />
      <div className="inputs">
        <div className="input1">
          <p>Email Address</p>
          <input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter email address"
            autocomplete="new-password"
          />
        </div>
        <div className="input1">
          <p>Password</p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter password"
          />
        </div>
      </div>
      <Bluebutton text="Continue" />
      <Last text="Already have an account? " text1="Login" />
    </div>
  );
}

export default Signup;
