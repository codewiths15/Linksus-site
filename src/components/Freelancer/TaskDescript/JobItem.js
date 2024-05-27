import React from 'react';
import "./../../../styles/Freelancer/TaskDescript/Descript.css";
import share from "./../../../assests/images/share.png"; // Update path as needed

const JobItem = ({ job }) => {
  return (
    <div className="job-item">
      <div className="job-header">
        <img src={job.logo} alt="Company Logo" className="company-logo" />
        <div className="job-details">
          <h2 className="job-title">{job.title}</h2>
          <p className="job-company">
            {job.company} · {job.location} · {job.type}
          </p>
        </div>
      </div>
      <div className="job-actions">
        <button className="follow-button">+ Follow</button>
        <button className="share-button">
          <img src={share} alt="Share" className="share-image" />
        </button>
        <button className="apply-button1">Apply</button>
      </div>
    </div>
  );
};

export default JobItem;
