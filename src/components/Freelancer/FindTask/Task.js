// Task.js
import React, { useState } from 'react';
import Navigation from '../Sidebar/Navigation';
import "./../../../styles/Freelancer/FindTask/Task.css";
import search_main from "./../../../assests/images/search-main.png";
import Checkbox from './Checkbox';
import JobItem from './JobItem';
import JobDetail from './JobDetail';

function Task() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`main2 ${menuOpen ? 'menu-open' : ''}`}>
      <Navigation menuOpen={menuOpen} />
      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
        <span className="hamburger-icon"></span>
      </button>
      <div className="second-section">
        <div className="search">
          <img src={search_main} alt="" className='search1 search_logo' />
          <input type="text" placeholder='Task title or keyword' className='search1' />
          <button className='search1'>Search</button>
        </div>
        <div className="task-find">
          <div className="checkboxes">
            <Checkbox title="Categories" labels={["Design (24)", "Technology (3)", "Website/App (3)"]} />
            <Checkbox title="Task Level" labels={["Begginer level (57)", "Mid level (5)", "Pro level (20)"]} />
            <Checkbox title="Pay Range" labels={["0-5000 (20)", "5000-7000 (2)", "7000-10000 (17)"]} />
          </div>
          <div className="all-tasks">
            <JobDetail/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task;
