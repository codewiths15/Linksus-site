import React from 'react';
import "./../../../styles/Company/Applicants/ApplicantsList.css";
import { GoDotFill } from "react-icons/go";
import { SlOptions } from "react-icons/sl";
import ApplicantProfile from './ApplicantProfile';

const ApplicantsList = ({ title, accentColor, applicants, updateApplicantCategory }) => {
  return (
    <div className='al-container'>
      <div className='al-title-container' style={{ borderTopWidth: 2, borderTopColor: `${accentColor}` }}>
        <GoDotFill size={20} color={accentColor} />
        <p>{title}</p>
        <p className='al-p-highlight'>{applicants.length}</p>
        <SlOptions size={20} />
      </div>
      <div className='al-content-container'>
        {applicants.map((applicant, index) => (
          <ApplicantProfile
            key={index}
            name={applicant.name}
            profileLink={applicant.profileLink}
            appliedOn={new Date(applicant.appliedOn).toLocaleDateString()}
            score={applicant.score.toString()}
            pfp={applicant.profileImageLink}
            currentCategory={applicant.category}
            updateApplicantCategory={updateApplicantCategory}
            email = {applicant.email}
          />
        ))}
      </div>
    </div>
  );
};

export default ApplicantsList;
