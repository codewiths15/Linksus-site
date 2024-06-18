import React from "react";
import "./../../../styles/Freelancer/FindTask/Checkbox.css";

function Checkitem({label}) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" id="checkbox" className="styled-checkbox" />
      <label htmlFor="checkbox" className="check-label">{label}</label>
    </div>
  );
}

export default Checkitem;
