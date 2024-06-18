import React from "react";
import UserItem from "./UserItem";
import "./../../../styles/Freelancer/Message/UserList.css";
import Logo from "./../../../assests/images/profile1.png";


const users = [
  {
    name: "Jan Mayer",
    message: "We want to invite you for a qui...",
    time: "12 mins ago",
    avatar: {Logo},
    isNew: true
  },
  {
    name: "Joe Bartmann",
    message: "Hey thanks for your interview...",
    time: "3:40 PM",
    avatar: {Logo},
    isNew: false
  },
  // Add more users as needed
];

function UserList() {
  return (
    <div className="users-list">
      <input type="text" placeholder="Search messages" className="search-input" />
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}

export default UserList;
