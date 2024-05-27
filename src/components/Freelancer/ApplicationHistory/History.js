// src/components/Freelancer/ApplicationHistory/History.js

import React, { useState } from "react";
import Navigation from "../Sidebar/Navigation";
import HistorySection from "./HistorySection";
import "./../../../styles/Freelancer/ApplicationHistory/History.css";
import POW from "./../../../assests/images/pow.png"; // Make sure the path is correct
import Logo from "./../../../assests/images/company1.png"; // Add the path for the company logo
import Logo1 from "./../../../assests/images/company2.png"; // Add the path for the company logo


const data = [
  {
    logo: Logo,
    companyName: "Nomad",
    task: "Social Media Assistant",
    dateApplied: "24 July 2024",
    status: "In Review",
  },
  {
    logo: Logo,
    companyName: "Nomad",
    task: "Social Media Assistant",
    dateApplied: "24 July 2024",
    status: "Offered",
  },
  {
    logo: Logo1,
    companyName: "Nomad",
    task: "Social Media Assistant",
    dateApplied: "24 July 2024",
    status: "Offered",
  },
];

function History() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
      <div className="second-section">
        <div className="history-section">
          <p className="app-history">Application History</p>
          <button className="pow">
            <img src={POW} alt="POW Generator" />
            POW Generator
          </button>
        </div>
        <HistorySection data={data} />
      </div>
    </div>
  );
}

export default History;
