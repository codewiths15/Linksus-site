import React from "react";
import "./../../../styles/Freelancer/Userauth/Login.css";
import Header from "./Header";
import Title from "./Title";
import Middle from "./Middle";
import Bluebutton from "./Bluebutton";
import Last from "./Last";

function Signup() {
  return (
    <div className="main">
     <Header/>
     <Title title="Get more opportunities "/>
     <Middle text="Sign Up with Google" text2="Or sign up with email"/>
      <div className="inputs">
        <div className="input1">
          <p>Full name</p>
          <input type="text" placeholder="Enter your full name" autocomplete="new-password" />
        </div>
        <div className="input1">
          <p>Email Address</p>
          <input type="text" placeholder="Enter email address" autocomplete="new-password"/>
        </div>
        <div className="input1">
          <p>Password</p>
          <input type="password" placeholder="Enter password" />
        </div>
      </div>
      <Bluebutton text="Continue"/>
      <Last text="Already have an account? " text1="Login"/>
    </div>
  );
}

export default Signup;
