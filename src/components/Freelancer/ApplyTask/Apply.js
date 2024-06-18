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
    <>
      <div className="apply-section">
        <TitleLogo />
        <div className="form-wrapper">
          <ApplicationForm />
        </div>
      </div>
    </>
  );
}

export default Apply;
