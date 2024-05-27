import React from "react";
import "./../../../styles/Freelancer/TaskDescript/JobDescription.css";

const JobDescription = ({ description, responsibilities, whoYouAre, niceToHaves }) => {
  return (
    <div className="job-description">
      <h3>Description</h3>
      <p>{description}</p>
      
      <h3>Responsibilities</h3>
      <ul>
        {responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3>Who You Are</h3>
      <ul>
        {whoYouAre.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <h3>Nice-To-Haves</h3>
      <ul>
        {niceToHaves.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default JobDescription;
