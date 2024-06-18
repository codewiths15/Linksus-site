// JobItem.js
import React from "react";
import "./../../../styles/Freelancer/FindTask/JobItem.css";
import company1 from "./../../../assests/images/company1.png";

const JobItem = ({
  title,
  company,
  level,
  salary,
  tags,
  applied,
  capacity,
}) => {
  const appliedPercentage = (applied / capacity) * 100;

  return (
    <div className="job-item1">
      <div className="job-info">
        <div className="job-header1">
          <img src={company1} alt="Company Logo" className="company-logo" />
          <div className="job-details1">
            <h3 className="job-title1">{title}</h3>
            <p className="job-company1">
              {company} · {level}
            </p>
          </div>
        </div>
        <div className="job-tags">
          <span className="salary">{salary}</span>
          {tags.map((tag) => (
            <span key={tag} className={`tag ${tag.toLowerCase()}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="apply-section1">
        <button className="apply-button">Apply</button>
        <div className="capacity-bar">
          <div
            className="applied-bar"
            style={{ width: `${appliedPercentage}%` }}
          ></div>
        </div>
        <p className="capacity-text">
          {applied} applied of {capacity} capacity
        </p>
      </div>
    </div>
  );
};

export default JobItem;
