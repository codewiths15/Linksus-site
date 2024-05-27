import React, { useState } from "react";
import Navigation from "../Sidebar/Navigation";
import "./../../../styles/Freelancer/ApplyTask/Apply.css";
import TitleLogo from "./TitleLogo";
import ApplicationForm from "./ApplicationForm";

function Apply() {
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
        <div className="apply-section">
          <TitleLogo />
          <div className="form-wrapper">
            <ApplicationForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Apply;
