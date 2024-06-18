import React from "react";
import edit from "./../../../assests/images/edit.png";
import "./../../../styles/Freelancer/UserProfile/Profile12.css";

function Profile12({ profileData }) {
  return (
    <div className="profile12">
      <div className="about">
        <p>About Me</p>
        <img src={edit} alt="" />
      </div>
      <p className="about-me">{profileData.aboutMe}</p>
    </div>
  );
}

export default Profile12;
