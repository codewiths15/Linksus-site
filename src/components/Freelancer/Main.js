import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import History from "./ApplicationHistory/History";
import Apply from "./ApplyTask/Apply";
import Task from "./FindTask/Task";
import Descript from "./TaskDescript/Descript";
import Profile from "./UserProfile/Profile";
import Navigation from "./Sidebar/Navigation";
// import "./../../../styles/Freelancer/Sidebar/Navigation.css"; // Make sure to import the styles

function Main() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className={`main2 ${menuOpen ? "menu-open" : ""}`}>
        <Navigation menuOpen={menuOpen} />
        <button
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
          <span className="hamburger-icon"></span>
        </button>
        <div className="second-section">
          <Routes>
            <Route path="/history" element={<History />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/task" element={<Task />} />
            <Route path="/descript" element={<Descript />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Task />} /> {/* Default Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;
