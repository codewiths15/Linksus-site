import React, { useState } from "react";
import JobItem from "./JobItem";
import "./../../../styles/Freelancer/FindTask/JobDetail.css";

const jobDataArray = [
  {
    title: "Social Media Assistance",
    company: "Nomad",
    level: "Beginner Level",
    salary: "25,000",
    tags: ["Marketing", "Design"],
    applied: 5,
    capacity: 10,
  },
  {
    title: "Graphic Designer",
    company: "Pixel Perfect",
    level: "Intermediate Level",
    salary: "40,000",
    tags: ["Design", "Creativity"],
    applied: 7,
    capacity: 15,
  },
  {
    title: "Content Writer",
    company: "Wordsworth",
    level: "Beginner Level",
    salary: "30,000",
    tags: ["Writing", "Marketing"],
    applied: 3,
    capacity: 8,
  },
];

const JobDetail = () => {
  const [sortOption, setSortOption] = useState("Most relevant");

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="job-detail-section">
      <div className="header-section">
        <div className="header-section1">
          <h2>All Tasks</h2>
          <p>Showing {jobDataArray.length} results</p>
        </div>
        <div className="sort-section">
          <label htmlFor="sort-select">Sort by:</label>
          <select
            id="sort-select"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="Most relevant">Most relevant</option>
            <option value="Most recent">Most recent</option>
            <option value="Highest salary">Highest salary</option>
          </select>
        </div>
      </div>
      <div className="job-list">
        {jobDataArray.map((job, index) => (
          <JobItem key={index} {...job} />
        ))}
      </div>
    </div>
  );
};

export default JobDetail;
