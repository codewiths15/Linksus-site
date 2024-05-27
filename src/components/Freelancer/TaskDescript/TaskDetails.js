// TaskDetails.js
import React from "react";
import "./../../../styles/Freelancer/TaskDescript/TaskDetails.css";
import managerPhoto from "./../../../assests/images/profile_image.png"; // Add your manager's photo here

function TaskDetails() {
  return (
    <div className="task-details">
      <h2>About this Task</h2>
      <div className="capacity">
        <span>
          <span className="fiveapplied">5 applied of </span>10 capacity
        </span>
        <div className="capacity-bar1">
          <div className="capacity-filled" style={{ width: "50%" }}></div>
        </div>
      </div>
      <div className="task-info">
        <p>
          <span className="label">Apply Before: </span>
          <span className="date">July 31, 2021</span>
        </p>
        <p>
          <span className="label">Task Posted On: </span>
          <span className="date">July 1, 2021</span>
        </p>
        <p>
          <span className="label">Stipend: </span>
          <span className="date">25,000/-</span>
        </p>
      </div>
      <div className="categories">
        <h3>Categories</h3>
        <span className="category">Marketing</span>
        <span className="category">Design</span>
      </div>
      <div className="required-skills">
        <h3>Required Skills</h3>
        <span className="skill">Project Management</span>
        <span className="skill">Copywriting</span>
        <span className="skill">Social Media Marketing</span>
        <span className="skill">Design</span>
        <span className="skill">Copy Editing</span>
      </div>
      <div className="task-manager">
        <h3>Task Manager</h3>
        <div className="manager-info">
          <img src={managerPhoto} alt="Manager" className="manager-photo" />
          <div className="manager-details">
            <p className="manager-name">Rushikesh Joshi</p>
            <button className="connect-button">+ Connect</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
