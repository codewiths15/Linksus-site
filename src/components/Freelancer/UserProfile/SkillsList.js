// SkillsList.js
import React from "react";
import "./../../../styles/Freelancer/UserProfile/SkillsList.css";

function SkillsList({ skills }) {
  return (
    <div className="skill-list">
      {skills.map((skill, index) => (
        <span key={index} className="skill2">{skill}</span>
      ))}
    </div>
  );
}

export default SkillsList;
