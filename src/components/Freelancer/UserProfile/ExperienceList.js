import React from "react";
import Experience from "./Experience";
import "./../../../styles/Freelancer/UserProfile/ExperienceList.css";
import add from "./../../../assests/images/add.png";

function ExperienceList({ experiences }) {
  return (
    <div className="experience-list">
      <div className="experience-add">
        <h2>Experiences</h2>
        <img src={add} alt="" className="add" />
      </div>
      {experiences.map((experience, index) => (
        <Experience key={index} experience={experience} />
      ))}
      <div className="more-button">
        <button className="show-more">Show 3 more experiences</button>
      </div>
    </div>
  );
}

export default ExperienceList;
