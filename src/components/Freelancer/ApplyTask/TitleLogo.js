import React from "react";
import Logo from "./../../../assests/images/company2.png"; // Make sure the path is correct

const TitleLogo = () => {
  return (
    <div className="title-logo">
      <img src={Logo} alt="Company Logo" className="company-logo" />
      <div className="title-info">
        <h1 className="job-title">Social Media Assistant</h1>
        <p className="job-location">Nomad • 25,000/-</p>
      </div>
      <button className="follow-button2">+ Follow</button>
    </div>
  );
};

export default TitleLogo;
