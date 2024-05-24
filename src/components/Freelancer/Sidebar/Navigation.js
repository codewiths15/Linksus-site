// Navigation.js
import React from 'react';
import "./../../../styles/Freelancer/Sidebar/Navigation.css";
import Logo from "./../../../assests/images/LinksUs Logo.png";
import application from "./../../../assests/images/application.png";
import dashboard from "./../../../assests/images/dashboard.png";
import help from "./../../../assests/images/help.png";
import messages from "./../../../assests/images/messages.png";
import profile from "./../../../assests/images/profile.png";
import search from "./../../../assests/images/search.png";
import settings from "./../../../assests/images/settings.png";
import profile_image from "./../../../assests/images/profile_image.png";
import NavItem from "./NavItem";

const navItems = [
  { image: dashboard, text: "Dashboard" },
  { image: messages, text: "Messages" },
  { image: application, text: "My Applications" },
  { image: search, text: "Find Tasks" },
  { image: profile, text: "My Public Profile" },
];

function Navigation({ menuOpen }) {
  return (
    <div className={`nav1 ${menuOpen ? 'open' : ''}`}>
      <div className="nav-info">
        <img src={Logo} alt="LinksUs Logo" className="logo" />
        <div className="nav-li">
          <ul className="nav-li-info">
            {navItems.map((item, index) => (
              <NavItem key={index} image={item.image} text={item.text} />
            ))}
          </ul>
        </div>
      </div>
      <div className="nav-li">
        <p className="setting">SETTINGS</p>
        <ul className="nav-li-info setting-nav">
          <li>
            <img src={settings} alt="" width={20} />
            <p>Settings</p>
          </li>
          <li>
            <img src={help} alt="" width={20} />
            <p>Help center</p>
          </li>
        </ul>
      </div>
      <div className="nav-li profile">
        <img src={profile_image} alt="" className="profile-img" />
        <div className="profile-detail">
          <p className="name">Jake Rayll</p>
          <p className="email1">jake@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
