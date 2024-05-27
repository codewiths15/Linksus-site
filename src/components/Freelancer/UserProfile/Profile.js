import React, { useState } from "react";
import Navigation from "../Sidebar/Navigation";
import Profile11 from "./Profile11";
import Profile12 from "./Profile12";
import "./../../../styles/Freelancer/UserProfile/Profile.css";

function Profile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Dummy data, replace with actual data
  const profileData = {
    name: "Jake Gyll",
    position: "Product Designer at Twitter",
    location: "Manchester, UK",
    openForOpportunities: true,
    aboutMe:
      "I’m a product designer + filmmaker currently working remotely at Twitter from beautiful Manchester, United Kingdom. I’m passionate about designing digital products that have a positive impact on the world. For 10 years, I’ve specialised in interface, experience & interaction design as well as working in user research and product strategy for product agencies, big tech companies & start-ups."
  };

  return (
    <div className={`main2 ${menuOpen ? "menu-open" : ""}`}>
      <Navigation menuOpen={menuOpen} />
      <button
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <div className="second-section1">
        <div className="profile1">
          <Profile11 profileData={profileData} />
          <Profile12 profileData={profileData} />
        </div>
        <div className="profile2">ss</div>
      </div>
    </div>
  );
}

export default Profile;
