import React from "react";
import "./../../../styles/Freelancer/Message/UserItem.css";

function UserItem({ user }) {
  return (
    <div className={`user-item ${user.isNew ? "new-message" : ""}`}>
      <img src={user.avatar} alt={user.name} className="user-avatar" />
      <div className="user-info">
        <div className="user-details">
          <p className="user-name">{user.name}</p>
          <p className="user-message">{user.message}</p>
        </div>
        <p className="message-time">{user.time}</p>
      </div>
    </div>
  );
}

export default UserItem;
