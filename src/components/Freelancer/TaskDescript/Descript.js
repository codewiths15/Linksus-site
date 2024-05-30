import React, { useState } from "react";
import Navigation from "../Sidebar/Navigation";
import "./../../../styles/Freelancer/TaskDescript/Descript.css";
import JobItem from "./JobItem";
import Logo from "./../../../assests/images/company2.png";
import JobDescription from "./JobDescription";
import TaskDetails from "./TaskDetails";

function Descript() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // This will be same as the schema in the database for the task
  const jobs = [
    {
      title: "Social Media Assistance",
      company: "Stripe",
      location: "Paris, France",
      type: "Full-Time",
      logo: Logo,
      description:
        "Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.",
      responsibilities: [
        "Community engagement to ensure that is supported and actually represented online",
        "Focus on social media content development and publication",
        "Marketing and strategy support",
        "Stay on top of trends on social media platforms, and suggest content ideas to the team",
        "Engage with online communities",
      ],
      whoYouAre: [
        "You get energy from people and building the ideal work environment",
        "You have a sense for beautiful spaces and office experiences",
        "You are a confident office manager, ready for added responsibilities",
        "You're detail-oriented and creative",
        "You're a growth marketer and know how to run campaigns",
      ],
      niceToHaves: [
        "Fluent in English",
        "Project management skills",
        "Copy editing skills",
      ],
    },
    // Add more job objects here if needed
  ];

  return (
    <>
      {jobs.map((job, index) => (
        <JobItem key={index} job={job} />
      ))}
      <div className="task-brief">
        <div className="des">
          <JobDescription
            description={jobs[0].description}
            responsibilities={jobs[0].responsibilities}
            whoYouAre={jobs[0].whoYouAre}
            niceToHaves={jobs[0].niceToHaves}
          />
        </div>
        <div className="about1">
          <TaskDetails />
        </div>
      </div>
    </>
  );
}

export default Descript;
