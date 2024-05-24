// Checkbox.js
import React, { useState } from "react";
import Checkitem from "./Checkitem";
import "./../../../styles/Freelancer/FindTask/Checkbox.css";


const Checkbox = ({ title, labels }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="checkbox-section">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <button className="dropdown-button">{isOpen ? "▲" : "▼"}</button>
      </div>
      <div className={`checkbox-container ${isOpen ? "open" : ""}`}>
        {labels.map((label, index) => (
          <Checkitem key={index} label={label} />
        ))}
      </div>
    </div>
  );
};

export default Checkbox;
