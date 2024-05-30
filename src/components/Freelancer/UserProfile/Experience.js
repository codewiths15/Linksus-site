import React from "react";
import "./../../../styles/Freelancer/UserProfile/Experience.css";
import Logo from "./../../../assests/images/company1.png";


function Experience({ experience }) {
  return (
    <div className="experience">
      <img src={experience.logo} alt={`${experience.company} logo`} className="experience-logo" />
      <div className="experience-details">
        <div className="experience-title-container">
          <h3 className="experience-title">{experience.title}</h3>
          <img src={experience.editIcon} alt="Edit Experience" className="edit-icon" />
        </div>
        <p className="experience-company">{experience.company}</p>
        <p className="experience-location">{experience.location}</p>
        <p className="experience-description">{experience.description}</p>
      </div>
    </div>
  );
}

export default Experience;
