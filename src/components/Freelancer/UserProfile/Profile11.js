import React from 'react';
import Logo from "./../../../assests/images/profile1.png";
import flag from "./../../../assests/images/flag.png";
import pin from "./../../../assests/images/loc-pin.png";
import "./../../../styles/Freelancer/UserProfile/Profile11.css";

function Profile11({ profileData }) {
  return (
    <div className="profile11">
      <img src={Logo} alt="" className="profile-photo" />
      <div className="profile-basic">
        <p className="name align">{profileData.name}</p>
        <p className="position align">
          {profileData.position.replace("at", "at ")}{" "}
          <span className="position2">Twitter</span>
        </p>
        <p className="loc align">
          <img src={pin} alt="" className="loc-pin" />
          <p>{profileData.location}</p>
        </p>
        <div className="openfor">
          <img src={flag} alt="" className="flag" />
          <p>{profileData.openForOpportunities ? "OPEN FOR OPPORTUNITIES" : "NOT OPEN FOR OPPORTUNITIES"}</p>
        </div>
      </div>
      <button className="edit">Edit profile</button>
    </div>
  );
}

export default Profile11;
