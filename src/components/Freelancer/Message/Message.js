import React from "react";
import UserList from "./UserList";
import "./../../../styles/Freelancer/Message/Message.css";

function Message() {
  return (
    <div className="message">
      <nav className="nav2">
        <ul className="list-mess">
          <li className="mess1">Task Manager</li>
          <li className="mess1">
            <p className="mess11">AI Assistant</p>
            <p className="mess12">Pro</p>
          </li>
          <li className="mess1">Mentor</li>
        </ul>
      </nav>
      <div className="main-message">
        <UserList/>
        <div className="user-messages">bbs</div>
      </div>
    </div>
  );
}

export default Message;
