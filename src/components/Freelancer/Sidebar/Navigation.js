import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
  { image: dashboard, text: "Dashboard", path: "/dashboard" },
  { image: messages, text: "Messages", path: "/messages" },
  { image: application, text: "My Applications", path: "/history" },
  { image: search, text: "Find Tasks", path: "/task" },
  { image: profile, text: "My Public Profile", path: "/profile" },
];

function Navigation({ menuOpen }) {
  const [selectedPath, setSelectedPath] = useState('/dashboard');

  const handleNavItemClick = (path) => {
    setSelectedPath(path);
  };

  return (
    <div className={`nav1 ${menuOpen ? 'open' : ''}`}>
      <div className="nav-info">
        <img src={Logo} alt="LinksUs Logo" className="logo" />
        <div className="nav-li">
          <ul className="nav-li-info">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                image={item.image}
                text={item.text}
                path={item.path}
                isSelected={selectedPath === item.path}
                onClick={() => handleNavItemClick(item.path)}
              />
            ))}
          </ul>
        </div>
      </div>
      <div className="nav-li">
        <p className="setting">SETTINGS</p>
        <ul className="setting-nav">
          <li>
            <img src={settings} alt="Settings" width={20} />
            <p>Settings</p>
          </li>
          <li>
            <img src={help} alt="Help center" width={20} />
            <p>Help center</p>
          </li>
        </ul>
      </div>
      <div className="nav-li profile">
        <img src={profile_image} alt="Profile" className="profile-img" />
        <div className="profile-detail">
          <p className="name12">Jake Rayll</p>
          <p className="email1">jake@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
