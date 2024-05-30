// SkillsSet.js
import React from "react";
import SkillsList from "./SkillsList";
import addIcon from "./../../../assests/images/add.png";
import editIcon from "./../../../assests/images/edit.png";
import "./../../../styles/Freelancer/UserProfile/SkillsSet.css";

function SkillsSet() {
  const skills = [
    "Project Management",
    "Copywriting",
    "Social Media Marketing",
    "Design",
    "Copy Editing"
  ];

  return (
    <div className="skills-set">
      <div className="skill1">
        <h3>Skills</h3>
        <div className="add-edit">
          <img src={addIcon} alt="Add Skill" />
          <img src={editIcon} alt="Edit Skill" />
        </div>
      </div>
      <SkillsList skills={skills} />
    </div>
  );
}

export default SkillsSet;
